import { config } from "@repo/eslint-config/react-internal";
import { tailwindcssConfig } from "@repo/eslint-config/tailwind";

/** @type {import("eslint").Linter.Config[]} */
export default [
  ...config,
  tailwindcssConfig({
    entryPoint: "app/globals.css",
    cwd: "../../apps/web",
  }),
];
