import { nextJsConfig } from "@repo/eslint-config/next-js";
import { tailwindcssConfig } from "@repo/eslint-config/tailwind";

/** @type {import("eslint").Linter.Config[]} */
export default [
  ...nextJsConfig,
  tailwindcssConfig({ entryPoint: "app/globals.css" }),
  // Prettier(prettier-plugin-tailwindcss)가 클래스 정렬을 담당.
  // better-tailwindcss 순서 규칙은 커스텀 토큰에서 Prettier와 충돌하므로 최종 off.
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    rules: {
      "better-tailwindcss/enforce-consistent-class-order": "off",
    },
  },
];
