/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "Noto Sans",
          "sans-serif",
        ],
      },
      colors: {
        primary: {
          DEFAULT: "#00833E",
          light: "#FFB3B3",
          dark: "#B30000",
        },
        secondary: {
          DEFAULT: "#3CB371",
          light: "#A3D9B5",
          dark: "#007A5E",
        },
      },
    },
  },
  plugins: [],
};
