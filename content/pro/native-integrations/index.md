---
title: Native Integrations
sidebar_position: 0
description: Learn about common workflows that you can do with the OpenBB Terminal Pro.
keywords:
- workflows
- AI
- Chart
- Tutorials
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="Native Integrations | OpenBB Terminal Pro Docs" />

import NewReferenceCard from "@site/src/components/General/NewReferenceCard";

The OpenBB native integrations allows you to connect to Snowflake, MySQL, or SQLite databases directly. You can run any query against your database directly from the Terminal Pro.

1. **Install our Client**: Download our free client for [Mac](https://openbb-installers.s3.amazonaws.com/data_connector_0.0.2.dmg) or [Windows](https://openbb-installers.s3.amazonaws.com/OpenBB+Data+Connector_0.0.2_x64_en-US.msi) to get started.

2. **Run the Client**: Once installed, Simply open the app and type in the port you would like to use. If you are unsure of a good port, feel free to select `Recommend Port`.

3. **Connect inside the Terminal Pro**: Once your client is up and running, click [here](https://pro.openbb.co/app/data-connectors) to enable the connectors - it will ask you for the URL the port is running on - you can find that on the Data Connector Application at the top. Now feel free to enter login credentials for any Snowflake, MySQL, or SQLite database and begin to analyze your data inside of our terminal.

<ul className="grid grid-cols-1 gap-4 -ml-6">

<NewReferenceCard
    title="Snowflake"
    description=""
    url="/pro/native-integrations/snowflake"
/>

</ul>
