---
title: Modes
sidebar_position: 3
description: >
  The three execution modes — non-TTY one-shot, batch NDJSON, and the
  interactive REPL — with their wire formats and entry points.
keywords:
  - openbb-cli modes
  - non-TTY
  - batch
  - REPL
  - NDJSON
---

`openbb` has three execution modes. They are mutually exclusive — `argparse` declares `-i`, `--batch`, `--generate-spec`, `--generate-extension`, `--list-commands`, `--describe`, `--print-config-template`, and `--show-config` as a single mutex group.

## Non-TTY one-shot *(default)*

```bash
openbb <command.path> [--key value | --key=value]
```

The CLI parses the positional `<command.path>` as a dotted command name and the trailing flag pairs as parameters. Argument values are coerced with `ast.literal_eval` after a short-circuit lookup for `true` / `false` / `null`. Hyphens in flag names are normalized to underscores (`--start-date` → `start_date`).

Output: one JSON line written to stdout, the serialization of a `Response` Pydantic model:

```python
class Response(BaseModel):
    id: str | None = None
    ok: bool
    result: Any = None
    error: ResponseError | None = None
```

Exit code: `0` when `ok` is `true`, `1` otherwise.

## Batch — NDJSON over stdin / stdout

```bash
openbb --batch
```

Reads NDJSON `Request` lines from stdin:

```python
class Request(BaseModel):
    id: str | None = None
    command: str
    params: dict[str, Any] = {}
```

Each request is dispatched concurrently up to `--batch-concurrency` (default `8`, env `OPENBB_CLI_BATCH_CONCURRENCY`). Responses are written to stdout as NDJSON in the order they complete, not the order they arrived. Use `id` to correlate responses with requests.

Reserved batch commands (also wired to `--list-commands` / `--describe`):

| Command | Effect |
| ------- | ------ |
| `__commands__` | Returns the full command catalog as `[{name, method, url_path, description}, ...]`. |
| `__schema__` | Returns the full schema for one command; `params` accepts `{name, provider?}`. |

Exit code: `0` when every response had `ok=true`, `1` otherwise.

Malformed input lines produce a `Response` with `ok=false` and `error.type = "RequestParseError"`; the batch keeps going.

## Interactive REPL

```bash
openbb -i [--spec PATH | --server URL]
```

Drops into a `prompt-toolkit` prompt with menu navigation, tab completion, command history, and the OBBject registry.

Behavior the REPL adjusts on entry:

| Setting | Default (non-TTY) | REPL override |
| ------- | ----------------- | ------------- |
| `OUTPUT_MODE` | `"tsv"` | flipped to `"rich"` if it was at its `"tsv"` default |
| `USE_INTERACTIVE_DF` | `False` | flipped to `True` if it was at its `False` default |
| `TEST_MODE` | n/a | forced to `False` |

User-set values for these settings are preserved.

The REPL accepts an initial command on the same line: `openbb -i economy.gdp --provider oecd`.

## Helper modes

| Flag | Purpose |
| ---- | ------- |
| `--list-commands` | Print the command catalog as JSON, then exit. |
| `--describe COMMAND[:PROVIDER]` | Print one command's schema as JSON, then exit. For an OpenBB upstream, the optional `:PROVIDER` suffix narrows the schema to that provider's parameter set; against a generic OpenAPI upstream the suffix is ignored. |
| `--print-config-template` | Print a documented TOML template covering every supported setting, then exit. Lines without a resolved value are commented out. |
| `--show-config` | Print the merged TOML config (all layers combined) as JSON, then exit. |
| `--generate-spec` | Build a `.spec` file from `--server` or `--socrata-story`, then exit. |
| `--generate-extension` | Generate an installable OpenBB extension from a `.spec` file, then exit. |
