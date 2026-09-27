---
title: Settings
sidebar_position: 6
description: >
  REPL display and behavior settings, where they are stored, how to change
  them from the /settings menu, and what each one does.
keywords:
  - openbb-cli settings
  - /settings
  - .cli.env
  - output mode
  - feature flags
  - preferences
---

The interactive REPL keeps its display and behavior settings in `~/.openbb_platform/.cli.env`, one `OPENBB_<FIELD>` line per setting. The file is read when the REPL starts and rewritten whenever a setting changes in the `/settings` menu. It is the only source: v5 does not read these settings from `OPENBB_*` variables in the process environment or from `openbb.toml` (see [Configuration](./configuration.md#display-keys-and-the-settings-table)). One-shot and batch runs write JSON and do not use these settings at all.

## Changing a setting

Open `/settings` in the REPL. The help screen lists the feature flags, shown in green when on and red when off, followed by the preferences. Entering a feature flag's command toggles it. A preference takes its new value with `-v` or `--value`, and entering it without a value prints the current one.

```text
/settings/datetime
/settings/output -v json
/settings/flair -v :rocket
/settings/timezone
```

Every change is saved to `.cli.env` immediately. The file can also be edited while the REPL is closed:

```text
OPENBB_OUTPUT_MODE='json'
OPENBB_FLAIR=':rocket'
OPENBB_USE_DATETIME='False'
```

Two settings are adjusted at every launch without being saved. If `OUTPUT_MODE` is `tsv`, the REPL switches it to `rich`, and if `USE_INTERACTIVE_DF` is off, it turns it on. A stored `tsv` or `False` therefore only lasts until the next launch; change them again from `/settings` during the session when needed.

## Feature flags

| Field | `/settings` command | Default | Effect when on |
| ----- | ------------------- | ------- | -------------- |
| `FILE_OVERWRITE` | `overwrite` | `False` | Exports replace an existing file without asking. |
| `SHOW_VERSION` | `version` | `True` | The CLI version appears in the lower-right corner of the menu panel. |
| `USE_INTERACTIVE_DF` | `interactive` | `False` | Result tables open in a separate window; see [Interactive Tables](./repl/interactive-tables.md). Turned on at every launch. |
| `USE_CLEAR_AFTER_CMD` | `cls` | `False` | The screen is cleared before each command's output. Inside `/settings`, `cls` toggles this flag instead of clearing the screen. |
| `USE_DATETIME` | `datetime` | `True` | The prompt starts with the date and time in the configured time zone. |
| `USE_PROMPT_TOOLKIT` | `promptkit` | `True` | Completion, history, and the bottom toolbar are active. When off, the prompt is a plain input line. |
| `ENABLE_EXIT_AUTO_HELP` | `exithelp` | `True` | Returning to a menu prints that menu's help screen. |
| `ENABLE_RICH_PANEL` | `richpanel` | `True` | Menu help screens are drawn inside a bordered panel. |
| `TOOLBAR_HINT` | `tbhint` | `True` | The bottom toolbar lists the help, back, and exit keys. |
| `SHOW_MSG_OBBJECT_REGISTRY` | `obbject_msg` | `False` | A message is printed each time a result is added to the registry. |

## Preferences

| Field | `/settings` command | Default | Values and effect |
| ----- | ------------------- | ------- | ----------------- |
| `OUTPUT_MODE` | `output` | `tsv` | `rich` prints a formatted table, `json` prints the results as indented JSON, `tsv` prints tab-separated text, and `html` opens a table in the default browser. With interactive tables on, `rich` and `html` use the window instead. Switched from `tsv` to `rich` at launch. |
| `TIMEZONE` | `timezone` | `America/New_York` | Any IANA time zone name. Used for the clock in the prompt. |
| `FLAIR` | `flair` | `:openbb` | Symbol shown in the prompt. One of `:openbb`, `:bug`, `:rocket`, `:diamond`, `:stars`, `:baseball`, `:boat`, `:phone`, `:mercury`, `:hidden`, `:sun`, `:moon`, `:nuke`, `:hazard`, `:tunder`, `:king`, `:queen`, `:knight`, `:recycle`, `:scales`, `:ball`, `:golf`, `:peace`, `:yy`. `:hidden` shows nothing. |
| `N_TO_KEEP_OBBJECT_REGISTRY` | `obbject_res` | `10` | Number of results the registry keeps before dropping the oldest. |
| `N_TO_DISPLAY_OBBJECT_REGISTRY` | `obbject_display` | `5` | Number of cached results listed on help screens. |
| `RICH_STYLE` | `console_style` | `dark` | Terminal color theme, one of `dark`, `light`, or `openbb`. The console picks up the theme when the REPL starts, so a change shows after a restart. |
| `ALLOWED_NUMBER_OF_ROWS` | `n_rows` | `20` | Stored, but not read by the v5 display code. |
| `ALLOWED_NUMBER_OF_COLUMNS` | `n_cols` | `5` | Stored, but not read by the v5 display code. |

## Other fields

These fields are part of the same model and file but have no `/settings` command.

| Field | Default | Meaning |
| ----- | ------- | ------- |
| `VERSION` | installed `openbb-cli` version | Shown when `SHOW_VERSION` is on. |
| `TEST_MODE` | `False` | Prints plain text without the rich panel. Set to `False` at every REPL launch. |
| `DEBUG_MODE` | `False` | Set for the session by `openbb -i --debug`. |
| `DEV_BACKEND` | `False` | Set for the session by `openbb -i --dev`. |
| `PREVIOUS_USE` | `False` | Set to `True` the first time the REPL starts with an empty `.cli.env`, which is also when it opens the CLI documentation in a browser. |
