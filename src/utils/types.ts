import type { InferEntrySchema, RenderedContent } from "astro:content";

export interface NavigationItem {
  title: string;
  url: string;
}

export interface Content {
  id: string;
  body?: string;
  collection: "posts" | "albums";
  data: InferEntrySchema<"posts" | "albums">;
  rendered?: RenderedContent;
  filePath?: string;
}
