---
title: Iframe
sidebar_position: 16
description: Embed an external web app (such as a Streamlit dashboard) as an iframe widget in OpenBB Workspace, with optional sub-widget export via the Iframe Widget Protocol and auto-connected MCP tools.
keywords:
- iframe widget
- iframe widget protocol
- streamlit
- embed external app
- postMessage
- mcpUrl
- destructiveHint
- sub-widgets
- OpenBB Workspace
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="Iframe | OpenBB Workspace Docs" />

The Iframe widget embeds an external web application — for example a [Streamlit](https://streamlit.io/) dashboard, an internal tool, or any URL that permits embedding — directly inside an OpenBB Workspace dashboard.

On its own, an iframe just renders the URL. But by implementing the **Iframe Widget Protocol**, the embedded app can do much more:

- **Export sub-widgets** — declare tables and markdown sections inside the iframe that Workspace can pull out as standalone dashboard widgets.
- **Receive toolbar parameters** — react to Workspace parameters (dropdowns, dates, toggles) without a backend round-trip.
- **Auto-connect an MCP server** — wire up Copilot tools the moment the widget mounts.
- **Auto-refresh on mutating tool calls** — remount the iframe after a destructive MCP tool runs so the UI reflects new state.

A complete working example (Streamlit app + MCP server + `widgets.json` + `apps.json`) lives in the [backends-for-openbb repository](https://github.com/OpenBB-finance/backends-for-openbb/tree/main/widget-examples/streamlit).

<img className="pro-border-gradient" width="800" alt="Iframe widget embedding a Streamlit app in OpenBB Workspace" src="https://openbb-assets.s3.us-east-1.amazonaws.com/docs/pro/iframe.png" />

## Widget definition

An iframe widget is declared in `widgets.json` with `type: "iframe"`. The `endpoint` is the initial `src` of the iframe (the user can still edit it via the widget's URL dialog).

```json
{
  "portfolio_iframe": {
    "name": "Portfolio Dashboard (Streamlit)",
    "description": "Embedded Streamlit portfolio app with MCP tools",
    "category": "Portfolio",
    "type": "iframe",
    "endpoint": "http://localhost:8501",
    "storage": {
      "mcpUrl": "http://localhost:7769/mcp"
    },
    "gridData": { "w": 40, "h": 16 },
    "source": "Streamlit Demo"
  }
}
```

Two fields are specific to the iframe type:

- **`endpoint`** — for iframe widgets this is a full URL (the iframe `src`), not a backend path. It is the initial address loaded into the iframe.
- **`storage.mcpUrl`** — *(optional)* an MCP server to auto-connect when the widget mounts. The tools exposed by that server become available to Copilot immediately, with no manual URL entry. If omitted, the user can still attach an MCP server manually via the **MCP** icon in the widget navbar.

:::note
Some websites restrict being embedded in an iframe (via `X-Frame-Options` or `Content-Security-Policy`). OpenBB checks for this and only displays pages that permit embedding. Apps you run yourself (such as a local Streamlit app) typically allow it.
:::

## The Iframe Widget Protocol

The protocol is a small set of `postMessage` events exchanged between the embedded app and Workspace. The embedded app announces what it offers, then responds to data requests and parameter updates.

### Messages from the iframe → Workspace

- **`openbb-connect`** — sent once on load to announce the available sub-widgets and parameters.

  ```js
  target.postMessage({
    type: "openbb-connect",
    widgets: manifests,   // sub-widget manifests
    params: paramDefs     // toolbar parameter definitions
  }, "*");
  ```

- **`openbb-data`** — sent in response to an `openbb-request`, carrying the data for a sub-widget.

  ```js
  target.postMessage({
    type: "openbb-data",
    widgetId: "portfolio-holdings",
    dataType: "table",          // "table" or "markdown"
    data: [ /* records */ ]     // array of rows, or a markdown string
  }, "*");
  ```

### Messages from Workspace → iframe

- **`openbb-request`** — Workspace asks the iframe for a sub-widget's data. A `widgetId` of `null` means "send everything."
- **`openbb-params-update`** — Workspace pushes new toolbar parameter values to the iframe (e.g. the user changed a dropdown). The app reads these and re-renders.

### Sub-widget manifests

Each entry in the `widgets` array of `openbb-connect` describes one exportable sub-widget:

```js
const WIDGET_MANIFESTS = [
  {
    "widgetId": "portfolio-holdings",
    "name": "Portfolio Holdings",
    "description": "Current portfolio positions with PnL",
    "category": "Portfolio",
    "dataType": "table"        // "table" or "markdown"
  },
  {
    "widgetId": "market-summary",
    "name": "Market Summary",
    "description": "Weekly market analysis and outlook",
    "category": "Research",
    "dataType": "markdown"
  }
];
```

When the app announces sub-widgets, a grid icon with a count badge appears in the iframe widget's navbar. Clicking it lets the user add any sub-widget to the dashboard as a standalone widget.

### Parameter definitions

The `params` array of `openbb-connect` declares toolbar parameters Workspace should render for the widget. These mirror the standard [widget parameter](../widget-parameters/text-input) types:

```js
const PARAM_DEFS = [
  {
    "paramName": "sector",
    "label": "Sector",
    "type": "text",
    "description": "Filter holdings by sector",
    "value": "All",
    "options": [{ "label": "All", "value": "All" }, /* ... */]
  },
  {
    "paramName": "min_shares",
    "label": "Min Shares",
    "type": "number",
    "value": "0",
    "min": 0, "max": 1000, "step": 10
  },
  {
    "paramName": "show_pnl_pct",
    "label": "Show PnL %",
    "type": "boolean",
    "value": "true"
  },
  {
    "paramName": "as_of_date",
    "label": "As Of Date",
    "type": "date",
    "value": "2026-04-07"
  }
];
```

When a user changes a parameter, Workspace sends an `openbb-params-update` message. A common pattern (used by the Streamlit example) is to mirror the values into the iframe's query string so the embedded app can read them on rerun.

### Minimal bridge

The bridge below is the complete client side of the protocol — announce on load, then answer requests. Inject it into your app's page (in Streamlit, via `st.components.v1.html(...)`).

```js
(function () {
  const manifests = WIDGET_MANIFESTS;
  const paramDefs = PARAM_DEFS;
  const widgetData = WIDGET_DATA;   // { widgetId: { type: "openbb-data", widgetId, dataType, data } }

  const target = window.top || window.parent;

  // Announce available sub-widgets + params
  if (target !== window) {
    target.postMessage({ type: "openbb-connect", widgets: manifests, params: paramDefs }, "*");
  }

  window.addEventListener("message", function (event) {
    if (!event.data || !event.data.type) return;

    if (event.data.type === "openbb-request") {
      const widgetId = event.data.widgetId;
      if (widgetId === null) {
        Object.values(widgetData).forEach((d) => target.postMessage(d, "*"));
      } else if (widgetData[widgetId]) {
        target.postMessage(widgetData[widgetId], "*");
      }
    }
  });
})();
```

## Auto-connecting an MCP server

Set `storage.mcpUrl` in the widget definition to attach an MCP server automatically when the iframe mounts. Its tools become available to Copilot with no manual setup:

```json
"portfolio_iframe": {
  "type": "iframe",
  "endpoint": "http://localhost:8501",
  "storage": {
    "mcpUrl": "http://localhost:7769/mcp"
  }
}
```

This is most useful when shipping a pre-built app via `apps.json`: the dashboard loads with the iframe URL pre-set and the MCP server already connected, giving a true one-click experience.

## Auto-refresh on mutating MCP tools

When an MCP tool is connected to an iframe widget, Workspace can automatically remount the iframe after a tool call so the UI reflects the new state. **The default is no refresh** — only tools that explicitly opt in trigger a remount. This avoids unwanted reloads during read-only operations.

Opt in by marking the tool with `destructiveHint=True` in its annotations:

```python
from mcp.server.fastmcp import FastMCP
from mcp.types import ToolAnnotations

mcp = FastMCP("Portfolio Dashboard", host="0.0.0.0", port=7769)

# Read-only tool — no annotation needed (no refresh)
@mcp.tool()
def get_portfolio_holdings(sector: str = "All") -> str:
    ...

# Mutating tool — opts in to iframe refresh
@mcp.tool(annotations=ToolAnnotations(destructiveHint=True))
def rebalance_portfolio() -> str:
    ...
```

After Copilot calls `rebalance_portfolio`, the iframe remounts and the embedded app reloads with the new state.

## Serving everything from one backend

A convenient pattern is to serve the MCP transport and the Workspace backend routes from a single process, so adding one URL in Workspace wires up tools, widget definitions, and app layout together. The Streamlit example mounts the Workspace routes alongside a FastMCP `streamable_http_app`:

| Route | Purpose |
| ----- | ------- |
| `/mcp` | MCP tools (FastMCP) |
| `/widgets.json` | Widget definitions for OpenBB Workspace |
| `/apps.json` | Pre-built app layout |
| `/portfolio_note` | Markdown content for a companion note widget |

## Additional Resources

- Full working example: [Streamlit Iframe Widget Protocol demo](https://github.com/OpenBB-finance/backends-for-openbb/tree/main/widget-examples/streamlit)
- [widgets.json Reference](../json-specs/widgets-json-reference)
- [apps.json Reference](../json-specs/apps-json-reference)
- [MCP Tools](../ai-features/mcp-tools)
