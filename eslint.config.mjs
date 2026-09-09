import tsPlugin from "@typescript-eslint/eslint-plugin";
import astroPlugin from "eslint-plugin-astro";
import * as mdxPlugin from "eslint-plugin-mdx";
import prettierConfig from "eslint-config-prettier";

export default [
  {
    ignores: ["dist", ".vercel", "node_modules", ".astro"],
  },
  ...tsPlugin.configs["flat/recommended"],
  ...astroPlugin.configs["flat/recommended"],
  mdxPlugin.configs.flat,
  {
    rules: prettierConfig.rules,
  },
];
