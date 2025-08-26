---
title: OpenBB Copilot
sidebar_position: 26
description: Learn how to use OpenBB Copilot to interact with the OpenBB Workspace
keywords:
- OpenBB Copilot
- copilot
- AI
- agent
- assistant
- Large language model
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="OpenBB Copilot | OpenBB Workspace Docs" />

The OpenBB Copilot is an AI-powered companion seamlessly integrated into the OpenBB Workspace, designed to enhance and accelerate your financial analysis workflow.

This sophisticated assistant understands natural language queries, retrieves data from multiple sources, performs complex analysis, and generates actionable insights.

Built for financial professionals, the Copilot transforms your workflow by accelerating analysis and providing context-aware insights based on your specific datasets and workspace configuration.

<div
  style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
>
  <img
    src="https://openbb-cms.directus.app/assets/0a5e0075-7c50-44cb-8d45-2be1817deab5.png"
    width="100%"
  />
</div>

## Basics

### Structure

<div
  style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
>
  <img
    src="https://openbb-cms.directus.app/assets/d7efdb97-fecd-4d58-8094-84fa82bf4bd4.png"
    width="40%"
  />
</div>

The Copilot interface is designed for intuitive interaction with a clean three-section layout:

- **Header:** At the top, you'll find controls to manage your conversation. You can see which chat you're in, start a new one, clear the history, expand to full-screen mode, or hide the agent entirely.

- **Body:** The main chat window where your conversation takes place. It displays the Copilot's answers, its step-by-step reasoning, and any output like charts, tables, or code. The chat automatically scrolls, keeping everything in chronological order. Hover over a message to see its timestamp.

- **Footer:** Here, you can manage the data and widgets the Copilot uses as context for its answers. You can also add your own custom AI agents or open your prompt library.

### Full screen AI-chat

You can resize the AI panel by dragging the border.

In side-panel mode, it provides quick access for simple queries while maintaining your primary workspace view.

<div
  style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
>
  <img
    src="https://openbb-cms.directus.app/assets/1f9ba730-2516-4eac-b7c9-ca6e9382ba78.png"
    width="100%"
  />
</div>

When expanded to full-screen mode, you gain maximum real estate for complex conversations, detailed reasoning steps, and large artifacts like comprehensive charts or extensive data tables.

<div
  style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
>
  <img
    src="https://openbb-cms.directus.app/assets/7aa420b1-01b8-4785-b2d9-588ddd414842.png"
    width="100%"
  />
</div>

This flexibility allows seamless transitions between quick consultations and deep analytical sessions without losing context or interrupting your workflow.

You can also hide the AI agent entirely if you want to work solely with the dashboard.

<div
  style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
>
  <img
    src="https://openbb-cms.directus.app/assets/9e9a76dc-7e4a-4e04-9211-086ee147c6c1.png"
    width="100%"
  />
</div>

### Prompt library

The integrated prompt library serves as a productivity multiplier by storing and organizing your most valuable queries. You can save complex prompts and even tag widgets, to ensure the right context is utilized for the right prompt.

<div
  style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
>
  <img
    src="https://openbb-cms.directus.app/assets/f145bb2d-89bf-49f9-8fd7-af24d78e4dff.png"
    width="100%"
  />
</div>

### Model

The OpenBB Copilot is specifically optimized for financial analysis and data interpretation tasks, leveraging the latest models from OpenAI.

For enterprise deployments, OpenBB provides seamless integration with your organization's Azure OpenAI.

This ensures compliance with internal security and data sovereignty policies.

If you would like full control over your agent capabilities, here's [our open source repository](https://github.com/OpenBB-finance/agents-for-openbb) with examples of AI custom agents that you can build and integrate into the OpenBB Workspace.

## Context

The Copilot employs a sophisticated context understanding system that prioritizes and processes multiple information sources simultaneously.

This hierarchical approach ensures that the most relevant and specific data takes precedence when generating responses, while still maintaining awareness of broader workspace context and conversation history.

### Priority

The agent prioritizes context in the following order:

