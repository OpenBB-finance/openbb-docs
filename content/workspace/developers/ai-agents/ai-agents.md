---
title: Overview
sidebar_position: 36
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
- OpenBB AI SDK
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';
import ReactPlayer from 'react-player'

<HeadTitle title="AI Agents | OpenBB Workspace Docs" />

AI agents in OpenBB Workspace come with a lot of capabilities out-of-the-box. Particularly when it comes to interacting with data available in the workspace. The advantage is that the agent lives right where all your context is and where actual work gets done.

The OpenBB Workspace comes with OpenBB Copilot, the default AI agent, which relies on OpenAI as the underlying model provider. You can bring your own OpenAI API key to use with the Copilot without a standalone deployment. For enterprise deployments, we support connecting to your Azure OpenAI model, allowing firms to leverage their existing relationship with Azure/OpenAI.

When the default OpenBB Copilot isn't a perfect fit for your financial institution - especially when proprietary data and tools are involved - OpenBB Workspace offers the 'Bring Your Own AI Agent' feature. This allows you to integrate your own custom AI agents, which can be powered by Large Language Models (LLMs) from any vendor.

With this integration, you can use all of OpenBB's features while leveraging your firm's custom agent and preferred LLM provider. This enhances the efficiency of analysts and researchers by aligning with your unique data and models, all while keeping research queries and data securely within your firm's infrastructure.

## Bring Your Own AI Agent

You can integrate your proprietary AI agent, powered by an LLM from any vendor, into OpenBB Workspace. Custom agents can be built using the [OpenBB AI SDK](https://github.com/OpenBB-finance/openbb-ai), which provides comprehensive tools and helper functions for agent development.

### Key Features

Custom AI agents in OpenBB Workspace can leverage several powerful features:

- **Streaming Conversations**: Real-time response streaming using Server-Sent Events (SSEs)
- **Widget Data Access**: Direct access to primary, secondary, and extra widgets in the workspace
- **Reasoning Steps**: Show intermediate thinking and processing steps to users
- **Data Citations**: Provide sources and references for information
- **Chart Generation**: Create interactive visualizations
- **Table Production**: Generate structured data tables
- **PDF Data Handling**: Process and extract information from PDF documents

### Architecture Overview

Custom agents follow a stateless backend design with two essential endpoints:

1. **Query Endpoint** (`/query`): The main interaction point that handles user queries and returns responses via Server-Sent Events
2. **Agents Configuration Endpoint** (`/agents.json`): Provides agent metadata and capabilities

### Getting Started

To help you get started with custom agent development, we provide several open-source examples that demonstrate the communication protocol between agents and the workspace:

1. **Raw Widget Data Agent**: Shows how to retrieve and process widget data
2. **Reasoning Steps Agent**: Demonstrates showing intermediate processing steps
3. **Citation Agent**: Examples of providing data sources and references
4. **Chart Agent**: Creating visualizations from financial data
5. **Table Agent**: Generating structured data tables
6. **PDF Agent**: Processing PDF documents

The example code is available [here](https://github.com/OpenBB-finance/agents-for-openbb).

### Development Requirements

To build a custom agent, you'll need:

- Python with a web framework (FastAPI recommended)
- The OpenBB AI SDK (`openbb-ai` package)
- An LLM provider of your choice (OpenAI, Anthropic, Azure, etc.)
- Proper endpoint configuration for SSE support

### Agent Implementation Example

Here's a minimal example of a custom agent structure:

```python
from fastapi import FastAPI
from fastapi.responses import StreamingResponse
from openbb_ai import QueryRequest

app = FastAPI()

@app.get("/agents.json")
async def agents_json():
    return {
        "my-custom-agent": {
            "name": "My Custom Financial Agent",
            "description": "Specialized agent for financial analysis",
            "image": "https://example.com/agent-logo.png",
            "endpoints": {
                "query": "/query"
            },
            "features": {
                "streaming": True,
                "widget-dashboard-select": True,
                "widget-filter": True
            }
        }
    }

@app.post("/query")
async def query(request: QueryRequest):
    # Your agent logic here
    # Access widgets, process data, generate responses
    pass
```

### Adding a Custom AI Agent to OpenBB Workspace

After deploying your custom AI agent, you can add it to OpenBB Workspace.

To do this, navigate to the "Add AI agent" section and follow the prompts:

- Click on the "Add AI agent" button.

<img src="https://openbb-assets.s3.amazonaws.com/docs/copilot/custom_copilot_add_button.jpg" alt="custom AI agent add button" width="80%" height="80%" />

- Enter the API endpoint of your custom AI agent.

<img src="https://openbb-assets.s3.amazonaws.com/docs/copilot/custom_copilot_add_endpoint.jpg" alt="custom AI agent add endpoint" width="80%" height="80%" />

- Confirm the addition.
- You are now ready to use your custom AI agent.

### Best Practices

1. **Stateless Design**: Keep your agent stateless to ensure scalability
2. **Error Handling**: Implement robust error handling for API failures
3. **Response Streaming**: Use SSE for real-time response delivery
4. **Widget Filtering**: Respect user widget selections and filters
5. **Security**: Implement proper authentication and authorization
6. **Performance**: Optimize for low latency responses

### Resources

- [OpenBB AI SDK Documentation](https://github.com/OpenBB-finance/openbb-ai)
- [Agent Examples Repository](https://github.com/OpenBB-finance/agents-for-openbb)
- [OpenBB Workspace Documentation](/workspace)

For more detailed information about agent configuration, see the [agents.json Reference](/workspace/developers/json-specs/agents-json-reference) documentation.