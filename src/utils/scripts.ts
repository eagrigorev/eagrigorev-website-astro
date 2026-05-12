import type { CollectionEntry } from "astro:content";

export const formatDate = (date: string): string => {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

export const sortPostsDesc = (
  posts: CollectionEntry<"posts">[],
): CollectionEntry<"posts">[] => {
  return posts.sort(
    (prev: CollectionEntry<"posts">, next: CollectionEntry<"posts">) =>
      new Date(prev.data.date).getTime() < new Date(next.data.date).getTime()
        ? 1
        : -1,
  );
};
