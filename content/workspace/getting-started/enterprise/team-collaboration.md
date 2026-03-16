---
title: Team Collaboration
sidebar_position: 3
description: Collaborative features for teams in OpenBB Workspace Enterprise
keywords:
- Team Collaboration
- Dashboard Sharing
- Workspaces
- Audit Trails
- Export Controls
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="Team Collaboration | OpenBB Workspace Docs" />

# Team Collaboration

Share dashboards, insights, and analyses securely within your organization. The collaboration system provides controlled access to analytical work while maintaining audit trails and data governance.

## Private Team Workspaces

Create dedicated spaces for different teams and projects. Each workspace maintains its own set of dashboards, user permissions, and access controls. Teams can collaborate on analysis within their designated workspace while maintaining separation from other organizational units.

## Controlled Dashboard Sharing

Share analytical dashboards with specific team members or groups. The sharing system allows dashboard owners to control who can view, interact with, or modify shared content. Recipients can access shared dashboards through their workspace interface while respecting the permissions set by the owner.

<div style={{display: 'flex', justifyContent: 'center'}}>
  <img className="pro-border-gradient" width="800" alt="Dashboard Sharing Interface" src="https://openbb-web-assets.s3.amazonaws.com/docs/launch_oct_24/sharing_dashboard.png" />
</div>

Dashboard sharing operates through permission levels that determine user capabilities. View-only access allows users to see dashboard content without making changes. Interactive access enables parameter modifications and data exploration while preserving the original dashboard structure.

## Audit Trails

All collaborative activities generate detailed audit records. The system logs dashboard sharing events, access attempts, and modification history. User actions include timestamps, user identification, and affected resources. This information supports compliance requirements and security monitoring.

Activity logging tracks when dashboards are shared, accessed, or modified. Permission changes receive separate audit entries showing who granted or revoked access to specific resources. Export activities log when data leaves the system through sharing or download functions.

## Export Controls

Manage how data and analyses can be extracted from the platform. Users are allowed to export:
- Individual datasets in formats such as CSV, Excel, PNG and JSON.
- Export dashboards (with multiple tabs) as PDF or PNG.
- Export a folder (i.e. multiple dashboards) as a ZIP file.

## AI Features Integration

OpenBB Copilot operates within the collaborative environment while maintaining appropriate access controls. Team members can use AI features to analyze shared data and generate insights within their permission boundaries. AI interactions respect the same access controls that govern manual data analysis.

Learn more about AI capabilities in the [Copilot documentation](/workspace/analysts/ai-features/copilot-basics).

## Excel Integration

The Excel Add-in supports collaborative workflows by enabling team members to access shared data sources through familiar spreadsheet interfaces. Excel integration maintains the same permission structure as the web platform, ensuring data access consistency across tools.

Team members can use Excel to analyze data from shared workspaces while respecting access controls established in the main platform. Changes to data permissions automatically affect Excel access without requiring separate configuration.

Explore Excel integration details in the [Add-in documentation](/workspace/analysts/excel-addin/excel-overview).

## Implementation Considerations

Set up team workspaces according to organizational structure and project requirements. Define sharing policies that align with data governance requirements and compliance obligations. Establish audit review procedures to monitor collaborative activities and ensure appropriate access levels.

Train team members on sharing capabilities, permission levels, and audit requirements. Regular reviews of shared content and access permissions help maintain security and compliance standards over time.
