---
title: Open Source Platform Integration
sidebar_position: 15
description: Learn how to integrate the OpenBB Platform data to the OpenBB Terminal
keywords:
- widgets.json
- OpenBB API
- Endpoint integration
- widget configuration
- Terminal Pro widgets
- OpenBB Platform Installer
- Widget filtering
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="Open source platform integration | OpenBB Terminal Pro Docs" />

This section will highlight how you can run the [OpenBB Platform](https://github.com/OpenBB-finance/OpenBB) locally and integrate 350+ different datasets into the OpenBB Terminal in under 5 minutes.

If you want to learn more about the open source platform, check [our documentation](https://docs.openbb.co/platform).

Here's a video that you can use to follow step-by-step instructions.

<div style={{position: 'relative', paddingBottom: '56.25%', height: '0', overflow: 'hidden', maxWidth: '100%'}}>
    <iframe 
    style={{position: 'absolute', top: '0', left: '0', width: '100%', height: '100%', display: 'block', margin: '0 auto'}} 
    src="https://www.youtube.com/embed/DFz1WQJbT6c?si=_K3amHb8p4fkTKaj" 
    title="YouTube video player" 
    frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
    referrerpolicy="strict-origin-when-cross-origin" 
    allowfullscreen></iframe>
</div>

## Step by step

The steps are also described below:

1. Download the OpenBB Platform Installer which can be found [here](https://my.openbb.co/app/platform/downloads).

![image-d07ef45c946c1daf95e8619d6a49fb18](https://github.com/user-attachments/assets/f161c50a-93a4-45db-a504-9c9c45f59082)

Select the right installer based on your OS and architecture. Then install it.

2. Once installation is complete, find the `OpenBB` folder that has been created in the installation directory selected. Double click on `OpenBB/openbb-api`.

![image-2-e88086c0317861808057d4dcbd47f93d](https://github.com/user-attachments/assets/baba4613-8253-431c-bce2-f9764533de41)

3. A terminal popup should be initiated, and you will be prompted to insert your personal access token (PAT), which can be retrieved from [here](https://my.openbb.co/app/platform/pat).

![image](https://github.com/user-attachments/assets/43ac8f94-a0ce-4c38-9589-94d03322cfd7)

Note: This assumes that the user has spent time setting up their API keys [here](https://my.openbb.co/app/platform/credentials).

![image](https://github.com/user-attachments/assets/f3e565c7-d343-421a-bfee-6be7acb79042)

4. The OpenBB Platform API should now be up and running.

![image-3-89f316d9153aa91e108cebf5cf718609](https://github.com/user-attachments/assets/5015a675-7953-4807-98d2-94cdc041fd64)

5. Finally, you simply need to set up the custom backend on Terminal Pro.

:::note
If you are using Brave/Safari you will need an HTTPS connection - see how [here](https://docs.openbb.co/pro/custom-backend#frequently-asked-questions)
:::

<!-- TODO - We cant do this yet - issue with localhost in name - You can do so by clicking on this [link](http://pro.openbb.co/app/data-connectors?tab=my-data&modal=data-connectors&dcTab=backend&name=OpenBB%20Platform&url=http://localhost:6900). -->

![image-4-bed5df262173615690d113584755b08a](https://github.com/user-attachments/assets/c3ee50ff-114c-4718-8471-ef8070356692)

![img](https://github.com/user-attachments/assets/770e6d6c-6cd7-4073-a874-af0850f404cc)

6. Voila. You are now ready to access 350+ data widgets from your OpenBB Terminal. For free.

![image](https://github.com/user-attachments/assets/a48eb08c-6536-43c6-a055-0e46082c14c8)

## Advanced - Access this data on mobile

This section will use `ngrok` as the proxy between our platform API endpoints running locally and the internet. You can do this in ngrok free plan.

1. Install ngrok by following [these](https://ngrok.com/docs/getting-started/) instructions.

2. Open a terminal and run `ngrok http 6900`. This assume that the open source platform API is running on http://localhost:6900.

If that runs correctly, you'll get an output similar to the following.

![image](https://github.com/user-attachments/assets/e938b28b-359b-41e7-b822-6fc400e36819)

Note the **Forwarding** row. That will contain a public URL that has access to your endpoint.

3. Update your localhost endpoint with the public URL provided by ngrok.

![image](https://github.com/user-attachments/assets/1ceed65b-3601-4a7c-8fd5-ee79cdde3917)

4. Add a request header as authentication.

Click on "Add Authentication" button, and add the following:

Key: ngrok-skip-browser-warning
Value: x
Location: Header

You have to include the request header `ngrok-skip-browser-warning` with any value in the request header, to bypass the Ngrok Browser Warning.

![image](https://github.com/user-attachments/assets/03968960-e09a-46d8-98b9-718b6ae1b0db)

You are now ready to access this data on your phone, just ensure that you keep running the API endpoint and ngrok locally.

## Advanced - Filter widgets

If you run the steps above, you will have access to a dozen different data vendors and hundreds of different widgets. However, some of these may not work because you haven't set up the API key for the data vendor or you may not be interested to bring some of those widgets into your OpenBB Terminal.

This section will explore how you can filter the platform integration datasets that are made available on the Terminal.

1. Go to the [widgets filter page](https://my.openbb.co/app/platform/widgets) where you can set the data vendors you are interested and also select the widgets within. Once you are happy you can download the `widget_settings.json` configuration file by clicking on **Download**.

![image-1-0e1a24b94a7c6ea08d41e30b53f8dc57](https://github.com/user-attachments/assets/c978c28d-e53a-4f83-9488-dcb524572b86)

2. In the `OpenBB` folder that has been created when you installed the Platform. There must be a `Settings` folder within. This folder should be the destination of your widget setttings file (`widget_settings.json`), which will serve as the configuration file for your custom backend.

Now, similarly to the previous section, you should:
- Run `OpenBB/openbb-api`
- Set your PAT
- Refresh the connection inside the ["My Data"](https://pro.openbb.co/app/data-connectors) tab or follow instructions above to add again.

<!-- (http://pro.openbb.co/app/data-connectors?tab=my-data&modal=data-connectors&dcTab=backend&name=OpenBB%20Platform&url=http://localhost:6900) -->

> Take into consideration that, if you change the default configurations on the OpenBB Platform settings, the URL (http://127.0.0.1:6900) might differ.

![image](https://github.com/user-attachments/assets/692e8da3-57fb-4cff-b566-adf8d5539530)
