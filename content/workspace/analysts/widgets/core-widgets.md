---
title: Core Widgets
sidebar_position: 2
description: Essential widgets that form the foundation of every OpenBB dashboard - navigation, notes, data integration, and productivity tools.
keywords:
- core widgets
- dashboard essentials
- navigation widgets
- note widgets
- API integration
- RSS feeds
- productivity tools
- data connectors
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
- Consider using [Data Integration](/workspace/developers/data-integration) for complex data processing

For additional support, contact [support@openbb.finance](mailto:support@openbb.finance) with specific details about your issue.

### Pre-configured API Endpoints

Here are examples of pre-configured API endpoints for immediate use:

| Widget Title | Public URL | Description | Add to Workspace |
| ------------ | ---------- | ----------- | ---------- |
| DeFi Protocols | https://defillama-datasets.llama.fi/lite/v2/protocols | Comprehensive list of DeFi protocols with TVL data | <a href="https://pro.openbb.co/app?modal=data-connectors&dcTab=single&endpoint=https://defillama-datasets.llama.fi/lite/v2/protocols&name=Protocols" target="_blank"> <button className="_btn text-xs">Add Widget</button> </a> |
| Historical Chain TVL | https://api.llama.fi/v2/historicalChainTvl | Historical TVL data across all DeFi chains | <a href="https://pro.openbb.co/app?modal=data-connectors&dcTab=single&endpoint=https://api.llama.fi/v2/historicalChainTvl&name=Historical Chain TVL" target="_blank"> <button className="_btn text-xs">Add Widget</button> </a> |
| Chain TVL Rankings | https://api.llama.fi/v2/chains | Current TVL metrics for all chains | <a href="https://pro.openbb.co/app?modal=data-connectors&dcTab=single&endpoint=https://api.llama.fi/v2/chains&name=Chains" target="_blank"> <button className="_btn text-xs">Add Widget</button> </a> |

These quick-add links demonstrate the simplest form of widget creation using the `single` endpoint type. The URL structure includes both the API endpoint and a pre-configured widget name, making it a one-click solution for basic data integration. E.g. [https://pro.openbb.co/app?modal=data-connectors&dcTab=single&endpoint=https://defillama-datasets.llama.fi/lite/v2/protocols&name=Protocols](https://pro.openbb.co/app?modal=data-connectors&dcTab=single&endpoint=https://defillama-datasets.llama.fi/lite/v2/protocols&name=Protocols).

However, most real-world widgets require more sophisticated configuration. Complex endpoints often need JSON processing to extract specific data fields, parameter definitions for user customization, and comprehensive metadata including category, subcategory, source, and detailed descriptions. For these advanced use cases, you'll want to explore custom widget development through the Data Integration features, which provide full control over widget behavior and appearance.

These pre-configured examples serve as starting points to understand widget capabilities before building more sophisticated, parameterized widgets tailored to your specific analytical needs.
