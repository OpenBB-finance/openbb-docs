---
title: Introduction
sidebar_position: 0
description: An overview of the Open Data Platform desktop application for creating and managing local environments and backend servers.
keywords:
  - OpenBB Platform
  - GUI
  - Local Development
  - Backends
  - Environments
  - API Keys
  - Desktop Application
---

{/* markdownlint-disable MD012 MD031 MD033 MD037 */}

import HeadTitle from "@site/src/components/General/HeadTitle.tsx";
import NewReferenceCard from "@site/src/components/General/NewReferenceCard";

<HeadTitle title="Introduction | ODP Desktop App Docs" />

Open Data Platform by OpenBB (ODP) is the open-source toolset that helps data engineers to integrate proprietary, licensed,
and public data sources into downstream applications like AI copilots and research dashboards.
ODP operates as the "connect once, consume everywhere" infrastructure layer that consolidates and exposes data to multiple surfaces at once:

- Python environment for quants
- OpenBB Workspace and Excel for analysts
- MCP servers for AI agents
- REST APIs for other applications

## ODP Desktop

ODP Desktop is a light-weight application (macOS & Windows) for installing and using the open-source tools, along with your favourite developer tools and resources. Its features are well-suited for building language-agnostic OpenBB Workspace [Applications](/workspace/analysts/apps) and agentic workflows.

<details>
<summary mdxType="summary">Application Screenshot</summary>

![backends-screen](https://github.com/user-attachments/assets/d9a885bb-7776-4926-b043-f9b5d49987d9)

</details>

## Quick Start

Download and install the latest release from: https://github.com/OpenBB-finance/OpenBB/releases/tag/ODP

<details>
<summary mdxType="summary">Installation Summary - See the [installation](/desktop/installation) page for more details.</summary>

The initial environment (`openbb`) is setup when you first run the application, and comes with:
- OpenBB Core Python packages
  - `openbb-api` and `openbb-mcp` executables
- Optional packages selected during installation
- Jupyter Lab & Notebook in a dedicated window
  - Python langugage server
- Isolated `npm` executable

</details>

:::important
When the application is started (except first launch), no window is created. Access it from the tray icon menu, or doubleclick on the shortcut again.
:::

### **Step 1**

Go to the [API Keys](/desktop/api-keys) page, add or import your provider credentials, if needed.

### **Step 2**

Navigate to the [Backends](/desktop/backends) page by clicking on it in the header, or selecting from the tray icon's menu.

### **Step 3**

Press the, `Start`, button for the `OpenBB API` backend.

:::info
By default, this will run: `openbb-api --host 127.0.0.1 --port 6900`
:::


<details>
<summary mdxType="summary">Application Screenshot</summary>

![backends-running](https://github.com/user-attachments/assets/2ec97b99-a19f-43ed-b735-f5757e51b4c4)

</details>

4. Open Workspace in your browser and connect to http://127.0.0.1:6900.  You now have a fully local data stack.

<details>
<summary mdxType="summary">Workspace Screenshot</summary>

![Add To Workspace](https://openbb-cms.directus.app/assets/563aca68-1ec3-48c7-86d8-9129e0e5fd8c.png)

:::note
Number of widgets and applications will depend on packages and versions installed in the environment.
:::

</details>

## Overview

The application operates as a system tray icon, and its main window has three, navigatable, screens:

<ul className="grid grid-cols-1 gap-2 -ml-6">
  <NewReferenceCard
    title="Backends"
    description="Define and control background servers such as `openbb-api` or any custom script."
    url="desktop/backends"
  />
  <NewReferenceCard
    title="Environments"
    description="Create and manage isolated Conda Python environments."
    url="desktop/environments"
  />
  <NewReferenceCard
    title="API Keys"
    description="Manage API Keys for use with the OpenBB Python packages and API."
    url="desktop/api-keys"
  />
</ul>

---
## Next Steps

* Use the OpenBB Python Package as a Workspace [backend](/python/quickstart/workspace).
* Create your own custom [Environments](/desktop/environments), or modify the existing.
* Define custom [Backends](/desktop/backends) to run independently, in any environment.
