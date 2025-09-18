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

Example:

```json
{
  "financial_prompt_optimizer": {
      "name": "Financial Prompt Optimizer",
      "description": "Optimizes a user's prompt for finance: clearer, more specific, and actionable.",
      "image": "https://github.com/OpenBB-finance/copilot-for-terminal-pro/assets/14093308/7da2a512-93b9-478d-90bc-b8c3dd0cabcf",
      "endpoints": {"query": "http://localhost:7777/v1/query"},
      "features": {
          "streaming": true,
          "widget-dashboard-select": false,
          "widget-dashboard-search": false,
      },
  }
}
```

See more examples in the [Complete Examples section](#complete-examples).

See the JSON Schema definition in the [JsonSchema section](#jsonschema).

## Field Reference

### `agent_id`: Unique ID of the agent

The `agent_id` serves as a unique identifier for your agent within the OpenBB Workspace. This should be a lowercase string with hyphens replacing spaces, following standard slug conventions. The agent ID becomes the object key in the JSON response.

| Argument   | Type   | Required | Default | Example                        |
| ---------- | ------ | -------- | ------- | ------------------------------ |
| `agent_id` | string | Yes      | `null`  | `"financial_prompt_optimizer"` |

### `name`: Human-readable name

The `name` field specifies the human-readable display name for your agent that appears in the OpenBB Workspace user interface. This should be a clear, descriptive title that helps users understand what your agent does.

| Argument | Type   | Required | Default | Example                        |
| -------- | ------ | -------- | ------- | ------------------------------ |
| `name`   | string | Yes      | `null`  | `"Financial Prompt Optimizer"` |

### `description`: Human-readable description

The `description` provides a brief overview of your agent's capabilities and intended purpose. This text helps users understand when and how to use your agent effectively, and it's displayed as the welcome AI agent message when the chat is empty. It is important to keep it concise but informative.

If multi-orchestrator mode is enabled, then this description will be utilized by the main OpenBB Copilot to understand in what situations it should trigger this agent. So highlighting the capabilities and when to use a custom agent on its description is recommended.

| Argument      | Type   | Required | Default | Example                                                                            |
| ------------- | ------ | -------- | ------- | ---------------------------------------------------------------------------------- |
| `description` | string | Yes      | `null`  | `"Optimizes a user's prompt for finance: clearer, more specific, and actionable."` |

### `image`: Image thumbnail

The image field accepts a URL pointing to your agent's logo or avatar image. For optimal display in the OpenBB Workspace interface, use a square image with dimensions of at least 256x256 pixels. The image should be hosted on a publicly accessible URL.

| Argument | Type   | Required | Default | Example                                |
| -------- | ------ | -------- | ------- | -------------------------------------- |
| `image`  | string | No       | `null`  | `"https://example.com/agent-logo.png"` |

### `endpoints`: Communication endpoints

The query endpoint specifies where OpenBB Workspace should send user queries and interactions. This can be either a relative path like `"/query"` (if your agent runs on the same domain) or a full URL pointing to your agent's query handler like `"http://localhost:7777/v1/query"`.

This endpoint must accept POST requests and handle the QueryRequest format.

| Argument          | Type   | Required | Default | Example                                          |
| ----------------- | ------ | -------- | ------- | ------------------------------------------------ |
| `endpoints`       | object | Yes      | `null`  | `{"query": "http://localhost:7777/v1/query"}`    |
| `endpoints.query` | string | Yes      | `null`  | `"/query"` or `"http://localhost:7777/v1/query"` |

### `features`: Features that your agent advertises

Configuration object that declares the capabilities that your agent advertises to OpenBB Workspace. This allows the workspace to understand what features your agent supports and how to interact with it effectively.

| Argument             | Type    | Required | Default | Example                                                 |
| -------------------- | ------- | -------- | ------- | ------------------------------------------------------- |
| `features`           | object  | Yes      | `null`  | `{"streaming": true, "widget-dashboard-select": false}` |

See continuation of this section for details on each feature.

#### `streaming`: Streaming responses

The streaming feature enables Server-Sent Events (SSE) for your agent's responses, allowing real-time streaming of content back to users. This provides a better user experience with progressive response rendering. This feature defaults to `True` for all agents even if not explicitly set.

| Argument    | Type    | Required | Default | Example |
| ----------- | ------- | -------- | ------- | ------- |
| `streaming` | boolean | No       | `true`  | `true`  |

#### `widget-dashboard-select`: Explicit context widgets

This feature grants your agent access to explicit context widgets (primary) - those that are currently selected or explicitly chosen by the user in the dashboard. When enabled, your agent will receive these widgets in the `widgets.primary` collection of the `QueryRequest`, allowing you to fetch and analyze their data.

| Argument                  | Type    | Required | Default | Example |
| ------------------------- | ------- | -------- | ------- | ------- |
| `widget-dashboard-select` | boolean | No       | `false` | `true`  |

#### `widget-dashboard-search`: Dashboard context widgets

This feature provides your agent with access to all widgets available on the current dashboard, not just the selected ones. When enabled, these widgets appear in the `widgets.secondary` collection of the `QueryRequest`, giving your agent broader context about the user's dashboard setup and available data sources.

| Argument                  | Type    | Required | Default | Example |
| ------------------------- | ------- | -------- | ------- | ------- |
| `widget-dashboard-search` | boolean | No       | `false` | `true`  |

## JsonSchema

```jsonschema
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "type": "object",
  "patternProperties": {
    "^[a-z0-9-]+$": {
      "type": "object",
      "properties": {
        "name": {
          "type": "string",
          "minLength": 1
        },
        "description": {
          "type": "string",
          "minLength": 1
        },
        "image": {
          "type": ["string", "null"],
          "format": "uri"
        },
        "endpoints": {
          "type": "object",
          "properties": {
            "query": {
              "type": "string",
              "minLength": 1
            }
          },
          "required": ["query"],
          "additionalProperties": false
        },
        "features": {
          "type": "object",
          "properties": {
            "streaming": {
              "type": "boolean",
              "default": true
            },
            "widget-dashboard-select": {
              "type": "boolean",
              "default": false
            },
            "widget-dashboard-search": {
              "type": "boolean",
              "default": false
            }
          },
          "additionalProperties": true
        }
      },
      "required": ["name", "description", "endpoints", "features"],
      "additionalProperties": false
    }
  },
  "additionalProperties": false
}
```

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
