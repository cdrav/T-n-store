/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html', './script.js'],
  theme: {
    extend: {
      colors: {
        brand: {
          light: '#a2c0e1',
          DEFAULT: '#1c3657',
          dark: '#122438',
        },
        kebonita: {
          teal: '#56bab4',
          'teal-dark': '#3d8f8a',
          gold: '#c7a36e',
          'gold-dark': '#a8834f',
        }
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      }
    }
  },
  plugins: [],
}
