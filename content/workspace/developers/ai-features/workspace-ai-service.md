---
title: Workspace AI service
sidebar_position: 11
description: Implement the AI service endpoints used by Workspace Lite and Enterprise UI features.
keywords:
- Workspace AI service
- AI_API_URL
- Agent Rita
- dashboard titles
- prompt enhancement
- widget metadata
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="Workspace AI Service | OpenBB Workspace Docs" />

Workspace Lite and Enterprise deployments can use an AI service for UI generation tasks. These are separate from the custom agent integrations described [here](/workspace/developers/agents-integration).

Set the AI service base URL in the deployment configuration. E.G. OpenBB Workspace [Lite uses `AI_API_URL`](/workspace/getting-started/lite/configuration#ai-features). Requests originate in the user's browser, so the URL must be reachable from the browser. For shared deployments, use HTTPS and allow cross-origin requests from the Workspace origin.

[Agent Rita](/agents/agent-rita) is a reference implementation. Adding Agent Rita as a custom chat agent does not configure these UI features; the operator must also set the deployment's AI service URL.

## Endpoints

| Endpoint | Request | Response | Workspace usage |
| --- | --- | --- | --- |
| `POST /v1/generate/chat/title` | JSON containing `messages` | JSON string | Generate a chat title |
| `POST /v1/generate/dashboard/title` | JSON containing `widgets` | Plain text | Generate a dashboard name |
| `POST /v1/enhance_prompt` | JSON containing `messages` and optional Workspace context | Plain text | Rewrite a prompt without changing its intent |
| `POST /v1/generate/widget_info` | JSON containing `widget_generation_request` | JSON with `title`, `description`, `category`, and `subcategory` | Generate widget metadata |
| `POST /v1/generate/widget_info/file` | Multipart form data containing `file` | JSON with `title` and `description` | Generate uploaded-file metadata |
| `POST /v1/generate/code` | JSON containing the widget ID, prompt, language, and optional code or data context | JSON containing `generated_code` or an error | Generate or modify table code |

## Authentication

Workspace includes the signed-in user's bearer token in these requests. Validate the token in the AI service or place the service behind an authenticated gateway. Do not log authorization headers or forwarded API keys.

## Reference behavior

| Endpoint | Processing and fallback behavior |
| --- | --- |
| Chat title | Uses the last five human messages, truncated to 500 characters each. Returns `"New Chat"` when no human message is available or generation fails. |
| Dashboard title | Uses up to 20 widget names. Returns `My Dashboard` when no names are available or generation fails. |
| Prompt enhancement | Uses the latest human message and up to 30 widget names. Returns the original prompt when generation fails. |
| Widget metadata | Uses up to 3,000 characters of widget data. Falls back to metadata supplied in the request. |
| Uploaded-file metadata | Accepts files up to 25 MB and reads up to 3,000 characters. Falls back to the filename. |
| Code generation | Supports SQL and Python, with optional current code, SQL schema, and up to five sample rows. Returns a failure object when generation fails. |

Requests that fail endpoint schema validation return `400`. The uploaded-file endpoint returns `400` when the file is missing and `413` when it exceeds 25 MB. Model-provider failures return the endpoint-specific fallback response with status `200`.

Workspace can request `text` code generation and provide `semantic_models`. Agent Rita's current code-generation route supports only `sql` and `python`, so it does not implement that variant.

See the [Agent Rita source code](https://github.com/OpenBB-finance/agent-rita/tree/main/src/routes/generate) for the reference route implementations.
