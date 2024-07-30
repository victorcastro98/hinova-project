import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: "/hinova-project/",
  server: {
    proxy: {
      '/api': {
        target: 'http://app.hinovamobile.com.br',
        changeOrigin: true, 
        rewrite: (path) => path.replace(/^\/api/, '') 
      }
    }
  }
})
