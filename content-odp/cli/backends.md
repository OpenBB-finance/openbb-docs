---
title: Backends
sidebar_position: 4
description: >
  How openbb-cli resolves commands in-process, against an openbb-api or other
  OpenAPI 3.x server, from a .spec file, and across several specs mounted
  under namespaces.
keywords:
  - openbb-cli backends
  - in-process
  - openbb-api
  - .spec
  - OpenAPI
  - multi-spec
---

A backend decides where the commands come from and how they run. The CLI picks one per invocation. Any configured spec wins: `--spec`, `[specs.<name>]` tables or a `spec` key in `openbb.toml`, the `OPENBB_SPEC_PATH` variable, or `--socrata-story` used without `--generate-spec`. Without a spec, `--server` (or `OPENBB_SERVER_URL`, or `server` in `openbb.toml`) selects a live server. With neither, commands run in-process.

## In-process

The in-process backend imports the `openbb` package from the current Python environment and resolves the dotted command path as attributes under `obb`, so `oecd.gdp_real` calls `obb.oecd.gdp_real(...)`. The available commands are exactly the installed extensions, and the import happens again on every invocation. Results are the command's `OBBject`, serialized with unset and null fields removed.

Because nothing goes over HTTP, headers, query parameters, and auth hooks are not applied. There is also no schema to read, so `--list-commands`, `--describe`, and the `__commands__` and `__schema__` batch commands are unavailable, and flags are parsed with the generic rules described in [Modes](./modes.md#one-shot).

## Server

With `--server URL`, the CLI downloads `<URL>/openapi.json` at the start of every invocation, with a 10-second timeout, and accepts JSON or YAML. If that request fails or does not return an OpenAPI document, it loads `<URL>/` and looks for an OpenAPI document embedded as JSON in the page, which is how some API portals publish their schema. External `$ref` documents on the same origin are fetched and inlined; references to other origins are rejected. Headers and query parameters from `-H`, `-Q`, and the configuration apply to these requests, but auth hooks do not.

The downloaded document is converted into the same structure as a `.spec` file, and each command request then goes to the server with a 60-second timeout. The server can be an `openbb-api` instance or any other service that publishes OpenAPI 3.x.

`--openapi-path` is only read by `--generate-spec`. For an API that publishes its schema somewhere other than `/openapi.json` or its landing page, generate a spec with `--openapi-path` once and dispatch with `--spec`.

## Spec files

A `.spec` file is the converted OpenAPI document saved as compact JSON by `--generate-spec` (see [Codegen](./codegen.md)). Dispatching from it skips the schema download. The file records the base URL, so `--server` is not needed. On load, the CLI checks the format version, validates the structure, and recomputes the SHA-256 digest stored in the file; a file edited after generation fails the check and must be regenerated.

| Field | Type | Contents |
| ----- | ---- | -------- |
| `version` | integer | Format version, currently `5`. Other versions are rejected. |
| `base_url` | string | Base URL requests are sent to. When the OpenAPI `servers` entry adds a path, it is included. |
| `api_prefix` | string | Leading path shared by every operation, removed when naming commands. |
| `commands` | object | One entry per dotted command, with `url_path`, `url_templates` when several URLs map to the same name, `method`, `description`, `parameters`, `providers`, `request_body_schema`, and `response_schema`. |
| `routers` | object | Every dotted prefix mapped to `menu` or `command`; the REPL builds its menus from it. |
| `reference` | object | Descriptions for commands (`paths`) and menus (`routers`), taken from operation descriptions and OpenAPI tag descriptions. |
| `generated_at` | string | ISO 8601 timestamp of generation. |
| `generator` | string | `openbb-cli==<version>`. |
| `source_url` | string | Where the OpenAPI document was read from. |
| `api_version` | string | The `openapi` or `swagger` value of the source document. |
| `content_sha256` | string | SHA-256 of every other field, written last. |

## From OpenAPI paths to commands

The same conversion runs for `--server` and `--generate-spec`. The CLI strips the longest leading path that all operations share, joins the remaining segments with dots, drops `{placeholder}` segments, and replaces a `.` inside a segment with `_`, so `/api/v1/oecd/gdp_real` becomes `oecd.gdp_real`. A path with both GET and POST is mapped to its GET operation. Paths that differ only in placeholders, such as `/items/{id}` and `/items/{id}/{version}`, merge into one command, and at call time the CLI uses the longest URL whose placeholders are all supplied.

Parameters come from the operation, from the path item, and from the fields of a JSON request body; body fields that hold objects take a JSON string on the command line. API keys declared as `apiKey` security schemes become optional parameters.

Responses are decoded as JSON when the server says so and returned as text otherwise. When the body is an object that holds one list of records, such as the `results` list of an OpenBB response, the records become the result and the remaining fields are kept as metadata. String values are converted to numbers or booleans where the response schema declares those types, and a Plotly figure payload is returned as a chart.

## OpenBB providers

An operation that declares a `provider` parameter with a fixed set of values is treated as an OpenBB command with those providers. Parameters are assigned to providers from the `(provider: ...)` tags in their descriptions. On the command line and in the REPL, `--provider NAME` then limits the accepted flags to the shared ones plus that provider's, and a flag belonging to another provider is an error. `--describe` groups the parameters and response schema by provider, and `--describe COMMAND:PROVIDER` returns a single provider's group. Operations without a `provider` parameter accept every declared flag, and the `:PROVIDER` suffix has no effect on them.

## Multiple specs

`--spec NAME=PATH` mounts a spec under the namespace `NAME`, and the flag can be repeated. When more than one spec is given, every entry must be named. Commands are addressed as `<namespace>.<command>`, and the namespace is stripped before the request reaches that spec's backend. A command that does not start with a mounted namespace fails with `UnknownNamespace`.

```bash
openbb --spec platform=platform.spec --spec nyfed=nyfed.spec platform.oecd.gdp_real --country japan
```

Each namespace keeps its own base URL, headers, query parameters, and auth hook. A header or query token written as `NS:KEY=VALUE` applies only to namespace `NS`; the prefix is recognized only when `NS` is a mounted namespace.

| Source | Applies to |
| ------ | ---------- |
| `-H KEY=VALUE`, `--header-file`, `[headers]` | Every namespace. |
| `-H NS:KEY=VALUE`, `[specs.NS.headers]` | Namespace `NS`, overriding a global header with the same name. |
| `-Q KEY=VALUE`, `--query-param-file`, `OPENBB_HTTP_QUERY_*`, `[query]` | Every namespace. |
| `-Q NS:KEY=VALUE`, `[specs.NS.query]` | Namespace `NS`, overriding a global parameter with the same name. |
| Top-level `auth-hook` | Every namespace without a hook of its own. |
| `auth-hook` inside `[specs.NS]` | Namespace `NS`, replacing the top-level hook. |

`--list-commands` returns the commands of every namespace with the namespace prefix, and `--describe NS.command[:PROVIDER]` is forwarded to the right spec.

`--socrata-story` also works as a backend: without `--generate-spec`, it builds a temporary spec for the current run. On its own it gives the flat command set; next to named specs it is mounted as `socrata`.
