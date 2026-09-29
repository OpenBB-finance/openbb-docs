---
title: "chains"
description: "Learn how to get the complete options chain for a ticker using the OBB.equity.options.chains  function. Explore the available parameters like symbol and provider, and understand  the data returned, including contract symbol, expiration, strike price, and more."
keywords:
- options chain
- ticker
- complete options chain
- symbol
- provider
- data
- contract symbol
- expiration
- strike price
- option type
- eod date
- trading volume
- open price
- open interest
- high price
- low price
- implied volatility
- delta
- gamma
- theta
- vega
- bid size
- ask size
- theoretical value
- last trade price
- prev close
- change percent
- rho
- last trade timestamp
- dte
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="derivatives/options/chains - Reference | OpenBB Docs" />

<!-- markdownlint-disable MD012 MD031 MD033 -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Get the complete options chain for a ticker.

Examples
--------

```python
from openbb import obb
obb.derivatives.options.chains(symbol='AAPL')
# Use the "date" parameter to get the end-of-day-data for a specific date, where supported.
obb.derivatives.options.chains(symbol='AAPL', date='2023-01-25')
```

## Parameters

<Tabs>
<TabItem value='standard' label='standard'>

**symbol**: `str`<br/>
Symbol to get data for.

<details>
<summary mdxType="summary">Choices</summary>

- BTC
- ETH
- SOL
- XRP
- BNB
- PAXG
</details>

</TabItem>
<TabItem value='cboe' label='cboe'>

**symbol**: `str`<br/>
Symbol to get data for.

<details>
<summary mdxType="summary">Choices</summary>

- BTC
- ETH
- SOL
- XRP
- BNB
- PAXG
</details>

**use_cache**: `bool | None`<br/>
*Default:* True<br/>
When True, the company directories will be cached for24 hours and are used to validate symbols. The results of the function are not cached. Set as False to bypass.

</TabItem>
<TabItem value='deribit' label='deribit'>

**symbol**: `str`<br/>
Symbol to get data for.

<details>
<summary mdxType="summary">Choices</summary>

- BTC
- ETH
- SOL
- XRP
- BNB
- PAXG
</details>

</TabItem>
<TabItem value='intrinio' label='intrinio'>

**symbol**: `str`<br/>
Symbol to get data for.

<details>
<summary mdxType="summary">Choices</summary>

- BTC
- ETH
- SOL
- XRP
- BNB
- PAXG
</details>

**delay**: `Literal['eod', 'realtime', 'delayed'] | None`<br/>
*Default:* eod<br/>
Whether to return delayed, realtime, or eod data.

**date**: `date | None | str`<br/>
The end-of-day date for options chains data.

**option_type**: `Literal['call', 'put'] | None`<br/>
The option type, call or put, 'None' is both (default).

**moneyness**: `Literal['otm', 'itm', 'all'] | None`<br/>
*Default:* all<br/>
Return only contracts that are in or out of the money, default is 'all'. Parameter is ignored when a date is supplied.

**strike_gt**: `int | None`<br/>
Return options with a strike price greater than the given value. Parameter is ignored when a date is supplied.

**strike_lt**: `int | None`<br/>
Return options with a strike price less than the given value. Parameter is ignored when a date is supplied.

**volume_gt**: `int | None`<br/>
Return options with a volume greater than the given value. Parameter is ignored when a date is supplied.

**volume_lt**: `int | None`<br/>
Return options with a volume less than the given value. Parameter is ignored when a date is supplied.

**oi_gt**: `int | None`<br/>
Return options with an open interest greater than the given value. Parameter is ignored when a date is supplied.

**oi_lt**: `int | None`<br/>
Return options with an open interest less than the given value. Parameter is ignored when a date is supplied.

**model**: `Literal['black_scholes', 'bjerk'] | None`<br/>
*Default:* black_scholes<br/>
The pricing model to use for options chains data, default is 'black_scholes'. Parameter is ignored when a date is supplied.

**show_extended_price**: `bool | None`<br/>
*Default:* True<br/>
Whether to include OHLC type fields, default is True. Parameter is ignored when a date is supplied.

**include_related_symbols**: `bool | None`<br/>
*Default:* False<br/>
Include related symbols that end in a 1 or 2 because of a corporate action, default is False.

</TabItem>
<TabItem value='tmx' label='tmx'>

**symbol**: `str`<br/>
Symbol to get data for.

<details>
<summary mdxType="summary">Choices</summary>

- BTC
- ETH
- SOL
- XRP
- BNB
- PAXG
</details>

