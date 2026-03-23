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

Skills are reusable instruction sets that extend what the OpenBB Copilot can do. You can create custom skills tailored to your workflow and invoke them directly from the chat interface.

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
    width="60%"
  />
</div>


For example, a skill called `/openbb-html-report` generates a full HTML report using data from your dashboard. You define the detailed instructions inside the skill, such as report types, suggested structures, writing style, formatting rules, and any other guidelines the copilot should follow.

## Creating a skill

To create a new skill, open the Skills panel from the copilot interface. Give your skill a name, a description, and the instructions the copilot should follow when the skill is invoked.

<div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
  <img
    className="pro-border-gradient"
    alt="Creating a skill"
    src="https://openbb-cms.directus.app/assets/19f304d2-b76c-4aa8-98ae-f2a0067af6f9.png"
    width="60%"
  />
</div>


## Using a skill

The copilot always tries to identify a relevant skill before proceeding with a task, so simply mentioning the skill's name in your prompt will very likely trigger it.


<div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
  <img
    className="pro-border-gradient"
    alt="Invoking a skill"
    src="https://openbb-cms.directus.app/assets/19f1be6c-b320-411f-b82e-3b734d33124e.png"
    width="60%"
  />
</div>


To force a specific skill and see its tag in the chat, type `/skill-name` to invoke it directly.

<div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
  <img
    className="pro-border-gradient"
    alt="Invoking a skill"
    src="https://openbb-cms.directus.app/assets/37324700-c870-49eb-83b6-e845e93fee90.png"
    width="60%"
  />
</div>