| Priority | Context Type | Description |
|---|---|---|
| 1 | Explicit | Widgets added to context specifically. |
| 2 | Attached files | Files uploaded directly to the Copilot |
| 3 | Dashboard | All widgets currently on your dashboard (in all tabs). |
| 4 | Global | All widgets available within the OpenBB Workspace. |
| 5 | Conversation | The history of your current conversation. |

### Explicit context

Explicit context represents the highest priority information source, allowing you to precisely direct the Copilot's attention to specific datasets or widgets. This mechanism is particularly powerful for ensuring accuracy when working with multiple similar datasets or when you need analysis focused on a specific dataset.

When you click on the "Add to context" button on any widget you're creating a direct reference that the Copilot will prioritize above all other available information. After sending the prompt, that widget will remain in context.

<div
  style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
>
  <img
    src="https://openbb-cms.directus.app/assets/24947294-2053-4efc-a68b-7ec90bf9875c.png"
    width="100%"
  />
</div>

When you use the "@" symbol followed by a widget name and the prompt is sent, the widget will disappear from context. This is meant to be a quick tag reference.

<div
  style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
>
  <img
    src="https://openbb-cms.directus.app/assets/3ed47f6f-52f2-4515-b401-16bc8d6a971a.png"
    width="60%"
  />
</div>

### Dashboard

The dashboard context provides the Copilot with comprehensive awareness of your currently active dashboard. All widgets on your active dashboard become automatically available as data sources, allowing the Copilot to understand the broader context of your work session. It also has access to the widgets metadata and the current parameters selected.

<div
  style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
>
  <img
    src="https://openbb-cms.directus.app/assets/2fc343e5-6eb2-4ef6-ba10-f687868bdff4.png"
    width="100%"
  />
</div>

### Attached Files

The attachment system enables the Copilot to process documents and datasets that aren't part of your current workspace widgets. Supported file types include PDF, Excel, CSV, and various other document formats.

The Copilot automatically extracts and indexes content from attached files, making them searchable and referenceable throughout your conversation. This capability is essential for performing ad-hoc analysis or incorporating external datasets and documents into your workflow.

Please note that for PDF files, text must be selectable as Optical Character Recognition (OCR) is not supported. However, you can integrate your own agent that performs OCR.

<div
  style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
>
  <img
    src="https://openbb-cms.directus.app/assets/f3a3ab07-4ecf-4b76-af74-cd2bb1f4b3b2.png"
    width="60%"
  />
</div>

### Global Retrieval

The global retrieval system provides the Copilot with access to the entire OpenBB Workspace widget library, extending far beyond your current dashboard widgets.

When your current dashboard doesn't contain the specific data or analysis tool needed to answer a query, the Copilot can automatically identify and utilize the appropriate widgets from the entire widget library, effectively expanding your analytical capabilities on-demand without manual widget selection.

This is only possible due to the metadata associated with each widget and is why it's important to invest time in specifying the metadata carefully.

<div
  style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
>
  <img
    src="https://openbb-cms.directus.app/assets/f5661493-50ec-45c0-931a-8abd70d3bc9a.png"
    width="60%"
  />
</div>

### Web Search

The web search capability enables the Copilot to access real-time information from across the internet when:

- The available workspace data is insufficient to fully answer your query.
- The user asks to look for the information on the web.

This feature automatically activates as a fallback mechanism, ensuring comprehensive responses even when dealing with breaking news, recent market developments, or information not available in your current workspace widgets.

<div
  style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
>
  <img
    src="https://openbb-cms.directus.app/assets/3dffe668-2114-4c4c-b822-395da193f2a0.png"
    width="100%"
  />
</div>

### Conversation

Conversational context enables natural, iterative analysis by maintaining awareness of your entire dialogue history within the current session.

The Copilot tracks your explicit questions and its responses. This memory allows for follow-up queries, refinement of analysis parameters, and building upon previous insights without needing to re-establish context.

The system understands references to "the previous chart", "that analysis", or "the data we discussed" and can seamlessly continue complex analytical workflows across multiple conversation turns.