**date**: `date | None | str`<br/>
A specific date to get data for.

**use_cache**: `bool | None`<br/>
*Default:* True<br/>
Caching is used to validate the supplied ticker symbol, or if a historical EOD chain is requested. To bypass, set to False.

</TabItem>
<TabItem value='tradier' label='tradier'>

**symbol**: `str`<br/>
Symbol to get data for.

<details>
<summary mdxType="summary">Choices</summary>

- BTC
- ETH
- SOL
- XRP
- BNB
- PAXG
</details>

</TabItem>
<TabItem value='yfinance' label='yfinance'>

**symbol**: `str`<br/>
Symbol to get data for.

<details>
<summary mdxType="summary">Choices</summary>

- BTC
- ETH
- SOL
- XRP
- BNB
- PAXG
</details>

</TabItem>
</Tabs>

---

## Returns

**results**: `OptionsChains`

Serializable results.

**provider**: `Optional[Literal['cboe', 'deribit', 'intrinio', 'tmx', 'tradier', 'yfinance']]`

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

**underlying_symbol**: `list[str | None]`<br/>
Underlying symbol for the option.

**underlying_price**: `list[float | None]`<br/>
Price of the underlying stock.

**contract_symbol**: `list[str]`<br/>
Contract symbol for the option.

**eod_date**: `list[date | None]`<br/>
Date for which the options chains are returned.

**expiration**: `list[date]`<br/>
Expiration date of the contract.

**dte**: `list[int | None]`<br/>
Days to expiration of the contract.

**strike**: `list[float]`<br/>
Strike price of the contract.

**option_type**: `list[str]`<br/>
Call or Put.

**contract_size**: `list[int | float | None]`<br/>
Number of underlying units per contract.

**open_interest**: `list[int | float | None]`<br/>
Open interest on the contract.

**volume**: `list[int | float | None]`<br/>
The trading volume.

**theoretical_price**: `list[float | None]`<br/>
Theoretical value of the option.

**last_trade_price**: `list[float | None]`<br/>
Last trade price of the option.

**last_trade_size**: `list[int | float | None]`<br/>
Last trade size of the option.

**last_trade_time**: `list[datetime | None]`<br/>
The timestamp of the last trade.

**tick**: `list[str | None]`<br/>
Whether the last tick was up or down in price.

**bid**: `list[float | None]`<br/>
Current bid price for the option.

**bid_size**: `list[int | float | None]`<br/>
Bid size for the option.

**bid_time**: `list[datetime | None]`<br/>
The timestamp of the bid price.

**bid_exchange**: `list[str | None]`<br/>
The exchange of the bid price.

**ask**: `list[float | None]`<br/>
Current ask price for the option.

**ask_size**: `list[int | float | None]`<br/>
Ask size for the option.

**ask_time**: `list[datetime | None]`<br/>
The timestamp of the ask price.

**ask_exchange**: `list[str | None]`<br/>
The exchange of the ask price.

**mark**: `list[float | None]`<br/>
The mid-price between the latest bid and ask.

**open**: `list[float | None]`<br/>
The open price.

**open_bid**: `list[float | None]`<br/>
The opening bid price for the option that day.

**open_ask**: `list[float | None]`<br/>
The opening ask price for the option that day.

**high**: `list[float | None]`<br/>
The high price.

**bid_high**: `list[float | None]`<br/>
The highest bid price for the option that day.

**ask_high**: `list[float | None]`<br/>
The highest ask price for the option that day.

**low**: `list[float | None]`<br/>
The low price.

**bid_low**: `list[float | None]`<br/>
The lowest bid price for the option that day.

**ask_low**: `list[float | None]`<br/>
The lowest ask price for the option that day.

**close**: `list[float | None]`<br/>
The close price.

**close_size**: `list[int | float | None]`<br/>
The closing trade size for the option that day.

**close_time**: `list[datetime | None]`<br/>
The time of the closing price for the option that day.

**close_bid**: `list[float | None]`<br/>
The closing bid price for the option that day.

**close_bid_size**: `list[int | float | None]`<br/>
The closing bid size for the option that day.

**close_bid_time**: `list[datetime | None]`<br/>
The time of the bid closing price for the option that day.

**close_ask**: `list[float | None]`<br/>
The closing ask price for the option that day.

**close_ask_size**: `list[int | float | None]`<br/>
The closing ask size for the option that day.

**close_ask_time**: `list[datetime | None]`<br/>
The time of the ask closing price for the option that day.

**prev_close**: `list[float | None]`<br/>
The previous close price.

**change**: `list[float | None]`<br/>
The change in the price of the option.

