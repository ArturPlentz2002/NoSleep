import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        popup: resolve(__dirname, 'index.html'),
        pagina: resolve(__dirname, 'pagina.html')
      },
      output: {
        entryFileNames: '[name].js'
      }
    },
    outDir: 'dist'
  }
})
