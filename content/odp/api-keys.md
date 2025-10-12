---
title: API Keys
sidebar_position: 4
description: Manage and store API credentials for data providers securely within the OpenBB Platform GUI.
keywords:
  - API Keys
  - Credentials
  - Configuration
  - .env
  - Environment
  - user_settings.json
  - system_settings.json
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="API Keys | ODP Desktop App Docs" />

The API Keys screen is for managing data provider credentials accessible to the OpenBB Platform Python packages and API interface. Environment variables and credentials can be configured centrally across any environment using the `openbb-core` and its extension framework.

In the environment setup panels, data provider extensions highlight if an API key is required. Values there represent the name of the key(s) needing to be set.

:::info
The initial installation will add entries for each selected extension requiring credentials, just add your key.

For example, if `openbb-fred` was selected, `fred_api_key` will appear on the screen as, `Undefined`.

<img width="1356" height="282" alt="api-keys-provider" src="https://github.com/user-attachments/assets/a844a1e4-4854-4ad0-9408-2b3ee56f5542" />
<p align="center">
<img width="1704" height="1080" alt="api-keys-undefined" src="https://github.com/user-attachments/assets/73491240-f51f-4ec7-8957-725eded1f491" />
</p>
:::

## Features

- Interface for adding and modifying `credentials` entries stored in the [`user_settings.json`](/platform/settings/user_settings/api_keys) file.
  - Import key:value pairs from file (`.json` or `.env`).
- Easy access to key OpenBB Platform configuration files in the `~/.openbb_platform` directory, opening directly in the default text editor:
  - `user_settings.json` (see the docs [here](/platform/settings/user_settings).)
  - `system_settings.json` (see the docs [here](/platform/settings/system_settings).)
  - `.env` (see the docs [here](/platform/settings/environment_variables).)

## Edit, Save, & Remove

Hover the mouse over an entry to reveal the icons. The `edit` button is the first in the row of three.

<img width="1704" height="1080" alt="api-keys-edit" src="https://github.com/user-attachments/assets/722153fb-7bf7-4fe7-b465-4c85817b7a1d" />

Enter the changes and press `Save` to update the file and close the modal.

:::note
Backend servers and Python interpreters will need to be restarted for the changes to be reflected.
:::

## Configuration Files

The button to the right of, `Import Keys`, is for opening OpenBB Platform configuration files (listed above with documentation links).

:::tip
The `.env` file can be added to any [Backend](/odp/backends) configuration.
:::

Clicking the button will open it with the system's default text editor.

<img width="1704" height="1080" alt="api-keys-config-files" src="https://github.com/user-attachments/assets/551b71b9-bed6-47f3-8150-e1987c29006d" />