**change_percent**: `list[float | None]`<br/>
Change, in normalized percentage points, of the option.

**implied_volatility**: `list[float | None]`<br/>
Implied volatility of the option.

**delta**: `list[float | None]`<br/>
Delta of the option.

**gamma**: `list[float | None]`<br/>
Gamma of the option.

**theta**: `list[float | None]`<br/>
Theta of the option.

**vega**: `list[float | None]`<br/>
Vega of the option.

**rho**: `list[float | None]`<br/>
Rho of the option.

</TabItem>
<TabItem value='cboe' label='cboe'>

**underlying_symbol**: `list[str | None]`<br/>
Underlying symbol for the option.

**underlying_price**: `list[float | None]`<br/>
Price of the underlying stock.

**contract_symbol**: `list[str]`<br/>
Contract symbol for the option.

**eod_date**: `list[date | None]`<br/>
Date for which the options chains are returned.

**expiration**: `list[date]`<br/>
Expiration date of the contract.

**dte**: `list[int | None]`<br/>
Days to expiration of the contract.

**strike**: `list[float]`<br/>
Strike price of the contract.

**option_type**: `list[str]`<br/>
Call or Put.

**contract_size**: `list[int | float | None]`<br/>
Number of underlying units per contract.

**open_interest**: `list[int | float | None]`<br/>
Open interest on the contract.

**volume**: `list[int | float | None]`<br/>
The trading volume.

**theoretical_price**: `list[float | None]`<br/>
Theoretical value of the option.

**last_trade_price**: `list[float | None]`<br/>
Last trade price of the option.

**last_trade_size**: `list[int | float | None]`<br/>
Last trade size of the option.

**last_trade_time**: `list[datetime | None]`<br/>
The timestamp of the last trade.

**tick**: `list[str | None]`<br/>
Whether the last tick was up or down in price.

**bid**: `list[float | None]`<br/>
Current bid price for the option.

**bid_size**: `list[int | float | None]`<br/>
Bid size for the option.

**bid_time**: `list[datetime | None]`<br/>
The timestamp of the bid price.

**bid_exchange**: `list[str | None]`<br/>
The exchange of the bid price.

**ask**: `list[float | None]`<br/>
Current ask price for the option.

**ask_size**: `list[int | float | None]`<br/>
Ask size for the option.

**ask_time**: `list[datetime | None]`<br/>
The timestamp of the ask price.

**ask_exchange**: `list[str | None]`<br/>
The exchange of the ask price.

**mark**: `list[float | None]`<br/>
The mid-price between the latest bid and ask.

**open**: `list[float | None]`<br/>
The open price.

**open_bid**: `list[float | None]`<br/>
The opening bid price for the option that day.

**open_ask**: `list[float | None]`<br/>
The opening ask price for the option that day.

**high**: `list[float | None]`<br/>
The high price.

**bid_high**: `list[float | None]`<br/>
The highest bid price for the option that day.

**ask_high**: `list[float | None]`<br/>
The highest ask price for the option that day.

**low**: `list[float | None]`<br/>
The low price.

**bid_low**: `list[float | None]`<br/>
The lowest bid price for the option that day.

**ask_low**: `list[float | None]`<br/>
The lowest ask price for the option that day.

**close**: `list[float | None]`<br/>
The close price.

**close_size**: `list[int | float | None]`<br/>
The closing trade size for the option that day.

**close_time**: `list[datetime | None]`<br/>
The time of the closing price for the option that day.

**close_bid**: `list[float | None]`<br/>
The closing bid price for the option that day.

**close_bid_size**: `list[int | float | None]`<br/>
The closing bid size for the option that day.

**close_bid_time**: `list[datetime | None]`<br/>
The time of the bid closing price for the option that day.

**close_ask**: `list[float | None]`<br/>
The closing ask price for the option that day.

**close_ask_size**: `list[int | float | None]`<br/>
The closing ask size for the option that day.

**close_ask_time**: `list[datetime | None]`<br/>
The time of the ask closing price for the option that day.

**prev_close**: `list[float | None]`<br/>
The previous close price.

**change**: `list[float | None]`<br/>
The change in the price of the option.

**change_percent**: `list[float | None]`<br/>
Change, in normalized percentage points, of the option.

**implied_volatility**: `list[float | None]`<br/>
Implied volatility of the option.

**delta**: `list[float | None]`<br/>
Delta of the option.

**gamma**: `list[float | None]`<br/>
Gamma of the option.

**theta**: `list[float | None]`<br/>
Theta of the option.

