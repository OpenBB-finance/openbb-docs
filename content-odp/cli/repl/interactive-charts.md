---
title: Interactive Charts
sidebar_position: 6
description: >
  Drawing charts in the ODP CLI REPL with --chart and results --chart, what
  the chart window offers, and what the charting and interactive extras add.
keywords:
  - openbb-cli REPL
  - interactive charts
  - --chart
  - openbb-charting
  - PyWry
  - Plotly
---

Charts need the `openbb-charting` extension, installed by the `charting` extra, and open in a PyWry window when `pywry` from the `interactive` extra is also installed. `pip install "openbb-cli[all]"` installs both.

## Drawing a chart

Commands that can produce a chart list a `--chart` flag in their help. Among the V5 extensions these are a subset of the `/technical`, `/quantitative`, and `/econometrics` commands, including `/technical/ema`:

```text
/cboe/equity/historical --symbol SPY --start_date 2024-01-01
/technical/ema --data OBB0 --length 20 --chart
```

In the `rich` output mode, the chart is shown in place of the table. The result still enters the registry with its data, so the table remains available through `results`.

Any cached result can be charted afterwards:

```text
results --index 0 --chart
```

If the result already carries a chart, that chart is shown. Otherwise `openbb-charting` builds one from the data, falling back to a generic line chart when the command has no chart of its own.

## The chart window

The window shows an interactive Plotly figure; scrolling zooms the view. The header bar has a button that switches between light and dark themes, and the window opens in the theme set by the `chart_style` preference, which the `/user` menu changes for the session. Without `pywry`, the figure is handed to Plotly's default renderer instead, which usually opens it in the browser.

To keep the data behind a chart, save the result from the [`/feature` menu](./results.md#the-feature-menu).
