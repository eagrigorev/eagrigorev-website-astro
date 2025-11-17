import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import vercel from "@astrojs/vercel";
import sitemap from "@astrojs/sitemap";
import robotsTxt from "astro-robots-txt";

// https://astro.build/config
export default defineConfig({
  site: "https://www.eagrigorev.com",
  integrations: [mdx(), sitemap(), robotsTxt()],
  redirects: {
    "/tags": "/",
    //   "/reading-journal/year": "/reading-journal",
    //   "/illustrations/art": "/illustrations",
  },
  adapter: vercel(),
});
