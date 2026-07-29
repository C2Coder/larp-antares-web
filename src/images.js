/**
 * Fallbacks for images that fail to load.
 *
 * Replaces the per-image onerror="..." attributes the markup used to carry:
 *   - gallery photo -> swapped for its alt text
 *   - any other image -> hidden
 */
export function initImageFallbacks() {
  // Load errors do not bubble, so listen during the capture phase.
  document.addEventListener(
    "error",
    (event) => {
      const img = event.target;
      if (!(img instanceof HTMLImageElement)) return;

      const galleryItem = img.closest(".gallery-item");
      if (galleryItem) {
        const caption = document.createElement("span");
        caption.className = "text-text-muted text-sm p-2 text-center";
        caption.textContent = img.alt;
        galleryItem.replaceChildren(caption);
      } else {
        img.style.display = "none";
      }
    },
    true,
  );
}
