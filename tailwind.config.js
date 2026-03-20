/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ustaz: {
          bg: 'rgb(var(--ustaz-bg) / <alpha-value>)',
          card: 'rgb(var(--ustaz-card) / <alpha-value>)',
          surface: 'rgb(var(--ustaz-surface) / <alpha-value>)',
          gold: 'rgb(var(--ustaz-gold) / <alpha-value>)',
          arabic: 'rgb(var(--ustaz-arabic) / <alpha-value>)',
          turkish: 'rgb(var(--ustaz-turkish) / <alpha-value>)',
        },
        pos: {
          ism: '#60a5fa',
          fil: '#34d399',
          harf: '#fbbf24',
          zamir: '#a78bfa',
        }
      },
      fontFamily: {
        arabic: ['Amiri', 'Scheherazade New', 'serif'],
        body: ['Outfit', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
