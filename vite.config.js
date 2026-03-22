import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/ustaz/',
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          curriculum: ['./src/data/curriculum.js', './src/data/levels/level2b.js', './src/data/levels/level3.js', './src/data/levels/level3b.js', './src/data/levels/level4.js', './src/data/levels/level4b.js', './src/data/levels/level4c.js'],
          grammar: ['./src/data/grammar.js', './src/data/vezin.js', './src/data/wazn.js'],
        }
      }
    }
  }
})
