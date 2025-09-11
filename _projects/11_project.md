---
layout: page
title: Early Cancer Detection from Multimodal Datasets
description: Focusing on colorectal cancer and gut health
img: assets/img/e62ee33e-de0b-4733-8cb9-6201d8248a3e.jpg
importance: 2
category: work
---

Early detection is the key to survival when it comes to colorectal cancer (CRC), yet too often it goes unnoticed until it is too late. Only around 14% of CRC cases in the UK are caught at the earliest stage, despite the fact that early diagnosis can lead to survival rates as high as 95%. This striking gap inspired our recent research, which focuses on building a smarter, more accessible screening tool using artificial intelligence.


<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/AAAI.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    This image can also have a caption. It's like magic.
</div>

## Introducing ColonScopeX

In our latest study, we present ColonScopeX, a novel machine learning framework that combines blood-based Raman spectroscopy with patient health data to detect early signs of colorectal cancer and pre-cancerous polyps. Crucially, the system is designed to be explainable – using techniques like SHAP and LIME to ensure that clinicians can understand, verify and trust the AI’s decisions.

Our approach brings together two data sources:

Raman spectroscopy readings from blood samples – capturing metabolic fingerprints that indicate changes associated with disease.

Patient metadata – including medication use, comorbidities, age, sex, BMI, and smoking status.

## Why Multimodal Matters

Most existing diagnostic tools rely on a single type of data – often costly and difficult to interpret. ColonScopeX stands out by integrating multiple data types, which not only improves accuracy but also allows for a richer, more personalised assessment.

To do this, we tested three fusion strategies:

Early fusion: combining all features before feeding into the model

Joint fusion: combining learned features after independent processing

Late fusion: combining decisions from individual models

Our joint fusion model performed best overall, particularly for polyp detection, achieving:

Accuracy: 89.6%

Precision: 81.5%

AUC: 88.7%

The CRC model performed even better, with early fusion achieving 97.6% accuracy and 88.1% precision – exceeding the performance of many existing blood-based screening tools.

## Explainability in Practice

One of the standout features of ColonScopeX is its explainable AI capability. The system outputs clear, human-readable reports for clinicians, highlighting:

Which spectral features and clinical factors were important

What patterns or anomalies were observed in the data

How the patient compares to the broader population

We even integrated a library of known metabolic alterations in CRC and polyps, allowing us to match specific chemical fingerprints to clinical conditions.

## Bridging the Gap Between AI and Clinicians

Too often, AI in healthcare is a black box – powerful but opaque. ColonScopeX breaks this mould by providing transparent, evidence-based insights that support rather than replace clinical judgement.

And unlike expensive lab-based tests, our Raman spectroscopy approach is non-invasive, low-cost, and scalable – making it suitable for large-scale population screening, especially among groups less likely to take up traditional methods such as faecal tests or colonoscopies.

## A Step Towards Personalised Medicine

This work contributes to the growing vision of precision oncology, where diagnoses and treatments are tailored to the individual. By incorporating factors like polypharmacy, lifestyle and demographic characteristics, ColonScopeX moves us closer to that future – offering a practical and intelligent screening tool that works in the real world.

## What’s Next?

While our results are promising, we acknowledge the need for larger clinical validation and adaptation to different populations. Our next steps include expanding the dataset and collaborating with more health systems to assess real-world effectiveness.

## In Summary

ColonScopeX represents a major step forward in cancer screening: accurate, explainable, and grounded in everyday clinical practice. By combining advanced AI with readily available blood tests and patient information, we’re aiming to detect cancer earlier, reduce unnecessary colonoscopies, and ultimately save lives.

