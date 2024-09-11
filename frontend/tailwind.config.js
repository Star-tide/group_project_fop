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
          "accent": "#9bbfc1",
          "neutral": "#ffffff",
          "base-100": "#ffffff",
          "danger": "DC143C"
        },
      },
    ],
  },
}