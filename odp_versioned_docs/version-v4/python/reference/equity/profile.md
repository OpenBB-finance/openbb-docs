---
title: "profile"
description: "Get general price and performance metrics of a stock with the Equity  Information API. Retrieve data such as the symbol, name, price, open price, high  price, low price, close price, change in price, change percent, previous close,  type, exchange ID, bid, ask, volume, implied volatility, realized volatility, last  trade timestamp, annual high, and annual low."
keywords:
- equity info
- price and performance metrics
- stock data
- equity profile
- symbol
- provider
- data
- parameters
- returns
- cboe
- EquityInfo
- warnings
- chart
- metadata
- Data
- name
- price
- open price
- high price
- low price
- close price
- change percent
- previous close
- type
- exchange ID
- bid
- ask
- volume
- implied volatility
- realized volatility
- last trade timestamp
- annual high
- annual low
- iv30
- hv30
- iv60
- hv60
- iv90
- hv90
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="equity/profile - Reference | OpenBB Docs" />

<!-- markdownlint-disable MD012 MD031 MD033 -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Get general information about a company. This includes company name, industry, sector and price data.

Examples
--------

```python
from openbb import obb
obb.equity.profile(symbol='AAPL')
```

## Parameters

<Tabs>
<TabItem value='standard' label='standard'>

**symbol**: `str | list[str]`<br/>
Symbol to get data for. Multiple items allowed for provider(s): finviz, fmp, intrinio, tmx, yfinance.

</TabItem>
<TabItem value='finviz' label='finviz'>

**symbol**: `str | list[str]`<br/>
Symbol to get data for. Multiple items allowed for provider(s): finviz, fmp, intrinio, tmx, yfinance.

</TabItem>
<TabItem value='fmp' label='fmp'>

**symbol**: `str | list[str]`<br/>
Symbol to get data for. Multiple items allowed for provider(s): finviz, fmp, intrinio, tmx, yfinance.

</TabItem>
<TabItem value='intrinio' label='intrinio'>

**symbol**: `str | list[str]`<br/>
Symbol to get data for. Multiple items allowed for provider(s): finviz, fmp, intrinio, tmx, yfinance.

</TabItem>
<TabItem value='tmx' label='tmx'>

**symbol**: `str | list[str]`<br/>
Symbol to get data for. Multiple items allowed for provider(s): finviz, fmp, intrinio, tmx, yfinance.

</TabItem>
<TabItem value='yfinance' label='yfinance'>

**symbol**: `str | list[str]`<br/>
Symbol to get data for. Multiple items allowed for provider(s): finviz, fmp, intrinio, tmx, yfinance.

</TabItem>
</Tabs>

---

## Returns

**results**: `EquityInfo`

Serializable results.

**provider**: `Optional[Literal['finviz', 'fmp', 'intrinio', 'tmx', 'yfinance']]`

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
Common name of the company.

**cik**: `str | None`<br/>
Central Index Key (CIK) for the requested entity.

**cusip**: `str | None`<br/>
CUSIP identifier for the company.

**isin**: `str | None`<br/>
International Securities Identification Number.

**lei**: `str | None`<br/>
Legal Entity Identifier assigned to the company.

**legal_name**: `str | None`<br/>
Official legal name of the company.

**stock_exchange**: `str | None`<br/>
Stock exchange where the company is traded.

**sic**: `int | None`<br/>
Standard Industrial Classification code for the company.

**short_description**: `str | None`<br/>
Short description of the company.

**long_description**: `str | None`<br/>
Long description of the company.

**ceo**: `str | None`<br/>
Chief Executive Officer of the company.

**company_url**: `str | None`<br/>
URL of the company's website.

**business_address**: `str | None`<br/>
Address of the company's headquarters.

**mailing_address**: `str | None`<br/>
Mailing address of the company.

**business_phone_no**: `str | None`<br/>
Phone number of the company's headquarters.

