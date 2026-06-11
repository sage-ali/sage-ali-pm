import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Change base to '/' if deploying to a custom domain or <username>.github.io root repo.
// For a project page (github.com/<user>/pm-portfolio), keep it as '/pm-portfolio/'.
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  base: '/sage-ali-pm/',
})
