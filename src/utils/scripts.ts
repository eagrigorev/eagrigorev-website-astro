import type { Post, NavigationItem } from "@utils/types";

export const sortPostsDesc = (posts: Post[]): Post[] => {
  return posts.sort((prev: Post, next: Post) =>
    new Date(prev.data.datePublished) < new Date(next.data.datePublished)
      ? 1
      : -1,
  );
};

export const generateUrlFromTag = (tag: string): string => {
  return `${tag.toLowerCase().replaceAll(/ /g, "-").replaceAll("&", "and")}`;
};

export const generateUniqueTags = (posts: Post[]): NavigationItem[] => {
  const allTags: string[] = [];
  const uniqueTags: NavigationItem[] = [];
  posts.forEach((post: Post) => {
    post.data.tags.map((tag: string) => {
      allTags.push(tag);
    });
  });
  allTags
    .filter((tag: string, index: number) => allTags.indexOf(tag) === index)
    .map((tag: string) =>
      uniqueTags.push({
        title: tag,
        url: generateUrlFromTag(tag),
      }),
    );
  return uniqueTags;
};
