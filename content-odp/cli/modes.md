---
title: Modes
sidebar_position: 3
description: >
  One-shot dispatch, NDJSON batch, and the interactive REPL, with argument
  parsing rules, the request and response wire format, and exit codes.
keywords:
  - openbb-cli modes
  - non-TTY
  - batch
  - REPL
  - NDJSON
  - exit codes
---

`openbb` runs in one mode per invocation. `-i`, `--batch`, `--generate-spec`, `--generate-extension`, `--list-commands`, `--describe`, `--print-config-template`, and `--show-config` form one mutually exclusive group, so passing two of them is an argument error. With none of them, the CLI runs the command given on the command line and exits.

## One-shot

```bash
openbb <command.path> [--key value | --key=value ...]
```

The first positional argument is the dotted command path. How the flags after it are parsed depends on the backend.

With the in-process backend, the parser is generic. `--key value` and `--key=value` both work, hyphens in keys become underscores (`--start-date` is passed as `start_date`), and a flag with no value is passed as `true`. Values are matched against the JSON literals `true`, `false`, and `null` first, then read as Python literals, so `5` arrives as an integer, a quoted `'[1,2]'` as a list, and anything that is not a literal, such as `japan` or `2024-01-01`, as a string. A token that does not start with `--` where a key is expected stops the run with an error.

With `--spec` or `--server`, the CLI builds an argument parser for the command from its schema. Flag names match the parameter names exactly, types and choices are enforced, required parameters must be present, list parameters take space-separated values, and boolean parameters accept `--name` or `--no-name`. When the command declares OpenBB providers, `--provider NAME` removes the flags that belong to other providers, and passing one of them is an error.

```bash
openbb --spec platform.spec cboe.equity.historical --symbol SPY --interval 1d
```

The result is written to stdout as one JSON line holding a response object. When the command returns a stream, the CLI writes the stream's lines to stdout until the stream ends or you press Ctrl+C.

## Batch

```bash
openbb --batch
```

Batch mode reads NDJSON from stdin, one request per line, and writes one response line per request to stdout. Up to `--batch-concurrency` requests (default 8, or `OPENBB_CLI_BATCH_CONCURRENCY`) run at once, and each response is written as soon as its request finishes, so output order can differ from input order. Blank lines are skipped. A line that is not valid JSON or does not match the request schema produces a response with `ok` set to false and an error of type `RequestParseError`, and the batch continues with the next line.

With `--spec` or `--server`, two reserved commands expose the catalog. `__commands__` returns a list of `{name, description}` objects sorted by name. `__schema__` takes `{"name": "<command>"}`, optionally with `"provider"`, and returns that command's parameters and response schema. The in-process backend does not implement them.

```bash
cat <<'EOF' | openbb --spec platform.spec --batch
{"id":"1","command":"__commands__"}
{"id":"2","command":"__schema__","params":{"name":"oecd.gdp_real"}}
{"id":"3","command":"oecd.gdp_real","params":{"country":"japan"}}
EOF
```

## Wire format

Requests reject fields that are not listed here.

| Request field | Type | Required | Meaning |
| ------------- | ---- | -------- | ------- |
| `id` | string | no | Correlation id copied onto the response. |
| `command` | string | yes | Dotted command path, for example `oecd.gdp_real`. |
| `params` | object | no | Keyword arguments for the command. Defaults to `{}`. |

Response lines leave out fields whose value is null, so a successful line carries `ok` and `result`, and a failed line carries `ok` and `error`. The one exception is the `RequestParseError` line, which lists every field.

| Response field | Type | Meaning |
| -------------- | ---- | ------- |
| `id` | string | The request's `id`, when one was sent. |
| `ok` | boolean | Whether the command succeeded. |
| `result` | any | The command's output. The in-process backend returns the serialized `OBBject`; HTTP backends return the unwrapped response body. |
| `error` | object | `{"type": ..., "message": ...}` on failure. |

| Error type | Raised when |
| ---------- | ----------- |
| `CommandNotFound` | The in-process backend cannot resolve the command path under `obb`. |
| `HTTP<status>` | The upstream answered with an error status, for example `HTTP404`; the message holds the response body. |
| `AccessDenied` | An auth hook denied the request, raised an exception, or returned something other than an `AuthDecision`. |
| `UnknownNamespace` | With multiple specs, the command does not start with a mounted namespace. |
| `UnknownCommand`, `MissingParameter`, `UnknownProvider` | `__schema__` was called for a command that is not in the spec, without `name`, or with a provider the command does not declare. |
| `RequestParseError` | A batch input line could not be parsed. |

Any other failure uses the exception's class name as the type.

## Exit codes

| Status | Meaning |
| ------ | ------- |
| 0 | One-shot: `ok` was true, or a streamed result ended. Batch: every response had `ok` true. |
| 1 | One-shot: `ok` was false. Batch: at least one response had `ok` false. The in-process parser also exits with 1 when the argument list is malformed. |
| 2 | The run stopped before dispatch: no command given, a command or flag the spec parser rejected, a malformed `--spec` or `--query-param` value, an unreadable `--header-file` or `--query-param-file`, an auth hook that failed to import, `--generate-spec` without a source or with no mappable operations, or `--generate-extension` without exactly one spec or with filters that match nothing. |

## Interactive REPL

```bash
openbb -i [--spec PATH | --server URL] [initial input]
```

`-i` opens the REPL described in the [Interactive REPL section](./repl/structure-and-navigation.md). With `--spec` or `--server`, the menus are built from that API; otherwise they come from the installed extensions. Anything after the flags runs as the first input, written as a REPL path such as `/oecd/gdp_real --country japan`.

At launch the REPL adjusts two settings for the session without saving them. If the output mode is `tsv`, it switches to `rich`, and if interactive tables are off, it turns them on. Because the stored value cannot be told apart from the default, a `tsv` or `False` saved in `~/.openbb_platform/.cli.env` is overridden on every launch; change them for the session with `/settings/output` and `/settings/interactive`. `--debug` and `--dev` set the `DEBUG_MODE` and `DEV_BACKEND` settings and only take effect together with `-i`.

## Helper modes

| Flag | Effect |
| ---- | ------ |
| `--list-commands` | Print the command catalog as a JSON response, then exit. Needs `--spec` or `--server`. |
| `--describe COMMAND[:PROVIDER]` | Print one command's parameters and response schema as a JSON response, then exit. Needs `--spec` or `--server`. When the command declares providers, the output groups parameters by provider, and the `:PROVIDER` suffix returns a single provider's slice; for other commands the suffix is ignored. |
| `--print-config-template` | Print a TOML configuration template, then exit. Options without a resolved value are commented out. |
| `--show-config` | Print the merged TOML configuration as JSON, then exit. |
| `--generate-spec` | Write a `.spec` file built from `--server` or `--socrata-story`, then exit. |
| `--generate-extension` | Write an installable OpenBB extension project built from one `.spec` file, then exit. |
