---
title: Enterprise
sidebar_position: 2
description: test
keywords:
- OpenBB Workspace Enterprise
- Role Management
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="Enterprise | OpenBB Workspace Docs" />

Our product offers two different plans:
    - **OpenBB Workspace** - Free version for individuals
    - **OpenBB Enterprise** - Our offering for teams and professionals

The products, features and services that come with an enterprise are highlighted below.

## Excel Add-In

The enterprise plan, enables users to have access to the financial data directly from Excel, or export any dataset into an Excel format.

For more information, check [OpenBB Add-in for Excel](http://docs.openbb.co/excel).

<div style={{display: 'flex', justifyContent: 'center'}}>
  <img className="pro-border-gradient" width="600" alt="folder" src="https://openbb-web-assets.s3.amazonaws.com/docs/launch_oct_24/excel_addin.png" />
</div>

## Export Data

Users are able to export any data from OpenBB, either in CSV, JSON, XLSX or other format. This is achieved by having redistribution rights on the data.

<div style={{display: 'flex', justifyContent: 'center'}}>
  <img className="pro-border-gradient" width="600" alt="folder" src="https://openbb-web-assets.s3.amazonaws.com/docs/launch_oct_24/export_data.png" />
  </div>

## Reporting

Easily export your dashboards to PDF with a single click.

<div style={{display: 'flex', justifyContent: 'center'}}>
  <img className="pro-border-gradient" width="600" alt="folder" src="https://openbb-web-assets.s3.amazonaws.com/docs/launch_oct_24/export_report.png" />
</div>

This is how the Report will look.

<div style={{display: 'flex', justifyContent: 'center'}}>
<img className="pro-border-gradient" width="488" alt="dash settings" src="https://openbb-web-assets.s3.amazonaws.com/docs/launch_oct_24/dashboard_export.png
" />
</div>

## Database Integrations

There are two ways to connect to your databases or data warehouses.

1. The first is through custom backends, which we have open source [here](https://github.com/OpenBB-finance/backend-examples-for-openbb-workspace/tree/main). This allows users to connect to platforms like Snowflake, Databricks, Elastic, Clickhouse, and others.

2. The second is a native database/datawarehouse integration that enables firms to connect securely with their data, in seconds instead of hours. Supported connections currently include Snowflake, SQLite, and MySQL, with more options coming soon.

<div style={{display: 'flex', justifyContent: 'center'}}>
  <img className="pro-border-gradient" width="600" alt="folder" src="https://openbb-web-assets.s3.amazonaws.com/docs/launch_oct_24/native_integration.png" />
</div>

## Dashboard Sharing

Keep your dashboards private and securely accessible only to your organization. Upon signing up, we’ll create an organization account for you and your team. You can grant specific team members access to dashboards.

<div style={{display: 'flex', justifyContent: 'center'}}>
  <img className="pro-border-gradient" width="600" alt="folder" src="https://openbb-web-assets.s3.amazonaws.com/docs/launch_oct_24/sharing_dashboard.png" />
</div>

## Team Management

Gain access to a user management portal where you can manage access to your firm’s workspace. You can invite or remove members, export the entire user list, and view their last login times.

<div style={{display: 'flex', justifyContent: 'center'}}>
  <img className="pro-border-gradient" width="600" alt="folder" src="https://openbb-web-assets.s3.amazonaws.com/docs/launch_oct_24/team_management.png" />
</div>

## AI Copilot resources

Users on the free tier will have access to 20 messages per day with the OpenBB Copilot, at which point they will need to insert their LLMs API keys. Enterprise users will benefit from far more generous limits, so they aren't limited.

## File storage resources

Enterprise customers will benefit from up to 10 GB of file (structured/unstructured data) storage, as opposed to 1 GB available with the free tier.

## Role Management

This section covers how to create roles, assign users to roles, and set permissions.

We use a Role-Based Access Control (RBAC) model, where users are assigned predefined roles that grant them a set of permissions, rather than assigning permissions individually.

To grant user access, you must first create a role.

### Roles

Creating a new role is straightforward:


<div style={{display: 'flex', justifyContent: 'center'}}>
  <img className="pro-border-gradient" width="600" alt="folder" src="https://openbb-web-assets.s3.amazonaws.com/docs/onprem-mar-25/create-role-empty.png" />
</div>

<div style={{display: 'flex', justifyContent: 'center'}}>
  <img className="pro-border-gradient" width="600" alt="folder" src="https://openbb-web-assets.s3.amazonaws.com/docs/onprem-mar-25/create-role-popup.png" />
</div>

1. Enter the role name
2. Provide a description
3. Select users to assign to the role

You can only assign users who have already been added to the Workspace. Refer to the User Management section for instructions on adding users.

Once you create a role, you can view all users assigned to that particular role in the `Roles` tab, together with metadata such as Creation Date, and Description.

<div style={{display: 'flex', justifyContent: 'center'}}>
  <img className="pro-border-gradient" width="600" alt="folder" src="https://openbb-web-assets.s3.amazonaws.com/docs/onprem-mar-25/create-role-user-list.png" />
</div>

### Permissions

Once the role was added, to grant permissions to them, navigate to the Permissions tab inside the Role Management page. You can find the list of roles that have been added, together with the options to Edit their permissions. Permissions are organized into three different categories: Data connectors, Templates and Prompts. 

<div style={{display: 'flex', justifyContent: 'center'}}>
  <img className="pro-border-gradient" width="600" alt="folder" src="https://openbb-web-assets.s3.amazonaws.com/docs/onprem-mar-25/permissions-list-view.png" />
</div>

Permissions are organized into three different groups:
1. Data connectors
2. Templates
3. Prompt

<div style={{display: 'flex', justifyContent: 'center'}}>
  <img className="pro-border-gradient" width="600" alt="folder" src="https://openbb-web-assets.s3.amazonaws.com/docs/onprem-mar-25/permissions-edit-overview.png" />
</div>


#### 1. Data Connectors
To begin, set up your custom backend and upload files in the Data Connectors tab within the Workspace. [Refer to the guide here.]

Once this is set up from the Workspace, you will be able to set up permissions. By clicking on the information toast message, you will be brought direct to the Permissions section.

<div style={{display: 'flex', justifyContent: 'center'}}>
  <img className="pro-border-gradient" width="600" alt="folder" src="https://openbb-web-assets.s3.amazonaws.com/docs/onprem-mar-25/backend-setup-toast-message.png" />
</div>

In the Data Connectors tab, you can grant permissions for Custom Backends and Files. For Custom Backend, you first need to update the underlying data connection permissions from `No Access` to `Access`. Only then can you grant access to specific widgets associated with that backend.

<div style={{display: 'flex', justifyContent: 'center'}}>
  <img className="pro-border-gradient" width="600" alt="folder" src="https://openbb-web-assets.s3.amazonaws.com/docs/onprem-mar-25/permission-edit.png" />
</div>

Use the search function to efficiently assign permissions to multiple widgets:

1. Search by category or data provider (if metadata is provided via the Custom Backend).
2. Use multi-select and bulk assign permissions.

Widgets assigned `No Access` will not be visible or searchable for users with that assigned role in their Workspace.

<!-- @TODO Add view where users don't have access to certain widgets -->

#### 2. Templates

A Template defines the layout, consisting of a combination of widgets and their arrangement within the dashboard. To ensure users can view the complete template, they must have access to all underlying widgets.

If any widgets lack the necessary permissions, we will detect them and notify you accordingly.

<div style={{display: 'flex', justifyContent: 'center'}}>
  <img className="pro-border-gradient" width="600" alt="folder" src="https://openbb-web-assets.s3.amazonaws.com/docs/onprem-mar-25/share-template-toast.png" />
</div>

#### 3. Prompts

In the Prompt section, you can grant access to prompts, whether they are set up via the custom backend or manually within the Workspace.

<div style={{display: 'flex', justifyContent: 'center'}}>
  <img className="pro-border-gradient" width="600" alt="folder" src="https://openbb-web-assets.s3.amazonaws.com/docs/onprem-mar-25/set-prompts.png" />
</div>

Then, in the Admin Portal, go to Role Management and select Edit Permissions under Prompts tab to control which prompts are accessible to each role.

<div style={{display: 'flex', justifyContent: 'center'}}>
  <img className="pro-border-gradient" width="600" alt="folder" src="https://openbb-web-assets.s3.amazonaws.com/docs/onprem-mar-25/prompt-sharing.png" />
</div>

To ensure all permissions are correctly granted, you can review the final set of permissions for each user in their profile, under the [User Management](/terminal/user-management) tab.
<div style={{display: 'flex', justifyContent: 'center'}}>
  <img className="pro-border-gradient" width="600" alt="folder" src="https://openbb-web-assets.s3.amazonaws.com/docs/onprem-mar-25/permission-preview.png" />
</div>

### Activity Log

As an Admin, you can view a detailed activity log that tracks all changes related to roles, groups, and permissions.

The log captures activities such as:
- Creation, modification (name/description), and deletion of roles
- User assignments to roles (add/remove)
- Updates to permissions

Each log entry includes the timestamp of the action, the name of the user who performed it, the type of action (e.g., "Created Group" or "Modified Permission"), and specific details about the change. To enhance usability, the log supports filtering and searching by activity type, making it easy to find relevant entries quickly.

<div style={{display: 'flex', justifyContent: 'center'}}>
  <img className="pro-border-gradient" width="600" alt="folder" src="https://openbb-web-assets.s3.amazonaws.com/docs/onprem-mar-25/activity-log.png" />
</div>

## User Management

In the User Management tab, you can manage access to your firm’s workspace. You can:

- Invite or remove members
- Export the user list
- View user details, including their permissions, user type and last login time
  
<div style={{display: 'flex', justifyContent: 'center'}}>
  <img className="pro-border-gradient" width="600" alt="folder" src="https://openbb-web-assets.s3.amazonaws.com/docs/launch_oct_24/team_management.png" />
</div>

### Inviting users

To invite users, provide the following details:

- First name
- Last name
- Email address

You can choose to Bypass Invitation, which automatically grants users access to the organization without requiring them to accept an invitation.

There are two ways to invite users:
1. Single User Invitation – Add one user at a time.
2. Bulk Invitation – Recommended for adding multiple users simultaneously.

<div style={{display: 'flex', justifyContent: 'center'}}>
  <img className="pro-border-gradient" width="600" alt="folder" src="https://openbb-web-assets.s3.amazonaws.com/docs/onprem-mar-25/user-invitation-single.png" />
</div>

For bulk invitations, download the provided template, remove the sample data, and add your own. Ensure all mandatory fields are completed before uploading the file.

<div style={{display: 'flex', justifyContent: 'center'}}>
  <img className="pro-border-gradient" width="600" alt="folder" src="https://openbb-web-assets.s3.amazonaws.com/docs/onprem-mar-25/user-invitation-bulk.png" />
</div>

### User Profile

When clicking on a user, you can perform advanced actions such as deleting the user or changing their user type between Normal User and Admin. Additionally, you'll see a detailed summary of their final permissions. This is especially useful when a user is assigned to multiple roles with overlapping or conflicting permissions. The aggregated view allows you to review the complete list of widgets, prompts, and templates the user has access to, and make any necessary adjustments.

<div style={{display: 'flex', justifyContent: 'center'}}>
  <img className="pro-border-gradient" width="600" alt="folder" src="https://openbb-web-assets.s3.amazonaws.com/docs/onprem-mar-25/permission-preview.png" />
</div>

### Exporting users

You can export the entire user list, together with their details in CSV or XLS format. 

<div style={{display: 'flex', justifyContent: 'center'}}>
  <img className="pro-border-gradient" width="600" alt="folder" src="https://openbb-web-assets.s3.amazonaws.com/docs/onprem-mar-25/user-export.png" />
</div>
