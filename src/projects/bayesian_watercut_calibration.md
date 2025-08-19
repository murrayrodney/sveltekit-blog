---
title: Bayesian Watercut Calibration
description: Utilization of hierarchical bayesian models to prioritize calibrations of Phase Dynamics meters for calibration
date: '2023-05-22'
categories:
  - Statistics
  - Bayesian Statistics
  - Hierarchical Models
published: true
value_added: Improved field metering allowing for better field optimization to increase production
skills_used: Python, PyMC
priority: 5
---

# Summary

# Summary

This project utilized hierarchical Bayesian models to estimate and manage the error between measured and actual watercut values from Phase Dynamics meters across the field. The primary goal was to prioritize meter calibrations by quantifying the impact of calibration error on estimated oil rates, enabling more effective allocation of limited calibration resources.

## Key Achievements

- Developed a hierarchical Bayesian model to estimate meter error growth as a function of the time since last calibration
- Hierarchical models natively integrated field-wide and well-level data to capture both general trends and individual well variations in error rates
- Quantified the impact of meter error on oil rate estimates, allowing for prioritization of wells where calibration would have the greatest effect

## Technical Approach

The project leveraged the following methodologies:

- Hierarchical Bayesian modeling using PyMC to estimate the variance and bias in watercut meter readings over time
- Identification of a time since calibration relationship to model error growth
- Partial pooling to share information across wells while allowing for well-specific error dynamics
- Calculation of the expected impact of calibration on oil rate estimates for each well

This approach provided a robust, data-driven framework for managing meter calibration schedules, resulting in more accurate production reporting and better resource utilization.
