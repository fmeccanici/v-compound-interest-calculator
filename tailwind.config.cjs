/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'midnight-blue' : '#2C3E50',
        'wet-asphalt' : '#34495E',
        'amethyst' : '#9B59B6',
        'primary' : '#2C3E50',
        'secondary' : '#9B59B6',
      }
    },
  },
  plugins: [],
}
