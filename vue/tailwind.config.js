/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.js.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
