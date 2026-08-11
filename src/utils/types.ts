import type { CollectionEntry } from "astro:content";

export const postCategories = [
  "illustrations",
  "photography",
  "journal",
] as const;

export type PostCategory = (typeof postCategories)[number];

export interface BacklinkRef {
  slug: string;
  title: string;
  category: PostCategory;
  description: string;
}

export type Post = CollectionEntry<"posts">;
export type PostLinkGraph = Record<string, BacklinkRef[]>;
