import { getCollection } from "astro:content";
import { generateSlug, sortPostsDesc } from "@utils/scripts";
import rss from "@astrojs/rss";

export async function GET(context) {
  const posts = await getCollection("posts");
  return rss({
    title: "Evgenii Grigorev",
    description: "A Journal of the Buried Life",
    site: context.site,
    items: sortPostsDesc(posts).map((post) => ({
      title: post.data.title,
      pubDate: post.data.datePublished,
      link: `/${generateSlug(post.data.title)}/`,
    })),
  });
}
