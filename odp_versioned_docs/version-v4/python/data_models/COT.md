---
title: "COT"
description: "Get Commitment of Traders Reports"
---

<!-- markdownlint-disable MD012 MD031 MD033 -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

---

## Implementation details

### Class names

| Model name | Parameters class | Data class |
| ---------- | ---------------- | ---------- |
| `COT` | `COTQueryParams` | `COTData` |

### Import Statement

```python
from openbb_core.provider.standard_models.cot import (
COTData,
COTQueryParams,
)
```

## Parameters

<Tabs>
<TabItem value='standard' label='standard'>

**code**: `str`<br/>
A string with the market code.

**start_date**: `date | None | str`<br/>
Start date of the data, in YYYY-MM-DD format. Default is the most recent report.

**end_date**: `date | None | str`<br/>
End date of the data, in YYYY-MM-DD format.

</TabItem>
<TabItem value='cftc' label='cftc'>

**code**: `str`<br/>
A string with the market code.

**start_date**: `date | None | str`<br/>
Start date of the data, in YYYY-MM-DD format. Default is the most recent report.

**end_date**: `date | None | str`<br/>
End date of the data, in YYYY-MM-DD format.

**report_type**: `Literal['legacy', 'disaggregated', 'financial', 'supplemental'] | None`<br/>
*Default:* legacy<br/>
The type of report to retrieve.

**measure**: `Literal['all', 'positions', 'changes', 'percent_of_oi', 'traders', 'concentration'] | None`<br/>
*Default:* all<br/>
Filter columns by measure type. Open interest is always included.

**futures_only**: `bool | None`<br/>
*Default:* False<br/>
Returns the futures-only report. Default is False, for the combined report.

**limit**: `int | None`<br/>
Number of most recent reports to return. Default is all available.

</TabItem>
</Tabs>

## Data

<Tabs>
<TabItem value='standard' label='standard'>

**date**: `date | str`<br/>
The date of the data.

**report_week**: `str | None`<br/>
Report week for the year.

**market_and_exchange_names**: `str | None`<br/>
Market and exchange names.

**cftc_contract_market_code**: `str | None`<br/>
CFTC contract market code.

**cftc_market_code**: `str | None`<br/>
CFTC market code.

**cftc_region_code**: `str | None`<br/>
CFTC region code.

**cftc_commodity_code**: `str | None`<br/>
CFTC commodity code.

**cftc_contract_market_code_quotes**: `str | None`<br/>
CFTC contract market code quotes.

**cftc_market_code_quotes**: `str | None`<br/>
CFTC market code quotes.

**cftc_commodity_code_quotes**: `str | None`<br/>
CFTC commodity code quotes.

**cftc_subgroup_code**: `str | None`<br/>
CFTC subgroup code.

**commodity**: `str | None`<br/>
Commodity.

**commodity_group**: `str | None`<br/>
Commodity group name.

**commodity_subgroup**: `str | None`<br/>
Commodity subgroup name.

**futonly_or_combined**: `str | None`<br/>
If the report is futures-only or combined.

**contract_units**: `str | None`<br/>
Contract units.

</TabItem>
<TabItem value='cftc' label='cftc'>

**date**: `date | str`<br/>
The date of the data.

**report_week**: `str | None`<br/>
Report week for the year.

**market_and_exchange_names**: `str | None`<br/>
Market and exchange names.

**cftc_contract_market_code**: `str | None`<br/>
CFTC contract market code.

**cftc_market_code**: `str | None`<br/>
CFTC market code.

**cftc_region_code**: `str | None`<br/>
CFTC region code.

**cftc_commodity_code**: `str | None`<br/>
CFTC commodity code.

**cftc_contract_market_code_quotes**: `str | None`<br/>
CFTC contract market code quotes.

**cftc_market_code_quotes**: `str | None`<br/>
CFTC market code quotes.

**cftc_commodity_code_quotes**: `str | None`<br/>
CFTC commodity code quotes.

**cftc_subgroup_code**: `str | None`<br/>
CFTC subgroup code.

**commodity**: `str | None`<br/>
Commodity.

**commodity_group**: `str | None`<br/>
Commodity group name.

**commodity_subgroup**: `str | None`<br/>
Commodity subgroup name.

**futonly_or_combined**: `str | None`<br/>
If the report is futures-only or combined.

**contract_units**: `str | None`<br/>
Contract units.

**contract_market_name**: `str | None`<br/>
Short contract market name.

**open_interest_all**: `int | None`<br/>
Total open interest, all contracts.

**open_interest_old**: `int | None`<br/>
Total open interest, old crop year. Legacy/Disaggregated reports.

**open_interest_other**: `int | None`<br/>
Total open interest, other crop year. Legacy/Disaggregated reports.

**non_commercial_positions_long_all**: `int | None`<br/>
Non-commercial long positions, all contracts. Legacy report.

**non_commercial_positions_short_all**: `int | None`<br/>
Non-commercial short positions, all contracts. Legacy report.

**non_commercial_positions_spread_all**: `int | None`<br/>
Non-commercial spreading positions, all contracts. Legacy report.

**non_commercial_positions_long_old**: `int | None`<br/>
Non-commercial long positions, old crop year. Legacy report.

**non_commercial_positions_short_old**: `int | None`<br/>
Non-commercial short positions, old crop year. Legacy report.

**non_commercial_positions_spread**: `int | None`<br/>
Non-commercial spreading positions, old crop year. Legacy report.

**non_commercial_positions_long_other**: `int | None`<br/>
Non-commercial long positions, other crop year. Legacy report.