**vega**: `list[float | None]`<br/>
Vega of the option.

**rho**: `list[float | None]`<br/>
Rho of the option.

</TabItem>
<TabItem value='deribit' label='deribit'>

**underlying_symbol**: `list[str | None]`<br/>
Underlying symbol for the option.

**underlying_price**: `list[float | None]`<br/>
Price of the underlying stock.

**contract_symbol**: `list[str]`<br/>
Contract symbol for the option.

**eod_date**: `list[date | None]`<br/>
Date for which the options chains are returned.

**expiration**: `list[date]`<br/>
Expiration date of the contract.

**dte**: `list[int | None]`<br/>
Days to expiration of the contract.

**strike**: `list[float]`<br/>
Strike price of the contract.

**option_type**: `list[str]`<br/>
Call or Put.

**contract_size**: `list[int | float | None]`<br/>
Number of underlying units per contract.

**open_interest**: `list[int | float | None]`<br/>
Open interest on the contract.

**volume**: `list[int | float | None]`<br/>
The trading volume.

**theoretical_price**: `list[float | None]`<br/>
Theoretical value of the option.

**last_trade_price**: `list[float | None]`<br/>
Last trade price of the option.

**last_trade_size**: `list[int | float | None]`<br/>
Last trade size of the option.

**last_trade_time**: `list[datetime | None]`<br/>
The timestamp of the last trade.

**tick**: `list[str | None]`<br/>
Whether the last tick was up or down in price.

**bid**: `list[float | None]`<br/>
Current bid price for the option.

**bid_size**: `list[int | float | None]`<br/>
Bid size for the option.

**bid_time**: `list[datetime | None]`<br/>
The timestamp of the bid price.

**bid_exchange**: `list[str | None]`<br/>
The exchange of the bid price.

**ask**: `list[float | None]`<br/>
Current ask price for the option.

**ask_size**: `list[int | float | None]`<br/>
Ask size for the option.

**ask_time**: `list[datetime | None]`<br/>
The timestamp of the ask price.

**ask_exchange**: `list[str | None]`<br/>
The exchange of the ask price.

**mark**: `list[float | None]`<br/>
The mid-price between the latest bid and ask.

**open**: `list[float | None]`<br/>
The open price.

**open_bid**: `list[float | None]`<br/>
The opening bid price for the option that day.

**open_ask**: `list[float | None]`<br/>
The opening ask price for the option that day.

**high**: `list[float | None]`<br/>
The high price.

**bid_high**: `list[float | None]`<br/>
The highest bid price for the option that day.

**ask_high**: `list[float | None]`<br/>
The highest ask price for the option that day.

**low**: `list[float | None]`<br/>
The low price.

**bid_low**: `list[float | None]`<br/>
The lowest bid price for the option that day.

**ask_low**: `list[float | None]`<br/>
The lowest ask price for the option that day.

**close**: `list[float | None]`<br/>
The close price.

**close_size**: `list[int | float | None]`<br/>
The closing trade size for the option that day.

**close_time**: `list[datetime | None]`<br/>
The time of the closing price for the option that day.

**close_bid**: `list[float | None]`<br/>
The closing bid price for the option that day.

**close_bid_size**: `list[int | float | None]`<br/>
The closing bid size for the option that day.

**close_bid_time**: `list[datetime | None]`<br/>
The time of the bid closing price for the option that day.

**close_ask**: `list[float | None]`<br/>
The closing ask price for the option that day.

**close_ask_size**: `list[int | float | None]`<br/>
The closing ask size for the option that day.

**close_ask_time**: `list[datetime | None]`<br/>
The time of the ask closing price for the option that day.

**prev_close**: `list[float | None]`<br/>
The previous close price.

**change**: `list[float | None]`<br/>
The change in the price of the option.

**change_percent**: `list[float | None]`<br/>
Change, in normalized percentage points, of the option.

**implied_volatility**: `list[float | None]`<br/>
Implied volatility of the option.

**delta**: `list[float | None]`<br/>
Delta of the option.

**gamma**: `list[float | None]`<br/>
Gamma of the option.

**theta**: `list[float | None]`<br/>
Theta of the option.

**vega**: `list[float | None]`<br/>
Vega of the option.

**rho**: `list[float | None]`<br/>
Rho of the option.

**bid_iv**: `list[float | None]`<br/>
The implied volatility of the bid price.

**ask_iv**: `list[float | None]`<br/>
The implied volatility of the ask price.

**interest_rate**: `list[float | None]`<br/>
The interest rate used by Deribit to calculate greeks.

