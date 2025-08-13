import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import vercel from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
  integrations: [mdx()],
  redirects: {
    "/posts": "/",
    "/tags": "/",
  },
  adapter: vercel(),
});