**non_commercial_positions_short_other**: `int | None`<br/>
Non-commercial short positions, other crop year. Legacy report.

**non_commercial_positions_spread_1**: `int | None`<br/>
Non-commercial spreading positions, other crop year. Legacy report.

**commercial_positions_long_all**: `int | None`<br/>
Commercial long positions, all contracts. Legacy report.

**commercial_positions_short_all**: `int | None`<br/>
Commercial short positions, all contracts. Legacy report.

**commercial_positions_long_old**: `int | None`<br/>
Commercial long positions, old crop year. Legacy report.

**commercial_positions_short_old**: `int | None`<br/>
Commercial short positions, old crop year. Legacy report.

**commercial_positions_long_other**: `int | None`<br/>
Commercial long positions, other crop year. Legacy report.

**commercial_positions_short_other**: `int | None`<br/>
Commercial short positions, other crop year. Legacy report.

**producer_merchant_positions_long**: `int | None`<br/>
Producer/merchant long positions, all contracts. Disaggregated report.

**producer_merchant_positions_short**: `int | None`<br/>
Producer/merchant short positions, all contracts. Disaggregated report.

**producer_merchant_positions_long_1**: `int | None`<br/>
Producer/merchant long positions, old crop year. Disaggregated report.

**producer_merchant_positions_short_1**: `int | None`<br/>
Producer/merchant short positions, old crop year. Disaggregated report.

**producer_merchant_positions_long_2**: `int | None`<br/>
Producer/merchant long positions, other crop year. Disaggregated report.

**producer_merchant_positions_short_2**: `int | None`<br/>
Producer/merchant short positions, other crop year. Disaggregated report.

**swap_positions_long_all**: `int | None`<br/>
Swap dealer long positions, all contracts. Disaggregated report.

**swap_positions_short_all**: `int | None`<br/>
Swap dealer short positions, all contracts. Disaggregated report.

**swap_positions_spread_all**: `int | None`<br/>
Swap dealer spreading positions, all contracts. Disaggregated report.

**swap_positions_long_old**: `int | None`<br/>
Swap dealer long positions, old crop year. Disaggregated report.

**swap_positions_short_old**: `int | None`<br/>
Swap dealer short positions, old crop year. Disaggregated report.

**swap_positions_spread_old**: `int | None`<br/>
Swap dealer spreading positions, old crop year. Disaggregated report.

**swap_positions_long_other**: `int | None`<br/>
Swap dealer long positions, other crop year. Disaggregated report.

**swap_positions_short_other**: `int | None`<br/>
Swap dealer short positions, other crop year. Disaggregated report.

**swap_positions_spread_other**: `int | None`<br/>
Swap dealer spreading positions, other crop year. Disaggregated report.

**managed_money_positions_long_all**: `int | None`<br/>
Managed money long positions, all contracts. Disaggregated report.

**managed_money_positions_short_all**: `int | None`<br/>
Managed money short positions, all contracts. Disaggregated report.

**managed_money_positions_spread**: `int | None`<br/>
Managed money spreading positions, all contracts. Disaggregated report.

**managed_money_positions_long_old**: `int | None`<br/>
Managed money long positions, old crop year. Disaggregated report.

**managed_money_positions_short_old**: `int | None`<br/>
Managed money short positions, old crop year. Disaggregated report.

**managed_money_positions_spread_1**: `int | None`<br/>
Managed money spreading positions, old crop year. Disaggregated report.

**managed_money_positions_long_other**: `int | None`<br/>
Managed money long positions, other crop year. Disaggregated report.

**managed_money_positions_short_other**: `int | None`<br/>
Managed money short positions, other crop year. Disaggregated report.

**managed_money_positions_spread_2**: `int | None`<br/>
Managed money spreading positions, other crop year. Disaggregated report.

**dealer_positions_long_all**: `int | None`<br/>
Dealer/intermediary long positions, all contracts. TFF report.

**dealer_positions_short_all**: `int | None`<br/>
Dealer/intermediary short positions, all contracts. TFF report.

**dealer_positions_spread_all**: `int | None`<br/>
Dealer/intermediary spreading positions, all contracts. TFF report.

**asset_manager_positions_long**: `int | None`<br/>
Asset manager/institutional long positions, all contracts. TFF report.

**asset_manager_positions_short**: `int | None`<br/>
Asset manager/institutional short positions, all contracts. TFF report.

**asset_manager_positions_spread**: `int | None`<br/>
Asset manager/institutional spreading positions, all contracts. TFF report.

**leveraged_funds_positions_long**: `int | None`<br/>
Leveraged funds long positions, all contracts. TFF report.

**leveraged_funds_positions_short**: `int | None`<br/>
Leveraged funds short positions, all contracts. TFF report.

**leveraged_funds_positions_spread**: `int | None`<br/>
Leveraged funds spreading positions, all contracts. TFF report.

**other_reportable_positions_long**: `int | None`<br/>
Other reportable long positions, all contracts. Disaggregated/TFF reports.

**other_reportable_positions_short**: `int | None`<br/>
Other reportable short positions, all contracts. Disaggregated/TFF reports.

**other_reportable_positions_spread**: `int | None`<br/>
Other reportable spreading positions, all contracts. Disaggregated/TFF reports.

**other_reportable_positions_long_1**: `int | None`<br/>
Other reportable long positions, old crop year. Disaggregated report.

**other_reportable_positions_short_1**: `int | None`<br/>
Other reportable short positions, old crop year. Disaggregated report.

