---
title: Open Source Agent
sidebar_position: 8
description: Run and customize Agent Rita, OpenBB's open source reference agent for Workspace.
keywords:
- Agent Rita
- open source agent
- custom agents
- OpenBB Workspace
- MCP
- agents.json
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="Open Source Agent | OpenBB Workspace Docs" />

Agent Rita is OpenBB's open source reference agent for Workspace. It shows how to build a financial agent that can read dashboard context, fetch widget data, run SQL over loaded data, and stream answers back through the Workspace chat interface.

Use it when you want a working agent to run, inspect, and fork instead of starting from the lower-level agent contract. The source code is available in the [Agent Rita repository](https://github.com/OpenBB-finance/agent-rita).

## How it fits with Workspace

Agent Rita runs as an HTTP service that implements the Workspace agent contract:

- `GET /agents.json` returns the agent metadata, available models, and supported Workspace features.
- `POST /v1/query` receives chat messages, dashboard context, widgets, and available MCP tools, then streams Server-Sent Events (SSE) back to Workspace.

If MCP servers are configured in Workspace, Agent Rita can use their tools. Workspace owns those MCP connections, sends the available tool descriptors in each request, executes selected tools, and forwards results back to the agent through the normal `/v1/query` flow.

This keeps the agent focused on Workspace-specific state: widget discovery, widget data round-trips, SQL over loaded data, citations, generated artifacts, and native Workspace actions.

## Run locally

Prerequisites:

- [Bun](https://bun.sh/) installed locally.
- OpenBB Workspace available in your browser.
- At least one model provider configured. Agent Rita supports OpenAI, OpenRouter, Groq, and Ollama.

Clone the repository and install dependencies:

```bash
git clone https://github.com/OpenBB-finance/agent-rita.git
cd agent-rita
bun install
```

Set a model provider. For example, with OpenAI:

```bash
export OPENAI_API_KEY=sk-...
export DEFAULT_MODEL=openai:gpt-4o
```

For OpenRouter:

```bash
export OPENROUTER_API_KEY=sk-or-...
export DEFAULT_MODEL=openrouter:openai/gpt-oss-20b
```

For a local Ollama model:

```bash
ollama pull gpt-oss:20b
export DEFAULT_MODEL=ollama:gpt-oss:20b
```

Start the agent:

```bash
bun run dev
```

By default, the agent listens on:

```text
http://localhost:7777
```

## Connect it to Workspace

Add Agent Rita as a custom agent from the Workspace chat agent selector:

1. Open Workspace.
2. Open the chat agent menu.
3. Add a custom agent with this base URL:

```text
http://localhost:7777
```

Workspace fetches `http://localhost:7777/agents.json` and uses the advertised `/v1/query` endpoint for chat requests. If you have MCP servers configured in Workspace, their tools are included in requests to Agent Rita and can be used by the agent when relevant.

If Workspace runs in Docker, on another machine, or behind a remote URL, replace `localhost` with a host that the browser can reach.

## Configuration

Common environment variables:

| Variable | Used by | Description |
| --- | --- | --- |
| `OPENAI_API_KEY` | Agent | Enables OpenAI chat models. |
| `OPENROUTER_API_KEY` | Agent | Enables OpenRouter models. |
| `GROQ_API_KEY` | Agent | Enables Groq models. |
| `OLLAMA_BASE_URL` | Agent | Sets the Ollama API URL. Defaults to `http://localhost:11434/api`. |
| `DEFAULT_MODEL` | Agent | Selects the default model shown in `agents.json`. |
| `PORT` | Agent | Sets the agent port. Defaults to `7777`. |

## What to customize

For Workspace-specific behavior, start with the agent service:

- `src/routes/agents.ts` controls the `agents.json` response.
- `src/routes/query.ts` receives Workspace requests and chooses the model.
- `src/agent/` contains the main agent loop, prompt builder, context handling, round-trip handling, and tool registration.
- `src/agent/tools/` contains local tools for widget search, widget data, skills, SQL, generated artifacts, and native Workspace bridge actions.

If you are building a smaller custom agent from scratch, see [Agents Integration](/workspace/developers/agents-integration), [OpenBB AI SDK](/workspace/developers/openbb-ai-sdk), and the [`agents.json` reference](/workspace/developers/json-specs/agents-json-reference).
