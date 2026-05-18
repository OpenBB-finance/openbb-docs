---
title: Workspace MCP Quickstart
sidebar_position: 2
description: Run the OpenBB Workspace MCP sidecar, connect Workspace, and attach an external MCP client.
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

This guide starts the Workspace MCP sidecar on your machine, connects it to an OpenBB Workspace browser tab, and configures an MCP client to call Workspace tools.

## Prerequisites

Before you start:

- OpenBB Workspace is available in your browser.
- Your MCP client supports HTTP MCP servers.
- Your machine can run Python 3.13.
- You can install or run tools with `uv`.

The helper script installs `uv` when it is missing. If you manage Python environments manually, install `uv` first and use the direct command shown below.

## 1. Start the sidecar

Run the sidecar:

```bash
curl -LsSf https://raw.githubusercontent.com/OpenBB-finance/workspace-mcp/main/scripts/run.sh | sh
```

<div style={{display: 'flex', justifyContent: 'center'}}>
  <img
    className="pro-border-gradient"
    alt="Terminal showing the Workspace MCP sidecar running correctly"
    src="https://openbb-cms.directus.app/assets/2ed50bec-4bf9-4aed-99ef-9a1b7348901d.png"
    width="1000"
  />
</div>

The default server listens on:

```text
http://127.0.0.1:8787
```

The MCP endpoint is:

```text
http://127.0.0.1:8787/mcp
```

The script installs `uv` if needed, then runs `workspace-mcp` from the OpenBB Workspace MCP source archive.

<details>
<summary mdxType="summary">Use this if port 8787 is busy or you need a different host</summary>

Pass CLI options after `--`:

```bash
curl -LsSf https://raw.githubusercontent.com/OpenBB-finance/workspace-mcp/main/scripts/run.sh | sh -s -- --host 127.0.0.1 --port 8787
```

</details>

<details>
<summary mdxType="summary">Use this if you need a fork, branch, persistent install, or local checkout</summary>

To run a fork, branch, or local archive URL, set `WORKSPACE_MCP_SOURCE`:

```bash
export WORKSPACE_MCP_SOURCE="https://github.com/OpenBB-finance/workspace-mcp/archive/refs/heads/main.zip"
curl -LsSf https://raw.githubusercontent.com/OpenBB-finance/workspace-mcp/main/scripts/run.sh | sh
```

If `uv` is already installed, you can run the package directly:

```bash
uv tool run \
  --python 3.13 \
  --from https://github.com/OpenBB-finance/workspace-mcp/archive/refs/heads/main.zip \
  workspace-mcp \
  --host 127.0.0.1 \
  --port 8787
```

For a persistent local install:

```bash
uv tool install --python 3.13 https://github.com/OpenBB-finance/workspace-mcp/archive/refs/heads/main.zip
workspace-mcp --host 127.0.0.1 --port 8787
```

If you are developing from a local checkout:

```bash
cd ~/Documents/git/workspace-mcp
python -m workspace_mcp --host 127.0.0.1 --port 8787 --reload
```

</details>

## 2. Check sidecar health

In another terminal, call the health endpoint:

```bash
curl http://127.0.0.1:8787/health
```

Before Workspace connects, the response should show that the sidecar is running and no browser is attached:

```json
{
  "ok": true,
  "browser_connected": false,
  "pending_commands": 0,
  "session": null
}
```

After Workspace connects, `browser_connected` should be `true` and `session` should include the current browser session metadata.


## 3. Connect Workspace to the sidecar

Open OpenBB Workspace in your browser and connect the local companion:

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

4. Set the companion base URL to `http://127.0.0.1:8787`.
5. Click the connect action after the sidecar is running.


<div style={{display: 'flex', justifyContent: 'center'}}>
  <img
    className="pro-border-gradient"
    alt="Workspace MCP Companion connected to the local sidecar"
    src="https://openbb-cms.directus.app/assets/0df1ae5d-d391-42b7-8c36-25b9be5d6dfc.png"
    width="800"
  />
</div>

If you are testing against a local Workspace frontend build and the companion entry is not visible, make sure the local build enables the companion mode flag.

By default, the sidecar allows CORS requests from `https://pro.openbb.co` and loopback origins such as `http://localhost:1420` and `http://127.0.0.1:1420`.

For a different Workspace origin, pass `--cors-allow`:

```bash
workspace-mcp --cors-allow https://example.openbb.dev
```

Repeat `--cors-allow` or pass a comma-separated list to allow more than one origin:

```bash
workspace-mcp \
  --cors-allow https://one.example.openbb.dev,https://two.example.openbb.dev \
  --cors-allow http://localhost:1420
```

## 4. Configure your MCP client

Point your MCP client at:

```text
http://127.0.0.1:8787/mcp
```

For clients that read a project `.mcp.json` file, use an HTTP server entry:

```json
{
  "mcpServers": {
    "workspace_mcp": {
      "type": "http",
      "url": "http://127.0.0.1:8787/mcp"
    }
  }
}
```

If your client has an `mcp add` command or settings UI, choose the HTTP transport and use the same `/mcp` URL.

For Codex:

```bash
codex mcp add workspace_mcp --url http://127.0.0.1:8787/mcp
```

For Claude Code:

```bash
claude mcp add --transport http workspace_mcp http://127.0.0.1:8787/mcp
```

## 5. Validate the connection

Ask the agent to call `get_workspace_snapshot`. A successful call should return the active Workspace state, including dashboard metadata and the current dashboard composition when available.

A practical validation prompt is:

```text
Call get_workspace_snapshot and tell me the active dashboard id and the visible tabs.
```

If the agent can list the dashboard and tabs, the MCP client, sidecar, and browser bridge are connected.

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

## Configuration reference

| Option | Default | Description |
|--------|---------|-------------|
| `--host` | `127.0.0.1` | Host interface for the sidecar HTTP server. Keep this on loopback for normal use. |
| `--port` | `8787` | Port for the sidecar HTTP server. |
| `--mcp-path` | `/mcp` | Path for the streamable HTTP MCP endpoint. |
| `--command-timeout-seconds` | `15.0` | Seconds to wait for one browser command result. |
| `--cors-allow` | production Workspace and loopback origins | Extra browser origins allowed to call the sidecar. |
| `--reload` | disabled | Restart the local development server when source files change. |

In reload mode, the CLI also maps options to `OPENBB_WORKSPACE_MCP_*` environment variables so Uvicorn can recreate the app.

## Troubleshooting

| Symptom | What to check |
|---------|---------------|
| `No Workspace browser is connected.` | Open Workspace, open Workspace MCP Companion, and connect it to the sidecar base URL. |
| `browser_connected` is `false` in `/health` | The sidecar is running, but the browser bridge has not connected or has disconnected. |
| Browser CORS error | Add the Workspace browser origin with `--cors-allow`. |
| Tool call times out | Keep the Workspace tab open and active enough to execute commands. Increase `--command-timeout-seconds` for slower operations. |
| Agent changes the wrong dashboard | Start with `get_workspace_snapshot`, use `current_dashboard_uuid`, and pass explicit `dashboard_id` values for writes. |
| Agent cannot create a widget | Use `list_available_widgets` and `get_widget_schema` first. `create_widget` requires exact `origin` and `widget_id` values. |
| Agent cannot create a note | Use `add_generative_widget` with `widget_type: "note"`. Do not use `create_widget` with `rich_note`. |
| MCP client cannot connect | Confirm the client supports HTTP MCP servers and uses `http://127.0.0.1:8787/mcp`, not the sidecar base URL. |

Keep the sidecar bound to `127.0.0.1` unless you have a controlled local development reason to do otherwise.
