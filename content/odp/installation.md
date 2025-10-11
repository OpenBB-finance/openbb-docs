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

Download the appropriate file for your machine.

### macOS

Open the DMG file and then drag-and-drop the app into the Applications folder.

### Windows

Execute the installer file, and then start the application.


## First Run

When first run, you will be asked to select an installation location.
This is where Miniforge, environments, and other application data will be stored.

The user data directory is where the OpenBB Python packages should store data, such as data/HTTP cache. It is recommeneded to use separate locations for each.

<img width="889" height="802" alt="install-step-1" src="https://github.com/user-attachments/assets/5f648dcd-00de-4ac8-a650-115efcc05346" />

Click, Begin Installation, when you're ready.

<img width="854" height="564" alt="install-miniforge" src="https://github.com/user-attachments/assets/d801051a-275d-4b62-b9bd-503445df5f2c" />

### OpenBB Environment

After Miniforge is installed, you will be directed to pick a version of Python for the initial environment.

<img width="1704" height="1326" alt="install-step-2" src="https://github.com/user-attachments/assets/9e17c18b-59ed-48a7-960b-799042958f55" />

Upon clicking the, Next Step, button, an `openbb` environment will be created with the core packages.

<img width="1704" height="1182" alt="install-initial-env" src="https://github.com/user-attachments/assets/043b6617-cf85-4df2-81ff-004cdea13542" />

When complete, you can customize the environment by adding OpenBB Python modules or arbitrary libraries from PyPI.

<img width="2306" height="1966" alt="install-step-3" src="https://github.com/user-attachments/assets/3a439d09-9ff1-4f08-a29d-62278bef6ada" />

Finally, click the button to go to the [Environments](/odp/environments) page.

<img width="2446" height="1988" alt="install-complete" src="https://github.com/user-attachments/assets/8a1b1612-1c0e-4105-aae1-4753066e68b1" />
