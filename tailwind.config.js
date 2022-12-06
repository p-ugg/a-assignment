/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        diablo: ['Diablo', 'sans-serif'],
        garamond: ['Garamond', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
