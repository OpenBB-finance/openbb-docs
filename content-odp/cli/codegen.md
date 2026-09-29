---
title: Codegen
sidebar_position: 8
description: >
  Save an OpenAPI document or a Socrata story as a .spec file, and generate an
  installable OpenBB extension project from a .spec file.
keywords:
  - openbb-cli codegen
  - --generate-spec
  - --generate-extension
  - .spec
  - --socrata-story
  - OpenBB extension
---

The CLI has two generators. `--generate-spec` reads an OpenAPI 3.x document, or a Socrata story, and writes a `.spec` file that the CLI can dispatch from. `--generate-extension` reads one `.spec` file and writes a Python project that installs as an OpenBB extension. Both are modes: they run, write their output, and exit.

## `--generate-spec` from an OpenAPI document

```bash
openbb --generate-spec --server https://markets.newyorkfed.org \
  --openapi-path /static/docs/markets-api.yml \
  --output nyfed.spec
```

The source is `--server` (or `OPENBB_SERVER_URL`, or `server` in `openbb.toml`). Without `--openapi-path`, the CLI reads `<URL>/openapi.json` and falls back to an OpenAPI document embedded in the page at `<URL>/`. `--openapi-path` takes a path appended to the server URL or a full URL, and is needed when the document lives elsewhere, as it does for the NY Fed Markets API above. JSON and YAML are both accepted. Headers and query parameters from `-H`, `-Q`, `--header-file`, `--query-param-file`, and `openbb.toml` are sent with the download, which helps when the API requires a key even for its schema.

The file is written to `--output`, `openbb.spec` by default. A single positional argument after the flags is accepted as the output path when `--output` is not given. On success the CLI prints `wrote <N> commands to <path>`. When the document has no GET or POST operations it can map, nothing is written and the exit status is 2.

