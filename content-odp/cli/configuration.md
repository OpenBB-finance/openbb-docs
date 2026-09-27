---
title: Configuration
sidebar_position: 5
description: >
  Layered configuration loader for openbb-cli — pyproject, user-global TOML,
  project TOML, explicit --config, .env, OPENBB_* env vars, CLI flags.
keywords:
  - openbb-cli configuration
  - openbb.toml
  - OPENBB_CLI_CONFIG
  - layered loader
---

## Layer order

The configuration loader at `openbb_cli.config.loader.load_config` walks these in order — lowest priority first, later layers overwrite earlier ones:

1. Built-in defaults from the argparse parser.
2. `[tool.openbb-cli]` in the nearest ancestor `pyproject.toml`, walking up from CWD.
3. `~/.openbb_platform/openbb.toml` (or `.openbb.toml`).
4. `openbb.toml` (or `.openbb.toml`) in the nearest ancestor directory of CWD.
5. The file pointed at by `--config PATH`, or `$OPENBB_CLI_CONFIG` if neither is supplied.
6. `.env` files: `~/.openbb_platform/.env` and the file at `$OPENBB_CLI_ENV_FILE` (loaded into `os.environ`).
7. `OPENBB_*` environment variables.
8. CLI flags.

Layers 2–5 are deep-merged into a single dict; top-level kebab-case keys are normalized to snake_case so they match argparse `dest` names. Nested tables (`[specs.<ns>]`, `[headers]`, `[query]`, `[settings]`) keep their original key casing.

## Bootstrap a template

```bash
openbb --print-config-template > ~/.openbb_platform/openbb.toml
```

Lines without a resolved value are commented out, so dropping the output at the user-global location is a valid starting point. Currently-resolved values are inlined as live values.

## Inspect the merged config

```bash
openbb --show-config
```

Prints the result of layering pyproject → user-global → project → `--config` as JSON. Useful for debugging which layer a given setting is coming from.

## Schema

```toml
# ── Backend / dispatch ──────────────────────────────────────────────
server = "https://api.example.com"     # --server
spec = "/path/to/api.spec"             # --spec (single, unprefixed)
openapi-path = "/openapi.json"         # --openapi-path
header-file = "/path/to/headers.json"  # --header-file
query-param-file = "/path/to/q.json"   # --query-param-file
output = "openbb.spec"                 # --output for --generate-spec
batch-concurrency = 8                  # --batch-concurrency

# ── Multi-spec ──────────────────────────────────────────────────────
[specs.congress]
path = "/path/to/congress.spec"
auth-hook = "myapp.auth:congress_hook"
[specs.congress.headers]
Authorization = "Bearer ..."
[specs.congress.query]
api_key = "..."

[specs.nyfed]
path = "/path/to/nyfed.spec"
[specs.nyfed.query]
api_key = "..."

# ── Auth — global, applied to every backend ─────────────────────────
auth-hook = "myapp.auth:default_hook"  # importable "module.path:attr"

[headers]
Authorization = "Bearer ..."
"X-Tenant" = "acme"

[query]
api_key = "..."

# ── REPL display preferences (top-level shortcuts) ─────────────────
output-mode = "rich"        # rich | json | tsv | html
flair = ":fox_face"
timezone = "America/New_York"
rich-style = "dark"

# ── Every other Settings field ─────────────────────────────────────
[settings]
allowed-number-of-rows = 50
use-prompt-toolkit = true
toolbar-hint = false
```

## Backend selection

Three forms; pick one:

| Form | Behavior |
| ---- | -------- |
| `server = "URL"` | Dispatch through the URL; OpenAPI document fetched from `<URL>/openapi.json` unless `openapi-path` is set. |
| `spec = "PATH"` | Single `.spec` file with the flat (unprefixed) command surface. |
| `[specs.<ns>]` tables | Multi-spec: every namespace gets its own backend, scoped headers/query/auth-hook. |

`server` and the `spec` / `[specs]` forms are mutually exclusive at dispatch time. If you supply both, the loader keeps both keys in the merged config but the CLI uses `[specs]` over `spec` over `server` for dispatch selection.

## Auth — headers, query params, hooks

The `[headers]` and `[query]` tables apply to every backend. Per-namespace overrides go under `[specs.<ns>.headers]` and `[specs.<ns>.query]`. CLI flags (`-H` / `--header`, `-Q` / `--query-param`) override TOML values on conflicts; `--header-file` / `--query-param-file` JSON files merge below CLI flags but above TOML.

For dynamic credentials (RBAC, expiring tokens, vault-sourced secrets), point `auth-hook` at an importable callable. See [Authentication](/odp/cli/auth).

## REPL display preferences

Four top-level shortcut keys map onto the `Settings` model via `apply_settings_to_env`, which seeds them as `OPENBB_*` env vars before argparse runs:

| Top-level key | Env var | Settings field |
| ------------- | ------- | -------------- |
| `output-mode` | `OPENBB_OUTPUT_MODE` | `OUTPUT_MODE` |
| `flair` | `OPENBB_FLAIR` | `FLAIR` |
| `timezone` | `OPENBB_TIMEZONE` | `TIMEZONE` |
| `rich-style` | `OPENBB_RICH_STYLE` | `RICH_STYLE` |

Every other Settings field is settable through `[settings]` (kebab-case keys allowed; uppercased into `OPENBB_*` env vars).

## Environment variables

| Variable | Used by |
| -------- | ------- |
| `OPENBB_CLI_CONFIG` | Falls back into `--config` when the flag is omitted. |
| `OPENBB_CLI_ENV_FILE` | Falls back into `--env-file` when the flag is omitted. |
| `OPENBB_SERVER_URL` | Default for `--server`. |
| `OPENBB_SPEC_PATH` | Default for `--spec` when no `--spec` flag and no `[specs]` config are present. |
| `OPENBB_HEADER_FILE` | Default for `--header-file`. |
| `OPENBB_QUERY_PARAM_FILE` | Default for `--query-param-file`. |
| `OPENBB_CLI_BATCH_CONCURRENCY` | Default for `--batch-concurrency` (default `8`). |
| `OPENBB_HTTP_QUERY_<NAME>` | Auto-promoted to `?<name>=<value>` on every dispatch — `OPENBB_HTTP_QUERY_API_KEY=xxx` becomes `?api_key=xxx`. |
| `OPENBB_<KEY>` | All other `Settings` fields (and `[settings]` table entries) are exported as `OPENBB_<UPPERCASED_KEY>`. |

`~/.openbb_platform/.env` is always tried as the user-global dotenv. `$OPENBB_CLI_ENV_FILE` / `--env-file` is loaded after it. Real shell exports always beat both — `load_env_files` uses `os.environ.setdefault`.

## What's recognized from TOML

`_CONFIG_SCALAR_KEYS` in `openbb_cli.cli` lists the scalar argparse defaults that the loader can fill from TOML:

```
server, openapi_path, header_file, query_param_file, output, batch_concurrency
```

These match the corresponding argparse `dest` names. Argparse defaults already set by an environment variable are not overridden by TOML — TOML is treated as the layer below env.
