---
title: "Company News"
description: "Company News"
---

<!-- markdownlint-disable MD012 MD031 MD033 -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

---

## Implementation details

### Class names

| Model name | Parameters class | Data class |
| ---------- | ---------------- | ---------- |
| `CompanyNews` | `CompanyNewsQueryParams` | `CompanyNewsData` |

### Import Statement

```python
from openbb_core.provider.standard_models.company_news import (
CompanyNewsData,
CompanyNewsQueryParams,
)
```

## Parameters

<Tabs>
<TabItem value='standard' label='standard'>

**symbol**: `str | None | list[str | None]`<br/>
Symbol to get data for. Multiple items allowed for provider(s): benzinga, fmp, intrinio, tiingo, tmx, yfinance.

**start_date**: `date | None | str`<br/>
Start date of the data, in YYYY-MM-DD format.

**end_date**: `date | None | str`<br/>
End date of the data, in YYYY-MM-DD format.

**limit**: `int | None`<br/>
The number of data entries to return.

</TabItem>
<TabItem value='benzinga' label='benzinga'>

**symbol**: `str | None | list[str | None]`<br/>
Symbol to get data for. Multiple items allowed for provider(s): benzinga, fmp, intrinio, tiingo, tmx, yfinance.

**start_date**: `date | None | str`<br/>
Start date of the data, in YYYY-MM-DD format.

**end_date**: `date | None | str`<br/>
End date of the data, in YYYY-MM-DD format.

**limit**: `int | None`<br/>
The number of data entries to return.

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
The company's ISIN.

**cusip**: `str | None`<br/>
The company's CUSIP.

**channels**: `str | None`<br/>
Channels of the news to retrieve.

**topics**: `str | None`<br/>
Topics of the news to retrieve.

**authors**: `str | None`<br/>
Authors of the news to retrieve.

**content_types**: `str | None`<br/>
Content types of the news to retrieve.

</TabItem>
<TabItem value='fmp' label='fmp'>

**symbol**: `str | None | list[str | None]`<br/>
Symbol to get data for. Multiple items allowed for provider(s): benzinga, fmp, intrinio, tiingo, tmx, yfinance.

**start_date**: `date | None | str`<br/>
Start date of the data, in YYYY-MM-DD format.

**end_date**: `date | None | str`<br/>
End date of the data, in YYYY-MM-DD format.

**limit**: `int | None`<br/>
The number of data entries to return.

**page**: `int | None`<br/>
*Default:* 0<br/>
Page number of the results. Use in combination with limit.

**press_release**: `bool | None`<br/>
When true, will return only press releases for the given symbol(s).

</TabItem>
<TabItem value='intrinio' label='intrinio'>

**symbol**: `str | None | list[str | None]`<br/>
Symbol to get data for. Multiple items allowed for provider(s): benzinga, fmp, intrinio, tiingo, tmx, yfinance.

**start_date**: `date | None | str`<br/>
Start date of the data, in YYYY-MM-DD format.

**end_date**: `date | None | str`<br/>
End date of the data, in YYYY-MM-DD format.

**limit**: `int | None`<br/>
The number of data entries to return.

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

**symbol**: `str | None | list[str | None]`<br/>
Symbol to get data for. Multiple items allowed for provider(s): benzinga, fmp, intrinio, tiingo, tmx, yfinance.

**start_date**: `date | None | str`<br/>
Start date of the data, in YYYY-MM-DD format.

**end_date**: `date | None | str`<br/>
End date of the data, in YYYY-MM-DD format.

**limit**: `int | None`<br/>
The number of data entries to return.

**offset**: `int | None`<br/>
*Default:* 0<br/>
Page offset, used in conjunction with limit.

**source**: `str | None`<br/>
A comma-separated list of the domains requested.

</TabItem>
<TabItem value='tmx' label='tmx'>

**symbol**: `str | None | list[str | None]`<br/>
Symbol to get data for. Multiple items allowed for provider(s): benzinga, fmp, intrinio, tiingo, tmx, yfinance.

**start_date**: `date | None | str`<br/>
Start date of the data, in YYYY-MM-DD format.

**end_date**: `date | None | str`<br/>
End date of the data, in YYYY-MM-DD format.

**limit**: `int | None`<br/>
The number of data entries to return.

**page**: `int | None`<br/>
*Default:* 1<br/>
The page number to start from. Use with limit.

</TabItem>
<TabItem value='yfinance' label='yfinance'>

**symbol**: `str | None | list[str | None]`<br/>
Symbol to get data for. Multiple items allowed for provider(s): benzinga, fmp, intrinio, tiingo, tmx, yfinance.

**start_date**: `date | None | str`<br/>
Start date of the data, in YYYY-MM-DD format.

**end_date**: `date | None | str`<br/>
End date of the data, in YYYY-MM-DD format.

**limit**: `int | None`<br/>
The number of data entries to return.

</TabItem>
</Tabs>

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

**url**: `str`<br/>
URL to the article.

**symbols**: `str | None`<br/>
Symbols associated with the article.

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

**url**: `str`<br/>
URL to the article.

**symbols**: `str | None`<br/>
Symbols associated with the article.

**channels**: `str | None`<br/>
Channels associated with the news.

**tags**: `str | None`<br/>
Tags associated with the news.

**updated**: `datetime | None`<br/>
Updated date of the news.

**id**: `str`<br/>
Article ID.

**original_id**: `str | None`<br/>
Original ID of the news article.

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

**url**: `str`<br/>
URL to the article.

**symbols**: `str | None`<br/>
Symbols associated with the article.

**source**: `str`<br/>
Name of the news site.

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

**url**: `str`<br/>
URL to the article.

**symbols**: `str | None`<br/>
Symbols associated with the article.

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

**url**: `str`<br/>
URL to the article.

**symbols**: `str | None`<br/>
Symbols associated with the article.

**tags**: `str | None`<br/>
Tags associated with the news article.

**article_id**: `int`<br/>
Unique ID of the news article.

**source**: `str`<br/>
News source.

**crawl_date**: `datetime`<br/>
Date the news article was crawled.

</TabItem>
<TabItem value='tmx' label='tmx'>

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

**url**: `str`<br/>
URL to the article.

**symbols**: `str | None`<br/>
Symbols associated with the article.

**source**: `str | None`<br/>
Source of the news.

</TabItem>
<TabItem value='yfinance' label='yfinance'>

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

**url**: `str`<br/>
URL to the article.

**symbols**: `str | None`<br/>
Symbols associated with the article.

**source**: `str | None`<br/>
Source of the news article

</TabItem>
</Tabs>

