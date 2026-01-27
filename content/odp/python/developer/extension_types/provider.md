---
title: Provider Extensions
sidebar_position: 3
description: This page provides information about how to write provider extensions for the OpenBB Python Package using the ETL pattern, and how to add them to Routers as endpoints.
keywords:
  - ODP
  - Provider
  - Data
  - Standardization
  - ETL
  - Router
  - API
  - OBBject
  - Python
  - Development
  - OpenBB Platform
  - extensions
  - endpoints
  - how-to
---

import HeadTitle from "@site/src/components/General/HeadTitle.tsx";

<HeadTitle title="Build Provider Extensions - Developer | OpenBB Docs" />

A provider extension refers to a specific source of data.
Each endpoint can be serviced by multiple providers,
and shared parameters or data fields are considered as "standard" items.

:::important
By themselves, provider extensions do not map to any specific endpoint or API route.

Instead, they map to metamodels and the router function references a model through a specific pattern.
:::

## Folder structure

```shell
provider_example
├── README.md
├── openbb_empty_provider
│   └── __init__.py
│   └── models
│       └── __init__.py
│       └── empty_model.py
│   └── utils
│       └── __init__.py
│       └── helpers.py
├── poetry.lock
└── pyproject.toml
```

The main `__init__.py` file will initialize a `Provider` class and map all of the models to the metamodels referenced in router endpoints.

## TOML File

The entry point for the extension is specified as a Poetry plugin, near the bottom of the file.

```toml
[tool.poetry.plugins."openbb_provider_extension"]
empty = "openbb_empty_provider:empty_provider"
```

<details>
<summary mdxType="summary">`pyproject.toml`</summary>
```toml
[tool.poetry]
name = "openbb-empty-provider"
version = "0.0.0"
description = "Empty provider extension for OpenBB"
authors = ["Hello <hello@world.co>"]
readme = "README.md"
packages = [{ include = "openbb_empty_provider" }]

[tool.poetry.dependencies]
python = "^3.10,<3.14"
openbb-core = "*"

[build-system]
requires = ["poetry-core"]
build-backend = "poetry.core.masonry.api"

[tool.poetry.plugins."openbb_provider_extension"]
empty = "openbb_empty_provider:empty_provider"
```

</details>

## Provider Definition

Open or create the main `__init__.py` file with a code editor.

Initialize an instance of the `Provider` class by naming the local variable as `{name}_provider`.
This should be the same as what was defined in `pyproject.toml`

:::tip
`__init__.py` requires imports which may not have been built yet.

Install the extension with an empty `fetcher_dict` field - `fetcher_dict={}` - then add them when ready.

When installing the extension, adding or changing items in the `fetcher_dict`, you must run `openbb-build` from the command line before using the Python Interface.
:::

```python
from openbb_core.provider.abstract.provider import Provider
from openbb_empty_provider.models.empty_model import EmptyFetcher


empty_provider = Provider(
    name="empty",
    website="http://empty.io",
    description="""The empty provider is a supplier of promises.""",
    # credentials=["api_key"],  # Credentials added here are mapped to `user_settings.json` in the `credentials` key.
    # Don't do "empty_api_key" here, the `name` will prefix whatever items are listed in the credentials field.
    fetcher_dict={
        "EmptyModel": EmptyFetcher  # The key is mapped to in @router.command(model="EmptyModel", methods=["GET"])
    },
)
```

## Provider Model

