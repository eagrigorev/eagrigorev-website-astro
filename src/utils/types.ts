export const postCategories = [
  "illustrations",
  "photography",
  "journal",
] as const;

export const growthStage = ["seed", "sprout", "evergreen"] as const;

export type PostCategory = (typeof postCategories)[number];

export type GrowthStage = (typeof growthStage)[number];

export interface PostFrontmatter {
  title: string;
  slug: string;
  date: Date;
  category: PostCategory;
  description: string;
  growthStage: GrowthStage;
  featuredImage?: string;
  featuredImageAlt?: string;
  isDraft: boolean;
}

export interface BacklinkRef {
  slug: string;
  title: string;
  category: PostCategory;
  excerpt: string;
}

export type PostLinkGraph = Record<string, BacklinkRef[]>;
