---
title: SSRM Mode
sidebar_position: 8
description: Server-Side Rendered Mode for handling large datasets efficiently in OpenBB Workspace widgets
keywords:
- SSRM
- server-side rendering
- large datasets
- performance
- data optimization
- advanced widgets
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="SSRM Mode | OpenBB Workspace Docs" />

# Server-Side Rendered Mode (SSRM)

Server-Side Rendered Mode (SSRM) is an advanced widget implementation approach designed to handle large datasets efficiently in OpenBB Workspace. Unlike traditional widgets that load all data at once, SSRM mode enables server-side pagination, filtering, and sorting, making it ideal for displaying massive datasets without compromising performance.

## Key Features & Use Cases

SSRM mode is designed for enterprise applications that need to handle **large datasets** (200,000+ rows) efficiently. Instead of loading all data at once, it provides server-side operations that optimize performance and user experience.

## How SSRM Differs from Standard Table Widget

| Aspect | Standard Table Widget | SSRM Mode |
|--------|------------------|-----------|
| Data Loading | All data loaded at once | Data loaded on-demand |
| Filtering | Client-side filtering | Server-side filtering |
| Sorting | Client-side sorting | Server-side sorting |
| Memory Usage | High for large datasets | Optimized memory usage |
| Initial Load Time | Slower for large datasets | Fast initial load |
| Network Traffic | High initial payload | Optimized payloads |
| Complexity | Simple implementation | Advanced server logic |

## Widget Configuration

To use SSRM mode, your widget configuration must specify the correct widget type:

```json
{
  "name": "SSRM Data Table",
  "description": "Server-side rendered table for large datasets",
  "type": "ssrm_table",
  "endpoint": "data-ssrm",
  "gridData": {"w": 12, "h": 8}
}
```

**Important**: The widget type must be set to `"ssrm_table"` to enable server-side row model functionality. This tells OpenBB Workspace to use the SSRM interface instead of the normal table widget.

## Implementation Overview

The SSRM example implementation is built as a FastAPI server that handles AgGrid's Server-Side Row Model requests.

For complete implementation examples and code samples, refer to the [SSRM Mode Examples Repository](https://github.com/OpenBB-finance/backends-for-openbb/tree/main/widget-examples/ssrm_mode).

Here's what the implementation provides:

### Core Architecture

- **FastAPI Server**: Main application handling SSRM requests from the widget
- **Database Manager**: Multi-database interface supporting SQLite, MySql, and Snowflake 
- **Custom Models**: `AgGridOptions` and `AgRows` models for structured data handling
- **Query Engine**: Modular system for converting AgGrid requests to optimized SQL queries

### Key Endpoint: `/data-ssrm`

The main POST endpoint processes AgGrid SSRM requests and handles:

- **Pagination**: Processes `startRow`/`endRow` parameters for efficient data paging
- **Filtering**: Supports text, number, and set filters with various operators (contains, equals, greaterThan, etc.)
- **Sorting**: Multi-column sorting with ascending/descending directions
- **Grouping**: Row grouping with COUNT aggregation and hierarchical support

### Request/Response Flow

1. AgGrid frontend sends SSRM request with pagination, filters, sorting, and grouping parameters
2. Server converts request to a valid query using the `AgRows` model
3. Database manager executes query against the database
4. Results are formatted and returned with `rowData` and `rowCount` for AgGrid consumption

## AI Data

When using SSRM mode with AI functionality in OpenBB Workspace, there's an important limitation to understand:

**"What You See Is What You Get"**: AI can only access and analyze the data that is currently visible in the table widget. This means:

- AI will only see the specific rows that are loaded and displayed on screen
- If your dataset has 15 million rows but only 100 are currently visible, AI can only work with those 100 rows
- Pagination, filtering, and sorting affect what data is available to AI analysis
- AI cannot access the entire dataset that exists in your database

### Current Implementation
This is the current approach for AI data access in SSRM mode. Future implementations are planned to make this more robust and provide broader data access capabilities for AI analysis.

### Best Practices for AI Integration
- Load relevant data subsets that you want AI to analyze
- Use filtering to focus on specific data ranges before engaging AI
- Consider the scope of your analysis when working with paginated data
- Be aware that AI insights will be limited to the currently displayed dataset 