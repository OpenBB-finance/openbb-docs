---
title: "Price Target"
description: "Get analyst price targets by company"
---

<!-- markdownlint-disable MD012 MD031 MD033 -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

---

## Implementation details

### Class names

| Model name | Parameters class | Data class |
| ---------- | ---------------- | ---------- |
| `PriceTarget` | `PriceTargetQueryParams` | `PriceTargetData` |

### Import Statement

```python
from openbb_core.provider.standard_models.price_target import (
PriceTargetData,
PriceTargetQueryParams,
)
```

## Parameters

<Tabs>
<TabItem value='standard' label='standard'>

**symbol**: `str | None | list[str | None]`<br/>
Symbol to get data for. Multiple items allowed for provider(s): benzinga, finviz, fmp.

**limit**: `int | None`<br/>
The number of data entries to return.

</TabItem>
<TabItem value='benzinga' label='benzinga'>

**symbol**: `str | None | list[str | None]`<br/>
Symbol to get data for. Multiple items allowed for provider(s): benzinga, finviz, fmp.

**limit**: `int | None`<br/>
The number of data entries to return.

**page**: `int | None`<br/>
*Default:* 0<br/>
Page offset. For optimization, performance and technical reasons, page offsets are limited from 0 - 100000. Limit the query results by other parameters such as date. Used in conjunction with the limit and date parameters.

**date**: `date | None | str`<br/>
Date for calendar data, shorthand for date_from and date_to.

**start_date**: `date | None | str`<br/>
Start date of the data, in YYYY-MM-DD format.

**end_date**: `date | None | str`<br/>
End date of the data, in YYYY-MM-DD format.

**updated**: `date | int | None`<br/>
Records last Updated Unix timestamp (UTC). This will force the sort order to be Greater Than or Equal to the timestamp indicated. The date can be a date string or a Unix timestamp. The date string must be in the format of YYYY-MM-DD.

**importance**: `int | None`<br/>
Importance level to filter by. Uses Greater Than or Equal To the importance indicated

**action**: `Literal['downgrades', 'maintains', 'reinstates', 'reiterates', 'upgrades', 'assumes', 'initiates', 'terminates', 'removes', 'suspends', 'firm_dissolved'] | None`<br/>
Filter by a specific action_company.

**analyst_ids**: `list[str] | str | None`<br/>
Comma-separated list of analyst (person) IDs. Omitting will bring back all available analysts.

**firm_ids**: `list[str] | str | None`<br/>
Comma-separated list of firm IDs.

**fields**: `list[str] | str | None`<br/>
Comma-separated list of fields to include in the response. See https://docs.benzinga.io/benzinga-apis/calendar/get-ratings to learn about the available fields.

</TabItem>
<TabItem value='finviz' label='finviz'>

**symbol**: `str | None | list[str | None]`<br/>
Symbol to get data for. Multiple items allowed for provider(s): benzinga, finviz, fmp.

**limit**: `int | None`<br/>
The number of data entries to return.

</TabItem>
<TabItem value='fmp' label='fmp'>

**symbol**: `str | None | list[str | None]`<br/>
Symbol to get data for. Multiple items allowed for provider(s): benzinga, finviz, fmp.

**limit**: `int | None`<br/>
The number of data entries to return.

</TabItem>
</Tabs>

## Data

<Tabs>
<TabItem value='standard' label='standard'>

**published_date**: `date | datetime`<br/>
Published date of the price target.

**published_time**: `datetime.time | None`<br/>
Time of the original rating, UTC.

**symbol**: `str`<br/>
Symbol representing the entity requested in the data.

**exchange**: `str | None`<br/>
Exchange where the company is traded.

**company_name**: `str | None`<br/>
Name of company that is the subject of rating.

**analyst_name**: `str | None`<br/>
Analyst name.

**analyst_firm**: `str | None`<br/>
Name of the analyst firm that published the price target.

**currency**: `str | None`<br/>
Currency the data is denominated in.

**price_target**: `float | None`<br/>
The current price target.

**adj_price_target**: `float | None`<br/>
Adjusted price target for splits and stock dividends.

**price_target_previous**: `float | None`<br/>
Previous price target.

**previous_adj_price_target**: `float | None`<br/>
Previous adjusted price target.

**price_when_posted**: `float | None`<br/>
Price when posted.

**rating_current**: `str | None`<br/>
The analyst's rating for the company.

**rating_previous**: `str | None`<br/>
Previous analyst rating for the company.

**action**: `str | None`<br/>
Description of the change in rating from firm's last rating.

</TabItem>
<TabItem value='benzinga' label='benzinga'>

**published_date**: `date | datetime`<br/>
Published date of the price target.

**published_time**: `datetime.time | None`<br/>
Time of the original rating, UTC.

**symbol**: `str`<br/>
Symbol representing the entity requested in the data.

**exchange**: `str | None`<br/>
Exchange where the company is traded.

