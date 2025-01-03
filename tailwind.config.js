/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        yellow: "#f2d349",
        backgroundColor: "var(--backgroundColor-color)", // Use the CSS variable
        "banner-color": "#91bdaa",
        lightText: "#5c6e58",
        "navbar-bg": "#efede0",
        "menu-color": "#555555",
        "slide-1": "rgb(206, 17, 17)",
        "slide-2": "rgb(0, 140, 255)",
        "slide-3": "rgb(10, 184, 111)",
        "slide-4": "rgb(211, 122, 7)",
        "slide-5": "rgb(118, 163, 12)",
        "slide-6": "rgb(180, 10, 47)",
        "slide-7": "rgb(35, 99, 19)",
        "slide-8": "rgb(0, 68, 255)",
        "slide-9": "rgb(218, 12, 218)",
      },
      extend: {
     
      },
    },
  },
  plugins: [],
};
