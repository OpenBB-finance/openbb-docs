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

The OpenBB Copilot is an AI agent seamlessly integrated into the OpenBB Workspace, designed to serve as your personal financial analyst.

This sophisticated assistant understands natural language queries, retrieves data from multiple sources, performs complex analysis, and generates actionable insights.

Built specifically for financial professionals, the Copilot transforms traditional workflows by eliminating manual data retrieval, accelerating analysis, and providing context-aware insights based on your specific datasets and workspace configuration.

[GRAPHIC: Overview of the OpenBB Copilot in the OpenBB Workspace]

## Basics

### Structure

The Copilot interface is designed for intuitive interaction with a clean, three-section layout that maximizes usability and clarity.

- **Header:** Contains essential controls for conversation management, including the current conversation the user is in. But also the capability to start a new chat, clear the current chat history, expand to full AI-mode or hide the agent.

- **Body:** The primary interaction area where conversations unfold. This section displays the Copilot's responses, step-by-step reasoning processes, generated artifacts (charts, tables, code), and any intermediate results. The body automatically scrolls and organizes content chronologically, making it easy to follow complex multi-step analyses. When hovering on messages it also displays the datetime associated with these.

- **Footer:** This is where the data and widget management occurs for what will be used as context for the agent. This is also where the user can add their own custom AI agents or access their prompt library.

[GRAPHIC: Labeled image of the Copilot UI showing header, body, and footer]

### Full AI-chat mode

The Copilot panel offers adaptive sizing to match your workflow needs.

In side-panel mode, it provides quick access for simple queries while maintaining your primary workspace view.

When expanded to full-screen mode, you gain maximum real estate for complex conversations, detailed reasoning steps, and large artifacts like comprehensive charts or extensive data tables. This flexibility allows seamless transitions between quick consultations and deep analytical sessions without losing context or interrupting your workflow.

And of course you are capable of hiding the AI agent if you are locked in utilizing the workspace.

[GRAPHIC: Animation showing the copilot panel being expanded to full-screen chat mode]

### Prompt library

The integrated prompt library serves as a productivity multiplier by storing and organizing your most valuable queries. You can save complex prompts and even tag widgets, to ensure the right context is utilized for the right prompt.

This feature ensures consistency across team members and dramatically reduces the time spent retyping similar requests.

[GRAPHIC: Screenshot of the prompt library interface]

### Model

The OpenBB Copilot leverages cutting-edge large language models from OpenAI, specifically optimized for financial analysis and data interpretation tasks.

For enterprise deployments, OpenBB provides seamless integration with your organization's Azure OpenAI or dedicated OpenAI deployments, ensuring data sovereignty, compliance with internal security policies, and the ability to customize model behavior according to your firm's specific requirements and risk parameters.

If you would like full control over your agent capabilities, here's [our open source repository](https://github.com/OpenBB-finance/agents-for-openbb) with example of AI custom agents that you can build and integrate to the OpenBB Workspace.

## Context

The Copilot employs a sophisticated context understanding system that intelligently prioritizes and processes multiple information sources simultaneously.

This hierarchical approach ensures that the most relevant and specific data takes precedence when generating responses, while still maintaining awareness of broader workspace context and conversation history.

### Priority

The agent prioritizes context in the following order to provide the most relevant answers:

| Priority | Context Type | Description |
|---|---|---|
| 1 | Explicit | Widgets added to context specifically. |
| 2 | Attached files | Files uploaded directly to the Copilot |
| 3 | Dashboard | All widgets currently on your dashboard (in all tabs). |
| 4 | Global | All widgets available within the OpenBB Workspace. |
| 5 | Conversation | The history of your current conversation. |

### Explicit context

Explicit context represents the highest priority information source, allowing you to precisely direct the Copilot's attention to specific datasets or widgets. When you use the "@" symbol followed by a widget name or use "Add to context" button on any widget, you're creating a direct reference that the Copilot will prioritize above all other available information.

This mechanism is particularly powerful for ensuring accuracy when working with multiple similar datasets or when you need analysis focused on a specific dataset.

[GRAPHIC: Screenshot showing how to add explicit context using '@']

### Dashboard

The dashboard context provides the Copilot with comprehensive awareness of your current analytical environment. All widgets visible on your active dashboard become automatically available as data sources, allowing the Copilot to understand the broader context of your work session.

This includes all the data you are seeing, but also the widgets metadata and their current parameters selected.

### Attached

The attachment system enables the Copilot to process external documents and datasets that aren't part of your standard workspace configuration. Supported file types include PDFs (research reports, earnings statements, regulatory filings), Excel/CSV files (custom datasets, portfolio holdings, historical data), and various document formats.

The Copilot automatically extracts and indexes content from attached files, making them searchable and referenceable throughout your conversation. This capability is essential for ad-hoc analysis of new research, processing client-specific documents, or incorporating external datasets into your analysis workflow.

[GRAPHIC: Screenshot showing the 'attach file' button in the copilot]

### Global Retrieval

The global retrieval system provides the Copilot with access to the entire OpenBB Workspace widget library, extending far beyond your current dashboard widgets.

