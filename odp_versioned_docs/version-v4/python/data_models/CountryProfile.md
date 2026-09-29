---
title: "Country Profile"
description: "Get a profile of country statistics and economic indicators"
---

<!-- markdownlint-disable MD012 MD031 MD033 -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

---

## Implementation details

### Class names

| Model name | Parameters class | Data class |
| ---------- | ---------------- | ---------- |
| `CountryProfile` | `CountryProfileQueryParams` | `CountryProfileData` |

### Import Statement

```python
from openbb_core.provider.standard_models.country_profile import (
CountryProfileData,
CountryProfileQueryParams,
)
```

## Parameters

<Tabs>
<TabItem value='standard' label='standard'>

**country**: `str | list[str]`<br/>
The country to get data. Multiple items allowed for provider(s): econdb.

</TabItem>
<TabItem value='econdb' label='econdb'>

**country**: `str | list[str]`<br/>
The country to get data. Multiple items allowed for provider(s): econdb.

**latest**: `bool | None`<br/>
*Default:* True<br/>
If True, return only the latest data. If False, return all available data for each indicator.

**use_cache**: `bool | None`<br/>
*Default:* True<br/>
If True, the request will be cached for one day.Using cache is recommended to avoid needlessly requesting the same data.

</TabItem>
</Tabs>

## Data

<Tabs>
<TabItem value='standard' label='standard'>

**country**: `str`<br/>
**population**: `int | None`<br/>
Population.

**gdp_usd**: `float | None`<br/>
Gross Domestic Product, in billions of USD.

**gdp_qoq**: `float | None`<br/>
GDP growth quarter-over-quarter change, as a normalized percent.

**gdp_yoy**: `float | None`<br/>
GDP growth year-over-year change, as a normalized percent.

**cpi_yoy**: `float | None`<br/>
Consumer Price Index year-over-year change, as a normalized percent.

**core_yoy**: `float | None`<br/>
Core Consumer Price Index year-over-year change, as a normalized percent.

**retail_sales_yoy**: `float | None`<br/>
Retail Sales year-over-year change, as a normalized percent.

**industrial_production_yoy**: `float | None`<br/>
Industrial Production year-over-year change, as a normalized percent.

**policy_rate**: `float | None`<br/>
Short term policy rate, as a normalized percent.

**yield_10y**: `float | None`<br/>
10-year government bond yield, as a normalized percent.

**govt_debt_gdp**: `float | None`<br/>
Government debt as a percent (normalized) of GDP.

**current_account_gdp**: `float | None`<br/>
Current account balance as a percent (normalized) of GDP.

**jobless_rate**: `float | None`<br/>
Unemployment rate, as a normalized percent.

</TabItem>
<TabItem value='econdb' label='econdb'>

**country**: `str`<br/>
**population**: `int | None`<br/>
Population.

**gdp_usd**: `float | None`<br/>
Gross Domestic Product, in billions of USD.

**gdp_qoq**: `float | None`<br/>
GDP growth quarter-over-quarter change, as a normalized percent.

**gdp_yoy**: `float | None`<br/>
GDP growth year-over-year change, as a normalized percent.

**cpi_yoy**: `float | None`<br/>
Consumer Price Index year-over-year change, as a normalized percent.

**core_yoy**: `float | None`<br/>
Core Consumer Price Index year-over-year change, as a normalized percent.

**retail_sales_yoy**: `float | None`<br/>
Retail Sales year-over-year change, as a normalized percent.

**industrial_production_yoy**: `float | None`<br/>
Industrial Production year-over-year change, as a normalized percent.

**policy_rate**: `float | None`<br/>
Short term policy rate, as a normalized percent.

**yield_10y**: `float | None`<br/>
10-year government bond yield, as a normalized percent.

**govt_debt_gdp**: `float | None`<br/>
Government debt as a percent (normalized) of GDP.

**current_account_gdp**: `float | None`<br/>
Current account balance as a percent (normalized) of GDP.

**jobless_rate**: `float | None`<br/>
Unemployment rate, as a normalized percent.

</TabItem>
</Tabs>

