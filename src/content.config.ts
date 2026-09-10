import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";
import { CATEGORIES } from "@utils/const";

const posts = defineCollection({
  loader: glob({ pattern: "**/index.{md,mdx}", base: "./src/content/posts" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      slug: z.string(),
      date: z.date(),
      category: z.enum(CATEGORIES),
      tags: z.array(z.string()).default([]),
      description: z.string(),
      featuredImage: z.object({
        url: image(),
        alt: z.string(),
      }),
      isDraft: z.boolean().default(false),
    }),
});

const pages = defineCollection({
  loader: glob({ pattern: "**/index.{md,mdx}", base: "./src/content/pages" }),
  schema: () =>
    z.object({
      title: z.string(),
      slug: z.string(),
      date: z.date(),
      isDraft: z.boolean().default(false),
    }),
});

export const collections = {
  posts,
  pages,
};
