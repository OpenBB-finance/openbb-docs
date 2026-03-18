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

We utilize the [use-mcp library](https://github.com/modelcontextprotocol/use-mcp) and support both MCP and SSE protocols, but not STDIO. If you are interested in STDIO support, we recommend exploring solutions like [https://github.com/supercorp-ai/supergateway](https://github.com/supercorp-ai/supergateway).

### Configure your MCP Servers

Clicking this button opens the MCP server enable/disable menu.

<div
  style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
>
  <img
    src="https://openbb-cms.directus.app/assets/2d50c181-6fa0-4ec4-81b6-3faa936af17e.png"
    width="40%"
  />
</div>

Here you'll find the option to "Manage MCP servers",  which will allow you to add, delete or edit MCP servers.

<div
  style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
>
  <img
    src="https://openbb-cms.directus.app/assets/0ec2a6fc-bb39-409c-825a-a59ec91050f4.png"
    width="60%"
  />
</div>

<div
  style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
>
  <img
    src="https://openbb-cms.directus.app/assets/f722594d-5383-4ea1-a540-706d04aa773b.png"
    width="60%"
  />
</div>

Then click on the "Add server" button, which then opens the MCP Servers configuration dialog.

<div
  style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
>
  <img
    src="https://openbb-cms.directus.app/assets/0def926d-12be-4e5f-bbf2-e50b243a8020.png"
    width="100%"
  />
</div>

Clicking "Add" initiates the connection, regardless of OAuth configuration.

Here's how OAuth appears when connecting to [Smithery.ai](https://smithery.ai/), a directory containing over 6,000 MCP servers.

<div
  style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
>
  <img
    src="https://openbb-cms.directus.app/assets/0ef5c823-a1fe-4fec-9d17-9165e0d282b1.png"
    width="100%"
  />
</div>

After connecting, you'll return to the Workspace and see "Authenticating..." displayed.

<div
  style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
>
  <img
    src="https://openbb-cms.directus.app/assets/2b3b1671-20c3-46de-9985-5c55ba22c2c5.png"
    width="100%"
  />
</div>

In the MCP Servers Configuration dialog, clicking on a successfully connected server displays the discovered tools. You can then open these tools to view their descriptions.

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
    src="https://openbb-cms.directus.app/assets/e7b1de1a-b77a-4ca3-81e1-3586045fee7f.png"
    width="100%"
  />
</div>

Once an MCP Server is successfully connected, you can:

1. Select all or none of the tools of a specific MCP Server.

This toggles all fine-grained tool-level controls simultaneously. It's the most efficient way to exclude an MCP Server from Copilot's context.

2. Turn ON/OFF a specific set of tools from an MCP Server.

Note: Enabling all tools doesn't guarantee Copilot will use every tool; rather, it makes them available for selection. This granular control helps narrow OpenBB Copilot's context to what's most relevant to your needs.


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

As shown above, in the reasoning step, you can see when and at which point the MCP tool was called. In addition, you can configure a widget that shares identical metadata, or what we refer to as “matching”, to the corresponding MCP tool.

Once a matching widget has been set up, a citation marked with an asterisk (*) will appear at the end whenever the MCP tool is used. 

<img className="pro-border-gradient" width="800" alt="Widget hover tooltip showing option to add to dashboard" src="https://openbb-cms.directus.app/assets/d2c50edb-43e2-4771-9125-b31117501a61.png" />


Additionally, when you click “Add matching widget to dashboard,” the widget will be automatically added to your current dashboard, using the same parameters applied by Copilot.



<img className="pro-border-gradient" width="800" alt="Interactive widget dashboard showing parameters, charting, and OpenBB properties" src="https://openbb-cms.directus.app/assets/a719abc4-9b2f-41c7-b1a8-dd84fc707b77.png" />