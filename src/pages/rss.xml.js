import { getCollection } from "astro:content";
import { sortPostsDesc } from "@utils/scripts";
import rss from "@astrojs/rss";

export async function GET(context) {
  const posts = await getCollection("posts");
  return rss({
    title: "Evgenii Grigorev",
    description: "A Journal of the Buried Life",
    site: context.site,
    items: sortPostsDesc(posts).map((post) => ({
      title: post.data.title.value,
      pubDate: post.data.datePublished,
      description: post.data.description,
      link: `/${post.slug}/`,
    })),
  });
}
