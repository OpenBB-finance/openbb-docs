---
title: Codegen
sidebar_position: 8
description: >
  Build .spec files from an OpenAPI source (or a Socrata story), and generate
  an installable OpenBB extension package from a .spec.
keywords:
  - openbb-cli codegen
  - --generate-spec
  - --generate-extension
  - .spec
  - --socrata-story
  - OpenBB extension
---

The CLI ships two code-generation flows. Both are mutex modes on the top-level argparse group; either runs to completion and exits.

| Mode | Input | Output |
| ---- | ----- | ------ |
| `--generate-spec` | An OpenAPI 3.x document on a server, or a Socrata story | A `.spec` file (JSON, version `5`). |
| `--generate-extension` | One `.spec` file | A complete installable OpenBB Platform extension project. |

## `--generate-spec`

```bash
openbb --generate-spec --server URL [--openapi-path PATH] [-o file.spec]
openbb --generate-spec --socrata-story URL_OR_PATH [-o file.spec]
```

The CLI fetches the OpenAPI document, normalizes it into a precomputed dispatch spec, and writes it to disk. Subsequent calls can dispatch directly from the file (`--spec file.spec`), skipping the OpenAPI fetch + parse on every invocation.

Spec source options — exactly one is required:

| Flag | Behavior |
| ---- | -------- |
| `--server URL` | Fetch `<URL>/openapi.json` (or `--openapi-path` if specified). JSON or YAML accepted. |
| `--openapi-path PATH` | Path or full URL to the OpenAPI document on the server. Used when the server publishes the spec at a non-default location. |
| `--socrata-story URL_OR_PATH` | Walk a Socrata story JSON for every `datasetUid`, fetch each dataset's column metadata, and emit one router namespace per dataset wrapping `/resource/{uid}.json` and the standard SoQL parameters. |

Headers and query params (`-H` / `-Q` / `--header-file` / `--query-param-file`) are applied to the OpenAPI fetch — useful when the upstream API gate requires auth even for the schema.

Output flags:

| Flag | Default | Purpose |
| ---- | ------- | ------- |
| `--output PATH` / `-o PATH` | `openbb.spec` | Destination path for the `.spec` file. |

The `.spec` document carries:

```python
class SpecDocument(BaseModel):
    version: int          # SPEC_VERSION (currently 5); loader rejects on mismatch
    base_url: str         # the server the spec was generated against
    api_prefix: str       # path prefix prepended to operations (e.g. "/api/v1")
    commands: dict[str, _CommandSpec]
    routers: dict[str, Any]
    reference: dict[str, Any]   # mirror of obb.reference for OpenBB servers
    generated_at: str | None
    source_url: str       # URL the OpenAPI was fetched from
    api_version: str      # "openapi" / "swagger" field value from source
    content_sha256: str   # deterministic hash of every other field
```

Each `_CommandSpec` entry is keyed by dotted command path and carries `url_path`, `url_templates`, `method`, `description`, `parameters[]`, `providers[]`, `request_body_schema`, `response_schema`. The on-disk file is compact JSON; `write_spec` stamps `content_sha256` last so the document is self-verifying.

### Socrata mode

`--socrata-story URL_OR_PATH` builds a spec entirely from a Socrata story. The walker:

1. Collects every `datasetUid` referenced in the story.
2. Fetches column metadata per dataset.
3. Builds one router namespace per dataset with a `query` command wrapping `/resource/{uid}.json`.
4. Adds the standard SoQL parameters: `$select`, `$where`, `$limit`, `$offset`, `$order`, `$group`, `$having`, `$q`.

`--socrata-story` and `--server` are mutually exclusive when generating a spec.

## `--generate-extension`

```bash
openbb --generate-extension --spec PATH -o ./output-dir [other flags]
```

Builds a complete installable OpenBB Platform extension project from a `.spec` file. Exactly one `--spec` entry is required (an unnamed `--spec PATH` or `NAME=PATH`).

Required flags:

| Flag | Purpose |
| ---- | ------- |
| `--output PATH` / `-o PATH` | Project root directory written to disk. |

Optional naming flags (all default-derived from `--output` basename if omitted):

| Flag | Default | Purpose |
| ---- | ------- | ------- |
| `--provider-name NAME` | Basename of `--output` | Snake-case provider identifier. Drives the credential-lookup keys (`credentials.get(f"{provider}_<key>")`). |
| `--project-name NAME` | `openbb-<provider-name>` | PyPI distribution name in `pyproject.toml`. |
| `--package-name NAME` | `openbb_<provider-name>` | Snake-case Python package directory. |
| `--router-name NAME` | `<provider-name>` | Top-level router identifier. |

Command-filter flags:

| Flag | Default | Purpose |
| ---- | ------- | ------- |
| `--include PATTERN` | `[]` | Keep only commands matching the glob (repeatable). Takes priority over `--exclude`. |
| `--exclude PATTERN` | `[]` | Drop commands matching the glob (repeatable). Ignored when `--include` is set. |

Both filters use `fnmatch.fnmatchcase`. `*` is a wildcard — `--include 'equity.*'` keeps every command under the `equity` namespace; `--exclude 'equity.fundamentals.*'` drops the whole `fundamentals` subtree.

### Project layout

The generator writes the following structure under `--output`:

```
<output-dir>/
└── <package_name>/
    ├── pyproject.toml             # PEP 621 / Hatchling; every provider + router as entry points
    ├── README.md
    └── <package_name>/
        ├── __init__.py
        ├── utils.py                # runtime helpers shared by generated routers
        ├── providers/
        │   ├── __init__.py
        │   └── <provider_name>/
        │       ├── __init__.py     # Provider(name=..., fetcher_dict=..., credentials=[...])
        │       └── models/
        │           ├── __init__.py
        │           └── <command>.py   # QueryParams + Data + Fetcher per command
        └── routers/
            ├── __init__.py
            └── <top_level>.py      # @router.command(model="...") signatures
```

For specs that contain local-compute POST endpoints, the generator also writes a `providers/tools/models/` subtree.

### Output summary

`--generate-extension` prints a one-shot summary per package:

```
wrote project to <path>
  providers (N): <provider1>, <provider2>, ...
  routers (M): <router1>, <router2>, ...
  fetchers: K GET (across all providers)
  POST:     L local-compute commands
  install:  pip install -e <path>
  build:    openbb-build
```

### Installing the generated extension

```bash
pip install -e <output-dir>
openbb-build
```

After install, every command appears on `obb.*` with full IDE / type-checker support, contributes to `obb.reference`, and returns `OBBject` envelopes like any first-party extension.

### Credentials auto-promotion

Parameter names that look like credentials are promoted to the provider's `credentials=[...]` list when generating the extension. The detection includes obvious shapes: `api_key`, `apikey`, `app_token`, `X-API-Key`, `Authorization`, `client_secret`, `bearer_token`. After install, the values come through the standard openbb-core user settings flow (`~/.openbb_platform/user_settings.json` or `OPENBB_*` env vars).
