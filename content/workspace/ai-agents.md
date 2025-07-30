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

AI agents in OpenBB Workspace come with a lot of capabilities out-of-the-box. Particularly when it comes to interacting with data available in the workspace. The advantage is that the agent lives right where all your context is and where actual work gets done.

The OpenBB Workspace comes with OpenBB Copilot, the default AI agent, which relies on OpenAI as the underlying model provider. You can bring your own OpenAI API key to use with the Copilot without a standalone deployment. For enterprise deployments, we support connecting to your Azure OpenAI model, allowing firms to leverage their existing relationship with Azure/OpenAI.

When the default OpenBB Copilot isn't a perfect fit for your financial institution - especially when proprietary data and tools are involved - OpenBB Workspace offers the 'Bring Your Own AI Agent' feature. This allows you to integrate your own custom AI agents, which can be powered by Large Language Models (LLMs) from any vendor.

With this integration, you can use all of OpenBB's features while leveraging your firm's custom agent and preferred LLM provider. This enhances the efficiency of analysts and researchers by aligning with your unique data and models, all while keeping research queries and data securely within your firm's infrastructure.

## Bring your own AI agent

You can integrate your proprietary AI agent, powered by an LLM from any vendor, into OpenBB Workspace. To help you get started, we provide several open-source AI Agent examples that demonstrate the communication protocol (between the agent and the workspace) and guide you through the integration process.

The example code is available [here](https://github.com/OpenBB-finance/agents-for-openbb).

### Adding a custom AI Agent to OpenBB Workspace

After deploying your custom AI agent, you can add it to OpenBB Workspace.

To do this, navigate to the "Add AI agent" section and follow the prompts:

- Click on the "Add AI agent" button.

<img src="https://openbb-assets.s3.amazonaws.com/docs/copilot/custom_copilot_add_button.jpg" alt="custom AI agent add button" width="80%" height="80%" />

- Enter the API endpoint of your custom AI agent.

<img src="https://openbb-assets.s3.amazonaws.com/docs/copilot/custom_copilot_add_endpoint.jpg" alt="custom AI agent add endpoint" width="80%" height="80%" />

- Confirm the addition.
- You are now ready to use your custom AI agent.
