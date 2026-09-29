---
title: "Svensson Yield Curve"
description: "Svensson Nominal Yield Curve Data"
---

<!-- markdownlint-disable MD012 MD031 MD033 -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

---

## Implementation details

### Class names

| Model name | Parameters class | Data class |
| ---------- | ---------------- | ---------- |
| `SvenssonYieldCurve` | `SvenssonYieldCurveQueryParams` | `SvenssonYieldCurveData` |

### Import Statement

```python
from openbb_core.provider.standard_models. import (
SvenssonYieldCurveData,
SvenssonYieldCurveQueryParams,
)
```

## Parameters

<Tabs>
<TabItem value='standard' label='standard'>

</TabItem>
<TabItem value='federal_reserve' label='federal_reserve'>

**series_type**: `Literal['all', 'zero_coupon', 'par_yield', 'forward_instantaneous', 'forward_1y', 'parameters', 'beta0', 'beta1', 'beta2', 'beta3', 'tau1', 'tau2', 'sven1f01', 'sven1f04', 'sven1f09', 'svenf01', 'svenf02', 'svenf03', 'svenf04', 'svenf05', 'svenf06', 'svenf07', 'svenf08', 'svenf09', 'svenf10', 'svenf11', 'svenf12', 'svenf13', 'svenf14', 'svenf15', 'svenf16', 'svenf17', 'svenf18', 'svenf19', 'svenf20', 'svenf21', 'svenf22', 'svenf23', 'svenf24', 'svenf25', 'svenf26', 'svenf27', 'svenf28', 'svenf29', 'svenf30', 'svenpy01', 'svenpy02', 'svenpy03', 'svenpy04', 'svenpy05', 'svenpy06', 'svenpy07', 'svenpy08', 'svenpy09', 'svenpy10', 'svenpy11', 'svenpy12', 'svenpy13', 'svenpy14', 'svenpy15', 'svenpy16', 'svenpy17', 'svenpy18', 'svenpy19', 'svenpy20', 'svenpy21', 'svenpy22', 'svenpy23', 'svenpy24', 'svenpy25', 'svenpy26', 'svenpy27', 'svenpy28', 'svenpy29', 'svenpy30', 'sveny01', 'sveny02', 'sveny03', 'sveny04', 'sveny05', 'sveny06', 'sveny07', 'sveny08', 'sveny09', 'sveny10', 'sveny11', 'sveny12', 'sveny13', 'sveny14', 'sveny15', 'sveny16', 'sveny17', 'sveny18', 'sveny19', 'sveny20', 'sveny21', 'sveny22', 'sveny23', 'sveny24', 'sveny25', 'sveny26', 'sveny27', 'sveny28', 'sveny29', 'sveny30'] | None`<br/>
*Default:* all<br/>
<details>
<summary mdxType="summary">Description</summary>

Type of yield curve series to return. Accepts a single value or comma-separated list for multiple selections. Group options:<br/>
- 'all' (default)<br/>
- 'zero_coupon' (SVENY, continuously compounded)<br/>
- 'par_yield'(SVENPY, coupon-equivalent)<br/>
- 'forward_instantaneous' (SVENF, continuously compounded)<br/>
- 'forward_1y' (SVEN1F, coupon-equivalent)<br/>
- 'parameters' (BETA0-BETA3, TAU1-TAU2)<br/>
<br/>
Individual columns can also be specified (e.g., 'sveny10,sveny20,beta0'). Used to filter columns after fetching.<br/>
</details>

**start_date**: `date | None | str`<br/>
Start date of the data, in YYYY-MM-DD format. Used to filter results after fetching.

**end_date**: `date | None | str`<br/>
End date of the data, in YYYY-MM-DD format. Used to filter results after fetching.

</TabItem>
</Tabs>

## Data

<Tabs>
<TabItem value='standard' label='standard'>

</TabItem>
<TabItem value='federal_reserve' label='federal_reserve'>

**date**: `date | str`<br/>
The date of the data.

**beta0**: `float | None`<br/>
Level component of the Nelson-Siegel-Svensson model. Represents the long-term asymptotic yield.

**beta1**: `float | None`<br/>
Slope component of the Nelson-Siegel-Svensson model. Represents the short-term component.

**beta2**: `float | None`<br/>
First curvature component of the Nelson-Siegel-Svensson model. Represents the medium-term component.

**beta3**: `float | None`<br/>
Second curvature component of the Nelson-Siegel-Svensson model. Provides additional flexibility for fitting the yield curve.

**tau1**: `float | None`<br/>
First decay factor of the Nelson-Siegel-Svensson model. Controls the rate of decay for beta1 and beta2 components.

**tau2**: `float | None`<br/>
Second decay factor of the Nelson-Siegel-Svensson model. Controls the rate of decay for the beta3 component.

**sven1f01**: `float | None`<br/>
One-year forward rate starting 1 year ahead, coupon-equivalent.

