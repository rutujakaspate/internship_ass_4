/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html', // ✅ MUST INCLUDE THIS!
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [],
}
