---
title: Troubleshooting
sidebar_position: 17
description: Common issues and solutions for the OpenBB Add-in for Excel, including error handling, installation problems, and connection troubleshooting.
keywords:
  - Microsoft Excel
  - Excel Add-in
  - Troubleshooting
  - Error Handling
  - Permission Error
  - Connection Issues
  - Duplicate Ribbon
  - Excel Help
  - OpenBB Support
---

import HeadTitle from "@site/src/components/General/HeadTitle.tsx";

<HeadTitle title="Troubleshooting | OpenBB Add-in for Excel Docs" />

If you face specific issues while using the add-in and the solutions provided here don't resolve them, don't hesitate to reach out to us for further assistance. You can contact us through [support@openbb.finance](mailto:support@openbb.finance).

### #VALUE! Error

If you encounter a '#VALUE!' error when running an OBB function, first verify that you are using the correct syntax. Either [OBB.WIDGET](obb-widget) or [OBB.GET](obb-get).

- If you have just opened your workbook and see this error, try recalculating the cell - this is a known issue with Excel add-ins that sometimes requires a refresh.

### Add-in Not Available

If the OBB functions are not appearing after installation, try these troubleshooting steps:

- Verify that the OpenBB Add-in appears in your Excel ribbon
- If not visible, go to **Insert** > **Get Add-ins** > **My Add-ins**, hover over the OpenBB add-in, click '...', remove it, and reinstall
- If the issue persists, restart your computer or [clear the Office cache](https://learn.microsoft.com/en-us/office/dev/add-ins/testing/clear-cache)

### Permission Error

If you see the message "You don't have permission to use this add-in. Contact your system administrator to request access", try these solutions:

- Confirm that your account has the necessary permissions to use the add-in
- If permissions are correct, try restarting your computer or [clearing the Office cache](https://learn.microsoft.com/en-us/office/dev/add-ins/testing/clear-cache)

### Duplicate Ribbon Tab

If you notice duplicate 'OpenBB' tabs in the ribbon after editing a workbook in both browser and desktop versions, this is a known Excel issue. While there's no permanent fix, you can resolve it using these workarounds:

- **Windows users**: Go to File > Info > Inspect Workbook > Check 'Task Pane Add-ins' > Click 'OK'. This will remove the duplicate add-in reference created by Excel in the browser

- **Mac users**: 
  1. Rename your file from .xlsx to .zip
  2. Use WinZip for Mac to unzip the file (the default unzip tool won't work for this)
  3. Delete the webextension1.xml file from the webextensions folder
  4. Rename the file back to .xlsx

### Connection Issues

If you're unable to retrieve data through OBB.WIDGET from your backend, check these common issues:

- Ensure your backend server is running and accessible from your network
- For Mac or Safari users: Verify that your backend is using HTTPS with a valid SSL certificate
