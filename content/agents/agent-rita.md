---
title: Agent Rita
sidebar_position: 5
description: Run Agent Rita, OpenBB's open source reference agent for Workspace.
keywords:
- Agent Rita
- OpenBB Workspace
- open source agent
- custom agents
- Workspace agents
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="Agent Rita | OpenBB Docs" />

Agent Rita is OpenBB's open source reference agent for Workspace. It is a working example of a financial agent that connects to Workspace through the custom agent contract, reads dashboard context, fetches widget data, runs SQL over loaded data, and streams responses back to the chat interface.

Use Agent Rita when you want to inspect or fork a complete Workspace agent. It is different from Workspace MCP: Workspace MCP lets an external agent control a live Workspace browser session, while Agent Rita is the agent that Workspace sends chat requests to.

## What it demonstrates

Agent Rita implements the core endpoints Workspace expects from a custom agent:

- `GET /agents.json` advertises the agent, supported models, and Workspace features.
- `POST /v1/query` receives messages, dashboard context, widgets, and any Workspace-configured MCP tools, then streams Server-Sent Events (SSE) back to Workspace.

It also includes auxiliary generation endpoints used by Workspace UI flows, including `POST /v1/generate/dashboard/title` for dashboard names and `POST /v1/generate/chat/title` for chat titles. The same route group includes helper endpoints for prompt enhancement, widget metadata, and SQL or Python code generation.

The agent focuses on Workspace-specific behavior: widget discovery, widget data round-trips, SQL over loaded tables, citations, generated artifacts, and native Workspace actions. The Agent Rita repository also includes an optional companion MCP server in `mcp-server/` for web search, web-page fetch, Python execution, Mermaid rendering, and document RAG. When that server is connected in Workspace, its tools are sent to Agent Rita through the request payload.

## Source code

The source code is available in the [Agent Rita repository](https://github.com/OpenBB-finance/agent-rita).

For setup steps, model provider configuration, and customization entry points, see [Open Source Agent](/workspace/developers/open-source-agent) in the developer documentation.
