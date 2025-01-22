"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[91767],{91728:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>h,contentTitle:()=>c,default:()=>j,frontMatter:()=>a,metadata:()=>o,toc:()=>u});var n=r(74848),s=r(28453),i=r(94331),d=r(18228),l=r(19365);const a={title:"HOLDINGS",description:"Learn how to get the holdings data for an individual ETF using the `obb.etf.holdings` method. Understand the parameters like symbol, provider, date, and CIK. Explore the returns, results, warnings, chart, and metadata. Dive into the data fields like symbol, name, LEI, title, CUSIP, ISIN, balance, units, currency, value, weight, payoff profile, asset category, issuer category, country, and more.",keywords:["ETF holdings","individual ETF holdings","holdings data for ETF","symbol","provider","date","CIK","returns","results","warnings","chart","metadata","data","name","LEI","title","CUSIP","ISIN","balance","units","currency","value","weight","payoff profile","asset category","issuer category","country","is restricted","fair value level","is cash collateral","is non-cash collateral","is loan by fund","acceptance datetime"]},c=void 0,o={id:"excel/reference/etf/holdings",title:"HOLDINGS",description:"Learn how to get the holdings data for an individual ETF using the `obb.etf.holdings` method. Understand the parameters like symbol, provider, date, and CIK. Explore the returns, results, warnings, chart, and metadata. Dive into the data fields like symbol, name, LEI, title, CUSIP, ISIN, balance, units, currency, value, weight, payoff profile, asset category, issuer category, country, and more.",source:"@site/content/excel/reference/etf/holdings.md",sourceDirName:"excel/reference/etf",slug:"/excel/reference/etf/holdings",permalink:"/excel/reference/etf/holdings",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/excel/reference/etf/holdings.md",tags:[],version:"current",frontMatter:{title:"HOLDINGS",description:"Learn how to get the holdings data for an individual ETF using the `obb.etf.holdings` method. Understand the parameters like symbol, provider, date, and CIK. Explore the returns, results, warnings, chart, and metadata. Dive into the data fields like symbol, name, LEI, title, CUSIP, ISIN, balance, units, currency, value, weight, payoff profile, asset category, issuer category, country, and more.",keywords:["ETF holdings","individual ETF holdings","holdings data for ETF","symbol","provider","date","CIK","returns","results","warnings","chart","metadata","data","name","LEI","title","CUSIP","ISIN","balance","units","currency","value","weight","payoff profile","asset category","issuer category","country","is restricted","fair value level","is cash collateral","is non-cash collateral","is loan by fund","acceptance datetime"]},sidebar:"tutorialSidebar",previous:{title:"ETF",permalink:"/excel/reference/etf/"},next:{title:"INFO",permalink:"/excel/reference/etf/info"}},h={},u=[{value:"Syntax",id:"syntax",level:2},{value:"Examples",id:"examples",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Data",id:"data",level:2}];function x(e){const t={code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.A,{title:"ETF.HOLDINGS | OpenBB Add-in for Excel Docs"}),"\n",(0,n.jsx)(t.p,{children:"Get the holdings for an individual ETF."}),"\n",(0,n.jsx)(t.h2,{id:"syntax",children:"Syntax"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-excel",children:"=OBB.ETF.HOLDINGS(symbol,[date])\n"})}),"\n",(0,n.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-excel",children:'=OBB.ETF.HOLDINGS("XLK")\n'})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-excel",children:'=OBB.ETF.HOLDINGS("XLK","2022-03-31")\n'})}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Required"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:"symbol"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:"Text"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:"Symbol to get data for. (ETF)"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:"True"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"date"}),(0,n.jsx)(t.td,{children:"Text"}),(0,n.jsx)(t.td,{children:"A specific date to get data for."}),(0,n.jsx)(t.td,{children:"False"})]})]})]}),"\n",(0,n.jsx)(t.hr,{}),"\n","\n",(0,n.jsx)(t.h2,{id:"data",children:"Data"}),"\n",(0,n.jsx)(d.A,{children:(0,n.jsx)(l.A,{value:"intrinio",children:(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"symbol"}),(0,n.jsx)(t.td,{children:"Symbol representing the entity requested in the data. (ETF)"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"name"}),(0,n.jsx)(t.td,{children:"Name of the ETF holding."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"lei"}),(0,n.jsx)(t.td,{children:"The LEI of the holding."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"cusip"}),(0,n.jsx)(t.td,{children:"The CUSIP of the holding."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"isin"}),(0,n.jsx)(t.td,{children:"The ISIN of the holding."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"other_id"}),(0,n.jsx)(t.td,{children:"Internal identifier for the holding."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"balance"}),(0,n.jsx)(t.td,{children:"The balance of the holding."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"pctVal"}),(0,n.jsx)(t.td,{children:"The weight of the holding in ETF in %."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"valUSD"}),(0,n.jsx)(t.td,{children:"The value of the holding in USD."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"payoffProfile"}),(0,n.jsx)(t.td,{children:"The payoff profile of the holding."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"units"}),(0,n.jsx)(t.td,{children:"The units of the holding."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"curCd"}),(0,n.jsx)(t.td,{children:"The currency of the holding."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"assetCat"}),(0,n.jsx)(t.td,{children:"The asset category of the holding."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"issuerCat"}),(0,n.jsx)(t.td,{children:"The issuer category of the holding."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"invCountry"}),(0,n.jsx)(t.td,{children:"The country of the holding."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"isRestrictedSec"}),(0,n.jsx)(t.td,{children:"Whether the holding is restricted."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"fairValLevel"}),(0,n.jsx)(t.td,{children:"The fair value level of the holding."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"isCashCollateral"}),(0,n.jsx)(t.td,{children:"Whether the holding is cash collateral."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"isNonCashCollateral"}),(0,n.jsx)(t.td,{children:"Whether the holding is non-cash collateral."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"isLoanByFund"}),(0,n.jsx)(t.td,{children:"Whether the holding is loan by fund."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"loanVal"}),(0,n.jsx)(t.td,{children:"The loan value of the holding."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"issuer_conditional"}),(0,n.jsx)(t.td,{children:"The issuer conditions of the holding."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"asset_conditional"}),(0,n.jsx)(t.td,{children:"The asset conditions of the holding."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"maturity_date"}),(0,n.jsx)(t.td,{children:"The maturity date of the debt security."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"coupon_kind"}),(0,n.jsx)(t.td,{children:"The type of coupon for the debt security."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"rate_type"}),(0,n.jsx)(t.td,{children:"The type of rate for the debt security, floating or fixed."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"annualized_return"}),(0,n.jsx)(t.td,{children:"The annualized return on the debt security."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"is_default"}),(0,n.jsx)(t.td,{children:"If the debt security is defaulted."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"in_arrears"}),(0,n.jsx)(t.td,{children:"If the debt security is in arrears."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"is_paid_kind"}),(0,n.jsx)(t.td,{children:"If the debt security payments are paid in kind."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"derivative_category"}),(0,n.jsx)(t.td,{children:"The derivative category of the holding."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"counterparty"}),(0,n.jsx)(t.td,{children:"The counterparty of the derivative."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"underlying_name"}),(0,n.jsx)(t.td,{children:"The name of the underlying asset associated with the derivative."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"option_type"}),(0,n.jsx)(t.td,{children:"The type of option."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"derivative_payoff"}),(0,n.jsx)(t.td,{children:"The payoff profile of the derivative."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"expiry_date"}),(0,n.jsx)(t.td,{children:"The expiry or termination date of the derivative."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"exercise_price"}),(0,n.jsx)(t.td,{children:"The exercise price of the option."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"exercise_currency"}),(0,n.jsx)(t.td,{children:"The currency of the option exercise price."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"shares_per_contract"}),(0,n.jsx)(t.td,{children:"The number of shares per contract."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"delta"}),(0,n.jsx)(t.td,{children:"The delta of the option."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"rate_type_rec"}),(0,n.jsx)(t.td,{children:"The type of rate for receivable portion of the swap."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"receive_currency"}),(0,n.jsx)(t.td,{children:"The receive currency of the swap."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"upfront_receive"}),(0,n.jsx)(t.td,{children:"The upfront amount received of the swap."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"floating_rate_index_rec"}),(0,n.jsx)(t.td,{children:"The floating rate index for receivable portion of the swap."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"floating_rate_spread_rec"}),(0,n.jsx)(t.td,{children:"The floating rate spread for reveivable portion of the swap."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"rate_tenor_rec"}),(0,n.jsx)(t.td,{children:"The rate tenor for receivable portion of the swap."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"rate_tenor_unit_rec"}),(0,n.jsx)(t.td,{children:"The rate tenor unit for receivable portion of the swap."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"reset_date_rec"}),(0,n.jsx)(t.td,{children:"The reset date for receivable portion of the swap."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"reset_date_unit_rec"}),(0,n.jsx)(t.td,{children:"The reset date unit for receivable portion of the swap."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"rate_type_pmnt"}),(0,n.jsx)(t.td,{children:"The type of rate for payment portion of the swap."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"payment_currency"}),(0,n.jsx)(t.td,{children:"The payment currency of the swap."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"upfront_payment"}),(0,n.jsx)(t.td,{children:"The upfront amount received of the swap."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"floating_rate_index_pmnt"}),(0,n.jsx)(t.td,{children:"The floating rate index for payment portion of the swap."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"floating_rate_spread_pmnt"}),(0,n.jsx)(t.td,{children:"The floating rate spread for payment portion of the swap."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"rate_tenor_pmnt"}),(0,n.jsx)(t.td,{children:"The rate tenor for payment portion of the swap."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"rate_tenor_unit_pmnt"}),(0,n.jsx)(t.td,{children:"The rate tenor unit for payment portion of the swap."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"reset_date_pmnt"}),(0,n.jsx)(t.td,{children:"The reset date for payment portion of the swap."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"reset_date_unit_pmnt"}),(0,n.jsx)(t.td,{children:"The reset date unit for payment portion of the swap."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"repo_type"}),(0,n.jsx)(t.td,{children:"The type of repo."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"is_cleared"}),(0,n.jsx)(t.td,{children:"If the repo is cleared."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"is_tri_party"}),(0,n.jsx)(t.td,{children:"If the repo is tri party."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"principal_amount"}),(0,n.jsx)(t.td,{children:"The principal amount of the repo."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"principal_currency"}),(0,n.jsx)(t.td,{children:"The currency of the principal amount."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"collateral_type"}),(0,n.jsx)(t.td,{children:"The collateral type of the repo."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"collateral_amount"}),(0,n.jsx)(t.td,{children:"The collateral amount of the repo."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"collateral_currency"}),(0,n.jsx)(t.td,{children:"The currency of the collateral amount."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"exchange_currency"}),(0,n.jsx)(t.td,{children:"The currency of the exchange rate."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"exchange_rate"}),(0,n.jsx)(t.td,{children:"The exchange rate."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"currency_sold"}),(0,n.jsx)(t.td,{children:"The currency sold in a Forward Derivative."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"currency_amount_sold"}),(0,n.jsx)(t.td,{children:"The amount of currency sold in a Forward Derivative."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"currency_bought"}),(0,n.jsx)(t.td,{children:"The currency bought in a Forward Derivative."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"currency_amount_bought"}),(0,n.jsx)(t.td,{children:"The amount of currency bought in a Forward Derivative."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"notional_amount"}),(0,n.jsx)(t.td,{children:"The notional amount of the derivative."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"notional_currency"}),(0,n.jsx)(t.td,{children:"The currency of the derivative's notional amount."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"unrealized_gain"}),(0,n.jsx)(t.td,{children:"The unrealized gain or loss on the derivative."})]})]})]})})})]})}function j(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(x,{...e})}):x(e)}},19365:(e,t,r)=>{r.d(t,{A:()=>d});r(96540);var n=r(34164);const s={tabItem:"tabItem_Ymn6"};var i=r(74848);function d(e){let{children:t,hidden:r,className:d}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,n.A)(s.tabItem,d),hidden:r,children:t})}},94331:(e,t,r)=>{r.d(t,{A:()=>i});r(96540);var n=r(5260),s=r(74848);function i(e){let{title:t}=e;return(0,s.jsx)(n.A,{children:(0,s.jsx)("title",{children:t})})}},18228:(e,t,r)=>{r.d(t,{A:()=>T});var n=r(96540),s=r(34164),i=r(23104),d=r(56347),l=r(205),a=r(57485),c=r(31682),o=r(89466);function h(e){return function(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:s}}=e;return{value:t,label:r,attributes:n,default:s}}))}function u(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??h(r);return function(e){const t=(0,c.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function x(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function j(e){let{queryString:t=!1,groupId:r}=e;const s=(0,d.W6)(),i=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,a.aZ)(i),(0,n.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(s.location.search);t.set(i,e),s.replace({...s.location,search:t.toString()})}),[i,s])]}function f(e){const{defaultValue:t,queryString:r=!1,groupId:s}=e,i=u(e),[d,a]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!x({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:i}))),[c,h]=j({queryString:r,groupId:s}),[f,p]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,i]=(0,o.Dv)(r);return[s,(0,n.useCallback)((e=>{r&&i.set(e)}),[r,i])]}({groupId:s}),y=(()=>{const e=c??f;return x({value:e,tabValues:i})?e:null})();(0,l.A)((()=>{y&&a(y)}),[y]);return{selectedValue:d,selectValue:(0,n.useCallback)((e=>{if(!x({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);a(e),h(e),p(e)}),[h,p,i]),tabValues:i}}var p=r(92303);const y={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};var m=r(74848);function g(e){let{className:t,block:r,selectedValue:n,selectValue:l,tabValues:a}=e;const c=[],{blockElementScrollPositionUntilNextRender:o}=(0,i.a_)(),{pathname:h}=(0,d.zy)(),u=e=>{const t=e.currentTarget,r=c.indexOf(t),s=a[r].value;s!==n&&(o(t),l(s))},x=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const r=c.indexOf(e.currentTarget)+1;t=c[r]??c[0];break}case"ArrowLeft":{const r=c.indexOf(e.currentTarget)-1;t=c[r]??c[c.length-1];break}}t?.focus()};return(0,m.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("_group-tab list-none -ml-7 my-6 overflow-auto"),children:a.map((e=>{let{value:t,label:r,attributes:i}=e;return(0,m.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>c.push(e),onKeyDown:x,onClick:u,...i,className:(0,s.A)("font-bold tracking-widest w-fit px-3 inline-flex py-1 uppercase border-b text-lg cursor-pointer",y.tabItem,i?.className,{"border-b-2 pointer-events-none":n===t,"border-b-2 text-[#669dcb] border-[#669dcb]":n===t&&h.startsWith("/terminal"),"border-b-2 text-[#FB923C] border-[#FB923C]":n===t&&h.startsWith("/sdk"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":n!==t&&h.startsWith("/sdk"),"border-b-2 text-[#FB923C] border-[#FB923C]":n===t&&h.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":n!==t&&h.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#abd2f1] hover:border-[#abd2f1]":n!==t&&h.startsWith("/terminal")}),children:r??t},t)}))})}function b(e){let{lazy:t,children:r,selectedValue:s}=e;if(r=Array.isArray(r)?r:[r],t){const e=r.find((e=>e.props.value===s));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,m.jsx)("div",{className:"margin-top--md",children:r.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function v(e){const t=f(e);return(0,m.jsxs)("div",{className:(0,s.A)("tabs-container",y.tabList),children:[(0,m.jsx)(g,{...e,...t}),(0,m.jsx)(b,{...e,...t})]})}function T(e){const t=(0,p.A)();return(0,m.jsx)(v,{...e},String(t))}},28453:(e,t,r)=>{r.d(t,{R:()=>d,x:()=>l});var n=r(96540);const s={},i=n.createContext(s);function d(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);