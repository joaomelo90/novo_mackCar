/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'vermelho': '#A8000B',
        'cinzaOpacity' : 'rgba(255, 255, 255, 0.2)',
        

      },
      boxShadow: {
        'nav3': '3px 3px 5px rgba(255, 255, 255, 0.1)',
        'navSidebar': '-10px 0 10px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
}
