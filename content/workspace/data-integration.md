---
title: Overview
sidebar_position: 10
description: Learn how to upload both structured and unstructured data to OpenBB Workspace with just a few clicks.
keywords:
- Single Widget
- Data Connectors
- API Endpoints
- Data Integration
- User-friendly Table Format
- Additional Headers
- Data Key Parameter
- Nested JSON
- Custom Backend
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';
import TutorialVideo from '@site/src/components/General/TutorialVideo.tsx';

<HeadTitle title="Overview | OpenBB Workspace Docs" />

## Data

For a widget to be added to the OpenBB workspace, it requires data to come

## Widget Structure

This is the typical structure of a widget.

<img width="800" alt="Widget-rev" src="https://github.com/user-attachments/assets/d44a279f-fb47-44f0-87de-add2b20cec7c" />

- **Title**: The title identifies the widget. Hovering on top shows the description and the source of where the data comes from.

<div style={{display: 'flex', justifyContent: 'center'}}>
    <img width="300" alt="hover on title" src="https://github.com/user-attachments/assets/7d1ea855-e77a-4eab-9330-b8a4d9e58bf5" />
</div>

- **Staleness Indicator**: When the user hovers on the indicator it shows how recent the data is: Green if updated within the last 30 seconds; Yellow if updated between 30 seconds and 5 minutes ago; Red oif updated over 5 minutes ago. If the user wants to get latest data for a particular widget all that is needed is clicking in the indicator icon to fetch/refresh the data.

<div style={{display: 'flex', justifyContent: 'center'}}>
    <img width="300" alt="staleness indicator" src="https://github.com/user-attachments/assets/ca21f129-5c3d-4c33-9997-338f1180677b" />
</div>

- **Parameters**: Some widgets will have parameters. Changing the parameter, will update the data contained in the widget. Some of these parameters might be able to be grouped together.

<div style={{display: 'flex', justifyContent: 'center'}}>
    <img width="600" alt="click on symbol" src="https://github.com/user-attachments/assets/322668a5-1d6e-44df-9a8e-39cc51e49c41" />
</div>

- **Group**: If multiple widgets belong to the same group, updating the symbol in one will automatically update the symbol in the others. When you click on the group icon, you can set a new group for the current widget.

<div style={{display: 'flex', justifyContent: 'center'}}>
    <img width="300" alt="click on group" src="https://github.com/user-attachments/assets/4c8f5fcd-4e44-4e1a-9723-d98c64f8294c" />
</div>
