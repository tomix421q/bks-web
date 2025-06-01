/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        se: '375px', // iPhone SE and iPhone 6/7/8
        plus: '390px', // iPhone 6/7/8 Plus
      },

      colors: {
        'color-green': '#c5f0a4',
        'color-yellow': '#faffb8',
        'color-seablue': '#35b0ab',
        'color-darkseablue': '#226b80',
      },
      fontFamily: {
        robotoLight: ['Roboto', 'sans-serif'],
        oswald: ['Oswald', 'sans-serif'],
        montserrat: ['Montserrat Alternates', 'sans-serif'],
        pathway: ['Pathway Extreme', 'sans-serif'],
      },
    },
  },
  '@import': '~react-image-gallery/styles/css/image-gallery.css',
  plugins: [],
}
