import { getCollection } from "astro:content";

const posts = await getCollection("posts");
let tags: string[] = [];
posts.forEach((post) => {
  post.data.tags.forEach((tag: string) => tags.push(tag));
});

const generateUniqueTags = (tags: string[]): string[] => {
  return tags.filter(
    (tag: string, index: number) => tags.indexOf(tag) === index,
  );
};

export const uniqueTags: string[] = generateUniqueTags(tags);
