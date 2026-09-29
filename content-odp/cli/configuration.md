---
title: Configuration
sidebar_position: 5
description: >
  How openbb-cli combines openbb.toml files, pyproject.toml, .env files,
  environment variables, and flags, and which keys each source accepts.
keywords:
  - openbb-cli configuration
  - openbb.toml
  - OPENBB_CLI_CONFIG
  - .env
  - environment variables
---

Backend, auth, and codegen options can come from TOML files, `.env` files, environment variables, and flags. REPL display settings such as the output mode or flair are stored separately, in `~/.openbb_platform/.cli.env`, and are changed from the REPL; see [Settings](./settings.md).

## TOML files

The CLI reads up to four TOML sources and deep-merges them, with later sources overriding earlier ones key by key:

1. The `[tool.openbb-cli]` table of the nearest `pyproject.toml`, searching upward from the working directory.
2. `~/.openbb_platform/openbb.toml`, or `~/.openbb_platform/.openbb.toml`.
3. The first `openbb.toml` or `.openbb.toml` found searching upward from the working directory.
4. The file named by `--config PATH`, or by `OPENBB_CLI_CONFIG` when the flag is absent.

A missing file, or one that fails to parse, is skipped without a message. `openbb --show-config` prints the merged result as JSON, which is the quickest way to see what the CLI actually loaded. Top-level keys may be written in kebab-case or snake_case; keys inside tables keep their spelling.

`openbb --print-config-template` prints a commented template that lists the supported keys with their flag and environment variable. Keys that already have a value in the merged configuration are printed uncommented with that value, so the output can be saved as a starting point:

```bash
openbb --print-config-template > ~/.openbb_platform/openbb.toml
```

## Keys

```toml
server = "http://127.0.0.1:6900"
openapi-path = "/openapi.json"
header-file = "/etc/openbb/headers.json"
query-param-file = "/etc/openbb/query.json"
auth-hook = "myapp.auth:default_hook"

[headers]
Authorization = "Bearer ..."
"X-Tenant" = "acme"

[query]
api_key = "..."

[specs.platform]
path = "/srv/specs/platform.spec"

[specs.nyfed]
path = "/srv/specs/nyfed.spec"
auth-hook = "myapp.auth:nyfed_hook"

[specs.nyfed.headers]
Authorization = "Bearer ..."

[specs.nyfed.query]
api_key = "..."
```

| Key | Flag | Environment variable | Notes |
| --- | ---- | -------------------- | ----- |
| `server` | `--server` | `OPENBB_SERVER_URL` | Server for dispatch and `--generate-spec`. |
| `spec` | `--spec PATH` | `OPENBB_SPEC_PATH` | One unnamed spec. Ignored when `[specs]` tables exist. |
| `[specs.NAME]` | `--spec NAME=PATH` | none | Needs `path`; may hold `auth-hook` and `headers` and `query` tables. |
| `openapi-path` | `--openapi-path` | none | Only used by `--generate-spec`. |
| `header-file` | `--header-file` | `OPENBB_HEADER_FILE` | JSON object of header names and values. |
| `query-param-file` | `--query-param-file` | `OPENBB_QUERY_PARAM_FILE` | JSON object of query parameter names and values. |
| `[headers]` | `-H` | none | Headers for every HTTP backend. |
| `[query]` | `-Q` | `OPENBB_HTTP_QUERY_<NAME>` | Query parameters for every HTTP backend. |
| `auth-hook` | none | none | `module.path:attribute` of an importable hook; see [Authentication](./auth.md). |
| `output`, `batch-concurrency` | `--output`, `--batch-concurrency` | `OPENBB_CLI_BATCH_CONCURRENCY` | Read into the merged configuration but not applied in v5, because both flags have built-in defaults. Pass the flag or set the variable. |

Paths in `spec`, `[specs.NAME]`, `header-file`, and `query-param-file` are used as written, without `~` expansion, so give absolute paths or paths relative to the working directory. `--config` and `--env-file` do expand `~`.

## Precedence

For `server`, `header-file`, and `query-param-file`, a flag beats the environment variable, which beats the TOML value. `openapi-path` has no variable, so the flag beats TOML.

Specs are chosen as a whole rather than merged. `--spec` flags replace every spec in the configuration; without them, `[specs.NAME]` tables are used, then a top-level `spec` key, then `OPENBB_SPEC_PATH`. `[specs.NAME]` headers, query tables, and auth hooks still apply when `--spec NAME=PATH` uses the same name. When any spec is in effect, `server` is ignored for dispatch.

Headers are merged key by key, from lowest to highest priority: `[headers]`, the `--header-file` object, then `-H` flags. Query parameters follow the same order with `OPENBB_HTTP_QUERY_*` variables inserted before `-Q` flags: `[query]`, `--query-param-file`, the environment, then `-Q`. In a multi-spec setup, the per-namespace values from `[specs.NAME.headers]`, `[specs.NAME.query]`, and `NAME:`-prefixed flags are applied on top of the merged global values.

## .env files and environment variables

Before reading any TOML, the CLI loads `~/.openbb_platform/.env` and then the file named by `--env-file` or `OPENBB_CLI_ENV_FILE`. A variable that is already set is never replaced, so a shell export beats both files, and the user-global `.env` beats `--env-file` for the same name. Apart from `OPENBB_CLI_ENV_FILE` itself, any variable in the table below can be set in these files.

| Variable | Effect |
| -------- | ------ |
| `OPENBB_CLI_CONFIG` | TOML file used when `--config` is not passed. |
| `OPENBB_CLI_ENV_FILE` | `.env` file used when `--env-file` is not passed. |
| `OPENBB_SERVER_URL` | Default for `--server`. |
| `OPENBB_SPEC_PATH` | Spec used when no `--spec` flag, `[specs]` table, or `spec` key is present. |
| `OPENBB_HEADER_FILE` | Default for `--header-file`. |
| `OPENBB_QUERY_PARAM_FILE` | Default for `--query-param-file`. |
| `OPENBB_CLI_BATCH_CONCURRENCY` | Default for `--batch-concurrency`. Built-in default is 8. |
| `OPENBB_HTTP_QUERY_<NAME>` | Adds the query parameter `<name>` in lower case to every HTTP request, so `OPENBB_HTTP_QUERY_API_KEY=xxx` sends `api_key=xxx`. |

## Display keys and the `[settings]` table

The loader also accepts four top-level display keys and a `[settings]` table, and `--print-config-template` lists them:

```toml
output-mode = "rich"
flair = ":rocket"
timezone = "America/New_York"
rich-style = "dark"

[settings]
use-prompt-toolkit = true
toolbar-hint = false
```

In v5 these entries only reach the process environment. Each `[settings]` entry is exported as `OPENBB_<KEY>` in upper snake case unless that variable is already set, and the four top-level keys are exported as `OPENBB_OUTPUT_MODE`, `OPENBB_FLAIR`, `OPENBB_TIMEZONE`, and `OPENBB_RICH_STYLE`, replacing any existing value. The REPL's settings model does not read the process environment; it loads `~/.openbb_platform/.cli.env` only. Neither these TOML entries nor `OPENBB_*` exports in your shell change the REPL, so use the `/settings` menu, which writes to `.cli.env`, as described in [Settings](./settings.md).
