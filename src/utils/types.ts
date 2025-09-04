import type { InferEntrySchema, RenderedContent } from "astro:content";

export interface NavigationItem {
  title: string;
  url: string;
}

export interface PageTitleOptions {
  heading: string;
  subheading?: string;
  image: {
    isShown: boolean;
    name?: "index" | "music";
    alt?: string;
  };
  datePublished?: string;
}

export interface Post {
  id: string;
  body?: string;
  collection: "posts";
  data: InferEntrySchema<"posts">;
  rendered?: RenderedContent;
  filePath?: string;
}

export interface Page {
  id: string;
  body?: string;
  collection: "pages";
  data: InferEntrySchema<"pages">;
  rendered?: RenderedContent;
  filePath?: string;
}

export interface Album {
  id: string;
  body?: string;
  collection: "albums";
  data: InferEntrySchema<"albums">;
  rendered?: RenderedContent;
  filePath?: string;
}

export interface Book {
  id: string;
  body?: string;
  collection: "books";
  data: InferEntrySchema<"books">;
  rendered?: RenderedContent;
  filePath?: string;
}

export interface ReadingArchive {
  id: string;
  body?: string;
  collection: "readingArchive";
  data: InferEntrySchema<"readingArchive">;
  rendered?: RenderedContent;
  filePath?: string;
}

export interface Illustration {
  id: string;
  body?: string;
  collection: "illustrations";
  data: InferEntrySchema<"illustrations">;
  rendered?: RenderedContent;
  filePath?: string;
}
