---
title: "consensus"
description: "Learn how to access and use the Price Target Consensus functionality  in your application. Explore the available parameters and understand the returned  data structure."
keywords:
- Price target consensus data
- equity estimates consensus
- symbol parameter
- provider parameter
- results attribute
- provider attribute
- warnings attribute
- chart attribute
- metadata attribute
- data table
- target_high column
- target_low column
- target_consensus column
- target_median column
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="equity/estimates/consensus - Reference | OpenBB Docs" />

<!-- markdownlint-disable MD012 MD031 MD033 -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Get consensus price target and recommendation.

Examples
--------

```python
from openbb import obb
obb.equity.estimates.consensus(symbol='AAPL')
obb.equity.estimates.consensus(symbol='AAPL,MSFT')
```

## Parameters

<Tabs>
<TabItem value='standard' label='standard'>

**symbol**: `str | None | list[str | None]`<br/>
Symbol to get data for. Multiple items allowed for provider(s): fmp, intrinio, tmx, yfinance.

</TabItem>
<TabItem value='fmp' label='fmp'>

**symbol**: `str | None | list[str | None]`<br/>
Symbol to get data for. Multiple items allowed for provider(s): fmp, intrinio, tmx, yfinance.

</TabItem>
<TabItem value='intrinio' label='intrinio'>

**symbol**: `str | None | list[str | None]`<br/>
Symbol to get data for. Multiple items allowed for provider(s): fmp, intrinio, tmx, yfinance.

**industry_group_number**: `int | None`<br/>
The Zacks industry group number.

</TabItem>
<TabItem value='tmx' label='tmx'>

**symbol**: `str | None | list[str | None]`<br/>
Symbol to get data for. Multiple items allowed for provider(s): fmp, intrinio, tmx, yfinance.

</TabItem>
<TabItem value='yfinance' label='yfinance'>

**symbol**: `str | None | list[str | None]`<br/>
Symbol to get data for. Multiple items allowed for provider(s): fmp, intrinio, tmx, yfinance.

</TabItem>
</Tabs>

---

## Returns

**results**: `PriceTargetConsensus`

Serializable results.

**provider**: `Optional[Literal['fmp', 'intrinio', 'tmx', 'yfinance']]`

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

**symbol**: `str`<br/>
Symbol representing the entity requested in the data.

**name**: `str | None`<br/>
The company name

**target_high**: `float | None`<br/>
High target of the price target consensus.

**target_low**: `float | None`<br/>
Low target of the price target consensus.

**target_consensus**: `float | None`<br/>
Consensus target of the price target consensus.

**target_median**: `float | None`<br/>
Median target of the price target consensus.

</TabItem>
<TabItem value='fmp' label='fmp'>

**symbol**: `str`<br/>
Symbol representing the entity requested in the data.

**name**: `str | None`<br/>
The company name

**target_high**: `float | None`<br/>
High target of the price target consensus.

**target_low**: `float | None`<br/>
Low target of the price target consensus.

**target_consensus**: `float | None`<br/>
Consensus target of the price target consensus.

**target_median**: `float | None`<br/>
Median target of the price target consensus.

</TabItem>
<TabItem value='intrinio' label='intrinio'>

**symbol**: `str`<br/>
Symbol representing the entity requested in the data.

**name**: `str | None`<br/>
The company name

**target_high**: `float | None`<br/>
High target of the price target consensus.

**target_low**: `float | None`<br/>
Low target of the price target consensus.

**target_consensus**: `float | None`<br/>
Consensus target of the price target consensus.

**target_median**: `float | None`<br/>
Median target of the price target consensus.

**standard_deviation**: `float | None`<br/>
The standard deviation of target price estimates.

**total_analysts**: `int | None`<br/>
The total number of target price estimates in consensus.

**raised**: `int | None`<br/>
The number of analysts that have raised their target price estimates.

**lowered**: `int | None`<br/>
The number of analysts that have lowered their target price estimates.

**most_recent_date**: `date | None`<br/>
The date of the most recent estimate.

**industry_group_number**: `int | None`<br/>
The Zacks industry group number.

</TabItem>
<TabItem value='tmx' label='tmx'>

**symbol**: `str`<br/>
Symbol representing the entity requested in the data.

**name**: `str | None`<br/>
The company name

**target_high**: `float | None`<br/>
High target of the price target consensus.

**target_low**: `float | None`<br/>
Low target of the price target consensus.

**target_consensus**: `float | None`<br/>
Consensus target of the price target consensus.

**target_median**: `float | None`<br/>
Median target of the price target consensus.

**target_upside**: `float | None`<br/>
Percent of upside, as a normalized percent.

**total_analysts**: `int | None`<br/>
Total number of analyst.

**buy_ratings**: `int | None`<br/>
Number of buy ratings.

**sell_ratings**: `int | None`<br/>
Number of sell ratings.

**hold_ratings**: `int | None`<br/>
Number of hold ratings.

**consensus_action**: `str | None`<br/>
Consensus action.

</TabItem>
<TabItem value='yfinance' label='yfinance'>

**symbol**: `str`<br/>
Symbol representing the entity requested in the data.

**name**: `str | None`<br/>
The company name

**target_high**: `float | None`<br/>
High target of the price target consensus.

**target_low**: `float | None`<br/>
Low target of the price target consensus.

**target_consensus**: `float | None`<br/>
Consensus target of the price target consensus.

**target_median**: `float | None`<br/>
Median target of the price target consensus.

**recommendation**: `str | None`<br/>
Recommendation - buy, sell, etc.

**recommendation_mean**: `float | None`<br/>
Mean recommendation score where 1 is strong buy and 5 is strong sell.

**number_of_analysts**: `int | None`<br/>
Number of analysts providing opinions.

**current_price**: `float | None`<br/>
Current price of the stock.

**currency**: `str | None`<br/>
Currency the stock is priced in.

</TabItem>
</Tabs>

