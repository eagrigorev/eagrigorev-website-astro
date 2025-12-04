import type { NavigationItem, Post } from "@utils/types";
import Heading2 from "@components/typography/Heading2.astro";
import Heading3 from "@components/typography/Heading3.astro";
import Link from "@components/typography/Link.astro";

export const sortPostsDesc = (posts: Post[]): Post[] => {
  return posts.sort((prev: Post, next: Post) =>
    new Date(prev.data.datePublished).getTime() <
    new Date(next.data.datePublished).getTime()
      ? 1
      : -1,
  );
};

export const formatDate = (date: string): string => {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

export const customTypography = {
  a: Link,
  h2: Heading2,
  h3: Heading3,
};

export const generateTagItem = (tag: string): NavigationItem => {
  return {
    title: tag,
    url: tag.toLowerCase().replaceAll(/ /g, "-").replaceAll("&", "and"),
  };
};

export const generateUniqueTags = (posts: Post[]): NavigationItem[] => {
  const allTags: string[] = [];
  posts.forEach((post: Post) => {
    post.data.tags.map((tag: string) => {
      allTags.push(tag);
    });
  });
  const uniqueTags: NavigationItem[] = [];
  allTags
    .filter((tag: string, index: number) => allTags.indexOf(tag) === index)
    .map((tag: string) => uniqueTags.push(generateTagItem(tag)));
  return uniqueTags;
};
