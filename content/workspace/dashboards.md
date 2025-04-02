---
title: Dashboards
sidebar_position: 23
description: This documentation page explains the functionalities of OpenBB Workspace
  Pro's dashboard feature. Learn how to add widgets, text, rename, duplicate, and
  interact with dashboards in various ways for efficient data visualization.
keywords:
- Dashboard Usage
- Data Visualization
- Add Widgets
- Manage Dashboards
- Dashboard export
- Dashboard settings
- Create new dashboard
---

<!-- markdownlint-disable MD012 MD031 MD033 -->

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="Dashboards | OpenBB Workspace Docs" />

import TutorialVideo from '@site/src/components/General/TutorialVideo.tsx';

{/*
<TutorialVideo
  youtubeLink="https://www.youtube.com/embed/kSZvLAPmwvo?si=O6FaSchvvxpBWtDR"
  videoLegend="Short introduction to dashboards"
/>
*/}

Think of a dashboard as your blank canvas, where you can add any type of content and data. A dashboard consists of multiple widgets that you can drag and rearrange.

<img className="pro-border-gradient" width="800" alt="dash" src="https://github.com/OpenBB-finance/OpenBBTerminal/assets/25267873/156b080a-e32b-4d56-baf6-bb04038f2d63" />

The main way to interact with a dashboard is by clicking on the settings icon of the dashboard on the left sidebar.

<div style={{display: 'flex', justifyContent: 'center'}}>
  <img className="pro-border-gradient" width="300" alt="dash settings" src="https://github.com/OpenBB-finance/OpenBBTerminal/assets/25267873/13f536e7-dd5a-4f22-be1c-c65fd31eec6d" />
</div>

This allows to:

* **Rename** - Rename dashboard's name
* **Move to** - Move that dashboard into a folder
* **Duplicate** - Duplicate dashboard
* **Open in a new window** - For users wanting to leverage multiple screens
* **Delete** - Delete dashboard
* **Export report** - Exports dashboard into a PDF or PNG format

## Folders

<TutorialVideo
  youtubeLink="https://www.youtube.com/embed/sFvzgQULDos?si=fS1wm6YEQAb07vwe"
  videoLegend="Short introduction to folders"
/>

On the sidebar, users have a plus icon where they are able to create a new dashboard or folder.

<div style={{display: 'flex', justifyContent: 'center'}}>
  <img className="pro-border-gradient" width="300" alt="add dash" src="https://openbb-assets.s3.amazonaws.com/docs/pro/new-dashboard.png" />
</div>

Below is an example of a folder that contains multiple dashboards.

<div style={{display: 'flex', justifyContent: 'center'}}>
  <img className="pro-border-gradient" width="247" alt="folder" src="https://github.com/OpenBB-finance/OpenBBTerminal/assets/25267873/0c928803-7ef3-4b63-8313-5f5fec767197" />
</div>

A dashboard can be moved into a folder through the dashboard settings with the "Move to", or by dragging the dashboard into the folder.

## Navigation bar

When adding the Navigation bar widget within the dashboard, that means that users will be able to have multiple tabs for each section of the dashboard.
For instance: Overview, Fundamentals, Comparison Analysis, Business Model, Estimates.

<div style={{display: 'flex', justifyContent: 'center'}}>
  <img className="pro-border-gradient" width="800" alt="folder" src="https://openbb-web-assets.s3.amazonaws.com/docs/launch_oct_24/navigation_bar.png" />
</div>

Users can easily add new tabs, as well as remove or rename the existing ones.

<div style={{display: 'flex', justifyContent: 'center'}}>
  <img className="pro-border-gradient" width="300" alt="folder" src="https://openbb-web-assets.s3.amazonaws.com/docs/launch_oct_24/navigation_bar_edit.png" />
</div>


## Report

This is an enterprise-only feature.

<TutorialVideo
  youtubeLink="https://www.youtube.com/embed/vPp0gglCYg0?si=ZC6WgowxnF-Rk2BX"
  videoLegend="Short introduction to report"
/>

A report can be created out of a dashboard so that you have a static report of the interactive dashboard. This report can be a PDF or PNG format. This can be very powerful to record a moment in time, particularly when adding the note widget with additional insights from a user.

<img className="pro-border-gradient" width="800" alt="Report export" src="https://github.com/OpenBB-finance/OpenBBTerminal/assets/25267873/1d1de065-469d-4f8d-b847-6ffc82cadf19" />

You can export a dashboard through the dashboard's settings on the sidebar.

<img className="pro-border-gradient" width="488" alt="dash settings" src="https://github.com/OpenBB-finance/OpenBBTerminal/assets/25267873/0cacf0bd-296b-45fa-954b-2d013f9f1694" />

This is how the Report will look.

<img className="pro-border-gradient" width="488" alt="dash settings" src="https://openbb-web-assets.s3.amazonaws.com/docs/launch_oct_24/dashboard_export.png" />

## Sharing dashboards

This is an enterprise-only feature.

We allow users to share dashboards with anyone in your company. By right clicking on any dashboard you can click the "Share" button. This will bring up the dialog below which will let you search for a user in your company to share with. If they don't have access to OpenBB Pro an email will be sent to them.

<img className="pro-border-gradient" width="388" alt="dashboard sharing" src="https://openbb-assets.s3.amazonaws.com/docs/pro/share-menu.png" />

Once you share the dashboard with a user they will see something like below in their side bar. They will have read only access to every dashboard. If a user would like to copy one of these to make their own edits they can right click on the dashboard and choose "Duplicate".

<img className="pro-border-gradient" width="388" alt="dashboard share example" src="https://openbb-assets.s3.amazonaws.com/docs/pro/shared-dashboards.png" />


