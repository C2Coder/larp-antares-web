import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path'

export default defineConfig({
  plugins: [tailwindcss()],
  server: {
    host: true,
    allowedHosts: ['antares.c2coder.eu', 'ntb', 'localhost']
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        'co-je-larp': resolve(__dirname, 'co-je-larp.html'),
        'tento-rocnik': resolve(__dirname, 'tento-rocnik.html'),
        'jak-na-larp': resolve(__dirname, 'jak-na-larp.html'),
        'o-nas': resolve(__dirname, 'o-nas.html'),
      },
    },
  },
})
