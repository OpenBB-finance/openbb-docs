---
title: Settings reference
sidebar_position: 7
description: >
  Every field on openbb_cli.models.settings.Settings — types, defaults,
  matching OPENBB_* env vars, and the /settings/ REPL command names.
keywords:
  - openbb-cli settings
  - Settings model
  - OPENBB_OUTPUT_MODE
  - feature flags
  - preferences
---

`openbb_cli.models.settings.Settings` is a Pydantic model with `validate_assignment=True`. It hydrates from environment variables on construction (`from_env` `model_validator(mode="before")` reads `~/.openbb_platform/.cli.env` via `dotenv_values`, layers explicit kwargs on top, and strips an `OPENBB_` prefix). Mutations go through `set_item(key, value)`, which writes the new value back to the env file via `dotenv.set_key`.

The env file lives at `~/.openbb_platform/.cli.env`. Layered TOML config seeds these env vars before `Settings()` is constructed, so `OPENBB_*` env vars and `[settings]` table entries land in the same state.

Two field categories surface in the REPL `/settings/` menu — every field in the tables below carries `json_schema_extra={"command": "...", "group": "..."}` driving the menu wiring.

## Feature flags

Booleans toggled at the `/settings/` menu in the REPL.

| Field | Default | `/settings/` command | Description |
| ----- | ------- | -------------------- | ----------- |
| `FILE_OVERWRITE` | `False` | `overwrite` | Overwrite Excel files if they already exist. |
| `SHOW_VERSION` | `True` | `version` | Show the CLI version in the bottom-right corner. |
| `USE_INTERACTIVE_DF` | `False` | `interactive` | Display tables in an interactive window when available. |
| `USE_CLEAR_AFTER_CMD` | `False` | `cls` | Clear the console after each command. |
| `USE_DATETIME` | `True` | `datetime` | Show the date and time before the flair. |
| `USE_PROMPT_TOOLKIT` | `True` | `promptkit` | Enable prompt-toolkit (autocomplete and history). |
| `ENABLE_EXIT_AUTO_HELP` | `True` | `exithelp` | Automatically print help when quitting a menu. |
| `ENABLE_RICH_PANEL` | `True` | `richpanel` | Enable the colorful rich CLI panel. |
| `TOOLBAR_HINT` | `True` | `tbhint` | Show usage hints in the bottom toolbar. |
| `SHOW_MSG_OBBJECT_REGISTRY` | `False` | `obbject_msg` | Show the registry message after a new result is added. |

## Preferences

Scalars and enumerations.

| Field | Type | Default | `/settings/` command | Description |
| ----- | ---- | ------- | -------------------- | ----------- |
| `OUTPUT_MODE` | `Literal["rich", "json", "tsv", "html"]` | `"tsv"` | `output` | Result display mode. `rich`: terminal table. `json`: JSON. `tsv`: line-oriented plain text. `html`: browser viewer. |
| `TIMEZONE` | `Literal[<every name from zoneinfo.available_timezones()>]` | `"America/New_York"` | `timezone` | Time zone for the REPL prompt and date-typed outputs. |
| `FLAIR` | `Literal[<keys of AVAILABLE_FLAIRS>]` | `":openbb"` | `flair` | Emoji flair shown in the REPL prompt. Available keys: `:openbb`, `:bug`, `:rocket`, `:diamond`, `:stars`, `:baseball`, `:boat`, `:phone`, `:mercury`, `:hidden`, `:sun`, `:moon`, `:nuke`, `:hazard`, `:tunder`, `:king`, `:queen`, `:knight`, `:recycle`, `:scales`, `:ball`, `:golf`, `:peace`, `:yy`. |
| `N_TO_KEEP_OBBJECT_REGISTRY` | `int` | `10` | `obbject_res` | Maximum number of OBBject results kept in the registry. |
| `N_TO_DISPLAY_OBBJECT_REGISTRY` | `int` | `5` | `obbject_display` | Maximum number of cached results shown on the help menu. |
| `RICH_STYLE` | `str` | `"dark"` | `console_style` | Rich theme name (resolves `<name>.richstyle.json` from the styles asset directory). |
| `ALLOWED_NUMBER_OF_ROWS` | `int` | `20` | `n_rows` | Rows displayed in rich-table mode. Does not apply to `json` / `tsv` / `html`. |
| `ALLOWED_NUMBER_OF_COLUMNS` | `int` | `5` | `n_cols` | Columns displayed in rich-table mode. Does not apply to `json` / `tsv` / `html`. |

## Internal / dev fields

Carried on the model but not surfaced in the `/settings/` menu.

| Field | Type | Default | Notes |
| ----- | ---- | ------- | ----- |
| `VERSION` | `str` | result of `get_package_version("openbb-cli")` | Read at module import. |
| `TEST_MODE` | `bool` | `False` | Forced to `False` on REPL entry. |
| `DEBUG_MODE` | `bool` | `False` | Set by `--debug`. |
| `DEV_BACKEND` | `bool` | `False` | Set by `--dev`. |
| `PREVIOUS_USE` | `bool` | `False` | First-run sentinel. |

## Environment variable mapping

The setter rule is uniform: every field is read from / written to `OPENBB_<FIELD_NAME>` in `~/.openbb_platform/.cli.env`.

```
OPENBB_OUTPUT_MODE
OPENBB_TIMEZONE
OPENBB_FLAIR
OPENBB_USE_INTERACTIVE_DF
OPENBB_ALLOWED_NUMBER_OF_ROWS
OPENBB_ALLOWED_NUMBER_OF_COLUMNS
OPENBB_USE_PROMPT_TOOLKIT
OPENBB_ENABLE_RICH_PANEL
OPENBB_TOOLBAR_HINT
OPENBB_RICH_STYLE
... (one per field)
```

When `openbb.toml` defines an entry under `[settings]`, the loader writes `OPENBB_<KEY>` via `os.environ.setdefault` before `Settings()` runs (see [Configuration](/odp/cli/configuration)).

The four most-tweaked fields also have top-level TOML shortcuts that map onto their env vars:

| Top-level TOML key | Env var | Field |
| ------------------ | ------- | ----- |
| `output-mode` | `OPENBB_OUTPUT_MODE` | `OUTPUT_MODE` |
| `flair` | `OPENBB_FLAIR` | `FLAIR` |
| `timezone` | `OPENBB_TIMEZONE` | `TIMEZONE` |
| `rich-style` | `OPENBB_RICH_STYLE` | `RICH_STYLE` |
