/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        bounce: 'Mybounce 2s ease infinite none ',
      },
      keyframes: {
        Mybounce: {
          '0%': {
            transform: 'scale(1)',
          },
          '50%': {
            transform: 'scale(1.1)',
          },
          '100%': {
            transform: 'scale(1)',
          },
        },
      },
      fontFamily: {
        bodyfont: ['Montserrat', 'sans - serif'],
        headingfont: ['Inconsolata', 'monospace'],
      },
    },
  },
  plugins: [],
}
