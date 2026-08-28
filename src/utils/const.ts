import type { NavigationItem } from "@utils/types";

export enum SITE {
  AUTHOR = "Evgenii Grigorev",
  TITLE = "Gardens & Ruins",
  DESCRIPTION = "Personal logs, film photography fragments, and digital artifacts",
  INTRO = "My name is Evgenii. Welcome to my journal and digital garden where I reflect on my life, trying to re-discover my real self.",
  PAGE_NOT_FOUND = "Page not Found",
  PAGE_NOT_FOUND_MESSAGE = "404: Page not found.",
  SERVER_ERROR = "Internal Server Error",
  SERVER_ERROR_MESSAGE = "500: Internal server error.",
}

export const HEADER_LINKS: NavigationItem[] = [
  {
    name: "Explore the Garden",
    url: "/the-garden",
  },
  {
    name: "Info",
    url: "/",
  },
  {
    name: "The Thicket",
    url: "/",
  },
];

export const FOOTER_LINKS: NavigationItem[] = [
  {
    name: "Index",
    url: "/",
  },
  {
    name: "·",
    url: "",
  },
  {
    name: "Info",
    url: "/",
  },
  {
    name: "·",
    url: "",
  },
  {
    name: "Elsewhere",
    url: "/",
  },
  {
    name: "·",
    url: "",
  },
  {
    name: "RSS",
    url: "/",
  },
];

export const CATEGORIES: string[] = [
  "Illustrations",
  "Photography",
  "Journal",
  "Music",
  "Tabs",
];
