---
title: Overview
sidebar_position: 25
description: Learn how to integrate and customize AI agents in OpenBB Workspace for enhanced financial analysis and research capabilities
keywords:
- AI
- AI Agents
- Custom AI
- LLM
- Large Language Models
- Integration
- Financial Analysis
- Research
- Workspace
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';
import ReactPlayer from 'react-player'

<HeadTitle title="AI Agents | OpenBB Workspace Docs" />

AI agents in OpenBB Workspace come with a lot of capabilities out-of-the-box. Particularly when it comes to interact with data available in the workspace. The advantage is that the agent lives right where all your context is and where actual work gets done.

The OpenBB Workspace comes with OpenBB Copilot, which is the default AI agent that we have built for enterprise firms and that relies on OpenAI as underlying model providers. This allows financial firms to quickly point to their Azure OpenAI model, so they can keep relying on their relationship with Azure/OpenAI.

When the default OpenBB Copilot isn't a perfect fit for your financial institution - especially when proprietary data and tools are involved - OpenBB Workspace offers the 'Bring Your Own AI Agent' feature. This allows you to integrate your own custom Large Language Models (LLMs).

With this integration, you can use all of OpenBB's features while leveraging your firm's proprietary LLMs. This enhances the efficiency of analysts and researchers by aligning with your unique data and models, all while keeping research queries and data securely within your firm's infrastructure.

## Bring your own AI agent

You can integrate your existing proprietary LLM into OpenBB Workspace by setting up an API endpoint. This allows OpenBB to interact with your custom AI agent. To help you get started, we provide several open source AI Agent examples that guides you through the integration process.

The example code is available [here](https://github.com/OpenBB-finance/copilot-for-openbb).

### Adding a custom AI Agent to OpenBB Workspace

After deploying your custom AI agent, you can add it to OpenBB Workspace.

To do this, navigate to the "Add AI agent" section and follow the prompts:

- Click on the "Add AI agent" button.

<img src="https://openbb-assets.s3.amazonaws.com/docs/copilot/custom_copilot_add_button.jpg" alt="custom AI agent add button" width="80%" height="80%" />

- Enter the API endpoint of your custom AI agent.

<img src="https://openbb-assets.s3.amazonaws.com/docs/copilot/custom_copilot_add_endpoint.jpg" alt="custom AI agent add endpoint" width="80%" height="80%" />

- Confirm the addition.
- You are now ready to use your custom AI agent.
