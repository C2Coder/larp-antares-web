import "./style.css";
import { createNav, initNav } from "./nav.js";
import { createFooter } from "./footer.js";
import { createLightbox, initLightbox } from "./lightbox.js";

const galleryImages = [
  { src: "/assets/gallery/1.jpg", alt: "Larp Antares - foto 1" },
  { src: "/assets/gallery/2.jpg", alt: "Larp Antares - foto 2" },
  { src: "/assets/gallery/3.png", alt: "Larp Antares - foto 3" },
  { src: "/assets/gallery/4.jpg", alt: "Larp Antares - foto 4" },
  { src: "/assets/gallery/5.jpeg", alt: "Larp Antares - foto 5" },
  { src: "/assets/gallery/6.png", alt: "Larp Antares - foto 6" },
];

document.querySelector("#app").innerHTML = `
  ${createNav('jak-na-larp')}

  <main class="pt-16">

    <!-- Page header -->
    <section class="py-16 bg-background-dark text-center">
      <div class="flex flex-col max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <p class="fc text-sm sm:text-base text-text-muted tracking-widest uppercase mb-3">Průvodce hráče</p>
        <h1 class="fc text-4xl sm:text-5xl lg:text-6xl font-bold text-text mb-6">Jak na LARP</h1>
        <div class="hero-divider pb-6">
          <div class="hero-divider-line"></div>
          <div class="hero-divider-diamond"></div>
          <div class="hero-divider-diamond-lg"></div>
          <div class="hero-divider-diamond"></div>
          <div class="hero-divider-line"></div>
        </div>
        <p class="text-lg sm:text-xl text-text-muted leading-relaxed">
          Co je to larp už víte – pokud ne, podívejte se na sekci
          <a href="/co-je-larp" class="font-semibold text-button-primary hover:underline">Co je to larp</a>.
          Teď se podíváme na to, co na něj budete potřebovat.
        </p>
      </div>
    </section>

    <!-- Kostýmy a zbraně -->
    <section id="kostym" class="py-16 bg-background-light">
      <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-10">
          <h2 class="fc font-bold text-3xl sm:text-4xl text-text mb-4">Kostýmy a zbraně</h2>
          <div class="hero-divider mx-auto pt-2 pb-6">
            <div class="hero-divider-line"></div>
            <div class="hero-divider-diamond"></div>
            <div class="hero-divider-diamond-lg"></div>
            <div class="hero-divider-diamond"></div>
            <div class="hero-divider-line"></div>
          </div>
          <p class="text-lg text-text-muted leading-relaxed max-w-3xl mx-auto">
            Bez tematického kostýmu a larpové zbraně se žádný dobrodruh neobejde.
            Jak je sehnat, jak by měly vypadat a čeho se vyvarovat?
            (Nejen) pro nováčky jsme připravili manuály plné tipů a návodů.
          </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <a href="/assets/pdf/kostymovy-manual.pdf" target="_blank" rel="noopener"
             class="flex items-center gap-4 bg-background-dark rounded-xl p-5 border border-border hover:border-button-primary transition-colors group">
            <div class="w-12 h-12 bg-primary/30 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-primary/50 transition-colors">
              <svg class="w-6 h-6 text-text" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"/>
              </svg>
            </div>
            <div>
              <p class="font-bold text-text fc">Kostýmový manuál</p>
              <p class="text-sm text-text-muted">PDF – tipy na kostým</p>
            </div>
          </a>

          <a href="/assets/pdf/zbranovy-manual.pdf" target="_blank" rel="noopener"
             class="flex items-center gap-4 bg-background-dark rounded-xl p-5 border border-border hover:border-button-primary transition-colors group">
            <div class="w-12 h-12 bg-primary/30 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-primary/50 transition-colors">
              <svg class="w-6 h-6 text-text" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"/>
              </svg>
            </div>
            <div>
              <p class="font-bold text-text fc">Zbraňový manuál</p>
              <p class="text-sm text-text-muted">PDF – co je povoleno</p>
            </div>
          </a>

          <a href="/assets/pdf/navod-na-mec.pdf" target="_blank" rel="noopener"
             class="flex items-center gap-4 bg-background-dark rounded-xl p-5 border border-border hover:border-button-primary transition-colors group">
            <div class="w-12 h-12 bg-primary/30 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-primary/50 transition-colors">
              <svg class="w-6 h-6 text-text" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"/>
              </svg>
            </div>
            <div>
              <p class="font-bold text-text fc">Návod na meč</p>
              <p class="text-sm text-text-muted">PDF – výroba krok za krokem</p>
            </div>
          </a>
        </div>
      </div>
    </section>

    <!-- Tvorba rolí -->
    <section id="role" class="py-16 bg-background-dark">
      <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-10">
          <h2 class="fc font-bold text-3xl sm:text-4xl text-text mb-4">Tvorba rolí</h2>
          <div class="hero-divider mx-auto pt-2 pb-6">
            <div class="hero-divider-line"></div>
            <div class="hero-divider-diamond"></div>
            <div class="hero-divider-diamond-lg"></div>
            <div class="hero-divider-diamond"></div>
            <div class="hero-divider-line"></div>
          </div>
        </div>

        <div class="flex flex-col gap-6 max-w-3xl mx-auto text-lg text-text-muted leading-relaxed mb-10">
          <p>
            Na táboře se účastníci stanou někým jiným – dobrodruhem, hrdinou či kýmkoliv, kým chtějí.
            Každá postava má své povolání, schopnosti i rasu (člověk, elf, trpaslík,&nbsp;…),
            jedinečný charakter i příběh.
          </p>
          <p>
            Roli si účastníci tvoří již před táborem pomocí přiloženého <strong class="text-text">Charakterníku</strong>.
            Organizátoři ji pak doladí tak, aby zapadla do letošního příběhu.
          </p>
          <p>
            Nevíš si rady? Nevadí. Můžeš poslat hotovou roli, jen její kostru, nebo třeba jen jednu větu –
            <em>"chci být elfí lučištník"</em> – i to nám stačí. Zbytek doplníme za tebe.
            Inspiraci najdeš v ukázkovém charakterníku.
          </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto mb-10">
          <a href="/assets/pdf/charakternik.pdf" target="_blank" rel="noopener"
             class="flex items-center gap-4 bg-background-light rounded-xl p-5 border border-border hover:border-button-primary transition-colors group">
            <div class="w-12 h-12 bg-primary/30 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-primary/50 transition-colors">
              <svg class="w-6 h-6 text-text" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"/>
              </svg>
            </div>
            <div>
              <p class="font-bold text-text fc">Charakterník</p>
              <p class="text-sm text-text-muted">PDF – formulář k vyplnění</p>
            </div>
          </a>

          <a href="/assets/pdf/ukazkovy-charakternik.pdf" target="_blank" rel="noopener"
             class="flex items-center gap-4 bg-background-light rounded-xl p-5 border border-border hover:border-button-primary transition-colors group">
            <div class="w-12 h-12 bg-primary/30 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-primary/50 transition-colors">
              <svg class="w-6 h-6 text-text" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"/>
              </svg>
            </div>
            <div>
              <p class="font-bold text-text fc">Ukázkový charakterník</p>
              <p class="text-sm text-text-muted">PDF – příklad hotové role</p>
            </div>
          </a>
        </div>

        <div class="bg-background-light rounded-xl p-6 border border-border max-w-3xl mx-auto text-center">
          <p class="text-text-muted leading-relaxed mb-2">
            Role posílejte na e-mail
            <a href="mailto:ja.napravnik@seznam.cz" class="font-semibold text-button-primary hover:underline">ja.napravnik@seznam.cz</a>
            do <strong class="text-text">30. 6. 2026</strong>.
          </p>
          <p class="text-sm text-text-muted">
            Preferujeme přímou komunikaci s účastníkem, lze ovšem komunikovat tyto role přes zákonného zástupce účastníka.
          </p>
        </div>
      </div>
    </section>

    <!-- Prolog -->
    <section id="prolog" class="py-16 bg-background-light">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p class="fc text-sm sm:text-base text-text-muted tracking-widest uppercase mb-3">Příběh letošního ročníku</p>
        <h2 class="fc font-bold text-3xl sm:text-4xl text-text mb-4">Prolog: Úsvit pod praporem</h2>
        <div class="hero-divider mx-auto pt-2 pb-8">
          <div class="hero-divider-line"></div>
          <div class="hero-divider-diamond"></div>
          <div class="hero-divider-diamond-lg"></div>
          <div class="hero-divider-diamond"></div>
          <div class="hero-divider-line"></div>
        </div>

        <div class="flex flex-col gap-5 text-lg text-text-muted leading-relaxed italic max-w-2xl mx-auto">
          <p>
            Strach se šíří krajem a místní se připravují na nejhorší.
          </p>
          <p>
            Poslední možností je vydat se do hlubin lesa.
            Měl jsi se mu vyhýbat, teď do něj ale musíš vstoupit.
            Les je plný magie, nadpřirozena a bytostí.
          </p>
          <p>
            Porozumíš jeho tajemstvím a nalezneš v něm pomoc?
          </p>
          <p class="font-semibold not-italic text-text">
            Spojíš síly s ostatními a postavíš se hrozbě?
          </p>
        </div>
      </div>
    </section>

    <!-- Pravidla a schopnosti -->
    <section id="pravidla" class="py-16 bg-background-dark">
      <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-10">
          <h2 class="fc font-bold text-3xl sm:text-4xl text-text mb-4">Obecná pravidla a stromy schopností</h2>
          <div class="hero-divider mx-auto pt-2 pb-6">
            <div class="hero-divider-line"></div>
            <div class="hero-divider-diamond"></div>
            <div class="hero-divider-diamond-lg"></div>
            <div class="hero-divider-diamond"></div>
            <div class="hero-divider-line"></div>
          </div>
        </div>

        <div class="bg-background-light rounded-xl p-8 border border-border text-center max-w-2xl mx-auto">
          <div class="w-14 h-14 bg-primary/30 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg class="w-7 h-7 text-text" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
          </div>
          <h3 class="fc font-bold text-xl text-text mb-3">Připravujeme</h3>
          <p class="text-text-muted leading-relaxed">
            Pravidla a stromy schopností pro letošní ročník právě finalizujeme –
            brzy zde najdete vše potřebné.
          </p>
        </div>
      </div>
    </section>

    <!-- Inspiromat & galerie -->
    <section id="inspiromat" class="py-16 bg-background-light">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-10">
          <h2 class="fc font-bold text-3xl sm:text-4xl text-text mb-4">Inspiromat</h2>
          <div class="hero-divider mx-auto pt-2 pb-6">
            <div class="hero-divider-line"></div>
            <div class="hero-divider-diamond"></div>
            <div class="hero-divider-diamond-lg"></div>
            <div class="hero-divider-diamond"></div>
            <div class="hero-divider-line"></div>
          </div>
          <p class="text-lg text-text-muted leading-relaxed max-w-2xl mx-auto mb-4">
            Hledáte inspiraci na kostým nebo nevíte, jaké povolání vybrat?
            Mrkněte na fotky z minulých ročníků.
          </p>
          <a href="https://www.facebook.com/AntaresLARP" target="_blank" rel="noopener"
             class="inline-flex items-center gap-2 text-button-primary font-semibold hover:underline">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            Více fotek na Facebooku
          </a>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10">
          ${galleryImages.map((img, i) => `
            <div class="gallery-item aspect-[4/3] bg-background-dark rounded-xl flex items-center justify-center cursor-pointer overflow-hidden" data-index="${i}">
              <img src="${img.src}" alt="${img.alt}" class="w-full h-full object-cover rounded-xl" onerror="this.parentElement.innerHTML='<span class=\\'text-text-muted text-sm p-2 text-center\\'>${img.alt}</span>'">
            </div>
          `).join("")}
        </div>

        <div class="text-center">
          <p class="text-text-muted leading-relaxed mb-2">
            Stále si nejste jistí? Neváhejte se na nás obrátit – rádi poradíme.
          </p>
          <a href="mailto:ja.napravnik@seznam.cz" class="font-semibold text-button-primary hover:underline">
            ja.napravnik@seznam.cz
          </a>
        </div>
      </div>
    </section>

  </main>

  ${createFooter()}

  ${createLightbox()}
`;

initNav();
initLightbox(galleryImages);
