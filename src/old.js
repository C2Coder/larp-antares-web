import "./style.css";

const galleryImages = [
  { src: "/assets/gallery/1.jpg", alt: "Image 1" },
  { src: "/assets/gallery/2.jpg", alt: "Image 2" },
  { src: "/assets/gallery/3.png", alt: "Image 3" },
  { src: "/assets/gallery/4.jpg", alt: "Image 4" },
  { src: "/assets/gallery/5.jpeg", alt: "Image 5" },
  { src: "/assets/gallery/6.png", alt: "Image 6" },
];

document.querySelector("#app").innerHTML = `
  <header class="fixed top-0 left-0 right-0 z-50 bg-header/95 backdrop-blur border-b border-border shadow-sm">
    <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
      <a href="/" class="flex items-center gap-3">  
        <div class="flex items-center gap-3">
          <img src="/assets/logos/logo-nbg-dark.png" alt="Logo" class="h-8 w-8" onerror="this.style.display='none'">
          <span class="text-xl font-bold fc text-primary-dark">Antares</span>
          </div>
        </a>
        
        <div class="hidden md:flex items-center gap-6">
          <a href="/"              class="text-header-text hover:text-primary-dark fc font-semibold transition-colors">Domů</a>
          <a href="#o-nas"         class="text-header-text hover:text-primary-dark fc font-semibold transition-colors">O nás</a>
          <a href="#tento-rocnik"  class="text-header-text hover:text-primary-dark fc font-semibold transition-colors">Tento ročník</a>
          <a href="#galerie"       class="text-header-text hover:text-primary-dark fc font-semibold transition-colors">Galerie</a>
          <a href="#kontakty"      class="text-header-text hover:text-primary-dark fc font-semibold transition-colors">Kontakty</a>
          <a href="#navody"        class="text-header-text hover:text-primary-dark fc font-semibold transition-colors">Návody</a>
        </div>

        <div class="flex items-center gap-3">
          <a href="https://instagram.com/larpantares/" target="_blank" rel="noopener" class="p-2 text-header-text hover:text-primary transition-colors">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
          </a>
          <a href="https://www.facebook.com/AntaresLARP" target="_blank" rel="noopener" class="p-2 text-header-text hover:text-primary transition-colors">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
          </a>
        </div>
      </div>
    </nav>
  </header>

  <main class="pt-16">
    <section id="hero" class="relative min-h-[80vh] flex items-center justify-center bg-linear-to-br from-primary/5 via-background-light to-accent/5">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div class="mb-6">
          <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold mb-2">
            Letní <span class="text-primary-accent">LARP</span> tábor 
          </h1>
          <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold ">
            <span class="text-primary-accent">Antares</span>: Úsvit pod praporem
          </h1>
        </div>
        <p class="fc text-xl text-text-muted max-w-2xl mx-auto mb-8">
         Svítání přináší nový příběh. Přidej se k hrdinům, kteří ho budou psát - ve velkém letním larpovém táboře plném fantasy, dobrodružství a nezapomenutelných momentů.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="https://www.duha2d.cz/t%C3%A1bory/larp" class="px-8 py-3 bg-button-primary text-button-text rounded-lg hover:bg-button-primary-hover transition-colors font-semibold text-lg content-center">
            Přihlaš se
          </a>
          <a href="#o-nas" class="px-8 py-3 border-4 border-button-primary text-button-primary hover:border-button-primary-hover hover:text-button-primary-hover  rounded-lg transition-colors font-semibold text-lg content-center">
            O nás
          </a>
        </div>
      </div>
    </section>

    <section id="o-nas" class="py-20 bg-background-dark">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-center fc font-bold text-4xl text-text mb-8">
          O nás
        </h2>
        <div class="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p class="text-lg text-text-muted mb-6">
               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. 
            </p>
            <p class="text-lg text-text-muted">
               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. 
            </p>
          </div>
          <div class="aspect-video bg-linear-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center">
            <span class="text-text-muted">Image Placeholder</span>
          </div>
        </div>
      </div>
    </section>

<section id="tento-rocnik" class="py-20">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 class="text-center fc font-bold text-4xl text-text mb-8">
      Tento ročník
    </h2>

    <p class="max-w-xl mx-auto text-center text-text-muted leading-relaxed mb-8">
      Přijď prožít týden, kdy se fantasy stane skutečností - v originálním světě Antares,
      kde žijí elfové a draci a magie není jen pohádkou.
    </p>

    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-4">
      <div class="bg-background-dark rounded-xl p-6 border border-border transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
        <svg class="w-7 h-7 text-button-primary mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z"/></svg>
        <h3 class="fc font-semibold text-sm tracking-widest uppercase text-text mb-2">Příběh a role</h3>
        <p class="text-sm text-text-muted leading-relaxed">
          Vytvoř si vlastní postavu a staň se součástí živého příběhu - rytíř, čaroděj, lučištník nebo lstivý diplomat.
          Ty rozhoduješ, jak vše dopadne.
        </p>
      </div>

      <div class="bg-background-dark rounded-xl p-6 border border-border transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
        <svg class="w-7 h-7 text-button-primary mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/></svg>
        <h3 class="fc font-semibold text-sm tracking-widest uppercase text-text mb-2">Svět Antares</h3>
        <p class="text-sm text-text-muted leading-relaxed">
          Více než 10 let budujeme originální fantasy svět plný elfů, draků a magie.
          Vhodné i pro úplné začátečníky - naučíme tě vše.
        </p>
      </div>

      <div class="bg-background-dark rounded-xl p-6 border border-border transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
        <svg class="w-7 h-7 text-button-primary mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
        <h3 class="fc font-semibold text-sm tracking-widest uppercase text-text mb-2">LARPový šerm</h3>
        <p class="text-sm text-text-muted leading-relaxed">
          Součástí programu je nácvik šermu s bezpečnými měkčenými zbraněmi.
          Skutečné souboje - bez obav, zranění nehrozí.
        </p>
      </div>

      <div class="bg-background-dark rounded-xl p-6 border border-border transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
        <svg class="w-7 h-7 text-button-primary mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>
        <h3 class="fc font-semibold text-sm tracking-widest uppercase text-text mb-2">Víc než zábava</h3>
        <p class="text-sm text-text-muted leading-relaxed">
          Tábor rozvíjí fantazii, komunikaci a spolupráci. Zážitky, které si budeš pamatovat celý život.
        </p>
      </div>

      <div class="bg-background-dark rounded-xl p-6 border border-border transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
        <svg class="w-7 h-7 text-button-primary mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/></svg>
        <h3 class="fc font-semibold text-sm tracking-widest uppercase text-text mb-2">Stravování</h3>
        <p class="text-sm text-text-muted leading-relaxed">
          Strava zajištěna 5× denně, nepřetržitý pitný režim.
        </p>
      </div>

      <div class="bg-background-dark rounded-xl p-6 border border-border transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
        <svg class="w-7 h-7 text-button-primary mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg>
        <h3 class="fc font-semibold text-sm tracking-widest uppercase text-text mb-2">Ubytování</h3>
        <p class="text-sm text-text-muted leading-relaxed">
          Stany s podsadou v přírodním areálu.
        </p>
      </div>
    </div>

    <div class="text-center mt-8">
      <p class="text-sm text-text-muted mb-5">Máte dotaz? Neváhejte se na nás obrátit.</p>
      <a href="#kontakty" class="px-8 py-3 bg-button-primary text-button-text rounded-lg hover:bg-button-primary-hover transition-colors font-semibold text-lg content-center">
        Kontakty
      </a>
    </div>
  </div>
</section>

    <section id="galerie" class="py-20 bg-background-dark">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-center fc font-bold text-4xl text-text mb-8">
          Galerie
        </h2>
        <div id="gallery-grid" class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          ${galleryImages.map((img, i) => `
            <div class="gallery-item aspect-square bg-linear-to-br from-primary/20 to-primary/10 rounded-xl flex items-center justify-center cursor-pointer overflow-hidden group" data-index="${i}">
              <img src="${img.src}" alt="${img.alt}" class="w-full h-full object-cover rounded-xl" onerror="this.parentElement.innerHTML='<span class=\\'text-text-muted\\'>${img.alt}</span>'">
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <section id="kontakty" class="py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-center fc font-bold text-4xl text-text mb-8">
          Kontakty
        </h2>
        <div class="max-w-md mx-auto">
          <div class="p-8 bg-background-dark rounded-xl border border-border shadow-lg">
            <div class="text-center mb-6 pb-6 border-b border-border">
              <h3 class="text-xl font-bold text-text">Jan Nápravník</h3>
            </div>
            <div class="flex flex-col gap-4">
              <a href="mailto:ja.napravnik@seznam.cz" class="flex items-center gap-4 group">
                <div class="w-10 h-10 bg-primary/30 rounded-lg flex items-center justify-center shrink-0">
                  <svg class="w-5 h-5 text-text" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                </div>
                <div>
                  <p class="text-sm text-text-muted">E-mail</p>
                  <p class="font-medium text-text group-hover:underline">ja.napravnik@seznam.cz</p>
                </div>
              </a>
              <a href="tel:+420735857336" class="flex items-center gap-4 group">
                <div class="w-10 h-10 bg-primary/30 rounded-lg flex items-center justify-center shrink-0">
                  <svg class="w-5 h-5 text-text" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                </div>
                <div>
                  <p class="text-sm text-text-muted">Telefon</p>
                  <p class="font-medium text-text group-hover:underline">+420 735 857 336</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="navody" class="py-20 bg-background-dark">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-center fc font-bold text-4xl text-text mb-8">
          Návody
        </h2>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <a href="/navody/navod-1.pdf" target="_blank" class="group bg-background-light rounded-xl border border-border hover:shadow-lg transition-all overflow-hidden">
            <div class="aspect-video bg-linear-to-br from-primary/20 to-accent/20 flex items-center justify-center">
              <span class="text-text-muted">Obrázek</span>
            </div>
            <div class="p-4">
              <h3 class="text-lg font-semibold group-hover:text-text transition-colors">Název návodu 1</h3>
              <p class="text-sm text-text-muted mt-1">PDF dokument</p>
            </div>
          </a>
          <a href="/navody/navod-2.pdf" target="_blank" class="group bg-background-light rounded-xl border border-border hover:shadow-lg transition-all overflow-hidden">
            <div class="aspect-video bg-linear-to-br from-primary/20 to-accent/20 flex items-center justify-center">
              <span class="text-text-muted">Obrázek</span>
            </div>
            <div class="p-4">
              <h3 class="text-lg font-semibold group-hover:text-text transition-colors">Název návodu 2</h3>
              <p class="text-sm text-text-muted mt-1">PDF dokument</p>
            </div>
          </a>
          <a href="/navody/navod-3.pdf" target="_blank" class="group bg-background-light rounded-xl border border-border hover:shadow-lg transition-all overflow-hidden">
            <div class="aspect-video bg-linear-to-br from-primary/20 to-accent/20 flex items-center justify-center">
              <span class="text-text-muted">Obrázek</span>
            </div>
            <div class="p-4">
              <h3 class="text-lg font-semibold group-hover:text-text transition-colors">Název návodu 3</h3>
              <p class="text-sm text-text-muted mt-1">PDF dokument</p>
            </div>
          </a>
        </div>
      </div>
    </section>

    
  </main>

  <footer class="bg-text text-white pt-4 md:pt-12 pb-4">
    <div class="mx-auto px-2 md:px-8">
      <div class="flex flex-col items-center gap-6">
        <div class="flex items-center gap-2 md:gap-6">
          <a href="https://www.duha2d.cz/domovsk%C3%A1-str%C3%A1nka"><img src="/assets/logos/duha-2d.jpg" alt="Logo DUHA 2D" class="h-16 md:h-24 rounded w-auto opacity-85 hover:opacity-100 transition-opacity" onerror="this.style.display='none'"></a>
          <a href="https://msmt.gov.cz/"><img src="/assets/logos/msmt.jpg" alt="Logo MŠMT" class="h-16 md:h-24 rounded w-auto opacity-85 hover:opacity-100 transition-opacity" onerror="this.style.display='none'"></a>
          <a href="https://www.khk.cz/"><img src="/assets/logos/khk.jpg" alt="Logo KHK" class="h-16 md:h-24 rounded w-auto opacity-85 hover:opacity-100 transition-opacity" onerror="this.style.display='none'"></a>
        </div>
        <p class="text-white/70 text-sm">
          Made with ❤️ by <a href="https://github.com/C2Coder" class="text-primary hover:underline">C2Coder</a>
        </p>
      </div>
    </div>
  </footer>

  <div id="lightbox" class="fixed inset-0 z-100 bg-black/95 hidden items-center justify-center">
    <button id="lightbox-close" class="absolute top-4 right-4 p-2 text-white/70 hover:text-white transition-colors z-10">
      <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
    </button>
    <button id="lightbox-prev" class="absolute left-4 top-1/2 -translate-y-1/2 p-2 text-white/70 hover:text-white transition-colors z-10">
      <svg class="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/></svg>
    </button>
    <button id="lightbox-next" class="absolute right-4 top-1/2 -translate-y-1/2 p-2 text-white/70 hover:text-white transition-colors z-10">
      <svg class="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
    </button>
    <img id="lightbox-image" src="" alt="" class="max-w-[90vw] max-h-[90vh] object-contain">
  </div>
