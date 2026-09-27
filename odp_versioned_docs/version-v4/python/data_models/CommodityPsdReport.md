---
title: "Commodity Psd Report"
description: "Agriculture commodity production, supply, and distribution PDF reports (World Agricultural Outlook)"
---

<!-- markdownlint-disable MD012 MD031 MD033 -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

---

## Implementation details

### Class names

| Model name | Parameters class | Data class |
| ---------- | ---------------- | ---------- |
| `CommodityPsdReport` | `CommodityPsdReportQueryParams` | `CommodityPsdReportData` |

### Import Statement

```python
from openbb_core.provider.standard_models.commodity_psd_report import (
CommodityPsdReportData,
CommodityPsdReportQueryParams,
)
```

## Parameters

<Tabs>
<TabItem value='standard' label='standard'>

**commodity**: `str`<br/>
Commodity for the report.

<details>
<summary mdxType="summary">Choices</summary>

- citrus
- coffee
- cotton
- dairy
- fruit
- grain
- livestock
- oilseeds
- stone_fruit
- sugar
- tree_nuts
- world_production
</details>

**year**: `int`<br/>
Year of the report.

**month**: `int`<br/>
Month of the report.

</TabItem>
<TabItem value='government_us' label='government_us'>

**commodity**: `str`<br/>
Commodity for the report.

<details>
<summary mdxType="summary">Choices</summary>

- citrus
- coffee
- cotton
- dairy
- fruit
- grain
- livestock
- oilseeds
- stone_fruit
- sugar
- tree_nuts
- world_production
</details>

**year**: `int`<br/>
Year of the report.

**month**: `int`<br/>
Month of the report.

</TabItem>
</Tabs>

## Data

<Tabs>
<TabItem value='standard' label='standard'>

**content**: `str`<br/>
Base64 encoded content.

</TabItem>
<TabItem value='government_us' label='government_us'>

**content**: `str`<br/>
Base64 encoded content.

**data_format**: `dict[str, str] | None`<br/>
Data format information.

</TabItem>
</Tabs>

