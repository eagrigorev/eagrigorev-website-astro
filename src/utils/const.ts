import type { NavigationItem, PageTitle } from "./types";

export const TOP_NAV_ITEMS: NavigationItem[] = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "About",
    url: "/about",
  },
  {
    title: "Contact",
    url: "/contact",
  },
];

export const FOOTER_NAV_ITEMS: NavigationItem[] = [
  {
    title: "RSS Feed",
    url: "/",
  },
  {
    title: "Privacy & Security",
    url: "/privacy-and-security",
  },
  {
    title: "Sitemap",
    url: "/",
  },
];

export const SOCIAL_LINKS: NavigationItem[] = [
  {
    title: "Instagram",
    url: "https://www.instagram.com/eagrigorev/",
  },
  {
    title: "Bluesky",
    url: "https://bsky.app/profile/eagrigorev.bsky.social/",
  },
  {
    title: "GitHub",
    url: "https://github.com/eagrigorev/",
  },
];

export const INDEX_PAGE_TITLE: PageTitle = {
  heading: "I'm a frontend software developer based in Thessaloniki, Greece.",
  subheading:
    "I love clean and minimal interfaces, accessible homemade and local applications, and digital gardens.",
};

export const ABOUT_THIS_JOURNAL_INFO: string =
  "I'm a frontend software developer based in Thessaloniki, Greece. I love clean and minimal interfaces, accessible homemade and local applications, and digital gardens.";

export const PAGES: NavigationItem[] = [
  {
    title: "Reading Journal",
    url: "/reading-journal",
  },
  {
    title: "Boreal Heights Music",
    url: "/boreal-heights-music",
  },
  {
    title: "Fingerstyle Arrangements",
    url: "/fingerstyle-arrangements",
  },
  {
    title: "Illustrations",
    url: "/illustrations",
  },
];
