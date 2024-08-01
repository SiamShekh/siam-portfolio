/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui"

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom': '0px 4.234px 21.169px 0px rgba(152, 135, 255, 0.40)',
      },
      fontFamily: {
        'roboto': 'Roboto, sans-serif',
        'poppins': 'Poppins, sans-serif',
      }
    },
  },
  plugins: [daisyui],
}