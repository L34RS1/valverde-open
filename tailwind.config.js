/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');
const { blackA, green, mauve, violet } = require('@radix-ui/colors');
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      'octopus': '#E1E0DC',
      'purple': '#3D00BF',
      ...colors,
      ...blackA,
        ...green,
        ...mauve,
        ...violet,
    },
    extend: {},
  },
  plugins: [],
}