**hq_address1**: `str | None`<br/>
Address of the company's headquarters.

**hq_address2**: `str | None`<br/>
Address of the company's headquarters.

**hq_address_city**: `str | None`<br/>
City of the company's headquarters.

**hq_address_postal_code**: `str | None`<br/>
Zip code of the company's headquarters.

**hq_state**: `str | None`<br/>
State of the company's headquarters.

**hq_country**: `str | None`<br/>
Country of the company's headquarters.

**inc_state**: `str | None`<br/>
State in which the company is incorporated.

**inc_country**: `str | None`<br/>
Country in which the company is incorporated.

**employees**: `int | None`<br/>
Number of employees working for the company.

**entity_legal_form**: `str | None`<br/>
Legal form of the company.

**entity_status**: `str | None`<br/>
Status of the company.

**latest_filing_date**: `date | None`<br/>
Date of the company's latest filing.

**irs_number**: `str | None`<br/>
IRS number assigned to the company.

**sector**: `str | None`<br/>
Sector in which the company operates.

**industry_category**: `str | None`<br/>
Category of industry in which the company operates.

**industry_group**: `str | None`<br/>
Group of industry in which the company operates.

**template**: `str | None`<br/>
Template used to standardize the company's financial statements.

**standardized_active**: `bool | None`<br/>
Whether the company is active or not.

**first_fundamental_date**: `date | None`<br/>
Date of the company's first fundamental.

**last_fundamental_date**: `date | None`<br/>
Date of the company's last fundamental.

**first_stock_price_date**: `date | None`<br/>
Date of the company's first stock price.

**last_stock_price_date**: `date | None`<br/>
Date of the company's last stock price.

</TabItem>
<TabItem value='finviz' label='finviz'>

**symbol**: `str`<br/>
Symbol representing the entity requested in the data.

**name**: `str | None`<br/>
Common name of the company.

**cik**: `str | None`<br/>
Central Index Key (CIK) for the requested entity.

**cusip**: `str | None`<br/>
CUSIP identifier for the company.

**isin**: `str | None`<br/>
International Securities Identification Number.

**lei**: `str | None`<br/>
Legal Entity Identifier assigned to the company.

**legal_name**: `str | None`<br/>
Official legal name of the company.

**stock_exchange**: `str | None`<br/>
Stock exchange where the company is traded.

**sic**: `int | None`<br/>
Standard Industrial Classification code for the company.

**short_description**: `str | None`<br/>
Short description of the company.

**long_description**: `str | None`<br/>
Long description of the company.

**ceo**: `str | None`<br/>
Chief Executive Officer of the company.

**company_url**: `str | None`<br/>
URL of the company's website.

**business_address**: `str | None`<br/>
Address of the company's headquarters.

**mailing_address**: `str | None`<br/>
Mailing address of the company.

**business_phone_no**: `str | None`<br/>
Phone number of the company's headquarters.

**hq_address1**: `str | None`<br/>
Address of the company's headquarters.

**hq_address2**: `str | None`<br/>
Address of the company's headquarters.

**hq_address_city**: `str | None`<br/>
City of the company's headquarters.

**hq_address_postal_code**: `str | None`<br/>
Zip code of the company's headquarters.

**hq_state**: `str | None`<br/>
State of the company's headquarters.

**hq_country**: `str | None`<br/>
Country of the company's headquarters.

**inc_state**: `str | None`<br/>
State in which the company is incorporated.

**inc_country**: `str | None`<br/>
Country in which the company is incorporated.

**employees**: `int | None`<br/>
Number of employees working for the company.

**entity_legal_form**: `str | None`<br/>
Legal form of the company.

**entity_status**: `str | None`<br/>
Status of the company.

**latest_filing_date**: `date | None`<br/>
Date of the company's latest filing.

**irs_number**: `str | None`<br/>
IRS number assigned to the company.

**sector**: `str | None`<br/>
Sector in which the company operates.

