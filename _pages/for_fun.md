---
layout: page
permalink: /for_fun/
title: for fun
description: Some photography - hobbies, conferences, travelling...
nav: true
nav_order: 7
---

<style>
/* --- Header --- */
.fun-header {
  text-align: center;
  margin: 2.5rem 0 1.5rem;
}
.fun-header h1 {
  font-size: clamp(2.4rem, 5vw, 4.2rem);
  margin: 0;
}
.fun-subtitle {
  margin-top: 0.6rem;
  font-size: 1.15rem;
  opacity: 0.75;
}

/* --- Pills --- */
.fun-filters {
  display: flex;
  justify-content: center;
  gap: 0.75rem;
  margin: 1.6rem 0 2rem;
  flex-wrap: wrap;
}
.fun-pill {
  border: 0;
  border-radius: 999px;
  padding: 0.55rem 1.05rem;
  background: rgba(0,0,0,0.06);
  color: inherit;
  cursor: pointer;
  transition: transform 120ms ease, background 120ms ease, opacity 120ms ease;
  font-weight: 500;
}
.fun-pill:hover { transform: translateY(-1px); }
.fun-pill.is-active {
  background: rgba(0,0,0,0.78);
  color: white;
}

/* --- Grid --- */
.fun-grid {
  display: grid;
  gap: 1.25rem;
  margin-bottom: 2rem;

  /* default: 2 columns (mobile/tablet) */
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

/* wide screens: 3 columns */
@media (min-width: 992px) {
  .fun-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

/* optional: very small phones -> 1 column */
@media (max-width: 420px) {
  .fun-grid {
    grid-template-columns: 1fr;
  }
}

.fun-item {
  /* no grid-column spans needed */
}

/* --- Cards --- */
.fun-card {
  border-radius: 18px;
  overflow: hidden;
  background: rgba(0,0,0,0.03);
  box-shadow: 0 10px 25px rgba(0,0,0,0.08);
  transition: transform 150ms ease, box-shadow 150ms ease;
}
.fun-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 14px 34px rgba(0,0,0,0.12);
}
.fun-img {
  width: 100%;
  height: auto;
  object-fit: contain;   /* ensures the whole photo is visible */
  display: block;
  border-radius: 14px;
}
.fun-meta {
  padding: 0.85rem 1rem 1rem;
}
.fun-title {
  margin: 0;
  font-size: 1.02rem;
  font-weight: 600;
}
.fun-caption {
  margin: 0.25rem 0 0;
  opacity: 0.7;
  font-size: 0.95rem;
}

/* Hidden state for filtering */
.fun-hidden { display: none !important; }
</style>

<div class="fun-header">
  <h1>For Fun</h1>
  <div class="fun-subtitle">Life beyond research — moments that matter most</div>
</div>

<div class="fun-filters" role="tablist" aria-label="Photo filters">
  <button class="fun-pill is-active" data-filter="all" type="button">All</button>
  <button class="fun-pill" data-filter="travel" type="button">Travel</button>
  <button class="fun-pill" data-filter="conferences" type="button">Conferences</button>
</div>

<div class="fun-grid" id="funGrid">
  <!-- Travel -->
  
  <div class="fun-item" data-category="travel">
    <a class="fun-card" href="{{ '/assets/img/for_fun/paragliding.png' | relative_url }}" target="_blank" rel="noopener">
      <img class="fun-img" src="{{ '/assets/img/for_fun/paragliding.png' | relative_url }}" alt="Paragliding">
      <div class="fun-meta">
        <p class="fun-title">Paragliding</p>
        <p class="fun-caption"> Still learning this! </p>
      </div>
    </a>
  </div>

  <div class="fun-item" data-category="travel">
    <a class="fun-card" href="{{ '/assets/img/for_fun/surfing_morocco.png' | relative_url }}" target="_blank" rel="noopener">
      <img class="fun-img" src="{{ '/assets/img/for_fun/surfing_morocco.png' | relative_url }}" alt="Surfing in Morocco">
      <div class="fun-meta">
        <p class="fun-title">Surfing in Morocco</p>
        <p class="fun-caption"> Highly recommend! </p>
      </div>
    </a>
  </div>
  
  <div class="fun-item" data-category="travel">
    <a class="fun-card" href="{{ '/assets/img/for_fun/winter_mountaineering.jpg' | relative_url }}" target="_blank" rel="noopener">
      <img class="fun-img" src="{{ '/assets/img/for_fun/winter_mountaineering.jpg' | relative_url }}" alt="Winter mountaineering">
      <div class="fun-meta">
        <p class="fun-title">Winter mountaineering</p>
        <p class="fun-caption">A 7h hike to stand on a frozen lake :) </p>
      </div>
    </a>
  </div>
    
  <div class="fun-item" data-category="travel">
    <a class="fun-card" href="{{ '/assets/img/for_fun/stables.jpg' | relative_url }}" target="_blank" rel="noopener">
      <img class="fun-img" src="{{ '/assets/img/for_fun/stables.jpg' | relative_url }}" alt="Stables">
      <div class="fun-meta">
        <p class="fun-title">Stables</p>
        <p class="fun-caption"> Prepping for the afternoon trail ride </p>
      </div>
    </a>
  </div>

  <!-- Conferences -->
  <div class="fun-item" data-category="conferences">
    <a class="fun-card" href="{{ '/assets/img/for_fun/MIT_visit.png' | relative_url }}" target="_blank" rel="noopener">
      <img class="fun-img" src="{{ '/assets/img/for_fun/MIT_visit.png' | relative_url }}" alt="MIT visit">
      <div class="fun-meta">
        <p class="fun-title">MIT visit</p>
        <p class="fun-caption"> Thank you for the invite! </p>
      </div>
    </a>
  </div>

  <div class="fun-item" data-category="conferences">
    <a class="fun-card" href="{{ '/assets/img/for_fun/conference_drug_discovery.png' | relative_url }}" target="_blank" rel="noopener">
      <img class="fun-img" src="{{ '/assets/img/for_fun/conference_drug_discovery.png' | relative_url }}" alt="Conference: drug discovery">
      <div class="fun-meta">
        <p class="fun-title">Presenting my drug discovery project </p>
        <p class="fun-caption">AI for better future </p>
      </div>
    </a>
  </div>

  <div class="fun-item" data-category="conferences">
    <a class="fun-card" href="{{ '/assets/img/for_fun/34_Economic_forum.jpg' | relative_url }}" target="_blank" rel="noopener">
      <img class="fun-img" src="{{ '/assets/img/for_fun/34_Economic_forum.jpg' | relative_url }}" alt="Economic forum">
      <div class="fun-meta">
        <p class="fun-title">Economic forum panellist </p>
        <p class="fun-caption"> Pleasure to speak with fellow experts </p>
      </div>
    </a>
  </div>
</div>

<script>
(function () {
  const pills = document.querySelectorAll(".fun-pill");
  const items = document.querySelectorAll(".fun-item");

  function applyFilter(filter) {
    items.forEach(el => {
      const cat = el.getAttribute("data-category");
      const show = (filter === "all") || (cat === filter);
      el.classList.toggle("fun-hidden", !show);
    });
  }

  pills.forEach(btn => {
    btn.addEventListener("click", () => {
      pills.forEach(b => b.classList.remove("is-active"));
      btn.classList.add("is-active");
      applyFilter(btn.getAttribute("data-filter"));
    });
  });

  applyFilter("all");
})();
</script>