Provider data pipelines use the [`Fetcher`](/odp/python/developer/architecture_overview#fetcher-class) class to transform and validate user input, extract raw data from the source, and transform the data into serializable content.

Transformed data will be ready to load into a database or use by downstream processes.

The entire file consists of three classes, and it can be executed asynchronously without initialization.

- `QueryParams`
- `Data`
- `Fetcher`

### Standard Models

If an endpoint is shared between multiple providers, they are likely to have some common ground.

In this case, the metamodel will represent the standard, and the providers shall inherit from the standard.

A standard model will have only `QueryParams` and `Data`, both are a subclass of `pydantic.BaseModel`.

<details>
<summary mdxType="summary">Example Standard Model</summary>
```python
"""Some Time Series Standard Model"""

from datetime import date as dateType

from openbb_core.provider.abstract.data import Data
from openbb_core.provider.abstract.query_params import QueryParams
from pydantic import Field

class SomeTimeSeriesQueryParams(QueryParams):
    """Some Time Series Query Params"""
    symbol: str = Field(
        description="Ticker symbol for the time series."
    )
    start_date: dateType | None = Field(
        default=None,
        description="Start date of the data.",
    )
    end_date: dateType | None = Field(
        default=None,
        description="End date of the data.",
    )

class SomeTimeSeriesData(Data):
    """Some Time Series Data"""

    date: dateType = Field(
        description="Date of the data.",
    )
    symbol: str = Field(
        description="Symbol for the data.",
    )
    value: float = Field(
        description="End of day value of the symbol."
    )
```
</details>

The provider should then inherit from this model, prefixing the name with itself.

```python
class EmptySomeTimeSeriesQueryParams(SomeTimeSeriesQueryParams):
    """Empty Some Time Series Query Params"""
    # No `pass` required if no additional parameters are added.


# Add additional fields, or modify the standard model definition to suit.

class EmptySomeTimeSeriesData(SomeTimeSeriesData):
    """Empty Some Time Series Data"""

    unit: str | None = Field(
        default=None,
        description="Unit of measurement represented by the value."
    )
```

:::info
The resulting function signature will register these parameters as `extra_params`, but their definitions will display in the docstring and `reference` metadata. Required provider parameters may appear as `Optional` in docstrings, but their inputs will be validated using the model at execution.
:::

### Fetcher

Next, build the `Fetcher` class. Use the code block below as a template, the structure and signatures will always be similar.
Most of the business logic happens in one of, `extract_data` or `aextract_data`.

A Fetcher divides the process into three distinct sections:

- Transform Query
  - Validates the user input against the QueryParams model.
- Extract Data
  - Gets the raw data (or as close to raw as possible) from the source.
- Transform Data
  - Validate the data against the Data model and return the results.
  - Output is returned to the user under `OBBject.results`.

<details>
<summary mdxType="summary">Example Fetcher Code</summary>
```python
class EmptySomeTimeSeriesFetcher(
    Fetcher[
        EmptySomeTimeSeriesQueryParams,
        list[
            EmptySomeTimeSeriesData
        ],  # Remove list if returning a single record or dictionary
    ]
):
    """Some Time Series Fetcher."""

    # Use this to disable the requirement of credentials for this endpoint
    # and provider, if applicable.

    # require_credentials = False

    @staticmethod
    def transform_query(params: dict) -> EmptySomeTimeSeriesQueryParams:
        """Transform query params."""
        transformed_params = params.copy()
        # if transformed_params.get("some_param"):
        #     do something with it here.
        # and use field_validator in the model to set defaults.
        return EmptySomeTimeSeriesQueryParams(**transformed_params)

    @staticmethod
    async def aextract_data(
        query: EmptySomeTimeSeriesQueryParams,
        credentials: dict | None,
        **kwargs,
    ) -> list:  # Typing here should match the 'data' input of 'transform_data'.
        """Extract data."""
        # pylint: disable=import-outside-toplevel
        # from openbb_core.provider.utils.helpers import (
        #    make_request,
        #    amake_request,
        #    amake_requests,
        #    get_querystring,
        #    get_requests_session,
        #    get_async_requests_session,
        # )
        # Use these to make HTTP requests.
        # Always lazy-load imports inside functions to avoid circular imports
        # and to speed up initial load time of the application.

        # Example of making a request
        # url = "https://example.com/api"
        # querystring = get_querystring(
        #     {
        #         "symbol": query.symbol,
        #         "start_date": query.start_date,
        #         "end_date": query.end_date,
        #         # Add other parameters here
        #     }
        # )
        #
        # headers = {
        #     "Authorization": f"Bearer {credentials['empty_api_key']}"
        # } if credentials else ""
        #
        # response = await amake_request(url, headers=headers, params=querystring)
        #
        # data = response.json()
        #
        # Process the data into a list of EmptySomeTimeSeriesData
        data = [
            {
                "date": dateType(2023, 1, 1),
                "symbol": query.symbol,
                "value": 100.0,
                "unit": "USD",
            },
            {
                "date": dateType(2023, 1, 2),
                "symbol": query.symbol,
                "value": 101.5,
                "unit": "USD",
            },
            # Add more records as needed
        ]

        return data

    @staticmethod
    def transform_data(
        query: EmptySomeTimeSeriesQueryParams, data: list, **kwargs: Any
    ) -> list[EmptySomeTimeSeriesData]:
        """Transform data."""
        # Here you can clean and validate the data as needed.
        # The model should do most of the heavy lifting.
        return [EmptySomeTimeSeriesData.model_validate(item) for item in data]

# This is the complete model, it can be executed with:
# result = await EmptySomeTimeSeriesFetcher.fetch_data({}, {})
# Where the first dict is the query parameters, and the second is the credentials.
# If no credentials are required, use an empty dict.
```
</details>


## Add to Endpoint

Mapping the model to a router endpoint requires installing or building a [router extension](/odp/python/developer/extension_types/router).

The function definition itself is copy/pastable and repeatable, where the only thing that changes is the metamodel referenced in the `@router.command` decorator.

<details>
<summary mdxType="summary">Example Router Function</summary>

```python
from openbb_core.app.model.command_context import CommandContext
from openbb_core.app.model.example import APIEx, PythonEx
from openbb_core.app.model.obbject import OBBject
from openbb_core.app.provider_interface import (
    ExtraParams,
    ProviderChoices,
    StandardParams,
)
from openbb_core.app.query import Query
from openbb_core.app.router import Router

router = Router(prefix="", description="An Empty OpenBB Router Extension.")

# This uses the Provider Interface to call the empty provider fetcher.
@router.command(
    model="EmptyModel",  # <-- metamodel name goes here
    examples=[
        APIEx(parameters={"provider": "empty"}),
        PythonEx(
            description="Say Hello.",
            code=[
                "result = obb.empty.hello()",
            ],
        ),
    ],
)
async def empty_function(
    cc: CommandContext,
    provider_choices: ProviderChoices,
    standard_params: StandardParams,
    extra_params: ExtraParams,
) -> OBBject:
    """An empty function using the Provider Interface."""
    return await OBBject.from_query(Query(**locals()))
```

</details>

### Rebuild Static Assets

After modifying the router mappings, rebuild the Python static assets.

```sh
openbb-build
```
