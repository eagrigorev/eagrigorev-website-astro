import type { Album, Post, NavigationItem } from "@utils/types";

export const sortPostsDesc = (posts: Post[]): Post[] => {
  return posts.sort((prev: Post, next: Post) =>
    new Date(prev.data.datePublished) < new Date(next.data.datePublished)
      ? 1
      : -1,
  );
};

export const sortAlbumsDesc = (posts: Album[]): Album[] => {
  return posts.sort((prev: Album, next: Album) =>
    new Date(prev.data.datePublished) < new Date(next.data.datePublished)
      ? 1
      : -1,
  );
};

export const generateTagItem = (tag: string): NavigationItem => {
  return {
    title: tag,
    url: `${tag.toLowerCase().replaceAll(/ /g, "-").replaceAll("&", "and")}`,
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
