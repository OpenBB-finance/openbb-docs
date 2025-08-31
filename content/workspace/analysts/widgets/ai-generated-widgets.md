---
title: AI-generated Widgets
sidebar_position: 5
description: Learn how to use AI agent outputs as widgets in your OpenBB dashboard
keywords:
- AI
- Widgets
- Dashboard
- Agent Outputs
- Persistence
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="AI-generated Widgets | OpenBB Workspace Docs" />

OpenBB's AI agents can generate various types of outputs including text analysis, charts, and data visualizations. These outputs can be saved as widgets in your dashboard for future reference and analysis.

<img src="https://openbb-cms.directus.app/assets/1453ffb5-a51f-4967-944d-a651d4fa57d9.png" alt="Dashboard showing AI-generated widgets and analysis outputs" width="100%" />

AI agents can generate several types of outputs that can be used as widgets: text, table or chart.

To save an AI agent's output as a widget:

1. Run your desired AI analysis command

<img src="https://openbb-cms.directus.app/assets/e9db86df-be8f-42b6-8999-fe02bafffcf0.png" alt="Terminal showing AI analysis command execution" width="100%" />

2. When the output is displayed, look for the "Create widget from X" button

<img src="https://openbb-cms.directus.app/assets/fc32872b-68b4-4ba3-aa63-04a0846c644d.png" alt="AI analysis output with 'Create widget' button highlighted" width="100%" />

3. Click the button to add the output to your dashboard

<img src="https://openbb-cms.directus.app/assets/8cd1d032-6685-4178-bb49-c3807f870094.png" alt="Widget creation dialog showing name and description fields" width="100%" />

4. Edit the name and description that have been selected based on AI

<img src="https://openbb-cms.directus.app/assets/2d2d2d3b-3ac5-49d4-9d3b-b289cb5b5fdc.png" alt="Widget settings panel with editable metadata fields" width="100%" />

5. Making it persistent

The widget will be only accessible for this session. To ensure your AI-generated widgets persist across sessions:

1. Open the widget settings by clicking the gear icon on the widget

<img src="https://openbb-cms.directus.app/assets/0b1c5e6e-76bd-48ec-9c20-0ccd1b042036.png" alt="Widget with gear icon for accessing settings" width="100%" />

2. Edit the widget metadata: Name, description, category, subcategory and source

<img src="https://openbb-cms.directus.app/assets/658af726-3c62-4d9b-b38b-491e53fbc21f.png" alt="Widget metadata editing form with fields for name, description, category, subcategory and source" width="100%" />

3. Save the changes

The widget will now persist in your dashboard and can be accessed in future sessions.
