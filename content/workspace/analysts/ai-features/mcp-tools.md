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
    src="https://openbb-cms.directus.app/assets/9e4121a3-a422-41fb-aaac-888f66b18fb2.png"
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

Here you'll find the "+" icon that allows you to add or edit MCP servers.

<div
  style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
>
  <img
    src="https://openbb-cms.directus.app/assets/861831f2-9bfc-41d2-bdd7-bc673ad39656.png"
    width="60%"
  />
</div>

Clicking the "+" icon opens the MCP Servers configuration dialog.

<div
  style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
>
  <img
    src="https://openbb-cms.directus.app/assets/1d12fdc5-4424-4858-8c34-85db9c18ba2e.png"
    width="100%"
  />
</div>

Within this dialog, clicking "Add Server" opens the following pop-up window.

<div
  style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
>
  <img
    src="https://openbb-cms.directus.app/assets/15e88b0c-d9d0-4697-87f0-2c82f0213d0f.png"
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
    src="https://openbb-cms.directus.app/assets/3d2e53ed-5d63-46e8-b369-d0e19c7017ef.png"
    width="100%"
  />
</div>

### Select MCP Server tools

With the MCP Tools dialog open, you can enable or disable specific MCP tools for Copilot access.

<div
  style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
>
  <img
    src="https://openbb-cms.directus.app/assets/861831f2-9bfc-41d2-bdd7-bc673ad39656.png"
    width="100%"
  />
</div>

Once an MCP Server is successfully connected, you can:

1. Select all or none of the tools of a specific MCP Server.

This toggles all fine-grained tool-level controls simultaneously. It's the most efficient way to exclude an MCP Server from Copilot's context.

2. Turn ON/OFF a specific set of tools from an MCP Server.

Note: Enabling all tools doesn't guarantee Copilot will use every tool; rather, it makes them available for selection. This granular control helps narrow OpenBB Copilot's context to what's most relevant to your needs.

---

If the MCP Server becomes disconnected, it will appear as disabled, as shown below:

<div
  style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
>
  <img
    src="https://openbb-cms.directus.app/assets/d983cab2-9cf0-4d2a-85d2-0226860b890d.png"
    width="100%"
  />
</div>

### MCP in action

When you submit a query to Copilot with MCP tools enabled, it can utilize one or more tools based on your prompt, including sequential tool usage when necessary.

For example, accessing OpenBB documentation requires two tools from the same MCP Server. Copilot automatically determines and executes this sequence on your behalf.

<div
  style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
>
  <img
    src="https://openbb-cms.directus.app/assets/5a9ef8ee-89e0-4f7c-853c-77fda234de00.png"
    width="100%"
  />
</div>

### Matching widget to MCP tools

As shown above, in the reasoning step, you can see when and at which point the MCP tool was called. In addition, you can configure a widget that shares identical metadata, or what we refer to as “matching”, to the corresponding MCP tool.

Once a matching widget has been set up, a citation marked with an asterisk (*) will appear at the end whenever the MCP tool is used. Additionally, when you click “Add matching widget to dashboard,” the widget will be automatically added to your current dashboard, using the same parameters applied by Copilot.

//TODO Add screenshot
