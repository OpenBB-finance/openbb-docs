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

OpenBB copilot is your companion to interact with the OpenBB Terminal.

## Introduction

<div style={{display: 'flex', justifyContent: 'center'}}>
<img src="https://openbb-assets.s3.amazonaws.com/docs/copilot/open_copilot.jpg" alt="open openbb copilot" width="70%" height="70%" />
</div>

To open OpenBB Copilot, click on the purple icon located at the center right of the
Terminal screen.

Under most circumstances, you can treat OpenBB Copilot like your very own
personal research assistant. OpenBB Copilot has access to the widgets on your
dashboard, the OpenBB API and any custom endpoints you have added, as well as
your uploaded files. Using all of these sources, OpenBB Copilot can assist you in
performing a wide variety of tasks.

<div style={{display: 'flex', justifyContent: 'center'}}>
<img src="https://openbb-assets.s3.amazonaws.com/docs/copilot/copilot_opened.jpg" alt="opened openbb copilot" width="70%" height="70%" />
</div>

We'll be exploring each of these features in the following sections below.

## How chats work

OpenBB Copilot is a chat-based assistant that uses the conversation history to
help answer your queries.  This allows you to ask follow-up questions or guide
OpenBB Copilot while performing tasks.

For example, if you ask about the price-to-earnings (P/E) ratio, and then follow
up by asking about other important financial ratios, OpenBB Copilot will
remember the context and suggest relevant ratios:

<div style={{display: 'flex', justifyContent: 'center'}}>
<img src="https://openbb-assets.s3.amazonaws.com/docs/copilot/pe_ratio_chat_example.jpg" alt="chat history openbb copilot" width="40%" height="40%" />
</div>

If you'd like to clear the history of the current conversation, you can do so by
clicking on the trashcan icon in the OpenBB Copilot chatbox in the upper right
corner. It is usually a good idea to clear the chat history when you have a new
question that is unrelated to your current conversation.

