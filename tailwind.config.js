/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
    bounce: "bounce 1s infinite",
  },
    },
  },
  darkMode: "class",
  plugins: [],
};
