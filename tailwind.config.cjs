/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary-blue': '#5175FF',
        'secondary-blue': '#829CFF',
        'light-blue': '#5175ff26',
        'light-blue-200': '#5175ff59',
        'light-blue-300': '#5175ff1a',
        'primary-dark': '#333950',
        'secondary-dark': '#25293A',
        'primary-gray': '#747B95',
        'primary-red': '#F05B5B',
        'primary-white': '#FFFFFF',
      },
      boxShadow: {
        'shadow-blue-btn': '0px 25px 25px -10px rgba(63, 91, 194, 0.247159)',
        'card-shadow': '0px 50px 50px -25px rgba(75, 92, 154, 0.247159)',
        'drop-down': '0px 50px 50px -25px rgba(75, 92, 154, 0.747077)',
      },
    },
  },
  plugins: [],
};
