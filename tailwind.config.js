/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mainColor: "emerald", // predefined color
        "custom-gray": "#1a2433", // custom gray color
      },
    },
  },
  plugins: [require("daisyui")],
};

