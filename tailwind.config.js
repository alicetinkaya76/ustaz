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
          bg: '#0f0f1a',
          card: '#1a1a2e',
          surface: '#16213e',
          gold: '#d4a64a',
          arabic: '#f5f0e1',
          turkish: '#cbd5e1',
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
