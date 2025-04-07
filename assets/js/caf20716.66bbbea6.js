"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[35149],{27997:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>d,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>h});var n=r(74848),s=r(28453),a=r(18228),l=r(19365);const o={title:"Calendar Splits",description:"Get historical and upcoming stock split operations"},d=void 0,i={id:"platform/data_models/CalendarSplits",title:"Calendar Splits",description:"Get historical and upcoming stock split operations",source:"@site/content/platform/data_models/CalendarSplits.md",sourceDirName:"platform/data_models",slug:"/platform/data_models/CalendarSplits",permalink:"/platform/data_models/CalendarSplits",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/platform/data_models/CalendarSplits.md",tags:[],version:"current",frontMatter:{title:"Calendar Splits",description:"Get historical and upcoming stock split operations"},sidebar:"tutorialSidebar",previous:{title:"Calendar Ipo",permalink:"/platform/data_models/CalendarIpo"},next:{title:"Cash Flow Statement",permalink:"/platform/data_models/CashFlowStatement"}},c={},h=[{value:"Implementation details",id:"implementation-details",level:2},{value:"Class names",id:"class-names",level:3},{value:"Import Statement",id:"import-statement",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Data",id:"data",level:2}];function u(e){const t={code:"code",em:"em",h2:"h2",h3:"h3",hr:"hr",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"implementation-details",children:"Implementation details"}),"\n",(0,n.jsx)(t.h3,{id:"class-names",children:"Class names"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Model name"}),(0,n.jsx)(t.th,{children:"Parameters class"}),(0,n.jsx)(t.th,{children:"Data class"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"CalendarSplits"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"CalendarSplitsQueryParams"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"CalendarSplitsData"})})]})})]}),"\n",(0,n.jsx)(t.h3,{id:"import-statement",children:"Import Statement"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"from openbb_core.provider.standard_models.calendar_splits import (\nCalendarSplitsData,\nCalendarSplitsQueryParams,\n)\n"})}),"\n",(0,n.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(a.A,{children:[(0,n.jsxs)(l.A,{value:"standard",label:"standard",children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.code,{children:"start_date"})}),": ",(0,n.jsx)(t.code,{children:"Union[date, str]"})]}),(0,n.jsx)(t.p,{children:"Start date of the data, in YYYY-MM-DD format."}),(0,n.jsxs)(t.p,{children:["\u2022 ",(0,n.jsx)(t.em,{children:"Optional:"})," ",(0,n.jsx)(t.code,{children:"True"})]}),(0,n.jsx)(t.hr,{}),(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.code,{children:"end_date"})}),": ",(0,n.jsx)(t.code,{children:"Union[date, str]"})]}),(0,n.jsx)(t.p,{children:"End date of the data, in YYYY-MM-DD format."}),(0,n.jsxs)(t.p,{children:["\u2022 ",(0,n.jsx)(t.em,{children:"Optional:"})," ",(0,n.jsx)(t.code,{children:"True"})]})]}),(0,n.jsxs)(l.A,{value:"fmp",label:"fmp",children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.code,{children:"start_date"})}),": ",(0,n.jsx)(t.code,{children:"Union[date, str]"})]}),(0,n.jsx)(t.p,{children:"Start date of the data, in YYYY-MM-DD format."}),(0,n.jsxs)(t.p,{children:["\u2022 ",(0,n.jsx)(t.em,{children:"Optional:"})," ",(0,n.jsx)(t.code,{children:"True"})]}),(0,n.jsx)(t.hr,{}),(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.code,{children:"end_date"})}),": ",(0,n.jsx)(t.code,{children:"Union[date, str]"})]}),(0,n.jsx)(t.p,{children:"End date of the data, in YYYY-MM-DD format."}),(0,n.jsxs)(t.p,{children:["\u2022 ",(0,n.jsx)(t.em,{children:"Optional:"})," ",(0,n.jsx)(t.code,{children:"True"})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"data",children:"Data"}),"\n",(0,n.jsxs)(a.A,{children:[(0,n.jsxs)(l.A,{value:"standard",label:"standard",children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.code,{children:"date"})}),": ",(0,n.jsx)(t.code,{children:"Union[date, str]"})]}),(0,n.jsx)(t.p,{children:"The date of the data."}),(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.code,{children:"label"})}),": ",(0,n.jsx)(t.code,{children:"str"})]}),(0,n.jsx)(t.p,{children:"Label of the stock splits."}),(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.code,{children:"symbol"})}),": ",(0,n.jsx)(t.code,{children:"str"})]}),(0,n.jsx)(t.p,{children:"Symbol representing the entity requested in the data."}),(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.code,{children:"numerator"})}),": ",(0,n.jsx)(t.code,{children:"float"})]}),(0,n.jsx)(t.p,{children:"Numerator of the stock splits."}),(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.code,{children:"denominator"})}),": ",(0,n.jsx)(t.code,{children:"float"})]}),(0,n.jsx)(t.p,{children:"Denominator of the stock splits."})]}),(0,n.jsxs)(l.A,{value:"fmp",label:"fmp",children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.code,{children:"date"})}),": ",(0,n.jsx)(t.code,{children:"Union[date, str]"})]}),(0,n.jsx)(t.p,{children:"The date of the data."}),(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.code,{children:"label"})}),": ",(0,n.jsx)(t.code,{children:"str"})]}),(0,n.jsx)(t.p,{children:"Label of the stock splits."}),(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.code,{children:"symbol"})}),": ",(0,n.jsx)(t.code,{children:"str"})]}),(0,n.jsx)(t.p,{children:"Symbol representing the entity requested in the data."}),(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.code,{children:"numerator"})}),": ",(0,n.jsx)(t.code,{children:"float"})]}),(0,n.jsx)(t.p,{children:"Numerator of the stock splits."}),(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.code,{children:"denominator"})}),": ",(0,n.jsx)(t.code,{children:"float"})]}),(0,n.jsx)(t.p,{children:"Denominator of the stock splits."})]})]})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},19365:(e,t,r)=>{r.d(t,{A:()=>l});r(96540);var n=r(34164);const s={tabItem:"tabItem_Ymn6"};var a=r(74848);function l(e){let{children:t,hidden:r,className:l}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,n.A)(s.tabItem,l),hidden:r,children:t})}},18228:(e,t,r)=>{r.d(t,{A:()=>C});var n=r(56347),s=r(23104),a=r(96540),l=r(205),o=r(57485),d=r(31682),i=r(89466);function c(e){return function(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:s}}=e;return{value:t,label:r,attributes:n,default:s}}))}function h(e){const{values:t,children:r}=e;return(0,a.useMemo)((()=>{const e=t??c(r);return function(e){const t=(0,d.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function u(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:r}=e;const s=(0,n.W6)(),l=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,o.aZ)(l),(0,a.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(s.location.search);t.set(l,e),s.replace({...s.location,search:t.toString()})}),[l,s])]}function m(e){const{defaultValue:t,queryString:r=!1,groupId:n}=e,s=h(e),[o,d]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!u({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:s}))),[c,m]=p({queryString:r,groupId:n}),[x,j]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,s]=(0,i.Dv)(r);return[n,(0,a.useCallback)((e=>{r&&s.set(e)}),[r,s])]}({groupId:n}),f=(()=>{const e=c??x;return u({value:e,tabValues:s})?e:null})();(0,l.A)((()=>{f&&d(f)}),[f]);return{selectedValue:o,selectValue:(0,a.useCallback)((e=>{if(!u({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);d(e),m(e),j(e)}),[m,j,s]),tabValues:s}}var x=r(92303),j=r(34164);const f={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};var b=r(74848);function v(e){let{className:t,block:r,selectedValue:a,selectValue:l,tabValues:o}=e;const d=[],{blockElementScrollPositionUntilNextRender:i}=(0,s.a_)(),{pathname:c}=(0,n.zy)(),h=e=>{const t=e.currentTarget,r=d.indexOf(t),n=o[r].value;n!==a&&(i(t),l(n))},u=e=>{let t=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{const r=d.indexOf(e.currentTarget)+1;t=d[r]??d[0];break}case"ArrowLeft":{const r=d.indexOf(e.currentTarget)-1;t=d[r]??d[d.length-1];break}}t?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,j.A)("_group-tab list-none -ml-7 my-6 overflow-auto"),children:o.map((e=>{let{value:t,label:r,attributes:n}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:e=>d.push(e),onKeyDown:u,onClick:h,...n,className:(0,j.A)("font-bold tracking-widest w-fit px-3 inline-flex py-1 uppercase border-b text-lg cursor-pointer",f.tabItem,n?.className,{"border-b-2 pointer-events-none":a===t,"border-b-2 text-[#669dcb] border-[#669dcb]":a===t&&c.startsWith("/workspace"),"border-b-2 text-[#FB923C] border-[#FB923C]":a===t&&c.startsWith("/sdk"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":a!==t&&c.startsWith("/sdk"),"border-b-2 text-[#FB923C] border-[#FB923C]":a===t&&c.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":a!==t&&c.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#abd2f1] hover:border-[#abd2f1]":a!==t&&c.startsWith("/workspace")}),children:r??t},t)}))})}function g(e){let{lazy:t,children:r,selectedValue:n}=e;if(r=Array.isArray(r)?r:[r],t){const e=r.find((e=>e.props.value===n));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:r.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==n})))})}function y(e){const t=m(e);return(0,b.jsxs)("div",{className:(0,j.A)("tabs-container",f.tabList),children:[(0,b.jsx)(v,{...e,...t}),(0,b.jsx)(g,{...e,...t})]})}function C(e){const t=(0,x.A)();return(0,b.jsx)(y,{...e},String(t))}},28453:(e,t,r)=>{r.d(t,{R:()=>l,x:()=>o});var n=r(96540);const s={},a=n.createContext(s);function l(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);