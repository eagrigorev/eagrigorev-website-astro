import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { sortPostsDesc } from "@utils/scripts";

export async function GET(context) {
  const posts = await getCollection("posts");
  const pages = await getCollection("pages");
  const allPostsSorted = sortPostsDesc(posts);
  const allPosts = allPostsSorted.map((post) => ({
    title: post.data.title,
    link: post.data.slug,
    pubDate: post.data.datePublished,
  }));

  const allPages = pages.map((page) => ({
    title: page.data.title,
    link: page.data.slug,
    pubDate: page.data.datePublished,
  }));
  return rss({
    title: "Evgenii's Journal",
    description:
      "I decided to create this journal in order to cope with anxiety, preserve knowledge and memories, and reflect on my life.",
    site: context.site,
    items: [...allPosts, ...allPages],
    customData: `<language>en-us</language>`,
  });
}
