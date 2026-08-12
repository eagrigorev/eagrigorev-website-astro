import { getCollection } from "astro:content";
import fs from "fs";
import path from "path";
import type { PostLink, PostLinkGraph } from "@utils/types";

export async function getGardenGraph(): Promise<{
  backlinksMap: PostLinkGraph;
}> {
  const notes = await getCollection("posts", ({ data }) => !data.isDraft);
  const backlinksMap: PostLinkGraph = {};

  // Initialize map keys using frontmatter slugs
  notes.forEach((note) => {
    if (note.data.slug) {
      backlinksMap[note.data.slug] = [];
    }
  });

  // A very flexible regex that extracts anything inside (/your-slug)
  // following a markdown bracket closure component
  const linkRegex = /\]\(\/([a-zA-Z0-9-_\/]+)\)/g;

  // Track the absolute root path to your content directory
  const contentDir = path.resolve("./src/content/posts");

  notes.forEach((note) => {
    let rawContent = "";

    // 1. Fallback to reading the file directly from disk if note.body is empty
    try {
      // Astro content layer notes provide an internal path reference via note.filePath
      // If that's missing, we manually map to your nested index file bundle structure
      const filePath = note.filePath
        ? path.resolve(note.filePath)
        : path.join(contentDir, note.id, "index.mdx");

      if (fs.existsSync(filePath)) {
        rawContent = fs.readFileSync(filePath, "utf-8");
      }
    } catch (e) {
      console.error(
        `[Garden Graph] Could not read file path directly for: ${note.id}`,
        e,
      );
      rawContent = note.body || ""; // last resort fallback
    }

    let match;
    // 2. This while loop will absolutely execute now because rawContent contains strings!
    while ((match = linkRegex.exec(rawContent)) !== null) {
      const urlSlug = match[1].trim();

      console.log(
        `[Garden Graph Logger] Success! Found link to "/${urlSlug}" inside file: "${note.id}"`,
      );

      const targetNote = notes.find((n) => n.data.slug === urlSlug);

      if (targetNote && backlinksMap[urlSlug]) {
        if (!backlinksMap[urlSlug].some((b) => b.slug === note.data.slug)) {
          backlinksMap[urlSlug].push({
            title: note.data.title,
            slug: note.data.slug,
            date: note.data.date,
            type: "mention",
          } as PostLink);
        }
      }
    }
  });

  return { backlinksMap };
}

// TODO: Add types
