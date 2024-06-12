/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./about.html",
    "./blog.html",
    "./contact.html",
    "./script.js",
  ],
  theme: {
    extend: {
      backgroundColor: {
        "custom-bg-color": "#F9F9F9",
        "custom-green": "#f2fcfe",
        "custom-red": "#ff6347", // You can add as many as you need
      },
    },
  },
  darkMode: "media",
  plugins: [],
};
