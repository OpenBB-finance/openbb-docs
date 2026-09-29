---
title: "world"
description: "Learn how to retrieve global news data using the obb.news.world API.  This documentation covers the parameters, returns, and data structures used in the  API, including details on how to set the limit and provider, and how to filter the  news by date, author, channels, and more. Explore the different data fields such  as date, title, images, text, and URL, and understand the structure of the returned  results, warnings, chart, and metadata."
keywords:
- Global News
- global news data
- obb.news.world
- parameters
- limit
- provider
- default
- benzinga
- biztoc
- fmp
- intrinio
- display
- date
- start_date
- end_date
- updated_since
- published_since
- sort
- order
- isin
- cusip
- channels
- topics
- authors
- content_types
- returns
- results
- provider
- warnings
- chart
- metadata
- data
- date
- title
- images
- text
- url
- id
- author
- teaser
- stocks
- tags
- updated
- favicon
- score
- site
- company
- datetime
- list
- dict
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="news/world - Reference | OpenBB Docs" />

<!-- markdownlint-disable MD012 MD031 MD033 -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

World News. Global news data.

Examples
--------

```python
from openbb import obb
obb.news.world()
obb.news.world(limit=100)
# Get news on the specified dates.
obb.news.world(start_date='2024-02-01', end_date='2024-02-07')
# Display the headlines of the news.
obb.news.world(display='headline')
# Get news by topics.
obb.news.world(topics='finance')
# Get news by source using 'tingo' as provider.
obb.news.world(source='bloomberg')
# Filter aticles by term using 'biztoc' as provider.
obb.news.world(term='apple')
```

## Parameters

<Tabs>
<TabItem value='standard' label='standard'>

**start_date**: `date | None | str`<br/>
Start date of the data, in YYYY-MM-DD format. The default is 2 weeks ago.

**end_date**: `date | None | str`<br/>
End date of the data, in YYYY-MM-DD format. The default is today.

**limit**: `int | None`<br/>
The number of data entries to return. The number of articles to return.

</TabItem>
<TabItem value='benzinga' label='benzinga'>

**start_date**: `date | None | str`<br/>
Start date of the data, in YYYY-MM-DD format. The default is 2 weeks ago.

**end_date**: `date | None | str`<br/>
End date of the data, in YYYY-MM-DD format. The default is today.

**limit**: `int | None`<br/>
The number of data entries to return. The number of articles to return.

**date**: `date | None | str`<br/>
A specific date to get data for.

**display**: `Literal['headline', 'abstract', 'full'] | None`<br/>
*Default:* full<br/>
Specify headline only (headline), headline + teaser (abstract), or headline + full body (full).

**updated_since**: `int | None`<br/>
Number of seconds since the news was updated.

**published_since**: `int | None`<br/>
Number of seconds since the news was published.

**sort**: `Literal['id', 'created', 'updated'] | None`<br/>
*Default:* created<br/>
Key to sort the news by.

**order**: `Literal['asc', 'desc'] | None`<br/>
*Default:* desc<br/>
Order to sort the news by.

**isin**: `str | None`<br/>
The ISIN of the news to retrieve.

**cusip**: `str | None`<br/>
The CUSIP of the news to retrieve.

**channels**: `str | None`<br/>
Channels of the news to retrieve.

**topics**: `str | None`<br/>
Topics of the news to retrieve.

**authors**: `str | None`<br/>
Authors of the news to retrieve.

**content_types**: `str | None`<br/>
Content types of the news to retrieve.

</TabItem>
<TabItem value='biztoc' label='biztoc'>

**start_date**: `date | None | str`<br/>
Start date of the data, in YYYY-MM-DD format. The default is 2 weeks ago.

**end_date**: `date | None | str`<br/>
End date of the data, in YYYY-MM-DD format. The default is today.

**limit**: `int | None`<br/>
The number of data entries to return. The number of articles to return.

**term**: `str | None`<br/>
Search term to filter articles by. This overrides all other filters.

