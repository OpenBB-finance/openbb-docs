---
title: External robustness testing
sidebar_position: 9
description: Use an external failure map to diagnose unstable OpenBB AI workflows
keywords:
- robustness
- RAG
- LLM
- agents
- evaluation
- troubleshooting
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="AI Features — External robustness testing | OpenBB Workspace Docs" />

Use an external failure map when an OpenBB AI workflow works once but behaves inconsistently across document retrieval, tool execution, or multi-step reasoning. This page shows how to use the [WFGY ProblemMap](https://github.com/onestardao/WFGY/blob/main/ProblemMap/README.md) as an optional diagnostic reference for OpenBB-based chat and agent workflows.

This is a docs-only integration pattern. OpenBB remains independent from any specific evaluation toolkit.

## Architecture

The goal is not to replace your agent logic. The goal is to give you a repeatable way to classify failures before you change prompts, tools, or retrieval settings.

An OpenBB workflow usually combines several moving parts:

- context added from widgets or PDFs
- MCP tools or other external tools
- agent reasoning over multiple steps
- model output grounded in retrieved data

When one of those layers becomes unstable, use a single failure map to decide what to inspect first.

### Good fits for this pattern

- the same question sometimes produces different answers
- PDF or filing retrieval appears incomplete
- a tool call succeeds but the final answer is still wrong
- a multi-step agent flow loops, skips steps, or loses grounding

### Related OpenBB patterns

- [Parse PDF context](./parse-pdf-context)
- [Citations for documents](./citations-for-documents)
- [MCP tools integration](./mcp-tools)
- [Share step-by-step reasoning](./share-step-by-step-reasoning)

## Symptom map

Use the external map as a triage layer, then inspect the matching OpenBB workflow component.

| Symptom in an OpenBB workflow | Inspect first in your OpenBB setup |
| --- | --- |
| Answer cites the wrong filing or misses a passage | PDF parsing, context assembly, citations, retrieval boundaries |
| The agent calls the wrong tool or uses the right tool with bad arguments | MCP tool metadata, tool descriptions, tool-call prompt framing |
| The model answers confidently without grounding | source injection, citation handling, prompt instructions, response checks |
| The workflow works once, then drifts on follow-up turns | conversation state, tool-result handoff, multi-request flow |
| A multi-step task stalls or loops | reasoning visibility, tool sequencing, explicit stop/continue conditions |

## Example workflow

Assume you built a custom OpenBB agent that:

1. reads a PDF filing with [Parse PDF context](./parse-pdf-context)
2. adds citations with [Citations for documents](./citations-for-documents)
3. calls an external tool through [MCP tools integration](./mcp-tools)
4. shows intermediate steps with [Share step-by-step reasoning](./share-step-by-step-reasoning)

If the final answer is unstable, classify the failure before changing code:

- if the source text is missing, inspect the PDF/context layer first
- if the tool call is wrong, inspect the MCP tool description and arguments first
- if the data is correct but the answer is not, inspect the prompt, reasoning, and response checks first

That keeps debugging focused on the failing layer instead of changing multiple parts of the workflow at once.

## Minimal process

1. Reproduce the failure with the smallest possible prompt.
2. Record what context was available: widgets, PDFs, tools, and prior messages.
3. Classify the failure with an external map such as WFGY.
4. Change only the layer that matches the failure class.
5. Re-run the same prompt and compare the result.

## Scope note

The [WFGY ProblemMap](https://github.com/onestardao/WFGY/blob/main/ProblemMap/README.md) is one external option for this kind of troubleshooting. You can use the same approach with any internal or external checklist, as long as it helps your team separate retrieval issues, tool issues, and reasoning issues before making changes.
