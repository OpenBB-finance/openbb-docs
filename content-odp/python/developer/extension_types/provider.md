---
title: Provider Extensions
sidebar_position: 1
description: Build a provider extension with QueryParams, Data, and Fetcher classes, register it, and expose it under its own obb namespace.
keywords:
  - ODP
  - OpenBB V5
  - provider
  - Fetcher
  - QueryParams
  - Data
  - TET pattern
  - fetcher_dict
  - credentials
  - how-to
---

import HeadTitle from "@site/src/components/General/HeadTitle.tsx";

<HeadTitle title="Provider Extensions | OpenBB Python (V5)" />

This guide builds `openbb-demo`, a package that registers a provider named `demo` and a command `obb.demo.prices`. It follows the layout of the V5 data packages: the provider and the router that exposes it ship together. The TET pattern and the model-name lookup are described in [Architecture](../../concepts/architecture.mdx#the-provider-layer); this page only covers the steps.

## Project layout

```text
openbb-demo/
├── pyproject.toml
└── openbb_demo/
    ├── __init__.py
    ├── demo_router.py
    └── models/
        ├── __init__.py
        └── prices.py
```

`openbb_demo/models/__init__.py` can be empty. `openbb_demo/__init__.py` holds the `Provider`, and `demo_router.py` holds the commands.

## Define the models and fetcher

A model file contains three classes. `DemoPricesQueryParams` validates the inputs, `DemoPricesData` validates one output row, and `DemoPricesFetcher` connects them. `openbb_demo/models/prices.py`:

```python
"""Demo prices model."""

from datetime import date as dateType
from typing import Any

from openbb_core.provider.abstract.data import Data
from openbb_core.provider.abstract.fetcher import Fetcher
from openbb_core.provider.abstract.query_params import QueryParams
from pydantic import Field


class DemoPricesQueryParams(QueryParams):
    """Demo prices query."""

    symbol: str = Field(description="Symbol to get prices for.")
    start_date: dateType | None = Field(default=None, description="Start date.")


class DemoPricesData(Data):
    """Demo prices data."""

    __alias_dict__ = {"date": "d", "close": "c"}

    date: dateType = Field(description="Trading date.")
    symbol: str = Field(description="Symbol.")
    close: float = Field(description="Closing price.")
    change_percent: float | None = Field(
        default=None, description="Change from the prior close, as a normalized percent."
    )


class DemoPricesFetcher(Fetcher[DemoPricesQueryParams, list[DemoPricesData]]):
    """Demo prices fetcher."""

    require_credentials = False

    @staticmethod
    def transform_query(params: dict[str, Any]) -> DemoPricesQueryParams:
        """Validate the query."""
        return DemoPricesQueryParams(**params)

    @staticmethod
    async def aextract_data(
        query: DemoPricesQueryParams,
        credentials: dict[str, str] | None,
        **kwargs: Any,
    ) -> list[dict]:
        """Return raw rows."""
        return [
            {"d": "2025-01-02", "symbol": query.symbol, "c": 101.5, "changePercent": 0.012},
            {"d": "2025-01-03", "symbol": query.symbol, "c": 100.9, "changePercent": -0.0059},
        ]

    @staticmethod
    def transform_data(
        query: DemoPricesQueryParams,
        data: list[dict],
        **kwargs: Any,
    ) -> list[DemoPricesData]:
        """Validate rows."""
        rows = [DemoPricesData.model_validate(row) for row in data]
        if query.start_date:
            rows = [row for row in rows if row.date >= query.start_date]
        return rows
```

The rows here are static so the example runs offline. A real fetcher requests them in `aextract_data` with the helpers in [HTTP requests](../how-to/http_requests.mdx), passing `**kwargs` through so the user's request timeout applies. Implement `extract_data` instead for a synchronous source; if both exist, `aextract_data` is used. `__alias_dict__` maps the source keys `d` and `c` onto the field names, and `changePercent` needs no mapping because `Data` accepts camelCase keys for snake_case fields.

A fetcher can be run on its own, without installing anything, which is the quickest way to check it:

```python
import asyncio

from openbb_demo.models.prices import DemoPricesFetcher

rows = asyncio.run(DemoPricesFetcher.fetch_data({"symbol": "ABC"}, {}))
DemoPricesFetcher.test({"symbol": "ABC"}, {})
```

`fetch_data(params, credentials)` runs all three steps and returns the transformed rows. `test()` runs the same steps and asserts that each stage returns the declared types; it returns `None` when everything passes. [Tests](../how-to/tests.mdx) turns this into a recorded unit test.

## Register the provider

`openbb_demo/__init__.py` creates the `Provider` that the entry point points to:

```python
"""Demo provider."""

from openbb_core.provider.abstract.provider import Provider

from openbb_demo.models.prices import DemoPricesFetcher

demo_provider = Provider(
    name="demo",
    description="Demo prices for extension development.",
    website="https://example.com",
    fetcher_dict={"DemoPrices": DemoPricesFetcher},
)
```

`name` is the value callers pass as `provider="demo"`. Each `fetcher_dict` key is a model name that router commands refer to. The optional `repr_name` sets a display name and `instructions` tells users how to obtain credentials.

## Add a command

`openbb_demo/demo_router.py` exposes the model as a command. The signature and body are the same for every provider-backed command; only `model` and the function name change.

```python
"""Demo router."""

from openbb_core.app.model.command_context import CommandContext
from openbb_core.app.model.example import APIEx
from openbb_core.app.model.obbject import OBBject
from openbb_core.app.provider_interface import (
    ExtraParams,
    ProviderChoices,
    StandardParams,
)
from openbb_core.app.query import Query
from openbb_core.app.router import Router

router = Router(prefix="", description="Demo data.")


@router.command(
    model="DemoPrices",
    examples=[APIEx(parameters={"symbol": "ABC", "provider": "demo"})],
)
async def prices(
    cc: CommandContext,
    provider_choices: ProviderChoices,
    standard_params: StandardParams,
    extra_params: ExtraParams,
) -> OBBject:
    """Get daily closing prices."""
    return await OBBject.from_query(Query(**locals()))
```

If no installed provider registers the `model` name, the command is skipped when routers load. Set `OPENBB_DEBUG_MODE=true` to see a warning naming the missing model. [Router extensions](router.md) covers the other decorator options.

## Declare the entry points

`pyproject.toml` registers the provider and the router. The two entry-point names do not have to match, but keeping them the same makes `provider="demo"` and `obb.demo` line up.

```toml
[project]
name = "openbb-demo"
version = "0.1.0"
requires-python = ">=3.10"
dependencies = ["openbb-core[pandas]>=2.0.0"]

[project.entry-points."openbb_provider_extension"]
demo = "openbb_demo:demo_provider"

[project.entry-points."openbb_core_extension"]
demo = "openbb_demo.demo_router:router"

[build-system]
requires = ["hatchling"]
build-backend = "hatchling.build"

[tool.hatch.build.targets.wheel]
packages = ["openbb_demo"]
```

## Install and call it

Install the package in editable mode in an environment that has `openbb-core`, then rebuild the Python Interface:

```bash
pip install -e .
openbb-build
```

```python
from openbb import obb

output = obb.demo.prices(symbol="ABC", start_date="2025-01-03")
output.results
```

```text
[DemoPricesData(date=2025-01-03, symbol=ABC, close=100.9, change_percent=-0.0059)]
```

`demo` is the only provider for `DemoPrices`, so `provider` defaults to it. Because the models do not inherit from a standard model, `symbol` and `start_date` are keyword arguments on the generated method; the next section changes that. The REST API serves the same command at `/api/v1/demo/prices` without a rebuild:

```bash
uvicorn openbb_core.api.rest_api:app --port 8000
curl "http://127.0.0.1:8000/api/v1/demo/prices?symbol=ABC"
```

Rebuild with `openbb-build` whenever a model field, command signature, or `fetcher_dict` key changes. Edits inside fetcher methods apply on the next call. [Packaging](../../concepts/packaging.mdx) explains the rule.

## Build on a standard model

Inheriting from a model in `openbb_core.provider.standard_models` gives the standard fields their shared names, descriptions, and validators, and makes them named parameters on the generated method. Fields you add remain provider-specific. This fetcher builds on `EquityHistorical`:

```python
"""Demo equity historical model."""

from typing import Any, Literal

from openbb_core.provider.abstract.fetcher import Fetcher
from openbb_core.provider.standard_models.equity_historical import (
    EquityHistoricalData,
    EquityHistoricalQueryParams,
)
from pydantic import Field


class DemoEquityHistoricalQueryParams(EquityHistoricalQueryParams):
    """Demo equity historical query."""

    interval: Literal["1d", "1w"] = Field(default="1d", description="Bar interval.")


class DemoEquityHistoricalData(EquityHistoricalData):
    """Demo equity historical data."""

    __alias_dict__ = {
        "date": "t",
        "open": "o",
        "high": "h",
        "low": "l",
        "close": "c",
        "volume": "v",
    }


class DemoEquityHistoricalFetcher(
    Fetcher[DemoEquityHistoricalQueryParams, list[DemoEquityHistoricalData]]
):
    """Demo equity historical fetcher."""

    require_credentials = False

    @staticmethod
    def transform_query(params: dict[str, Any]) -> DemoEquityHistoricalQueryParams:
        """Validate the query."""
        return DemoEquityHistoricalQueryParams(**params)

    @staticmethod
    async def aextract_data(
        query: DemoEquityHistoricalQueryParams,
        credentials: dict[str, str] | None,
        **kwargs: Any,
    ) -> list[dict]:
        """Return raw bars."""
        return [
            {"t": "2025-01-02", "o": 100, "h": 102, "l": 99, "c": 101.5, "v": 12000},
            {"t": "2025-01-03", "o": 101.5, "h": 101.8, "l": 100.2, "c": 100.9, "v": 9000},
        ]

    @staticmethod
    def transform_data(
        query: DemoEquityHistoricalQueryParams,
        data: list[dict],
        **kwargs: Any,
    ) -> list[DemoEquityHistoricalData]:
        """Validate bars."""
        return [DemoEquityHistoricalData.model_validate(row) for row in data]
```

Register it as `"DemoEquityHistorical": DemoEquityHistoricalFetcher` in `fetcher_dict` and add a command with `model="DemoEquityHistorical"`, named `historical`, to the router. After a rebuild, `obb.demo.historical` has `symbol`, `start_date`, and `end_date` in its signature and takes `interval` as a keyword argument. The standard model's validator also upper-cases `symbol`. [Standardization](../standardization.mdx) explains why V5 packages use a provider-prefixed model name like this rather than the bare standard name.

## Require credentials

List credential names on the provider, and the engine prefixes each with the provider name:

```python
demo_provider = Provider(
    name="demo",
    description="Demo prices for extension development.",
    website="https://example.com",
    credentials=["api_key"],
    fetcher_dict={"DemoPrices": DemoPricesFetcher},
)
```

Users then set `demo_api_key`, for example with `obb.user.credentials.demo_api_key = "..."` or the `DEMO_API_KEY` environment variable; [Credentials](../../user-guide/credentials.mdx) lists every option. The fetcher receives the value as a plain string in `credentials["demo_api_key"]`. Before a fetcher runs, the engine raises an `OpenBBError` naming any missing credential. Setting `require_credentials = False` on a fetcher, as in the examples above, skips that check for that fetcher and passes whatever credentials are set.

## Report errors

Raise `EmptyDataError` from `openbb_core.provider.utils.errors` when a request succeeds but returns nothing, `UnauthorizedError` from the same module when the source rejects the credentials, and `OpenBBError` from `openbb_core.app.model.abstract.error` for other failures the caller can act on. The REST API maps them to status codes 204, 502, and 400. Any other exception becomes a 500. [Warnings and errors](../../user-guide/warnings-and-errors.mdx) shows how callers see them.
