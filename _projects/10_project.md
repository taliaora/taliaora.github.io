---
layout: page
title: The Fairtrade Foundation for DataAid
description: Analysis of Premium Impact on Cocoa Farms in Ivory Coast
img: assets/img/coco.jpg
importance: 2
category: work
giscus_comments: true
---

<time datetime="2021-01">Jan 2021</time>

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/2U2I6LORVZPR7ISVJDC3SYRQ4U.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Fairtrade offers Ivory Coast cocoa farmers a range of programmes and initiatives.
</div>


Ivory Coast (Côte d'Ivoire) is the world's leading cocoa producer, accounting for a significant portion of global production and exports. However, the sector faces severe challenges from adverse hydro-climatic conditions, including damaging rains and Harmattan winds, which have led to decreased yields and significant price surges in recent years.

Fairtrade offers Ivory Coast cocoa farmers improved incomes, support for community projects, and financial stability by guaranteeing a minimum price and providing a Fairtrade Premium.

I spent 4 months working on a project with other data scientists, attempting to understand how The Fairtrade Foundation affects the lifes of local farming communities. 

In the final Hackathon event, I was lucky enough to manage my assigned team members to turn cocoa farm data into practical insight. Below we share what we set out to do, the data we used, the highlights from our analysis, and what we delivered.

<div class="row">
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/cocoa_1.jpg" title="Cocoa smallholders and plots" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/cocoa_2.jpg" title="Beans, fermentation and quality checks" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/cocoa_3.jpg" title="Co-operative collection and transport" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
  From field to co-operative: snapshots of the cocoa value chain we considered in our analysis.
</div>

## Why this mattered

Cocoa smallholders face climate shocks, price volatility and complex supply chains. Fairtrade and producer organisations collect valuable information to understand these pressures, but turning raw data into clear, evidence-based actions is challenging. DataAid pairs charities with teams of analysts for an intensive, two-day Hackathon sprint to unlock value from the data they already hold. The sprint is preceeded by months of working on real-life data supplied by the charity, where data scientists (such as myself!) are preparing the dataset, cleaning it, exploring possible trends, and drafting questions based on the literature and the communication with the charity stakeholders. 

## The brief

We worked with Fairtrade colleagues to explore:
- Which farm and co-operative characteristics and Fairtrade Premiums are most associated with higher yields and more stable incomes  
- How weather patterns relate to production outcomes 
- Where data quality bottlenecks limit monitoring and reporting  
- How to present results clearly for non-technical stakeholders
- The effect of The Ivorian Civil War on the Coco Farms 

## The data we worked with

We used an anonymised extract combining:
- Farm and co-operative records  
- Certification and training attendance  
- Production and sales figures, including recorded premiums  
- Region tags and location proxies (no personally identifiable GPS)  
- Open climate summaries we added for context (rainfall and temperature)

All processing took place in a secure HPC environment, with no identifying fields.

<div class="row justify-content-sm-center">
  <div class="col-sm-8 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/coco.jpg" title="Seasonal patterns in production and premiums" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm-4 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/coco.jpg" title="Open rainfall and temperature indices" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
  2/3 + 1/3 layout: seasonality in production and premiums, alongside simple weather indices used in the exploratory models.
</div>

Prior to the Hackathon event, we got to explore the dataset, establishing the major trends. One of the observations was the impact of the civil war. 
The ivory coast wars caused significant disruptions to cocoa production by displacing plantation workers, leading to unharvested crops and damaged yields, and by creating market volatility. The conflicts were fueled by economic grievances, including competition over cocoa-derived wealth and the land rights of migrant farmers, further destabilizing the cocoa supply chain. Because of this, drafint appropriate questions for the Hackathon event was crucial. 


## Day 1 — rapid discovery and analysis

We split into small teams and ran in parallel:
- <strong>Data audit and documentation:</strong> schema mapping, missingness checks, consistency tests and a lightweight data dictionary  
- <strong>Descriptive analytics:</strong> distributions, seasonal patterns and co-operative comparisons  
- <strong>Geographical lens:</strong> region-level contrasts using open weather summaries  
- <strong>Outcomes modelling (exploratory):</strong> simple, interpretable models to surface correlates of yield and premium variation

## Day 2 — sense-making and recommendations

We consolidated the most reliable findings, pressure-tested interpretations and translated analysis into practical recommendations and illustrative prototypes.

### Highlights from the analysis


- <strong>Weather sensitivity:</strong> simple rainfall and temperature indices explained a meaningful share of yearly yield variation, supporting the case for adding basic climate features to routine monitoring.  
- <strong>Uneven coverage:</strong> some regions had thin or inconsistent records, making comparisons noisy; we proposed a short checklist to improve future analyses based on selected features.
- <strong>Making insight usable:</strong> we delivered a report summarising the findings to the charity.
- <strong>MCMC for estimating premium's impact</strong>
- <strong>Evaluate interventions:</strong> use pre–post comparisons and matched groups to assess the impact of training or input schemes  

> <strong>Important:</strong> these findings reflect the specific dataset and time window we analysed. They are indicative rather than definitive and should be validated against additional periods and sources.

## What we delivered

- <strong>Presentation deck</strong> summarising methods, findings and caveats
- <strong>Reproducible analysis </strong> with clear comments and apropriate data structures
- <strong>Time series analysis-focused model, capable of generating future predictions </strong> 



