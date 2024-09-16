---
title: API Endpoints
sidebar_position: 12
description: Learn how to use the API Endpoint Widget of OpenBB Terminal for seamless
  integration with your APIs, enabling custom data to be fetched and displayed
  in an accessible format. Includes features like additional headers and addressing
  nested JSON data.
keywords:
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

<HeadTitle title="API Endpoint | OpenBB Terminal Pro Docs" />

{/* import TutorialVideo from '@site/src/components/General/TutorialVideo.tsx';

<TutorialVideo
  youtubeLink="https://www.youtube.com/embed/gX63rYzqpL0?si=74No_7LgG2gYwnDg"
  videoLegend="Short introduction to adding a single widget"
/> */}

API endpoints are the fastest way to integrate your custom data into OpenBB Terminal Pro. This method allows you to import data via a URL or endpoint that is directly rendered into a table format providing a quick and easy way to visualize your data.

Simply enter your API endpoint along with any required connection details. Once configured, you need to select the metadata and then a corresponding widget will be created. It will then dynamically load and display your data within the Terminal Pro interface.

For something more custom, you should look into creating [your own backend](/pro/custom-backend), or reach out for support.

## Common Issues and Solutions

**Why can't I see my data in the table?**
> Ensure that the endpoint or url you are using returns data in JSON format

**I'm getting an error that it can't fetch the url**
> Your endpoint might require additional headers to be passed, you can add them using the '+ Add Headers' button.

**My data isn't showing up correctly in the table.**
> If your API endpoint doesn't return a simple JSON but a nested architecture, you will be prompted with a "Data Key" parameter which you can use to grab the data of interest.
> You may also need to use our [Custom Backend](/pro/integrate-your-own-backend) if you want to do anything else like processing the data.

If your issue is not listed above, please contact support at [support@openbb.finance](mailto:support@openbb.finance) with details of your problem.

## Examples

Here's a list of public API endpoints that can be used for free:

| Widget title | Public URL | Category | Subcategory | Source | Description |
| -------- | ------- | -------- | ------- | -------- | ------- |
| Protocols | https://defillama-datasets.llama.fi/lite/v2/protocols | DeFi | TVL | DefiLLama | List of all protocols on DefiLlama along with their TVL |
| Historical Chain TVL | https://api.llama.fi/v2/historicalChainTvl | DeFi | TVL | DefiLLama | Get historical TVL (excludes liquid staking and double counted tvl) on DeFi on all chains |
| Chains | https://api.llama.fi/v2/chains | DeFi | TVL | DefiLLama | Get current TVL of all chains |
| TAO stats | https://taostats.io/data.json | Crypto | | Tao | Latest $TAO token and subnet information |
