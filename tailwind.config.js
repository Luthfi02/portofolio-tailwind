/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        primary: "#e11d48",
        dark: "#0f172a",
        secondary: "#64748b",
        biru: {
          50: "#f0f9ff",
          100: "#e0f1fe",
          200: "#bae4fd",
          300: "#7cd0fd",
          400: "#3ebbf9",
          500: "#0da0ea",
          600: "#017fc8",
          700: "#0265a2",
          800: "#065686",
          900: "#0c486e",
          950: "#082d49",
        },
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
