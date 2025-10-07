import type { InferEntrySchema, RenderedContent } from "astro:content";

export interface NavigationItem {
  title: string;
  url: string;
}

export interface Content {
  id: string;
  body?: string;
  collection: "posts";
  data: InferEntrySchema<"posts">;
  rendered?: RenderedContent;
  filePath?: string;
}
