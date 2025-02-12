"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[79517],{15968:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>a,default:()=>x,frontMatter:()=>d,metadata:()=>c,toc:()=>h});var n=r(74848),s=r(28453),l=r(18228),i=r(19365);const d={title:"Futures Info",description:"Get current trading statistics by futures contract symbol"},a=void 0,c={id:"platform/data_models/FuturesInfo",title:"Futures Info",description:"Get current trading statistics by futures contract symbol",source:"@site/content/platform/data_models/FuturesInfo.md",sourceDirName:"platform/data_models",slug:"/platform/data_models/FuturesInfo",permalink:"/platform/data_models/FuturesInfo",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/platform/data_models/FuturesInfo.md",tags:[],version:"current",frontMatter:{title:"Futures Info",description:"Get current trading statistics by futures contract symbol"},sidebar:"tutorialSidebar",previous:{title:"Futures Historical",permalink:"/platform/data_models/FuturesHistorical"},next:{title:"Futures Instruments",permalink:"/platform/data_models/FuturesInstruments"}},o={},h=[{value:"Implementation details",id:"implementation-details",level:2},{value:"Class names",id:"class-names",level:3},{value:"Import Statement",id:"import-statement",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Data",id:"data",level:2}];function u(e){const t={code:"code",h2:"h2",h3:"h3",hr:"hr",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"implementation-details",children:"Implementation details"}),"\n",(0,n.jsx)(t.h3,{id:"class-names",children:"Class names"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Model name"}),(0,n.jsx)(t.th,{children:"Parameters class"}),(0,n.jsx)(t.th,{children:"Data class"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"FuturesInfo"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"FuturesInfoQueryParams"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"FuturesInfoData"})})]})})]}),"\n",(0,n.jsx)(t.h3,{id:"import-statement",children:"Import Statement"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"from openbb_core.provider.standard_models.futures_info import (\nFuturesInfoData,\nFuturesInfoQueryParams,\n)\n"})}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(l.A,{children:[(0,n.jsx)(i.A,{value:"standard",label:"standard",children:(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Default"}),(0,n.jsx)(t.th,{children:"Optional"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:";"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{})]})})]})}),(0,n.jsx)(i.A,{value:"deribit",label:"deribit",children:(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Default"}),(0,n.jsx)(t.th,{children:"Optional"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"symbol"}),(0,n.jsx)(t.td,{children:"Union[str, List[str]]"}),(0,n.jsxs)(t.td,{children:["Symbol to get data for. Perpetual contracts can be referenced by their currency pair - i.e, SOLUSDC - or by their official Deribit symbol - i.e, SOL_USDC-PERPETUAL For a list of currently available instruments, use ",(0,n.jsx)(t.code,{children:"derivatives.futures.instruments()"})," Multiple items allowed for provider(s): deribit."]}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"False"})]})})]})})]}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"data",children:"Data"}),"\n",(0,n.jsxs)(l.A,{children:[(0,n.jsx)(i.A,{value:"standard",label:"standard",children:(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"symbol"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Symbol representing the entity requested in the data."})]})})]})}),(0,n.jsx)(i.A,{value:"deribit",label:"deribit",children:(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"symbol"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Symbol representing the entity requested in the data."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"state"}),(0,n.jsx)(t.td,{children:"Literal['open', 'closed']"}),(0,n.jsx)(t.td,{children:"The state of the order book. Possible values are open and closed."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"open_interest"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"The total amount of outstanding contracts in the corresponding amount units."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"index_price"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Current index (reference) price"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"best_ask_amount"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"It represents the requested order size of all best asks"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"best_ask_price"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"The current best ask price, null if there aren't any asks"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"best_bid_price"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"The current best bid price, null if there aren't any bids"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"best_bid_amount"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"It represents the requested order size of all best bids"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"last_price"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"The price for the last trade"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"high"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Highest price during 24h"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"low"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Lowest price during 24h"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"change_percent"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"24-hour price change expressed as a percentage, null if there weren't any trades"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"volume"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Volume during last 24h in base currency"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"volume_usd"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Volume in USD"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"mark_price"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"The mark price for the instrument"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"settlement_price"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"The settlement price for the instrument. Only when state = open"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"delivery_price"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"The settlement price for the instrument. Only when state = closed."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"estimated_delivery_price"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Estimated delivery price for the market."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"current_funding"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Current funding (perpetual only)"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"funding_8h"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Funding 8h (perpetual only)"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"interest_value"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Value used to calculate realized_funding in positions (perpetual only)"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"max_price"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"The maximum price for the future. Any buy orders submitted higher than this price, will be clamped to this maximum."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"min_price"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"The minimum price for the future. Any sell orders submitted lower than this price will be clamped to this minimum."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"timestamp"}),(0,n.jsx)(t.td,{children:"datetime"}),(0,n.jsx)(t.td,{children:"The timestamp of the data."})]})]})]})})]})]})}function x(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},19365:(e,t,r)=>{r.d(t,{A:()=>i});r(96540);var n=r(34164);const s={tabItem:"tabItem_Ymn6"};var l=r(74848);function i(e){let{children:t,hidden:r,className:i}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,n.A)(s.tabItem,i),hidden:r,children:t})}},18228:(e,t,r)=>{r.d(t,{A:()=>_});var n=r(96540),s=r(34164),l=r(23104),i=r(56347),d=r(205),a=r(57485),c=r(31682),o=r(89466);function h(e){return function(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:s}}=e;return{value:t,label:r,attributes:n,default:s}}))}function u(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??h(r);return function(e){const t=(0,c.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function x(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function j(e){let{queryString:t=!1,groupId:r}=e;const s=(0,i.W6)(),l=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,a.aZ)(l),(0,n.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(s.location.search);t.set(l,e),s.replace({...s.location,search:t.toString()})}),[l,s])]}function m(e){const{defaultValue:t,queryString:r=!1,groupId:s}=e,l=u(e),[i,a]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!x({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:l}))),[c,h]=j({queryString:r,groupId:s}),[m,f]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,l]=(0,o.Dv)(r);return[s,(0,n.useCallback)((e=>{r&&l.set(e)}),[r,l])]}({groupId:s}),p=(()=>{const e=c??m;return x({value:e,tabValues:l})?e:null})();(0,d.A)((()=>{p&&a(p)}),[p]);return{selectedValue:i,selectValue:(0,n.useCallback)((e=>{if(!x({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);a(e),h(e),f(e)}),[h,f,l]),tabValues:l}}var f=r(92303);const p={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};var b=r(74848);function y(e){let{className:t,block:r,selectedValue:n,selectValue:d,tabValues:a}=e;const c=[],{blockElementScrollPositionUntilNextRender:o}=(0,l.a_)(),{pathname:h}=(0,i.zy)(),u=e=>{const t=e.currentTarget,r=c.indexOf(t),s=a[r].value;s!==n&&(o(t),d(s))},x=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const r=c.indexOf(e.currentTarget)+1;t=c[r]??c[0];break}case"ArrowLeft":{const r=c.indexOf(e.currentTarget)-1;t=c[r]??c[c.length-1];break}}t?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("_group-tab list-none -ml-7 my-6 overflow-auto"),children:a.map((e=>{let{value:t,label:r,attributes:l}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>c.push(e),onKeyDown:x,onClick:u,...l,className:(0,s.A)("font-bold tracking-widest w-fit px-3 inline-flex py-1 uppercase border-b text-lg cursor-pointer",p.tabItem,l?.className,{"border-b-2 pointer-events-none":n===t,"border-b-2 text-[#669dcb] border-[#669dcb]":n===t&&h.startsWith("/terminal"),"border-b-2 text-[#FB923C] border-[#FB923C]":n===t&&h.startsWith("/sdk"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":n!==t&&h.startsWith("/sdk"),"border-b-2 text-[#FB923C] border-[#FB923C]":n===t&&h.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":n!==t&&h.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#abd2f1] hover:border-[#abd2f1]":n!==t&&h.startsWith("/terminal")}),children:r??t},t)}))})}function v(e){let{lazy:t,children:r,selectedValue:s}=e;if(r=Array.isArray(r)?r:[r],t){const e=r.find((e=>e.props.value===s));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:r.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function g(e){const t=m(e);return(0,b.jsxs)("div",{className:(0,s.A)("tabs-container",p.tabList),children:[(0,b.jsx)(y,{...e,...t}),(0,b.jsx)(v,{...e,...t})]})}function _(e){const t=(0,f.A)();return(0,b.jsx)(g,{...e},String(t))}},28453:(e,t,r)=>{r.d(t,{R:()=>i,x:()=>d});var n=r(96540);const s={},l=n.createContext(s);function i(e){const t=n.useContext(l);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),n.createElement(l.Provider,{value:t},e.children)}}}]);