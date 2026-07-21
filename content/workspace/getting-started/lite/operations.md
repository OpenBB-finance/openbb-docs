---
title: Operate Workspace Lite
sidebar_position: 4
description: Back up, update, and administer OpenBB Workspace Lite.
keywords:
  - OpenBB Workspace Lite operations
  - Workspace Lite backup
  - Workspace Lite users
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="Operate Workspace Lite | OpenBB Workspace Docs" />

# Operate Workspace Lite

Workspace Lite is customer-hosted. You provision the host, secure the network, operate the container, back up `/data`, and manage users.

OpenBB provides the Workspace Lite image and generally available updates through the private container registry during the subscription term.

## Persistent Data

Workspace Lite stores persistent state under `/data`. Mount `/data` to a host folder or a Docker volume before using Workspace Lite with team data.

| Path | Purpose |
| --- | --- |
| `/data/openbb.db` | SQLite database |
| `/data/storage` | Uploaded files and local folder storage |
| `/data/secrets.env` | Generated runtime secrets and admin credentials |

Use the full `/data` mount as the backup and restore boundary.

## Secrets

Treat `/data/secrets.env` as sensitive. Back it up with the database and storage files. Do not publish container logs from first start without redacting the admin password.

## Users And Authentication

Workspace Lite uses local email and password authentication. Admins manage users from the Workspace admin UI.

When an admin adds a user, Workspace returns a temporary password in the UI. Copy that password before closing the toast and send it to the user through your secure internal channel.

Use named admin accounts for administrators who need ongoing access. Rotate the generated first-start admin password after setup.

## Backups & Restore

Back up the full `/data` mount. A backup should include:

- `/data/openbb.db`
- `/data/openbb.db-wal` and `/data/openbb.db-shm` if present
- `/data/storage`
- `/data/secrets.env`

For a cold backup, stop the container first.

Restore the `/data` backup into a new volume, then start Workspace Lite against that volume. You can then start the same or newer compatible Workspace Lite image against that volume.

## Updates

Before updating:

- read the release notes provided by OpenBB
- back up `/data`
- record the currently running image version
- confirm registry access

Pull the new image. The explicit `docker pull` is required — Docker reuses the locally cached `latest` otherwise:

```bash
docker pull lite.openbb.co/openbb-lite:latest
```

Stop and remove the old container. Keep the `openbb-data` volume:

```bash
docker stop openbb
docker rm openbb
```

Start the new version against the same volume:

```bash
docker run -d \
  -p 3000:3000 \
  -v openbb-data:/data \
  --name openbb \
  lite.openbb.co/openbb-lite:latest
```

Check sign-in, dashboards, connected backends, files, Apps, and MCP behavior before removing the old image from the host.
