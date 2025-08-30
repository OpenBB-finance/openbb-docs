---
title: Workspace Overview
sidebar_position: 0
description: OpenBB Workspace is a secure enterprise UI platform for AI workflows, featuring data integration, AI model deployment, flexible UI customization, and on-premises deployment capabilities.
keywords:
- enterprise AI platform
- data integration
- AI model deployment
- flexible UI
- on-premises deployment
- secure platform
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

# OpenBB Workspace

OpenBB Workspace is a powerful, secure platform designed specifically for enterprise AI workflows. It combines flexible data integration, customizable UI components, and robust AI capabilities in a single, cohesive solution.

Join thousands of professionals already using OpenBB Workspace on free tier at [pro.openbb.co](https://pro.openbb.co).

<img src="https://openbb-cms.directus.app/assets/8aa1a314-0e2c-41f0-a3cf-ef621e5f2a13.png" alt="OpenBB Workspace Platform Interface" width="100%" />

Product demo [here](https://www.youtube.com/watch?v=Gll8bRSoyGM).

## Core capabilities

#### Production-Ready UI Framework

Transform your workflows with a fully customizable UI that adapts to your team's specific needs. OpenBB Workspace gives you complete control over every aspect of the interface, allowing you to tailor it precisely to your workflow requirements. Teams can collaborate seamlessly through shared dashboards and applications, while the flexible framework enables you to build comprehensive solutions ranging from simple data visualizations to complex AI-powered workflows.

#### Unified Data Integration

OpenBB Workspace brings all your data sources together in one secure, scalable platform. Whether you're working with proprietary internal data, licensed third-party feeds, or public datasets, our workspace provides comprehensive data access through a single interface. The system handles both structured and unstructured data with equal ease, and our open architecture ensures you're never locked into a single vendor's ecosystem – maintaining the flexibility to adapt as your needs evolve.

#### AI Model Integration

Deploy and manage AI models in a secure, controlled environment that puts you in charge. OpenBB Workspace offers the flexibility to integrate any AI model that supports your workflows, whether it's a proprietary model, open-source solution, or third-party service. Models run in a protected environment with carefully controlled data access, ensuring security while seamlessly connecting AI capabilities with your existing processes. This integration happens naturally within your workflows, enhancing rather than disrupting your established practices.

#### Enterprise-Grade Deployment

OpenBB Workspace provides the deployment flexibility modern enterprises demand. Deploy the platform securely on-premises or in your private cloud, maintaining complete control over your infrastructure and data. Your sensitive information never leaves your environment, staying protected within your existing security perimeter. The platform includes comprehensive role-based access control, allowing you to implement fine-grained security policies that align with your organization's requirements and compliance standards.

## Key concepts

### Widgets

Widgets are the fundamental data units in OpenBB Workspace. Each widget represents a self-contained data component with:

- **Data Source**: Integration with internal or external data sources
- **Metadata**: Title, description, category, sub-category and source information
- **Visual Layer**: Presentation through PDF, table, chart, or feed formats
- **Parameters**: Configurable input parameters for data display and interaction

<img width="800" alt="Widget Metadata Structure and Components" src="https://openbb-cms.directus.app/assets/132e5cda-b062-4094-8036-8c2d41db1527.png" />

### Dashboards

Dashboards are your personal workspace in OpenBB, designed to adapt to your unique analytical style and requirements. Each dashboard is a blank canvas where you can create the perfect analytical environment by combining elements from your entire widget library, organizing them in ways that make sense for your specific workflows.

The power of dashboards lies in their flexibility. You can pull widgets from your complete library and group them intelligently by linking their parameters - when you update a date range or ticker symbol in one widget, related widgets can update automatically, creating a cohesive analytical experience. This parameter grouping ensures your analysis remains synchronized across multiple data views.

<img width="800" alt="OpenBB Workspace Dashboard Interface" src="https://openbb-cms.directus.app/assets/fbf80af0-8bc3-4ac6-b349-f8e1ec388cee.png" />

Beyond dynamic data widgets, dashboards support a rich variety of content types. You can enhance your analysis by adding static files like PDFs and images for reference materials, incorporating AI-generated artifacts directly from your chat interactions for intelligent insights, or writing markdown notes to document your thought process and findings. This combination of dynamic data, static resources, and personal annotations creates a comprehensive analytical workspace that captures both the quantitative and qualitative aspects of your research.

Once you've crafted your perfect dashboard, sharing it with your organization is seamless. Team members can access your shared dashboards to benefit from your analytical setup, fostering collaboration and knowledge sharing across your entire organization. This transforms individual insights into collective intelligence, making your dashboards not just personal tools, but organizational assets.

### AI Agents

AI Agents transform OpenBB Workspace into an intelligent analytical platform that understands your data and automates complex workflows. These agents leverage the rich metadata from your widgets to intelligently query the right datasets with appropriate parameters, creating a seamless interaction between AI capabilities and your financial data.

What makes AI Agents particularly powerful is their contextual awareness. They can access your entire dashboard ecosystem, understanding relationships between different data sources and maintaining context across multiple queries. This enables sophisticated multi-step analysis where agents can gather data from various widgets, perform calculations, generate insights, and even create new visualizations based on their findings.

<img width="800" alt="OpenBB Workspace AI Agents Interface" src="https://openbb-cms.directus.app/assets/ac287dfe-e279-42bb-8f84-a616ff9df8a8.png" />

AI Agents excel at both reactive and proactive analysis. They can respond to your specific queries about market conditions, company performance, or economic indicators while also monitoring your dashboards for anomalies, trends, or opportunities that warrant attention. You can configure agents with custom instructions and prompts, creating specialized assistants for different analytical tasks – from earnings analysis to risk assessment to market surveillance.

The integration between AI Agents and your widget library creates a multiplier effect. Agents can dynamically combine data from multiple sources, apply advanced analytical techniques, and present results in formats that best suit your needs. They can also learn from your interactions, becoming more effective at anticipating your analytical requirements over time.

<img width="800" alt="OpenBB Workspace AI Agent Widget Integration" src="https://openbb-cms.directus.app/assets/2b463b3b-e1cf-4079-8c11-b49cdcda60ac" />

Finally AI agents can produce artifacts (text, tables, charts) that are added back to the dashboard. Closing the feedback loop.

### Apps

Apps are pre-built dashboard templates designed for specific workflows. Each app includes a curated set of widgets with parameters already linked, a connected AI agent for the task at hand, and custom prompts relevant to that use case. When you change a ticker or date range, all connected widgets update together.

<img width="800" alt="OpenBB Workspace Multiple Applications View" src="https://openbb-cms.directus.app/assets/2fc9097e-0941-49df-8d83-7d6b5a87bb45.png" />

Examples include portfolio management apps with position tracking and risk metrics, market surveillance apps with real-time monitors and anomaly detection, and research apps with fundamental analysis and news sentiment tools. The workspace supports unlimited apps that can be shared across teams and customized to fit your exact needs.

Explore our complete app gallery and use cases at [openbb.co/solutions](https://openbb.co/solutions).

<img width="800" alt="OpenBB Workspace Applications Overview" src="https://openbb-cms.directus.app/assets/5778561c-5c09-4d70-bde8-952acbccaa01.png" />

#### Prompts: Context-Aware Suggestions

Prompts are intelligent suggestions specific to each app that understand exactly which widgets are available in your workspace. The AI agent knows your widget library and can automatically tag relevant widgets when responding to prompts, ensuring the right data sources are used for each query. For example, in a portfolio app, prompts might suggest "Show me today's top performers" and automatically reference the position tracking and performance widgets. This context awareness means prompts always work with the actual data available in your app, eliminating guesswork and ensuring accurate, relevant responses.
