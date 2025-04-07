"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[32569],{61517:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>u,contentTitle:()=>d,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>h});var a=t(74848),n=t(28453),s=t(94331),i=t(18228),l=t(19365);const o={title:"sp500_multiples",description:"Learn about S&P 500 multiples and Shiller PE ratios. Use the `index.sp500_multiples`  query to retrieve historical data on various financial metrics such as PE Ratio,  Dividend, Earnings, Inflation Adjusted Price, Sales, Price to Sales Ratio, and Book  Value per Share. Specify query parameters such as start date, end date, and provider.  Collapse the frequency or transform the time series. Get results, charts, metadata,  and more.",keywords:["S&P 500 multiples","Shiller PE ratios","SP500Multiples","index.sp500_multiples","historical data","PE Ratio","Dividend","Earnings","Inflation Adjusted Price","Sales","Price to Sales Ratio","Book Value per Share","query parameters","start date","end date","provider","collapse","transform","results","chart","metadata","data","date"]},d=void 0,c={id:"platform/reference/index/sp500_multiples",title:"sp500_multiples",description:"Learn about S&P 500 multiples and Shiller PE ratios. Use the `index.sp500_multiples`  query to retrieve historical data on various financial metrics such as PE Ratio,  Dividend, Earnings, Inflation Adjusted Price, Sales, Price to Sales Ratio, and Book  Value per Share. Specify query parameters such as start date, end date, and provider.  Collapse the frequency or transform the time series. Get results, charts, metadata,  and more.",source:"@site/content/platform/reference/index/sp500_multiples.md",sourceDirName:"platform/reference/index",slug:"/platform/reference/index/sp500_multiples",permalink:"/platform/reference/index/sp500_multiples",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/platform/reference/index/sp500_multiples.md",tags:[],version:"current",frontMatter:{title:"sp500_multiples",description:"Learn about S&P 500 multiples and Shiller PE ratios. Use the `index.sp500_multiples`  query to retrieve historical data on various financial metrics such as PE Ratio,  Dividend, Earnings, Inflation Adjusted Price, Sales, Price to Sales Ratio, and Book  Value per Share. Specify query parameters such as start date, end date, and provider.  Collapse the frequency or transform the time series. Get results, charts, metadata,  and more.",keywords:["S&P 500 multiples","Shiller PE ratios","SP500Multiples","index.sp500_multiples","historical data","PE Ratio","Dividend","Earnings","Inflation Adjusted Price","Sales","Price to Sales Ratio","Book Value per Share","query parameters","start date","end date","provider","collapse","transform","results","chart","metadata","data","date"]},sidebar:"tutorialSidebar",previous:{title:"snapshots",permalink:"/platform/reference/index/snapshots"},next:{title:"News",permalink:"/platform/reference/news/"}},u={},h=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Data",id:"data",level:2}];function _(e){const r={code:"code",em:"em",h2:"h2",hr:"hr",p:"p",strong:"strong",...(0,n.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.A,{title:"index/sp500_multiples - Reference | OpenBB Platform Docs"}),"\n","\n",(0,a.jsx)(r.p,{children:"Get historical S&P 500 multiples and Shiller PE ratios."}),"\n",(0,a.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,a.jsxs)(i.A,{children:[(0,a.jsxs)(l.A,{value:"standard",label:"standard",children:[(0,a.jsxs)(r.p,{children:[(0,a.jsx)(r.strong,{children:(0,a.jsx)(r.code,{children:"series_name"})}),": ",(0,a.jsx)(r.code,{children:"Union[Union[Literal['shiller_pe_month', 'shiller_pe_year', 'pe_year', 'pe_month', 'dividend_year', 'dividend_month', 'dividend_growth_quarter', 'dividend_growth_year', 'dividend_yield_year', 'dividend_yield_month', 'earnings_year', 'earnings_month', 'earnings_growth_year', 'earnings_growth_quarter', 'real_earnings_growth_year', 'real_earnings_growth_quarter', 'earnings_yield_year', 'earnings_yield_month', 'real_price_year', 'real_price_month', 'inflation_adjusted_price_year', 'inflation_adjusted_price_month', 'sales_year', 'sales_quarter', 'sales_growth_year', 'sales_growth_quarter', 'real_sales_year', 'real_sales_quarter', 'real_sales_growth_year', 'real_sales_growth_quarter', 'price_to_sales_year', 'price_to_sales_quarter', 'price_to_book_value_year', 'price_to_book_value_quarter', 'book_value_year', 'book_value_quarter'], str], list[Union[Literal['shiller_pe_month', 'shiller_pe_year', 'pe_year', 'pe_month', 'dividend_year', 'dividend_month', 'dividend_growth_quarter', 'dividend_growth_year', 'dividend_yield_year', 'dividend_yield_month', 'earnings_year', 'earnings_month', 'earnings_growth_year', 'earnings_growth_quarter', 'real_earnings_growth_year', 'real_earnings_growth_quarter', 'earnings_yield_year', 'earnings_yield_month', 'real_price_year', 'real_price_month', 'inflation_adjusted_price_year', 'inflation_adjusted_price_month', 'sales_year', 'sales_quarter', 'sales_growth_year', 'sales_growth_quarter', 'real_sales_year', 'real_sales_quarter', 'real_sales_growth_year', 'real_sales_growth_quarter', 'price_to_sales_year', 'price_to_sales_quarter', 'price_to_book_value_year', 'price_to_book_value_quarter', 'book_value_year', 'book_value_quarter'], str]]]"})]}),(0,a.jsx)(r.p,{children:"The name of the series. Defaults to 'pe_month'. Multiple items allowed for provider(s): multpl."}),(0,a.jsxs)(r.p,{children:["\u2022 ",(0,a.jsx)(r.em,{children:"Default:"})," ",(0,a.jsx)(r.code,{children:"pe_month"})]}),(0,a.jsxs)(r.p,{children:["\u2022 ",(0,a.jsx)(r.em,{children:"Optional:"})," ",(0,a.jsx)(r.code,{children:"True"})]}),(0,a.jsx)(r.hr,{}),(0,a.jsxs)(r.p,{children:[(0,a.jsx)(r.strong,{children:(0,a.jsx)(r.code,{children:"start_date"})}),": ",(0,a.jsx)(r.code,{children:"Union[date, str]"})]}),(0,a.jsx)(r.p,{children:"Start date of the data, in YYYY-MM-DD format."}),(0,a.jsxs)(r.p,{children:["\u2022 ",(0,a.jsx)(r.em,{children:"Optional:"})," ",(0,a.jsx)(r.code,{children:"True"})]}),(0,a.jsx)(r.hr,{}),(0,a.jsxs)(r.p,{children:[(0,a.jsx)(r.strong,{children:(0,a.jsx)(r.code,{children:"end_date"})}),": ",(0,a.jsx)(r.code,{children:"Union[date, str]"})]}),(0,a.jsx)(r.p,{children:"End date of the data, in YYYY-MM-DD format."}),(0,a.jsxs)(r.p,{children:["\u2022 ",(0,a.jsx)(r.em,{children:"Optional:"})," ",(0,a.jsx)(r.code,{children:"True"})]})]}),(0,a.jsxs)(l.A,{value:"multpl",label:"multpl",children:[(0,a.jsxs)(r.p,{children:[(0,a.jsx)(r.strong,{children:(0,a.jsx)(r.code,{children:"series_name"})}),": ",(0,a.jsx)(r.code,{children:"Union[Union[Literal['shiller_pe_month', 'shiller_pe_year', 'pe_year', 'pe_month', 'dividend_year', 'dividend_month', 'dividend_growth_quarter', 'dividend_growth_year', 'dividend_yield_year', 'dividend_yield_month', 'earnings_year', 'earnings_month', 'earnings_growth_year', 'earnings_growth_quarter', 'real_earnings_growth_year', 'real_earnings_growth_quarter', 'earnings_yield_year', 'earnings_yield_month', 'real_price_year', 'real_price_month', 'inflation_adjusted_price_year', 'inflation_adjusted_price_month', 'sales_year', 'sales_quarter', 'sales_growth_year', 'sales_growth_quarter', 'real_sales_year', 'real_sales_quarter', 'real_sales_growth_year', 'real_sales_growth_quarter', 'price_to_sales_year', 'price_to_sales_quarter', 'price_to_book_value_year', 'price_to_book_value_quarter', 'book_value_year', 'book_value_quarter'], str], list[Union[Literal['shiller_pe_month', 'shiller_pe_year', 'pe_year', 'pe_month', 'dividend_year', 'dividend_month', 'dividend_growth_quarter', 'dividend_growth_year', 'dividend_yield_year', 'dividend_yield_month', 'earnings_year', 'earnings_month', 'earnings_growth_year', 'earnings_growth_quarter', 'real_earnings_growth_year', 'real_earnings_growth_quarter', 'earnings_yield_year', 'earnings_yield_month', 'real_price_year', 'real_price_month', 'inflation_adjusted_price_year', 'inflation_adjusted_price_month', 'sales_year', 'sales_quarter', 'sales_growth_year', 'sales_growth_quarter', 'real_sales_year', 'real_sales_quarter', 'real_sales_growth_year', 'real_sales_growth_quarter', 'price_to_sales_year', 'price_to_sales_quarter', 'price_to_book_value_year', 'price_to_book_value_quarter', 'book_value_year', 'book_value_quarter'], str]]]"})]}),(0,a.jsx)(r.p,{children:"The name of the series. Defaults to 'pe_month'. Multiple items allowed for provider(s): multpl."}),(0,a.jsxs)(r.p,{children:["\u2022 ",(0,a.jsx)(r.em,{children:"Default:"})," ",(0,a.jsx)(r.code,{children:"pe_month"})]}),(0,a.jsxs)(r.p,{children:["\u2022 ",(0,a.jsx)(r.em,{children:"Optional:"})," ",(0,a.jsx)(r.code,{children:"True"})]}),(0,a.jsx)(r.hr,{}),(0,a.jsxs)(r.p,{children:[(0,a.jsx)(r.strong,{children:(0,a.jsx)(r.code,{children:"start_date"})}),": ",(0,a.jsx)(r.code,{children:"Union[date, str]"})]}),(0,a.jsx)(r.p,{children:"Start date of the data, in YYYY-MM-DD format."}),(0,a.jsxs)(r.p,{children:["\u2022 ",(0,a.jsx)(r.em,{children:"Optional:"})," ",(0,a.jsx)(r.code,{children:"True"})]}),(0,a.jsx)(r.hr,{}),(0,a.jsxs)(r.p,{children:[(0,a.jsx)(r.strong,{children:(0,a.jsx)(r.code,{children:"end_date"})}),": ",(0,a.jsx)(r.code,{children:"Union[date, str]"})]}),(0,a.jsx)(r.p,{children:"End date of the data, in YYYY-MM-DD format."}),(0,a.jsxs)(r.p,{children:["\u2022 ",(0,a.jsx)(r.em,{children:"Optional:"})," ",(0,a.jsx)(r.code,{children:"True"})]})]})]}),"\n",(0,a.jsx)(r.hr,{}),"\n",(0,a.jsx)(r.h2,{id:"returns",children:"Returns"}),"\n",(0,a.jsxs)(r.p,{children:[(0,a.jsx)(r.strong,{children:(0,a.jsx)(r.code,{children:"results"})}),": ",(0,a.jsx)(r.code,{children:"list[SP500Multiples]"})]}),"\n",(0,a.jsx)(r.p,{children:"Serializable results."}),"\n",(0,a.jsx)(r.hr,{}),"\n",(0,a.jsxs)(r.p,{children:[(0,a.jsx)(r.strong,{children:(0,a.jsx)(r.code,{children:"provider"})}),": ",(0,a.jsx)(r.code,{children:"Optional[Literal['multpl']]"})]}),"\n",(0,a.jsx)(r.p,{children:"Provider name."}),"\n",(0,a.jsx)(r.hr,{}),"\n",(0,a.jsxs)(r.p,{children:[(0,a.jsx)(r.strong,{children:(0,a.jsx)(r.code,{children:"warnings"})}),": ",(0,a.jsx)(r.code,{children:"Optional[list[Warning_]]"})]}),"\n",(0,a.jsx)(r.p,{children:"list of warnings."}),"\n",(0,a.jsx)(r.hr,{}),"\n",(0,a.jsxs)(r.p,{children:[(0,a.jsx)(r.strong,{children:(0,a.jsx)(r.code,{children:"chart"})}),": ",(0,a.jsx)(r.code,{children:"Optional[Chart]"})]}),"\n",(0,a.jsx)(r.p,{children:"Chart object."}),"\n",(0,a.jsx)(r.hr,{}),"\n",(0,a.jsxs)(r.p,{children:[(0,a.jsx)(r.strong,{children:(0,a.jsx)(r.code,{children:"extra"})}),": ",(0,a.jsx)(r.code,{children:"dict[str, Any]"})]}),"\n",(0,a.jsx)(r.p,{children:"Extra info."}),"\n",(0,a.jsx)(r.hr,{}),"\n",(0,a.jsx)(r.h2,{id:"data",children:"Data"}),"\n",(0,a.jsxs)(i.A,{children:[(0,a.jsxs)(l.A,{value:"standard",label:"standard",children:[(0,a.jsxs)(r.p,{children:[(0,a.jsx)(r.strong,{children:(0,a.jsx)(r.code,{children:"date"})}),": ",(0,a.jsx)(r.code,{children:"Union[date, str]"})]}),(0,a.jsx)(r.p,{children:"The date of the data."}),(0,a.jsxs)(r.p,{children:[(0,a.jsx)(r.strong,{children:(0,a.jsx)(r.code,{children:"name"})}),": ",(0,a.jsx)(r.code,{children:"str"})]}),(0,a.jsx)(r.p,{children:"Name of the series."}),(0,a.jsxs)(r.p,{children:[(0,a.jsx)(r.strong,{children:(0,a.jsx)(r.code,{children:"value"})}),": ",(0,a.jsx)(r.code,{children:"Union[int, float]"})]}),(0,a.jsx)(r.p,{children:"Value of the series."})]}),(0,a.jsxs)(l.A,{value:"multpl",label:"multpl",children:[(0,a.jsxs)(r.p,{children:[(0,a.jsx)(r.strong,{children:(0,a.jsx)(r.code,{children:"date"})}),": ",(0,a.jsx)(r.code,{children:"Union[date, str]"})]}),(0,a.jsx)(r.p,{children:"The date of the data."}),(0,a.jsxs)(r.p,{children:[(0,a.jsx)(r.strong,{children:(0,a.jsx)(r.code,{children:"name"})}),": ",(0,a.jsx)(r.code,{children:"str"})]}),(0,a.jsx)(r.p,{children:"Name of the series."}),(0,a.jsxs)(r.p,{children:[(0,a.jsx)(r.strong,{children:(0,a.jsx)(r.code,{children:"value"})}),": ",(0,a.jsx)(r.code,{children:"Union[int, float]"})]}),(0,a.jsx)(r.p,{children:"Value of the series."})]})]})]})}function p(e={}){const{wrapper:r}={...(0,n.R)(),...e.components};return r?(0,a.jsx)(r,{...e,children:(0,a.jsx)(_,{...e})}):_(e)}},19365:(e,r,t)=>{t.d(r,{A:()=>i});t(96540);var a=t(34164);const n={tabItem:"tabItem_Ymn6"};var s=t(74848);function i(e){let{children:r,hidden:t,className:i}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,a.A)(n.tabItem,i),hidden:t,children:r})}},94331:(e,r,t)=>{t.d(r,{A:()=>s});t(96540);var a=t(5260),n=t(74848);function s(e){let{title:r}=e;return(0,n.jsx)(a.A,{children:(0,n.jsx)("title",{children:r})})}},18228:(e,r,t)=>{t.d(r,{A:()=>b});var a=t(56347),n=t(23104),s=t(96540),i=t(205),l=t(57485),o=t(31682),d=t(89466);function c(e){return function(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:r,label:t,attributes:a,default:n}}=e;return{value:r,label:t,attributes:a,default:n}}))}function u(e){const{values:r,children:t}=e;return(0,s.useMemo)((()=>{const e=r??c(t);return function(e){const r=(0,o.X)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,t])}function h(e){let{value:r,tabValues:t}=e;return t.some((e=>e.value===r))}function _(e){let{queryString:r=!1,groupId:t}=e;const n=(0,a.W6)(),i=function(e){let{queryString:r=!1,groupId:t}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:r,groupId:t});return[(0,l.aZ)(i),(0,s.useCallback)((e=>{if(!i)return;const r=new URLSearchParams(n.location.search);r.set(i,e),n.replace({...n.location,search:r.toString()})}),[i,n])]}function p(e){const{defaultValue:r,queryString:t=!1,groupId:a}=e,n=u(e),[l,o]=(0,s.useState)((()=>function(e){let{defaultValue:r,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!h({value:r,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:r,tabValues:n}))),[c,p]=_({queryString:t,groupId:a}),[m,x]=function(e){let{groupId:r}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(r),[a,n]=(0,d.Dv)(t);return[a,(0,s.useCallback)((e=>{t&&n.set(e)}),[t,n])]}({groupId:a}),f=(()=>{const e=c??m;return h({value:e,tabValues:n})?e:null})();(0,i.A)((()=>{f&&o(f)}),[f]);return{selectedValue:l,selectValue:(0,s.useCallback)((e=>{if(!h({value:e,tabValues:n}))throw new Error(`Can't select invalid tab value=${e}`);o(e),p(e),x(e)}),[p,x,n]),tabValues:n}}var m=t(92303),x=t(34164);const f={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};var j=t(74848);function g(e){let{className:r,block:t,selectedValue:s,selectValue:i,tabValues:l}=e;const o=[],{blockElementScrollPositionUntilNextRender:d}=(0,n.a_)(),{pathname:c}=(0,a.zy)(),u=e=>{const r=e.currentTarget,t=o.indexOf(r),a=l[t].value;a!==s&&(d(r),i(a))},h=e=>{let r=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=o.indexOf(e.currentTarget)+1;r=o[t]??o[0];break}case"ArrowLeft":{const t=o.indexOf(e.currentTarget)-1;r=o[t]??o[o.length-1];break}}r?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,x.A)("_group-tab list-none -ml-7 my-6 overflow-auto"),children:l.map((e=>{let{value:r,label:t,attributes:a}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:s===r?0:-1,"aria-selected":s===r,ref:e=>o.push(e),onKeyDown:h,onClick:u,...a,className:(0,x.A)("font-bold tracking-widest w-fit px-3 inline-flex py-1 uppercase border-b text-lg cursor-pointer",f.tabItem,a?.className,{"border-b-2 pointer-events-none":s===r,"border-b-2 text-[#669dcb] border-[#669dcb]":s===r&&c.startsWith("/workspace"),"border-b-2 text-[#FB923C] border-[#FB923C]":s===r&&c.startsWith("/sdk"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":s!==r&&c.startsWith("/sdk"),"border-b-2 text-[#FB923C] border-[#FB923C]":s===r&&c.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":s!==r&&c.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#abd2f1] hover:border-[#abd2f1]":s!==r&&c.startsWith("/workspace")}),children:t??r},r)}))})}function y(e){let{lazy:r,children:t,selectedValue:a}=e;if(t=Array.isArray(t)?t:[t],r){const e=t.find((e=>e.props.value===a));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:t.map(((e,r)=>(0,s.cloneElement)(e,{key:r,hidden:e.props.value!==a})))})}function v(e){const r=p(e);return(0,j.jsxs)("div",{className:(0,x.A)("tabs-container",f.tabList),children:[(0,j.jsx)(g,{...e,...r}),(0,j.jsx)(y,{...e,...r})]})}function b(e){const r=(0,m.A)();return(0,j.jsx)(v,{...e},String(r))}},28453:(e,r,t)=>{t.d(r,{R:()=>i,x:()=>l});var a=t(96540);const n={},s=a.createContext(n);function i(e){const r=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),a.createElement(s.Provider,{value:r},e.children)}}}]);