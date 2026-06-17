import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";
import { growthStage, postCategories } from "@utils/types";

const posts = defineCollection({
  loader: glob({ pattern: "**/index.{md,mdx}", base: "./src/content/posts" }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    date: z.date(),
    category: z.enum(postCategories),
    description: z.string(),
    growthStage: z.enum(growthStage),
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
