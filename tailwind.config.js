/** @type {import('tailwindcss').Config} */
export default {
  // darkMode: 'selector',
  darkMode: 'class', // تفعيل الوضع المظلم باستخدام الفئة class
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter","sans-serif"]
      }
    },
  },
  plugins: [],
}