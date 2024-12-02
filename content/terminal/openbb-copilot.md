---
title: OpenBB Copilot
sidebar_position: 8
description: Learn how to use OpenBB Copilot to interact with the OpenBB Terminal Pro
keywords:
- OpenBB Copilot
- copilot
- voice command
- agent
- assistant
- Natural language processing
- Large language model
- OpenAI
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';
import ReactPlayer from 'react-player'

<HeadTitle title="Copilot | OpenBB Terminal Docs" />

OpenBB Copilot is your AI companion that helps you interact with the OpenBB
Terminal, and perform a wide variety of research and analysis tasks.

With OpenBB Copilot, you can:

- Answer general knowledge questions
- Interact with widgets added explicitly to its context
- Interact with your uploaded files
- Automatically use data from the dashboard
- Automatically retrieve data using the OpenBB API or any custom backend you have added
- Create charts, tables, and other text artifacts, like summaries
- Iteratively manipulate and transform data and charts
- Be used to search the web for additional information
- Provide citations

## Introduction

<div style={{display: 'flex', justifyContent: 'center'}}>
<img src="https://openbb-assets.s3.amazonaws.com/docs/copilot/open_copilot.jpg" alt="open openbb copilot" width="70%" height="70%" />
</div>

To use OpenBB Copilot, click on the purple icon located at the center right of the
Terminal screen.

Under most circumstances, you can treat OpenBB Copilot like a personal research
assistant. OpenBB Copilot has access to the widgets (including your uploaded files) on your currently-active
dashboard, the OpenBB API and any custom backend endpoints you have added. 

Using all of these sources of data, OpenBB Copilot can assist you in performing a wide
variety of tasks.

<div style={{display: 'flex', justifyContent: 'center'}}>
<img src="https://openbb-assets.s3.amazonaws.com/docs/copilot/copilot_opened.jpg" alt="opened openbb copilot" width="70%" height="70%" />
</div>


## Understanding Chats

OpenBB Copilot is a chat-based assistant that leverages multiple LLMs (Large
Language Models) under-the-hood to understand your queries and provide answers. 

Since OpenBB Copilot is a chat-based assistant, it maintains a conversation history
to provide contextual responses. This means you can have natural back-and-forth
discussions, ask follow-up questions, and refine your queries based on previous
responses. The conversation history helps OpenBB Copilot understand the context of
your questions and provide more relevant and personalized assistance throughout
your interaction.

For example, if you ask about the price-to-earnings (P/E) ratio, and then follow
up by asking about other important financial ratios, OpenBB Copilot will
understand the context and suggest relevant ratios:

<div style={{display: 'flex', justifyContent: 'center'}}>
<img src="https://openbb-assets.s3.amazonaws.com/docs/copilot/pe_ratio_chat_example.jpg" alt="chat history openbb copilot" width="40%" height="40%" />
</div>

If you'd like to clear the history of the current conversation, you can do so by
clicking on the trashcan icon in the upper right corner of the OpenBB Copilot
window. It is **highly recommended** to clear the chat history when you have a
new question that is unrelated to your current conversation, to prevent
confusing OpenBB Copilot:

<div style={{display: 'flex', justifyContent: 'center'}}>
<img src="https://openbb-assets.s3.amazonaws.com/docs/copilot/copilot_trash_can_icon.png" alt="clear chat button openbb copilot" width="80%" height="80%" />
</div>

## General question answering

The simplest functionality of OpenBB Copilot is general question answering. For
example, you can ask Copilot things like:

- "What's the difference between stocks and bonds?"
- "Explain inflation."
- "Can you explain the concept of dollar-cost averaging?"

For general questions, OpenBB Copilot will rely on its underlying model's
extensive training data to formulate answers. We suggest you spend some time    
exploring this functionality with a range of questions across different topics
to get a feel for how OpenBB Copilot works and behaves.

## Interacting with data using OpenBB Copilot
OpenBB Copilot really becomes powerful when you start interacting with data.
There are three primary ways to interact with data using OpenBB Copilot:

1. Analyzing specific widgets added to the context explicitly
2. OpenBB Copilot automatically using data from the dashboard
3. OpenBB Copilot automatically retrieving data using the OpenBB API or any custom backend you have added.


### Analyze specific widgets only

Sometimes, you might want OpenBB Copilot to analyze data from only a specific
widget (or set of widgets) on your dashboard. For example, if you want to deep dive
into an earnings transcript, and ignore all other widgets on your dashboard, you can
do that by clicking on the "Add widgets as context" button on the widgets you want OpenBB
Copilot to use. Once selected, OpenBB Copilot will only access data from those widgets,
ignoring all others:

