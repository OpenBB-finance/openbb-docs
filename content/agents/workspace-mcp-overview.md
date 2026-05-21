---
title: Workspace MCP Overview
sidebar_position: 1
description: Understand how the OpenBB Workspace MCP exposes a live Workspace browser session to external AI agents.
keywords:
- OpenBB Workspace MCP
- Model Context Protocol
- MCP server
- AI agents
- Workspace Companion
- dashboard automation
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';
import TutorialVideo from '@site/src/components/General/TutorialVideo.tsx';

<HeadTitle title="Workspace MCP Overview | OpenBB Docs" />

The OpenBB Workspace MCP is a local companion server that exposes your active Workspace browser session as Model Context Protocol (MCP) tools. An external MCP-capable agent can use those tools to inspect dashboards, fetch widget data, create widgets, manage tabs, register backends, and instantiate Workspace apps.

Use it when an agent needs structured access to Workspace state. It avoids brittle browser automation because the agent calls Workspace commands directly instead of clicking through the UI.

## How it differs from MCP tools inside Workspace

OpenBB Workspace supports MCP in two directions:

| Feature | Direction | Main use case |
|---------|-----------|---------------|
| Workspace MCP | External agent to Workspace | Let Codex, Claude Code, Cursor, a custom agent, or another MCP client control a live Workspace session. |
| MCP tools in Copilot | Workspace to external MCP servers | Let Workspace Copilot call tools from third-party MCP servers. |

The Workspace MCP is the first case. Workspace becomes the tool server, and your agent becomes the client.

## Demo in Codex

This demo shows Codex using the Workspace MCP to interact with an active OpenBB Workspace session.

<TutorialVideo
  youtubeLink="https://www.youtube.com/embed/Q4Pj9wMZgGs"
/>

## Architecture

The Workspace MCP runs as a local sidecar process:

```text
MCP client or agent
    |
    | streamable HTTP MCP
    v
Workspace MCP sidecar
    |
    | WebSocket bridge
    v
OpenBB Workspace browser tab
    |
    | Workspace frontend state and backend calls
    v
Dashboards, widgets, apps, data backends, and skills
```

The sidecar exposes a stateless MCP endpoint at `http://127.0.0.1:8787/mcp` by default. Workspace connects to the same sidecar through a browser bridge. Tool calls sent by the agent are forwarded to the connected browser tab, executed by Workspace, and returned as structured results.

The browser must stay open and connected. If the Workspace tab disconnects, the sidecar remains running but tool calls return an unavailable error until the browser reconnects.

## What agents can do

The current tool surface covers the main Workspace authoring and inspection workflows:

| Area | Examples |
|------|----------|
| Session discovery | Read the current Workspace state, active dashboard, tabs, layout coordinates, available skills, and connected tools. |
| Widget discovery | List widgets from connected backends, inspect widget schemas, and fetch dynamic parameter options. |
| Data access | Fetch live widget data using the same data path the Workspace renderer uses. |
| Dashboard authoring | Create, read, and rename dashboards; navigate between dashboards and tabs. |
| Tab management | Create a navigation bar, add tabs, remove tabs, and rename tabs. |
| Widget authoring | Create widgets from backend definitions, update widget parameters, resize or move widgets, read widget state, and delete individual widgets. |
| Generated artifacts | Add generated notes, tables, charts, and HTML widgets without a backend connection. |
| Backend and app workflows | Register data backends, refresh backends, list app templates, and instantiate apps into dashboards. |
| Agent and skill workflows | Delegate tasks to configured Workspace agents and load skills from the Workspace skill library. |

The MCP server also publishes app-builder resources under `openbb://workspace/...`. Agents can read these resources when they are building or reviewing Workspace backends, `widgets.json`, or `apps.json` files.

## Common workflows

### Build a dashboard from live Workspace state

A typical dashboard workflow starts with `get_workspace_snapshot`, then uses identifiers from that response:

1. Read the active dashboard and available backends.
2. Create or select a dashboard.
3. Add tabs with `manage_navigation_bar`.
4. List widgets with `list_available_widgets`.
5. Inspect the exact widget contract with `get_widget_schema`.
6. Create widgets with explicit `origin`, `widget_id`, and `data_args`.
7. Use `update_widget_layout` to place widgets on the 40-column grid.

Agents should not invent dashboard IDs, widget IDs, tab IDs, backend IDs, or skill slugs. They should discover those values through the MCP tools and reuse them.

### Build and open a custom app

The Workspace MCP can close the loop for agent-built Workspace apps:

1. The agent creates or modifies a backend that serves `widgets.json` and, when needed, `apps.json`.
2. The agent registers the backend with `manage_backends`.
3. The agent lists app templates with `manage_apps`.
4. The agent instantiates an app into a dashboard with `manage_apps`.
5. The agent validates rendered widgets with `get_workspace_snapshot`, `manage_dashboard`, and `get_widget_data`.
6. The agent edits the backend or widget parameters and tests again.

This is useful for development workflows where the agent owns both the backend code and the Workspace dashboard used to validate it.

## Trust and security model

Treat any MCP client connected to the Workspace MCP as trusted. The tool server can read Workspace state and mutate dashboards in the connected browser session.

Keep the sidecar local:

- Bind to `127.0.0.1`, which is the default.
- Do not expose it on `0.0.0.0`, a LAN address, a tunnel, or a public reverse proxy.
- Use local HTTP for `localhost` or `127.0.0.1`; HTTPS is not required for the local sidecar.
- Connect only MCP clients you trust to read and change your Workspace.

The Workspace MCP operates inside an existing authenticated browser session. It does not log in for you, manage authentication tokens, change billing, change organization settings, invite users, or share dashboards.

## Requirements

- An OpenBB Workspace browser tab.
- The Workspace MCP sidecar running locally.
- An MCP client that can connect to a streamable HTTP MCP server.
- Python 3.13 when installing or running the sidecar directly.
- `uv` for the recommended install path. The helper script installs `uv` if it is not already available.

See [Workspace MCP Quickstart](/agents/workspace-mcp-quickstart) for setup steps and [Workspace MCP Tools](/agents/workspace-mcp-tools) for the tool reference.
