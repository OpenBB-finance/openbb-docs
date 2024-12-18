---
title: Custom Backend
sidebar_position: 14
description: Learn how to integrate your own backend with OpenBB Terminal Pro using
  the cookie-cutter or language-agnostic API approaches, with illustrative guides
  and principles for handling widget.json files, APIs, interfaces, Python, FastAPI
  and more.
keywords:
- OpenBB cookie-cutter
- widgets.json
- OpenBB API
- Endpoint integration
- widget configuration
- Language-Agnostic API
- API implementation
- Python
- FastAPI
- Terminal Pro widgets
- Widget definitions
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="Custom backend | OpenBB Terminal Pro Docs" />

{/*
import TutorialVideo from '@site/src/components/General/TutorialVideo.tsx';

<TutorialVideo
  youtubeLink="https://www.youtube.com/embed/bkhtgp48MZc?si=kvrq1HgtUIFmhgyX"
  videoLegend="Short introduction to integrating your own backend"
/>
*/}

This is a versatile way to connect any data to the OpenBB Terminal. Whether your API is hosted internally or externally, this method provides a standardized structure that OpenBB Terminal Pro widgets can render.

1. **Design and implement your API**: Choose your preferred programming language and framework. Ensure that the API can return data in JSON format, which is required for widget integration.

:::note
Guidelines for JSON Format:

- The JSON data should be in a flat structure, meaning that there should be no nested dictionaries or arrays within the individual objects.
- Each object should contain key-value pairs where the values are simple data types (e.g., strings, numbers, booleans).
- Avoid nesting other objects or arrays inside any of the values.
The JSON should resemble the following structure:

<details>
<summary mdxType="summary">Example JSON</summary>

```json
[
  {
    "title": "To Kill a Mockingbird",
    "author": "Harper Lee",
    "year": 1960,
    "genre": "Fiction"
  },
  {
    "title": "1984",
    "author": "George Orwell",
    "year": 1949,
    "genre": "Dystopian"
  },
  {
    "title": "The Great Gatsby",
    "author": "F. Scott Fitzgerald",
    "year": 1925,
    "genre": "Classic"
  }
]
```
</details>

:::



2. **Create widgets.json file**: This file is your main configuration and defines widget properties such as name, description, category, endpoint, and other information. Each widget will be defined in this file. To view a sample `widgets.json` file and learn more about what you can do check out the [widgets.json docs](/terminal/custom-backend/widgets.json).

An example structure in your backend might look like below.

```
  backend/
  ├── main.py
  └── widgets.json
```

3. **Create endpoints for each widgets.json entry**: Your `widgets.json` file lets OpenBB Terminal know how to display the data but you need to build out the endpoint to supply the data for each widget. Following the structure above, these endpoints would live in the `main.py` file.

4. **Connect to your API**: Once your API is up and running, you can add the custom backend using the OpenBB Terminal Pro interface. You will need to input your main endpoint and the system will read the `/widgets.json` endpoint to fetch all the necessary settings and configurations. Once connected, all the widgets will appear in your search and ready to be added to any dashboard.

<div style={{display: 'flex', justifyContent: 'center'}}>
  <img className="pro-border-gradient" width="600" alt="folder" src="https://openbb-web-assets.s3.amazonaws.com/docs/launch_oct_24/backend.png" />
</div>

### Examples

Our team has created several examples that you can use to quickly get started with Python and FastAPI. For more information, check [this open source repository](https://github.com/OpenBB-finance/backend-for-terminal-pro/tree/main) for examples.


## Frequently Asked Questions

<details>
<summary mdxType="summary">Q: I'm using Safari/Brave and I can't connect to my backend</summary>

A: OpenBB Platform API Over HTTPS

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