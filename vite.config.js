import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // এই প্লাগইনটি Tailwind v4 এরর ফিক্স করবে

// https://vite.dev/config/
export default defineConfig({
  base: '/',
  plugins: [
    react(),
    tailwindcss() // প্লাগইনটি এখানে অ্যাক্টিভেট করা হলো
  ],
})