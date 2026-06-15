import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const posts = defineCollection({
  loader: glob({ pattern: "**/index.{md,mdx}", base: "./src/content/posts" }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    date: z.date(),
    category: z.enum(["illustrations", "photography", "journal"]),
    growthStage: z.enum(["seed", "sprout", "evergreen"]),
    featuredImage: z
      .object({
        url: z.string(),
        alt: z.string(),
      })
      .optional(),
    tags: z.array(z.string()).default([]),
    isDraft: z.boolean().default(false),
  }),
});

export const collections = {
  posts,
};
