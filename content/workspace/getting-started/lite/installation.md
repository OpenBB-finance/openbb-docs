---
title: Install Workspace Lite
sidebar_position: 2
description: Pull and run OpenBB Workspace Lite from the private container registry.
keywords:
  - OpenBB Workspace Lite install
  - Workspace Lite Docker
  - lite.openbb.co
  - AWS ECR login
  - private registry
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="Install Workspace Lite | OpenBB Workspace Docs" />

# Install Workspace Lite

OpenBB Workspace Lite is delivered through the private container registry. OpenBB provides registry credentials.

The commands below use the private container registry path:

```text
lite.openbb.co/openbb-lite:latest
```

The `latest` tag always points to the most recent generally available release.

## Requirements

You need:

- [Docker](https://docs.docker.com/get-started/get-docker/) installed and running.
- [AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html) installed locally.
- Registry credentials provided by OpenBB.
- Network access from the host to `lite.openbb.co`.

You do not need your own AWS account or to run `aws configure`. The AWS credentials provided by OpenBB authorize registry access for the Workspace Lite image and are passed as environment variables for the login command only.

## Install With A Coding Agent

Give your coding agent this prompt:

```text
Install OpenBB Workspace Lite by following https://docs.openbb.co/workspace/getting-started/lite/installation. Ask me for the registry credentials when needed.
```

## Log In To The Registry

Authenticate Docker to the private registry using the access key ID and secret access key provided by OpenBB.

macOS / Linux:

```bash
AWS_ACCESS_KEY_ID="<access-key-id>" AWS_SECRET_ACCESS_KEY="<secret-access-key>" AWS_DEFAULT_REGION="us-east-1" aws ecr get-login-password | docker login --username AWS --password-stdin lite.openbb.co
```

Windows PowerShell:

```powershell
$env:AWS_ACCESS_KEY_ID="<access-key-id>"
$env:AWS_SECRET_ACCESS_KEY="<secret-access-key>"
$env:AWS_DEFAULT_REGION="us-east-1"
aws ecr get-login-password | docker login --username AWS --password-stdin lite.openbb.co
```

A successful login prints:

```text
Login Succeeded
```

## Pull The Image

Pull the image:

```bash
docker pull lite.openbb.co/openbb-lite:latest
```

If you need a platform-specific image, include the platform architecture in the pull command. For example:

```bash
docker pull --platform linux/amd64 lite.openbb.co/openbb-lite:latest
```

## Start Workspace Lite

Mount a host folder or Docker volume to `/data` before using Workspace Lite with team data. The `/data` mount stores the database, uploaded files, and generated secrets.

Run the container with a persistent Docker volume:

```bash
docker run -d \
  -p 3000:3000 \
  -v openbb-data:/data \
  --name openbb \
  lite.openbb.co/openbb-lite:latest
```

Open Workspace Lite at:

```text
http://localhost:3000
```

The first start generates an admin account and runtime secrets. Print the generated admin email and password at any time:

```bash
docker exec openbb credentials
```

The credentials are also printed at the end of the startup logs:

```bash
docker logs openbb --tail 15
```

They are stored inside the container volume at:

```text
/data/secrets.env
```

Keep this file private. It contains the generated admin password and runtime secrets.

## Stop And Start

Stop the container:

```bash
docker stop openbb
```

Start it again:

```bash
docker start openbb
```

The `/data` volume keeps the database, uploaded files, and generated secrets across restarts.

## Troubleshooting

If `docker login` fails, confirm the credentials, region, and registry hostname by running the login command's first half on its own:

```bash
AWS_ACCESS_KEY_ID="<access-key-id>" AWS_SECRET_ACCESS_KEY="<secret-access-key>" AWS_DEFAULT_REGION="us-east-1" aws ecr get-login-password
```

A long token printed to the terminal means the credentials are valid.

If `docker pull` fails with `denied` after `Login Succeeded`, your registry credentials may not have access to the image. Confirm registry access with OpenBB.

If the container starts but the page does not load, inspect the logs:

```bash
docker logs openbb
```
