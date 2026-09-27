---
title: openbb-charting
sidebar_position: 1
description: The openbb-charting extension - the charting accessor on OBBject, the chart parameter on commands with a chart view, Plotly chart builders, and interactive tables.
keywords:
- charts
- charting
- Plotly
- OpenBBFigure
- PyWry
- OBBject
- chart views
- tables
---

<!-- markdownlint-disable MD012 MD031 MD033 MD037 -->

import HeadTitle from "@site/src/components/General/HeadTitle.tsx";

<HeadTitle title="openbb-charting | OpenBB Python (V5)" />

`openbb-charting` is an OBBject extension built on Plotly. Installing it does three things. Every command result gains a `charting` accessor with chart builders and a table viewer. Commands that have a registered chart view gain a `chart` parameter. And the REST API returns the chart's Plotly JSON alongside the data when `chart=True` is sent.

This page covers version 4.0.0, the release for V5.

## Installation

```sh
pip install openbb-charting
openbb-build
```

The package depends on `openbb-core[pandas]`, `pandas-ta-openbb`, and `plotly`. Charts and tables open in a native desktop window through PyWry, which is an optional extra:

```sh
pip install "openbb-charting[pywry]"
```

On Linux, PyWry needs the system WebKit and GTK libraries first:

| Distribution | Command |
| --- | --- |
| Debian, Ubuntu, Mint | `sudo apt install libwebkit2gtk-4.1-dev libgtk-3-dev` |
| Arch, Manjaro | `sudo pacman -S webkit2gtk` |
| Fedora | `sudo dnf install gtk3-devel webkit2gtk3-devel` |

Without PyWry, figures fall back to Plotly's default renderer through `plotly.io.show`, and the interactive `table()` viewer is unavailable.

## Commands with charts

A chart view is a function that turns a command's results into a figure. Extensions register views through the `openbb_charting_extension` entry point, and a view is matched to a command by its route: `/quantitative/factors` maps to `quantitative_factors`. When `openbb-build` finds a view for a command, it adds `chart: bool = False` to that command's signature.

List the registered views:

```python
from openbb_charting import Charting

Charting.functions()
```

The V5 packages ship these views.

| Package | Commands with `chart=True` |
| --- | --- |
| `openbb-econometrics` | `econometrics.correlation_matrix` |
| `openbb-quantitative` | `quantitative.factors`, `quantitative.risk_decomposition`, `quantitative.attribution`, `quantitative.rolling.factors` |
| `openbb-technical` | `technical.sma`, `ema`, `wma`, `hma`, `zlma`, `rsi`, `macd`, `adx`, `aroon`, `cones`, `relative_rotation` |
| `openbb-imf` | `imf.portwatch.country_activity`, `monthly_trade`, `container_metrics`, `disruptions_map`, `disruption_sankey` |

Provider namespaces other than `obb.imf` do not register views, so their commands have no `chart` parameter. Their results can still be charted with the generic tools below.

## Creating and showing a chart

Pass `chart=True`, then call `show()` on the result:

```python
from openbb import obb

prices = obb.cboe.equity.historical(symbol="XLE", start_date="2021-01-01").to_df()
returns = prices["close"].pct_change().mul(100).dropna().rename("xle").to_frame()
factors = obb.famafrench.factors(frequency="daily", start_date="2021-01-01").results

result = obb.quantitative.risk_decomposition(
    data=returns,
    factors_data=factors,
    target="xle",
    risk_free_column="rf",
    periods=["3 Month", "1 Year", "Max"],
    chart=True,
)
result.show()
```

The chart is stored on `result.chart`, which has three fields: `fig`, the `OpenBBFigure` (a Plotly `Figure` subclass); `content`, the figure as Plotly JSON; and `format`, which is `"plotly"`. Over the REST API, `fig` is dropped and `content` is returned, ready for any Plotly client. `show()` raises an error when no chart has been created.

## Redrawing a chart

`charting.to_chart()` builds the chart again from the result and replaces `result.chart`. It also creates a chart for a result that was fetched without `chart=True`. Keyword arguments pass through to the view, so each view defines what it accepts; the quantitative views, for example, take `title` and `layout_kwargs`, a dictionary applied with Plotly's `update_layout`.

```python
result.charting.to_chart(
    title="XLE variance share by factor",
    layout_kwargs={"height": 500},
)
```

Set `render=False` to update `result.chart` without displaying it.

When a command has no view, `to_chart()` draws a generic line chart of the results instead. For price history, that is a line of the `close` column; for multi-symbol data, one line per symbol.

