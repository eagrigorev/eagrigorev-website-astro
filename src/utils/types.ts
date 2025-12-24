import type { CollectionEntry } from "astro:content";

export interface NavigationItem {
  title: string;
  url: string;
}

export interface TagItem {
  title: string;
  url: string;
  count: number;
}

export type Post = CollectionEntry<"posts">;
export type Page = CollectionEntry<"pages">;
