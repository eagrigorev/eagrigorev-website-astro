const tsPlugin = require("@typescript-eslint/eslint-plugin");
const astroPlugin = require("eslint-plugin-astro");
const mdxPlugin = require("eslint-plugin-mdx");
const prettierConfig = require("eslint-config-prettier");

module.exports = [
  {
    ignores: ["dist", ".vercel", "node_modules", ".astro"],
  },
  ...tsPlugin.configs["flat/recommended"],
  ...astroPlugin.configs["flat/recommended"],
  mdxPlugin.configs.flat,
  {
    rules: prettierConfig.rules,
  },
  {
    files: ["eslint.config.cjs", "eslint.config.js"],
    rules: {
      "@typescript-eslint/no-require-imports": "off",
    },
  },
];
