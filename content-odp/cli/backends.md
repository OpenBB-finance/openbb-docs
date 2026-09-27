---
title: Backends
sidebar_position: 4
description: >
  The four dispatch backends — in-process LocalDispatcher, HTTP dispatcher
  against an openbb-platform-api server, HTTP dispatcher against a precomputed
  .spec file, and HTTP dispatcher against a generic OpenAPI 3.x server.
keywords:
  - openbb-cli backends
  - LocalDispatcher
  - HTTP dispatcher
  - .spec
  - OpenAPI
  - MultiSpecDispatcher
---

Every command goes through a `Dispatcher` — a Protocol declared at `openbb_cli.dispatchers.base.Dispatcher`:

```python
@runtime_checkable
class Dispatcher(Protocol):
    async def dispatch(self, request: Request) -> Response: ...
    async def aclose(self) -> None: ...
```

The dispatcher is selected from CLI flags by `openbb_cli.cli._build_dispatcher`:

| Selector | Dispatcher | Notes |
| -------- | ---------- | ----- |
| no `--server`, no `--spec` | `LocalDispatcher` | In-process; imports `from openbb import obb`. |
| `--server URL` | `http_dispatcher_from_server(URL)` | Fetches `<URL>/openapi.json` (or `--openapi-path`) at start, then dispatches through HTTP. |
| `--spec PATH` *(single, no namespace)* | `http_dispatcher_from_spec(load_spec(PATH))` | Skips the OpenAPI fetch. |
| `--spec NAME=PATH` *(one or more)* | `MultiSpecDispatcher({name: http_dispatcher_from_spec(...)})` | Each spec mounts under its namespace. |

`dispatch()` is async; one-shot mode wraps it in `asyncio.run`. Batch mode keeps the dispatcher open across requests and calls `aclose()` once the input stream ends.

## `LocalDispatcher` — in-process

`openbb_cli.dispatchers.local.LocalDispatcher`. The default backend when neither `--server` nor `--spec` is supplied. Imports the local `openbb` namespace package on first dispatch and resolves the dotted command path against it.

Trade-offs vs the HTTP backends:

- No HTTP roundtrip; lowest per-call latency once the import has happened.
- The initial `import openbb` and static-package load can take seconds; for short-lived invocations the HTTP backend with a precomputed `.spec` is faster cold-start.
- The full command surface is whatever extensions are installed in the active Python environment.

## HTTP dispatcher — server

`openbb_cli.dispatchers.http.http_dispatcher_from_server`. Built when `--server URL` is supplied (and no `--spec`).

On construction it calls `openbb_cli.dispatchers.openapi_schema.fetch_openapi(URL, path=openapi_path, headers=..., query_params=...)`. The fetched OpenAPI document is normalized into the same in-memory shape as a `.spec` document and used to build the argparse surface and validate parameters.

The HTTP dispatcher detects whether the upstream is an OpenBB Platform server by looking for the `provider` discriminator parameter on operations; that detection turns on OpenBB-specific affordances (per-provider parameter narrowing, `OBBject` envelope handling, the `obb.reference` menu tree).

## HTTP dispatcher — `.spec`

`openbb_cli.dispatchers.http.http_dispatcher_from_spec(load_spec(PATH))`. Same dispatcher as `--server`, but seeded from an on-disk JSON document instead of a live HTTP fetch.

The `.spec` document is the output of `--generate-spec`. Top-level shape (`openbb_cli.dispatchers.spec.SpecDocument`):

