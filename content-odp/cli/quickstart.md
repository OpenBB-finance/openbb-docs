---
title: Quickstart
sidebar_position: 2
description: >
  Run one command in-process, through an openbb-api server, and from a .spec
  file, send a batch over stdin, and open the REPL.
keywords:
  - openbb-cli quickstart
  - one-shot
  - batch
  - interactive
  - .spec
---

The examples use the OECD and Cboe provider extensions, which need no API key. Install them next to the CLI with `pip install openbb-oecd openbb-cboe`.

## One command, in-process

Without a backend flag, the CLI imports the local `openbb` package and calls the matching function under `obb`:

```bash
openbb oecd.gdp_real --country japan --frequency annual
```

The first argument is the dotted command path, and each `--key value` pair becomes a keyword argument. The output is one JSON line on stdout with `ok`, plus `result` on success or `error` on failure. The exit status is 0 when `ok` is true and 1 when it is false. [Modes](./modes.md) describes the full wire format and how values are parsed.

## One command, through a server

`openbb-api`, from the `openbb-platform-api` package, serves every installed extension over HTTP on `http://127.0.0.1:6900` by default. Start it in one terminal and point the CLI at it from another:

```bash
openbb-api
```

```bash
openbb --server http://127.0.0.1:6900 oecd.gdp_real --country japan
```

On each invocation the CLI downloads `<URL>/openapi.json`, builds an argument parser for the requested command from the schema, validates the flags against it, and sends the request.

## One command, from a `.spec` file

A `.spec` file stores the processed OpenAPI document on disk, so later calls skip the download:

```bash
openbb --generate-spec --server http://127.0.0.1:6900 --output platform.spec
openbb --spec platform.spec oecd.gdp_real --country japan
```

The file records the server URL it was generated against, so `--server` is not needed alongside `--spec`.

## Batch

`--batch` reads one JSON request per line from stdin and writes one JSON response per line to stdout:

```bash
cat <<'EOF' | openbb --spec platform.spec --batch
{"id":"gdp","command":"oecd.gdp_real","params":{"country":"japan"}}
{"id":"spy","command":"cboe.equity.historical","params":{"symbol":"SPY"}}
EOF
```

Requests run concurrently, eight at a time unless `--batch-concurrency` or `OPENBB_CLI_BATCH_CONCURRENCY` says otherwise, and responses are written in completion order. Each response echoes the request's `id`, which is how you match them up.

## Interactive REPL

```bash
openbb -i
```

The REPL presents the installed extensions as menus. With `--spec platform.spec` or `--server URL`, the menus mirror that API instead. Anything after `-i` runs as the first input, using the REPL's slash-separated paths:

```bash
openbb -i /oecd/gdp_real --country japan
```

See [Structure and Navigation](./repl/structure-and-navigation.md) for how menus and paths work.

## Inspect the command catalog

`--list-commands` prints a JSON response whose `result` lists the name and short description of every command in a spec or on a server. `--describe` does the same for the parameters and response schema of one command.

```bash
openbb --spec platform.spec --list-commands
openbb --spec platform.spec --describe oecd.gdp_real
```

Both need `--spec` or `--server`; the in-process backend has no catalog to read. In batch mode, the same information is available through the reserved commands `__commands__` and `__schema__`.