[Backends](./backends.md#spec-files) describes the fields of a `.spec` file and how OpenAPI paths become command names. The file is compact JSON with a SHA-256 digest of its contents, so regenerate it rather than editing it by hand.

## `--generate-spec` from a Socrata story

```bash
openbb --generate-spec --socrata-story "https://<portal>/stories/s/<xxxx-xxxx>" --output portal.spec
```

`--socrata-story` accepts the browser URL of a story, to which `.json` is appended, a story JSON file on disk, or the URL of a single dataset in the form `https://<portal>/resource/<uid>.json` or `https://<portal>/api/views/<uid>`. A story file must name its portal in `dataSource.domainCName`. When both `--socrata-story` and `--server` are set, the story is used.

The generator collects every `datasetUid` in the story and fetches each view's metadata from the portal. Datasets and filtered views become commands, a derived view is followed to the dataset behind it, and other asset types are skipped and counted in the summary line, `wrote <N> dataset commands to <path> (skipped <M> non-dataset views)`.

Command names come from the dataset names, converted to snake_case. Datasets whose names share a run of two or more words are grouped under a menu named after those words, and each takes the rest of its name as the command name, or `query` when nothing is left. Other datasets become top-level commands.

Each column other than a date column becomes a filter flag named after the column, with a fixed list of choices when the column has few enough distinct values. Date columns get no flag of their own; instead, `--start_date` and `--end_date` filter the first date column inclusively. `--limit`, default 1000, and `--offset` map to Socrata's `$limit` and `$offset`, and `--limit 0` pages through the whole dataset. When a dataset has a date or time column, results are sorted newest first and `--limit N` returns every row for the N most recent dates rather than N rows.

Without `--generate-spec`, `--socrata-story` builds the same spec in a temporary file and dispatches against it, as described in [Backends](./backends.md#multiple-specs).

## `--generate-extension`

```bash
openbb --generate-extension --spec nyfed.spec --provider-name nyfed --output ./build
```

The command needs exactly one `--spec`, named or not, and a spec with at least one command. Pass `--output` explicitly: it is the parent directory of the project, and without it the default `openbb.spec` is used as a directory name.

Names derive from one slug. `--provider-name` is converted to snake_case to form it; without the flag, the name of the `--output` directory is used, so `--output ./openbb-nyfed` alone would give the slug `openbb_nyfed`. From the slug `nyfed`, the defaults are the project name `openbb-nyfed`, the package `openbb_nyfed`, and the namespace `obb.nyfed`, and the project is written to `./build/openbb-nyfed/`.

| Flag | Default | Effect |
| ---- | ------- | ------ |
| `--output`, `-o` | `openbb.spec` | Parent directory for the project. |
| `--provider-name` | name of the `--output` directory | Source of the slug used for the provider, namespace, and default names. |
| `--project-name` | `openbb-<slug>` | Distribution name in `pyproject.toml` and the project directory name. |
| `--package-name` | `openbb_<slug>` | Python package directory. |
| `--router-name` | none | Accepted, but not used by the v5 generator; the namespace is always the slug. |
| `--include PATTERN` | `None` | Keep only commands whose dotted name matches the pattern. Repeatable. When set, `--exclude` is ignored. |
| `--exclude PATTERN` | `None` | Drop commands whose dotted name matches the pattern. Repeatable. |

Patterns are case-sensitive shell-style globs matched against the full dotted command name. For a spec generated from an `openbb-api` server, `--include 'fred.*'` keeps only the FRED commands, and `--exclude 'fred.fixedincome.*'` drops that subtree. When a filter is active the CLI prints how many commands it kept, and if none match it exits with status 2.

If the spec declares OpenBB providers, the project gets one provider per declared provider, and each command's fetcher is generated for every provider that serves it. Otherwise there is a single provider named after the slug. POST operations with a JSON request body are generated as command functions under a `tools` provider. Commands under a top-level `coverage` namespace are skipped.

### Project layout

```text
build/
└── openbb-nyfed/
    ├── pyproject.toml
    ├── README.md
    ├── tests/
    │   ├── __init__.py
    │   └── test_nyfed_fetchers.py
    └── openbb_nyfed/
        ├── __init__.py
        ├── utils.py
        ├── providers/
        │   ├── __init__.py
        │   ├── nyfed/
        │   │   ├── __init__.py
        │   │   └── models/
        │   │       ├── __init__.py
        │   │       └── <command>.py
        │   └── tools/
        │       ├── __init__.py
        │       └── models/
        │           ├── __init__.py
        │           └── <command>.py
        └── routers/
            ├── __init__.py
            ├── nyfed.py
            └── <namespace>.py
```

`pyproject.toml` builds with Hatchling, depends on `openbb-core>=2.0.0`, and registers each provider under the `openbb_provider_extension` entry point group and the root router, `routers/nyfed.py`, under `openbb_core_extension`. A `[tool.openbb-codegen]` table records the spec's source URL, API version, generator, timestamp, format version, and SHA-256. The generated `README.md` lists every command with its provider, and the credentials each provider needs.

Each provider package declares a `Provider` with its credentials and a fetcher map. Its `models/` directory holds one module per command, named after the dotted path with dots replaced by underscores, and each module defines the command's query parameters, its data model, and a fetcher that calls the upstream URL. `utils.py` carries the response-unwrapping helpers the fetchers share. `routers/` holds one module per namespace in the spec plus the root router that mounts them. The `tools/` directory appears only when the spec has POST operations with a request body, and `tests/` only when at least one command has values for all of its required parameters in the spec's examples, defaults, or choices; the tests are marked `record_http` and scrub credentials from recorded requests.

When `ruff` is installed in the running Python environment or on `PATH`, the generator runs `ruff check --fix --unsafe-fixes` and `ruff format` over the project.

### Summary and installation

The command prints a summary with the install steps:

```text
wrote project to build/openbb-nyfed
  providers (<N>): <provider>, ...
  routers (1): nyfed
  fetchers: <N> GET (across all providers)
  POST:     <N> local-compute commands
  install:  pip install -e build/openbb-nyfed
  build:    openbb-build
```

```bash
pip install -e build/openbb-nyfed
openbb-build
```

The commands then appear under `obb.nyfed` in Python and as `nyfed.<command>` for the CLI's in-process backend.

### Credentials

Parameters that carry credentials are removed from the command signatures and registered as provider credentials. A parameter counts as a credential when its name, lower-cased with hyphens turned into underscores, is one of `api_key`, `api_token`, `apikey`, `x_api_key`, `x_apikey`, `key`, `subscription_key`, `ocp_apim_subscription_key`, `app_id`, `app_key`, `app_token`, `appid`, `client_id`, `client_secret`, `client_token`, `token`, `access_token`, `auth_token`, `x_auth_token`, `bearer_token`, `secret`, `secret_key`, `authorization`, `consumer_key`, `consumer_secret`, `private_key`, or `session_token`. Required header and cookie parameters count as credentials whatever their name.

At run time each fetcher reads `<provider>_<name>` from the OpenBB credentials, for example `nyfed_api_key`, and sends the value in the parameter's original place: query string, header, or cookie. Store the value in `~/.openbb_platform/user_settings.json` under `credentials`, or in an environment variable with the same name in upper case, such as `NYFED_API_KEY`.

```json
{
  "credentials": {
    "nyfed_api_key": "..."
  }
}
```
