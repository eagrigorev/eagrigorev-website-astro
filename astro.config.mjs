import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import vercel from "@astrojs/vercel";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://www.eagrigorev.com",
  integrations: [mdx(), sitemap()],
  redirects: {
    "/posts": "/",
    "/tags": "/",
  },
  adapter: vercel(),
});
