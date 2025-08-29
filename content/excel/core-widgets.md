---
title: Core Widgets
sidebar_position: 3
description: Master OpenBB's essential widgets for building powerful financial dashboards, including navigation, notes, API integration, and real-time data visualization tools.
keywords:
- dashboard widgets
- financial analysis
- data visualization
- navigation tools
- note taking
- API integration
- RSS feeds
- market monitoring
- time tracking
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="Core Widgets | OpenBB Workspace Docs" />

OpenBB's core widgets form the foundation of your financial analysis workspace. These essential components enable you to organize information, capture insights, and integrate external data sources within a unified interface, creating a powerful environment for financial analysis and decision-making.

## Navigation Bar

The Navigation Bar serves as your dashboard's command center, providing intuitive organization for complex information. This powerful tool enables you to:

- Create and manage multiple tabs for different analysis contexts
- Organize information into logical sections
- Separate research from analysis
- Track different market sectors
- Monitor various portfolios

<div style={{display: 'flex', justifyContent: 'center'}}>
  <img className="pro-border-gradient" width="600" alt="Navigation bar interface showing multiple tabs" src="https://openbb-web-assets.s3.amazonaws.com/docs/launch_oct_24/navigation_bar.png" />
</div>

## Note Widget

The Note widget transforms your dashboard into a dynamic research platform, enabling you to capture and organize your insights effectively. This versatile tool allows you to:

- Document real-time insights during market analysis
- Record key findings and observations
- Store and organize prompts for AI-powered analysis
- Create a searchable knowledge base of your research

<div style={{display: 'flex', justifyContent: 'center'}}>
  <img className="pro-border-gradient" width="600" alt="Note widget interface showing text editing capabilities" src="https://openbb-web-assets.s3.amazonaws.com/docs/launch_oct_24/note_widget.png" />
</div>

### AI Integration

The Note widget's AI integration capabilities enhance your analysis workflow by:

- Maintaining a library of effective prompts
- Providing context for AI analysis
- Creating a seamless workflow between manual research and automated insights
- Enabling intelligent data processing and interpretation

<div style={{display: 'flex', justifyContent: 'center'}}>
  <img className="pro-border-gradient" width="600" alt="Note widget being used as AI context" src="https://openbb-web-assets.s3.amazonaws.com/docs/launch_oct_24/note_context.png" />
</div>

## Website and Iframe Widget

The Website widget brings external data sources directly into your dashboard, creating a unified research environment. This powerful integration enables you to:

- Access and interact with external websites without leaving OpenBB
- Compare data from multiple sources side by side
- Create a comprehensive research workspace
- Maintain context while analyzing multiple data sources

<div style={{display: 'flex', justifyContent: 'center'}}>
  <img className="pro-border-gradient" width="600" alt="Website widget showing embedded webpage" src="https://openbb-web-assets.s3.amazonaws.com/docs/launch_oct_24/website.png" />
</div>

> **Note:** Some websites may restrict embedding. OpenBB automatically checks and only displays websites that permit embedding.

## RSS Feeds Widget

The RSS Feeds widget serves as your personal news aggregator within OpenBB, keeping you informed with market-moving information. This essential tool provides:

- Curated financial news from top sources
- Customizable news feed preferences
- Real-time market updates
- Integrated news analysis within your research workflow

<div style={{display: 'flex', justifyContent: 'center'}}>
  <img className="pro-border-gradient" width="600" alt="RSS Feeds widget showing news headlines" src="https://openbb-web-assets.s3.amazonaws.com/docs/launch_oct_24/rss.png" />
</div>

## Clock Widget

The Clock widget helps you track global market hours and coordinate across time zones, essential for international trading and analysis. This tool is particularly valuable for:

- Monitoring market open/close times across different regions
- Coordinating with international teams
- Planning trades across multiple time zones
- Staying aware of global market events

<div style={{display: 'flex', justifyContent: 'center'}}>
  <img className="pro-border-gradient" width="600" alt="Clock widget showing multiple time zones" src="https://openbb-web-assets.s3.amazonaws.com/docs/launch_oct_24/clock.png" />
</div>

## Simple API Endpoints

The Simple API Endpoints widget provides a direct path to integrate custom data into your dashboard, enabling real-time data updates and analysis. This powerful feature:

- Converts API responses into interactive tables
- Requires minimal configuration
- Supports JSON data formats
- Enables real-time data updates

### Implementation Guide

1. Enter your API endpoint URL
2. Configure any required connection details
3. Select the relevant metadata
4. The widget automatically renders your data in table format

### Troubleshooting Guide

#### Data Not Displaying

- Verify your endpoint returns JSON format
- Check API response structure
- Ensure proper authentication if required

#### Connection Errors

- Use the '+ Add Headers' button to include required authentication
- Verify endpoint accessibility
- Check network connectivity

#### Data Structure Issues

- Use the "Data Key" parameter for nested JSON structures
- Consider using [Data Integration](/content/workspace/data-widgets/index.md) for complex data processing

For additional support, contact [support@openbb.finance](mailto:support@openbb.finance) with specific details about your issue.

### Pre-configured API Endpoints

We provide several pre-configured API endpoints for immediate use:

| Widget Title | Public URL | Category | Subcategory | Source | Description | Add to Pro |
| ------------ | ---------- | -------- | ----------- | ------ | ----------- | ---------- |
| Protocols | https://defillama-datasets.llama.fi/lite/v2/protocols | DeFi | TVL | DefiLLama | Comprehensive list of DeFi protocols with TVL data | <a href="https://pro.openbb.co/app?modal=data-connectors&dcTab=single&endpoint=https://defillama-datasets.llama.fi/lite/v2/protocols&name=Protocols" target="_blank"> <button className="_btn text-xs">Add</button> </a> |
| Historical Chain TVL | https://api.llama.fi/v2/historicalChainTvl | DeFi | TVL | DefiLLama | Historical TVL data across all DeFi chains | <a href="https://pro.openbb.co/app?modal=data-connectors&dcTab=single&endpoint=https://api.llama.fi/v2/historicalChainTvl&name=Historical Chain TVL" target="_blank"> <button className="_btn text-xs">Add</button> </a> |
| Chains | https://api.llama.fi/v2/chains | DeFi | TVL | DefiLLama | Current TVL metrics for all chains | <a href="https://pro.openbb.co/app?modal=data-connectors&dcTab=single&endpoint=https://api.llama.fi/v2/chains&name=Chains" target="_blank"> <button className="_btn text-xs">Add</button> </a> |
| TAO stats | https://taostats.io/data.json | Crypto | | Tao | Real-time $TAO token and subnet metrics | <a href="https://pro.openbb.co/app?modal=data-connectors&dcTab=single&endpoint=https://taostats.io/data.json&name=TAO stats" target="_blank"> <button className="_btn text-xs">Add</button> </a> |

