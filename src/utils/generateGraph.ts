import { getCollection } from "astro:content";
import fs from "fs";
import path from "path";
import type { Post, PostLinkGraph } from "@utils/types";
import { mapPostToPostLink } from "@utils/scripts";

export async function getGardenGraph(): Promise<{
  backlinksMap: PostLinkGraph;
}> {
  const posts: Post[] = await getCollection(
    "posts",
    ({ data }) => !data.isDraft,
  );
  const backlinksMap: PostLinkGraph = {};

  // Initialize map keys using frontmatter slugs
  posts.forEach((post: Post) => {
    if (post.data.slug) {
      backlinksMap[post.data.slug] = [];
    }
  });

  // A very flexible regex that extracts anything inside (/your-slug)
  // following a markdown bracket closure component
  const linkRegex = /\]\(\/([a-zA-Z0-9-_\/]+)\)/g;

  // Track the absolute root path to your content directory
  const contentDir = path.resolve("./src/content/posts");

  posts.forEach((post: Post) => {
    let rawContent = "";

    // 1. Fallback to reading the file directly from disk if note.body is empty
    try {
      // Astro content layer notes provide an internal path reference via note.filePath
      // If that's missing, we manually map to your nested index file bundle structure
      const filePath = post.filePath
        ? path.resolve(post.filePath)
        : path.join(contentDir, post.id, "index.mdx");

      if (fs.existsSync(filePath)) {
        rawContent = fs.readFileSync(filePath, "utf-8");
      }
    } catch (e) {
      console.error(
        `[Garden Graph] Could not read file path directly for: ${post.id}`,
        e,
      );
      rawContent = post.body || ""; // last resort fallback
    }

    let match: RegExpExecArray | null;
    // 2. This while loop will absolutely execute now because rawContent contains strings!
    while ((match = linkRegex.exec(rawContent)) !== null) {
      const urlSlug = match[1].trim();

      console.log(
        `[Garden Graph Logger] Success! Found link to "/${urlSlug}" inside file: "${post.id}"`,
      );

      const targetPost: Post | undefined = posts.find(
        (post: Post) => post.data.slug === urlSlug,
      );

      if (targetPost && backlinksMap[urlSlug]) {
        if (!backlinksMap[urlSlug].some((b) => b.slug === post.data.slug)) {
          backlinksMap[urlSlug].push(mapPostToPostLink(post, "mention"));
        }
      }
    }
  });

  return { backlinksMap };
}
