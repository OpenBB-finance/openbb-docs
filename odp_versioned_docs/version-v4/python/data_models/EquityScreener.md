---
title: "Equity Screener"
description: "Screen for companies meeting various criteria"
---

<!-- markdownlint-disable MD012 MD031 MD033 -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

---

## Implementation details

### Class names

| Model name | Parameters class | Data class |
| ---------- | ---------------- | ---------- |
| `EquityScreener` | `EquityScreenerQueryParams` | `EquityScreenerData` |

### Import Statement

```python
from openbb_core.provider.standard_models.equity_screener import (
EquityScreenerData,
EquityScreenerQueryParams,
)
```

## Parameters

<Tabs>
<TabItem value='standard' label='standard'>

</TabItem>
<TabItem value='finviz' label='finviz'>

**metric**: `Literal['overview', 'valuation', 'financial', 'ownership', 'performance', 'technical'] | None`<br/>
*Default:* overview<br/>
The data group to return, default is 'overview'.

**exchange**: `Literal['all', 'amex', 'nasdaq', 'nyse'] | None`<br/>
*Default:* all<br/>
Filter by exchange.

**index**: `Literal['all', 'dow', 'nasdaq', 'sp500', 'russell'] | None`<br/>
*Default:* all<br/>
Filter by index.

**sector**: `Literal['all', 'energy', 'materials', 'industrials', 'consumer_cyclical', 'consumer_defensive', 'financial', 'healthcare', 'technology', 'communication_services', 'utilities', 'real_estate'] | None`<br/>
*Default:* all<br/>
Filter by sector.

**industry**: `str | None`<br/>
*Default:* all<br/>
Filter by industry.

**mktcap**: `Literal['all', 'mega', 'large', 'large_over', 'large_under', 'mid', 'mid_over', 'mid_under', 'small', 'small_over', 'small_under', 'micro', 'micro_over', 'micro_under', 'nano'] | None`<br/>
*Default:* all<br/>
<details>
<summary mdxType="summary">Description</summary>

Filter by market cap.<br/>
    Mega - > 200B<br/>
    Large - 10B - 200B<br/>
    Mid - 2B - 10B<br/>
    Small - 300M - 2B<br/>
    Micro - 50M - 300M<br/>
    Nano - < 50M<br/>
</details>

**recommendation**: `Literal['all', 'strong_buy', 'buy+', 'buy', 'hold+', 'hold', 'hold-', 'sell', 'sell-', 'strong_sell'] | None`<br/>
*Default:* all<br/>
Filter by analyst recommendation.

**signal**: `str | None`<br/>
<details>
<summary mdxType="summary">Description</summary>

The Finviz screener signal to use. When no parameters are provided, the screener defaults to 'top_gainers'. Available signals are:<br/>
        channel: both support and resistance trendlines are horizontal<br/>
        channel_down: both support and resistance trendlines slope downward<br/>
        channel_up: both support and resistance trendlines slope upward<br/>
        double_bottom: stock with 'W' shape that indicates a bullish reversal in trend<br/>
        double_top: stock with 'M' shape that indicates a bearish reversal in trend<br/>
        downgrades: stocks downgraded by analysts today<br/>
        earnings_after: companies reporting earnings today, after market close<br/>
        earnings_before: companies reporting earnings today, before market open<br/>
        head_shoulders: chart formation that predicts a bullish-to-bearish trend reversal<br/>
        head_shoulders_inverse: chart formation that predicts a bearish-to-bullish trend reversal<br/>
        horizontal_sr: horizontal channel of price range between support and resistance trendlines<br/>
        major_news: stocks with the highest news coverage today<br/>
        most_active: stocks with the highest trading volume today<br/>
        most_volatile: stocks with the highest widest high/low trading range today<br/>
        multiple_bottom: same as double_bottom hitting more lows<br/>
        multiple_top: same as double_top hitting more highs<br/>
        new_high: stocks making 52-week high today<br/>
        new_low: stocks making 52-week low today<br/>
        overbought: stock is becoming overvalued and may experience a pullback.<br/>
        oversold: oversold stocks may represent a buying opportunity for investors<br/>
        recent_insider_buying: stocks with recent insider buying activity<br/>
        recent_insider_selling: stocks with recent insider selling activity<br/>
        tl_resistance: once a rising trendline is broken<br/>
        tl_support: once a falling trendline is broken<br/>
        top_gainers: stocks with the highest price gain percent today<br/>
        top_losers: stocks with the highest price percent loss today<br/>
        triangle_ascending: upward trendline support and horizontal trendline resistance<br/>
        triangle_descending: horizontal trendline support and downward trendline resistance<br/>
        unusual_volume: stocks with unusually high volume today - the highest relative volume ratio<br/>
        upgrades: stocks upgraded by analysts today<br/>
        wedge: upward trendline support, downward trendline resistance (continuation)<br/>
        wedge_down: downward trendline support and downward trendline resistance (reversal)<br/>
        wedge_up: upward trendline support and upward trendline resistance (reversal)<br/>
