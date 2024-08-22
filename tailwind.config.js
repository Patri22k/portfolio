/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{html,css,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        '2.5xl': '20px',
      },
      colors: {
        footerGray: "rgba(31, 32, 34, 0.5)",
      },
    },
  },
  plugins: [],
}