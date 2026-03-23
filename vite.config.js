import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/ustaz/',
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'curriculum-core': ['./src/data/curriculum.js', './src/data/levels/level2b.js', './src/data/levels/level3.js', './src/data/levels/level3b.js'],
          'curriculum-ext': ['./src/data/levels/level4.js', './src/data/levels/level4b.js', './src/data/levels/level4c.js', './src/data/levels/level5.js', './src/data/levels/level5b.js', './src/data/levels/level5c.js', './src/data/levels/level6.js'],
          'surahs': ['./src/data/surahs/067-mulk.js', './src/data/surahs/055-rahman.js', './src/data/surahs/080-abese.js', './src/data/surahs/082-infitar.js', './src/data/surahs/096-alak.js'],
          grammar: ['./src/data/grammar.js', './src/data/vezin.js', './src/data/wazn.js'],
        }
      }
    }
  }
})