<div
  style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
>
  <img
    src="https://openbb-cms.directus.app/assets/49ed1729-674a-4d45-bf73-ba9bd3918bed.png"
    width="70%"
  />
</div>

<!--
### Memory

*Coming soon*

The persistent memory system will create a long-term understanding of your analytical preferences, frequently accessed datasets, preferred chart types, and typical workflow patterns. This cross-session intelligence will enable the Copilot to proactively suggest relevant analysis approaches, remember your naming conventions and categorization preferences, and adapt its communication style to match your professional context. The memory system will maintain privacy and security while building a personalized analytical assistant that becomes more effective over time.

--->

## Data Handling

### Structured data

The Copilot excels at processing and analyzing structured financial datasets through multiple specialized capabilities:

- **AgGrid (table/chart) widgets:** A natural language to SQL translation tool that helps you query tabular data using plain English. Once your data is loaded in a tabular format, `text2sql` converts your questions into SQL queries to retrieve specific information from these tables. This eliminates the need to write SQL manually while allowing you to explore and analyze your data through simple natural language questions.

<div
  style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
>
  <img
    src="https://openbb-cms.directus.app/assets/14b3bf0d-7569-4b31-9c4b-24053582b211.png"
    width="100%"
  />
</div>

- **Plotly widgets:** Full-featured charting engine that not only generates interactive visualizations but also allows developers to provide the underlying data. The Copilot can extract specific data points, and create derivative analyses from existing visualizations.

<div
  style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
>
  <img
    src="https://openbb-cms.directus.app/assets/0c9f06a6-c849-42e1-b4a0-5e572a7ff4b8.png"
    width="100%"
  />
</div>

### Unstructured data

The Copilot's unstructured data processing capabilities enable comprehensive analysis of diverse document types and media:

- **Document Processing (MD/PDF):** Advanced text extraction and comprehension. The system maintains document structure understanding, preserving context around tables and hierarchical information. This utilizes a sophisticated retrieval system that chunks large documents intelligently, maintains semantic relationships, and provides precise citations. The system can cross-reference information across multiple documents and identify contradictions or supporting evidence.

<div
  style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
>
  <img
    src="https://openbb-cms.directus.app/assets/583b82f5-11c0-44d8-b286-4e6b3c1b364c.png"
    width="100%"
  />
</div>

- **Web search:**: When the user provides a URL to the AI agent, it converts the web page to markdown for it to be parsed by the model - as done above.

<div
  style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
>
  <img
    src="https://openbb-cms.directus.app/assets/e08c4afc-1f5c-48eb-8e21-f8a716c7e9a2.png"
    width="100%"
  />
</div>

- **Image Analysis:** Image processing capabilities for charts, screenshots, financial diagrams, and infographics. The Copilot can extract data from visual representations, understand chart types, and incorporate visual information into broader analytical workflows.

<div
  style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
>
  <img
    src="https://openbb-cms.directus.app/assets/8ec86d09-faa1-4ee4-8820-76e93b8b1fae.png"
    width="100%"
  />
</div>

## Data Widgets

### Widgets

The Copilot treats every widget in the OpenBB Workspace as a programmable tool in its analytical toolkit.

The system can chain widget operations, using the output from one widget as input for another, creating sophisticated analytical pipelines automatically.

### Widget parameters

Dynamic parameter modification represents one of the OpenBB's Copilot most powerful capabilities.

The system understands the parameter schemas of each widget and can intelligently modify settings like date ranges, asset symbols, calculation periods, and analysis parameters to match your specific requirements.

This eliminates the need for manual widget configuration and enables the Copilot to perform iterative analysis with different parameters automatically, such as comparing the same analysis across different time periods or asset classes within a single conversation.

<div
  style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
>
  <img
    src="https://openbb-cms.directus.app/assets/1c0c7c36-30e8-4b89-b9ad-0b97694f2699.png"
    width="100%"
  />
</div>

## Web search

The integrated web search capability extends the Copilot's knowledge beyond the OpenBB Workspace ecosystem to access real-time information from across the internet.

