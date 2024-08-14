import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/rajpoot-backend.vercel.app
export default defineConfig({
  server: {
    proxy: {
      "/api": {
        target: "https://tenrin-den-backend.vercel.app",
        changeOrigin: true,
        secure: false,
      },
    },
  },
  plugins: [react()],
})
