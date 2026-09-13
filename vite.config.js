import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// IMPORTANT: base must match your repo name for GitHub Pages project sites,
// e.g. if your repo is github.com/sanji24096/portfolio, base should be '/portfolio/'.
// If you deploy to a user site (sanji24096.github.io repo itself), set base to '/'.
export default defineConfig({
  plugins: [react()],
  base: '/portfolio/',
})
