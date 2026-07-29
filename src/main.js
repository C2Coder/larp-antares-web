/**
 * Single entry point for every page.
 *
 * The markup is generated at build time from the .html files and the
 * partials in src/partials/, so only behaviour lives here. Each init()
 * checks whether it has anything to do, so pages don't opt in manually.
 *
 * style.css is deliberately NOT imported here - it is linked from
 * src/partials/head.hbs so the browser blocks on it before first paint.
 */
import { initNav } from "./nav.js";
import { initLightbox } from "./lightbox.js";
import { initImageFallbacks } from "./images.js";

initImageFallbacks();
initNav();
initLightbox();