This feature automatically activates as a fallback mechanism when information is not available in your workspace, searching financial news sources, regulatory databases, company websites, and other sources.

The system filters and prioritizes results based on relevance and credibility, then integrates external information with your existing workspace data to provide comprehensive answers with proper source attribution.

<div
  style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
>
  <img
    src="https://openbb-cms.directus.app/assets/d9aec63a-379f-4ced-9074-1597dabc55b6.png"
    width="100%"
  />
</div>

<!--

### Code interpreter (soon)

The secure code execution environment will enable the Copilot to perform advanced quantitative analysis through custom Python code generation and execution.

This sandboxed interpreter will support popular financial libraries (pandas, numpy, scipy, sklearn, matplotlib and plotly) and will be capable of running statistical models, and custom analytical algorithms.

The code interpreter will maintain security isolation while providing full computational flexibility for sophisticated financial modeling and analysis tasks.

<div
  style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
>
  <img
    src="https://openbb-cms.directus.app/assets/42dfc706-4644-4f83-ae7d-b2199cb34830.png"
    width="80%"
  />
</div>

When the code interpreter outpus a Plotly, we are able to create a widget to add to the workspace from it.

<div
  style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
>
  <img
    src="https://openbb-cms.directus.app/assets/9fc936bf-021e-481a-a148-86cc6b0d9a9c.png"
    width="80%"
  />
</div>

-->

## MCP

Model Context Protocol (MCP) integration enables seamless connection to third-party data providers, analytical services, and specialized financial tools without requiring custom development within the OpenBB Workspace.

<div
  style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
>
  <img
    src="https://openbb-cms.directus.app/assets/a90d6500-2026-48ef-b5fa-f354e1dddac4.png"
    width="100%"
  />
</div>

