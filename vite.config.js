import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import handlebars from 'vite-plugin-handlebars'
import { dirname, join, resolve } from 'path'
import { copyFileSync, mkdirSync, readdirSync, readFileSync, renameSync, rmSync, statSync } from 'fs'

// Pages of the site. A new page = a new file in pages/ + a line here + a line in sitemap.xml.
const pages = ['index', 'co-je-larp', 'tento-rocnik', 'jak-na-larp', 'o-nas']

const siteDataPath = resolve(__dirname, 'src/site.json')

// A page lives at pages/something.html in the repo but is served from
// /something on the web (and the home page from /). The dev and preview
// servers rewrite URLs the way GitHub Pages does, so links in the markup
// behave identically everywhere.
const devUrls = new Map([['/', '/pages/index.html']])
const previewUrls = new Map()
for (const page of pages) {
  devUrls.set(`/${page}`, `/pages/${page}.html`)
  devUrls.set(`/${page}.html`, `/pages/${page}.html`)
  if (page !== 'index') previewUrls.set(`/${page}`, `/${page}.html`)
}

const rewriteUrls = (urls) => (req, _res, next) => {
  const [path, query] = req.url.split(/(?=\?)/)
  const target = urls.get(path)
  if (target) req.url = target + (query ?? '')
  next()
}

export default defineConfig({
  plugins: [
    tailwindcss(),
    handlebars({
      partialDirectory: resolve(__dirname, 'src/partials'),
      // Re-read on every render so edits to site.json show up as soon as
      // the file is saved, without restarting the dev server.
      context: () => JSON.parse(readFileSync(siteDataPath, 'utf-8')),
      helpers: {
        eq: (a, b) => a === b,
      },
    }),
    {
      // site.json is not a partial, so the Handlebars plugin ignores it.
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
      name: 'page-urls',
      configureServer(server) {
        server.middlewares.use(rewriteUrls(devUrls))
      },
      configurePreviewServer(server) {
        server.middlewares.use(rewriteUrls(previewUrls))
      },
    },
    {
      // Vite copies images referenced from the markup into dist/ itself and
      // hashes them for caching. Only files that must keep an exact path -
      // the ones Vite never sees - belong here.
      name: 'copy-static-files',
      closeBundle() {
        // Vite mirrors the source path, so the pages land in dist/pages/.
        // They belong at the root; every URL inside them is absolute
        // (/assets/...), so moving them breaks nothing.
        for (const page of pages) {
          renameSync(join('dist/pages', `${page}.html`), join('dist', `${page}.html`))
        }
        rmSync('dist/pages', { recursive: true, force: true })

        const copyDirs = [
          'assets/pdf', // <a href> links - Vite does not rewrite those
          'assets/doc',
        ]
        const copyFiles = [
          'assets/logos/logo.webp', // og:image (absolute URL in <head>)
          'assets/android-chrome-192x192.png', // icons referenced from site.webmanifest
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
        pages.map((page) => [page === 'index' ? 'main' : page, resolve(__dirname, `pages/${page}.html`)])
      ),
    },
  },
})
