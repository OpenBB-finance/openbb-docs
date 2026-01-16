---
title: From FastAPI
sidebar_position: 2
description: This page explains how to convert an existing FastAPI application to an ODP Python Package, without changing any code.
keywords:
  - ODP
  - Router
  - FastAPI
  - APIRouter
  - API
  - Python
  - Development
  - OpenBB Platform
  - extensions
  - how-to
---

import HeadTitle from "@site/src/components/General/HeadTitle.tsx";

<HeadTitle title="Converting FastAPI Apps - Developer | OpenBB Docs" />

This page explains how to convert an existing FastAPI application to an ODP Python Package, without changing any code.

All that's required is defining the entry point in `pyproject.toml`, directed to an instance of either, `fastapi.FastAPI` or `fastapi.APIRouter`.

:::tip
If you are already familiar with FastAPI, this is an excellent way to get started making OpenBB Python Package extensions. 
:::

Each API route (GET or POST) will be added to the `obb` Python package under the assigned name - `i.e, obb.my_app.some_function` - and will be an equivalent to
the REST API endpoint.
The resulting app will be an independent module that does not require a server.
They will combine and operate like any other ODP [router](/python/developer/extension_types/router).

## Add Dependency

Add `openbb-core` (version pinning is not recommended, use the latest or `>=1.5.5`) to the project's dependencies.

:::info
If not already in your environment, this will introduce Numpy, Pandas, and Uvicorn.
:::

## Entry Point

In, `pyproject.toml`, add a section where the object to the right of the colon is the configured instance of `FastAPI` or `APIRouter`.

ODP Python uses Poetry as the build tool, but you can use any PEP 517-compliant build backend.

### Poetry

```toml
[tool.poetry.plugins."openbb_core_extension"]
my_app = "my_package.app:app"
```

### Standard

```toml
[project.entry-points."openbb_core_extension"]
my_app = "my_package.app.some_router:router"
```

:::note
Factory functions are not supported. A configured instance must exist on package initialization.
:::

## Install

The extension must be installed for it to be recognized, use your preferred method of installation. Installing as editable is recommended for development and testing.

```sh
pip install -e .
```

## Build

The API can be started [immediately](/python/quickstart/rest_api); but, to use as a Python package, the static assets must be built.

From the command line, enter:

```sh
openbb-build
```

### Import

Upon completion, it is ready to use. Import the package with:

```sh
from openbb import obb

print(obb.my_app)
```

## Known Limitations

The Python interface will be nearly identical to its REST equivalent,
with some notable differences and technical limitations.

Primarily, the client/server relationship does not exist within the Python interface.

### Auth Hooks

- Authorization hooks will not be injected into the Python static assets,
functions are expected to operate without authorization.

### Dependency Injections

- Request-bound dependnecies, or those returning `None`, will not be injected.

- Command execution may fail where endpoints require access to the `Request` or `Headers`.
  - Additional handling may be required if endpoint code explicitly accesses these objects as locals.

- All other dependencies are injected into the static assets as locals.

### Streaming Endpoints

- Websockets are not currently supported. They will still be part of the REST API, but no Swagger docs will be generated, and they will be excluded from the Python interface.

- Streaming responses (one-way communication) will work, but are not officially supported and may have unexpected outcomes.

### Multi-Method API Routes

- API routes with multiple methods (e.g., `/my_app/some_function` has both `GET` and `POST` operations) may not generate correctly.
  - Consider implementing the methods as API path parameters.

## Tips & Workarounds

If you are having trouble building the static assets for a full application, consider targeting individual routers or wrapping functions in an instance of `fastapi.APIRouter`. This will help isolate and identify any problematic endpoints. 

Rich metadata for each function will be generated and stored under `obb.reference`.
Parameters and Returns sections of docstrings will be automatically generated from model definitions and annotations.
For best results, use descriptive Pydantic models.

## Troubleshooting

Some issues may be resolved by installing the latest version of `openbb-core`. 

If `openbb-build` results in an error and does not complete, check the error message for clues. For a verbose output, set the environment variable, `OPENBB_DEBUG_MODE='1'` and run it again.

Encountered errors may be related to module imports, function signatures, docstrings, or type annotations.

If `openbb-build` succeeds, and you encounter an import error, after `from openbb import obb`, the static assets may have been corrupted.
Enable debug mode, run `openbb-build` again and inspect the final result.

If build and import were successful but an error occurs on accessing the application property, there may have been a linting error.
Try, `pip install -U ruff black`, and then run `openbb-build` again.
If it persists, make note of the complete error and inspect the static assets. Adjust function annotations and types to further diagnose.

### Static Assets Location

You can inspect the resulting files, which are found in the `site-packages` folder of the environment. The relative path is:

```sh
/site-packages/openbb/package/
```

If the issue cannot be resolved with changes to your code, please open an issue on [GitHub](https://github.com/OpenBB-finance/OpenBB/issues)
with the full error messages, original vs. generated snippets, along with any other environment and platform context.