<div style={{display: 'flex', justifyContent: 'center'}}>
<img src="https://openbb-assets.s3.amazonaws.com/docs/copilot/add_specific_widget_context.png" alt="add widget context openbb copilot" width="80%" height="80%" />
</div>

The OpenBB Copilot window will also show you which widgets are currently selected as explicitly-added context:

<div style={{display: 'flex', justifyContent: 'center'}}>
<img src="https://openbb-assets.s3.amazonaws.com/docs/copilot/copilot_window_explicit_context.png" alt="query widget context openbb copilot" width="80%" height="80%" />
</div>

### Automatically use data from the dashboard

OpenBB Copilot can access information from all widgets you have added to your
currently-active dashboard. If no widgets have been explicitly added to the
context, OpenBB Copilot can automatically retrieve data from your
widgets on the dashboard that it requires in order to answer your query.

For example, if you add the "Historical Stock Price" widget to your dashboard,
you can ask OpenBB Copilot to give you the monthly highs for a particular year
for AAPL, and OpenBB Copilot will retrieve the data from the "Historical Stock
Price" widget on your dashboard automatically to provide an answer:

<div style={{display: 'flex', justifyContent: 'center'}}>
<img src="https://openbb-assets.s3.amazonaws.com/docs/copilot/copilot_retrieve_from_dashboard.png" alt="copilot retrieve from dashboard" width="100%" height="100%" />
</div>

Also note how OpenBB Copilot displays the reasoning steps that it took to
retrieve the data:

<div style={{display: 'flex', justifyContent: 'center'}}>
<img src="https://openbb-assets.s3.amazonaws.com/docs/copilot/reasoning_steps.png" alt="reasoning steps openbb copilot" width="50%" height="50%" />
</div>

OpenBB Copilot also provides a citation for the data source after its response. When you hover over the citation, it will highlight the widget on the dashboard that provided the data:
<div style={{display: 'flex', justifyContent: 'center'}}>
<img src="https://openbb-assets.s3.amazonaws.com/docs/copilot/citation_example.png" alt="citation example openbb copilot" width="100%" height="100%" />
</div>