**industry_category**: `str | None`<br/>
Category of industry in which the company operates.

**industry_group**: `str | None`<br/>
Group of industry in which the company operates.

**template**: `str | None`<br/>
Template used to standardize the company's financial statements.

**standardized_active**: `bool | None`<br/>
Whether the company is active or not.

**first_fundamental_date**: `date | None`<br/>
Date of the company's first fundamental.

**last_fundamental_date**: `date | None`<br/>
Date of the company's last fundamental.

**first_stock_price_date**: `date | None`<br/>
Date of the company's first stock price.

**last_stock_price_date**: `date | None`<br/>
Date of the company's last stock price.

**index**: `str | None`<br/>
Included in indices - i.e., Dow, Nasdaq, or S&P.

**optionable**: `str | None`<br/>
Whether options trade against the ticker.

**shortable**: `str | None`<br/>
If the asset is shortable.

**shares_outstanding**: `str | None`<br/>
The number of shares outstanding, as an abbreviated string.

**shares_float**: `str | None`<br/>
The number of shares in the public float, as an abbreviated string.

**short_interest**: `str | None`<br/>
The last reported number of shares sold short, as an abbreviated string.

**institutional_ownership**: `float | None`<br/>
The institutional ownership of the stock, as a normalized percent.

**market_cap**: `str | None`<br/>
The market capitalization of the stock, as an abbreviated string.

**dividend_yield**: `float | None`<br/>
The dividend yield of the stock, as a normalized percent.

**earnings_date**: `str | None`<br/>
The last, or next confirmed, earnings date and announcement time, as a string. The format is Nov 02 AMC - for after market close.

**beta**: `float | None`<br/>
The beta of the stock relative to the broad market.

</TabItem>
<TabItem value='fmp' label='fmp'>

**symbol**: `str`<br/>
Symbol representing the entity requested in the data.

**name**: `str | None`<br/>
Common name of the company.

**cik**: `str | None`<br/>
Central Index Key (CIK) for the requested entity.

**cusip**: `str | None`<br/>
CUSIP identifier for the company.

**isin**: `str | None`<br/>
International Securities Identification Number.

**lei**: `str | None`<br/>
Legal Entity Identifier assigned to the company.

**legal_name**: `str | None`<br/>
Official legal name of the company.

**stock_exchange**: `str | None`<br/>
Stock exchange where the company is traded.

**sic**: `int | None`<br/>
Standard Industrial Classification code for the company.

**short_description**: `str | None`<br/>
Short description of the company.

**long_description**: `str | None`<br/>
Long description of the company.

**ceo**: `str | None`<br/>
Chief Executive Officer of the company.

**company_url**: `str | None`<br/>
URL of the company's website.

**business_address**: `str | None`<br/>
Address of the company's headquarters.

**mailing_address**: `str | None`<br/>
Mailing address of the company.

**business_phone_no**: `str | None`<br/>
Phone number of the company's headquarters.

**hq_address1**: `str | None`<br/>
Address of the company's headquarters.

**hq_address2**: `str | None`<br/>
Address of the company's headquarters.

**hq_address_city**: `str | None`<br/>
City of the company's headquarters.

**hq_address_postal_code**: `str | None`<br/>
Zip code of the company's headquarters.

**hq_state**: `str | None`<br/>
State of the company's headquarters.

**hq_country**: `str | None`<br/>
Country of the company's headquarters.

**inc_state**: `str | None`<br/>
State in which the company is incorporated.

**inc_country**: `str | None`<br/>
Country in which the company is incorporated.

**employees**: `int | None`<br/>
Number of employees working for the company.

**entity_legal_form**: `str | None`<br/>
Legal form of the company.

**entity_status**: `str | None`<br/>
Status of the company.

**latest_filing_date**: `date | None`<br/>
Date of the company's latest filing.

**irs_number**: `str | None`<br/>
IRS number assigned to the company.

**sector**: `str | None`<br/>
Sector in which the company operates.

