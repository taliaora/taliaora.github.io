---
layout: page
title: Drug Interactions in Polypharmacy Scenarios 
description: Managing Multi-Drug Interactions in Clinical Workflows
img: assets/img/the-dangers-of-mixing-medications-lethal-drug-interactions.jpg
date: 2025-02-02
importance: 3
category: fun
---

*Published: {{ page.date | date: "%-d %B %Y" }}*

# RESEARCH PAPER COMING SOON
In this project, we designed a RAG framework tethered to a database summarising drug's interactions to create a system capable of alerting clinicians. 
Globally, the World Health Organization (WHO) estimates that over 3 million deaths annually are due to unsafe care, and unsafe care is a leading cause of death. In the United States, adverse drug events (ADEs) are estimated to cause around 250,000 deaths each year and are the third leading cause of death.

# Building a RAG framework for drug–drug interaction alerts

*Designing a retrieval-augmented system that reads prescriptions, checks trusted interaction data, and surfaces clear alerts for polymedicated patients.*

> **Clinical note:** decision support only; not a substitute for clinical judgement or local policy.

## Why it matters

Polypharmacy is common, and risk depends on **combinations** plus **context** (age, renal/hepatic function, pregnancy, comorbidities). Clinicians need concise, explainable alerts that appear in their workflow without adding to alert fatigue.

## What it does

- **Ingests prescriptions** (structured meds and key free text) and **patient context** from the EHR.  
- **Retrieves evidence** from a curated interaction corpus (severity, mechanism, management, citations), layered with local formulary policy.  
- **Generates alerts**: a short summary, mechanism and one actionable recommendation, all tied to sources.  
- **Delivers UX** as an inline banner with a “details” drawer; everything is audit-logged.

## How it works (brief)

- **Normalise** drug names to a canonical vocabulary (for example `RxNorm`/`ATC`); keep route, strength and form.  
- **Enrich** with patient factors and lightweight flags (for example “QT-risk present”).  
- **Hybrid retrieval**: lexical match for exact substances **plus** biomedical embeddings for class/mechanism language; pre-filter by route, dose and patient modifiers; score by match strength, source quality and recency.  
- **Constrained generation**: the model sees only retrieved passages and a compact patient summary; it must cite every claim and escalate uncertainty when evidence is thin.

## Safety and governance

- Confidence thresholds and contradiction checks; deterministic rules for absolute contraindications.  
- Clinical safety case; versioned corpus with reviews and scheduled refreshes.  
- Minimum necessary PHI; encryption; inference within the clinical boundary; no model training on patient data.  
- Live metrics: precision/recall against a labelled set, severity accuracy, citation correctness, override rates and equity across groups.

## What success looks like

Grounded, context-aware alerts that clinicians can trust, fewer false positives, and a maintainable pathway to keep evidence and models up to date — piloted in silent mode alongside existing tools, then rolled out with measured impact.
