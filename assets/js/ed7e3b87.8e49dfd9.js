"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[16248],{85986:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>h,contentTitle:()=>c,default:()=>j,frontMatter:()=>d,metadata:()=>o,toc:()=>u});var n=r(74848),s=r(28453),i=r(94331),l=r(18228),a=r(19365);const d={title:"BALANCE",description:"Learn how to use the balance sheet function in Python to retrieve financial statement data. This documentation provides details about the function parameters, return values, and available data types.",keywords:["balance sheet statement","balance sheet function","python function","financial statement function","balance sheet data parameters","balance sheet data returns","balance sheet data types"]},c=void 0,o={id:"excel/reference/equity/fundamental/balance",title:"BALANCE",description:"Learn how to use the balance sheet function in Python to retrieve financial statement data. This documentation provides details about the function parameters, return values, and available data types.",source:"@site/content/excel/reference/equity/fundamental/balance.md",sourceDirName:"excel/reference/equity/fundamental",slug:"/excel/reference/equity/fundamental/balance",permalink:"/excel/reference/equity/fundamental/balance",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/excel/reference/equity/fundamental/balance.md",tags:[],version:"current",frontMatter:{title:"BALANCE",description:"Learn how to use the balance sheet function in Python to retrieve financial statement data. This documentation provides details about the function parameters, return values, and available data types.",keywords:["balance sheet statement","balance sheet function","python function","financial statement function","balance sheet data parameters","balance sheet data returns","balance sheet data types"]},sidebar:"tutorialSidebar",previous:{title:"EQUITY.FUNDAMENTAL",permalink:"/excel/reference/equity/fundamental/"},next:{title:"CASH",permalink:"/excel/reference/equity/fundamental/cash"}},h={},u=[{value:"Syntax",id:"syntax",level:2},{value:"Examples",id:"examples",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Data",id:"data",level:2}];function x(e){const t={code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.A,{title:"EQUITY.FUNDAMENTAL.BALANCE | OpenBB Add-in for Excel Docs"}),"\n",(0,n.jsx)(t.p,{children:"Get the balance sheet for a given company."}),"\n",(0,n.jsx)(t.h2,{id:"syntax",children:"Syntax"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-excel",children:"=OBB.EQUITY.FUNDAMENTAL.BALANCE(symbol,[period],[limit])\n"})}),"\n",(0,n.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-excel",children:'=OBB.EQUITY.FUNDAMENTAL.BALANCE("AAPL")\n'})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-excel",children:'=OBB.EQUITY.FUNDAMENTAL.BALANCE("AAPL","annual",5)\n'})}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Required"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:"symbol"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:"Text"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:"Symbol to get data for."})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:"True"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"period"}),(0,n.jsx)(t.td,{children:"Text"}),(0,n.jsx)(t.td,{children:"Time period of the data to return."}),(0,n.jsx)(t.td,{children:"False"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"limit"}),(0,n.jsx)(t.td,{children:"Number"}),(0,n.jsx)(t.td,{children:"The number of data entries to return."}),(0,n.jsx)(t.td,{children:"False"})]})]})]}),"\n",(0,n.jsx)(t.hr,{}),"\n","\n",(0,n.jsx)(t.h2,{id:"data",children:"Data"}),"\n",(0,n.jsx)(l.A,{children:(0,n.jsx)(a.A,{value:"fmp",children:(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"period_ending"}),(0,n.jsx)(t.td,{children:"The end date of the reporting period."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"fiscal_period"}),(0,n.jsx)(t.td,{children:"The fiscal period of the report."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"fiscal_year"}),(0,n.jsx)(t.td,{children:"The fiscal year of the fiscal period."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"filing_date"}),(0,n.jsx)(t.td,{children:"The date when the filing was made."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"accepted_date"}),(0,n.jsx)(t.td,{children:"The date and time when the filing was accepted."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"reported_currency"}),(0,n.jsx)(t.td,{children:"The currency in which the balance sheet was reported."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"cash_and_cash_equivalents"}),(0,n.jsx)(t.td,{children:"Cash and cash equivalents."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"short_term_investments"}),(0,n.jsx)(t.td,{children:"Short term investments."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"cash_and_short_term_investments"}),(0,n.jsx)(t.td,{children:"Cash and short term investments."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"net_receivables"}),(0,n.jsx)(t.td,{children:"Net receivables."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"inventory"}),(0,n.jsx)(t.td,{children:"Inventory."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"other_current_assets"}),(0,n.jsx)(t.td,{children:"Other current assets."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"total_current_assets"}),(0,n.jsx)(t.td,{children:"Total current assets."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"plant_property_equipment_net"}),(0,n.jsx)(t.td,{children:"Plant property equipment net."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"goodwill"}),(0,n.jsx)(t.td,{children:"Goodwill."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"intangible_assets"}),(0,n.jsx)(t.td,{children:"Intangible assets."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"goodwill_and_intangible_assets"}),(0,n.jsx)(t.td,{children:"Goodwill and intangible assets."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"long_term_investments"}),(0,n.jsx)(t.td,{children:"Long term investments."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"tax_assets"}),(0,n.jsx)(t.td,{children:"Tax assets."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"other_non_current_assets"}),(0,n.jsx)(t.td,{children:"Other non current assets."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"non_current_assets"}),(0,n.jsx)(t.td,{children:"Total non current assets."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"other_assets"}),(0,n.jsx)(t.td,{children:"Other assets."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"total_assets"}),(0,n.jsx)(t.td,{children:"Total assets."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"accounts_payable"}),(0,n.jsx)(t.td,{children:"Accounts payable."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"short_term_debt"}),(0,n.jsx)(t.td,{children:"Short term debt."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"tax_payables"}),(0,n.jsx)(t.td,{children:"Tax payables."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"current_deferred_revenue"}),(0,n.jsx)(t.td,{children:"Current deferred revenue."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"other_current_liabilities"}),(0,n.jsx)(t.td,{children:"Other current liabilities."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"total_current_liabilities"}),(0,n.jsx)(t.td,{children:"Total current liabilities."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"long_term_debt"}),(0,n.jsx)(t.td,{children:"Long term debt."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"deferred_revenue_non_current"}),(0,n.jsx)(t.td,{children:"Non current deferred revenue."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"deferred_tax_liabilities_non_current"}),(0,n.jsx)(t.td,{children:"Deferred tax liabilities non current."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"other_non_current_liabilities"}),(0,n.jsx)(t.td,{children:"Other non current liabilities."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"total_non_current_liabilities"}),(0,n.jsx)(t.td,{children:"Total non current liabilities."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"other_liabilities"}),(0,n.jsx)(t.td,{children:"Other liabilities."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"capital_lease_obligations"}),(0,n.jsx)(t.td,{children:"Capital lease obligations."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"total_liabilities"}),(0,n.jsx)(t.td,{children:"Total liabilities."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"preferred_stock"}),(0,n.jsx)(t.td,{children:"Preferred stock."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"common_stock"}),(0,n.jsx)(t.td,{children:"Common stock."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"retained_earnings"}),(0,n.jsx)(t.td,{children:"Retained earnings."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"accumulated_other_comprehensive_income"}),(0,n.jsx)(t.td,{children:"Accumulated other comprehensive income (loss)."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"other_shareholders_equity"}),(0,n.jsx)(t.td,{children:"Other shareholders equity."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"other_total_shareholders_equity"}),(0,n.jsx)(t.td,{children:"Other total shareholders equity."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"total_common_equity"}),(0,n.jsx)(t.td,{children:"Total common equity."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"total_equity_non_controlling_interests"}),(0,n.jsx)(t.td,{children:"Total equity non controlling interests."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"total_liabilities_and_shareholders_equity"}),(0,n.jsx)(t.td,{children:"Total liabilities and shareholders equity."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"minority_interest"}),(0,n.jsx)(t.td,{children:"Minority interest."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"total_liabilities_and_total_equity"}),(0,n.jsx)(t.td,{children:"Total liabilities and total equity."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"total_investments"}),(0,n.jsx)(t.td,{children:"Total investments."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"total_debt"}),(0,n.jsx)(t.td,{children:"Total debt."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"net_debt"}),(0,n.jsx)(t.td,{children:"Net debt."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"link"}),(0,n.jsx)(t.td,{children:"Link to the filing."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"final_link"}),(0,n.jsx)(t.td,{children:"Link to the filing document."})]})]})]})})})]})}function j(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(x,{...e})}):x(e)}},19365:(e,t,r)=>{r.d(t,{A:()=>l});r(96540);var n=r(34164);const s={tabItem:"tabItem_Ymn6"};var i=r(74848);function l(e){let{children:t,hidden:r,className:l}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,n.A)(s.tabItem,l),hidden:r,children:t})}},94331:(e,t,r)=>{r.d(t,{A:()=>i});r(96540);var n=r(5260),s=r(74848);function i(e){let{title:t}=e;return(0,s.jsx)(n.A,{children:(0,s.jsx)("title",{children:t})})}},18228:(e,t,r)=>{r.d(t,{A:()=>g});var n=r(96540),s=r(34164),i=r(23104),l=r(56347),a=r(205),d=r(57485),c=r(31682),o=r(89466);function h(e){return function(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:s}}=e;return{value:t,label:r,attributes:n,default:s}}))}function u(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??h(r);return function(e){const t=(0,c.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function x(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function j(e){let{queryString:t=!1,groupId:r}=e;const s=(0,l.W6)(),i=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,d.aZ)(i),(0,n.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(s.location.search);t.set(i,e),s.replace({...s.location,search:t.toString()})}),[i,s])]}function b(e){const{defaultValue:t,queryString:r=!1,groupId:s}=e,i=u(e),[l,d]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!x({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:i}))),[c,h]=j({queryString:r,groupId:s}),[b,m]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,i]=(0,o.Dv)(r);return[s,(0,n.useCallback)((e=>{r&&i.set(e)}),[r,i])]}({groupId:s}),f=(()=>{const e=c??b;return x({value:e,tabValues:i})?e:null})();(0,a.A)((()=>{f&&d(f)}),[f]);return{selectedValue:l,selectValue:(0,n.useCallback)((e=>{if(!x({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);d(e),h(e),m(e)}),[h,m,i]),tabValues:i}}var m=r(92303);const f={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};var p=r(74848);function _(e){let{className:t,block:r,selectedValue:n,selectValue:a,tabValues:d}=e;const c=[],{blockElementScrollPositionUntilNextRender:o}=(0,i.a_)(),{pathname:h}=(0,l.zy)(),u=e=>{const t=e.currentTarget,r=c.indexOf(t),s=d[r].value;s!==n&&(o(t),a(s))},x=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const r=c.indexOf(e.currentTarget)+1;t=c[r]??c[0];break}case"ArrowLeft":{const r=c.indexOf(e.currentTarget)-1;t=c[r]??c[c.length-1];break}}t?.focus()};return(0,p.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("_group-tab list-none -ml-7 my-6 overflow-auto"),children:d.map((e=>{let{value:t,label:r,attributes:i}=e;return(0,p.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>c.push(e),onKeyDown:x,onClick:u,...i,className:(0,s.A)("font-bold tracking-widest w-fit px-3 inline-flex py-1 uppercase border-b text-lg cursor-pointer",f.tabItem,i?.className,{"border-b-2 pointer-events-none":n===t,"border-b-2 text-[#669dcb] border-[#669dcb]":n===t&&h.startsWith("/terminal"),"border-b-2 text-[#FB923C] border-[#FB923C]":n===t&&h.startsWith("/sdk"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":n!==t&&h.startsWith("/sdk"),"border-b-2 text-[#FB923C] border-[#FB923C]":n===t&&h.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":n!==t&&h.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#abd2f1] hover:border-[#abd2f1]":n!==t&&h.startsWith("/terminal")}),children:r??t},t)}))})}function v(e){let{lazy:t,children:r,selectedValue:s}=e;if(r=Array.isArray(r)?r:[r],t){const e=r.find((e=>e.props.value===s));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,p.jsx)("div",{className:"margin-top--md",children:r.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function y(e){const t=b(e);return(0,p.jsxs)("div",{className:(0,s.A)("tabs-container",f.tabList),children:[(0,p.jsx)(_,{...e,...t}),(0,p.jsx)(v,{...e,...t})]})}function g(e){const t=(0,m.A)();return(0,p.jsx)(y,{...e},String(t))}},28453:(e,t,r)=>{r.d(t,{R:()=>l,x:()=>a});var n=r(96540);const s={},i=n.createContext(s);function l(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);