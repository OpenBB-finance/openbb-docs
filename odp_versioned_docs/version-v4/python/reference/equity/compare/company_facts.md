---
title: "company_facts"
description: "Compare reported company facts and fundamental data points"
keywords:
- equity
- compare
- company_facts
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="equity/compare/company_facts - Reference | OpenBB Docs" />

<!-- markdownlint-disable MD012 MD031 MD033 -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Compare reported company facts and fundamental data points.

Examples
--------

```python
from openbb import obb
obb.equity.compare.company_facts()
obb.equity.compare.company_facts(fact='PaymentsForRepurchaseOfCommonStock', year=2023)
obb.equity.compare.company_facts(symbol='NVDA,AAPL,AMZN,MSFT,GOOG,SMCI', fact='RevenueFromContractWithCustomerExcludingAssessedTax', year=2024)
```

## Parameters

<Tabs>
<TabItem value='standard' label='standard'>

**symbol**: `str | None | list[str | None]`<br/>
Symbol to get data for. Multiple items allowed for provider(s): sec.

**fact**: `str | None`<br/>
The fact to lookup, typically a GAAP-reporting measure. Choices vary by provider.

</TabItem>
<TabItem value='sec' label='sec'>

**symbol**: `str | None | list[str | None]`<br/>
Symbol to get data for. Multiple items allowed for provider(s): sec.