When your current dashboard doesn't contain the specific data or analysis tool needed to answer a query, the Copilot can automatically identify and utilize the appropriate widgets from the global library, effectively expanding your analytical capabilities on-demand without manual widget selection.

This is only possible due to the metadata associated with each widget and is why it's important to invest time in each widget metadata.

### Web Search

The web search capability enables the Copilot to access real-time information from across the internet when:

- The available workspace data is insufficient to fully answer your query.
- The user asks to look for the information on the open web.

This feature automatically activates as a fallback mechanism, ensuring comprehensive responses even when dealing with breaking news, recent market developments, or information not available in your current workspace configuration.

### Conversation

Conversational context enables natural, iterative analysis by maintaining awareness of your entire dialogue history within the current session.

The Copilot tracks not only your explicit questions and its responses, but also the reasoning paths taken, data sources accessed, and conclusions reached. This comprehensive memory allows for sophisticated follow-up queries, refinement of analysis parameters, and building upon previous insights without needing to re-establish context. The system understands references to "the previous chart", "that analysis", or "the data we discussed" and can seamlessly continue complex analytical workflows across multiple conversation turns.

<!--
### Memory

*Coming soon*

The persistent memory system will create a long-term understanding of your analytical preferences, frequently accessed datasets, preferred chart types, and typical workflow patterns. This cross-session intelligence will enable the Copilot to proactively suggest relevant analysis approaches, remember your naming conventions and categorization preferences, and adapt its communication style to match your professional context. The memory system will maintain privacy and security while building a personalized analytical assistant that becomes more effective over time.

--->

## Data Handling

### Structured data

The Copilot excels at processing and analyzing structured financial datasets through multiple specialized capabilities:

- **AgGrid (table/chart) widgets:** A natural language to SQL translation tool that helps you query tabular data using plain English. Once your data is loaded in a tabular format, `text2sql` converts your questions into SQL queries to retrieve specific information from these tables. This eliminates the need to write SQL manually while allowing you to explore and analyze your data through simple natural language questions.

- **Plotly widgets:** Full-featured charting engine that not only generates interactive visualizations but also allows firms to provide the underlying data. The Copilot can extract specific data points, and create derivative analyses from existing visualizations.

[GRAPHIC: Example of the agent using text2sql to query a database and showing the SQL]

### Unstructured data

The Copilot's unstructured data processing capabilities enable comprehensive analysis of diverse document types and media:

- **Document Processing (MD/PDF):** Advanced text extraction and comprehension. The system maintains document structure understanding, preserving context around tables, charts, and hierarchical information.
- **Web search:**: When the user provides a URL to the AI agent, it converts the web page to markdown for it to be parsed by the model - as done above.
- **Advanced RAG Implementation:** Sophisticated retrieval system that chunks large documents intelligently, maintains semantic relationships, and provides precise citations. The system can cross-reference information across multiple documents and identify contradictions or supporting evidence.
- **Multi-modal Analysis:** Image processing capabilities for charts, screenshots, financial diagrams, and infographics. The Copilot can extract data from visual representations, understand chart types, and incorporate visual information into broader analytical workflows.

[GRAPHIC: Example of the agent answering a question from a PDF document with citation]

## Tools

### Widgets

The Copilot treats every widget in the OpenBB Workspace as a programmable tool in its analytical toolkit.

This comprehensive integration means the Copilot can leverage hundreds of specialized functions ranging from basic data retrieval to complex quantitative analysis.

The system can chain widget operations, using the output from one widget as input for another, creating sophisticated analytical pipelines automatically.

### Widget parameters

Dynamic parameter modification represents one of the OpenBB's Copilot most powerful capabilities, enabling real-time customization of analytical tools based on conversational context.

The system understands the parameter schemas of each widget and can intelligently modify settings like date ranges, asset symbols, calculation periods, and analysis parameters to match your specific requirements.

This eliminates the need for manual widget configuration and enables the Copilot to perform iterative analysis with different parameters automatically, such as comparing the same analysis across different time periods or asset classes within a single conversation.

