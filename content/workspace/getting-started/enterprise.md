---
title: Enterprise
sidebar_position: 6.5
description: Comprehensive guide to OpenBB Workspace Enterprise features, including role-based access control, security compliance, team collaboration, and on-premises deployment capabilities.
keywords:
- OpenBB Workspace Enterprise
- Role-Based Access Control
- Enterprise Security
- Compliance Requirements
- Team Collaboration
- On-Premises Deployment
- Private Cloud
- Data Protection
- Enterprise Support
- RBAC
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="Enterprise | OpenBB Workspace Docs" />

# OpenBB Workspace Enterprise

OpenBB Workspace Enterprise provides a secure, compliant solution for organizations that require the highest level of data protection and control. Deploy our platform entirely within your infrastructure—either on-premises or in your private cloud (VPC)—to maintain complete control over your sensitive financial data and AI workflows.

<img src="https://openbb-cms.directus.app/assets/2ad71c09-ae83-422f-975d-d4cdaefd2c74.png" alt="OpenBB Workspace Enterprise Architecture" width="100%" />

## Key Benefits

- **Complete Data Control**: Deploy within your infrastructure—on-premises or private cloud (VPC)
- **Enhanced Security**: Keep all data, models, and prompts within your secure environment
- **Compliance Ready**: Meet strict regulatory requirements with built-in compliance features
- **Seamless Integration**: Connect with your internal systems, data sources, and authentication providers
- **Granular Access Control**: Implement enterprise-grade role-based access control
- **Enterprise Support**: Access dedicated support and service-level agreements (SLAs)

## Team Collaboration

OpenBB Workspace Enterprise enables secure team collaboration while maintaining strict access controls. When you sign up, we create a dedicated organization account for your team, allowing you to:

- Keep dashboards private and accessible only to authorized team members
- Share findings and insights with specific colleagues
- Collaborate on alpha generation while maintaining data security

<div style={{display: 'flex', justifyContent: 'center'}}>
  <img className="pro-border-gradient" width="800" alt="Dashboard Sharing Interface" src="https://openbb-web-assets.s3.amazonaws.com/docs/launch_oct_24/sharing_dashboard.png" />
</div>

## Role-Based Access Control (RBAC)

Our enterprise-grade RBAC system provides granular control over user permissions. Instead of managing individual permissions, you can create roles that define specific access levels for different user groups.

### Creating and Managing Roles

To set up role-based access:

1. Create a new role with a descriptive name
2. Provide a clear description of the role's purpose
3. Assign users to the role

<div style={{display: 'flex', justifyContent: 'center'}}>
  <img className="pro-border-gradient" width="800" alt="Role Creation Interface" src="https://openbb-web-assets.s3.amazonaws.com/docs/onprem-mar-25/create-role-empty.png" />
</div>

<div style={{display: 'flex', justifyContent: 'center'}}>
  <img className="pro-border-gradient" width="800" alt="Role Creation Form" src="https://openbb-web-assets.s3.amazonaws.com/docs/onprem-mar-25/create-role-popup.png" />
</div>

> **Note**: You can only assign users who have already been added to the Workspace. See the User Management section for adding new users.

After creating a role, you can view all assigned users and role metadata in the Roles tab:

<div style={{display: 'flex', justifyContent: 'center'}}>
  <img className="pro-border-gradient" width="800" alt="Role User List" src="https://openbb-web-assets.s3.amazonaws.com/docs/onprem-mar-25/create-role-user-list.png" />
</div>

### Permission Management

Permissions are organized into three key categories:

1. **Apps**: Manage dashboard access through apps
2. **Widgets**: Granular control over widget access
3. **Prompts**: Control access to AI prompts

<div style={{display: 'flex', justifyContent: 'center'}}>
  <img className="pro-border-gradient" width="800" alt="Permissions Overview" src="https://openbb-assets.s3.us-east-1.amazonaws.com/docs/pro/role+permissions.png" />
</div>

#### App Permissions

To set up app permissions:

1. Configure your data integration in the App tab
2. Click the information toast message to access the Permissions section
3. Update data connection permissions from "No Access" to "Access"
4. (Optional) Grant access to specific widgets associated with the data integration instead of the entire app

<div style={{display: 'flex', justifyContent: 'center'}}>
  <img className="pro-border-gradient" width="600" alt="Backend Setup Notification" src="https://openbb-assets.s3.us-east-1.amazonaws.com/docs/pro/new-apps.png" />
</div>

<div style={{display: 'flex', justifyContent: 'center'}}>
  <img className="pro-border-gradient" width="600" alt="Permission Edit Interface" src="https://openbb-assets.s3.us-east-1.amazonaws.com/docs/pro/app2.png" />
</div>

**Efficient Permission Assignment:**

- Search by category or data provider
- Use multi-select for bulk permission assignment
- Widgets with "No Access" remain hidden from users with that role

#### Widget Permissions

If you want to grant access to specific widgets instead of the entire app, you can do so by setting widget permissions.