**other_reportable_positions_spread_1**: `int | None`<br/>
Other reportable spreading positions, old crop year. Disaggregated report.

**other_reportable_positions_long_2**: `int | None`<br/>
Other reportable long positions, other crop year. Disaggregated report.

**other_reportable_positions_short_2**: `int | None`<br/>
Other reportable short positions, other crop year. Disaggregated report.

**other_reportable_positions_spread_2**: `int | None`<br/>
Other reportable spreading positions, other crop year. Disaggregated report.

**non_commercial_positions_long_all_non_cit**: `int | None`<br/>
Non-commercial long positions excluding CIT, all contracts. Supplemental report.

**non_commercial_positions_short_all_non_cit**: `int | None`<br/>
Non-commercial short positions excluding CIT, all contracts. Supplemental report.

**non_commercial_positions_spread_all_non_cit**: `int | None`<br/>
Non-commercial spreading positions excluding CIT, all contracts. Supplemental report.

**commercial_positions_long_all_non_cit**: `int | None`<br/>
Commercial long positions excluding CIT, all contracts. Supplemental report.

**commercial_positions_short_all_non_cit**: `int | None`<br/>
Commercial short positions excluding CIT, all contracts. Supplemental report.

**cit_positions_long_all**: `int | None`<br/>
Commodity index trader (CIT) long positions, all contracts. Supplemental report.

**cit_positions_short_all**: `int | None`<br/>
Commodity index trader (CIT) short positions, all contracts. Supplemental report.

**total_reportable_positions_long_all**: `int | None`<br/>
Total reportable long positions, all contracts.

**total_reportable_positions_short**: `int | None`<br/>
Total reportable short positions, all contracts.

**total_reportable_positions_long_old**: `int | None`<br/>
Total reportable long positions, old crop year. Legacy/Disaggregated reports.

**total_reportable_positions_short_1**: `int | None`<br/>
Total reportable short positions, old crop year. Legacy/Disaggregated reports.

**total_reportable_positions_long_other**: `int | None`<br/>
Total reportable long positions, other crop year. Legacy/Disaggregated reports.

**total_reportable_positions_short_2**: `int | None`<br/>
Total reportable short positions, other crop year. Legacy/Disaggregated reports.

**non_reportable_positions_long_all**: `int | None`<br/>
Non-reportable long positions, all contracts.

**non_reportable_positions_short_all**: `int | None`<br/>
Non-reportable short positions, all contracts.

**non_reportable_positions_long_old**: `int | None`<br/>
Non-reportable long positions, old crop year. Legacy/Disaggregated reports.

**non_reportable_positions_short_old**: `int | None`<br/>
Non-reportable short positions, old crop year. Legacy/Disaggregated reports.

**non_reportable_positions_long_other**: `int | None`<br/>
Non-reportable long positions, other crop year. Legacy/Disaggregated reports.

**non_reportable_positions_short_other**: `int | None`<br/>
Non-reportable short positions, other crop year. Legacy/Disaggregated reports.

**change_in_open_interest_all**: `int | None`<br/>
Weekly change in total open interest, all contracts.

**change_open_interest_all**: `int | None`<br/>
Weekly change in total open interest, all contracts. Supplemental report.

**change_in_non_commercial_long_all**: `int | None`<br/>
Weekly change in non-commercial long positions. Legacy report.

**change_in_non_commercial_short_all**: `int | None`<br/>
Weekly change in non-commercial short positions. Legacy report.

**change_in_non_commercial_spread_all**: `int | None`<br/>
Weekly change in non-commercial spreading positions. Legacy report.

**change_in_commercial_long_all**: `int | None`<br/>
Weekly change in commercial long positions. Legacy report.

**change_in_commercial_short_all**: `int | None`<br/>
Weekly change in commercial short positions. Legacy report.

**change_in_producer_merchant_long**: `int | None`<br/>
Weekly change in producer/merchant long positions. Disaggregated report.

**change_in_producer_merchant_short**: `int | None`<br/>
Weekly change in producer/merchant short positions. Disaggregated report.

**change_in_swap_long_all**: `int | None`<br/>
Weekly change in swap dealer long positions. Disaggregated report.

**change_in_swap_short_all**: `int | None`<br/>
Weekly change in swap dealer short positions. Disaggregated report.

**change_in_swap_spread_all**: `int | None`<br/>
Weekly change in swap dealer spreading positions. Disaggregated report.

**change_in_managed_money_long_all**: `int | None`<br/>
Weekly change in managed money long positions. Disaggregated report.

**change_in_managed_money_short_all**: `int | None`<br/>
Weekly change in managed money short positions. Disaggregated report.

**change_in_managed_money_spread**: `int | None`<br/>
Weekly change in managed money spreading positions. Disaggregated report.

**change_in_dealer_long_all**: `int | None`<br/>
Weekly change in dealer/intermediary long positions. TFF report.

**change_in_dealer_short_all**: `int | None`<br/>
Weekly change in dealer/intermediary short positions. TFF report.

**change_in_dealer_spread_all**: `int | None`<br/>
Weekly change in dealer/intermediary spreading positions. TFF report.

**change_in_asset_manager_long**: `int | None`<br/>
Weekly change in asset manager/institutional long positions. TFF report.

**change_in_asset_manager_short**: `int | None`<br/>
Weekly change in asset manager/institutional short positions. TFF report.

**change_in_asset_manager_spread**: `int | None`<br/>
Weekly change in asset manager/institutional spreading positions. TFF report.

**change_in_leveraged_funds_long**: `int | None`<br/>
Weekly change in leveraged funds long positions. TFF report.

