---
title: Installation
sidebar_position: 1
description: >
  Install openbb-cli with pip, add the OpenBB extensions that supply commands,
  and choose the charting and interactive-window extras.
keywords:
  - openbb-cli install
  - pip
  - extensions
  - charting
  - interactive
---

## pip

`openbb-cli` needs Python 3.10 or newer.

```bash
pip install openbb-cli
```

The package provides the `openbb` console script. Its dependencies are `openbb-core[pandas]`, `prompt-toolkit`, `rich`, `python-dotenv`, `openpyxl`, `httpx`, and `pyyaml`, plus `tomli` on Python 3.10.

## Extensions for the in-process backend

`openbb-core` ships the `openbb` Python package but no data commands. When the CLI runs without `--server` or `--spec`, it calls whatever OpenBB extensions are installed in the same environment, so install the ones you plan to use:

```bash
pip install openbb-oecd openbb-cboe openbb-technical
```

Each provider package adds its own top-level namespace, such as `oecd` or `cboe`. Commands sent through `--server` or `--spec` run on the remote API instead, and need no local extensions.

## Optional extras

Two extras affect the interactive REPL. The `charting` extra installs `openbb-charting`, which builds charts for commands that accept `--chart` and for `results --chart`. The `interactive` extra installs `pywry`, which draws tables and charts in a separate window. The `all` extra installs both.

```bash
pip install "openbb-cli[all]"
```

Install the two together. With `openbb-charting` present but `pywry` missing, the REPL still hands command results to the window, which cannot open, so in the `rich` and `html` output modes those results are not shown; [Interactive Tables](./repl/interactive-tables.md) explains how to switch the window off.

## Verify

```bash
openbb --help
```

The command prints the flag list and exits with status 0. To confirm that the in-process backend can import `openbb`, run:

```bash
python -c "from openbb import obb; print(type(obb).__name__)"
```
