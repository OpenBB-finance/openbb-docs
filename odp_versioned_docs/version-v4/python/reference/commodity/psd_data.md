---
title: "psd_data"
description: "Get data tables and historical time series from the USDA FAS Production, Supply, and Distribution (PSD) Reports"
keywords:
- commodity
- psd_data
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="commodity/psd_data - Reference | OpenBB Docs" />

<!-- markdownlint-disable MD012 MD031 MD033 -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Get data tables and historical time series from the USDA FAS Production, Supply, and Distribution (PSD) Reports.

Examples
--------

```python
from openbb import obb
# Get the World Crop Production Summary table.
obb.commodity.psd_data()
# Get the current Corn World Trade table from the PDS report.
obb.commodity.psd_data(report_id='corn_world_trade')
# Get all attributes for Coffee globally, for a single year.
obb.commodity.psd_data(commodity='coffee', start_year=2025, end_year=2025)
# Compare Brazil coffee exports versus the world from 2010 to present.
obb.commodity.psd_data(commodity='coffee', country='brazil', attribute='exports', aggregate_regions=True, start_year=2010)
# Get historical production of corn in the US from 2020.
obb.commodity.psd_data(commodity='corn', country='united_states', attribute='production', start_year=2020)
# Get regional aggregates for wheat beginning and ending stocks from 2020.
obb.commodity.psd_data(commodity='wheat', country='world', attribute='beginning_stocks,ending_stocks', aggregate_regions=True, start_year=2020)
```

## Parameters

<Tabs>
<TabItem value='standard' label='standard'>

</TabItem>
<TabItem value='government_us' label='government_us'>

**report_id**: `str | None`<br/>
*Default:* world_crop_production_summary<br/>
<details>
<summary mdxType="summary">Description</summary>

Report ID to retrieve. Gets the current report for the given commodity and subject. These are predefined tables that are part of the PDF publication data. This parameter is ignored if 'commodity' is provided. Use the 'commodity' parameter for time series data. Valid reports are:<br/>
    almonds_summary, almonds_supply_distribution, apples_selected_countries, apples_supply_distribution, barley_area_yield_production, barley_regional, barley_supply_disappearance, barley_world_production_consumption_stocks, barley_world_trade, beef_veal_production, beef_veal_trade, butter_production_consumption, butter_trade, cattle_stocks, cattle_trade, cheese_production_consumption, cheese_trade, cherries_selected_countries, cherries_supply_distribution, chicken_production, chicken_trade, china_grain_supply_demand, coarse_grains_area_yield_production, coarse_grains_regional, coarse_grains_world_production_consumption_stocks, coarse_grains_world_trade, coffee_arabica_production, coffee_consumption, coffee_ending_stocks, coffee_exports_green_bean, coffee_exports_soluble, coffee_exports_total, coffee_imports_green_bean, coffee_imports_soluble, coffee_imports_total, coffee_production, coffee_robusta_production, coffee_summary, coffee_summary_2, coffee_summary_3, coffee_summary_4, copra_palm_kernel_palm_oil_production, corn_area_yield_production, corn_barley_supply_demand, corn_regional, corn_supply_disappearance, corn_world_production_consumption_stocks, corn_world_trade, cotton_area_yield_production, cotton_area_yield_production_fcr, cotton_by_country, cotton_by_country_2, cotton_foreign_supply, cotton_monthly_changes, cotton_supply_distribution, cotton_supply_distribution_2, cotton_us_supply, cotton_world_supply, cotton_world_supply_use, cotton_world_supply_use_2, cottonseed_area_yield_production, eu_grain_supply_demand, grains_summary_comparison, grapefruit_selected_countries, grapes_selected_countries, grapes_supply_distribution, lemons_limes_selected_countries, milk_cow_numbers, milk_production_consumption, nonfat_dry_milk_production_consumption, nonfat_dry_milk_trade, oats_area_yield_production, oats_regional, oats_world_production_consumption_stocks, oats_world_trade, oilseeds_area_yield_production, oilseeds_china, oilseeds_eu, oilseeds_india, oilseeds_middle_east, oilseeds_products_world_supply_demand, oilseeds_southeast_asia, oilseeds_us_supply_distribution, oilseeds_world_commodity_view, oilseeds_world_country_view, orange_juice_supply_distribution, oranges_selected_countries, oranges_selected_countries_2, other_europe_grain_supply_demand, palm_coconut_fishmeal_world_supply_demand, palm_oil_world_supply, peaches_nectarines_selected_countries, peaches_nectarines_supply_distribution, peanut_area_yield_production, pears_selected_countries, pears_supply_distribution, pistachios_summary, pistachios_supply_distribution, pork_production, pork_trade, protein_meals_world_commodity_view, protein_meals_world_country_view, raisins_selected_countries, raisins_supply_distribution, rapeseed_area_yield_production, rapeseed_products_world_supply, rapeseed_products_world_supply_demand, rice_area_yield_production, rice_regional, rice_supply_demand, rice_world_production_consumption_stocks, rice_world_trade, russia_barley, russia_corn, russia_grain_supply_demand, russia_wheat, rye_area_yield_production, rye_regional, rye_world_production_consumption_stocks, rye_world_trade, sorghum_area_yield_production, sorghum_regional, sorghum_supply_disappearance, sorghum_world_production_consumption_stocks, sorghum_world_trade, soybean_meal_world_supply, soybean_oil_world_supply, soybeans_area_yield_production, soybeans_argentina_supply_distribution, soybeans_brazil_supply_distribution, soybeans_products_world_supply_demand, soybeans_products_world_trade, soybeans_us_supply_distribution, soybeans_world_supply, sugar_ending_stocks, sugar_imports_exports, sugar_production_consumption, sunflower_area_yield_production, sunflower_products_world_supply, sunflower_products_world_supply_demand, swine_stocks, swine_trade, tangerines_mandarins_selected_countries, us_grains_supply_distribution, vegetable_oils_minor_world_supply, vegetable_oils_world_commodity_view, vegetable_oils_world_country_view, walnuts_summary, walnuts_supply_distribution, wheat_area_yield_production, wheat_coarse_grains_supply_demand, wheat_coarse_grains_world_supply_demand, wheat_flour_products_world_trade, wheat_regional, wheat_supply_disappearance, wheat_world_production_consumption_stocks, whole_milk_powder_production_consumption, whole_milk_powder_trade, world_crop_production_summary<br/>
