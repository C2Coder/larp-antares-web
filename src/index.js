import "./style.css";
import { createNav, initNav } from "./nav.js";
import { createFooter } from "./footer.js";
import { createLightbox, initLightbox } from "./lightbox.js";

const homeImages = [
  { src: "/assets/home/1.jpg", alt: "Tábor Antares 1" },
  { src: "/assets/home/2.jpg", alt: "Tábor Antares 2" },
  { src: "/assets/home/3.jpg", alt: "Tábor Antares 3" },
];

document.querySelector("#app").innerHTML = `
  ${createNav('uvod')}

  <main class="pt-16">
    <section id="hero" class="relative min-h-screen flex flex-col items-center justify-center">
      <div class="absolute inset-0 z-0">
        <img src="/assets/home/home.jpg" alt="Antares tábor" class="w-full h-full object-cover" onerror="this.style.display='none'">
        <div class="absolute inset-0 bg-text/70"></div>
      </div>
      
      <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center flex-1 flex flex-col justify-center">
        <p class="fc text-xl sm:text-2xl text-text-light-muted italic mb-4">
          Letní larpový tábor
        </p>
        
        <h1 class="text-5xl  md:text-9xl font-black fc tracking-wider text-text-light mb-4">
          ANTARES
        </h1>
        
        <h2 class="text-2xl  md:text-4xl font-bold fc text-text-light-muted mb-6">
          Úsvit pod praporem
        </h2>
        
        <p class="fc text-lg md:text-2xl text-text-light-muted max-w-xl mx-auto mb-10 italic">
          Prožijte s námi tábor v podobě larpu, kde se fantasy stává skutečností.
        </p>
        
        <div class="hero-divider">
          <div class="hero-divider-line"></div>
          <div class="hero-divider-diamond"></div>
          <div class="hero-divider-diamond-lg"></div>
          <div class="hero-divider-diamond"></div>
          <div class="hero-divider-line"></div>
        </div>
        
        <div class="mt-12 gap-4 flex flex-col sm:flex-row justify-center"> 
          <a href="/tento-rocnik" class="px-10 py-4  bg-button-primary/80 text-button-text rounded-lg hover:bg-button-primary-hover/80 transition-colors font-semibold text-lg fc">
            Tento ročník
          </a>
          <a href="https://www.duha2d.cz/t%C3%A1bory/larp" class="px-10 py-4  bg-button-primary/80 text-button-text rounded-lg hover:bg-button-primary-hover/80 transition-colors font-semibold text-lg fc">
            Registrace
          </a>
        </div>
      </div>
    </section>

    <section id="info-cards" class="py-16 bg-background-dark">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div class="bg-background-light rounded-xl p-6 border border-border text-center">
            <svg class="w-8 h-8 text-button-primary mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
            </svg>
            <h3 class="fc font-bold text-xl text-text mb-2 ">Kdy a kde?</h3>
            <p class="text-text-muted">
              23. 8. – 29. 8. 2026<br>
              Sebuč u Chvalkovic<br>
              (okres Náchod)
            </p>
          </div>
          
          <div class="bg-background-light rounded-xl p-6 border border-border text-center">
            <svg class="w-8 h-8 text-button-primary mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
            </svg>
            <h3 class="fc font-bold text-xl text-text mb-2">Pro koho?</h3>
            <p class="text-text-muted">
              Dobrodruzi ve věku<br>
              10–20 let
            </p>
          </div>
          
          <div class="bg-background-light rounded-xl p-6 border border-border text-center">
            <svg class="w-8 h-8 text-button-primary mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"/>
            </svg>
            <h3 class="fc font-bold text-xl text-text mb-2">Kolik?</h3>
            <p class="text-text-muted">
              3 920 Kč
            </p>
          </div>
          
        </div>
      </div>
    </section>
    <section id="break" class=" bg-background-dark">
      <div class="flex w-full hero-divider bg-background-dark">
        <div class="hero-divider-line"></div>
        <div class="hero-divider-diamond"></div>
        <div class="hero-divider-diamond-lg"></div>
        <div class="hero-divider-diamond"></div>
        <div class="hero-divider-line"></div>
      </div>
    </section>
    <section id="o-nas-home" class="py-20 bg-background-dark">
      <div class="mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-center fc font-bold text-4xl text-text mb-8">
          O nás
        </h2>
        <div class=" flex flex-col gap-4 max-w-4xl mx-auto mb-12">
          <p class="text-lg text-text-muted text-center">LARP Antares není klasický letní tábor. Je to týdenní akce, kde se účastníci stávají součástí živého <strong>fantasy příběhu</strong> – oblékají kostýmy a na týden se stávají <strong>rytíři, čaroději, lučištníky </strong> či těmi, kteří raději řeší hádanky než boje. Čeká vás <strong>dobrodružství, hádanky</strong> i nácvik <strong>larpového šermu</strong> s měkčenými zbraněmi. Každý je součástí příběhu a svými rozhodnutími ovlivňuje jeho průběh – každý má své místo a roli. Ponořte se do originálního světa Antares, kde žijí elfové a draci a <strong>kde magie není jen pohádkou</strong>. </p>
          <p class="text-lg text-text-muted text-center">Tábor pořádáme již více než <strong>10 let</strong> – letos začínáme novou kapitolu, <strong>přidáte se?</strong> </p>
        </div>
        <div class="flex w-full hero-divider bg-background-dark">
          <div class="hero-divider-line"></div>
          <div class="hero-divider-diamond"></div>
          <div class="hero-divider-diamond-lg"></div>
          <div class="hero-divider-diamond"></div>
          <div class="hero-divider-line"></div>
        </div>

        <div class="text-center mt-16">
          <a href="/tento-rocnik" class="px-8 py-3 bg-button-primary text-button-text rounded-lg hover:bg-button-primary-hover transition-colors font-semibold text-lg fc">
            Tento ročník
          </a>
        </div>

        <div class="mt-12 grid sm:grid-cols-3 gap-6">
          ${homeImages.map((img, i) => `
            <div class="gallery-item aspect-3/2 bg-linear-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center cursor-pointer overflow-hidden" data-index="${i}">
              <img src="${img.src}" alt="${img.alt}" class="w-full h-full object-cover rounded-xl" onerror="this.parentElement.innerHTML='<span class=\\'text-text-muted\\'>${img.alt}</span>'">
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  </main>

  ${createFooter()}

  ${createLightbox()}
`;

initNav();
initLightbox(homeImages);
