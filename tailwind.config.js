/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      purple: '#cd5ff8',
    }
  },
  plugins: [],
  darkMode: ['class', '[data-theme="dark"]'],
};