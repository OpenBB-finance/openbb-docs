---
title: Orchestrator Mode
sidebar_position: 12
description: Understanding OpenBB Copilot's Orchestrator Mode for multi-agent workflows
keywords:
- Orchestrator Mode
- Multi-agent
- Workflow coordination
- Task delegation
- Agent routing
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="Orchestrator Mode | OpenBB Workspace Docs" />

# Orchestrator Mode

Orchestrator Mode enables OpenBB Copilot to coordinate with specialized AI agents for complex analytical workflows. When activated, OpenBB Copilot becomes a central coordinator that evaluates user requests, identifies the most appropriate agents for specific tasks, and delegates work to optimize results.

## Activating Orchestrator Mode

After adding AI agents to your workspace, you'll see agent management settings showing available agents:

<div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
  <img src="https://openbb-cms.directus.app/assets/d8223d51-17a4-4b47-914b-ff5656316fd0.png" alt="OpenBB Copilot as single enabled agent" width="40%" />
</div>

Initially, OpenBB Copilot operates as the only enabled agent. To activate Orchestrator Mode, toggle the switch next to OpenBB Copilot. This enables the copilot to delegate tasks to other available agents based on request complexity and agent specialization.

<div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
  <img src="https://openbb-cms.directus.app/assets/c6a46df6-d572-414c-8cb4-c74e70ae0a1a.png" alt="Orchestrator Mode activated" width="40%" />
</div>

## Agent Detection and Routing

The orchestrator systematically evaluates available agents before processing user requests. It scans agent descriptions for domain-specific expertise that matches the user query and checks agent capabilities for specialized functions like data processing, mathematical calculations, or document analysis.

Task categorization determines the optimal assignment approach. Preprocessing tasks include query optimization and prompt enhancement. Domain-specific tasks involve financial analysis, technical documentation, or mathematical computations. Processing tasks handle data transformation and content generation. Post-processing tasks manage output formatting and quality assurance.

Agent selection follows a hierarchy of matching criteria. Primary matches occur when agent descriptions directly mention the task domain. Feature matches identify agents with relevant capabilities for the request. Specialization advantages favor agents offering superior expertise compared to general processing capabilities.

## Direct Agent Interaction vs. Orchestration

Users can interact with agents directly or through orchestration. Direct interaction addresses the specific agent with targeted requests:

<div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
  <img src="https://openbb-cms.directus.app/assets/5ad54690-5aa4-42d6-a0d7-c7a31fe19d58.png" alt="Direct agent interaction example" width="100%" />
</div>

With Orchestrator Mode activated, users can submit general requests to OpenBB Copilot. The orchestrator analyzes the request and determines whether specialized agent assistance would improve results. For example, a minimal or unclear prompt triggers automatic routing to a prompt optimization agent:

<div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
  <img src="https://openbb-cms.directus.app/assets/8a4b0c74-82b4-4e1c-ae2c-d905cf880d39.png" alt="Orchestrator routing to prompt optimizer" width="100%" />
</div>

## Orchestration OFF

When Orchestrator Mode is disabled, OpenBB Copilot cannot utilize any available sub-agents regardless of their specializations:

<div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
  <img src="https://openbb-cms.directus.app/assets/f16d219e-98f2-487e-9969-9164377c87de.png" alt="Orchestrator Mode disabled limiting agent access" width="100%" />
</div>


## Task Delegation Process

The orchestrator follows structured delegation protocols. Single agent assignments handle complete tasks where one agent possesses all required expertise. The orchestrator sets direct response parameters, meaning the assigned agent's output appears directly to users without additional processing.

Multi-agent workflows coordinate complex requests requiring multiple specializations. The orchestrator breaks requests into discrete components, determines optimal execution sequences, and manages dependencies between tasks. Some tasks must complete before others begin, while parallel execution improves response speed for independent operations.

When delegating tasks, the orchestrator provides agents with specific context including relevant data, constraints, formatting requirements, and success criteria. This ensures agents have sufficient information to complete their assigned portions effectively.

## Response Coordination

Single agent responses appear directly when the orchestrator delegates complete responsibility to one specialized agent. This reduces latency for straightforward requests while maintaining orchestration capabilities for complex workflows.

Multi-agent responses require coordination and synthesis. The orchestrator ensures consistent formatting across agent contributions, eliminates redundancy, and maintains logical narrative flow. Error recovery mechanisms attempt alternative strategies when agents cannot complete assigned tasks.

## Memory and Context Management

The orchestrator maintains awareness of previous interactions and conversation history. It remembers recent widget additions, data retrievals, and analytical approaches to inform current delegation decisions. This contextual awareness prevents duplicate work and enables references to "this data" or "the previous analysis."

When users reference earlier work, the orchestrator identifies the specific context and ensures relevant agents have access to that information. The system builds upon previous analyses rather than starting fresh for each request.

## Best Practices

Provide clear context about analytical objectives when submitting requests that might benefit from specialized expertise. Specify data sources, time frames, and analytical approaches when you have preferences about task completion methods.

Reference specific data, widgets, or previous analyses when building upon earlier work. The orchestrator uses these references to maintain context continuity and optimize agent selection for follow-up tasks.

Break down extremely complex queries into logical components when the orchestrator's automatic decomposition might not match your intended approach. While orchestration handles multi-step workflows effectively, clearer initial requests lead to more efficient delegation.
