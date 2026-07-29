/**
 * Header behaviour - the mobile dropdown menu.
 * The markup itself lives in src/partials/nav.hbs.
 */
export function initNav() {
  const hamburger = document.getElementById("hamburger");
  const mobileMenu = document.getElementById("mobile-menu");
  const hamburgerIcon = document.getElementById("hamburger-icon");
  const closeIcon = document.getElementById("close-icon");

  if (!hamburger || !mobileMenu) return;

  function setOpen(open) {
    mobileMenu.classList.toggle("hidden", !open);
    hamburgerIcon.classList.toggle("hidden", open);
    closeIcon.classList.toggle("hidden", !open);
    hamburger.setAttribute("aria-expanded", String(open));
  }

  hamburger.addEventListener("click", () => {
    setOpen(mobileMenu.classList.contains("hidden"));
  });

  mobileMenu.querySelectorAll("[data-mobile-link]").forEach((link) => {
    link.addEventListener("click", () => setOpen(false));
  });

  // Close when clicking outside the menu
  document.addEventListener("click", (event) => {
    if (!hamburger.contains(event.target) && !mobileMenu.contains(event.target)) {
      setOpen(false);
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") setOpen(false);
  });
}
