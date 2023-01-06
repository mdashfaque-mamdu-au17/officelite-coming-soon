/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary-blue': '#5175FF',
        'secondary-blue': '#829CFF',
        'primary-dark': '#333950',
        'secondary-dark': '#25293A',
        'primary-gray': '#747B95',
        'primary-red': '#F05B5B',
      },
    },
  },
  plugins: [],
};