**industry_category**: `str | None`<br/>
Category of industry in which the company operates.

**industry_group**: `str | None`<br/>
Group of industry in which the company operates.

**template**: `str | None`<br/>
Template used to standardize the company's financial statements.

**standardized_active**: `bool | None`<br/>
Whether the company is active or not.

**first_fundamental_date**: `date | None`<br/>
Date of the company's first fundamental.

**last_fundamental_date**: `date | None`<br/>
Date of the company's last fundamental.

**first_stock_price_date**: `date | None`<br/>
Date of the company's first stock price.

**last_stock_price_date**: `date | None`<br/>
Date of the company's last stock price.

**is_etf**: `bool`<br/>
If the symbol is an ETF.

**is_actively_trading**: `bool`<br/>
If the company is actively trading.

**is_adr**: `bool`<br/>
If the stock is an ADR.

**is_fund**: `bool`<br/>
If the company is a fund.

**image**: `str | None`<br/>
Image of the company.

**currency**: `str | None`<br/>
Currency in which the stock is traded.

**market_cap**: `int | None`<br/>
Market capitalization of the company.

**last_price**: `float | None`<br/>
The last traded price.

**year_high**: `float | None`<br/>
The one-year high of the price.

**year_low**: `float | None`<br/>
The one-year low of the price.

**volume_avg**: `int | None`<br/>
Average daily trading volume.

**annualized_dividend_amount**: `float | None`<br/>
The annualized dividend payment based on the most recent regular dividend payment.

**beta**: `float | None`<br/>
Beta of the stock relative to the market.

</TabItem>
<TabItem value='intrinio' label='intrinio'>

**symbol**: `str`<br/>
Symbol representing the entity requested in the data.

**name**: `str | None`<br/>
Common name of the company.

**cik**: `str | None`<br/>
Central Index Key (CIK) for the requested entity.

**cusip**: `str | None`<br/>
CUSIP identifier for the company.

**isin**: `str | None`<br/>
International Securities Identification Number.

**lei**: `str | None`<br/>
Legal Entity Identifier assigned to the company.

**legal_name**: `str | None`<br/>
Official legal name of the company.

**stock_exchange**: `str | None`<br/>
Stock exchange where the company is traded.

**sic**: `int | None`<br/>
Standard Industrial Classification code for the company.

**short_description**: `str | None`<br/>
Short description of the company.

**long_description**: `str | None`<br/>
Long description of the company.

**ceo**: `str | None`<br/>
Chief Executive Officer of the company.

**company_url**: `str | None`<br/>
URL of the company's website.

**business_address**: `str | None`<br/>
Address of the company's headquarters.

**mailing_address**: `str | None`<br/>
Mailing address of the company.

**business_phone_no**: `str | None`<br/>
Phone number of the company's headquarters.

**hq_address1**: `str | None`<br/>
Address of the company's headquarters.

**hq_address2**: `str | None`<br/>
Address of the company's headquarters.

**hq_address_city**: `str | None`<br/>
City of the company's headquarters.

**hq_address_postal_code**: `str | None`<br/>
Zip code of the company's headquarters.

**hq_state**: `str | None`<br/>
State of the company's headquarters.

**hq_country**: `str | None`<br/>
Country of the company's headquarters.

**inc_state**: `str | None`<br/>
State in which the company is incorporated.

**inc_country**: `str | None`<br/>
Country in which the company is incorporated.

**employees**: `int | None`<br/>
Number of employees working for the company.

**entity_legal_form**: `str | None`<br/>
Legal form of the company.

**entity_status**: `str | None`<br/>
Status of the company.

**latest_filing_date**: `date | None`<br/>
Date of the company's latest filing.

**irs_number**: `str | None`<br/>
IRS number assigned to the company.

**sector**: `str | None`<br/>
Sector in which the company operates.

**industry_category**: `str | None`<br/>
Category of industry in which the company operates.

