---
title: OBBject Plugins
sidebar_position: 5
description: Run callbacks on command output before it is returned, on both the Python Interface and the REST API, with on_command_output extensions.
keywords:
  - ODP
  - OpenBB V5
  - OBBject
  - plugin
  - callback
  - on_command_output
  - allow_on_command_output
  - allow_mutable_extensions
  - how-to
---

import HeadTitle from "@site/src/components/General/HeadTitle.tsx";

<HeadTitle title="OBBject Plugins | OpenBB Python (V5)" />

An OBBject plugin is an [OBBject extension](obbject.md) created with `on_command_output=True`. Instead of waiting for a caller to use it, it runs automatically after every matching command, before the result is returned, on both the Python Interface and the REST API. Plugins can log or forward results, and with explicit permission they can modify them, including results of commands from packages you do not control.

That reach is why plugins are opt-in. Loading one runs arbitrary code on every command's output, so only install plugins from sources you trust.

## Allow plugins in the environment

A plugin raises `RuntimeError` when it loads, which stops `openbb` from importing and the API from starting, unless the environment allows it. Set the flag in `~/.openbb_platform/system_settings.json`:

```json
{
  "allow_on_command_output": true,
  "allow_mutable_extensions": true
}
```

or with the environment variables `OPENBB_ALLOW_ON_COMMAND_OUTPUT=true` and `OPENBB_ALLOW_MUTABLE_EXTENSIONS=true`. `allow_mutable_extensions` is only needed for plugins that modify output. [Environment variables](../../user-guide/environment-variables.mdx) lists where else these can be set.

## Extension parameters

| Parameter | Default | Effect |
| --- | --- | --- |
| `name` | required | Accessor name the callback is registered under |
| `description` | `None` | Description shown for the extension |
| `credentials` | `None` | Credential names the plugin needs, added to the user credentials |
| `on_command_output` | `False` | Must be `True` for a plugin |
| `command_output_paths` | `None` | Routes to run on, such as `["/famafrench/factors"]`; `None` means every command |
| `immutable` | `True` | `False` passes the real result so changes are returned |
| `results_only` | `False` | `True` makes matching commands return only `results` |

Setting `command_output_paths`, `immutable=False`, or `results_only=True` without `on_command_output=True` raises `ValueError`.

## Write the callback

Decorate a function that takes the `OBBject` with `obbject_accessor`. The function can be sync or async, and its return value is ignored. A class also works: it is constructed with the `OBBject` and then called, so it needs a `__call__` method.

Callbacks run one at a time and block the response until they finish. Plugins that apply to every command run first, then plugins registered for the specific route, each group in entry-point name order. Anything slow should be handed to a thread. This plugin, adapted from the `openbb-cookiecutter` template, serializes the result and processes it off the request path:

```python
"""Background processing plugin."""

import logging
import threading

from openbb_core.app.model.extension import Extension
from openbb_core.app.model.obbject import OBBject

logger = logging.getLogger(__name__)

background_plugin = Extension(
    name="background_plugin",
    description="Hand each /famafrench/factors result to a background thread.",
    on_command_output=True,
    command_output_paths=["/famafrench/factors"],
)


def process_in_background(serialized: dict) -> None:
    """Rebuild the result and process it."""
    obbject = OBBject(**serialized)
    logger.info("Processed %s rows from %s.", len(obbject.results or []), obbject.provider)


@background_plugin.obbject_accessor
def start_background_processing(obbject: OBBject) -> None:
    """Start processing without blocking the response."""
    threading.Thread(
        target=process_in_background,
        args=(obbject.model_dump(),),
        daemon=True,
    ).start()
```

With the default `immutable=True`, the callback receives a copy of the result, so any change it makes is discarded. `obbject.extra["metadata"]` holds the command's arguments, route, and timestamp when the `metadata` preference is on.

## Modify the result

Set `immutable=False` to receive the actual result. Changes made in the callback are returned to the caller, and the REST API serializes the modified object. This plugin stamps every result:

```python
"""Retrieval timestamp plugin."""

from datetime import datetime, timezone

from openbb_core.app.model.extension import Extension
from openbb_core.app.model.obbject import OBBject

stamp_plugin = Extension(
    name="stamp_plugin",
    description="Record when each result was returned.",
    on_command_output=True,
    immutable=False,
)


@stamp_plugin.obbject_accessor
def stamp(obbject: OBBject) -> None:
    """Add a retrieval timestamp to extra."""
    obbject.extra["retrieved_at"] = datetime.now(timezone.utc).isoformat()
```

With `results_only=True`, matching commands return only the `results` content: the Python Interface returns the list or dict itself, and the REST API returns it as the JSON body. Neither change is reflected in the generated signatures or docstrings.

After the callbacks run, the plugin's accessor on that result is replaced with a message saying it cannot be called outside command execution, so users cannot invoke a plugin by hand.

## Register and install

Plugins use the same entry-point group as other OBBject extensions:

```toml
[project.entry-points."openbb_obbject_extension"]
background_plugin = "openbb_my_plugins:background_plugin"
stamp_plugin = "openbb_my_plugins:stamp_plugin"
```

```bash
pip install -e .
export OPENBB_ALLOW_ON_COMMAND_OUTPUT=true
export OPENBB_ALLOW_MUTABLE_EXTENSIONS=true
```

Then call any matching command from Python or the REST API. In a test suite, set `OPENBB_ALLOW_ON_COMMAND_OUTPUT` in `conftest.py` before `openbb` is imported, as the cookiecutter template does.
