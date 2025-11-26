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

A widget that displays articles in a clean, organized newsfeed format. Each article can include title, date, author, excerpt, and full body content with markdown support.

<img className="pro-border-gradient" width="600" alt="newsfeed" src="https://openbb-assets.s3.us-east-1.amazonaws.com/docs/pro/newsfeed.png" />

## Data Structure

The newsfeed widget expects articles in a specific format:

```python
{
    "title": string,    # Article title
    "date": string,    # ISO 8601 formatted date
    "author": string,  # Article author
    "excerpt": string, # Short preview of the article
    "body": string,    # Full article text (can include markdown)
}
```

## Basic Example

Here's a simple example that returns sample news articles:

```python
@register_widget({
    "name": "Sample News Feed",
    "description": "A simple newsfeed widget with example articles",
    "type": "newsfeed",
    "endpoint": "sample_newsfeed",
    "gridData": {
        "w": 40,
        "h": 20
    },
    "source": "example",
    "params": [
        {
            "paramName": "category",
            "label": "Category",
            "description": "Filter news by category",
            "type": "text",
            "value": "all",
            "options": [
                {"label": "All", "value": "all"},
                {"label": "Technology", "value": "tech"},
                {"label": "Business", "value": "business"},
                {"label": "Science", "value": "science"}
            ]
        },
        {
            "paramName": "limit",
            "label": "Number of Articles",
            "description": "Maximum number of articles to display",
            "type": "number",
            "value": "5"
        }
    ]
})
@app.get("/sample_newsfeed")
def get_sample_newsfeed(category: str = "all", limit: int = 5):
    """Returns sample news articles in the required newsfeed format"""
    
    # Sample news data organized by category
    sample_articles = {
        "tech": [
            {
                "title": "AI Breakthrough: New Model Achieves Human-Level Reasoning",
                "date": (datetime.now() - timedelta(hours=2)).isoformat(),
                "author": "Sarah Johnson",
                "excerpt": "Researchers at TechLab have unveiled a groundbreaking AI model that demonstrates unprecedented reasoning capabilities...",
                "body": """# AI Breakthrough: New Model Achieves Human-Level Reasoning

Researchers at TechLab have unveiled a groundbreaking AI model that demonstrates unprecedented reasoning capabilities, marking a significant milestone in artificial intelligence development.

## Key Features
- **Advanced reasoning**: The model can solve complex logical problems
- **Multimodal understanding**: Processes text, images, and audio simultaneously
- **Energy efficient**: Uses 40% less computational resources than previous models

The implications of this breakthrough extend across multiple industries, from healthcare to education, promising to revolutionize how we interact with AI systems."""
            },
            {
                "title": "Quantum Computing Startup Raises $500M in Series C Funding",
                "date": (datetime.now() - timedelta(hours=5)).isoformat(),
                "author": "Michael Chen",
                "excerpt": "QuantumLeap Technologies secures major funding round to accelerate development of commercial quantum processors...",
                "body": """# Quantum Computing Startup Raises $500M in Series C Funding

QuantumLeap Technologies announced today that it has secured $500 million in Series C funding, led by prominent venture capital firms.

The company plans to use the funding to:
1. Scale manufacturing capabilities
2. Expand research team by 200 engineers
3. Develop partnerships with major cloud providers

CEO Jane Smith stated, "This investment validates our approach to making quantum computing accessible to enterprises worldwide." """
            }
        ],
        "business": [
            {
                "title": "Global Markets Rally on Positive Economic Data",
                "date": (datetime.now() - timedelta(hours=1)).isoformat(),
                "author": "Robert Williams",
                "excerpt": "Stock markets across the globe surged today following the release of better-than-expected employment figures...",
                "body": """# Global Markets Rally on Positive Economic Data

Stock markets worldwide experienced significant gains today as investors responded positively to robust employment data and inflation reports.

## Market Performance
- S&P 500: +2.3%
- NASDAQ: +2.8%
- FTSE 100: +1.9%
- Nikkei 225: +2.1%

Analysts attribute the rally to renewed confidence in economic recovery and expectations of stable monetary policy."""
            }
        ],
        "science": [
            {
                "title": "Scientists Discover New Earth-like Exoplanet in Habitable Zone",
                "date": (datetime.now() - timedelta(hours=3)).isoformat(),
                "author": "Dr. Emily Rogers",
                "excerpt": "Astronomers using the James Webb Space Telescope have identified a potentially habitable exoplanet just 40 light-years away...",
                "body": """# Scientists Discover New Earth-like Exoplanet in Habitable Zone

A team of international astronomers has announced the discovery of an Earth-like exoplanet orbiting within the habitable zone of its star system.

## Planet Characteristics
- **Size**: 1.2 times Earth's radius
- **Orbital period**: 385 days
- **Surface temperature**: Estimated 15°C average
- **Atmosphere**: Preliminary data suggests presence of water vapor

The discovery opens new possibilities for studying potentially habitable worlds beyond our solar system."""
            }
        ]
    }
    
    # Collect articles based on category
    if category == "all":
        # Combine all categories
        all_articles = []
        for cat_articles in sample_articles.values():
            all_articles.extend(cat_articles)
        articles = all_articles
    else:
        # Get specific category or empty list if category doesn't exist
        articles = sample_articles.get(category, [])
    
    # Sort by date (newest first) and limit results
    articles.sort(key=lambda x: x["date"], reverse=True)
    articles = articles[:limit]
    
    # Add some variety with random additional recent articles if needed
    if len(articles) < limit and category == "all":
        # Generate some generic filler articles
        for i in range(limit - len(articles)):
            articles.append({
                "title": f"Breaking News: Important Update #{i+1}",
                "date": (datetime.now() - timedelta(hours=8+i)).isoformat(),
                "author": "News Team",
                "excerpt": f"This is a sample news article demonstrating the newsfeed widget functionality...",
                "body": f"""# Breaking News: Important Update #{i+1}

This is a sample article created to demonstrate the newsfeed widget's ability to display multiple articles.

## Summary
The newsfeed widget can display articles with:
- Rich markdown formatting
- Timestamps and author information
- Excerpts for quick preview
- Full article body with detailed content

Stay tuned for more updates!"""
            })
    
    return articles
```

