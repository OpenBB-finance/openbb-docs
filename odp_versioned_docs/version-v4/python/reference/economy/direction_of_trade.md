---
title: "direction_of_trade"
description: "Get Direction Of Trade Statistics from the IMF database"
keywords:
- economy
- direction_of_trade
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="economy/direction_of_trade - Reference | OpenBB Docs" />

<!-- markdownlint-disable MD012 MD031 MD033 -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Get Direction Of Trade Statistics from the IMF database.

The Direction of Trade Statistics (DOTS) presents the value of merchandise exports and
imports disaggregated according to a country's primary trading partners.
Area and world aggregates are included in the display of trade flows between major areas of the world.
Reported data is supplemented by estimates whenever such data is not available or current.
Imports are reported on a cost, insurance and freight (CIF) basis
and exports are reported on a free on board (FOB) basis.
Time series data includes estimates derived from reports of partner countries
for non-reporting and slow-reporting countries.

Examples
--------

```python
from openbb import obb
obb.economy.direction_of_trade(country='all', counterpart='china')
# Select multiple countries or counterparts by entering a comma-separated list. The direction of trade can be 'exports', 'imports', 'balance', or 'all'.
obb.economy.direction_of_trade(country='us', counterpart='world,eu', frequency='annual', direction='exports')
```

## Parameters

<Tabs>
<TabItem value='standard' label='standard'>

**country**: `str | None | list[str | None]`<br/>
The country to get data. None is an equiavlent to 'all'. If 'all' is used, the counterpart field cannot be 'all'. Multiple items allowed for provider(s): imf.

<details>
<summary mdxType="summary">Choices</summary>

- afghanistan
- albania
- algeria
- american_samoa
- angola
- anguilla
- antigua_and_barbuda
- argentina
- armenia
- aruba
- australia
- austria
- azerbaijan
- bahamas
- bahrain
- bangladesh
- barbados
- belarus
- belgium
- belize
- benin
- bermuda
- bhutan
- bolivia
- bosnia_and_herzegovina
- botswana
- brazil
- brunei_darussalam
- bulgaria
- burkina_faso
- burundi
- cabo_verde
- cambodia
- cameroon
- canada
- central_african_republic
- chad
- chile
- china
- colombia
- comoros
- congo
- costa_rica
- croatia
- cuba
- curaçao
- cyprus
- czech_republic
- czechoslovakia
- côte_d'ivoire
- denmark
- djibouti
- dominica
- dominican_republic
- ecuador
- egypt
- el_salvador
- equatorial_guinea
- eritrea
- estonia
- eswatini
- ethiopia
- falkland_islands
- faroe_islands
- fiji
- finland
- france
- french_polynesia
- gabon
- gambia
- georgia
- german_democratic_republic
- germany
- ghana
- gibraltar
- greece
- greenland
- grenada
- guam
- guatemala
- guinea
- guinea_bissau
- guyana
- haiti
- holy_see
- honduras
- hong_kong_special_administrative_region
- hungary
- iceland
- india
- indonesia
- iran
- iraq
- ireland
- israel
- italy
- jamaica
- japan
- jordan
- kazakhstan
- kenya
- kiribati
- korea
- kosovo
- kuwait
- kyrgyz_republic
- lao_people's_democratic_republic
- latvia
- lebanon
- lesotho
- liberia
- libya
- lithuania
- luxembourg
- macao_special_administrative_region
- madagascar
- malawi
- malaysia
- maldives
- mali
- malta
- marshall_islands
- mauritania
- mauritius
- mexico
- micronesia
- moldova
- mongolia
- montenegro
- montserrat
- morocco
- mozambique
- myanmar
- namibia
- nauru
- nepal
- netherlands_antilles
- netherlands
- new_caledonia
- new_zealand
- nicaragua
- niger
- nigeria
- north_macedonia
- norway
- oman
- pakistan
- palau
- panama
- papua_new_guinea
- paraguay
- peru
- philippines
- poland
- portugal
- qatar
- romania
- russian_federation
- rwanda
- samoa
- san_marino
- saudi_arabia
- senegal
- serbia_and_montenegro
- serbia
- seychelles
- sierra_leone
- singapore
- sint_maarten
- slovak_republic
- slovenia
- solomon_islands
- somalia
- south_africa
- south_sudan
- spain
- sri_lanka
- st._kitts_and_nevis
- st._lucia
- st._vincent_and_the_grenadines
- sudan
- suriname
- sweden
- switzerland
- syrian_arab_republic
- são_tomé_and_príncipe
- tajikistan
- tanzania
- thailand
- timor_leste
- togo
- tonga
- trinidad_and_tobago
- tunisia
- turkmenistan
- tuvalu
- türkiye
- uganda
- ukraine
- union_of_soviet_socialist_republics
- united_arab_emirates
- united_kingdom
- united_states
- uruguay
- uzbekistan
- vanuatu
- venezuela
- vietnam
- west_bank_and_gaza
- yemen_arab_republic
- yemen
- yugoslavia
- zambia
- zimbabwe
- advanced_economies
- africa
- cis
- emdes_by_source_of_export_earnings:_fuel
- emdes_by_source_of_export_earnings:_nonfuel
- emerging_market_and_developing_economies
- emerging_and_developing_asia
- emerging_and_developing_europe
- euro_area
- europe
- european_union
- latin_america_and_the_caribbean
- middle_east
- middle_east_and_central_asia
- sub_saharan_africa
- world
- belgium_luxembourg
- other_countries_n.i.e.
- south_african_common_customs_area
</details>

