"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[46511],{48523:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>d,default:()=>x,frontMatter:()=>i,metadata:()=>c,toc:()=>h});var n=r(74848),s=r(28453),a=r(18228),l=r(19365);const i={title:"Latest Financial Reports",description:"Get the newest quarterly, annual, and current reports for all companies"},d=void 0,c={id:"platform/data_models/LatestFinancialReports",title:"Latest Financial Reports",description:"Get the newest quarterly, annual, and current reports for all companies",source:"@site/content/platform/data_models/LatestFinancialReports.md",sourceDirName:"platform/data_models",slug:"/platform/data_models/LatestFinancialReports",permalink:"/platform/data_models/LatestFinancialReports",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/platform/data_models/LatestFinancialReports.md",tags:[],version:"current",frontMatter:{title:"Latest Financial Reports",description:"Get the newest quarterly, annual, and current reports for all companies"},sidebar:"tutorialSidebar",previous:{title:"Latest Attributes",permalink:"/platform/data_models/LatestAttributes"},next:{title:"Management Discussion Analysis",permalink:"/platform/data_models/ManagementDiscussionAnalysis"}},o={},h=[{value:"Implementation details",id:"implementation-details",level:2},{value:"Class names",id:"class-names",level:3},{value:"Import Statement",id:"import-statement",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Data",id:"data",level:2}];function u(e){const t={code:"code",h2:"h2",h3:"h3",hr:"hr",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"implementation-details",children:"Implementation details"}),"\n",(0,n.jsx)(t.h3,{id:"class-names",children:"Class names"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Model name"}),(0,n.jsx)(t.th,{children:"Parameters class"}),(0,n.jsx)(t.th,{children:"Data class"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"LatestFinancialReports"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"LatestFinancialReportsQueryParams"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"LatestFinancialReportsData"})})]})})]}),"\n",(0,n.jsx)(t.h3,{id:"import-statement",children:"Import Statement"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"from openbb_core.provider.standard_models.latest_financial_reports import (\nLatestFinancialReportsData,\nLatestFinancialReportsQueryParams,\n)\n"})}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(a.A,{children:[(0,n.jsx)(l.A,{value:"standard",label:"standard",children:(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Default"}),(0,n.jsx)(t.th,{children:"Optional"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:";"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{})]})})]})}),(0,n.jsx)(l.A,{value:"sec",label:"sec",children:(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Default"}),(0,n.jsx)(t.th,{children:"Optional"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"date"}),(0,n.jsx)(t.td,{children:"Union[date, str]"}),(0,n.jsx)(t.td,{children:"A specific date to get data for. Defaults to today."}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"report_type"}),(0,n.jsx)(t.td,{children:"Union[str, List[str]]"}),(0,n.jsx)(t.td,{children:"Return only a specific form type. Default is all quarterly, annual, and current reports. Choices: 1-K, 1-SA, 1-U, 10-D, 10-K, 10-KT, 10-Q, 10-QT, 20-F, 40-F, 6-K, 8-K. Multiple items allowed for provider(s): sec."}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]})]})]})})]}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"data",children:"Data"}),"\n",(0,n.jsxs)(a.A,{children:[(0,n.jsx)(l.A,{value:"standard",label:"standard",children:(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"filing_date"}),(0,n.jsx)(t.td,{children:"date"}),(0,n.jsx)(t.td,{children:"The date of the filing."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"period_ending"}),(0,n.jsx)(t.td,{children:"date"}),(0,n.jsx)(t.td,{children:"Report for the period ending."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"symbol"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Symbol representing the entity requested in the data."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"name"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Name of the company."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"cik"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Central Index Key (CIK) for the requested entity."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"sic"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Standard Industrial Classification code."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"report_type"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Type of filing."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"description"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Description of the report."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"url"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"URL to the filing page."})]})]})]})}),(0,n.jsx)(l.A,{value:"sec",label:"sec",children:(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"filing_date"}),(0,n.jsx)(t.td,{children:"date"}),(0,n.jsx)(t.td,{children:"The date of the filing."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"period_ending"}),(0,n.jsx)(t.td,{children:"date"}),(0,n.jsx)(t.td,{children:"Report for the period ending."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"symbol"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Symbol representing the entity requested in the data."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"name"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Name of the company."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"cik"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Central Index Key (CIK) for the requested entity."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"sic"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Standard Industrial Classification code."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"report_type"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Type of filing."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"description"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Description of the report."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"url"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"URL to the filing page."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"items"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Item codes associated with the filing."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"index_headers"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"URL to the index headers file."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"complete_submission"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"URL to the complete submission text file."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"metadata"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"URL to the MetaLinks.json file, if available."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"financial_report"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"URL to the Financial_Report.xlsx file, if available."})]})]})]})})]})]})}function x(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},19365:(e,t,r)=>{r.d(t,{A:()=>l});r(96540);var n=r(34164);const s={tabItem:"tabItem_Ymn6"};var a=r(74848);function l(e){let{children:t,hidden:r,className:l}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,n.A)(s.tabItem,l),hidden:r,children:t})}},18228:(e,t,r)=>{r.d(t,{A:()=>w});var n=r(56347),s=r(23104),a=r(96540),l=r(205),i=r(57485),d=r(31682),c=r(89466);function o(e){return function(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:s}}=e;return{value:t,label:r,attributes:n,default:s}}))}function h(e){const{values:t,children:r}=e;return(0,a.useMemo)((()=>{const e=t??o(r);return function(e){const t=(0,d.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function u(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function x(e){let{queryString:t=!1,groupId:r}=e;const s=(0,n.W6)(),l=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,i.aZ)(l),(0,a.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(s.location.search);t.set(l,e),s.replace({...s.location,search:t.toString()})}),[l,s])]}function j(e){const{defaultValue:t,queryString:r=!1,groupId:n}=e,s=h(e),[i,d]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!u({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:s}))),[o,j]=x({queryString:r,groupId:n}),[p,m]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,s]=(0,c.Dv)(r);return[n,(0,a.useCallback)((e=>{r&&s.set(e)}),[r,s])]}({groupId:n}),f=(()=>{const e=o??p;return u({value:e,tabValues:s})?e:null})();(0,l.A)((()=>{f&&d(f)}),[f]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!u({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);d(e),j(e),m(e)}),[j,m,s]),tabValues:s}}var p=r(92303),m=r(34164);const f={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};var b=r(74848);function y(e){let{className:t,block:r,selectedValue:a,selectValue:l,tabValues:i}=e;const d=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.a_)(),{pathname:o}=(0,n.zy)(),h=e=>{const t=e.currentTarget,r=d.indexOf(t),n=i[r].value;n!==a&&(c(t),l(n))},u=e=>{let t=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{const r=d.indexOf(e.currentTarget)+1;t=d[r]??d[0];break}case"ArrowLeft":{const r=d.indexOf(e.currentTarget)-1;t=d[r]??d[d.length-1];break}}t?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,m.A)("_group-tab list-none -ml-7 my-6 overflow-auto"),children:i.map((e=>{let{value:t,label:r,attributes:n}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:e=>d.push(e),onKeyDown:u,onClick:h,...n,className:(0,m.A)("font-bold tracking-widest w-fit px-3 inline-flex py-1 uppercase border-b text-lg cursor-pointer",f.tabItem,n?.className,{"border-b-2 pointer-events-none":a===t,"border-b-2 text-[#669dcb] border-[#669dcb]":a===t&&o.startsWith("/workspace"),"border-b-2 text-[#FB923C] border-[#FB923C]":a===t&&o.startsWith("/sdk"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":a!==t&&o.startsWith("/sdk"),"border-b-2 text-[#FB923C] border-[#FB923C]":a===t&&o.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":a!==t&&o.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#abd2f1] hover:border-[#abd2f1]":a!==t&&o.startsWith("/workspace")}),children:r??t},t)}))})}function v(e){let{lazy:t,children:r,selectedValue:n}=e;if(r=Array.isArray(r)?r:[r],t){const e=r.find((e=>e.props.value===n));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:r.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==n})))})}function g(e){const t=j(e);return(0,b.jsxs)("div",{className:(0,m.A)("tabs-container",f.tabList),children:[(0,b.jsx)(y,{...e,...t}),(0,b.jsx)(v,{...e,...t})]})}function w(e){const t=(0,p.A)();return(0,b.jsx)(g,{...e},String(t))}},28453:(e,t,r)=>{r.d(t,{R:()=>l,x:()=>i});var n=r(96540);const s={},a=n.createContext(s);function l(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);