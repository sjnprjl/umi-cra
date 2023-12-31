/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "transparent-black": "rgba(255, 255, 255, 0.2)",
        "ui-gray": "rgba(149, 149, 149, 1)",
        "ui-primary": "#1F94D2",
        "ui-light": "#E9F2FD",
      },
    },
  },
  plugins: [],
};