| ![clear chat button openbb copilot](https://openbb-assets.s3.amazonaws.com/docs/copilot/clear_chat_button.jpg) | ![cleared chat openbb copilot](https://openbb-assets.s3.amazonaws.com/docs/copilot/cleared_chat.jpg)
|:-----------------------------------------------------------------------------------------:|:-----------------------------------------------------------------------------------------:|

## General question answering

OpenBB Copilot is capable of answering general financial questions and answers.
For example, you can ask Copilot things like:

- "What's the difference between stocks and bonds?"
- "Explain inflation."
- "Can you explain the concept of dollar-cost averaging?"

For general financial questions, OpenBB Copilot will rely on its underlying
model's extensive training data to formulate answers. We encourage users to
explore this functionality with in-depth and varied questions.

## Interacting with Data using OpenBB Copilot

### Adding widgets explicitly as context

Sometimes, you might want OpenBB Copilot to analyze only specific widgets on your dashboard. For example, if you want to deep dive into an earnings transcript without considering other data, you can do that.

To focus on certain widgets, click the "Add widgets as context" button on the widgets you want OpenBB Copilot to use. Once selected, OpenBB Copilot will only access data from those widgets, ignoring all others. This allows you to carry out a more targeted analysis while using OpenBB Copilot.

<div style={{display: 'flex', justifyContent: 'center'}}>
<img src="https://openbb-assets.s3.amazonaws.com/docs/copilot/add_specific_widget_context.jpg" alt="add widget context openbb copilot" width="80%" height="80%" />
</div>

<div style={{display: 'flex', justifyContent: 'center'}}>
<img src="https://openbb-assets.s3.amazonaws.com/docs/copilot/aapl_earnings_transcript_chat_example.jpg" alt="query widget context openbb copilot" width="80%" height="80%" />
</div>

### Automatically using data from the dashboard

OpenBB Copilot is incredibly powerful, as it can access information from all widgets on your current dashboards, the OpenBB API, and your uploaded data. It will begin by scanning your dashboard for relevant information based on your queries. If one is not found, it will move on to the other available sources listed above.

For example, if you ask for a summary of the latest news about Apple, OpenBB
Copilot will retrieve the Company News widget data on your dashboard (provided
the widget has been added to the dashboard) to provide an answer.

<div style={{display: 'flex', justifyContent: 'center'}}>
<img src="https://openbb-assets.s3.amazonaws.com/docs/copilot/aapl_+news_chat_example.jpg" alt="aapl news openbb copilot" width="80%" height="80%" />
</div>

Since OpenBB Copilot can access data from any widget in the active dashboard, we
encourage users to experiment with adding different kinds of widgets and
experimenting with various queries.

For example, OpenBB Copilot is particularly effective at summarizing earnings call transcripts
from the "Earnings Transcripts" widget.

### Using your own files

OpenBB Copilot can also analyze and answer questions using files you provide, such as PDF, CSV, and XLSX files.

To add a file to OpenBB Copilot, first [add it to the currently-active dashboard](https://docs.openbb.co/pro/upload-files) or click the paper clip icon.


<div style={{display: 'flex', justifyContent: 'center'}}>
 <img src="https://openbb-assets.s3.amazonaws.com/docs/copilot/add_custom_data_chat_example.jpg" alt="add custom data openbb copilot" width="80%" height="80%" />
 </div>

 <div style={{display: 'flex', justifyContent: 'center'}}>
 <img src="https://openbb-assets.s3.amazonaws.com/docs/copilot/custom_data_chat_example.jpg" alt="query custom data openbb copilot" width="80%" height="80%" />
 </div>

Once the file widget has been added to your dashboard, you can add it to OpenBB Copilot explicitly by clicking the "add widget to context" button, or you can simply begin querying, and OpenBB Copilot will retrieve the data if it is relevant to your query.

If OpenBB Copilot uses your file widget to answer any part of you query, it will show citations after its answer.  

<div style={{display: 'flex', justifyContent: 'center'}}>
<img src="https://openbb-assets.s3.amazonaws.com/docs/copilot/custom_pdf_chat_example.jpg" alt="custom pdf copilot chat" width="80%" height="80%" />
</div>

:::note

When uploading files directly to OpenBB Copilot, we use filenames to determine if a file is relevant to your query. For best results, use descriptive filenames.
For example, if you have a technical report from Tesla released in 2024, a good filename would be `tsla_technical_report_2024.pdf`.

:::

### Adding custom data sources

The custom data can either be your own files, API endpoints, custom backends or databases.

See [Input Data](https://docs.openbb.co/pro/data-connector) for more details.

### Automatically using data sources available to Terminal

As mentioned earlier, OpenBB Copilot can also access external data sources to provide additional insights. This allows you to ask questions that go beyond the data displayed on your dashboard.

External data can either be the OpenBB API or your own custom endpoints.

**Querying the OpenBB API**

For example, you can ask OpenBB Copilot to fetch the latest stock price for a specific company, or to provide a summary of the latest news for a particular stock without having to add a widget to your dashboard.

<div style={{display: 'flex', justifyContent: 'center'}}>
<img src="https://openbb-assets.s3.amazonaws.com/docs/copilot/news_openbb_api_chat_example.jpg" alt="openbb copilot api" width="50%" height="50%" />
</div>

To query a custom endpoint, please explore the [Custom Backend](/terminal/custom-backend) documentation.

### Searching the Web

The OpenBB Copilot has the ability to search the web for information that is not available in the data sources it has access to. This allows you to ask questions that go beyond the data displayed on your dashboard.

To search the web, the user needs to be explicit in their query by adding the `@web` keyword in the query.

<div style={{display: 'flex', justifyContent: 'center'}}>
<img src="https://openbb-assets.s3.amazonaws.com/docs/copilot/web_search_chat_example.jpg" alt="web search openbb copilot" width="80%" height="80%" />
</div>

## Citations, Status Updates, and Artifacts

When querying OpenBB Copilot, it is important to understand which data OpenBB
Copilot used to answer your query. As a result, OpenBB Copilot will always cite the data
source it referenced when responding to your query.

<div style={{display: 'flex', justifyContent: 'center'}}>
<img src="https://openbb-assets.s3.amazonaws.com/docs/copilot/citation_chat_example.jpg" alt="citations openbb copilot" width="80%" height="80%" />
</div>

We go one step further by providing live status updates which notify the user on actions taken by the OpenBB Copilot.
For example, if the OpenBB Copilot is querying your uploaded data, it will provide a status update saying "Querying user files".

### Artifacts

A special kind of status update is the result artifact which has the final data used to answer the query. It either be a text or a table.
The contents of the artifact are produced by the reasoning of the OpenBB Copilot.

<div style={{display: 'flex', justifyContent: 'center'}}>
<img src="https://openbb-assets.s3.amazonaws.com/docs/copilot/artifact_chat_example.jpg" alt="result artifact openbb copilot" width="80%" height="80%" />
</div>

To ensure transparency and extend the analysis, OpenBB Copilot will also return intermediate result artifacts that were used as reasoning steps to arrive to the final artifact and thus the answer.

<div style={{display: 'flex', justifyContent: 'center'}}>
<img src="https://openbb-assets.s3.amazonaws.com/docs/copilot/intermediate_result_artifact_chat_example.jpg" alt="intermediate result artifact openbb copilot" width="80%" height="80%" />
</div>

## Creating widgets from OpenBB Copilot responses

Each time OpenBB Copilot generates a response, it will have a "Create widget from text" or "Create widget from table" button. Clicking this button will create a new widget on your dashboard based on the response.

| ![widget generate button openbb copilot](https://openbb-assets.s3.amazonaws.com/docs/copilot/text_widget_creation_button.jpg) | ![widget generate button openbb copilot](https://openbb-assets.s3.amazonaws.com/docs/copilot/text_widget_creation.jpg) | ![widget generate button openbb copilot](https://openbb-assets.s3.amazonaws.com/docs/copilot/text_widget_created.jpg) |
|:-----------------------------------------------------------------------------------------:|:-----------------------------------------------------------------------------------------:|:-----------------------------------------------------------------------------------------:|

| ![widget generate button openbb copilot](https://openbb-assets.s3.amazonaws.com/docs/copilot/table_widget_creation_button.jpg) | ![widget generate button openbb copilot](https://openbb-assets.s3.amazonaws.com/docs/copilot/table_widget_creation.jpg) | ![widget generate button openbb copilot](https://openbb-assets.s3.amazonaws.com/docs/copilot/table_widget_created.jpg) |
|:-----------------------------------------------------------------------------------------:|:-----------------------------------------------------------------------------------------:|:-----------------------------------------------------------------------------------------:|

## Prompting guidelines

The OpenBB Copilot is designed to assist you in your research and analysis. To get the most out of OpenBB Copilot, it is
important to have a good understanding of prompting techniques.

We recommend reading through the [OpenAI Prompt Engineering Guide](https://beta.openai.com/docs/guides/prompt-engineering) to learn more about how to structure your prompts to get the best results.
