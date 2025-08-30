---
title: OBB.WIDGET
sidebar_position: 16
description: This page provides an overview of the basics of the OpenBB add-in for Microsoft Excel. It covers the basic usage of the add-in and the available functions.
keywords:
  - Microsoft Excel
  - Add-in
  - Basics
  - Examples
  - Functions
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="OBB.WIDGET | OpenBB Add-in for Excel Docs" />

This is the most important formula that is available, as it allows you to access any dataset available from the OpenBB workspace.

:::info

- Make sure your backend's CORS settings allow requests coming from [https://excel.openbb.co](https://excel.openbb.co).
- Requests via HTTP will be blocked by Excel. So if you are using the Add-in for Excel on Mac or Office on the web with Safari browser you need to run your backend via HTTPS.

:::

It has the following format:

```excel
=OBB.WIDGET(<BACKEND NAME>,<WIDGET ID> or <WIDGET NAME>, <PARAMETERS (OPTIONAL)>)
```

Where parameters, shows up as `{"param1","value1";"param2","value2"; ...}`.

Here are a few examples:

```excel
=OBB.WIDGET("DTCC Trades","swap_rate_levels_custom_obb",{"currency","USD";"swap_type","OIS";"period","1y"})
```

```excel
=OBB.WIDGET("DTCC Trades","Swap Trades",{"currency","USD";"date","2025-04-15";"cleared_only","true";"include_starting","false"})
```

```excel
=OBB.WIDGET("OpenBB Platform","economy_pce_fred_obb",{"category","personal_income";"provider","fred"})
```

```excel
=OBB.WIDGET("Custom Backend","Portugal CPI since 2000")
```

### Explicit parameters

The easiest way to pass optional parameters is to write them into cells and reference them in the function.

For example,

```excel
=OBB.WIDGET("DTCC Trades","swap_rate_levels_custom_obb",{"currency","USD";"swap_type","OIS";"period","1y"})
```

can be rewritten as:

```excel
=OBB.WIDGET("DTCC Trades","swap_rate_levels_custom_obb",A1:B3)
```

where:

- A1 contains "currency" and B1 "USD"
- A2 contains "swap_type" and B2 "OIS"
- A3 contains "period" and B3 "1y"

