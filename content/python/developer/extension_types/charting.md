---
title: Charting Extensions
sidebar_position: 5
description: This page is a guide for adding custom views to any router endpoint that are included with the response object when the user sets `chart=True`.
keywords:
  - OBBject
  - Python
  - Development
  - OpenBB Platform
  - extensions
  - obbject extension
  - how-to
  - charting
  - Plotly
  - openbb-charting
---

import HeadTitle from "@site/src/components/General/HeadTitle.tsx";

<HeadTitle title="Charting Extensions - Developer | OpenBB Docs" />

Charts, or other custom view objects, can be added to any endpoint without needing to touch any source code.

Charting extensions rely on the `openbb-charting` package for route handling and registration.
Views for any installed endpoint can be created within the same extension.

The infrastructure is generally compatible with any JSON serializable object,
but some handling and helpers are optimized for Plotly Figure objects.

## Folder structure

```shell
obbject_example
├── README.md
├── openbb_empty_charting
│   └── __init__.py
├── poetry.lock
└── pyproject.toml
```

The `README.md` file can be completely empty, it just needs to exist.

Extension code will go directly in the `__init__.py` file.

### TOML File

The entry point for the extension is specified as a Poetry plugin, near the bottom of the file.

```toml
[tool.poetry.plugins."openbb_charting_extension"]
empty = "openbb_empty_charting:EmptyViews"
```

Where `EmptyViews` is a class, defined in `__init__.py`, with static methods for each endpoint view.

A complete `pyproject.toml` looks something like:

<details>
<summary mdxType="summary">`pyproject.toml`</summary>

```toml
[tool.poetry]
name = "openbb-empty-charting"
version = "0.0.1"
description = "An empty OBBject extension"
authors = ["Hello <hello@world.co>"]
readme = "README.md"
packages = [{ include = "openbb_empty_charting" }]

[tool.poetry.dependencies]
python = "^3.10,<3.14"
openbb-core = "*"
openbb-charting = "*"

[build-system]
requires = ["poetry-core"]
build-backend = "poetry.core.masonry.api"

[tool.poetry.plugins."openbb_charting_extension"]
empty = "openbb_empty_charting:EmptyViews"
```

</details>

:::important
Extension logic will map routers, and while not necessary to define as a dependency,
it is assumed that routers for specific endpoints are installed in the environment.

For example, `openbb-equity` should be installed if mapping to, `obb.equity.price.quote`.

To not rely on `openbb-charting`, add the plugin definition to a [Router extension](/python/developer/extension_types/router).
This has the effect of making the extension optional, because endpoint views will only be accessible when `openbb-charting` is installed.
:::

### Writing the Extension

In this example the extension code all lives inside `__init__.py`.

In reality, you'll probably want to structure the code folder as importable modules for each view.

:::info
The example below assumes the example, [`openbb-empty-router`](/python/developer/extension_types/router) extension is installed locally.

```python
>>> from openbb import obb

>>> obb.empty.hello()

OBBject[T]

id: 068fa8b2-968c-7059-8000-e6a8e3501eba
results: Hello from the Empty Router extension!
provider: None
warnings: None
chart: None
extra: {'metadata': {'arguments': {'provider_choices': {}, 'standard_params': {}, '...
```

:::

:::warning
`**kwargs` should be the only argument for the function.
:::

<details>
<summary mdxType="summary">Example Extension</summary>

```python
"""Empty Router Views."""

class EmptyViews:
    """Empty Views."""

    @staticmethod
    def empty_hello( # Map to any full router path like this, i.e, `etf_countries`
        **kwargs,
    ):
        """Empty Hello World Chart.

        Parameters
        ----------
        some_param: int
            This parameter is now under kwargs["extra_params"]["some_param"]
        """
        # pylint: disable=import-outside-toplevel

        # Import modules here instead of at the top of the file.

        # This is an object that can be used to return the results.
        # It accepts "fig", "content", and "format" as inputs.
        # Content is the JSON serialized representation returned to the API,
        # "fig" is the Python object holding the chart. 
        from openbb_core.app.model.charts.chart import Chart

        # This is the general purpose Figure object,
        # it is a subclass of plotly.graph_objects.Figure
        # It can be used to display content in a dedicated window
        # when `pywry` is installed from PyPI.
        from openbb_charting.core.openbb_figure import OpenBBFigure
        
        # Code will execute when router endpoint is called, and `chart=True`.

        print(kwargs)

        fig = OpenBBFigure()
        fig.add_bar(
            x=["A", "B", "C"], y=[1, 2, 3]
        )
        fig.update_layout(
            title="Hello Chart!",
            template="plotly_dark"
        )
        return Chart(
            fig=fig,  # Binary figure object
            content=fig.to_plotly_json(),  # JSON-econdable version.
            format="plotly"  # For user reference.
        )
```

</details>

<details>
<summary mdxType="summary">This results in:</summary>


```python
>>> res = obb.empty.hello(chart=True, some_param= 2)
{
    'extra_params': {'some_param': 2},
    'obbject_item': 'Hello from the Empty Router extension!',
    'charting_settings': <openbb_core.app.model.charts.charting_settings.ChartingSettings object at 0x10c73f610>,
    'standard_params': {},
    'provider': None,
    'extra': {}
}

>>> res

OBBject[T]

id: 068fac1e-e9fe-7037-8000-b993cc3e848f
results: Hello from the Empty Router extension!
provider: None
warnings: None
chart: {'content': {'data': [{'x': ['A', 'B', 'C'], 'y': [1, 2, 3], 'type': 'bar'}]...
extra: {'metadata': {'arguments': {'provider_choices': {}, 'standard_params': {}, '...
```

</details>

## **Kwargs

Kwargs is a dictionary with the function's results, user settings, and execution metadata.

Implemented methods intercept the execution before completion, and returning sets the `chart` attribute in the `OBBject` response object.

```
dict_keys(
    [
        'obbject_item', 'charting_settings', 'standard_params', 'extra_params', 'provider', 'extra'
    ]
)
```

- **`kwargs["obbject_item"]`**: The validated 'results' object in the final output.
- **`kwargs["charting_settings"]`**: [User settings](/python/settings/user_settings/preferences) are passed in for handling, if required.
- **`kwargs["standard_params"]`**: Parameters handled by the standard model, if any.
- **`kwargs["extra_params"]`**: All other parameters passed to the main function.
- **`kwargs["extra"]`**: [Metadata](/python/developer/how-to/annotated_results) returned by a [provider extension](/python/developer/extension_types/provider).


## Conveying Parameters

If chart generation is being parameterized, the best thing to do is include them in the main function. Alternatively, the docstring is available in the Python Interface with the `openbb-charting` method, `get_params`. This calls Python `help` on the function.

```python
Help on function empty_hello in module openbb_empty_charting:

empty_hello(**kwargs)
    Empty Hello World Chart.

    Parameters
    ----------
    some_param: int
        This parameter is now under kwargs["extra_params"]["some_param"]
```

## Usage

See the documentation [here](/python/extensions/infrastructure/openbb-charting) for usasge instructions and examples.
