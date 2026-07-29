import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import handlebars from 'vite-plugin-handlebars'
import { dirname, join, resolve } from 'path'
import { copyFileSync, mkdirSync, readdirSync, readFileSync, statSync } from 'fs'

// Stránky webu. Nová stránka = nový .html v kořeni + řádek sem + řádek do sitemap.xml.
const pages = ['index', 'co-je-larp', 'tento-rocnik', 'jak-na-larp', 'o-nas']

const siteDataPath = resolve(__dirname, 'src/site.json')

export default defineConfig({
  plugins: [
    tailwindcss(),
    handlebars({
      partialDirectory: resolve(__dirname, 'src/partials'),
      // Čte se při každém renderu, aby se změny v site.json projevily
      // hned po uložení (bez restartu dev serveru).
      context: () => JSON.parse(readFileSync(siteDataPath, 'utf-8')),
      helpers: {
        eq: (a, b) => a === b,
      },
    }),
    {
      // site.json není partial, takže na něj plugin sám nereaguje.
      name: 'reload-on-site-data-change',
      configureServer(server) {
        server.watcher.add(siteDataPath)
        server.watcher.on('change', (file) => {
          if (resolve(file) === siteDataPath) {
            server.ws.send({ type: 'full-reload' })
          }
        })
      },
    },
    {
      // Obrázky, na které se odkazuje z HTML, si do dist/ přenese Vite samo
      // (a přidá jim hash kvůli cache). Sem patří jen soubory, které musí
      // zůstat na přesné adrese, protože je Vite nevidí.
      name: 'copy-static-files',
      closeBundle() {
        const copyDirs = [
          'assets/pdf', // odkazy <a href> – ty Vite nepřepisuje
          'assets/doc',
        ]
        const copyFiles = [
          'assets/logos/logo.webp', // og:image (absolutní URL v <head>)
          'assets/android-chrome-192x192.png', // ikony ze site.webmanifest
          'assets/android-chrome-512x512.png',
          'CNAME',
          'sitemap.xml',
          'robots.txt',
        ]

        const copyDir = (src, dest) => {
          mkdirSync(dest, { recursive: true })
          for (const entry of readdirSync(src)) {
            const srcPath = join(src, entry)
            const destPath = join(dest, entry)
            if (statSync(srcPath).isDirectory()) copyDir(srcPath, destPath)
            else copyFileSync(srcPath, destPath)
          }
        }

        for (const dir of copyDirs) copyDir(dir, join('dist', dir))
        for (const file of copyFiles) {
          mkdirSync(dirname(join('dist', file)), { recursive: true })
          copyFileSync(file, join('dist', file))
        }
      }
    }
  ],
  server: {
    host: true,
    allowedHosts: ['larp-antares.cz', 'ntb', 'localhost']
  },
  build: {
    rollupOptions: {
      input: Object.fromEntries(
        pages.map((page) => [page === 'index' ? 'main' : page, resolve(__dirname, `${page}.html`)])
      ),
    },
  },
})
