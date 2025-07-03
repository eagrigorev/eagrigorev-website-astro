export const sortPostsDesc = (posts) => {
  return posts.sort((prev, next) =>
    new Date(prev.data.datePublished) < new Date(next.data.datePublished)
      ? 1
      : -1,
  );
};