**counterpart**: `str | None | list[str | None]`<br/>
Counterpart country to the trade. None is an equiavlent to 'all'. If 'all' is used, the country field cannot be 'all'. Multiple items allowed for provider(s): imf.

<details>
<summary mdxType="summary">Choices</summary>

- all
- afghanistan
- albania
- algeria
- american_samoa
- angola
- anguilla
- antigua_and_barbuda
- argentina
- armenia
- aruba
- australia
- austria
- azerbaijan
- bahamas
- bahrain
- bangladesh
- barbados
- belarus
- belgium
- belize
- benin
- bermuda
- bhutan
- bolivia
- bosnia_and_herzegovina
- botswana
- brazil
- brunei_darussalam
- bulgaria
- burkina_faso
- burundi
- cabo_verde
- cambodia
- cameroon
- canada
- central_african_republic
- chad
- chile
- china
- colombia
- comoros
- congo
- costa_rica
- croatia
- cuba
- curaçao
- cyprus
- czech_republic
- czechoslovakia
- côte_d'ivoire
- denmark
- djibouti
- dominica
- dominican_republic
- ecuador
- egypt
- el_salvador
- equatorial_guinea
- eritrea
- estonia
- eswatini
- ethiopia
- falkland_islands
- faroe_islands
- fiji
- finland
- france
- french_polynesia
- gabon
- gambia
- georgia
- german_democratic_republic
- germany
- ghana
- gibraltar
- greece
- greenland
- grenada
- guam
- guatemala
- guinea
- guinea_bissau
- guyana
- haiti
- holy_see
- honduras
- hong_kong_special_administrative_region
- hungary
- iceland
- india
- indonesia
- iran
- iraq
- ireland
- israel
- italy
- jamaica
- japan
- jordan
- kazakhstan
- kenya
- kiribati
- korea
- kosovo
- kuwait
- kyrgyz_republic
- lao_people's_democratic_republic
- latvia
- lebanon
- lesotho
- liberia
- libya
- lithuania
- luxembourg
- macao_special_administrative_region
- madagascar
- malawi
- malaysia
- maldives
- mali
- malta
- marshall_islands
- mauritania
- mauritius
- mexico
- micronesia
- moldova
- mongolia
- montenegro
- montserrat
- morocco
- mozambique
- myanmar
- namibia
- nauru
- nepal
- netherlands_antilles
- netherlands
- new_caledonia
- new_zealand
- nicaragua
- niger
- nigeria
- north_macedonia
- norway
- oman
- pakistan
- palau
- panama
- papua_new_guinea
- paraguay
- peru
- philippines
- poland
- portugal
- qatar
- romania
- russian_federation
- rwanda
- samoa
- san_marino
- saudi_arabia
- senegal
- serbia_and_montenegro
- serbia
- seychelles
- sierra_leone
- singapore
- sint_maarten
- slovak_republic
- slovenia
- solomon_islands
- somalia
- south_africa
- south_sudan
- spain
- sri_lanka
- st._kitts_and_nevis
- st._lucia
- st._vincent_and_the_grenadines
- sudan
- suriname
- sweden
- switzerland
- syrian_arab_republic
- são_tomé_and_príncipe
- tajikistan
- tanzania
- thailand
- timor_leste
- togo
- tonga
- trinidad_and_tobago
- tunisia
- turkmenistan
- tuvalu
- türkiye
- uganda
- ukraine
- union_of_soviet_socialist_republics
- united_arab_emirates
- united_kingdom
- united_states
- uruguay
- uzbekistan
- vanuatu
- venezuela
- vietnam
- west_bank_and_gaza
- yemen_arab_republic
- yemen
- yugoslavia
- zambia
- zimbabwe
- advanced_economies
- africa
- cis
- emdes_by_source_of_export_earnings:_fuel
- emdes_by_source_of_export_earnings:_nonfuel
- emerging_market_and_developing_economies
- emerging_and_developing_asia
- emerging_and_developing_europe
- euro_area
- europe
- european_union
- latin_america_and_the_caribbean
- middle_east
- middle_east_and_central_asia
- sub_saharan_africa
- world
- belgium_luxembourg
- other_countries_n.i.e.
- south_african_common_customs_area
</details>

