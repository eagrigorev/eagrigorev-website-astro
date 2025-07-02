export const generateSlug = (string: string): string => {
  return string.toLowerCase().replace(/ /g, "-").replace("&", "and");
};
