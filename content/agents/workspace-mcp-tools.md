---
title: Workspace MCP Tools
sidebar_position: 3
description: Reference for the OpenBB Workspace MCP tools, prompts, resources, parameters, and recommended calling patterns.
keywords:
- OpenBB Workspace MCP tools
- MCP tool reference
- Workspace dashboard tools
- Workspace widget tools
- Workspace backend tools
- Workspace apps
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="Workspace MCP Tools | OpenBB Docs" />

This page documents the tools exposed by the OpenBB Workspace MCP server. Tool names and argument names use `snake_case`.

## Calling conventions

Start each agent session with `get_workspace_snapshot`. It returns the active Workspace context, dashboard metadata, visible dashboard composition, available skills, and other identifiers the agent needs.

Use identifiers returned by Workspace:

- Use `dashboard_id` or `current_dashboard_uuid` for dashboard writes.
- Use `widget_uuid` for an existing widget instance.
- Use `origin` and `widget_id` from `list_available_widgets` when creating a backend widget.
- Use `backend_id` from `manage_backends` to filter apps or widgets to one backend.
- Use `slug` from the snapshot when loading a skill.

Avoid matching objects by display name. Dashboards, widgets, and apps can have duplicate names.

Most write tools accept an optional `dashboard_id`. When omitted, Workspace targets the current dashboard route. Passing `dashboard_id` is safer when an agent has already resolved the target dashboard.

Successful command results with object-shaped data may include:

```json
{
  "session_context": {
    "current_dashboard_uuid": "dashboard-uuid",
    "current_tab_id": "overview"
  }
}
```

Reuse this context for follow-up writes. After a navigation command, the explicit dashboard or tab returned by that command is the most reliable value because browser context updates can lag by one round trip.

## Return shape

Tools return a structured command result:

```json
{
  "ok": true,
  "command": "get_workspace_snapshot",
  "request_id": "cmd_...",
  "message": "ok",
  "data": {},
  "error": null
}
```

When a tool fails, `ok` is `false` and `error` includes a code and message. Common error codes are `invalid_request`, `unavailable`, `timeout`, and `command_failed`.

## Discovery tools

### `get_workspace_snapshot`

Requests a fresh snapshot from the connected browser.

Use this first when the agent needs current dashboard state, dashboard identifiers, dashboard composition, connected tools, available skills, or visible widgets.

Arguments: none.

The response can include:

- `workspace_state`: current Workspace-level state.
- `dashboards`: dashboard metadata.
- `dashboard_composition`: tabs, widgets, layout coordinates, and groups for the current dashboard.
- `widgets`: current widget buckets.
- `tools`: tools available inside Workspace.
- `skills`: skill metadata.

### `list_available_widgets`

Lists widgets available to the current Workspace session.

Arguments:

| Argument | Type | Required | Notes |
|----------|------|----------|-------|
| `origin` | string | No | Friendly backend/catalog label. Use an exact value from Workspace. |
| `backend_id` | string | No | Backend UUID from `manage_backends`. Prefer this after registering or selecting a backend. |

Use a filter when possible. Unfiltered catalogs can contain many widgets.

The list intentionally excludes generated-only widgets such as `rich_note`. Create those with `add_generative_widget`.

### `get_widget_schema`

Fetches the exact creation contract for one available widget.

Arguments:

| Argument | Type | Required | Notes |
|----------|------|----------|-------|
| `origin` | string | Yes | Exact catalog value returned by `list_available_widgets`. |
| `widget_id` | string | Yes | Exact widget identifier returned by `list_available_widgets`. |

Call this before `create_widget`. The schema can include parameter definitions, layout defaults, and min/max grid constraints.

If a parameter has `requires_options_lookup: true`, call `get_params_options` before creating or updating the widget.

### `get_params_options`

Fetches dynamic options for a widget parameter.

Arguments:

