---
layout: page
title: Market Dynamics and Price Formation in Grid Energy Systems
description: Time Series Forcasting Project
img: assets/img/wind.jpg
importance: 2
date: 2021-05-25
category: work
giscus_comments: true
---
*Published: {{ page.date | date: "%-d %B %Y" }}*

In this project, the team I was a member of utilised historic weather datasets, energy bidding prices and demand data to understand market dynamics and price formation in grid energy systems, as well as identify the perfect location for a renewable energy plant in Wales. The whole project had a particular focus on **renewable resources**.

## Why renewables drive price formation

Growing wind and solar penetration shifts the merit order, increases the frequency of low or negative prices during periods of high renewable output, and raises balancing costs when forecasts miss sudden ramps. Our aim was to quantify these effects and build models and tooling that help operators, traders and analysts make better decisions around renewable variability.

## Objectives

- Forecast **renewable generation** (wind and solar) and **system demand** at multiple horizons: day-ahead, intraday and near-real-time.  
- Explain **price formation** under different renewable scenarios, highlighting cannibalisation effects, scarcity spikes and curtailment risk.  
- Deliver a **full-stack** solution for data ingestion, modelling and visualisation, with **GitLab** used for collaboration and CI/CD.

## Data and feature engineering

- **Weather:** reanalysis and NWP feeds (wind speed at hub height, irradiance, temperature), plus derived features such as ramp rates and anomalies.  
- **Market:** day-ahead and intraday bids/offers, imbalance prices, constraint and curtailment flags.  
- **System:** calendar and holiday effects.

Feature work included lagged terms, rolling statistics, spatial aggregation for wind fleets, and interaction features between weather and asset mix.

## Modelling approach

- Benchmarks: seasonal naïve, persistence and simple regressions for transparency.  
- Forecasting models: gradient boosting and probabilistic models for day-ahead; lightweight nowcasting models close to gate closure.  
- Evaluation: MAE, RMSE and CRPS for probabilistic forecasts; calibration and sharpness diagnostics; back-tests across seasons to capture extremes.

Rather than promise a single “best” model, we deployed an **ensemble** that balances accuracy and interpretability, and we compared results against strong naïve baselines.

## What we learned about renewables and prices

- **Wind-driven price troughs:** high onshore/offshore output clustered in shoulder seasons correlated with increased low or negative day-ahead prices.  
- **Solar ramps and balancing risk:** afternoon cloud ramps drove intraday forecast error and balancing prices; near-term nowcasts reduced this risk.  
- **Curtailment signals:** congestion and curtailment flags aligned with extreme spreads between day-ahead and imbalance prices.  
- **Cannibalisation effect:** periods of strong fleet output compressed capture prices for wind and solar relative to the system price.

> These findings are dataset-specific and should be re-validated as asset mixes and market rules evolve.

## Full-stack delivery

We built an end-to-end system so results are reproducible and easy to use:

- **Ingestion & storage:** scheduled pipelines to pull weather, market and system feeds into a time-series store; schema checks and data validation.  
- **Modelling service:** a versioned model layer exposing forecasts and explanations through a simple API.  
- **Frontend:** a lightweight dashboard to explore renewable output scenarios, price drivers and uncertainty bands; downloadable CSVs for analysts.  
- **Observability:** run logs, data-freshness monitors and forecast accuracy reports.

### GitLab workflow and CI/CD

- **Issues & MRs:** issue templates, small merge requests and mandatory reviews.  
- **Pipelines:** automated tests, linting and data-contract checks on every commit; model training jobs on schedules; container builds for the API and UI.  
- **Environments:** staged deployments with manual approvals to promote from test to production; model and dataset versions tracked in release notes.
