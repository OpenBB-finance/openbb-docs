---
title: Configure Workspace Lite
sidebar_position: 3
description: Configure OpenBB Workspace Lite with container environment variables.
keywords:
  - OpenBB Workspace Lite configuration
  - Workspace Lite environment variables
  - Workspace Lite Marketplace
  - Workspace Lite MCP
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="Configure Workspace Lite | OpenBB Workspace Docs" />

# Configure Workspace Lite

OpenBB Workspace Lite configuration is passed to the container with environment variables. Apply configuration changes by recreating the container with the same `/data` mount and the updated variables.

## Public URL

When Workspace Lite runs behind a reverse proxy or DNS name, set the public URLs used by Workspace:

```bash
docker run -d \
  -p 3000:3000 \
  -v openbb-data:/data \
  -e FRONTENDURL=https://workspace.example.com \
  -e PROURL=https://workspace.example.com \
  -e SELFURL=https://workspace.example.com/api \
  --name openbb \
  lite.openbb.co/openbb-lite:<version>
```

Use HTTPS for shared deployments.

## Host Port

If port `3000` is already in use on the host, map a different host port to the container port:

```bash
docker run -d \
  -p 8080:3000 \
  -v openbb-data:/data \
  --name openbb \
  lite.openbb.co/openbb-lite:<version>
```

Open Workspace Lite at `http://localhost:8080`.

## Initial Admin Account

The first start generates an admin account and prints the credentials to the container logs. Set the initial admin email and password yourself by passing these variables on the first run:

```bash
docker run -d \
  -p 3000:3000 \
  -v openbb-data:/data \
  -e OPENBB_ADMIN_EMAIL=admin@example.com \
  -e OPENBB_ADMIN_PASSWORD='replace-with-a-strong-password' \
  --name openbb \
  lite.openbb.co/openbb-lite:<version>
```

Set these values before the first start of a new `/data` volume.

## Apps Marketplace

The Apps Marketplace tab is available in Workspace Lite. Marketplace browsing requires outbound access to OpenBB's marketplace service.

Hide the Marketplace tab by starting the container with `UI_SHOW_MARKETPLACE=false`:

```bash
docker run -d \
  -p 3000:3000 \
  -v openbb-data:/data \
  -e UI_SHOW_MARKETPLACE=false \
  --name openbb \
  lite.openbb.co/openbb-lite:<version>
```

## Workspace MCP

Workspace Lite comes with the MCP companion enabled. See the [Workspace MCP overview](/agents/workspace-mcp-overview) for the user-facing MCP workflow.

Hide the MCP companion by starting the container with `UI_SHOW_COMPANION_MCP_MODE=false`:

```bash
docker run -d \
  -p 3000:3000 \
  -v openbb-data:/data \
  -e UI_SHOW_COMPANION_MCP_MODE=false \
  --name openbb \
  lite.openbb.co/openbb-lite:<version>
```

Disable the default MCP server for new users with `MCP_DEFAULT_SERVER_ENABLED=false`:

```bash
docker run -d \
  -p 3000:3000 \
  -v openbb-data:/data \
  -e MCP_DEFAULT_SERVER_ENABLED=false \
  --name openbb \
  lite.openbb.co/openbb-lite:<version>
```

If Workspace Lite runs behind a reverse proxy, allow long-lived HTTP responses and WebSocket upgrades for `/api/pro/workspace-mcp`.

## Other Controls

| Variable | Default | Purpose |
| --- | --- | --- |
| `PORT` | `3000` | Container listen port |
| `BACKEND_URL` | `/api` | Frontend API base URL |
| `FRONTENDURL` | `http://localhost:3000` | Public Workspace URL |
| `SELFURL` | `http://localhost:3000/api` | Public API URL |
| `PROURL` | `http://localhost:3000` | Workspace public URL |
| `AI_COPILOT_ENABLED` | `true` | Show Copilot UI |
| `AI_COPILOT_AI_ENHANCEMENTS` | `true` | Enable AI enhancement UI |
| `DATA_ALLOW_HTML_JS_EXECUTION` | `true` | Allow HTML widgets to execute JavaScript |
