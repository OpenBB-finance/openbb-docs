---
title: CLI flags
sidebar_position: 0
description: >
  Every flag accepted by openbb, with its default, environment variable
  fallback, and behavior.
keywords:
  - openbb-cli flags
  - --server
  - --spec
  - --batch
  - --generate-extension
---

`openbb -h` prints the same list. Flags that take a value accept both `--flag value` and `--flag=value`.

## Modes

These flags are mutually exclusive. Without any of them, the CLI runs the command given as positional arguments and exits; see [Modes](../modes.md).

| Flag | Effect |
| ---- | ------ |
| `-i`, `--interactive` | Open the interactive REPL. |
| `--batch` | Read NDJSON requests from stdin and write NDJSON responses to stdout, up to `--batch-concurrency` at a time. |
| `--generate-spec` | Write a `.spec` file built from `--server`, with optional `--openapi-path`, or from `--socrata-story`, then exit. |
| `--generate-extension` | Write an installable OpenBB extension project built from one `--spec` into `--output`, then exit. See [Codegen](../codegen.md). |
| `--list-commands` | Print the command catalog as a JSON response, the same as the `__commands__` batch command. Needs `--spec` or `--server`. |
| `--describe COMMAND[:PROVIDER]` | Print one command's parameters and response schema as a JSON response, the same as `__schema__`. Needs `--spec` or `--server`. The `:PROVIDER` suffix selects one provider's parameters for commands that declare providers. |
| `--print-config-template` | Print a commented TOML configuration template. |
| `--show-config` | Print the merged TOML configuration as JSON. |

## Backend

| Flag | Default | Environment | Notes |
| ---- | ------- | ----------- | ----- |
| `--server URL` | none | `OPENBB_SERVER_URL` | Dispatch over HTTP to an `openbb-api` or other OpenAPI 3.x server. Ignored for dispatch when a spec is configured. |
| `--spec [NAME=]PATH` | none | `OPENBB_SPEC_PATH` | Dispatch from a `.spec` file. Repeatable; with more than one, every entry needs a `NAME=` namespace. The variable is used only when no spec is set by flag or `openbb.toml`. |
| `--openapi-path PATH` | none | none | Path appended to the server URL, or a full URL, of the OpenAPI document. When unset, `/openapi.json` is tried. Read only by `--generate-spec`. |
| `--socrata-story URL_OR_PATH` | none | none | Build a spec from a Socrata story or dataset. With `--generate-spec` it is saved; otherwise it is used for this run only. |

With no spec and no server, commands run in-process against the installed `openbb` extensions. [Backends](../backends.md) covers the selection rules.

## Auth

| Flag | Default | Environment | Notes |
| ---- | ------- | ----------- | ----- |
| `-H KEY=VALUE`, `--header KEY=VALUE` | none | none | HTTP header for every request and for the OpenAPI download. `KEY: VALUE` also works. Repeatable. `NS:KEY=VALUE` limits it to namespace `NS`. |
| `--header-file PATH` | none | `OPENBB_HEADER_FILE` | JSON object of headers. `-H` flags win on conflicts. |
| `-Q KEY=VALUE`, `--query-param KEY=VALUE` | none | `OPENBB_HTTP_QUERY_<NAME>` | Query parameter for every request. Repeatable. `NS:KEY=VALUE` limits it to namespace `NS`. Each `OPENBB_HTTP_QUERY_<NAME>` variable adds `<name>` in lower case. |
| `--query-param-file PATH` | none | `OPENBB_QUERY_PARAM_FILE` | JSON object of query parameters. `OPENBB_HTTP_QUERY_*` variables and `-Q` flags win on conflicts. |

Auth hooks have no flag; they are configured in `openbb.toml`. See [Authentication](../auth.md).

## Codegen

| Flag | Default | Used by | Notes |
| ---- | ------- | ------- | ----- |
| `--output PATH`, `-o PATH` | `openbb.spec` | `--generate-spec`, `--generate-extension` | Spec file path, or the parent directory of the generated project. The `output` key in `openbb.toml` is not applied in v5. |
| `--provider-name NAME` | name of the `--output` directory | `--generate-extension` | Source of the snake_case slug for the provider, namespace, and default names. |
| `--project-name NAME` | `openbb-<slug>` | `--generate-extension` | Distribution name and project directory. |
| `--package-name NAME` | `openbb_<slug>` | `--generate-extension` | Python package directory. |
| `--router-name NAME` | none | `--generate-extension` | Accepted but not used in v5; the namespace is the slug. |
| `--include PATTERN` | `None` | `--generate-extension` | Keep only commands whose dotted name matches the glob. Repeatable. Overrides `--exclude`. |
| `--exclude PATTERN` | `None` | `--generate-extension` | Drop commands whose dotted name matches the glob. Repeatable. Ignored when `--include` is set. |

## Configuration files

| Flag | Default | Environment | Notes |
| ---- | ------- | ----------- | ----- |
| `--config PATH` | none | `OPENBB_CLI_CONFIG` | TOML file merged over `pyproject.toml`, the user-global `openbb.toml`, and the project `openbb.toml`. See [Configuration](../configuration.md). |
| `--env-file PATH` | none | `OPENBB_CLI_ENV_FILE` | `.env` file loaded into the environment after `~/.openbb_platform/.env`. Variables that are already set are kept. |

## Runtime

| Flag | Default | Environment | Notes |
| ---- | ------- | ----------- | ----- |
| `--batch-concurrency N` | `8` | `OPENBB_CLI_BATCH_CONCURRENCY` | Maximum number of batch requests in flight. The `batch-concurrency` key in `openbb.toml` is not applied in v5. |
| `--dev` | off | none | Sets `DEV_BACKEND` for the REPL session. Only used with `-i`. |
| `--debug` | off | none | Sets `DEBUG_MODE` for the REPL session. Only used with `-i`. |

## Positional arguments

Everything after the flags is collected as the command: the dotted command path followed by `--key value` or `--key=value` pairs. With `-i`, it is run as the first REPL input instead, written as a REPL path such as `/oecd/gdp_real --country japan`. With `--generate-spec`, a single positional argument is taken as the output path when `--output` is not given. [Modes](../modes.md#one-shot) explains how the pairs are parsed for each backend.
