---
title: Newsfeed
sidebar_position: 7
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

# Newsfeed Widget

This guide will walk you through creating a newsfeed widget for OpenBB Workspace. We'll use CoinDesk's API as an example, but you can adapt this to any news source.

## Step 1: Set Up Your Project

To get started, create the main application file and the widget configuration file. You will only need these two files:

- `main.py`: This file will contain your FastAPI application code.
- `widgets.json`: This file will define the configuration for your widget.

The backend will use the same FastAPI setup and structure as described in the [Custom Backend](/content/workspace/custom-backend/custom-backend.md) page.

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
    "url": string,     # Optional: Link to original article
    "image_url": string # Optional: Featured image URL
}
```

Here's an example implementation using CoinDesk's API:

```python
...
# Newsfeed endpoint
def transform_article(article: dict) -> dict:
    """Transforms a single article from Coindesk API format to the desired format."""
    # ... (transform_article function remains the same) ...
    # Convert UNIX timestamp to ISO 8601 string in UTC
    published_on_ts = article.get("PUBLISHED_ON", 0)
    try:
        # Ensure the timestamp is treated as an integer or float
        dt_object = datetime.fromtimestamp(int(published_on_ts), tz=timezone.utc)
        date_str = dt_object.isoformat()
    except (ValueError, TypeError):
        date_str = "Invalid Date" # Handle cases where timestamp is missing or invalid

    body = article.get("BODY", "")
    # Create excerpt from body (first 150 characters)
    excerpt = f"{body[:150]}..." if len(body) > 150 else body

    return {
        "title": article.get("TITLE", "No Title"),
        "date": date_str,
        "author": article.get("AUTHORS", "Unknown Author"),
        "excerpt": excerpt,
        "body": body, # Assuming the body is already markdown
        "url": article.get("URL", ""),
        "image_url": article.get("IMAGE_URL", "")
    }


# Define an asynchronous function to fetch news from Coindesk using httpx
async def fetch_news(limit: int = 10, lang: str = "EN") -> list[dict]:
    """Fetches and transforms news articles from the Coindesk API using httpx."""
    url = f"https://data-api.coindesk.com/news/v1/article/list?lang={lang}&limit={limit}"
    # Use an async client for non-blocking I/O
    async with httpx.AsyncClient() as client:
        try:
            response = await client.get(url) # <-- Use await with httpx
            response.raise_for_status() # Raise an exception for bad status codes (4xx or 5xx)
            data = response.json()

            articles = data.get("Data", [])
            if not isinstance(articles, list):
                 print(f"Warning: Expected 'Data' to be a list, but got {type(articles)}")
                 return [] # Return empty list if data format is unexpected

            # Call the synchronous transform_article without await
            return [transform_article(article) for article in articles if isinstance(article, dict)]

        except httpx.RequestError as exc: # <-- Catch httpx specific request errors
            print(f"An error occurred while requesting {url}: {exc}")
            # Distinguish between connection errors and HTTP errors if possible
            status_code = 503
            detail = f"Error connecting to Coindesk API: {exc}"
            # Check if the exception has a response attribute (for HTTP errors)
            if hasattr(exc, 'response') and exc.response is not None:
                status_code = exc.response.status_code
                # Use response.text for the error detail from the API
                detail = f"Error from Coindesk API ({status_code}): {exc.response.text}"
            raise HTTPException(status_code=status_code, detail=detail)
        except json.JSONDecodeError:
            print(f"Failed to decode JSON response from {url}")
            raise HTTPException(status_code=500, detail="Failed to decode response from Coindesk API")
        except Exception as exc:
             print(f"An unexpected error occurred: {exc}")
             raise HTTPException(status_code=500, detail=f"An unexpected error occurred: {exc}")


@app.get("/coindesk/news")
async def get_coindesk_news(
    limit: int = Query(10, description="The number of news articles to fetch", ge=1, le=100),
    lang: str = Query("EN", description="The language of the news articles (e.g., EN, ES, PT)")
):
    """Endpoint to fetch news from Coindesk."""
    try:
        # Call the asynchronous fetch_news function
        news_data = await fetch_news(limit=limit, lang=lang)
        return JSONResponse(content=news_data)
    except HTTPException as http_exc:
        # Re-raise HTTPException to let FastAPI handle it
        raise http_exc
    except Exception as e:
        # Catch any other unexpected errors
        print(f"Unexpected error in /coindesk/news endpoint: {e}")
        raise HTTPException(status_code=500, detail="Internal server error")
```

## Step 3: Configure widgets.json

Add the widget configuration to your `widgets.json` file:

```json
{
  "coindesk_news": {
    "type": "newsfeed",
    "name": "CoinDesk News",
    "description": "Get the latest crypto news from CoinDesk",
    "endpoint": "/coindesk/news",
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

Navigate to [OpenBB Pro Data Connectors](https://pro.openbb.co/app/data-connectors) and add your backend by clicking on the `+ Add Data` button in the top right corner. Select `Custom Backend` and fill in the details. Your URL will be `http://localhost:5050`.

Once you have added your backend, you can find the widget in the `Test` category with the name `Test Metric`.

<img className="pro-border-gradient" width="600" alt="newsfeed" src="https://openbb-assets.s3.us-east-1.amazonaws.com/docs/pro/newsfeed.png" />

## Additional Resources

You can find more examples of how to set up your own backend in the [Backend for OpenBB Workspace GitHub](https://github.com/OpenBB-finance/backend-examples-for-openbb-workspace).