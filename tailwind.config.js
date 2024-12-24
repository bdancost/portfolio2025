/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js}", "./*.html"],
  theme: {
    extend: {
      colors: {
        primary: "#007bff",
        secondary: "#0056b3",
        "font-color": "#fff",
      },
      fontFamily: {
        sans: ["Arial", "sans-serif"],
      },
      backgroundImage: {
        "fundo-img": "url('./assets/image_fondo02.png')",
      },
    },
  },
  plugins: [],
};
