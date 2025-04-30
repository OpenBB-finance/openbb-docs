---
title: Bring your own AI Agent
sidebar_position: 26
description: Learn how to use your own Copilot with OpenBB Workspace
keywords:
- OpenBB Copilot
- copilot
- custom
- assistant
- Large language model
- bring your own
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';
import ReactPlayer from 'react-player'

<HeadTitle title="Bring your own AI Agent | OpenBB Workspace Docs" />

When the default OpenBB Copilot isn't a perfect fit for your financial institution—especially when proprietary data and tools are involved—OpenBB Workspace offers the 'Bring Your Own Copilot' feature. This allows you to integrate your own custom Large Language Models (LLMs).

With this integration, you can use all of OpenBB's features while leveraging your firm's proprietary LLMs. This enhances the efficiency of analysts and researchers by aligning with your unique data and models, all while keeping research queries and data securely within your firm's infrastructure.

## Defining a custom copilot

You can integrate your existing proprietary LLM into OpenBB Workspace by setting up an API endpoint. This allows OpenBB to interact with your custom copilot. To help you get started, we provide an open-source Example Copilot that guides you through the integration process.

The example code is available [here](https://github.com/OpenBB-finance/copilot-for-openbb).

## Adding a custom copilot to OpenBB Workspace

After deploying your custom Copilot, you can add it to OpenBB Workspace. To do
this, navigate to the "Add copilot" section and follow the prompts:

- Click on the "Add copilot" button.

<img src="https://openbb-assets.s3.amazonaws.com/docs/copilot/custom_copilot_add_button.jpg" alt="custom copilot add button" width="80%" height="80%" />

- Enter the API endpoint of your custom copilot.

<img src="https://openbb-assets.s3.amazonaws.com/docs/copilot/custom_copilot_add_endpoint.jpg" alt="custom copilot add endpoint" width="80%" height="80%" />

- Confirm the addition.
- You are now ready to use your custom copilot.
