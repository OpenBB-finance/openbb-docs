---
title: Matching widget to MCP tool
sidebar_position: 22
description: Learn how you can make it so an MCP server and tool are associated with a specific widget
keywords:
- MCP tool
- matching widget
- MCP server
- widgets.json
- citations
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="Matching widget to MCP tool | OpenBB Workspace Docs" />

When an MCP (Model Context Protocol) tool is invoked, OpenBB Workspace can automatically detect if there's a matching widget configured and provide a matching citation. This is achieved through configuration in your `widgets.json` file.

## How It Works

OpenBB Workspace checks if a widget has been configured with matching MCP tool metadata. When a match is found:

1. The system shows a notification that a matching widget was found
2. A citation is automatically generated and attached to the MCP tool response
3. The citation includes widget details like name, description, and input parameters

## Configuration

:::important
`mcp_server` and `tool_id` provided should match 1:1 the ones that are connected to OpenBB Copilot.
:::

To enable widget matching for MCP tools, add an `mcp_tool` property, like:

```json
"mcp_tool": {
  "mcp_server": "server_name",
  "tool_id": "tool_name"
}
```

The widget configuration in `widgets.json` should be like:

```json
{
  "widgetId": "your_widget_id",
  "name": "Your Widget Name",
  "description": "Widget description",
  ...
  "mcp_tool": {
    "mcp_server": "server_name",
    "tool_id": "tool_name"
  }
}
```

## Example

We will utilize this [repository example](https://github.com/OpenBB-finance/backends-for-openbb/tree/main/widget-examples/matching-widget-mcp-tool) as a way to demonstrate the flow.

### 1. OpenBB widget with matching MCP

First we connect the backend to OpenBB.

<img className="pro-border-gradient" width="800" alt="OpenBB backend connection interface showing name and URL fields" src="https://openbb-cms.directus.app/assets/77a2c0d8-3a9b-47a7-933e-85e7131ef954.png" />

The name and URL of the backend can be ANYTHING.

However, what is important is for the widget configuration to include `mcp_tool` as follows:

<img className="pro-border-gradient" width="800" alt="Widget configuration showing mcp_tool property with server and tool ID" src="https://openbb-cms.directus.app/assets/1603ad32-6bd2-43bc-a4cc-553cb4163c34.png" />

### 2. Connect MCP Server

Then you want to connect the MCP Server and ensure that it has the MCP Server and the MCP tool of interest have the **EXACT** same name as the one provided in the `widgets.json`.

<img className="pro-border-gradient" width="800" alt="MCP Server connection dialog showing 'Financial Data' server name" src="https://openbb-cms.directus.app/assets/6d66dcf3-98c0-4150-aace-035a063df35a.png" />

In the case above, note that the name of MCP Server is "Financial Data" and so is the `revenue_mockup_data.mcp_tool.mcp_server` field in `widgets.json`.

<img className="pro-border-gradient" width="800" alt="MCP tool configuration showing 'get_company_revenue_data' tool name" src="https://openbb-cms.directus.app/assets/643af141-6b8c-4828-b7dc-2242560d71f8.png" />

And also the MCP tool is "get_company_revenue_data" and so is the `revenue_mockup_data.mcp_tool.mcp_tool` field in `widgets.json`.


### 3. Matching widget citation

This is when the magic happens. If the user has that MCP tool enabled, and asks something like:

> "Utilize financial data MCP tool and get company revenue data for AAPL"

Then when the MCP tool is utilized, the user will see a toast like the following:

<img className="pro-border-gradient" width="800" alt="Toast notification showing 'Matching widget found' message" src="https://openbb-cms.directus.app/assets/655482de-3d2b-426c-8315-dbb579c78f16.png" />

This indicates that a matching widget was found.

<img className="pro-border-gradient" width="800" alt="Chat response showing matching widget citation with asterisk indicator" src="https://openbb-cms.directus.app/assets/d2c50edb-43e2-4771-9125-b31117501a61.png" />

The user will be able to see that this is a matching widget, by the property of having a `*` at the end.

When hovering on top of that widget, the user will be able to add it to the dashboard to the same parameters as the ones that were utilized by the copilot.

<img className="pro-border-gradient" width="800" alt="Widget hover tooltip showing option to add to dashboard" src="https://openbb-cms.directus.app/assets/a719abc4-9b2f-41c7-b1a8-dd84fc707b77.png" />

The advantage now is that the user can interact with the parameters, charting and all other OpenBB widgets properties.

<img className="pro-border-gradient" width="800" alt="Interactive widget dashboard showing parameters, charting, and OpenBB properties" src="https://openbb-cms.directus.app/assets/6f0df91c-195f-48c4-9fbe-13ed589245a9.png" />