**change_in_leveraged_funds_short**: `int | None`<br/>
Weekly change in leveraged funds short positions. TFF report.

**change_in_leveraged_funds_spread**: `int | None`<br/>
Weekly change in leveraged funds spreading positions. TFF report.

**change_in_other_reportable_long**: `int | None`<br/>
Weekly change in other reportable long positions. Disaggregated/TFF reports.

**change_in_other_reportable_short**: `int | None`<br/>
Weekly change in other reportable short positions. Disaggregated/TFF reports.

**change_in_other_reportable_spread**: `int | None`<br/>
Weekly change in other reportable spreading positions. Disaggregated/TFF reports.

**change_non_commercial_long_all_non_cit**: `int | None`<br/>
Weekly change in non-commercial long positions excluding CIT. Supplemental report.

**change_non_commercial_short_all_non_cit**: `int | None`<br/>
Weekly change in non-commercial short positions excluding CIT. Supplemental report.

**change_non_commercial_spread_all_non_cit**: `int | None`<br/>
Weekly change in non-commercial spreading positions excluding CIT. Supplemental report.

**change_commercial_long_all_non_cit**: `int | None`<br/>
Weekly change in commercial long positions excluding CIT. Supplemental report.

**change_commercial_short_all_non_cit**: `int | None`<br/>
Weekly change in commercial short positions excluding CIT. Supplemental report.

**change_cit_long_all**: `int | None`<br/>
Weekly change in commodity index trader long positions. Supplemental report.

**change_cit_short_all**: `int | None`<br/>
Weekly change in commodity index trader short positions. Supplemental report.

**change_in_total_reportable_long_all**: `int | None`<br/>
Weekly change in total reportable long positions.

**change_in_total_reportable_short**: `int | None`<br/>
Weekly change in total reportable short positions.

**change_total_reportable_long_all**: `int | None`<br/>
Weekly change in total reportable long positions. Supplemental report.

**change_total_reportable_short_all**: `int | None`<br/>
Weekly change in total reportable short positions. Supplemental report.

**change_in_non_reportable_long_all**: `int | None`<br/>
Weekly change in non-reportable long positions.

**change_in_non_reportable_short_all**: `int | None`<br/>
Weekly change in non-reportable short positions.

**change_non_reportable_long_all**: `int | None`<br/>
Weekly change in non-reportable long positions. Supplemental report.

**change_non_reportable_short_all**: `int | None`<br/>
Weekly change in non-reportable short positions. Supplemental report.

**open_interest_pct_all**: `float | None`<br/>
Percent of total open interest, all contracts.

**open_interest_pct_old**: `float | None`<br/>
Percent of total open interest, old crop year. Legacy/Disaggregated reports.

**open_interest_pct_other**: `float | None`<br/>
Percent of total open interest, other crop year. Legacy/Disaggregated reports.

**open_interest_pct_non_commercial_long_all**: `float | None`<br/>
Non-commercial long as percent of open interest, all contracts. Legacy report.

**open_interest_pct_non_commercial_short_all**: `float | None`<br/>
Non-commercial short as percent of open interest, all contracts. Legacy report.

**open_interest_pct_non_commercial_spread**: `float | None`<br/>
Non-commercial spreading as percent of open interest, all contracts. Legacy report.

**open_interest_pct_non_commercial_long_old**: `float | None`<br/>
Non-commercial long as percent of open interest, old crop year. Legacy report.

**open_interest_pct_non_commercial_short_old**: `float | None`<br/>
Non-commercial short as percent of open interest, old crop year. Legacy report.

**open_interest_pct_non_commercial_spread_1**: `float | None`<br/>
Non-commercial spreading as percent of open interest, old crop year. Legacy report.

**open_interest_pct_non_commercial_long_other**: `float | None`<br/>
Non-commercial long as percent of open interest, other crop year. Legacy report.

**open_interest_pct_non_commercial_short_other**: `float | None`<br/>
Non-commercial short as percent of open interest, other crop year. Legacy report.

**open_interest_pct_non_commercial_spread_2**: `float | None`<br/>
Non-commercial spreading as percent of open interest, other crop year. Legacy report.

**open_interest_pct_commercial_long_all**: `float | None`<br/>
Commercial long as percent of open interest, all contracts. Legacy report.

**open_interest_pct_commercial_short_all**: `float | None`<br/>
Commercial short as percent of open interest, all contracts. Legacy report.

**open_interest_pct_commercial_long_old**: `float | None`<br/>
Commercial long as percent of open interest, old crop year. Legacy report.

**open_interest_pct_commercial_short_old**: `float | None`<br/>
Commercial short as percent of open interest, old crop year. Legacy report.

**open_interest_pct_commercial_long_other**: `float | None`<br/>
Commercial long as percent of open interest, other crop year. Legacy report.

**open_interest_pct_commercial_short_other**: `float | None`<br/>
Commercial short as percent of open interest, other crop year. Legacy report.

**open_interest_pct_producer_merchant_long**: `float | None`<br/>
Producer/merchant long as percent of open interest, all contracts. Disaggregated report.

**open_interest_pct_producer_merchant_short**: `float | None`<br/>
Producer/merchant short as percent of open interest, all contracts. Disaggregated report.

**open_interest_pct_producer_merchant_long_1**: `float | None`<br/>
Producer/merchant long as percent of open interest, old crop year. Disaggregated report.

**open_interest_pct_producer_merchant_short_1**: `float | None`<br/>
Producer/merchant short as percent of open interest, old crop year. Disaggregated report.

