---
title: Workspace Overview
sidebar_position: 0
description: OpenBB Workspace is a secure enterprise UI application for AI workflows, featuring data integration, AI model deployment, flexible UI customization, and on-premises deployment capabilities.
keywords:
  - enterprise AI application
  - data integration
  - AI model deployment
  - flexible UI
  - on-premises deployment
  - secure application
  - team collaboration
  - OpenBB Apps
  - proprietary data
  - licensed data
  - AI workflows
  - enterprise security
  - private cloud
  - data privacy
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="OpenBB Workspace Docs" />

OpenBB Workspace is a secure application for enterprise AI workflows. It combines flexible data integration, customizable UI components, and AI capabilities in a single solution.

Explore OpenBB Workspace at [pro.openbb.co](https://pro.openbb.co).

<img src="https://openbb-cms.directus.app/assets/098ebeac-413e-4225-badf-1282c268e071.png" alt="OpenBB Workspace Application Interface" width="100%" />

<details>
<summary mdxType="summary">Watch Product Demo</summary>

<iframe width="100%" height="415" src="https://www.youtube.com/embed/uYyhswnZkSw" title="OpenBB Workspace Product Demo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</details>

## Core capabilities

### Production-Ready UI Framework

Transform your workflows with a fully customizable UI that adapts to your team's specific needs. OpenBB Workspace gives you complete control over every aspect of the interface, allowing you to tailor it precisely to your workflow requirements. Teams can collaborate through shared dashboards and applications, while the flexible framework enables you to build comprehensive solutions ranging from simple data visualizations to complex AI-powered workflows.

### Unified Data Integration

OpenBB Workspace brings all your data sources together in one secure, scalable system. Whether you're working with proprietary internal data, licensed third-party feeds, or public datasets, the Workspace provides data access through a single interface. The system handles both structured and unstructured data with equal ease, and its open architecture supports flexibility as your needs evolve.

### AI Agent Integration

Deploy and manage AI agents in a secure, controlled environment that puts you in charge. OpenBB Workspace offers the flexibility to integrate any AI agent that supports your workflows, whether it's powered by a proprietary model, open-source solution, or third-party service. Agents run in a protected environment with carefully controlled data access, ensuring security and compliance when connecting AI capabilities to your existing processes. This integration happens naturally within your workflows, enhancing rather than disrupting your established practices.

### Enterprise-Grade Deployment

OpenBB Workspace provides the deployment flexibility modern enterprises demand. Deploy the Workspace on-premises or in your private cloud, maintaining complete control over your infrastructure and data. Your sensitive information never leaves your environment, staying protected within your existing security perimeter. The system includes detailed role-based access controls, allowing you to implement fine-grained security policies that align with your organization's requirements and compliance standards.

## Key concepts

### Widgets

Widgets are the fundamental data units in OpenBB Workspace. Each widget represents a self-contained data component with:

- **Data Source**: Integration with internal or external data sources
- **Metadata**: Title, description, category, sub-category and source information
- **Visual Layer**: Presentation through tables, charts, PDFs or images and other feed formats
- **Parameters**: Configurable input parameters for data display and interaction

<img width="800" alt="Widget Metadata Structure and Components" src="https://openbb-cms.directus.app/assets/cffb6e08-31a2-4a4d-85cf-3cf0ae1d09eb.png" />

### Dashboards

Dashboards are your personal spaces in OpenBB Workspace, designed to adapt to your unique analytical style and requirements. Each dashboard starts as a blank canvas where you can create your perfect analytical environment by combining elements from your entire widget library, organizing and customizing them in ways that make sense for your specific workflows.

The power of dashboards lies in their flexibility. You can add widgets and group them by linking their parameters - when you update a date range or a ticker symbol in one widget, related widgets will update automatically. This parameter grouping ensures your analysis remains synchronized across multiple data views.

<img width="800" alt="OpenBB Workspace Dashboard Interface" src="https://openbb-cms.directus.app/assets/9ef2b326-da32-49d0-b122-110bbc556ee7.png" />

Beyond dynamic data widgets, dashboards support a rich variety of content types. You can enhance your analysis by adding static files like PDFs, images, text documents, and spreadsheets, incorporating AI-generated artifacts directly from your chats, or writing notes to document your thought process and findings. This combination of dynamic data, static resources, and personal annotations creates a wide-ranging analytical workspace that captures both the quantitative and qualitative aspects of your research.

Once you've crafted your perfect dashboard, sharing it with your organization is effortless. Team members can access your shared dashboards to benefit from your analytical setup. This transforms individual insights into collective intelligence, elevating your dashboards to become organizational assets and fostering collaboration and knowledge sharing.

### AI Agents

AI Agents make OpenBB Workspace an intelligent system that understands your data and automates complex workflows. These agents leverage the metadata from your widgets to query the right datasets with appropriate parameters.

What makes AI Agents particularly powerful is their contextual awareness. They can access your entire dashboard ecosystem, understand relationships between different data sources and maintain context across multiple queries. This enables sophisticated multi-step analysis where agents can gather data from various widgets, perform calculations, generate insights, and even create new visualizations based on their findings.

<img width="800" alt="OpenBB Workspace AI Agents Interface" src="https://openbb-cms.directus.app/assets/cbc29ba3-e55b-4ea4-89be-55db92bd017a.png" />

AI Agents excel at both reactive and proactive analysis. They can respond to your specific queries about market conditions, company performance, or economic indicators while also monitoring your dashboards for anomalies, trends, or opportunities that require attention. You can configure agents with custom instructions and prompts, creating specialized assistants for different analytical tasks – from earnings analysis to risk assessment to market surveillance.

The integration between AI Agents and your widget library creates a multiplier effect. Agents can dynamically combine data from multiple sources to apply advanced analytical techniques, and present results in formats that best suit your needs.

<img width="800" alt="OpenBB Workspace AI Agent Widget Integration" src="https://openbb-cms.directus.app/assets/4b79d88c-05c1-4dcb-b8de-31ca934e4066.png" />

Finally, AI agents can produce artifacts (text, tables, charts) that are added back to the dashboard, closing the feedback loop.

### Apps

Apps are pre-built dashboard templates designed for specific workflows. Each app includes a curated set of widgets with parameters already linked, a pre-selection of an AI agent for the task at hand, and custom prompts relevant to that use case. When you change a ticker or date range, all connected widgets update together.

<img width="800" alt="OpenBB Workspace Multiple Applications View" src="https://openbb-cms.directus.app/assets/0410ebc4-13cb-4ec2-aa8a-9ee370d1b56a.png" />

Examples include portfolio management apps with position tracking and risk metrics, market surveillance apps with data monitoring and anomaly detection, and research apps with fundamental analysis and news sentiment tools. The workspace supports unlimited apps that can be shared across teams and customized to fit your exact needs.

Explore our app gallery and use cases at [openbb.co/solutions](https://openbb.co/solutions).

<img width="800" alt="OpenBB Workspace Applications Overview" src="https://openbb-cms.directus.app/assets/2dabe15f-a422-441e-b888-04eda6db3e1b.png" />

#### Prompts: Context-Aware Suggestions

Prompts are query suggestions specific to each app. The AI agent knows your widget library and can automatically tag relevant widgets when responding to prompts. For example, in a portfolio app, prompts might suggest "Show me today's top performers" and automatically reference the position tracking and performance widgets. This context awareness means prompts always work with the actual data available in your app, eliminating guesswork and ensuring accurate, relevant responses.
