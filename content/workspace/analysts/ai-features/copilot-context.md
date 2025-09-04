---
title: Context Management
sidebar_position: 8
description: Understanding how OpenBB Copilot manages and prioritizes context
keywords:
- context management
- explicit context
- dashboard context
- global retrieval
- conversation history
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="Context Management | OpenBB Workspace Docs" />

The Copilot employs a sophisticated context understanding system that prioritizes and processes multiple information sources simultaneously.

This hierarchical approach ensures that the most relevant and specific data takes precedence when generating responses, while still maintaining awareness of broader workspace context and conversation history.

## Priority

The agent prioritizes context in the following order:

| Priority | Context Type | Description |
|---|---|---|
| 1 | Explicit | Widgets added to context specifically. |
| 2 | Attached files | Files uploaded directly to the Copilot |
| 3 | Dashboard | All widgets currently on your dashboard (in all tabs). |
| 4 | Conversation | The history of your current conversation. |
| 5 | Global | All widgets available within the OpenBB Workspace. If Global Data enabled. |
| 6 | Web search | Retrieve infromation from the web. If Web Search enabled. |

## Context Types

### Explicit Context

Explicit context represents the highest priority information source, allowing you to precisely direct the Copilot's attention to specific datasets or widgets. This mechanism is particularly powerful for ensuring accuracy when working with multiple similar datasets or when you need analysis focused on a specific dataset.

When you click on the "Add to context" button on any widget you're creating a direct reference that the Copilot will prioritize above all other available information. After sending the prompt, that widget will remain in context.

<div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
  <img
    className="pro-border-gradient"
    alt="Explicit context"
    src="https://openbb-cms.directus.app/assets/24947294-2053-4efc-a68b-7ec90bf9875c.png"
    width="100%"
  />
</div>

When you use the "@" symbol followed by a widget name and the prompt is sent, the widget will disappear from context. This is meant to be a quick tag reference.

<div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
  <img
    className="pro-border-gradient"
    alt="Explicit context with @"
    src="https://openbb-cms.directus.app/assets/3ed47f6f-52f2-4515-b401-16bc8d6a971a.png"
    width="60%"
  />
</div>

### Attached Files

The attachment system enables the Copilot to process documents and datasets that aren't part of your current workspace widgets. Supported file types include PDF, Excel, CSV, and various other document formats.

The Copilot automatically extracts and indexes content from attached files, making them searchable and referenceable throughout your conversation. This capability is essential for performing ad-hoc analysis or incorporating external datasets and documents into your workflow.

Please note that for PDF files, text must be selectable as Optical Character Recognition (OCR) is not supported. However, you can integrate your own agent that performs OCR.

<div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
  <img
    className="pro-border-gradient"
    alt="Attached files"
    src="https://openbb-cms.directus.app/assets/f3a3ab07-4ecf-4b76-af74-cd2bb1f4b3b2.png"
    width="60%"
  />
</div>

### Dashboard Context

The dashboard context provides the Copilot with comprehensive awareness of your currently active dashboard. All widgets on your active dashboard become automatically available as data sources, allowing the Copilot to understand the broader context of your work session. It also has access to the widgets metadata and the current parameters selected.

<div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
  <img
    className="pro-border-gradient"
    alt="Dashboard context"
    src="https://openbb-cms.directus.app/assets/2fc343e5-6eb2-4ef6-ba10-f687868bdff4.png"
    width="100%"
  />
</div>

### Conversation History

Conversational context enables natural, iterative analysis by maintaining awareness of your entire dialogue history within the current session.

The Copilot tracks your explicit questions and its responses. This memory allows for follow-up queries, refinement of analysis parameters, and building upon previous insights without needing to re-establish context.

The system understands references to "the previous chart", "that analysis", or "the data we discussed" and can seamlessly continue complex analytical workflows across multiple conversation turns.

<div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
  <img
    className="pro-border-gradient"
    alt="Conversation history"
    src="https://openbb-cms.directus.app/assets/49ed1729-674a-4d45-bf73-ba9bd3918bed.png"
    width="70%"
  />
</div>

### Global Retrieval (ON/OFF flag)

The global retrieval system provides the Copilot with access to the entire OpenBB Workspace widget library, extending far beyond your current dashboard widgets.

When your current dashboard doesn't contain the specific data or analysis tool needed to answer a query, the Copilot can automatically identify and utilize the appropriate widgets from the entire widget library, effectively expanding your analytical capabilities on-demand without manual widget selection.

This is only possible due to the metadata associated with each widget and is why it's important to invest time in specifying the metadata carefully.

<div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
  <img
    className="pro-border-gradient"
    alt="Global retrieval"
    src="https://openbb-cms.directus.app/assets/f5661493-50ec-45c0-931a-8abd70d3bc9a.png"
    width="60%"
  />
</div>

### Web Search (ON/OFF flag)

The web search capability enables the Copilot to access real-time information from across the internet when:

- The available workspace data is insufficient to fully answer your query.
- The user asks to look for the information on the web.

This feature automatically activates as a fallback mechanism, ensuring comprehensive responses even when dealing with breaking news, recent market developments, or information not available in your current workspace widgets.

<div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
  <img
    className="pro-border-gradient"
    alt="Web search"
    src="https://openbb-cms.directus.app/assets/3dffe668-2114-4c4c-b822-395da193f2a0.png"
    width="100%"
  />
</div>
