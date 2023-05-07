/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'color-green': '#c5f0a4',
        'color-yellow': '#faffb8',
        'color-seablue': '#35b0ab',
        'color-darkseablue': '#226b80',
      },
      fontFamily: {
        robotoLight: ['Roboto', 'sans-serif'],
        oswald: ['Oswald', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
