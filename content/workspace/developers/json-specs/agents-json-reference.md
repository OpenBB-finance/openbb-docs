---
title: agents.json Reference
sidebar_position: 3
description: Complete reference guide for configuring custom AI agents in OpenBB Workspace using the agents.json endpoint
keywords:
- agents.json
- AI configuration
- custom agents
- agent metadata
- OpenBB AI SDK
- agent features
- SSE
- streaming
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="agents.json Reference | OpenBB Workspace Docs" />

The `agents.json` endpoint is an important component of custom AI agent integration in OpenBB Workspace. This endpoint provides metadata and configuration information that tells the workspace how to interact with your custom agent.

When you add a custom AI agent to OpenBB Workspace, the system first queries your agent's `/agents.json` endpoint to discover its capabilities, configuration, and how to communicate with it. This configuration acts as a contract between your agent and the workspace.

The `agents.json` endpoint should return a JSON object with your agent(s) configuration. The endpoint must:

- Be accessible via HTTP GET request
- Return `Content-Type: application/json`
- Respond with a valid JSON structure
- Be available at the path `/agents.json` relative to your agent's base URL

```json
{
  "financial_prompt_optimizer": {
      "name": "Financial Prompt Optimizer",
      "description": "Optimizes a user's prompt for finance: clearer, more specific, and actionable.",
      "image": "https://github.com/OpenBB-finance/copilot-for-terminal-pro/assets/14093308/7da2a512-93b9-478d-90bc-b8c3dd0cabcf",
      "endpoints": {"query": "http://localhost:7777/v1/query"},
      "features": {
          "streaming": True,
          "widget-dashboard-select": False,
          "widget-dashboard-search": False,
      },
  }
}
```

## Schema

The field descriptions follow.

### Agent ID

The agent ID serves as a unique identifier for your agent within the OpenBB Workspace. This should be a lowercase string with hyphens replacing spaces, following standard slug conventions. The agent ID becomes the object key in the JSON response.

| Argument | Type | Default | Example |
|----------|------|---------|----------|
| `agent_id` | string | Required | `"financial_prompt_optimizer"` |

### Name

The name field specifies the human-readable display name for your agent that appears in the OpenBB Workspace user interface. This should be a clear, descriptive title that helps users understand what your agent does.

| Argument | Type | Default | Example |
|----------|------|---------|----------|
| `name` | string | Required | `"Financial Prompt Optimizer"` |

### description

The description provides a brief overview of your agent's capabilities and intended purpose. This text helps users understand when and how to use your agent effectively, and it's displayed as the welcome AI agent message when the chat is empty. It is important to keep it concise but informative.

If multi-orchestrator mode is enabled, then this description will be utilized by the main OpenBB Copilot to understand in what situations it should trigger this agent. So highlighting the capabilities and when to use a custom agent on its description is recommended.

| Argument | Type | Default | Example |
|----------|------|---------|----------|
| `description` | string | Required | `"Optimizes a user's prompt for finance: clearer, more specific, and actionable."` |

### Image thumbnail

The image field accepts a URL pointing to your agent's logo or avatar image. For optimal display in the OpenBB Workspace interface, use a square image with dimensions of at least 256x256 pixels. The image should be hosted on a publicly accessible URL.

| Argument | Type | Default | Example |
|----------|------|---------|----------|
| `image` | string | Optional | `"https://example.com/agent-logo.png"` |

### Endpoints

The query endpoint specifies where OpenBB Workspace should send user queries and interactions. This can be either a relative path like `"/query"` (if your agent runs on the same domain) or a full URL pointing to your agent's query handler like `"http://localhost:7777/v1/query"`.

This endpoint must accept POST requests and handle the QueryRequest format.

| Argument | Type | Default | Example |
|----------|------|---------|----------|
| `endpoints` | object | Required | `{"query": "http://localhost:7777/v1/query"}` |
| `endpoints.query` | string | Required | `"/query"` or `"http://localhost:7777/v1/query"` |

### Features

Configuration object that declares your agent's capabilities:

| Argument | Type | Default | Example |
|----------|------|---------|----------|
| `features` | object | Required | `{"streaming": true, "widget-dashboard-select": false}` |

#### Streaming

The streaming feature enables Server-Sent Events (SSE) for your agent's responses, allowing real-time streaming of content back to users. This provides a better user experience with progressive response rendering. This feature defaults to `True` for all agents even if not explicitly set.

Note: This is a legacy feature, and isn't required to be added.

| Argument | Type | Default | Example |
|----------|------|---------|----------|
| `streaming` | boolean | `true` | `true` |

#### Explicit context widgets

This feature grants your agent access to explicit context widgets (primary) - those that are currently selected or explicitly chosen by the user in the dashboard. When enabled, your agent will receive these widgets in the `primary` collection of the `QueryRequest`, allowing you to fetch and analyze their data.

| Argument | Type | Default | Example |
|----------|------|---------|----------|
| `widget-dashboard-select` | boolean | `false` | `true` |

#### Dashboard context widgets

This feature provides your agent with access to all widgets available on the current dashboard, not just the selected ones. When enabled, these widgets appear in the `secondary` collection of the `QueryRequest`, giving your agent broader context about the user's dashboard setup and available data sources.

| Argument | Type | Default | Example |
|----------|------|---------|----------|
| `widget-dashboard-search` | boolean | `false` | `true` |

## Complete Examples

### Basic Agent Configuration

```json
{
  "vanilla-agent": {
    "name": "Vanilla Agent",
    "description": "A basic agent that processes user queries",
    "image": "https://api.example.com/static/agent-logo.png",
    "endpoints": {
      "query": "/query"
    },
    "features": {
      "streaming": true,
      "widget-dashboard-select": false,
      "widget-dashboard-search": false
    }
  }
}
```

### Agent with Widget Access

```json
{
  "data-analysis-agent": {
    "name": "Data Analysis Agent",
    "description": "An agent that can access and analyze dashboard widget data",
    "image": "https://api.example.com/static/data-agent-logo.png",
    "endpoints": {
      "query": "http://localhost:8000/v1/query"
    },
    "features": {
      "streaming": true,
      "widget-dashboard-select": true,
      "widget-dashboard-search": true
    }
  }
}
```

### Multiple Agents Configuration

```json
{
  "general-assistant": {
    "name": "General Assistant",
    "description": "General-purpose financial assistant",
    "endpoints": {
      "query": "http://localhost:7777/general/query"
    },
    "features": {
      "streaming": true,
      "widget-dashboard-select": true,
      "widget-dashboard-search": false
    }
  },
  "market-analyst": {
    "name": "Market Analyst",
    "description": "Specialized in market analysis with dashboard data access",
    "image": "https://api.example.com/analyst-logo.png",
    "endpoints": {
      "query": "http://localhost:7777/analyst/query"
    },
    "features": {
      "streaming": true,
      "widget-dashboard-select": true,
      "widget-dashboard-search": true
    }
  },
  "research-assistant": {
    "name": "Research Assistant",
    "description": "Financial research and data processing",
    "endpoints": {
      "query": "http://localhost:7777/research/query"
    },
    "features": {
      "streaming": true,
      "widget-dashboard-select": false,
      "widget-dashboard-search": false
    }
  }
}
```
