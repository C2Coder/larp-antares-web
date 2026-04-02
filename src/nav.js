/**
 * Shared navigation component.
 * @param {string} activePage - One of: 'uvod' | 'co-je-larp' | 'tento-rocnik' | 'jak-na-larp' | 'o-nas'
 * @returns {string} HTML string for the full <header> element
 */
export function createNav(activePage) {
  const links = [
    { id: 'uvod',         href: '/',              label: 'Úvod' },
    { id: 'co-je-larp',   href: '/co-je-larp',    label: 'Co je LARP' },
    { id: 'tento-rocnik', href: '/tento-rocnik',   label: 'Tento ročník' },
    { id: 'jak-na-larp',  href: '/jak-na-larp',    label: 'Jak na LARP' },
    { id: 'o-nas',        href: '/o-nas',          label: 'Kontakty' },
  ];

  const desktopLinks = links.map(({ id, href, label }) => {
    const active = id === activePage ? 'border-b-2 border-primary-dark' : '';
    return `<a href="${href}" class="text-header-text hover:text-primary-dark fc font-semibold transition-colors ${active}">${label}</a>`;
  }).join('\n          ');

  const mobileLinks = links.map(({ id, href, label }) => {
    const active = id === activePage ? 'text-primary-dark border-l-2 border-primary-dark pl-3' : 'pl-4';
    return `<a href="${href}" class="block py-2 ${active} text-header-text hover:text-primary-dark fc font-semibold transition-colors" onclick="document.getElementById('mobile-menu').classList.add('hidden')">${label}</a>`;
  }).join('\n          ');

  return `
  <header class="fixed top-0 left-0 right-0 z-50 bg-header/95 backdrop-blur shadow-sm overflow-visible">
    <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">

        <!-- Logo -->
        <a href="/" class="relative flex items-center" style="height:64px; padding-left:clamp(80px, 10vw, 108px);">
          <div class="logo-pennant">
            <img src="/assets/logos/logo-nbg.png" alt="Logo" class="h-20 w-20 md:h-24 md:w-24 object-contain" onerror="this.style.display='none'">
          </div>
          <span class="ml-2 text-xl md:text-2xl font-bold fc text-header-text">LARP Antares</span>
        </a>

        <!-- Desktop links -->
        <div class="hidden md:flex items-center gap-6">
          ${desktopLinks}
        </div>

        <!-- Right side: socials + hamburger -->
        <div class="flex items-center gap-1">
          <a href="https://instagram.com/larpantares/" target="_blank" rel="noopener" class="p-2 text-header-text hover:text-primary transition-colors">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
          </a>
          <a href="https://www.facebook.com/AntaresLARP" target="_blank" rel="noopener" class="p-2 text-header-text hover:text-primary transition-colors">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
          </a>

          <!-- Hamburger (mobile only) -->
          <button id="hamburger" class="md:hidden p-2 text-header-text hover:text-primary-dark transition-colors" aria-label="Otevřít menu" aria-expanded="false" aria-controls="mobile-menu">
            <svg id="hamburger-icon" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
            <svg id="close-icon" class="w-6 h-6 hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
        </div>
      </div>
    </nav>

    <!-- Mobile menu dropdown -->
    <div id="mobile-menu" class="hidden md:hidden bg-header/98 backdrop-blur border-t border-header-text/20">
      <div class="max-w-7xl mx-auto px-4 pt-10 pb-3 flex flex-col gap-1">
        ${mobileLinks}
      </div>
    </div>
  </header>`;
}

/**
 * Attach hamburger toggle behaviour. Call after innerHTML is set.
 */
export function initNav() {
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobile-menu');
  const hamburgerIcon = document.getElementById('hamburger-icon');
  const closeIcon = document.getElementById('close-icon');

  if (!hamburger || !mobileMenu) return;

  hamburger.addEventListener('click', () => {
    const isOpen = !mobileMenu.classList.contains('hidden');
    mobileMenu.classList.toggle('hidden', isOpen);
    hamburgerIcon.classList.toggle('hidden', !isOpen);
    closeIcon.classList.toggle('hidden', isOpen);
    hamburger.setAttribute('aria-expanded', String(!isOpen));
  });

  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !mobileMenu.contains(e.target)) {
      mobileMenu.classList.add('hidden');
      hamburgerIcon.classList.remove('hidden');
      closeIcon.classList.add('hidden');
      hamburger.setAttribute('aria-expanded', 'false');
    }
  });
}
