/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mona: ['"Mona Sans"', 'sans-serif'],
        sans: ['"Mona Sans"', 'sans-serif'], // optional: make it default
      },
    },
  },
  plugins: [],
} 