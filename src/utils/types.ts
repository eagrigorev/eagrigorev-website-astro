import type { CollectionEntry } from "astro:content";

export interface NavigationItem {
  title: string;
  url: string;
}

export type Post = CollectionEntry<"posts">;
export type Page = CollectionEntry<"pages">;
export type Topic = CollectionEntry<"topics">;
