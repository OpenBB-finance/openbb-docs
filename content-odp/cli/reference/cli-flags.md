---
title: CLI flags
sidebar_position: 0
description: >
  Every flag accepted by `openbb`, with type, default, environment variable
  fallback, and behavior.
keywords:
  - openbb-cli flags
  - argparse
  - --server
  - --spec
  - --batch
---

`openbb` is `openbb_cli.cli:main`, dispatching through the argparse parser built in `openbb_cli.dispatchers.runtime.build_parser`. Flags marked **mode** are part of the mutually-exclusive top-level mode group; supplying more than one is an argparse error.

## Mode flags (mutually exclusive)

| Flag | Action | Effect |
| ---- | ------ | ------ |
| `-i`, `--interactive` | `store_true` | Drop into the interactive REPL. |
| `--batch` | `store_true` | Read NDJSON `Request` lines from stdin, write NDJSON `Response` lines to stdout, concurrent up to `--batch-concurrency`. |
| `--generate-spec` | `store_true` | Build a `.spec` file from `--server` (with optional `--openapi-path`) or `--socrata-story`, write to `--output`, exit. |
| `--generate-extension` | `store_true` | Generate an installable OpenBB extension from `--spec`, write to `--output`. See [Codegen](/odp/cli/codegen). |
| `--list-commands` | `store_true` | Print the command catalog as JSON; equivalent to dispatching the reserved `__commands__` command. |
| `--describe COMMAND` | `default=None` | Print the schema for one command as JSON; equivalent to dispatching `__schema__` with `--name=COMMAND`. `COMMAND:PROVIDER` narrows to that provider for OpenBB upstreams. |
| `--print-config-template` | `store_true` | Print a documented TOML template covering every supported setting; lines without a resolved value are commented. |
| `--show-config` | `store_true` | Print the layered TOML config (`pyproject` → user-global → project → `--config`) as JSON. |

When no mode flag is supplied and one or more positional arguments are given, the CLI runs in non-TTY one-shot mode.

## Backend selection

| Flag | Default | Environment | Notes |
| ---- | ------- | ----------- | ----- |
| `--server URL` | unset | `OPENBB_SERVER_URL` | Dispatch over HTTP against an OpenAPI 3.x server. |
| `--spec [NAME=]PATH` *(repeatable)* | `[]` | `OPENBB_SPEC_PATH` | Use a precomputed `.spec` file. Repeat with `NAME=PATH` to mount multiple specs under namespaces. |
| `--openapi-path PATH` | unset | none | Path or URL to the OpenAPI document on the server. Defaults to `/openapi.json`. Required for servers that publish elsewhere (e.g. NY Fed at `/static/docs/markets-api.yml`). |

If neither `--server` nor `--spec` is supplied, dispatch goes through the in-process `LocalDispatcher` (`from openbb import obb`).

## Auth

| Flag | Default | Environment | Notes |
| ---- | ------- | ----------- | ----- |
| `-H KEY=VALUE`, `--header KEY=VALUE` *(repeatable)* | `[]` | none | Additional HTTP header. Both `KEY=VALUE` and `KEY: VALUE` forms accepted. With multi-spec, prefix the value with `<NS>:` to scope to one namespace. |
| `--header-file PATH` | unset | `OPENBB_HEADER_FILE` | JSON object of additional headers. `--header` flags take precedence on conflicts. |
| `-Q KEY=VALUE`, `--query-param KEY=VALUE` *(repeatable)* | `[]` | `OPENBB_HTTP_QUERY_*` (env vars matching `OPENBB_HTTP_QUERY_NAME=VALUE` are auto-promoted to `?name=value`) | Additional query parameter sent on every dispatched request. With multi-spec, prefix the value with `<NS>:` to scope. |
| `--query-param-file PATH` | unset | `OPENBB_QUERY_PARAM_FILE` | JSON object of additional query params. `--query-param` flags and `OPENBB_HTTP_QUERY_*` env vars take precedence on conflicts. |

See [Authentication](/odp/cli/auth) for auth hooks (TOML-configured importable callables).

## Codegen options

| Flag | Default | Used by | Notes |
| ---- | ------- | ------- | ----- |
| `--output PATH`, `-o PATH` | `openbb.spec` | `--generate-spec`, `--generate-extension` | Output spec path or project directory. |
| `--provider-name NAME` | derived from `--output` basename | `--generate-extension` | Snake-case provider identifier. |
| `--project-name NAME` | `openbb-<provider-name>` | `--generate-extension` | PyPI distribution name. |
| `--package-name NAME` | `openbb_<provider-name>` | `--generate-extension` | Python package directory. |
| `--router-name NAME` | `<provider-name>` | `--generate-extension` | Top-level router identifier. |
| `--include PATTERN` *(repeatable)* | `None` | `--generate-extension` | Keep only commands matching the glob. Takes priority over `--exclude`. |
| `--exclude PATTERN` *(repeatable)* | `None` | `--generate-extension` | Drop commands matching the glob. Ignored if `--include` is set. |
| `--socrata-story URL_OR_PATH` | `None` | `--generate-spec` | Build a spec from a Socrata story instead of an OpenAPI document. |

## Config and env files

| Flag | Default | Environment | Notes |
| ---- | ------- | ----------- | ----- |
| `--config PATH` | unset | `OPENBB_CLI_CONFIG` | Explicit TOML config file. Layered atop `[tool.openbb-cli]` in pyproject, user-global `openbb.toml`, and any project-local `openbb.toml`. |
| `--env-file PATH` | unset | `OPENBB_CLI_ENV_FILE` | Additional `.env` to load into the process environment. `~/.openbb_platform/.env` is always tried first; real shell exports always win. |

## Runtime

| Flag | Default | Environment | Notes |
| ---- | ------- | ----------- | ----- |
| `--batch-concurrency N` | `8` | `OPENBB_CLI_BATCH_CONCURRENCY` | Maximum concurrent in-flight dispatches in `--batch` mode. |
| `--dev` | `False` | none | Developer mode (sets `Settings.DEV_BACKEND = True`). |
| `--debug` | `False` | none | Debug logging (sets `Settings.DEBUG_MODE = True`). |

## Positional

| Position | Default | Notes |
| -------- | ------- | ----- |
| `command` (REMAINDER) | empty | Dotted command path followed by `--key value` pairs (or `--key=value`). With `-i`, becomes the initial REPL command. |

### Argument coercion

The non-TTY parser walks the positional REMAINDER as `command [--key value | --key=value]*`. Values are coerced via `ast.literal_eval` after a short-circuit lookup for `true` / `false` / `null` (returns `True` / `False` / `None`). Hyphens in flag names are normalized to underscores (`--start-date 2024-01-01` ↔ `start_date="2024-01-01"`). Flags supplied without a value default to `True`.
