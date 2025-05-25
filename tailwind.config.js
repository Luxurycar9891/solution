/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#1E3A8A', // Deep Blue
        secondary: '#FBBF24', // Gold Accent
        accent: '#10B981', // Emerald Green for buttons/CTAs
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'], // Modern font for better aesthetics
      },
    },
  },
  plugins: [],
};