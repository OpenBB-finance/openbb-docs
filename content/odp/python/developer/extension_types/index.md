---
title: Introduction
sidebar_position: 0
description: An overview of the three types of OpenBB extensions.
keywords:
  - ODP
  - OpenBB Platform
  - Develop
  - Extension
  - Provider
  - Router
  - OBBject
  - Local Development
  - Python
---

<!-- markdownlint-disable MD012 MD031 MD033 MD037 -->

import HeadTitle from "@site/src/components/General/HeadTitle.tsx";
import NewReferenceCard from "@site/src/components/General/NewReferenceCard";

<HeadTitle title="Extension Types | OpenBB Docs" />

<ul className="grid grid-cols-1 gap-2 -ml-6">
  <NewReferenceCard
    title="Provider Extensions"
    description="Get started building OpenBB Provider Extensions."
    url="/odp/python/developer/extension_types/provider"
  />
</ul>

<ul className="grid grid-cols-1 gap-2 -ml-6">
  <NewReferenceCard
    title="Router Extensions"
    description="Create new routes and endpoints with OpenBB Router Extensions."
    url="/odp/python/developer/extension_types/router"
  />
</ul>

<ul className="grid grid-cols-1 gap-2 -ml-6">
  <NewReferenceCard
    title="Convert FastAPI to ODP Python Package"
    description="Instantly convert FastAPI applications to OpenBB Router Extensions."
    url="/odp/python/developer/extension_types/from_fastapi"
  />
</ul>

<ul className="grid grid-cols-1 gap-2 -ml-6">
  <NewReferenceCard
    title="OBBject"
    description="Add functionality to the OBBject response object."
    url="/odp/python/developer/extension_types/obbject"
  />
</ul>

<ul className="grid grid-cols-1 gap-2 -ml-6">
  <NewReferenceCard
    title="Charting"
    description="Add custom charts and views to OpenBB Router endpoints."
    url="/odp/python/developer/extension_types/charting"
  />
</ul>

<ul className="grid grid-cols-1 gap-2 -ml-6">
  <NewReferenceCard
    title="Plugins"
    description="Plugin to the command execution loop and customize the output behavior with endpoint callbacks."
    url="/odp/python/developer/extension_types/plugins"
  />
</ul>

## OpenBB CookieCutter

`openbb-cookiecutter` is a PyPI package with a simple CL utility that creates a new Python project folder to develop OpenBB Python extensions.

### Template Structure

The Cookiecutter template prompts the user for information to use in the `pyproject.toml` file, and then generates a project based on that information.
All fields are optional.

- Your Name
- Your Email
- Project Name
- Project Tag (some-distributable-package)
- Package Name ("include" code folder name - "some_package")
- Provider Name - name of the provider for the entry point - i.e, 'fmp'
- Router Name - name of the router path - i.e. `obb.{some_package}`
- OBBject Name - name of the OBBject accessor namespace.

The template will generate all extension types as a single, installable Python project.
You likely won't always use all in tandem, just delete the unwanted folders and entrypoints.

### Usage

1. Install in a Python environment from PyPI with:

```
pip install openbb-cookiecutter
```

Alternatively, install and launch with `uvx`:

```
uvx openbb-cookiecutter
```

2. Navigate the current working directory to the desired output location and run:

```
openbb-cookiecutter
```

Enter values or press `enter` to continue with the default.

3. Create a new Python environment for the project.

4. Navigate into the generated folder and install with:

```
pip install -e .
```

5. Python static files will be generated on first import, or trigger with `openbb-build`.

6. Import the Python package or start the API and use like any other OpenBB application.

7. Modify the business logic and get started building!
