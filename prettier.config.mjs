/** @type {import("prettier").Config} */
const config = {
  plugins: ["prettier-plugin-tailwindcss"],
  tailwindStylesheet: "./apps/web/app/globals.css",
  tailwindFunctions: ["cn", "clsx"],
};

export default config;
