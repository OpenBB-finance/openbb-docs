---
title: Step-by-Step Reasoning
sidebar_position: 11
description: Understanding the transparent reasoning process of OpenBB Copilot
keywords:
- step-by-step reasoning
- planning
- querying widgets
- intermediate artifacts
- transparency
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="Step-by-Step Reasoning | OpenBB Workspace Docs" />

Transparency and auditability are fundamental to the OpenBB's Copilot design, with comprehensive step-by-step reasoning displayed for every analysis.

This detailed process visibility enables users to understand the logical flow, verify data sources, identify potential biases, and ensure compliance with analytical standards.

The reasoning display serves both educational and quality assurance purposes, building user confidence while maintaining the ability to audit and reproduce analytical processes.

<div
  style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
>
  <img
    src="https://openbb-cms.directus.app/assets/93bf729b-3034-487a-9c1a-06d2d606f30e.png"
    width="80%"
  />
</div>

## Planning

The planning phase demonstrates the Copilot's tactical thinking by decomposing complex analytical requests into logical, sequential sub-tasks. This planning process considers data dependencies, optimal execution order, and resource requirements.

The displayed plan serves as a roadmap that users can review before execution, ensuring alignment with analytical objectives and providing clear expectations for the upcoming analysis workflow.

<div
  style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
>
  <img
    src="https://openbb-cms.directus.app/assets/66e6496f-f9e0-4464-8e7c-0b720f0ff40f.png"
    width="80%"
  />
</div>

## Querying widgets

Widget query transparency provides complete visibility into data retrieval operations, including the specific widget accessed, all parameters used, and data source information.

This documentation enables users to understand exactly what data was retrieved, verify parameter settings, and reproduce the analysis independently. The system also displays any parameter modifications made automatically, ensuring full awareness of how the Copilot adapted widget configurations to meet query requirements.

<div
  style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
>
  <img
    src="https://openbb-cms.directus.app/assets/2086a113-4dea-4693-a298-9643973d5782.png"
    width="80%"
  />
</div>

## Intermediate result artifact

Intermediate artifacts provide crucial visibility into the Copilot's analytical methodology by displaying generated code, SQL queries, calculation formulas, and other technical implementations.

These artifacts serve multiple purposes: enabling technical review and validation, supporting learning and knowledge transfer, facilitating debugging and optimization, and ensuring compliance with analytical standards.

Users can examine and reuse these artifacts, treating them as valuable analytical assets beyond their immediate application.

<div
  style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
>
  <img
    src="https://openbb-cms.directus.app/assets/61c7d66b-5f96-4bab-8504-a603ad4f04cb.png"
    width="80%"
  />
</div>

## Artifact generated

Final artifacts represent the culmination of the analytical process, displayed with complete context about their creation methodology. The step-by-step reasoning (status updates) maintain full provenance information, including data sources, transformation steps, and parameter settings used in their generation.

The system preserves the relationship between artifacts and their creation process, enabling users to understand not just what was created, but how and why, supporting both immediate use and future reference or modification.

<div
  style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
>
  <img
    src="https://openbb-cms.directus.app/assets/d1edea10-1940-422f-99dd-d6e7cc972e3d.png"
    width="80%"
  />
</div>