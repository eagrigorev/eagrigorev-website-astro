export interface NavigationItem {
  title: string;
  url: string;
}

export interface PageHeading {
  title: string;
  subtitle: string;
}

export interface PostMeta {
  title: string;
  slug: string;
  datePublished: string;
  excerpt: string;
  image: {
    url: {
      src: string;
      width: number;
      height: number;
      format: "png" | "jpg" | "jpeg" | "tiff" | "webp" | "gif" | "svg" | "avif";
    };
    alt: string;
  };
  tags: string[];
}
