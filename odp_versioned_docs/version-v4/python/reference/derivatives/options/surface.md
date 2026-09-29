---
title: "surface"
description: "Filter and process the options chains data for volatility"
keywords:
- derivatives
- options
- surface
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="derivatives/options/surface - Reference | OpenBB Docs" />

<!-- markdownlint-disable MD012 MD031 MD033 -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Filter and process the options chains data for volatility.

Data posted can be an instance of OptionsChainsData,
a pandas DataFrame, or a list of dictionaries.
Data should contain the fields:

- `expiration`: The expiration date of the option.
- `strike`: The strike price of the option.
- `option_type`: The type of the option (call or put).
- `implied_volatility`: The implied volatility of the option. Or 'target' field.
- `open_interest`: The open interest of the option.
- `volume`: The trading volume of the option.
- `dte` : Optional, days to expiration (DTE) of the option.
- `underlying_price`: Optional, the price of the underlying asset.

Results from the `/derivatives/options/chains` endpoint are the preferred input.

If `underlying_price` is not supplied in the data as a field, it must be provided as a parameter.

Examples
--------

```python
from openbb import obb
# Filter and process options chains data for volatility.
data = obb.derivatives.options.chains('AAPL', provider='cboe')
surface = obb.derivatives.options.surface(data=data.results, moneyness=20, dte_min=10, dte_max=60, chart=True)
surface.show()
```

## Parameters

<Tabs>
<TabItem value='standard' label='standard'>

**data**: `Data | ForwardRef('Data') | ForwardRef('DataFrame') | ForwardRef('Series') | ForwardRef('ndarray') | dict | list`<br/>
**target**: `str`<br/>
*Default:* implied_volatility<br/>
The field to use as the z-axis. Default is "implied_volatility".

**underlying_price**: `float | None`<br/>
The price of the underlying asset.

**option_type**: `None`<br/>
*Default:* otm<br/>
The type of df to display. Default is "otm". Choices are: ["otm", "itm", "puts", "calls"]

**dte_min**: `int | None`<br/>
Minimum days to expiration (DTE) to filter options.

**dte_max**: `int | None`<br/>
Maximum days to expiration (DTE) to filter options.

**moneyness**: `float | None`<br/>
Specify a % moneyness to target for display, entered as a value between 0 and 100.

**strike_min**: `float | None`<br/>
Minimum strike price to filter options.

**strike_max**: `float | None`<br/>
Maximum strike price to filter options.

**oi**: `bool`<br/>
*Default:* False<br/>
Filter for only options that have open interest. Default is False.

**volume**: `bool`<br/>
*Default:* False<br/>
Filter for only options that have trading volume. Default is False.

**theme**: `Literal['dark', 'light']`<br/>
*Default:* dark<br/>
The theme to use for the chart. Default is "dark". Only valid if `openbb-charting` is installed.

**chart_params**: `dict | None`<br/>
Additional parameters to pass to the charting library. Only valid if `openbb-charting` is installed. Valid keys are: - `title`: The title of the chart. - `xtitle`: Title for the x-axis. - `ytitle`: Title for the y-axis. - `ztitle`: Title for the z-axis. - `colorscale`: The colorscale to use for the chart. - `layout_kwargs`: Additional dictionary to be passed to `fig.update_layout` before output.

**chart**: `bool`<br/>
*Default:* False<br/>
Whether to create a chart or not, by default False.

</TabItem>
</Tabs>

---

## Returns

**results**: `Any`

Serializable results.

**provider**: `str`

Provider name.

**warnings**: `Optional[list[Warning_]]`

list of warnings.

**chart**: `Optional[Chart]`

Chart object.

**extra**: `dict[str, Any]`

Extra info.

---
