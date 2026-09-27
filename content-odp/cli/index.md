---
title: ODP CLI
sidebar_position: 0
description: >
  Command-line client for the OpenBB Platform and any OpenAPI 3.x server.
keywords:
  - openbb-cli
  - openbb
  - command line
  - REPL
  - batch
  - .spec
  - OpenAPI
---

`openbb-cli` is a command-line client for the OpenBB Platform and any OpenAPI 3.x server. Install once, talk to many APIs from the shell.

## What it does

- **One-shot dispatch.** `openbb <command> --key value` runs one command, prints a JSON line, exits.
- **Batch.** `openbb --batch` reads NDJSON requests from stdin, writes NDJSON responses to stdout, concurrent.
- **Interactive REPL.** `openbb -i` — menu navigation, tab-completion, command history, result registry.
- **Four backends.** In-process `obb`, an `openbb-platform-api` server (`--server`), a precomputed `.spec` file (`--spec`), or a generic OpenAPI 3.x server (`--server`).
- **`.spec` files.** `openbb --generate-spec --server URL -o file.spec` once; `--spec file.spec` afterwards skips the OpenAPI fetch on every invocation.
- **Multi-spec namespaces.** `--spec congress=congress.spec --spec nyfed=nyfed.spec` mounts each under its own namespace; per-namespace headers, query params, and auth.
- **Codegen.** `--generate-extension --spec api.spec -o ./openbb-foo` produces an installable OpenBB extension — `Provider` + `Fetcher` + router — that registers with `openbb-build`.
- **Auth.** Static headers (`-H`), query params (`-Q`), or an importable `AuthHook` for RBAC and dynamic credentials.
- **Layered configuration.** `pyproject.toml` → user-global `openbb.toml` → project `openbb.toml` → `--config` → `.env` → `OPENBB_*` env vars → CLI flags.
- **Introspection.** `--list-commands` and `--describe COMMAND[:provider]` print the catalog and per-command schemas as JSON.

## Sections

| Page | Topic |
| ---- | ----- |
| [Installation](/odp/cli/installation) | `pip install openbb-cli` |
| [Quickstart](/odp/cli/quickstart) | One-shot, batch, REPL |
| [Modes](/odp/cli/modes) | Non-TTY, batch, REPL semantics |
| [Backends](/odp/cli/backends) | The four backend types |
| [Configuration](/odp/cli/configuration) | `openbb.toml`, env vars, layer order |
| [Authentication](/odp/cli/auth) | Headers, query params, auth hooks |
| [Settings reference](/odp/cli/settings) | `openbb_cli.models.settings.Settings` |
| [Codegen](/odp/cli/codegen) | `--generate-spec`, `--generate-extension`, `--socrata-story` |
| [CLI flags](/odp/cli/reference/cli-flags) | Every flag |