**open_interest_pct_producer_merchant_long_2**: `float | None`<br/>
Producer/merchant long as percent of open interest, other crop year. Disaggregated report.

**open_interest_pct_producer_merchant_short_2**: `float | None`<br/>
Producer/merchant short as percent of open interest, other crop year. Disaggregated report.

**open_interest_pct_swap_long_all**: `float | None`<br/>
Swap dealer long as percent of open interest, all contracts. Disaggregated report.

**open_interest_pct_swap_short_all**: `float | None`<br/>
Swap dealer short as percent of open interest, all contracts. Disaggregated report.

**open_interest_pct_swap_spread_all**: `float | None`<br/>
Swap dealer spreading as percent of open interest, all contracts. Disaggregated report.

**open_interest_pct_swap_long_old**: `float | None`<br/>
Swap dealer long as percent of open interest, old crop year. Disaggregated report.

**open_interest_pct_swap_short_old**: `float | None`<br/>
Swap dealer short as percent of open interest, old crop year. Disaggregated report.

**open_interest_pct_swap_spread_old**: `float | None`<br/>
Swap dealer spreading as percent of open interest, old crop year. Disaggregated report.

**open_interest_pct_swap_long_other**: `float | None`<br/>
Swap dealer long as percent of open interest, other crop year. Disaggregated report.

**open_interest_pct_swap_short_other**: `float | None`<br/>
Swap dealer short as percent of open interest, other crop year. Disaggregated report.

**open_interest_pct_swap_spread_other**: `float | None`<br/>
Swap dealer spreading as percent of open interest, other crop year. Disaggregated report.

**open_interest_pct_managed_money_long_all**: `float | None`<br/>
Managed money long as percent of open interest, all contracts. Disaggregated report.

**open_interest_pct_managed_money_short_all**: `float | None`<br/>
Managed money short as percent of open interest, all contracts. Disaggregated report.

**open_interest_pct_managed_money_spread**: `float | None`<br/>
Managed money spreading as percent of open interest, all contracts. Disaggregated report.

**open_interest_pct_managed_money_long_old**: `float | None`<br/>
Managed money long as percent of open interest, old crop year. Disaggregated report.

**open_interest_pct_managed_money_short_old**: `float | None`<br/>
Managed money short as percent of open interest, old crop year. Disaggregated report.

**open_interest_pct_managed_money_spread_1**: `float | None`<br/>
Managed money spreading as percent of open interest, old crop year. Disaggregated report.

**open_interest_pct_managed_money_long_other**: `float | None`<br/>
Managed money long as percent of open interest, other crop year. Disaggregated report.

**open_interest_pct_managed_money_short_other**: `float | None`<br/>
Managed money short as percent of open interest, other crop year. Disaggregated report.

**open_interest_pct_managed_money_spread_2**: `float | None`<br/>
Managed money spreading as percent of open interest, other crop year. Disaggregated report.

**open_interest_pct_dealer_long_all**: `float | None`<br/>
Dealer/intermediary long as percent of open interest, all contracts. TFF report.

**open_interest_pct_dealer_short_all**: `float | None`<br/>
Dealer/intermediary short as percent of open interest, all contracts. TFF report.

**open_interest_pct_dealer_spread_all**: `float | None`<br/>
Dealer/intermediary spreading as percent of open interest, all contracts. TFF report.

**open_interest_pct_asset_manager_long**: `float | None`<br/>
Asset manager/institutional long as percent of open interest, all contracts. TFF report.

**open_interest_pct_asset_manager_short**: `float | None`<br/>
Asset manager/institutional short as percent of open interest, all contracts. TFF report.

**open_interest_pct_asset_manager_spread**: `float | None`<br/>
Asset manager/institutional spreading as percent of open interest, all contracts. TFF report.

**open_interest_pct_leveraged_funds_long**: `float | None`<br/>
Leveraged funds long as percent of open interest, all contracts. TFF report.

**open_interest_pct_leveraged_funds_short**: `float | None`<br/>
Leveraged funds short as percent of open interest, all contracts. TFF report.

**open_interest_pct_leveraged_funds_spread**: `float | None`<br/>
Leveraged funds spreading as percent of open interest, all contracts. TFF report.

**open_interest_pct_other_reportable_long**: `float | None`<br/>
Other reportable long as percent of open interest, all contracts. Disaggregated/TFF reports.

**open_interest_pct_other_reportable_short**: `float | None`<br/>
Other reportable short as percent of open interest, all contracts. Disaggregated/TFF reports.

**open_interest_pct_other_reportable_spread**: `float | None`<br/>
Other reportable spreading as percent of open interest, all contracts. Disaggregated/TFF reports.

**open_interest_pct_other_reportable_long_1**: `float | None`<br/>
Other reportable long as percent of open interest, old crop year. Disaggregated report.

**open_interest_pct_other_reportable_short_1**: `float | None`<br/>
Other reportable short as percent of open interest, old crop year. Disaggregated report.

**open_interest_pct_other_reportable_spread_1**: `float | None`<br/>
Other reportable spreading as percent of open interest, old crop year. Disaggregated report.

**open_interest_pct_other_reportable_long_2**: `float | None`<br/>
Other reportable long as percent of open interest, other crop year. Disaggregated report.

**open_interest_pct_other_reportable_short_2**: `float | None`<br/>
Other reportable short as percent of open interest, other crop year. Disaggregated report.

**open_interest_pct_other_reportable_spread_2**: `float | None`<br/>
Other reportable spreading as percent of open interest, other crop year. Disaggregated report.

