/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'background-grey': '#F8F8F8',
      },
      fontFamily: {
        display: ["Libre Franklin", "sans-serif"]
      }
    },
  },
  plugins: [],
}