**industry_group**: `str | None`<br/>
Group of industry in which the company operates.

**template**: `str | None`<br/>
Template used to standardize the company's financial statements.

**standardized_active**: `bool | None`<br/>
Whether the company is active or not.

**first_fundamental_date**: `date | None`<br/>
Date of the company's first fundamental.

**last_fundamental_date**: `date | None`<br/>
Date of the company's last fundamental.

**first_stock_price_date**: `date | None`<br/>
Date of the company's first stock price.

**last_stock_price_date**: `date | None`<br/>
Date of the company's last stock price.

**id**: `str | None`<br/>
Intrinio ID for the company.

**thea_enabled**: `bool | None`<br/>
Whether the company has been enabled for Thea.

</TabItem>
<TabItem value='tmx' label='tmx'>

**symbol**: `str`<br/>
Symbol representing the entity requested in the data.

**name**: `str | None`<br/>
Common name of the company.

**cik**: `str | None`<br/>
Central Index Key (CIK) for the requested entity.

**cusip**: `str | None`<br/>
CUSIP identifier for the company.

**isin**: `str | None`<br/>
International Securities Identification Number.

**lei**: `str | None`<br/>
Legal Entity Identifier assigned to the company.

**legal_name**: `str | None`<br/>
Official legal name of the company.

**stock_exchange**: `str | None`<br/>
Stock exchange where the company is traded.

**sic**: `int | None`<br/>
Standard Industrial Classification code for the company.

**short_description**: `str | None`<br/>
Short description of the company.

**long_description**: `str | None`<br/>
Long description of the company.

**ceo**: `str | None`<br/>
Chief Executive Officer of the company.

**company_url**: `str | None`<br/>
URL of the company's website.

**business_address**: `str | None`<br/>
Address of the company's headquarters.

**mailing_address**: `str | None`<br/>
Mailing address of the company.

**business_phone_no**: `str | None`<br/>
Phone number of the company's headquarters.

**hq_address1**: `str | None`<br/>
Address of the company's headquarters.

**hq_address2**: `str | None`<br/>
Address of the company's headquarters.

**hq_address_city**: `str | None`<br/>
City of the company's headquarters.

**hq_address_postal_code**: `str | None`<br/>
Zip code of the company's headquarters.

**hq_state**: `str | None`<br/>
State of the company's headquarters.

**hq_country**: `str | None`<br/>
Country of the company's headquarters.

**inc_state**: `str | None`<br/>
State in which the company is incorporated.

**inc_country**: `str | None`<br/>
Country in which the company is incorporated.

**employees**: `int | None`<br/>
Number of employees working for the company.

**entity_legal_form**: `str | None`<br/>
Legal form of the company.

**entity_status**: `str | None`<br/>
Status of the company.

**latest_filing_date**: `date | None`<br/>
Date of the company's latest filing.

**irs_number**: `str | None`<br/>
IRS number assigned to the company.

**sector**: `str | None`<br/>
Sector in which the company operates.

**industry_category**: `str | None`<br/>
Category of industry in which the company operates.

**industry_group**: `str | None`<br/>
Group of industry in which the company operates.

**template**: `str | None`<br/>
Template used to standardize the company's financial statements.

**standardized_active**: `bool | None`<br/>
Whether the company is active or not.

**first_fundamental_date**: `date | None`<br/>
Date of the company's first fundamental.

**last_fundamental_date**: `date | None`<br/>
Date of the company's last fundamental.

**first_stock_price_date**: `date | None`<br/>
Date of the company's first stock price.

**last_stock_price_date**: `date | None`<br/>
Date of the company's last stock price.

**email**: `str | None`<br/>
The email of the company.

**issue_type**: `str | None`<br/>
The issuance type of the asset.

**shares_outstanding**: `int | None`<br/>
The number of listed shares outstanding.

**shares_escrow**: `int | None`<br/>
The number of shares held in escrow.

