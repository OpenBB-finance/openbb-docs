---
title: HTML
sidebar_position: 5
description: Learn how to create and customize HTML widgets in OpenBB Workspace, enabling complete control over visualization and interaction design with custom HTML, CSS, and JavaScript.
keywords:
- html widget
- widget configuration
- custom visualization
- interactive dashboard
- widget development
- HTML content
- CSS styling
- JavaScript interactivity
- OpenBB Workspace
- custom widgets
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="HTML | OpenBB Workspace Docs" />

HTML widgets provide control over visualization design through server-rendered HTML, enabling the creation of custom styled dashboards and data displays.

JavaScript inside the returned HTML **does execute**, so you can build interactive controls — buttons, inputs, event handlers — directly in the widget. To push a parameter value from an HtmlViewer widget back to Workspace (for example, to drive other widgets on the dashboard), dispatch a `CustomEvent` and let the injected bridge forward it; see [Pushing parameters back to Workspace](./iframe#pushing-parameters-back-to-workspace).

:::note
Treat HTML widgets like any other code you run: only render markup and scripts you trust. The page runs in the embedded context, so avoid injecting unsanitized third-party content into the HTML you return.
:::

<img className="pro-border-gradient" width="800" alt="HTML Widget Example" src="https://openbb-cms.directus.app/assets/8234f346-6b2e-49b2-b5de-7150c770a756.png" />

```python
@register_widget({
    "name": "HTML Widget",
    "description": "A HTML widget with interactive dashboard",
    "type": "html",
    "endpoint": "html_widget",
    "gridData": {"w": 40, "h": 20},
})
@app.get("/html_widget", response_class=HTMLResponse)
def html_widget():
    """Returns an HTML widget with mockup data"""
    return HTMLResponse(content="""
<!DOCTYPE html>
<html>
<head>
    <style>
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
            padding: 20px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            margin: 0;
        }
        .container {
            max-width: 1200px;
            margin: 0 auto;
        }
        .header {
            text-align: center;
            color: white;
            margin-bottom: 30px;
        }
        .stats-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 20px;
            margin-bottom: 30px;
        }
        .stat-card {
            background: white;
            border-radius: 10px;
            padding: 20px;
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
            transition: transform 0.2s;
        }
        .stat-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 8px 12px rgba(0,0,0,0.15);
        }
        .stat-value {
            font-size: 2em;
            font-weight: bold;
            color: #333;
        }
        .stat-label {
            color: #666;
            margin-top: 5px;
        }
        .stat-change {
            display: inline-block;
            padding: 4px 8px;
            border-radius: 4px;
            font-size: 0.85em;
            margin-top: 10px;
        }
        .positive {
            background: #d4edda;
            color: #155724;
        }
        .negative {
            background: #f8d7da;
            color: #721c24;
        }
        .chart-container {
            background: white;
            border-radius: 10px;
            padding: 20px;
            margin-bottom: 20px;
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        }
        .progress-bar {
            width: 100%;
            height: 20px;
            background: #e0e0e0;
            border-radius: 10px;
            overflow: hidden;
            margin-top: 10px;
        }
        .progress-fill {
            height: 100%;
            background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
            transition: width 1s ease;
            animation: fillAnimation 2s ease-out;
        }
        @keyframes fillAnimation {
            from { width: 0%; }
        }
        .button {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            border: none;
            padding: 12px 24px;
            border-radius: 6px;
            cursor: pointer;
            font-size: 16px;
            transition: opacity 0.2s;
        }
        .button:hover {
            opacity: 0.9;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>Portfolio Dashboard</h1>
            <p>Real-time market overview and analytics</p>
        </div>
        
        <div class="stats-grid">
            <div class="stat-card">
                <div class="stat-value">$124,563</div>
                <div class="stat-label">Total Portfolio Value</div>
                <span class="stat-change positive">+5.4% today</span>
            </div>
            
            <div class="stat-card">
                <div class="stat-value">42</div>
                <div class="stat-label">Active Positions</div>
                <span class="stat-change positive">+3 this week</span>
            </div>
            
            <div class="stat-card">
                <div class="stat-value">$8,421</div>
                <div class="stat-label">Daily P&L</div>
                <span class="stat-change positive">+12.3%</span>
            </div>
            
            <div class="stat-card">
                <div class="stat-value">0.87</div>
                <div class="stat-label">Sharpe Ratio</div>
                <span class="stat-change negative">-0.05</span>
            </div>
        </div>
        
        <div class="chart-container">
            <h3>Performance Overview</h3>
            <div style="display: flex; justify-content: space-between; margin-top: 20px;">
                <div style="flex: 1; margin-right: 20px;">
                    <div>Tech Stocks (68%)</div>
                    <div class="progress-bar">
                        <div class="progress-fill" style="width: 68%;"></div>
                    </div>
                </div>
                <div style="flex: 1;">
                    <div>Fixed Income (32%)</div>
                    <div class="progress-bar">
                        <div class="progress-fill" style="width: 32%;"></div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="chart-container">
            <h3>Recent Activity</h3>
            <ul style="list-style: none; padding: 0;">
                <li style="padding: 10px 0; border-bottom: 1px solid #eee;">
                    <strong>AAPL</strong> - Bought 100 shares @ $182.50
                    <span style="float: right; color: #666;">2 hours ago</span>
                </li>
                <li style="padding: 10px 0; border-bottom: 1px solid #eee;">
                    <strong>GOOGL</strong> - Sold 50 shares @ $141.20
                    <span style="float: right; color: #666;">5 hours ago</span>
                </li>
                <li style="padding: 10px 0;">
                    <strong>MSFT</strong> - Bought 75 shares @ $378.80
                    <span style="float: right; color: #666;">Yesterday</span>
                </li>
            </ul>
        </div>
        
        <div style="text-align: center; margin-top: 30px;">
            <button class="button" onclick="alert('Refreshing data...')">Refresh Dashboard</button>
        </div>
    </div>

    <script>
        // JavaScript inside an HTML widget executes, so event handlers like the
        // onclick above run as written. You can also dispatch the parameter-bridge
        // CustomEvent here to push values back to Workspace.
    </script>
</body>
</html>
""")
```

The gridData parameter specifies the widget's size in the OpenBB Workspace grid system. More on that can be found [here](../widget-configuration/grid-size).

## Key Features

**Complete Design Control**: HTML widgets allow extensive customization through HTML markup and inline CSS styling, enabling the creation of professional-grade interfaces that match your organization's branding and design requirements.

**Server-Side Rendering**: Content is generated server-side, allowing dynamic HTML generation based on real-time data, calculations, and API responses from your backend.

**Client-Side Interactivity**: JavaScript in the returned HTML executes, so you can add event handlers, build interactive controls, and push parameter updates back to Workspace through the [parameter bridge](./iframe#pushing-parameters-back-to-workspace).

**Rich Styling Options**: Leverage the full power of inline CSS for advanced styling including animations, gradients, responsive layouts, and professional visual design that creates engaging dashboard experiences.

**Data Integration**: Generate HTML content dynamically on the server based on live data sources, enabling real-time portfolio monitoring, market data display, and dynamic performance tracking.

## Raw Data View

An HTML widget can expose the data behind its visualization by setting `"raw": true` in the widget configuration. This adds a button in the top right corner of the widget that switches between the rendered HTML and a table of the underlying data — and it also helps the OpenBB Copilot understand the data in the widget.

When the user switches to the raw view, OpenBB Workspace calls the **same endpoint** again with `raw=true` appended to the query parameters (alongside all the widget's other parameters). Your endpoint should accept a `raw` parameter that defaults to `False` and branch on it:

- No `raw` parameter (the normal view — Workspace omits it entirely): return the HTML content as usual.
- `raw=true`: return JSON — a list of records (or an object with a `results` key containing one). This is rendered as a table.

You return either HTML or the raw JSON data, never both combined.

```python
@register_widget({
    "name": "Portfolio Dashboard",
    "description": "Portfolio overview with raw data view",
    "type": "html",
    "endpoint": "portfolio_dashboard",
    "raw": True,
    "gridData": {"w": 40, "h": 20},
})
@app.get("/portfolio_dashboard")
def portfolio_dashboard(raw: bool = False):
    positions = [
        {"symbol": "AAPL", "shares": 100, "price": 182.50},
        {"symbol": "GOOGL", "shares": 50, "price": 141.20},
        {"symbol": "MSFT", "shares": 75, "price": 378.80},
    ]

    # Raw view: return the underlying data as JSON
    if raw:
        return positions

    # Default view: return the rendered HTML
    rows = "".join(
        f"<li><strong>{p['symbol']}</strong> — {p['shares']} shares @ ${p['price']}</li>"
        for p in positions
    )
    return HTMLResponse(content=f"<ul>{rows}</ul>")
```

## Best Practices

- Use semantic HTML structure for accessibility and maintainability
- Implement responsive design patterns using CSS flexbox and grid layouts
- Generate data-heavy content server-side before returning the HTML response, and use client-side JavaScript for interactivity
- Only render markup and scripts you trust; avoid injecting unsanitized third-party content into the returned HTML
- Use the [parameter bridge](./iframe#pushing-parameters-back-to-workspace) to drive other dashboard widgets from a control in the widget