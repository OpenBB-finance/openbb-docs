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

<HeadTitle title="Introduction | Open Data Platform Desktop App Docs" />

# ODP Desktop Application

The Open Data Platform (ODP) desktop application (macOS/Windows) is a light-weight tool for creating, managing, and using virtual environments and backend servers.

It's a convenient way to install and use the OpenBB Platform Python [packages](/platform/usage/extensions/data_extensions), along with your favourite developer tools and data sources. Under the hood, it uses Miniforge to manage environments and solve for dependencies.

The features are well-suited for building OpenBB Workspace [Applications](/workspace/apps) and agentic workflows.

<img width="852" height="540" alt="navigation" src="https://github.com/user-attachments/assets/3543de57-7122-47c4-8bab-49ee50d9c84b" />

## Overview
The application operates as a system tray icon, and its main window is divided into three main areas:

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
- Access console logs of running backends and Jupyter servers in a dedicated window.
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

## Installation

For macOS, open the DMG file and then drag-and-drop the app into the Applications folder. Windows users can execute the installer and then start the application.

### Application Permissions

This application is scoped to the operating system user account, and the OS may ask you to grant permissions. The general needs of this application are:

- Access the internet, download files, and install packages from repositories.
- Read from, and write files to, the user and temp directories.
- Run background tasks and shell scripts.
- Configure the operating system for the `Start at Login` feature. 

## First Run

When first run, you will be asked to select an installation location.
This is where Miniforge, environments, and other application data will be stored.

The user data directory is where the OpenBB Python packages should store data, such as data/HTTP cache. It is recommeneded to use separate locations for each.

Click, Begin Installation, when you're ready.
<img width="955" height="632" alt="miniforge" src="https://github.com/user-attachments/assets/c22332f3-3d95-4033-b503-fd905b14bd16" />

### OpenBB Environment

After Miniforge is installed, you will be directed to pick a version of Python for the initial environment.

Upon clicking the, Next Step, button, an `openbb` environment will be created with the core packages.
<img width="852" height="632" alt="install-step2" src="https://github.com/user-attachments/assets/14303a42-1f9e-46e5-a6e2-1418bff56d43" />

When complete, you can customize the environment by adding OpenBB Python modules or arbitrary libraries from PyPI. 
<img width="1013" height="1085" alt="install-step3" src="https://github.com/user-attachments/assets/d77badb3-47bd-464b-b384-722e29ccd0d8" />

Finally, clicking, Continue to Open Data Navigator, will take you to the [Environments](/odp/environments) page.
<img width="852" height="688" alt="installation-complete" src="https://github.com/user-attachments/assets/c414e09d-b85d-4016-851b-50e65c43830f" />

## Quick Start

With the steps above compelete, you are now ready to start a backend server and add it to the OpenBB [Workspace](/workspace/data-integration#5-add-to-openbb).

1. Go to the [API Keys](/odp/api-keys) page, add or import your provider credentials. 
2. Navigate to the [Backends](/odp/backends) page by clicking on it in the header, or selecting from the tray icon's menu.
3. Press the, `Start`, button for the `OpenBB API` backend.
    - By default, this will run: `openbb-api --host 127.0.0.1 --port 6900`

<img width="852" height="613" alt="backend-running" src="https://github.com/user-attachments/assets/4f257265-197b-4d09-9a6f-e54eba79c05f" />

4. Open Workspace in your browser and connect to http://127.0.0.1:6900.  You now have a fully local data stack.

![Add To Workspace](https://openbb-cms.directus.app/assets/563aca68-1ec3-48c7-86d8-9129e0e5fd8c.png)

:::note
Number of widgets and applications will depend on packages and versions installed in the environment.
:::

---
## Next steps

* Get started with [OpenBB Workspace](/workspace) and create your own data experiences.
* Create your own custom [Environments](/odp/environments), or modify the existing.
* Define custom [Backends](/odp/backends) to run independently, in any environment.
* Read the OpenBB Platform [documentation](/platform/usage/quickstart_workspace) for more usage patterns.
