---
title: Authentication
sidebar_position: 7
description: >
  Static headers, query parameters, and importable auth hooks for the HTTP
  backends, with the AuthContext and AuthDecision contract used for RBAC and
  per-request credentials.
keywords:
  - openbb-cli auth
  - AuthContext
  - AuthDecision
  - auth-hook
  - RBAC
  - headers
  - query parameters
---

Credentials for HTTP backends (`--server`, a single spec, or several specs) come from three places: static headers, static query parameters, and an importable auth hook that runs before every request. The in-process backend makes no HTTP calls and ignores all three; it reads provider credentials from the OpenBB user settings, as described in [Data Sources](./repl/data-sources.md).

## Static headers

```bash
openbb --server http://127.0.0.1:6900 \
  -H "Authorization: Bearer $TOKEN" \
  -H "X-Tenant: acme" \
  oecd.gdp_real --country japan
```

`-H` accepts `KEY=VALUE` and `KEY: VALUE`, splitting at whichever separator comes first, and can be repeated. The same headers are sent when the CLI downloads a server's OpenAPI document.

Headers are merged key by key from the `[headers]` table in `openbb.toml`, then the JSON object in `--header-file`, then `-H` flags, with later sources winning. With several specs mounted, a flag written as `-H NS:KEY=VALUE` and the `[specs.NS.headers]` table apply only to namespace `NS` and override global headers of the same name there.

## Static query parameters

```bash
openbb --spec api.spec -Q api_key="$API_KEY" some.command
```

`-Q` takes `KEY=VALUE` and can be repeated. Query parameters are merged from the `[query]` table, then `--query-param-file`, then environment variables named `OPENBB_HTTP_QUERY_<NAME>`, then `-Q` flags. The part of the variable name after the prefix is lower-cased, so `OPENBB_HTTP_QUERY_API_KEY=xxx` sends `api_key=xxx`. Namespace scoping works as for headers, with `-Q NS:KEY=VALUE` and `[specs.NS.query]`.

## Auth hooks

An auth hook is a Python callable that the CLI imports by `module.path:attribute` and calls before each HTTP request. Use it for tokens that expire, credentials held in a vault, or rules about which user may call which command. Hooks are configured in `openbb.toml`, either at the top level for every backend or inside a `[specs.NAME]` table, where the namespace's hook replaces the top-level one:

```toml
auth-hook = "myapp.auth:default_hook"

[specs.nyfed]
path = "/srv/specs/nyfed.spec"
auth-hook = "myapp.auth:nyfed_hook"

[specs.internal]
path = "/srv/specs/internal.spec"
auth-hook = "myapp.auth:rbac_hook"
```

The hook receives an `AuthContext` and returns an `AuthDecision`, both frozen dataclasses importable from `openbb_cli.auth`.

| `AuthContext` field | Type | Value |
| ------------------- | ---- | ----- |
| `namespace` | `str \| None` | The spec namespace, or `None` for `--server` and a single unnamed spec. |
| `command` | `str` | Dotted command path within that namespace. |
| `params` | `dict[str, Any]` | The request parameters. |
| `method` | `str` | `get` or `post` for a dispatch, `list` during `--list-commands`, and `schema` during `--describe`. |

| `AuthDecision` field | Type | Default | Effect |
| -------------------- | ---- | ------- | ------ |
| `headers` | `dict[str, str] \| None` | `None` | Headers added to this request. |
| `query_params` | `dict[str, str] \| None` | `None` | Query parameters added to this request. |
| `allow` | `bool` | `True` | `False` denies the request. |
| `deny_reason` | `str \| None` | `None` | Message returned with the denial. |

The following hook, saved as `myapp/auth.py` on the Python path, denies commands the current user may not call and adds a bearer token otherwise. `current_user` and `get_token` stand in for your own identity code.

```python
from openbb_cli.auth import AuthContext, AuthDecision

from myapp.identity import current_user, get_token


def rbac_hook(ctx: AuthContext) -> AuthDecision:
    user = current_user()
    if not user.can_access(ctx.namespace, ctx.command):
        return AuthDecision(allow=False, deny_reason=f"{user.role} cannot call {ctx.command}")
    return AuthDecision(headers={"Authorization": f"Bearer {get_token(user)}"})
```

Hooks can be plain functions or coroutines; the CLI awaits the result when needed. Headers and query parameters from the decision take precedence over the static ones, and parameters that the command itself sends in the query string or as headers take precedence over the hook's. A decision with `allow=False` ends the request with an `AccessDenied` error and no network call. A hook that raises, or returns anything other than an `AuthDecision`, is treated as a denial, with the exception or the wrong type named in the message.

Configured hooks are imported on every invocation, before the selected mode runs, even for `--show-config`, `--print-config-template`, and the in-process backend. A malformed `module.path:attribute` string, a module that cannot be imported, a missing attribute, or an attribute that is not callable stops the CLI with exit status 2. Hooks are not called when the CLI downloads an OpenAPI document; only static headers and query parameters are sent then.

## Hooks and the command catalog

`--list-commands` and the `__commands__` batch command call the hook once for every command and leave out the ones it denies. `--describe` and `__schema__` return `AccessDenied` for a denied command. A hook that hides a command therefore hides it from listing, description, and dispatch alike.