**shares_total**: `int | None`<br/>
The total number of shares outstanding from all classes.

**dividend_frequency**: `str | None`<br/>
The dividend frequency.

</TabItem>
<TabItem value='yfinance' label='yfinance'>

**symbol**: `str`<br/>
Symbol representing the entity requested in the data.

**name**: `str | None`<br/>
Common name of the company.

**cik**: `str | None`<br/>
Central Index Key (CIK) for the requested entity.

**cusip**: `str | None`<br/>
CUSIP identifier for the company.

**isin**: `str | None`<br/>
International Securities Identification Number.

**lei**: `str | None`<br/>
Legal Entity Identifier assigned to the company.

**legal_name**: `str | None`<br/>
Official legal name of the company.

**stock_exchange**: `str | None`<br/>
Stock exchange where the company is traded.

**sic**: `int | None`<br/>
Standard Industrial Classification code for the company.

**short_description**: `str | None`<br/>
Short description of the company.

**long_description**: `str | None`<br/>
Long description of the company.

**ceo**: `str | None`<br/>
Chief Executive Officer of the company.

**company_url**: `str | None`<br/>
URL of the company's website.

**business_address**: `str | None`<br/>
Address of the company's headquarters.

**mailing_address**: `str | None`<br/>
Mailing address of the company.

**business_phone_no**: `str | None`<br/>
Phone number of the company's headquarters.

**hq_address1**: `str | None`<br/>
Address of the company's headquarters.

**hq_address2**: `str | None`<br/>
Address of the company's headquarters.

**hq_address_city**: `str | None`<br/>
City of the company's headquarters.

**hq_address_postal_code**: `str | None`<br/>
Zip code of the company's headquarters.

**hq_state**: `str | None`<br/>
State of the company's headquarters.

**hq_country**: `str | None`<br/>
Country of the company's headquarters.

**inc_state**: `str | None`<br/>
State in which the company is incorporated.

**inc_country**: `str | None`<br/>
Country in which the company is incorporated.

**employees**: `int | None`<br/>
Number of employees working for the company.

**entity_legal_form**: `str | None`<br/>
Legal form of the company.

**entity_status**: `str | None`<br/>
Status of the company.

**latest_filing_date**: `date | None`<br/>
Date of the company's latest filing.

**irs_number**: `str | None`<br/>
IRS number assigned to the company.

**sector**: `str | None`<br/>
Sector in which the company operates.

**industry_category**: `str | None`<br/>
Category of industry in which the company operates.

**industry_group**: `str | None`<br/>
Group of industry in which the company operates.

**template**: `str | None`<br/>
Template used to standardize the company's financial statements.

**standardized_active**: `bool | None`<br/>
Whether the company is active or not.

**first_fundamental_date**: `date | None`<br/>
Date of the company's first fundamental.

**last_fundamental_date**: `date | None`<br/>
Date of the company's last fundamental.

**first_stock_price_date**: `date | None`<br/>
Date of the company's first stock price.

**last_stock_price_date**: `date | None`<br/>
Date of the company's last stock price.

**exchange_timezone**: `str | None`<br/>
The timezone of the exchange.

**issue_type**: `str | None`<br/>
The issuance type of the asset.

**currency**: `str | None`<br/>
The currency in which the asset is traded.

**market_cap**: `int | None`<br/>
The market capitalization of the asset.

**shares_outstanding**: `int | None`<br/>
The number of listed shares outstanding.

**shares_float**: `int | None`<br/>
The number of shares in the public float.

**shares_implied_outstanding**: `int | None`<br/>
Implied shares outstanding of common equityassuming the conversion of all convertible subsidiary equity into common.

**shares_short**: `int | None`<br/>
The reported number of shares short.

**dividend_yield**: `float | None`<br/>
The dividend yield of the asset, as a normalized percent.

**beta**: `float | None`<br/>
The beta of the asset relative to the broad market.

</TabItem>
</Tabs>

