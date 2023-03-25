/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      'octopus': '#E1E0DC',
      'purple': '#3D00BF',
    },
    extend: {},
  },
  plugins: [],
}