**company_name**: `str | None`<br/>
Name of company that is the subject of rating.

**analyst_name**: `str | None`<br/>
Analyst name.

**analyst_firm**: `str | None`<br/>
Name of the analyst firm that published the price target.

**currency**: `str | None`<br/>
Currency the data is denominated in.

**price_target**: `float | None`<br/>
The current price target.

**adj_price_target**: `float | None`<br/>
Adjusted price target for splits and stock dividends.

**price_target_previous**: `float | None`<br/>
Previous price target.

**previous_adj_price_target**: `float | None`<br/>
Previous adjusted price target.

**price_when_posted**: `float | None`<br/>
Price when posted.

**rating_current**: `str | None`<br/>
The analyst's rating for the company.

**rating_previous**: `str | None`<br/>
Previous analyst rating for the company.

**action**: `Literal['Downgrades', 'Maintains', 'Reinstates', 'Reiterates', 'Upgrades', 'Assumes', 'Initiates Coverage On', 'Terminates Coverage On', 'Removes', 'Suspends', 'Firm Dissolved'] | None`<br/>
Description of the change in rating from firm's last rating.Note that all of these terms are precisely defined.

**action_change**: `Literal['Announces', 'Maintains', 'Lowers', 'Raises', 'Removes', 'Adjusts'] | None`<br/>
Description of the change in price target from firm's last price target.

**importance**: `Literal[0, 1, 2, 3, 4, 5] | None`<br/>
Subjective Basis of How Important Event is to Market. 5 = High

**notes**: `str | None`<br/>
Notes of the price target.

**analyst_id**: `str | None`<br/>
Id of the analyst.

**url_news**: `str | None`<br/>
URL for analyst ratings news articles for this ticker on Benzinga.com.

**url_analyst**: `str | None`<br/>
URL for analyst ratings page for this ticker on Benzinga.com.

**id**: `str | None`<br/>
Unique ID of this entry.

**last_updated**: `datetime | None`<br/>
Last updated timestamp, UTC.

</TabItem>
<TabItem value='finviz' label='finviz'>

**published_date**: `date | datetime`<br/>
Published date of the price target.

**published_time**: `datetime.time | None`<br/>
Time of the original rating, UTC.

**symbol**: `str`<br/>
Symbol representing the entity requested in the data.

**exchange**: `str | None`<br/>
Exchange where the company is traded.

**company_name**: `str | None`<br/>
Name of company that is the subject of rating.

**analyst_name**: `str | None`<br/>
Analyst name.

**analyst_firm**: `str | None`<br/>
Name of the analyst firm that published the price target.

**currency**: `str | None`<br/>
Currency the data is denominated in.

**price_target**: `float | None`<br/>
The current price target.

**adj_price_target**: `float | None`<br/>
Adjusted price target for splits and stock dividends.

**price_target_previous**: `float | None`<br/>
Previous price target.

**previous_adj_price_target**: `float | None`<br/>
Previous adjusted price target.

**price_when_posted**: `float | None`<br/>
Price when posted.

**rating_current**: `str | None`<br/>
The analyst's rating for the company.

**rating_previous**: `str | None`<br/>
Previous analyst rating for the company.

**action**: `str | None`<br/>
Description of the change in rating from firm's last rating.

**status**: `str | None`<br/>
The action taken by the firm. This could be 'Upgrade', 'Downgrade', 'Reiterated', etc.

**rating_change**: `str | None`<br/>
The rating given by the analyst. This could be 'Buy', 'Sell', 'Underweight', etc. If the rating is a revision, the change is indicated by '->'

</TabItem>
<TabItem value='fmp' label='fmp'>

**published_date**: `date | datetime`<br/>
Published date of the price target.

**published_time**: `datetime.time | None`<br/>
Time of the original rating, UTC.

**symbol**: `str`<br/>
Symbol representing the entity requested in the data.

**exchange**: `str | None`<br/>
Exchange where the company is traded.

**company_name**: `str | None`<br/>
Name of company that is the subject of rating.

**analyst_name**: `str | None`<br/>
Analyst name.

**analyst_firm**: `str | None`<br/>
Name of the analyst firm that published the price target.

**currency**: `str | None`<br/>
Currency the data is denominated in.

**price_target**: `float | None`<br/>
The current price target.

**adj_price_target**: `float | None`<br/>
Adjusted price target for splits and stock dividends.

**price_target_previous**: `float | None`<br/>
Previous price target.

**previous_adj_price_target**: `float | None`<br/>
Previous adjusted price target.

**price_when_posted**: `float | None`<br/>
Price when posted.

**rating_current**: `str | None`<br/>
The analyst's rating for the company.

**rating_previous**: `str | None`<br/>
Previous analyst rating for the company.

**action**: `str | None`<br/>
Description of the change in rating from firm's last rating.

**news_title**: `str | None`<br/>
News title of the price target.

**news_url**: `str | None`<br/>
News URL of the price target.

</TabItem>
</Tabs>

