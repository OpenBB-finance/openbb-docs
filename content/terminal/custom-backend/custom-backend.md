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

## Introduction to Custom Backend

The custom backend feature in OpenBB Terminal Pro allows users to integrate their own data sources and APIs into the platform. A custom backend is an API that returns JSON data with a standardized JSON configuration. This enables the creation of personalized widgets that can display data from any API, whether hosted internally or externally. By using a standardized JSON configuration, users can expose their data as widgets in OpenBB. The custom backend allows users to take full advantage of the OpenBB Copilot and our interface.

{/* TODO - make new video
import TutorialVideo from '@site/src/components/General/TutorialVideo.tsx';

<TutorialVideo
  youtubeLink="https://www.youtube.com/embed/bkhtgp48MZc?si=kvrq1HgtUIFmhgyX"
  videoLegend="Short introduction to integrating your own backend"
/>
*/}

## Design and implement your API

You can build your API using any language and framework of your choice.  The only requirements are that there must be endpoints returning data in JSON format, and that CORS is supported for OpenBB domains.

:::note
Guidelines for JSON Format:

- The JSON data should be in a flat structure, meaning that there should be no nested dictionaries or arrays within the individual objects unless you specify the dataKey in your `widgets.json` file.
- Each object should contain key-value pairs where the values are simple data types (e.g., strings, numbers, booleans).
- Avoid nesting other objects or arrays inside any of the values.

The JSON should resemble the following structure:

<details>
<summary mdxType="summary">Example JSON</summary>

```json
[
      {
        "ticker": "AAPL",
        "name": "Apple Inc.",
        "price": 150.5,
        "marketCap": 2500000000,
        "change": 1.25
      },
      {
        "ticker": "GOOGL",
        "name": "Alphabet Inc.",
        "price": 2800.75,
        "marketCap": 1900000000,
        "change": -0.75
      },
      {
        "ticker": "MSFT",
        "name": "Microsoft Corporation",
        "price": 300.25,
        "marketCap": 220000000,
        "change": 0.98
      }
]
```

</details>

:::

## Create your own custom backend

You can create your own backend by following these steps:

1. **Develop an API to return JSON data**: This can be done in any language. In our examples, we will use Python and FastAPI.
2. 
Each backend will start with the same setup and structure as below.  We enable CORS for OpenBB domains so that the backend can be accessed from the application, and we serve the `widgets.json` file from the backend.

<details>

<summary mdxType="summary">Click to view FastAPI setup</summary>

```python
import json
from pathlib import Path
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse

app = FastAPI()

# Define allowed origins for CORS
origins = [
    "https://pro.openbb.co",
    "https://excel.openbb.co"
]

# Add CORS middleware to the app
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

ROOT_PATH = Path(__file__).parent.resolve()

@app.get("/")
def read_root():
    """Root endpoint providing basic information."""
    return {"Info": "Full example for OpenBB Custom Backend"}

@app.get("/widgets.json")
def get_widgets():
    """Serve the widgets configuration file for the OpenBB Custom Backend."""
    return JSONResponse(
        content=json.load((ROOT_PATH / "widgets.json").open())
    )

```

</details>

2. **Create widgets.json file**: This file is your main configuration and defines widget properties such as name, description, category, endpoint, type of widget, and other information. Each widget will be defined in this file. To view a sample `widgets.json` file and learn more about what you can do check out the [widgets.json docs](/terminal/custom-backend/widgets.json).

An example structure in your backend might look like below.

```text
  backend/
  ├── main.py
  └── widgets.json
```

1. **Create endpoints for each widgets.json entry**: Your `widgets.json` file lets the frontend know how to display your data, but you need to build out the endpoint to supply the data for each widget. Following the structure above, these endpoints would live in the `main.py` file.

2. **Connect to your API**: Once your API is up and running, you can add the custom backend using the OpenBB Terminal Pro interface. You will need to input your main endpoint and the system will read the `/widgets.json` endpoint to fetch all the necessary settings and configurations. Once connected, all the widgets will appear in your search and ready to be added to any dashboard.

<div style={{display: 'flex', justifyContent: 'center'}}>
  <img className="pro-border-gradient" width="600" alt="folder" src="https://openbb-web-assets.s3.amazonaws.com/docs/launch_oct_24/backend.png" />
</div>


## Widget Types

OpenBB Terminal Pro supports various ways to visualize data through widgets. Each method offers unique features and can be configured to suit different data presentation needs. Below are the different visualization methods available:

1. **Table Widget**:
   - Provides a structured view of data in rows and columns.
   - Ideal for displaying detailed datasets.
   - Can be configured to display charts with Native Charting.
   - [Learn more about Table Widgets](Widgets/table/table.md)

<img className="pro-border-gradient" width="600" alt="table" src="https://openbb-assets.s3.us-east-1.amazonaws.com/docs/pro/simple-table.png" />


2. **Chart Widgets**:
   - Offers graphical representation of data.
   - Supports Plotly charts and can be configured to display different types of charts. Support for more charting frameworks will be coming soon.
   - [Learn more about Chart Widgets](Widgets/chart.md)

<img className="pro-border-gradient" width="600" alt="chart" src="https://openbb-assets.s3.us-east-1.amazonaws.com/docs/pro/plotly-chart.png" />

3. **Markdown Widget**:
   - Displays formatted text and images.
   - Can be used to display markdown, txt, and docx files.
   - [Learn more about Markdown Widgets](Widgets/markdown.md)

<img className="pro-border-gradient" width="600" alt="markdown" src="https://openbb-assets.s3.us-east-1.amazonaws.com/docs/pro/markdown-widget.png" />

4. **Metric Widget**:
   - Displays a single value or metric.
   - Useful for highlighting key performance indicators.
   - [Learn more about Metric Widgets](Widgets/metric.md)

<img className="pro-border-gradient" width="600" alt="metric" src="https://openbb-assets.s3.us-east-1.amazonaws.com/docs/pro/metric-widget.png" />



### Examples

Our team has created several examples that you can use to quickly get started with Python and FastAPI. For more information, check out [this open source repository](https://github.com/OpenBB-finance/backend-for-terminal-pro/tree/main).


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