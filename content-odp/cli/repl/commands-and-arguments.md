---
title: Commands and Arguments
sidebar_position: 2
description: >
  Reading command help, passing parameters, the flags the REPL adds to every
  data command, and tab completion and history in the ODP CLI REPL.
keywords:
  - openbb-cli REPL
  - command help
  - parameters
  - flags
  - auto-complete
  - history
---

## Help for a command

Add `-h` or `--help` to any command to print its usage and description instead of running it:

```text
/oecd/gdp_real -h
```

Required parameters are listed under `required arguments`. In the in-process mode, parameters that only one provider supports are grouped under that provider's name, and a parameter that several providers support is listed once with a `(provider: ...)` note naming them. With `--spec` or `--server`, the remaining parameters appear under `optional arguments`.

## Passing parameters

Parameters take the form `--name value` or `--name=value`, and the names are the command's parameter names as written in its signature or schema, including underscores:

```text
/cboe/equity/historical --symbol SPY --start_date 2024-01-01 --interval 1d
```

A parameter with a fixed set of values only accepts those values, and the help lists them. Wrap values that contain spaces or a `/` in quotes. Boolean parameters take no value: in the in-process mode, adding the flag sets it to true; with `--spec` or `--server`, use `--name` or `--no-name`. Where a command accepts several values for one parameter, its help says so, usually as a comma-separated list such as `--symbol SPY,QQQ`.

## Flags the REPL adds

Every data command accepts four extra flags on top of its own parameters.

| Flag | Effect |
| ---- | ------ |
| `--register_obbject` | Do not add this result to the registry. By default every result is added. |
| `--register_key KEY` | Store the result under a name as well as an index. The name cannot contain `OBB` and must not already be in use; a duplicate is ignored with a warning. |
| `--export FORMAT` | Write the result to the export folder instead of displaying it. Formats are `csv`, `json`, `xlsx`, `png`, `jpg`, `db`, `sqlite`, and `sqlite3`. |
| `--sheet-name NAME` | Sheet to write when exporting to `xlsx`. |

:::note
In v5, `--export` on a data command writes a file only when the command returns a plain dictionary. Most commands return an `OBBject`, and for those the REPL prints `No data to export.` To save any cached result, use `save` in the [`/feature` menu](./results.md#the-feature-menu).
:::

Commands that can draw a chart also accept `--chart`; see [Interactive Charts](./interactive-charts.md). Data-processing commands in `/technical`, `/quantitative`, and `/econometrics` take their input through `--data`, which refers to a cached result as described in [Results Registry](./results.md).

## Completion and history

While you type, the prompt suggests the commands and menus of the current menu. After a command and a space, it suggests that command's flags, and after a flag with fixed values, those values. `--data` completes to the cached results, `load --file` to the data files in the OpenBBUserData folder, and `exe --file` to the saved routines.

Each line you enter is saved to `~/.openbb_platform/.cli.his` and can be recalled with the arrow keys. Values that follow `--password`, `--email`, or `--pat` are masked in the file; everything else is stored as typed, including credentials set in `/user/credentials`.

Completion, history, and the bottom toolbar all come from prompt-toolkit. `/settings/promptkit` turns them off and falls back to a plain input line.
