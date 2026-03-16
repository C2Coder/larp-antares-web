/**
 * Shared lightbox module.
 *
 * Usage:
 *   import { createLightbox, initLightbox } from "./lightbox.js";
 *
 *   // 1. Include the HTML in your page template:
 *   document.querySelector("#app").innerHTML = `
 *     ...
 *     ${createLightbox()}
 *   `;
 *
 *   // 2. After rendering, bind it to your image array:
 *   initLightbox(images);   // images: Array<{ src: string, alt: string }>
 */

export function createLightbox() {
  return `
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
}

/**
 * Initialise lightbox interactions.
 * @param {Array<{src: string, alt: string}>} images
 */
export function initLightbox(images) {
  let currentIndex = 0;

  function openLightbox(index) {
    currentIndex = index;
    const lightbox = document.getElementById("lightbox");
    const img = document.getElementById("lightbox-image");
    img.src = images[index].src;
    img.alt = images[index].alt;
    lightbox.classList.remove("hidden");
    lightbox.classList.add("flex");
    document.body.style.overflow = "hidden";
  }

  function closeLightbox() {
    const lightbox = document.getElementById("lightbox");
    lightbox.classList.add("hidden");
    lightbox.classList.remove("flex");
    document.body.style.overflow = "";
  }

  function showImage(index) {
    currentIndex = (index + images.length) % images.length;
    const img = document.getElementById("lightbox-image");
    img.src = images[currentIndex].src;
    img.alt = images[currentIndex].alt;
  }

  document.addEventListener("click", (e) => {
    if (e.target.closest(".gallery-item")) {
      const index = parseInt(e.target.closest(".gallery-item").dataset.index);
      openLightbox(index);
    }
    if (
      e.target.closest("#lightbox-close") ||
      (e.target.id === "lightbox" && !e.target.closest("#lightbox-image"))
    ) {
      closeLightbox();
    }
    if (e.target.closest("#lightbox-prev")) {
      showImage(currentIndex - 1);
    }
    if (e.target.closest("#lightbox-next")) {
      showImage(currentIndex + 1);
    }
  });

  document.addEventListener("keydown", (e) => {
    const lightbox = document.getElementById("lightbox");
    if (lightbox.classList.contains("hidden")) return;

    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") showImage(currentIndex - 1);
    if (e.key === "ArrowRight") showImage(currentIndex + 1);
  });
}