**open_interest_pct_non_commercial_long_all_non_cit**: `float | None`<br/>
Non-commercial long excluding CIT as percent of open interest. Supplemental report.

**open_interest_pct_non_commercial_short_all_non_cit**: `float | None`<br/>
Non-commercial short excluding CIT as percent of open interest. Supplemental report.

**open_interest_pct_non_commercial_spread_all_non_cit**: `float | None`<br/>
Non-commercial spreading excluding CIT as percent of open interest. Supplemental report.

**open_interest_pct_commercial_long_all_non_cit**: `float | None`<br/>
Commercial long excluding CIT as percent of open interest. Supplemental report.

**open_interest_pct_commercial_short_all_non_cit**: `float | None`<br/>
Commercial short excluding CIT as percent of open interest. Supplemental report.

**open_interest_pct_cit_long_all**: `float | None`<br/>
Commodity index trader long as percent of open interest. Supplemental report.

**open_interest_pct_cit_short_all**: `float | None`<br/>
Commodity index trader short as percent of open interest. Supplemental report.

**open_interest_pct_total_reportable_long_all_non_cit**: `float | None`<br/>
Total reportable long excluding CIT as percent of open interest. Supplemental report.

**open_interest_pct_total_reportable_short_all_non_cit**: `float | None`<br/>
Total reportable short excluding CIT as percent of open interest. Supplemental report.

**open_interest_pct_non_reportable_long_all_non_cit**: `float | None`<br/>
Non-reportable long excluding CIT as percent of open interest. Supplemental report.

**open_interest_pct_non_reportable_short_all_non_cit**: `float | None`<br/>
Non-reportable short excluding CIT as percent of open interest. Supplemental report.

**open_interest_pct_total_reportable_long_all**: `float | None`<br/>
Total reportable long as percent of open interest, all contracts.

**open_interest_pct_total_reportable_short**: `float | None`<br/>
Total reportable short as percent of open interest, all contracts.

**open_interest_pct_total_reportable_long_old**: `float | None`<br/>
Total reportable long as percent of open interest, old crop year. Legacy/Disaggregated reports.

**open_interest_pct_total_reportable_short_1**: `float | None`<br/>
Total reportable short as percent of open interest, old crop year. Legacy/Disaggregated reports.

**open_interest_pct_total_reportable_long_other**: `float | None`<br/>
Total reportable long as percent of open interest, other crop year. Legacy/Disaggregated reports.

**open_interest_pct_total_reportable_short_2**: `float | None`<br/>
Total reportable short as percent of open interest, other crop year. Legacy/Disaggregated reports.

**open_interest_pct_non_reportable_long_all**: `float | None`<br/>
Non-reportable long as percent of open interest, all contracts.

**open_interest_pct_non_reportable_short_all**: `float | None`<br/>
Non-reportable short as percent of open interest, all contracts.

**open_interest_pct_non_reportable_long_old**: `float | None`<br/>
Non-reportable long as percent of open interest, old crop year. Legacy/Disaggregated reports.

**open_interest_pct_non_reportable_short_old**: `float | None`<br/>
Non-reportable short as percent of open interest, old crop year. Legacy/Disaggregated reports.

**open_interest_pct_non_reportable_long_other**: `float | None`<br/>
Non-reportable long as percent of open interest, other crop year. Legacy/Disaggregated reports.

**open_interest_pct_non_reportable_short_other**: `float | None`<br/>
Non-reportable short as percent of open interest, other crop year. Legacy/Disaggregated reports.

**traders_total_all**: `int | None`<br/>
Total number of reportable traders, all contracts.

**traders_total_old**: `int | None`<br/>
Total number of reportable traders, old crop year. Legacy/Disaggregated reports.

**traders_total_other**: `int | None`<br/>
Total number of reportable traders, other crop year. Legacy/Disaggregated reports.

**traders_non_commercial_long_all**: `int | None`<br/>
Number of non-commercial long traders, all contracts. Legacy report.

**traders_non_commercial_short_all**: `int | None`<br/>
Number of non-commercial short traders, all contracts. Legacy report.

**traders_non_commercial_spread_all**: `int | None`<br/>
Number of non-commercial spreading traders, all contracts. Legacy report.

**traders_non_commercial_long_old**: `int | None`<br/>
Number of non-commercial long traders, old crop year. Legacy report.

**traders_non_commercial_short_old**: `int | None`<br/>
Number of non-commercial short traders, old crop year. Legacy report.

**traders_non_commercial_spread_old**: `int | None`<br/>
Number of non-commercial spreading traders, old crop year. Legacy report.

**traders_non_commercial_long_other**: `int | None`<br/>
Number of non-commercial long traders, other crop year. Legacy report.

**traders_non_commercial_short_other**: `int | None`<br/>
Number of non-commercial short traders, other crop year. Legacy report.

**traders_non_commercial_spread_other**: `int | None`<br/>
Number of non-commercial spreading traders, other crop year. Legacy report.

**traders_commercial_long_all**: `int | None`<br/>
Number of commercial long traders, all contracts. Legacy report.

**traders_commercial_short_all**: `int | None`<br/>
Number of commercial short traders, all contracts. Legacy report.

**traders_commercial_long_old**: `int | None`<br/>
Number of commercial long traders, old crop year. Legacy report.

**traders_commercial_short_old**: `int | None`<br/>
Number of commercial short traders, old crop year. Legacy report.

**traders_commercial_long_other**: `int | None`<br/>
Number of commercial long traders, other crop year. Legacy report.