**source**: `str | None`<br/>
Filter by a specific publisher. Only valid when filter is set to source.

</TabItem>
<TabItem value='fmp' label='fmp'>

**start_date**: `date | None | str`<br/>
Start date of the data, in YYYY-MM-DD format. The default is 2 weeks ago.

**end_date**: `date | None | str`<br/>
End date of the data, in YYYY-MM-DD format. The default is today.

**limit**: `int | None`<br/>
The number of data entries to return. The number of articles to return.

**topic**: `Literal['fmp_articles', 'general', 'press_releases', 'stocks', 'forex', 'crypto'] | None`<br/>
*Default:* general<br/>
The topic of the news to be fetched.

**page**: `int | None`<br/>
Page number of the results. Use in combination with limit.

</TabItem>
<TabItem value='intrinio' label='intrinio'>

**start_date**: `date | None | str`<br/>
Start date of the data, in YYYY-MM-DD format. The default is 2 weeks ago.

**end_date**: `date | None | str`<br/>
End date of the data, in YYYY-MM-DD format. The default is today.

**limit**: `int | None`<br/>
The number of data entries to return. The number of articles to return.

**source**: `Literal['yahoo', 'moody', 'moody_us_news', 'moody_us_press_releases'] | None`<br/>
The source of the news article.

**sentiment**: `Literal['positive', 'neutral', 'negative'] | None`<br/>
Return news only from this source.

**language**: `str | None`<br/>
Filter by language. Unsupported for yahoo source.

**topic**: `str | None`<br/>
Filter by topic. Unsupported for yahoo source.

**word_count_greater_than**: `int | None`<br/>
News stories will have a word count greater than this value. Unsupported for yahoo source.

**word_count_less_than**: `int | None`<br/>
News stories will have a word count less than this value. Unsupported for yahoo source.

**is_spam**: `bool | None`<br/>
Filter whether it is marked as spam or not. Unsupported for yahoo source.

**business_relevance_greater_than**: `float | None`<br/>
News stories will have a business relevance score more than this value. Unsupported for yahoo source. Value is a decimal between 0 and 1.

**business_relevance_less_than**: `float | None`<br/>
News stories will have a business relevance score less than this value. Unsupported for yahoo source. Value is a decimal between 0 and 1.

</TabItem>
<TabItem value='tiingo' label='tiingo'>

**start_date**: `date | None | str`<br/>
Start date of the data, in YYYY-MM-DD format. The default is 2 weeks ago.

**end_date**: `date | None | str`<br/>
End date of the data, in YYYY-MM-DD format. The default is today.

**limit**: `int | None`<br/>
The number of data entries to return. The number of articles to return.

**offset**: `int | None`<br/>
*Default:* 0<br/>
Page offset, used in conjunction with limit.

**source**: `str | None`<br/>
A comma-separated list of the domains requested.

</TabItem>
</Tabs>

---

## Returns

**results**: `WorldNews`

Serializable results.

**provider**: `Optional[Literal['benzinga', 'biztoc', 'fmp', 'intrinio', 'tiingo']]`

Provider name.

**warnings**: `Optional[list[Warning_]]`

list of warnings.

**chart**: `Optional[Chart]`

Chart object.

**extra**: `dict[str, Any]`

Extra info.

---
## Data

<Tabs>
<TabItem value='standard' label='standard'>

**date**: `datetime | str`<br/>
The date of the data. The date of publication.

**title**: `str`<br/>
Title of the article.

**author**: `str | None`<br/>
Author of the article.

**excerpt**: `str | None`<br/>
Excerpt of the article text.

**body**: `str | None`<br/>
Body of the article text.

**images**: `Any | None`<br/>
Images associated with the article.

**url**: `str | None`<br/>
URL to the article.

</TabItem>
<TabItem value='benzinga' label='benzinga'>

**date**: `datetime | str`<br/>
The date of the data. The date of publication.

**title**: `str`<br/>
Title of the article.

**author**: `str | None`<br/>
Author of the article.

**excerpt**: `str | None`<br/>
Excerpt of the article text.