**direction**: `Literal['exports', 'imports', 'balance', 'all'] | None`<br/>
*Default:* balance<br/>
Trade direction. Use 'all' to get all data for this dimension.

**start_date**: `date | None | str`<br/>
Start date of the data, in YYYY-MM-DD format.

**end_date**: `date | None | str`<br/>
End date of the data, in YYYY-MM-DD format.

**frequency**: `Literal['month', 'quarter', 'annual'] | None`<br/>
*Default:* month<br/>
The frequency of the data.

</TabItem>
<TabItem value='imf' label='imf'>

**country**: `str | None | list[str | None]`<br/>
The country to get data. None is an equiavlent to 'all'. If 'all' is used, the counterpart field cannot be 'all'. Multiple items allowed for provider(s): imf.

<details>
<summary mdxType="summary">Choices</summary>

- afghanistan
- albania
- algeria
- american_samoa
- angola
- anguilla
- antigua_and_barbuda
- argentina
- armenia
- aruba
- australia
- austria
- azerbaijan
- bahamas
- bahrain
- bangladesh
- barbados
- belarus
- belgium
- belize
- benin
- bermuda
- bhutan
- bolivia
- bosnia_and_herzegovina
- botswana
- brazil
- brunei_darussalam
- bulgaria
- burkina_faso
- burundi
- cabo_verde
- cambodia
- cameroon
- canada
- central_african_republic
- chad
- chile
- china
- colombia
- comoros
- congo
- costa_rica
- croatia
- cuba
- curaçao
- cyprus
- czech_republic
- czechoslovakia
- côte_d'ivoire
- denmark
- djibouti
- dominica
- dominican_republic
- ecuador
- egypt
- el_salvador
- equatorial_guinea
- eritrea
- estonia
- eswatini
- ethiopia
- falkland_islands
- faroe_islands
- fiji
- finland
- france
- french_polynesia
- gabon
- gambia
- georgia
- german_democratic_republic
- germany
- ghana
- gibraltar
- greece
- greenland
- grenada
- guam
- guatemala
- guinea
- guinea_bissau
- guyana
- haiti
- holy_see
- honduras
- hong_kong_special_administrative_region
- hungary
- iceland
- india
- indonesia
- iran
- iraq
- ireland
- israel
- italy
- jamaica
- japan
- jordan
- kazakhstan
- kenya
- kiribati
- korea
- kosovo
- kuwait
- kyrgyz_republic
- lao_people's_democratic_republic
- latvia
- lebanon
- lesotho
- liberia
- libya
- lithuania
- luxembourg
- macao_special_administrative_region
- madagascar
- malawi
- malaysia
- maldives
- mali
- malta
- marshall_islands
- mauritania
- mauritius
- mexico
- micronesia
- moldova
- mongolia
- montenegro
- montserrat
- morocco
- mozambique
- myanmar
- namibia
- nauru
- nepal
- netherlands_antilles
- netherlands
- new_caledonia
- new_zealand
- nicaragua
- niger
- nigeria
- north_macedonia
- norway
- oman
- pakistan
- palau
- panama
- papua_new_guinea
- paraguay
- peru
- philippines
- poland
- portugal
- qatar
- romania
- russian_federation
- rwanda
- samoa
- san_marino
- saudi_arabia
- senegal
- serbia_and_montenegro
- serbia
- seychelles
- sierra_leone
- singapore
- sint_maarten
- slovak_republic
- slovenia
- solomon_islands
- somalia
- south_africa
- south_sudan
- spain
- sri_lanka
- st._kitts_and_nevis
- st._lucia
- st._vincent_and_the_grenadines
- sudan
- suriname
- sweden
- switzerland
- syrian_arab_republic
- são_tomé_and_príncipe
- tajikistan
- tanzania
- thailand
- timor_leste
- togo
- tonga
- trinidad_and_tobago
- tunisia
- turkmenistan
- tuvalu
- türkiye
- uganda
- ukraine
- union_of_soviet_socialist_republics
- united_arab_emirates
- united_kingdom
- united_states
- uruguay
- uzbekistan
- vanuatu
- venezuela
- vietnam
- west_bank_and_gaza
- yemen_arab_republic
- yemen
- yugoslavia
- zambia
- zimbabwe
- advanced_economies
- africa
- cis
- emdes_by_source_of_export_earnings:_fuel
- emdes_by_source_of_export_earnings:_nonfuel
- emerging_market_and_developing_economies
- emerging_and_developing_asia
- emerging_and_developing_europe
- euro_area
- europe
- european_union
- latin_america_and_the_caribbean
- middle_east
- middle_east_and_central_asia
- sub_saharan_africa
- world
- belgium_luxembourg
- other_countries_n.i.e.
- south_african_common_customs_area
</details>