```python
spy = obb.cboe.equity.historical(symbol="SPY", start_date="2024-01-01")
spy.charting.to_chart()
```

<details>
<summary mdxType="summary">Sample generic line chart</summary>

<div style={{display: 'flex', justifyContent: 'center'}}>
  <img
    className="pro-border-gradient"
    alt="Generic line chart created from a command without a dedicated chart view"
    src="https://github.com/OpenBB-finance/OpenBB/assets/85772166/f87a6648-7365-4529-a254-35897af448ca"
    width="100%"
  />
</div>

</details>

## Charts from any data

Four builders on the accessor take external data, a DataFrame or a list of `Data` such as `results`, and return an `OpenBBFigure`. They do not modify `result.chart`.

| Method | Builds |
| --- | --- |
| `create_line_chart(data, target=None, x=None, y=None, y2=None, normalize=False, returns=False, same_axis=False, render=True, ...)` | Line chart; multi-symbol data is pivoted to one line per symbol |
| `create_bar_chart(data, x, y, barmode="group", orientation="v", render=True, ...)` | Bar chart with one or more `y` columns |
| `create_correlation_matrix(data, method="pearson", colorscale="RdBu", title="Asset Correlation Matrix")` | Correlation heat map of the numeric columns |
| `create_3d_surface(X, Y, Z, xtitle="DTE", ytitle="Strike", ztitle="IV", ...)` | Triangulated 3D surface from three series |

`create_line_chart` and `create_bar_chart` display the figure unless `render=False`; the other two only return it. `returns=True` plots cumulative percent returns and `normalize=True` plots z-scores, which puts series of different scale on one axis.

```python
basket = obb.cboe.equity.historical(symbol="XLE,XLF,XLK,SPY", start_date="2024-01-01")

basket.charting.create_line_chart(
    data=basket.results, target="close", returns=True, title="Cumulative return"
)

closes = basket.to_df().pivot(columns="symbol", values="close")
change = closes.iloc[-1].div(closes.iloc[0]).sub(1).mul(100).rename("change").reset_index()

basket.charting.create_bar_chart(
    data=change, x="symbol", y="change", orientation="h", title="Percent change"
)
```

## Interactive tables

`charting.table()` opens the results, or a DataFrame passed as `data`, in a sortable, filterable grid with a pandas query bar. It requires the PyWry extra. The displayed data is a copy; the result is not modified.

```python
basket.charting.table()
basket.charting.table(data=change, title="Percent change")
```

<details>
<summary mdxType="summary">Sample interactive table</summary>

<div style={{display: 'flex', justifyContent: 'center'}}>
  <img
    className="pro-border-gradient"
    alt="Interactive table window showing command results"
    src="https://github.com/OpenBB-finance/OpenBB/assets/85772166/77f5f812-b933-4ced-929c-c1e39b2a3eed"
    width="100%"
  />
</div>

<div style={{display: 'flex', justifyContent: 'center'}}>
  <img
    className="pro-border-gradient"
    alt="Interactive table window showing a DataFrame passed as external data"
    src="https://github.com/OpenBB-finance/OpenBB/assets/85772166/d02f8c34-e1d1-4001-a73e-d3b948a4c5c1"
    width="100%"
  />
</div>

</details>

## Theme

Charts and tables use the dark theme by default. The chart styles are read from the `chart_style` and `table_style` preferences in `~/.openbb_platform/user_settings.json`, each `"dark"` or `"light"`:

```json
{
  "preferences": {
    "chart_style": "light",
    "table_style": "light"
  }
}
```

`charting.toggle_chart_style()` switches an existing chart between the two. In the PyWry window, the toolbar button does the same.

## Extending the charting layer

Three entry-point groups customize charting without changing the core. `openbb_charting_extension` registers view classes, as described above. `openbb_charting_hooks` registers `ChartingHook` subclasses, imported from `openbb_core.app.charting`, which run at the `resolve_data`, `pre_figure`, `post_figure`, `pre_render`, and `post_render` stages of every chart; set `routes` to limit a hook to specific commands and `priority` to order hooks, lower first. `openbb_charting_backend` registers a rendering backend, selected with the `charting_backend` system setting.

A package can also replace the engine entirely by registering an OBBject extension named `charting`. When more than one is installed, the `charting_extension` system setting chooses between them. The [charting extension guide](../../../developer/extension_types/charting.md) walks through writing a view.

For indicator overlays on price charts, see [technical indicators](./indicators.md).
