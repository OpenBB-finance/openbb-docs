"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[14722],{94756:(e,t,d)=>{d.r(t),d.d(t,{assets:()=>h,contentTitle:()=>c,default:()=>j,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var n=d(74848),r=d(28453),i=d(94331),a=d(18228),s=d(19365);const l={title:"dividend",description:"Get upcoming and historical dividend data with the OBB.equity.calendar.dividend  method. This method allows you to retrieve dividend information such as dates, amounts,  and provider details. It also provides warnings, charts, and metadata for further  analysis.",keywords:["dividend calendar","upcoming dividends","historical dividends","dividend data","dividend schedule","dividend information","dividend dates","dividend amounts","dividend provider","dividend warnings","dividend chart","dividend metadata","ex-dividend date","record date","payment date","declaration date","dividend symbol","dividend name","dividend adjusted amount","dividend label","annualized dividend amount"]},c=void 0,o={id:"platform/reference/equity/calendar/dividend",title:"dividend",description:"Get upcoming and historical dividend data with the OBB.equity.calendar.dividend  method. This method allows you to retrieve dividend information such as dates, amounts,  and provider details. It also provides warnings, charts, and metadata for further  analysis.",source:"@site/content/platform/reference/equity/calendar/dividend.md",sourceDirName:"platform/reference/equity/calendar",slug:"/platform/reference/equity/calendar/dividend",permalink:"/platform/reference/equity/calendar/dividend",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/platform/reference/equity/calendar/dividend.md",tags:[],version:"current",frontMatter:{title:"dividend",description:"Get upcoming and historical dividend data with the OBB.equity.calendar.dividend  method. This method allows you to retrieve dividend information such as dates, amounts,  and provider details. It also provides warnings, charts, and metadata for further  analysis.",keywords:["dividend calendar","upcoming dividends","historical dividends","dividend data","dividend schedule","dividend information","dividend dates","dividend amounts","dividend provider","dividend warnings","dividend chart","dividend metadata","ex-dividend date","record date","payment date","declaration date","dividend symbol","dividend name","dividend adjusted amount","dividend label","annualized dividend amount"]},sidebar:"tutorialSidebar",previous:{title:"Calendar",permalink:"/platform/reference/equity/calendar/"},next:{title:"earnings",permalink:"/platform/reference/equity/calendar/earnings"}},h={},u=[{value:"Examples",id:"examples",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Data",id:"data",level:2}];function x(e){const t={code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.A,{title:"equity/calendar/dividend - Reference | OpenBB Platform Docs"}),"\n","\n",(0,n.jsx)(t.p,{children:"Get historical and upcoming dividend payments. Includes dividend amount, ex-dividend and payment dates."}),"\n",(0,n.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"from openbb import obb\nobb.equity.calendar.dividend(provider='fmp')\n# Get dividend calendar for specific dates.\nobb.equity.calendar.dividend(start_date='2024-02-01', end_date='2024-02-07', provider='nasdaq')\n"})}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(a.A,{children:[(0,n.jsx)(s.A,{value:"standard",label:"standard",children:(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Default"}),(0,n.jsx)(t.th,{children:"Optional"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"start_date"}),(0,n.jsx)(t.td,{children:"Union[date, str]"}),(0,n.jsx)(t.td,{children:"Start date of the data, in YYYY-MM-DD format."}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"end_date"}),(0,n.jsx)(t.td,{children:"Union[date, str]"}),(0,n.jsx)(t.td,{children:"End date of the data, in YYYY-MM-DD format."}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]})]})]})}),(0,n.jsx)(s.A,{value:"fmp",label:"fmp",children:(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Default"}),(0,n.jsx)(t.th,{children:"Optional"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"start_date"}),(0,n.jsx)(t.td,{children:"Union[date, str]"}),(0,n.jsx)(t.td,{children:"Start date of the data, in YYYY-MM-DD format."}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"end_date"}),(0,n.jsx)(t.td,{children:"Union[date, str]"}),(0,n.jsx)(t.td,{children:"End date of the data, in YYYY-MM-DD format."}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]})]})]})}),(0,n.jsx)(s.A,{value:"nasdaq",label:"nasdaq",children:(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Default"}),(0,n.jsx)(t.th,{children:"Optional"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"start_date"}),(0,n.jsx)(t.td,{children:"Union[date, str]"}),(0,n.jsx)(t.td,{children:"Start date of the data, in YYYY-MM-DD format."}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"end_date"}),(0,n.jsx)(t.td,{children:"Union[date, str]"}),(0,n.jsx)(t.td,{children:"End date of the data, in YYYY-MM-DD format."}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]})]})]})})]}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",metastring:"wordwrap",children:"OBBject\n    results : List[CalendarDividend]\n        Serializable results.\n\n    provider : Optional[Literal['fmp', 'nasdaq']]\n        Provider name.\n\n    warnings : Optional[List[Warning_]]\n        List of warnings.\n\n    chart : Optional[Chart]\n        Chart object.\n\n    extra : Dict[str, Any]\n        Extra info.\n"})}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"data",children:"Data"}),"\n",(0,n.jsxs)(a.A,{children:[(0,n.jsx)(s.A,{value:"standard",label:"standard",children:(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"ex_dividend_date"}),(0,n.jsx)(t.td,{children:"date"}),(0,n.jsx)(t.td,{children:"The ex-dividend date - the date on which the stock begins trading without rights to the dividend."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"symbol"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Symbol representing the entity requested in the data."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"amount"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"The dividend amount per share."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"name"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Name of the entity."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"record_date"}),(0,n.jsx)(t.td,{children:"date"}),(0,n.jsx)(t.td,{children:"The record date of ownership for eligibility."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"payment_date"}),(0,n.jsx)(t.td,{children:"date"}),(0,n.jsx)(t.td,{children:"The payment date of the dividend."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"declaration_date"}),(0,n.jsx)(t.td,{children:"date"}),(0,n.jsx)(t.td,{children:"Declaration date of the dividend."})]})]})]})}),(0,n.jsx)(s.A,{value:"fmp",label:"fmp",children:(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"ex_dividend_date"}),(0,n.jsx)(t.td,{children:"date"}),(0,n.jsx)(t.td,{children:"The ex-dividend date - the date on which the stock begins trading without rights to the dividend."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"symbol"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Symbol representing the entity requested in the data."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"amount"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"The dividend amount per share."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"name"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Name of the entity."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"record_date"}),(0,n.jsx)(t.td,{children:"date"}),(0,n.jsx)(t.td,{children:"The record date of ownership for eligibility."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"payment_date"}),(0,n.jsx)(t.td,{children:"date"}),(0,n.jsx)(t.td,{children:"The payment date of the dividend."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"declaration_date"}),(0,n.jsx)(t.td,{children:"date"}),(0,n.jsx)(t.td,{children:"Declaration date of the dividend."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"adjusted_amount"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"The adjusted-dividend amount."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"label"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Ex-dividend date formatted for display."})]})]})]})}),(0,n.jsx)(s.A,{value:"nasdaq",label:"nasdaq",children:(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"ex_dividend_date"}),(0,n.jsx)(t.td,{children:"date"}),(0,n.jsx)(t.td,{children:"The ex-dividend date - the date on which the stock begins trading without rights to the dividend."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"symbol"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Symbol representing the entity requested in the data."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"amount"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"The dividend amount per share."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"name"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Name of the entity."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"record_date"}),(0,n.jsx)(t.td,{children:"date"}),(0,n.jsx)(t.td,{children:"The record date of ownership for eligibility."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"payment_date"}),(0,n.jsx)(t.td,{children:"date"}),(0,n.jsx)(t.td,{children:"The payment date of the dividend."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"declaration_date"}),(0,n.jsx)(t.td,{children:"date"}),(0,n.jsx)(t.td,{children:"Declaration date of the dividend."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"annualized_amount"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"The indicated annualized dividend amount."})]})]})]})})]})]})}function j(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(x,{...e})}):x(e)}},19365:(e,t,d)=>{d.d(t,{A:()=>a});d(96540);var n=d(34164);const r={tabItem:"tabItem_Ymn6"};var i=d(74848);function a(e){let{children:t,hidden:d,className:a}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,n.A)(r.tabItem,a),hidden:d,children:t})}},94331:(e,t,d)=>{d.d(t,{A:()=>i});d(96540);var n=d(5260),r=d(74848);function i(e){let{title:t}=e;return(0,r.jsx)(n.A,{children:(0,r.jsx)("title",{children:t})})}},18228:(e,t,d)=>{d.d(t,{A:()=>w});var n=d(56347),r=d(23104),i=d(96540),a=d(205),s=d(57485),l=d(31682),c=d(89466);function o(e){return function(e){return i.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:d,attributes:n,default:r}}=e;return{value:t,label:d,attributes:n,default:r}}))}function h(e){const{values:t,children:d}=e;return(0,i.useMemo)((()=>{const e=t??o(d);return function(e){const t=(0,l.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,d])}function u(e){let{value:t,tabValues:d}=e;return d.some((e=>e.value===t))}function x(e){let{queryString:t=!1,groupId:d}=e;const r=(0,n.W6)(),a=function(e){let{queryString:t=!1,groupId:d}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!d)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return d??null}({queryString:t,groupId:d});return[(0,s.aZ)(a),(0,i.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(r.location.search);t.set(a,e),r.replace({...r.location,search:t.toString()})}),[a,r])]}function j(e){const{defaultValue:t,queryString:d=!1,groupId:n}=e,r=h(e),[s,l]=(0,i.useState)((()=>function(e){let{defaultValue:t,tabValues:d}=e;if(0===d.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!u({value:t,tabValues:d}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${d.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=d.find((e=>e.default))??d[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:r}))),[o,j]=x({queryString:d,groupId:n}),[m,p]=function(e){let{groupId:t}=e;const d=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,r]=(0,c.Dv)(d);return[n,(0,i.useCallback)((e=>{d&&r.set(e)}),[d,r])]}({groupId:n}),v=(()=>{const e=o??m;return u({value:e,tabValues:r})?e:null})();(0,a.A)((()=>{v&&l(v)}),[v]);return{selectedValue:s,selectValue:(0,i.useCallback)((e=>{if(!u({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);l(e),j(e),p(e)}),[j,p,r]),tabValues:r}}var m=d(92303),p=d(34164);const v={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};var f=d(74848);function b(e){let{className:t,block:d,selectedValue:i,selectValue:a,tabValues:s}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,r.a_)(),{pathname:o}=(0,n.zy)(),h=e=>{const t=e.currentTarget,d=l.indexOf(t),n=s[d].value;n!==i&&(c(t),a(n))},u=e=>{let t=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{const d=l.indexOf(e.currentTarget)+1;t=l[d]??l[0];break}case"ArrowLeft":{const d=l.indexOf(e.currentTarget)-1;t=l[d]??l[l.length-1];break}}t?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,p.A)("_group-tab list-none -ml-7 my-6 overflow-auto"),children:s.map((e=>{let{value:t,label:d,attributes:n}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,ref:e=>l.push(e),onKeyDown:u,onClick:h,...n,className:(0,p.A)("font-bold tracking-widest w-fit px-3 inline-flex py-1 uppercase border-b text-lg cursor-pointer",v.tabItem,n?.className,{"border-b-2 pointer-events-none":i===t,"border-b-2 text-[#669dcb] border-[#669dcb]":i===t&&o.startsWith("/workspace"),"border-b-2 text-[#FB923C] border-[#FB923C]":i===t&&o.startsWith("/sdk"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":i!==t&&o.startsWith("/sdk"),"border-b-2 text-[#FB923C] border-[#FB923C]":i===t&&o.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":i!==t&&o.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#abd2f1] hover:border-[#abd2f1]":i!==t&&o.startsWith("/workspace")}),children:d??t},t)}))})}function y(e){let{lazy:t,children:d,selectedValue:n}=e;if(d=Array.isArray(d)?d:[d],t){const e=d.find((e=>e.props.value===n));return e?(0,i.cloneElement)(e,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:d.map(((e,t)=>(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==n})))})}function g(e){const t=j(e);return(0,f.jsxs)("div",{className:(0,p.A)("tabs-container",v.tabList),children:[(0,f.jsx)(b,{...e,...t}),(0,f.jsx)(y,{...e,...t})]})}function w(e){const t=(0,m.A)();return(0,f.jsx)(g,{...e},String(t))}},28453:(e,t,d)=>{d.d(t,{R:()=>a,x:()=>s});var n=d(96540);const r={},i=n.createContext(r);function a(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);