</details>

**preset**: `str | None`<br/>
<details>
<summary mdxType="summary">Description</summary>

A configured preset file to use for the query. This overrides all other query parameters except 'metric', and 'limit'. Presets (.ini text files) can be created and modified in the '~/OpenBBUserData/finviz/presets' directory. If the path does not exist, it will be created and populated with the default presets on the first run. Refer to the file, 'screener_template.ini', for the format and options.<br/>
<br/>
Note: Syntax of parameters in preset files must follow the template file exactly  - i.e, Analyst Recom. = Strong Buy (1)<br/>
</details>

**filters_dict**: `dict | str | None`<br/>
A formatted dictionary, or serialized JSON string, of additional filters to apply to the query. This parameter can be used as an alternative to preset files, and is ignored when a preset is supplied. Invalid entries will raise an error. Syntax should follow the 'screener_template.ini' file.

**limit**: `int | None`<br/>
The number of data entries to return.

</TabItem>
<TabItem value='fmp' label='fmp'>

**mktcap_min**: `int | None`<br/>
Filter by market cap greater than this value.

**mktcap_max**: `int | None`<br/>
Filter by market cap less than this value.

**price_min**: `float | None`<br/>
Filter by price greater than this value.

**price_max**: `float | None`<br/>
Filter by price less than this value.

**beta_min**: `float | None`<br/>
Filter by a beta greater than this value.

**beta_max**: `float | None`<br/>
Filter by a beta less than this value.

**volume_min**: `int | None`<br/>
Filter by volume greater than this value.

**volume_max**: `int | None`<br/>
Filter by volume less than this value.

**dividend_min**: `float | None`<br/>
Filter by dividend amount greater than this value.

**dividend_max**: `float | None`<br/>
Filter by dividend amount less than this value.

**sector**: `Literal['consumer_cyclical', 'energy', 'technology', 'industrials', 'financial_services', 'basic_materials', 'communication_services', 'consumer_defensive', 'healthcare', 'real_estate', 'utilities', 'industrial_goods', 'financial', 'services'] | None`<br/>
Filter by sector.

**industry**: `str | None`<br/>
Filter by industry.

**country**: `Country | None`<br/>
Filter by country. Accepts ISO 3166-1 alpha-2 codes (e.g., 'US', 'DE'), alpha-3 codes (e.g., 'USA'), or country names (e.g., 'United States', 'united_states').

**exchange**: `Exchange | None`<br/>
Filter by exchange. Accepts ISO 10383 MIC codes (e.g., 'XNAS', 'XNYS'), acronyms (e.g., 'NASDAQ', 'NYSE'), or exchange names (e.g., 'New York Stock Exchange').

**is_etf**: `bool | None`<br/>
If true, includes ETFs.

**is_active**: `bool | None`<br/>
If false, returns only inactive tickers.

**is_fund**: `bool | None`<br/>
If true, includes funds.

**all_share_classes**: `bool | None`<br/>
If true, includes all share classes of a equity.

**limit**: `int | None`<br/>
*Default:* 50000<br/>
Limit the number of results to return.

</TabItem>
<TabItem value='nasdaq' label='nasdaq'>

**exchange**: `Literal['all', 'nasdaq', 'nyse', 'amex'] | None`<br/>
*Default:* all<br/>
Filter by exchange.

**exsubcategory**: `Literal['all', 'ngs', 'ngm', 'ncm', 'adr'] | None`<br/>
*Default:* all<br/>
<details>
<summary mdxType="summary">Description</summary>

Filter by exchange subcategory.<br/>
- NGS - Nasdaq Global Select Market<br/>
- NGM - Nasdaq Global Market<br/>
- NCM - Nasdaq Capital Market<br/>
- ADR - American Depository Receipt<br/>
</details>

