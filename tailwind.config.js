/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        '2xl': '1440px',
      },
      colors: {
        'light-black': '#1B1B1B',
        'light-gray': '#8A8A8F',
        'text-gray': '#929292',
        'focus': '#FF9B33'
      },
      fontSize: {
        'text-3xl': ["30px", '45px']
      }
    },
  },
  plugins: [],
}

