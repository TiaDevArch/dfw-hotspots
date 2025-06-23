import { c as createComponent, a as createAstro, b as addAttribute, r as renderHead, d as renderSlot, e as renderTemplate, f as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_Cewgpebv.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Astro$1 = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  return renderTemplate`<html lang="en" data-astro-cid-sckkx6r4> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>Layout</title><link rel="icon" type="image/svg+xml" href="/favicon.svg">${renderHead()}</head> <body data-astro-cid-sckkx6r4> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "/Users/tiaross/Projects/dfw-hotspots/src/layouts/Layout.astro", void 0);

const $$Astro = createAstro();
const $$About = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$About;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "About", "data-astro-cid-kh7btl4r": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="page-wrapper about-page" data-astro-cid-kh7btl4r> <header class="about-header" data-astro-cid-kh7btl4r> <h1 data-astro-cid-kh7btl4r>About This Project</h1> <nav class="about-nav" data-astro-cid-kh7btl4r> <a href="/" data-astro-cid-kh7btl4r>← Back to Venues</a> <a href="/specialevents" data-astro-cid-kh7btl4r>Upcoming Events</a> </nav> </header> <main data-astro-cid-kh7btl4r> <p class="intro-text" data-astro-cid-kh7btl4r> <strong data-astro-cid-kh7btl4r>DFW Hotspots & Events</strong> was curated and developed by <strong data-astro-cid-kh7btl4r>Tia Ross</strong>, a systems-minded developer, creative strategist, and solutions architect with deep Dallas-Fort Worth roots&mdash;known for building scalable systems and turning digital chaos into clarity.
</p> <p data-astro-cid-kh7btl4r>
After spending five years away from DFW and traveling to 21 countries, Tia returned home to find that the city’s social scene had changed—and not necessarily for the better. Most of what was being hyped online felt like it catered to the 20-something crowd: loud, crowded, overpriced, and not quite the vibe for grown folks looking to actually enjoy themselves.
</p> <p data-astro-cid-kh7btl4r>This app was created with that in mind. Not for the club hoppers. Not for the TikTok crowd. But for people who are 40+, love a good atmosphere, and want to know where to go to unwind, catch a vibe, or be around people our age without all the chaos. Whether you're planning a chill date night, a solo reset, or a lowkey group outing, this guide helps you skip the noise and get straight to the good spots. From live jazz lounges and cultural events to Black-owned brunch spots and scenic patios, everything listed is curated with intention—and real grown folks in mind.</p> <p data-astro-cid-kh7btl4r>Built with <strong data-astro-cid-kh7btl4r>Astro</strong> and powered by <strong data-astro-cid-kh7btl4r>Airtable</strong>, the platform blends clean, modern tech with a purposefully filtered experience. No scrolling through endless videos. No clicking through five apps. Just a smart, easy-to-navigate tool to help you find your scene—and actually enjoy it.
</p> <hr data-astro-cid-kh7btl4r> <h3 class="page-title" data-astro-cid-kh7btl4r>Contact</h3> <p class="intro-text" data-astro-cid-kh7btl4r>
Questions? Got a venue to suggest? Want to collab or just say hey?
<br data-astro-cid-kh7btl4r>
Reach out through any of the options below.
</p> <ul class="contact-list" data-astro-cid-kh7btl4r> <li data-astro-cid-kh7btl4r>
&#128236; Suggest a venue or update:
<a href="https://airtable.com/appv9OQhEjhG36s5H/pagr8Q7DkF8ZIvhAr/form" target="_blank" data-astro-cid-kh7btl4r>Submit here</a> </li> <li data-astro-cid-kh7btl4r> <a href="https://t.me/MsTRoss" target="_blank" data-astro-cid-kh7btl4r> <img src="https://telegram.org/img/t_logo.png" alt="Telegram" style="width: 24px; height: 24px; vertical-align: middle; margin-right: 0.5rem;" data-astro-cid-kh7btl4r>
Message me on Telegram</a> </li> <li data-astro-cid-kh7btl4r>
&#128279; Explore more links:
<a href="https://tiaross.com/links" target="_blank" data-astro-cid-kh7btl4r>tiaross.com/links</a> </li> </ul> </main></div> <h2 class="sub-title" data-astro-cid-kh7btl4r>Credits</h2> <ul class="credits-list" data-astro-cid-kh7btl4r> <li data-astro-cid-kh7btl4r><strong data-astro-cid-kh7btl4r>Creator + Developer:</strong> Tia Ross</li> <li data-astro-cid-kh7btl4r><strong data-astro-cid-kh7btl4r>Framework:</strong> Astro</li> <li data-astro-cid-kh7btl4r><strong data-astro-cid-kh7btl4r>Database:</strong> Airtable</li> <li data-astro-cid-kh7btl4r><strong data-astro-cid-kh7btl4r>Font:</strong> Google Fonts (Bebas Neue, Open Sans)</li> <li data-astro-cid-kh7btl4r><strong data-astro-cid-kh7btl4r>Built in:</strong> Dallas-Fort Worth, Texas &#128156;</li> </ul> <footer class="about-footer" data-astro-cid-kh7btl4r> <p data-astro-cid-kh7btl4r>&copy; ${(/* @__PURE__ */ new Date()).getFullYear()} Tia Ross. All rights reserved.</p> <p data-astro-cid-kh7btl4r>Designed, curated, and developed with love, intention, and Black excellence.<br data-astro-cid-kh7btl4r><br data-astro-cid-kh7btl4r></p> </footer> ` })} `;
}, "/Users/tiaross/Projects/dfw-hotspots/src/pages/about.astro", void 0);

const $$file = "/Users/tiaross/Projects/dfw-hotspots/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$About,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
