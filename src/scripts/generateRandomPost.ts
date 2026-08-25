import type { Post } from "@utils/types";

export const generateRandomPost = (posts: Post[]): string => {
  const randomizerPool = posts.map((post: Post) => ({
    slug: post.data.slug,
  }));
  const randomNote =
    randomizerPool.length > 0
      ? randomizerPool[Math.floor(Math.random() * randomizerPool.length)]
      : null;
  const randomLink = randomNote ? `/${randomNote.slug}` : "#";
  return randomLink;
};
