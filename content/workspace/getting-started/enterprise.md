---
title: Enterprise
sidebar_position: 1
description: Deploy OpenBB Workspace on-premises or in your private cloud with enterprise-grade security, compliance, and control.
keywords:
- OpenBB Workspace Enterprise
- On-Premises Deployment
- Private Cloud
- Role-Based Access Control
- Enterprise Security
- Data Sovereignty
- Compliance
- RBAC
- Team Collaboration
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="Enterprise | OpenBB Workspace Docs" />

# Enterprise Deployment

OpenBB Workspace Enterprise enables organizations to deploy the entire platform within their own infrastructure, ensuring complete data sovereignty, security, and compliance.

## Why Enterprise?

### Complete Data Sovereignty

Deploy on-premises or in your private cloud (VPC). Your data, AI models, and prompts never leave your secure environment. Maintain full control over sensitive financial information while meeting the strictest regulatory requirements.

### Enterprise-Grade Security

Integrate seamlessly with your existing security infrastructure including SSO (Azure and Google). Implement granular role-based access control (RBAC) with detailed audit logging. MFA enforced for all users with no product analytics and minimal operational logging.

### Unlimited Scalability

No restrictions on users, data sources, or computational resources. Scale horizontally across your infrastructure to meet growing analytical demands while maintaining performance.

### Custom Integration

Connect directly to internal data systems, proprietary databases, and third-party providers through your secure network. Build custom widgets and AI agents tailored to your specific workflows. Includes Excel add-in for seamless data integration.

<img src="https://openbb-cms.directus.app/assets/2ad71c09-ae83-422f-975d-d4cdaefd2c74.png" alt="OpenBB Workspace Enterprise Architecture" width="100%" />

## Deployment Options

### On-Premises
Install OpenBB Workspace directly on your servers for maximum control. Ideal for organizations with strict data residency requirements or air-gapped environments.

### Private Cloud (VPC)
Deploy in your AWS, Azure, or GCP private cloud. Maintain cloud flexibility while keeping data within your security perimeter.

### Hybrid Architecture
Combine on-premises core systems with cloud-based compute resources. Balance security requirements with scalability needs.

## Key Features

### Role-Based Access Control (RBAC)

Create custom roles that match your organizational structure. Control access at multiple levels:

- **Apps**: Manage entire application access
- **Widgets**: Granular widget-level permissions
- **Data Sources**: Control which data each role can access
- **AI Features**: Manage access to AI agents

<div style={{display: 'flex', justifyContent: 'center'}}>
  <img className="pro-border-gradient" width="800" alt="Role Management Interface" src="https://openbb-web-assets.s3.amazonaws.com/docs/onprem-mar-25/create-role-user-list.png" />
</div>

### Team Collaboration

Share dashboards, insights, and analyses securely within your organization. Collaborative features include:
- Private team workspaces
- Controlled dashboard sharing
- Audit trails for all activities
- Export controls for data governance

<div style={{display: 'flex', justifyContent: 'center'}}>
  <img className="pro-border-gradient" width="800" alt="Dashboard Sharing Interface" src="https://openbb-web-assets.s3.amazonaws.com/docs/launch_oct_24/sharing_dashboard.png" />
</div>

### User Management

Comprehensive user lifecycle management with:
- Single sign-on (SSO) integration
- Bulk user provisioning
- Automated de-provisioning
- Detailed access logs and audit trails

<div style={{display: 'flex', justifyContent: 'center'}}>
  <img className="pro-border-gradient" width="600" alt="Team Management Interface" src="https://openbb-web-assets.s3.amazonaws.com/docs/launch_oct_24/team_management.png" />
</div>

### Compliance & Audit

Meet regulatory requirements with:
- Complete activity logging
- Export controls
- Retention policies
- SOC 2 Type II compliance support

<div style={{display: 'flex', justifyContent: 'center'}}>
  <img className="pro-border-gradient" width="600" alt="Activity Log Interface" src="https://openbb-web-assets.s3.amazonaws.com/docs/onprem-mar-25/activity-log.png" />
</div>

### OpenBB Copilot

Transform your analytical workflows with our AI-powered assistant that understands your data context and automates complex tasks. OpenBB Copilot leverages widget metadata to intelligently query the right datasets, generate insights, and create visualizations. Whether you're conducting earnings analysis, monitoring market conditions, or building investment reports, Copilot accelerates your workflow while maintaining accuracy and consistency.

Learn more about [AI Features and Copilot capabilities](/workspace/analysts/ai-features).

### Excel Add-in

Bridge the gap between advanced analytics and familiar spreadsheet workflows with our native Excel integration. The OpenBB Add-in enables your team to pull real-time financial data, run complex queries, and refresh datasets directly within Excel - no coding required. Perfect for teams transitioning from traditional spreadsheet analysis to modern data platforms while maintaining productivity.

Explore the full [Excel Add-in documentation and installation guide](/workspace/analysts/excel-addin).

## Enterprise Support

### Production Support

- 8 hours/day, 5 days/week dedicated support
- Priority support queue
- Direct access to technical team
- Custom training workshops available

### Success Partnership

- Dedicated customer success manager
- Quarterly business reviews
- Best practices consultation
- Ongoing optimization guidance

### JumpStart Package

Get your team operational in just days, not months. Our JumpStart package includes building a custom app tailored to your specific use case, providing hands-on training, and establishing best practices for your organization. This accelerated onboarding ensures immediate value while creating a template for future app development. Your custom app serves as both a production tool and a learning resource for your team.

Learn more about the JumpStart package from [our pricing page](https://openbb.co/pricing#jumpstart).

## Pricing

OpenBB Enterprise uses a seat-based subscription model tailored to your organization's needs. Pricing depends on:

- Number of users
- Deployment configuration (Cloud, VPC, or on-premises)
- Data integration requirements
- Support level

Contact our sales team for a customized quote at [sales@openbb.finance](mailto:sales@openbb.finance)