**counterpart**: `str | None | list[str | None]`<br/>
Counterpart country to the trade. None is an equiavlent to 'all'. If 'all' is used, the country field cannot be 'all'. Multiple items allowed for provider(s): imf.

<details>
<summary mdxType="summary">Choices</summary>

- all
- afghanistan
- albania
- algeria
- american_samoa
- angola
- anguilla
- antigua_and_barbuda
- argentina
- armenia
- aruba
- australia
- austria
- azerbaijan
- bahamas
- bahrain
- bangladesh
- barbados
- belarus
- belgium
- belize
- benin
- bermuda
- bhutan
- bolivia
- bosnia_and_herzegovina
- botswana
- brazil
- brunei_darussalam
- bulgaria
- burkina_faso
- burundi
- cabo_verde
- cambodia
- cameroon
- canada
- central_african_republic
- chad
- chile
- china
- colombia
- comoros
- congo
- costa_rica
- croatia
- cuba
- curaçao
- cyprus
- czech_republic
- czechoslovakia
- côte_d'ivoire
- denmark
- djibouti
- dominica
- dominican_republic
- ecuador
- egypt
- el_salvador
- equatorial_guinea
- eritrea
- estonia
- eswatini
- ethiopia
- falkland_islands
- faroe_islands
- fiji
- finland
- france
- french_polynesia
- gabon
- gambia
- georgia
- german_democratic_republic
- germany
- ghana
- gibraltar
- greece
- greenland
- grenada
- guam
- guatemala
- guinea
- guinea_bissau
- guyana
- haiti
- holy_see
- honduras
- hong_kong_special_administrative_region
- hungary
- iceland
- india
- indonesia
- iran
- iraq
- ireland
- israel
- italy
- jamaica
- japan
- jordan
- kazakhstan
- kenya
- kiribati
- korea
- kosovo
- kuwait
- kyrgyz_republic
- lao_people's_democratic_republic
- latvia
- lebanon
- lesotho
- liberia
- libya
- lithuania
- luxembourg
- macao_special_administrative_region
- madagascar
- malawi
- malaysia
- maldives
- mali
- malta
- marshall_islands
- mauritania
- mauritius
- mexico
- micronesia
- moldova
- mongolia
- montenegro
- montserrat
- morocco
- mozambique
- myanmar
- namibia
- nauru
- nepal
- netherlands_antilles
- netherlands
- new_caledonia
- new_zealand
- nicaragua
- niger
- nigeria
- north_macedonia
- norway
- oman
- pakistan
- palau
- panama
- papua_new_guinea
- paraguay
- peru
- philippines
- poland
- portugal
- qatar
- romania
- russian_federation
- rwanda
- samoa
- san_marino
- saudi_arabia
- senegal
- serbia_and_montenegro
- serbia
- seychelles
- sierra_leone
- singapore
- sint_maarten
- slovak_republic
- slovenia
- solomon_islands
- somalia
- south_africa
- south_sudan
- spain
- sri_lanka
- st._kitts_and_nevis
- st._lucia
- st._vincent_and_the_grenadines
- sudan
- suriname
- sweden
- switzerland
- syrian_arab_republic
- são_tomé_and_príncipe
- tajikistan
- tanzania
- thailand
- timor_leste
- togo
- tonga
- trinidad_and_tobago
- tunisia
- turkmenistan
- tuvalu
- türkiye
- uganda
- ukraine
- union_of_soviet_socialist_republics
- united_arab_emirates
- united_kingdom
- united_states
- uruguay
- uzbekistan
- vanuatu
- venezuela
- vietnam
- west_bank_and_gaza
- yemen_arab_republic
- yemen
- yugoslavia
- zambia
- zimbabwe
- advanced_economies
- africa
- cis
- emdes_by_source_of_export_earnings:_fuel
- emdes_by_source_of_export_earnings:_nonfuel
- emerging_market_and_developing_economies
- emerging_and_developing_asia
- emerging_and_developing_europe
- euro_area
- europe
- european_union
- latin_america_and_the_caribbean
- middle_east
- middle_east_and_central_asia
- sub_saharan_africa
- world
- belgium_luxembourg
- other_countries_n.i.e.
- south_african_common_customs_area
</details>

