---
title: Environments
sidebar_position: 2
description: Create and manage isolated Conda environments for your Python projects. Install packages, manage dependencies, and launch development tools like JupyterLab, all from the OpenBB GUI.
keywords:
  - Environments
  - Conda
  - Python
  - Package Management
  - Jupyter
  - Isolated Development
  - Virtual Environments
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="Environments | ODP Desktop App Docs" />

# Environments

The Environments screen is for creating and managing **isolated Conda environments**. Each environment (package extensions and binaries) lives inside the OpenBB installation folder, contains its own Python interpreter, and can be modified or deleted at any time.

Environments protect the system, and other external projects, by not using shared components. They make it easy to jump between projects, programming languages, and package versions without fear of contamination.

<img width="852" height="540" alt="environments-screen-initial" src="https://github.com/user-attachments/assets/863235c4-b307-4e68-a218-446b3c53e30e" />

## Features

- Create, customize, and manage Conda environments directly on-screen, no command line required.
  - Build environments from `pyproject.toml`, `requirements.txt`, or Conda environment `.yaml` files.
- Safely update whole environments or individual packages.
- Searchable environment package lists, with installed version.
- Action buttons for opening system terminals and starting Python, iPython, Jupyter, or ODP CLI sessions.
  - Define a current working directory.
  - Monitor console output of an environment's Jupyter server.
  - Opens Jupyter Lab in a dedicated window.

Every environment created from the screen will include a version of Python and `pip`, along with any Conda or PyPI installable package added by the user.

The initial, `openbb`, environment will have a few extras that are included.

## Initial Environment

During the setup process, an environment is created, `openbb`, with the selected version of Python and extension choices.

The extra tools included in this environment are:
- iPython
- Juptyer Lab and Notebook
  - ipywidget
  - anywidget
  - Python language server
- NodeJS

## Environment Panel

Each environment will have its own panel with dedicated action buttons for updating, removing, managing packages, and starting system shells.

:::info
Environments are updated with Conda's `libmamba` solver, where the packages to solve for were explicitly added to the environment or defined in the originally imported environment file. Conda itself will be updated before the environment is solved.

Updating an individual package from the `Extensions` modal will not engage the environment solver and may have unintended outcomes, such as incompatibility.
:::

All environments use the same Current Working Directory (CWD), which by default is, the installation folder selected during the initial setup.

### Applications

This button will open a modal listing the available applications for that environment.
At miniumum, there will be one for opening a system shell with the environment active, and another for opening a system shell with a Python session started.

The screenshot below displays all of the currently supported applications, and each will start in the current working directory.

<img width="852" height="688" alt="Screenshot 2025-10-22 at 2 02 40 PM" src="https://github.com/user-attachments/assets/e40c2387-b669-43ea-ad4c-8c46a168d8ee" />

## Creating New Environments

There are two ways to create a new environment from the screen:

### **New Environment**
- Press the button and follow the steps to define and create the environment.
  - The basic OpenBB tooling will be installed in this environment, which includes:
    - openbb-core
      - Pydantic, FastAPI, Uvicorn, Pandas, Numpy, Requests, AIOHTTP, Ruff, PyJWT, UUID7, Python-Dotenv.
    - openbb-platform-api

### **From Environment File**
- Press **Import Environment**
  - Select a supported environment file:
    - `requirements.txt`
    - `pyproject.toml`
      - If this is a local Python package, it will be installed in "develop" mode instead of `site-packages`.
    - A Conda `YAML` environment definition.

:::note
When you import an environment from a file, it will be read and converted to a Conda YAML environment file. Changes to the original file will not be reflected in your environment.

Find the Conda YAML environment files for each installed environment in: `~/.openbb_platform/environments/`
:::

When complete, press `Done` to return to the Environments screen.

<img width="880" height="616" alt="environments-create-done" src="https://github.com/user-attachments/assets/8d05694a-a253-4bab-8bed-0fa714415dd5" />

## Adding/Modifying Packages

Press the `Extensions` button to open the modal for the desired environment and then click, `Add Extensions`.

Define the package without a version to use the latest available. The modal supports installation of packages from Conda channels, and from PyPI.

<img width="870" height="568" alt="environments-add-extensions" src="https://github.com/user-attachments/assets/10d713fd-44e8-4303-86b7-a143ed0e0708" />

### Version Pinning

If an extension was already added to the environment, it can be pinned by using standard version markers - i.e, `numpy==2.2.0` - for the package name.

## Refresh Button

The top refresh button will update the UI completely and request new contents for each detected environment.
Use this button if the UI is out-of-sync with the current state.
It will not update any packages or make a network request.

## Clearing Caches

Conda and PyPI package caches can be cleared from the command line of any environment.

1. Press the `Applications` button and then `Open System Shell`
2. Enter: `conda clean -a -y`
3. Enter: `pip cache purge`
4. Enter: `exit`

## Troubleshooting & FAQ

| Question | Answer |
| --- | --- |
| Can I use other package managers, such as UV? | Tools such as, UV or Poetry, can be installed in a Conda environment by adding it as a PyPI package. Using them within a global context may have unexpected results and should be configured to use the active environment explicitly.
| Where can I find the `.condarc` file? | Open the installation location, and enter the `conda` folder. It will likely be hidden, so enable Explorer/Finder to show system files, and then open it in any text editor.
| How do I remove a corrupt environment? | It is safe to manually remove any environment in the `InstallDirectory\conda\envs` folder by deleting it from Finder/Explorer. Press the `Refresh` button to update the screen's state.
| Importing an environment fails. | Check the output for errors and adjust where needed. The environment's base may have been created successfully, in which case open the system shell and attempt to install manually from the command line. Please report any bugs on [GitHub](https://github.com/OpenBB-finance/OpenBB/issues).
| "Directory does not exist" | Ensure the path is reachable by the OS user account. Network drives may require additional permissions. |
| "FutureWarning" during install | These are non-fatal; the GUI continues automatically. |
| "Prefix record insertion error" | A known Conda bug – the environment is usually created successfully. The GUI handles this automatically. |
| How do I find the token for the Jupyter server when the window opens to the login page? | Press `Logs` on the environment's panel to open the console's output stream. It will be displayed with the final startup events. Alternatively, close the window and press the Jupyter button again to open a new one.
| How do I keep a Jupyter server running while I browse other pages? | The server will remain running in the background until shut down or quit the ODP application. |
| Can I change how Jupyter is configured? | Yes - the Jupyter folder is located in the installation directory. See the official [documentation](https://jupyter-server.readthedocs.io/en/latest/users/configuration.html) for more details.
| Can I edit `pyproject.toml` after import? | Yes – open the Extensions tab and manage packages as usual. See the note in the New Environments section for details. |
