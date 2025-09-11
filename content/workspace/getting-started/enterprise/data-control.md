---
title: Data Control & Security
sidebar_position: 2
description: Data sovereignty, security architecture, and compliance features in OpenBB Workspace Enterprise
keywords:
- Data Sovereignty
- Enterprise Security
- Compliance
- Audit Trails
- Data Residency
- SOC 2
- MFA
- SSO
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="Data Control & Security | OpenBB Workspace Docs" />

# Data Control & Security

OpenBB Workspace Enterprise ensures complete data sovereignty by running entirely within your infrastructure. Your data, AI models, and prompts never leave your secure environment while maintaining full control over sensitive financial information and meeting regulatory requirements.

## Data Sovereignty

Deploy on-premises or in your private cloud (VPC) to maintain complete control over data location and access. All processing occurs within your infrastructure boundaries, ensuring compliance with data residency requirements and regulatory obligations.

## Deployment Options

On-premises installation provides maximum control by running directly on your servers. This approach works well for organizations with strict data residency requirements or air-gapped environments that require complete network isolation.

Private cloud deployment in AWS, Azure, or GCP maintains cloud infrastructure flexibility while keeping data within your security perimeter. This option balances operational convenience with security requirements.

Hybrid architecture combines on-premises core systems with cloud-based compute resources. This approach allows organizations to balance security requirements with scalability needs while maintaining data control.

<img src="https://openbb-cms.directus.app/assets/2ad71c09-ae83-422f-975d-d4cdaefd2c74.png" alt="OpenBB Workspace Enterprise Architecture" width="100%" />

## Enterprise Security Features

The platform integrates with existing security infrastructure including SSO support for Azure and Google authentication systems. Granular role-based access control (RBAC) manages permissions across applications, widgets, data sources, and AI features. Multi-factor authentication enforcement adds security layers for all user accounts.

Detailed audit logging captures all user activities, system access, and configuration changes. The platform operates with no external product analytics and minimal operational logging to maintain privacy and security standards.

## Compliance and Audit Support

Meet regulatory requirements through complete activity logging that tracks user actions, data access patterns, and system modifications. Export controls manage how data can be extracted or shared outside the platform. Retention policies automate data lifecycle management according to organizational and regulatory requirements.

SOC 2 Type II compliance support provides standardized security controls and audit procedures. The platform maintains audit trails that support various regulatory frameworks and compliance requirements.

<div style={{display: 'flex', justifyContent: 'center'}}>
  <img className="pro-border-gradient" width="600" alt="Activity Log Interface" src="https://openbb-web-assets.s3.amazonaws.com/docs/onprem-mar-25/activity-log.png" />
</div>

## Implementation Process

Begin with a security assessment of your current environment to understand deployment requirements and integration needs. Architecture design aligns the platform with existing security controls and network configurations. Security configuration includes authentication integration, access controls, and audit logging setup.

Testing and validation ensure all security controls function correctly before production deployment. Ongoing management includes regular security reviews, access audits, and maintenance of security documentation and procedures.
