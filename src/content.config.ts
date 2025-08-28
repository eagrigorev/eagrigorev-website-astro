import { glob } from "astro/loaders";
import { z, defineCollection } from "astro:content";

const posts = defineCollection({
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

const pages = defineCollection({
  loader: glob({
    pattern: "**/*.{md,mdx}",
    base: "./src/content/pages",
  }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    datePublished: z.coerce.date(),
  }),
});

const music = defineCollection({
  loader: glob({
    pattern: "**/*.{md,mdx}",
    base: "./src/content/music",
  }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      externalLink: z.string(),
      datePublished: z.string(),
      image: z.object({
        url: image(),
        alt: z.string(),
      }),
    }),
});

const books = defineCollection({
  loader: glob({
    pattern: "**/*.{md,mdx}",
    base: "./src/content/books",
  }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      author: z.string(),
      externalLink: z.string(),
      dateRead: z.string(),
      image: z.object({
        url: image(),
        alt: z.string(),
      }),
    }),
});

export const collections = { posts, pages, music, books };
