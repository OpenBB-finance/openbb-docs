---
title: OpenBB Platform
sidebar_position: 33
description: Learn how to integrate the OpenBB Platform data to OpenBB Workspace
keywords:
- widgets.json
- OpenBB API
- Endpoint integration
- widget configuration
- Workspace widgets
- OpenBB Platform Installer
- Widget filtering
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="Open source platform integration | OpenBB Workspace Docs" />

This section will highlight how you can run the [OpenBB Platform](https://github.com/OpenBB-finance/OpenBB) locally and integrate 350+ different datasets into the OpenBB Workspace in under 5 minutes.

If you want to learn more about the open source platform, check [our documentation](https://docs.openbb.co/platform).

Here's a video that you can use to follow step-by-step instructions.

:::warning

We've removed the "Data Connectors" tab. So instead of Data Connectors > Add Data > Custom Backend, go to Apps > Connect Backend.

:::

<div style={{position: 'relative', paddingBottom: '56.25%', height: '0', overflow: 'hidden', maxWidth: '100%'}}>
    <iframe 
    style={{position: 'absolute', top: '0', left: '0', width: '100%', height: '100%', display: 'block', margin: '0 auto'}} 
    src="https://www.youtube.com/embed/DFz1WQJbT6c?si=_K3amHb8p4fkTKaj" 
    title="YouTube video player" 
    frameBorder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
    referrerPolicy="strict-origin-when-cross-origin" 
    allowFullScreen></iframe>
</div>

## Step by step

The steps are also described below:

1. Select the right installer based on your OS and architecture.
    - [Windows](https://openbb-installers.s3.amazonaws.com/OpenBB-Platform-Windows-x86_64.exe)
    - [macOS for Apple Silicon](https://openbb-installers.s3.amazonaws.com/OpenBB-Platform-MacOSX-arm64.pkg)
    - [macOS for Intel](https://openbb-installers.s3.amazonaws.com/OpenBB-Platform-MacOSX-x86_64.pkg)

Then install it.

2. Once installation is complete, find the `OpenBB` folder that has been created in the installation directory selected. Double click on `OpenBB/openbb-api`.

:::note
Configure any data provider credentials in the [`user_settings.json`](/platform/settings/user_settings/api_keys) file before running.
:::

3. The OpenBB Platform API should now be up and running.

<img className="pro-border-gradient" width="1000" alt="OpenBB Platform API" src="https://github.com/user-attachments/assets/5015a675-7953-4807-98d2-94cdc041fd64" />

4. Finally, you simply need to set up the custom backend on OpenBB Workspace.

:::note
If you are using Brave/Safari you will need an HTTPS connection - see how [here](https://docs.openbb.co/workspace/faqs)
:::

<!-- TODO - We cant do this yet - issue with localhost in name - You can do so by clicking on this [link](http://pro.openbb.co/app/data-connectors?tab=my-data&modal=data-connectors&dcTab=backend&name=OpenBB%20Platform&url=http://localhost:6900). -->

Right click on a dashboard, then click "Add data".

<img className="pro-border-gradient" width="200" alt="Table Widget Example" src="https://openbb-cms.directus.app/assets/0c2c8866-54a8-4137-90b6-bf0db365ca6e.png" />

Then fill in the information as shown below:

<img className="pro-border-gradient" width="800" alt="Table Widget Example" src="https://openbb-cms.directus.app/assets/563aca68-1ec3-48c7-86d8-9129e0e5fd8c.png" />

Or you could also click this link to have it all filed in: https://pro.openbb.co/app?modal=connect-backend&name=OpenBB%20Platform&url=http://127.0.0.1:6900


5. Voila. You are now ready to access 300+ data widgets from OpenBB. For free.

These are some apps available out of the box:

<img className="pro-border-gradient" width="800" alt="Table Widget Example" src="https://openbb-cms.directus.app/assets/9d5f9dba-1603-489c-ad47-ae0f9b7bd0da.png" />

## Advanced - Access this data on mobile

This section will use `ngrok` as the proxy between our platform API endpoints running locally and the internet. You can do this in ngrok free plan.

1. Install ngrok by following [these](https://ngrok.com/docs/getting-started/) instructions.

2. Open a terminal and run `ngrok http 6900`. This assume that the open source platform API is running on http://localhost:6900.

If that runs correctly, you'll get an output similar to the following.

<img className="pro-border-gradient" width="1000" alt="ngrok" src="https://github.com/user-attachments/assets/e938b28b-359b-41e7-b822-6fc400e36819" />

Note the **Forwarding** row. That will contain a public URL that has access to your endpoint.

3. Update your localhost endpoint with the public URL provided by ngrok.

<img className="pro-border-gradient" width="1000" alt="ngrok-2" src="https://github.com/user-attachments/assets/1ceed65b-3601-4a7c-8fd5-ee79cdde3917" />

4. Add a request header as authentication.

Click on "Add Authentication" button, and add the following:

Key: ngrok-skip-browser-warning
Value: x
Location: Header

You have to include the request header `ngrok-skip-browser-warning` with any value in the request header, to bypass the Ngrok Browser Warning.

<img className="pro-border-gradient" width="1000" alt="ngrok-3" src="https://github.com/user-attachments/assets/03968960-e09a-46d8-98b9-718b6ae1b0db" />

You are now ready to access this data on your phone, just ensure that you keep running the API endpoint and ngrok locally.
