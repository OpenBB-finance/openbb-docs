---
title: Administration
sidebar_position: 4
description: Administration and management features for OpenBB Workspace Enterprise
keywords:
- Administration
- User Management
- RBAC
- Theme Settings
- System Configuration
- Monitoring
- Branding
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="Administration | OpenBB Workspace Docs" />

# Administration

Enterprise administrators manage users, configure access controls, customize branding, and monitor system usage through a web-based interface.

## User Management

Import users from CSV files or connect to directory services for automated provisioning. Bulk operations handle large user lists efficiently. Account creation includes role assignment during the onboarding process. User modifications update permissions as organizational responsibilities change. Offboarding revokes access immediately while preserving audit trails.

<div style={{display: 'flex', justifyContent: 'center'}}>
  <img className="pro-border-gradient" width="600" alt="Team Management Interface" src="https://openbb-web-assets.s3.amazonaws.com/docs/launch_oct_24/team_management.png" />
</div>

Single sign-on integrates with Azure Active Directory through OpenID Connect protocol. Google Workspace authentication uses OAuth 2.0 flows. Any SAML 2.0-compatible identity provider connects through standard configuration. Just-in-time provisioning creates accounts automatically when users first authenticate.

## Role-Based Access Control

Define custom roles that match organizational structure. Permission levels operate at four distinct layers: applications control access to entire modules, widgets govern individual analytical tools, data sources restrict information access, and AI features manage Copilot capabilities.

<div style={{display: 'flex', justifyContent: 'center'}}>
  <img className="pro-border-gradient" width="800" alt="Role Management Interface" src="https://openbb-web-assets.s3.amazonaws.com/docs/onprem-mar-25/create-role-user-list.png" />
</div>

Standard roles provide starting points for customization. Admin accounts have full system access and configuration capabilities. Analysts create and share dashboards with complete data access. Viewers access shared content in read-only mode. Data Managers handle source connections and data governance. Custom roles combine these permissions to match specific organizational needs.

## Theme and Branding Configuration

Customize visual appearance to match corporate identity. Table settings control general layouts, borders, spacing, headers, cells, icons, and typography. Each element accepts custom styling for both light and dark themes. Configuration changes apply immediately across all user sessions.

<div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
  <img src="https://openbb-cms.directus.app/assets/c8c0241e-981c-4456-a8f2-66aafaab350a.png" width="100%" />
</div>

Chart customization includes base themes, color palettes, core settings, input configurations, and background images. Color palettes define schemes for different data types and analytical contexts. Core settings manage axis, grid, and legend appearance. Background images add corporate watermarks or branding elements.

<div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
  <img src="https://openbb-cms.directus.app/assets/364a1419-1b57-46ea-a482-98faef8c36f3.png" width="100%" />
</div>

Preview functionality shows customizations before applying them system-wide:

<div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
  <img src="https://openbb-cms.directus.app/assets/345da327-228b-4029-9480-ef4b8777a357.png" width="100%" />
</div>

## Brand Identity

Select primary brand colors through a color picker interface. The system automatically generates complementary shades for consistent application throughout the platform. Color choices maintain accessibility compliance by ensuring readable contrast ratios. Changes propagate to all interface elements within seconds.

<div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
  <img src="https://openbb-cms.directus.app/assets/815dc29f-d8a8-4c1d-8ee6-0766f9762cde.png" width="100%" />
</div>

Logo upload supports PNG, SVG, and JPG formats with automatic sizing for different display contexts. The system generates favicons from uploaded logos for browser tab branding. Logo placement options include headers, login pages, and generated reports.

<div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
  <img src="https://openbb-cms.directus.app/assets/b1055be1-ed02-400f-8876-372ae832d37c.png" width="100%" />
</div>
