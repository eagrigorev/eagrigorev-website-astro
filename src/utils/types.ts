import type {
  CollectionEntry,
  InferEntrySchema,
  RenderedContent,
} from "astro:content";

export interface NavigationItem {
  title: string;
  url: string;
}

export type Post = CollectionEntry<"posts">;
export type Page = CollectionEntry<"pages">;

export interface Topic {
  id: string;
  body?: string;
  collection: "topics";
  data: InferEntrySchema<"topics">;
  rendered?: RenderedContent;
  filePath?: string;
}
