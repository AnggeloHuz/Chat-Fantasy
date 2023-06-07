/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'Login': "url('/src/assets/Fondo-Login.jpg')",
        'Logo': "url('/src/assets/LOGO.png')"
      },
      colors: {
        'primary': '#03318C',
        'secondary': '#BDAEF2',
        'claro': '#049DD9',
        'opaco': '#010A26',
        'negro': '#00030D',
        'blanco': '#E5FFFF'
      },
    },
  },
  plugins: [],
}