**underlying_spot_price**: `list[float]`<br/>
The spot price of the underlying asset. The underlying asset is the specific future or index that the option is based on.

**settlement_price**: `list[float | None]`<br/>
The settlement price of the contract.

**min_price**: `list[float | None]`<br/>
The minimum price allowed.

**max_price**: `list[float | None]`<br/>
The maximum price allowed.

**volume_notional**: `list[float | None]`<br/>
The notional trading volume of the contract, as USD or USDC.

**timestamp**: `list[datetime]`<br/>
The datetime of the data, as America/New_York time.

</TabItem>
<TabItem value='intrinio' label='intrinio'>

**underlying_symbol**: `list[str | None]`<br/>
Underlying symbol for the option.

**underlying_price**: `list[float | None]`<br/>
Price of the underlying stock.

**contract_symbol**: `list[str]`<br/>
Contract symbol for the option.

**eod_date**: `list[date | None]`<br/>
Date for which the options chains are returned.

**expiration**: `list[date]`<br/>
Expiration date of the contract.

**dte**: `list[int | None]`<br/>
Days to expiration of the contract.

**strike**: `list[float]`<br/>
Strike price of the contract.

**option_type**: `list[str]`<br/>
Call or Put.

**contract_size**: `list[int | float | None]`<br/>
Number of underlying units per contract.

**open_interest**: `list[int | float | None]`<br/>
Open interest on the contract.

**volume**: `list[int | float | None]`<br/>
The trading volume.

**theoretical_price**: `list[float | None]`<br/>
Theoretical value of the option.

**last_trade_price**: `list[float | None]`<br/>
Last trade price of the option.

**last_trade_size**: `list[int | float | None]`<br/>
Last trade size of the option.

**last_trade_time**: `list[datetime | None]`<br/>
The timestamp of the last trade.

**tick**: `list[str | None]`<br/>
Whether the last tick was up or down in price.

**bid**: `list[float | None]`<br/>
Current bid price for the option.

**bid_size**: `list[int | float | None]`<br/>
Bid size for the option.

**bid_time**: `list[datetime | None]`<br/>
The timestamp of the bid price.

**bid_exchange**: `list[str | None]`<br/>
The exchange of the bid price.

**ask**: `list[float | None]`<br/>
Current ask price for the option.

**ask_size**: `list[int | float | None]`<br/>
Ask size for the option.

**ask_time**: `list[datetime | None]`<br/>
The timestamp of the ask price.

**ask_exchange**: `list[str | None]`<br/>
The exchange of the ask price.

**mark**: `list[float | None]`<br/>
The mid-price between the latest bid and ask.

**open**: `list[float | None]`<br/>
The open price.

**open_bid**: `list[float | None]`<br/>
The opening bid price for the option that day.

**open_ask**: `list[float | None]`<br/>
The opening ask price for the option that day.

**high**: `list[float | None]`<br/>
The high price.

**bid_high**: `list[float | None]`<br/>
The highest bid price for the option that day.

**ask_high**: `list[float | None]`<br/>
The highest ask price for the option that day.

**low**: `list[float | None]`<br/>
The low price.

**bid_low**: `list[float | None]`<br/>
The lowest bid price for the option that day.

**ask_low**: `list[float | None]`<br/>
The lowest ask price for the option that day.

**close**: `list[float | None]`<br/>
The close price.

**close_size**: `list[int | float | None]`<br/>
The closing trade size for the option that day.

**close_time**: `list[datetime | None]`<br/>
The time of the closing price for the option that day.

**close_bid**: `list[float | None]`<br/>
The closing bid price for the option that day.

**close_bid_size**: `list[int | float | None]`<br/>
The closing bid size for the option that day.

**close_bid_time**: `list[datetime | None]`<br/>
The time of the bid closing price for the option that day.

**close_ask**: `list[float | None]`<br/>
The closing ask price for the option that day.

**close_ask_size**: `list[int | float | None]`<br/>
The closing ask size for the option that day.

**close_ask_time**: `list[datetime | None]`<br/>
The time of the ask closing price for the option that day.

**prev_close**: `list[float | None]`<br/>
The previous close price.

**change**: `list[float | None]`<br/>
The change in the price of the option.

**change_percent**: `list[float | None]`<br/>
Change, in normalized percentage points, of the option.

**implied_volatility**: `list[float | None]`<br/>
Implied volatility of the option.

**delta**: `list[float | None]`<br/>
Delta of the option.

**gamma**: `list[float | None]`<br/>
Gamma of the option.

**theta**: `list[float | None]`<br/>
Theta of the option.

