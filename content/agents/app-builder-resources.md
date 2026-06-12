---
title: App Builder Resources
sidebar_position: 4
description: Use Workspace MCP app-builder resources, or install the generated OpenBB app-builder skill, to build custom OpenBB Workspace applications with an AI agent.
keywords:
  - Workspace MCP Resources
  - App Builder
  - OpenBB App Builder
  - Custom Applications
  - Widget Configuration
  - FastAPI Backend
  - Dashboard Design
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="App Builder Resources | OpenBB Workspace Docs" />

The OpenBB app-builder instructions are maintained in the
[Workspace MCP repository](https://github.com/OpenBB-finance/workspace-mcp).
They help agents build custom OpenBB Workspace applications, including backend
endpoints, `widgets.json`, `apps.json`, dashboard layouts, thumbnails, widget
parameters, validation, and semantic output checks.

## Source of truth

When your agent is connected to Workspace MCP, ask it to read the live MCP
resource index:

```text
openbb://workspace/app-builder/index
```

The index routes the agent to the right app-builder spec, guide, example, or
validation resource for the task.

## Installable skill package

For agents that support installable skills, but are not using Workspace MCP
resources directly, install the generated `openbb-app-builder` skill from the
Workspace MCP repository:

```bash
npx skills add https://github.com/OpenBB-finance/workspace-mcp --skill openbb-app-builder
```

This skill package is generated from the same Workspace MCP resource catalog.
It is a compatibility artifact, not a separate source of truth.

## Main resource entry points

| Task | Resource |
|------|----------|
| Start any app-building task | `openbb://workspace/app-builder/index` |
| Build a new app backend | `openbb://workspace/guides/build-an-app` |
| Review an existing app | `openbb://workspace/guides/review-app` |
| Debug a broken app | `openbb://workspace/guides/debug-app` |
| Convert an endpoint to a widget | `openbb://workspace/guides/convert-endpoint-to-widget` |
| Edit `widgets.json` | `openbb://workspace/specs/widgets-json` |
| Edit `apps.json` | `openbb://workspace/specs/apps-json` |
| Fix validation errors | `openbb://workspace/validation/common-errors` |

## Repository locations

- Canonical resources:
  [workspace_mcp/app_builder/resources](https://github.com/OpenBB-finance/workspace-mcp/tree/main/workspace_mcp/app_builder/resources)
- Generated installable skill:
  [.claude/skills/openbb-app-builder](https://github.com/OpenBB-finance/workspace-mcp/tree/main/.claude/skills/openbb-app-builder)

Do not install the old app-builder skill from backend example repositories.
Use the generated skill from `workspace-mcp` when a skill install is needed.
