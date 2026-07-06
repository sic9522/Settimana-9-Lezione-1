import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// base must match the GitHub Pages repo name for a project site:
// https://sic9522.github.io/Settimana-9-Lezione-1/
export default defineConfig({
  base: '/Settimana-9-Lezione-1/',
  plugins: [react()],
})