**body**: `str | None`<br/>
Body of the article text.

**images**: `Any | None`<br/>
Images associated with the article.

**url**: `str | None`<br/>
URL to the article.

**channels**: `str | None`<br/>
Channels associated with the news.

**stocks**: `str | None`<br/>
Stocks associated with the news.

**tags**: `str | None`<br/>
Tags associated with the news.

**updated**: `datetime | None`<br/>
Updated date of the news.

**id**: `str`<br/>
Article ID.

**updated_id**: `str | None`<br/>
Updated article ID if the article was updated.

</TabItem>
<TabItem value='biztoc' label='biztoc'>

**date**: `datetime | str`<br/>
The date of the data. The date of publication.

**title**: `str`<br/>
Title of the article.

**author**: `str | None`<br/>
Author of the article.

**excerpt**: `str | None`<br/>
Excerpt of the article text.

**body**: `str | None`<br/>
Body of the article text.

**images**: `list[dict[str, str]] | None`<br/>
Images for the article.

**url**: `str | None`<br/>
URL to the article.

**tags**: `list[str] | None`<br/>
Tags for the article.

**score**: `float | None`<br/>
Search relevance score for the article.

</TabItem>
<TabItem value='fmp' label='fmp'>

**date**: `datetime | str`<br/>
The date of the data. The date of publication.

**title**: `str`<br/>
Title of the article.

**author**: `str | None`<br/>
Author of the article.

**excerpt**: `str | None`<br/>
Excerpt of the article text.

**body**: `str | None`<br/>
Body of the article text.

**images**: `Any | None`<br/>
Images associated with the article.

**url**: `str | None`<br/>
URL to the article.

**source**: `str`<br/>
News source.

</TabItem>
<TabItem value='intrinio' label='intrinio'>

**date**: `datetime | str`<br/>
The date of the data. The date of publication.

**title**: `str`<br/>
Title of the article.

**author**: `str | None`<br/>
Author of the article.

**excerpt**: `str | None`<br/>
Excerpt of the article text.

**body**: `str | None`<br/>
Body of the article text.

**images**: `Any | None`<br/>
Images associated with the article.

**url**: `str | None`<br/>
URL to the article.

**source**: `str | None`<br/>
The source of the news article.

**summary**: `str | None`<br/>
The summary of the news article.

**topics**: `str | None`<br/>
The topics related to the news article.

**word_count**: `int | None`<br/>
The word count of the news article.

**business_relevance**: `float | None`<br/>
How strongly correlated the news article is to the business

**sentiment**: `str | None`<br/>
The sentiment of the news article - i.e, negative, positive.

**sentiment_confidence**: `float | None`<br/>
The confidence score of the sentiment rating.

**language**: `str | None`<br/>
The language of the news article.

**spam**: `bool | None`<br/>
Whether the news article is spam.

**copyright**: `str | None`<br/>
The copyright notice of the news article.

**id**: `str`<br/>
Article ID.

**company**: `IntrinioCompany | None`<br/>
The Intrinio Company object. Contains details company reference data.

**security**: `IntrinioSecurity | None`<br/>
The Intrinio Security object. Contains the security details related to the news article.

</TabItem>
<TabItem value='tiingo' label='tiingo'>

**date**: `datetime | str`<br/>
The date of the data. The date of publication.

**title**: `str`<br/>
Title of the article.

**author**: `str | None`<br/>
Author of the article.

**excerpt**: `str | None`<br/>
Excerpt of the article text.

**body**: `str | None`<br/>
Body of the article text.

**images**: `Any | None`<br/>
Images associated with the article.

**url**: `str | None`<br/>
URL to the article.

**symbols**: `str | None`<br/>
Ticker tagged in the fetched news.

**article_id**: `int`<br/>
Unique ID of the news article.

**site**: `str`<br/>
News source.

**tags**: `str | None`<br/>
Tags associated with the news article.

**crawl_date**: `datetime`<br/>
Date the news article was crawled.

</TabItem>
</Tabs>

