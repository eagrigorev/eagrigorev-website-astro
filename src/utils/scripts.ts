import type { Post } from "@utils/types";
import Heading2 from "@components/typography/Heading2.astro";
import Heading3 from "@components/typography/Heading3.astro";
import Link from "@components/typography/Link.astro";

export const sortPostsDesc = (posts: Post[]): Post[] => {
  return posts.sort((prev: Post, next: Post) =>
    new Date(prev.data.datePublished) < new Date(next.data.datePublished)
      ? 1
      : -1,
  );
};

export const customTypography = {
  a: Link,
  h2: Heading2,
  h3: Heading3,
};
