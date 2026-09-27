---
title: Advanced Routines
sidebar_position: 3
description: >
  Parameterize ODP CLI routines with input arguments, variables, relative
  date keywords, and foreach loops.
keywords:
  - openbb-cli routines
  - $ARGV
  - variables
  - relative dates
  - foreach
  - loops
---

Before a routine runs, `exe` replaces every word that starts with `$` and expands loops. If a variable is undefined, an index is out of range, or a loop is not closed, it prints an error and runs nothing.

## Input arguments

`exe --input` (or `-i`) passes a comma-separated list into the routine as `$ARGV`. `$ARGV` on its own expands to the whole list joined with commas, `$ARGV[0]` to the first value, `$ARGV[1]` to the second, and a slice such as `$ARGV[1:]` or `$ARGV[:2]` to part of the list joined with commas.

```text
/cboe/equity/historical --symbol $ARGV[0] --start_date $1YEARSAGO
/technical/rsi --data OBB0
```

Saved as `rsi_check.openbb`, the routine runs for any symbol:

```text
exe --file rsi_check.openbb -i SPY
```

To pass a comma-separated value as a single argument, wrap it in square brackets. With `-i [SPY,QQQ],IWM`, `$ARGV[0]` is `SPY,QQQ` and `$ARGV[1]` is `IWM`. Bracketed groups always come first in `$ARGV`, followed by the remaining values in order.

## Variables

A line of the form `$NAME = value` defines a variable and is not run itself. A value with commas becomes a list. Names use letters, digits, and underscores, and values may contain letters, digits, underscores, hyphens, periods, and spaces. References follow the same rules as `$ARGV`: `$NAME` expands to the value, or to a list joined with commas, and `$NAME[1]` or `$NAME[1:]` select from a list.

```text
$SYMBOLS = SPY,QQQ,IWM
$START = 2024-01-01
/cboe/equity/historical --symbol $SYMBOLS[0] --start_date $START
```

## Relative dates

Some `$` words expand to a date in `YYYY-MM-DD` form, computed when the routine runs. They are written in upper case.

| Keyword | Expands to |
| ------- | ---------- |
| `$<N>DAYSAGO`, `$<N>MONTHSAGO`, `$<N>YEARSAGO` | The date N days, months, or years before today, such as `$30DAYSAGO` or `$1YEARSAGO`. The unit is always plural. |
| `$<N>DAYSFROMNOW`, `$<N>MONTHSFROMNOW`, `$<N>YEARSFROMNOW` | The date N units after today. |
| `$LAST<WEEKDAY>` | The most recent such weekday before today, such as `$LASTMONDAY`. |
| `$NEXT<WEEKDAY>` | The next such weekday after today, such as `$NEXTFRIDAY`. |
| `$LAST<MONTH>` | The first day of the most recent such month that has already ended, such as `$LASTJUNE`. The current month counts as not yet ended. |
| `$NEXT<MONTH>` | The first day of the next such month that has not started, such as `$NEXTNOVEMBER`. |

```text
/cboe/equity/historical --symbol SPY --start_date $3MONTHSAGO
/news/company --symbol SPY --start_date $LASTMONDAY --provider nasdaq
```

## Foreach loops

A loop starts with `foreach $$NAME in LIST` and ends with a line that contains only `end`. `LIST` is a comma-separated list or anything that expands to one, such as `$SYMBOLS`, `$ARGV`, or `$ARGV[1:]`, and its items may contain only letters, digits, hyphens, and periods. The lines in between are repeated once per item, with `$$NAME` replaced by the item; indenting them is optional. The loop variable's name uses letters and underscores, and loops cannot be nested.

```text
$SYMBOLS = SPY,QQQ,IWM

foreach $$S in $SYMBOLS
    /cboe/equity/historical --symbol $$S --start_date $6MONTHSAGO --register_key $$S
end

/technical/ema --data IWM --length 20
```

Each pass stores its result under the symbol as the registry key, so the last line can refer to the IWM prices by name. A line inside the loop that uses a different `$$` name is an error, and a loop whose body never uses its variable runs anyway with a warning.
