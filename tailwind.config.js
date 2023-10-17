/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./assets/src/**/*.{js,ts,jsx,tsx,mdx}",
    "./templates/**/*.html.twig",
  ],
  theme: {
    extend: {
      scale: {
        200: "2.00",
      },
    },
    backgroundImage: {
      shine: "url('http://localhost:8000/images/background.jpg')",
    },
  },
  plugins: [],
};