**direction**: `Literal['exports', 'imports', 'balance', 'all'] | None`<br/>
*Default:* balance<br/>
Trade direction. Use 'all' to get all data for this dimension.

**start_date**: `date | None | str`<br/>
Start date of the data, in YYYY-MM-DD format.

**end_date**: `date | None | str`<br/>
End date of the data, in YYYY-MM-DD format.

**frequency**: `Literal['month', 'quarter', 'annual'] | None`<br/>
*Default:* month<br/>
The frequency of the data.

**limit**: `int | None`<br/>
Limit the number of results returned, the most recent data points first.

</TabItem>
</Tabs>

---

## Returns

**results**: `DirectionOfTrade`

Serializable results.

**provider**: `Optional[Literal['imf']]`

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

**country**: `str`<br/>
**counterpart**: `str`<br/>
Counterpart country or region to the trade.

**title**: `str | None`<br/>
Title corresponding to the symbol.

**value**: `float`<br/>
Trade value.

**scale**: `str | None`<br/>
Scale of the value.

</TabItem>
<TabItem value='imf' label='imf'>

**date**: `date | int | str`<br/>
The date of the data.

**symbol**: `str | None`<br/>
Symbol representing the entity requested in the data. Concatenated series identifier.

**country**: `str`<br/>
The country or region to the trade.

**counterpart**: `str`<br/>
Counterpart country or region to the trade.

**title**: `str | None`<br/>
Title corresponding to the symbol.

**value**: `float`<br/>
Trade value.

**scale**: `str | None`<br/>
Scale of the value.

**unit**: `str | None`<br/>
Unit of the value.

**country_code**: `str`<br/>
IMF country code.

**counterpart_code**: `str`<br/>
IMF counterpart country code.

**unit_multiplier**: `int | None`<br/>
Unit multiplier of the value.

</TabItem>
</Tabs>

