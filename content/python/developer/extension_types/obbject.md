---
title: OBBject Extensions
sidebar_position: 4
description: This page provides information about how to write extensions for the OBBject class and Python interface response object.
keywords:
  - OBBject
  - Python
  - Development
  - OpenBB Platform
  - extensions
  - obbject extension
  - accessor
  - decorator
  - how-to
---

import HeadTitle from "@site/src/components/General/HeadTitle.tsx";

<HeadTitle title="Build OBBject Extensions - Developer | OpenBB Docs" />

OpenBB provides some basic methods for interacting with common data structures that will be seen in the results attribute of the [`OBBject`](/python/basic_usage/response_model).

If you are working with custom data, you may also want specific methods for interacting with the data, post-request.

The `openbb-core` package makes the `OBBject` class extendable, similar to extensions and accessors for Pandas.

This page will go through the steps for developing a simple response object extension.

:::note
This type of extension is intended for use with the Python Interface.
:::

## Folder structure

```shell
obbject_example
├── README.md
├── openbb_empty_obbject
│   └── __init__.py
├── poetry.lock
└── pyproject.toml
```

Extension code will go directly in the `__init__.py` file.

### TOML File

The entry point for the extension is specified as a Poetry plugin, near the bottom of the file.

```toml
[tool.poetry.plugins."openbb_obbject_extension"]
example = "openbb_empty_obbject:ext"
```

A complete `pyproject.toml` looks something like:

<details>
<summary mdxType="summary">`pyproject.toml` </summary>

```toml
[tool.poetry]
name = "openbb-empty-obbject"
version = "0.0.0"
description = "An empty OBBject extension"
authors = ["Hello <hello@world.com>"]
readme = "README.md"
packages = [{ include = "openbb_empty_obbject" }]

[tool.poetry.dependencies]
python = "^3.10,<3.14"
openbb-core = "*"

[build-system]
requires = ["poetry-core"]
build-backend = "poetry.core.masonry.api"

[tool.poetry.plugins."openbb_obbject_extension"]
empty = "openbb_empty_obbject:ext"
```
</details>


### Writing the Extension

In this example the extension code all lives inside `__init__.py`.

When installed, every response object from the Python Interface will have the attribute defined by "name".

```python
"""Empty OBBject extension."""

from openbb_core.app.model.extension import Extension

ext = Extension(name="empty")

@ext.obbject_accessor
class Empty:
    """An Empty OBBject extension."""
    # `obbject` is the response object that will be passed into the extension.
    # Note: this is not a typo.
    def __init__(self, obbject):
        """Creates an instance of the Empty OBBject extension."""
        self._obbject = obbject

    def hello(self):
        """Print a greeting message."""
        print(f"Hello from the Empty OBBject extension!\n\nOBBject Results: {self._obbject.results}")
```

## Install Extension

With the code structure in place, install the extension into the desired environment.

Navigate into the folder where the `pyproject.toml` file is, open a terminal, and enter:

```sh
pip install -e .
openbb-build
```

If there are no provider or router extensions installed, the console will still display the error message.

```sh
Failed to import extensions. Are any installed?
```

This means there are no endpoints to run - i.e, `obb.equity.price.historical()`. The extension is applied only the output of the endpoints. You can try this example code in conjunction with the [router](/python/developer/extension_types/router) extension example.

## Use Extension

The router example contains an endpoint, `obb.empty.hello()`, which returns an `OBBject`.

This response will have the `empty` accessor, with the function defined above, in `__init__.py`.

```console
>>> from openbb import obb
>>> output = obb.empty.hello()
>>> output

OBBject

id: 068ee9a9-7853-7176-8000-567f982f83ad
results: Hello from the Empty Router extension!
provider: None
warnings: None
chart: None
extra: {'metadata': {'arguments': {'provider_choices': {}, 'standard_params': {}, '...

>>> output.empty.hello()

Hello from the Empty OBBject extension!

OBBject Results: Hello from the Empty Router extension!
```

## Callable Accessor

The namespace represents any callable, not just a class. Include `obbject` as the first positional argument for the function being decorated.

Replace the `__init__.py` code with the snippet below.

```python
"""Empty OBBject extension."""

from openbb_core.app.model.extension import Extension

ext = Extension(name="empty")


@ext.obbject_accessor
def hello(obbject):
    """Say hello."""
    return f"Hello from empty OBBject extension! You have {len(obbject.results)} items."
```

The `hello` function now runs directly from `output.empty`.

```console
>>> from openbb import obb
>>> output = obb.empty.hello()
>>> output.empty
'Hello from empty OBBject extension! You have 38 items.'
>>> len(output.results)
38
>>> output.results
'Hello from the Empty Router extension!'
```
