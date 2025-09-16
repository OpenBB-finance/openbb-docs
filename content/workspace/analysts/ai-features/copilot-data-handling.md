---
title: Data Handling
sidebar_position: 9
description: How OpenBB Copilot processes structured and unstructured data
keywords:
- data handling
- structured data
- unstructured data
- AgGrid
- Plotly
- document processing
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="Data Handling | OpenBB Workspace Docs" />

## Widget interaction

Dynamic parameter modification represents one of the OpenBB's Copilot most powerful capabilities.

The system understands the parameter schemas of each widget and can intelligently modify settings like date ranges, asset symbols, calculation periods, and analysis parameters to match your specific requirements.

This eliminates the need for manual widget configuration and enables the Copilot to perform iterative analysis with different parameters automatically, such as comparing the same analysis across different time periods or asset classes within a single conversation.

<div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
  <img
    className="pro-border-gradient"
    alt="Widget parameters"
    src="https://openbb-cms.directus.app/assets/1c0c7c36-30e8-4b89-b9ad-0b97694f2699.png"
    width="100%"
  />
</div>

## Structured data

The Copilot excels at processing and analyzing structured financial datasets through multiple specialized capabilities:

- **Table widgets:** A natural language to SQL translation tool allows you to query tabular data from your widgets using plain English. Once your data is loaded in a tabular format, `text2sql` converts your questions into SQL queries under the hood and retrieves specific information from these tables. This allows you to explore and analyze your data through simple natural language questions.

<div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
  <img
    className="pro-border-gradient"
    alt="text2sql querying tabular data"
    src="https://openbb-cms.directus.app/assets/14b3bf0d-7569-4b31-9c4b-24053582b211.png"
    width="100%"
  />
</div>

- **Plotly widgets:** Full-featured charting engine that not only generates interactive visualizations but also allows developers to provide the underlying data. The Copilot can extract specific data points, and create derivative analyses from existing visualizations. The AI agent will have better results in case the Plotly widget has raw data associated with it.

<div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
  <img
    className="pro-border-gradient"
    alt="Plotly chart with raw data switch"
    src="https://openbb-cms.directus.app/assets/0c9f06a6-c849-42e1-b4a0-5e572a7ff4b8.png"
    width="100%"
  />
</div>

## Unstructured data

The Copilot's unstructured data processing capabilities enable comprehensive analysis of diverse document types and media:

- **Document Processing (MD/PDF):** Advanced text extraction and comprehension. The system maintains document structure understanding, preserving context around tables and hierarchical information. This utilizes a sophisticated retrieval system that chunks large documents intelligently, maintains semantic relationships, and provides precise citations. The system can cross-reference information across multiple documents and identify contradictions or supporting evidence.

<div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
  <img
    className="pro-border-gradient"
    alt="Document processing with citations"
    src="https://openbb-cms.directus.app/assets/583b82f5-11c0-44d8-b286-4e6b3c1b364c.png"
    width="100%"
  />
</div>

- **Web search:**: When the user provides a URL to the AI agent, it converts the web page to markdown for it to be parsed by the model - as done above.

<div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
  <img
    className="pro-border-gradient"
    alt="Web search markdown conversion"
    src="https://openbb-cms.directus.app/assets/e08c4afc-1f5c-48eb-8e21-f8a716c7e9a2.png"
    width="100%"
  />
</div>

- **Image Analysis:** Image processing capabilities for charts, screenshots, financial diagrams, and infographics. The Copilot can extract data from visual representations, understand chart types, and incorporate visual information into broader analytical workflows.

<div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
  <img
    className="pro-border-gradient"
    alt="Image analysis extracting data from charts"
    src="https://openbb-cms.directus.app/assets/8ec86d09-faa1-4ee4-8820-76e93b8b1fae.png"
    width="100%"
  />
</div>
