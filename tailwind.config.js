/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter': 'Inter',
      },
      screens: {
        'md': '750px',  // Custom breakpoint for your desired range
      },
    },
  },
  plugins: [],
}
