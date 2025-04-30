---
title: Overview
sidebar_position: 30
description: Apps
keywords:
- Apps
---
import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="Apps | OpenBB Workspace Docs" />

This guide provides an overview of how to set up and use custom apps in OpenBB. Custom apps allow you to define and manage the layout and behavior of widgets on your dashboard.

<div style={{display: 'flex', justifyContent: 'center'}}>
  <img className="pro-border-gradient" width="600" alt="color example" src="https://openbb-assets.s3.us-east-1.amazonaws.com/docs/pro/templates+example.png" />
</div>

Apps can only be used with custom backends at this time.

## Setting Up the Apps Endpoint

To serve custom apps, you need to define an endpoint in your FastAPI application that returns the content of an `apps.json` file. This file contains the configuration for your apps.

### Exporting Apps

The easiest way to create an app is to set up your custom widgets in OpenBB Workspace and then right click on the dashboard and select "Export App". This will create an `apps.json` file for you. Simply follow the step below then to create your endpoint and your apps will show up on the OpenBB Workspace tab under "Apps" and then "My Apps" tab. The export function will capture the current state of the dashboard so you can easily create a dashboard quickly in the future.

### FastAPI Endpoint

Here's how you can define the `/apps.json` endpoint in your FastAPI application:
