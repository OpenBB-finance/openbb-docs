---
title: Single Endpoint API
sidebar_position: 2
description: Learn how to use the Single Widget of OpenBB Terminal Pro for seamless
  integration with your API Endpoints, enabling custom data to be fetched and displayed
  in an accessible format. Includes features like additional headers and addressing
  nested JSON data.
keywords:
- Single Widget
- Data Connectors
- API Endpoints
- Data Integration
- User-friendly Table Format
- Additional Headers
- Data Key Parameter
- Nested JSON
- Custom Backend
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="Single Endpoint API | OpenBB Terminal Pro Docs" />

import TutorialVideo from '@site/src/components/General/TutorialVideo.tsx';

<TutorialVideo
  youtubeLink="https://www.youtube.com/embed/gX63rYzqpL0?si=74No_7LgG2gYwnDg"
  videoLegend="Short introduction to adding a single widget"
/>

The single widget is the most straightforward method to integrate your custom data into OpenBB Terminal Pro. Simply paste your API endpoint into the data connectors tab, and voila! Your data is fetched and displayed in a user-friendly table format.

To use this feature, input your API endpoint and any necessary connection information. The widget will then dynamically load and present your data within the Terminal Pro interface.

If your endpoint requires additional headers, don't worry. You can easily add them using the '+ Add Additional Headers' button.

In addition, if your API endpoint doesn't return a a simple JSON but a nested architecture, you will be prompted with a "Data Key" parameter which you can use to grab the data of interest.

If you want to do something more custom, you should look into creating [your own backend](/pro/data-connectors/integrate-your-own-backend), or reach out to OpenBB for support.

Here's a list of public API endpoints that can be used for free:

| Widget title | Public URL | Category | Subcategory | Source | Description |
| -------- | ------- | -------- | ------- | -------- | ------- |
| Protocols | https://api.llama.fi/v2/protocols | DeFi | TVL | DefiLLama | List of all protocols on DefiLlama along with their TVL |
| Historical Chain TVL | https://api.llama.fi/v2/historicalChainTvl | DeFi | TVL | DefiLLama | Get historical TVL (excludes liquid staking and double counted tvl) on DeFi on all chains |
| Chains | https://api.llama.fi/v2/chains | DeFi | TVL | DefiLLama | Get current TVL of all chains |
| Stablecoins | https://api.llama.fi/v2/stablecoins | DeFi | coins | DefiLLama | List all stablecoins along with their circulating amounts |
| TAO stats | https://taostats.io/data.json | Crypto | | Tao | Latest $TAO token and subnet information |
