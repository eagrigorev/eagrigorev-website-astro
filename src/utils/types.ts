import type { InferEntrySchema, RenderedContent } from "astro:content";

export interface NavigationItem {
  title: string;
  url: string;
}

export interface PageTitle {
  heading: string;
  subheading?: string | undefined;
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
  collection: "music";
  data: InferEntrySchema<"music">;
  rendered?: RenderedContent;
  filePath?: string;
}
