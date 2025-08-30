---
title: agents.json Reference
sidebar_position: 9
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

The `agents.json` endpoint is a critical component of custom AI agent integration in OpenBB Workspace. This endpoint provides metadata and configuration information that tells the workspace how to interact with your custom agent.

## Overview

When you add a custom AI agent to OpenBB Workspace, the system first queries your agent's `/agents.json` endpoint to discover its capabilities, configuration, and how to communicate with it. This configuration file acts as a contract between your agent and the workspace.

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
      "query": "string (path)"
    },
    "features": {
      "streaming": boolean,
      "widget-dashboard-select": boolean,
      "widget-filter": boolean,
      "reasoning-steps": boolean,
      "citations": boolean,
      "charts": boolean,
      "tables": boolean
    },
    "metadata": {
      "version": "string",
      "author": "string",
      "contact": "string"
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
- **Type**: String (path)
- **Required**: Yes
- **Description**: Relative path to your agent's query endpoint that handles user interactions
- **Example**: `"/query"` or `"/api/v1/query"`

#### features

Configuration object that declares your agent's capabilities:

##### features.streaming
- **Type**: Boolean
- **Required**: No
- **Default**: `false`
- **Description**: Whether your agent supports Server-Sent Events (SSE) for streaming responses
- **Example**: `true`

##### features.widget-dashboard-select
- **Type**: Boolean
- **Required**: No
- **Default**: `false`
- **Description**: Whether your agent can access and interact with widgets selected in the dashboard
- **Example**: `true`

##### features.widget-filter
- **Type**: Boolean
- **Required**: No
- **Default**: `false`
- **Description**: Whether your agent respects widget filtering preferences
- **Example**: `true`

##### features.reasoning-steps
- **Type**: Boolean
- **Required**: No
- **Default**: `false`
- **Description**: Whether your agent provides intermediate reasoning steps during processing
- **Example**: `true`

##### features.citations
- **Type**: Boolean
- **Required**: No
- **Default**: `false`
- **Description**: Whether your agent provides citations and sources for information
- **Example**: `true`

##### features.charts
- **Type**: Boolean
- **Required**: No
- **Default**: `false`
- **Description**: Whether your agent can generate interactive charts and visualizations
- **Example**: `true`

##### features.tables
- **Type**: Boolean
- **Required**: No
- **Default**: `false`
- **Description**: Whether your agent can generate structured data tables
- **Example**: `true`

#### metadata (Optional)

Additional information about your agent:

##### metadata.version
- **Type**: String
- **Required**: No
- **Description**: Version number of your agent
- **Example**: `"1.2.0"`

##### metadata.author
- **Type**: String
- **Required**: No
- **Description**: Author or organization name
- **Example**: `"Acme Financial Services"`

##### metadata.contact
- **Type**: String
- **Required**: No
- **Description**: Contact information for support
- **Example**: `"support@example.com"`

## Complete Example

### Single Agent Configuration

```json
{
  "equity-research-agent": {
    "name": "Equity Research Assistant",
    "description": "Advanced AI agent for equity analysis with real-time market data integration",
    "image": "https://api.example.com/static/agent-logo.png",
    "endpoints": {
      "query": "/api/v1/query"
    },
    "features": {
      "streaming": true,
      "widget-dashboard-select": true,
      "widget-filter": true,
      "reasoning-steps": true,
      "citations": true,
      "charts": true,
      "tables": true
    },
    "metadata": {
      "version": "2.1.0",
      "author": "Financial AI Labs",
      "contact": "support@finai-labs.com"
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
      "query": "/general/query"
    },
    "features": {
      "streaming": true,
      "widget-dashboard-select": true
    }
  },
  "quantitative-analyst": {
    "name": "Quantitative Analyst",
    "description": "Specialized in quantitative analysis and backtesting",
    "image": "https://api.example.com/quant-logo.png",
    "endpoints": {
      "query": "/quant/query"
    },
    "features": {
      "streaming": true,
      "widget-dashboard-select": true,
      "charts": true,
      "tables": true
    }
  },
  "risk-manager": {
    "name": "Risk Manager",
    "description": "Portfolio risk assessment and management",
    "endpoints": {
      "query": "/risk/query"
    },
    "features": {
      "streaming": true,
      "widget-filter": true,
      "reasoning-steps": true,
      "tables": true
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
            "endpoints": {
                "query": "/query"
            },
            "features": {
                "streaming": True,
                "widget-dashboard-select": True
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
      "endpoints": {
        "query": "/query"
      },
      "features": {
        "streaming": true,
        "widget-dashboard-select": true
      }
    }
  });
});
```

## Best Practices

1. **Consistent Naming**: Use clear, descriptive names for your agents that reflect their purpose
2. **Feature Declaration**: Only declare features that your agent actually implements
3. **Version Management**: Include version information in metadata for tracking updates
4. **Error Handling**: Ensure the endpoint always returns valid JSON, even in error cases
5. **CORS Headers**: Configure appropriate CORS headers if your agent is hosted on a different domain
6. **Response Time**: The endpoint should respond quickly (< 1 second) as it's queried during agent initialization
7. **SSL/TLS**: Use HTTPS in production environments for security

## Validation

OpenBB Workspace validates the agents.json response to ensure:

- Valid JSON syntax
- Required fields are present (`name`, `endpoints.query`)
- URLs are properly formatted
- Boolean values are actual booleans (not strings)

If validation fails, the agent will not be added to the workspace, and an error message will be displayed to the user.

## Troubleshooting

### Common Issues

1. **Agent not appearing in workspace**
   - Verify the `/agents.json` endpoint is accessible
   - Check JSON syntax validity
   - Ensure required fields are present

2. **Features not working**
   - Confirm feature flags are set to `true`
   - Verify your query endpoint implements the declared features

3. **CORS errors**
   - Add appropriate CORS headers to your response
   - Example: `Access-Control-Allow-Origin: *`

4. **Invalid JSON response**
   - Use a JSON validator to check syntax
   - Ensure proper escaping of special characters
   - Verify Content-Type header is set to `application/json`

## Related Documentation

- [AI Agents Overview](/workspace/developers/ai-agents)
- [OpenBB AI SDK](https://github.com/OpenBB-finance/openbb-ai)
- [Agent Examples](https://github.com/OpenBB-finance/agents-for-openbb)
- [widgets.json Reference](/workspace/developers/widgets-json-reference)
- [apps.json Reference](/workspace/developers/apps-json-reference)