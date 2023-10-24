/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./assets/src/**/*.{js,ts,jsx,tsx,mdx}",
    "./templates/**/*.html.twig",
  ],
  theme: {
    extend: {},
    backgroundImage: {
      "jojo": "url('http://localhost:8000/medias/background/jojo-font-back.png')",
      "jojo-mobile": "url('http://localhost:8000/jojo-mobile.jpg')"
    },
  },
  plugins: [],
};
