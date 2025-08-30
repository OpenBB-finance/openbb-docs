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

# OpenBB Workspace: Your Enterprise AI Platform

OpenBB Workspace is a powerful, secure platform designed specifically for enterprise AI workflows. It combines flexible data integration, customizable UI components, and robust AI capabilities in a single, cohesive solution.

<img src="https://openbb-cms.directus.app/assets/8aa1a314-0e2c-41f0-a3cf-ef621e5f2a13.png" alt="OpenBB Workspace Platform Interface" width="100%" />

## Core Capabilities

### Production-Ready UI Framework

Transform your workflows with a fully customizable UI that adapts to your team's specific needs:

- **Complete Control**: Customize every aspect of the interface to match your workflow requirements
- **Team Collaboration**: Enable seamless teamwork through shared dashboards and applications
- **Application Development**: Build comprehensive solutions from data visualization to complex AI workflows

### Unified Data Integration

Bring all your data sources together in one secure, scalable platform:

- **Comprehensive Data Access**: Integrate proprietary, licensed, and public data sources
- **Flexible Data Types**: Support for both structured and unstructured data
- **Future-Proof**: Avoid vendor lock-in with our open architecture

### AI Model Integration

Deploy and manage AI models in a secure, controlled environment:

- **Model Flexibility**: Integrate any AI model that supports your workflows
- **Secure Deployment**: Run AI models in a protected environment with controlled data access
- **Workflow Integration**: Seamlessly connect AI capabilities with your existing processes

### Enterprise-Grade Deployment

Deploy with confidence using our on-premises or private cloud options:

- **Complete Control**: Deploy securely on-premises or in your private cloud
- **Data Security**: Keep sensitive data within your infrastructure
- **Access Management**: Implement role-based access control for enhanced security

## Key Concepts

### Widgets: Your Data Building Blocks

Widgets are the fundamental data units in OpenBB Workspace. Each widget represents a self-contained data component with:

- **Data Source**: Integration with internal or external data sources
- **Metadata**: Title, description, category, sub-category and source information
- **Visual Layer**: Presentation through PDF, table, chart, or feed formats
- **Parameters**: Configurable options for data display and interaction

<img width="800" alt="Widget Metadata Structure and Components" src="https://openbb-cms.directus.app/assets/132e5cda-b062-4094-8036-8c2d41db1527.png" />

### Dashboards: Your Financial Analysis Workspace

Dashboards serve as your primary workspace for organizing and analyzing financial data through customizable widgets. Each dashboard acts as a dedicated canvas where you can arrange and combine different data visualizations to create comprehensive financial analysis views.

<img width="800" alt="OpenBB Workspace Dashboard Interface" src="https://openbb-cms.directus.app/assets/fbf80af0-8bc3-4ac6-b349-f8e1ec388cee.png" />

#### Managing Your Dashboards

Access dashboard management options by clicking the ellipsis in the left sidebar next to the dashboard of interest. This opens a menu with the following capabilities:

- **Rename** - Customize your dashboard's name for better organization
- **Move to** - Organize dashboards by moving them into folders
- **Duplicate** - Create a copy of your dashboard with all its widgets and settings
- **Open in new window** - Expand your workspace across multiple screens
- **Share** - Collaborate by sharing dashboards with team members in your organization
- **Delete** - Remove unused dashboards
- **Export report** - Generate static reports in PDF or PNG format
- **Refresh data** - Update all widget data to the latest available

Note: Some dashboards may be hidden by a folder. By clicking in the folder, you will be able to expand the dashboards contained within.

#### Collaboration Features

Share dashboards with team members by right-clicking and selecting "Share". Search for team members within your organization, and recipients without OpenBB Pro access will receive an email invitation. Shared dashboards appear in the recipient's sidebar with read-only access. Recipients can duplicate the dashboard to create their own editable version while maintaining the original.

#### Creating Static Reports

Export your interactive dashboards as static reports in PDF or PNG format. Include notes and insights from the note widget to capture the exact state of your analysis. This feature enables you to create periodic analysis reports, document investment decisions, share insights with stakeholders, and maintain historical records of your analysis.

### AI Agents: Intelligent Automation

Create AI agents to automate tasks and enhance your dashboards with this intelligence layer.

<img width="800" alt="OpenBB Workspace AI Agents Interface" src="https://openbb-cms.directus.app/assets/ac287dfe-e279-42bb-8f84-a616ff9df8a8.png" />

The reason why AI agents work on OpenBB workspace is due to the metadata from each widget which allows AI to understand which widget has access to the right dataset and query it accordingly (along with the right parameters!).

<img width="800" alt="OpenBB Workspace AI Agent Widget Integration" src="https://openbb-cms.directus.app/assets/2b463b3b-e1cf-4079-8c11-b49cdcda60ac" />

### Apps: End-to-End Workflows

Combine dashboards and AI agents to create powerful applications:

- **Integrated Workflows**: AI agents can access and process all dashboard data
- **Data Integration**: Connect your existing systems and services
- **Scalable Architecture**: Create and manage multiple applications within the platform

<img width="800" alt="OpenBB Workspace Applications Overview" src="https://openbb-cms.directus.app/assets/5778561c-5c09-4d70-bde8-952acbccaa01.png" />

You can have a large amount of different applications on OpenBB.

<img width="800" alt="OpenBB Workspace Multiple Applications View" src="https://openbb-cms.directus.app/assets/2fc9097e-0941-49df-8d83-7d6b5a87bb45.png" />

#### Prompts: Reusable AI Interactions

Enhance your applications with reusable prompts:

- **Workflow Efficiency**: Save and reuse common AI interactions
- **Consistent Results**: Maintain standardized AI responses across your team
- **Process Automation**: Streamline repetitive AI tasks

## See It in Action

Watch our comprehensive demo to see OpenBB Workspace in action:

<div style={{position: 'relative', paddingBottom: '56.25%', height: '0', overflow: 'hidden', maxWidth: '100%'}}>
    <iframe 
    style={{position: 'absolute', top: '0', left: '0', width: '100%', height: '100%', display: 'block', margin: '0 auto'}} 
    src="https://www.youtube.com/embed/Gll8bRSoyGM?si=X7xpy9yPBaBeEjbg" 
    title="YouTube video player" 
    frameBorder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
    referrerPolicy="strict-origin-when-cross-origin" 
    allowFullScreen></iframe>
</div>

Join thousands of professionals already using OpenBB Workspace.

Start with our generous free tier at [pro.openbb.co](https://pro.openbb.co).
