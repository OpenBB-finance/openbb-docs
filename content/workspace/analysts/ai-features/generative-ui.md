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

When Generative UI is enabled, the copilot can manipulate widgets directly on your dashboard.

## Update widget parameters

The copilot understands the parameter schemas of each widget and, based on your prompt, can automatically update the parameters across widgets on the dashboard.

<div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
    <img
    className="pro-border-gradient"
    alt="Widget parameters"
    src="https://openbb-cms.directus.app/assets/82a99cb3-61ea-47cb-89f2-4eb1e888861a.png"
    width="100%"
  />
</div>

## Add widgets from Global Data

If Global Data is enabled and you ask for information that the copilot finds in the widget library, the matching widget is automatically added to your dashboard.

<div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
  <img
    className="pro-border-gradient"
    alt="Widget parameters"
    src="https://openbb-cms.directus.app/assets/5e641714-20a7-4830-a82f-158a85259ec1.png"
    width="100%"
  />
</div>

## Add markdown note widget

The copilot can also add text content as a markdown note widget directly on your dashboard.

<div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
  <img
    className="pro-border-gradient"
    alt="Widget parameters"
    src="https://openbb-cms.directus.app/assets/dc0391d6-283f-4a8c-8a83-ddb3b0ea7178.png"
    width="100%"
  />
</div>

## Add and edit navigation bar

The copilot can add navigation bars to your dashboard, allowing you to organize widgets into separate tabs for a cleaner and more structured layout.

<div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
  <img
    className="pro-border-gradient"
    alt="Add navigation bar"
    src="https://openbb-cms.directus.app/assets/8939c838-c5b7-45e4-b543-c01e72a996cc.png"
    width="100%"
  />
</div>


Beyond adding new tabs, you can also use this feature to edit existing tab names within the navigation bar.

<div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
  <img
    className="pro-border-gradient"
    alt="Add navigation bar"
    src="https://openbb-cms.directus.app/assets/b1acef02-c5e9-4275-8ee1-3de702165ebf.png"
    width="100%"
  />
</div>

As shown in the examples above, all of these actions can be performed across multiple widgets, navigation bars, or parameters at once. For example, you can ask the copilot to add multiple navigation tabs, each containing a different set of widgets, saving you from making one change at a time.


## Create widgets on the fly

The copilot can take its own outputs, such as tables, charts, or markdown notes, and turn them directly into widgets on your dashboard. Instead of copying results manually, the Generative UI feature adds the copilot's response as a fully interactive widget that lives alongside the rest of your data.

<div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
  <img
    className="pro-border-gradient"
    alt="Create widget on the fly"
    src="https://openbb-cms.directus.app/assets/a8a40db3-2f11-48d1-a050-6be35bddb9c0.png"
    width="100%"
  />
</div>

