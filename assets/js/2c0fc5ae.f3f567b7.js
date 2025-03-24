"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3146],{43866:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>h,contentTitle:()=>d,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var n=t(74848),s=t(28453),a=t(94331),c=t(18228),i=t(19365);const l={title:"search",description:"Learn how to search for available currency pairs using the `obb.currency.search`  function, and retrieve a list of results, including provider name, warnings, chart,  and metadata. Explore the various parameters such as provider, symbol, date, search  terms, active tickers, order data, sort field, and limit. Dive into the details  of the returned data, including name, symbol, currency, stock exchange, exchange  short name, code, base currency, quote currency, market, locale, currency symbol,  currency name, base currency symbol, base currency name, last updated timestamp  in UTC, and delisted timestamp in UTC.",keywords:["currency search","available currency pairs","obb.currency.search","provider","symbol","date","search terms","active tickers","order data","sort field","limit","results","warnings","chart","metadata","name","symbol","currency","stock exchange","exchange short name","code","base currency","quote currency","market","locale","currency symbol","currency name","base currency symbol","base currency name","last updated utc","delisted utc"]},d=void 0,o={id:"platform/reference/currency/search",title:"search",description:"Learn how to search for available currency pairs using the `obb.currency.search`  function, and retrieve a list of results, including provider name, warnings, chart,  and metadata. Explore the various parameters such as provider, symbol, date, search  terms, active tickers, order data, sort field, and limit. Dive into the details  of the returned data, including name, symbol, currency, stock exchange, exchange  short name, code, base currency, quote currency, market, locale, currency symbol,  currency name, base currency symbol, base currency name, last updated timestamp  in UTC, and delisted timestamp in UTC.",source:"@site/content/platform/reference/currency/search.md",sourceDirName:"platform/reference/currency",slug:"/platform/reference/currency/search",permalink:"/platform/reference/currency/search",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/platform/reference/currency/search.md",tags:[],version:"current",frontMatter:{title:"search",description:"Learn how to search for available currency pairs using the `obb.currency.search`  function, and retrieve a list of results, including provider name, warnings, chart,  and metadata. Explore the various parameters such as provider, symbol, date, search  terms, active tickers, order data, sort field, and limit. Dive into the details  of the returned data, including name, symbol, currency, stock exchange, exchange  short name, code, base currency, quote currency, market, locale, currency symbol,  currency name, base currency symbol, base currency name, last updated timestamp  in UTC, and delisted timestamp in UTC.",keywords:["currency search","available currency pairs","obb.currency.search","provider","symbol","date","search terms","active tickers","order data","sort field","limit","results","warnings","chart","metadata","name","symbol","currency","stock exchange","exchange short name","code","base currency","quote currency","market","locale","currency symbol","currency name","base currency symbol","base currency name","last updated utc","delisted utc"]},sidebar:"tutorialSidebar",previous:{title:"reference_rates",permalink:"/platform/reference/currency/reference_rates"},next:{title:"snapshots",permalink:"/platform/reference/currency/snapshots"}},h={},u=[{value:"Examples",id:"examples",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Data",id:"data",level:2}];function x(e){const r={code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.A,{title:"currency/search - Reference | OpenBB Platform Docs"}),"\n","\n",(0,n.jsx)(r.p,{children:"Currency Search."}),"\n",(0,n.jsx)(r.p,{children:"Search available currency pairs.\nCurrency pairs are the national currencies from two countries coupled for trading on\nthe foreign exchange (FX) marketplace.\nBoth currencies will have exchange rates on which the trade will have its position basis.\nAll trading within the forex market, whether selling, buying, or trading, will take place through currency pairs.\n(ref: Investopedia)\nMajor currency pairs include pairs such as EUR/USD, USD/JPY, GBP/USD, etc."}),"\n",(0,n.jsx)(r.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:"from openbb import obb\nobb.currency.search(provider='fmp')\n# Search for 'EUR' currency pair using 'intrinio' as provider.\nobb.currency.search(provider='intrinio', query='EUR')\n# Search for terms  using 'polygon' as provider.\nobb.currency.search(provider='polygon', query='EUR')\n"})}),"\n",(0,n.jsx)(r.hr,{}),"\n",(0,n.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(c.A,{children:[(0,n.jsx)(i.A,{value:"standard",label:"standard",children:(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Name"}),(0,n.jsx)(r.th,{children:"Type"}),(0,n.jsx)(r.th,{children:"Description"}),(0,n.jsx)(r.th,{children:"Default"}),(0,n.jsx)(r.th,{children:"Optional"})]})}),(0,n.jsx)(r.tbody,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"query"}),(0,n.jsx)(r.td,{children:"str"}),(0,n.jsx)(r.td,{children:"Query to search for currency pairs."}),(0,n.jsx)(r.td,{children:"None"}),(0,n.jsx)(r.td,{children:"True"})]})})]})}),(0,n.jsx)(i.A,{value:"fmp",label:"fmp",children:(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Name"}),(0,n.jsx)(r.th,{children:"Type"}),(0,n.jsx)(r.th,{children:"Description"}),(0,n.jsx)(r.th,{children:"Default"}),(0,n.jsx)(r.th,{children:"Optional"})]})}),(0,n.jsx)(r.tbody,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"query"}),(0,n.jsx)(r.td,{children:"str"}),(0,n.jsx)(r.td,{children:"Query to search for currency pairs."}),(0,n.jsx)(r.td,{children:"None"}),(0,n.jsx)(r.td,{children:"True"})]})})]})}),(0,n.jsx)(i.A,{value:"intrinio",label:"intrinio",children:(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Name"}),(0,n.jsx)(r.th,{children:"Type"}),(0,n.jsx)(r.th,{children:"Description"}),(0,n.jsx)(r.th,{children:"Default"}),(0,n.jsx)(r.th,{children:"Optional"})]})}),(0,n.jsx)(r.tbody,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"query"}),(0,n.jsx)(r.td,{children:"str"}),(0,n.jsx)(r.td,{children:"Query to search for currency pairs."}),(0,n.jsx)(r.td,{children:"None"}),(0,n.jsx)(r.td,{children:"True"})]})})]})}),(0,n.jsx)(i.A,{value:"polygon",label:"polygon",children:(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Name"}),(0,n.jsx)(r.th,{children:"Type"}),(0,n.jsx)(r.th,{children:"Description"}),(0,n.jsx)(r.th,{children:"Default"}),(0,n.jsx)(r.th,{children:"Optional"})]})}),(0,n.jsx)(r.tbody,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"query"}),(0,n.jsx)(r.td,{children:"str"}),(0,n.jsx)(r.td,{children:"Query to search for currency pairs."}),(0,n.jsx)(r.td,{children:"None"}),(0,n.jsx)(r.td,{children:"True"})]})})]})})]}),"\n",(0,n.jsx)(r.hr,{}),"\n",(0,n.jsx)(r.h2,{id:"returns",children:"Returns"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",metastring:"wordwrap",children:"OBBject\n    results : List[CurrencyPairs]\n        Serializable results.\n\n    provider : Optional[Literal['fmp', 'intrinio', 'polygon']]\n        Provider name.\n\n    warnings : Optional[List[Warning_]]\n        List of warnings.\n\n    chart : Optional[Chart]\n        Chart object.\n\n    extra : Dict[str, Any]\n        Extra info.\n"})}),"\n",(0,n.jsx)(r.hr,{}),"\n",(0,n.jsx)(r.h2,{id:"data",children:"Data"}),"\n",(0,n.jsxs)(c.A,{children:[(0,n.jsx)(i.A,{value:"standard",label:"standard",children:(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Name"}),(0,n.jsx)(r.th,{children:"Type"}),(0,n.jsx)(r.th,{children:"Description"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"symbol"}),(0,n.jsx)(r.td,{children:"str"}),(0,n.jsx)(r.td,{children:"Symbol representing the entity requested in the data."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"name"}),(0,n.jsx)(r.td,{children:"str"}),(0,n.jsx)(r.td,{children:"Name of the currency pair."})]})]})]})}),(0,n.jsx)(i.A,{value:"fmp",label:"fmp",children:(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Name"}),(0,n.jsx)(r.th,{children:"Type"}),(0,n.jsx)(r.th,{children:"Description"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"symbol"}),(0,n.jsx)(r.td,{children:"str"}),(0,n.jsx)(r.td,{children:"Symbol of the currency pair."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"name"}),(0,n.jsx)(r.td,{children:"str"}),(0,n.jsx)(r.td,{children:"Name of the currency pair."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"currency"}),(0,n.jsx)(r.td,{children:"str"}),(0,n.jsx)(r.td,{children:"Base currency of the currency pair."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"stock_exchange"}),(0,n.jsx)(r.td,{children:"str"}),(0,n.jsx)(r.td,{children:"Stock exchange of the currency pair."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"exchange_short_name"}),(0,n.jsx)(r.td,{children:"str"}),(0,n.jsx)(r.td,{children:"Short name of the stock exchange of the currency pair."})]})]})]})}),(0,n.jsx)(i.A,{value:"intrinio",label:"intrinio",children:(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Name"}),(0,n.jsx)(r.th,{children:"Type"}),(0,n.jsx)(r.th,{children:"Description"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"symbol"}),(0,n.jsx)(r.td,{children:"str"}),(0,n.jsx)(r.td,{children:"Symbol representing the entity requested in the data."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"name"}),(0,n.jsx)(r.td,{children:"str"}),(0,n.jsx)(r.td,{children:"Name of the currency pair."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"base_currency"}),(0,n.jsx)(r.td,{children:"str"}),(0,n.jsx)(r.td,{children:"ISO 4217 currency code of the base currency."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"quote_currency"}),(0,n.jsx)(r.td,{children:"str"}),(0,n.jsx)(r.td,{children:"ISO 4217 currency code of the quote currency."})]})]})]})}),(0,n.jsx)(i.A,{value:"polygon",label:"polygon",children:(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Name"}),(0,n.jsx)(r.th,{children:"Type"}),(0,n.jsx)(r.th,{children:"Description"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"symbol"}),(0,n.jsx)(r.td,{children:"str"}),(0,n.jsx)(r.td,{children:"Symbol representing the entity requested in the data."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"name"}),(0,n.jsx)(r.td,{children:"str"}),(0,n.jsx)(r.td,{children:"Name of the currency pair."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"currency_symbol"}),(0,n.jsx)(r.td,{children:"str"}),(0,n.jsx)(r.td,{children:"The symbol of the quote currency."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"base_currency_symbol"}),(0,n.jsx)(r.td,{children:"str"}),(0,n.jsx)(r.td,{children:"The symbol of the base currency."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"base_currency_name"}),(0,n.jsx)(r.td,{children:"str"}),(0,n.jsx)(r.td,{children:"Name of the base currency."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"market"}),(0,n.jsx)(r.td,{children:"str"}),(0,n.jsx)(r.td,{children:"Name of the trading market. Always 'fx'."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"locale"}),(0,n.jsx)(r.td,{children:"str"}),(0,n.jsx)(r.td,{children:"Locale of the currency pair."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"last_updated"}),(0,n.jsx)(r.td,{children:"date"}),(0,n.jsx)(r.td,{children:"The date the reference data was last updated."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"delisted"}),(0,n.jsx)(r.td,{children:"date"}),(0,n.jsx)(r.td,{children:"The date the item was delisted."})]})]})]})})]})]})}function m(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(x,{...e})}):x(e)}},19365:(e,r,t)=>{t.d(r,{A:()=>c});t(96540);var n=t(34164);const s={tabItem:"tabItem_Ymn6"};var a=t(74848);function c(e){let{children:r,hidden:t,className:c}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,n.A)(s.tabItem,c),hidden:t,children:r})}},94331:(e,r,t)=>{t.d(r,{A:()=>a});t(96540);var n=t(5260),s=t(74848);function a(e){let{title:r}=e;return(0,s.jsx)(n.A,{children:(0,s.jsx)("title",{children:r})})}},18228:(e,r,t)=>{t.d(r,{A:()=>w});var n=t(56347),s=t(23104),a=t(96540),c=t(205),i=t(57485),l=t(31682),d=t(89466);function o(e){return function(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:r,label:t,attributes:n,default:s}}=e;return{value:r,label:t,attributes:n,default:s}}))}function h(e){const{values:r,children:t}=e;return(0,a.useMemo)((()=>{const e=r??o(t);return function(e){const r=(0,l.X)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,t])}function u(e){let{value:r,tabValues:t}=e;return t.some((e=>e.value===r))}function x(e){let{queryString:r=!1,groupId:t}=e;const s=(0,n.W6)(),c=function(e){let{queryString:r=!1,groupId:t}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:r,groupId:t});return[(0,i.aZ)(c),(0,a.useCallback)((e=>{if(!c)return;const r=new URLSearchParams(s.location.search);r.set(c,e),s.replace({...s.location,search:r.toString()})}),[c,s])]}function m(e){const{defaultValue:r,queryString:t=!1,groupId:n}=e,s=h(e),[i,l]=(0,a.useState)((()=>function(e){let{defaultValue:r,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!u({value:r,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const n=t.find((e=>e.default))??t[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:r,tabValues:s}))),[o,m]=x({queryString:t,groupId:n}),[p,j]=function(e){let{groupId:r}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(r),[n,s]=(0,d.Dv)(t);return[n,(0,a.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:n}),y=(()=>{const e=o??p;return u({value:e,tabValues:s})?e:null})();(0,c.A)((()=>{y&&l(y)}),[y]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!u({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),m(e),j(e)}),[m,j,s]),tabValues:s}}var p=t(92303),j=t(34164);const y={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};var b=t(74848);function f(e){let{className:r,block:t,selectedValue:a,selectValue:c,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:d}=(0,s.a_)(),{pathname:o}=(0,n.zy)(),h=e=>{const r=e.currentTarget,t=l.indexOf(r),n=i[t].value;n!==a&&(d(r),c(n))},u=e=>{let r=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;r=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;r=l[t]??l[l.length-1];break}}r?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,j.A)("_group-tab list-none -ml-7 my-6 overflow-auto"),children:i.map((e=>{let{value:r,label:t,attributes:n}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:a===r?0:-1,"aria-selected":a===r,ref:e=>l.push(e),onKeyDown:u,onClick:h,...n,className:(0,j.A)("font-bold tracking-widest w-fit px-3 inline-flex py-1 uppercase border-b text-lg cursor-pointer",y.tabItem,n?.className,{"border-b-2 pointer-events-none":a===r,"border-b-2 text-[#669dcb] border-[#669dcb]":a===r&&o.startsWith("/workspace"),"border-b-2 text-[#FB923C] border-[#FB923C]":a===r&&o.startsWith("/sdk"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":a!==r&&o.startsWith("/sdk"),"border-b-2 text-[#FB923C] border-[#FB923C]":a===r&&o.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":a!==r&&o.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#abd2f1] hover:border-[#abd2f1]":a!==r&&o.startsWith("/workspace")}),children:t??r},r)}))})}function v(e){let{lazy:r,children:t,selectedValue:n}=e;if(t=Array.isArray(t)?t:[t],r){const e=t.find((e=>e.props.value===n));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:t.map(((e,r)=>(0,a.cloneElement)(e,{key:r,hidden:e.props.value!==n})))})}function g(e){const r=m(e);return(0,b.jsxs)("div",{className:(0,j.A)("tabs-container",y.tabList),children:[(0,b.jsx)(f,{...e,...r}),(0,b.jsx)(v,{...e,...r})]})}function w(e){const r=(0,p.A)();return(0,b.jsx)(g,{...e},String(r))}},28453:(e,r,t)=>{t.d(r,{R:()=>c,x:()=>i});var n=t(96540);const s={},a=n.createContext(s);function c(e){const r=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),n.createElement(a.Provider,{value:r},e.children)}}}]);