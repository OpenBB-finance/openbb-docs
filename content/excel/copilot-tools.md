---
title: Tools
sidebar_position: 10
description: Understanding the tools available to OpenBB Copilot
keywords:
- tools
- widgets
- widget parameters
- web search
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="Tools | OpenBB Workspace Docs" />

## Widgets

The Copilot treats every widget in the OpenBB Workspace as a programmable tool in its analytical toolkit.

The system can chain widget operations, using the output from one widget as input for another, creating sophisticated analytical pipelines automatically.

## Widget parameters

Dynamic parameter modification represents one of the OpenBB's Copilot most powerful capabilities.

The system understands the parameter schemas of each widget and can intelligently modify settings like date ranges, asset symbols, calculation periods, and analysis parameters to match your specific requirements.

This eliminates the need for manual widget configuration and enables the Copilot to perform iterative analysis with different parameters automatically, such as comparing the same analysis across different time periods or asset classes within a single conversation.

<div
  style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
>
  <img
    src="https://openbb-cms.directus.app/assets/1c0c7c36-30e8-4b89-b9ad-0b97694f2699.png"
    width="100%"
  />
</div>

## Web search

The integrated web search capability extends the Copilot's knowledge beyond the OpenBB Workspace ecosystem to access real-time information from across the internet.

This feature automatically activates as a fallback mechanism when information is not available in your workspace, searching financial news sources, regulatory databases, company websites, and other sources.

The system filters and prioritizes results based on relevance and credibility, then integrates external information with your existing workspace data to provide comprehensive answers with proper source attribution.

<div
  style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
>
  <img
    src="https://openbb-cms.directus.app/assets/d9aec63a-379f-4ced-9074-1597dabc55b6.png"
    width="100%"
  />
</div>