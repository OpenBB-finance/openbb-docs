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

### System

- Windows 11 or macOS (10.15+)
- 2+ GB of usable storage space
- 8 GB of RAM
- Internet connection

### Permissions

This application is scoped to the operating system user account, and the OS may ask you to grant permissions. The general needs of this application are:

- Access the internet, download files, and install packages from repositories.
  - Packages can be installed from `conda` or `pip`.
- Manage files in the user and temp directories.
- Run background tasks and shell scripts.
- Configure the operating system for the `Start at Login` feature. 

## Installation

Download the appropriate file for your machine from the link [here](https://github.com/OpenBB-finance/OpenBB/releases/ODP)

### macOS

Open the DMG file and then drag-and-drop the app into the Applications folder.

### Windows

Execute the installer file, and then start the application.


## First Run

When first run, you will be asked to select an installation location.
This is where Miniforge, environments, and other application data will be stored.

The user data directory is where the OpenBB Python packages should store data, such as data/HTTP cache. It is recommeneded to use separate locations for each.

<img width="898" height="852" alt="install-step-1" src="https://github.com/user-attachments/assets/e0785ef1-3702-4f16-a9e7-5acd4a4368c9" />

Click, Begin Installation, when you're ready.

<img width="852" height="577" alt="install-miniforge" src="https://github.com/user-attachments/assets/6529f996-42d9-4560-a62a-0b541d233a53" />

### OpenBB Environment

After Miniforge is installed, you will be directed to pick a version of Python for the initial environment.

<img width="852" height="613" alt="install-step-2" src="https://github.com/user-attachments/assets/10ffb597-98d5-446f-bc8e-677b68287f43" />

Upon clicking the, Next Step, button, an `openbb` environment will be created with the core packages.

<img width="852" height="579" alt="install-initial-env" src="https://github.com/user-attachments/assets/26d193e0-7a6d-459c-9364-6086bec8cc1c" />

When complete, you can customize the environment by adding OpenBB Python modules or arbitrary libraries from PyPI.

<img width="852" height="787" alt="install-step-3" src="https://github.com/user-attachments/assets/9a39bf11-a41e-4067-b92b-a34ac9d36381" />

Finally, click the button to go to the [Environments](/odp/environments) page.

<img width="852" height="627" alt="install-complete" src="https://github.com/user-attachments/assets/8f115fe5-6128-4f38-8b79-17c892b8857b" />
