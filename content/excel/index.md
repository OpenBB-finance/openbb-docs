---
title: Overview  
sidebar_position: 1
description: The OpenBB Add-in for Excel is a powerful integration that enables direct access to financial data within Microsoft Excel. This seamless integration allows you to create sophisticated financial models and perform comprehensive analysis without leaving your spreadsheet environment.
keywords:
- excel add-in
- financial data integration
- dynamic widgets
- excel formulas
- dashboard export
- financial modeling
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="OpenBB Add-in for Excel Docs" />

The OpenBB Add-in for Excel enables enterprise users to access all available data from their OpenBB Workspace through interactive widgets.

## OpenBB Widgets

Enterprise users with access to the OpenBB Add-in for Excel can utilize the **Excel formula** option in their widget settings to access widget data directly in Excel.

<center>
<img src="https://openbb-cms.directus.app/assets/cf39abef-9a93-42fa-b98f-d1e7a2e38c77.png" alt="Excel formula dropdown in widget settings" width="900px" />
</center>

### Dynamic Widgets with Implicit Parameters

When accessing the **Excel formula** dropdown, users will see the following interface:

<center>
<img src="https://openbb-cms.directus.app/assets/fd7f2baf-edd3-48b9-a3d8-6bc3f33c0c68.png" alt="Excel formula interface" width="900px" />
</center>

The interface displays the widget name, backend information, and the corresponding Excel formula. For example:

```excel
=OBB.WIDGET("DTCC Trades","swap_rate_levels_custom_obb",{"currency","USD";"swap_type","OIS";"period","1y"})
```

Note: The formula is displayed with indentation for better readability, but when copied to the clipboard, it will be formatted as a single line for Excel compatibility.

Here's how it appears in Excel:

<center>
<img src="https://openbb-cms.directus.app/assets/7478fdf5-de07-472b-993f-45bfbef4b1e2.png" alt="Excel formula implementation" width="600px" />
</center>

### Dynamic Widgets with Explicit Parameters

Users can enable an alternative mode by selecting the "with explicit parameters" checkbox. This mode separates the parameters from the formula, creating a more flexible widget-like experience in Excel.

<center>
<img src="https://openbb-cms.directus.app/assets/22ce67c6-efec-4021-886d-0452891a2af9.png" alt="Explicit parameters interface" width="900px" />
</center>

Implementation example:

<center>
<img src="https://openbb-cms.directus.app/assets/aa48622e-a634-4565-a5e4-03ee0cfd5a3a.png" alt="Explicit parameters in Excel" width="600px" />
</center>

Note: The formula and parameters are initially set to cell A1, but users can modify the formula parameters to reference different cell ranges based on their specific needs.

## Dashboard to Excel Export

Users can export entire dashboard data to Excel using the left sidebar export functionality.

<center>
<img src="https://openbb-cms.directus.app/assets/6bf99ebf-7c9e-4a3a-b83b-ee5b466ffd9c.png" alt="Dashboard export options" width="400px" />
</center>

Three export options are available:

<center>
<img src="https://openbb-cms.directus.app/assets/eb099308-327b-4bb5-8e5c-1e9d45534512.png" alt="Export options menu" width="400px" />
</center>

The first worksheet of the exported Excel file contains comprehensive dashboard information:

<center>
<img src="https://openbb-cms.directus.app/assets/c4f4973d-5f8e-411c-a238-370eb0f45ea9.png" alt="Dashboard information in Excel" width="900px" />
</center>

This includes:
- Widget metadata
- Parameter configurations
- Dashboard name
- Export timestamp

### Static Data Export

When exporting in static data mode, a progress dialog appears to indicate the export status:

<center>
<img src="https://openbb-cms.directus.app/assets/db4784db-630e-458c-b60e-699a4444e054.png" alt="Static data export progress" width="400px" />
</center>

Each OpenBB widget is exported to a separate worksheet, containing both the parameters used and the corresponding data:

<center>
<img src="https://openbb-cms.directus.app/assets/a9864e6d-16cc-468f-8045-4e3b1689d6c4.png" alt="Widget data in Excel" width="600px" />
</center>

### Dynamic Export

For dynamic exports (both implicit and explicit parameter modes), the exported Excel file will utilize the OpenBB Add-in formulas as described in the previous sections.