**mktcap**: `Literal['all', 'mega', 'large', 'mid', 'small', 'micro'] | None`<br/>
*Default:* all<br/>
<details>
<summary mdxType="summary">Description</summary>

Filter by market cap.<br/>
- Mega - > 200B<br/>
- Large - 10B - 200B<br/>
- Mid - 2B - 10B<br/>
- Small - 300M - 2B<br/>
- Micro - 50M - 300M<br/>
</details>

**recommendation**: `Literal['all', 'strong_buy', 'buy', 'hold', 'sell', 'strong_sell'] | None`<br/>
*Default:* all<br/>
Filter by consensus analyst action.

**sector**: `Literal['all', 'energy', 'basic_materials', 'industrials', 'consumer_staples', 'consumer_discretionary', 'health_care', 'financial_services', 'technology', 'communication_services', 'utilities', 'real_estate'] | None`<br/>
*Default:* all<br/>
Filter by sector.

**region**: `Literal['all', 'africa', 'asia', 'australia_and_south_pacific', 'caribbean', 'europe', 'middle_east', 'north_america', 'south_america'] | None`<br/>
*Default:* all<br/>
Filter by region.

**country**: `Literal['all', 'argentina', 'armenia', 'australia', 'austria', 'belgium', 'bermuda', 'brazil', 'canada', 'cayman_islands', 'chile', 'colombia', 'costa_rica', 'curacao', 'cyprus', 'denmark', 'finland', 'france', 'germany', 'greece', 'guernsey', 'hong_kong', 'india', 'indonesia', 'ireland', 'isle_of_man', 'israel', 'italy', 'japan', 'jersey', 'luxembourg', 'macau', 'mexico', 'monaco', 'netherlands', 'norway', 'panama', 'peru', 'philippines', 'puerto_rico', 'russia', 'singapore', 'south_africa', 'south_korea', 'spain', 'sweden', 'switzerland', 'taiwan', 'turkey', 'united_kingdom', 'united_states', 'usa'] | None`<br/>
*Default:* all<br/>
Filter by country. Accepts country names, ISO 3166-1 alpha-2/alpha-3 codes, or 'all' for all countries. Multiple comma-separated values allowed.

**limit**: `int | None`<br/>
Limit the number of results to return.

</TabItem>
<TabItem value='yfinance' label='yfinance'>

**country**: `str | None`<br/>
*Default:* us<br/>
Filter by country. Accepts ISO 3166-1 alpha-2 codes (e.g., 'US', 'DE'), alpha-3 codes (e.g., 'USA'), country names (e.g., 'United States'), or 'all' for all countries.

**exchange**: `Literal['ams', 'aqs', 'ase', 'asx', 'ath', 'ber', 'bru', 'bse', 'bts', 'bud', 'bue', 'bvb', 'bvc', 'ccs', 'cnq', 'cph', 'cxe', 'dfm', 'doh', 'dus', 'ebs', 'fka', 'fra', 'ger', 'ham', 'han', 'hel', 'hkg', 'ice', 'iob', 'ise', 'ist', 'jkt', 'jnb', 'jpx', 'kls', 'kuw', 'lis', 'lit', 'lse', 'mce', 'mex', 'mil', 'mun', 'ncm', 'neo', 'ngm', 'nms', 'nsi', 'nyq', 'nze', 'oem', 'oqb', 'oqx', 'osl', 'par', 'pnk', 'pra', 'ris', 'sau', 'ses', 'set', 'sgo', 'shh', 'shz', 'sto', 'stu', 'tai', 'tal', 'tlv', 'tor', 'two', 'van', 'vie', 'vse', 'wse'] | None`<br/>
Filter by exchange.

**sector**: `Literal['basic_materials', 'communication_services', 'consumer_cyclical', 'consumer_defensive', 'energy', 'financial_services', 'healthcare', 'industrials', 'real_estate', 'technology', 'utilities'] | None`<br/>
Filter by sector.

**industry**: `str | None`<br/>
Filter by industry.

**mktcap_min**: `int | None`<br/>
*Default:* 500000000<br/>
Filter by market cap greater than this value. Default is 500M.

**mktcap_max**: `int | None`<br/>
Filter by market cap less than this value.

**price_min**: `float | None`<br/>
*Default:* 5<br/>
Filter by price greater than this value. Default is, 5

