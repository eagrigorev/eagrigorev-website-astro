export interface NavigationItem {
  title: string;
  url: string;
}

export interface Title {
  heading: string;
  subheading: string;
  hasImage: boolean;
  hasCategories: boolean;
  hasMeta: boolean;
  meta?: {
    datePublished?: string;
    category?: string;
  };
}
