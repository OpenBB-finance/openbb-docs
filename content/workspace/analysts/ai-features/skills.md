---
title: Skills
sidebar_position: 14
description: Create, manage, and invoke custom AI skills directly from the OpenBB Copilot chat interface
keywords:
- skills
- custom skills
- AI skills
- skill commands
- reusable prompts
- copilot skills
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="Skills | OpenBB Workspace Docs" />

Skills are reusable instruction sets that extend what the OpenBB copilot can do. You can create custom skills tailored to your workflow and invoke them directly from the chat interface using the `/skill-name` syntax.

<div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
  <img
    className="pro-border-gradient"
    alt="Skills overview"
    src="https://openbb-cms.directus.app/assets/fdfe9a60-687a-487c-bbb5-d20c16676010.png"
    width="100%"
  />
</div>

## What is a skill

A skill is a saved set of instructions that tells the copilot how to perform a specific task. Instead of typing the same detailed prompt every time, you can create a skill once and reuse it with a simple command.

<div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
  <img
    className="pro-border-gradient"
    alt="Skills overview"
    src="https://openbb-cms.directus.app/assets/46599abd-5192-4ea5-9866-140da19735b0.png"
    width="100%"
  />
</div>


For example, a skill called `/openbb-html-report` could generate a full HTML report using OpenBB's data on the dashboard. Inside the skill, you define detailed instructions tailored to your requirements — such as report types and suggested structures, writing style, formatting rules, and any other guidelines the copilot should follow when producing the output.

## Creating a skill

To create a new skill, open the Skills panel from the copilot interface. Give your skill a name, a description, and the context the copilot should follow when the skill is invoked.

<div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
  <img
    className="pro-border-gradient"
    alt="Creating a skill"
    src="https://openbb-cms.directus.app/assets/19f304d2-b76c-4aa8-98ae-f2a0067af6f9.png"
    width="100%"
  />
</div>


## Invoking a skill

Once created, invoke any skill by typing `/` followed by its name in the chat. The copilot will execute the instructions defined in the skill and return the results directly in your conversation.

<div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
  <img
    className="pro-border-gradient"
    alt="Invoking a skill"
    src="https://openbb-cms.directus.app/assets/37324700-c870-49eb-83b6-e845e93fee90.png"
    width="100%"
  />
</div>


## Creating a widget from a skill output

When a skill generates an output, such as an HTML file, you can turn it into a widget directly from the chat. Click the "Create widget" button on the output, and the HTML file will be added to your dashboard.

<div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
  <img
    className="pro-border-gradient"
    alt="Creating a widget from skill output"
    src="https://openbb-cms.directus.app/assets/82215dea-b8be-4bc0-b831-4820cc9483e2.png"
    width="100%"
  />
</div>

<div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
  <img
    className="pro-border-gradient"
    alt="Creating a widget from skill output"
    src="https://openbb-cms.directus.app/assets/531d6bda-59e0-462b-bc7a-6682947f57ef.png"
    width="100%"
  />
</div>

<div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
  <img
    className="pro-border-gradient"
    alt="Creating a widget from skill output"
    src="https://openbb-cms.directus.app/assets/c69390c8-2f69-4e4b-8183-2ae3ff34994c.png"
    width="100%"
  />
</div>

