import type { CollectionEntry } from "astro:content";

export const postCategories = [
  "illustrations",
  "photography",
  "journal",
] as const;

export const growthStage = ["seed", "sprout", "evergreen"] as const;

export type PostCategory = (typeof postCategories)[number];

export type GrowthStage = (typeof growthStage)[number];

export interface BacklinkRef {
  slug: string;
  title: string;
  category: PostCategory;
  description: string;
}

export type Post = CollectionEntry<"posts">;
export type PostLinkGraph = Record<string, BacklinkRef[]>;
