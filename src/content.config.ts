import { glob } from "astro/loaders";
import { z, defineCollection } from "astro:content";

const posts = defineCollection({
  loader: glob({
    pattern: "**/*.{md,mdx}",
    base: "./src/content/posts",
  }),
  schema: () =>
    z.object({
      title: z.object({
        value: z.string(),
        isHidden: z.boolean(),
      }),
      slug: z.string(),
      datePublished: z.string(),
      tags: z.array(z.string()),
      description: z.string(),
    }),
});

export const collections = {
  posts,
};