**vega**: `list[float | None]`<br/>
Vega of the option.

**rho**: `list[float | None]`<br/>
Rho of the option.

</TabItem>
<TabItem value='tmx' label='tmx'>

**underlying_symbol**: `list[str | None]`<br/>
Underlying symbol for the option.

**underlying_price**: `list[float | None]`<br/>
Price of the underlying stock.

**contract_symbol**: `list[str]`<br/>
Contract symbol for the option.

**eod_date**: `list[date | None]`<br/>
Date for which the options chains are returned.

**expiration**: `list[date]`<br/>
Expiration date of the contract.

**dte**: `list[int | None]`<br/>
Days to expiration of the contract.

**strike**: `list[float]`<br/>
Strike price of the contract.

**option_type**: `list[str]`<br/>
Call or Put.

**contract_size**: `list[int | float | None]`<br/>
Number of underlying units per contract.

**open_interest**: `list[int | float | None]`<br/>
Open interest on the contract.

**volume**: `list[int | float | None]`<br/>
The trading volume.

**theoretical_price**: `list[float | None]`<br/>
Theoretical value of the option.

**last_trade_price**: `list[float | None]`<br/>
Last trade price of the option.

**last_trade_size**: `list[int | float | None]`<br/>
Last trade size of the option.

**last_trade_time**: `list[datetime | None]`<br/>
The timestamp of the last trade.

**tick**: `list[str | None]`<br/>
Whether the last tick was up or down in price.

**bid**: `list[float | None]`<br/>
Current bid price for the option.

**bid_size**: `list[int | float | None]`<br/>
Bid size for the option.

**bid_time**: `list[datetime | None]`<br/>
The timestamp of the bid price.

**bid_exchange**: `list[str | None]`<br/>
The exchange of the bid price.

**ask**: `list[float | None]`<br/>
Current ask price for the option.

**ask_size**: `list[int | float | None]`<br/>
Ask size for the option.

**ask_time**: `list[datetime | None]`<br/>
The timestamp of the ask price.

**ask_exchange**: `list[str | None]`<br/>
The exchange of the ask price.

**mark**: `list[float | None]`<br/>
The mid-price between the latest bid and ask.

**open**: `list[float | None]`<br/>
The open price.

**open_bid**: `list[float | None]`<br/>
The opening bid price for the option that day.

**open_ask**: `list[float | None]`<br/>
The opening ask price for the option that day.

**high**: `list[float | None]`<br/>
The high price.

**bid_high**: `list[float | None]`<br/>
The highest bid price for the option that day.

**ask_high**: `list[float | None]`<br/>
The highest ask price for the option that day.

**low**: `list[float | None]`<br/>
The low price.

**bid_low**: `list[float | None]`<br/>
The lowest bid price for the option that day.

**ask_low**: `list[float | None]`<br/>
The lowest ask price for the option that day.

**close**: `list[float | None]`<br/>
The close price.

**close_size**: `list[int | float | None]`<br/>
The closing trade size for the option that day.

**close_time**: `list[datetime | None]`<br/>
The time of the closing price for the option that day.

**close_bid**: `list[float | None]`<br/>
The closing bid price for the option that day.

**close_bid_size**: `list[int | float | None]`<br/>
The closing bid size for the option that day.

**close_bid_time**: `list[datetime | None]`<br/>
The time of the bid closing price for the option that day.

**close_ask**: `list[float | None]`<br/>
The closing ask price for the option that day.

**close_ask_size**: `list[int | float | None]`<br/>
The closing ask size for the option that day.

**close_ask_time**: `list[datetime | None]`<br/>
The time of the ask closing price for the option that day.

**prev_close**: `list[float | None]`<br/>
The previous close price.

**change**: `list[float | None]`<br/>
The change in the price of the option.

**change_percent**: `list[float | None]`<br/>
Change, in normalized percentage points, of the option.

**implied_volatility**: `list[float | None]`<br/>
Implied volatility of the option.

**delta**: `list[float | None]`<br/>
Delta of the option.

**gamma**: `list[float | None]`<br/>
Gamma of the option.

**theta**: `list[float | None]`<br/>
Theta of the option.

**vega**: `list[float | None]`<br/>
Vega of the option.

**rho**: `list[float | None]`<br/>
Rho of the option.

**transactions**: `list[int | None]`<br/>
Number of transactions for the contract.

**total_value**: `list[float | None]`<br/>
Total value of the transactions.

**settlement_price**: `list[float | None]`<br/>
Settlement price on that date.

