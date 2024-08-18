/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        bounce: '2s ease 0s infinite normal none running bounce',
      },
      keyframes: {
        bounce: {
          '0%': {
            transform: 'scale(1)',
          },
          '50%': {
            transform: 'scale(1.05)',
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
