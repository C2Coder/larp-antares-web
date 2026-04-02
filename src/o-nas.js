import "./style.css";
import { createNav, initNav } from "./nav.js";
import { createFooter } from "./footer.js";

document.querySelector("#app").innerHTML = `
  ${createNav('o-nas')}

  <main class="pt-16">

    <!-- Page header -->
    <section class="py-16 bg-background-dark text-center">
      <div class="flex flex-col max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <p class="fc text-sm sm:text-base text-text-muted tracking-widest uppercase mb-3">LARP Antares</p>
        <h1 class="fc text-4xl sm:text-5xl lg:text-6xl font-bold text-text mb-6">Kontakty</h1>
        <div class="hero-divider pb-6">
          <div class="hero-divider-line"></div>
          <div class="hero-divider-diamond"></div>
          <div class="hero-divider-diamond-lg"></div>
          <div class="hero-divider-diamond"></div>
          <div class="hero-divider-line"></div>
        </div>
        <p class="text-lg sm:text-xl text-text-muted leading-relaxed">
          Máte otázky? Neváhejte se obrátit přímo na organizátory.
        </p>
      </div>
    </section>

    <!-- Contact cards -->
    <section class="py-16 bg-background-light">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">

          <!-- Hlavní vedoucí -->
          <div class="bg-background-dark rounded-2xl border border-border p-6 flex flex-col gap-4">
            <div class="flex items-center gap-3 mb-1">
              <div class="w-10 h-10 bg-primary/30 rounded-lg flex items-center justify-center shrink-0">
                <svg class="w-5 h-5 text-text" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                </svg>
              </div>
              <h2 class="fc font-bold text-xl text-text">Hlavní vedoucí</h2>
            </div>

            <div class="flex flex-col gap-3">
              <div>
                <p class="text-sm text-text-muted uppercase tracking-widest mb-0.5">Jméno</p>
                <p class="font-semibold text-text text-lg">Jan "Jedi" Nápravník</p>
              </div>

              <div>
                <p class="text-sm text-text-muted uppercase tracking-widest mb-0.5">E-mail</p>
                <a href="mailto:ja.napravnik@seznam.cz" class="font-semibold text-text hover:underline break-all">
                  ja.napravnik@seznam.cz
                </a>
              </div>

              <div>
                <p class="text-sm text-text-muted uppercase tracking-widest mb-0.5">Telefon</p>
                <a href="tel:+420735857336" class="font-semibold text-text hover:underline">
                  +420 735 857 336
                </a>
              </div>
            </div>
          </div>

          <!-- Napište nám -->
          <div class="bg-background-dark rounded-2xl border border-border p-6 flex flex-col gap-4">
            <div class="flex items-center gap-3 mb-1">
              <div class="w-10 h-10 bg-primary/30 rounded-lg flex items-center justify-center shrink-0">
                <svg class="w-5 h-5 text-text" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
              </div>
              <h2 class="fc font-bold text-xl text-text">Napište nám</h2>
            </div>

            <div class="flex flex-col gap-3">
              <div>
                <p class="text-sm text-text-muted uppercase tracking-widest mb-0.5">E-mail</p>
                <a href="mailto:larpantarescz@gmail.com" class="font-semibold text-text hover:underline break-all">
                  larpantarescz@gmail.com
                </a>
              </div>

              <div>
                <p class="text-sm text-text-muted uppercase tracking-widest mb-1.5">Nebo nás najdete na</p>
                <div class="flex flex-col gap-2">
                  <a href="https://instagram.com/larpantares/" target="_blank" rel="noopener"
                     class="flex items-center gap-2 text-text hover:underline font-semibold">
                    <svg class="w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                    @larpantares
                  </a>
                  <a href="https://www.facebook.com/AntaresLARP" target="_blank" rel="noopener"
                     class="flex items-center gap-2 text-text hover:underline font-semibold">
                    <svg class="w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                    @AntaresLARP
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

  </main>

  ${createFooter()}
`;

initNav();
