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

## ODP Desktop App

The Open Data Platform (ODP), by OpenBB, is an open-source desktop application, for macOS and Windows operating systems, that is a light-weight GUI tool for creating, managing, and using virtual environments and application backend servers.

![backends-screen](https://github.com/user-attachments/assets/d9a885bb-7776-4926-b043-f9b5d49987d9)

It's the preferred method for installing ODP [Python Packages](/platform/extensions), along with your favourite developer tools and resources. Under the hood, it uses Miniforge to manage environments and solve for dependencies.

This application is for you if:

- you have never installed Python, or don't even know what it is;
- you are getting started with Python for quant finance;
- you are an OpenBB [Workspace](/workspace) user;
- you are using, or building with, ODP [Python Packages](/platform);
- you are building for OpenBB [Workspace](/workspace/analysts/apps);
- you are developing Python packages, APIs, or MCP servers;
- you need a better way to manage and monitor development servers;
- you need to run `localhost` over HTTPS.

Skip to the [installation](/odp/installation), or read on for an overview of the ODP Desktop application and its features - well-suited for building language-agnostic OpenBB Workspace [Applications](/workspace/analysts/apps) and agentic workflows.

## Quick Start

When the [installation](/odp/installation) completes, you are now ready to start a backend server and add it to the OpenBB [Workspace](/workspace/developers/data-integration).

:::important
When the application is started (except first launch), no window is created. Access it from the tray icon menu, or doubleclick on the shortcut again.
:::

1. Go to the [API Keys](/odp/api-keys) page, add or import your provider credentials, if needed.
2. Navigate to the [Backends](/odp/backends) page by clicking on it in the header, or selecting from the tray icon's menu.
3. Press the, `Start`, button for the `OpenBB API` backend.
    - By default, this will run: `openbb-api --host 127.0.0.1 --port 6900`

![backends-running](https://github.com/user-attachments/assets/2ec97b99-a19f-43ed-b735-f5757e51b4c4)

4. Open Workspace in your browser and connect to http://127.0.0.1:6900.  You now have a fully local data stack.

![Add To Workspace](https://openbb-cms.directus.app/assets/563aca68-1ec3-48c7-86d8-9129e0e5fd8c.png)

:::note
Number of widgets and applications will depend on packages and versions installed in the environment.
:::

## Overview
The application operates as a system tray icon, and its main window has three, navigatable, screens:

<ul className="grid grid-cols-1 gap-2 -ml-6">
  <NewReferenceCard
    title="Backends"
    description="Define and control background servers such as `openbb-api` or any custom script."
    url="odp/backends"
  />
  <NewReferenceCard
    title="Environments"
    description="Create and manage isolated Conda Python environments."
    url="odp/environments"
  />
  <NewReferenceCard
    title="API Keys"
    description="Manage API Keys for use with the OpenBB Python packages and API."
    url="odp/api-keys"
  />
</ul>

## Features

- Plug & Play OpenBB Workspace applications and widgets, press start and add to Workspace.
- Zero telemetry.
- Streaming console output of running backends and Jupyter servers.
- Isolated installation of Miniforge, with a GUI for managing and configuring environments.
  - Build environments from `pyproject.toml`, `requirements.txt`, or Conda YML environment files. 
- Quick start buttons for opening terminals and starting Python or Jupyter sessions from each environment.
- API key management for use with the OpenBB Platform API and Python Interface.
- Interface for backend server configuration, operation, and management.
  - Buttons to start, stop, and monitor each backend.
  - Add environment variables or `.env` file, and set the working directory.
- Initial environment (`openbb`) with:
  - OpenBB Core Python packages + any additional packages selected during installation.
  - Jupyter Lab & Notebook
    - Opens in a dedicated window.
    - Python langugage server.
  - Isolated `npm` executable.
- Start the ODP application at operating system login, along with any backend server.
- Generate X.509 certificates and PCKS#12 bundles.
- Clean uninstall.

---
## Next Steps

* Get started with [OpenBB Workspace](/workspace) and create your own data experiences.
* Create your own custom [Environments](/odp/environments), or modify the existing.
* Define custom [Backends](/odp/backends) to run independently, in any environment.
* Read the OpenBB Platform [documentation](/platform/usage/quickstart_workspace) for more usage patterns.
