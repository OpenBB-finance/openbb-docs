---
title: Integrate your own backend
sidebar_position: 13
description: Learn how to integrate your own backend with OpenBB Terminal Pro using
  the cookie-cutter or language-agnostic API approaches, with illustrative guides
  and principles for handling widget.json files, APIs, interfaces, Python, FastAPI
  and more.
keywords:
- OpenBB cookie-cutter
- widgets.json
- OpenBB API
- Endpoint integration
- widget configuration
- Language-Agnostic API
- API implementation
- Python
- FastAPI
- Terminal Pro widgets
- Widget definitions
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="Integrate your own backend | OpenBB Terminal Pro Docs" />

import TutorialVideo from '@site/src/components/General/TutorialVideo.tsx';

<TutorialVideo
  youtubeLink="https://www.youtube.com/embed/bkhtgp48MZc?si=kvrq1HgtUIFmhgyX"
  videoLegend="Short introduction to integrating your own backend"
/>

## Custom Backend

An OpenBB Terminal Pro Custom Backend is a versatile way to connect your data to widgets inside OpenBB Terminal Pro. Whether your API is hosted internally or externally, this method provides a standardized structure that OpenBB Terminal Pro widgets can read and then display any data.

1. **Design and implement your API**: Choose your preferred programming language and framework. Ensure that the API can return data in JSON format, which is required for widget integration.

2. **Create widgets.json file**: This file is your main configuration and defines widget properties such as name, description, category, type, endpoint, and other information. Each widget will be defined in this file. An example file structure might look like below. To view a sample `widgets.json` file head over to our [example backend repository](https://github.com/OpenBB-finance/backend-for-terminal-pro).

```
  backend/
├── __pycache__/
├── main.py
├── README.md
└── widgets.json
```

3. **Create endpoints for each widgets.json entry**: Your `widgets.json` file lets OpenBB Terminal Pro know how to display the data but you need to build out the endpoint for each entry/widget.

4. **Connect to your API**: Once your API is up and running, you can add the custom backend using the Terminal Pro interface. You will need to input your main endpoint. The system will hit the `/widgets.json` endpoint to fetch all the necessary settings and configurations. Once connected, all the widgets will appear in your search and ready to be added to any dashboard.

### Examples

Our team has created several examples that you can use to quickly get started with Python and FastAPI. For more information, check [this open source repository](https://github.com/OpenBB-finance/backend-for-terminal-pro/tree/main) for examples.
