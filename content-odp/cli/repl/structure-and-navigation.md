---
title: Structure and Navigation
sidebar_position: 1
description: >
  How the ODP CLI REPL is organized into menus and commands, how to move
  between them with relative and absolute paths, and which commands work
  everywhere.
keywords:
  - openbb-cli REPL
  - menus
  - navigation
  - absolute paths
  - global commands
  - home
---

`openbb -i` starts the interactive REPL. In the default in-process mode, every installed extension becomes a menu: `openbb-oecd` adds `/oecd`, `openbb-cboe` adds `/cboe` with sub-menus such as `/cboe/equity`, and so on. Started with `--spec PATH` or `--server URL`, the REPL builds the same kind of menu tree from the paths of that API. The first time the REPL starts without an initial command and with an empty `~/.openbb_platform/.cli.env`, it also opens the CLI documentation in the default browser.

The prompt shows the date and time, the flair, and the current menu path:

```text
2026 Sep 27, 14:05 (🦋) /cboe/equity/ $
```

The clock, its time zone, and the flair are [settings](../settings.md).

## Menus and commands

Entering a menu by name prints its help screen, and `help` prints it again. Sub-menus are marked with `>` and drawn in a different color from commands. In the in-process mode, the provider that serves each command appears in brackets at the right of its line. When results have been cached, the help screen ends with the most recent ones, labeled `OBB0`, `OBB1`, and so on; see [Results Registry](./results.md).

The home screen is grouped by purpose. `settings` holds the REPL's own settings, and `user` holds the OpenBB user preferences and credentials for the current session. `record`, `stop`, and `exe` handle [routines](./routines/introduction-to-routines.md). The data menus follow, with `technical`, `quantitative`, and `econometrics` listed separately because they work on data you have already fetched. The last group has `feature`, `load`, and `results`, which manage cached results.

## Moving between menus

Enter a menu by typing its name. `..`, `q`, or `quit` goes up one level, and at the home screen they leave the REPL. `home` or `/` returns to the home screen from any depth.

A path that starts with `/` is absolute, so `/fred/fixedincome` opens that menu from wherever you are. Steps separated by `/` run in order, and the last step can be a command:

```text
/cboe/equity/historical --symbol SPY --start_date 2024-01-01
```

This enters `/cboe`, then `/cboe/equity`, runs `historical`, and leaves you at the `/cboe/equity/` prompt. Steps can also be `..` or `home`, which lets one line fetch data and then process it in another menu:

```text
/cboe/equity/historical --symbol SPY/home/technical/ema --data OBB0 --length 20
```

Because `/` separates steps, wrap an argument value that contains a slash in quotes.

If you type a name that does not exist in the current menu, the REPL reports it and, when a command or menu name is close enough, runs that one instead and prints `Replacing by '<name>'`.

## Commands available everywhere

| Command | Aliases | Effect |
| ------- | ------- | ------ |
| `help` | `h`, `?` | Print the current menu's help screen. |
| `quit` | `q`, `..` | Go up one level; at the home screen, leave the REPL. |
| `home` | `/` | Return to the home screen. |
| `exit` | `e` | Leave the REPL from any menu. Ctrl+C and Ctrl+D at the prompt do the same. |
| `reset` | `r` | Reload the CLI and return to the current menu. |
| `cls` | none | Clear the screen. |
| `results` | none | List or show cached results. |
| `load` | none | Load a CSV, JSON, Excel, or SQLite file from the OpenBBUserData folder into the registry. |
| `stop` | none | Stop recording a routine and save it. |

`settings`, `user`, `feature`, `record`, and `exe` belong to the home screen. From a sub-menu, reach them with an absolute path such as `/settings` or `/exe --file my_routine.openbb`.
