import { glob, file } from "astro/loaders";
import { z, defineCollection } from "astro:content";

const posts = defineCollection({
  loader: glob({
    pattern: "**/*.{md,mdx}",
    base: "./src/content/posts",
  }),
  schema: ({ image }) =>
    z.object({
      datePublished: z.string(),
      title: z.string(),
      slug: z.string(),
      tags: z.array(z.string()),
      featuredImage: z
        .object({
          url: image(),
          alt: z.string(),
        })
        .optional(),
      excerpt: z.string().optional(),
      options: z
        .object({
          hideTitle: z.boolean(),
        })
        .optional(),
    }),
});

export const collections = {
  posts,
};
