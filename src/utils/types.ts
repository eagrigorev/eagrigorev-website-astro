import type { InferEntrySchema, RenderedContent } from "astro:content";

export interface NavigationItem {
  title: string;
  url: string;
}

export interface TopicItem {
  title: string;
  url: string;
  description: string;
}

export interface Post {
  id: string;
  body?: string;
  collection: "posts";
  data: InferEntrySchema<"posts">;
  rendered?: RenderedContent;
  filePath?: string;
}
