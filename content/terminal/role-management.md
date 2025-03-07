---
title: Role Management
sidebar_position: 1
description: test
keywords:
- OpenBB Workspace Enterprise
- Role Management
---

<HeadTitle title="Role Management | OpenBB Workspace Docs" />

This section covers how to create roles, assign users to roles, and set permissions.

We use a Role-Based Access Control (RBAC) model, where users are assigned predefined roles that grant them a set of permissions, rather than assigning permissions individually.

To grant user access, you must first create a role.

## Roles

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

## Permissions

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


### 1. Data Connectors
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

### 2. Templates
A Template defines the layout, consisting of a combination of widgets and their arrangement within the dashboard. To ensure users can view the complete template, they must have access to all underlying widgets.

If any widgets lack the necessary permissions, we will detect them and notify you accordingly.

<div style={{display: 'flex', justifyContent: 'center'}}>
  <img className="pro-border-gradient" width="600" alt="folder" src="https://openbb-web-assets.s3.amazonaws.com/docs/onprem-mar-25/share-template-toast.png" />
</div>

### 3. Prompts
In the Prompt section, you can grant access to prompts, whether they are set up via the custom backend or manually within the Workspace.


// TODO include link to custom backend where they can associate prompts
//TODO: A sscreenshot on how the prompt sharing looks like


## Activity Log
<!-- TODO: finish the documentation once Henrique finishes -->