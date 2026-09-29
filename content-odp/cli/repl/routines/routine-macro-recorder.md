---
title: Routine Macro Recorder
sidebar_position: 2
description: >
  Record the steps of a live ODP CLI REPL session into a .openbb routine with
  record and stop, and where the recorded file is saved.
keywords:
  - openbb-cli routines
  - macro recorder
  - record
  - stop
  - .openbb
---

Instead of writing a routine by hand, you can record one. `record` starts capturing the steps you run, and `stop` writes them to a routine file.

```text
record -n spy study
/cboe/equity/historical --symbol SPY --start_date 2024-01-01
/technical/ema --data OBB0 --length 20
stop
```

`record` works at the home screen, and `stop` works from any menu. Each step is stored as its own line, so a path typed in one go is split into its parts. The session above produces these lines:

```text
home
cboe
equity
historical --symbol SPY --start_date 2024-01-01
home
technical
ema --data OBB0 --length 20
```

A name that no menu recognizes is not recorded, but a known command with invalid arguments is, so review the file before sharing it.

## record options

| Flag | Effect |
| ---- | ------ |
| `-n`, `--name` | Routine title; required. Letters, digits, and spaces only. The flag can be left out when the title comes first, as in `record spy study`. |
| `-d`, `--description` | Description written into the file. Defaults to the time the recording started. |
| `--tag1`, `--tag2`, `--tag3` | Up to three tags from the fixed list that `record -h` prints, such as `technical analysis` or `macro`. |

## Saving

`stop` refuses to save until at least four steps have been recorded. The file is named after the title, with spaces replaced by underscores, so the example becomes `spy_study.openbb` in the routines folder, `~/OpenBBUserData/exports/routines` by default. If a routine with that name exists, `stop` asks whether to overwrite it; answering no saves the new one with a `YYYYMMDD_HHMMSS_` timestamp prefix. The file starts with header lines for the title, tags, and description, each beginning with `#`, which `exe` skips.

After the next `help` at the home screen, the new routine is offered by `exe --file`:

```text
exe --file spy_study.openbb
```

Recorded routines replay the exact values you typed. To reuse one with other symbols or dates, edit the file and replace those values with input arguments, variables, or relative dates, as described in [Advanced Routines](./advanced-routines.md).
