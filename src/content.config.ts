import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const posts = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      permalink: z.string(),
      date: z.string(),
      category: z.string(),
      featuredImage: z.object({
        url: image(),
        alt: z.string(),
      }),
    }),
});

export const collections = { posts };
