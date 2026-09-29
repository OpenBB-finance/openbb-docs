---
title: Results Registry
sidebar_position: 4
description: >
  How the ODP CLI REPL caches command results, how to reuse them as input,
  load files into the cache, and reshape or save cached tables in the
  /feature menu.
keywords:
  - openbb-cli REPL
  - results
  - OBBject registry
  - --data OBB0
  - load
  - feature
---

Each data command's result is added to a registry for the rest of the session, unless the command ran with `--register_obbject`. Results are numbered from the newest: `OBB0` is the latest, `OBB1` the one before, and so on, so the numbers shift each time a new result arrives. A result stored with `--register_key NAME` can also be addressed by that name, which does not change.

The registry keeps 10 results and drops the oldest when it is full; the `obbject_res` setting changes the limit. Help screens list the most recent five, a number set by `obbject_display`, with the command that produced each one.

## Viewing results

`results` on its own lists the cached results with their metadata. `--index N` or `--key NAME` shows one result's data, and `--chart` draws it instead; see [Interactive Charts](./interactive-charts.md).

```text
results
results --index 0
results --key spy_daily --chart
```

## Using a result as input

Commands that take a `data` parameter, which includes most of `/technical`, `/quantitative`, and `/econometrics`, accept a cached result by index label or by key:

```text
/cboe/equity/historical --symbol SPY --start_date 2024-01-01 --register_key spy_daily
/technical/ema --data OBB0 --length 20
/technical/rsi --data spy_daily
```

The `--data` choices are refreshed as results arrive, so tab completion offers the labels and keys that currently exist.

## Loading files

`load --file PATH` reads a file into the registry. The path is relative to the OpenBB data folder, `~/OpenBBUserData` by default, and tab completion lists the supported files found there. CSV, JSON, and Excel files (`.xlsx`, `.xls`) become one result each; `--sheet-name` picks an Excel sheet, and the first sheet is read otherwise. SQLite files (`.db`, `.sqlite`, `.sqlite3`) add one result per table, each registered under the key `<file name without extension>_<table>`, and the rows are read only when the table is used. `--register_key NAME` names a CSV, JSON, or Excel result, or a database with a single table.

```text
load --file prices/spy.csv --register_key spy_file
```

## The feature menu

`/feature` works on one cached table at a time. `list` shows the cached results with their row and column counts, and `select N` picks one by the index that `list` prints, or by its key. The other commands act on the selected table.

| Command | Effect |
| ------- | ------ |
| `list` | List cached tables and mark the selected one. |
| `select N` | Select a table by index or key. |
| `info` | Show the shape and each column's type and null count. |
| `view` | Display the table; `--head N` or `--tail N` limits the rows. |
| `colname` | List column names and types. |
| `coltype COLUMN DTYPE` | Convert a column to a pandas dtype such as `float64`, `datetime64[ns]`, or `category`; `--categories` and `--ordered` apply to `category`. |
| `addcol NAME EXPRESSION` | Add a column computed with `DataFrame.eval`, for example `addcol spread high - low`. |
| `modifycol NAME EXPRESSION` | Replace a column with the result of a `DataFrame.eval` expression, for example `modifycol close close * 2`. |
| `dropcol COLUMN ...` | Remove one or more columns. |
| `renamecol OLD NEW` | Rename a column. |
| `query EXPRESSION` | Evaluate a pandas expression in which `df` is the table and each column is available by name. `--save` replaces the table with a DataFrame result. |
| `join N` | Merge with another cached table on `--on`, on `--left-on` and `--right-on`, or on the index when neither is given. `--type` is `inner` (default), `left`, `right`, or `outer`. Shows the first 20 rows unless `--save` replaces the selected table. |
| `copy NAME` | Register a copy of the table under a new key. |
| `save FILE` | Write the table to the OpenBB data folder as `.csv`, `.json`, `.xlsx`, `.xls`, `.db`, `.sqlite`, or `.sqlite3`. |
| `delete N` | Remove a table from the registry. |

Column changes and `--save` results replace the cached table in place, so later `--data` references see the modified data. Wrap an expression that contains quotes in double quotes, and avoid commas inside it, because the REPL splits positional arguments at commas even when they are quoted:

```text
/feature/select 0
query "df.query('close > 500')"
addcol range high - low
save spy_filtered.csv
```

`save` takes `--index` to include the DataFrame index. For Excel files, `--sheet-name` sets the sheet, `Sheet1` by default. For SQLite files, `--table` sets the table name, `data` by default, and `--mode` is `replace` (default), `append`, or `fail`.
