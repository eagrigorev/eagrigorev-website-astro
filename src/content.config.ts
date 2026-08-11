import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";
import { postCategories } from "@utils/types";

const posts = defineCollection({
  loader: glob({ pattern: "**/index.{md,mdx}", base: "./src/content/posts" }),
  schema: ({ image }) =>
    z
      .object({
        title: z.string(),
        slug: z.string(),
        date: z.date(),
        category: z.enum(postCategories),
        tags: z.array(z.string()).default([]),
        description: z.string(),
        featuredImage: z
          .object({
            url: image(),
            alt: z.string(),
          })
          .optional(),
        isDraft: z.boolean().default(false),
        isFeatured: z.boolean().default(false),
      })
      .refine((data) => !data.isFeatured || data.featuredImage, {
        message: "Featured posts must include a featuredImage",
      }),
});

export const collections = {
  posts,
};
