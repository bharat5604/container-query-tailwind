/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      "min-width": "--min-width",
      "max-width": " --max-width",
      height: "--height",
    },
  },
  plugins: [require("@tailwindcss/container-queries")],
};
