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


<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/1719097801562.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/1719177582130.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/5.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Caption photos easily. On the left, a road goes through a tunnel. Middle, leaves artistically fall in a hipster photoshoot. Right, in another hipster photoshoot, a lumberjack grasps a handful of pine needles.
</div>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/5.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    This image can also have a caption. It's like magic.
</div>



Tackling Fairness in Financial AI: Reflections from the Alan Turing Institute’s Data Study Group Challenge

In May 2024 I joined an interdisciplinary team at the Alan Turing Institute for a Data Study Group (DSG) challenge in partnership with Mastercard. The challenge asked us to address one of the most urgent questions facing financial AI systems today: how do we define, measure and mitigate bias in machine learning models that predict consumer spending?

The full report from the challenge can be accessed [here](https://arxiv.org/abs/2501.10784).

Below, you can find my summary. 

The Challenge

Mastercard builds advanced predictive models that help issuing banks understand card usage and reduce customer attrition. These models analyse transaction patterns to anticipate spending behaviour across industries and demographics, and reward customers with offers and coupons for certain sectors.

Since Mastercard’s AI Governance programme is grounded in principles of fairness, transparency and accountability, we were supplied with synthetic data and started asking questions. The purpose of the DSG challenge was to explore fairness in practice and to examine both the technical and ethical complexities of bias in financial prediction models.

The Data

To protect privacy, Mastercard shared a synthetic dataset representing customer spending over a twelve-month period. This dataset was substantial, with one million rows, twenty features and nine industry labels.

Adoption data: whether a customer would spend in an industry for the first time within the next three months

Spending data: how much they would spend in that industry over the same period

We also had access to demographic attributes such as gender, ethnicity and age. Although Mastercard does not use these in production models, they allowed us to test intersectional fairness where overlapping categories, such as younger women from minority groups, can reveal deeper inequities.

What We Found

Our work led us to several key insights:

Fairness is intersectional and multi-label. Biases appear not only in single categories but across combinations of demographics and industries.

Proxy discrimination is persistent. Even if sensitive attributes are excluded from training, they can often be inferred indirectly from other features.

Mitigation carries trade-offs. Techniques that improve fairness for some groups may reduce model accuracy or shift bias towards others.

Industries are not equal. Some groups fare better in certain sectors than others, suggesting that fairness strategies may need to be tailored by industry.

Our Recommendations

There is no single formula for fair machine learning. Instead, we recommend that organisations:

Work with stakeholders to agree which definitions of fairness best reflect both business goals and social values

Use Pareto frontiers to weigh the balance between fairness and accuracy rather than treating them as separate issues

Consider whether including sensitive features could improve fairness under certain definitions, rather than assuming that “fairness through unawareness” is always best

Monitor fairness throughout the model development process, not only at the point of deployment

Why This Matters

Financial AI shapes decisions that influence people’s access to opportunities and services. Ensuring that these systems do not reinforce inequality is both a technical and a social responsibility.

Through this Data Study Group we combined expertise in mathematics, computer science, ethics and finance. Together we developed tools and frameworks that Mastercard can use to examine fairness more rigorously. More importantly, we highlighted that fairness in machine learning is complex, contested and context dependent.

We believe continued collaboration between researchers, practitioners and policymakers is essential if we are to build AI systems that are both effective and equitable.