`;

let currentIndex = 0;

function openLightbox(index) {
  currentIndex = index;
  const lightbox = document.getElementById('lightbox');
  const img = document.getElementById('lightbox-image');
  img.src = galleryImages[index].src;
  img.alt = galleryImages[index].alt;
  lightbox.classList.remove('hidden');
  lightbox.classList.add('flex');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  const lightbox = document.getElementById('lightbox');
  lightbox.classList.add('hidden');
  lightbox.classList.remove('flex');
  document.body.style.overflow = '';
}

function showImage(index) {
  currentIndex = (index + galleryImages.length) % galleryImages.length;
  const img = document.getElementById('lightbox-image');
  img.src = galleryImages[currentIndex].src;
  img.alt = galleryImages[currentIndex].alt;
}

document.addEventListener('click', (e) => {
  if (e.target.closest('.gallery-item')) {
    const index = parseInt(e.target.closest('.gallery-item').dataset.index);
    openLightbox(index);
  }
  if (e.target.closest('#lightbox-close') || (e.target.id === 'lightbox' && !e.target.closest('#lightbox-image'))) {
    closeLightbox();
  }
  if (e.target.closest('#lightbox-prev')) {
    showImage(currentIndex - 1);
  }
  if (e.target.closest('#lightbox-next')) {
    showImage(currentIndex + 1);
  }
});

document.addEventListener('keydown', (e) => {
  const lightbox = document.getElementById('lightbox');
  if (lightbox.classList.contains('hidden')) return;
  
  if (e.key === 'Escape') closeLightbox();
  if (e.key === 'ArrowLeft') showImage(currentIndex - 1);
  if (e.key === 'ArrowRight') showImage(currentIndex + 1);
});