**price_max**: `float | None`<br/>
Filter by price less than this value.

**volume_min**: `int | None`<br/>
*Default:* 10000<br/>
Filter by volume greater than this value. Default is, 10K

**volume_max**: `int | None`<br/>
Filter by volume less than this value.

**beta_min**: `float | None`<br/>
Filter by a beta greater than this value.

**beta_max**: `float | None`<br/>
Filter by a beta less than this value.

**limit**: `int | None`<br/>
*Default:* 200<br/>
Limit the number of results returned. Default is, 200. Set to, 0, for all results.

</TabItem>
</Tabs>

## Data

<Tabs>
<TabItem value='standard' label='standard'>

**symbol**: `str`<br/>
Symbol representing the entity requested in the data.

**name**: `str | None`<br/>
Name of the company.

</TabItem>
<TabItem value='finviz' label='finviz'>

**symbol**: `str`<br/>
Symbol representing the entity requested in the data.

**name**: `str | None`<br/>
Name of the company.

**earnings_date**: `str | None`<br/>
Earnings date, where 'a' and 'b' mean after and before market close, respectively.

**country**: `str | None`<br/>
Country of the company.

**sector**: `str | None`<br/>
Sector of the company.

**industry**: `str | None`<br/>
Industry of the company.

**beta**: `float | None`<br/>
Beta of the stock.

**analyst_recommendation**: `float | None`<br/>
Analyst's mean recommendation. (1=Buy 5=Sell).

**market_cap**: `float | None`<br/>
Market capitalization of the company.

**price**: `float | None`<br/>
Price of a share.

**change_percent**: `float | None`<br/>
Price change percentage.

**change_from_open**: `float | None`<br/>
Price change percentage, from the opening price.

**gap**: `float | None`<br/>
Price gap percentage, from the previous close.

**volume**: `int | float | None`<br/>
The trading volume.

**volume_avg**: `int | float | None`<br/>
3-month average daily volume.

**volume_relative**: `float | None`<br/>
Current volume relative to the average.

**average_true_range**: `float | None`<br/>
Average true range (14).

**price_change_1w**: `float | None`<br/>
One-week price return.

**price_change_1m**: `float | None`<br/>
One-month price return.

**price_change_3m**: `float | None`<br/>
Three-month price return.

**price_change_6m**: `float | None`<br/>
Six-month price return.

**price_change_1y**: `float | None`<br/>
One-year price return.

**price_change_ytd**: `float | None`<br/>
Year-to-date price return.

**volatility_1w**: `float | None`<br/>
One-week volatility.

**volatility_1m**: `float | None`<br/>
One-month volatility.

**year_high_percent**: `float | None`<br/>
Percent difference from current price to the 52-week high.

**year_low_percent**: `float | None`<br/>
Percent difference from current price to the 52-week low.

**sma20_percent**: `float | None`<br/>
Percent difference from current price to the 20-day simple moving average.

**sma50_percent**: `float | None`<br/>
Percent difference from current price to the 50-day simple moving average.

**sma200_percent**: `float | None`<br/>
Percent difference from current price to the 200-day simple moving average.

**rsi**: `float | None`<br/>
Relative strength index (14).

**shares_outstanding**: `int | float | None`<br/>
Number of shares outstanding.

**shares_float**: `int | float | None`<br/>
Number of shares available to trade.

**short_interest**: `float | None`<br/>
Percent of float reported as short.

**short_ratio**: `float | None`<br/>
Short interest ratio

**insider_ownership**: `float | None`<br/>
Insider ownership as a percentage.

**insider_ownership_change**: `float | None`<br/>
6-month change in insider ownership percentage.

**institutional_ownership**: `float | None`<br/>
Institutional ownership as a percentage.

**institutional_ownership_change**: `float | None`<br/>
3-month change in institutional ownership percentage.

**price_to_earnings**: `float | None`<br/>
Price to earnings ratio.

**forward_pe**: `float | None`<br/>
Forward price to earnings ratio.

**peg_ratio**: `float | None`<br/>
Price/Earnings-To-Growth (PEG) ratio.

**price_to_sales**: `float | None`<br/>
Price to sales ratio.

**price_to_book**: `float | None`<br/>
Price to book ratio.

**price_to_cash**: `float | None`<br/>
Price to cash ratio.

**price_to_fcf**: `float | None`<br/>
Price to free cash flow ratio.

