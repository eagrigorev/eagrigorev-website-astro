import type { CollectionEntry } from "astro:content";
import { CATEGORIES } from "@utils/const";

export type PostCategory = (typeof CATEGORIES)[number];

export interface NavigationItem {
  name: string;
  url: string;
}

export interface PostLink {
  title: string;
  slug: string;
  date: Date;
  type: "post" | "related" | "mention";
}

export type Post = CollectionEntry<"posts">;
export type PostLinkGraph = Record<string, PostLink[]>;