**fact**: `Literal['AccountsPayableCurrent', 'AccountsReceivableNet', 'AccountsReceivableNetCurrent', 'AccrualForTaxesOtherThanIncomeTaxesCurrent', 'AccrualForTaxesOtherThanIncomeTaxesCurrentAndNoncurrent', 'AccruedIncomeTaxesCurrent', 'AccruedIncomeTaxesNoncurrent', 'AccruedInsuranceCurrent', 'AccruedLiabilitiesCurrent', 'AccumulatedDepreciationDepletionAndAmortizationPropertyPlantAndEquipment', 'AccumulatedOtherComprehensiveIncomeLossNetOfTax', 'AcquisitionsNetOfCashAcquiredAndPurchasesOfIntangibleAndOtherAssets', 'AdjustmentsToAdditionalPaidInCapitalSharebasedCompensationRequisiteServicePeriodRecognitionValue', 'AdvertisingExpense', 'AllocatedShareBasedCompensationExpense', 'AntidilutiveSecuritiesExcludedFromComputationOfEarningsPerShareAmount', 'Assets', 'AssetsCurrent', 'AssetsNoncurrent', 'NoncurrentAssets', 'AssetImpairmentCharges', 'BuildingsAndImprovementsGross', 'CapitalLeaseObligationsCurrent', 'CapitalLeaseObligationsNoncurrent', 'Cash', 'CashAndCashEquivalentsAtCarryingValue', 'CashCashEquivalentsAndShortTermInvestments', 'CashCashEquivalentsRestrictedCashAndRestrictedCashEquivalents', 'CashCashEquivalentsRestrictedCashAndRestrictedCashEquivalentsIncludingDisposalGroupAndDiscontinuedOperations', 'CashCashEquivalentsRestrictedCashAndRestrictedCashEquivalentsPeriodIncreaseDecreaseIncludingExchangeRateEffect', 'CommitmentsAndContingencies', 'CommercialPaper', 'CommonStockDividendsPerShareDeclared', 'CommonStockDividendsPerShareCashPaid', 'CommonStocksIncludingAdditionalPaidInCapital', 'ComprehensiveIncomeNetOfTax', 'ComprehensiveIncomeNetOfTaxAttributableToNoncontrollingInterest', 'ComprehensiveIncomeNetOfTaxIncludingPortionAttributableToNoncontrollingInterest', 'ConstructionInProgressGross', 'ContractWithCustomerAssetNet', 'ContractWithCustomerLiability', 'ContractWithCustomerLiabilityCurrent', 'ContractWithCustomerLiabilityNoncurrent', 'CostOfRevenue', 'CostOfGoodsAndServicesSold', 'CurrentFederalTaxExpenseBenefit', 'CurrentForeignTaxExpenseBenefit', 'CurrentIncomeTaxExpenseBenefit', 'CurrentStateAndLocalTaxExpenseBenefit', 'DebtInstrumentFaceAmount', 'DebtInstrumentFairValue', 'DebtLongtermAndShorttermCombinedAmount', 'DeferredFederalIncomeTaxExpenseBenefit', 'DeferredForeignIncomeTaxExpenseBenefit', 'DeferredIncomeTaxExpenseBenefit', 'DeferredIncomeTaxesAndTaxCredits', 'DeferredIncomeTaxLiabilities', 'DeferredIncomeTaxLiabilitiesNet', 'DeferredRevenue', 'DeferredTaxAssetsGross', 'DeferredTaxAssetsLiabilitiesNet', 'DeferredTaxAssetsNet', 'DeferredTaxLiabilities', 'DefinedContributionPlanCostRecognized', 'Depreciation', 'DepreciationAmortizationAndAccretionNet', 'DepreciationAmortizationAndOther', 'DepreciationAndAmortization', 'DepreciationDepletionAndAmortization', 'DerivativeCollateralObligationToReturnCash', 'DerivativeCollateralRightToReclaimCash', 'DerivativeFairValueOfDerivativeNet', 'DerivativeLiabilityCollateralRightToReclaimCashOffset', 'DerivativeNotionalAmount', 'Dividends', 'DividendsCash', 'DividendsPayableAmountPerShare', 'DividendsPayableCurrent', 'DistributedEarnings', 'EarningsPerShareBasic', 'EarningsPerShareDiluted', 'EffectOfExchangeRateOnCashCashEquivalentsRestrictedCashAndRestrictedCashEquivalents', 'EffectOfExchangeRateOnCashCashEquivalentsRestrictedCashAndRestrictedCashEquivalentsIncludingDisposalGroupAndDiscontinuedOperations', 'EmployeeRelatedLiabilitiesCurrent', 'EmployeeRelatedLiabilitiesCurrentAndNoncurrent', 'EmployeeServiceShareBasedCompensationTaxBenefitFromCompensationExpense', 'FinanceLeaseInterestExpense', 'FinanceLeaseInterestPaymentOnLiability', 'FinanceLeaseLiability', 'FinanceLeaseLiabilityCurrent', 'FinanceLeaseLiabilityNoncurrent', 'FinanceLeaseLiabilityPaymentsDue', 'FinanceLeaseLiabilityPaymentsDueAfterYearFive', 'FinanceLeaseLiabilityPaymentsDueNextTwelveMonths', 'FinanceLeaseLiabilityPaymentsDueYearFive', 'FinanceLeaseLiabilityPaymentsDueYearFour', 'FinanceLeaseLiabilityPaymentsDueYearThree', 'FinanceLeaseLiabilityPaymentsDueYearTwo', 'FinanceLeaseLiabilityPaymentsRemainderOfFiscalYear', 'FinanceLeaseLiabilityUndiscountedExcessAmount', 'FinanceLeasePrincipalPayments', 'FinanceLeaseRightOfUseAsset', 'FinancingReceivableAllowanceForCreditLosses', 'FiniteLivedIntangibleAssetsNet', 'FixturesAndEquipmentGross', 'GainLossOnInvestments', 'GainLossOnInvestmentsAndDerivativeInstruments', 'GainLossOnSaleOfBusiness', 'GainsLossesOnExtinguishmentOfDebt', 'GeneralAndAdministrativeExpense', 'Goodwill', 'GrossProfit', 'ImpairmentOfIntangibleAssetsExcludingGoodwill', 'ImpairmentOfIntangibleAssetsIndefinitelivedExcludingGoodwill', 'IncomeLossFromContinuingOperations', 'IncomeLossFromContinuingOperationsAttributableToNoncontrollingEntity', 'IncomeLossFromContinuingOperationsBeforeIncomeTaxesExtraordinaryItemsNoncontrollingInterest', 'IncomeLossFromContinuingOperationsPerBasicShare', 'IncomeLossFromContinuingOperationsPerDilutedShare', 'InterestAndDebtExpense', 'IncomeTaxExpenseBenefit', 'IncomeTaxesPaid', 'IncomeTaxesPaidNet', 'IncreaseDecreaseInAccountsAndOtherReceivables', 'IncreaseDecreaseInAccountsPayable', 'IncreaseDecreaseInAccountsReceivable', 'IncreaseDecreaseInAccruedLiabilities', 'IncreaseDecreaseInAccruedIncomeTaxesPayable', 'IncreaseDecreaseInAccruedTaxesPayable', 'IncreaseDecreaseInContractWithCustomerLiability', 'IncreaseDecreaseInDeferredIncomeTaxes', 'IncreaseDecreaseInInventories', 'IncreaseDecreaseInOtherCurrentAssets', 'IncreaseDecreaseInOtherCurrentLiabilities', 'IncreaseDecreaseInOtherNoncurrentAssets', 'IncreaseDecreaseInOtherNoncurrentLiabilities', 'IncreaseDecreaseInPensionPlanObligations', 'IncrementalCommonSharesAttributableToShareBasedPaymentArrangements', 'InterestExpenseDebt', 'InterestIncomeExpenseNet', 'InterestPaid', 'InterestPaidNet', 'InventoryNet', 'InvestmentIncomeInterest', 'Land', 'LeaseAndRentalExpense', 'LesseeOperatingLeaseLiabilityPaymentsDue', 'LesseeOperatingLeaseLiabilityPaymentsDueAfterYearFive', 'LesseeOperatingLeaseLiabilityPaymentsDueNextTwelveMonths', 'LesseeOperatingLeaseLiabilityPaymentsDueYearFive', 'LesseeOperatingLeaseLiabilityPaymentsDueYearFour', 'LesseeOperatingLeaseLiabilityPaymentsDueYearThree', 'LesseeOperatingLeaseLiabilityPaymentsDueYearTwo', 'LesseeOperatingLeaseLiabilityPaymentsRemainderOfFiscalYear', 'LettersOfCreditOutstandingAmount', 'Liabilities', 'LiabilitiesAndStockholdersEquity', 'LiabilitiesCurrent', 'LineOfCredit', 'LineOfCreditFacilityMaximumBorrowingCapacity', 'LongTermDebt', 'LongTermDebtCurrent', 'LongTermDebtMaturitiesRepaymentsOfPrincipalAfterYearFive', 'LongTermDebtMaturitiesRepaymentsOfPrincipalInNextTwelveMonths', 'LongTermDebtMaturitiesRepaymentsOfPrincipalInYearFive', 'LongTermDebtMaturitiesRepaymentsOfPrincipalInYearFour', 'LongTermDebtMaturitiesRepaymentsOfPrincipalInYearThree', 'LongTermDebtMaturitiesRepaymentsOfPrincipalInYearTwo', 'LongTermDebtMaturitiesRepaymentsOfPrincipalRemainderOfFiscalYear', 'LongTermDebtNoncurrent', 'LongTermInvestments', 'LossContingencyEstimateOfPossibleLoss', 'MachineryAndEquipmentGross', 'MarketableSecuritiesCurrent', 'MarketableSecuritiesNoncurrent', 'MinorityInterest', 'NetCashProvidedByUsedInFinancingActivities', 'NetCashProvidedByUsedInInvestingActivities', 'NetCashProvidedByUsedInOperatingActivities', 'NetIncomeLoss', 'NetIncomeLossAttributableToNoncontrollingInterest', 'NetIncomeLossAttributableToNonredeemableNoncontrollingInterest', 'NetIncomeLossAttributableToRedeemableNoncontrollingInterest', 'NonoperatingIncomeExpense', 'NoninterestIncome', 'NotesReceivableNet', 'OperatingExpenses', 'OperatingIncomeLoss', 'OperatingLeaseCost', 'OperatingLeaseLiability', 'OperatingLeaseLiabilityCurrent', 'OperatingLeaseLiabilityNoncurrent', 'OperatingLeaseRightOfUseAsset', 'OtherAccruedLiabilitiesCurrent', 'OtherAssetsCurrent', 'OtherAssetsNoncurrent', 'OtherComprehensiveIncomeLossAvailableForSaleSecuritiesAdjustmentNetOfTax', 'OtherComprehensiveIncomeLossCashFlowHedgeGainLossAfterReclassificationAndTax', 'OtherComprehensiveIncomeLossDerivativeInstrumentGainLossafterReclassificationandTax', 'OtherComprehensiveIncomeLossDerivativeInstrumentGainLossbeforeReclassificationafterTax', 'OtherComprehensiveIncomeLossForeignCurrencyTransactionAndTranslationAdjustmentNetOfTax', 'OtherComprehensiveIncomeLossNetOfTax', 'OtherComprehensiveIncomeLossNetOfTaxPortionAttributableToParent', 'OtherComprehensiveIncomeUnrealizedHoldingGainLossOnSecuritiesArisingDuringPeriodNetOfTax', 'OtherIncome', 'OtherLiabilitiesCurrent', 'OtherLiabilitiesNoncurrent', 'OtherLongTermDebt', 'OtherNoncashIncomeExpense', 'PaymentsForCapitalImprovements', 'PaymentsOfDividends', 'PaymentsOfDividendsMinorityInterest', 'PaymentsForProceedsFromBusinessesAndInterestInAffiliates', 'PaymentsForProceedsFromOtherInvestingActivities', 'PaymentsForRent', 'PaymentsForRepurchaseOfCommonStock', 'PaymentsOfDebtExtinguishmentCosts', 'PaymentsToAcquireInvestments', 'PaymentsToAcquirePropertyPlantAndEquipment', 'PreferredStockSharesOutstanding', 'PreferredStockValue', 'PrepaidExpenseAndOtherAssetsCurrent', 'PrepaidExpenseCurrent', 'ProceedsFromDebtMaturingInMoreThanThreeMonths', 'ProceedsFromDebtNetOfIssuanceCosts', 'ProceedsFromDivestitureOfBusinesses', 'ProceedsFromInvestments', 'ProceedsFromIssuanceOfCommonStock', 'ProceedsFromIssuanceOfDebt', 'ProceedsFromIssuanceOfLongTermDebt', 'ProceedsFromIssuanceOfUnsecuredDebt', 'ProceedsFromIssuanceOrSaleOfEquity', 'ProceedsFromMaturitiesPrepaymentsAndCallsOfAvailableForSaleSecurities', 'ProceedsFromPaymentsForOtherFinancingActivities', 'ProceedsFromPaymentsToMinorityShareholders', 'ProceedsFromRepaymentsOfShortTermDebt', 'ProceedsFromRepaymentsOfShortTermDebtMaturingInThreeMonthsOrLess', 'ProceedsFromSaleOfPropertyPlantAndEquipment', 'ProceedsFromStockOptionsExercised', 'ProfitLoss', 'PropertyPlantAndEquipmentGross', 'PropertyPlantAndEquipmentNet', 'ReceivablesNetCurrent', 'RedeemableNoncontrollingInterestEquityCarryingAmount', 'RepaymentsOfDebtMaturingInMoreThanThreeMonths', 'RepaymentsOfLongTermDebt', 'ResearchAndDevelopmentExpense', 'RestrictedCash', 'RestrictedCashAndCashEquivalents', 'RestrictedStockExpense', 'RestructuringCharges', 'RetainedEarningsAccumulatedDeficit', 'Revenues', 'RevenueFromContractWithCustomerExcludingAssessedTax', 'SecuredLongTermDebt', 'SellingAndMarketingExpense', 'SellingGeneralAndAdministrativeExpense', 'ShareBasedCompensation', 'ShortTermBorrowings', 'ShortTermInvestments', 'StockholdersEquity', 'StockholdersEquityIncludingPortionAttributableToNoncontrollingInterest', 'StockholdersEquityOther', 'StockIssuedDuringPeriodValueNewIssues', 'StockOptionPlanExpense', 'StockRedeemedOrCalledDuringPeriodValue', 'StockRepurchasedDuringPeriodValue', 'StockRepurchasedAndRetiredDuringPeriodValue', 'TaxesPayableCurrent', 'TradingSecuritiesDebt', 'TreasuryStockAcquiredAverageCostPerShare', 'TreasuryStockSharesAcquired', 'UnrealizedGainLossOnInvestments', 'UnrecognizedTaxBenefits', 'UnsecuredDebt', 'VariableLeaseCost', 'WeightedAverageNumberOfDilutedSharesOutstanding', 'WeightedAverageNumberOfSharesOutstandingBasic', 'WeightedAverageNumberDilutedSharesOutstandingAdjustment'] | None`<br/>
*Default:* Revenues<br/>
Fact or concept from the SEC taxonomy, in UpperCamelCase. Defaults to, 'Revenues'. AAPL, MSFT, GOOG, BRK-A currently report revenue as, 'RevenueFromContractWithCustomerExcludingAssessedTax'. In previous years, they have reported as 'Revenues'.

