import type { Post } from "@utils/types";
import { getCollection } from "astro:content";
import { sortPostsDesc } from "@scripts/common";

export const getSortedPosts = async (): Promise<Post[]> => {
  const posts: Post[] = await getCollection(
    "posts",
    ({ data }) => !data.isDraft,
  ).then((response) => sortPostsDesc(response));
  return posts;
};

export const getFeaturedPosts = async (): Promise<Post[]> => {
  const posts: Post[] = await getSortedPosts();
  return posts.filter((post: Post) => post.data.isFeatured).slice(0, 6);
};

// TODO: Filter out featured posts if needed

export const getRecentPosts = async (): Promise<Post[]> => {
  const posts: Post[] = await getSortedPosts();
  return posts.slice(0, 10);
};

export const getRandomPost = async (): Promise<Post | null> => {
  const posts: Post[] = await getSortedPosts();
  const randomPost: Post | null =
    posts.length > 0 ? posts[Math.floor(Math.random() * posts.length)] : null;
  return randomPost;
};
