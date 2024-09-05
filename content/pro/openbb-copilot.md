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

<HeadTitle title="Copilot | OpenBB Terminal Pro Docs" />

OpenBB copilot is your companion to interact with the OpenBB Terminal Pro.

## Getting started

<img src="https://openbb-assets.s3.amazonaws.com/docs/copilot/open_copilot.jpg" alt="open openbb copilot" width="70%" height="70%" />

To open OpenBB Copilot, click on the purple icon located at the center right of the
Terminal Pro screen.

Under most circumstances, you can treat OpenBB Copilot like your very own
personal research assistant. OpenBB Copilot has access to the widgets on your
dashboard, the OpenBB API and any custom endpoints you have added, as well as
your uploaded files. Using all of these sources, OpenBB Copilot can assist you in 
performing a wide variety of tasks.

<img src="https://openbb-assets.s3.amazonaws.com/docs/copilot/copilot_opened.jpg" alt="opened openbb copilot" width="70%" height="70%" />

We'll be exploring each of these features in the following sections below.

## Understanding chats

OpenBB Copilot is a chat-based assistant that uses the conversation history to
help answer your queries.  This allows you to ask follow-up questions or guide
OpenBB Copilot while perform tasks.

For example, if you ask about the price-to-earnings (P/E) ratio, and then follow
up by asking about other important financial ratios, OpenBB Copilot will
remember the context and suggest relevant ratios:

<img src="https://openbb-assets.s3.amazonaws.com/docs/copilot/pe_ratio_chat_example.jpg" alt="chat history openbb copilot" width="40%" height="40%" />

If you'd like to clear the history of the current conversation, you can do so by
clicking on the trashcan icon in the OpenBB Copilot chatbox in the upper right
corner. It is usually a good idea to clear the chat history when you have a new
question that is unrelated to your current conversation.

## General question answering

As seen in the previous section, OpenBB Copilot is capable of answering general
financial questions and answers. For example, you can ask Copilot things like:

- "What's the difference between stocks and bonds?"
- "Explain inflation."
- "Can you explain the concept of dollar-cost averaging?"

For general financial questions, OpenBB Copilot will rely on the underlying
model's extensive training data to formulate answers. We encourage users to
explore this functionality with in-depth and varied questions.

## Querying the dashboard

By default, OpenBB Copilot can access the data shown on your active dashboard. This allows it to answer questions based on the information currently visible.

