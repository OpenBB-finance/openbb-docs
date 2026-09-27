---
title: Installation
sidebar_position: 1
description: >
  Install openbb-cli via pip. Optional extras for charting and interactive
  tables.
keywords:
  - openbb-cli install
  - pip
  - charting
  - interactive
---

## pip

```bash
pip install openbb-cli
```

Provides the `openbb` console script (`[project.scripts] openbb = "openbb_cli.cli:main"`).

Runtime requirements: Python 3.10 or newer. Core dependencies pulled in: `openbb-core[pandas]`, `prompt-toolkit`, `rich`, `python-dotenv`, `openpyxl`, `httpx`, `pyyaml`.

## Optional extras

```bash
pip install "openbb-cli[charting]"      # adds openbb-charting
pip install "openbb-cli[interactive]"   # adds pywry for browser-rendered tables
pip install "openbb-cli[all]"           # both
```

## Verify

```bash
openbb --help
```

Should print the argument list and exit 0. If you intend to dispatch against the in-process `obb` namespace, also confirm `openbb-core` resolves cleanly:

```bash
python -c "from openbb import obb; print(type(obb).__name__)"
```
