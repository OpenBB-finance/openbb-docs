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

The `README.md` file can be completely empty, it just needs to exist.

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
