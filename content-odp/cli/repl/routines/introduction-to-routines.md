---
title: Introduction to Routines
sidebar_position: 1
description: >
  The .openbb routine format, how the REPL turns a routine into one sequence
  of steps, and how to run a routine with exe.
keywords:
  - openbb-cli routines
  - .openbb
  - exe
  - automation
  - REPL scripts
---

A routine is a plain-text file with the `.openbb` extension that holds REPL input, one entry per line. `exe` joins the lines with `/` and runs the result as a single path from the home screen, the same way it would run a long line typed at the prompt. A relative line continues from the menu the previous line left you in, and a line that starts with `/` starts again from the home screen. Any line may itself be a pipeline such as `/cboe/equity/historical --symbol SPY/home/technical/ema --data OBB0 --length 20`.

Blank lines are ignored. A line that contains `#` anywhere is skipped entirely, which makes `#` the comment marker but also means a command cannot use the character. Lines that contain the word `reset`, or consist of `r`, are skipped as well. Words that start with `$` are variables, described in [Advanced Routines](./advanced-routines.md).

## A first routine

Save the following as `spy_indicators.openbb` in the routines folder, which is `~/OpenBBUserData/exports/routines` unless the OpenBB export folder has been moved (see [OpenBBUserData Folder](../openbbuserdata.md)):

```text
/cboe/equity
historical --symbol SPY --start_date 2024-01-01 --register_key spy
/technical/ema --data spy --length 20
/technical/rsi --data spy
home
```

The first two lines open `/cboe/equity` and fetch daily prices for SPY, storing the result under the key `spy`. The next two lines run two indicators on that cached result from the `/technical` menu, and the last line returns to the home screen. Using a key instead of `OBB0` keeps each indicator pointed at the price data, because every new result shifts the `OBB` numbers. Keys must be unique within a session, so running the routine a second time stores the new prices without the key and the indicators read the first run's data.

## Running a routine

`exe` belongs to the home screen; from another menu, prefix it with `/`.

```text
exe --file spy_indicators.openbb
```

With prompt-toolkit enabled, `--file` accepts the name of any `.openbb` file below the routines folder, including subfolders, and Tab completes the names. Otherwise, or for a file elsewhere, pass its path. `--file` may be omitted when the file name comes first, as in `exe spy_indicators.openbb`.

| Flag | Effect |
| ---- | ------ |
| `--file`, `-f` | Routine name or path. |
| `--input`, `-i` | Comma-separated values made available to the routine as `$ARGV`; see [Advanced Routines](./advanced-routines.md#input-arguments). |
| `--example`, `-e` | Run the sample routine bundled with the CLI. It calls commands of the `equity` router, which is not among the V5 extensions, so it fails without that router. |

After the last step the prompt stays in whatever menu the routine ended in. A routine can also run as the REPL starts:

```bash
openbb -i /exe --file spy_indicators.openbb
```

If a step fails, for example because a flag is invalid, the REPL prints the error and continues with the next step.