</details>

**commodity**: `str | None`<br/>
<details>
<summary mdxType="summary">Description</summary>

Commodity name to filter the data. If provided, retrieves time series data for the given commodity. Supplying both 'report_id' and 'commodity' will prioritize 'commodity' for time series data. Valid commodities are:<br/>
    almonds, apples, barley, beef, broiler, butter, cattle, cheese, cherries, chicken, coffee, corn, cotton, dry_whole_milk_powder, fluid_milk, grapefruit, grapes, lemons_limes, meal_copra, meal_cottonseed, meal_fish, meal_palm_kernel, meal_peanut, meal_rapeseed, meal_soybean, meal_sunflowerseed, millet, mixed_grain, nonfat_dry_milk, oats, oil_coconut, oil_cottonseed, oil_olive, oil_palm, oil_palm_kernel, oil_peanut, oil_rapeseed, oil_soybean, oil_sunflowerseed, oilseed_copra, oilseed_cottonseed, oilseed_palm_kernel, oilseed_peanut, oilseed_rapeseed, oilseed_soybean, oilseed_sunflowerseed, orange_juice, oranges, peaches_nectarines, pears, pistachios, pork, rice, rye, sorghum, sugar, swine, tangerines_mandarins, walnuts, wheat<br/>
</details>

**attribute**: `str | list[str] | None`<br/>
<details>
<summary mdxType="summary">Description</summary>

Attribute to filter the data. If None, retrieves all available attributes for the commodity.<br/>
Parameter is ignored when commodity is None. Valid attributes depend on the commodity, an invalid choice will show the available attributes for the entered commodity.<br/>
All attributes choices are:<br/>
annual_pct_change_per_cap_cons, arabica_production, area_harvested, area_planted, balance, bean_exports, bean_imports, bearing_trees, beef_cows_beg_stocks, beet_sugar_production, begin_stock_ctrl_app, begin_stock_other, beginning_stocks, calf_slaughter, cane_sugar_production, catch_for_reduction, commercial_production, consumption_change, cow_change, cow_slaughter, cows_in_milk, cows_milk_production, crush, cy_exp_to_us, cy_exports, cy_imp_from_us, cy_imports, dairy_cows_beg_stocks, deliv_to_processors, dom_consump_ctrl_app, dom_consump_other, dom_leaf_consumption, domestic_consumption, domestic_use, end_stocks_ctrl_app, end_stocks_other, ending_stocks, export_change, exportable_production, exports, exports_percent_production, extr_rate, factory_use_consum, farm_sales_weight_prod, feed_dom_consumption, feed_use_dom_consum, feed_waste_dom_cons, filter_production, fluid_use_dom_consum, food_use_dom_cons, for_processing, fresh_dom_consumption, fresh_dom_consumption_alt, fsi_consumption, human_consumption, human_dom_consumption, import_change, imports, imports_percent_consumption, industrial_dom_cons, intra_eu_exports, intra_eu_exports_alt, intra_eu_imports, inventory_balance, inventory_change, inventory_reference, loss, loss_and_residual, milling_rate, my_exp_to_eu, my_imp_from_eu, my_imp_from_us, non_bearing_trees, non_comm_production, non_filter_production, other_disappearance, other_exports, other_foreign_cons, other_imports, other_milk_production, other_production, other_slaughter, other_use_losses, per_capita_consumption, population, prod_from_table_grapes, prod_from_wine_grapes, production, production_change, production_to_cows, production_to_sows, raw_exports, raw_imports, refined_exp_raw_val, refined_imp_raw_val, roast_ground_exports, roast_ground_imports, robusta_production, rough_production, rst_ground_dom_consum, seed_to_lint_ratio, slaughter_reference, slaughter_to_inventory, slaughter_to_total_supply, sme, soluble_dom_cons, soluble_exports, soluble_imports, sow_beginning_stocks, sow_change, sow_slaughter, stocks_to_use, stocks_to_use_months, total_disappearance, total_disappearance_alt, total_distribution, total_grape_crush, total_slaughter, total_supply, total_trees, total_use, total_utilization, ty_exports, ty_imp_from_us, ty_imports, us_leaf_dom_cons, us_leaf_imports, utilization_for_alcohol, utilization_for_sugar, weights, withdrawal_from_market, yield<br/>
</details>

