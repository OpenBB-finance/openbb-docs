---
title: Router Extensions
sidebar_position: 2
description: Add commands to obb and routes to the REST API with a router extension, including GET and POST commands, sub-routers, and @router.command options.
keywords:
  - ODP
  - OpenBB V5
  - Router
  - router.command
  - API
  - MCP
  - OBBject
  - sub-router
  - how-to
---

import HeadTitle from "@site/src/components/General/HeadTitle.tsx";

<HeadTitle title="Router Extensions | OpenBB Python (V5)" />

A router extension adds a namespace to `obb` and the same commands as REST routes. This guide builds `openbb-my-tools`, registered as `my_tools`, with two commands that compute their results directly and one in a sub-router. Commands that fetch data through a provider are covered in [Provider extensions](provider.md#add-a-command); to register an existing FastAPI app instead, see [From FastAPI](from_fastapi.md).

## Package and entry point

```text
openbb-my-tools/
├── pyproject.toml
└── openbb_my_tools/
    ├── __init__.py
    └── my_tools_router.py
```

```toml
[project]
name = "openbb-my-tools"
version = "0.1.0"
requires-python = ">=3.10"
dependencies = ["openbb-core[pandas]>=2.0.0"]

[project.entry-points."openbb_core_extension"]
my_tools = "openbb_my_tools.my_tools_router:router"

[build-system]
requires = ["hatchling"]
build-backend = "hatchling.build"

[tool.hatch.build.targets.wheel]
packages = ["openbb_my_tools"]
```

The entry-point name sets the namespace, `obb.my_tools` and `/api/v1/my_tools`. Leave the top-level router's `prefix` empty; set a prefix only on sub-routers.

## Write commands

Each function decorated with `@router.command` becomes one command. Its path is `/` plus the function name, its HTTP method defaults to `GET`, and its parameters become both Python arguments and REST query parameters. `openbb_my_tools/my_tools_router.py`:

```python
"""My tools router."""

from typing import Any

from openbb_core.app.model.example import APIEx
from openbb_core.app.model.obbject import OBBject
from openbb_core.app.router import Router
from openbb_core.provider.abstract.data import Data
from openbb_core.provider.abstract.query_params import QueryParams
from pydantic import Field

router = Router(prefix="", description="Utility commands.")


@router.command(
    methods=["GET"],
    examples=[APIEx(parameters={"bid": 99.5, "ask": 100.5})],
)
async def spread(bid: float, ask: float) -> OBBject[dict[str, Any]]:
    """Calculate the mid price and spread of a quote."""
    return OBBject(results={"mid": (bid + ask) / 2, "spread": ask - bid})


class SummaryQueryParams(QueryParams):
    """Summary query."""

    data: list[Data] = Field(description="Input rows.")
    target: str = Field(default="close", description="Column to summarize.")


class SummaryData(Data):
    """Summary of one column."""

    count: int = Field(description="Number of values.")
    mean: float = Field(description="Arithmetic mean.")


@router.command(
    methods=["POST"],
    examples=[APIEx(parameters={"target": "close", "data": APIEx.mock_data("timeseries")})],
)
async def summary(params: SummaryQueryParams) -> OBBject[SummaryData]:
    """Count and average one column of the input rows."""
    values = [getattr(row, params.target) for row in params.data]
    return OBBject(results=SummaryData(count=len(values), mean=sum(values) / len(values)))
```

`spread` is a GET command with two query parameters. `summary` is a POST command that takes one `QueryParams` model as its request body. The package builder flattens that model into keyword arguments, so the Python call is `obb.my_tools.summary(data=rows, target="close")`. A field typed `list[Data]` named `data` also accepts a pandas DataFrame or Series, a NumPy array, a dict, or a list of records in the Python Interface; over REST it is a JSON array of records. This is the pattern the `technical` and `quantitative` extensions use.

Return an `OBBject` to get captured warnings, execution metadata, chart support, and the `to_dataframe()` family of methods. A command may also return a Pydantic model or plain value, which both interfaces pass through as returned. Write the docstring for the user: it becomes the command description in the generated Python docstring and in the OpenAPI schema.

## Add a sub-router

A sub-router is a `Router` with its own prefix, included into the top-level router. Its commands appear one level down:

```python
stats = Router(prefix="/stats", description="Statistics.")


@stats.command(methods=["GET"])
async def double(value: float) -> OBBject[float]:
    """Double a number."""
    return OBBject(results=value * 2)


router.include_router(stats)
```

This command is `obb.my_tools.stats.double(value=2)` and `GET /api/v1/my_tools/stats/double?value=2`. The `description` becomes the namespace docstring and the OpenAPI tag description.

## Decorator options

`model` connects the command to provider fetchers. The function must then accept `cc: CommandContext`, `provider_choices: ProviderChoices`, `standard_params: StandardParams`, and `extra_params: ExtraParams`; a missing or mistyped parameter raises an error when the router loads. `examples` takes a list of `APIEx` and `PythonEx` objects, described in [Function examples](../how-to/examples.mdx). `deprecated=True` with a `deprecation=OpenBBDeprecationWarning(...)` marks the command as deprecated, covered in [Deprecating endpoints](../how-to/deprecating_endpoints.mdx). `no_validate=True` turns off response validation, covered in [Disabling output validation](../how-to/disabling_output_validation.mdx).

`widget_config` and `mcp_config` take dictionaries that configure how the command appears in OpenBB Workspace and in the MCP server; see [OpenBB API](../../extensions/interface/openbb-api.mdx) and [OpenBB MCP](../../extensions/interface/openbb-mcp.mdx). Both are stored in the route's `openapi_extra`, which you can also pass directly for other metadata.

Any other keyword is passed to FastAPI's `add_api_route`. `path` overrides the default path, `methods` accepts any HTTP methods, and `include_in_schema=False` keeps a route callable over REST but hides it from the OpenAPI schema and leaves it out of the Python Interface. The `famafrench` router uses that for its `factor_choices` endpoint, which only exists to populate Workspace dropdowns.

The underlying `fastapi.APIRouter` is available as `router.api_router`. Routes added with its own decorators, such as `@router.api_router.get("/raw")`, are served and appear in the Python Interface, but they skip the handling `@router.command` adds, including examples and the `widget_config` and `mcp_config` shortcuts.

## Install and call

```bash
pip install -e .
openbb-build
```

```python
from openbb import obb

obb.my_tools.spread(bid=99.5, ask=100.5).results
obb.my_tools.stats.double(value=2).results
```

The first call returns `{'mid': 100.0, 'spread': 1.0}` and the second returns `4.0`. The REST API serves the routes without a rebuild:

```bash
curl "http://127.0.0.1:8000/api/v1/my_tools/spread?bid=99.5&ask=100.5"
```

Run `openbb-build` again after adding, removing, or renaming commands or changing their parameters.
