import { file, glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const posts = defineCollection({
  loader: glob({
    pattern: "**/*.{md,mdx}",
    base: "./src/content/posts/",
  }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      datePublished: z.string(),
      tags: z.array(z.string()),
      options: z
        .object({
          featuredImage: z
            .object({
              url: image(),
              alt: z.string(),
            })
            .optional(),
          archiveSubtitle: z.string().optional(),
          excerpt: z.string().optional(),
          hideTitle: z.boolean().optional(),
        })
        .optional(),
    }),
});

const pages = defineCollection({
  loader: glob({
    pattern: "**/*.{md,mdx}",
    base: "./src/content/pages/",
  }),
  schema: () =>
    z.object({
      title: z.string(),
      datePublished: z.string(),
    }),
});

const topics = defineCollection({
  loader: file("src/data/topics.json"),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
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
