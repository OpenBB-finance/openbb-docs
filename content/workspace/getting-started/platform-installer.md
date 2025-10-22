---
title: OpenBB Python Package
sidebar_position: 7
description: Learn how to integrate the Open Data Platform data to OpenBB Workspace
keywords:
- widgets.json
- Open Data Platform API
- Endpoint integration
- widget configuration
- Workspace widgets
- Open Data Platform Installer
- ODP Desktop App
- Widget filtering
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="Open source platform integration | OpenBB Workspace Docs" />

This section will highlight how you can run the open-source [ODP Python Package](https://github.com/OpenBB-finance/OpenBB) locally and integrate 350+ different datasets into the OpenBB Workspace in under 5 minutes.

If you want to learn more about the open source ecosystem, check [our documentation](https://docs.openbb.co/python).

## Step by step

Follow the quick start steps [here](/desktop#quick-start).

:::note
If you are using Brave/Safari you will need an HTTPS connection - see the Self-Signed Certificate section of the ODP Desktop [documentation](/desktop/backends) for steps to run your server over HTTPS.
:::

These are some apps available out of the box:

<div style={{display: 'flex', justifyContent: 'center'}}>
  <img
    className="pro-border-gradient"
    alt="Table Widget Example"
    src="https://openbb-cms.directus.app/assets/9d5f9dba-1603-489c-ad47-ae0f9b7bd0da.png"
    width="800"
  />
</div>

## Advanced - Access this data on mobile

This section will use `ngrok` as the proxy between our platform API endpoints running locally and the internet. You can do this in ngrok free plan.

1. Install ngrok by following [these](https://ngrok.com/docs/getting-started/) instructions.

2. Open a terminal and run `ngrok http 6900`. This assume that the open source platform API is running on [`http://localhost:6900`](http://localhost:6900).

   If that runs correctly, you'll get an output similar to the following.

   <div style={{display: 'flex', justifyContent: 'center'}}>
     <img
       className="pro-border-gradient"
       alt="ngrok"
       src="https://github.com/user-attachments/assets/e938b28b-359b-41e7-b822-6fc400e36819"
       width="1000"
     />
   </div>

   Note the **Forwarding** row. That will contain a public URL that has access to your endpoint.

3. Update your localhost endpoint with the public URL provided by ngrok.

   <div style={{display: 'flex', justifyContent: 'center'}}>
     <img
       className="pro-border-gradient"
       alt="ngrok-2"
       src="https://github.com/user-attachments/assets/1ceed65b-3601-4a7c-8fd5-ee79cdde3917"
       width="1000"
     />
   </div>

4. Add a request header as authentication.

   Click on "Add Authentication" button, and add the following:

   Key: ngrok-skip-browser-warning
   Value: x
   Location: Header

   You have to include the request header `ngrok-skip-browser-warning` with any value in the request header, to bypass the Ngrok Browser Warning.

   <div style={{display: 'flex', justifyContent: 'center'}}>
     <img
       className="pro-border-gradient"
       alt="ngrok-3"
       src="https://github.com/user-attachments/assets/03968960-e09a-46d8-98b9-718b6ae1b0db"
       width="1000"
     />
   </div>

   You are now ready to access this data on your phone, just ensure that you keep running the API endpoint and ngrok locally.

## Advanced - Filter widgets

If you run the steps above, you will have access to a dozen different data vendors and hundreds of different widgets. However, some of these may not work because you haven't set up the API key for the data vendor or you may not be interested to bring some of those widgets into your OpenBB Workspace.

This section will explore how you can filter the platform integration datasets that are made available on OpenBB.

1. Go to the [widgets filter page](https://my.openbb.co/app/platform/widgets) where you can set the data vendors you are interested and also select the widgets within. Once you are happy you can download the `widget_settings.json` configuration file by clicking on **Download**.

   <div style={{display: 'flex', justifyContent: 'center'}}>
     <img
       className="pro-border-gradient"
       alt="widgets"
       src="https://github.com/user-attachments/assets/c978c28d-e53a-4f83-9488-dcb524572b86"
       width="1000"
     />
   </div>

2. In the `OpenBB` folder that has been created when you installed the Platform. There must be a `Settings` folder within. This folder should be the destination of your widget settings file (`widget_settings.json`), which will serve as the configuration file for your custom backend.

   Now, similarly to the previous section, you should:

   - Run `OpenBB/openbb-api`
   - Set your PAT
   - Refresh the connection inside the ["Manage Backends"](https://pro.openbb.co/app) button or follow instructions above to add again.

   <!-- (http://pro.openbb.co/app/data-connectors?tab=my-data&modal=data-connectors&dcTab=backend&name=OpenBB%20Platform&url=http://localhost:6900) -->

   > Take into consideration that, if you change the default configurations on the OpenBB Platform settings, the URL ([`http://127.0.0.1:6900`](http://127.0.0.1:6900)) might differ.

   <div style={{display: 'flex', justifyContent: 'center'}}>
     <img
       className="pro-border-gradient"
       alt="widgets-filter"
       src="https://github.com/user-attachments/assets/692e8da3-57fb-4cff-b566-adf8d5539530"
       width="1000"
     />
   </div>
