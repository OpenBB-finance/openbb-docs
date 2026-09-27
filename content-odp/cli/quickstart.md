---
title: Quickstart
sidebar_position: 2
description: >
  Dispatch a single command, run a batch from stdin, drop into the REPL.
keywords:
  - openbb-cli quickstart
  - one-shot
  - batch
  - interactive
---

## One-shot dispatch — in-process

The default backend imports the local `openbb` package and dispatches against `obb`:

```bash
openbb economy.gdp --provider oecd --limit 5
```

Output is a single JSON line written to stdout. Exit status is `0` when the response's `ok` field is `true`, otherwise `1`.

## One-shot dispatch — through a server

```bash
openbb --server http://127.0.0.1:6900 equity.price.historical --symbol AAPL --provider fmp
```

The CLI fetches `<URL>/openapi.json` once per invocation, builds the argparse surface from it, then issues the request. Servers that publish their OpenAPI document at a non-default path need `--openapi-path`.

## One-shot dispatch — from a `.spec` file

```bash
openbb --generate-spec --server https://api.example.com --output api.spec
openbb --spec api.spec some.command --key value
```

A `.spec` file is the OpenAPI document already fetched, normalized, and stored on disk. Subsequent calls skip the network fetch and parse step.

## Batch — NDJSON in / out

```bash
cat <<'EOF' | openbb --spec api.spec --batch
{"id":"a","command":"some.command","params":{"limit":5}}
{"id":"b","command":"some.other.command","params":{}}
EOF
```

Each input line is a `Request` object (`{id?, command, params?}`); each output line is a `Response` object (`{id?, ok, result?, error?}`). Concurrency defaults to 8 and is settable via `--batch-concurrency` or `OPENBB_CLI_BATCH_CONCURRENCY`.

## Interactive REPL

```bash
openbb -i
openbb -i --spec api.spec
openbb -i --server http://127.0.0.1:6900
```

The REPL switches the default output mode to `rich` and enables interactive DataFrame rendering. The non-TTY default output mode remains `tsv`.

## Inspect what's available

```bash
openbb --spec api.spec --list-commands       # JSON list of all commands
openbb --spec api.spec --describe some.cmd   # JSON schema for one command
```

The same calls work as reserved commands in batch mode (`__commands__`, `__schema__`).
