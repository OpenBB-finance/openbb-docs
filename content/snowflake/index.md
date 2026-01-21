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

After installing the app, you must bind a warehouse reference for the app to function properly.

**What the warehouse is used for:**

- Executing Python notebook code via the `app_execute_py()` procedure
- Running analytical queries from within the OpenBB UI
- Backend operations that require compute resources

**How to bind the warehouse (required):**

```sql
GRANT USAGE ON WAREHOUSE SYSADMIN_X_SMALL TO APPLICATION openbb_native_app;
GRANT CALLER USAGE ON WAREHOUSE SYSADMIN_X_SMALL TO APPLICATION openbb_native_app;
```

**Choosing a warehouse:**

- Select a warehouse with appropriate size for your workload (X-Small to start is usually fine)
- Ensure your users have USAGE privilege on the selected warehouse
- The warehouse binding is permanent for this app installation (but can be changed)

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

GRANT DATABASE ROLE SNOWFLAKE.CORTEX_USER TO APPLICATION openbb_native_app;
GRANT DATABASE ROLE SNOWFLAKE.CORTEX_AGENT_USER TO APPLICATION openbb_native_app;
```

**Notes:**

- The `ALTER ACCOUNT` command is required to enable Snowflake Cortex Agent functionality across regions
- These grants require the `IMPORTED PRIVILEGES ON SNOWFLAKE DB` privilege (already declared in the app manifest)
- These commands only need to be run once per account

---

## 3. Map App Roles to Your Account Roles

The app defines two application roles:

- **`app_user`** → run the app and access the UI
- **`app_admin`** → manage the service (start/stop/monitor)

As an account admin, map these roles to your own roles:

```sql
-- Example: grant app roles to a role named OPENBB_TESTERS
CREATE ROLE IF NOT EXISTS OPENBB_TESTERS;

GRANT APPLICATION ROLE <app_name>.app_user  TO ROLE OPENBB_TESTERS;
GRANT APPLICATION ROLE <app_name>.app_admin TO ROLE OPENBB_TESTERS;

-- Assign that role to a user
GRANT ROLE OPENBB_TESTERS TO USER <your_username>;
```

---

## 4. Automatic Service Start

The OpenBB service starts **automatically** after installation completes.

The app uses Snowflake's lifecycle callback system to automatically:

- Create the compute pool
- Start the container services

**The service starts automatically when:**

- The app is first installed
- A new version or patch is deployed
- The app is upgraded

**Check service status:**

```sql
CALL <app_name>.v1.get_service_status();
```

**Example:**

```sql
CALL openbb_native_app.v1.get_service_status();
```

**Note:** The service may take 2-3 minutes to fully start after installation.

### Manual Service Control (Optional)

If you need to manually control the service, these procedures are available to admins:

```sql
-- Start/restart the service (usually not needed - automatic on install/upgrade)
CALL <app_name>.core.start_openbb_service();

-- Stop the service
CALL <app_name>.core.stop_openbb_service();

-- Restart the service (pulls latest container images)
CALL <app_name>.core.restart_openbb_service();
```

### Viewing Container Logs (Troubleshooting)

Admins can view logs from each container to troubleshoot issues:

```sql
-- Get last 100 lines from API container
CALL <app_name>.core.get_api_logs(100);

-- Get last 100 lines from ADA (AI copilot) container
CALL <app_name>.core.get_ai_logs(100);

-- Get last 100 lines from database container
CALL <app_name>.core.get_db_logs(100);

-- Get last 100 lines from Redis container
CALL <app_name>.core.get_redis_logs(100);

-- Or use the generic procedure for any container
CALL <app_name>.core.get_container_logs('container_name', 100);
```

**Example:**

```sql
-- View API logs
CALL openbb_native_app.core.get_api_logs(500);

-- View ADA logs
CALL openbb_native_app.core.get_ai_logs(500);
```

## 5. Grant Your Data to the App (read-only)

By default, the app cannot see your data. As an admin, grant the APPLICATION read-only access to the databases/schemas/tables you want the app to expose in its UI.

> Replace `<app_name>` with your installed application name (e.g., `openbb_native_app`), and adjust database/schema names to your environment.

**Note:** The warehouse was already configured during installation, so you don't need to grant warehouse access separately.

### Option A — Grant at the database level (all schemas)

Read-only across an entire database, including future objects.

```sql
-- Database-wide read
GRANT CALLER USAGE ON DATABASE SEC_DEMO TO APPLICATION openbb_native_app;
GRANT CALLER USAGE ON SCHEMA SEC_DEMO.SEC_DEMO TO APPLICATION openbb_native_app;

-- For ALL TABLES/VIEWS, use INHERITED CALLER
GRANT INHERITED CALLER SELECT ON ALL TABLES IN SCHEMA SEC_DEMO.SEC_DEMO TO APPLICATION openbb_native_app;
GRANT INHERITED CALLER SELECT ON ALL VIEWS IN SCHEMA SEC_DEMO.SEC_DEMO TO APPLICATION openbb_native_app;
-- If you have procedures to bring in
GRANT INHERITED CALLER USAGE ON ALL PROCEDURES IN SCHEMA SEC_DEMO.SEC_DEMO TO APPLICATION openbb_native_app;
```

```sql
-- Grant Shared Database Access
GRANT CALLER USAGE ON DATABASE GLOBAL_WEATHER__CLIMATE_DATA_FOR_BI TO APPLICATION openbb_native_app;
GRANT INHERITED CALLER USAGE ON ALL SCHEMAS IN DATABASE GLOBAL_WEATHER__CLIMATE_DATA_FOR_BI TO APPLICATION openbb_native_app;
GRANT INHERITED CALLER SELECT ON ALL VIEWS IN DATABASE GLOBAL_WEATHER__CLIMATE_DATA_FOR_BI TO APPLICATION openbb_native_app;
GRANT INHERITED CALLER SELECT ON ALL TABLES IN DATABASE GLOBAL_WEATHER__CLIMATE_DATA_FOR_BI TO APPLICATION openbb_native_app;
```