**country**: `str | list[str] | None`<br/>
<details>
<summary mdxType="summary">Description</summary>

Country code(s) to filter the data. If None, retrieves data for all countries.<br/>
Parameter is ignored when commodity is None. Valid country codes include:<br/>
afghanistan, albania, algeria, angola, argentina, armenia, australia, austria, azerbaijan, bahamas, bahrain, bangladesh, barbados, belarus, belgium, belize, benin, bhutan, bolivia, bosnia_and_herzegovina, botswana, brazil, brunei, bulgaria, burkina_faso, burma, burundi, cabo_verde, cambodia, cameroon, canada, caribbean, central_african_republic, central_america, chad, chile, china, colombia, comoros, congo_brazzaville, congo_kinshasa, costa_rica, cote_divoire, croatia, cuba, cyprus, czech_republic, czechia, denmark, djibouti, dominica, dominican_republic, east_asia, ecuador, egypt, el_salvador, equatorial_guinea, eritrea, estonia, eswatini, ethiopia, eu, eu_15, eu_25, european_union, fiji, finland, former_soviet_union, france, gabon, gambia, georgia, germany, ghana, greece, guatemala, guinea, guinea_bissau, guyana, haiti, honduras, hong_kong, hungary, iceland, india, indonesia, iran, iraq, ireland, israel, italy, ivory_coast, jamaica, japan, jordan, kazakhstan, kenya, kosovo, kuwait, kyrgyzstan, laos, latvia, lebanon, lesotho, liberia, libya, lithuania, luxembourg, macau, macedonia, madagascar, malawi, malaysia, maldives, mali, malta, mauritania, mauritius, mexico, middle_east, moldova, mongolia, montenegro, morocco, mozambique, myanmar, namibia, nepal, netherlands, new_caledonia, new_zealand, nicaragua, niger, nigeria, north_africa, north_america, north_korea, north_macedonia, norway, oceania, oman, other_europe, pakistan, panama, papua_new_guinea, paraguay, peru, philippines, poland, portugal, puerto_rico, qatar, reunion, romania, russia, rwanda, samoa, sao_tome_and_principe, saudi_arabia, senegal, serbia, seychelles, sierra_leone, singapore, slovakia, slovenia, solomon_islands, somalia, south_africa, south_america, south_asia, south_korea, south_sudan, southeast_asia, spain, sri_lanka, sub_saharan_africa, sudan, suriname, swaziland, sweden, switzerland, syria, taiwan, tajikistan, tanzania, thailand, togo, tonga, trinidad_and_tobago, tunisia, turkey, turkmenistan, uganda, ukraine, united_arab_emirates, united_kingdom, united_states, uruguay, uzbekistan, vanuatu, venezuela, vietnam, world, yemen, zambia, zimbabwe<br/>
</details>

**aggregate_regions**: `bool | None`<br/>
*Default:* False<br/>
Whether to include regional and world aggregates in the data. Parameter is ignored when 'commodity' is None.

**start_year**: `int | None`<br/>
<details>
<summary mdxType="summary">Description</summary>

Start year for filtering time series data. None returns from the beginning of the series.<br/>
Parameter is ignored when 'commodity' is None.<br/>
</details>

**end_year**: `int | None`<br/>
<details>
<summary mdxType="summary">Description</summary>

End year for filtering time series data. If None, returns up to the most recent year.<br/>
Parameter is ignored when 'commodity' is None.<br/>
</details>

</TabItem>
</Tabs>

---

## Returns

**results**: `CommodityPsdData`

Serializable results.

**provider**: `Optional[Literal['government_us']]`

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

**region**: `str | None`<br/>
Region group category.

**country**: `str | None`<br/>
Country or area name.

**commodity**: `str | None`<br/>
Commodity name.

**attribute**: `str | None`<br/>
Name of the row value.

**marketing_year**: `str | None`<br/>
Marketing year for the commodity.

**value**: `float | int | None`<br/>
Value for the commodity attribute in the given marketing year.

**unit**: `str | None`<br/>
Unit of measurement for the value.

</TabItem>
<TabItem value='government_us' label='government_us'>

**region**: `str | None`<br/>
Region group category.

**country**: `str | None`<br/>
Country or area name.

**commodity**: `str | None`<br/>
Commodity name.

**attribute**: `str | None`<br/>
Name of the row value.

**marketing_year**: `str | None`<br/>
Marketing year for the commodity.

**value**: `float | int | None`<br/>
Value for the commodity attribute in the given marketing year.

**unit**: `str | None`<br/>
Unit of measurement for the value.

</TabItem>
</Tabs>

