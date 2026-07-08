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
lite.openbb.co/openbb-lite:<version>
```

Replace `<version>` with the image tag from your OpenBB release instructions.

## Requirements

You need:

- [Docker](https://docs.docker.com/get-started/get-docker/) installed and running.
- [AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html) installed locally.
- Registry credentials provided by OpenBB.
- Network access from the host to `lite.openbb.co`.

You do not need your own AWS account. The AWS credentials provided by OpenBB authorize registry access for the Workspace Lite image.

## Configure Registry Credentials

Create a dedicated AWS CLI profile for the registry credentials:

```bash
aws configure --profile openbb-lite
```

Enter the access key ID, secret access key, and region provided by OpenBB. Unless OpenBB gives you a different region, use:

```text
us-east-1
```

## Log In To The Registry

Authenticate Docker to the private registry:

```bash
aws ecr get-login-password --region us-east-1 --profile openbb-lite | docker login --username AWS --password-stdin lite.openbb.co
```

A successful login prints:

```text
Login Succeeded
```

## Pull The Image

Pull the image using the tag from your OpenBB instructions email:

```bash
docker pull lite.openbb.co/openbb-lite:<version>
```

If you need a platform-specific image, include the platform architecture in the pull command. For example:

```bash
docker pull --platform linux/amd64 lite.openbb.co/openbb-lite:<version>
```

## Start Workspace Lite

Mount a host folder or Docker volume to `/data` before using Workspace Lite with team data. The `/data` mount stores the database, uploaded files, and generated secrets.

Run the container with a persistent Docker volume:

```bash
docker run -d \
  -p 3000:3000 \
  -v openbb-data:/data \
  --name openbb \
  lite.openbb.co/openbb-lite:<version>
```

Open Workspace Lite at:

```text
http://localhost:3000
```

The first start generates an admin account and runtime secrets. Read the generated admin credentials from the container logs:

```bash
docker logs openbb
```

The credentials are also stored inside the container volume at:

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

If `docker login` fails, confirm the AWS profile, region, and registry hostname:

```bash
aws ecr get-login-password --region us-east-1 --profile openbb-lite
```

If `docker pull` fails with `denied` after `Login Succeeded`, your registry credentials may not have access to the image or tag. Confirm the image tag and registry access with OpenBB.

If the container starts but the page does not load, inspect the logs:

```bash
docker logs openbb
```
