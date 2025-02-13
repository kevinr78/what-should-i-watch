/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        lightPurple: "#7900c2",
        purple: "#6100c2",
        darkBlack: "#191817",
        darkBrown: "#37312a",
        glass: "#f5f5f5e5",
        gray: "#969696",
        white: "#ffffff",
      },
    },
  },
  plugins: [require("daisyui")],
};