**year**: `int | None`<br/>
The year to retrieve the data for. If not provided, the current year is used. When symbol(s) are provided, excluding the year will return all reported values for the concept.

**fiscal_period**: `Literal['fy', 'q1', 'q2', 'q3', 'q4'] | None`<br/>
The fiscal period to retrieve the data for. If not provided, the most recent quarter is used. This parameter is ignored when a symbol is supplied.

**instantaneous**: `bool | None`<br/>
*Default:* False<br/>
<details>
<summary mdxType="summary">Description</summary>

Whether to retrieve instantaneous data. See the notes above for more information. Defaults to False. Some facts are only available as instantaneous data.<br/>
The function will automatically attempt the inverse of this parameter if the initial fiscal quarter request fails. This parameter is ignored when a symbol is supplied.<br/>
</details>

**use_cache**: `bool | None`<br/>
*Default:* True<br/>
Whether to use cache for the request. Defaults to True.

</TabItem>
</Tabs>

---

## Returns

**results**: `CompareCompanyFacts`

Serializable results.

**provider**: `Optional[Literal['sec']]`

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

**symbol**: `str | None`<br/>
Symbol representing the entity requested in the data.

**name**: `str | None`<br/>
Name of the entity.

**value**: `float`<br/>
The reported value of the fact or concept.

