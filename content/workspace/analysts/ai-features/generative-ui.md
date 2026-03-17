---
title: Generative UI
sidebar_position: 13
description: Understanding the Generative UI capabilities in OpenBB Copilot
keywords:
  - generative ui
  - widgets
  - dynamic creation
  - widget parameters
  - dashboard manipulation
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="Generative UI | OpenBB Workspace Docs" />

When this feature is turned ON, copilot can manipulate widgets on the dashboard.

## Update widget parameters

The system understands the parameter schemas of each widget and based on a user prompt it can automatically update the parameters used in widgets on the dashboard.

<div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
    <img
    className="pro-border-gradient"
    alt="Widget parameters"
    src="https://openbb-cms.directus.app/assets/82a99cb3-61ea-47cb-89f2-4eb1e888861a.png"
    width="100%"
  />
</div>

## Add widgets from Global Data

If global data is turned on, and the user asks information that the copilot believes exists in one of the widgets in the widget library - then that widget gets automatically added to the dashboard.

<div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
  <img
    className="pro-border-gradient"
    alt="Widget parameters"
    src="https://openbb-cms.directus.app/assets/5e641714-20a7-4830-a82f-158a85259ec1.png"
    width="100%"
  />
</div>

## Add markdown note widget

The copilot can also add any type of text into a markdown widget automatically on-the-fly.

<div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
  <img
    className="pro-border-gradient"
    alt="Widget parameters"
    src="https://openbb-cms.directus.app/assets/dc0391d6-283f-4a8c-8a83-ddb3b0ea7178.png"
    width="100%"
  />
</div>

## Add navigation bar

The copilot can add navigation bars to your dashboard, allowing you to organize widgets into separate tabs for a cleaner and more structured layout.

Additionally, all of the actions above can be performed across multiple widgets, navigation bars, or parameters at once. For example, you can ask the copilot to add multiple navigation tabs, each containing a different set of widgets — saving you from making one change at a time.

<div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
  <img
    className="pro-border-gradient"
    alt="Add navigation bar"
    src="https://openbb-cms.directus.app/assets/8939c838-c5b7-45e4-b543-c01e72a996cc.png"
    width="100%"
  />
</div>

## Create widgets on the fly

The copilot can take its own outputs, such as tables, charts, or markdown note, and turn them directly into widgets on your dashboard. Instead of copying results manually, the Generative UI feature adds the copilot's response as a fully interactive widget that lives alongside the rest of your data.

<div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
  <img
    className="pro-border-gradient"
    alt="Create widget on the fly"
    src="https://openbb-cms.directus.app/assets/a8a40db3-2f11-48d1-a050-6be35bddb9c0.png"
    width="100%"
  />
</div>

