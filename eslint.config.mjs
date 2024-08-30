import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import importPlugin from "eslint-plugin-import";

export default [
  {files: ["**/*.{js,mjs,cjs,ts}"]},
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {plugins: { import: importPlugin }},
  {rules: {
    "no-underscore-dangle": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "no-console": "off",
    "@typescript-eslint/no-this-alias": "off",
    "@typescript-eslint/no-empty-function": "off",
    "no-shadow": "off",
    "@typescript-eslint/no-shadow": ["error"],
    "no-restricted-syntax": "off",
    "consistent-return": "off",
    "no-continue": "off",
    "no-eval": "off",
    "no-await-in-loop": "off",
    "no-nested-ternary": "off",
    "prefer-destructuring": "off",
    "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
    "import/extensions": ["error"]
  }},
];