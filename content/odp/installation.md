---
title: Installation
sidebar_position: 1
description:
  This page presents the general system requirements and installation instructions for the Open Data Platform (ODP) desktop application.
keywords:
  - ODP
  - OpenBB Platform
  - Python
  - Requirements
  - Installation
  - Virtual Environment
  - Windows
  - macOS
  - Jupyter
  - Conda
  - API
  - PyPI
  - MCP
  - Node.js
  - npm
---

import HeadTitle from "@site/src/components/General/HeadTitle.tsx";

<HeadTitle title="Installation | ODP Desktop App Docs" />

## Requirements

A modern laptop or desktop machine is recommended. It is not intended to be run in virtual machines or as a CI application.

### Operating System

- Windows 11 or macOS (10.15+)
- 2+ GB of usable storage space.
- 8 GB of RAM
- An internet connection.

### Permissions

This application is scoped to the operating system user account, and the OS may ask you to grant permissions. The general needs of this application are:

- Access the internet, download files, and install packages from repositories.
- Manage files in the user and temp directories.
- Run background tasks and shell scripts.
- Configure the operating system for the `Start at Login` feature. 

## Installation

Download the appropriate file for your machine.

### macOS

Open the DMG file and then drag-and-drop the app into the Applications folder.

### Windows

Execute the installer file, and then start the application.


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
