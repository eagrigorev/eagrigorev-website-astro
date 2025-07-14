export const sortPostsDesc = (posts) => {
  return posts.sort((prev, next) =>
    new Date(prev.data.datePublished) < new Date(next.data.datePublished)
      ? 1
      : -1,
  );
};

export const generateUniqueTags = (posts): { title: string; url: string }[] => {
  const tagsList: string[] = [];
  const uniqueTags: { title: string; url: string }[] = [];
  posts.forEach((post) => {
    post.data.tags.map((tag: string) => {
      tagsList.push(tag);
    });
  });
  tagsList
    .filter((tag: string, index: number) => tagsList.indexOf(tag) === index)
    .map((tag: string) =>
      uniqueTags.push({
        title: tag,
        url: `/tags/${tag.toLowerCase().replaceAll(/ /g, "-").replaceAll("&", "and")}`,
      }),
    );
  return uniqueTags;
};
