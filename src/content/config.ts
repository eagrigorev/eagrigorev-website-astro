import { defineCollection, z } from "astro:content";

const posts = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.object({
        value: z.string(),
        isVisible: z.boolean(),
      }),
      subtitle: z.string().optional(),
      datePublished: z.string(),
      topicId: z.array(z.number()),
      tags: z.array(z.string()),
      featuredImage: z
        .object({
          url: image(),
          alt: z.string(),
        })
        .optional(),
      excerpt: z.string().optional(),
    }),
});

const pages = defineCollection({
  type: "content",
  schema: () =>
    z.object({
      title: z.string(),
      datePublished: z.string(),
    }),
});

const topics = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      id: z.number(),
      featuredImage: z.object({
        url: image(),
        alt: z.string(),
      }),
    }),
});

export const collections = {
  posts,
  pages,
  topics,
};
