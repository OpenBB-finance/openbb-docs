"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[72099],{26149:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>a,default:()=>u,frontMatter:()=>l,metadata:()=>c,toc:()=>h});var n=r(74848),s=r(28453),d=r(18228),i=r(19365);const l={title:"Available Indicators",description:"Get the available economic indicators for a provider"},a=void 0,c={id:"platform/data_models/AvailableIndicators",title:"Available Indicators",description:"Get the available economic indicators for a provider",source:"@site/content/platform/data_models/AvailableIndicators.md",sourceDirName:"platform/data_models",slug:"/platform/data_models/AvailableIndicators",permalink:"/platform/data_models/AvailableIndicators",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/platform/data_models/AvailableIndicators.md",tags:[],version:"current",frontMatter:{title:"Available Indicators",description:"Get the available economic indicators for a provider"},sidebar:"tutorialSidebar",previous:{title:"Analyst Search",permalink:"/platform/data_models/AnalystSearch"},next:{title:"Available Indices",permalink:"/platform/data_models/AvailableIndices"}},o={},h=[{value:"Implementation details",id:"implementation-details",level:2},{value:"Class names",id:"class-names",level:3},{value:"Import Statement",id:"import-statement",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Data",id:"data",level:2}];function x(e){const t={code:"code",h2:"h2",h3:"h3",hr:"hr",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"implementation-details",children:"Implementation details"}),"\n",(0,n.jsx)(t.h3,{id:"class-names",children:"Class names"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Model name"}),(0,n.jsx)(t.th,{children:"Parameters class"}),(0,n.jsx)(t.th,{children:"Data class"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"AvailableIndicators"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"AvailableIndicatorsQueryParams"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"AvailableIndicatorsData"})})]})})]}),"\n",(0,n.jsx)(t.h3,{id:"import-statement",children:"Import Statement"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"from openbb_core.provider.standard_models.available_indicators import (\nAvailableIndicatorsData,\nAvailableIndicatorsQueryParams,\n)\n"})}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(d.A,{children:[(0,n.jsx)(i.A,{value:"standard",label:"standard",children:(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Default"}),(0,n.jsx)(t.th,{children:"Optional"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:";"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{})]})})]})}),(0,n.jsx)(i.A,{value:"econdb",label:"econdb",children:(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Default"}),(0,n.jsx)(t.th,{children:"Optional"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"use_cache"}),(0,n.jsx)(t.td,{children:"bool"}),(0,n.jsx)(t.td,{children:"Whether to use cache or not, by default is True The cache of indicator symbols will persist for one week."}),(0,n.jsx)(t.td,{children:"True"}),(0,n.jsx)(t.td,{children:"True"})]})})]})}),(0,n.jsx)(i.A,{value:"imf",label:"imf",children:(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Default"}),(0,n.jsx)(t.th,{children:"Optional"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"query"}),(0,n.jsx)(t.td,{children:"Union[str, List[str]]"}),(0,n.jsx)(t.td,{children:"The query string to search through the available indicators. Use semicolons to separate multiple terms. Multiple items allowed for provider(s): imf."}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]})})]})})]}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"data",children:"Data"}),"\n",(0,n.jsxs)(d.A,{children:[(0,n.jsx)(i.A,{value:"standard",label:"standard",children:(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"symbol_root"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"The root symbol representing the indicator."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"symbol"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Symbol representing the entity requested in the data. The root symbol with additional codes."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"country"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"The name of the country, region, or entity represented by the symbol."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"iso"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"The ISO code of the country, region, or entity represented by the symbol."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"description"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"The description of the indicator."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"frequency"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"The frequency of the indicator data."})]})]})]})}),(0,n.jsx)(i.A,{value:"econdb",label:"econdb",children:(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"symbol_root"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"The root symbol representing the indicator."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"symbol"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Symbol representing the entity requested in the data. The root symbol with additional codes."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"country"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"The name of the country, region, or entity represented by the symbol."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"iso"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"The ISO code of the country, region, or entity represented by the symbol."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"description"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"The description of the indicator."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"frequency"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"The frequency of the indicator data."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"currency"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"The currency, or unit, the data is based in."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"scale"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"The scale of the data."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"multiplier"}),(0,n.jsx)(t.td,{children:"int"}),(0,n.jsx)(t.td,{children:"The multiplier of the data to arrive at whole units."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"transformation"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Transformation type."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"source"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"The original source of the data."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"first_date"}),(0,n.jsx)(t.td,{children:"date"}),(0,n.jsx)(t.td,{children:"The first date of the data."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"last_date"}),(0,n.jsx)(t.td,{children:"date"}),(0,n.jsx)(t.td,{children:"The last date of the data."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"last_insert_timestamp"}),(0,n.jsx)(t.td,{children:"datetime"}),(0,n.jsx)(t.td,{children:"The time of the last update. Data is typically reported with a lag."})]})]})]})}),(0,n.jsx)(i.A,{value:"imf",label:"imf",children:(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"symbol_root"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"The root symbol representing the indicator."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"symbol"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Symbol representing the entity requested in the data. The root symbol with additional codes."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"country"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"The name of the country, region, or entity represented by the symbol."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"iso"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"The ISO code of the country, region, or entity represented by the symbol."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"description"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"The description of the indicator."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"frequency"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"The frequency of the indicator data."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"dataset"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"The IMF dataset associated with the symbol."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"table"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"The name of the table associated with the symbol."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"level"}),(0,n.jsx)(t.td,{children:"int"}),(0,n.jsx)(t.td,{children:"The indentation level of the data, relative to the table and symbol_root"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"order"}),(0,n.jsx)(t.td,{children:"Union[float, int]"}),(0,n.jsx)(t.td,{children:"Order of the data, relative to the table."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"children"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"The symbol of the child data, if any."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"unit"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"The unit of the data."})]})]})]})})]})]})}function u(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(x,{...e})}):x(e)}},19365:(e,t,r)=>{r.d(t,{A:()=>i});r(96540);var n=r(34164);const s={tabItem:"tabItem_Ymn6"};var d=r(74848);function i(e){let{children:t,hidden:r,className:i}=e;return(0,d.jsx)("div",{role:"tabpanel",className:(0,n.A)(s.tabItem,i),hidden:r,children:t})}},18228:(e,t,r)=>{r.d(t,{A:()=>T});var n=r(56347),s=r(23104),d=r(96540),i=r(205),l=r(57485),a=r(31682),c=r(89466);function o(e){return function(e){return d.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,d.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:s}}=e;return{value:t,label:r,attributes:n,default:s}}))}function h(e){const{values:t,children:r}=e;return(0,d.useMemo)((()=>{const e=t??o(r);return function(e){const t=(0,a.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function x(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function u(e){let{queryString:t=!1,groupId:r}=e;const s=(0,n.W6)(),i=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,l.aZ)(i),(0,d.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(s.location.search);t.set(i,e),s.replace({...s.location,search:t.toString()})}),[i,s])]}function j(e){const{defaultValue:t,queryString:r=!1,groupId:n}=e,s=h(e),[l,a]=(0,d.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!x({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:s}))),[o,j]=u({queryString:r,groupId:n}),[b,m]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,s]=(0,c.Dv)(r);return[n,(0,d.useCallback)((e=>{r&&s.set(e)}),[r,s])]}({groupId:n}),p=(()=>{const e=o??b;return x({value:e,tabValues:s})?e:null})();(0,i.A)((()=>{p&&a(p)}),[p]);return{selectedValue:l,selectValue:(0,d.useCallback)((e=>{if(!x({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);a(e),j(e),m(e)}),[j,m,s]),tabValues:s}}var b=r(92303),m=r(34164);const p={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};var f=r(74848);function y(e){let{className:t,block:r,selectedValue:d,selectValue:i,tabValues:l}=e;const a=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.a_)(),{pathname:o}=(0,n.zy)(),h=e=>{const t=e.currentTarget,r=a.indexOf(t),n=l[r].value;n!==d&&(c(t),i(n))},x=e=>{let t=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{const r=a.indexOf(e.currentTarget)+1;t=a[r]??a[0];break}case"ArrowLeft":{const r=a.indexOf(e.currentTarget)-1;t=a[r]??a[a.length-1];break}}t?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,m.A)("_group-tab list-none -ml-7 my-6 overflow-auto"),children:l.map((e=>{let{value:t,label:r,attributes:n}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:d===t?0:-1,"aria-selected":d===t,ref:e=>a.push(e),onKeyDown:x,onClick:h,...n,className:(0,m.A)("font-bold tracking-widest w-fit px-3 inline-flex py-1 uppercase border-b text-lg cursor-pointer",p.tabItem,n?.className,{"border-b-2 pointer-events-none":d===t,"border-b-2 text-[#669dcb] border-[#669dcb]":d===t&&o.startsWith("/workspace"),"border-b-2 text-[#FB923C] border-[#FB923C]":d===t&&o.startsWith("/sdk"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":d!==t&&o.startsWith("/sdk"),"border-b-2 text-[#FB923C] border-[#FB923C]":d===t&&o.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":d!==t&&o.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#abd2f1] hover:border-[#abd2f1]":d!==t&&o.startsWith("/workspace")}),children:r??t},t)}))})}function v(e){let{lazy:t,children:r,selectedValue:n}=e;if(r=Array.isArray(r)?r:[r],t){const e=r.find((e=>e.props.value===n));return e?(0,d.cloneElement)(e,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:r.map(((e,t)=>(0,d.cloneElement)(e,{key:t,hidden:e.props.value!==n})))})}function g(e){const t=j(e);return(0,f.jsxs)("div",{className:(0,m.A)("tabs-container",p.tabList),children:[(0,f.jsx)(y,{...e,...t}),(0,f.jsx)(v,{...e,...t})]})}function T(e){const t=(0,b.A)();return(0,f.jsx)(g,{...e},String(t))}},28453:(e,t,r)=>{r.d(t,{R:()=>i,x:()=>l});var n=r(96540);const s={},d=n.createContext(s);function i(e){const t=n.useContext(d);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),n.createElement(d.Provider,{value:t},e.children)}}}]);