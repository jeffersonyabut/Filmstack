/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      helvetica: ["helvetica", "sans-serif"],
    },
    extend: {
      colors: {
        background: "var(--background)",
        text: "var(--text)",
      },
    },
  },
  plugins: [],
};
