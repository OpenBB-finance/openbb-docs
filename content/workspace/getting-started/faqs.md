---
title: FAQs
sidebar_position: 8
description: Common questions and answers about OpenBB Workspace, data integration, custom backends, and troubleshooting.
keywords:
  - FAQs
  - Data Integration
  - Custom Backend
  - Widget Configuration
  - API Integration
  - OpenBB Workspace
  - Backend Setup
  - Widget Templates
  - Troubleshooting
  - Data Sources
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="FAQs | OpenBB Workspace Docs" />

# Frequently Asked Questions

Find answers to common questions about OpenBB Workspace, organized by topic.

---

## General Questions

### What is the purpose of a custom backend in OpenBB Workspace?

A custom backend allows you to integrate your own data sources into OpenBB Workspace, enabling the creation of personalized widgets, dashboards, and templates that display your data in various ways. This gives you complete control over your data pipeline while leveraging OpenBB's visualization and AI capabilities.

For more details, see the [Data Integration Overview](/workspace/developers/backend-integration).

### What technologies are required to set up a custom backend?

You'll need:
- An API framework (FastAPI, Flask, Express, etc.)
- A `widgets.json` file to define widget configurations
- Optionally, an `apps.json` file for layout configurations

Refer to the [Creating your own custom backend](/workspace/developers/backend-integration) section for detailed setup instructions.

---

## Setup and Configuration

### How do I start setting up a custom backend?

Start with our Hello World example that demonstrates the basic structure:

1. Create your API server
2. Define your widgets.json configuration
3. Connect to OpenBB Workspace

Follow the complete guide in the [Getting Started](/workspace/developers/backend-integration) section.

### What is the widgets.json file, and why is it important?

The `widgets.json` file is the bridge between your backend and OpenBB Workspace. It defines:
- Widget metadata (name, description, category)
- Data endpoints
- Display configurations
- Parameter definitions

This file tells OpenBB how to display and interact with your data. See the [Widgets Configuration Reference](/workspace/developers/widgets-json) for complete documentation.

### How do I add authorization to my custom backend?

OpenBB Workspace supports passing custom headers or query parameters to your backend on every request. You can use these for authentication:

1. Configure the authentication method when adding your backend
2. Choose between Header or Query Parameter authentication
3. Verify the token/key in your backend to allow or deny access

<div style={{display: 'flex', justifyContent: 'center', marginTop: '1rem', marginBottom: '1rem'}}>
  <img className="pro-border-gradient" width="600" alt="Authorization configuration" src="https://openbb-assets.s3.us-east-1.amazonaws.com/docs/pro/authorization.png" />
</div>

---

## Widgets and Apps

### How can I create a new widget?

Creating a widget involves two steps:

**1. Define the widget in `widgets.json`:**
- Set metadata (name, description, category)
- Specify the data endpoint
- Configure display options

**2. Create the data endpoint in your backend:**
- Return data in the expected format
- Handle any parameters

See the [Widget Creation Guide](/workspace/developers/widgets-json) for complete examples.

### Can I customize the appearance of widgets?

Yes! Widget appearance is highly customizable through the `widgets.json` file:

- **Size**: Use `gridData` to set widget dimensions
- **Tables**: Configure columns with `columnDefs`
- **Charts**: Set chart type, colors, and axes
- **Layouts**: Define default positions and groupings

Learn more in the [Widget Customization](/workspace/developers/widgets-json) documentation.

### What are apps, and how do I use them?

Apps are pre-configured collections of widgets, AI agents, and prompts designed for specific workflows. They provide:

- Curated widget selections
- Pre-linked parameters
- Custom AI prompts
- Ready-to-use dashboards

Define apps in the `apps.json` file and serve them via your API. See the [Apps Documentation](/workspace/analysts/apps) for details.

### How do I implement dynamic dropdown options in widgets?

Dynamic dropdowns fetch options from your backend in real-time:

1. Set parameter `type: "endpoint"`
2. Specify an `optionsEndpoint` URL
3. Return options array from your backend

This is perfect for data that changes frequently (e.g., available tickers, date ranges). See the [Dynamic Parameters](/workspace/developers/backend-integration) guide.

### Can I group widgets to share parameters?

Yes! Parameter grouping creates synchronized widget sets:

- Use identical parameter names across widgets
- When one updates, all linked widgets refresh
- Perfect for creating cohesive dashboards

Learn more in the [Parameter Grouping](/workspace/developers/backend-integration) documentation.

---

## Troubleshooting

### I can't connect to my backend using Safari/Brave. What should I do?

Safari and Brave require HTTPS for local connections. You'll need to set up SSL certificates for your backend.

**Setting up HTTPS for your API:**

**Step 1:** Create a self-signed certificate and key:

```sh
openssl req -x509 -days 3650 -out localhost.crt -keyout localhost.key \
  -newkey rsa:4096 -nodes -sha256 \
  -subj '/CN=localhost' -extensions EXT -config <( \
  printf "[dn]\nCN=localhost\n[req]\ndistinguished_name = dn\n[EXT]\nsubjectAltName=DNS:localhost\nkeyUsage=digitalSignature\nextendedKeyUsage=serverAuth")
```

**Step 2:** Run your API with SSL:

```sh
openbb-api --ssl_keyfile localhost.key --ssl_certfile localhost.crt
```

**Step 3:** Trust the certificate:
- Visit your API URL in the browser
- Accept the security warning
- Or add `localhost.crt` to your system's trust store

> **Note**: For work devices, contact your system administrator if you need additional permissions.

### My widget data is not refreshing as expected. What could be wrong?

Check these common causes:

1. **Refetch Settings**: Verify `refetchInterval` and `staleTime` in your `widgets.json`
2. **Run Button**: If `runButton: true`, data only refreshes on manual trigger
3. **Cache Settings**: Ensure cache duration matches your needs
4. **Network Issues**: Check browser console for API errors

See the [Data Refresh Configuration](/workspace/developers/backend-integration) guide for optimal settings.

### How do I debug widget connection issues?

Follow this troubleshooting checklist:

1. **Check Backend Status**: Ensure your API is running and accessible
2. **Verify URL**: Confirm the backend URL in OpenBB settings
3. **Test Endpoints**: Use curl or Postman to test your endpoints directly
4. **Review Browser Console**: Look for CORS or network errors
5. **Validate JSON**: Ensure widgets.json has valid syntax

For detailed debugging steps, see the [Troubleshooting Guide](/workspace/developers/backend-integration).