For example, if you ask for a summary of the latest news about Apple, OpenBB Copilot will use the Company News widget on your dashboard (if it's displaying news for AAPL) to provide an accurate response.

<img src="https://openbb-assets.s3.amazonaws.com/docs/copilot/aapl_+news_chat_example.jpg" alt="aapl news openbb copilot" width="80%" height="80%" />

It's important to know which data OpenBB Copilot used for its answers. That's why it will always cite the data source it referenced when responding to your query. Sometimes, OpenBB Copilot will generate an artifact (such as text or table) it used to answer your question.

<img src="https://openbb-assets.s3.amazonaws.com/docs/copilot/citation_chat_example.jpg" alt="citations openbb copilot" width="80%" height="80%" />

Since OpenBB Copilot can access data from any widget in the active dashboard, we
encourage users to experiment with adding different kinds of widgets and
experimenting with various queries.

For example, OpenBB Copilot is particularly effective at summarizing earnings call transcripts
from the "Earnings Transcripts" widget.

## Creating widgets from OpenBB Copilot responses

Each time OpenBB Copilot generates a response, it will have an "Create widget from text" or "Create widget from table" button. Clicking this button will create a new widget on your dashboard based on the response.

| ![widget generate button openbb copilot](https://openbb-assets.s3.amazonaws.com/docs/copilot/text_widget_creation_button.jpg) | ![widget generate button openbb copilot](https://openbb-assets.s3.amazonaws.com/docs/copilot/text_widget_creation.jpg) | ![widget generate button openbb copilot](https://openbb-assets.s3.amazonaws.com/docs/copilot/text_widget_created.jpg) |
|:-----------------------------------------------------------------------------------------:|:-----------------------------------------------------------------------------------------:|:-----------------------------------------------------------------------------------------:|

| ![widget generate button openbb copilot](https://openbb-assets.s3.amazonaws.com/docs/copilot/table_widget_creation_button.jpg) | ![widget generate button openbb copilot](https://openbb-assets.s3.amazonaws.com/docs/copilot/table_widget_creation.jpg) | ![widget generate button openbb copilot](https://openbb-assets.s3.amazonaws.com/docs/copilot/table_widget_created.jpg) |
|:-----------------------------------------------------------------------------------------:|:-----------------------------------------------------------------------------------------:|:-----------------------------------------------------------------------------------------:|

## Querying specific widgets only

Sometimes, you might want OpenBB Copilot to analyze only specific widgets on your dashboard. For example, if you want to dive deep into an earnings transcript without considering other data, you can do that.

To focus on certain widgets, click the "Add widgets as context" button on the widgets you want OpenBB Copilot to use. Once selected, OpenBB Copilot will only access data from those widgets, ignoring all others. This allows you to carry out a more targeted analysis while using OpenBB Copilot as usual.

<img src="https://openbb-assets.s3.amazonaws.com/docs/copilot/add_specific_widget_context.jpg" alt="add widget context openbb copilot" width="80%" height="80%" />

<img src="https://openbb-assets.s3.amazonaws.com/docs/copilot/aapl_earnings_transcript_chat_example.jpg" alt="query widget context openbb copilot" width="80%" height="80%" />

## Querying your own data

OpenBB Copilot can also analyze and answer questions using files you provide, such as TXT, PDF, CSV, and XLSX files. To upload a file, simply drag and drop it into the OpenBB Copilot chatbox or click the paper clip icon.

Once uploaded, OpenBB Copilot can use the data from these files to answer your questions. If it does, it will cite the specific files (and, for PDFs, the exact page) it referenced.

<img src="https://openbb-assets.s3.amazonaws.com/docs/copilot/add_custom_data_chat_example.jpg" alt="add custom data openbb copilot" width="80%" height="80%" />

<img src="https://openbb-assets.s3.amazonaws.com/docs/copilot/custom_data_chat_example.jpg" alt="query custom data openbb copilot" width="80%" height="80%" />

:::note

OpenBB Copilot uses filenames to determine if a file is relevant to your query. For best results, use descriptive filenames.
For example, if you have a technical report from Tesla released in 2024, a good filename would be `tsla_technical_report_2024.pdf`.

:::

## Querying external data

OpenBB Copilot can also access external data sources to provide additional insights. This allows you to ask questions that go beyond the data displayed on your dashboard.

External data can either be the OpenBB API or your own custom endpoints.

**Querying the OpenBB API**

For example, you can ask OpenBB Copilot to fetch the latest stock price for a specific company, or to provide a summary of the latest news for a particular stock without having to add a widget to your dashboard.

<img src="https://openbb-assets.s3.amazonaws.com/docs/copilot/news_openbb_api_chat_example.jpg" alt="openbb copilot api" width="50%" height="50%" />

To query a custom endpoint, please explore the [Custom Backend](/pro/custom-backend/custom-backend) documentation.

## Generating dashboard titles

OpenBB Copilot can also generate titles for your dashboard based on the present widgets on the dashboard. To do this, on the left side of the screen click the three dots on the dashboard you wish to rename. Then click the purple OpenBB Copilot icon.

<img src="https://openbb-assets.s3.amazonaws.com/docs/copilot/dashboard_title.jpg" alt="openbb copilot dashboard title generation" width="50%" height="50%" />
<img src="https://openbb-assets.s3.amazonaws.com/docs/copilot/dashboard_title_renamed.jpg" alt="openbb copilot dashboard title generation" width="50%" height="50%" />