| Field | Type | Notes |
| ----- | ---- | ----- |
| `version` | `int` | `SPEC_VERSION` constant; currently `5`. Load fails on mismatch. |
| `base_url` | `str` | Server URL the spec was generated against. |
| `api_prefix` | `str` | Path prefix prepended to every operation (default detected from `paths`). |
| `commands` | `dict[str, _CommandSpec]` | Keyed by dotted command path. Each entry carries `url_path`, `url_templates`, `method`, `description`, `parameters`, `providers`, `request_body_schema`, `response_schema`. |
| `routers` | `dict[str, Any]` | Namespace tree used by the REPL. |
| `reference` | `dict[str, Any]` | Mirror of `obb.reference` when the source was an OpenBB server. |
| `generated_at` | `str \| None` | ISO timestamp. |
| `generator` | `str` | Identifier string written by `--generate-spec`. |
| `source_url` | `str` | URL the OpenAPI document was fetched from. |
| `api_version` | `str` | Value of `openapi` / `swagger` field from the source document. |
| `content_sha256` | `str` | Stamped at write time, deterministically hashes every other field. |

See [Codegen](/odp/cli/codegen) for how to generate a spec, and the [CLI flags reference](/odp/cli/reference/cli-flags) for the surrounding flag set.

## HTTP dispatcher — generic OpenAPI 3.x

The same `http_dispatcher_from_server` / `http_dispatcher_from_spec` dispatchers also serve any OpenAPI 3.x upstream. The CLI applies its OpenBB-aware behavior only when the operation has a `provider` discriminator parameter; without it, the upstream is treated as a plain OpenAPI source.

Practical implications when the upstream is not an OpenBB server:

| Aspect | OpenBB upstream | Generic OpenAPI |
| ------ | --------------- | --------------- |
| Response envelope | `OBBject` (`id`, `results`, `provider`, `warnings`, `chart`, `extra`) | Whatever the server returns. |
| Per-provider flag narrowing | `--provider X` filters accepted flags | All declared flags are accepted. |
| `--describe COMMAND:PROVIDER` | Returns the provider's slice | Suffix ignored. |
| REPL menu tree | Built from `obb.reference` (router descriptions, command groupings) | Built from URL path prefixes. |

OpenAPI documents can be fetched from any of: a server with `/openapi.json`, a server with a custom path (`--openapi-path`), or an HTML page that embeds the spec inline (`openbb_cli.dispatchers.openapi_schema` extracts it).

## `MultiSpecDispatcher` — multi-spec

`openbb_cli.dispatchers.multi.MultiSpecDispatcher`. Built when `--spec` is passed more than once or as `NAME=PATH`. Mounts each child dispatcher under its namespace; commands resolve as `<namespace>.<rest>`.

Routing is purely by leading namespace token: a dispatched `Request(command="congress.bill.info", ...)` is routed to the child dispatcher registered under `"congress"`, which sees the command `"bill.info"`.

Configuration is per-namespace — headers, query params, and auth hooks can be scoped:

| Source | Scope |
| ------ | ----- |
| `--header Authorization=...` | Global; sent to every backend. |
| `--header congress:Authorization=...` | Only the `congress` backend. |
| `[headers]` in `openbb.toml` | Global. |
| `[specs.congress.headers]` in `openbb.toml` | Only the `congress` backend. |
| `auth-hook = "..."` (top level) | Global. |
| `[specs.congress] auth-hook = "..."` | Only the `congress` backend; overrides the global. |

`--list-commands` aggregates across every namespace; `--describe NAMESPACE.command[:provider]` resolves to the right backend automatically.

## Request / Response wire format

`openbb_cli.dispatchers.protocol.Request` / `Response`:

```python
class Request(BaseModel):
    model_config = ConfigDict(extra="forbid")
    id: str | None = None
    command: str
    params: dict[str, Any] = {}

class Response(BaseModel):
    model_config = ConfigDict(extra="forbid")
    id: str | None = None
    ok: bool
    result: Any = None
    error: ResponseError | None = None

class ResponseError(BaseModel):
    model_config = ConfigDict(extra="forbid")
    type: str
    message: str
```

Both models use `extra="forbid"`; unknown fields error rather than silently drop. The same models drive batch NDJSON, one-shot stdout, and the introspection commands.