We utilize the [use-mcp library](https://github.com/modelcontextprotocol/use-mcp) and support both MCP and SSE protocols, but not STDIO. If you are interested in STDIO support, we recommend exploring solutions like [https://github.com/supercorp-ai/supergateway](https://github.com/supercorp-ai/supergateway).

### Configure your MCP Servers

Clicking this button opens the MCP server enable/disable menu.

<div
  style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
>
  <img
    src="https://openbb-cms.directus.app/assets/2d50c181-6fa0-4ec4-81b6-3faa936af17e.png"
    width="40%"
  />
</div>

Here you'll find the "+" icon that allows you to add or edit MCP servers.

<div
  style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
>
  <img
    src="https://openbb-cms.directus.app/assets/7e4f84d4-6ded-481a-8d6a-4260ad424de5.png"
    width="60%"
  />
</div>

Clicking the "+" icon opens the MCP Servers configuration dialog.

<div
  style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
>
  <img
    src="https://openbb-cms.directus.app/assets/1d12fdc5-4424-4858-8c34-85db9c18ba2e.png"
    width="100%"
  />
</div>

Within this dialog, clicking "Add Server" opens the following pop-up window.

<div
  style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
>
  <img
    src="https://openbb-cms.directus.app/assets/15e88b0c-d9d0-4697-87f0-2c82f0213d0f.png"
    width="100%"
  />
</div>

Clicking "Add" initiates the connection, regardless of OAuth configuration.

Here's how OAuth appears when connecting to [Smithery.ai](https://smithery.ai/), a directory containing over 6,000 MCP servers.

<div
  style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
>
  <img
    src="https://openbb-cms.directus.app/assets/0ef5c823-a1fe-4fec-9d17-9165e0d282b1.png"
    width="100%"
  />
</div>

After connecting, you'll return to the Workspace and see "Authenticating..." displayed.

<div
  style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
>
  <img
    src="https://openbb-cms.directus.app/assets/2b3b1671-20c3-46de-9985-5c55ba22c2c5.png"
    width="100%"
  />
</div>

In the MCP Servers Configuration dialog, clicking on a successfully connected server displays the discovered tools. You can then open these tools to view their descriptions.

<div
  style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
>
  <img
    src="https://openbb-cms.directus.app/assets/3d2e53ed-5d63-46e8-b369-d0e19c7017ef.png"
    width="100%"
  />
</div>

### Select MCP Server tools

With the MCP Tools dialog open, you can enable or disable specific MCP tools for Copilot access.

If the MCP Server becomes disconnected, it will appear as disabled, as shown below:

<div
  style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
>
  <img
    src="https://openbb-cms.directus.app/assets/e9805694-a186-42cd-aa7a-baa6b33e5e29.png"
    width="100%"
  />
</div>

<div
  style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
>
  <img
    src="https://openbb-cms.directus.app/assets/7e4f84d4-6ded-481a-8d6a-4260ad424de5.png"
    width="60%"
  />
</div>

Once an MCP Server is successfully connected, you can:

1. Turn ON/OFF a specific MCP Server.

This toggles all fine-grained tool-level controls simultaneously. It's the most efficient way to exclude an MCP Server from Copilot's context.

2. Turn ON/OFF a specific set of tools from an MCP Server.

This option is only relevant when the MCP Server is enabled, allowing you to manually select which specific tools to activate.

Note: Enabling all tools doesn't guarantee Copilot will use every tool; rather, it makes them available for selection. This granular control helps narrow OpenBB Copilot's context to what's most relevant to your needs.

### MCP in action

When you submit a query to Copilot with MCP tools enabled, it can utilize one or more tools based on your prompt, including sequential tool usage when necessary.

For example, accessing OpenBB documentation requires two tools from the same MCP Server. Copilot automatically determines and executes this sequence on your behalf.

<div
  style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
>
  <img
    src="https://openbb-cms.directus.app/assets/2ce89471-a94c-495b-9b29-9ea64fb51ade.png"
    width="100%"
  />
</div>

## Step-by-step reasoning

Transparency and auditability are fundamental to the OpenBB's Copilot design, with comprehensive step-by-step reasoning displayed for every analysis.

This detailed process visibility enables users to understand the logical flow, verify data sources, identify potential biases, and ensure compliance with analytical standards.

The reasoning display serves both educational and quality assurance purposes, building user confidence while maintaining the ability to audit and reproduce analytical processes.

<div
  style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
>
  <img
    src="https://openbb-cms.directus.app/assets/93bf729b-3034-487a-9c1a-06d2d606f30e.png"
    width="80%"
  />
</div>

### Planning

The planning phase demonstrates the Copilot's tactical thinking by decomposing complex analytical requests into logical, sequential sub-tasks. This planning process considers data dependencies, optimal execution order, and resource requirements.

The displayed plan serves as a roadmap that users can review before execution, ensuring alignment with analytical objectives and providing clear expectations for the upcoming analysis workflow.

<div
  style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
>
  <img
    src="https://openbb-cms.directus.app/assets/66e6496f-f9e0-4464-8e7c-0b720f0ff40f.png"
    width="80%"
  />
</div>

### Querying widgets

Widget query transparency provides complete visibility into data retrieval operations, including the specific widget accessed, all parameters used, and data source information.

This documentation enables users to understand exactly what data was retrieved, verify parameter settings, and reproduce the analysis independently. The system also displays any parameter modifications made automatically, ensuring full awareness of how the Copilot adapted widget configurations to meet query requirements.

<div
  style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
>
  <img
    src="https://openbb-cms.directus.app/assets/2086a113-4dea-4693-a298-9643973d5782.png"
    width="80%"
  />
</div>

### Intermediate result artifact

Intermediate artifacts provide crucial visibility into the Copilot's analytical methodology by displaying generated code, SQL queries, calculation formulas, and other technical implementations.

These artifacts serve multiple purposes: enabling technical review and validation, supporting learning and knowledge transfer, facilitating debugging and optimization, and ensuring compliance with analytical standards.

Users can examine and reuse these artifacts, treating them as valuable analytical assets beyond their immediate application.

<div
  style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
>
  <img
    src="https://openbb-cms.directus.app/assets/61c7d66b-5f96-4bab-8504-a603ad4f04cb.png"
    width="80%"
  />
</div>

### Artifact generated

Final artifacts represent the culmination of the analytical process, displayed with complete context about their creation methodology. The step-by-step reasoning (status updates) maintain full provenance information, including data sources, transformation steps, and parameter settings used in their generation.

The system preserves the relationship between artifacts and their creation process, enabling users to understand not just what was created, but how and why, supporting both immediate use and future reference or modification.

<div
  style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
>
  <img
    src="https://openbb-cms.directus.app/assets/d1edea10-1940-422f-99dd-d6e7cc972e3d.png"
    width="80%"
  />
</div>

## Output

The Copilot's output system delivers comprehensive, contextual responses that synthesize all available information into actionable insights. Each response is structured to provide immediate answers while supporting deeper investigation, combining direct responses with supporting evidence, data visualizations, and clear pathways for follow-up analysis.

### Citations

Comprehensive citation system ensures full traceability and verification of all information sources used in responses. The citation system provides different levels of detail based on source type:

- **Widget citations:** Direct links to widgets with parameters selected. Smart linking enables "Scroll to widget" functionality for existing dashboard widgets. If the widget doesn't exist in the dashboard or has modified parameters the linking will provide a "Add widget to dashboard" options to facilitate workspace workflow.

<div
  style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
>
  <img
    src="https://openbb-cms.directus.app/assets/26f4da06-acc4-4aa2-8540-d56cec931f99.png"
    width="100%"
  />
</div>

- **Document citations:** Precise page and section references for PDF documents with automatic highlighting of relevant content areas.

<div
  style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
>
  <img
    src="https://openbb-cms.directus.app/assets/05dfd0b0-b3b5-41a5-b916-0f89a8e50dd1.png"
    width="100%"
  />
</div>

- **Web citations:** Full URL references when web pages are utilized.

<div
  style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
>
  <img
    src="https://openbb-cms.directus.app/assets/6073a901-0005-4927-8951-021243333c48.png"
    width="100%"
  />
</div>

### Create widgets from AI output

The widget creation system enables seamless integration of Copilot-generated content into your workspace environment.

This capability transforms temporary conversational outputs into permanent analytical assets that can be referenced, shared, and incorporated into ongoing workflows.

The system supports multiple artifact types including formatted text summaries, interactive data tables with sorting and filtering capabilities, and fully functional charts with preserved interactivity.

- Text widget:

<div
  style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
>
  <img
    src="https://openbb-cms.directus.app/assets/517d6934-6d89-44df-ba5b-995520bcb1e6.png"
    width="100%"
  />
</div>

- Table widget:

<div
  style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
>
  <img
    src="https://openbb-cms.directus.app/assets/c987377c-1dc9-4a96-b590-3694a6c764b4.png"
    width="100%"
  />
</div>

- Chart widget:

<div
  style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
>
  <img
    src="https://openbb-cms.directus.app/assets/9e7f2d80-1bd1-4238-bffc-099598c995a6.png"
    width="100%"
  />
</div>


### User feedback loop

The thumbs up and down buttons in the agent output allow the user to provide feedback in terms of their experience with the copilot. That data can be utilized to create a flywheel that allows developers to understand how the AI agent can be improved.

While the thumbs up does not prompt the user for any additional details.

<div
  style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
>
  <img
    src="https://openbb-cms.directus.app/assets/fc1ea4d0-e0b0-4669-ae40-23871ae67790.png"
    width="80%"
  />
</div>

The thumbs down asks for clarification of what went wrong.

<div
  style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
>
  <img
    src="https://openbb-cms.directus.app/assets/e89e9f77-6d52-4921-8f81-b73d39260d6f.png"
    width="80%"
  />
</div>

## Generative UI (beta)

The Generative UI capability enables the Copilot to directly manipulate and orchestrate your workspace environment through natural language commands.

The agent can:

1. Adding widgets (from Global Data) with the correct parameters.

2. Modify parameters from widgets on the dashboards.

3. Add a specific markdown widget on the fly.

Note: It doesn't (yet) allow to add new tables or charts from the AI chat currently or on the fly.
