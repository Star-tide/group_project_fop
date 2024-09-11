/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui';


export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    daisyui,
    require('@tailwindcss/forms'),
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#003049",
          "secondary": "#f0591a",
          "accent": "#DC143C",
          "neutral": "#ffffff",
          "base-100": "#ffffff",
        },
      },
    ],
  },
}