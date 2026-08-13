import type { Post, PostLink } from "@utils/types";

export const generateSlug = (text: string): string => {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^\w\-]+/g, "")
    .replace(/\-\-+/g, "-")
    .replace(/^-+/, "")
    .replace(/-+$/, "");
};

export const formatDate = (date: Date): string => {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

export const mapPostToPostLink = (
  post: Post,
  type: "mention" | "related" | "post",
): PostLink => {
  return {
    title: post.data.title,
    slug: post.data.slug,
    date: post.data.date,
    type: type,
  };
};

export const sortPostsDesc = (posts: Post[]): Post[] => {
  return posts.sort((prev: Post, next: Post) =>
    new Date(prev.data.date).getTime() < new Date(next.data.date).getTime()
      ? 1
      : -1,
  );
};
