import "./style.css";
import { createNav, initNav } from "./nav.js";
import { createFooter } from "./footer.js";
import { createLightbox, initLightbox } from "./lightbox.js";

const campImages = [
  { src: "/assets/tento-rocnik/1.jpg", alt: "Tábor Antares - foto 1", span:"md:col-span-3" },
  { src: "/assets/tento-rocnik/2.jpg", alt: "Tábor Antares - foto 2", span:"md:col-span-3" },
  { src: "/assets/tento-rocnik/3.jpg", alt: "Tábor Antares - foto 3", span:"md:col-span-3" },
  { src: "/assets/tento-rocnik/4.jpg", alt: "Tábor Antares - foto 4", span:"md:col-span-3" },
];

const mapLat = 50.4021514;
const mapLng = 15.9677469;

document.querySelector("#app").innerHTML = `
  ${createNav('tento-rocnik')}

  <main class="pt-16">

    <!-- Page header -->
    <section class="py-16 bg-background-dark text-center">
      <div class="flex flex-col max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <p class="fc text-sm sm:text-base text-text-muted tracking-widest uppercase mb-3">XI. ročník</p>
        <h1 class="fc text-4xl sm:text-5xl lg:text-6xl font-bold text-text mb-6">Tento ročník</h1>
        <div class="hero-divider pb-6">
          <div class="hero-divider-line"></div>
          <div class="hero-divider-diamond"></div>
          <div class="hero-divider-diamond-lg"></div>
          <div class="hero-divider-diamond"></div>
          <div class="hero-divider-line"></div>
        </div>
        <p class="text-lg sm:text-xl text-text-muted leading-relaxed">
          11. ročník tábora se bude konat <strong class="text-text">23. 8. – 29. 8. 2026</strong>, na táborové základně Sebuč
          u obce Chvalkovice (okres Náchod). Tábor je určen pro dobrodruhy (účastníky) ve věku
          <strong class="text-text">10–20 let</strong>.
          Rádi mezi sebou přivítáme i nováčky, kteří nemají s larpem předchozí zkušenost.
        </p>
      </div>
    </section>

    <!-- Location & Accommodation -->
    <section class="py-16 bg-background-light">
      <div class="mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="fc font-bold text-3xl sm:text-4xl text-text mb-4">Poloha, ubytování, vybavení</h2>
        
        <div class="hero-divider mx-auto pt-2 pb-6">
          <div class="hero-divider-line"></div>
          <div class="hero-divider-diamond"></div>
          <div class="hero-divider-diamond-lg"></div>
          <div class="hero-divider-diamond"></div>
          <div class="hero-divider-line"></div>
        </div>

        <div class="flex flex-col xl:flex-row justify-center">
          <div class="max-w-4xl flex flex-col gap-4 text-lg text-text-muted leading-relaxed">
            <p>
              Táborová základna Sebuč je umístěna na klidné louce s blízkým lesem, mezi obcemi
              <strong class="text-text">Chvalkovice</strong> a <strong class="text-text">Dolany</strong>.
              Vedle tábořiště protéká potok Beluňka s možností koupání.
            </p>
            <p>
              Součástí tábořiště je také pevná budova s kuchyní a jídelnou a samostatná koupelna se sprchami.
              Účastníci budou ubytováni ve <strong class="text-text">stanech s podsadou</strong>.
            </p>
            <p>
              Strava je zajištěna <strong class="text-text">5× denně</strong> a pitný režim po celý den.
            </p>

            <div class="hero-divider mx-auto pt-4 pb-2">
             <div class="hero-divider-line"></div>
             <div class="hero-divider-diamond"></div>
             <div class="hero-divider-diamond-lg"></div>
             <div class="hero-divider-diamond"></div>
             <div class="hero-divider-line"></div>
           </div>

            <span class="">
              <p class="text-2xl font-bold mb-2">
                Příjezd na tábor
              </p>
              <p>
                Příjezd účastníků je po <strong>vlastní ose</strong>, čas a bližší informace k místu předání <strong>obdržíte e-mailem</strong>.
              </p>
            </span>
          </div>

          <div class="flex-1 max-w-4xl mt-4 md:mt-0  px-4 sm:px-6 lg:px-8">
            <div class="rounded-2xl overflow-hidden border border-border shadow-lg" style="height: 420px;">
              <iframe
                src="https://frame.mapy.cz/turisticka?x=${mapLng}&y=${mapLat}&z=15&source=coor&id=${mapLng}%2C${mapLat}"
                width="100%"
                height="100%"
                frameborder="0"
                allowfullscreen
                title="Mapa tábořiště Sebuč"
                loading="lazy"
              ></iframe>
            </div>
            <p class="text-center text-sm text-text-muted mt-3">
              Tábořiště Sebuč &mdash;
              <a href="https://mapy.cz/turisticka?x=${mapLng}&y=${mapLat}&z=15&source=coor&id=${mapLng}%2C${mapLat}" target="_blank" rel="noopener" class="underline hover:text-text transition-colors">
                Otevřít na Mapy.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- What to bring -->
    <section class="py-16 bg-background-dark">
      <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="fc font-bold text-3xl sm:text-4xl text-text mb-4">Co s sebou na tábor</h2>
        <div class="hero-divider mx-auto pt-2 pb-6">
          <div class="hero-divider-line"></div>
          <div class="hero-divider-diamond"></div>
          <div class="hero-divider-diamond-lg"></div>
          <div class="hero-divider-diamond"></div>
          <div class="hero-divider-line"></div>
        </div>
        <p class="text-lg text-text-muted mb-8"> Bližší informace obdržíte v <strong>e-mailu</strong>. </p>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">

          <!-- Required documents -->
          <div class="grid grid-cols-1 gap-4 text-left">
            <div class="bg-background-light rounded-xl p-6 border border-border">
              <div class="flex items-start gap-4">
                <div class="w-10 h-10 bg-primary/30 rounded-lg flex items-center justify-center shrink-0">
                  <svg class="w-5 h-5 text-text" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
                </div>
                <div>
                  <h3 class="font-bold text-lg text-text mb-1">Posudek zdravotní způsobilosti</h3>
                  <p class="text-text-muted leading-relaxed">
                    Vyžadován pro účastníky mladší 18 let (postačí kopie).
                    Prosíme o zaslání dokumentu předem - <strong class="text-text">nejpozději do konce července</strong>.
                  </p>
                </div>
              </div>
            </div>
            <div class="bg-background-light rounded-xl p-6 border border-border">
              <div class="flex items-start gap-4">
                <div class="w-10 h-10 bg-primary/30 rounded-lg flex items-center justify-center shrink-0">
                  <svg class="w-5 h-5 text-text" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
                </div>
                <div>
                  <h3 class="font-bold text-lg text-text mb-1">Bezinfekčnost</h3>
                  <p class="text-text-muted leading-relaxed">
                    Vyplňuje zákonný zástupce <strong class="text-text">ve dne odjezdu</strong> na tábor.
                  </p>
                </div>
              </div>
            </div>
            <div class="bg-background-light rounded-xl p-6 border border-border">
              <div class="flex items-start gap-4">
                <div class="w-10 h-10 bg-primary/30 rounded-lg flex items-center justify-center shrink-0">
                  <svg class="w-5 h-5 text-text" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"/></svg>
                </div>
                <div>
                  <h3 class="font-bold text-lg text-text mb-1">Kartička zdravotní pojišťovny</h3>
                  <p class="text-text-muted leading-relaxed">
                    Přiložte kopii průkazu zdravotní pojišťovny účastníka.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- Required things -->
          <div class="grid grid-cols-1 gap-4 text-left">
            <div class="bg-background-light rounded-xl p-6 border border-border">
              <div class="flex items-start gap-4">
                <div class="w-10 h-10 bg-primary/30 rounded-lg flex items-center justify-center shrink-0">
                  <svg class="w-5 h-5 text-text" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
                </div>
                <div>
                  <h3 class="font-bold text-lg text-text mb-1">Doporučený seznam</h3>
                  <p class="text-text-muted leading-relaxed">
                    Doporučený seznam věcí <a href="/PDF" class="font-semibold text-button-primary hover:underline">ZDE</a> - Aktualizovaný seznam obdržíte později v emailu. 
                  </p>
                </div>
              </div>
            </div>
            <div class="bg-background-light rounded-xl p-6 border border-border">
              <div class="flex items-start gap-4">
                <div class="w-10 h-10 bg-primary/30 rounded-lg flex items-center justify-center shrink-0">
                  <svg class="w-5 h-5 text-text" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
                </div>
                <div>
                  <h3 class="font-bold text-lg text-text mb-1">Kostým a měkčené zbraně</h3>
                  <p class="text-text-muted leading-relaxed">
                    Nezbytná součást pro hru, více najdete <a href="/jak-na-larp#kostym" class="font-semibold text-button-primary hover:underline">ZDE</a>
                  </p>
                </div>
              </div>
            </div>
            <div class="bg-background-light rounded-xl p-6 border border-border">
              <div class="flex items-start gap-4">
                <div class="w-10 h-10 bg-primary/30 rounded-lg flex items-center justify-center shrink-0">
                  <svg class="w-5 h-5 text-text" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"/></svg>
                </div>
                <div>
                  <h3 class="font-bold text-lg text-text mb-1">Role</h3>
                  <p class="text-text-muted leading-relaxed">
                    Více o vytváření rolí najdete <a href="/jak-na-larp#role" class="font-semibold text-button-primary hover:underline">ZDE</a>
                  </p>
                </div>
              </div>
            </div>
          </div>     
        </div>

      </div>
    </section>

    <!-- Registration -->
    <section class="py-16 bg-background-light text-center">
      <div class="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="fc font-bold text-3xl sm:text-4xl text-text mb-4">Registrace</h2>
        <div class="hero-divider mx-auto pt-2 pb-6">
          <div class="hero-divider-line"></div>
          <div class="hero-divider-diamond"></div>
          <div class="hero-divider-diamond-lg"></div>
          <div class="hero-divider-diamond"></div>
          <div class="hero-divider-line"></div>
        </div>
        <p class="text-lg text-text-muted leading-relaxed mb-8">
          Registrace probíhá přes stránky <strong class="text-text">Duha 2D</strong>.
        </p>
        <a href="https://www.duha2d.cz/t%C3%A1bory/larp" target="_blank" rel="noopener"
           class="inline-block px-10 py-4 bg-button-primary text-button-text rounded-lg hover:bg-button-primary-hover transition-colors font-semibold text-lg fc">
          Přihlásit se na tábor
        </a>
      </div>
    </section>

    <!-- Camp photo gallery -->
    <section class="py-16 bg-background-dark">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         <h2 class="fc font-bold text-3xl sm:text-4xl text-center text-text mb-4">Fotky tábořiště</h2>
        
        <div class="hero-divider mx-auto pt-2 pb-6">
          <div class="hero-divider-line"></div>
          <div class="hero-divider-diamond"></div>
          <div class="hero-divider-diamond-lg"></div>
          <div class="hero-divider-diamond"></div>
          <div class="hero-divider-line"></div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-6 gap-4 mb-4">
          ${campImages.map((img, i) => `
            <div class="gallery-item aspect-video ${img.span} bg-background-light rounded-xl flex items-center justify-center cursor-pointer overflow-hidden" data-index="${i}">
              <img src="${img.src}" alt="${img.alt}" class="w-full h-full object-cover rounded-xl" onerror="this.parentElement.innerHTML='<span class=\\'text-text-muted text-sm p-2 text-center\\'>${img.alt}</span>'">
            </div>`,)
            .join("")}
        </div>
      </div>
    </section>
  </main>

  ${createFooter()}

  ${createLightbox()}
`;

initNav();
initLightbox(campImages);
