---
title: Charting Extensions
sidebar_position: 6
description: Add chart views to router commands so that calling them with chart=True attaches a chart to the OBBject, in Python and over REST.
keywords:
  - ODP
  - OpenBB V5
  - charting
  - openbb-charting
  - openbb_charting_extension
  - views
  - OpenBBFigure
  - Plotly
  - ChartingHook
  - how-to
---

import HeadTitle from "@site/src/components/General/HeadTitle.tsx";

<HeadTitle title="Charting Extensions | OpenBB Python (V5)" />

A charting extension supplies a chart view for one or more command routes. When `openbb-charting` is installed and a command has a view, the command gains a `chart` parameter; calling it with `chart=True` runs the view and stores the result in `OBBject.chart`. This guide adds a view for the `obb.demo.prices` command from [Provider extensions](provider.md). The matching rules are summarized in [Extension types](../../concepts/extensions.mdx).

## Write a view

A view class holds one static method per route. The method name is the route with the leading `/` removed and every other `/` replaced by `_`, so `/demo/prices` becomes `demo_prices`. Only public functions defined in the same module as the class count as views. `openbb_demo/demo_views.py`:

```python
"""Demo chart views."""

from typing import TYPE_CHECKING, Any

if TYPE_CHECKING:
    from openbb_charting.core.openbb_figure import OpenBBFigure


class DemoViews:
    """Chart views for demo commands."""

    @staticmethod
    def demo_prices(**kwargs: Any) -> tuple["OpenBBFigure", dict[str, Any]]:
        """Chart closing prices returned by /demo/prices."""
        from openbb_charting.core.openbb_figure import OpenBBFigure

        rows = kwargs["obbject_item"]
        fig = OpenBBFigure()
        fig.add_scatter(x=[row.date for row in rows], y=[row.close for row in rows], name="Close")
        content = fig.show(external=True).to_plotly_json()
        return fig, content
```

Importing `openbb_charting` inside the method keeps the module importable when the package is installed without it.

The view receives keyword arguments only. `obbject_item` is the command's `results`, `standard_params` and `extra_params` are the parameters the command was called with, `provider` is the provider name, `extra` is the `OBBject.extra` dictionary, and `charting_settings` carries the user's chart and table style preferences. To make a chart configurable, add the option as a command parameter; it arrives in `standard_params` or `extra_params`.

The return value can take several forms. An `OpenBBFigure`, a subclass of the Plotly `Figure`, is serialized for you. A `(figure, content)` tuple stores `content` as the JSON form, or recomputes it when the figure is an `OpenBBFigure`. A `Chart` from `openbb_core.app.model.charts.chart` is stored as-is, which lets a view return non-Plotly output with its own `format`. If the view raises an unexpected exception, `openbb-charting` falls back to a generic line chart of the results.

## Register the view

Point an `openbb_charting_extension` entry point at the class. Declaring `openbb-charting` as an optional dependency keeps it out of installs that do not chart:

```toml
[project.optional-dependencies]
charting = ["openbb-charting"]

[project.entry-points."openbb_charting_extension"]
demo = "openbb_demo.demo_views:DemoViews"
```

The entry-point name is not used for matching, so views for several routers can live in one class and one entry point.

## Use the chart

Install the package with the extra and rebuild, so the generated `obb.demo.prices` method gains its `chart` parameter:

```bash
pip install -e ".[charting]"
openbb-build
```

```python
from openbb import obb

output = obb.demo.prices(symbol="ABC", chart=True)
output.show()
output.chart.content
```

`show()` renders the figure, and `output.chart.content` is the JSON form. Over REST, `GET /api/v1/demo/prices?symbol=ABC&chart=true` returns the same `chart.content` in the response body; the figure object itself is not serialized. If the view fails, the command still returns its results and the error is reported as a warning, unless `OPENBB_DEBUG_MODE` is set.

`output.charting.get_params()` shows the view's docstring, which is the place to document the chart's options. [openbb-charting](../../extensions/infrastructure/openbb-charting/index.md) covers the rest of the `charting` accessor.

## Modify charts with hooks

To change charts produced by views you do not own, register a `ChartingHook` under the `openbb_charting_hooks` entry-point group. A hook can override `resolve_data`, `pre_figure`, `post_figure`, `pre_render`, and `post_render`; each receives a `HookContext` with the route, figure, content, parameters, and settings, and may change it in place. `routes` limits a hook to specific routes, and hooks with a lower `priority` run first (the default is 100).

```python
from openbb_core.app.charting import ChartingHook, HookContext


class Watermark(ChartingHook):
    """Add a watermark to demo charts."""

    routes = ("/demo/prices",)

    def post_figure(self, context: HookContext) -> None:
        """Annotate the figure and refresh its JSON content."""
        context.figure.add_annotation(text="Internal use", showarrow=False)
        context.content = context.figure.to_plotly_json()
```

```toml
[project.entry-points."openbb_charting_hooks"]
watermark = "my_package.hooks:Watermark"
```

The content is computed before `post_figure` runs, so a hook that edits the figure should also refresh `context.content` for the change to reach REST responses.
