/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'beginner-green': '#10b981',
        'easy-yellow': '#fbbf24',
        'intermediate-orange': '#f97316',
      },
    },
  },
  plugins: [],
}
