---
layout: page
permalink: /for_fun/
title: for fun
description: Some photography - hobbies, conferences, travelling...
nav: true
nav_order: 7
---

<style>

/* HIDE al-folio's automatic page title + description */
.page-header,
.page-title,
.page-description,
header.page-header,
header.post-header,
h1.post-title,
h1.page-title,
p.post-description,
p.page-description {
  display: none !important;
}

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

/* --- Masonry grid (no big gaps) --- */
.fun-grid {
  column-count: 2;        /* mobile/tablet */
  column-gap: 1.25rem;
  margin-bottom: 2rem;
}

@media (min-width: 992px) {
  .fun-grid {
    column-count: 3;      /* wide screens */
  }
}

/* each item becomes a "block" inside the columns */
.fun-item {
  break-inside: avoid;
  margin: 0 0 1.25rem;
  display: inline-block;
  width: 100%;
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
  object-fit: contain;
  display: block;
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


<!-- Custom Header -->
<div class="fun-header">
  <h1>For Fun</h1>
  <div class="fun-subtitle">Life beyond research </div>
</div>

<!-- Filters -->
<div class="fun-filters" role="tablist" aria-label="Photo filters">
  <button class="fun-pill is-active" data-filter="all" type="button">All</button>
  <button class="fun-pill" data-filter="travel" type="button">Travel</button>
  <button class="fun-pill" data-filter="conferences" type="button">Conferences</button>
</div>

<!-- Masonry Grid -->
<div class="fun-grid" id="funGrid">

  <!-- Travel -->
  <div class="fun-item" data-category="travel">
    <a class="fun-card" href="/assets/img/for_fun/dog_hike.jpg" target="_blank" rel="noopener">
      <img class="fun-img" src="/assets/img/for_fun/dog_hike.jpg" alt="A hike with my dog">
      <div class="fun-meta">
        <p class="fun-title">A hike with my dog</p>
        <p class="fun-caption">Exploring Wales</p>
      </div>
    </a>
  </div>

  <div class="fun-item" data-category="travel">
    <a class="fun-card" href="/assets/img/for_fun/paragliding.png" target="_blank" rel="noopener">
      <img class="fun-img" src="/assets/img/for_fun/paragliding.png" alt="Paragliding">
      <div class="fun-meta">
        <p class="fun-title">Paragliding</p>
        <p class="fun-caption">Still learning this!</p>
      </div>
    </a>
  </div>
  
  <div class="fun-item" data-category="travel">
    <a class="fun-card" href="/assets/img/for_fun/hikes.jpeg" target="_blank" rel="noopener">
      <img class="fun-img" src="/assets/img/for_fun/hikes.jpeg" alt="Coastal hikes">
      <div class="fun-meta">
        <p class="fun-title">Coastal hikes</p>
        <p class="fun-caption"></p>
      </div>
    </a>
  </div>

  <div class="fun-item" data-category="travel">
    <a class="fun-card" href="/assets/img/for_fun/horses.jpeg" target="_blank" rel="noopener">
      <img class="fun-img" src="/assets/img/for_fun/horses.jpeg" alt="Horses">
      <div class="fun-meta">
        <p class="fun-title">More horses!</p>
        <p class="fun-caption"></p>
      </div>
    </a>
  </div>

  <div class="fun-item" data-category="conferences">
    <a class="fun-card" href="/assets/img/for_fun/gala_stypendialna.jpg" target="_blank" rel="noopener">
      <img class="fun-img" src="/assets/img/for_fun/gala_stypendialna.jpg" alt="Top 10 Young Professionals of Polish Descent">
      <div class="fun-meta">
        <p class="fun-title">Top 10 Young Professionals of Polish Descent</p>
        <p class="fun-caption">Award ceremony.</p>
      </div>
    </a>
  </div>

  <div class="fun-item" data-category="conferences">
    <a class="fun-card" href="/assets/img/for_fun/EurIPS.jpg" target="_blank" rel="noopener">
      <img class="fun-img" src="/assets/img/for_fun/EurIPS.jpg" alt="EurIPS">
      <div class="fun-meta">
        <p class="fun-title">EurIPS</p>
        <p class="fun-caption">Presenting my research.</p>
      </div>
    </a>
  </div>

  <div class="fun-item" data-category="travel">
    <a class="fun-card" href="/assets/img/for_fun/Brecon_Beacons.jpg" target="_blank" rel="noopener">
      <img class="fun-img" src="/assets/img/for_fun/Brecon_Beacons.jpg" alt="Brecon Beacons">
      <div class="fun-meta">
        <p class="fun-title">Brecon Beacons</p>
        <p class="fun-caption">Bannau Brycheiniog National Park</p>
      </div>
    </a>
  </div>

  <div class="fun-item" data-category="travel">
    <a class="fun-card" href="/assets/img/for_fun/surfing_morocco.png" target="_blank" rel="noopener">
      <img class="fun-img" src="/assets/img/for_fun/surfing_morocco.png" alt="Surfing in Morocco">
      <div class="fun-meta">
        <p class="fun-title">Surfing in Morocco</p>
        <p class="fun-caption">Highly recommend!</p>
      </div>
    </a>
  </div>

  <div class="fun-item" data-category="travel">
    <a class="fun-card" href="/assets/img/for_fun/winter_mountaineering.jpg" target="_blank" rel="noopener">
      <img class="fun-img" src="/assets/img/for_fun/winter_mountaineering.jpg" alt="Winter mountaineering">
      <div class="fun-meta">
        <p class="fun-title">Winter mountaineering</p>
        <p class="fun-caption">A 7h hike to a frozen lake :)</p>
      </div>
    </a>
  </div>

  <div class="fun-item" data-category="travel">
    <a class="fun-card" href="/assets/img/for_fun/stables.jpg" target="_blank" rel="noopener">
      <img class="fun-img" src="/assets/img/for_fun/stables.jpg" alt="Stables">
      <div class="fun-meta">
        <p class="fun-title">Stables</p>
        <p class="fun-caption">Prepping for an afternoon ride</p>
      </div>
    </a>
  </div>

  <!-- Conferences -->
  <div class="fun-item" data-category="conferences">
    <a class="fun-card" href="/assets/img/for_fun/MIT_visit.png" target="_blank" rel="noopener">
      <img class="fun-img" src="/assets/img/for_fun/MIT_visit.png" alt="Natalia Sikora MIT visit">
      <div class="fun-meta">
        <p class="fun-title">MIT visit</p>
        <p class="fun-caption">Thank you for the invite!</p>
      </div>
    </a>
  </div>

  <div class="fun-item" data-category="conferences">
    <a class="fun-card" href="/assets/img/for_fun/conference_drug_discovery.png" target="_blank" rel="noopener">
      <img class="fun-img" src="/assets/img/for_fun/conference_drug_discovery.png" alt="Natalia Sikora Conference: drug discovery">
      <div class="fun-meta">
        <p class="fun-title">Presenting my drug discovery project</p>
        <p class="fun-caption">AI for a better future</p>
      </div>
    </a>
  </div>
  
  <div class="fun-item" data-category="conferences">
    <a class="fun-card" href="/assets/img/for_fun/Natalia_Sikora_FOG.jpg" target="_blank" rel="noopener">
      <img class="fun-img" src="/assets/img/for_fun/Natalia_Sikora_FOG.jpg" alt="Natalia Sikora Conference: FOG">
      <div class="fun-meta">
        <p class="fun-title">Presenting at Festival of Genomics and Biodata 2026 </p>
        <p class="fun-caption">Graph Transformer Project </p>
      </div>
    </a>
  </div>

  <div class="fun-item" data-category="conferences">
    <a class="fun-card" href="/assets/img/for_fun/34_Economic_forum.jpg" target="_blank" rel="noopener">
      <img class="fun-img" src="/assets/img/for_fun/34_Economic_forum.jpg" alt="Natalia Sikora Economic forum">
      <div class="fun-meta">
        <p class="fun-title">Economic forum panellist</p>
        <p class="fun-caption">Great conversations with fellow experts</p>
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