**reported_date**: `date | None`<br/>
The date when the report was filed.

**period_beginning**: `date | None`<br/>
The start date of the reporting period.

**period_ending**: `date | None`<br/>
The end date of the reporting period.

**fiscal_year**: `int | None`<br/>
The fiscal year.

**fiscal_period**: `str | None`<br/>
The fiscal period of the fiscal year.

</TabItem>
<TabItem value='sec' label='sec'>

**symbol**: `str | None`<br/>
Symbol representing the entity requested in the data.

**name**: `str | None`<br/>
Name of the entity.

**value**: `float`<br/>
The reported value of the fact or concept.

**reported_date**: `date | None`<br/>
The date when the report was filed.

**period_beginning**: `date | None`<br/>
The start date of the reporting period.

**period_ending**: `date | None`<br/>
The end date of the reporting period.

**fiscal_year**: `int | None`<br/>
The fiscal year.

**fiscal_period**: `str | None`<br/>
The fiscal period of the fiscal year.

**cik**: `str | int`<br/>
Central Index Key (CIK) for the requested entity.

**location**: `str | None`<br/>
Geographic location of the reporting entity.

**form**: `str | None`<br/>
The SEC form associated with the fact or concept.

**frame**: `str | None`<br/>
The frame ID associated with the fact or concept, if applicable.

**accession**: `str`<br/>
SEC filing accession number associated with the reported fact or concept.

**fact**: `str`<br/>
The display name of the fact or concept.

**unit**: `str | None`<br/>
The unit of measurement for the fact or concept.

</TabItem>
</Tabs>

