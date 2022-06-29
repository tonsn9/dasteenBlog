/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      fontFamily: {
        sans: 'DM Sans, sans-serif'
      },
      colors: {
        white: {
          100: '#FFFFFF'
        },
        lightGrey: {
          200: '#EFF0F3',
          300: '#E4E5E9'
        },
        grey: {
          400: '#C0C0C0',
          500: '#9A9494',
          600: '#2B2C34'
        },
        blue: {
          700: '#6246EA'
        }
      }
    }
  },
  plugins: []
}
