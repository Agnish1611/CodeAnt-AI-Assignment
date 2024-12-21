/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "inter": ['Inter', 'sans-serif']
      },
      boxShadow: {
        "primary": "-2px 9px 40px 0px rgba(0,0,0,0.58)"
      }
    },
  },
  plugins: [],
}