---
title: Quick Start
sidebar_position: 0
description: Get started with the OpenBB Native App for Snowflake. This guide walks you through installation, configuration, and granting data access.
keywords:
  - Snowflake Native App
  - OpenBB
  - Cortex AI
  - Snowpark
  - installation
  - quick start
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="OpenBB Snowflake Native App - Quick Start" />

Welcome to the OpenBB Native App!
This guide walks you through the first steps after installing.

---

## Security Notice: Python Execution Capability

**Important:** This app includes a Python notebook execution feature that allows users to run custom Python code within their Snowflake environment.

**Security Characteristics:**

- Code runs with `EXECUTE AS RESTRICTED CALLER` in a controlled Snowpark environment
- Code runs with the customer's privileges, with additional restrictions
- Execution is sandboxed within Snowflake's native Python runtime
- No external network access from executed code (Snowflake's default sandbox blocks network egress)
- All code execution is logged and auditable through Snowflake's query history

**Recommended Usage:**

- Grant the `app_user` role only to trusted users who need analytics capabilities
- Review Snowflake query history regularly to monitor code execution
- Limit warehouse size to control resource consumption

---

## 1. Installation and Warehouse Configuration

**How to bind the warehouse (required):**

You must give the app access to the default warehouse for whatever user will be using the application.

```sql
GRANT USAGE ON WAREHOUSE <user_default_warehouse> TO APPLICATION <app_name>;
GRANT CALLER USAGE ON WAREHOUSE <user_default_warehouse> TO APPLICATION <app_name>;
```

**What the warehouse is used for:**

- Executing Python notebook code via the `app_execute_py()` procedure
- Running analytical queries from within the OpenBB UI
- Backend operations that require compute resources

---

## 2. Grant Cortex AI Privileges (Required for AI Features)

For the AI/Agent functionality to work, you must enable Cortex cross-region support and grant Cortex database roles to the application. Run these commands as an **ACCOUNTADMIN**:

```sql
-- Enable Cortex to work across regions (account-level setting)
ALTER ACCOUNT SET CORTEX_ENABLED_CROSS_REGION = 'ANY_REGION';

-- Grant Cortex database roles to the application
GRANT DATABASE ROLE SNOWFLAKE.CORTEX_USER TO APPLICATION <app_name>;
GRANT DATABASE ROLE SNOWFLAKE.CORTEX_AGENT_USER TO APPLICATION <app_name>;
```

**Example:**

```sql
ALTER ACCOUNT SET CORTEX_ENABLED_CROSS_REGION = 'ANY_REGION';

GRANT DATABASE ROLE SNOWFLAKE.CORTEX_USER TO APPLICATION <app_name>;
GRANT DATABASE ROLE SNOWFLAKE.CORTEX_AGENT_USER TO APPLICATION <app_name>;
```

**Notes:**

- The `ALTER ACCOUNT` command is required to enable Snowflake Cortex Agent functionality across regions
- These grants require the `IMPORTED PRIVILEGES ON SNOWFLAKE DB` privilege (already declared in the app manifest)
- These commands only need to be run once per account

---

## 3. Map App Roles to Your Account Roles

The app defines two application roles:

- **`app_user`** → run the app and access the UI
- **`app_admin`** → manage the service (start/stop/monitor/scale)

As an account admin, map these roles to your own roles:

```sql
-- Example: grant app roles to a role named OPENBB_TESTERS
CREATE ROLE IF NOT EXISTS <role_name>;

GRANT APPLICATION ROLE <app_name>.app_user  TO ROLE <role_name>;
GRANT APPLICATION ROLE <app_name>.app_admin TO ROLE <role_name>;

-- Assign that role to a user
GRANT ROLE <role_name> TO USER <your_username>;
```

---

## 4. Automatic Service Start

The OpenBB services start **automatically** after installation completes.

The app uses Snowflake's lifecycle callback system to automatically:

- Create two compute pools (backend + app)
- Create the warehouse used for the app
- Start the backend service (database + Redis)
- Start the app service (API + AI) after backend is ready

**The services start automatically when:**

- The app is first installed
- A new version or patch is deployed
- The app is upgraded

**Check service status:**

```sql
CALL <app_name>.core.get_service_status();
-- Returns: "Backend: READY, App: READY"
```

**Note:** The services may take 3-5 minutes to fully start after installation.

---

## 5. Manual Service Control (Optional)

If you need to manually control the services, these procedures are available to admins:

### Start/Stop All Services

```sql
-- Start all services (usually not needed - automatic on install/upgrade)
CALL <app_name>.core.start_openbb_service();

-- Stop all services (suspends backend to preserve data, drops app service)
CALL <app_name>.core.stop_openbb_service();

-- Restart all services
CALL <app_name>.core.restart_openbb_service();
```

### Control Services Individually

```sql
-- Stop just the app service (safe - stateless)
CALL <app_name>.core.stop_app_service();

-- Suspend backend service (preserves database data)
CALL <app_name>.core.suspend_backend_service();

-- Resume backend service from suspended state
CALL <app_name>.core.resume_backend_service();
```

**Important:** Never DROP the backend service directly - use `suspend_backend_service()` to preserve your Postgres data.

---

## 6. Scaling the App (Admin)

Admins can adjust scaling parameters for the app pool and service:

### Adjust Compute Pool Size

```sql
-- Set app pool to scale between 1 and 3 nodes (max 5)
CALL <app_name>.core.set_app_pool_size(1, 3);
```

### Adjust Service Instance Count

```sql
-- Set app service to scale between 1 and 4 instances (max 8)
CALL <app_name>.core.set_app_service_scale(1, 4);
```

**Notes:**

- Backend pool is fixed at 1 node (required for block storage)
- Contact OpenBB for limits higher than 5 nodes / 8 instances

---

## 7. Viewing Container Logs (Troubleshooting)

Admins can view logs from each container to troubleshoot issues:

```sql
-- App service containers
CALL <app_name>.core.get_api_logs(100);    -- API/UI container
CALL <app_name>.core.get_ai_logs(100);     -- ADA (AI copilot) container

-- Backend service containers
CALL <app_name>.core.get_db_logs(100);     -- PostgreSQL database
CALL <app_name>.core.get_redis_logs(100);  -- Redis cache

-- Generic procedure for any container
CALL <app_name>.core.get_container_logs('core.openbb_app', 'api', 100);
CALL <app_name>.core.get_container_logs('core.openbb_backend', 'db', 100);
```

---

## 8. Grant Your Data to the App (read-only)

By default, the app cannot see your data. As an admin, grant the APPLICATION read-only access to the databases/schemas/tables you want the app to expose in its UI.

> Replace `<app_name>` with your installed application name (e.g., `openbb_native_app`), and adjust database/schema names to your environment.

### Grant at the database level (all schemas)

Read-only across an entire database, including future objects.

```sql
-- Database-wide read
GRANT CALLER USAGE ON DATABASE <database_name> TO APPLICATION <app_name>;
GRANT CALLER USAGE ON SCHEMA <database_name>.<schema_name> TO APPLICATION <app_name>;

-- For ALL TABLES/VIEWS, use INHERITED CALLER
GRANT INHERITED CALLER SELECT ON ALL TABLES IN SCHEMA <database_name>.<schema_name> TO APPLICATION <app_name>;
GRANT INHERITED CALLER SELECT ON ALL VIEWS IN SCHEMA <database_name>.<schema_name> TO APPLICATION <app_name>;

-- If you have procedures to bring in
GRANT INHERITED CALLER USAGE ON ALL PROCEDURES IN SCHEMA <database_name>.<schema_name> TO APPLICATION <app_name>;
```

**Example (for a shared database):**

```sql
-- Grant Shared Database Access
GRANT CALLER USAGE ON DATABASE GLOBAL_WEATHER__CLIMATE_DATA_FOR_BI TO APPLICATION <app_name>;
GRANT INHERITED CALLER USAGE ON ALL SCHEMAS IN DATABASE GLOBAL_WEATHER__CLIMATE_DATA_FOR_BI TO APPLICATION <app_name>;
GRANT INHERITED CALLER SELECT ON ALL VIEWS IN DATABASE GLOBAL_WEATHER__CLIMATE_DATA_FOR_BI TO APPLICATION <app_name>;
GRANT INHERITED CALLER SELECT ON ALL TABLES IN DATABASE GLOBAL_WEATHER__CLIMATE_DATA_FOR_BI TO APPLICATION <app_name>;
GRANT IMPORTED PRIVILEGES ON ALL TABLES IN DATABASE GLOBAL_WEATHER__CLIMATE_DATA_FOR_BI TO ROLE ANALYTICS_USER;
GRANT IMPORTED PRIVILEGES ON ALL VIEWS IN DATABASE GLOBAL_WEATHER__CLIMATE_DATA_FOR_BI TO ROLE ANALYTICS_USER;
```

---

## Quick Reference

| Procedure | Description |
|-----------|-------------|
| `get_service_status()` | Check if services are running |
| `start_openbb_service()` | Start all services |
| `stop_openbb_service()` | Stop all services (safe) |
| `restart_openbb_service()` | Restart all services |
| `suspend_backend_service()` | Suspend backend (preserves data) |
| `resume_backend_service()` | Resume backend from suspend |
| `stop_app_service()` | Stop app service only |
| `set_app_pool_size(min, max)` | Adjust app pool nodes (max 5) |
| `set_app_service_scale(min, max)` | Adjust app instances (max 8) |
| `get_api_logs(n)` | View API container logs |
| `get_ai_logs(n)` | View ADA container logs |
| `get_db_logs(n)` | View Postgres logs |
| `get_redis_logs(n)` | View Redis logs |
