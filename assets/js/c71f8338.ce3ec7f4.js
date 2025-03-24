"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[69690],{22255:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>a,default:()=>x,frontMatter:()=>i,metadata:()=>c,toc:()=>h});var n=r(74848),d=r(28453),s=r(18228),l=r(19365);const i={title:"Equity Undervalued Growth",description:"Get potentially undervalued growth stocks"},a=void 0,c={id:"platform/data_models/EquityUndervaluedGrowth",title:"Equity Undervalued Growth",description:"Get potentially undervalued growth stocks",source:"@site/content/platform/data_models/EquityUndervaluedGrowth.md",sourceDirName:"platform/data_models",slug:"/platform/data_models/EquityUndervaluedGrowth",permalink:"/platform/data_models/EquityUndervaluedGrowth",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/platform/data_models/EquityUndervaluedGrowth.md",tags:[],version:"current",frontMatter:{title:"Equity Undervalued Growth",description:"Get potentially undervalued growth stocks"},sidebar:"tutorialSidebar",previous:{title:"Equity Short Interest",permalink:"/platform/data_models/EquityShortInterest"},next:{title:"Equity Undervalued Large Caps",permalink:"/platform/data_models/EquityUndervaluedLargeCaps"}},o={},h=[{value:"Implementation details",id:"implementation-details",level:2},{value:"Class names",id:"class-names",level:3},{value:"Import Statement",id:"import-statement",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Data",id:"data",level:2}];function u(e){const t={code:"code",h2:"h2",h3:"h3",hr:"hr",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"implementation-details",children:"Implementation details"}),"\n",(0,n.jsx)(t.h3,{id:"class-names",children:"Class names"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Model name"}),(0,n.jsx)(t.th,{children:"Parameters class"}),(0,n.jsx)(t.th,{children:"Data class"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"EquityUndervaluedGrowth"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"EquityUndervaluedGrowthQueryParams"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"EquityUndervaluedGrowthData"})})]})})]}),"\n",(0,n.jsx)(t.h3,{id:"import-statement",children:"Import Statement"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"from openbb_core.provider.standard_models. import (\nEquityUndervaluedGrowthData,\nEquityUndervaluedGrowthQueryParams,\n)\n"})}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(s.A,{children:[(0,n.jsx)(l.A,{value:"standard",label:"standard",children:(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Default"}),(0,n.jsx)(t.th,{children:"Optional"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"sort"}),(0,n.jsx)(t.td,{children:"Literal['asc', 'desc']"}),(0,n.jsx)(t.td,{children:"Sort order. Possible values: 'asc', 'desc'. Default: 'desc'."}),(0,n.jsx)(t.td,{children:"desc"}),(0,n.jsx)(t.td,{children:"True"})]})})]})}),(0,n.jsx)(l.A,{value:"yfinance",label:"yfinance",children:(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Default"}),(0,n.jsx)(t.th,{children:"Optional"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"sort"}),(0,n.jsx)(t.td,{children:"Literal['asc', 'desc']"}),(0,n.jsx)(t.td,{children:"Sort order. Possible values: 'asc', 'desc'. Default: 'desc'."}),(0,n.jsx)(t.td,{children:"desc"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"limit"}),(0,n.jsx)(t.td,{children:"int"}),(0,n.jsx)(t.td,{children:"Limit the number of results."}),(0,n.jsx)(t.td,{children:"200"}),(0,n.jsx)(t.td,{children:"True"})]})]})]})})]}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"data",children:"Data"}),"\n",(0,n.jsxs)(s.A,{children:[(0,n.jsx)(l.A,{value:"standard",label:"standard",children:(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"symbol"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Symbol representing the entity requested in the data."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"name"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Name of the entity."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"price"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Last price."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"change"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Change in price."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"percent_change"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Percent change."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"volume"}),(0,n.jsx)(t.td,{children:"Union[int, float]"}),(0,n.jsx)(t.td,{children:"The trading volume."})]})]})]})}),(0,n.jsx)(l.A,{value:"yfinance",label:"yfinance",children:(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"symbol"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Symbol representing the entity requested in the data."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"name"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Name of the entity."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"price"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Last price."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"change"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Change in price."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"percent_change"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Percent change."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"volume"}),(0,n.jsx)(t.td,{children:"Union[int, float]"}),(0,n.jsx)(t.td,{children:"The trading volume."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"open"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Open price for the day."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"high"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"High price for the day."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"low"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Low price for the day."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"previous_close"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Previous close price."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"ma50"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"50-day moving average."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"ma200"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"200-day moving average."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"year_high"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"52-week high."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"year_low"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"52-week low."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"market_cap"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Market Cap."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"shares_outstanding"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Shares outstanding."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"book_value"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Book value per share."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"price_to_book"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Price to book ratio."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"eps_ttm"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Earnings per share over the trailing twelve months."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"eps_forward"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Forward earnings per share."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"pe_forward"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Forward price-to-earnings ratio."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"dividend_yield"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Trailing twelve month dividend yield."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"exchange"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Exchange where the stock is listed."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"exchange_timezone"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Timezone of the exchange."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"earnings_date"}),(0,n.jsx)(t.td,{children:"datetime"}),(0,n.jsx)(t.td,{children:"Most recent earnings date."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"currency"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Currency of the price data."})]})]})]})})]})]})}function x(e={}){const{wrapper:t}={...(0,d.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},19365:(e,t,r)=>{r.d(t,{A:()=>l});r(96540);var n=r(34164);const d={tabItem:"tabItem_Ymn6"};var s=r(74848);function l(e){let{children:t,hidden:r,className:l}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,n.A)(d.tabItem,l),hidden:r,children:t})}},18228:(e,t,r)=>{r.d(t,{A:()=>w});var n=r(56347),d=r(23104),s=r(96540),l=r(205),i=r(57485),a=r(31682),c=r(89466);function o(e){return function(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:d}}=e;return{value:t,label:r,attributes:n,default:d}}))}function h(e){const{values:t,children:r}=e;return(0,s.useMemo)((()=>{const e=t??o(r);return function(e){const t=(0,a.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function u(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function x(e){let{queryString:t=!1,groupId:r}=e;const d=(0,n.W6)(),l=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,i.aZ)(l),(0,s.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(d.location.search);t.set(l,e),d.replace({...d.location,search:t.toString()})}),[l,d])]}function j(e){const{defaultValue:t,queryString:r=!1,groupId:n}=e,d=h(e),[i,a]=(0,s.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!u({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:d}))),[o,j]=x({queryString:r,groupId:n}),[p,m]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,d]=(0,c.Dv)(r);return[n,(0,s.useCallback)((e=>{r&&d.set(e)}),[r,d])]}({groupId:n}),f=(()=>{const e=o??p;return u({value:e,tabValues:d})?e:null})();(0,l.A)((()=>{f&&a(f)}),[f]);return{selectedValue:i,selectValue:(0,s.useCallback)((e=>{if(!u({value:e,tabValues:d}))throw new Error(`Can't select invalid tab value=${e}`);a(e),j(e),m(e)}),[j,m,d]),tabValues:d}}var p=r(92303),m=r(34164);const f={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};var b=r(74848);function v(e){let{className:t,block:r,selectedValue:s,selectValue:l,tabValues:i}=e;const a=[],{blockElementScrollPositionUntilNextRender:c}=(0,d.a_)(),{pathname:o}=(0,n.zy)(),h=e=>{const t=e.currentTarget,r=a.indexOf(t),n=i[r].value;n!==s&&(c(t),l(n))},u=e=>{let t=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{const r=a.indexOf(e.currentTarget)+1;t=a[r]??a[0];break}case"ArrowLeft":{const r=a.indexOf(e.currentTarget)-1;t=a[r]??a[a.length-1];break}}t?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,m.A)("_group-tab list-none -ml-7 my-6 overflow-auto"),children:i.map((e=>{let{value:t,label:r,attributes:n}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,ref:e=>a.push(e),onKeyDown:u,onClick:h,...n,className:(0,m.A)("font-bold tracking-widest w-fit px-3 inline-flex py-1 uppercase border-b text-lg cursor-pointer",f.tabItem,n?.className,{"border-b-2 pointer-events-none":s===t,"border-b-2 text-[#669dcb] border-[#669dcb]":s===t&&o.startsWith("/workspace"),"border-b-2 text-[#FB923C] border-[#FB923C]":s===t&&o.startsWith("/sdk"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":s!==t&&o.startsWith("/sdk"),"border-b-2 text-[#FB923C] border-[#FB923C]":s===t&&o.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":s!==t&&o.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#abd2f1] hover:border-[#abd2f1]":s!==t&&o.startsWith("/workspace")}),children:r??t},t)}))})}function y(e){let{lazy:t,children:r,selectedValue:n}=e;if(r=Array.isArray(r)?r:[r],t){const e=r.find((e=>e.props.value===n));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:r.map(((e,t)=>(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==n})))})}function g(e){const t=j(e);return(0,b.jsxs)("div",{className:(0,m.A)("tabs-container",f.tabList),children:[(0,b.jsx)(v,{...e,...t}),(0,b.jsx)(y,{...e,...t})]})}function w(e){const t=(0,p.A)();return(0,b.jsx)(g,{...e},String(t))}},28453:(e,t,r)=>{r.d(t,{R:()=>l,x:()=>i});var n=r(96540);const d={},s=n.createContext(d);function l(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:l(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);