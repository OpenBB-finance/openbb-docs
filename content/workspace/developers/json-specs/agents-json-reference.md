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

## Overview

When you add a custom AI agent to OpenBB Workspace, the system first queries your agent's `/agents.json` endpoint to discover its capabilities, configuration, and how to communicate with it. This configuration acts as a contract between your agent and the workspace.

## Endpoint Structure

The `agents.json` endpoint should return a JSON object with your agent(s) configuration. The endpoint must:

- Be accessible via HTTP GET request
- Return `Content-Type: application/json`
- Respond with a valid JSON structure
- Be available at the path `/agents.json` relative to your agent's base URL

## JSON Schema

### Root Structure

```json
{
  "<agent-id>": {
    "name": "string",
    "description": "string",
    "image": "string (URL)",
    "endpoints": {
      "query": "string (URL)"
    },
    "features": {
      "streaming": boolean,
      "widget-dashboard-select": boolean,
      "widget-dashboard-search": boolean
    }
  }
}
```

### Field Descriptions

#### Agent ID

- **Type**: String (object key)
- **Required**: Yes
- **Description**: Unique identifier for your agent. Should be lowercase with hyphens for spaces.
- **Example**: `"financial-analysis-agent"`

#### name

- **Type**: String
- **Required**: Yes
- **Description**: Display name for your agent in the OpenBB Workspace UI
- **Example**: `"Financial Analysis Expert"`

#### description

- **Type**: String
- **Required**: Yes
- **Description**: Brief description of your agent's capabilities and purpose
- **Example**: `"Specialized agent for equity research and financial statement analysis"`

#### image

- **Type**: String (URL)
- **Required**: No
- **Description**: URL to your agent's logo or avatar image. Should be a square image, ideally 256x256 pixels or larger.
- **Example**: `"https://example.com/agent-logo.png"`

#### endpoints

##### endpoints.query

- **Type**: String (URL)
- **Required**: Yes
- **Description**: Path or a full URL to your agent's query endpoint that handles user interactions
- **Example**: `"/query"` or `"https://api.example.com/query"`

#### features

Configuration object that declares your agent's capabilities:

##### features.streaming

- **Type**: Boolean
- **Required**: No
- **Default**: Defaults to `true` for all agents even if not set
- **Description**: Enables Server-Sent Events (SSE) for streaming responses.
- **Example**: `true`

##### features.widget-dashboard-select

- **Type**: Boolean
- **Required**: No
- **Default**: `false`
- **Description**: Enables access to priority widgets (widgets that are currently selected or focused in the dashboard)
- **Example**: `true`

##### features.widget-dashboard-search

- **Type**: Boolean
- **Required**: No
- **Default**: `false`
- **Description**: Enables access to non-priority widgets on the current dashboard
- **Example**: `true`

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

## Implementation Notes

### FastAPI Example

```python
from fastapi import FastAPI
from fastapi.responses import JSONResponse

app = FastAPI()

@app.get("/agents.json")
async def get_agents_config():
    return JSONResponse(content={
        "my-agent": {
            "name": "My Custom Agent",
            "description": "Description of my agent",
            "image": "https://api.example.com/logo.png",  # Optional
            "endpoints": {
                "query": "/query"
            },
            "features": {
                "streaming": True,
                "widget-dashboard-select": True,
                "widget-dashboard-search": False
            }
        }
    })
```

### Express.js Example

```javascript
const express = require('express');
const app = express();

app.get('/agents.json', (req, res) => {
  res.json({
    "my-agent": {
      "name": "My Custom Agent",
      "description": "Description of my agent",
      "image": "https://api.example.com/logo.png",  // Optional
      "endpoints": {
        "query": "http://localhost:3000/v1/query"
      },
      "features": {
        "streaming": true,
        "widget-dashboard-select": true,
        "widget-dashboard-search": false
      }
    }
  });
});
```
