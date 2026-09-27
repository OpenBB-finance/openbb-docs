---
title: Interactive Tables
sidebar_position: 5
description: >
  How the ODP CLI REPL displays results in each output mode, when tables open
  in a PyWry window, and how to filter a table with the Pandas Query toolbar.
keywords:
  - openbb-cli REPL
  - interactive tables
  - output mode
  - PyWry
  - pandas query
---

Where a result appears depends on two [settings](../settings.md): the output mode, set with `/settings/output -v MODE`, and the `interactive` flag, toggled with `/settings/interactive`.

| Output mode | Display |
| ----------- | ------- |
| `rich` | A formatted table in the terminal, limited to the first 1000 rows, with decimals shown to two places. |
| `json` | The result rows as indented JSON. |
| `tsv` | The complete table as tab-separated text, suitable for copying into other tools. |
| `html` | An HTML table written to a temporary file and opened in the default browser. The file path is printed. |

## The table window

When `interactive` is on and `openbb-charting` is installed, the `rich` and `html` modes send results to a separate window drawn by PyWry instead; `json` and `tsv` always print to the terminal. The REPL turns `interactive` on at every launch, so the window is the default whenever both packages are present. Install them with `pip install "openbb-cli[all]"`.

Without `openbb-charting`, results print in the terminal regardless of the flag. With `openbb-charting` but without `pywry`, the window cannot open, and in the `rich` and `html` modes the results of data commands are not shown; run `/settings/interactive` to turn the window off for the session, or install `pywry`.

The window title names the command that produced the table. The header bar has a button that switches between light and dark themes; the window opens in the theme set by the `chart_style` preference, which the `/user` menu changes for the session.

## Pandas Query toolbar

Above the table, a collapsible toolbar labeled Pandas Query filters or reshapes the table without leaving the window. Type a Python expression in which `df` is the full table and `pd` is pandas, then press Submit:

```python
df.query('close > 200').nlargest(10, 'volume')
```

The expression must return a DataFrame, which replaces the rows and columns in view. Reset restores the original table. Expressions that contain `import`, `exec`, `eval`, `compile`, `open`, `__`, `getattr`, `setattr`, `delattr`, `globals`, `locals`, `os.`, `sys.`, `subprocess`, `shutil`, `pathlib`, `breakpoint`, `exit`, or `quit` are refused with an error message.

The toolbar changes only what the window shows. To keep a filtered table in the registry or write it to a file, use `query --save` and `save` in the [`/feature` menu](./results.md#the-feature-menu).
