import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/search': {
        target: 'http://127.0.0.1:3000',
        changeOrigin: true,
        secure: false,
      }
    },
    port: 5173,
  },
})
