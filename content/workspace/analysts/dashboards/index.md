---
title: Dashboards Overview
sidebar_position: 0
description: Learn how to create, manage, and share interactive dashboards in OpenBB Workspace
keywords:
- dashboards
- data visualization
- financial analysis
- widgets
- collaboration
- reporting
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="Dashboards - OpenBB Workspace Docs" />

# Dashboards

Dashboards are the central workspace in OpenBB where you organize, visualize, and analyze financial data. They provide a flexible canvas for combining multiple widgets into comprehensive analytical views tailored to your specific needs.

## What are Dashboards?

Dashboards provide a centralized environment where you can arrange and organize multiple data widgets into cohesive analytical views. They enable you to create custom layouts for different analysis workflows, monitor real-time market data and indicators, share insights with team members, and generate professional reports for documentation and presentations.

The flexible layout system allows you to drag and drop widgets exactly where you need them, resizing and arranging components to emphasize important data and create visual hierarchies that match your analytical priorities. Dashboards automatically refresh with the latest available data, ensuring your analysis always reflects current market conditions. Collaboration is built into the platform through dashboard sharing capabilities. Team members can view shared dashboards and create their own copies for further customization while preserving the original configuration.

## Dashboard Folders

Organize your analytical workspace by creating folders in the left sidebar to group related dashboards together. This organizational structure helps maintain clarity and efficiency as your collection of dashboards grows.

To create a new folder, click the "+" icon in the sidebar and select "New Folder". Name your folder descriptively to reflect its contents, such as "Portfolio Analysis", "Market Research", or "Daily Reports". You can then drag and drop existing dashboards into these folders or use the "Move to" option from the dashboard's ellipsis menu.

Folders can be nested to create hierarchical organization structures that match your workflow. For example, you might have a main "Research" folder with subfolders for different sectors or asset classes. This flexibility allows you to maintain a clean, navigable workspace even with dozens or hundreds of dashboards.

## Dashboard Management

Access comprehensive management options through the ellipsis menu next to each dashboard in the sidebar:

- **Rename** - Customize dashboard names for better organization
- **Move to** - Organize dashboards into folders for structured workflows
- **Duplicate** - Create copies with all widgets and settings intact
- **Open in new window** - Expand across multiple monitors
- **Share** - Collaborate with team members
- **Delete** - Remove unused dashboards
- **Export PDF** - Generate static PDF from the dashboard
- **Export Excel** - Generate .xlsx file with data or formulas from the dashboard (based on existing table widget)
- **Refresh data** - Update all widget data immediately

## Dashboard Actions

Right-clicking anywhere on the dashboard canvas provides quick access to essential functions:

- **Add widget** - Quickly add a new widget to your dashboard
- **Add data** - Import new data sources directly from the dashboard
- **Refresh data** - Update all widget data with the latest information
- **Refresh backends** - Reload backend connections and configurations (good for development purposes)
- **Export apps.json** - Export your dashboard configuration as an `apps.json`
- **Disable grouping** - Toggle widget grouping functionality

## Creating Your First Dashboard

1. Click the "+" button in the sidebar to create a new dashboard
2. Give your dashboard a descriptive name
3. Add widgets by clicking the "Add Widget" button (or right clicking and selecting "Add Widget")
4. Arrange widgets by dragging them to desired positions
5. Resize widgets to create your optimal layout
6. Add a navigation bar widget so you can separate widgets based on different categories
7. Save your dashboard to preserve your configuration

If you are happy with your dashboard, you can actually turn this into an App template.

## Apps to Dashboards

Apps in OpenBB Workspace function as dashboard templates that provide instant access to pre-configured analytical environments. When you click on an app, you're essentially creating a new dashboard from a carefully crafted template that someone has already designed and optimized.

This template approach offers significant advantages for getting started with complex analysis. The app provides all relevant widgets pre-selected and intelligently grouped together, with appropriate sizing and positioning already configured. You receive a complete analytical framework immediately, but retain full control to customize, add, remove, or rearrange any elements to match your specific needs.

Apps serve as both starting points for new analysis and examples of best practices in dashboard design. They demonstrate effective widget combinations, logical data groupings, and optimal layouts for specific analytical scenarios.
