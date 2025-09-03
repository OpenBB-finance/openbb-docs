---
title: Copilot Basics
sidebar_position: 7
description: Learn the basics of OpenBB Copilot interface and functionality
keywords:
- OpenBB Copilot
- copilot basics
- AI assistant
- interface
- prompt library
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="Copilot Basics | OpenBB Workspace Docs" />

The OpenBB Copilot is an AI-powered companion seamlessly integrated into the OpenBB Workspace, designed to enhance and accelerate your financial analysis workflow.

This sophisticated assistant understands natural language queries, retrieves data from multiple sources, performs complex analysis, and generates actionable insights.

Built for financial professionals, the Copilot transforms your workflow by accelerating analysis and providing context-aware insights based on your specific datasets and workspace configuration.

<div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
  <img
    className="pro-border-gradient"
    alt="OpenBB Copilot Interface"
    src="https://openbb-cms.directus.app/assets/0a5e0075-7c50-44cb-8d45-2be1817deab5.png"
    width="100%"
  />
</div>

## Structure

<div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
  <img
    className="pro-border-gradient"
    alt="Copilot interface structure"
    src="https://openbb-cms.directus.app/assets/d7efdb97-fecd-4d58-8094-84fa82bf4bd4.png"
    width="40%"
  />
</div>

The Copilot interface is designed for intuitive interaction with a clean three-section layout:

- **Header:** At the top, you'll find controls to manage your conversation. You can see which chat you're in, start a new one, clear the history, expand to full-screen mode, or hide the agent entirely.

- **Body:** The main chat window where your conversation takes place. It displays the Copilot's answers, its step-by-step reasoning, and any output like charts, tables, or code. The chat automatically scrolls, keeping everything in chronological order. Hover over a message to see its timestamp.

- **Footer:** Here, you can manage the data and widgets the Copilot uses as context for its answers. You can also add your own custom AI agents or open your prompt library.

## Full screen AI-chat

You can resize the AI panel by dragging the border.

In side-panel mode, it provides quick access for simple queries while maintaining your primary workspace view.

<div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
  <img
    className="pro-border-gradient"
    alt="Full screen AI-chat"
    src="https://openbb-cms.directus.app/assets/1f9ba730-2516-4eac-b7c9-ca6e9382ba78.png"
    width="100%"
  />
</div>

When expanded to full-screen mode, you gain maximum real estate for complex conversations, detailed reasoning steps, and large artifacts like comprehensive charts or extensive data tables.

<div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
  <img
    className="pro-border-gradient"
    alt="Full screen AI-chat"
    src="https://openbb-cms.directus.app/assets/7aa420b1-01b8-4785-b2d9-588ddd414842.png"
    width="100%"
  />
</div>

This flexibility allows seamless transitions between quick consultations and deep analytical sessions without losing context or interrupting your workflow.

You can also hide the AI agent entirely if you want to work solely with the dashboard.

<div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
  <img
    className="pro-border-gradient"
    alt="AI agent hidden"
    src="https://openbb-cms.directus.app/assets/9e9a76dc-7e4a-4e04-9211-086ee147c6c1.png"
    width="100%"
  />
</div>

## Prompt library

The integrated prompt library serves as a productivity multiplier by storing and organizing your most valuable queries. You can save complex prompts and even tag widgets, to ensure the right context is utilized for the right prompt.

<div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
  <img
    className="pro-border-gradient"
    alt="Prompt library"
    src="https://openbb-cms.directus.app/assets/f145bb2d-89bf-49f9-8fd7-af24d78e4dff.png"
    width="100%"
  />
</div>

## Model

The OpenBB Copilot is specifically optimized for financial analysis and data interpretation tasks, leveraging the latest models from OpenAI.

For enterprise deployments, OpenBB provides seamless integration with your organization's Azure OpenAI.

This ensures compliance with internal security and data sovereignty policies.

If you would like full control over your agent capabilities, here's [our open source repository](https://github.com/OpenBB-finance/agents-for-openbb) with examples of AI custom agents that you can build and integrate into the OpenBB Workspace.