**traders_commercial_short_other**: `int | None`<br/>
Number of commercial short traders, other crop year. Legacy report.

**traders_producer_merchant_long_all**: `int | None`<br/>
Number of producer/merchant long traders, all contracts. Disaggregated report.

**traders_producer_merchant_short_all**: `int | None`<br/>
Number of producer/merchant short traders, all contracts. Disaggregated report.

**traders_producer_merchant_long_old**: `int | None`<br/>
Number of producer/merchant long traders, old crop year. Disaggregated report.

**traders_producer_merchant_short_old**: `int | None`<br/>
Number of producer/merchant short traders, old crop year. Disaggregated report.

**traders_producer_merchant_long_other**: `int | None`<br/>
Number of producer/merchant long traders, other crop year. Disaggregated report.

**traders_producer_merchant_short_other**: `int | None`<br/>
Number of producer/merchant short traders, other crop year. Disaggregated report.

**traders_swap_long_all**: `int | None`<br/>
Number of swap dealer long traders, all contracts. Disaggregated report.

**traders_swap_short_all**: `int | None`<br/>
Number of swap dealer short traders, all contracts. Disaggregated report.

**traders_swap_spread_all**: `int | None`<br/>
Number of swap dealer spreading traders, all contracts. Disaggregated report.

**traders_swap_long_old**: `int | None`<br/>
Number of swap dealer long traders, old crop year. Disaggregated report.

**traders_swap_short_old**: `int | None`<br/>
Number of swap dealer short traders, old crop year. Disaggregated report.

**traders_swap_spread_old**: `int | None`<br/>
Number of swap dealer spreading traders, old crop year. Disaggregated report.

**traders_swap_long_other**: `int | None`<br/>
Number of swap dealer long traders, other crop year. Disaggregated report.

**traders_swap_short_other**: `int | None`<br/>
Number of swap dealer short traders, other crop year. Disaggregated report.

**traders_swap_spread_other**: `int | None`<br/>
Number of swap dealer spreading traders, other crop year. Disaggregated report.

**traders_managed_money_long_all**: `int | None`<br/>
Number of managed money long traders, all contracts. Disaggregated report.

**traders_managed_money_short_all**: `int | None`<br/>
Number of managed money short traders, all contracts. Disaggregated report.

**traders_managed_money_spread_all**: `int | None`<br/>
Number of managed money spreading traders, all contracts. Disaggregated report.

**traders_managed_money_long_old**: `int | None`<br/>
Number of managed money long traders, old crop year. Disaggregated report.

**traders_managed_money_short_old**: `int | None`<br/>
Number of managed money short traders, old crop year. Disaggregated report.

**traders_managed_money_spread_old**: `int | None`<br/>
Number of managed money spreading traders, old crop year. Disaggregated report.

**traders_managed_money_long_other**: `int | None`<br/>
Number of managed money long traders, other crop year. Disaggregated report.

**traders_managed_money_short_other**: `int | None`<br/>
Number of managed money short traders, other crop year. Disaggregated report.

**traders_managed_money_spread_other**: `int | None`<br/>
Number of managed money spreading traders, other crop year. Disaggregated report.

**traders_dealer_long_all**: `int | None`<br/>
Number of dealer/intermediary long traders, all contracts. TFF report.

**traders_dealer_short_all**: `int | None`<br/>
Number of dealer/intermediary short traders, all contracts. TFF report.

**traders_dealer_spread_all**: `int | None`<br/>
Number of dealer/intermediary spreading traders, all contracts. TFF report.

**traders_asset_manager_long_all**: `int | None`<br/>
Number of asset manager/institutional long traders, all contracts. TFF report.

**traders_asset_manager_short_all**: `int | None`<br/>
Number of asset manager/institutional short traders, all contracts. TFF report.

**traders_asset_manager_spread**: `int | None`<br/>
Number of asset manager/institutional spreading traders, all contracts. TFF report.

**traders_leveraged_funds_long_all**: `int | None`<br/>
Number of leveraged funds long traders, all contracts. TFF report.

**traders_leveraged_funds_short_all**: `int | None`<br/>
Number of leveraged funds short traders, all contracts. TFF report.

**traders_leveraged_funds_spread**: `int | None`<br/>
Number of leveraged funds spreading traders, all contracts. TFF report.

**traders_other_reportable_long_all**: `int | None`<br/>
Number of other reportable long traders, all contracts. Disaggregated/TFF reports.

**traders_other_reportable_short**: `int | None`<br/>
Number of other reportable short traders, all contracts. Disaggregated/TFF reports.

**traders_other_reportable_spread**: `int | None`<br/>
Number of other reportable spreading traders, all contracts. Disaggregated report.

**traders_other_reportable_long_old**: `int | None`<br/>
Number of other reportable long traders, old crop year. Disaggregated report.

**traders_other_reportable_short_1**: `int | None`<br/>
Number of other reportable short traders, old crop year. Disaggregated report.

**traders_other_reportable_spread_1**: `int | None`<br/>
Number of other reportable spreading traders, old crop year. Disaggregated report.

**traders_other_reportable_long_other**: `int | None`<br/>
Number of other reportable long traders, other crop year. Disaggregated report.

**traders_other_reportable_short_2**: `int | None`<br/>
Number of other reportable short traders, other crop year. Disaggregated report.

**traders_other_reportable_spread_2**: `int | None`<br/>
Number of other reportable spreading traders, other crop year. Disaggregated report.

