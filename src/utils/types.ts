import type { InferEntrySchema, RenderedContent } from "astro:content";

export interface NavigationItem {
  title: string;
  url: string;
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

export interface Topic {
  id: string;
  body?: string;
  collection: "topics";
  data: InferEntrySchema<"topics">;
  rendered?: RenderedContent;
  filePath?: string;
}