</TabItem>
<TabItem value='tradier' label='tradier'>

**underlying_symbol**: `list[str | None]`<br/>
Underlying symbol for the option.

**underlying_price**: `list[float | None]`<br/>
Price of the underlying stock.

**contract_symbol**: `list[str]`<br/>
Contract symbol for the option.

**eod_date**: `list[date | None]`<br/>
Date for which the options chains are returned.

**expiration**: `list[date]`<br/>
Expiration date of the contract.

**dte**: `list[int | None]`<br/>
Days to expiration of the contract.

**strike**: `list[float]`<br/>
Strike price of the contract.

**option_type**: `list[str]`<br/>
Call or Put.

**contract_size**: `list[int | None]`<br/>
Size of the contract.

**open_interest**: `list[int | float | None]`<br/>
Open interest on the contract.

**volume**: `list[int | float | None]`<br/>
The trading volume.

**theoretical_price**: `list[float | None]`<br/>
Theoretical value of the option.

**last_trade_price**: `list[float | None]`<br/>
Last trade price of the option.

**last_trade_size**: `list[int | float | None]`<br/>
Last trade size of the option.

**last_trade_time**: `list[datetime | None]`<br/>
The timestamp of the last trade.

**tick**: `list[str | None]`<br/>
Whether the last tick was up or down in price.

**bid**: `list[float | None]`<br/>
Current bid price for the option.

**bid_size**: `list[int | float | None]`<br/>
Bid size for the option.

**bid_time**: `list[datetime | None]`<br/>
The timestamp of the bid price.

**bid_exchange**: `list[str | None]`<br/>
The exchange of the bid price.

**ask**: `list[float | None]`<br/>
Current ask price for the option.

**ask_size**: `list[int | float | None]`<br/>
Ask size for the option.

**ask_time**: `list[datetime | None]`<br/>
The timestamp of the ask price.

**ask_exchange**: `list[str | None]`<br/>
The exchange of the ask price.

**mark**: `list[float | None]`<br/>
The mid-price between the latest bid and ask.

**open**: `list[float | None]`<br/>
The open price.

**open_bid**: `list[float | None]`<br/>
The opening bid price for the option that day.

**open_ask**: `list[float | None]`<br/>
The opening ask price for the option that day.

**high**: `list[float | None]`<br/>
The high price.

**bid_high**: `list[float | None]`<br/>
The highest bid price for the option that day.

**ask_high**: `list[float | None]`<br/>
The highest ask price for the option that day.

**low**: `list[float | None]`<br/>
The low price.

**bid_low**: `list[float | None]`<br/>
The lowest bid price for the option that day.

**ask_low**: `list[float | None]`<br/>
The lowest ask price for the option that day.

**close**: `list[float | None]`<br/>
The close price.

**close_size**: `list[int | float | None]`<br/>
The closing trade size for the option that day.

**close_time**: `list[datetime | None]`<br/>
The time of the closing price for the option that day.

**close_bid**: `list[float | None]`<br/>
The closing bid price for the option that day.

**close_bid_size**: `list[int | float | None]`<br/>
The closing bid size for the option that day.

**close_bid_time**: `list[datetime | None]`<br/>
The time of the bid closing price for the option that day.

**close_ask**: `list[float | None]`<br/>
The closing ask price for the option that day.

**close_ask_size**: `list[int | float | None]`<br/>
The closing ask size for the option that day.

**close_ask_time**: `list[datetime | None]`<br/>
The time of the ask closing price for the option that day.

**prev_close**: `list[float | None]`<br/>
The previous close price.

**change**: `list[float | None]`<br/>
The change in the price of the option.

**change_percent**: `list[float | None]`<br/>
Change, in normalized percentage points, of the option.

**implied_volatility**: `list[float | None]`<br/>
Implied volatility of the option.

**delta**: `list[float | None]`<br/>
Delta of the option.

**gamma**: `list[float | None]`<br/>
Gamma of the option.

**theta**: `list[float | None]`<br/>
Theta of the option.

**vega**: `list[float | None]`<br/>
Vega of the option.

**rho**: `list[float | None]`<br/>
Rho of the option.

**phi**: `list[float | None]`<br/>
Phi of the option. The sensitivity of the option relative to dividend yield.

**bid_iv**: `list[float | None]`<br/>
Implied volatility of the bid price.

**ask_iv**: `list[float | None]`<br/>
Implied volatility of the ask price.

**orats_final_iv**: `list[float | None]`<br/>
ORATS final implied volatility of the option, updated once per hour.

**year_high**: `list[float | None]`<br/>
52-week high price of the option.