**traders_non_commercial_long_all_non_cit**: `int | None`<br/>
Number of non-commercial long traders excluding CIT. Supplemental report.

**traders_non_commercial_short_all_non_cit**: `int | None`<br/>
Number of non-commercial short traders excluding CIT. Supplemental report.

**traders_non_commercial_spread_all_non_cit**: `int | None`<br/>
Number of non-commercial spreading traders excluding CIT. Supplemental report.

**traders_commercial_long_all_non_cit**: `int | None`<br/>
Number of commercial long traders excluding CIT. Supplemental report.

**traders_commercial_short_all_non_cit**: `int | None`<br/>
Number of commercial short traders excluding CIT. Supplemental report.

**traders_cit_long_all**: `int | None`<br/>
Number of commodity index trader long traders. Supplemental report.

**traders_cit_short_all**: `int | None`<br/>
Number of commodity index trader short traders. Supplemental report.

**traders_total_reportable_long_all_non_cit**: `int | None`<br/>
Total reportable long traders excluding CIT. Supplemental report.

**traders_total_reportable_short_all_non_cit**: `int | None`<br/>
Total reportable short traders excluding CIT. Supplemental report.

**traders_total_reportable_long_all**: `int | None`<br/>
Total number of reportable long traders, all contracts.

**traders_total_reportable_short_all**: `int | None`<br/>
Total number of reportable short traders, all contracts.

**traders_total_reportable_long_old**: `int | None`<br/>
Total number of reportable long traders, old crop year. Legacy/Disaggregated reports.

**traders_total_reportable_short_old**: `int | None`<br/>
Total number of reportable short traders, old crop year. Legacy/Disaggregated reports.

**traders_total_reportable_long_other**: `int | None`<br/>
Total number of reportable long traders, other crop year. Legacy/Disaggregated reports.

**traders_total_reportable_short_other**: `int | None`<br/>
Total number of reportable short traders, other crop year. Legacy/Disaggregated reports.

**concentration_gross_top_4_traders_long**: `float | None`<br/>
Gross long position concentration of top 4 traders, all contracts.

**concentration_gross_top_4_traders_short**: `float | None`<br/>
Gross short position concentration of top 4 traders, all contracts.

**concentration_gross_top_8_traders_long**: `float | None`<br/>
Gross long position concentration of top 8 traders, all contracts.

**concentration_gross_top_8_traders_short**: `float | None`<br/>
Gross short position concentration of top 8 traders, all contracts.

**concentration_net_top_4_traders_long_all**: `float | None`<br/>
Net long position concentration of top 4 traders, all contracts.

**concentration_net_top_4_traders_short_all**: `float | None`<br/>
Net short position concentration of top 4 traders, all contracts.

**concentration_net_top_8_traders_long_all**: `float | None`<br/>
Net long position concentration of top 8 traders, all contracts.

**concentration_net_top_8_traders_short_all**: `float | None`<br/>
Net short position concentration of top 8 traders, all contracts.

**concentration_gross_top_4_traders_long_1**: `float | None`<br/>
Gross long position concentration of top 4 traders, old crop year. Legacy/Disaggregated reports.

**concentration_gross_top_4_traders_short_1**: `float | None`<br/>
Gross short position concentration of top 4 traders, old crop year. Legacy/Disaggregated reports.

**concentration_gross_top_8_traders_long_1**: `float | None`<br/>
Gross long position concentration of top 8 traders, old crop year. Legacy/Disaggregated reports.

**concentration_gross_top_8_traders_short_1**: `float | None`<br/>
Gross short position concentration of top 8 traders, old crop year. Legacy/Disaggregated reports.

**concentration_net_top_4_traders_long_old**: `float | None`<br/>
Net long position concentration of top 4 traders, old crop year. Legacy/Disaggregated reports.

**concentration_net_top_4_traders_short_old**: `float | None`<br/>
Net short position concentration of top 4 traders, old crop year. Legacy/Disaggregated reports.

**concentration_net_top_8_traders_long_old**: `float | None`<br/>
Net long position concentration of top 8 traders, old crop year. Legacy/Disaggregated reports.

**concentration_net_top_8_traders_short_old**: `float | None`<br/>
Net short position concentration of top 8 traders, old crop year. Legacy/Disaggregated reports.

**concentration_gross_top_4_traders_long_2**: `float | None`<br/>
Gross long position concentration of top 4 traders, other crop year. Legacy/Disaggregated reports.

**concentration_gross_top_4_traders_short_2**: `float | None`<br/>
Gross short position concentration of top 4 traders, other crop year. Legacy/Disaggregated reports.

**concentration_gross_top_8_traders_long_2**: `float | None`<br/>
Gross long position concentration of top 8 traders, other crop year. Legacy/Disaggregated reports.

**concentration_gross_top_8_traders_short_2**: `float | None`<br/>
Gross short position concentration of top 8 traders, other crop year. Legacy/Disaggregated reports.

**concentration_net_top_4_traders_long_other**: `float | None`<br/>
Net long position concentration of top 4 traders, other crop year. Legacy/Disaggregated reports.

**concentration_net_top_4_traders_short_other**: `float | None`<br/>
Net short position concentration of top 4 traders, other crop year. Legacy/Disaggregated reports.

**concentration_net_top_8_traders_long_other**: `float | None`<br/>
Net long position concentration of top 8 traders, other crop year. Legacy/Disaggregated reports.

**concentration_net_top_8_traders_short_other**: `float | None`<br/>
Net short position concentration of top 8 traders, other crop year. Legacy/Disaggregated reports.

</TabItem>
</Tabs>