| Argument | Type | Required | Notes |
|----------|------|----------|-------|
| `origin` | string | Yes | Exact catalog value. |
| `widget_id` | string | Yes | Exact widget identifier. |
| `param_name` | string | Yes | Exact `paramName` from the widget schema. |
| `data_args` | object | No | Values required by the parameter's `options_lookup_params`, when present. |

Use this only when the widget schema says the parameter requires an options lookup.

### `get_skill_content`

Loads one skill body from the Workspace skill library.

Arguments:

| Argument | Type | Required | Notes |
|----------|------|----------|-------|
| `slug` | string | Yes | Exact skill slug from the latest snapshot. |
| `reason` | string | No | Short reason for loading the skill. |

## Data tools

### `get_widget_data`

Fetches live data for a Workspace widget or backend data source.

Arguments:

| Argument | Type | Required | Notes |
|----------|------|----------|-------|
| `origin` | string | Yes | Backend/catalog label. |
| `widget_id` | string | Yes | Widget identifier. |
| `data_args` | object | No | Widget parameters. Must be an object, not a JSON string. |
| `widget_uuid` | string | No | Existing widget instance UUID. Include it when reading a widget already on a dashboard. |
| `ssm_request` | object | No | Server-side row model request data for widgets that support it. |

For chart widgets, include `raw: true` in `data_args` when the agent needs rows instead of a Plotly figure payload:

```json
{
  "origin": "Example Backend",
  "widget_id": "revenue_chart",
  "widget_uuid": "widget-uuid",
  "data_args": {
    "symbol": "AAPL",
    "raw": true
  }
}
```

## Dashboard and navigation tools

### `manage_dashboard`

Creates, reads, or updates one Workspace dashboard.

Arguments:

| Argument | Type | Required | Notes |
|----------|------|----------|-------|
| `operation` | string | Yes | One of `create`, `read`, or `update`. |
| `dashboard_id` | string | Conditional | Required for `update`; optional for `read`; optional custom ID for `create`. |
| `name` | string | Conditional | Required for `create` and `update`. |
| `activate` | boolean | No | For `create`, defaults to `true`. |

Examples:

```json
{
  "operation": "create",
  "name": "Earnings Review",
  "activate": true
}
```

```json
{
  "operation": "read",
  "dashboard_id": "dashboard-uuid"
}
```

The tool does not delete dashboards.

### `navigate_workspace`

Navigates the browser to an existing dashboard or switches an inner tab.

Arguments:

| Argument | Type | Required | Notes |
|----------|------|----------|-------|
| `operation` | string | Yes | One of `dashboard` or `tab`. |
| `dashboard_id` | string | Conditional | Required for `operation: "dashboard"`; optional for tab switching. |
| `tab_id` | string | Conditional | Required for `operation: "tab"`; optional when navigating to a dashboard. |

Examples:

```json
{
  "operation": "dashboard",
  "dashboard_id": "dashboard-uuid"
}
```

```json
{
  "operation": "tab",
  "tab_id": "overview"
}
```

### `manage_navigation_bar`

Creates or mutates the navigation bar inside an existing dashboard.

Arguments:

| Argument | Type | Required | Notes |
|----------|------|----------|-------|
| `operation` | string | Yes | One of `create`, `add_tabs`, `remove_tabs`, or `rename_tabs`. |
| `dashboard_id` | string | No | Target dashboard. Omit only when targeting the current route. |
| `tabs` | array | Conditional | Required for `create`, `add_tabs`, and `remove_tabs`. Each item must be an object with only `name`. |
| `rename_map` | object | Conditional | Required for `rename_tabs`. Keys are old tab IDs and values are replacement names. |

Valid tab payload:

```json
{
  "operation": "add_tabs",
  "tabs": [
    { "name": "Overview" },
    { "name": "Charts" }
  ]
}
```

Do not pass string arrays such as `["Overview", "Charts"]`. Do not pass `tab_id` or `tab_name` fields. Workspace generates tab IDs from tab names, such as `Overview` to `overview`.