<div style={{display: 'flex', justifyContent: 'center'}}>
  <img className="pro-border-gradient" width="600" alt="Permission Edit Interface" src="https://openbb-assets.s3.us-east-1.amazonaws.com/docs/pro/widgets+permissions.png" />
</div>

#### Prompt Permissions

Manage access to prompts through:

1. Custom backend configuration
2. Manual setup within the Workspace
3. Role Management in the Admin Portal

<div style={{display: 'flex', justifyContent: 'center'}}>
  <img className="pro-border-gradient" width="600" alt="Prompt Setup Interface" src="https://openbb-assets.s3.us-east-1.amazonaws.com/docs/pro/prompts.png" />
</div>

<div style={{display: 'flex', justifyContent: 'center'}}>
  <img className="pro-border-gradient" width="600" alt="Prompt Sharing Controls" src="https://openbb-assets.s3.us-east-1.amazonaws.com/docs/pro/prompts-permissions.png" />
</div>

### Activity Logging

The Activity Log provides comprehensive tracking of all role and permission changes:

- Role creation, modification, and deletion
- User role assignments and removals
- Permission updates

Each log entry includes:
- Timestamp
- User who performed the action
- Action type
- Detailed change information

The log supports filtering and searching by activity type for quick access to relevant entries.

<div style={{display: 'flex', justifyContent: 'center'}}>
  <img className="pro-border-gradient" width="600" alt="Activity Log Interface" src="https://openbb-web-assets.s3.amazonaws.com/docs/onprem-mar-25/activity-log.png" />
</div>

## User Management

The User Management interface provides comprehensive control over workspace access:

- Invite or remove team members
- Export user lists
- View detailed user profiles including permissions, user type, and login history

<div style={{display: 'flex', justifyContent: 'center'}}>
  <img className="pro-border-gradient" width="600" alt="Team Management Interface" src="https://openbb-web-assets.s3.amazonaws.com/docs/launch_oct_24/team_management.png" />
</div>

### User Invitation Process

Invite users by providing:
- First name
- Last name
- Email address

**Invitation Options:**
- Standard invitation requiring user acceptance
- Bypass invitation for immediate access

**Invitation Methods:**
1. Single User Invitation
2. Bulk Invitation (recommended for multiple users)

<div style={{display: 'flex', justifyContent: 'center'}}>
  <img className="pro-border-gradient" width="600" alt="Single User Invitation" src="https://openbb-web-assets.s3.amazonaws.com/docs/onprem-mar-25/user-invitation-single.png" />
</div>

For bulk invitations:
1. Download the template
2. Remove sample data
3. Add your user information
4. Upload the completed file

<div style={{display: 'flex', justifyContent: 'center'}}>
  <img className="pro-border-gradient" width="600" alt="Bulk User Invitation" src="https://openbb-web-assets.s3.amazonaws.com/docs/onprem-mar-25/user-invitation-bulk.png" />
</div>

### User Profile Management

The user profile interface enables:

- User deletion
- User type changes (Normal User/Admin)
- Permission review and adjustment
- Aggregated view of all permissions across roles

<div style={{display: 'flex', justifyContent: 'center'}}>
  <img className="pro-border-gradient" width="600" alt="User Profile Interface" src="https://openbb-web-assets.s3.amazonaws.com/docs/onprem-mar-25/permission-preview.png" />
</div>

### User Export

Export complete user lists with details in CSV or XLS format:

<div style={{display: 'flex', justifyContent: 'center'}}>
  <img className="pro-border-gradient" width="600" alt="User Export Interface" src="https://openbb-web-assets.s3.amazonaws.com/docs/onprem-mar-25/user-export.png" />
</div>

## Others

### Data Export Capabilities

Enterprise users can export data in multiple formats:
- CSV
- JSON
- XLSX
- Other supported formats

<div style={{display: 'flex', justifyContent: 'center'}}>
  <img className="pro-border-gradient" width="600" alt="Data Export Interface" src="https://openbb-web-assets.s3.amazonaws.com/docs/launch_oct_24/export_data.png" />
</div>

### Dashboard Reporting

Export dashboards to PDF with a single click:

<div style={{display: 'flex', justifyContent: 'center'}}>
  <img className="pro-border-gradient" width="600" alt="Report Export Interface" src="https://openbb-web-assets.s3.amazonaws.com/docs/launch_oct_24/export_report.png" />
</div>

Example exported report:

<div style={{display: 'flex', justifyContent: 'center'}}>
  <img className="pro-border-gradient" width="488" alt="Exported Dashboard Report" src="https://openbb-web-assets.s3.amazonaws.com/docs/launch_oct_24/dashboard_export.png" />
</div>

## Excel Integration

Enterprise users can:

- Access OpenBB sandbox data directly from Excel
- Export datasets to Excel format
- Use the OpenBB Add-in for Excel

For detailed information, see [OpenBB Add-in for Excel](http://docs.openbb.co/excel).

<div style={{display: 'flex', justifyContent: 'center'}}>
  <img className="pro-border-gradient" width="600" alt="Excel Add-in Interface" src="https://openbb-web-assets.s3.amazonaws.com/docs/launch_oct_24/excel_addin.png" />
</div>
