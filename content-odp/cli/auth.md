---
title: Authentication
sidebar_position: 6
description: >
  Headers, query params, and importable auth hooks. AuthContext / AuthDecision
  contract for RBAC, token refresh, and per-request credentials.
keywords:
  - openbb-cli auth
  - AuthContext
  - AuthDecision
  - auth-hook
  - RBAC
  - X-API-Key
---

The CLI supports three layers of authentication: static headers, static query params, and an importable auth hook. All three apply to every HTTP-backed dispatch (server, single-spec, multi-spec). The in-process `LocalDispatcher` doesn't make HTTP calls and ignores them.

## Static headers

```bash
openbb --server URL \
  -H "Authorization: Bearer xxx" \
  -H "X-Tenant: acme" \
  some.command
```

Both `KEY=VALUE` and `KEY: VALUE` forms are accepted. Repeat `-H` / `--header` for multiple entries.

Sources (lowest priority to highest):

1. `[headers]` table in `openbb.toml`.
2. `[specs.<ns>.headers]` for the matching namespace (multi-spec).
3. `--header-file PATH` (JSON object of string values).
4. `-H` / `--header` flags.

Per-namespace scoping (multi-spec): prefix the flag value with `<NS>:` to apply only to that backend — `-H congress:Authorization=Bearer xxx`.

## Static query parameters

```bash
openbb --server URL -Q api_key=xxx some.command
```

Sources (lowest priority to highest):

1. `[query]` table in `openbb.toml`.
2. `[specs.<ns>.query]` for the matching namespace.
3. `--query-param-file PATH` (JSON object of string values).
4. Environment variables prefixed `OPENBB_HTTP_QUERY_` — `OPENBB_HTTP_QUERY_API_KEY=xxx` becomes `?api_key=xxx`.
5. `-Q` / `--query-param` flags.

Per-namespace scoping mirrors headers: `-Q congress:api_key=xxx`.

## Auth hooks

For RBAC, expiring tokens, or per-user credentials, point `auth-hook` at an importable callable. Configured in TOML by `module:attribute` path — global, or per `[specs.<ns>]`:

```toml
auth-hook = "myapp.auth:default_hook"          # global

[specs.congress]
path = "/path/to/congress.spec"
auth-hook = "myapp.auth:congress_hook"         # overrides global

[specs.internal]
path = "/path/to/internal.spec"
auth-hook = "myapp.auth:rbac_hook"
```

The hook receives an `AuthContext` and returns an `AuthDecision`. Both are frozen dataclasses defined in `openbb_cli.auth`:

```python
@dataclass(frozen=True)
class AuthContext:
    namespace: str | None     # spec namespace, or None for single-spec / server
    command: str              # dotted command path
    params: dict[str, Any] = field(default_factory=dict)
    method: str = "post"      # http method

@dataclass(frozen=True)
class AuthDecision:
    headers: dict[str, str] | None = None
    query_params: dict[str, str] | None = None
    allow: bool = True
    deny_reason: str | None = None
```

Example RBAC hook:

```python
# myapp/auth.py
from openbb_cli.auth import AuthContext, AuthDecision
from myapp.identity import current_user, get_token

def rbac_hook(ctx: AuthContext) -> AuthDecision:
    user = current_user()
    if not user.can_access(ctx.namespace, ctx.command):
        return AuthDecision(allow=False, deny_reason=f"{user.role} cannot call {ctx.command}")
    return AuthDecision(headers={"Authorization": f"Bearer {get_token(user)}"})
```

Hook resolution rules:

- Both sync and async callables are accepted; coroutines are awaited.
- The hook is resolved at startup by `openbb_cli.auth.resolve_auth_hook(spec)` — `module:attribute` form. Missing modules, missing attributes, and non-callables raise on startup; the CLI exits with status 2.
- Returned `headers` / `query_params` merge on top of the static auth sources (hook wins on conflict).
- `allow=False` short-circuits the dispatch with an `AccessDenied` error response. No network call is made.

## Hooks and introspection

`--list-commands` invokes the hook for every command and silently drops denied entries from the listing. `--describe COMMAND` returns `AccessDenied` when the hook denies. RBAC implementations that hide endpoints hide them everywhere — discovery, schema, and dispatch.