**eps_growth_past_1y**: `float | None`<br/>
EPS growth for this year.

**eps_growth_next_1y**: `float | None`<br/>
EPS growth next year.

**eps_growth_past_5y**: `float | None`<br/>
EPS growth for the previous 5 years.

**eps_growth_next_5y**: `float | None`<br/>
EPS growth for the next 5 years.

**sales_growth_past_5y**: `float | None`<br/>
Sales growth for the previous 5 years.

**dividend_yield**: `float | None`<br/>
Annualized dividend yield.

**return_on_assets**: `float | None`<br/>
Return on assets.

**return_on_equity**: `float | None`<br/>
Return on equity.

**return_on_investment**: `float | None`<br/>
Return on investment.

**current_ratio**: `float | None`<br/>
Current ratio.

**quick_ratio**: `float | None`<br/>
Quick ratio.

**long_term_debt_to_equity**: `float | None`<br/>
Long term debt to equity ratio.

**debt_to_equity**: `float | None`<br/>
Total debt to equity ratio.

**gross_margin**: `float | None`<br/>
Gross margin.

**operating_margin**: `float | None`<br/>
Operating margin.

**profit_margin**: `float | None`<br/>
Profit margin.

</TabItem>
<TabItem value='fmp' label='fmp'>

**symbol**: `str`<br/>
Symbol representing the entity requested in the data.

**name**: `str | None`<br/>
Name of the company.

**market_cap**: `int | None`<br/>
The market cap of ticker.

**sector**: `str | None`<br/>
The sector the ticker belongs to.

**industry**: `str | None`<br/>
The industry ticker belongs to.

**beta**: `float | None`<br/>
The beta of the ETF.

**price**: `float | None`<br/>
The current price.

**last_annual_dividend**: `float | None`<br/>
The last annual amount dividend paid.

**volume**: `int | None`<br/>
The current trading volume.

**exchange**: `str | None`<br/>
The exchange code the asset trades on.

**exchange_name**: `str | None`<br/>
The full name of the primary exchange.

**country**: `str | None`<br/>
The two-letter country abbreviation where the head office is located.

**is_etf**: `bool | None`<br/>
Whether the ticker is an ETF.

**is_fund**: `bool | None`<br/>
Whether the ticker is a fund.

**actively_trading**: `bool | None`<br/>
Whether the ETF is actively trading.

</TabItem>
<TabItem value='nasdaq' label='nasdaq'>

**symbol**: `str`<br/>
Symbol representing the entity requested in the data.

**name**: `str | None`<br/>
Name of the company.

**last_price**: `float`<br/>
Last sale price.

**change**: `float | None`<br/>
1-day change in price.

**change_percent**: `float | None`<br/>
1-day percent change in price.

**market_cap**: `int | None`<br/>
Market cap.

</TabItem>
<TabItem value='yfinance' label='yfinance'>

**symbol**: `str`<br/>
Symbol representing the entity requested in the data.

**name**: `str | None`<br/>
Name of the company.

**open**: `float | None`<br/>
Open price for the day.

**high**: `float | None`<br/>
High price for the day.

**low**: `float | None`<br/>
Low price for the day.

**previous_close**: `float | None`<br/>
Previous close price.

**ma50**: `float | None`<br/>
50-day moving average.

**ma200**: `float | None`<br/>
200-day moving average.

**year_high**: `float | None`<br/>
52-week high.

**year_low**: `float | None`<br/>
52-week low.

**market_cap**: `float | None`<br/>
Market Cap.

**shares_outstanding**: `float | None`<br/>
Shares outstanding.

**book_value**: `float | None`<br/>
Book value per share.

**price_to_book**: `float | None`<br/>
Price to book ratio.

**eps_ttm**: `float | None`<br/>
Earnings per share over the trailing twelve months.

**eps_forward**: `float | None`<br/>
Forward earnings per share.

**pe_forward**: `float | None`<br/>
Forward price-to-earnings ratio.

**dividend_yield**: `float | None`<br/>
Trailing twelve month dividend yield.

**exchange**: `str | None`<br/>
Exchange where the stock is listed.

**exchange_timezone**: `str | None`<br/>
Timezone of the exchange.

**earnings_date**: `datetime | None`<br/>
Most recent earnings date.

**currency**: `str | None`<br/>
Currency of the price data.

</TabItem>
</Tabs>

