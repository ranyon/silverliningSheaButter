/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f9f6f0',
          100: '#f0eade',
          200: '#e3d5c5',
          300: '#d5bb9f',
          400: '#c5a076',
          500: '#b68854',
          600: '#9b6c41',
          700: '#7f5434',
          800: '#69462f',
          900: '#553c29',
        },
        surface: '#faf9f6',
        textPrime: '#1f1a17',
        textSec: '#6d635c',
        borderL: '#e6ded7'
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      }
    },
  },
  plugins: [],
}
