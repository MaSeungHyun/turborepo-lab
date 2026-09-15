import babelParser from "@babel/eslint-parser";
import globals from "globals";
import { config as baseConfig } from "./base.js";

/**
 * A shared ESLint configuration for NestJS apps.
 *
 * @type {import("eslint").Linter.Config[]}
 */
export const nestJsConfig = [
  ...baseConfig,
  {
    files: ["**/*.ts"],
    languageOptions: {
      parser: babelParser,
      parserOptions: {
        requireConfigFile: false,
        babelOptions: {
          presets: ["@babel/preset-typescript"],
          plugins: [
            ["@babel/plugin-proposal-decorators", { version: "legacy" }],
            ["@babel/plugin-transform-class-properties", { loose: true }],
          ],
        },
      },
      globals: {
        ...globals.node,
        ...globals.jest,
      },
    },
    rules: {
      // Babel does not treat TypeScript type positions as usages.
      "no-unused-vars": [
        "warn",
        {
          args: "none",
          caughtErrors: "none",
          varsIgnorePattern: "^[A-Z_]",
        },
      ],
      "turbo/no-undeclared-env-vars": ["warn", { allowList: ["PORT"] }],
    },
  },
  {
    ignores: ["dist/**", "coverage/**", "eslint.config.mjs"],
  },
];
