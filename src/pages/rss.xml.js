import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import {
  sortAlbumsDesc,
  sortPostsDesc,
  sortReadingArchivesDesc,
} from "@utils/scripts";

export async function GET(context) {
  const posts = await getCollection("posts");
  const pages = await getCollection("pages");
  const albums = await getCollection("music");
  const readingArchives = await getCollection("readingArchive");
  const allPostsSorted = sortPostsDesc(posts);
  const allAlbumsSorted = sortAlbumsDesc(albums);
  const allReadingArchivesSorted = sortReadingArchivesDesc(readingArchives);
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

  const allAlbums = allAlbumsSorted.map((album) => ({
    title: album.data.title,
    link: album.data.externalLink,
    pubDate: album.data.datePublished,
  }));

  const allReadingArchives = allReadingArchivesSorted.map((readingArchive) => ({
    title: readingArchive.data.title,
    link: readingArchive.data.slug,
    pubDate: readingArchive.data.datePublished,
  }));

  return rss({
    title: "Evgenii's Journal",
    description:
      "I decided to create this journal in order to cope with anxiety, preserve knowledge and memories, and reflect on my life.",
    site: context.site,
    items: [...allPosts, ...allPages, ...allAlbums, ...allReadingArchives],
    customData: `<language>en-us</language>`,
  });
}
