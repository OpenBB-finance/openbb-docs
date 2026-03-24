---
title: MCP Tools
sidebar_position: 11
description: Model Context Protocol (MCP) tools integration in OpenBB Copilot
keywords:
- MCP
- Model Context Protocol
- tools
- integration
- external tools
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="MCP Tools | OpenBB Workspace Docs" />

Model Context Protocol (MCP) integration enables seamless connection to third-party data providers, analytical services, and specialized financial tools without requiring custom development within the OpenBB Workspace.

<div
  style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
>
  <img
    src="https://openbb-cms.directus.app/assets/031856b3-2f23-4856-ba14-01a2e65d297d.png"
    width="100%"
  />
</div>

We use the [use-mcp library](https://github.com/modelcontextprotocol/use-mcp) and support both MCP and SSE protocols, but not STDIO. If you need STDIO support, we recommend exploring solutions like [supergateway](https://github.com/supercorp-ai/supergateway).

### Configure your MCP Servers

To configure your MCP servers, open the MCP server menu from the copilot settings.

<div
  style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
>
  <img
    src="https://openbb-cms.directus.app/assets/2d50c181-6fa0-4ec4-81b6-3faa936af17e.png"
    width="40%"
  />
</div>

From here, click "Manage MCP servers" in the top right to add, edit, or delete MCP servers.

<div
  style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
>
  <img
    src="https://openbb-cms.directus.app/assets/0ec2a6fc-bb39-409c-825a-a59ec91050f4.png"
    width="40%"
  />
</div>

This opens the MCP Servers tab under AI Library, where you can view all available ones and their active or inactive status.

To add a new MCP server, click on the "Add server" button on the top right.

<div
  style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
>
  <img
    src="https://openbb-cms.directus.app/assets/f722594d-5383-4ea1-a540-706d04aa773b.png"
    width="100%"
  />
</div>

This opens the MCP server configuration dialog. Fill in the details, such as the server name and URL. 

<div
  style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
>
  <img
    src="https://openbb-cms.directus.app/assets/0def926d-12be-4e5f-bbf2-e50b243a8020.png"
    width="60%"
  />
</div>

If your chosen MCP server requires authentication, similar to the one from Financial Modelling Prep below, click the "Add Custom Header" button in the bottom left and enter the key-value pair.

<div
  style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
>
  <img
    src="https://openbb-cms.directus.app/assets/f90d207d-5efe-427b-99d3-246b479b61f1.png"
    width="60%"
  />
</div>

Once you click "Add", you return to the MCP Servers tab where you can see each server's active status. Click on a connected server to view its discovered tools, and expand any tool to read its description.

<div
  style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
>
  <img
    src="https://openbb-cms.directus.app/assets/5e617b0b-095e-4875-bdb6-28acd9359ae4.png"
    width="100%"
  />
</div>

### Select MCP Server tools

With the MCP Tools dialog open, you can enable or disable specific MCP tools for Copilot access.

<div
  style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
>
  <img
    src="https://openbb-cms.directus.app/assets/89cf6d3f-91eb-4ddb-8dfa-deeb2de8a473.png"
    width="40%"
  />
</div>

Once an MCP Server is successfully connected, you can:

1. **Select all or none**: toggles every tool from a specific MCP server at once. This is the quickest way to include or exclude an entire server from Copilot's context.

2. **Enable or disable individual tools**: gives you granular control over which tools from a server are available to Copilot.

Enabling all tools does not guarantee Copilot will use every one. It simply makes them available. This granular control helps keep Copilot's context focused on what is most relevant to your needs.


### MCP in action

When you submit a query to Copilot with MCP tools enabled, it can utilize one or more tools based on your prompt, including sequential tool usage when necessary.

For example, accessing OpenBB documentation requires two tools from the same MCP Server. Copilot automatically determines and executes this sequence on your behalf.

<div
  style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
>
  <img
    src="https://openbb-cms.directus.app/assets/a3fbad96-a2c5-4ebc-bfd9-bb6f59050cea.png"
    width="100%"
  />
</div>

### Matching widget to MCP tools

In the reasoning step shown above, you can see when each MCP tool was called. You can also configure a widget with matching metadata. This links the widget to its corresponding MCP tool.

Once a matching widget is set up, a citation marked with an asterisk (\*) appears whenever the MCP tool is used.

<img className="pro-border-gradient" width="800" alt="Widget hover tooltip showing option to add to dashboard" src="https://openbb-cms.directus.app/assets/d2c50edb-43e2-4771-9125-b31117501a61.png" />


Click “Add matching widget to dashboard” to add the widget to your current dashboard with the same parameters applied by Copilot.



<img className="pro-border-gradient" width="800" alt="Interactive widget dashboard showing parameters, charting, and OpenBB properties" src="https://openbb-cms.directus.app/assets/a719abc4-9b2f-41c7-b1a8-dd84fc707b77.png" />