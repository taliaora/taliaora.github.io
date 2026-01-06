---
layout: page
title: Identification of rare cellular subpopulations
description: Recent EurIPS paper
img: assets/img/sc_cells.jpg
date: 06/01/2026
importance: 3
category: work
---

<style>
/* This CSS applies only to this page */
.half-width-img img {
  width: 50% !important;
  max-width: 50% !important;
  margin-left: auto;
  margin-right: auto;
  display: block;
}

</style>

*Updated: {{ page.date | date: "%-d %B %Y" }}*

If you are interested in collaborating, discussing ideas, or learning more about the project, please contact the main author via LinkedIn:

👉 https://www.linkedin.com/in/natalia-sikora-190902177/

<div class="half-width-img">
  <img
    alt="VenusGT poster"
    src="https://github.com/user-attachments/assets/f8c8e927-29db-45f5-95d0-a052a9546386">
</div>


# VenusGT: Trajectory-Aware Graph Transformer for Rare-Cell Discovery

This repository hosts the poster and project description for **VenusGT**, a trajectory-aware graph learning framework for identifying rare and transitional cell populations in single-cell multi-omics data. In the future, we are planing on sharing the code, so what this repo :)

## Overview

VenusGT is designed to integrate multiple biological modalities while preserving developmental structure and rare biological signals. The framework operates on a heterogeneous graph of cells, genes, and chromatin accessibility peaks and embeds lineage and temporal information directly into the model.

The goal of the method is to improve the identification of rare, lineage-specific, and transitional states that are often missed by conventional clustering and multimodal integration approaches.


## Key ideas

- Heterogeneous graph modeling of cells, genes, and peaks  
- Transformer-style multi-head attention over graph neighborhoods  
- Trajectory-aware representations using pseudotime and lineage encoding  
- Rarity-aware sampling and loss weighting  
- Temporal attention bias toward developmentally adjacent states  
- Temporal smoothness regularisation  
- Focus on transitional and rare cellular populations  

## Project status and availability

This framework is **actively under development** and is planned for submission to a peer-reviewed journal. Because of this, we are currently limited in what can be shared publicly and are not yet posting a full preprint.

Most of the core methodology is in place, but the framework is still evolving. Additional experimentation, refinement, and architectural development are ongoing.

Please do not distribute any unpublished material without permission.

## Collaboration

We are actively looking for collaborators with interest in:
- Graph neural networks and attention models  
- Multimodal machine learning  
- Single-cell genomics  
- Trajectory inference
- Representation learning in biology



## Citation

Citation information will be added once the paper is publicly available.
