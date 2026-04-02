import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path'
import { copyFileSync, mkdirSync, readdirSync, statSync } from 'fs'
import { join } from 'path'

export default defineConfig({
  plugins: [
    tailwindcss(),
    {
      name: 'copy-assets',
      closeBundle() {
        const copyDir = (src, dest) => {
          mkdirSync(dest, { recursive: true })
          const entries = readdirSync(src)
          for (const entry of entries) {
            const srcPath = join(src, entry)
            const destPath = join(dest, entry)
            if (statSync(srcPath).isDirectory()) {
              copyDir(srcPath, destPath)
            } else {
              copyFileSync(srcPath, destPath)
            }
          }
        }
        copyDir('assets', 'dist/assets')
        copyFileSync('CNAME', 'dist/CNAME')
        copyFileSync('sitemap.xml', 'dist/sitemap.xml')
        copyFileSync('robots.txt', 'dist/robots.txt')
      }
    }
  ],
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
