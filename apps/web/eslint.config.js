import { nextJsConfig } from "@repo/eslint-config/next-js";
import { tailwindcssConfig } from "@repo/eslint-config/tailwind";

/** @type {import("eslint").Linter.Config[]} */
export default [
  ...nextJsConfig,
  tailwindcssConfig({ entryPoint: "app/globals.css" }),
];
