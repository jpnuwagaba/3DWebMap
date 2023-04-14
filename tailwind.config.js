/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      'manrope': ["'Manrope', sans-serif"]
    },
    extend: {
      colors: {
        lightRed: '#ed2228',
        darkRed: '#951a1d',
        lightGreen: '#16a751',
        darkGreen: '#134c24',
        beige: '#d2ac68',
      }
    },
  },
  plugins: [],
}
