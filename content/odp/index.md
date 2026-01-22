---
title: Open Data Platform by OpenBB
sidebar_position: 0
description: Open Data Platform by OpenBB (ODP) is the open-source toolset that helps data engineers to integrate proprietary, licensed, and public data sources into downstream applications like AI copilots and research dashboards.
keywords:
  - OpenBB
  - Open Source
  - Data Platform
  - Python
  - CLI
  - Desktop
displayed_sidebar: tutorialSidebar
---

<!-- markdownlint-disable MD012 MD031 MD033 MD037 -->

import HeadTitle from "@site/src/components/General/HeadTitle.tsx";
import NewReferenceCard from "@site/src/components/General/NewReferenceCard";

<HeadTitle title="Open Data Platform by OpenBB | ODP Docs" />

Open Data Platform by OpenBB (ODP) is the open-source toolset that helps data engineers to integrate proprietary, licensed, and public data sources into downstream applications like AI copilots and research dashboards.

ODP operates as the "connect once, consume everywhere" infrastructure layer that consolidates and exposes data to multiple surfaces at once:

- Python environment for quants
- OpenBB Workspace and Excel for analysts
- MCP servers for AI agents
- REST APIs for other applications

It consists of three main components:

<ul className="grid grid-cols-1 gap-2 -ml-6">
  <NewReferenceCard
    title="ODP Desktop"
    description="A standalone desktop application providing a user-friendly interface for managing Python environments and application backend servers."
    url="/odp/desktop"
  />
  <NewReferenceCard
    title="ODP Python"
    description="PyPI-installable Python packages for building and using Python SDKs, REST APIs, and MCP servers."
    url="/odp/python"
  />
  <NewReferenceCard
    title="ODP CLI"
    description="A command-line interface wrapping the environnent's installed ODP Python packages.
."
    url="/odp/cli"
  />
</ul>

All three tools share the same underlying infrastructure, so you can choose whichever interface fits your workflow.
