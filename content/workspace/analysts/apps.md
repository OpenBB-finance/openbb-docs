---
title: Apps
sidebar_position: 4
description: Discover and use OpenBB Apps - pre-configured dashboard templates with integrated AI agents and custom prompts for optimized analytical workflows.
keywords:
- OpenBB Apps
- Dashboard Templates
- AI Agents
- Custom Prompts
- Workflow Optimization
- Financial Analysis
- Portfolio Management
- Market Research
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="Apps | OpenBB Workspace Docs" />

# Apps

Apps in OpenBB Workspace are pre-configured dashboard templates that combine widgets, pre-selected AI agents, and custom prompts to create optimized analytical workflows. Unlike individual dashboards that you build from scratch, Apps provide instant access to complete analytical environments designed for specific use cases.

<div style={{display: 'flex', justifyContent: 'center'}}>
  <img
    className="pro-border-gradient"
    alt="OpenBB Workspace Multiple Applications View"
    src="https://openbb-cms.directus.app/assets/2fc9097e-0941-49df-8d83-7d6b5a87bb45.png"
    width="800"
  />
</div>

## What are Apps?

Apps function as analytical templates that combine three core components: widgets, prompts, and pre-selected agents.

### Widgets

Apps include curated sets of widgets that are specifically optimized for their analytical workflow. These widgets come with parameter synchronization, automatically linking shared parameters to maintain analytical coherence across all components. The layout design positions and sizes widgets optimally for data visualization and workflow efficiency.

### Prompts

An App can include a custom library of pre-written prompts tailored to its analytical focus. These prompts provide app-aware AI instructions and enable more effective interactions with the specialized agent. E.g.:

- "Please analyze my current portfolio holdings. What are the top 5 positions by weight? Are there any concentration risks I should be aware of?"
- "What are the strongest correlations between my portfolio holdings? Which positions might provide good diversification benefits?"
- "What is my current sector exposure compared to market benchmarks? What are the risks and opportunities in my current allocation?"

These prompts are specifically crafted for the App's analytical context, enabling consistent analysis approaches and more targeted AI assistance.

### Agents

Apps can advertise a particular AI agent that is optimized for its analytical domain. When you click on an App with a specified agent ID, OpenBB Workspace automatically selects the corresponding AI agent.

## How Apps Differ from Dashboards

While dashboards are blank canvases that you customize entirely yourself, Apps provide structured starting points:

| **Apps** | **Dashboards** |
|----------|----------------|
| Pre-configured templates with specific analytical purpose | Blank canvas for custom configuration |
| Widgets with pre-linked parameters | Manual parameter configuration required |
| Come with curated prompt libraries | Start with no predefined prompts |
| Designed by domain experts for specific workflows | General-purpose analytical workspace |

Once you click on an App, it gets immediately rendered as a dashboard that you can also customize.

## Apps Gallery

To see Apps examples that you can do, check [our solutions page](https://openbb.co/solutions).

Here's an example of a Portfolio Risk Management dashboard (converted from an App).

<div style={{display: 'flex', justifyContent: 'center'}}>
  <img
    className="pro-border-gradient"
    width="800"
    alt="Portfolio Risk Management Dashboard"
    src="https://openbb-cms.directus.app/assets/b1d5b799-3abe-4d45-b04c-601e2b652b18.png"
  />
</div>
