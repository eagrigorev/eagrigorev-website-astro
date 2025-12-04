import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const posts = defineCollection({
  loader: glob({
    pattern: "**/*.{md,mdx}",
    base: "./src/content/posts/",
  }),
  schema: () =>
    z.object({
      title: z.object({
        value: z.string(),
        isHidden: z.boolean(),
      }),
      slug: z.string(),
      datePublished: z.string(),
      topic: z.string(),
      tags: z.array(z.string()),
      description: z.string(),
    }),
});

const pages = defineCollection({
  loader: glob({
    pattern: "**/*.{md,mdx}",
    base: "./src/content/pages",
  }),
  schema: () =>
    z.object({
      title: z.string(),
      slug: z.string(),
      datePublished: z.string(),
    }),
});

export const collections = {
  posts,
  pages,
};
