"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[96214],{19224:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>_,contentTitle:()=>d,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>h});var a=t(74848),n=t(28453),s=t(18228),l=t(19365);const i={title:"SP500 Multiples",description:"Get historical S&P 500 multiples and Shiller PE ratios"},d=void 0,o={id:"platform/data_models/SP500Multiples",title:"SP500 Multiples",description:"Get historical S&P 500 multiples and Shiller PE ratios",source:"@site/content/platform/data_models/SP500Multiples.md",sourceDirName:"platform/data_models",slug:"/platform/data_models/SP500Multiples",permalink:"/platform/data_models/SP500Multiples",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/platform/data_models/SP500Multiples.md",tags:[],version:"current",frontMatter:{title:"SP500 Multiples",description:"Get historical S&P 500 multiples and Shiller PE ratios"},sidebar:"tutorialSidebar",previous:{title:"Sonia",permalink:"/platform/data_models/SONIA"},next:{title:"STIR",permalink:"/platform/data_models/STIR"}},_={},h=[{value:"Implementation details",id:"implementation-details",level:2},{value:"Class names",id:"class-names",level:3},{value:"Import Statement",id:"import-statement",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Data",id:"data",level:2}];function c(e){const r={code:"code",h2:"h2",h3:"h3",hr:"hr",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r.hr,{}),"\n",(0,a.jsx)(r.h2,{id:"implementation-details",children:"Implementation details"}),"\n",(0,a.jsx)(r.h3,{id:"class-names",children:"Class names"}),"\n",(0,a.jsxs)(r.table,{children:[(0,a.jsx)(r.thead,{children:(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.th,{children:"Model name"}),(0,a.jsx)(r.th,{children:"Parameters class"}),(0,a.jsx)(r.th,{children:"Data class"})]})}),(0,a.jsx)(r.tbody,{children:(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:(0,a.jsx)(r.code,{children:"SP500Multiples"})}),(0,a.jsx)(r.td,{children:(0,a.jsx)(r.code,{children:"SP500MultiplesQueryParams"})}),(0,a.jsx)(r.td,{children:(0,a.jsx)(r.code,{children:"SP500MultiplesData"})})]})})]}),"\n",(0,a.jsx)(r.h3,{id:"import-statement",children:"Import Statement"}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-python",children:"from openbb_core.provider.standard_models.sp500_multiples import (\nSP500MultiplesData,\nSP500MultiplesQueryParams,\n)\n"})}),"\n",(0,a.jsx)(r.hr,{}),"\n",(0,a.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,a.jsxs)(s.A,{children:[(0,a.jsx)(l.A,{value:"standard",label:"standard",children:(0,a.jsxs)(r.table,{children:[(0,a.jsx)(r.thead,{children:(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.th,{children:"Name"}),(0,a.jsx)(r.th,{children:"Type"}),(0,a.jsx)(r.th,{children:"Description"}),(0,a.jsx)(r.th,{children:"Default"}),(0,a.jsx)(r.th,{children:"Optional"})]})}),(0,a.jsxs)(r.tbody,{children:[(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"series_name"}),(0,a.jsx)(r.td,{children:"Union[Union[Literal['shiller_pe_month', 'shiller_pe_year', 'pe_year', 'pe_month', 'dividend_year', 'dividend_month', 'dividend_growth_quarter', 'dividend_growth_year', 'dividend_yield_year', 'dividend_yield_month', 'earnings_year', 'earnings_month', 'earnings_growth_year', 'earnings_growth_quarter', 'real_earnings_growth_year', 'real_earnings_growth_quarter', 'earnings_yield_year', 'earnings_yield_month', 'real_price_year', 'real_price_month', 'inflation_adjusted_price_year', 'inflation_adjusted_price_month', 'sales_year', 'sales_quarter', 'sales_growth_year', 'sales_growth_quarter', 'real_sales_year', 'real_sales_quarter', 'real_sales_growth_year', 'real_sales_growth_quarter', 'price_to_sales_year', 'price_to_sales_quarter', 'price_to_book_value_year', 'price_to_book_value_quarter', 'book_value_year', 'book_value_quarter'], str], List[Union[Literal['shiller_pe_month', 'shiller_pe_year', 'pe_year', 'pe_month', 'dividend_year', 'dividend_month', 'dividend_growth_quarter', 'dividend_growth_year', 'dividend_yield_year', 'dividend_yield_month', 'earnings_year', 'earnings_month', 'earnings_growth_year', 'earnings_growth_quarter', 'real_earnings_growth_year', 'real_earnings_growth_quarter', 'earnings_yield_year', 'earnings_yield_month', 'real_price_year', 'real_price_month', 'inflation_adjusted_price_year', 'inflation_adjusted_price_month', 'sales_year', 'sales_quarter', 'sales_growth_year', 'sales_growth_quarter', 'real_sales_year', 'real_sales_quarter', 'real_sales_growth_year', 'real_sales_growth_quarter', 'price_to_sales_year', 'price_to_sales_quarter', 'price_to_book_value_year', 'price_to_book_value_quarter', 'book_value_year', 'book_value_quarter'], str]]]"}),(0,a.jsx)(r.td,{children:"The name of the series. Defaults to 'pe_month'. Multiple items allowed for provider(s): multpl."}),(0,a.jsx)(r.td,{children:"pe_month"}),(0,a.jsx)(r.td,{children:"True"})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"start_date"}),(0,a.jsx)(r.td,{children:"Union[date, str]"}),(0,a.jsx)(r.td,{children:"Start date of the data, in YYYY-MM-DD format."}),(0,a.jsx)(r.td,{children:"None"}),(0,a.jsx)(r.td,{children:"True"})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"end_date"}),(0,a.jsx)(r.td,{children:"Union[date, str]"}),(0,a.jsx)(r.td,{children:"End date of the data, in YYYY-MM-DD format."}),(0,a.jsx)(r.td,{children:"None"}),(0,a.jsx)(r.td,{children:"True"})]})]})]})}),(0,a.jsx)(l.A,{value:"multpl",label:"multpl",children:(0,a.jsxs)(r.table,{children:[(0,a.jsx)(r.thead,{children:(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.th,{children:"Name"}),(0,a.jsx)(r.th,{children:"Type"}),(0,a.jsx)(r.th,{children:"Description"}),(0,a.jsx)(r.th,{children:"Default"}),(0,a.jsx)(r.th,{children:"Optional"})]})}),(0,a.jsxs)(r.tbody,{children:[(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"series_name"}),(0,a.jsx)(r.td,{children:"Union[Union[Literal['shiller_pe_month', 'shiller_pe_year', 'pe_year', 'pe_month', 'dividend_year', 'dividend_month', 'dividend_growth_quarter', 'dividend_growth_year', 'dividend_yield_year', 'dividend_yield_month', 'earnings_year', 'earnings_month', 'earnings_growth_year', 'earnings_growth_quarter', 'real_earnings_growth_year', 'real_earnings_growth_quarter', 'earnings_yield_year', 'earnings_yield_month', 'real_price_year', 'real_price_month', 'inflation_adjusted_price_year', 'inflation_adjusted_price_month', 'sales_year', 'sales_quarter', 'sales_growth_year', 'sales_growth_quarter', 'real_sales_year', 'real_sales_quarter', 'real_sales_growth_year', 'real_sales_growth_quarter', 'price_to_sales_year', 'price_to_sales_quarter', 'price_to_book_value_year', 'price_to_book_value_quarter', 'book_value_year', 'book_value_quarter'], str], List[Union[Literal['shiller_pe_month', 'shiller_pe_year', 'pe_year', 'pe_month', 'dividend_year', 'dividend_month', 'dividend_growth_quarter', 'dividend_growth_year', 'dividend_yield_year', 'dividend_yield_month', 'earnings_year', 'earnings_month', 'earnings_growth_year', 'earnings_growth_quarter', 'real_earnings_growth_year', 'real_earnings_growth_quarter', 'earnings_yield_year', 'earnings_yield_month', 'real_price_year', 'real_price_month', 'inflation_adjusted_price_year', 'inflation_adjusted_price_month', 'sales_year', 'sales_quarter', 'sales_growth_year', 'sales_growth_quarter', 'real_sales_year', 'real_sales_quarter', 'real_sales_growth_year', 'real_sales_growth_quarter', 'price_to_sales_year', 'price_to_sales_quarter', 'price_to_book_value_year', 'price_to_book_value_quarter', 'book_value_year', 'book_value_quarter'], str]]]"}),(0,a.jsx)(r.td,{children:"The name of the series. Defaults to 'pe_month'. Multiple items allowed for provider(s): multpl."}),(0,a.jsx)(r.td,{children:"pe_month"}),(0,a.jsx)(r.td,{children:"True"})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"start_date"}),(0,a.jsx)(r.td,{children:"Union[date, str]"}),(0,a.jsx)(r.td,{children:"Start date of the data, in YYYY-MM-DD format."}),(0,a.jsx)(r.td,{children:"None"}),(0,a.jsx)(r.td,{children:"True"})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"end_date"}),(0,a.jsx)(r.td,{children:"Union[date, str]"}),(0,a.jsx)(r.td,{children:"End date of the data, in YYYY-MM-DD format."}),(0,a.jsx)(r.td,{children:"None"}),(0,a.jsx)(r.td,{children:"True"})]})]})]})}),(0,a.jsx)(l.A,{value:"nasdaq",label:"nasdaq",children:(0,a.jsxs)(r.table,{children:[(0,a.jsx)(r.thead,{children:(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.th,{children:"Name"}),(0,a.jsx)(r.th,{children:"Type"}),(0,a.jsx)(r.th,{children:"Description"}),(0,a.jsx)(r.th,{children:"Default"}),(0,a.jsx)(r.th,{children:"Optional"})]})}),(0,a.jsxs)(r.tbody,{children:[(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"series_name"}),(0,a.jsx)(r.td,{children:"Union[Union[Literal['shiller_pe_month', 'shiller_pe_year', 'pe_year', 'pe_month', 'dividend_year', 'dividend_month', 'dividend_growth_quarter', 'dividend_growth_year', 'dividend_yield_year', 'dividend_yield_month', 'earnings_year', 'earnings_month', 'earnings_growth_year', 'earnings_growth_quarter', 'real_earnings_growth_year', 'real_earnings_growth_quarter', 'earnings_yield_year', 'earnings_yield_month', 'real_price_year', 'real_price_month', 'inflation_adjusted_price_year', 'inflation_adjusted_price_month', 'sales_year', 'sales_quarter', 'sales_growth_year', 'sales_growth_quarter', 'real_sales_year', 'real_sales_quarter', 'real_sales_growth_year', 'real_sales_growth_quarter', 'price_to_sales_year', 'price_to_sales_quarter', 'price_to_book_value_year', 'price_to_book_value_quarter', 'book_value_year', 'book_value_quarter'], str], List[Union[Literal['shiller_pe_month', 'shiller_pe_year', 'pe_year', 'pe_month', 'dividend_year', 'dividend_month', 'dividend_growth_quarter', 'dividend_growth_year', 'dividend_yield_year', 'dividend_yield_month', 'earnings_year', 'earnings_month', 'earnings_growth_year', 'earnings_growth_quarter', 'real_earnings_growth_year', 'real_earnings_growth_quarter', 'earnings_yield_year', 'earnings_yield_month', 'real_price_year', 'real_price_month', 'inflation_adjusted_price_year', 'inflation_adjusted_price_month', 'sales_year', 'sales_quarter', 'sales_growth_year', 'sales_growth_quarter', 'real_sales_year', 'real_sales_quarter', 'real_sales_growth_year', 'real_sales_growth_quarter', 'price_to_sales_year', 'price_to_sales_quarter', 'price_to_book_value_year', 'price_to_book_value_quarter', 'book_value_year', 'book_value_quarter'], str]]]"}),(0,a.jsx)(r.td,{children:"The name of the series. Defaults to 'pe_month'. Multiple items allowed for provider(s): multpl."}),(0,a.jsx)(r.td,{children:"pe_month"}),(0,a.jsx)(r.td,{children:"True"})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"start_date"}),(0,a.jsx)(r.td,{children:"Union[date, str]"}),(0,a.jsx)(r.td,{children:"Start date of the data, in YYYY-MM-DD format."}),(0,a.jsx)(r.td,{children:"None"}),(0,a.jsx)(r.td,{children:"True"})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"end_date"}),(0,a.jsx)(r.td,{children:"Union[date, str]"}),(0,a.jsx)(r.td,{children:"Start date of the data, in YYYY-MM-DD format."}),(0,a.jsx)(r.td,{children:"None"}),(0,a.jsx)(r.td,{children:"True"})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"transform"}),(0,a.jsx)(r.td,{children:"Literal['diff', 'rdiff', 'cumul', 'normalize']"}),(0,a.jsx)(r.td,{children:"Transform the data as difference, percent change, cumulative, or normalize."}),(0,a.jsx)(r.td,{children:"None"}),(0,a.jsx)(r.td,{children:"True"})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"collapse"}),(0,a.jsx)(r.td,{children:"Literal['daily', 'weekly', 'monthly', 'quarterly', 'annual']"}),(0,a.jsx)(r.td,{children:"Collapse the frequency of the time series."}),(0,a.jsx)(r.td,{children:"None"}),(0,a.jsx)(r.td,{children:"True"})]})]})]})})]}),"\n",(0,a.jsx)(r.hr,{}),"\n",(0,a.jsx)(r.h2,{id:"data",children:"Data"}),"\n",(0,a.jsxs)(s.A,{children:[(0,a.jsx)(l.A,{value:"standard",label:"standard",children:(0,a.jsxs)(r.table,{children:[(0,a.jsx)(r.thead,{children:(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.th,{children:"Name"}),(0,a.jsx)(r.th,{children:"Type"}),(0,a.jsx)(r.th,{children:"Description"})]})}),(0,a.jsxs)(r.tbody,{children:[(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"date"}),(0,a.jsx)(r.td,{children:"Union[date, str]"}),(0,a.jsx)(r.td,{children:"The date of the data."})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"name"}),(0,a.jsx)(r.td,{children:"str"}),(0,a.jsx)(r.td,{children:"Name of the series."})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"value"}),(0,a.jsx)(r.td,{children:"Union[int, float]"}),(0,a.jsx)(r.td,{children:"Value of the series."})]})]})]})}),(0,a.jsx)(l.A,{value:"multpl",label:"multpl",children:(0,a.jsxs)(r.table,{children:[(0,a.jsx)(r.thead,{children:(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.th,{children:"Name"}),(0,a.jsx)(r.th,{children:"Type"}),(0,a.jsx)(r.th,{children:"Description"})]})}),(0,a.jsxs)(r.tbody,{children:[(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"date"}),(0,a.jsx)(r.td,{children:"Union[date, str]"}),(0,a.jsx)(r.td,{children:"The date of the data."})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"name"}),(0,a.jsx)(r.td,{children:"str"}),(0,a.jsx)(r.td,{children:"Name of the series."})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"value"}),(0,a.jsx)(r.td,{children:"Union[int, float]"}),(0,a.jsx)(r.td,{children:"Value of the series."})]})]})]})}),(0,a.jsx)(l.A,{value:"nasdaq",label:"nasdaq",children:(0,a.jsxs)(r.table,{children:[(0,a.jsx)(r.thead,{children:(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.th,{children:"Name"}),(0,a.jsx)(r.th,{children:"Type"}),(0,a.jsx)(r.th,{children:"Description"})]})}),(0,a.jsxs)(r.tbody,{children:[(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"date"}),(0,a.jsx)(r.td,{children:"Union[date, str]"}),(0,a.jsx)(r.td,{children:"The date of the data."})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"name"}),(0,a.jsx)(r.td,{children:"str"}),(0,a.jsx)(r.td,{children:"Name of the series."})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"value"}),(0,a.jsx)(r.td,{children:"Union[int, float]"}),(0,a.jsx)(r.td,{children:"Value of the series."})]})]})]})})]})]})}function u(e={}){const{wrapper:r}={...(0,n.R)(),...e.components};return r?(0,a.jsx)(r,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},19365:(e,r,t)=>{t.d(r,{A:()=>l});t(96540);var a=t(34164);const n={tabItem:"tabItem_Ymn6"};var s=t(74848);function l(e){let{children:r,hidden:t,className:l}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,a.A)(n.tabItem,l),hidden:t,children:r})}},18228:(e,r,t)=>{t.d(r,{A:()=>v});var a=t(96540),n=t(34164),s=t(23104),l=t(56347),i=t(205),d=t(57485),o=t(31682),_=t(70679);function h(e){return function(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:r,label:t,attributes:a,default:n}}=e;return{value:r,label:t,attributes:a,default:n}}))}function c(e){const{values:r,children:t}=e;return(0,a.useMemo)((()=>{const e=r??h(t);return function(e){const r=(0,o.X)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,t])}function u(e){let{value:r,tabValues:t}=e;return t.some((e=>e.value===r))}function p(e){let{queryString:r=!1,groupId:t}=e;const n=(0,l.W6)(),s=function(e){let{queryString:r=!1,groupId:t}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:r,groupId:t});return[(0,d.aZ)(s),(0,a.useCallback)((e=>{if(!s)return;const r=new URLSearchParams(n.location.search);r.set(s,e),n.replace({...n.location,search:r.toString()})}),[s,n])]}function m(e){const{defaultValue:r,queryString:t=!1,groupId:n}=e,s=c(e),[l,d]=(0,a.useState)((()=>function(e){let{defaultValue:r,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!u({value:r,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:r,tabValues:s}))),[o,h]=p({queryString:t,groupId:n}),[m,x]=function(e){let{groupId:r}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(r),[n,s]=(0,_.Dv)(t);return[n,(0,a.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:n}),j=(()=>{const e=o??m;return u({value:e,tabValues:s})?e:null})();(0,i.A)((()=>{j&&d(j)}),[j]);return{selectedValue:l,selectValue:(0,a.useCallback)((e=>{if(!u({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);d(e),h(e),x(e)}),[h,x,s]),tabValues:s}}var x=t(92303);const j={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};var y=t(74848);function f(e){let{className:r,block:t,selectedValue:a,selectValue:i,tabValues:d}=e;const o=[],{blockElementScrollPositionUntilNextRender:_}=(0,s.a_)(),{pathname:h}=(0,l.zy)(),c=e=>{const r=e.currentTarget,t=o.indexOf(r),n=d[t].value;n!==a&&(_(r),i(n))},u=e=>{let r=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=o.indexOf(e.currentTarget)+1;r=o[t]??o[0];break}case"ArrowLeft":{const t=o.indexOf(e.currentTarget)-1;r=o[t]??o[o.length-1];break}}r?.focus()};return(0,y.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.A)("_group-tab list-none -ml-7 my-6 overflow-auto"),children:d.map((e=>{let{value:r,label:t,attributes:s}=e;return(0,y.jsx)("li",{role:"tab",tabIndex:a===r?0:-1,"aria-selected":a===r,ref:e=>o.push(e),onKeyDown:u,onClick:c,...s,className:(0,n.A)("font-bold tracking-widest w-fit px-3 inline-flex py-1 uppercase border-b text-lg cursor-pointer",j.tabItem,s?.className,{"border-b-2 pointer-events-none":a===r,"border-b-2 text-[#669dcb] border-[#669dcb]":a===r&&h.startsWith("/terminal"),"border-b-2 text-[#FB923C] border-[#FB923C]":a===r&&h.startsWith("/sdk"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":a!==r&&h.startsWith("/sdk"),"border-b-2 text-[#FB923C] border-[#FB923C]":a===r&&h.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":a!==r&&h.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#abd2f1] hover:border-[#abd2f1]":a!==r&&h.startsWith("/terminal")}),children:t??r},r)}))})}function g(e){let{lazy:r,children:t,selectedValue:n}=e;if(t=Array.isArray(t)?t:[t],r){const e=t.find((e=>e.props.value===n));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,y.jsx)("div",{className:"margin-top--md",children:t.map(((e,r)=>(0,a.cloneElement)(e,{key:r,hidden:e.props.value!==n})))})}function b(e){const r=m(e);return(0,y.jsxs)("div",{className:(0,n.A)("tabs-container",j.tabList),children:[(0,y.jsx)(f,{...e,...r}),(0,y.jsx)(g,{...e,...r})]})}function v(e){const r=(0,x.A)();return(0,y.jsx)(b,{...e},String(r))}},28453:(e,r,t)=>{t.d(r,{R:()=>l,x:()=>i});var a=t(96540);const n={},s=a.createContext(n);function l(e){const r=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:l(e.components),a.createElement(s.Provider,{value:r},e.children)}}}]);