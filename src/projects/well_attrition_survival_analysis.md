---
title: Well Attrition and Survival Analysis
description: Utilization of survival analysis to understand duration of useful lives of wells
date: '2022-10-05'
categories:
  - Survival Analysis
published: true
value_added: Better understanding of well failures for different categories.
skills_used: Python, R, Survival Analysis, Statistical Models
---

# Summary

This project applied survival analysis techniques to understand the attrition and failure rates of wells across different categories. The primary objective was to quantify how quickly various groups of wells fail, providing critical insights for long-term production forecasting and planning. The analysis did not initially focus on the mechanisms of failure, but rather on the statistical rates at which wells experience integrity failures and must be shut in or resources allocated for repair.

## Key Achievements

- Developed survival models to estimate failure rates for different well cohorts
- Quantified attrition rates, enabling more accurate forecasts of remaining well counts for legacy production models
- Incorporated advanced survival analysis methods, including time-varying covariates, to reflect changes in operational factors over time
- Identified the impact of offset injection water composition (produced vs. seawater) on well survival, providing evidence for varying corrosion rates
- Enhanced the reliability of long-range production forecasts by integrating survival model outputs into planning tools

## Technical Approach

The project leveraged the following methodologies:

- Survival analysis (Kaplan-Meier, Weibull Accelerated Time to Failure) to model well attrition
- Grouping of wells by relevant categories (e.g., completion type, location, producing reservoir) to compare failure rates
- Use of time-varying covariates to capture the evolving influence of injection water composition and other operational factors
- Statistical testing to assess the significance of observed differences in failure rates
- Integration of results into legacy forecasting models for improved long-term planning

This work provided a robust statistical foundation for understanding well attrition, supporting more informed decision-making in field development and maintenance planning.
