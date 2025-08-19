---
title: Injector-Producer Allocations
description: A custom implementation of analytical methods for determining allocation factors between producers and injectors
date: '2019-06-01'
categories:
  - scientific computing
published: true
value_added: '>6 hrs per month'
skills_used: Python, AWS Athena
---

# Summary

This project delivered a custom implementation of analytical methods described in [SPE-180486-MS](https://onepetro.org/SPEWRM/proceedings-abstract/16WRM/All-16WRM/188242) to determine injector-producer allocation factors using only production and injection history, combined with engineering surveillance insights. Previously, allocation factors were calculated using simulation models that were labor-intensive and updated infrequently, often only every six months. By automating the process in Python, allocation factors could be calculated on demand, ensuring engineers always had up-to-date data for analysis.

## Project Highlights

- Automated allocation factor calculations for all of Kuparuk field in minutes, compared to several hours for the original Fortran implementation in Prudhoe Bay
- Replaced manual, simulation-based workflows with a scalable, repeatable Python solution
- Enabled rapid, field-wide analysis and improved responsiveness to operational changes

## Technical Innovation

- Developed a robust Python workflow for analytical allocation factor calculation
- Leveraged AWS Athena for scalable data processing and integration with field surveillance inputs
- Achieved significant speedup: full-field calculations now complete in minutes, supporting real-time decision making

## Impact

This project transformed the allocation workflow for the Alaska businiss unit, reducing analysis time from hours to minutes and enabling engineers to respond quickly to changing field conditions. The automation and scalability of the solution resulted in more frequent updates, improved data quality, and substantial time savings for the reservoir engineering team.
