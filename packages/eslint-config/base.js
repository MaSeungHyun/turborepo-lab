import { createRequire } from "node:module";
import babelParser from "@babel/eslint-parser";
import js from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";
import turboPlugin from "eslint-plugin-turbo";
import onlyWarn from "eslint-plugin-only-warn";

const require = createRequire(import.meta.url);

/**
 * A shared ESLint configuration for the repository.
 *
 * @type {import("eslint").Linter.Config[]}
 * */
const files = ["**/*.{js,mjs,cjs,ts,tsx,jsx}"];

export const config = [
  {
    ...js.configs.recommended,
    files,
  },
  {
    ...eslintConfigPrettier,
    files,
  },
  {
    files,
    languageOptions: {
      parser: babelParser,
      parserOptions: {
        requireConfigFile: false,
        babelOptions: {
          presets: [
            [
              require.resolve("@babel/preset-react"),
              { runtime: "automatic" },
            ],
            [
              require.resolve("@babel/preset-typescript"),
              { ignoreExtensions: true },
            ],
          ],
        },
      },
    },
    plugins: {
      turbo: turboPlugin,
    },
    rules: {
      "turbo/no-undeclared-env-vars": "warn",
      "no-undef": "off",
      "no-unused-vars": [
        "warn",
        {
          args: "none",
          caughtErrors: "none",
          varsIgnorePattern: "^[A-Z_]",
        },
      ],
    },
  },
  {
    files,
    plugins: {
      onlyWarn,
    },
  },
  {
    ignores: ["dist/**"],
  },
];
