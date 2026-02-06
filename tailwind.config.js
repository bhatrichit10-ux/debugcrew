/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./views/**/*.ejs",
    "./public/**/*.{js,css}",
  ],
  theme: {
    extend: {},
  }}
export default {
  plugins: {
    "@tailwindcss/postcss": {},
  }
}