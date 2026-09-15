import eslintPluginBetterTailwindcss from "eslint-plugin-better-tailwindcss";

/**
 * Tailwind class-order linting for apps and UI packages.
 *
 * @param {{ entryPoint: string; cwd?: string }} options
 * @returns {import("eslint").Linter.Config}
 */
export function tailwindcssConfig({ entryPoint, cwd }) {
  const stylistic = eslintPluginBetterTailwindcss.configs.stylistic;

  return {
    ...stylistic,
    files: ["**/*.{js,jsx,ts,tsx}"],
    rules: {
      "better-tailwindcss/enforce-consistent-class-order": "warn",
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
