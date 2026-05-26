import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // আপনার প্রজেক্টে এই লাইনটি থাকতে পারে

// https://vite.dev/config/
export default defineConfig({
  base: './', // এটি প্রজেক্টের সব ফাইলকে রিলেটিভ পাথে অটো-লিংক করে দেবে
  plugins: [react()],
})