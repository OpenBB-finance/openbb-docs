"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[31903],{18171:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>h,contentTitle:()=>c,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var n=t(74848),s=t(28453),i=t(94331),a=t(18228),d=t(19365);const l={title:"INCOME",description:"Get income statement and financial performance data for a company. Parameters include symbol, period, limit, provider, and more. Data includes revenue, gross profit, operating expenses, net income, and more.",keywords:["income statement","financial performance","get income data","period","limit","provider","symbol","cik","filing date","period of report date","include sources","order","sort","revenue","cost of revenue","gross profit","cost and expenses","research and development expenses","general and administrative expenses","selling and marketing expenses","other expenses","operating expenses","depreciation and amortization","ebitda","operating income","interest income","interest expense","income before tax","income tax expense","net income","eps","weighted average shares outstanding","link","reported currency","filling date","accepted date","calendar year"]},c=void 0,o={id:"excel/reference/equity/fundamental/income",title:"INCOME",description:"Get income statement and financial performance data for a company. Parameters include symbol, period, limit, provider, and more. Data includes revenue, gross profit, operating expenses, net income, and more.",source:"@site/content/excel/reference/equity/fundamental/income.md",sourceDirName:"excel/reference/equity/fundamental",slug:"/excel/reference/equity/fundamental/income",permalink:"/excel/reference/equity/fundamental/income",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/excel/reference/equity/fundamental/income.md",tags:[],version:"current",frontMatter:{title:"INCOME",description:"Get income statement and financial performance data for a company. Parameters include symbol, period, limit, provider, and more. Data includes revenue, gross profit, operating expenses, net income, and more.",keywords:["income statement","financial performance","get income data","period","limit","provider","symbol","cik","filing date","period of report date","include sources","order","sort","revenue","cost of revenue","gross profit","cost and expenses","research and development expenses","general and administrative expenses","selling and marketing expenses","other expenses","operating expenses","depreciation and amortization","ebitda","operating income","interest income","interest expense","income before tax","income tax expense","net income","eps","weighted average shares outstanding","link","reported currency","filling date","accepted date","calendar year"]},sidebar:"tutorialSidebar",previous:{title:"HISTORICAL_SPLITS",permalink:"/excel/reference/equity/fundamental/historical_splits"},next:{title:"MANAGEMENT",permalink:"/excel/reference/equity/fundamental/management"}},h={},u=[{value:"Syntax",id:"syntax",level:2},{value:"Examples",id:"examples",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Data",id:"data",level:2}];function x(e){const r={code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.A,{title:"EQUITY.FUNDAMENTAL.INCOME | OpenBB Add-in for Excel Docs"}),"\n",(0,n.jsx)(r.p,{children:"Get the income statement for a given company."}),"\n",(0,n.jsx)(r.h2,{id:"syntax",children:"Syntax"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-excel",children:"=OBB.EQUITY.FUNDAMENTAL.INCOME(symbol,[period],[limit])\n"})}),"\n",(0,n.jsx)(r.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-excel",children:'=OBB.EQUITY.FUNDAMENTAL.INCOME("AAPL")\n'})}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-excel",children:'=OBB.EQUITY.FUNDAMENTAL.INCOME("AAPL","annual",5)\n'})}),"\n",(0,n.jsx)(r.hr,{}),"\n",(0,n.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Name"}),(0,n.jsx)(r.th,{children:"Type"}),(0,n.jsx)(r.th,{children:"Description"}),(0,n.jsx)(r.th,{children:"Required"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.strong,{children:"symbol"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.strong,{children:"Text"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.strong,{children:"Symbol to get data for."})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.strong,{children:"True"})})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"period"}),(0,n.jsx)(r.td,{children:"Text"}),(0,n.jsx)(r.td,{children:"Time period of the data to return."}),(0,n.jsx)(r.td,{children:"False"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"limit"}),(0,n.jsx)(r.td,{children:"Number"}),(0,n.jsx)(r.td,{children:"The number of data entries to return."}),(0,n.jsx)(r.td,{children:"False"})]})]})]}),"\n",(0,n.jsx)(r.hr,{}),"\n","\n",(0,n.jsx)(r.h2,{id:"data",children:"Data"}),"\n",(0,n.jsx)(a.A,{children:(0,n.jsx)(d.A,{value:"fmp",children:(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Name"}),(0,n.jsx)(r.th,{children:"Description"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"period_ending"}),(0,n.jsx)(r.td,{children:"The end date of the reporting period."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"fiscal_period"}),(0,n.jsx)(r.td,{children:"The fiscal period of the report."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"fiscal_year"}),(0,n.jsx)(r.td,{children:"The fiscal year of the fiscal period."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"filing_date"}),(0,n.jsx)(r.td,{children:"The date when the filing was made."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"accepted_date"}),(0,n.jsx)(r.td,{children:"The date and time when the filing was accepted."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"reported_currency"}),(0,n.jsx)(r.td,{children:"The currency in which the balance sheet was reported."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"revenue"}),(0,n.jsx)(r.td,{children:"Total revenue."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"cost_of_revenue"}),(0,n.jsx)(r.td,{children:"Cost of revenue."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"gross_profit"}),(0,n.jsx)(r.td,{children:"Gross profit."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"gross_profit_margin"}),(0,n.jsx)(r.td,{children:"Gross profit margin."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"general_and_admin_expense"}),(0,n.jsx)(r.td,{children:"General and administrative expenses."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"research_and_development_expense"}),(0,n.jsx)(r.td,{children:"Research and development expenses."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"selling_and_marketing_expense"}),(0,n.jsx)(r.td,{children:"Selling and marketing expenses."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"selling_general_and_admin_expense"}),(0,n.jsx)(r.td,{children:"Selling, general and administrative expenses."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"other_expenses"}),(0,n.jsx)(r.td,{children:"Other expenses."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"total_operating_expenses"}),(0,n.jsx)(r.td,{children:"Total operating expenses."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"cost_and_expenses"}),(0,n.jsx)(r.td,{children:"Cost and expenses."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"interest_income"}),(0,n.jsx)(r.td,{children:"Interest income."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"total_interest_expense"}),(0,n.jsx)(r.td,{children:"Total interest expenses."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"depreciation_and_amortization"}),(0,n.jsx)(r.td,{children:"Depreciation and amortization."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"ebitda"}),(0,n.jsx)(r.td,{children:"EBITDA."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"ebitda_margin"}),(0,n.jsx)(r.td,{children:"EBITDA margin."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"total_operating_income"}),(0,n.jsx)(r.td,{children:"Total operating income."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"operating_income_margin"}),(0,n.jsx)(r.td,{children:"Operating income margin."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"total_other_income_expenses"}),(0,n.jsx)(r.td,{children:"Total other income and expenses."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"total_pre_tax_income"}),(0,n.jsx)(r.td,{children:"Total pre-tax income."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"pre_tax_income_margin"}),(0,n.jsx)(r.td,{children:"Pre-tax income margin."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"income_tax_expense"}),(0,n.jsx)(r.td,{children:"Income tax expense."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"consolidated_net_income"}),(0,n.jsx)(r.td,{children:"Consolidated net income."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"net_income_margin"}),(0,n.jsx)(r.td,{children:"Net income margin."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"basic_earnings_per_share"}),(0,n.jsx)(r.td,{children:"Basic earnings per share."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"diluted_earnings_per_share"}),(0,n.jsx)(r.td,{children:"Diluted earnings per share."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"weighted_average_basic_shares_outstanding"}),(0,n.jsx)(r.td,{children:"Weighted average basic shares outstanding."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"weighted_average_diluted_shares_outstanding"}),(0,n.jsx)(r.td,{children:"Weighted average diluted shares outstanding."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"link"}),(0,n.jsx)(r.td,{children:"Link to the filing."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"final_link"}),(0,n.jsx)(r.td,{children:"Link to the filing document."})]})]})]})})})]})}function p(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(x,{...e})}):x(e)}},19365:(e,r,t)=>{t.d(r,{A:()=>a});t(96540);var n=t(34164);const s={tabItem:"tabItem_Ymn6"};var i=t(74848);function a(e){let{children:r,hidden:t,className:a}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,n.A)(s.tabItem,a),hidden:t,children:r})}},94331:(e,r,t)=>{t.d(r,{A:()=>i});t(96540);var n=t(5260),s=t(74848);function i(e){let{title:r}=e;return(0,s.jsx)(n.A,{children:(0,s.jsx)("title",{children:r})})}},18228:(e,r,t)=>{t.d(r,{A:()=>y});var n=t(56347),s=t(23104),i=t(96540),a=t(205),d=t(57485),l=t(31682),c=t(89466);function o(e){return function(e){return i.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:r,label:t,attributes:n,default:s}}=e;return{value:r,label:t,attributes:n,default:s}}))}function h(e){const{values:r,children:t}=e;return(0,i.useMemo)((()=>{const e=r??o(t);return function(e){const r=(0,l.X)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,t])}function u(e){let{value:r,tabValues:t}=e;return t.some((e=>e.value===r))}function x(e){let{queryString:r=!1,groupId:t}=e;const s=(0,n.W6)(),a=function(e){let{queryString:r=!1,groupId:t}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:r,groupId:t});return[(0,d.aZ)(a),(0,i.useCallback)((e=>{if(!a)return;const r=new URLSearchParams(s.location.search);r.set(a,e),s.replace({...s.location,search:r.toString()})}),[a,s])]}function p(e){const{defaultValue:r,queryString:t=!1,groupId:n}=e,s=h(e),[d,l]=(0,i.useState)((()=>function(e){let{defaultValue:r,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!u({value:r,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const n=t.find((e=>e.default))??t[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:r,tabValues:s}))),[o,p]=x({queryString:t,groupId:n}),[m,j]=function(e){let{groupId:r}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(r),[n,s]=(0,c.Dv)(t);return[n,(0,i.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:n}),f=(()=>{const e=o??m;return u({value:e,tabValues:s})?e:null})();(0,a.A)((()=>{f&&l(f)}),[f]);return{selectedValue:d,selectValue:(0,i.useCallback)((e=>{if(!u({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),p(e),j(e)}),[p,j,s]),tabValues:s}}var m=t(92303),j=t(34164);const f={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};var g=t(74848);function b(e){let{className:r,block:t,selectedValue:i,selectValue:a,tabValues:d}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.a_)(),{pathname:o}=(0,n.zy)(),h=e=>{const r=e.currentTarget,t=l.indexOf(r),n=d[t].value;n!==i&&(c(r),a(n))},u=e=>{let r=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;r=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;r=l[t]??l[l.length-1];break}}r?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,j.A)("_group-tab list-none -ml-7 my-6 overflow-auto"),children:d.map((e=>{let{value:r,label:t,attributes:n}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:i===r?0:-1,"aria-selected":i===r,ref:e=>l.push(e),onKeyDown:u,onClick:h,...n,className:(0,j.A)("font-bold tracking-widest w-fit px-3 inline-flex py-1 uppercase border-b text-lg cursor-pointer",f.tabItem,n?.className,{"border-b-2 pointer-events-none":i===r,"border-b-2 text-[#669dcb] border-[#669dcb]":i===r&&o.startsWith("/workspace"),"border-b-2 text-[#FB923C] border-[#FB923C]":i===r&&o.startsWith("/sdk"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":i!==r&&o.startsWith("/sdk"),"border-b-2 text-[#FB923C] border-[#FB923C]":i===r&&o.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":i!==r&&o.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#abd2f1] hover:border-[#abd2f1]":i!==r&&o.startsWith("/workspace")}),children:t??r},r)}))})}function v(e){let{lazy:r,children:t,selectedValue:n}=e;if(t=Array.isArray(t)?t:[t],r){const e=t.find((e=>e.props.value===n));return e?(0,i.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:t.map(((e,r)=>(0,i.cloneElement)(e,{key:r,hidden:e.props.value!==n})))})}function _(e){const r=p(e);return(0,g.jsxs)("div",{className:(0,j.A)("tabs-container",f.tabList),children:[(0,g.jsx)(b,{...e,...r}),(0,g.jsx)(v,{...e,...r})]})}function y(e){const r=(0,m.A)();return(0,g.jsx)(_,{...e},String(r))}},28453:(e,r,t)=>{t.d(r,{R:()=>a,x:()=>d});var n=t(96540);const s={},i=n.createContext(s);function a(e){const r=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function d(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),n.createElement(i.Provider,{value:r},e.children)}}}]);