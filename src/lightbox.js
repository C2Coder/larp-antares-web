/**
 * Gallery lightbox.
 *
 * The image list comes from the DOM - every .gallery-item on the page, in
 * markup order. Adding a photo therefore means dropping in another
 * {{> photo }}; no indices are maintained anywhere.
 */
export function initLightbox() {
  const lightbox = document.getElementById("lightbox");
  const items = [...document.querySelectorAll(".gallery-item")];
  if (!lightbox || items.length === 0) return;

  const image = document.getElementById("lightbox-image");
  const closeButton = document.getElementById("lightbox-close");

  // Snapshot taken up front, so a photo that fails to load and gets
  // replaced by its caption cannot shift the order.
  const photos = items.map((item) => {
    const img = item.querySelector("img");
    return { src: img?.src ?? "", alt: img?.alt ?? "" };
  });

  let currentIndex = 0;

  function show(index) {
    currentIndex = (index + photos.length) % photos.length;
    image.src = photos[currentIndex].src;
    image.alt = photos[currentIndex].alt;
  }

  function open(index) {
    show(index);
    lightbox.classList.remove("hidden");
    lightbox.classList.add("flex");
    document.body.style.overflow = "hidden";
    closeButton?.focus();
  }

  function close() {
    lightbox.classList.add("hidden");
    lightbox.classList.remove("flex");
    document.body.style.overflow = "";
  }

  document.addEventListener("click", (event) => {
    const item = event.target.closest(".gallery-item");
    if (item) {
      const index = items.indexOf(item);
      if (index !== -1) open(index);
      return;
    }

    if (event.target.closest("#lightbox-close") || event.target === lightbox) close();
    if (event.target.closest("#lightbox-prev")) show(currentIndex - 1);
    if (event.target.closest("#lightbox-next")) show(currentIndex + 1);
  });

  document.addEventListener("keydown", (event) => {
    if (lightbox.classList.contains("hidden")) return;

    if (event.key === "Escape") close();
    if (event.key === "ArrowLeft") show(currentIndex - 1);
    if (event.key === "ArrowRight") show(currentIndex + 1);
  });
}
