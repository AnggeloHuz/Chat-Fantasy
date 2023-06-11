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
        'primary': '#038C3E',
        'secondary': '#034159',
        'claro': '#0CF25D',
        'opaco': '#025951',
        'negro': '#000000',
        'blanco': '#E5FFFF'
      },
    },
  },
  plugins: [],
}