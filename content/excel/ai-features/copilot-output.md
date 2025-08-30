---
title: Output Formats
sidebar_position: 12
description: Understanding OpenBB Copilot's output formats and capabilities
keywords:
- output formats
- citations
- create widgets
- user feedback
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="Output Formats | OpenBB Workspace Docs" />

The Copilot's output system delivers comprehensive, contextual responses that synthesize all available information into actionable insights. Each response is structured to provide immediate answers while supporting deeper investigation, combining direct responses with supporting evidence, data visualizations, and clear pathways for follow-up analysis.

## Citations

Comprehensive citation system ensures full traceability and verification of all information sources used in responses. The citation system provides different levels of detail based on source type:

- **Widget citations:** Direct links to widgets with parameters selected. Smart linking enables "Scroll to widget" functionality for existing dashboard widgets. If the widget doesn't exist in the dashboard or has modified parameters the linking will provide a "Add widget to dashboard" options to facilitate workspace workflow.

<div
  style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
>
  <img
    src="https://openbb-cms.directus.app/assets/26f4da06-acc4-4aa2-8540-d56cec931f99.png"
    width="100%"
  />
</div>

- **Document citations:** Precise page and section references for PDF documents with automatic highlighting of relevant content areas.

<div
  style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
>
  <img
    src="https://openbb-cms.directus.app/assets/05dfd0b0-b3b5-41a5-b916-0f89a8e50dd1.png"
    width="100%"
  />
</div>

- **Web citations:** Full URL references when web pages are utilized.

<div
  style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
>
  <img
    src="https://openbb-cms.directus.app/assets/6073a901-0005-4927-8951-021243333c48.png"
    width="100%"
  />
</div>

## Create widgets from AI output

The widget creation system enables seamless integration of Copilot-generated content into your workspace environment.

This capability transforms temporary conversational outputs into permanent analytical assets that can be referenced, shared, and incorporated into ongoing workflows.

The system supports multiple artifact types including formatted text summaries, interactive data tables with sorting and filtering capabilities, and fully functional charts with preserved interactivity.

- Text widget:

<div
  style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
>
  <img
    src="https://openbb-cms.directus.app/assets/517d6934-6d89-44df-ba5b-995520bcb1e6.png"
    width="100%"
  />
</div>

- Table widget:

<div
  style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
>
  <img
    src="https://openbb-cms.directus.app/assets/c987377c-1dc9-4a96-b590-3694a6c764b4.png"
    width="100%"
  />
</div>

- Chart widget:

<div
  style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
>
  <img
    src="https://openbb-cms.directus.app/assets/9e7f2d80-1bd1-4238-bffc-099598c995a6.png"
    width="100%"
  />
</div>


## User feedback loop

The thumbs up and down buttons in the agent output allow the user to provide feedback in terms of their experience with the copilot. That data can be utilized to create a flywheel that allows developers to understand how the AI agent can be improved.

While the thumbs up does not prompt the user for any additional details.

<div
  style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
>
  <img
    src="https://openbb-cms.directus.app/assets/fc1ea4d0-e0b0-4669-ae40-23871ae67790.png"
    width="80%"
  />
</div>

The thumbs down asks for clarification of what went wrong.

<div
  style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
>
  <img
    src="https://openbb-cms.directus.app/assets/e89e9f77-6d52-4921-8f81-b73d39260d6f.png"
    width="80%"
  />
</div>