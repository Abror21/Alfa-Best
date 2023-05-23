/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'img1': "url('./src/assets/images/intro1.jpg')",
        'img2': "url('./src/assets/images/intro2.jpg')",
        'img3': "url('./src/assets/images/intro3.jpg')",
        'img4': "url('./src/assets/images/intro4.jpg')",
      }
    },
  },
  plugins: [],
}