/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      purple: '#cd5ff8',
      'purple-light': '#d780f9',
      'purple-dark': '#c33ef7',
      white: '#fff',
    }
  },
  plugins: [require('@tailwindcss/typography'),],
  darkMode: ['class', '[data-theme="dark"]'],
};