To learn more about reasoning steps and citations, please see the [Reasoning
Steps](#reasoning-steps) and [Citations](#citations) sections below.

:::note

Sometimes, you might need to be more specific with your query when you want
Copilot to use one or more widgets from your dashboard, since vague queries
might lead OpenBB Copilot to retrieve the data automatically from all of the
available data sources it has access to (See more about this in the
[Automatically using data sources available to
Terminal](#automatically-using-data-sources-available-to-terminal) section
below).

To remedy this, simply adding "Use the widgets on my dashboard" to the end of
your query will be sufficient to get OpenBB Copilot to retrieve the data from
the relevant widgets on your dashboard.

:::


### Using your own files

OpenBB Copilot can also analyze and answer questions using files you provide, such as PDF, CSV, and XLSX files.

To add a file to OpenBB Copilot, first [upload it and add it as a widget to the currently-active dashboard](https://docs.openbb.co/pro/upload-files).

The file can then be used by OpenBB Copilot to answer questions (either by adding the file widget to the [context explicitly](#analyze-specific-widgets-only), or by allowing OpenBB Copilot to [automatically retrieve the data](#automatically-use-data-from-the-dashboard) if it is relevant to your query).

<div style={{display: 'flex', justifyContent: 'center'}}>
<img src="https://openbb-assets.s3.amazonaws.com/docs/copilot/custom_pdf_chat_example.jpg" alt="custom pdf copilot chat" width="100%" height="100%" />
</div>

Alternatively, you can also upload files directly to OpenBB Copilot by clicking
on the paper clip icon in the OpenBB Copilot window. Files uploaded directly to
OpenBB Copilot in this manner will **not** be persisted between sessions:

<div style={{display: 'flex', justifyContent: 'center'}}>
<img src="https://openbb-assets.s3.amazonaws.com/docs/copilot/copilot_anonymous_files.png" alt="upload file to copilot" width="80%" height="80%" />
</div>


:::note

When uploading files directly to OpenBB Copilot, we use filenames to determine
if a file is relevant to your query. For best results, use descriptive
filenames.  For example, if you have a technical report from Tesla released in
2024, a good filename would be `tsla_technical_report_2024.pdf`.

:::

### Automatically using data sources available to OpenBB Terminal

OpenBB Copilot can also access external data sources to provide additional
insights. This allows you to ask questions that go beyond the data displayed on
your dashboard.

External data can be retrieved from all data sources available to the Terminal,
including the OpenBB API (which powers first-party widgets), and any custom
backend endpoints that you have added.

:::note

OpenBB Copilot prioritizes data in the following order:

1. Explicitly-added context widgets
2. Data from widgets on the currently-active dashboard
3. Data from the OpenBB API or any active custom backend.

:::

For example, you can ask OpenBB Copilot to fetch the latest stock price for a
specific company, or to provide a summary of the latest news for a particular
stock without having to add a widget to your dashboard.

<div style={{display: 'flex', justifyContent: 'center'}}>
<img src="https://openbb-assets.s3.amazonaws.com/docs/copilot/direct_retrieval_example.png" alt="direct retrieval example" width="50%" height="50%" />
</div>

If OpenBB Copilot retrieved data directly from a data source, you can add that
data to your dashboard by hovering over the appropriate citation, and clicking
on the "Add to dashboard" button:

<div style={{display: 'flex', justifyContent: 'center'}}>
<img src="https://openbb-assets.s3.amazonaws.com/docs/copilot/add_to_dashboard_from_citation.png" alt="add to dashboard from citation" width="70%" height="70%" />
</div>

## Producing charts and tables using OpenBB Copilot
OpenBB Copilot can produce charts and tables using the data that it has access
to. We call these special outputs "artifacts".

For charts, OpenBB Copilot can currently produce the following plot types:
- Line chart
- Vertical bar chart
- Scatter plot

To produce a chart or a table, mention the output that you want in your query.
For example, to produce a chart of the latest stock price for Apple, you can
ask OpenBB Copilot to "Create a chart of the latest stock price for Apple".

<div style={{display: 'flex', justifyContent: 'center'}}>
<img src="https://openbb-assets.s3.amazonaws.com/docs/copilot/chart_artifact.png" alt="chart artifact openbb copilot" width="60%" height="60%" />
</div>

If you wanted a table instead, you can just modify your query slightly to ask for a table:

<div style={{display: 'flex', justifyContent: 'center'}}>
<img src="https://openbb-assets.s3.amazonaws.com/docs/copilot/table_artifact.png" alt="table artifact openbb copilot" width="60%" height="60%" />
</div>

### Converting artifacts to widgets
Every artifact that OpenBB Copilot generates can be converted to a widget. To do
this, click the "Create widget from text" or "Create widget from table" button:

<div style={{display: 'flex', justifyContent: 'center'}}>
<img src="https://openbb-assets.s3.amazonaws.com/docs/copilot/create_widget_from_artifact.png" alt="create widget from artifact openbb copilot" width="60%" height="60%" />
</div>

This will create a new widget on your dashboard containing the artifact.

:::note

The newly-created widget contains all of the data in the artifact, so you can
interact with it just like any other widget on your dashboard (including
switching between different types of charts, or toggling between chart and table
views).

:::

## Searching the web

OpenBB Copilot has the ability to search the web. 

To search the web, use the `@web` keyword in your query to tell OpenBB Copilot
to search the web for information. For example:

<div style={{display: 'flex', justifyContent: 'center'}}>
<img src="https://openbb-assets.s3.amazonaws.com/docs/copilot/web_search_example.png" alt="web search openbb copilot" width="60%" height="60%" />
</div>

## Reasoning Steps
As OpenBB Copilot goes through the process of answering your query, it will show
you the reasoning steps it took to arrive at the answer.  These reasoning steps
appear above Copilot's responses. Reasoning steps can be expanded to see more
information about the intermediate steps OpenBB Copilot took to arrive at the
answer:

<div style={{display: 'flex', justifyContent: 'center'}}>
<img src="https://openbb-assets.s3.amazonaws.com/docs/copilot/expanded_reasoning_steps.png" alt="expanded reasoning steps openbb copilot" width="60%" height="60%" />
</div>

The reasoning steps can contain parameters for data sources, internal queries,
which files are accessed, intermediate artifacts, and more.

## Citations

When accessing data (whether from widgets on your dashboard, files you have
uploaded, or external data sources), OpenBB Copilot will always cite the data
source it referenced when responding to your query:

<div style={{display: 'flex', justifyContent: 'center'}}>
<img src="https://openbb-assets.s3.amazonaws.com/docs/copilot/citations.png" alt="citations openbb copilot" width="80%" height="80%" />
</div>

If the widget that was cited by OpenBB Copilot is present on your dashboard,
hovering over the citation will give you the option to scroll to that widget.

If the widget is not present (for example, if OpenBB Copilot retrieved the data
from an external data source), hovering over the citation will give you the
option to add the data to your dashboard.

## Prompting guidelines

The OpenBB Copilot is designed to assist you in your research and analysis. To
get the most out of OpenBB Copilot, it is important to have a good understanding
of prompting techniques.

We recommend reading through the [OpenAI Prompt Engineering Guide](https://beta.openai.com/docs/guides/prompt-engineering) to learn more
about how to structure your prompts to get the best results.
