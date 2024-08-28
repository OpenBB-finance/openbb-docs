"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[16248],{99773:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>b,frontMatter:()=>d,metadata:()=>o,toc:()=>h});var n=r(74848),s=r(28453),a=r(94331),l=r(18228),i=r(19365);const d={title:"BALANCE",description:"Learn how to use the balance sheet function in Python to retrieve financial statement data. This documentation provides details about the function parameters, return values, and available data types.",keywords:["balance sheet statement","balance sheet function","python function","financial statement function","balance sheet data parameters","balance sheet data returns","balance sheet data types"]},c=void 0,o={id:"excel/reference/equity/fundamental/balance",title:"BALANCE",description:"Learn how to use the balance sheet function in Python to retrieve financial statement data. This documentation provides details about the function parameters, return values, and available data types.",source:"@site/content/excel/reference/equity/fundamental/balance.md",sourceDirName:"excel/reference/equity/fundamental",slug:"/excel/reference/equity/fundamental/balance",permalink:"/excel/reference/equity/fundamental/balance",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/excel/reference/equity/fundamental/balance.md",tags:[],version:"current",frontMatter:{title:"BALANCE",description:"Learn how to use the balance sheet function in Python to retrieve financial statement data. This documentation provides details about the function parameters, return values, and available data types.",keywords:["balance sheet statement","balance sheet function","python function","financial statement function","balance sheet data parameters","balance sheet data returns","balance sheet data types"]},sidebar:"tutorialSidebar",previous:{title:"EQUITY.FUNDAMENTAL",permalink:"/excel/reference/equity/fundamental/"},next:{title:"CASH",permalink:"/excel/reference/equity/fundamental/cash"}},u={},h=[{value:"Syntax",id:"syntax",level:2},{value:"Examples",id:"examples",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Data",id:"data",level:2}];function x(e){const t={code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.A,{title:"EQUITY.FUNDAMENTAL.BALANCE | OpenBB Add-in for Excel Docs"}),"\n",(0,n.jsx)(t.p,{children:"Get the balance sheet for a given company."}),"\n",(0,n.jsx)(t.h2,{id:"syntax",children:"Syntax"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-excel",children:"=OBB.EQUITY.FUNDAMENTAL.BALANCE(symbol,[period],[limit])\n"})}),"\n",(0,n.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-excel",children:'=OBB.EQUITY.FUNDAMENTAL.BALANCE("AAPL")\n'})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-excel",children:'=OBB.EQUITY.FUNDAMENTAL.BALANCE("AAPL","annual",5)\n'})}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Required"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:"symbol"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:"Text"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:"Symbol to get data for."})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:"True"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"period"}),(0,n.jsx)(t.td,{children:"Text"}),(0,n.jsx)(t.td,{children:"Time period of the data to return."}),(0,n.jsx)(t.td,{children:"False"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"limit"}),(0,n.jsx)(t.td,{children:"Number"}),(0,n.jsx)(t.td,{children:"The number of data entries to return."}),(0,n.jsx)(t.td,{children:"False"})]})]})]}),"\n",(0,n.jsx)(t.hr,{}),"\n","\n",(0,n.jsx)(t.h2,{id:"data",children:"Data"}),"\n",(0,n.jsx)(l.A,{children:(0,n.jsx)(i.A,{value:"fmp",children:(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"period_ending"}),(0,n.jsx)(t.td,{children:"The end date of the reporting period."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"fiscal_period"}),(0,n.jsx)(t.td,{children:"The fiscal period of the report."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"fiscal_year"}),(0,n.jsx)(t.td,{children:"The fiscal year of the fiscal period."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"accounts_receivable"}),(0,n.jsx)(t.td,{children:"Accounts receivable"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"marketable_securities"}),(0,n.jsx)(t.td,{children:"Marketable securities"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"prepaid_expenses"}),(0,n.jsx)(t.td,{children:"Prepaid expenses"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"other_current_assets"}),(0,n.jsx)(t.td,{children:"Other current assets"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"total_current_assets"}),(0,n.jsx)(t.td,{children:"Total current assets"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"property_plant_equipment_net"}),(0,n.jsx)(t.td,{children:"Property plant and equipment net"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"inventory"}),(0,n.jsx)(t.td,{children:"Inventory"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"other_non_current_assets"}),(0,n.jsx)(t.td,{children:"Other non-current assets"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"total_non_current_assets"}),(0,n.jsx)(t.td,{children:"Total non-current assets"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"intangible_assets"}),(0,n.jsx)(t.td,{children:"Intangible assets"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"total_assets"}),(0,n.jsx)(t.td,{children:"Total assets"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"accounts_payable"}),(0,n.jsx)(t.td,{children:"Accounts payable"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"employee_wages"}),(0,n.jsx)(t.td,{children:"Employee wages"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"other_current_liabilities"}),(0,n.jsx)(t.td,{children:"Other current liabilities"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"total_current_liabilities"}),(0,n.jsx)(t.td,{children:"Total current liabilities"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"other_non_current_liabilities"}),(0,n.jsx)(t.td,{children:"Other non-current liabilities"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"total_non_current_liabilities"}),(0,n.jsx)(t.td,{children:"Total non-current liabilities"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"long_term_debt"}),(0,n.jsx)(t.td,{children:"Long term debt"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"total_liabilities"}),(0,n.jsx)(t.td,{children:"Total liabilities"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"minority_interest"}),(0,n.jsx)(t.td,{children:"Minority interest"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"temporary_equity_attributable_to_parent"}),(0,n.jsx)(t.td,{children:"Temporary equity attributable to parent"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"equity_attributable_to_parent"}),(0,n.jsx)(t.td,{children:"Equity attributable to parent"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"temporary_equity"}),(0,n.jsx)(t.td,{children:"Temporary equity"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"preferred_stock"}),(0,n.jsx)(t.td,{children:"Preferred stock"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"redeemable_non_controlling_interest"}),(0,n.jsx)(t.td,{children:"Redeemable non-controlling interest"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"redeemable_non_controlling_interest_other"}),(0,n.jsx)(t.td,{children:"Redeemable non-controlling interest other"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"total_stock_holders_equity"}),(0,n.jsx)(t.td,{children:"Total stock holders equity"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"total_liabilities_and_stock_holders_equity"}),(0,n.jsx)(t.td,{children:"Total liabilities and stockholders equity"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"total_equity"}),(0,n.jsx)(t.td,{children:"Total equity"})]})]})]})})})]})}function b(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(x,{...e})}):x(e)}},19365:(e,t,r)=>{r.d(t,{A:()=>l});r(96540);var n=r(34164);const s={tabItem:"tabItem_Ymn6"};var a=r(74848);function l(e){let{children:t,hidden:r,className:l}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,n.A)(s.tabItem,l),hidden:r,children:t})}},94331:(e,t,r)=>{r.d(t,{A:()=>a});r(96540);var n=r(5260),s=r(74848);function a(e){let{title:t}=e;return(0,s.jsx)(n.A,{children:(0,s.jsx)("title",{children:t})})}},18228:(e,t,r)=>{r.d(t,{A:()=>_});var n=r(96540),s=r(34164),a=r(23104),l=r(56347),i=r(205),d=r(57485),c=r(31682),o=r(70679);function u(e){return function(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:s}}=e;return{value:t,label:r,attributes:n,default:s}}))}function h(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??u(r);return function(e){const t=(0,c.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function x(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:r}=e;const s=(0,l.W6)(),a=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,d.aZ)(a),(0,n.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(s.location.search);t.set(a,e),s.replace({...s.location,search:t.toString()})}),[a,s])]}function j(e){const{defaultValue:t,queryString:r=!1,groupId:s}=e,a=h(e),[l,d]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!x({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:a}))),[c,u]=b({queryString:r,groupId:s}),[j,p]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,a]=(0,o.Dv)(r);return[s,(0,n.useCallback)((e=>{r&&a.set(e)}),[r,a])]}({groupId:s}),f=(()=>{const e=c??j;return x({value:e,tabValues:a})?e:null})();(0,i.A)((()=>{f&&d(f)}),[f]);return{selectedValue:l,selectValue:(0,n.useCallback)((e=>{if(!x({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);d(e),u(e),p(e)}),[u,p,a]),tabValues:a}}var p=r(92303);const f={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};var m=r(74848);function y(e){let{className:t,block:r,selectedValue:n,selectValue:i,tabValues:d}=e;const c=[],{blockElementScrollPositionUntilNextRender:o}=(0,a.a_)(),{pathname:u}=(0,l.zy)(),h=e=>{const t=e.currentTarget,r=c.indexOf(t),s=d[r].value;s!==n&&(o(t),i(s))},x=e=>{let t=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{const r=c.indexOf(e.currentTarget)+1;t=c[r]??c[0];break}case"ArrowLeft":{const r=c.indexOf(e.currentTarget)-1;t=c[r]??c[c.length-1];break}}t?.focus()};return(0,m.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("_group-tab list-none -ml-7 my-6 overflow-auto"),children:d.map((e=>{let{value:t,label:r,attributes:a}=e;return(0,m.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>c.push(e),onKeyDown:x,onClick:h,...a,className:(0,s.A)("font-bold tracking-widest w-fit px-3 inline-flex py-1 uppercase border-b text-lg cursor-pointer",f.tabItem,a?.className,{"border-b-2 pointer-events-none":n===t,"border-b-2 text-[#669dcb] border-[#669dcb]":n===t&&u.startsWith("/terminal"),"border-b-2 text-[#FB923C] border-[#FB923C]":n===t&&u.startsWith("/sdk"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":n!==t&&u.startsWith("/sdk"),"border-b-2 text-[#FB923C] border-[#FB923C]":n===t&&u.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":n!==t&&u.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#abd2f1] hover:border-[#abd2f1]":n!==t&&u.startsWith("/terminal")}),children:r??t},t)}))})}function v(e){let{lazy:t,children:r,selectedValue:s}=e;if(r=Array.isArray(r)?r:[r],t){const e=r.find((e=>e.props.value===s));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,m.jsx)("div",{className:"margin-top--md",children:r.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function g(e){const t=j(e);return(0,m.jsxs)("div",{className:(0,s.A)("tabs-container",f.tabList),children:[(0,m.jsx)(y,{...e,...t}),(0,m.jsx)(v,{...e,...t})]})}function _(e){const t=(0,p.A)();return(0,m.jsx)(g,{...e},String(t))}},28453:(e,t,r)=>{r.d(t,{R:()=>l,x:()=>i});var n=r(96540);const s={},a=n.createContext(s);function l(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);