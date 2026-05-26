import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/',
  plugins: [react()],
  build: {
    // ভিট-এর ডিফল্ট প্রোডাকশন মিনফায়ার ব্যবহার করা হবে যা কোনো এক্সটার্নাল ডিপেন্ডেন্সি খুঁজবে না
    cssMinify: true
  }
})