To add content to a tab:

1. Call `manage_navigation_bar` with `operation: "add_tabs"`.
2. Call `navigate_workspace` with the generated `tab_id`.
3. Create the widget or generated artifact on the active tab.

### `update_widget_layout`

Moves or resizes one widget in the dashboard layout grid.

Arguments:

| Argument | Type | Required | Notes |
|----------|------|----------|-------|
| `x` | number | Yes | Left position on the 40-column grid. |
| `y` | number | Yes | Top position on the grid. |
| `w` | number | Yes | Width in grid columns. |
| `h` | number | Yes | Height in grid rows. |
| `widget_uuid` | string | Recommended | Existing widget instance UUID. |
| `widget_id` | string | No | Use only when exactly one matching widget instance exists. |
| `dashboard_id` | string | No | Target dashboard. |
| `tab_id` | string | No | Target tab. Use this when moving across tabs. |
| `min_w`, `min_h`, `max_w`, `max_h` | number | No | Optional layout constraints. |

The layout grid is 40 columns wide:

- Full width: `w: 40`
- Half width: `w: 20`
- Quarter width: `w: 10`

If a navigation bar is present, it usually occupies `y: 0` with `h: 2`, so content usually starts at `y: 2`.

## Widget lifecycle tools

### `read_widget`

Reads one widget from a dashboard.

Arguments:

| Argument | Type | Required | Notes |
|----------|------|----------|-------|
| `widget_uuid` | string | Recommended | Preferred instance identifier. |
| `widget_id` | string | No | Use only when exactly one matching instance exists. |
| `dashboard_id` | string | No | Target dashboard. |

Use this when the agent needs a widget's current config or rendered data from the active tab.

### `create_widget`

Creates one backend-provided widget on a dashboard.

Arguments:

| Argument | Type | Required | Notes |
|----------|------|----------|-------|
| `origin` | string | Yes | Exact catalog value from `list_available_widgets`. |
| `widget_id` | string | Yes | Exact widget identifier from `list_available_widgets`. |
| `dashboard_id` | string | No | Target dashboard. |
| `data_args` | object | No | Widget parameters. |
| `ui_args` | object | No | Widget UI configuration. |

Call `list_available_widgets` and `get_widget_schema` first. If the schema has dynamic parameter options, call `get_params_options` before creating the widget.

Do not use `create_widget` for rich text notes. Use `add_generative_widget` with `widget_type: "note"`.

### `update_widget`

Updates an existing widget's configuration.

Arguments:

| Argument | Type | Required | Notes |
|----------|------|----------|-------|
| `widget_uuid` | string | Recommended | Existing widget instance UUID. |
| `widget_id` | string | No | Use only when exactly one matching instance exists. |
| `dashboard_id` | string | No | Target dashboard. |
| `data_args` | object | No | Replacement widget parameters. |
| `ui_args` | object | No | Replacement widget UI configuration. |

Use `update_widget_layout` for `x`, `y`, `w`, `h`, `gridData`, or tab placement. `update_widget` is for widget config only.

### `delete_widget`

Deletes one widget from a dashboard.

Arguments:

| Argument | Type | Required | Notes |
|----------|------|----------|-------|
| `widget_uuid` | string | Recommended | Existing widget instance UUID. |
| `widget_id` | string | No | Use only when exactly one matching instance exists. |
| `dashboard_id` | string | No | Target dashboard. |

The tool is scoped to a single widget. It does not delete dashboards or folders.

## Generated artifact tools

### `add_generative_widget`

Creates a generated note, table, chart, or HTML widget from inline data.

Arguments:

| Argument | Type | Required | Notes |
|----------|------|----------|-------|
| `widget_type` | string | Yes | One of `note`, `table`, `chart`, or `html`. |
| `dashboard_id` | string | No | Target dashboard. |
| `data` | string or array | Conditional | Notes and HTML use a string. Tables and charts use an array of objects. |
| `name` | string | No | Widget name. |
| `description` | string | No | Widget description. |
| `chart_params` | object | Conditional | Required for charts. Uses camelCase keys. |
| `inner_tab` | string | No | Existing tab target. This does not create a tab. |

Valid note payload:

```json
{
  "widget_type": "note",
  "name": "Briefing",
  "data": "# Briefing\n\nKey points from the current dashboard."
}
```

Valid chart payload:

```json
{
  "widget_type": "chart",
  "name": "Quarterly revenue",
  "data": [
    { "quarter": "Q1", "revenue": 100 },
    { "quarter": "Q2", "revenue": 140 },
    { "quarter": "Q3", "revenue": 160 },
    { "quarter": "Q4", "revenue": 210 }
  ],
  "chart_params": {
    "chartType": "bar",
    "xKey": "quarter",
    "yKey": ["revenue"]
  }
}
```

For chart widgets, keep `chart_params` keys in camelCase: `chartType`, `xKey`, `yKey`, `angleKey`, and `calloutLabelKey`.

## Backend and app tools

### `manage_backends`

Lists, adds, updates, refreshes, or removes Workspace data backends.

Arguments:

| Argument | Type | Required | Notes |
|----------|------|----------|-------|
| `operation` | string | Yes | One of `list`, `add`, `update`, `refresh`, or `remove`. |
| `backend_id` | string | Conditional | Required for `update`, `refresh`, and `remove`. |
| `name` | string | Conditional | Required for `add`; optional for `update`. |
| `url` | string | Conditional | Required for `add`; optional for `update`. |
| `endpoint_headers` | array | No | Header or query values sent to the backend. |
| `validate_widgets` | boolean | No | Defaults to validation behavior in Workspace. |
| `is_openbb_platform` | boolean | No | Marks the backend as an OpenBB Platform backend when needed. |

Each `endpoint_headers` item has this shape:

```json
{
  "key": "X-Auth-Token",
  "value": "token-value",
  "location": "headers"
}
```

`location` is either `headers` or `query`. When omitted, it defaults to `headers`.

Example:

```json
{
  "operation": "add",
  "name": "Research Backend",
  "url": "http://127.0.0.1:8000",
  "endpoint_headers": [
    {
      "key": "X-Auth-Token",
      "value": "dev-token",
      "location": "headers"
    }
  ]
}
```

### `manage_apps`

Lists, reads, or instantiates Workspace apps.

Arguments:

| Argument | Type | Required | Notes |
|----------|------|----------|-------|
| `operation` | string | Yes | One of `list`, `read`, or `instantiate`. |
| `backend_id` | string | No | Backend UUID from `manage_backends`. Omit to include apps from every source; pass it to filter to one backend. |
| `app_name` | string | Conditional | Required for `read` and `instantiate` unless `template_id` is provided. |
| `template_id` | string | Conditional | Required for `read` and `instantiate` unless `app_name` is provided. |
| `activate` | boolean | No | Defaults to `true` for instantiation. |

Apps are full dashboard templates. `list` returns every app the user can see, from three sources marked by a `type` field:

- `backend`: apps declared in the `apps.json` of the user's own backends.
- `shared`: backend apps shared with the user through their organization.
- `saved`: apps the user created or saved in Workspace, or that were shared with them. These have no `backend_id`; reference them by `template_id`.

Each listed app includes `name`, `template_id`, `description`, `type`, `backend_id`, `backend_name`, `is_shared`, and `created_by`. `read` and `instantiate` resolve `app_name` or `template_id` across all sources.

Instantiating an app always creates a fresh dashboard with the app's tabs, widgets, parameter groups, and suggested prompts, and returns its `dashboard_id`.

Example:

```json
{
  "operation": "instantiate",
  "app_name": "Macro Dashboard",
  "activate": true
}
```

## Agent tools

