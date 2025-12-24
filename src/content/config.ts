import { defineCollection, z } from "astro:content";

const posts = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      subtitle: z.string(),
      permalink: z.string(),
      datePublished: z.string(),
      tags: z.array(z.string()),
      options: z.object({
        showTitle: z.boolean(),
        featuredImage: z
          .object({
            url: image(),
            alt: z.string(),
          })
          .optional(),
        excerpt: z.string().optional(),
      }),
    }),
});

const pages = defineCollection({
  type: "content",
  schema: () =>
    z.object({
      title: z.string(),
      subtitle: z.string().optional(),
      permalink: z.string(),
      datePublished: z.string(),
    }),
});

export const collections = {
  posts,
  pages,
};
