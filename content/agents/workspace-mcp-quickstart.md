---
title: Workspace MCP Quickstart
sidebar_position: 2
description: Create a Workspace MCP token, connect the browser bridge, and attach an external MCP client.
keywords:
- OpenBB Workspace MCP
- Workspace MCP quickstart
- MCP client setup
- Workspace Companion
- Codex
- Claude Code
- Cursor
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="Workspace MCP Quickstart | OpenBB Docs" />

This guide connects an external MCP client to an active OpenBB Workspace browser session through the hosted Workspace MCP endpoint.

## Prerequisites

Before you start:

- OpenBB Workspace is available in your browser.
- Your MCP client supports HTTP MCP servers.
- You can edit your MCP client configuration.

The Workspace tab must stay open and connected while the external agent uses Workspace MCP tools.

## 1. Open Workspace MCP Companion

Open OpenBB Workspace in your browser and open the hosted companion:

1. Open Workspace.
2. Click the hamburger icon in the top-left corner.
3. Open **Workspace MCP Companion**.

<div style={{display: 'flex', justifyContent: 'center'}}>
  <img
    className="pro-border-gradient"
    alt="Workspace menu showing where to open Workspace MCP Companion"
    src="https://openbb-cms.directus.app/assets/22301170-4e45-4d5f-bb78-4f375b310577.png"
    width="800"
  />
</div>

The companion shows the hosted MCP endpoint. The endpoint path is `/mcp` on the same backend host used by Workspace.

## 2. Create a Workspace MCP token

In the companion modal:

1. Enter a token name.
2. Click **Create token**.
3. Copy the token shown in the success message.

The raw token is shown once. Existing tokens are listed by name and prefix, and can be revoked from the same modal.

Workspace MCP tokens are personal access tokens for MCP. They are sent as bearer tokens to `/mcp`, remain valid until revoked, and do not authenticate normal Workspace API routes.

## 3. Connect the browser bridge

Click **Connect** in the Workspace MCP Companion. This connects the active browser tab to the hosted MCP service.

Each user has one active Workspace MCP browser bridge. If you connect from another tab or device, the latest bridge replaces the previous one.

## 4. Configure your MCP client

Use the endpoint copied from Workspace MCP Companion and send the token as an HTTP authorization header:

```text
Authorization: Bearer obb_mcp_...
```

For clients that read a project `.mcp.json` file, use an HTTP server entry with headers:

```json
{
  "mcpServers": {
    "workspace_mcp": {
      "type": "http",
      "url": "https://pro.openbb.co/mcp",
      "headers": {
        "Authorization": "Bearer obb_mcp_..."
      }
    }
  }
}
```

Replace the URL with the endpoint shown in Workspace MCP Companion.

For Codex, store the token in an environment variable and point Codex at the hosted `/mcp` endpoint:

```bash
export OPENBB_WORKSPACE_MCP_TOKEN=obb_mcp_...
codex mcp add workspace_mcp \
  --url https://pro.openbb.co/mcp \
  --bearer-token-env-var OPENBB_WORKSPACE_MCP_TOKEN
```

For Claude Code:

```bash
claude mcp add --transport http workspace_mcp \
  https://pro.openbb.co/mcp \
  --header "Authorization: Bearer obb_mcp_..."
```

If your client has an `mcp add` command or settings UI, choose the HTTP transport, use the hosted `/mcp` URL, and configure the same `Authorization` header.

## 5. Validate the connection

Ask the agent to call `get_workspace_snapshot`. A successful call should return the active Workspace state, including dashboard metadata and the current dashboard composition when available.

A practical validation prompt is:

```text
Call get_workspace_snapshot and tell me the active dashboard id and the visible tabs.
```

If the agent can list the dashboard and tabs, the MCP client, hosted MCP endpoint, and browser bridge are connected.

## 6. Try common Workspace actions

After the connection is working, ask the agent to read data from Workspace or add a widget to the current dashboard. The agent should inspect the live Workspace state first, then call the relevant MCP tools with identifiers from the snapshot.

For reading data, use a prompt like:

```text
What data do you see on this dashboard and tab?
```

<div style={{display: 'flex', justifyContent: 'center'}}>
  <img
    className="pro-border-gradient"
    alt="Codex reading Workspace data through the Workspace MCP"
    src="https://openbb-cms.directus.app/assets/9863d4bb-2e7b-43dc-8da0-e13e58044cc8.png"
    width="800"
  />
</div>

For adding a widget, use a prompt like:

```text
Analyze my current portfolio exposure and add a markdown note widget with that analysis in the same tab that is open
```

<div style={{display: 'flex', justifyContent: 'center'}}>
  <img
    className="pro-border-gradient"
    alt="Codex adding a widget to Workspace through the Workspace MCP"
    src="https://openbb-cms.directus.app/assets/029f832b-18bb-4903-ab2b-ba5e6cbb48e8.png"
    width="800"
  />
</div>

## Troubleshooting

| Symptom | What to check |
|---------|---------------|
| `Could not validate Workspace MCP credentials` | Confirm the MCP client sends `Authorization: Bearer <token>` and that the token has not been revoked. |
| `No active Workspace browser connected` | Open Workspace, open Workspace MCP Companion, and click **Connect**. |
| Tool call times out | Keep the Workspace tab open and active enough to execute commands. |
| MCP client cannot connect | Confirm the client supports HTTP MCP servers and uses the hosted `/mcp` URL copied from Workspace MCP Companion. |
| Agent sees out-of-date dashboard state | Call `get_workspace_snapshot` again after navigation or reconnect the browser bridge. |
