import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/BooBaLoosKitchen/',
  plugins: [react()],
  server: {
    host: true, // This binds the server to all network interfaces
  },
})
