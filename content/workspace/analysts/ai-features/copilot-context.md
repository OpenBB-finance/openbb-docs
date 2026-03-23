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
| 1 | Explicit | Widgets, skills, or MCP tools mentioned explicitly. |
| 2 | Skill | Skills added under AI Library. |
| 3 | MCP tool | Active MCP tools connected to the Copilot. |
| 4 | Attached files | Files uploaded directly to the Copilot. |
| 5 | Dashboard | All widgets currently on your dashboard (in all tabs). |
| 6 | Conversation | The history of your current conversation. |
| 7 | Global | All widgets available within the OpenBB Workspace, if Global Data is enabled. |
| 8 | Web search | Retrieve information from the web, if Web Search is enabled. |

## Context Types

### Explicit Context

Explicit context represents the highest priority information source, allowing you to precisely direct the Copilot's attention to specific datasets. This mechanism is particularly powerful for ensuring accuracy when working with multiple similar datasets or when you need analysis focused on a specific dataset.

When you add any of the following explicit context types — widgets, skills, or MCP tools — Copilot prioritizes them above all other available information. After sending the prompt, the context remains active.

#### 1. Skills

When tagging a skill with the syntax `/skill-name`, you are adding it explicitly to context.

<div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
  <img
    className="pro-border-gradient"
    alt="Explicit context"
    src="https://openbb-cms.directus.app/assets/8f1f7e0e-1c93-4ea6-b858-a911a3fb15c2.png"
    width="60%"
  />
</div>


#### 2. MCP Tools

Similar to skills, MCP tools can be added to context using the `/` command. This displays a list of all available tools, allowing you to select exactly which one to trigger.

<div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
  <img
    className="pro-border-gradient"
    alt="Explicit context"
    src="https://openbb-cms.directus.app/assets/7424cad9-9bd0-4c76-944e-1231126e1a62.png"
    width="60%"
  />
</div>


#### 3. Widgets

Click the "Add to context" button on any widget to create a direct reference that Copilot prioritizes. Alternatively, use the "@" symbol followed by a widget name for a quick tag reference — once the prompt is sent, the widget is removed from context.

<div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
  <img
    className="pro-border-gradient"
    alt="Explicit context with @"
    src="https://openbb-cms.directus.app/assets/3ed47f6f-52f2-4515-b401-16bc8d6a971a.png"
    width="60%"
  />
</div>


### Skills
Skills added under AI Library are prioritized next. Skills are reusable instruction sets that extend what the OpenBB Copilot can do — particularly useful when you want to create custom workflows.

<div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
  <img
    className="pro-border-gradient"
    alt="Skills overview"
    src="https://openbb-cms.directus.app/assets/b746c198-d732-4c01-8a31-18db1da89d17.png"
    width="100%"
  />
</div>

To see all available skills, navigate to the "Skills" tab under AI Library. An example skill called `openbb-html-report` is included by default. To add your own custom skill, see the [Skills](/workspace/analysts/ai-features/skills) page.

### MCP Tools

Active MCP tools connected to OpenBB Workspace are the next priority level. For more details, see the MCP tools documentation [here](/workspace/analysts/ai-features/mcp-tools).

Depending on your use case, MCP tools offer a powerful way to connect to third-party data providers or specialized financial tools using a standardized protocol. This eliminates the need for custom development inside OpenBB Workspace.

To use MCP tools, first configure your servers (see [MCP Tools configuration](/workspace/analysts/ai-features/mcp-tools#configure-your-mcp-servers)), then select the desired tools.


<div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
  <img
    className="pro-border-gradient"
    alt="MCP tools"
    src="https://openbb-cms.directus.app/assets/31809471-52b2-4dcb-a5f0-9276def2ae29.png"
    width="60%"
  />
</div>

When enabled, Copilot gains access to all active MCP tools. You can also explicitly call a specific MCP tool to guarantee it’s invoked.

<div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
  <img
    className="pro-border-gradient"
    alt="MCP tools"
    src="https://openbb-cms.directus.app/assets/0a77e58a-6c9f-4cc8-8983-ec8668ecc1c6.png"
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

The dashboard context provides the Copilot with comprehensive awareness of your currently active dashboard. All widgets on your active dashboard become automatically available as data sources, allowing the Copilot to understand the broader context of your work session. It also has access to each widget's metadata and the currently selected parameters.

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

The Copilot understands references to "the previous chart", "that analysis", or "the data we discussed" and can seamlessly continue complex analytical workflows across multiple conversation turns.

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
- You ask to look for information on the web.

This feature automatically activates as a fallback mechanism, ensuring comprehensive responses even when dealing with breaking news, recent market developments, or information not available in your current workspace widgets.

<div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
  <img
    className="pro-border-gradient"
    alt="Web search"
    src="https://openbb-cms.directus.app/assets/3dffe668-2114-4c4c-b822-395da193f2a0.png"
    width="100%"
  />
</div>
