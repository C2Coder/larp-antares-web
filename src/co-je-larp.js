import "./style.css";
import { createNav, initNav } from "./nav.js";
import { createFooter } from "./footer.js";
import { createLightbox, initLightbox } from "./lightbox.js";

const coJeLarpImages = [
  { src: "/assets/co-je-larp/1.jpg", alt: "LARP hraní rolí - foto 1", aspect: "aspect-3/2" },
  { src: "/assets/co-je-larp/2.jpg", alt: "LARP hraní rolí - foto 2", aspect: "aspect-3/2" },
  { src: "/assets/co-je-larp/3.jpg", alt: "LARP hraní rolí - foto 3", aspect: "aspect-3/3" },
  { src: "/assets/co-je-larp/4.jpg", alt: "LARPový boj - foto 1", aspect: "aspect-3/2" },
  { src: "/assets/co-je-larp/5.jpg", alt: "LARPový boj - foto 2", aspect: "aspect-[9/16]" },
  { src: "/assets/co-je-larp/6.jpg", alt: "LARPový boj - foto 3", aspect: "aspect-3/2" },
];

const larpIntroImages = coJeLarpImages.slice(0, 2);
const exampleImage = coJeLarpImages[2];
const bojImages = coJeLarpImages.slice(-3);


document.querySelector("#app").innerHTML = `
  ${createNav('co-je-larp')}

  <main class="pt-16">

    <!-- Page header -->
    <section class="py-16 bg-background-dark text-center">
      <div class="flex flex-col max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <p class="fc text-sm sm:text-base text-text-muted tracking-widest uppercase mb-3">Průvodce světem larpu</p>
        <h1 class="fc text-4xl sm:text-5xl lg:text-6xl font-bold text-text mb-6">Co je to LARP?</h1>
        <div class="hero-divider pb-6">
          <div class="hero-divider-line"></div>
          <div class="hero-divider-diamond"></div>
          <div class="hero-divider-diamond-lg"></div>
          <div class="hero-divider-diamond"></div>
          <div class="hero-divider-line"></div>
        </div>
        <p class="text-lg sm:text-xl text-text-muted leading-relaxed">
          LARP Antares je pobytový tábor postavený na principu LARPu. Co LARP znamená?
        </p>
      </div>
    </section>

    <!-- Co je LARP -->
    <section class="py-16 bg-background-light">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col md:flex-row items-start gap-8">

          <!-- Icon column -->
          <div class="shrink-0 mx-auto md:mx-0">
            <div class="w-20 h-20 bg-primary/30 rounded-2xl flex items-center justify-center">
              <svg class="w-10 h-10 text-text" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
              </svg>
            </div>
          </div>

          <!-- Text -->
          <div class="flex flex-col gap-4 text-lg text-text-muted leading-relaxed">
            <p>
              <strong class="text-text">LARP</strong> (z anglického <em>Live Action Role Play</em>) lze přeložit jako
              <strong class="text-text">hraní rolí naživo</strong>. Účastníci si vytvářejí vlastní postavy,
              oblékají kostýmy a na týden se stávají rytíři, čaroději, lučištníky či těmi, kteří raději
              řeší hádanky než boje.
            </p>
            <p>
              Na rozdíl od počítačových her se hráči postavami skutečně <strong class="text-text">stávají</strong> –
              je to dobrodružné skloubení hry, divadla, fantazie a improvizace.
            </p>
          </div>
        </div>
          </div>
          <!-- LARP photos -->
          <div class="grid grid-cols-1 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 sm:grid-cols-2 gap-4 w-full mt-8">
            ${larpIntroImages.map((img, i) => `
              <div class="gallery-item ${img.aspect} bg-background-dark rounded-xl flex items-center justify-center cursor-pointer overflow-hidden" data-index="${i}">
                <img src="${img.src}" alt="${img.alt}" class="w-full h-full object-cover rounded-xl" onerror="this.parentElement.innerHTML='<span class=\\'text-text-muted text-sm p-2 text-center\\'>${img.alt}</span>'">
              </div>
            `).join("")}
          </div>
    </section>

    <!-- Jak to funguje -->
    <section class="py-16 bg-background-dark">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-10">
          <h2 class="fc font-bold text-3xl sm:text-4xl text-text mb-4">Jak to funguje?</h2>
          <div class="hero-divider mx-auto pt-2 pb-6">
            <div class="hero-divider-line"></div>
            <div class="hero-divider-diamond"></div>
            <div class="hero-divider-diamond-lg"></div>
            <div class="hero-divider-diamond"></div>
            <div class="hero-divider-line"></div>
          </div>
        </div>

        <div class="flex flex-col gap-5 text-lg text-text-muted leading-relaxed mb-10">
          <p>
            Organizátoři vytvářejí propracovaný příběh, do kterého se hráči přenášejí.
            Hráči za své postavy rozhodují a jednají – a každé rozhodnutí může ovlivnit průběh celého příběhu.
          </p>
          <p>
            Každý hráč má svou vlastní postavu s jedinečnými
            <strong class="text-text">schopnostmi, dovednostmi, cíli i příběhem</strong>.
          </p>
        </div>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-5 max-w-5xl xl:flex-row gap-4 mx-auto p-4 sm:px-6"> 
          <div class="col-span-3 bg-background-light rounded-2xl border border-border p-6 md:p-8">
            <div class="flex items-center gap-3 mb-5">
              <div class="w-8 h-8 bg-primary/30 rounded-lg flex items-center justify-center shrink-0">
                <svg class="w-4 h-4 text-text" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
                </svg>
              </div>
              <p class="fc font-bold text-text">Příklad ze hry</p>
            </div>
            <div class="flex flex-col gap-3 text-text-muted leading-relaxed">
              <p>
                Ve vesnici se ztratil člověk. Hráči se ho vydají hledat – stopy vedou do lesa.
                V dáli uslyší hlasitý smích  a.
              </p>
              <p>
                Lovec – jeden z hráčů – se rozhodne to prozkoumat, proplíží se blíže a uvidí skupinu
                banditů a ke stromu přivázaného vesničana.
              </p>
              <p class="font-semibold text-text">
                Co hráči udělají? Pokusí se vyjednávat, bandity odlákají, nebo zavelí k útoku?
                Rozhodnutí je jen na nich.
              </p>
            </div>
          </div>
              
          <div class="col-span-2 gallery-item bg-background-dark rounded-xl flex items-center justify-center cursor-pointer overflow-hidden" data-index="${2}">
            <img src="${exampleImage.src}" alt="${exampleImage.alt}" class="w-full h-full object-cover rounded-xl" onerror="this.parentElement.innerHTML='<span class=\\'text-text-muted text-sm p-2 text-center\\'>${exampleImage.alt}</span>'">
          </div>
        </div>
      
    </section>

    <!-- LARPový boj -->
    <section class="py-16 bg-background-light">
      <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-10">
          <h2 class="fc font-bold text-3xl sm:text-4xl text-text mb-4">A co larpový boj?</h2>
          <div class="hero-divider mx-auto pt-2 pb-6">
            <div class="hero-divider-line"></div>
            <div class="hero-divider-diamond"></div>
            <div class="hero-divider-diamond-lg"></div>
            <div class="hero-divider-diamond"></div>
            <div class="hero-divider-line"></div>
          </div>
        </div>

        <div class="flex flex-col gap-4 text-lg text-text-muted leading-relaxed mb-10 max-w-4xl px-4 sm:px-6 lg:px-8 mx-auto">
          <p>
            Součástí našeho larpu je i boj. Hráči (i organizátoři) používají
            <strong class="text-text">měkčené zbraně</strong> speciálně vyrobené pro larp
            (<a href="/jak-na-larp" class="font-semibold text-button-primary hover:underline">více ZDE</a>).
            Na táboře se účastníci naučí základy larpového šermu a pravidla bezpečného boje.
          </p>
          <p>
            Boj je ale jen <strong class="text-text">jednou ze součástí hry</strong> – stejně důležité jsou
            vyjednávání, pátrání, řešení hádanek nebo prostě jen prožívání příběhu své postavy.
          </p>
        </div>

        <!-- Fight photos -->
        <div class="grid grid-cols-1 sm:grid-cols-2 grid-rows-3 sm:grid-rows-2 gap-4">
          <div class="gallery-item  bg-background-dark rounded-xl items-center justify-center cursor-pointer overflow-hidden" data-index="${larpIntroImages.length + 1}">
            <img src="${bojImages[0].src}" alt="${bojImages[0].alt}" class="w-full h-full aspect-3/2 object-cover rounded-xl" onerror="this.parentElement.innerHTML='<span class=\\'text-text-muted text-sm p-2 text-center\\'>${bojImages[0].alt}</span>'">
          </div>
          <div class="row-span-2 gallery-item bg-background-dark rounded-xl items-center justify-center cursor-pointer overflow-hidden" data-index="${larpIntroImages.length + 2}">
            <img src="${bojImages[1].src}" alt="${bojImages[1].alt}" class="w-full h-full aspect-2/3 object-cover rounded-xl" onerror="this.parentElement.innerHTML='<span class=\\'text-text-muted text-sm p-2 text-center\\'>${bojImages[1].alt}</span>'">
          </div>
          <div class="gallery-item bg-background-dark rounded-xl items-center justify-center cursor-pointer overflow-hidden" data-index="${larpIntroImages.length + 3}">
            <img src="${bojImages[2].src}" alt="${bojImages[2].alt}" class="w-full h-full aspect-3/2 object-cover rounded-xl" onerror="this.parentElement.innerHTML='<span class=\\'text-text-muted text-sm p-2 text-center\\'>${bojImages[2].alt}</span>'">
          </div>
        </div>

        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-16 bg-background-dark text-center">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="fc font-bold text-3xl sm:text-4xl text-text mb-4">Chcete se zúčastnit?</h2>
        <div class="hero-divider mx-auto pt-2 pb-8">
          <div class="hero-divider-line"></div>
          <div class="hero-divider-diamond"></div>
          <div class="hero-divider-diamond-lg"></div>
          <div class="hero-divider-diamond"></div>
          <div class="hero-divider-line"></div>
        </div>
        <p class="text-lg text-text-muted leading-relaxed mb-8">
          Podívejte se, co budete na tábor potřebovat – kostýmy, zbraně i vlastní roli.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="/jak-na-larp"
             class="px-10 py-4 bg-button-primary text-button-text rounded-lg hover:bg-button-primary-hover transition-colors font-semibold text-lg fc">
            Jak na LARP
          </a>
          <a href="/tento-rocnik"
             class="px-10 py-4 bg-button-primary text-button-text rounded-lg hover:bg-button-primary-hover transition-colors font-semibold text-lg fc">
            Tento ročník
          </a>
        </div>
      </div>
    </section>

  </main>

  ${createFooter()}

  ${createLightbox()}
`;

initNav();
initLightbox([...coJeLarpImages]);
