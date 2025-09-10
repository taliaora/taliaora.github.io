---
layout: page
title: Mastercard at The Alan Turing Institute
description: A Report on the Data Study Group
img: assets/img/mastercard_alan_turing.jpg
importance: 1
category: work
related_publications: true
---

XYZ

<!-- Full-width hero image -->
<div class="container-fluid px-0 my-3">
  {% include figure.liquid
     loading="eager"
     path="assets/img/1718983474281.jpg"
     title="example image"
     class="img-fluid w-100 d-block"
  %}
</div>
<div class="caption text-center mb-4">
  <strong>Overall, a fabulous team and I got to present our results!</strong>
</div>
<style>
  .side-figure { float: left; width: 33%; margin: 0 1rem 1rem 0; }
  .side-figure.right { float: right; margin: 0 0 1rem 1rem; }
  @media (max-width: 768px) {
    .side-figure, .side-figure.right { float: none; width: 100%; margin: 0 0 1rem 0; }
  }
</style>
<div class="side-figure">
  {% include figure.liquid
     loading="eager"
     path="assets/img/1719097801562.jpg"
     title="example image"
     class="img-fluid rounded z-depth-1 w-100"
  %}
</div>

<div class="side-figure right">
  {% include figure.liquid
     loading="eager"
     path="assets/img/1719177582130.jpg"
     title="example image"
     class="img-fluid rounded z-depth-1 w-100"
  %}
</div>

here here here 
{% include figure.liquid 
   loading="eager" 
   path="assets/img/1719097801562.jpg" 
   title="example image" 
   class="rounded z-depth-1 float-start me-3 mb-3" 
   style="max-width:33%;" 
%}




<!-- Begin body copy with floated images intertwined in text -->
<p>
  <strong>Tackling Fairness in Financial AI: Reflections from the Alan Turing Institute’s Data Study Group Challenge</strong>
</p>

<p>
  In May 2024 I joined an interdisciplinary team at the Alan Turing Institute for a Data Study Group (DSG) challenge in partnership with Mastercard. The challenge asked us to address one of the most urgent questions facing financial AI systems today: how do we define, measure and mitigate bias in machine learning models that predict consumer spending?
</p>

<p>
  The full report from the challenge can be accessed <a href="https://arxiv.org/abs/2501.10784">here</a>.
</p>

<p>
  Below, you can find my summary.
</p>

{% include figure.liquid 
   loading="eager" 
   path="assets/img/1719177582130.jpg" 
   title="example image" 
   class="rounded z-depth-1 float-end ms-3 mb-3" 
   style="max-width:33%;" 
%}

<p><strong>The Challenge</strong></p>

<p>
  Mastercard builds advanced predictive models that help issuing banks understand card usage and reduce customer attrition. These models analyse transaction patterns to anticipate spending behaviour across industries and demographics, and reward customers with offers and coupons for certain sectors.
</p>

<p>
  Since Mastercard’s AI Governance programme is grounded in principles of fairness, transparency and accountability, we were supplied with synthetic data and started asking questions. The purpose of the DSG challenge was to explore fairness in practice and to examine both the technical and ethical complexities of bias in financial prediction models.
</p>

<p><strong>The Data</strong></p>

<p>
  To protect privacy, Mastercard shared a synthetic dataset representing customer spending over a twelve-month period. This dataset was substantial, with one million rows, twenty features and nine industry labels.
</p>

<ul>
  <li>Adoption data: whether a customer would spend in an industry for the first time within the next three months</li>
  <li>Spending data: how much they would spend in that industry over the same period</li>
</ul>

<p>
  We also had access to demographic attributes such as gender, ethnicity and age. Although Mastercard does not use these in production models, they allowed us to test intersectional fairness where overlapping categories, such as younger women from minority groups, can reveal deeper inequities.
</p>

<p><strong>What We Found</strong></p>

<p>
  Our work led us to several key insights:
</p>

<ul>
  <li>Fairness is intersectional and multi-label. Biases appear not only in single categories but across combinations of demographics and industries.</li>
  <li>Proxy discrimination is persistent. Even if sensitive attributes are excluded from training, they can often be inferred indirectly from other features.</li>
  <li>Mitigation carries trade-offs. Techniques that improve fairness for some groups may reduce model accuracy or shift bias towards others.</li>
  <li>Industries are not equal. Some groups fare better in certain sectors than others, suggesting that fairness strategies may need to be tailored by industry.</li>
</ul>

<p><strong>Our Recommendations</strong></p>

<p>
  There is no single formula for fair machine learning. Instead, we recommend that organisations:
</p>

<ul>
  <li>Work with stakeholders to agree which definitions of fairness best reflect both business goals and social values</li>
  <li>Use Pareto frontiers to weigh the balance between fairness and accuracy rather than treating them as separate issues</li>
  <li>Consider whether including sensitive features could improve fairness under certain definitions, rather than assuming that “fairness through unawareness” is always best</li>
  <li>Monitor fairness throughout the model development process, not only at the point of deployment</li>
</ul>

<p>
  
  <strong>Why This Matters</strong>
</p>

<p>
  Financial AI shapes decisions that influence people’s access to opportunities and services. Ensuring that these systems do not reinforce inequality is both a technical and a social responsibility.
</p>

<p>
  Through this Data Study Group we combined expertise in mathematics, computer science, ethics and finance. Together we developed tools and frameworks that Mastercard can use to examine fairness more rigorously. More importantly, we highlighted that fairness in machine learning is complex, contested and context dependent.
</p>

<p>
  We believe continued collaboration between researchers, practitioners and policymakers is essential if we are to build AI systems that are both effective and equitable.
</p>

<!-- Clear floats at the end -->
<div class="clearfix"></div>
