import { glob, file } from "astro/loaders";
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

const albums = defineCollection({
  loader: file("src/data/albums.json"),
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
  loader: file("src/data/books.json"),
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

const readingArchive = defineCollection({
  loader: glob({
    pattern: "**/*.{md,mdx}",
    base: "./src/content/reading-archive",
  }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    datePublished: z.coerce.date(),
  }),
});

export const collections = { posts, pages, albums, books, readingArchive };
