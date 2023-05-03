/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        positiveBg: "#DBFFCA",
        neutralBg: "#FFEBB9",
        negativeBg: "#FFCFCC",
      },
    },
  },
  plugins: [],
};
