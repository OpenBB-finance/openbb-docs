---
title: User Management
sidebar_position: 5
description: test
keywords:
- OpenBB Workspace Enterprise
- User Management
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="User Management | OpenBB Workspace Docs" />

In the User Management tab, you can manage access to your firm’s workspace. You can:

- Invite or remove members
- Export the user list
- View user details, including their permissions, user type and last login time
  
<div style={{display: 'flex', justifyContent: 'center'}}>
  <img className="pro-border-gradient" width="600" alt="folder" src="https://openbb-web-assets.s3.amazonaws.com/docs/launch_oct_24/team_management.png" />
</div>

## Inviting users
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

## User Profile
When clicking on a user, you can perform advanced actions such as deleting the user or changing their user type between Normal User and Admin. Additionally, you'll see a detailed summary of their final permissions. This is especially useful when a user is assigned to multiple roles with overlapping or conflicting permissions. The aggregated view allows you to review the complete list of widgets, prompts, and templates the user has access to, and make any necessary adjustments.

<div style={{display: 'flex', justifyContent: 'center'}}>
  <img className="pro-border-gradient" width="600" alt="folder" src="https://openbb-web-assets.s3.amazonaws.com/docs/onprem-mar-25/permission-preview.png" />
</div>

## Exporting users


You can export the entire user list, together with their details in CSV or XLS format. 

<div style={{display: 'flex', justifyContent: 'center'}}>
  <img className="pro-border-gradient" width="600" alt="folder" src="https://openbb-web-assets.s3.amazonaws.com/docs/onprem-mar-25/user-export.png" />
</div>