## Live API Example with CoinDesk

Here's an example that fetches real news from CoinDesk's API:

```python
from typing import Optional, List, TypedDict
from datetime import datetime
import requests

class TransformedArticle(TypedDict):
    title: str
    date: str
    author: str
    excerpt: str
    body: str

@register_widget({
    "name": "CoinDesk News",
    "description": "Get the latest crypto news from CoinDesk",
    "type": "newsfeed",
    "endpoint": "coindesk_news",
    "gridData": {
        "w": 40,
        "h": 20
    },
    "source": "coindesk",
    "params": [
        {
            "paramName": "limit",
            "label": "Number of Articles",
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
                {"label": "English", "value": "EN"},
                {"label": "Spanish", "value": "ES"}
            ]
        },
        {
            "paramName": "categories",
            "label": "Categories",
            "description": "Filter by news categories",
            "type": "text",
            "value": ""
        }
    ]
})
@app.get("/coindesk_news")
def get_coindesk_news(limit: str = "10", lang: str = "EN", categories: Optional[str] = None):
    """Get news from CoinDesk API"""
    try:
        url = f"https://data-api.coindesk.com/news/v1/article/list?lang={lang}&limit={limit}"
        
        if categories:
            url += f"&categories={categories}"
        
        response = requests.get(url)
        
        if response.status_code != 200:
            raise HTTPException(
                status_code=response.status_code,
                detail=f"Failed to fetch news: {response.reason}"
            )
        
        data = response.json()
        articles = []
        
        for article in data.get("Data", []):
            # Convert UNIX timestamp to ISO format
            date = datetime.fromtimestamp(article["PUBLISHED_ON"]).isoformat()
            
            # Create excerpt from body (first 150 characters)
            body = article["BODY"]
            excerpt = f"{body[:150]}..." if len(body) > 150 else body
            
            articles.append({
                "title": article["TITLE"],
                "date": date,
                "author": article["AUTHORS"],
                "excerpt": excerpt,
                "body": body
            })
        
        return articles
        
    except Exception as e:
        return JSONResponse(
            content={"error": f"Failed to fetch news: {str(e)}"},
            status_code=500
        )
```
