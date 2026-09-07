/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        gstudio: {
          black: '#0a0a0a',
          neon: '#c0fe12',
          white: '#fafafa',
          gray: '#27272a',
          amber: '#f59e0b',
        }
      }
    },
  },
  plugins: [],
}