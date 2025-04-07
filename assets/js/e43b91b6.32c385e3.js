"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[13553],{24539:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>o,contentTitle:()=>i,default:()=>x,frontMatter:()=>d,metadata:()=>a,toc:()=>h});var n=t(74848),s=t(28453),l=t(18228),c=t(19365);const d={title:"ETF Active",description:"Get the most active ETFs"},i=void 0,a={id:"platform/data_models/ETFActive",title:"ETF Active",description:"Get the most active ETFs",source:"@site/content/platform/data_models/ETFActive.md",sourceDirName:"platform/data_models",slug:"/platform/data_models/ETFActive",permalink:"/platform/data_models/ETFActive",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/platform/data_models/ETFActive.md",tags:[],version:"current",frontMatter:{title:"ETF Active",description:"Get the most active ETFs"},sidebar:"tutorialSidebar",previous:{title:"Discovery Filings",permalink:"/platform/data_models/DiscoveryFilings"},next:{title:"ETF Gainers",permalink:"/platform/data_models/ETFGainers"}},o={},h=[{value:"Implementation details",id:"implementation-details",level:2},{value:"Class names",id:"class-names",level:3},{value:"Import Statement",id:"import-statement",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Data",id:"data",level:2}];function u(e){const r={code:"code",em:"em",h2:"h2",h3:"h3",hr:"hr",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.hr,{}),"\n",(0,n.jsx)(r.h2,{id:"implementation-details",children:"Implementation details"}),"\n",(0,n.jsx)(r.h3,{id:"class-names",children:"Class names"}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Model name"}),(0,n.jsx)(r.th,{children:"Parameters class"}),(0,n.jsx)(r.th,{children:"Data class"})]})}),(0,n.jsx)(r.tbody,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"ETFActive"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"ETFActiveQueryParams"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"ETFActiveData"})})]})})]}),"\n",(0,n.jsx)(r.h3,{id:"import-statement",children:"Import Statement"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:"from openbb_core.provider.standard_models. import (\nETFActiveData,\nETFActiveQueryParams,\n)\n"})}),"\n",(0,n.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(l.A,{children:[(0,n.jsxs)(c.A,{value:"standard",label:"standard",children:[(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:(0,n.jsx)(r.code,{children:"sort"})}),": ",(0,n.jsx)(r.code,{children:"Literal['asc', 'desc']"})]}),(0,n.jsx)(r.p,{children:"Sort order. Possible values: 'asc', 'desc'. Default: 'desc'."}),(0,n.jsxs)(r.p,{children:["\u2022 ",(0,n.jsx)(r.em,{children:"Default:"})," ",(0,n.jsx)(r.code,{children:"desc"})]}),(0,n.jsxs)(r.p,{children:["\u2022 ",(0,n.jsx)(r.em,{children:"Optional:"})," ",(0,n.jsx)(r.code,{children:"True"})]}),(0,n.jsx)(r.hr,{}),(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:(0,n.jsx)(r.code,{children:"limit"})}),": ",(0,n.jsx)(r.code,{children:"int"})]}),(0,n.jsx)(r.p,{children:"The number of data entries to return."}),(0,n.jsxs)(r.p,{children:["\u2022 ",(0,n.jsx)(r.em,{children:"Default:"})," ",(0,n.jsx)(r.code,{children:"10"})]}),(0,n.jsxs)(r.p,{children:["\u2022 ",(0,n.jsx)(r.em,{children:"Optional:"})," ",(0,n.jsx)(r.code,{children:"True"})]})]}),(0,n.jsxs)(c.A,{value:"wsj",label:"wsj",children:[(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:(0,n.jsx)(r.code,{children:"sort"})}),": ",(0,n.jsx)(r.code,{children:"Literal['asc', 'desc']"})]}),(0,n.jsx)(r.p,{children:"Sort order. Possible values: 'asc', 'desc'. Default: 'desc'."}),(0,n.jsxs)(r.p,{children:["\u2022 ",(0,n.jsx)(r.em,{children:"Default:"})," ",(0,n.jsx)(r.code,{children:"desc"})]}),(0,n.jsxs)(r.p,{children:["\u2022 ",(0,n.jsx)(r.em,{children:"Optional:"})," ",(0,n.jsx)(r.code,{children:"True"})]}),(0,n.jsx)(r.hr,{}),(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:(0,n.jsx)(r.code,{children:"limit"})}),": ",(0,n.jsx)(r.code,{children:"int"})]}),(0,n.jsx)(r.p,{children:"The number of data entries to return."}),(0,n.jsxs)(r.p,{children:["\u2022 ",(0,n.jsx)(r.em,{children:"Default:"})," ",(0,n.jsx)(r.code,{children:"10"})]}),(0,n.jsxs)(r.p,{children:["\u2022 ",(0,n.jsx)(r.em,{children:"Optional:"})," ",(0,n.jsx)(r.code,{children:"True"})]})]})]}),"\n",(0,n.jsx)(r.h2,{id:"data",children:"Data"}),"\n",(0,n.jsxs)(l.A,{children:[(0,n.jsxs)(c.A,{value:"standard",label:"standard",children:[(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:(0,n.jsx)(r.code,{children:"symbol"})}),": ",(0,n.jsx)(r.code,{children:"str"})]}),(0,n.jsx)(r.p,{children:"Symbol representing the entity requested in the data."}),(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:(0,n.jsx)(r.code,{children:"name"})}),": ",(0,n.jsx)(r.code,{children:"str"})]}),(0,n.jsx)(r.p,{children:"Name of the entity."}),(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:(0,n.jsx)(r.code,{children:"last_price"})}),": ",(0,n.jsx)(r.code,{children:"float"})]}),(0,n.jsx)(r.p,{children:"Last price."}),(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:(0,n.jsx)(r.code,{children:"percent_change"})}),": ",(0,n.jsx)(r.code,{children:"float"})]}),(0,n.jsx)(r.p,{children:"Percent change."}),(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:(0,n.jsx)(r.code,{children:"net_change"})}),": ",(0,n.jsx)(r.code,{children:"float"})]}),(0,n.jsx)(r.p,{children:"Net change."}),(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:(0,n.jsx)(r.code,{children:"volume"})}),": ",(0,n.jsx)(r.code,{children:"float"})]}),(0,n.jsx)(r.p,{children:"The trading volume."}),(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:(0,n.jsx)(r.code,{children:"date"})}),": ",(0,n.jsx)(r.code,{children:"Union[date, str]"})]}),(0,n.jsx)(r.p,{children:"The date of the data."})]}),(0,n.jsxs)(c.A,{value:"wsj",label:"wsj",children:[(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:(0,n.jsx)(r.code,{children:"symbol"})}),": ",(0,n.jsx)(r.code,{children:"str"})]}),(0,n.jsx)(r.p,{children:"Symbol representing the entity requested in the data."}),(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:(0,n.jsx)(r.code,{children:"name"})}),": ",(0,n.jsx)(r.code,{children:"str"})]}),(0,n.jsx)(r.p,{children:"Name of the entity."}),(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:(0,n.jsx)(r.code,{children:"last_price"})}),": ",(0,n.jsx)(r.code,{children:"float"})]}),(0,n.jsx)(r.p,{children:"Last price."}),(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:(0,n.jsx)(r.code,{children:"percent_change"})}),": ",(0,n.jsx)(r.code,{children:"float"})]}),(0,n.jsx)(r.p,{children:"Percent change."}),(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:(0,n.jsx)(r.code,{children:"net_change"})}),": ",(0,n.jsx)(r.code,{children:"float"})]}),(0,n.jsx)(r.p,{children:"Net change."}),(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:(0,n.jsx)(r.code,{children:"volume"})}),": ",(0,n.jsx)(r.code,{children:"float"})]}),(0,n.jsx)(r.p,{children:"The trading volume."}),(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:(0,n.jsx)(r.code,{children:"date"})}),": ",(0,n.jsx)(r.code,{children:"Union[date, str]"})]}),(0,n.jsx)(r.p,{children:"The date of the data."}),(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:(0,n.jsx)(r.code,{children:"country"})}),": ",(0,n.jsx)(r.code,{children:"str"})]}),(0,n.jsx)(r.p,{children:"Country of the entity."}),(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:(0,n.jsx)(r.code,{children:"mantissa"})}),": ",(0,n.jsx)(r.code,{children:"int"})]}),(0,n.jsx)(r.p,{children:"Mantissa."}),(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:(0,n.jsx)(r.code,{children:"type"})}),": ",(0,n.jsx)(r.code,{children:"str"})]}),(0,n.jsx)(r.p,{children:"Type of the entity."}),(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:(0,n.jsx)(r.code,{children:"formatted_price"})}),": ",(0,n.jsx)(r.code,{children:"str"})]}),(0,n.jsx)(r.p,{children:"Formatted price."}),(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:(0,n.jsx)(r.code,{children:"formatted_volume"})}),": ",(0,n.jsx)(r.code,{children:"str"})]}),(0,n.jsx)(r.p,{children:"Formatted volume."}),(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:(0,n.jsx)(r.code,{children:"formatted_price_change"})}),": ",(0,n.jsx)(r.code,{children:"str"})]}),(0,n.jsx)(r.p,{children:"Formatted price change."}),(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:(0,n.jsx)(r.code,{children:"formatted_percent_change"})}),": ",(0,n.jsx)(r.code,{children:"str"})]}),(0,n.jsx)(r.p,{children:"Formatted percent change."}),(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:(0,n.jsx)(r.code,{children:"url"})}),": ",(0,n.jsx)(r.code,{children:"str"})]}),(0,n.jsx)(r.p,{children:"The source url."})]})]})]})}function x(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},19365:(e,r,t)=>{t.d(r,{A:()=>c});t(96540);var n=t(34164);const s={tabItem:"tabItem_Ymn6"};var l=t(74848);function c(e){let{children:r,hidden:t,className:c}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,n.A)(s.tabItem,c),hidden:t,children:r})}},18228:(e,r,t)=>{t.d(r,{A:()=>T});var n=t(56347),s=t(23104),l=t(96540),c=t(205),d=t(57485),i=t(31682),a=t(89466);function o(e){return function(e){return l.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,l.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:r,label:t,attributes:n,default:s}}=e;return{value:r,label:t,attributes:n,default:s}}))}function h(e){const{values:r,children:t}=e;return(0,l.useMemo)((()=>{const e=r??o(t);return function(e){const r=(0,i.X)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,t])}function u(e){let{value:r,tabValues:t}=e;return t.some((e=>e.value===r))}function x(e){let{queryString:r=!1,groupId:t}=e;const s=(0,n.W6)(),c=function(e){let{queryString:r=!1,groupId:t}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:r,groupId:t});return[(0,d.aZ)(c),(0,l.useCallback)((e=>{if(!c)return;const r=new URLSearchParams(s.location.search);r.set(c,e),s.replace({...s.location,search:r.toString()})}),[c,s])]}function j(e){const{defaultValue:r,queryString:t=!1,groupId:n}=e,s=h(e),[d,i]=(0,l.useState)((()=>function(e){let{defaultValue:r,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!u({value:r,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const n=t.find((e=>e.default))??t[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:r,tabValues:s}))),[o,j]=x({queryString:t,groupId:n}),[p,m]=function(e){let{groupId:r}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(r),[n,s]=(0,a.Dv)(t);return[n,(0,l.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:n}),f=(()=>{const e=o??p;return u({value:e,tabValues:s})?e:null})();(0,c.A)((()=>{f&&i(f)}),[f]);return{selectedValue:d,selectValue:(0,l.useCallback)((e=>{if(!u({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);i(e),j(e),m(e)}),[j,m,s]),tabValues:s}}var p=t(92303),m=t(34164);const f={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};var b=t(74848);function v(e){let{className:r,block:t,selectedValue:l,selectValue:c,tabValues:d}=e;const i=[],{blockElementScrollPositionUntilNextRender:a}=(0,s.a_)(),{pathname:o}=(0,n.zy)(),h=e=>{const r=e.currentTarget,t=i.indexOf(r),n=d[t].value;n!==l&&(a(r),c(n))},u=e=>{let r=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{const t=i.indexOf(e.currentTarget)+1;r=i[t]??i[0];break}case"ArrowLeft":{const t=i.indexOf(e.currentTarget)-1;r=i[t]??i[i.length-1];break}}r?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,m.A)("_group-tab list-none -ml-7 my-6 overflow-auto"),children:d.map((e=>{let{value:r,label:t,attributes:n}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:l===r?0:-1,"aria-selected":l===r,ref:e=>i.push(e),onKeyDown:u,onClick:h,...n,className:(0,m.A)("font-bold tracking-widest w-fit px-3 inline-flex py-1 uppercase border-b text-lg cursor-pointer",f.tabItem,n?.className,{"border-b-2 pointer-events-none":l===r,"border-b-2 text-[#669dcb] border-[#669dcb]":l===r&&o.startsWith("/workspace"),"border-b-2 text-[#FB923C] border-[#FB923C]":l===r&&o.startsWith("/sdk"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":l!==r&&o.startsWith("/sdk"),"border-b-2 text-[#FB923C] border-[#FB923C]":l===r&&o.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":l!==r&&o.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#abd2f1] hover:border-[#abd2f1]":l!==r&&o.startsWith("/workspace")}),children:t??r},r)}))})}function g(e){let{lazy:r,children:t,selectedValue:n}=e;if(t=Array.isArray(t)?t:[t],r){const e=t.find((e=>e.props.value===n));return e?(0,l.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:t.map(((e,r)=>(0,l.cloneElement)(e,{key:r,hidden:e.props.value!==n})))})}function y(e){const r=j(e);return(0,b.jsxs)("div",{className:(0,m.A)("tabs-container",f.tabList),children:[(0,b.jsx)(v,{...e,...r}),(0,b.jsx)(g,{...e,...r})]})}function T(e){const r=(0,p.A)();return(0,b.jsx)(y,{...e},String(r))}},28453:(e,r,t)=>{t.d(r,{R:()=>c,x:()=>d});var n=t(96540);const s={},l=n.createContext(s);function c(e){const r=n.useContext(l);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function d(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),n.createElement(l.Provider,{value:r},e.children)}}}]);