**sven1f04**: `float | None`<br/>
One-year forward rate starting 4 years ahead, coupon-equivalent.

**sven1f09**: `float | None`<br/>
One-year forward rate starting 9 years ahead, coupon-equivalent.

**svenf01**: `float | None`<br/>
Instantaneous forward rate at 1-year horizon, continuously compounded.

**svenf02**: `float | None`<br/>
Instantaneous forward rate at 2-year horizon, continuously compounded.

**svenf03**: `float | None`<br/>
Instantaneous forward rate at 3-year horizon, continuously compounded.

**svenf04**: `float | None`<br/>
Instantaneous forward rate at 4-year horizon, continuously compounded.

**svenf05**: `float | None`<br/>
Instantaneous forward rate at 5-year horizon, continuously compounded.

**svenf06**: `float | None`<br/>
Instantaneous forward rate at 6-year horizon, continuously compounded.

**svenf07**: `float | None`<br/>
Instantaneous forward rate at 7-year horizon, continuously compounded.

**svenf08**: `float | None`<br/>
Instantaneous forward rate at 8-year horizon, continuously compounded.

**svenf09**: `float | None`<br/>
Instantaneous forward rate at 9-year horizon, continuously compounded.

**svenf10**: `float | None`<br/>
Instantaneous forward rate at 10-year horizon, continuously compounded.

**svenf11**: `float | None`<br/>
Instantaneous forward rate at 11-year horizon, continuously compounded.

**svenf12**: `float | None`<br/>
Instantaneous forward rate at 12-year horizon, continuously compounded.

**svenf13**: `float | None`<br/>
Instantaneous forward rate at 13-year horizon, continuously compounded.

**svenf14**: `float | None`<br/>
Instantaneous forward rate at 14-year horizon, continuously compounded.

**svenf15**: `float | None`<br/>
Instantaneous forward rate at 15-year horizon, continuously compounded.

**svenf16**: `float | None`<br/>
Instantaneous forward rate at 16-year horizon, continuously compounded.

**svenf17**: `float | None`<br/>
Instantaneous forward rate at 17-year horizon, continuously compounded.

**svenf18**: `float | None`<br/>
Instantaneous forward rate at 18-year horizon, continuously compounded.

**svenf19**: `float | None`<br/>
Instantaneous forward rate at 19-year horizon, continuously compounded.

**svenf20**: `float | None`<br/>
Instantaneous forward rate at 20-year horizon, continuously compounded.

**svenf21**: `float | None`<br/>
Instantaneous forward rate at 21-year horizon, continuously compounded.

**svenf22**: `float | None`<br/>
Instantaneous forward rate at 22-year horizon, continuously compounded.

**svenf23**: `float | None`<br/>
Instantaneous forward rate at 23-year horizon, continuously compounded.

**svenf24**: `float | None`<br/>
Instantaneous forward rate at 24-year horizon, continuously compounded.

**svenf25**: `float | None`<br/>
Instantaneous forward rate at 25-year horizon, continuously compounded.

**svenf26**: `float | None`<br/>
Instantaneous forward rate at 26-year horizon, continuously compounded.

**svenf27**: `float | None`<br/>
Instantaneous forward rate at 27-year horizon, continuously compounded.

**svenf28**: `float | None`<br/>
Instantaneous forward rate at 28-year horizon, continuously compounded.

**svenf29**: `float | None`<br/>
Instantaneous forward rate at 29-year horizon, continuously compounded.

**svenf30**: `float | None`<br/>
Instantaneous forward rate at 30-year horizon, continuously compounded.

**svenpy01**: `float | None`<br/>
Par yield at 1-year maturity, coupon-equivalent.

**svenpy02**: `float | None`<br/>
Par yield at 2-year maturity, coupon-equivalent.

**svenpy03**: `float | None`<br/>
Par yield at 3-year maturity, coupon-equivalent.

**svenpy04**: `float | None`<br/>
Par yield at 4-year maturity, coupon-equivalent.

**svenpy05**: `float | None`<br/>
Par yield at 5-year maturity, coupon-equivalent.

**svenpy06**: `float | None`<br/>
Par yield at 6-year maturity, coupon-equivalent.

**svenpy07**: `float | None`<br/>
Par yield at 7-year maturity, coupon-equivalent.

**svenpy08**: `float | None`<br/>
Par yield at 8-year maturity, coupon-equivalent.

**svenpy09**: `float | None`<br/>
Par yield at 9-year maturity, coupon-equivalent.

**svenpy10**: `float | None`<br/>
Par yield at 10-year maturity, coupon-equivalent.

**svenpy11**: `float | None`<br/>
Par yield at 11-year maturity, coupon-equivalent.

**svenpy12**: `float | None`<br/>
Par yield at 12-year maturity, coupon-equivalent.

**svenpy13**: `float | None`<br/>
Par yield at 13-year maturity, coupon-equivalent.

**svenpy14**: `float | None`<br/>
Par yield at 14-year maturity, coupon-equivalent.

