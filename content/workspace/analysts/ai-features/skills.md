---
title: Skills
sidebar_position: 14
description: Create and invoke custom AI skills from the OpenBB Copilot chat interface
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

Skills are reusable instruction sets that tell the Copilot how to perform a specific task. Instead of typing the same detailed prompt every time, you can create a skill once and invoke it directly from the chat with a simple command.

<div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
  <img
    className="pro-border-gradient"
    alt="Skills overview"
    src="https://openbb-cms.directus.app/assets/194dadb5-cc5d-4088-95d1-1d9505cd0dbf.png"
    width="100%"
  />
</div>


For example, the `/openbb-html-report` skill, included by default, generates a full HTML report using data from your dashboard. Inside the skill, you can define report types, suggested structures, writing style, formatting rules, and any other guidelines for the Copilot to follow.

<div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
  <img
    className="pro-border-gradient"
    alt="Skills overview"
    src="https://openbb-cms.directus.app/assets/46599abd-5192-4ea5-9866-140da19735b0.png"
    width="60%"
  />
</div>

## Creating a skill

To create a new skill, open the Skills tab under AI Library and select the "Add Skill" button in the top right corner. Give your skill a name, a description, and the instructions the Copilot should follow when invoked.

<div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
  <img
    className="pro-border-gradient"
    alt="Creating a skill"
    src="https://openbb-cms.directus.app/assets/19f304d2-b76c-4aa8-98ae-f2a0067af6f9.png"
    width="60%"
  />
</div>


## Using a skill

The Copilot automatically tries to identify a relevant skill before proceeding with a task. Simply mentioning the skill name in your prompt will very likely trigger it.


<div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
  <img
    className="pro-border-gradient"
    alt="Invoking a skill"
    src="https://openbb-cms.directus.app/assets/19f1be6c-b320-411f-b82e-3b734d33124e.png"
    width="100%"
  />
</div>

If you want to force a specific skill, you can type `/skill:skill-name` to tag it directly. This ensures the Copilot invokes that exact skill.

<div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
  <img
    className="pro-border-gradient"
    alt="Invoking a skill"
    src="https://openbb-cms.directus.app/assets/c1b4aea8-2e9d-42fa-9b5a-904b52bbd8d3.png"
    width="100%"
  />
</div>


## Viewing all available Skills
You can type `/` in the chat to see the full list of available Skills and MCP tools. You can also hover over it to see the skill description.

<div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
  <img
    className="pro-border-gradient"
    alt="Invoking a skill"
    src="https://openbb-cms.directus.app/assets/61e6f5e4-9fe8-4ae6-bcb0-6f3e57dca6e9.png"
    width="100%"
  />
</div>

