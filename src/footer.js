export function createFooter() {
  return `
  <footer class="bg-text text-white pt-4 md:pt-12 pb-4">
    <div class="mx-auto px-2 md:px-8">
      <div class="flex flex-col items-center gap-4">
        <div class="flex items-center gap-2 md:gap-4">
          <a href="https://www.duha2d.cz/domovsk%C3%A1-str%C3%A1nka"><img src="/assets/logos/duha-2d.jpg" alt="Logo DUHA 2D" class="h-12 md:h-20 rounded w-auto opacity-85 hover:opacity-100 transition-opacity" onerror="this.style.display='none'"></a>
          <a href="https://www.khk.cz/"><img src="/assets/logos/khk.jpg" alt="Logo KHK" class="h-12 md:h-20 rounded w-auto opacity-85 hover:opacity-100 transition-opacity" onerror="this.style.display='none'"></a>
          <a href="https://msmt.gov.cz/"><img src="/assets/logos/msmt.jpg" alt="Logo MŠMT" class="h-12 md:h-20 rounded w-auto opacity-85 hover:opacity-100 transition-opacity" onerror="this.style.display='none'"></a>
        </div>
        <p class="text-white/60 text-sm text-center leading-relaxed max-w-xl">
          Tábor je pořádán pod hlavičkou organizace <a href="https://www.duha2d.cz/domovsk%C3%A1-str%C3%A1nka" target="_blank" rel="noopener" class="text-white/80 hover:text-white">DUHA 2D</a>.
          Vznikl s podporou <a href="https://www.khk.cz/" target="_blank" rel="noopener" class="text-white/80 hover:text-white">Královéhradeckého kraje</a>
          a <a href="https://msmt.gov.cz/" target="_blank" rel="noopener" class="text-white/80 hover:text-white">Ministerstva školství, mládeže a tělovýchovy</a>.
        </p>
        <p class="text-white/70 text-sm">
          Made with ❤️ by <a href="https://github.com/C2Coder" class="text-primary hover:underline">C2Coder</a>
        </p>
      </div>
    </div>
  </footer>
`;
}