**year_low**: `list[float | None]`<br/>
52-week low price of the option.

**greeks_time**: `list[datetime | None]`<br/>
Timestamp of the last greeks update. Greeks/IV data is updated once per hour.

</TabItem>
<TabItem value='yfinance' label='yfinance'>

**underlying_symbol**: `list[str | None]`<br/>
Underlying symbol for the option.

**underlying_price**: `list[float | None]`<br/>
Price of the underlying stock.

**contract_symbol**: `list[str]`<br/>
Contract symbol for the option.

**eod_date**: `list[date | None]`<br/>
Date for which the options chains are returned.

**expiration**: `list[date]`<br/>
Expiration date of the contract.

**dte**: `list[int | None]`<br/>
Days to expiration of the contract.

**strike**: `list[float]`<br/>
Strike price of the contract.

**option_type**: `list[str]`<br/>
Call or Put.

**contract_size**: `list[int | float | None]`<br/>
Number of underlying units per contract.

**open_interest**: `list[int | float | None]`<br/>
Open interest on the contract.

**volume**: `list[int | float | None]`<br/>
The trading volume.

**theoretical_price**: `list[float | None]`<br/>
Theoretical value of the option.

**last_trade_price**: `list[float | None]`<br/>
Last trade price of the option.

**last_trade_size**: `list[int | float | None]`<br/>
Last trade size of the option.

**last_trade_time**: `list[datetime | None]`<br/>
The timestamp of the last trade.

**tick**: `list[str | None]`<br/>
Whether the last tick was up or down in price.

**bid**: `list[float | None]`<br/>
Current bid price for the option.

**bid_size**: `list[int | float | None]`<br/>
Bid size for the option.

**bid_time**: `list[datetime | None]`<br/>
The timestamp of the bid price.

**bid_exchange**: `list[str | None]`<br/>
The exchange of the bid price.

**ask**: `list[float | None]`<br/>
Current ask price for the option.

**ask_size**: `list[int | float | None]`<br/>
Ask size for the option.

**ask_time**: `list[datetime | None]`<br/>
The timestamp of the ask price.

**ask_exchange**: `list[str | None]`<br/>
The exchange of the ask price.

**mark**: `list[float | None]`<br/>
The mid-price between the latest bid and ask.

**open**: `list[float | None]`<br/>
The open price.

**open_bid**: `list[float | None]`<br/>
The opening bid price for the option that day.

**open_ask**: `list[float | None]`<br/>
The opening ask price for the option that day.

**high**: `list[float | None]`<br/>
The high price.

**bid_high**: `list[float | None]`<br/>
The highest bid price for the option that day.

**ask_high**: `list[float | None]`<br/>
The highest ask price for the option that day.

**low**: `list[float | None]`<br/>
The low price.

**bid_low**: `list[float | None]`<br/>
The lowest bid price for the option that day.

**ask_low**: `list[float | None]`<br/>
The lowest ask price for the option that day.

**close**: `list[float | None]`<br/>
The close price.

**close_size**: `list[int | float | None]`<br/>
The closing trade size for the option that day.

**close_time**: `list[datetime | None]`<br/>
The time of the closing price for the option that day.

**close_bid**: `list[float | None]`<br/>
The closing bid price for the option that day.

**close_bid_size**: `list[int | float | None]`<br/>
The closing bid size for the option that day.

**close_bid_time**: `list[datetime | None]`<br/>
The time of the bid closing price for the option that day.

**close_ask**: `list[float | None]`<br/>
The closing ask price for the option that day.

**close_ask_size**: `list[int | float | None]`<br/>
The closing ask size for the option that day.

**close_ask_time**: `list[datetime | None]`<br/>
The time of the ask closing price for the option that day.

**prev_close**: `list[float | None]`<br/>
The previous close price.

**change**: `list[float | None]`<br/>
The change in the price of the option.

**change_percent**: `list[float | None]`<br/>
Change, in normalized percentage points, of the option.

**implied_volatility**: `list[float | None]`<br/>
Implied volatility of the option.

**delta**: `list[float | None]`<br/>
Delta of the option.

**gamma**: `list[float | None]`<br/>
Gamma of the option.

**theta**: `list[float | None]`<br/>
Theta of the option.

**vega**: `list[float | None]`<br/>
Vega of the option.

**rho**: `list[float | None]`<br/>
Rho of the option.

**in_the_money**: `list[bool | None]`<br/>
Whether the option is in the money.

**currency**: `list[str | None]`<br/>
Currency of the option.

</TabItem>
</Tabs>

