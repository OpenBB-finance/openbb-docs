"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[56983],{8489:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>x,frontMatter:()=>a,metadata:()=>o,toc:()=>h});var n=r(74848),s=r(28453),l=r(18228),d=r(19365);const a={title:"Money Measures",description:"Get Money Measures (M1/M2 and components)"},i=void 0,o={id:"platform/data_models/MoneyMeasures",title:"Money Measures",description:"Get Money Measures (M1/M2 and components)",source:"@site/content/platform/data_models/MoneyMeasures.md",sourceDirName:"platform/data_models",slug:"/platform/data_models/MoneyMeasures",permalink:"/platform/data_models/MoneyMeasures",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/platform/data_models/MoneyMeasures.md",tags:[],version:"current",frontMatter:{title:"Money Measures",description:"Get Money Measures (M1/M2 and components)"},sidebar:"tutorialSidebar",previous:{title:"Market Snapshots",permalink:"/platform/data_models/MarketSnapshots"},next:{title:"Moody Corporate Bond Index",permalink:"/platform/data_models/MoodyCorporateBondIndex"}},c={},h=[{value:"Implementation details",id:"implementation-details",level:2},{value:"Class names",id:"class-names",level:3},{value:"Import Statement",id:"import-statement",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Data",id:"data",level:2}];function u(e){const t={code:"code",h2:"h2",h3:"h3",hr:"hr",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"implementation-details",children:"Implementation details"}),"\n",(0,n.jsx)(t.h3,{id:"class-names",children:"Class names"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Model name"}),(0,n.jsx)(t.th,{children:"Parameters class"}),(0,n.jsx)(t.th,{children:"Data class"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"MoneyMeasures"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"MoneyMeasuresQueryParams"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"MoneyMeasuresData"})})]})})]}),"\n",(0,n.jsx)(t.h3,{id:"import-statement",children:"Import Statement"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"from openbb_core.provider.standard_models.money_measures import (\nMoneyMeasuresData,\nMoneyMeasuresQueryParams,\n)\n"})}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(l.A,{children:[(0,n.jsx)(d.A,{value:"standard",label:"standard",children:(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Default"}),(0,n.jsx)(t.th,{children:"Optional"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"start_date"}),(0,n.jsx)(t.td,{children:"Union[date, str]"}),(0,n.jsx)(t.td,{children:"Start date of the data, in YYYY-MM-DD format."}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"end_date"}),(0,n.jsx)(t.td,{children:"Union[date, str]"}),(0,n.jsx)(t.td,{children:"End date of the data, in YYYY-MM-DD format."}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"adjusted"}),(0,n.jsx)(t.td,{children:"bool"}),(0,n.jsx)(t.td,{children:"Whether to return seasonally adjusted data."}),(0,n.jsx)(t.td,{children:"True"}),(0,n.jsx)(t.td,{children:"True"})]})]})]})}),(0,n.jsx)(d.A,{value:"federal_reserve",label:"federal_reserve",children:(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Default"}),(0,n.jsx)(t.th,{children:"Optional"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"start_date"}),(0,n.jsx)(t.td,{children:"Union[date, str]"}),(0,n.jsx)(t.td,{children:"Start date of the data, in YYYY-MM-DD format."}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"end_date"}),(0,n.jsx)(t.td,{children:"Union[date, str]"}),(0,n.jsx)(t.td,{children:"End date of the data, in YYYY-MM-DD format."}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"adjusted"}),(0,n.jsx)(t.td,{children:"bool"}),(0,n.jsx)(t.td,{children:"Whether to return seasonally adjusted data."}),(0,n.jsx)(t.td,{children:"True"}),(0,n.jsx)(t.td,{children:"True"})]})]})]})})]}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"data",children:"Data"}),"\n",(0,n.jsxs)(l.A,{children:[(0,n.jsx)(d.A,{value:"standard",label:"standard",children:(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"month"}),(0,n.jsx)(t.td,{children:"date"}),(0,n.jsx)(t.td,{children:"The date of the data."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"M1"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Value of the M1 money supply in billions."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"M2"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Value of the M2 money supply in billions."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"currency"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Value of currency in circulation in billions."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"demand_deposits"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Value of demand deposits in billions."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"retail_money_market_funds"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Value of retail money market funds in billions."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"other_liquid_deposits"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Value of other liquid deposits in billions."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"small_denomination_time_deposits"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Value of small denomination time deposits in billions."})]})]})]})}),(0,n.jsx)(d.A,{value:"federal_reserve",label:"federal_reserve",children:(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"month"}),(0,n.jsx)(t.td,{children:"date"}),(0,n.jsx)(t.td,{children:"The date of the data."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"M1"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Value of the M1 money supply in billions."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"M2"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Value of the M2 money supply in billions."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"currency"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Value of currency in circulation in billions."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"demand_deposits"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Value of demand deposits in billions."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"retail_money_market_funds"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Value of retail money market funds in billions."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"other_liquid_deposits"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Value of other liquid deposits in billions."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"small_denomination_time_deposits"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Value of small denomination time deposits in billions."})]})]})]})})]})]})}function x(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},19365:(e,t,r)=>{r.d(t,{A:()=>d});r(96540);var n=r(34164);const s={tabItem:"tabItem_Ymn6"};var l=r(74848);function d(e){let{children:t,hidden:r,className:d}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,n.A)(s.tabItem,d),hidden:r,children:t})}},18228:(e,t,r)=>{r.d(t,{A:()=>g});var n=r(56347),s=r(23104),l=r(96540),d=r(205),a=r(57485),i=r(31682),o=r(89466);function c(e){return function(e){return l.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,l.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:s}}=e;return{value:t,label:r,attributes:n,default:s}}))}function h(e){const{values:t,children:r}=e;return(0,l.useMemo)((()=>{const e=t??c(r);return function(e){const t=(0,i.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function u(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function x(e){let{queryString:t=!1,groupId:r}=e;const s=(0,n.W6)(),d=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,a.aZ)(d),(0,l.useCallback)((e=>{if(!d)return;const t=new URLSearchParams(s.location.search);t.set(d,e),s.replace({...s.location,search:t.toString()})}),[d,s])]}function j(e){const{defaultValue:t,queryString:r=!1,groupId:n}=e,s=h(e),[a,i]=(0,l.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!u({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:s}))),[c,j]=x({queryString:r,groupId:n}),[m,f]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,s]=(0,o.Dv)(r);return[n,(0,l.useCallback)((e=>{r&&s.set(e)}),[r,s])]}({groupId:n}),p=(()=>{const e=c??m;return u({value:e,tabValues:s})?e:null})();(0,d.A)((()=>{p&&i(p)}),[p]);return{selectedValue:a,selectValue:(0,l.useCallback)((e=>{if(!u({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);i(e),j(e),f(e)}),[j,f,s]),tabValues:s}}var m=r(92303),f=r(34164);const p={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};var b=r(74848);function y(e){let{className:t,block:r,selectedValue:l,selectValue:d,tabValues:a}=e;const i=[],{blockElementScrollPositionUntilNextRender:o}=(0,s.a_)(),{pathname:c}=(0,n.zy)(),h=e=>{const t=e.currentTarget,r=i.indexOf(t),n=a[r].value;n!==l&&(o(t),d(n))},u=e=>{let t=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{const r=i.indexOf(e.currentTarget)+1;t=i[r]??i[0];break}case"ArrowLeft":{const r=i.indexOf(e.currentTarget)-1;t=i[r]??i[i.length-1];break}}t?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,f.A)("_group-tab list-none -ml-7 my-6 overflow-auto"),children:a.map((e=>{let{value:t,label:r,attributes:n}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,ref:e=>i.push(e),onKeyDown:u,onClick:h,...n,className:(0,f.A)("font-bold tracking-widest w-fit px-3 inline-flex py-1 uppercase border-b text-lg cursor-pointer",p.tabItem,n?.className,{"border-b-2 pointer-events-none":l===t,"border-b-2 text-[#669dcb] border-[#669dcb]":l===t&&c.startsWith("/workspace"),"border-b-2 text-[#FB923C] border-[#FB923C]":l===t&&c.startsWith("/sdk"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":l!==t&&c.startsWith("/sdk"),"border-b-2 text-[#FB923C] border-[#FB923C]":l===t&&c.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":l!==t&&c.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#abd2f1] hover:border-[#abd2f1]":l!==t&&c.startsWith("/workspace")}),children:r??t},t)}))})}function v(e){let{lazy:t,children:r,selectedValue:n}=e;if(r=Array.isArray(r)?r:[r],t){const e=r.find((e=>e.props.value===n));return e?(0,l.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:r.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==n})))})}function M(e){const t=j(e);return(0,b.jsxs)("div",{className:(0,f.A)("tabs-container",p.tabList),children:[(0,b.jsx)(y,{...e,...t}),(0,b.jsx)(v,{...e,...t})]})}function g(e){const t=(0,m.A)();return(0,b.jsx)(M,{...e},String(t))}},28453:(e,t,r)=>{r.d(t,{R:()=>d,x:()=>a});var n=r(96540);const s={},l=n.createContext(s);function d(e){const t=n.useContext(l);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),n.createElement(l.Provider,{value:t},e.children)}}}]);