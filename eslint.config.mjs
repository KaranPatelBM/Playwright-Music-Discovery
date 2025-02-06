import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import playwright from "eslint-plugin-playwright";

export default [
  {
    files: ["**/*.{js,mjs,cjs,ts}"]
  },
  {
    ...playwright.configs["flat/recommended"],
    files: ["tests/**"],
  },
  {
    ignores: ["playwright-report/**", "test-results/**"]
  },
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },
  {
    "rules": {
      "playwright/expect-expect": "off",
      "playwright/no-conditional-in-test": "off",
      "playwright/no-conditional-expect": "off",
      "playwright/no-wait-for-timeout": "off"
    }
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
];
