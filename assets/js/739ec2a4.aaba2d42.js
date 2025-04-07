"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6943],{46519:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>o,contentTitle:()=>d,default:()=>u,frontMatter:()=>c,metadata:()=>a,toc:()=>h});var n=s(74848),t=s(28453),l=s(18228),i=s(19365);const c={title:"Equity Aggressive Small Caps",description:"Get top small cap stocks based on earnings growth"},d=void 0,a={id:"platform/data_models/EquityAggressiveSmallCaps",title:"Equity Aggressive Small Caps",description:"Get top small cap stocks based on earnings growth",source:"@site/content/platform/data_models/EquityAggressiveSmallCaps.md",sourceDirName:"platform/data_models",slug:"/platform/data_models/EquityAggressiveSmallCaps",permalink:"/platform/data_models/EquityAggressiveSmallCaps",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/platform/data_models/EquityAggressiveSmallCaps.md",tags:[],version:"current",frontMatter:{title:"Equity Aggressive Small Caps",description:"Get top small cap stocks based on earnings growth"},sidebar:"tutorialSidebar",previous:{title:"Equity Active",permalink:"/platform/data_models/EquityActive"},next:{title:"Equity FTD",permalink:"/platform/data_models/EquityFTD"}},o={},h=[{value:"Implementation details",id:"implementation-details",level:2},{value:"Class names",id:"class-names",level:3},{value:"Import Statement",id:"import-statement",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Data",id:"data",level:2}];function x(e){const r={code:"code",em:"em",h2:"h2",h3:"h3",hr:"hr",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.hr,{}),"\n",(0,n.jsx)(r.h2,{id:"implementation-details",children:"Implementation details"}),"\n",(0,n.jsx)(r.h3,{id:"class-names",children:"Class names"}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Model name"}),(0,n.jsx)(r.th,{children:"Parameters class"}),(0,n.jsx)(r.th,{children:"Data class"})]})}),(0,n.jsx)(r.tbody,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"EquityAggressiveSmallCaps"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"EquityAggressiveSmallCapsQueryParams"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"EquityAggressiveSmallCapsData"})})]})})]}),"\n",(0,n.jsx)(r.h3,{id:"import-statement",children:"Import Statement"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:"from openbb_core.provider.standard_models. import (\nEquityAggressiveSmallCapsData,\nEquityAggressiveSmallCapsQueryParams,\n)\n"})}),"\n",(0,n.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(l.A,{children:[(0,n.jsxs)(i.A,{value:"standard",label:"standard",children:[(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:(0,n.jsx)(r.code,{children:"sort"})}),": ",(0,n.jsx)(r.code,{children:"Literal['asc', 'desc']"})]}),(0,n.jsx)(r.p,{children:"Sort order. Possible values: 'asc', 'desc'. Default: 'desc'."}),(0,n.jsxs)(r.p,{children:["\u2022 ",(0,n.jsx)(r.em,{children:"Default:"})," ",(0,n.jsx)(r.code,{children:"desc"})]}),(0,n.jsxs)(r.p,{children:["\u2022 ",(0,n.jsx)(r.em,{children:"Optional:"})," ",(0,n.jsx)(r.code,{children:"True"})]})]}),(0,n.jsxs)(i.A,{value:"yfinance",label:"yfinance",children:[(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:(0,n.jsx)(r.code,{children:"sort"})}),": ",(0,n.jsx)(r.code,{children:"Literal['asc', 'desc']"})]}),(0,n.jsx)(r.p,{children:"Sort order. Possible values: 'asc', 'desc'. Default: 'desc'."}),(0,n.jsxs)(r.p,{children:["\u2022 ",(0,n.jsx)(r.em,{children:"Default:"})," ",(0,n.jsx)(r.code,{children:"desc"})]}),(0,n.jsxs)(r.p,{children:["\u2022 ",(0,n.jsx)(r.em,{children:"Optional:"})," ",(0,n.jsx)(r.code,{children:"True"})]}),(0,n.jsx)(r.hr,{}),(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:(0,n.jsx)(r.code,{children:"limit"})}),": ",(0,n.jsx)(r.code,{children:"int"})]}),(0,n.jsx)(r.p,{children:"Limit the number of results. Default is all."}),(0,n.jsxs)(r.p,{children:["\u2022 ",(0,n.jsx)(r.em,{children:"Optional:"})," ",(0,n.jsx)(r.code,{children:"True"})]})]})]}),"\n",(0,n.jsx)(r.h2,{id:"data",children:"Data"}),"\n",(0,n.jsxs)(l.A,{children:[(0,n.jsxs)(i.A,{value:"standard",label:"standard",children:[(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:(0,n.jsx)(r.code,{children:"symbol"})}),": ",(0,n.jsx)(r.code,{children:"str"})]}),(0,n.jsx)(r.p,{children:"Symbol representing the entity requested in the data."}),(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:(0,n.jsx)(r.code,{children:"name"})}),": ",(0,n.jsx)(r.code,{children:"str"})]}),(0,n.jsx)(r.p,{children:"Name of the entity."}),(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:(0,n.jsx)(r.code,{children:"price"})}),": ",(0,n.jsx)(r.code,{children:"float"})]}),(0,n.jsx)(r.p,{children:"Last price."}),(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:(0,n.jsx)(r.code,{children:"change"})}),": ",(0,n.jsx)(r.code,{children:"float"})]}),(0,n.jsx)(r.p,{children:"Change in price."}),(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:(0,n.jsx)(r.code,{children:"percent_change"})}),": ",(0,n.jsx)(r.code,{children:"float"})]}),(0,n.jsx)(r.p,{children:"Percent change."}),(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:(0,n.jsx)(r.code,{children:"volume"})}),": ",(0,n.jsx)(r.code,{children:"Union[int, float]"})]}),(0,n.jsx)(r.p,{children:"The trading volume."})]}),(0,n.jsxs)(i.A,{value:"yfinance",label:"yfinance",children:[(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:(0,n.jsx)(r.code,{children:"symbol"})}),": ",(0,n.jsx)(r.code,{children:"str"})]}),(0,n.jsx)(r.p,{children:"Symbol representing the entity requested in the data."}),(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:(0,n.jsx)(r.code,{children:"name"})}),": ",(0,n.jsx)(r.code,{children:"str"})]}),(0,n.jsx)(r.p,{children:"Name of the entity."}),(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:(0,n.jsx)(r.code,{children:"price"})}),": ",(0,n.jsx)(r.code,{children:"float"})]}),(0,n.jsx)(r.p,{children:"Last price."}),(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:(0,n.jsx)(r.code,{children:"change"})}),": ",(0,n.jsx)(r.code,{children:"float"})]}),(0,n.jsx)(r.p,{children:"Change in price."}),(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:(0,n.jsx)(r.code,{children:"percent_change"})}),": ",(0,n.jsx)(r.code,{children:"float"})]}),(0,n.jsx)(r.p,{children:"Percent change."}),(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:(0,n.jsx)(r.code,{children:"volume"})}),": ",(0,n.jsx)(r.code,{children:"Union[int, float]"})]}),(0,n.jsx)(r.p,{children:"The trading volume."}),(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:(0,n.jsx)(r.code,{children:"open"})}),": ",(0,n.jsx)(r.code,{children:"float"})]}),(0,n.jsx)(r.p,{children:"Open price for the day."}),(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:(0,n.jsx)(r.code,{children:"high"})}),": ",(0,n.jsx)(r.code,{children:"float"})]}),(0,n.jsx)(r.p,{children:"High price for the day."}),(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:(0,n.jsx)(r.code,{children:"low"})}),": ",(0,n.jsx)(r.code,{children:"float"})]}),(0,n.jsx)(r.p,{children:"Low price for the day."}),(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:(0,n.jsx)(r.code,{children:"previous_close"})}),": ",(0,n.jsx)(r.code,{children:"float"})]}),(0,n.jsx)(r.p,{children:"Previous close price."}),(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:(0,n.jsx)(r.code,{children:"ma50"})}),": ",(0,n.jsx)(r.code,{children:"float"})]}),(0,n.jsx)(r.p,{children:"50-day moving average."}),(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:(0,n.jsx)(r.code,{children:"ma200"})}),": ",(0,n.jsx)(r.code,{children:"float"})]}),(0,n.jsx)(r.p,{children:"200-day moving average."}),(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:(0,n.jsx)(r.code,{children:"year_high"})}),": ",(0,n.jsx)(r.code,{children:"float"})]}),(0,n.jsx)(r.p,{children:"52-week high."}),(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:(0,n.jsx)(r.code,{children:"year_low"})}),": ",(0,n.jsx)(r.code,{children:"float"})]}),(0,n.jsx)(r.p,{children:"52-week low."}),(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:(0,n.jsx)(r.code,{children:"market_cap"})}),": ",(0,n.jsx)(r.code,{children:"float"})]}),(0,n.jsx)(r.p,{children:"Market Cap."}),(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:(0,n.jsx)(r.code,{children:"shares_outstanding"})}),": ",(0,n.jsx)(r.code,{children:"float"})]}),(0,n.jsx)(r.p,{children:"Shares outstanding."}),(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:(0,n.jsx)(r.code,{children:"book_value"})}),": ",(0,n.jsx)(r.code,{children:"float"})]}),(0,n.jsx)(r.p,{children:"Book value per share."}),(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:(0,n.jsx)(r.code,{children:"price_to_book"})}),": ",(0,n.jsx)(r.code,{children:"float"})]}),(0,n.jsx)(r.p,{children:"Price to book ratio."}),(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:(0,n.jsx)(r.code,{children:"eps_ttm"})}),": ",(0,n.jsx)(r.code,{children:"float"})]}),(0,n.jsx)(r.p,{children:"Earnings per share over the trailing twelve months."}),(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:(0,n.jsx)(r.code,{children:"eps_forward"})}),": ",(0,n.jsx)(r.code,{children:"float"})]}),(0,n.jsx)(r.p,{children:"Forward earnings per share."}),(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:(0,n.jsx)(r.code,{children:"pe_forward"})}),": ",(0,n.jsx)(r.code,{children:"float"})]}),(0,n.jsx)(r.p,{children:"Forward price-to-earnings ratio."}),(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:(0,n.jsx)(r.code,{children:"dividend_yield"})}),": ",(0,n.jsx)(r.code,{children:"float"})]}),(0,n.jsx)(r.p,{children:"Trailing twelve month dividend yield."}),(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:(0,n.jsx)(r.code,{children:"exchange"})}),": ",(0,n.jsx)(r.code,{children:"str"})]}),(0,n.jsx)(r.p,{children:"Exchange where the stock is listed."}),(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:(0,n.jsx)(r.code,{children:"exchange_timezone"})}),": ",(0,n.jsx)(r.code,{children:"str"})]}),(0,n.jsx)(r.p,{children:"Timezone of the exchange."}),(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:(0,n.jsx)(r.code,{children:"earnings_date"})}),": ",(0,n.jsx)(r.code,{children:"datetime"})]}),(0,n.jsx)(r.p,{children:"Most recent earnings date."}),(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:(0,n.jsx)(r.code,{children:"currency"})}),": ",(0,n.jsx)(r.code,{children:"str"})]}),(0,n.jsx)(r.p,{children:"Currency of the price data."})]})]})]})}function u(e={}){const{wrapper:r}={...(0,t.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(x,{...e})}):x(e)}},19365:(e,r,s)=>{s.d(r,{A:()=>i});s(96540);var n=s(34164);const t={tabItem:"tabItem_Ymn6"};var l=s(74848);function i(e){let{children:r,hidden:s,className:i}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,n.A)(t.tabItem,i),hidden:s,children:r})}},18228:(e,r,s)=>{s.d(r,{A:()=>w});var n=s(56347),t=s(23104),l=s(96540),i=s(205),c=s(57485),d=s(31682),a=s(89466);function o(e){return function(e){return l.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,l.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:r,label:s,attributes:n,default:t}}=e;return{value:r,label:s,attributes:n,default:t}}))}function h(e){const{values:r,children:s}=e;return(0,l.useMemo)((()=>{const e=r??o(s);return function(e){const r=(0,d.X)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,s])}function x(e){let{value:r,tabValues:s}=e;return s.some((e=>e.value===r))}function u(e){let{queryString:r=!1,groupId:s}=e;const t=(0,n.W6)(),i=function(e){let{queryString:r=!1,groupId:s}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!s)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return s??null}({queryString:r,groupId:s});return[(0,c.aZ)(i),(0,l.useCallback)((e=>{if(!i)return;const r=new URLSearchParams(t.location.search);r.set(i,e),t.replace({...t.location,search:r.toString()})}),[i,t])]}function p(e){const{defaultValue:r,queryString:s=!1,groupId:n}=e,t=h(e),[c,d]=(0,l.useState)((()=>function(e){let{defaultValue:r,tabValues:s}=e;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!x({value:r,tabValues:s}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${s.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const n=s.find((e=>e.default))??s[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:r,tabValues:t}))),[o,p]=u({queryString:s,groupId:n}),[j,m]=function(e){let{groupId:r}=e;const s=function(e){return e?`docusaurus.tab.${e}`:null}(r),[n,t]=(0,a.Dv)(s);return[n,(0,l.useCallback)((e=>{s&&t.set(e)}),[s,t])]}({groupId:n}),g=(()=>{const e=o??j;return x({value:e,tabValues:t})?e:null})();(0,i.A)((()=>{g&&d(g)}),[g]);return{selectedValue:c,selectValue:(0,l.useCallback)((e=>{if(!x({value:e,tabValues:t}))throw new Error(`Can't select invalid tab value=${e}`);d(e),p(e),m(e)}),[p,m,t]),tabValues:t}}var j=s(92303),m=s(34164);const g={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};var f=s(74848);function b(e){let{className:r,block:s,selectedValue:l,selectValue:i,tabValues:c}=e;const d=[],{blockElementScrollPositionUntilNextRender:a}=(0,t.a_)(),{pathname:o}=(0,n.zy)(),h=e=>{const r=e.currentTarget,s=d.indexOf(r),n=c[s].value;n!==l&&(a(r),i(n))},x=e=>{let r=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{const s=d.indexOf(e.currentTarget)+1;r=d[s]??d[0];break}case"ArrowLeft":{const s=d.indexOf(e.currentTarget)-1;r=d[s]??d[d.length-1];break}}r?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,m.A)("_group-tab list-none -ml-7 my-6 overflow-auto"),children:c.map((e=>{let{value:r,label:s,attributes:n}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:l===r?0:-1,"aria-selected":l===r,ref:e=>d.push(e),onKeyDown:x,onClick:h,...n,className:(0,m.A)("font-bold tracking-widest w-fit px-3 inline-flex py-1 uppercase border-b text-lg cursor-pointer",g.tabItem,n?.className,{"border-b-2 pointer-events-none":l===r,"border-b-2 text-[#669dcb] border-[#669dcb]":l===r&&o.startsWith("/workspace"),"border-b-2 text-[#FB923C] border-[#FB923C]":l===r&&o.startsWith("/sdk"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":l!==r&&o.startsWith("/sdk"),"border-b-2 text-[#FB923C] border-[#FB923C]":l===r&&o.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":l!==r&&o.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#abd2f1] hover:border-[#abd2f1]":l!==r&&o.startsWith("/workspace")}),children:s??r},r)}))})}function v(e){let{lazy:r,children:s,selectedValue:n}=e;if(s=Array.isArray(s)?s:[s],r){const e=s.find((e=>e.props.value===n));return e?(0,l.cloneElement)(e,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:s.map(((e,r)=>(0,l.cloneElement)(e,{key:r,hidden:e.props.value!==n})))})}function y(e){const r=p(e);return(0,f.jsxs)("div",{className:(0,m.A)("tabs-container",g.tabList),children:[(0,f.jsx)(b,{...e,...r}),(0,f.jsx)(v,{...e,...r})]})}function w(e){const r=(0,j.A)();return(0,f.jsx)(y,{...e},String(r))}},28453:(e,r,s)=>{s.d(r,{R:()=>i,x:()=>c});var n=s(96540);const t={},l=n.createContext(t);function i(e){const r=n.useContext(l);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),n.createElement(l.Provider,{value:r},e.children)}}}]);