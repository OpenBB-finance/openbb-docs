---
title: Troubleshooting
sidebar_position: 5
description: This page covers potential problems that might be encountered while using the ODP Desktop application.
keywords:
  - Troubleshooting
  - Error
  - Warning
  - Bug
  - Exception
  - FAQ
  - not working
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="Troubleshooting | ODP Desktop App Docs" />

This page covers potential problems that might be encountered while using the ODP Desktop application.

## Console Logs

The window has a console available by right-clicking anywhere and selecting "Inspect Element". Use this to find frontend components, user interactions, and JavaScript errors.

For backend logs, quit the application and open it by running the `.exe`/`.bin` file in the operating system's default terminal shell.

## Installation

Having trouble with the initial installation and setup?

:::warning
If the initial `openbb` environment failed during creation, you will be presented with the error, and a choice to try again or continue anyways. If you try again, select a new path or overwrite the existing. If you continue anyways, the environment will be in a partially-installed state and some user interactions may not worked as-expected. In most cases, you will want to address the error before use or reinstallation.
:::

If you need to remove the application entirely, uninstall via the standard operating system procedures, then remove the initial installation folder where Conda is installed.

### Timeout

If you experienced a timeout error, this is most likely a network connection issue. Potentially transitory, trying again may resolve itself. The console logs may reveal additional context.

### Permission Error

This typically happens when the operating system user does not have adequate permissions for the selected installation path. The safest place is usually the User home directory, and avoid installing where administrator privileges are required.

In Windows Powershell, this command grants the current user full control to their user profile folder and all subfolders and files. 

```sh
icacls "$env:USERPROFILE" /grant "$env:USERNAME":(OI)(CI)F /T
```

This command is an equivalent on macOS:

```sh
chmod -R +a "user:$(whoami) allow list,add_file,search,add_subdirectory,delete_child,readattr,writeattr,readextattr,writeextattr,readsecurity,file_inherit,directory_inherit" "/Users/user_name"
```

### Failed Building Wheel

This error will end with, "Failed to build installable wheels for some pyproject.toml based projects.", along with the failed package. These are typically CPython packages where precompiled binaries are not published to PyPI for your operating system and/or CPU architecture.

It likely means that a system-level component could not be found on the machine, and needs to be installed or directed to the installation with environment variables.

:::warning
If you are running an Intel-based macOS machine, EOL for macOS is scheduled for the end of 2026, and major packages have already begun phasing out support of precompiled binaries.

This may also be applicable to Apple Silicon machines where x86-based (Rosetta2) packages are being installed.

<details>
<summary mdxType="summary">Instructions Detail</summary>

You will need to install additional system components (compilers).

Start with X-Code:

```sh
xcode-select --install
```

Then install Homebrew:

```sh
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

Then install CMake:

```sh
brew install cmake
```

Finally, install LLVM:

```sh
brew install llvm@20
```

</details>

:::

If you are on a Windows machine, this error might reference MSVC Microsoft Visual C++, and if so, download and install from the Microsoft [site](https://visualstudio.microsoft.com/downloads) by expanding the "Other Tools, Frameworks, and Redistributables" section.

## Backends

If you experienced an installation error and elected to continue anyways, it is likely that the existing backends will not start because the packages were not installed.

Removing or updating backends will have no impact on the environment.

| Question | Answer |
| --- | --- |
| Backend stuck at *starting*. | After 30s, if an error is not detected the status will update as running. |
| Backend URL displayed is incorrect. | The UI looks for a host:port pattern from the application startup. Check the logs for errors and report unexpected outcomes on [Github](https://github.com/OpenBB-finance/OpenBB/issues/). |
| Startup traceback. | The GUI captures the full traceback and stops the service; open logs for details, fix code, then **Start** again. |
| Port already in use. | Edit the backend and set the `--port` runtime argument, or stop the conflicting process. |
| Port different than expected. | Launchers such as, `openbb-api`, will find the next available port. Is a service already running? |
| How do I expose the API to my LAN? | Set the `--host` runtime argument as, `0.0.0.0`, and ensure the firewall allows the chosen port. |
| Can I run non-Python services? | Yes – any executable/script is allowed as long as it runs inside the selected Conda environment. |
| Status shows as running, but backend failed to start. | Refresh the window by right-clicking and selecting reload. Does the status change? Press **Stop**. Is the process terminated? Consult the logs and report unexpected outcomes on [Github](https://github.com/OpenBB-finance/OpenBB/issues/). |
| Backend fails to terminate on ODP exit. | This is likely a bug, please report on [Github](https://github.com/OpenBB-finance/OpenBB/issues/), with context. |

## Environments

If an environment gets corrupted, the best thing to do is remove it and recreate.

If the environment can't be removed from the ODP `Environments` screen, open the installation folder and delete the folder manually.

All environments are under the Conda folder, `{installation_path}/conda/envs/{env_name}`, and can be deleted safely at any time.

## GitHub Issues

If you are unable to resolve the error after troubleshooting, look at the open issues on [GitHub](https://github.com/OpenBB-finance/OpenBB/issues) and add to, or create, one. Please provide all relative context with conditions, the operating system version, CPU architecture type, along with error messages and screenshots.