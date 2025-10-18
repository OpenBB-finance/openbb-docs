---
title: Generative UI (Beta)
sidebar_position: 10
description: Understanding the Generative UI capabilities in OpenBB Copilot
keywords:
  - generative ui
  - widgets
  - dynamic creation
  - widget parameters
  - beta features
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="Generative UI (Beta) | OpenBB Workspace Docs" />

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
    src="https://openbb-cms.directus.app/assets/b5798412-cba3-4deb-898c-dde7ccd636c1.png"
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

Support to add static artifacts (tables or charts) on-the-fly is still not supported.
