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

:::warning Security Note
HTML widgets render static HTML content only. JavaScript code within the HTML will not be executed for security reasons. All interactivity must be achieved through server-side logic and HTML/CSS features only.
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
    
    <!-- Note: JavaScript will not execute in HTML widgets for security reasons -->
    <!-- This script tag is included only as an example - it will not run -->
    <script>
        // This JavaScript code will NOT execute
        // HTML widgets only render static HTML and CSS
        // All dynamic behavior must be implemented server-side
    </script>
</body>
</html>
""")
```

The gridData parameter specifies the widget's size in the OpenBB Workspace grid system. More on that can be found [here](../widget-configuration/grid-size).

## Key Features

**Complete Design Control**: HTML widgets allow extensive customization through HTML markup and inline CSS styling, enabling the creation of professional-grade interfaces that match your organization's branding and design requirements.

**Server-Side Rendering**: All content is generated server-side, ensuring security while allowing dynamic HTML generation based on real-time data, calculations, and API responses from your backend.

**Rich Styling Options**: Leverage the full power of inline CSS for advanced styling including animations, gradients, responsive layouts, and professional visual design that creates engaging dashboard experiences.

**Data Integration**: Generate HTML content dynamically on the server based on live data sources, enabling real-time portfolio monitoring, market data display, and dynamic performance tracking through server-side updates.

## Best Practices

- Use semantic HTML structure for accessibility and maintainability
- Implement responsive design patterns using CSS flexbox and grid layouts
- Generate all dynamic content server-side before returning the HTML response
- Use CSS animations and transitions for visual effects instead of JavaScript
- Handle all data fetching and processing in the Python backend before rendering
- Consider using HTML forms with server endpoints for user interactions
- Refresh widgets periodically to update data rather than relying on client-side updates