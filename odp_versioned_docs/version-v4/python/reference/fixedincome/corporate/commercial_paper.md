---
title: "commercial_paper"
description: "Learn about commercial paper, a form of short-term promissory notes issued  primarily by corporations. Discover how it can help raise cash for current transactions  and serve as a lower-cost alternative to bank loans. Explore the parameters and  data returned by the commercial paper API endpoint."
keywords:
- commercial paper
- short-term promissory notes
- corporations
- raise cash
- lower-cost alternative
- start_date
- end_date
- maturity
- category
- grade
- provider
- results
- warnings
- chart
- metadata
- data
- date
- rate
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="fixedincome/corporate/commercial_paper - Reference | OpenBB Docs" />

<!-- markdownlint-disable MD012 MD031 MD033 -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Commercial Paper.

Commercial paper (CP) consists of short-term, promissory notes issued primarily by corporations.
Maturities range up to 270 days but average about 30 days.
Many companies use CP to raise cash needed for current transactions,
and many find it to be a lower-cost alternative to bank loans.

Examples
--------

```python
from openbb import obb
obb.fixedincome.corporate.commercial_paper()
obb.fixedincome.corporate.commercial_paper(category='all', maturity='15d')
```

## Parameters

<Tabs>
<TabItem value='standard' label='standard'>

**start_date**: `date | None | str`<br/>
Start date of the data, in YYYY-MM-DD format.

**end_date**: `date | None | str`<br/>
End date of the data, in YYYY-MM-DD format.

</TabItem>
<TabItem value='fred' label='fred'>

**start_date**: `date | None | str`<br/>
Start date of the data, in YYYY-MM-DD format.

**end_date**: `date | None | str`<br/>
End date of the data, in YYYY-MM-DD format.

**maturity**: `str | None`<br/>
*Default:* all<br/>
A target maturity.

**category**: `str | None`<br/>
*Default:* all<br/>
The category of asset.

**frequency**: `Literal['a', 'q', 'm', 'w', 'wef', 'weth', 'wew', 'wetu', 'wem', 'wesu', 'wesa', 'bwew', 'bwem'] | None`<br/>
<details>
<summary mdxType="summary">Description</summary>

Frequency aggregation to convert daily data to lower frequency.<br/>
            a = Annual<br/>
            q = Quarterly<br/>
            m = Monthly<br/>
            w = Weekly<br/>
            wef = Weekly, Ending Friday<br/>
            weth = Weekly, Ending Thursday<br/>
            wew = Weekly, Ending Wednesday<br/>
            wetu = Weekly, Ending Tuesday<br/>
            wem = Weekly, Ending Monday<br/>
            wesu = Weekly, Ending Sunday<br/>
            wesa = Weekly, Ending Saturday<br/>
            bwew = Biweekly, Ending Wednesday<br/>
            bwem = Biweekly, Ending Monday<br/>
</details>

**aggregation_method**: `Literal['avg', 'sum', 'eop'] | None`<br/>
<details>
<summary mdxType="summary">Description</summary>

A key that indicates the aggregation method used for frequency aggregation.<br/>
            avg = Average<br/>
            sum = Sum<br/>
            eop = End of Period<br/>
</details>

**transform**: `Literal['chg', 'ch1', 'pch', 'pc1', 'pca', 'cch', 'cca', 'log'] | None`<br/>
<details>
<summary mdxType="summary">Description</summary>

Transformation type<br/>
            None = No transformation<br/>
            chg = Change<br/>
            ch1 = Change from Year Ago<br/>
            pch = Percent Change<br/>
            pc1 = Percent Change from Year Ago<br/>
            pca = Compounded Annual Rate of Change<br/>
            cch = Continuously Compounded Rate of Change<br/>
            cca = Continuously Compounded Annual Rate of Change<br/>
            log = Natural Log<br/>
</details>

</TabItem>
</Tabs>

---

## Returns

**results**: `CommercialPaper`

Serializable results.

**provider**: `Optional[Literal['fred']]`

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

**date**: `date | str`<br/>
The date of the data.

**symbol**: `str | None`<br/>
Symbol representing the entity requested in the data.

**maturity**: `str`<br/>
Maturity length of the item.

**rate**: `float`<br/>
Interest rate.

**title**: `str | None`<br/>
Title of the series.

</TabItem>
<TabItem value='fred' label='fred'>

**date**: `date | str`<br/>
The date of the data.

**symbol**: `str | None`<br/>
Symbol representing the entity requested in the data.

**maturity**: `str`<br/>
Maturity length of the item.

**rate**: `float`<br/>
Interest rate.

**title**: `str | None`<br/>
Title of the series.

**asset_type**: `Literal['asset_backed', 'financial', 'nonfinancial', 'a2p2']`<br/>
The category of asset.

</TabItem>
</Tabs>

