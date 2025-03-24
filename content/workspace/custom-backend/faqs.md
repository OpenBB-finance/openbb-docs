---
title: FAQs
sidebar_position: 16
description: Frequently asked questions about the OpenBB Terminal Pro Custom Backend.
keywords:
- FAQs
- Custom Backend
---

## Frequently Asked Questions

### General

**Q: What is the purpose of a custom backend in OpenBB Terminal Pro?**

A: A custom backend allows you to integrate your own data sources into OpenBB Terminal Pro, enabling the creation of personalized widgets, dashboards, and templates that display your data in various ways. For more details, see the [Custom Backend Overview](/content/workspace/custom-backend/custom-backend.md) section.

**Q: What technologies are required to set up a custom backend?**

A: You will need to use an API framework and a `widgets.json` file to define widget configurations. Optionally, you can use a `templates.json` file for layout configurations. Refer to the [Setup Requirements](/content/workspace/custom-backend/custom-backend.md#setup-requirements) section for more information.

### Setup and Configuration

**Q: How do I start setting up a custom backend?**

A: Follow the structure outlined in the [Getting Started with Custom Backend](/content/workspace/custom-backend/custom-backend.md#getting-started-with-custom-backend) section.

**Q: What is the `widgets.json` file, and why is it important?**

A: The `widgets.json` file is a configuration file that connects your custom backend data to the widgets displayed in OpenBB Terminal Pro. It defines widget properties such as name, description, category, endpoint, and more. See the [Widgets Configuration](/content/workspace/custom-backend/widgets-json-reference.md#widgets-configuration) section for details.

**Q: How do I add Authorization to my custom backend?**

A: We provide an the ability when adding a custom backend to pass a custom Header or Query Parameter to your backend on every request. You can then verify this in your backend and either allow or deny access to the request.

<details>
<summary mdxType="summary">Authorization</summary>

<div style={{display: 'flex', justifyContent: 'left'}}>
  <img className="pro-border-gradient" width="600" alt="folder" src="https://openbb-assets.s3.us-east-1.amazonaws.com/docs/pro/authorization.png" />
</div>
</details>


### Widgets and Templates

**Q: How can I create a new widget?**

A: Define the widget in the `widgets.json` file with necessary properties like name, description, category, and endpoint. Then, create an endpoint in your FastAPI application to serve the data for this widget. Check the [Creating Widgets](/content/workspace/custom-backend/widgets-json-reference.md#creating-widgets) section for guidance.

**Q: Can I customize the appearance of widgets?**

A: Yes, you can customize widget appearance using properties in the `widgets.json` file, such as `gridData` for size and `columnsDefs` for table widgets. More information is available in the [Customizing Widgets](/content/workspace/custom-backend/widgets-json-reference.md) section.

**Q: What are templates, and how do I use them?**

A: Templates allow you to define and manage the layout and behavior of widgets on your dashboard. You can create a `templates.json` file to structure these templates and serve them via a FastAPI endpoint. See the [Custom Templates](/content/workspace/custom-backend/advanced-controls/templates.md) section for more details.

**Q: How do I implement dynamic dropdown options in widgets?**

A: Use the `type: "endpoint"` in your parameter configuration and specify an `optionsEndpoint` that returns the available options. See the [Grouping and Parameters](/content/workspace/custom-backend/advanced-controls/grouping-and-parameters.md#Passing-custom-dropdown-options) section for implementation details.

**Q: Can I group widgets to share parameters?**

A: Yes, widgets can be grouped by using the same parameter configuration. This allows a single parameter selection to update all related widgets. More information is available in the [Grouping Widgets](/content/workspace/custom-backend/advanced-controls/grouping-and-parameters.md#Grouping) section.

### Troubleshooting

**Q: I can't connect to my backend using Safari/Brave. What should I do?**

A: Ensure your API is running over HTTPS. You may need to create a self-signed certificate and configure your browser to trust it.

<details>
<summary mdxType="summary">Safari/Brave HTTPS Setup</summary>

OpenBB Platform API Over HTTPS

To run the API over the HTTPS protocol, you must first create a self-signed certificate and the associated key. After steps 1 & 2 above, you can generate the files by entering this to the command line:

```sh
openssl req -x509 -days 3650 -out localhost.crt -keyout localhost.key   -newkey rsa:4096 -nodes -sha256   -subj '/CN=localhost' -extensions EXT -config <( \
   printf "[dn]\nCN=localhost\n[req]\ndistinguished_name = dn\n[EXT]\nsubjectAltName=DNS:localhost\nkeyUsage=digitalSignature\nextendedKeyUsage=serverAuth")
```

Two files will be created, in the current working directory, that are passed as keyword arguments to the `openbb-api` entry point.

```sh
openbb-api --ssl_keyfile localhost.key --ssl_certfile localhost.crt
```

**Note**: Adjust the command to include the full path to the file if the current working directory is not where they are located.


The certificate - `localhost.crt` - will need to be added to system's trust store. The process for this will depend on the operating system and the user account privilege.

A quick solution is to visit the server's URL, show the details of the warning, and choose to continue anyways.

Contact the system administrator if you are using a work device and require additional permissions to complete the configuration.

![This Connection Is Not Private](https://in.norton.com/content/dam/blogs/images/norton/am/this_connection_not_is_private.png)

</details>

**Q: My widget data is not refreshing as expected. What could be wrong?**

A: Check the `refetchInterval` and `staleTime` settings in your `widgets.json` file. Ensure they are set appropriately for your data's update frequency. Refer to the [Widget Settings](/content/workspace/custom-backend/advanced-controls/widget-settings.md#Data-Refresh-Settings) section for more information. Or you have set the `runButton` to `true` in the `widgets.json` file which doesn't refresh the data until you click on it. [Run Button](/content/workspace/custom-backend/advanced-controls/widget-settings.md#Run-Button)