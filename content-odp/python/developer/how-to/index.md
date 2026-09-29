---
title: How-To Guides
sidebar_position: 0
description: Focused guides for common tasks when building OpenBB extensions, from HTTP requests and input types to examples, deprecations, and tests.
keywords:
  - ODP
  - OpenBB V5
  - develop
  - extension
  - provider
  - router
  - how-to
  - guide
---

import HeadTitle from "@site/src/components/General/HeadTitle.tsx";
import NewReferenceCard from "@site/src/components/General/NewReferenceCard";

<HeadTitle title="How-To Guides | OpenBB Python (V5)" />

Each guide covers one task inside a provider or router extension. They assume a working extension; [Extension types](../extension_types/index.md) shows how to build one.

<ul className="grid grid-cols-1 md:grid-cols-2 gap-4 -ml-6">
  <NewReferenceCard
    title="HTTP requests"
    description="Make sync and async requests with the helpers that apply the user's HTTP settings."
    url="/odp/python/developer/how-to/http_requests"
  />
  <NewReferenceCard
    title="Country input"
    description="Accept country names or codes and normalize them to ISO 3166 with the Country type."
    url="/odp/python/developer/how-to/country_input"
  />
  <NewReferenceCard
    title="Exchange input"
    description="Accept exchange names, acronyms, or MICs and normalize them to ISO 10383 with the Exchange type."
    url="/odp/python/developer/how-to/exchange_input"
  />
  <NewReferenceCard
    title="Annotated results"
    description="Return source metadata alongside the results of a fetcher."
    url="/odp/python/developer/how-to/annotated_results"
  />
  <NewReferenceCard
    title="Function examples"
    description="Add APIEx and PythonEx examples to commands for docstrings and the OpenAPI schema."
    url="/odp/python/developer/how-to/examples"
  />
  <NewReferenceCard
    title="Validators"
    description="Parse, normalize, and default values in QueryParams and Data models."
    url="/odp/python/developer/how-to/validators"
  />
  <NewReferenceCard
    title="Disabling output validation"
    description="Return output that does not match the declared model with no_validate."
    url="/odp/python/developer/how-to/disabling_output_validation"
  />
  <NewReferenceCard
    title="Deprecating endpoints"
    description="Warn users about a command that will be removed, in Python and in the OpenAPI schema."
    url="/odp/python/developer/how-to/deprecating_endpoints"
  />
  <NewReferenceCard
    title="Dynamic command execution"
    description="Run commands by route with CommandRunner, without the generated package."
    url="/odp/python/developer/how-to/dynamic_command_execution"
  />
  <NewReferenceCard
    title="Tests"
    description="Test fetchers, record HTTP cassettes, and generate integration tests."
    url="/odp/python/developer/how-to/tests"
  />
</ul>
