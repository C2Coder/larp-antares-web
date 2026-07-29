# LARP Antares — web

Statický web (Vite + Tailwind v4). Stránky se píšou jako obyčejné HTML,
opakující se kusy jsou Handlebars partialy v `src/partials/`.

```
npm run dev       # dev server s hot reloadem
npm run build     # vygeneruje dist/
npm run preview   # náhled hotového buildu
```

## Kde co je

| Soubor | K čemu |
|---|---|
| `pages/*.html` | jednotlivé stránky – tady se píše obsah |
| `src/site.json` | termíny, cena, kontakty, seznamy fotek |
| `src/partials/*.hbs` | hlavička, menu, patička, kartičky, oddělovač… |
| `src/partials/icons/*.hbs` | SVG ikonky |
| `src/style.css` | barvy (`@theme`) a vlastní třídy |
| `src/main.js` a spol. | chování (menu, prohlížeč fotek) – žádné HTML |

## Jak se píše stránka

```html
<!DOCTYPE html>
<html lang="cs">
<head>
  {{> head
      title="Tento ročník - Antares LARP"
      description="Popisek pro Google a náhledy na sociálních sítích."
      keywords="antares, larp, …"
      path="/tento-rocnik"
  }}
</head>
<body>
  {{> nav active="tento-rocnik" }}

  <main class="pt-16">
    <section class="py-16 bg-background-dark text-center">
      <h2 class="fc font-bold text-3xl sm:text-4xl text-text">Nadpis</h2>
      {{> divider }}
      <p class="text-lg text-text-muted">Text sekce…</p>
    </section>
  </main>

  {{> footer }}
  {{> lightbox }}   <!-- jen když jsou na stránce fotky -->
</body>
</html>
```

Nová stránka: založit `pages/neco.html`, přidat `'neco'` do seznamu `pages`
ve `vite.config.js` a řádek do `sitemap.xml`.

Soubory jsou v `pages/`, ale na webu stránka žije na `/neco` (úvodní na `/`) —
build je při generování `dist/` přesune do kořene a dev i preview server
adresy překládají stejně, takže odkazy fungují všude stejně.

## Partialy

Vkládají se jako `{{> jméno parametr="hodnota" }}`. Ty, které mají tělo,
se píšou blokově — `{{#> jméno …}}…{{/jméno}}` — a dovnitř můžeš psát
normální HTML (`<strong>`, odkazy…).

| Partial | Příklad |
|---|---|
| `head` | `{{> head title="…" description="…" keywords="…" path="/o-nas" }}` |
| `nav` | `{{> nav active="uvod" }}` — hodnoty jsou `id` ze seznamu `nav` v `site.json` |
| `footer`, `lightbox`, `divider` | bez parametrů |
| `photo` | `{{> photo src="/assets/home/1.webp" alt="Popis" class="aspect-3/2" }}` |
| `stat-card` | `{{#> stat-card icon="icons/ticket" title="Kolik?"}}3 920 Kč{{/stat-card}}` |
| `info-card` | `{{#> info-card icon="icons/doc-text" title="Bezinfekčnost"}}…{{/info-card}}` |
| `doc-link` | `{{> doc-link href=docs.pravidla icon="icons/file" title="Pravidla hry" note="PDF" }}` |
| `contact-card` + `field` | viz `o-nas.html` |

Každý partial má nahoře komentář s vlastním návodem.

## Styly

`src/style.css` se linkuje přímo z `partials/head.hbs`, ne importem v JS —
prohlížeč tak počká na CSS před vykreslením a stránka nikdy neproblikne
neostylovaná. Nepřidávej `import "./style.css"` zpátky do `main.js`.

## Odsazení oddělovačů

Mezery nad a pod `{{> divider }}` řeší **jen** třída `.divider` v `src/style.css`
(`margin: 2rem auto`). Kolem oddělovače proto nikdy nepřidávej `mt-*`, `mb-*`,
`pt-*` ani `pb-*` — jinak se rozejde s ostatními. Nadpis těsně nad ním nechávej
bez `mb-*` ze stejného důvodu.

## Fotky a galerie

`{{> photo }}` je tlačítko, které fotku otevře v prohlížeči. Pořadí ve slideshow
odpovídá pořadí v HTML, nic se nikde nečísluje — stačí přidat další `{{> photo }}`
a na stránce mít `{{> lightbox }}`. Seznamy fotek jsou v `site.json`:

```html
{{#each galleries.home}}
{{> photo src=src alt=alt class="aspect-3/2" }}
{{/each}}
```

Obrázek, který se nenačte, se sám nahradí popiskem z `alt` (`src/images.js`),
takže v HTML nejsou potřeba žádné `onerror`.

## Obrázky v `assets/`

Na co se odkazuje z HTML, si Vite do `dist/` přenese samo (a přidá hash kvůli
cache). Ručně se kopírují jen soubory, které musí zůstat na přesné adrese —
`assets/pdf`, `assets/doc`, `logo.webp` (og:image) a ikony z manifestu.
Seznam je v `vite.config.js` v pluginu `copy-static-files`.