### `assign_tasks_to_agents`

Delegates work to configured external Workspace agents.

Arguments:

| Argument | Type | Required | Notes |
|----------|------|----------|-------|
| `task_requests` | array | Yes | Each item needs `id`, `description`, `assigned_holder_url`, and `assigned_agent_id`. |

Example:

```json
{
  "task_requests": [
    {
      "id": "review-dashboard-1",
      "description": "Review the current dashboard and flag anomalies in the revenue chart.",
      "assigned_holder_url": "agent-holder-url",
      "assigned_agent_id": "agent-id"
    }
  ]
}
```

Use `get_workspace_snapshot` first to find configured agent identifiers. Do not invent `assigned_holder_url` or `assigned_agent_id`.

## Prompts and resources

The MCP server exposes two prompts:

| Prompt | Purpose |
|--------|---------|
| `workspace_tool_usage` | General instructions for using the Workspace MCP tool surface. |
| `workspace_session_context` | Current tracked dashboard and tab context. |

It also exposes app-builder resources under `openbb://workspace/...`, including:

- `openbb://workspace/app-builder/index`
- `openbb://workspace/overview/what-is-workspace`
- `openbb://workspace/overview/ai-agent-contract`
- `openbb://workspace/contract/backend`
- `openbb://workspace/specs/widgets-json`
- `openbb://workspace/specs/apps-json`
- `openbb://workspace/specs/widget-types`
- `openbb://workspace/specs/widget-parameters`
- `openbb://workspace/specs/layout-grid`
- `openbb://workspace/guides/build-an-app`
- `openbb://workspace/guides/review-app`
- `openbb://workspace/guides/debug-app`
- `openbb://workspace/guides/convert-endpoint-to-widget`
- `openbb://workspace/examples/generic-http/minimal`
- `openbb://workspace/examples/python-fastapi/minimal`
- `openbb://workspace/validation/common-errors`

Agents should read `openbb://workspace/app-builder/index` first when they need guidance for building, debugging, or reviewing Workspace apps.

## Example workflows

### Create a dashboard with tabs and a note

Tool calls:

```text
manage_dashboard {
  "operation": "create",
  "name": "MCP Smoke Test",
  "activate": true
}

manage_navigation_bar {
  "operation": "create",
  "tabs": [
    { "name": "Overview" },
    { "name": "Charts" }
  ]
}

navigate_workspace {
  "operation": "tab",
  "tab_id": "overview"
}

add_generative_widget {
  "widget_type": "note",
  "name": "Smoke test",
  "data": "# Smoke Test\n\nWorkspace MCP is connected."
}
```

### Add a backend widget

Tool calls:

```text
get_workspace_snapshot {}

list_available_widgets {
  "origin": "Research Backend"
}

get_widget_schema {
  "origin": "Research Backend",
  "widget_id": "company_filings"
}

create_widget {
  "origin": "Research Backend",
  "widget_id": "company_filings",
  "dashboard_id": "dashboard-uuid",
  "data_args": {
    "symbol": "AAPL"
  }
}
```

### Register a backend and open an app

Tool calls:

```text
manage_backends {
  "operation": "add",
  "name": "Local Macro Backend",
  "url": "http://127.0.0.1:8000"
}

manage_backends {
  "operation": "list"
}

manage_apps {
  "operation": "list",
  "backend_id": "backend-uuid"
}

manage_apps {
  "operation": "instantiate",
  "backend_id": "backend-uuid",
  "template_id": "macro-dashboard",
  "activate": true
}
```

### Pull the data behind a chart

Tool calls:

```text
get_workspace_snapshot {}

get_widget_data {
  "origin": "Research Backend",
  "widget_id": "revenue_chart",
  "widget_uuid": "widget-uuid",
  "data_args": {
    "symbol": "AAPL",
    "raw": true
  }
}
```

Use `raw: true` when the agent needs rows for analysis instead of chart renderer JSON.
