import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // Using relative base path ensures 100% compatibility with GitHub Pages
  build: {
    outDir: 'dist',
    sourcemap: false
  }
})
