---
title: Historical Flowing Bottomhole Pressure (FBHP) Estimations
description: Implemented and tuned multi-phase hydraulics correlations in Python to estimate FBHP for Kuparuk field wells, enabling improved reservoir simulation history matching
date: '2021-09-01'
categories:
	- Reservoir Engineering
	- Production Engineering
	- Data Engineering
	- Distributed Computing
	- NLP
published: true
value_added: Improved PI tuning, constrained permeability modifications, accelerated history matching
skills_used: Python, Multi-phase Hydraulics, NLP, Spark
---

## Summary

This project focused on estimating historical flowing bottomhole pressures (FBHP) for over 500 wells in the Kuparuk field by implementing and tuning multiple multi-phase hydraulics correlations in Python. Downhole gauge data was used to calibrate the correlations, and the best-performing model was selected to estimate FBHP for all wells across the entire field history. The resulting dataset enabled improved productivity index (PI) tuning and provided constrained values for permeability modifications during full-field reservoir simulation history matching.

## Project Highlights

- Implemented and tuned several multi-phase hydraulics correlations in Python for FBHP estimation
- Selected the best-performing correlation based on downhole gauge data for field-wide application
- Utilized NLP methods to extract orifice valve (OV) depths from WellView well work reports, overcoming incomplete data for older gas lift designs
- Ran sensitivities for every well and time point to account for lift point and OV placement uncertainty
- Compared tubing and annulus pressures to determine the most likely lift depth for each well
- Leveraged a Spark cluster on HPC to distribute and accelerate calculations for >500 wells and 480 time points

## Technical Innovation

- Combined multi-phase hydraulics modeling, NLP, and distributed computing for large-scale FBHP estimation
- Automated extraction of completion data and OV depths using NLP to fill gaps in historical records
- Developed a robust workflow for running multiple sensitivities and selecting the most likely lift depth

## Impact

The historical FBHP estimation workflow provided a comprehensive, field-wide dataset for Kuparuk, enabling more accurate PI tuning and constraining permeability modifications during reservoir simulation history matching. The use of distributed computing and NLP allowed for efficient processing of large datasets and improved the quality of simulation inputs, supporting better reservoir management and analysis.
