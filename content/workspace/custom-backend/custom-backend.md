---
title: Custom Backend
sidebar_position: 14
description: Learn how to integrate your own backend with OpenBB Workspace using
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
- Workspace widgets
- Widget definitions
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="Custom backend | OpenBB Workspace Docs" />

## Introduction to Custom Backend

The custom backend feature in OpenBB Workspace allows users to integrate their own data sources and APIs into the platform. A custom backend is an API that returns JSON data with a standardized JSON configuration. This enables the creation of personalized widgets that can display data from any API. The custom backend allows users to take full advantage of the OpenBB Copilot and our interface.

import TutorialVideo from '@site/src/components/General/TutorialVideo.tsx';

<TutorialVideo
  youtubeLink="https://www.youtube.com/embed/BbAGb-fciIc?si=IM_WJ9miEaqFKJAN"
  videoLegend="Short introduction to integrating your own backend"
/>

## Design and implement your API

You can build your API using any language and framework of your choice.  The only requirements are that there must be endpoints returning data in JSON format, and that CORS is supported for OpenBB domains.

:::note
Guidelines for JSON Format in Tables:

- The JSON data for tables should be in a flat structure, meaning that there should be no nested dictionaries or arrays within the individual objects unless you specify the dataKey in your `widgets.json` file.
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

## Creating your own custom backend

To integrate your own backend with OpenBB, follow these steps:

1. **Develop an API to return JSON data**: Use any language to create an API that returns JSON data. We recommend Python with FastAPI. Ensure CORS is enabled for OpenBB domains.

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

2. **Create widgets.json file**: This file is your main configuration and defines widget properties such as name, description, category, endpoint, type of widget, and other information. Each widget will be defined in this file. To view a sample `widgets.json` file and learn more about what you can do check out the [widgets.json docs](/workspace/custom-backend/widgets-json-reference).

An example structure in your backend might look like below.

```text
  backend/
  ├── main.py
  └── widgets.json
  └── templates.json (optional)
```

3. **Build Endpoints**: Develop endpoints in `main.py` for each widget defined in `widgets.json`.

4. **Create Templates** (optional): You can use this to create a layout for your widgets to be displayed in OpenBB Workspace. This lets users easily add widgets in a predefined layout. To view a sample `templates.json` file and learn more about what you can do check out the [templates.json docs](/workspace/custom-backend/advanced-controls/templates).

4. **Connect to your API**: Use the OpenBB Workspace interface to connect your API. Input your main endpoint, and the system will read /widgets.json to add your widgets to OpenBB.

<div style={{display: 'flex', justifyContent: 'center'}}>
  <img className="pro-border-gradient" width="600" alt="folder" src="https://openbb-web-assets.s3.amazonaws.com/docs/launch_oct_24/backend.png" />
</div>

### Examples

Our team has created several examples that you can use to quickly get started with Python and FastAPI. For more information, check out [this open source repository](https://github.com/OpenBB-finance/backend-examples-for-openbb-workspace/tree/main).

Still have questions? Check out the [FAQs](/workspace/custom-backend/faqs) section.