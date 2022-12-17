/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#4ade80",
        secondary: "#06b6d4",
        danger: "#dc2626",
      },
    },
  },
  plugins: [],
};
