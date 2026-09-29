---
title: OpenBBUserData Folder
sidebar_position: 7
description: >
  Where the ODP CLI REPL reads and writes files: the OpenBBUserData folders
  set in the OpenBB user preferences, and the CLI's own files in
  ~/.openbb_platform.
keywords:
  - OpenBBUserData folder
  - data directory
  - export directory
  - routines
  - user_settings.json
  - .cli.env
---

The REPL reads and writes user files in folders defined by the OpenBB user preferences, which default to an `OpenBBUserData` folder in the home directory: `/Users/<name>/OpenBBUserData` on macOS, `C:\Users\<name>\OpenBBUserData` on Windows, and `/home/<name>/OpenBBUserData` on Linux and inside WSL.

| Preference | Default | What the REPL does there |
| ---------- | ------- | ------------------------ |
| `data_directory` | `~/OpenBBUserData` | `load --file` reads paths relative to it, and `save` in the `/feature` menu writes to it. |
| `export_directory` | `~/OpenBBUserData/exports` | `--export` writes files here. Routines live in its `routines` subfolder: `record` and `stop` save there, and `exe --file` completes and resolves any `.openbb` file below it. |

Completion lists for `load --file` and `exe --file` are rebuilt whenever the home screen's help is printed, so after adding a file, run `help` at the home screen to see it offered.

## Changing the folders

Set the preferences in `~/.openbb_platform/user_settings.json` to move the folders permanently:

```json
{
  "preferences": {
    "data_directory": "/data/OpenBBUserData",
    "export_directory": "/data/OpenBBUserData/exports"
  }
}
```

For the current session only, use the `/user` menu, for example `/user/export_directory -v "/tmp/openbb-exports"`; the quotes keep the REPL from reading the slashes as menu steps. Changes made there are not saved.

## Files in ~/.openbb_platform

The CLI keeps its own files next to the OpenBB user settings.

| File | Contents |
| ---- | -------- |
| `.cli.env` | REPL settings changed through `/settings`. See [Settings](../settings.md). |
| `.cli.his` | Prompt history. |
| `openbb.toml` | Optional user-global CLI configuration. See [Configuration](../configuration.md). |
| `.env` | Optional environment variables loaded at startup. |
| `user_settings.json` | OpenBB credentials, preferences, and command defaults, shared with the Python package. |
