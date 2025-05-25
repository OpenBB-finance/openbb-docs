---
title: OBB.WIDGET
sidebar_position: 2
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

OpenBB Add-In for Excel allows you to access your [data connectors](https://docs.openbb.co/pro/data-connectors) from OpenBB Workspace inside Microsoft Excel. This can be done using the [OBB.BYOD](https://docs.openbb.co/excel/reference/byod) function.

## [Single widget](https://docs.openbb.co/pro/data-connectors/single-widget)

```excel
=OBB.BYOD("widget_name")
```

:::info

- Make sure your widget is setup in the OpenBB Workspace.

:::

## [Own backend](https://docs.openbb.co/pro/data-connectors/integrate-your-own-backend)

```excel
=OBB.BYOD("widget_name","backend_name")
```

If your backend supports it is possible to pass a symbol, a date or other optional parameters:

```excel
=OBB.BYOD("widget_name","backend_name","my_symbol","YYYY-MM-DD",{"param1":"value1","param2":"value2", ...})
```

:::tip
The easiest way to pass optional parameters is to write them into cells and reference them in the function. For example, `=OBB.BYOD(...,A1:B2)` where A1 contains "param1", B1 "value1", A2 "param2", B2 "value2" and so on.
:::

:::info

- Make sure your backend's CORS settings allow requests coming from [https://excel.openbb.co](https://excel.openbb.co).
- Requests via HTTP will be blocked by Excel. So if you are using the Add-in for Excel on Mac or Office on the web with Safari browser you need to run your backend via HTTPS.

---

The OpenBB Add-in for Excel provides direct access to the OpenBB platform, where each function implements the following pattern:

- `OBB.[MENU].[SUB_MENU].[COMMAND]`

:::tip
Use the &lt;TAB&gt; key to autocomplete the function name after typing `=OBB.`
:::

Examples:

1. Getting balance sheet data for a stock:

   ```excel
   =OBB.EQUITY.FUNDAMENTAL.BALANCE("AAPL")
   ```

2. Getting the latest news for a stock:

   ```excel
   =OBB.NEWS.COMPANY("AAPL")
   ```

3. Getting the earnings calendar:

   ```excel
   =OBB.EQUITY.CALENDAR.IPO(,"2023-11-20")
   ```

:::tip
If you want to skip a parameter use comma (or semi-colon depending on your number separator) without any value. In example iii. we are skipping the first parameter (symbol).
:::

## Advanced

<div style={{display: 'flex', justifyContent: 'center'}}>
    <iframe
        style={{width: '800px', height: '450px', display: 'block', margin: '0 auto'}}
        src="https://www.youtube.com/embed/mk-NDjH8CDE?si=oL1Iqh1yJc24dh-K"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    />
</div>
