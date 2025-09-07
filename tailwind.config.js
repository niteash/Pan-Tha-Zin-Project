/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  safelist: ["font-myanmar", "font-jaro"],
  theme: {
    extend: {
      fontFamily: {
        jaro: ["Jaro", "sans-serif"],
        myanmar: [
          '"Noto Sans Myanmar"',
          '"Noto Serif Myanmar"',
          "sans-serif",
          "serif",
        ],
      },
    },
  },
  plugins: [],
};
