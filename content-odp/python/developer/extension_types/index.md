---
title: Extension Types
sidebar_position: 0
description: Guides for each kind of OpenBB extension and how to scaffold a new extension project with openbb-cookiecutter.
keywords:
  - ODP
  - OpenBB V5
  - extension
  - provider
  - router
  - OBBject
  - charting
  - openbb-cookiecutter
---

import HeadTitle from "@site/src/components/General/HeadTitle.tsx";
import NewReferenceCard from "@site/src/components/General/NewReferenceCard";

<HeadTitle title="Extension Types | OpenBB Python (V5)" />

Each guide below builds one kind of extension. [Extension types](../../concepts/extensions.mdx) in Concepts lists the entry-point groups and what each entry point must resolve to; the guides assume that background. A data package normally combines a provider and a router, so start with the provider guide.

<ul className="grid grid-cols-1 md:grid-cols-2 gap-4 -ml-6">
  <NewReferenceCard
    title="Provider extensions"
    description="Build a data source with QueryParams, Data, and Fetcher classes, and expose it under its own namespace."
    url="/odp/python/developer/extension_types/provider"
  />
  <NewReferenceCard
    title="Router extensions"
    description="Add commands to obb and routes to the REST API with @router.command."
    url="/odp/python/developer/extension_types/router"
  />
  <NewReferenceCard
    title="From FastAPI"
    description="Register an existing FastAPI app or APIRouter as a router extension without rewriting it."
    url="/odp/python/developer/extension_types/from_fastapi"
  />
  <NewReferenceCard
    title="OBBject extensions"
    description="Add accessor methods to every command result in the Python Interface."
    url="/odp/python/developer/extension_types/obbject"
  />
  <NewReferenceCard
    title="OBBject plugins"
    description="Run callbacks on command output before it is returned, on both interfaces."
    url="/odp/python/developer/extension_types/plugins"
  />
  <NewReferenceCard
    title="Charting extensions"
    description="Add chart views that commands produce when called with chart=True."
    url="/odp/python/developer/extension_types/charting"
  />
</ul>

## Scaffold a project with openbb-cookiecutter

`openbb-cookiecutter` generates an installable extension project with working examples, tests, and a `pyproject.toml` that already declares the entry points. Run it without installing it through `uv`, or install it with pip:

```bash
uvx openbb-cookiecutter
```

```bash
pip install openbb-cookiecutter
openbb-cookiecutter
```

The command prompts for the author, project name, project tag (the distribution name), package name, which extension types to include, and the provider, router, and OBBject names those types use. The extension types are `router`, `provider`, `charting`, `obbject`, `on_command_output`, or `all`. Pass them with `-e` to skip that prompt. `--no-input` accepts every default, which includes all extension types, and `--extra-context KEY=VALUE` overrides a single value:

```bash
openbb-cookiecutter -e router provider
openbb-cookiecutter --no-input -o ./extensions -e all --extra-context provider_name=my_source
```

Interactive runs derive the default project tag and package name from the project name. With `--no-input`, unspecified values come from the template defaults (`extension-template`, `extension_template`, `template`, `template_ext`), so pass every name you want to change.

With every type selected, the generated package contains `providers/<provider_name>/` with an `Example` model and an `EquityHistorical` implementation built on the standard model, `routers/<router_name>.py` with GET, POST, and provider-backed commands, `routers/<router_name>_views.py` with a chart view, and `obbject/<obbject_name>/` with two accessors and an on-command-output plugin. Unselected types are removed. Because a provider and an OBBject extension each register credentials under their own name, the template refuses to use the same value for `provider_name` and `obbject_name`.

From the generated directory, create the environment, build the Python Interface, and run the tests:

```bash
uv sync
uv run openbb-build
uv run pytest
```

`uv run openbb-api` serves the same commands over the REST API; `openbb-platform-api` is in the project's `dev` dependency group. If the project includes the on-command-output plugin, set `OPENBB_ALLOW_ON_COMMAND_OUTPUT=true` before importing `openbb` or starting the API.
