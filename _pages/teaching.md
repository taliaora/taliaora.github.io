---
layout: page
permalink: /teaching/
title: teaching
description: Summary of the courses I've taught or demonstrated.
nav: true
nav_order: 6
---

<style>
/* Hide ALL default al-folio page titles/descriptions */
.page-header,
.page-title,
header.page-header,
header h1,
header p {
  display: none !important;
}
/* Hide the default al-folio page header to avoid the huge duplicate look */
.page-header { display: none !important; }

/* Page intro */
.teach-header{
  text-align:center;
  margin: 2.2rem 0 2rem;
}
.teach-header h1{
  font-size: clamp(2.2rem, 5vw, 3.5rem);
  margin: 0;
}
.teach-subtitle{
  margin-top: .6rem;
  font-size: 1.05rem;
  opacity: .75;
}

/* Card layout */
.teach-card{
  background: rgba(0,0,0,0.03);
  border-radius: 18px;
  padding: 1.25rem 1.25rem 1.1rem;
  box-shadow: 0 10px 25px rgba(0,0,0,0.06);
  margin: 1.25rem 0;
}

.teach-top{
  display:flex;
  flex-wrap:wrap;
  gap: .4rem 1rem;
  align-items:baseline;
  justify-content:space-between;
}

.teach-org{
  font-size: 1.35rem;
  margin: 0;
}

.teach-role{
  font-weight: 700;
  margin: .35rem 0 0;
}

.teach-meta{
  opacity: .75;
  white-space: nowrap;
}

.teach-section-title{
  margin: 1rem 0 .35rem;
  font-size: 1.02rem;
  font-weight: 700;
  opacity: .9;
}

/* Bullets: tighter + cleaner */
.teach-card ul{
  margin: .25rem 0 0 1.1rem;
}
.teach-card li{
  margin: .25rem 0;
}

/* Skill chips */
.chips{
  display:flex;
  flex-wrap:wrap;
  gap: .45rem;
  margin-top: .5rem;
}
.chip{
  display:inline-block;
  padding: .25rem .6rem;
  border-radius: 999px;
  background: rgba(0,0,0,0.07);
  font-size: .9rem;
}

/* Optional: subtle divider between sections inside card */
.hr-soft{
  height: 1px;
  background: rgba(0,0,0,0.08);
  border: 0;
  margin: .9rem 0 .8rem;
}
</style>

<div class="teach-header">
  <h1>Teaching</h1>
  <div class="teach-subtitle">Summary of the courses I’ve taught or demonstrated. </div>
</div>

<div class="teach-card">
  <div class="teach-top">
    <p class="teach-org">Swansea University / Prifysgol Abertawe</p>
    <div class="teach-meta">Oct 2023 – Aug 2024 · 11 months</div>
  </div>
  <div class="teach-role">Learning Demonstrator <span style="font-weight:400; opacity:.75;">· Contract</span></div>

  <div class="teach-section-title">Modules taught</div>
  <ul>
    <li>Cryptography and IT Security (Year 3 / Masters)</li>
    <li>Artificial Intelligence (Year 3)</li>
    <li>Mathematics for Physicists II</li>
  </ul>

  <hr class="hr-soft"/>

  <div class="teach-section-title">Skills</div>
  <div class="chips">
    <span class="chip">Data science</span>
    <span class="chip">Calculus</span>
    <span class="chip">Java</span>
    <span class="chip">JavaScript</span>
    <span class="chip">PyTorch</span>
  </div>
</div>

<div class="teach-card">
  <div class="teach-top">
    <p class="teach-org">OSAP, Oriel College, University of Oxford</p>
    <div class="teach-meta">Oct 2022 – Mar 2023 · Michaelmas & Hilary</div>
  </div>
  <div class="teach-role">Tutor</div>

  <div class="teach-section-title">Module taught</div>
  <p style="margin:.35rem 0 0; opacity:.9;">
    Designed, delivered, and assessed <em>Introduction to AI in Business</em>, with a focus on FinTech,
    cryptocurrencies, ethics, and blockchain technologies.
  </p>
  <p style="margin:.35rem 0 0; opacity:.75;">
    Tutored OSAP undergraduate students at Oriel College, University of Oxford.
  </p>

  <hr class="hr-soft"/>

  <div class="teach-section-title">Skills</div>
  <div class="chips">
    <span class="chip">Teaching</span>
    <span class="chip">Course design</span>
    <span class="chip">Ethics</span>
    <span class="chip">FinTech</span>
  </div>
</div>

<div class="teach-card">
  <div class="teach-top">
    <p class="teach-org">Swansea University / Prifysgol Abertawe</p>
    <div class="teach-meta">Oct 2020 – Jun 2023 · 2 years 9 months</div>
  </div>
  <div class="teach-role">Teaching Assistant</div>

  <div class="teach-section-title">Modules assisted / demonstrated</div>
  <ul>
    <li>Big Data and Machine Learning</li>
    <li>Artificial Intelligence</li>
    <li>Computational Probability</li>
    <li>Essential Skills for Physicists</li>
  </ul>

  <hr class="hr-soft"/>

  <div class="teach-section-title">Skills</div>
  <div class="chips">
    <span class="chip">Data science</span>
    <span class="chip">Transformers</span>
  </div>
</div>
