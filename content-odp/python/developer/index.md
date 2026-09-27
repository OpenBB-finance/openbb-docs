---
title: Developer
sidebar_position: 0
description: Build extensions for openbb-core in V5, with guides for providers, routers, OBBject extensions, charting views, and common implementation tasks.
keywords:
  - ODP
  - OpenBB V5
  - develop
  - extension
  - provider
  - router
  - Fetcher
  - how-to
---

import HeadTitle from "@site/src/components/General/HeadTitle.tsx";
import NewReferenceCard from "@site/src/components/General/NewReferenceCard";

<HeadTitle title="Developer | OpenBB Python (V5)" />

Everything the Python Interface and REST API expose comes from installed extensions, and the packages OpenBB publishes are built the same way you would build your own. In V5 a data package is self-contained: it registers a provider and its own command namespace, so `openbb-famafrench` installs both the `famafrench` provider and `obb.famafrench`.

If you have not built an extension before, start with [Quick start (Developer)](../quickstart/developer.mdx), which registers an existing FastAPI router in a few minutes. The [Concepts](../concepts/index.mdx) pages explain the architecture these guides assume. The fastest way to begin a new project is the `openbb-cookiecutter` template described in [Extension types](extension_types/index.md).

The classes most extensions import are:

```python
from openbb_core.app.model.command_context import CommandContext
from openbb_core.app.model.example import APIEx, PythonEx
from openbb_core.app.model.extension import Extension
from openbb_core.app.model.obbject import OBBject
from openbb_core.app.provider_interface import ExtraParams, ProviderChoices, StandardParams
from openbb_core.app.query import Query
from openbb_core.app.router import Router
from openbb_core.provider.abstract.data import Data
from openbb_core.provider.abstract.fetcher import Fetcher
from openbb_core.provider.abstract.provider import Provider
from openbb_core.provider.abstract.query_params import QueryParams
```

<ul className="grid grid-cols-1 md:grid-cols-2 gap-4 -ml-6">
  <NewReferenceCard
    title="Standardization"
    description="Standard models, provider-specific fields, and the naming and value conventions every provider follows."
    url="/odp/python/developer/standardization"
  />
  <NewReferenceCard
    title="Extension types"
    description="Step-by-step guides for provider, router, OBBject, plugin, and charting extensions, and for wrapping a FastAPI app."
    url="/odp/python/developer/extension_types"
  />
  <NewReferenceCard
    title="How-to guides"
    description="Focused tasks: HTTP requests, examples, validators, deprecations, annotated results, tests, and more."
    url="/odp/python/developer/how-to"
  />
  <NewReferenceCard
    title="Concepts"
    description="Architecture, the OBBject envelope, extension entry points, streaming, and the generated package."
    url="/odp/python/concepts"
  />
</ul>
