import { createRequire } from "node:module";
import babelParser from "@babel/eslint-parser";
import globals from "globals";
import { config as baseConfig } from "./base.js";

const require = createRequire(import.meta.url);

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
          presets: [require.resolve("@babel/preset-typescript")],
          plugins: [
            [
              require.resolve("@babel/plugin-proposal-decorators"),
              { version: "legacy" },
            ],
            [
              require.resolve("@babel/plugin-transform-class-properties"),
              { loose: true },
            ],
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
