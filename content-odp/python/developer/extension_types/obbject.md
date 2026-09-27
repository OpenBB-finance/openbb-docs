---
title: OBBject Extensions
sidebar_position: 4
description: Add accessor methods and properties to every OBBject returned by the Python Interface with an OBBject extension.
keywords:
  - ODP
  - OpenBB V5
  - OBBject
  - Extension
  - obbject_accessor
  - accessor
  - openbb_obbject_extension
  - how-to
---

import HeadTitle from "@site/src/components/General/HeadTitle.tsx";

<HeadTitle title="OBBject Extensions | OpenBB Python (V5)" />

An OBBject extension adds a named accessor to every [`OBBject`](../../concepts/obbject.mdx), the same way pandas accessors add `df.<name>`. Accessors run in the Python Interface after a command returns; the REST API returns JSON and does not use them. To run code on command output before it is returned, on both interfaces, write an [OBBject plugin](plugins.md) instead.

This guide builds `openbb-result-tools`, which registers two accessors.

## Write the accessors

An `Extension` instance names the accessor, and its `obbject_accessor` decorator registers either a function or a class under that name. `openbb_result_tools/__init__.py`:

```python
"""Result helpers."""

from openbb_core.app.model.extension import Extension
from openbb_core.app.model.obbject import OBBject

row_count_ext = Extension(name="row_count", description="Number of result rows.")


@row_count_ext.obbject_accessor
def row_count(obbject: OBBject) -> int:
    """Return the number of rows in the results."""
    return len(obbject.results or [])


tools_ext = Extension(name="tools", description="Helpers for command results.")


@tools_ext.obbject_accessor
class Tools:
    """Methods available as obbject.tools."""

    def __init__(self, obbject: OBBject):
        """Bind to a command result."""
        self._obbject = obbject

    def last(self):
        """Return the last row of the results."""
        return self._obbject.results[-1]

    def describe(self):
        """Return summary statistics of the numeric columns."""
        return self._obbject.to_dataframe().describe()
```

A decorated function receives the `OBBject` and its return value becomes the attribute, so `output.row_count` reads like a property. A decorated class is instantiated with the `OBBject`, and its methods are called through the attribute, as in `output.tools.describe()`. In both cases the accessor is created on first access and cached on that `OBBject`.

Choose a name that does not clash with an existing method. Registering `to_dataframe` or `show`, for example, replaces the built-in and emits a `UserWarning`. `OBBject.accessors` lists the names currently registered.

## Register the entry points

Each `Extension` instance needs its own entry point in the `openbb_obbject_extension` group:

```toml
[project]
name = "openbb-result-tools"
version = "0.1.0"
requires-python = ">=3.10"
dependencies = ["openbb-core[pandas]>=2.0.0"]

[project.entry-points."openbb_obbject_extension"]
row_count = "openbb_result_tools:row_count_ext"
tools = "openbb_result_tools:tools_ext"

[build-system]
requires = ["hatchling"]
build-backend = "hatchling.build"

[tool.hatch.build.targets.wheel]
packages = ["openbb_result_tools"]
```

Entry points in this group that resolve to anything other than an `Extension` are ignored.

## Install and use

```bash
pip install -e .
```

Accessors are registered when `openbb` is imported, so they apply to every command's output without any change to the commands:

```python
from openbb import obb

output = obb.famafrench.factors(frequency="annual")
output.row_count
output.tools.last()
output.tools.describe()
```

Accessors do nothing on their own when no router extension is installed, because there are no commands whose output they can attach to.

## Credentials

An extension that calls an external service can declare credential names with `Extension(name=..., credentials=["my_service_api_key"])`. The names are added to the user credentials model unchanged, not prefixed, so users set them like provider keys, for example `obb.user.credentials.my_service_api_key`. Credentials are grouped under the extension's entry-point name, so do not reuse a provider's name for an OBBject extension's entry point in the same environment; the extension's credentials are skipped with a warning when the names collide.
