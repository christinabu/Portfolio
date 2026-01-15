/// <reference types="vite/client" />

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/christin-portfolio/',
  define: {
    'import.meta.env.BASE_URL': JSON.stringify('/christin-portfolio/')
  },
  resolve: {
    alias: {
      '@': '/src'
    }
  }
}) 