**svenpy15**: `float | None`<br/>
Par yield at 15-year maturity, coupon-equivalent.

**svenpy16**: `float | None`<br/>
Par yield at 16-year maturity, coupon-equivalent.

**svenpy17**: `float | None`<br/>
Par yield at 17-year maturity, coupon-equivalent.

**svenpy18**: `float | None`<br/>
Par yield at 18-year maturity, coupon-equivalent.

**svenpy19**: `float | None`<br/>
Par yield at 19-year maturity, coupon-equivalent.

**svenpy20**: `float | None`<br/>
Par yield at 20-year maturity, coupon-equivalent.

**svenpy21**: `float | None`<br/>
Par yield at 21-year maturity, coupon-equivalent.

**svenpy22**: `float | None`<br/>
Par yield at 22-year maturity, coupon-equivalent.

**svenpy23**: `float | None`<br/>
Par yield at 23-year maturity, coupon-equivalent.

**svenpy24**: `float | None`<br/>
Par yield at 24-year maturity, coupon-equivalent.

**svenpy25**: `float | None`<br/>
Par yield at 25-year maturity, coupon-equivalent.

**svenpy26**: `float | None`<br/>
Par yield at 26-year maturity, coupon-equivalent.

**svenpy27**: `float | None`<br/>
Par yield at 27-year maturity, coupon-equivalent.

**svenpy28**: `float | None`<br/>
Par yield at 28-year maturity, coupon-equivalent.

**svenpy29**: `float | None`<br/>
Par yield at 29-year maturity, coupon-equivalent.

**svenpy30**: `float | None`<br/>
Par yield at 30-year maturity, coupon-equivalent.

**sveny01**: `float | None`<br/>
Zero-coupon yield at 1-year maturity, continuously compounded.

**sveny02**: `float | None`<br/>
Zero-coupon yield at 2-year maturity, continuously compounded.

**sveny03**: `float | None`<br/>
Zero-coupon yield at 3-year maturity, continuously compounded.

**sveny04**: `float | None`<br/>
Zero-coupon yield at 4-year maturity, continuously compounded.

**sveny05**: `float | None`<br/>
Zero-coupon yield at 5-year maturity, continuously compounded.

**sveny06**: `float | None`<br/>
Zero-coupon yield at 6-year maturity, continuously compounded.

**sveny07**: `float | None`<br/>
Zero-coupon yield at 7-year maturity, continuously compounded.

**sveny08**: `float | None`<br/>
Zero-coupon yield at 8-year maturity, continuously compounded.

**sveny09**: `float | None`<br/>
Zero-coupon yield at 9-year maturity, continuously compounded.

**sveny10**: `float | None`<br/>
Zero-coupon yield at 10-year maturity, continuously compounded.

**sveny11**: `float | None`<br/>
Zero-coupon yield at 11-year maturity, continuously compounded.

**sveny12**: `float | None`<br/>
Zero-coupon yield at 12-year maturity, continuously compounded.

**sveny13**: `float | None`<br/>
Zero-coupon yield at 13-year maturity, continuously compounded.

**sveny14**: `float | None`<br/>
Zero-coupon yield at 14-year maturity, continuously compounded.

**sveny15**: `float | None`<br/>
Zero-coupon yield at 15-year maturity, continuously compounded.

**sveny16**: `float | None`<br/>
Zero-coupon yield at 16-year maturity, continuously compounded.

**sveny17**: `float | None`<br/>
Zero-coupon yield at 17-year maturity, continuously compounded.

**sveny18**: `float | None`<br/>
Zero-coupon yield at 18-year maturity, continuously compounded.

**sveny19**: `float | None`<br/>
Zero-coupon yield at 19-year maturity, continuously compounded.

**sveny20**: `float | None`<br/>
Zero-coupon yield at 20-year maturity, continuously compounded.

**sveny21**: `float | None`<br/>
Zero-coupon yield at 21-year maturity, continuously compounded.

**sveny22**: `float | None`<br/>
Zero-coupon yield at 22-year maturity, continuously compounded.

**sveny23**: `float | None`<br/>
Zero-coupon yield at 23-year maturity, continuously compounded.

**sveny24**: `float | None`<br/>
Zero-coupon yield at 24-year maturity, continuously compounded.

**sveny25**: `float | None`<br/>
Zero-coupon yield at 25-year maturity, continuously compounded.

**sveny26**: `float | None`<br/>
Zero-coupon yield at 26-year maturity, continuously compounded.

**sveny27**: `float | None`<br/>
Zero-coupon yield at 27-year maturity, continuously compounded.

**sveny28**: `float | None`<br/>
Zero-coupon yield at 28-year maturity, continuously compounded.

**sveny29**: `float | None`<br/>
Zero-coupon yield at 29-year maturity, continuously compounded.

**sveny30**: `float | None`<br/>
Zero-coupon yield at 30-year maturity, continuously compounded.

</TabItem>
</Tabs>

