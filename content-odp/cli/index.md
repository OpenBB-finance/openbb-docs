---
title: ODP CLI
sidebar_position: 0
description: >
  Command-line client for the OpenBB Platform and any OpenAPI 3.x server, with
  one-shot dispatch, NDJSON batch mode, an interactive REPL, and extension
  code generation.
keywords:
  - openbb-cli
  - openbb
  - command line
  - REPL
  - batch
  - .spec
  - OpenAPI
---

`openbb-cli` installs the `openbb` command, a client for the OpenBB Platform and for any service that publishes an OpenAPI 3.x document. The same set of commands can be driven three ways. By default, `openbb <command> --key value` runs one command, writes a single JSON line to stdout, and exits with a status that reflects the outcome, which suits scripts, CI jobs, and agents. `openbb --batch` reads NDJSON requests from stdin and writes one NDJSON response per request as each finishes. `openbb -i` opens an interactive REPL with menus, tab completion, a registry of cached results, and routine scripts.

```bash
openbb oecd.gdp_real --country japan --frequency annual
```

Where the commands come from depends on the backend. Without a backend flag, the CLI imports the local `openbb` package and calls the extensions installed in that Python environment, so the command above needs `openbb-oecd`. `--server URL` reads the OpenAPI document of an `openbb-api` server, or of any other OpenAPI 3.x service, and sends each command over HTTP. `--spec PATH` does the same from a `.spec` file saved with `--generate-spec`, skipping the schema download on every call. Passing `--spec NAME=PATH` more than once mounts several APIs side by side, each under its own namespace and with its own headers, query parameters, and auth hook.

A `.spec` file can also be turned into an installable OpenBB extension with `--generate-extension`. The generated project registers a provider, holds a fetcher module for each GET command, and mounts routers that mirror the API's paths; after `pip install` and `openbb-build`, its commands appear under `obb.<namespace>` in Python.

## Pages in this section

Start with [Installation](./installation.md) and the [Quickstart](./quickstart.md), which walks through one-shot, batch, and REPL use. [Modes](./modes.md) covers argument parsing, the NDJSON wire format, and exit codes. [Backends](./backends.md) explains how each backend resolves commands and what a `.spec` file contains. [Configuration](./configuration.md) describes `openbb.toml`, `.env` files, environment variables, and their precedence, while [Settings](./settings.md) lists the REPL display settings stored in `~/.openbb_platform/.cli.env`. [Authentication](./auth.md) covers static headers, query parameters, and importable auth hooks. [Codegen](./codegen.md) documents `--generate-spec`, `--socrata-story`, and `--generate-extension`. Every flag is listed in the [CLI flags reference](./reference/cli-flags.md).

The interactive REPL has its own section. [Structure and Navigation](./repl/structure-and-navigation.md) explains menus, paths, and the global commands, [Commands and Arguments](./repl/commands-and-arguments.md) covers help output, flags, and completion, and [Data Sources](./repl/data-sources.md) shows how providers and credentials are selected. Cached results, the `load` command, and the `/feature` table tools are described in [Results Registry](./repl/results.md). Display options are covered in [Interactive Tables](./repl/interactive-tables.md) and [Interactive Charts](./repl/interactive-charts.md), file locations in [OpenBBUserData Folder](./repl/openbbuserdata.md), and scripted sessions in [Routines](./repl/routines/introduction-to-routines.md).
