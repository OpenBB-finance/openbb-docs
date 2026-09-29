---
title: "variance_inflation_factor"
description: "Calculate VIF (variance inflation factor), which tests for collinearity"
keywords:
- econometrics
- variance_inflation_factor
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="econometrics/variance_inflation_factor - Reference | OpenBB Docs" />

<!-- markdownlint-disable MD012 MD031 MD033 -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Calculate VIF (variance inflation factor), which tests for collinearity.

It quantifies the severity of multicollinearity in an ordinary least squares regression analysis. The square
root of the variance inflation factor indicates how much larger the standard error increases compared to if
that variable had 0 correlation to other predictor variables in the model.

It is defined as:

$ VIF_i = 1 / (1 - R_i^2) $
where $ R_i $ is the coefficient of determination of the regression equation with the column i being the result
from the i:th series being the exogenous variable.

A VIF over 5 indicates a high collinearity and correlation. Values over 10 indicates causes problems, while a
value of 1 indicates no correlation. Thus VIF values between 1 and 5 are most commonly considered acceptable.
In order to improve the results one can often remove a column with high VIF.

For further information see: https://en.wikipedia.org/wiki/Variance_inflation_factor

Examples
--------

```python
from openbb import obb
# Calculate the variance inflation factor.
stock_data = obb.equity.price.historical(symbol='TSLA', start_date='2023-01-01', provider='yfinance').to_df()
obb.econometrics.variance_inflation_factor(data=stock_data, columns=["open", "high", "low", "close"])
obb.econometrics.variance_inflation_factor(columns='['open', 'high', 'low']', data='[{'date': '2023-01-02', 'open': 110.0, 'high': 120.0, 'low': 100.0, 'close': 115.0, 'volume': 10000.0}, {'date': '2023-01-03', 'open': 165.0, 'high': 180.0, 'low': 150.0, 'close': 172.5, 'volume': 15000.0}, {'date': '2023-01-04', 'open': 146.67, 'high': 160.0, 'low': 133.33, 'close': 153.33, 'volume': 13333.33}, {'date': '2023-01-05', 'open': 137.5, 'high': 150.0, 'low': 125.0, 'close': 143.75, 'volume': 12500.0}, {'date': '2023-01-06', 'open': 132.0, 'high': 144.0, 'low': 120.0, 'close': 138.0, 'volume': 12000.0}]')
```

## Parameters

<Tabs>
<TabItem value='standard' label='standard'>

**data**: `ForwardRef('Data') | ForwardRef('DataFrame') | ForwardRef('Series') | ForwardRef('ndarray') | dict | list`<br/>
**columns**: `list[str] | None`<br/>
The columns to calculate to test for collinearity

</TabItem>
</Tabs>

---

## Returns

**results**: `list[Data]`

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
