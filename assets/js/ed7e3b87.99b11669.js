"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[16248],{85986:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>h,contentTitle:()=>c,default:()=>j,frontMatter:()=>a,metadata:()=>o,toc:()=>x});var n=r(74848),s=r(28453),i=r(94331),d=r(18228),l=r(19365);const a={title:"BALANCE",description:"Learn how to use the balance sheet function in Python to retrieve financial statement data. This documentation provides details about the function parameters, return values, and available data types.",keywords:["balance sheet statement","balance sheet function","python function","financial statement function","balance sheet data parameters","balance sheet data returns","balance sheet data types"]},c=void 0,o={id:"excel/reference/equity/fundamental/balance",title:"BALANCE",description:"Learn how to use the balance sheet function in Python to retrieve financial statement data. This documentation provides details about the function parameters, return values, and available data types.",source:"@site/content/excel/reference/equity/fundamental/balance.md",sourceDirName:"excel/reference/equity/fundamental",slug:"/excel/reference/equity/fundamental/balance",permalink:"/excel/reference/equity/fundamental/balance",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/excel/reference/equity/fundamental/balance.md",tags:[],version:"current",frontMatter:{title:"BALANCE",description:"Learn how to use the balance sheet function in Python to retrieve financial statement data. This documentation provides details about the function parameters, return values, and available data types.",keywords:["balance sheet statement","balance sheet function","python function","financial statement function","balance sheet data parameters","balance sheet data returns","balance sheet data types"]},sidebar:"tutorialSidebar",previous:{title:"EQUITY.FUNDAMENTAL",permalink:"/excel/reference/equity/fundamental/"},next:{title:"CASH",permalink:"/excel/reference/equity/fundamental/cash"}},h={},x=[{value:"Syntax",id:"syntax",level:2},{value:"Examples",id:"examples",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Data",id:"data",level:2}];function u(e){const t={code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.A,{title:"EQUITY.FUNDAMENTAL.BALANCE | OpenBB Add-in for Excel Docs"}),"\n",(0,n.jsx)(t.p,{children:"Get the balance sheet for a given company."}),"\n",(0,n.jsx)(t.h2,{id:"syntax",children:"Syntax"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-excel",children:"=OBB.EQUITY.FUNDAMENTAL.BALANCE(symbol,[period],[limit])\n"})}),"\n",(0,n.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-excel",children:'=OBB.EQUITY.FUNDAMENTAL.BALANCE("AAPL")\n'})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-excel",children:'=OBB.EQUITY.FUNDAMENTAL.BALANCE("AAPL","annual",5)\n'})}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Required"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:"symbol"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:"Text"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:"Symbol to get data for."})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:"True"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"period"}),(0,n.jsx)(t.td,{children:"Text"}),(0,n.jsx)(t.td,{children:"Time period of the data to return."}),(0,n.jsx)(t.td,{children:"False"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"limit"}),(0,n.jsx)(t.td,{children:"Number"}),(0,n.jsx)(t.td,{children:"The number of data entries to return."}),(0,n.jsx)(t.td,{children:"False"})]})]})]}),"\n",(0,n.jsx)(t.hr,{}),"\n","\n",(0,n.jsx)(t.h2,{id:"data",children:"Data"}),"\n",(0,n.jsx)(d.A,{children:(0,n.jsx)(l.A,{value:"fmp",children:(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"period_ending"}),(0,n.jsx)(t.td,{children:"The end date of the reporting period."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"fiscal_period"}),(0,n.jsx)(t.td,{children:"The fiscal period of the report."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"fiscal_year"}),(0,n.jsx)(t.td,{children:"The fiscal year of the fiscal period."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"reported_currency"}),(0,n.jsx)(t.td,{children:"The currency in which the balance sheet is reported."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"cash_and_cash_equivalents"}),(0,n.jsx)(t.td,{children:"Cash and cash equivalents."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"cash_and_due_from_banks"}),(0,n.jsx)(t.td,{children:"Cash and due from banks."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"restricted_cash"}),(0,n.jsx)(t.td,{children:"Restricted cash."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"short_term_investments"}),(0,n.jsx)(t.td,{children:"Short term investments."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"federal_funds_sold"}),(0,n.jsx)(t.td,{children:"Federal funds sold."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"accounts_receivable"}),(0,n.jsx)(t.td,{children:"Accounts receivable."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"note_and_lease_receivable"}),(0,n.jsx)(t.td,{children:"Note and lease receivable. (Vendor non-trade receivables)"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"inventories"}),(0,n.jsx)(t.td,{children:"Net Inventories."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"customer_and_other_receivables"}),(0,n.jsx)(t.td,{children:"Customer and other receivables."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"interest_bearing_deposits_at_other_banks"}),(0,n.jsx)(t.td,{children:"Interest bearing deposits at other banks."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"time_deposits_placed_and_other_short_term_investments"}),(0,n.jsx)(t.td,{children:"Time deposits placed and other short term investments."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"trading_account_securities"}),(0,n.jsx)(t.td,{children:"Trading account securities."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"loans_and_leases"}),(0,n.jsx)(t.td,{children:"Loans and leases."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"allowance_for_loan_and_lease_losses"}),(0,n.jsx)(t.td,{children:"Allowance for loan and lease losses."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"current_deferred_refundable_income_taxes"}),(0,n.jsx)(t.td,{children:"Current deferred refundable income taxes."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"other_current_assets"}),(0,n.jsx)(t.td,{children:"Other current assets."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"loans_and_leases_net_of_allowance"}),(0,n.jsx)(t.td,{children:"Loans and leases net of allowance."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"accrued_investment_income"}),(0,n.jsx)(t.td,{children:"Accrued investment income."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"other_current_non_operating_assets"}),(0,n.jsx)(t.td,{children:"Other current non-operating assets."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"loans_held_for_sale"}),(0,n.jsx)(t.td,{children:"Loans held for sale."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"prepaid_expenses"}),(0,n.jsx)(t.td,{children:"Prepaid expenses."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"total_current_assets"}),(0,n.jsx)(t.td,{children:"Total current assets."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"plant_property_equipment_gross"}),(0,n.jsx)(t.td,{children:"Plant property equipment gross."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"accumulated_depreciation"}),(0,n.jsx)(t.td,{children:"Accumulated depreciation."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"premises_and_equipment_net"}),(0,n.jsx)(t.td,{children:"Net premises and equipment."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"plant_property_equipment_net"}),(0,n.jsx)(t.td,{children:"Net plant property equipment."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"long_term_investments"}),(0,n.jsx)(t.td,{children:"Long term investments."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"mortgage_servicing_rights"}),(0,n.jsx)(t.td,{children:"Mortgage servicing rights."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"unearned_premiums_asset"}),(0,n.jsx)(t.td,{children:"Unearned premiums asset."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"non_current_note_lease_receivables"}),(0,n.jsx)(t.td,{children:"Non-current note lease receivables."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"deferred_acquisition_cost"}),(0,n.jsx)(t.td,{children:"Deferred acquisition cost."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"goodwill"}),(0,n.jsx)(t.td,{children:"Goodwill."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"separate_account_business_assets"}),(0,n.jsx)(t.td,{children:"Separate account business assets."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"non_current_deferred_refundable_income_taxes"}),(0,n.jsx)(t.td,{children:"Noncurrent deferred refundable income taxes."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"intangible_assets"}),(0,n.jsx)(t.td,{children:"Intangible assets."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"employee_benefit_assets"}),(0,n.jsx)(t.td,{children:"Employee benefit assets."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"other_assets"}),(0,n.jsx)(t.td,{children:"Other assets."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"other_non_current_operating_assets"}),(0,n.jsx)(t.td,{children:"Other noncurrent operating assets."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"other_non_current_non_operating_assets"}),(0,n.jsx)(t.td,{children:"Other noncurrent non-operating assets."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"interest_bearing_deposits"}),(0,n.jsx)(t.td,{children:"Interest bearing deposits."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"total_non_current_assets"}),(0,n.jsx)(t.td,{children:"Total noncurrent assets."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"total_assets"}),(0,n.jsx)(t.td,{children:"Total assets."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"non_interest_bearing_deposits"}),(0,n.jsx)(t.td,{children:"Non interest bearing deposits."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"federal_funds_purchased_and_securities_sold"}),(0,n.jsx)(t.td,{children:"Federal funds purchased and securities sold."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"bankers_acceptance_outstanding"}),(0,n.jsx)(t.td,{children:"Bankers acceptance outstanding."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"short_term_debt"}),(0,n.jsx)(t.td,{children:"Short term debt."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"accounts_payable"}),(0,n.jsx)(t.td,{children:"Accounts payable."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"current_deferred_revenue"}),(0,n.jsx)(t.td,{children:"Current deferred revenue."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"current_deferred_payable_income_tax_liabilities"}),(0,n.jsx)(t.td,{children:"Current deferred payable income tax liabilities."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"accrued_interest_payable"}),(0,n.jsx)(t.td,{children:"Accrued interest payable."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"accrued_expenses"}),(0,n.jsx)(t.td,{children:"Accrued expenses."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"other_short_term_payables"}),(0,n.jsx)(t.td,{children:"Other short term payables."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"customer_deposits"}),(0,n.jsx)(t.td,{children:"Customer deposits."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"dividends_payable"}),(0,n.jsx)(t.td,{children:"Dividends payable."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"claims_and_claim_expense"}),(0,n.jsx)(t.td,{children:"Claims and claim expense."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"future_policy_benefits"}),(0,n.jsx)(t.td,{children:"Future policy benefits."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"current_employee_benefit_liabilities"}),(0,n.jsx)(t.td,{children:"Current employee benefit liabilities."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"unearned_premiums_liability"}),(0,n.jsx)(t.td,{children:"Unearned premiums liability."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"other_taxes_payable"}),(0,n.jsx)(t.td,{children:"Other taxes payable."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"policy_holder_funds"}),(0,n.jsx)(t.td,{children:"Policy holder funds."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"other_current_liabilities"}),(0,n.jsx)(t.td,{children:"Other current liabilities."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"other_current_non_operating_liabilities"}),(0,n.jsx)(t.td,{children:"Other current non-operating liabilities."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"separate_account_business_liabilities"}),(0,n.jsx)(t.td,{children:"Separate account business liabilities."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"total_current_liabilities"}),(0,n.jsx)(t.td,{children:"Total current liabilities."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"long_term_debt"}),(0,n.jsx)(t.td,{children:"Long term debt."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"other_long_term_liabilities"}),(0,n.jsx)(t.td,{children:"Other long term liabilities."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"non_current_deferred_revenue"}),(0,n.jsx)(t.td,{children:"Non-current deferred revenue."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"non_current_deferred_payable_income_tax_liabilities"}),(0,n.jsx)(t.td,{children:"Non-current deferred payable income tax liabilities."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"non_current_employee_benefit_liabilities"}),(0,n.jsx)(t.td,{children:"Non-current employee benefit liabilities."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"other_non_current_operating_liabilities"}),(0,n.jsx)(t.td,{children:"Other non-current operating liabilities."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"other_non_current_non_operating_liabilities"}),(0,n.jsx)(t.td,{children:"Other non-current, non-operating liabilities."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"total_non_current_liabilities"}),(0,n.jsx)(t.td,{children:"Total non-current liabilities."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"capital_lease_obligations"}),(0,n.jsx)(t.td,{children:"Capital lease obligations."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"asset_retirement_reserve_litigation_obligation"}),(0,n.jsx)(t.td,{children:"Asset retirement reserve litigation obligation."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"total_liabilities"}),(0,n.jsx)(t.td,{children:"Total liabilities."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"commitments_contingencies"}),(0,n.jsx)(t.td,{children:"Commitments contingencies."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"redeemable_non_controlling_interest"}),(0,n.jsx)(t.td,{children:"Redeemable non-controlling interest."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"preferred_stock"}),(0,n.jsx)(t.td,{children:"Preferred stock."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"common_stock"}),(0,n.jsx)(t.td,{children:"Common stock."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"retained_earnings"}),(0,n.jsx)(t.td,{children:"Retained earnings."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"treasury_stock"}),(0,n.jsx)(t.td,{children:"Treasury stock."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"accumulated_other_comprehensive_income"}),(0,n.jsx)(t.td,{children:"Accumulated other comprehensive income."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"participating_policy_holder_equity"}),(0,n.jsx)(t.td,{children:"Participating policy holder equity."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"other_equity_adjustments"}),(0,n.jsx)(t.td,{children:"Other equity adjustments."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"total_common_equity"}),(0,n.jsx)(t.td,{children:"Total common equity."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"total_preferred_common_equity"}),(0,n.jsx)(t.td,{children:"Total preferred common equity."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"non_controlling_interest"}),(0,n.jsx)(t.td,{children:"Non-controlling interest."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"total_equity_non_controlling_interests"}),(0,n.jsx)(t.td,{children:"Total equity non-controlling interests."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"total_liabilities_shareholders_equity"}),(0,n.jsx)(t.td,{children:"Total liabilities and shareholders equity."})]})]})]})})})]})}function j(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},19365:(e,t,r)=>{r.d(t,{A:()=>d});r(96540);var n=r(34164);const s={tabItem:"tabItem_Ymn6"};var i=r(74848);function d(e){let{children:t,hidden:r,className:d}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,n.A)(s.tabItem,d),hidden:r,children:t})}},94331:(e,t,r)=>{r.d(t,{A:()=>i});r(96540);var n=r(5260),s=r(74848);function i(e){let{title:t}=e;return(0,s.jsx)(n.A,{children:(0,s.jsx)("title",{children:t})})}},18228:(e,t,r)=>{r.d(t,{A:()=>v});var n=r(56347),s=r(23104),i=r(96540),d=r(205),l=r(57485),a=r(31682),c=r(89466);function o(e){return function(e){return i.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:s}}=e;return{value:t,label:r,attributes:n,default:s}}))}function h(e){const{values:t,children:r}=e;return(0,i.useMemo)((()=>{const e=t??o(r);return function(e){const t=(0,a.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function x(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function u(e){let{queryString:t=!1,groupId:r}=e;const s=(0,n.W6)(),d=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,l.aZ)(d),(0,i.useCallback)((e=>{if(!d)return;const t=new URLSearchParams(s.location.search);t.set(d,e),s.replace({...s.location,search:t.toString()})}),[d,s])]}function j(e){const{defaultValue:t,queryString:r=!1,groupId:n}=e,s=h(e),[l,a]=(0,i.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!x({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:s}))),[o,j]=u({queryString:r,groupId:n}),[_,p]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,s]=(0,c.Dv)(r);return[n,(0,i.useCallback)((e=>{r&&s.set(e)}),[r,s])]}({groupId:n}),b=(()=>{const e=o??_;return x({value:e,tabValues:s})?e:null})();(0,d.A)((()=>{b&&a(b)}),[b]);return{selectedValue:l,selectValue:(0,i.useCallback)((e=>{if(!x({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);a(e),j(e),p(e)}),[j,p,s]),tabValues:s}}var _=r(92303),p=r(34164);const b={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};var m=r(74848);function f(e){let{className:t,block:r,selectedValue:i,selectValue:d,tabValues:l}=e;const a=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.a_)(),{pathname:o}=(0,n.zy)(),h=e=>{const t=e.currentTarget,r=a.indexOf(t),n=l[r].value;n!==i&&(c(t),d(n))},x=e=>{let t=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{const r=a.indexOf(e.currentTarget)+1;t=a[r]??a[0];break}case"ArrowLeft":{const r=a.indexOf(e.currentTarget)-1;t=a[r]??a[a.length-1];break}}t?.focus()};return(0,m.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,p.A)("_group-tab list-none -ml-7 my-6 overflow-auto"),children:l.map((e=>{let{value:t,label:r,attributes:n}=e;return(0,m.jsx)("li",{role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,ref:e=>a.push(e),onKeyDown:x,onClick:h,...n,className:(0,p.A)("font-bold tracking-widest w-fit px-3 inline-flex py-1 uppercase border-b text-lg cursor-pointer",b.tabItem,n?.className,{"border-b-2 pointer-events-none":i===t,"border-b-2 text-[#669dcb] border-[#669dcb]":i===t&&o.startsWith("/workspace"),"border-b-2 text-[#FB923C] border-[#FB923C]":i===t&&o.startsWith("/sdk"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":i!==t&&o.startsWith("/sdk"),"border-b-2 text-[#FB923C] border-[#FB923C]":i===t&&o.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":i!==t&&o.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#abd2f1] hover:border-[#abd2f1]":i!==t&&o.startsWith("/workspace")}),children:r??t},t)}))})}function y(e){let{lazy:t,children:r,selectedValue:n}=e;if(r=Array.isArray(r)?r:[r],t){const e=r.find((e=>e.props.value===n));return e?(0,i.cloneElement)(e,{className:"margin-top--md"}):null}return(0,m.jsx)("div",{className:"margin-top--md",children:r.map(((e,t)=>(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==n})))})}function g(e){const t=j(e);return(0,m.jsxs)("div",{className:(0,p.A)("tabs-container",b.tabList),children:[(0,m.jsx)(f,{...e,...t}),(0,m.jsx)(y,{...e,...t})]})}function v(e){const t=(0,_.A)();return(0,m.jsx)(g,{...e},String(t))}},28453:(e,t,r)=>{r.d(t,{R:()=>d,x:()=>l});var n=r(96540);const s={},i=n.createContext(s);function d(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);