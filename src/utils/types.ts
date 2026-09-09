import type { CollectionEntry } from "astro:content";
import { CATEGORIES } from "@utils/const";

export type PostCategory = (typeof CATEGORIES)[number];

export interface NavigationItem {
  name: string;
  url: string;
}

export type Post = CollectionEntry<"posts">;
export type PostLinkGraph = Record<string, Post[]>;
