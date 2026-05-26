import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // আপনার প্রজেক্টে এই লাইনটি থাকতে পারে

// https://vite.dev/config/
export default defineConfig({
  base: '/',
  plugins: [react()],
  css: {
    // lightningcss-এর এরর বন্ধ করার জন্য এটি esbuild-এ সেট করা হলো
    transformer: 'postcss',
    minify: 'esbuild' 
  },
  build: {
    cssMinify: 'esbuild' // CSS মিনফাই করার জন্য esbuild ব্যবহার করবে
  }
})