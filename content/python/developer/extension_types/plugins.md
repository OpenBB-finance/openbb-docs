---
title: OBBject Plugins
sidebar_position: 4
description: This page provides information about how to write plugin extensions
    that intercept the application output immediately before returning to the user.
    They provide a way to conditionally alter the output of any command, including those you do not control.
keywords:
  - develop
  - OBBject
  - Python
  - API
  - plugin
  - callback
  - on_command_output
  - allow_mutable_extensions
  - ODP
  - extensions
  - obbject extension
  - accessor
  - decorator
  - how-to
---

import HeadTitle from "@site/src/components/General/HeadTitle.tsx";

<HeadTitle title="Build OBBject Plugin Extensions - Developer | OpenBB Docs" />

This page provides information about how to write plugin extensions
that intercept the application output immediately before returning to the user.
They provide a way to conditionally alter the output of any command, including those you do not control.

While OBBject [extensions](/python/developer/extension_types/obbject) are post-return methods for the Python Interface,
OBBject plugins are compatible with both interfaces, REST API and Python, and execute before returning.
They give the developer complete control of the application's last-mile delivery.
Because of this, they are considered potentially dangerous, and may allow arbitrary code execution in the installed environment.

:::danger
- **OpenBB does not publish any package using these features.**
- The user must explicitly allow this type of functionality in the environment or `system_settings.json`.
- The application will not start if a plugin extension is installed and the environment is not configured.
- Changes will not be reflected in the function's signature and docstring.
:::

Workflows can be orchestrated by registering multiple callbacks, executed in the order of insertion.
Tasks are performed in series or parallel, where series operations are blocking events.



In [system_settings.json](/python/settings/system_settings), add:

```json
{
  "allow_on_command_output": true,
  "allow_mutable_extensions": true,
}
```

They can also be set as environment variables, prefixed with `OPENBB_`

## Folder structure

```shell
obbject_plugin_example
├── README.md
├── openbb_empty_plugin
│   └── __init__.py
├── poetry.lock
└── pyproject.toml
```

Extension code can go directly in the `__init__.py` file.

### TOML File

The entry point for the extension is specified as a Poetry plugin, near the bottom of the file.

```toml
[tool.poetry.plugins."openbb_obbject_extension"]
empty_plugin = "openbb_empty_plugin:plugin"
```

A complete `pyproject.toml` looks something like:

<details>
<summary mdxType="summary">`pyproject.toml` </summary>

```toml
[tool.poetry]
name = "openbb-empty-plugin"
version = "0.0.0"
description = "An empty OBBject plugin extension"
authors = ["Hello <hello@world.com>"]
readme = "README.md"
packages = [{ include = "openbb_empty_plugin" }]

[tool.poetry.dependencies]
python = "^3.10,<3.14"
openbb-core = "*"

[build-system]
requires = ["poetry-core"]
build-backend = "poetry.core.masonry.api"

[tool.poetry.plugins."openbb_obbject_extension"]
empty_plugin = "openbb_empty_plugin:plugin"
```
</details>

Command execution triggers the callable accessor defined as the entrypoint.

## Configuring Extension

By default, it applies to all application endpoints.
Individual endpoints can be targeted by setting initialization parameters.

```
Parameters
----------
name : str
    Name of the extension.
credentials : list[str], optional
    List of required credentials, by default None
description: Optional[str]
    Extension description.
on_command_output : bool, optional
    Whether the extension acts on command output, by default False
command_output_paths : list[str], optional
    List of endpoint paths the extension acts on, where None means all, by default None.
immutable : bool, optional
    Whether the function output is immutable, by default True.
results_only : bool, optional
    Whether the extension returns only the results instead of the OBBject, by default False.
```

:::important
- `on_command_output` **must** be set as True.
- `immutable` **must** be set as False to alter the response object.
:::

## Extension Code

:::important
Registered `on_command_output` callables should:
- Accept "obbject" as the only positional argument.
- Modify the OBBject item directly, where required, even if it is not returned in the end.
- Have no `return`.

Plugins are compatible only with endpoints returning an `OBBject`, and are not executable after returning.
:::

Each entrypoint is an instance of the `Extension` class, and is applied as a decorator.

<details>
<summary mdxType="summary">Basic Example</summary>

```python
"""OBBject Plugin Extension Example."""

from openbb_core.app.model.extension import Extension
from openbb_core.app.model.obbject import OBBject


empty_plugin = Extension(
    name="empty_plugin",
    credentials=None,
    description="An on-command output extension that does nothing.",
    on_command_output=True,  # Must be set as True
    command_output_paths=None,  # Add a list of paths - i.e, ["/equity/price/historical"]
    immutable=False,  # Must be set as False if you intend to alter the output.
    results_only=False,  # Use this as a flag to automatically return only the "results" portion of the OBBject.
)

@empty_plugin.obbject_accessor
class EmptyPlugin:
    """Empty plugin accessor."""

    def __init__(self, obbject: OBBject):
        """Initialize EmptyOBBject."""
        self._obbject = obbject

    def __call__(self):
        """Do nothing and return None."""
        # Get access to the execution context from the OBBject itself.
        print(self._obbject._extra_params)
        print(
            "This is my OBBject extension that is triggered on command output.\n"
            "You can mutate the results or pass them to another process, like adding to a database.\n"
            "You can also choose which commands to trigger this extension on.\n"
            f"Command executed: {self._obbject.extra['metadata']}"
        )
        self._obbject.results = None
```

</details>

<details>
<summary mdxType="summary">Advanced Example</summary>

```python
"""Non-Blocking OBBject Plugin Extension Example."""

import threading
import time

from openbb_core.app.model.extension import Extension
from openbb_core.app.model.obbject import OBBject

nonblocking_plugin = Extension(
    name="nonblocking_plugin",
    description="An on-command-output plugin simulating an expensive task performed in a separate thread.",
    on_command_output=True,  # Must be set as True
    command_output_paths=None, # Add a list of paths - i.e, ["/equity/price/historical"]
    immutable=True,  # Set to `True`, or omit, for parallel processing.
    results_only=False,  # Use this as a flag to return only the "results" portion of the OBBject.
)


def _expensive_operation_worker(serialized_obbject: dict):
    """Simulate a long-running task without blocking the caller."""
    working_copy = OBBject(**serialized_obbject)
    print("\nThis is the deserialized OBBject in the non-blocking thread.")
    print(working_copy.__repr__())
    for i in range(10):
        print(str(i) + " seconds remaining...")
        time.sleep(1)
    print("Expensive operation is now complete.")


@nonblocking_plugin.obbject_accessor
def nonblocking_plugin_function(obbject):  # This could also be an async function.
    """Simulated on_commnd_output function that executes an expensive task
    in a non-blocking thread."""
    obbject.results = None
    print(
        "Serializing the obbject and passing to a new thread.\n"
        f"Command executed: {obbject.extra['metadata']}\n"
    )
    print(
        "Simulating an expensive task that is non-blocking and allows the function to return."
    )
    threading.Thread(
        target=_expensive_operation_worker,
        args=(obbject.model_dump(),),
        name="nonblocking-plugin-expensive-operation",
        daemon=False,
    ).start()
```

</details>


## Install Extension

With the code structure in place, install the extension into the an environment where OpenBB is already installed.

Navigate into the folder where the `pyproject.toml` file is, open a terminal, and enter:

```sh
pip install -e .
openbb-build
```

## Use Extension

Start the API server or Python Interface and run the affected commands, adjust the code as required.
