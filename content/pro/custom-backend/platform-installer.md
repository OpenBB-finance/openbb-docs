---
title: OpenBB Platform Installer
sidebar_position: 14
description: Learn how to integrate the OpenBB Platform Installer and leverage the its power on the OpenBB Terminal, making available hundreds of new widgets.
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

<HeadTitle title="OpenBB Platform Installer | OpenBB Terminal Pro Docs" />

This section will highlight how to access the OpenBB Platform installer and how to leverage widget filtering to enhance your efficency while using the OpenBB Terminal.

The OpenBB Platform Installer can be found at https://my.openbb.co/app/platform/downloads.

![image-d07ef45c946c1daf95e8619d6a49fb18](https://github.com/user-attachments/assets/f161c50a-93a4-45db-a504-9c9c45f59082)

> Learn everything about the OpenBB Platform by reading its docs: https://docs.openbb.co/platform

After downloading the adequate installer and proceeding with installation, you'll find the `/OpenBB/Settings` folder that has been created inside the installattion directory picked during the installation process.

> Note that the `/OpenBB/Settings` it's actually a shortcut that will lead you to the `~/.openbb_platform` and that's the correct place to place your configuration file.

This folder should be the destination of your widget setttings file (`widget_settings.json`), which will serve as configuration file to your custom backend (A.K.A OpenBB Platform Installer).

You absolutly don't need to edit this configuration file manually, instead, you should do it on the OpenBB Hub: https://docs.openbb.co/platform/widgets. This will ensure that the configuration file is correctly built and there are no unexpected errors while using your custom backend (your changes will also be persisted on the OpenBB Hub!).

![image-1-0e1a24b94a7c6ea08d41e30b53f8dc57](https://github.com/user-attachments/assets/c978c28d-e53a-4f83-9488-dcb524572b86)


When you're happy about the choices on the OpenBB Platform widgets you're going to make available on the OpenBB Terminal, simply hit the **Download** button.

After the download finishes, move the `widget_settings.json` into the `/OpenBB/Settings` folder.

All you need to do now is to run the Platform API by double clicking `OpenBB/openbb-api`; doing so will prompt you asking for you Personal Access Token (PAT).

You can get your Personal Access Token (PAT) from: https://my.openbb.co/app/platform/pat.

![image-2-e88086c0317861808057d4dcbd47f93d](https://github.com/user-attachments/assets/baba4613-8253-431c-bce2-f9764533de41)

> Using your PAT will enable all the provider keys you have previously configured on the OpenBB Hub (https://my.openbb.co/app/platform/credentials), providing a convenient way of accesing all the desired providers in a blink.

After (optionaly) inserting your PAT, your OpenBB Platform API is up and running!

![image-3-89f316d9153aa91e108cebf5cf718609](https://github.com/user-attachments/assets/5015a675-7953-4807-98d2-94cdc041fd64)


In order to access the custom backend you just set up, you'll need to access the [Data Connectors](https://pro.openbb.dev/app/data-connectors) section on the OpenBB Terminal. Then follow the steps: Add Data > Custom Backend > * Fill the Form * > Test > Add

![image-4-bed5df262173615690d113584755b08a](https://github.com/user-attachments/assets/c3ee50ff-114c-4718-8471-ef8070356692)
![image-5-dde3ab955aed6e9e48f63a3f6f09c345](https://github.com/user-attachments/assets/9a05d247-8ef6-4279-9d3e-4b12124c51a3)
![image-6-89f6dc05ff8f0a96f7488b9417d08679](https://github.com/user-attachments/assets/d7b89576-ed57-4681-98a7-eedf0d43e0c8)

> Take into consideration that, if you change the default configurations on the OpenBB Platform settings, the URL (http://127.0.0.1:6900) might differ.

Congratulations! You are now ready to access 350+ data widgets from your OpenBB Terminal. For free.
