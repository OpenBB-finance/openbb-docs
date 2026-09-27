---
title: From FastAPI
sidebar_position: 3
description: Register an existing FastAPI app or APIRouter as an OpenBB router extension, and what changes when its routes run in the Python Interface.
keywords:
  - ODP
  - OpenBB V5
  - FastAPI
  - APIRouter
  - Flask
  - openbb_core_extension
  - router
  - how-to
---

import HeadTitle from "@site/src/components/General/HeadTitle.tsx";

<HeadTitle title="From FastAPI | OpenBB Python (V5)" />

An existing FastAPI application becomes an OpenBB extension without code changes. Point an `openbb_core_extension` entry point at a configured `fastapi.FastAPI` or `fastapi.APIRouter` instance, install the package, and each route is served by the OpenBB REST API and generated as a method on `obb`. [Quick start (Developer)](../../quickstart/developer.mdx) walks through a minimal example; this page covers the details and the limits.

## Register the entry point

Add `openbb-core` to the project's dependencies and declare the entry point:

```toml
[project]
dependencies = ["openbb-core>=2.0.0"]

[project.entry-points."openbb_core_extension"]
my_app = "my_package.app:app"
```

The object after the colon must exist when the module is imported. Factory functions are not called, so an entry point that resolves to a function is skipped. A `FastAPI` app contributes its router; an `APIRouter` is used directly. The entry-point name, `my_app` here, becomes the namespace: a route at `/prices` becomes `obb.my_app.prices()` and `/api/v1/my_app/prices`. Any build backend that writes standard entry-point metadata works.

## Install, build, and import

```bash
pip install -e .
openbb-build
```

```python
from openbb import obb

obb.my_app
```

The REST API picks up the routes on its next start without a build. The build is only for the Python Interface. It generates each method's signature from the route's parameters and its docstring from the route's description and models, and it adds the routes to `obb.reference`. Pydantic models with field descriptions produce more useful docstrings than bare types.

## How routes behave in the Python Interface

The Python Interface calls the route function directly, without an HTTP request, so anything that depends on the request needs attention.

Dependencies declared with `Depends()` are resolved in-process when possible. A dependency whose own parameters are headers, cookies, query parameters, or plain values has those parameters added to the generated method and called with them, so an `x-api-key` header dependency becomes an `x_api_key` argument. A dependency that needs a `Request`, `Response`, or `WebSocket` object, or that nests another `Depends()`, cannot be resolved without a request. Avoid reading the request object inside handlers you want to call from Python.

Authentication applied by the REST server does not run in the Python Interface; the caller is already inside the process.

WebSocket routes are served by the REST API but are not generated in the Python Interface. A handler that returns a Starlette `StreamingResponse` is returned in Python as an [`OBBStream`](../../concepts/streaming.mdx) over the response body, and over REST the response is forwarded unchanged.

The Python Interface identifies commands by path, so two routes with the same path and different HTTP methods produce one method. Give each operation its own path, or use a path parameter. Routes declared with `include_in_schema=False` are left out of the Python Interface.

## Flask applications

With the `flask` extra installed (`pip install "openbb-core[flask]"`), an `openbb_core_extension` entry point can also point to a Flask app. The REST API mounts it at `/api/v1/<entry-point name>` and merges its routes into the OpenAPI schema. Flask apps are not added to the Python Interface.

## Troubleshooting

If `openbb-build` fails, set `OPENBB_DEBUG_MODE=true` and run it again for the full traceback. Errors usually point to an import that fails outside the server, or to a type annotation that cannot be written into generated code. Building from Python with `openbb.build(lint=False)` skips the ruff pass, which separates generation errors from lint errors. If the problem is hard to isolate in a large app, register one `APIRouter` at a time.

The generated files are in the environment's `site-packages/openbb/package/` directory, one module per path, and are safe to read when a generated signature looks wrong. Rebuilding replaces them. If a problem persists with the latest `openbb-core`, open an issue on [GitHub](https://github.com/OpenBB-finance/OpenBB/issues) with the error, the original route, and the generated code.
