---
title: Workspace Lite
sidebar_position: 1
description: Run OpenBB Workspace Lite as a self-hosted workspace for small investment teams.
keywords:
  - OpenBB Workspace Lite
  - Workspace Lite
  - self-hosted workspace
  - Docker
  - small investment teams
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="Workspace Lite | OpenBB Workspace Docs" />

# Workspace Lite

OpenBB Workspace Lite is the self-hosted Workspace package for small investment teams that already have data sources and need a shared workspace they control.

For pricing and access, see [OpenBB pricing](https://openbb.co/pricing).

## Who It Is For

Workspace Lite is designed for smaller self-hosted deployments among teams of roughly 1-20 people.

It fits teams that:

- Have at least one data source to connect, such as a database, data feed, or internal API.
- Need to share dashboards, apps, and agent-compatible analysis across a small team.
- Want to run Workspace inside their own environment for compliance reasons.
- Can operate a Docker container but do not want to run a Kubernetes-based enterprise deployment.

The strongest trigger is usually one of these:

- "I have been using the community tier and need to make this official for my whole team."
- "I want to run this internally for compliance reasons."

## Who It Is Not For

Workspace Lite is not the right starting point for teams with no data infrastructure at all. A team working only from local spreadsheets has an earlier data organization problem to solve first.

Workspace Lite is also not intended for firms that need SSO, multi-entity deployment, or custom infrastructure support. Those requirements belong in a larger Workspace deployment.

## Feature Set

Workspace Lite uses email and password for authentication.

Admins add users from the Workspace admin UI. A temporary password is displayed to the admin in the UI at creation time. The user will be prompted to change it after signing in.

The Apps Marketplace tab is available in Workspace Lite. Marketplace browsing requires outbound access to OpenBB's marketplace service. Learn how to hide the tab in the [Lite configuration section](/workspace/getting-started/lite/configuration#apps-marketplace).

Workspace Lite comes with the MCP companion enabled. Read about the MCP companion in the [Workspace MCP overview](/agents/workspace-mcp-overview). Learn how to disable this functionality in the [Lite configuration section](/workspace/getting-started/lite/configuration#workspace-mcp).

## Next Steps

Install Workspace Lite:

[Install Workspace Lite](/workspace/getting-started/lite/installation)

Configure Workspace Lite:

[Configure Workspace Lite](/workspace/getting-started/lite/configuration)

Operate, back up, and update Workspace Lite:

[Operate Workspace Lite](/workspace/getting-started/lite/operations)
