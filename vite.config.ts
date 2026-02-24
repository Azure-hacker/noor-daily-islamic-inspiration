import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Use relative base for Capacitor builds, repo path for GitHub Pages
const isCapacitor = process.env.BUILD_TARGET === 'capacitor';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: isCapacitor ? './' : '/noor-daily-islamic-inspiration/',
})
