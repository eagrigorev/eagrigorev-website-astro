import type { Content } from "./types";

export const sortContentDesc = (posts: Content[]): Content[] => {
  return posts.sort((prev: Content, next: Content) =>
    new Date(prev.data.datePublished) < new Date(next.data.datePublished)
      ? 1
      : -1,
  );
};
