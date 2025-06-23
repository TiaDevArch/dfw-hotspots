import { c as createComponent, e as renderTemplate, g as renderScript, b as addAttribute, r as renderHead } from '../chunks/astro/server_Cewgpebv.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
/* empty css                                 */
import { g as getVenues } from '../chunks/getVenues_C4cvxqJf.mjs';
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Specialevents = createComponent(async ($$result, $$props, $$slots) => {
  await getVenues();
  const apiKey = "patMSvvkIboa3YFYf.e9874cde2970af4197a39ec17e0fb7d5f509ecc2417871ec0e905492c432a7ed";
  const baseId = "appv9OQhEjhG36s5H";
  const tableName = "SpecialEvents";
  let allEvents = [];
  let upcomingEvents = [];
  let pastEvents = [];
  try {
    const res = await fetch(`https://api.airtable.com/v0/${baseId}/${tableName}?view=Grid%20view`, {
      headers: {
        Authorization: `Bearer ${apiKey}`
      }
    });
    const json = await res.json();
    if (!json.records) {
      console.error("⚠️ Airtable response missing 'records':", json);
    }
    allEvents = (json.records || []).map((r) => r.fields).filter((e) => e["Event Date"]);
    const now = /* @__PURE__ */ new Date();
    const today = /* @__PURE__ */ new Date();
    today.setHours(0, 0, 0, 0);
    upcomingEvents = allEvents.filter((e) => new Date(e["Event Date"]) >= today);
    pastEvents = allEvents.filter((e) => new Date(e["Event Date"]) < today);
    upcomingEvents.sort((a, b) => new Date(a["Event Date"]) - new Date(b["Event Date"]));
    pastEvents.sort((a, b) => new Date(b["Event Date"]) - new Date(a["Event Date"]));
  } catch (error) {
    console.error("❌ Failed to fetch Airtable data:", error);
  }
  return renderTemplate(_a || (_a = __template(['<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>DFW Hotspots | Special Events in Dallas-Fort Worth</title><meta name="description" content="Explore the best restaurants, bars, lounges, brunch spots, and nightlife venues across Dallas-Fort Worth with curated vibes, audience, and atmospheres."><meta name="keywords" content="Dallas nightlife, DFW hotspots, brunch in Dallas, date spots DFW, live music Dallas, black-owned venues Dallas, chill bars Fort Worth, where to go out in DFW"><meta name="author" content="Tia Ross"><!-- Open Graph for social sharing --><meta property="og:title" content="DFW Hotspot Vibes"><meta property="og:description" content="Find your vibe in Dallas-Fort Worth — Brunch, date nights, happy hours, lounges, Black-owned gems and more."><meta property="og:image" content="https://github.com/TiaDevArch/dfw-hotspots/blob/main/src/assets/Logo-DFWHotspots-s.png"><meta property="og:url" content="https://dfw-hotspot-vibes.netlify.app/"><meta property="og:type" content="website">', '</head> <body> <div class="header"> <img src="/Logo-DFWHotspots-s.png" alt="DFW Hotspots" description="Explore the best restaurants, bars, lounges, brunch spots, and nightlife venues across Dallas-Fort Worth with curated vibes, audience, and atmospheres" title="DFW Hotspots"> <header class="about-header"> <h2>Special Events in DFW</h2> <nav class="about-nav"> <a href="/">← Back to Venues</a> <a href="/about">About</a> </nav> </header> <p>Explore special events happening around Dallas-Fort Worth!</p> <!-- UPCOMING EVENTS --> <h3 class="section-heading">Upcoming Events</h3> <div class="card-grid-wrapper"> <div class="card-grid" id="special-event-container"> ', ' </div> </div> <!-- PAST EVENTS --> <h3 class="section-heading">Past Events</h3> <div class="card-grid-wrapper"> <div class="card-grid"> ', ' </div> </div> <!-- Footer --> <footer style="margin-top: 4rem; padding: 2rem 1rem; text-align: center; font-size: 0.8rem; color: #555;"> <div style="transform: scale(0.5); transform-origin: top center;"> <script type="text/javascript" src="https://cdnjs.buymeacoffee.com/1.0.0/button.prod.min.js" data-name="bmc-button" data-slug="tiaross" data-color="#BD5FFF" data-emoji="📖" data-font="Bree" data-text="Buy me a book" data-outline-color="#000000" data-font-color="#ffffff" data-coffee-color="#FFDD00">\n  </script> </div> <a href="https://tiaross.net/w/wp-content/uploads/TiaRossDev.png" target="_blank"> <img src="https://tiaross.net/w/wp-content/uploads/TiaRossDev-rs.png" alt="Digital nomad Tia Ross, pictured in a Getsemani, Cartagena, Colombia, rooftop pool with Bocagrande in the background" style="width: 80px; height: 80px; border-radius: 50%; margin-top: 0.5rem;"> </a> <p>📍 DFW Hotspots & Events: No more ‘I don’t know where to go’ nights.<br> <a href="/about">About</a> | A Tia Ross Development</p> </footer> ', " </div> </body></html>"])), renderHead(), upcomingEvents.map((event, index) => renderTemplate`<div class="card"${addAttribute(index, "data-index")}${addAttribute((event["City"] || "").toLowerCase(), "data-city")}${addAttribute((event["Area"] || "").toLowerCase(), "data-area")}${addAttribute((event["Tags"] || []).join(",").toLowerCase(), "data-tags")}> <h2>${event["Event Name"]}</h2> ${event.Description && renderTemplate`<p>${event.Description}</p>`} <div class="meta"> ${event.Venue && renderTemplate`<div class="meta-line"><strong>Venue:</strong> ${event.Venue}</div>`} ${event.City && renderTemplate`<div class="meta-line"><strong>City:</strong> ${event.City}</div>`} ${event.Area && renderTemplate`<div class="meta-line"><strong>Area:</strong> ${event.Area}</div>`} </div> ${event["Event Date"] && renderTemplate`<p class="when-to-go"> <i>${event["Event Date"]}</i> ${event["Event Time"] && `| ${event["Event Time"]}`} </p>`} ${event["Event URL"] && renderTemplate`<div class="links"> <a${addAttribute(event["Event URL"], "href")} target="_blank" rel="noopener noreferrer">
More Info
</a> </div>`} </div>`), pastEvents.map((event, index) => renderTemplate`<div class="card past-event"${addAttribute(index, "data-index")}${addAttribute((event["City"] || "").toLowerCase(), "data-city")}${addAttribute((event["Area"] || "").toLowerCase(), "data-area")}${addAttribute((event["Tags"] || []).join(",").toLowerCase(), "data-tags")}> <h2>${event["Event Name"]}</h2> ${event.Description && renderTemplate`<p>${event.Description}</p>`} <div class="meta"> ${event.Venue && renderTemplate`<div class="meta-line"><strong>Venue:</strong> ${event.Venue}</div>`} ${event.City && renderTemplate`<div class="meta-line"><strong>City:</strong> ${event.City}</div>`} ${event.Area && renderTemplate`<div class="meta-line"><strong>Area:</strong> ${event.Area}</div>`} </div> ${event["Event Date"] && renderTemplate`<p class="when-to-go"><i>${event["Event Date"]}</i></p>`} ${event["Event Page URL"] && renderTemplate`<div class="links"> <a${addAttribute(event["Event Page URL"], "href")} target="_blank" rel="noopener noreferrer">
More Info
</a> </div>`} </div>`), renderScript($$result, "/Users/tiaross/Projects/dfw-hotspots/src/pages/specialevents.astro?astro&type=script&index=0&lang.ts"));
}, "/Users/tiaross/Projects/dfw-hotspots/src/pages/specialevents.astro", void 0);
const $$file = "/Users/tiaross/Projects/dfw-hotspots/src/pages/specialevents.astro";
const $$url = "/specialevents";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Specialevents,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
