import fs from "fs";
import path from "path";
import type { Post, PostLinkGraph } from "@utils/types";
import { generateSlug } from "@scripts/common";
import { getSortedPosts } from "@scripts/getPosts";

export const generateGraph = async (): Promise<{
  backlinksMap: PostLinkGraph;
}> => {
  const posts: Post[] = await getSortedPosts();
  const backlinksMap: PostLinkGraph = {};

  // Initialize map keys using frontmatter slugs
  posts.forEach((post: Post) => {
    backlinksMap[post.data.slug] = [];
  });

  // A very flexible regex that extracts anything inside (/your-slug)
  // following a markdown bracket closure component
  const linkRegex = /\]\(\/([a-zA-Z0-9-_\/]+)\)/g;
  const contentDir = path.resolve("./src/content/posts");

  posts.forEach((post: Post) => {
    let rawContent = "";

    // 1. Fallback to reading the file directly from disk if note.body is empty
    // Astro content layer notes provide an internal path reference via note.filePath
    // If that's missing, we manually map to the nested index file bundle structure
    try {
      const filePath = post.filePath
        ? path.resolve(post.filePath)
        : path.join(contentDir, post.id, "index.mdx");

      if (fs.existsSync(filePath)) {
        rawContent = fs.readFileSync(filePath, "utf-8");
      }
    } catch (error) {
      console.error(
        `[Garden Graph] Could not read file path directly for: ${post.id}`,
        error,
      );
      rawContent = post.body || ""; // last resort fallback
    }
    let match: RegExpExecArray | null;

    // 2. This while loop will absolutely execute now because rawContent contains strings
    while ((match = linkRegex.exec(rawContent)) !== null) {
      const urlSlug = generateSlug(match[1]);
      console.log(
        `[Garden Graph Logger] Success! Found link to "/${urlSlug}" inside file: "${post.id}"`,
      );

      const targetPost: Post | undefined = posts.find(
        (post: Post) => post.data.slug === urlSlug,
      );

      if (targetPost && backlinksMap[urlSlug]) {
        if (
          !backlinksMap[urlSlug].some((b) => b.data.slug === post.data.slug)
        ) {
          backlinksMap[urlSlug].push(post);
        }
      }
    }
  });

  return { backlinksMap };
};