[GRAPHIC: Animation showing the agent changing a widget's parameter (e.g. stock ticker) to answer a question]

### Web search

The integrated web search capability extends the Copilot's knowledge beyond the OpenBB Workspace ecosystem to access real-time information from across the internet.

This feature automatically activates when workspace data is insufficient to answer your query, searching financial news sources, regulatory databases, company websites, and other authoritative sources. The system filters and prioritizes results based on relevance and credibility, then seamlessly integrates external information with your existing workspace data to provide comprehensive answers with proper source attribution.

[GRAPHIC: Screenshot of a web search result within the copilot chat]

### Code interpreter

*Coming soon*

The secure code execution environment will enable the Copilot to perform advanced quantitative analysis through custom Python code generation and execution.

This sandboxed interpreter will support popular financial libraries (pandas, numpy, scipy, sklearn, matplotlib and plotly) and will be capable of running statistical models, and custom analytical algorithms.

The code interpreter will maintain security isolation while providing full computational flexibility for sophisticated financial modeling and analysis tasks.

[GRAPHIC: tba]

### MCP Server

*Coming soon*

Model Context Protocol (MCP) integration will enable seamless connection to third-party data providers, analytical services, and specialized financial tools without requiring custom development within the OpenBB Workspace.

This extensibility framework will support integration with proprietary databases, alternative data providers, risk management systems, and specialized analytical platforms.

Organizations will be able to maintain their existing technology stack while providing the Copilot with unified access to all relevant data sources and tools through standardized protocol connections.

[GRAPHIC: tba]

## Step-by-step reasoning

Transparency and auditability are fundamental to the OpenBB's Copilot design, with comprehensive step-by-step reasoning displayed for every analysis.

This detailed process visibility enables users to understand the logical flow, verify data sources, identify potential biases, and ensure compliance with analytical standards.

The reasoning display serves both educational and quality assurance purposes, building user confidence while maintaining the ability to audit and reproduce analytical processes.

[GRAPHIC: Screenshot of the step-by-step reasoning display in the copilot]

### Planning

The planning phase demonstrates the Copilot's strategic thinking by decomposing complex analytical requests into logical, sequential sub-tasks. This planning process considers data dependencies, optimal execution order, and resource requirements.

The displayed plan serves as a roadmap that users can review and potentially modify before execution, ensuring alignment with analytical objectives and providing clear expectations for the upcoming analysis workflow.

[GRAPHIC: Example of the agent breaking down a complex query into a plan with sub-tasks]

### Querying widgets

Widget query transparency provides complete visibility into data retrieval operations, including the specific widget accessed, all parameters used, data source information, and timestamp details.

This documentation enables users to understand exactly what data was retrieved, verify parameter settings, and reproduce the analysis independently. The system also displays any parameter modifications made automatically, ensuring full awareness of how the Copilot adapted widget configurations to meet query requirements.

[GRAPHIC: Screenshot showing the details of a widget query in the reasoning steps]

### Intermediate result artifact

Intermediate artifacts provide crucial visibility into the Copilot's analytical methodology by displaying generated code, SQL queries, calculation formulas, and other technical implementations.

These artifacts serve multiple purposes: enabling technical review and validation, supporting learning and knowledge transfer, facilitating debugging and optimization, and ensuring compliance with analytical standards.

Users can examine, modify, and reuse these artifacts, treating them as valuable analytical assets beyond their immediate application.

[GRAPHIC: Screenshot of an intermediate artifact, like a SQL query or Python code block]

### Artifact generated

Final artifacts represent the culmination of the analytical process, displayed with complete context about their creation methodology. These artifacts maintain full provenance information, including data sources, transformation steps, and parameter settings used in their generation.

The system preserves the relationship between artifacts and their creation process, enabling users to understand not just what was created, but how and why, supporting both immediate use and future reference or modification.

[GRAPHIC: Screenshot showing a generated chart or table as an artifact]

## Output

The Copilot's output system delivers comprehensive, contextual responses that synthesize all available information into actionable insights. Each response is structured to provide immediate answers while supporting deeper investigation, combining direct responses with supporting evidence, data visualizations, and clear pathways for follow-up analysis.

### Citations

Comprehensive citation system ensures full traceability and verification of all information sources used in responses. The citation framework provides different levels of detail based on source type:

- **Widget citations:** Direct links to widgets with parameters selected. Smart linking enables "Scroll to widget" functionality for existing dashboard widgets. If the widget doesn't exist in the dashboard or has modified parameters the linking will provide a "Add widget to dashboard" options to facilitate workspace workflow.
- **Document citations:** Precise page and section references for PDF documents with automatic highlighting of relevant content areas.
- **Web citations:** Full URL references when web pages are utilized.

[GRAPHIC: Screenshot showing citations with links to sources, and the "Scroll to widget" and "Add widget to dashboard" options]

### Create widgets from AI output

The widget creation system enables seamless integration of Copilot-generated content into your workspace environment.

This capability transforms temporary conversational outputs into permanent analytical assets that can be referenced, shared, and incorporated into ongoing workflows.

The system supports multiple artifact types including formatted text summaries, interactive data tables with sorting and filtering capabilities, and fully functional charts with preserved interactivity.

[GRAPHIC: Animation showing a chart generated by the AI being converted into a workspace widget]

### User feedback loop

The thumbs up and down buttons in the agent output allow the user to provide feedback in terms of their experience with the copilot. That data can be utilized to create a flywheel that allows developers to understand how the AI agent can be improved.

## Generative UI

*COMING SOON*

The generative user interface capability will enable the Copilot to directly manipulate and orchestrate your workspace environment through natural language commands. This advanced functionality will include:

- **Multi-widget deployment:** Automatically adding complementary widgets to your dashboard in optimal arrangements based on analytical requirements.
- **Dynamic parameter synchronization:** Real-time updating of existing widget parameters across your dashboard to maintain consistency and support comparative analysis.
- **Complete dashboard generation:** Creating fully functional, professionally arranged dashboards from single natural language descriptions, incorporating appropriate data sources, analytical tools, and visualization components tailored to specific analytical objectives or industry use cases.
