import eslintPluginBetterTailwindcss from "eslint-plugin-better-tailwindcss";

/**
 * Tailwind linting for apps and UI packages.
 * Class sorting is handled only by prettier-plugin-tailwindcss on save.
 * Do not enable enforce-consistent-class-order — it disagrees with Prettier
 * on custom tokens like text-text-primary.
 *
 * @param {{ entryPoint: string; cwd?: string }} options
 * @returns {import("eslint").Linter.Config}
 */
export function tailwindcssConfig({ entryPoint, cwd }) {
  return {
    files: ["**/*.{js,jsx,ts,tsx}"],
    plugins: {
      "better-tailwindcss": eslintPluginBetterTailwindcss,
    },
    rules: {
      "better-tailwindcss/enforce-consistent-class-order": "off",
      "better-tailwindcss/no-duplicate-classes": "warn",
      "better-tailwindcss/no-unnecessary-whitespace": "warn",
    },
    settings: {
      "better-tailwindcss": {
        entryPoint,
        ...(cwd ? { cwd } : {}),
      },
    },
  };
}
