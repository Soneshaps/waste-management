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
      backgroundImage: {
        'bottom-to-top': 'linear-gradient(to top, #f4f7fb, #ffffff)',
        'top-to-bottom': 'linear-gradient(to bottom, #ffffff, #fcfeff)',
      },
    },
    screens: {
      sm: '640px',   // Small devices (phones)
      md: '768px',   // Medium devices (tablets)
      lg: '1024px',  // Large devices (desktops)
      xl: '1280px',  // Extra large screens
      '2xl': '1536px', // 2X large screens
    },
  },
  plugins: [],
} 