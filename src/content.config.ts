import { glob } from "astro/loaders";
import { z, defineCollection } from "astro:content";

const journal = defineCollection({
  loader: glob({
    pattern: "**/*.{md,mdx}",
    base: "./src/content/posts",
  }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      slug: z.string(),
      datePublished: z.string(),
      excerpt: z.string(),
      image: z.object({
        url: image(),
        alt: z.string(),
      }),
      tags: z.array(z.string()),
    }),
});

export const collections = { journal };
