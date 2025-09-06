---
title: Newsfeed
sidebar_position: 12
description: Learn how to create a newsfeed widget for OpenBB Workspace that displays articles in a clean, organized format.
keywords:
- widgets.json
- OpenBB API
- Newsfeed widget
- Article display
- News integration
- FastAPI
- Custom Backend
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="Newsfeed | OpenBB Workspace Docs" />

This guide will walk you through creating a newsfeed widget for OpenBB Workspace. We'll use CoinDesk's API as an example, but you can adapt this to any news source.

## Step 1: Set Up Your Project

To get started, create the main application file and the widget configuration file. You will only need these two files:

- `main.py`: This file will contain your FastAPI application code.
- `widgets.json`: This file will define the configuration for your widget.

The backend will use the same FastAPI setup and structure as described in the [Overview](/workspace/developers/data-integration#1-create-the-api-server) page.

## Step 2: Create the Newsfeed Endpoint

Edit the `main.py` file and add the following code.

The newsfeed widget expects articles in a specific format. Each article must include:

```python
{
    "title": string,    # Article title
    "date": string,    # ISO 8601 formatted date
    "author": string,  # Article author
    "excerpt": string, # Short preview of the article
    "body": string,    # Full article text (can include markdown)
}
```

Here's an example implementation using CoinDesk's API:

```python
...

class CoindeskArticle(TypedDict):
    TYPE: str
    ID: int
    TITLE: str
    SUBTITLE: Optional[str]
    AUTHORS: str
    URL: str
    BODY: str
    PUBLISHED_ON: int
    IMAGE_URL: str
    KEYWORDS: str
    LANG: str
    SENTIMENT: str


class TransformedArticle(TypedDict):
    title: str
    date: str
    author: str
    excerpt: str
    body: str


def transform_article(article: CoindeskArticle) -> TransformedArticle:
    """Transform a CoinDesk article to a standardized format."""
    # Convert UNIX timestamp to ISO format
    date = datetime.fromtimestamp(article["PUBLISHED_ON"]).isoformat()

    # Create excerpt from body (first 150 characters)
    body = article["BODY"]
    excerpt = f"{body[:150]}..." if len(body) > 150 else body

    return {
        "title": article["TITLE"],
        "date": date,
        "author": article["AUTHORS"],
        "excerpt": excerpt,
        "body": body,
    }


def fetch_news(limit: str, lang: str, categories: Optional[str] = None) -> List[TransformedArticle]:
    """Fetch news from the CoinDesk API."""
    url = f"https://data-api.coindesk.com/news/v1/article/list?lang={lang}&limit={limit}"

    if categories:
        url += f"&categories={categories}"

    response = requests.get(url)

    if response.status_code != 200:
        raise HTTPException(status_code=response.status_code, detail=f"Failed to fetch news: {response.reason}")

    data = response.json()
    return [transform_article(article) for article in data.get("Data", [])]


@app.get("/news")
def get_coindesk_news(limit: str = "10", lang: str = "EN", categories: Optional[str] = None):
    """Get news from CoinDesk."""
    try:
        news = fetch_news(limit, lang, categories)
        return news
    except Exception as e:
        return JSONResponse(content={"error": f"Failed to fetch news: {str(e)}"}, status_code=500)
```

## Step 3: Configure widgets.json

Add the widget configuration to your `widgets.json` file:

```json
{
  "coindesk_news": {
    "type": "newsfeed",
    "name": "CoinDesk News",
    "description": "Get the latest crypto news from CoinDesk",
    "endpoint": "/news",
    "gridData": {
      "w": 40,
      "h": 20
    },
    "source": "coindesk",
    "params": [
      {
        "paramName": "limit",
        "label": "Limit",
        "description": "The number of news articles to fetch",
        "type": "number",
        "value": "10"
      },
      {
        "paramName": "lang",
        "label": "Language",
        "description": "The language of the news articles",
        "type": "text",
        "value": "EN",
        "options": [
          {
            "label": "English",
            "value": "EN"
          },
          {
            "label": "Spanish",
            "value": "ES"
          }
        ]
      }
    ]
  }
}
```

## Step 4: Run the Application

Start your FastAPI server:

```bash
uvicorn main:app --host localhost --port 5050
```

## Step 5: Add to OpenBB Pro

Navigate to [OpenBB Pro Apps](https://pro.openbb.co/app) and add your backend by clicking on the `Manage Backends` button in the top right corner. Select `Add Backend` and fill in the details. Your URL will be `http://localhost:5050`.

Once you have added your backend, you can find the widget in the `Test` category with the name `Test Metric`.

<img className="pro-border-gradient" width="600" alt="newsfeed" src="https://openbb-assets.s3.us-east-1.amazonaws.com/docs/pro/newsfeed.png" />

## Additional Resources

You can find more examples of how to set up your own backend in the [Backend for OpenBB Workspace GitHub](https://github.com/OpenBB-finance/backend-examples-for-openbb-workspace).
