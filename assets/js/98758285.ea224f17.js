"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2051],{2199:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>l,default:()=>f,frontMatter:()=>d,metadata:()=>o,toc:()=>u});var r=n(74848),s=n(28453),i=n(94331),a=n(18228),c=n(19365);const d={title:"CASH",description:"Learn how to use the Cash Flow Statement API endpoint to retrieve information about cash flow statements. Understand the parameters and return values of the API, and explore the available data fields for cash flow statements.",keywords:["Cash Flow Statement","cash flow statement parameters","cash flow statement returns","cash flow statement data","python obb.equity.fundamental.cash","symbol","period","limit","provider","cik","filing date","period of report date","include sources","order","sort","net income","depreciation and amortization","stock based compensation","deferred income tax","other non-cash items","changes in operating assets and liabilities","accounts receivables","inventory","vendor non-trade receivables","other current and non-current assets","accounts payables","deferred revenue","other current and non-current liabilities","net cash flow from operating activities","purchases of marketable securities","sales from maturities of investments","investments in property plant and equipment","payments from acquisitions","other investing activities","net cash flow from investing activities","taxes paid on net share settlement","dividends paid","common stock repurchased","debt proceeds","debt repayment","other financing activities","net cash flow from financing activities","net change in cash"]},l=void 0,o={id:"excel/reference/equity/fundamental/cash",title:"CASH",description:"Learn how to use the Cash Flow Statement API endpoint to retrieve information about cash flow statements. Understand the parameters and return values of the API, and explore the available data fields for cash flow statements.",source:"@site/content/excel/reference/equity/fundamental/cash.md",sourceDirName:"excel/reference/equity/fundamental",slug:"/excel/reference/equity/fundamental/cash",permalink:"/excel/reference/equity/fundamental/cash",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/excel/reference/equity/fundamental/cash.md",tags:[],version:"current",frontMatter:{title:"CASH",description:"Learn how to use the Cash Flow Statement API endpoint to retrieve information about cash flow statements. Understand the parameters and return values of the API, and explore the available data fields for cash flow statements.",keywords:["Cash Flow Statement","cash flow statement parameters","cash flow statement returns","cash flow statement data","python obb.equity.fundamental.cash","symbol","period","limit","provider","cik","filing date","period of report date","include sources","order","sort","net income","depreciation and amortization","stock based compensation","deferred income tax","other non-cash items","changes in operating assets and liabilities","accounts receivables","inventory","vendor non-trade receivables","other current and non-current assets","accounts payables","deferred revenue","other current and non-current liabilities","net cash flow from operating activities","purchases of marketable securities","sales from maturities of investments","investments in property plant and equipment","payments from acquisitions","other investing activities","net cash flow from investing activities","taxes paid on net share settlement","dividends paid","common stock repurchased","debt proceeds","debt repayment","other financing activities","net cash flow from financing activities","net change in cash"]},sidebar:"tutorialSidebar",previous:{title:"BALANCE",permalink:"/excel/reference/equity/fundamental/balance"},next:{title:"DIVIDENDS",permalink:"/excel/reference/equity/fundamental/dividends"}},h={},u=[{value:"Syntax",id:"syntax",level:2},{value:"Examples",id:"examples",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Data",id:"data",level:2}];function x(e){const t={code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.A,{title:"EQUITY.FUNDAMENTAL.CASH | OpenBB Add-in for Excel Docs"}),"\n",(0,r.jsx)(t.p,{children:"Get the cash flow statement for a given company."}),"\n",(0,r.jsx)(t.h2,{id:"syntax",children:"Syntax"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-excel",children:"=OBB.EQUITY.FUNDAMENTAL.CASH(symbol,[period],[limit])\n"})}),"\n",(0,r.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-excel",children:'=OBB.EQUITY.FUNDAMENTAL.CASH("AAPL")\n'})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-excel",children:'=OBB.EQUITY.FUNDAMENTAL.CASH("AAPL","annual",5)\n'})}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"}),(0,r.jsx)(t.th,{children:"Required"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"symbol"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"Text"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"Symbol to get data for."})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"True"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"period"}),(0,r.jsx)(t.td,{children:"Text"}),(0,r.jsx)(t.td,{children:"Time period of the data to return."}),(0,r.jsx)(t.td,{children:"False"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"limit"}),(0,r.jsx)(t.td,{children:"Number"}),(0,r.jsx)(t.td,{children:"The number of data entries to return."}),(0,r.jsx)(t.td,{children:"False"})]})]})]}),"\n",(0,r.jsx)(t.hr,{}),"\n","\n",(0,r.jsx)(t.h2,{id:"data",children:"Data"}),"\n",(0,r.jsx)(a.A,{children:(0,r.jsx)(c.A,{value:"fmp",children:(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"period_ending"}),(0,r.jsx)(t.td,{children:"The end date of the reporting period."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"fiscal_period"}),(0,r.jsx)(t.td,{children:"The fiscal period of the report."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"fiscal_year"}),(0,r.jsx)(t.td,{children:"The fiscal year of the fiscal period."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"filing_date"}),(0,r.jsx)(t.td,{children:"The date of the filing."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"accepted_date"}),(0,r.jsx)(t.td,{children:"The date the filing was accepted."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"reported_currency"}),(0,r.jsx)(t.td,{children:"The currency in which the cash flow statement was reported."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"net_income"}),(0,r.jsx)(t.td,{children:"Net income."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"depreciation_and_amortization"}),(0,r.jsx)(t.td,{children:"Depreciation and amortization."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"deferred_income_tax"}),(0,r.jsx)(t.td,{children:"Deferred income tax."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"stock_based_compensation"}),(0,r.jsx)(t.td,{children:"Stock-based compensation."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"change_in_working_capital"}),(0,r.jsx)(t.td,{children:"Change in working capital."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"change_in_account_receivables"}),(0,r.jsx)(t.td,{children:"Change in account receivables."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"change_in_inventory"}),(0,r.jsx)(t.td,{children:"Change in inventory."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"change_in_account_payable"}),(0,r.jsx)(t.td,{children:"Change in account payable."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"change_in_other_working_capital"}),(0,r.jsx)(t.td,{children:"Change in other working capital."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"change_in_other_non_cash_items"}),(0,r.jsx)(t.td,{children:"Change in other non-cash items."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"net_cash_from_operating_activities"}),(0,r.jsx)(t.td,{children:"Net cash from operating activities."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"purchase_of_property_plant_and_equipment"}),(0,r.jsx)(t.td,{children:"Purchase of property, plant and equipment."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"acquisitions"}),(0,r.jsx)(t.td,{children:"Acquisitions."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"purchase_of_investment_securities"}),(0,r.jsx)(t.td,{children:"Purchase of investment securities."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"sale_and_maturity_of_investments"}),(0,r.jsx)(t.td,{children:"Sale and maturity of investments."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"other_investing_activities"}),(0,r.jsx)(t.td,{children:"Other investing activities."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"net_cash_from_investing_activities"}),(0,r.jsx)(t.td,{children:"Net cash from investing activities."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"repayment_of_debt"}),(0,r.jsx)(t.td,{children:"Repayment of debt."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"issuance_of_common_equity"}),(0,r.jsx)(t.td,{children:"Issuance of common equity."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"repurchase_of_common_equity"}),(0,r.jsx)(t.td,{children:"Repurchase of common equity."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"payment_of_dividends"}),(0,r.jsx)(t.td,{children:"Payment of dividends."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"other_financing_activities"}),(0,r.jsx)(t.td,{children:"Other financing activities."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"net_cash_from_financing_activities"}),(0,r.jsx)(t.td,{children:"Net cash from financing activities."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"effect_of_exchange_rate_changes_on_cash"}),(0,r.jsx)(t.td,{children:"Effect of exchange rate changes on cash."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"net_change_in_cash_and_equivalents"}),(0,r.jsx)(t.td,{children:"Net change in cash and equivalents."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"cash_at_beginning_of_period"}),(0,r.jsx)(t.td,{children:"Cash at beginning of period."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"cash_at_end_of_period"}),(0,r.jsx)(t.td,{children:"Cash at end of period."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"operating_cash_flow"}),(0,r.jsx)(t.td,{children:"Operating cash flow."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"capital_expenditure"}),(0,r.jsx)(t.td,{children:"Capital expenditure."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"free_cash_flow"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"link"}),(0,r.jsx)(t.td,{children:"Link to the filing."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"final_link"}),(0,r.jsx)(t.td,{children:"Link to the filing document."})]})]})]})})})]})}function f(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(x,{...e})}):x(e)}},19365:(e,t,n)=>{n.d(t,{A:()=>a});n(96540);var r=n(34164);const s={tabItem:"tabItem_Ymn6"};var i=n(74848);function a(e){let{children:t,hidden:n,className:a}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,r.A)(s.tabItem,a),hidden:n,children:t})}},94331:(e,t,n)=>{n.d(t,{A:()=>i});n(96540);var r=n(5260),s=n(74848);function i(e){let{title:t}=e;return(0,s.jsx)(r.A,{children:(0,s.jsx)("title",{children:t})})}},18228:(e,t,n)=>{n.d(t,{A:()=>y});var r=n(96540),s=n(34164),i=n(23104),a=n(56347),c=n(205),d=n(57485),l=n(31682),o=n(89466);function h(e){return function(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:s}}=e;return{value:t,label:n,attributes:r,default:s}}))}function u(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??h(n);return function(e){const t=(0,l.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function x(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const s=(0,a.W6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,d.aZ)(i),(0,r.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(s.location.search);t.set(i,e),s.replace({...s.location,search:t.toString()})}),[i,s])]}function m(e){const{defaultValue:t,queryString:n=!1,groupId:s}=e,i=u(e),[a,d]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!x({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:i}))),[l,h]=f({queryString:n,groupId:s}),[m,p]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,i]=(0,o.Dv)(n);return[s,(0,r.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:s}),j=(()=>{const e=l??m;return x({value:e,tabValues:i})?e:null})();(0,c.A)((()=>{j&&d(j)}),[j]);return{selectedValue:a,selectValue:(0,r.useCallback)((e=>{if(!x({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);d(e),h(e),p(e)}),[h,p,i]),tabValues:i}}var p=n(92303);const j={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};var b=n(74848);function v(e){let{className:t,block:n,selectedValue:r,selectValue:c,tabValues:d}=e;const l=[],{blockElementScrollPositionUntilNextRender:o}=(0,i.a_)(),{pathname:h}=(0,a.zy)(),u=e=>{const t=e.currentTarget,n=l.indexOf(t),s=d[n].value;s!==r&&(o(t),c(s))},x=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;t=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;t=l[n]??l[l.length-1];break}}t?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("_group-tab list-none -ml-7 my-6 overflow-auto"),children:d.map((e=>{let{value:t,label:n,attributes:i}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>l.push(e),onKeyDown:x,onClick:u,...i,className:(0,s.A)("font-bold tracking-widest w-fit px-3 inline-flex py-1 uppercase border-b text-lg cursor-pointer",j.tabItem,i?.className,{"border-b-2 pointer-events-none":r===t,"border-b-2 text-[#669dcb] border-[#669dcb]":r===t&&h.startsWith("/terminal"),"border-b-2 text-[#FB923C] border-[#FB923C]":r===t&&h.startsWith("/sdk"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":r!==t&&h.startsWith("/sdk"),"border-b-2 text-[#FB923C] border-[#FB923C]":r===t&&h.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":r!==t&&h.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#abd2f1] hover:border-[#abd2f1]":r!==t&&h.startsWith("/terminal")}),children:n??t},t)}))})}function g(e){let{lazy:t,children:n,selectedValue:s}=e;if(n=Array.isArray(n)?n:[n],t){const e=n.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:n.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function _(e){const t=m(e);return(0,b.jsxs)("div",{className:(0,s.A)("tabs-container",j.tabList),children:[(0,b.jsx)(v,{...e,...t}),(0,b.jsx)(g,{...e,...t})]})}function y(e){const t=(0,p.A)();return(0,b.jsx)(_,{...e},String(t))}},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>c});var r=n(96540);const s={},i=r.createContext(s);function a(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);