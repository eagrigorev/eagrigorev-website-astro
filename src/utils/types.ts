export interface NavigationItem {
  title: string;
  url: string;
}

export interface PageTitleOptions {
  heading: string;
  subheading: string;
  image: {
    isVisible: boolean;
  };
  categories: {
    areVisible: boolean;
  };
  meta: {
    isVisible: boolean;
    datePublished?: string;
    category?: string;
  };
}
