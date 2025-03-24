"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[62279],{59647:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>h,contentTitle:()=>c,default:()=>j,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var n=r(74848),s=r(28453),a=r(94331),l=r(18228),d=r(19365);const i={title:"losers",description:"Learn how to get the top ETF losers using the OBB ETF Discovery API endpoint.  Explore the available parameters and the returned data, including symbols, names,  prices, percentage changes, and trading volumes.",keywords:["ETF losers","top ETF losers","ETFLosers","sort order","data entries","provider","warnings","chart","metadata","symbol","name","last price","percent change","net change","trading volume","date","bluegrass channel","country","mantissa","type","formatted price","formatted volume","formatted price change","formatted percent change","source url"]},c=void 0,o={id:"platform/reference/etf/discovery/losers",title:"losers",description:"Learn how to get the top ETF losers using the OBB ETF Discovery API endpoint.  Explore the available parameters and the returned data, including symbols, names,  prices, percentage changes, and trading volumes.",source:"@site/content/platform/reference/etf/discovery/losers.md",sourceDirName:"platform/reference/etf/discovery",slug:"/platform/reference/etf/discovery/losers",permalink:"/platform/reference/etf/discovery/losers",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/platform/reference/etf/discovery/losers.md",tags:[],version:"current",frontMatter:{title:"losers",description:"Learn how to get the top ETF losers using the OBB ETF Discovery API endpoint.  Explore the available parameters and the returned data, including symbols, names,  prices, percentage changes, and trading volumes.",keywords:["ETF losers","top ETF losers","ETFLosers","sort order","data entries","provider","warnings","chart","metadata","symbol","name","last price","percent change","net change","trading volume","date","bluegrass channel","country","mantissa","type","formatted price","formatted volume","formatted price change","formatted percent change","source url"]},sidebar:"tutorialSidebar",previous:{title:"gainers",permalink:"/platform/reference/etf/discovery/gainers"},next:{title:"countries",permalink:"/platform/reference/etf/countries"}},h={},u=[{value:"Examples",id:"examples",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Data",id:"data",level:2}];function x(e){const t={code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.A,{title:"etf/discovery/losers - Reference | OpenBB Platform Docs"}),"\n","\n",(0,n.jsx)(t.p,{children:"Get the top ETF losers."}),"\n",(0,n.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"from openbb import obb\n# Get the top ETF losers.\nobb.etf.discovery.losers(provider='wsj')\n"})}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(l.A,{children:[(0,n.jsx)(d.A,{value:"standard",label:"standard",children:(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Default"}),(0,n.jsx)(t.th,{children:"Optional"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"sort"}),(0,n.jsx)(t.td,{children:"Literal['asc', 'desc']"}),(0,n.jsx)(t.td,{children:"Sort order. Possible values: 'asc', 'desc'. Default: 'desc'."}),(0,n.jsx)(t.td,{children:"desc"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"limit"}),(0,n.jsx)(t.td,{children:"int"}),(0,n.jsx)(t.td,{children:"The number of data entries to return."}),(0,n.jsx)(t.td,{children:"10"}),(0,n.jsx)(t.td,{children:"True"})]})]})]})}),(0,n.jsx)(d.A,{value:"wsj",label:"wsj",children:(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Default"}),(0,n.jsx)(t.th,{children:"Optional"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"sort"}),(0,n.jsx)(t.td,{children:"Literal['asc', 'desc']"}),(0,n.jsx)(t.td,{children:"Sort order. Possible values: 'asc', 'desc'. Default: 'desc'."}),(0,n.jsx)(t.td,{children:"desc"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"limit"}),(0,n.jsx)(t.td,{children:"int"}),(0,n.jsx)(t.td,{children:"The number of data entries to return."}),(0,n.jsx)(t.td,{children:"10"}),(0,n.jsx)(t.td,{children:"True"})]})]})]})})]}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",metastring:"wordwrap",children:"OBBject\n    results : List[ETFLosers]\n        Serializable results.\n\n    provider : Optional[Literal['wsj']]\n        Provider name.\n\n    warnings : Optional[List[Warning_]]\n        List of warnings.\n\n    chart : Optional[Chart]\n        Chart object.\n\n    extra : Dict[str, Any]\n        Extra info.\n"})}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"data",children:"Data"}),"\n",(0,n.jsxs)(l.A,{children:[(0,n.jsx)(d.A,{value:"standard",label:"standard",children:(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"symbol"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Symbol representing the entity requested in the data."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"name"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Name of the entity."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"last_price"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Last price."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"percent_change"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Percent change."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"net_change"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Net change."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"volume"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"The trading volume."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"date"}),(0,n.jsx)(t.td,{children:"Union[date, str]"}),(0,n.jsx)(t.td,{children:"The date of the data."})]})]})]})}),(0,n.jsx)(d.A,{value:"wsj",label:"wsj",children:(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"symbol"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Symbol representing the entity requested in the data."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"name"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Name of the entity."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"last_price"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Last price."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"percent_change"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Percent change."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"net_change"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Net change."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"volume"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"The trading volume."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"date"}),(0,n.jsx)(t.td,{children:"Union[date, str]"}),(0,n.jsx)(t.td,{children:"The date of the data."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"bluegrass_channel"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Bluegrass channel."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"country"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Country of the entity."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"mantissa"}),(0,n.jsx)(t.td,{children:"int"}),(0,n.jsx)(t.td,{children:"Mantissa."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"type"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Type of the entity."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"formatted_price"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Formatted price."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"formatted_volume"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Formatted volume."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"formatted_price_change"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Formatted price change."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"formatted_percent_change"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Formatted percent change."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"url"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"The source url."})]})]})]})})]})]})}function j(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(x,{...e})}):x(e)}},19365:(e,t,r)=>{r.d(t,{A:()=>l});r(96540);var n=r(34164);const s={tabItem:"tabItem_Ymn6"};var a=r(74848);function l(e){let{children:t,hidden:r,className:l}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,n.A)(s.tabItem,l),hidden:r,children:t})}},94331:(e,t,r)=>{r.d(t,{A:()=>a});r(96540);var n=r(5260),s=r(74848);function a(e){let{title:t}=e;return(0,s.jsx)(n.A,{children:(0,s.jsx)("title",{children:t})})}},18228:(e,t,r)=>{r.d(t,{A:()=>T});var n=r(56347),s=r(23104),a=r(96540),l=r(205),d=r(57485),i=r(31682),c=r(89466);function o(e){return function(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:s}}=e;return{value:t,label:r,attributes:n,default:s}}))}function h(e){const{values:t,children:r}=e;return(0,a.useMemo)((()=>{const e=t??o(r);return function(e){const t=(0,i.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function u(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function x(e){let{queryString:t=!1,groupId:r}=e;const s=(0,n.W6)(),l=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,d.aZ)(l),(0,a.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(s.location.search);t.set(l,e),s.replace({...s.location,search:t.toString()})}),[l,s])]}function j(e){const{defaultValue:t,queryString:r=!1,groupId:n}=e,s=h(e),[d,i]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!u({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:s}))),[o,j]=x({queryString:r,groupId:n}),[p,m]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,s]=(0,c.Dv)(r);return[n,(0,a.useCallback)((e=>{r&&s.set(e)}),[r,s])]}({groupId:n}),f=(()=>{const e=o??p;return u({value:e,tabValues:s})?e:null})();(0,l.A)((()=>{f&&i(f)}),[f]);return{selectedValue:d,selectValue:(0,a.useCallback)((e=>{if(!u({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);i(e),j(e),m(e)}),[j,m,s]),tabValues:s}}var p=r(92303),m=r(34164);const f={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};var b=r(74848);function v(e){let{className:t,block:r,selectedValue:a,selectValue:l,tabValues:d}=e;const i=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.a_)(),{pathname:o}=(0,n.zy)(),h=e=>{const t=e.currentTarget,r=i.indexOf(t),n=d[r].value;n!==a&&(c(t),l(n))},u=e=>{let t=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{const r=i.indexOf(e.currentTarget)+1;t=i[r]??i[0];break}case"ArrowLeft":{const r=i.indexOf(e.currentTarget)-1;t=i[r]??i[i.length-1];break}}t?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,m.A)("_group-tab list-none -ml-7 my-6 overflow-auto"),children:d.map((e=>{let{value:t,label:r,attributes:n}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:e=>i.push(e),onKeyDown:u,onClick:h,...n,className:(0,m.A)("font-bold tracking-widest w-fit px-3 inline-flex py-1 uppercase border-b text-lg cursor-pointer",f.tabItem,n?.className,{"border-b-2 pointer-events-none":a===t,"border-b-2 text-[#669dcb] border-[#669dcb]":a===t&&o.startsWith("/workspace"),"border-b-2 text-[#FB923C] border-[#FB923C]":a===t&&o.startsWith("/sdk"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":a!==t&&o.startsWith("/sdk"),"border-b-2 text-[#FB923C] border-[#FB923C]":a===t&&o.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":a!==t&&o.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#abd2f1] hover:border-[#abd2f1]":a!==t&&o.startsWith("/workspace")}),children:r??t},t)}))})}function g(e){let{lazy:t,children:r,selectedValue:n}=e;if(r=Array.isArray(r)?r:[r],t){const e=r.find((e=>e.props.value===n));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:r.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==n})))})}function y(e){const t=j(e);return(0,b.jsxs)("div",{className:(0,m.A)("tabs-container",f.tabList),children:[(0,b.jsx)(v,{...e,...t}),(0,b.jsx)(g,{...e,...t})]})}function T(e){const t=(0,p.A)();return(0,b.jsx)(y,{...e},String(t))}},28453:(e,t,r)=>{r.d(t,{R:()=>l,x:()=>d});var n=r(96540);const s={},a=n.createContext(s);function l(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);