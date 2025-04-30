---
title: AI generated
sidebar_position: 16
description: Learn how to use AI agent outputs as widgets in your OpenBB dashboard
keywords:
- AI
- Widgets
- Dashboard
- Agent Outputs
- Persistence
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="AI generateds | OpenBB Workspace Docs" />

OpenBB's AI agents can generate various types of outputs including text analysis, charts, and data visualizations. These outputs can be saved as widgets in your dashboard for future reference and analysis.

<img src="https://openbb-cms.directus.app/assets/1453ffb5-a51f-4967-944d-a651d4fa57d9.png" alt="AI generated" width="100%" />


## Types of AI Outputs

AI agents can generate several types of outputs that can be used as widgets: text, table or chart.

### Saving Outputs as Widgets

To save an AI agent's output as a widget:

1. Run your desired AI analysis command
2. When the output is displayed, look for the "Create widget from X" button
3. Click the button to add the output to your dashboard
4. The widget will be only accessible for this session

## Making Widgets Persistent

To ensure your AI-generated widgets persist across sessions:

1. Open the widget settings by clicking the gear icon on the widget
2. Edit the widget metadata: Name, description, category, subcategory and source
3. Save the changes

The widget will now persist in your dashboard and can be accessed in future sessions.

## Best Practices

- Give widgets descriptive names that reflect their content
- Use tags to organize related widgets
- Set appropriate refresh intervals for time-sensitive data
- Group related widgets together in your dashboard layout

## Limitations

- Some AI outputs may not be suitable for widget format
- Complex visualizations may need to be simplified
- Real-time data may require frequent updates
