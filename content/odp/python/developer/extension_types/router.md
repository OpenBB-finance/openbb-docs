---
title: Router Extensions
sidebar_position: 1
description: This page provides information about how to write router extensions for the OpenBB Python Package.
keywords:
  - ODP
  - Router
  - API
  - MCP
  - OBBject
  - Python
  - Development
  - OpenBB Platform
  - extensions
  - how-to
---

import HeadTitle from "@site/src/components/General/HeadTitle.tsx";

<HeadTitle title="Build Router Extensions - Developer | OpenBB Docs" />

A router extension refers to API endpoints, paths, and the namespaces within the Python Interface.
They are the exposed, user-facing, functions and power all of the interfaces - REST API, MCP, Notebook, etc.

Under the hood, router extension modules are instances of `fastapi.APIRouter`.

## Folder structure

```shell
router_example
├── README.md
├── openbb_empty_router
│   └── __init__.py
│   └── empty_router.py
├── poetry.lock
└── pyproject.toml
```

Extension code will go in the `empty_router.py` file, and `__init__.py` contains no code.

### TOML File

The entry point for the extension is specified as a Poetry plugin, near the bottom of the file.

<details>
<summary mdxType="summary">`pyproject.toml` </summary>
```toml
[tool.poetry]
name = "openbb-empty-router"
version = "0.0.0"
description = "An empty OpenBB Router extension"
authors = ["Hello <hello@world.com>"]
readme = "README.md"
packages = [{ include = "openbb_empty_router" }]

[tool.poetry.dependencies]
python = "^3.10,<3.14"
openbb-core = "*"

[build-system]
requires = ["poetry-core"]
build-backend = "poetry.core.masonry.api"

[tool.poetry.plugins."openbb_core_extension"]
empty = "openbb_empty_router.empty_router:router"
```
</details>

## Imports

Here's how to import the Router class, and initialize it.

```python
from openbb_core.app.model.obbject import OBBject
from openbb_core.app.router import Router

router = Router(prefix="", description="An Empty OpenBB Router Extension.")
```

:::note
The prefix will be determined by `pyproject.toml`

```toml
[tool.poetry.plugins."openbb_core_extension"]
empty = "openbb_empty_router.empty_router:router"
```

Router commands will be available under the namepsace, `obb.empty`
:::

### Provider Interface Imports

Routing an endpoint to the [Provider Interface](/odp/python/developer/extension_types/provider) requires other imports, and a distinct function signature.

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
```

## Endpoints

The `Router` instance is applied as a decorator, using `@router.command`.
There are two varities of endpoint, and endpoint's path will be the name of the function.

### Provider Interface

To implement a Provider metamodel, define the function as:

```python
# This uses the Provider Interface to call the empty provider fetcher.
@router.command(
    model="Empty", # This is the metamodel defined in the Provider's `fetcher_dict`.
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

### Basic - GET

A basic endpoint, where all business logic occurs within, will look like:

```python
# This is a standard router "get" command.
@router.command(methods=["GET"])
async def hello() -> (
    OBBject[str]
):
    """OpenBB Hello World."""
    return OBBject(results="Hello from the Empty Router extension!")
```

### Basic - POST

```python
from openbb_core.provider.abstract.data import Data

# This is a standard router "post" command.
@router.command(methods=["POST"])
async def hello(
  data: Data,  # Body parameter
  some_param: str  # Query parameter
) -> OBBject:
    """OpenBB Hello World."""
    return OBBject(results=data.model_dump())
```

### Decorator Parameters

The `@router.command` decorator will accept:

- **`methods`**: List of HTTP methods - typically `GET` or `POST`.
- **`model`**: A metamodel associated with a [`Provider`](/odp/python/developer/extension_types/provider) extension endpoint.
- **`deprecated`**: Instance of [`Deprecated`](/odp/python/developer/how-to/deprecating_endpoints).
- **`examples`**: List of API or Python [Examples](/odp/python/developer/how-to/examples).
- **`exclude_from_api`**: Include endpoint only in Python Interface.
- **`no_validate`**: Set as `True` to [ignore response validation](/odp/python/developer/how-to/disabling_output_validation) and treat as `Any`.
- **`openapi_extra`**: Dictionary of additional metadata to include in `openapi.json`.
  - Use this as an entrypoint for inline configurations of [`widget_config`](/odp/python/extensions/interface/openbb-api) or [`mcp_config`](/odp/python/extensions/interface/openbb-mcp)


### Using `fastapi.APIRouter`

The instance of `fastapi.APIRouter` can be accessed from the `router._api_router` attribute, and can be used directly as a normal, FastAPI, decorator.

```python
@router._api_router.get("/also_empty")
async def also_empty(param: str) -> str:
    """Also Emmpty"""
    return "Hello world!"
```
