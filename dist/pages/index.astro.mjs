import { c as createComponent, e as renderTemplate, b as addAttribute, r as renderHead } from '../chunks/astro/server_Cewgpebv.mjs';
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
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const venues = await getVenues();
  venues.sort((a, b) => {
    const aVibe = a?.Vibe ? Array.isArray(a.Vibe) ? a.Vibe.join(", ") : a.Vibe : "";
    const bVibe = b?.Vibe ? Array.isArray(b.Vibe) ? b.Vibe.join(", ") : b.Vibe : "";
    const aMature = aVibe.toLowerCase().includes("mature crowd") ? 1 : 0;
    const bMature = bVibe.toLowerCase().includes("mature crowd") ? 1 : 0;
    return bMature - aMature;
  });
  return renderTemplate(_a || (_a = __template(['<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate"><meta http-equiv="Pragma" content="no-cache"><meta http-equiv="Expires" content="0"><title>DFW Hotspots & Events | Best Places to Go Out in Dallas-Fort Worth</title><meta name="description" content="Explore the best restaurants, bars, lounges, brunch spots, and nightlife venues across Dallas-Fort Worth with curated vibes, audience, and atmospheres."><meta name="keywords" content="Dallas nightlife, DFW hotspots, brunch in Dallas, date spots DFW, live music Dallas, black-owned venues Dallas, chill bars Fort Worth, where to go out in DFW"><meta name="author" content="Tia Ross"><!-- Open Graph for social sharing --><meta property="og:title" content="DFW Hotspots & Events"><meta property="og:description" content="Find your vibe in Dallas-Fort Worth \u2014 Brunch, date nights, happy hours, lounges, Black-owned gems and more."><meta property="og:image" content="https://github.com/TiaDevArch/dfw-hotspots/blob/main/src/assets/Logo-DFWHotspots-s.png"><meta property="og:url" content="https://dfwhotspots.netlify.app/"><meta property="og:type" content="website">', `</head> <body> <div class="header"> <img src="/Logo-DFWHotspots-s.png" alt="DFW Hotspots"> <h2>DFW Hotspots & Events</h2> </div> <header class="about-header"> <nav class="about-nav"> <a href="specialevents/">Special Events</a> </nav> </header> <input type="text" id="searchInput" placeholder="Search days, keywords, venues, cities, atmosphere, categories..."> <div class="filter-controls"> <button id="toggleFilterBtn">\u{1F50D} Show Filters</button> <button id="clearFiltersBtn" class="clear-button">Clear All Filters</button> <p class="instructions"></p> </div> <div id="dayFilters" class="filter-options"> <button class="day-btn" data-day="friday">Friday</button> <button class="day-btn" data-day="saturday">Saturday</button> <button class="day-btn" data-day="sunday">Sunday</button> <button class="day-btn" data-day="monday">Monday</button> <button class="day-btn" data-day="tuesday">Tuesday</button> <button class="day-btn" data-day="wednesday">Wednesday</button> <button class="day-btn" data-day="thursday">Thursday</button> </div> <div id="filterPanel" class="collapsed"> <!-- Filter Section Template --> <div class="filter-section"> <h3 class="section-toggle" onclick="toggleSection('categoryFilters', this)"><span class="arrow">\u25B6</span> Filter by Category</h3> <div id="categoryFilters" class="filter-options collapsed"> `, ` </div> </div> <div class="filter-section"> <h3 class="section-toggle" onclick="toggleSection('vibeFilters', this)"><span class="arrow">\u25B6</span> Filter by Vibe</h3> <div id="vibeFilters" class="filter-options collapsed"> `, ` </div> </div> <div class="filter-section"> <h3 class="section-toggle" onclick="toggleSection('audienceFilters', this)"><span class="arrow">\u25B6</span> Filter by Audience</h3> <div id="audienceFilters" class="filter-options collapsed"> `, ` </div> </div> <div class="filter-section"> <h3 class="section-toggle" onclick="toggleSection('atmosphereFilters', this)"><span class="arrow">\u25B6</span> Filter by Atmosphere</h3> <div id="atmosphereFilters" class="filter-options collapsed"> `, ' </div> </div> </div> <!-- Venue Cards --> <div class="card-grid" id="venueList"> ', ` </div> <!-- \u270D\uFE0F Suggest an Edit + Submit a Venue Buttons --> <div style="margin-top: 3rem; text-align: center; display: flex; justify-content: center; gap: 1rem; flex-wrap: wrap;"> <a href="https://airtable.com/appv9OQhEjhG36s5H/pagr8Q7DkF8ZIvhAr/form" target="_blank" style="
      display: inline-block;
      padding: 0.75rem 1.5rem;
      font-size: 1rem;
      background-color: #524776;
      color: white;
      text-decoration: none;
      border-radius: 25px;
      font-weight: bold;
      box-shadow: 0 2px 6px rgba(0,0,0,0.15);
      transition: background-color 0.3s ease;
    " onmouseover="this.style.backgroundColor='#3f3861'" onmouseout="this.style.backgroundColor='#524776'">
\u2795 Suggest an Edit
</a> <a href="https://form.typeform.com/to/yLG4QA9L" target="_blank" style="
      display: inline-block;
      padding: 0.75rem 1.5rem;
      font-size: 1rem;
      background-color: #524776;
      color: white;
      text-decoration: none;
      border-radius: 25px;
      font-weight: bold;
      box-shadow: 0 2px 6px rgba(0,0,0,0.15);
      transition: background-color 0.3s ease;
    " onmouseover="this.style.backgroundColor='#3f3861'" onmouseout="this.style.backgroundColor='#524776'">
\u{1F4CD} Submit a Venue
</a> </div> <!-- Footer --> <footer style="margin-top: 4rem; padding: 2rem 1rem; text-align: center; font-size: 0.8rem; color: #555;"> <div style="transform: scale(0.5); transform-origin: top center;"> <script type="text/javascript" src="https://cdnjs.buymeacoffee.com/1.0.0/button.prod.min.js" data-name="bmc-button" data-slug="tiaross" data-color="#BD5FFF" data-emoji="\u{1F4D6}" data-font="Bree" data-text="Buy me a book" data-outline-color="#000000" data-font-color="#ffffff" data-coffee-color="#FFDD00">
  <\/script> </div> <a href="https://tiaross.net/w/wp-content/uploads/TiaRossDev.png" target="_blank"> <img src="https://tiaross.net/w/wp-content/uploads/TiaRossDev-rs.png" alt="Digital nomad Tia Ross, pictured in a Getsemani, Cartagena, Colombia, rooftop pool with Bocagrande in the background" style="width: 80px; height: 80px; border-radius: 50%; margin-top: 0.5rem;"> </a> <p>\u{1F4CD} DFW Hotspots & Events: No more \u2018I don\u2019t know where to go\u2019 nights for the mature crowd.<br> <a href="/about">About</a> | A Tia Ross Development</p> </footer> <!-- \u2705 Filter, Toggle, and Clear Script --> <script type="module">
function toggleSection(sectionId, toggleElement) {
  const section = document.getElementById(sectionId);
  if (!section) return;

  const isCollapsed = section.classList.contains('collapsed');
  section.classList.toggle('collapsed', !isCollapsed);
  section.classList.toggle('expanded', isCollapsed);

  const arrow = toggleElement.querySelector('.arrow');
  if (arrow) {
    arrow.textContent = isCollapsed ? '\u25BC' : '\u25B6';
  }
}
// \u2705 Make it accessible to inline HTML onclick handlers
window.toggleSection = toggleSection;

  document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById("searchInput");
    const cards = document.querySelectorAll(".card");

    const categoryButtons = document.querySelectorAll(".category-btn");
    const vibeButtons = document.querySelectorAll(".vibe-btn");
    const audienceButtons = document.querySelectorAll(".audience-btn");
    const atmosphereButtons = document.querySelectorAll(".atmosphere-btn");

    const toggleBtn = document.getElementById("toggleFilterBtn");
    const filterPanel = document.getElementById("filterPanel");
    const clearBtn = document.getElementById("clearFiltersBtn");

    let selectedCategories = [];
    let selectedVibes = [];
    let selectedAudience = [];
    let selectedAtmosphere = [];

    function filterCards() {
      const searchQuery = searchInput.value.toLowerCase();

      cards.forEach((card) => {
        const text = card.textContent.toLowerCase();
        const category = (card.dataset.category || "");
        const vibes = (card.dataset.vibes || "");
        const audience = (card.dataset.audience || "");
        const atmosphere = (card.dataset.atmosphere || "");

        const matchesSearch = text.includes(searchQuery);
        const matchesCategory = selectedCategories.length === 0 || selectedCategories.some(tag => category.includes(tag.toLowerCase()));
        const matchesVibes = selectedVibes.length === 0 || selectedVibes.some(tag => vibes.includes(tag.toLowerCase()));
        const matchesAudience = selectedAudience.length === 0 || selectedAudience.some(tag => audience.includes(tag.toLowerCase()));
        const matchesAtmosphere = selectedAtmosphere.length === 0 || selectedAtmosphere.some(tag => atmosphere.includes(tag.toLowerCase()));

        const showCard = matchesSearch && matchesCategory && matchesVibes && matchesAudience && matchesAtmosphere;
        card.style.display = showCard ? "block" : "none";
      });
    }

    function setupButtonFilters(buttons, selectedArray) {
      buttons.forEach((btn) => {
        btn.addEventListener("click", () => {
          const tag = btn.dataset.tag;
          const index = selectedArray.indexOf(tag);

          if (index > -1) {
            selectedArray.splice(index, 1);
            btn.style.background = "#eee";
            btn.style.color = "#000";
            btn.style.borderColor = "#ccc";
          } else {
            selectedArray.push(tag);
            btn.style.background = "#333";
            btn.style.color = "#fff";
            btn.style.borderColor = "#333";
          }

          filterCards();
        });
      });
    }

    // Init
    searchInput.addEventListener("input", filterCards);
    setupButtonFilters(categoryButtons, selectedCategories);
    setupButtonFilters(vibeButtons, selectedVibes);
    setupButtonFilters(audienceButtons, selectedAudience);
    setupButtonFilters(atmosphereButtons, selectedAtmosphere);

toggleBtn.addEventListener("click", () => {
  filterPanel.classList.toggle("open");
  filterPanel.classList.toggle("collapsed");
  toggleBtn.textContent = filterPanel.classList.contains("open")
    ? "\u274C Close Filters"
    : "\u{1F50D} Show Filters";
});


    clearBtn.addEventListener("click", () => {
      selectedCategories = [];
      selectedVibes = [];
      selectedAudience = [];
      selectedAtmosphere = [];

      const allButtons = document.querySelectorAll(".category-btn, .vibe-btn, .audience-btn, .atmosphere-btn");
      allButtons.forEach((btn) => {
        btn.style.background = "#eee";
        btn.style.color = "#000";
        btn.style.borderColor = "#ccc";
      });

      searchInput.value = "";
      filterCards();
    });

    document.querySelectorAll('.day-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const selectedDay = btn.dataset.day.toLowerCase();

    // \u{1F4A1} Clear existing active-day styles
    document.querySelectorAll('.day-btn').forEach(b => b.classList.remove('active-day'));

    // \u{1F4A1} Add to the one that was clicked
    btn.classList.add('active-day');

    document.querySelectorAll('.card').forEach(card => {
      const cardDays = (card.dataset.days || '').toLowerCase();
      console.log("Selected:", selectedDay, "| Card Days:", cardDays);

      if (cardDays.includes(selectedDay)) {
        card.style.display = '';
      } else {
        card.style.display = 'none';
      }
    });
  });
});

  });

<\/script> </body> </html>`])), renderHead(), [
    "Black-Owned",
    "Brunch",
    "Cafe",
    "Cigar Lounge",
    "Cocktail Bar",
    "Date Spot",
    "Day Party",
    "Happy Hour",
    "Lounge",
    "Mixed-Use District",
    "Mixer/Networking",
    "Nightclub",
    "Outdoor Bar",
    "Restaurant/Bar",
    "Sports Bar",
    "Speakeasy",
    "Spoken Word",
    "Wellness/Fitness"
  ].map((tag) => renderTemplate`<button class="category-btn"${addAttribute(tag, "data-tag")}>${tag}</button>`), ["Bougie", "Chill Vibes", "Classy", "Date Night", "Laid Back", "Lit", "Mature Crowd", "Romantic", "Trendy", "Turn Up"].map((tag) => renderTemplate`<button class="vibe-btn"${addAttribute(tag, "data-tag")}>${tag}</button>`), ["Singles", "Couples", "Small Groups", "Larger Groups"].map((tag) => renderTemplate`<button class="audience-btn"${addAttribute(tag, "data-tag")}>${tag}</button>`), ["Dancing", "Game Night", "Comedy", "Hookah", "Live Music", "Live DJ", "Outdoors", "Patio", "Rooftop", "Karaoke", "Games", "Cigars"].map((tag) => renderTemplate`<button class="atmosphere-btn"${addAttribute(tag, "data-tag")}>${tag}</button>`), venues.map((venue, index) => renderTemplate`<div class="card"${addAttribute(index, "data-index")}${addAttribute((Array.isArray(venue.Days) ? venue.Days.join(",") : venue.Days ?? "").toLowerCase(), "data-days")}${addAttribute((Array.isArray(venue.Vibe) ? venue.Vibe.join(", ") : venue.Vibe ?? "").toLowerCase(), "data-vibes")}${addAttribute((Array.isArray(venue.Audience) ? venue.Audience.join(", ") : venue.Audience ?? "").toLowerCase(), "data-audience")}${addAttribute((Array.isArray(venue.Atmosphere) ? venue.Atmosphere.join(", ") : venue.Atmosphere ?? "").toLowerCase(), "data-atmosphere")}${addAttribute((Array.isArray(venue.Category) ? venue.Category.join(", ") : venue.Category ?? "").toLowerCase(), "data-category")}${addAttribute((venue["When to Go"] ?? "").toLowerCase(), "data-whentogo")}> <h2> ${venue.Venue} ${(venue.Vibe || "").toLowerCase().includes("mature crowd") && renderTemplate`<span class="badge grown">🔥 Mature Crowd</span>`} </h2> <p>${venue.Description}</p> <div class="meta"> <div class="meta-line"><strong>City:</strong> ${venue.City ?? ""}</div> <div class="meta-line"><strong>Area:</strong> ${venue.Area ?? ""}</div> <div class="meta-line"> <strong>Category:</strong>${" "} ${Array.isArray(venue.Category) ? venue.Category.join(", ") : venue.Category} </div> ${venue["When to Go"] && renderTemplate`<div class="meta-line">
🕒 <strong>When to Go:</strong> ${venue["When to Go"]} </div>`} ${venue.Days && venue.Days.length > 0 && renderTemplate`<div class="meta-line">
📅 <strong>Days:</strong>${" "} ${Array.isArray(venue.Days) ? venue.Days.map((day) => day.charAt(0).toUpperCase() + day.slice(1)).join(", ") : venue.Days} </div>`} </div> <div class="meta-line cost">💰 Cost: ${venue.Cost}</div> <div class="links"> ${venue.Website && renderTemplate`<a${addAttribute(venue.Website, "href")} target="_blank">Website</a>`} ${venue["Google Maps URL"] && renderTemplate`<a${addAttribute(venue["Google Maps URL"], "href")} target="_blank">Map</a>`} </div> </div>`));
}, "/Users/tiaross/Projects/dfw-hotspots/src/pages/index.astro", void 0);

const $$file = "/Users/tiaross/Projects/dfw-hotspots/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
