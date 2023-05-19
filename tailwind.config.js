/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'light-black': '#1B1B1B',
        'light-gray': '#8A8A8F'
      },
      fontSize: {
        'text-3xl': ["30px", '45px']
      }
    },
  },
  plugins: [],
}

