---
title: API Keys
sidebar_position: 4
description: Manage and store API credentials for data providers securely within the ODP Desktop App.
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

The API Keys screen is for managing data provider credentials accessible to the Open Data Platform Python packages and API interface. Environment variables and credentials can be configured centrally across any environment using the `openbb-core` and its extension framework.

In the environment setup panels, data provider extensions highlight if an API key is required. Values there represent the name of the key(s) needing to be set.

:::info
The initial installation creates entries for each selected extension requiring credentials, just add your key.

For example, if `openbb-fred` was selected, `fred_api_key` will appear on the screen as, `Undefined`.

<img width="1356" height="282" alt="api-keys-provider" src="https://github.com/user-attachments/assets/a844a1e4-4854-4ad0-9408-2b3ee56f5542" />
<p align="center">
<img width="852" height="540" alt="api-keys-undefined" src="https://github.com/user-attachments/assets/27bc5265-b6ef-4d0e-9eb1-a256e37fa0e6" />
</p>
:::

## Features

- Interface for adding and modifying `credentials` entries stored in the [`user_settings.json`](/python/settings/user_settings/api_keys) file.
  - Import key:value pairs from file (`.json` or `.env`).
- Easy access to key ODP configuration files in the `~/.openbb_platform` directory, opening directly in the default text editor:
  - `user_settings.json` (see the docs [here](/python/settings/user_settings).)
  - `system_settings.json` (see the docs [here](/python/settings/system_settings).)
  - `.env` (see the docs [here](/python/settings/environment_variables).)

## Edit, Save, & Remove

Hover the mouse over an entry to reveal the icons. The `edit` button is the first in the row of three.

<img width="852" height="540" alt="api-keys-edit" src="https://github.com/user-attachments/assets/d431cdee-03a7-43c8-9246-109f92f1ced5" />

Enter the changes and press `Save` to update the file and close the modal.

:::note
Backend servers and Python interpreters will need to be restarted for the changes to be reflected.
:::

## Configuration Files

The button to the right of, `Import Keys`, is for opening ODP configuration files (listed above with documentation links).

:::tip
The `.env` file can be added to any [Backend](/odp/backends) configuration.
:::

Clicking the button will open it with the system's default text editor.

<img width="852" height="540" alt="api-keys-config-files" src="https://github.com/user-attachments/assets/b1c0675d-9131-48e3-a659-1df11153f2d8" />
