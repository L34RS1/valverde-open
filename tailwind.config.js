/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      'octopus': '#13005A',
    },
    extend: {},
  },
  plugins: [],
}