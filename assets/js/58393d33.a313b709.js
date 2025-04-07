"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3119],{69966:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>h,contentTitle:()=>o,default:()=>p,frontMatter:()=>d,metadata:()=>a,toc:()=>u});var t=n(74848),s=n(28453),i=n(94331),l=n(18228),c=n(19365);const d={title:"latest_financial_reports",description:"Get the newest quarterly, annual, and current reports for all companies",keywords:["equity","discovery","latest_financial_reports"]},o=void 0,a={id:"platform/reference/equity/discovery/latest_financial_reports",title:"latest_financial_reports",description:"Get the newest quarterly, annual, and current reports for all companies",source:"@site/content/platform/reference/equity/discovery/latest_financial_reports.md",sourceDirName:"platform/reference/equity/discovery",slug:"/platform/reference/equity/discovery/latest_financial_reports",permalink:"/platform/reference/equity/discovery/latest_financial_reports",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/platform/reference/equity/discovery/latest_financial_reports.md",tags:[],version:"current",frontMatter:{title:"latest_financial_reports",description:"Get the newest quarterly, annual, and current reports for all companies",keywords:["equity","discovery","latest_financial_reports"]},sidebar:"tutorialSidebar",previous:{title:"growth_tech",permalink:"/platform/reference/equity/discovery/growth_tech"},next:{title:"losers",permalink:"/platform/reference/equity/discovery/losers"}},h={},u=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Data",id:"data",level:2}];function x(e){const r={code:"code",em:"em",h2:"h2",hr:"hr",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components},{Details:n}=r;return n||function(e,r){throw new Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.A,{title:"equity/discovery/latest_financial_reports - Reference | OpenBB Platform Docs"}),"\n","\n",(0,t.jsx)(r.p,{children:"Get the newest quarterly, annual, and current reports for all companies."}),"\n",(0,t.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(l.A,{children:[(0,t.jsx)(c.A,{value:"standard",label:"standard"}),(0,t.jsxs)(c.A,{value:"sec",label:"sec",children:[(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.code,{children:"date"})}),": ",(0,t.jsx)(r.code,{children:"Union[date, str]"})]}),(0,t.jsx)(r.p,{children:"A specific date to get data for. Defaults to today."}),(0,t.jsxs)(r.p,{children:["\u2022 ",(0,t.jsx)(r.em,{children:"Optional:"})," ",(0,t.jsx)(r.code,{children:"True"})]}),(0,t.jsx)(r.hr,{}),(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.code,{children:"report_type"})}),": ",(0,t.jsx)(r.code,{children:"Union[str, list[str]]"})]}),(0,t.jsx)(r.p,{children:"Return only a specific form type. Default is all quarterly, annual, and current reports. Choices: 1-K, 1-SA, 1-U, 10-D, 10-K, 10-KT, 10-Q, 10-QT, 20-F, 40-F, 6-K, 8-K. Multiple items allowed for provider(s): sec."}),(0,t.jsxs)(n,{children:[(0,t.jsx)("summary",{mdxType:"summary",children:"Choices"}),(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.code,{children:"1-K"})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.code,{children:"1-SA"})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.code,{children:"1-U"})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.code,{children:"10-D"})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.code,{children:"10-K"})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.code,{children:"10-KT"})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.code,{children:"10-Q"})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.code,{children:"10-QT"})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.code,{children:"20-F"})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.code,{children:"40-F"})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.code,{children:"6-K"})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.code,{children:"8-K"})}),"\n"]})]}),(0,t.jsxs)(r.p,{children:["\u2022 ",(0,t.jsx)(r.em,{children:"Optional:"})," ",(0,t.jsx)(r.code,{children:"True"})]})]})]}),"\n",(0,t.jsx)(r.hr,{}),"\n",(0,t.jsx)(r.h2,{id:"returns",children:"Returns"}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.code,{children:"results"})}),": ",(0,t.jsx)(r.code,{children:"list[LatestFinancialReports]"})]}),"\n",(0,t.jsx)(r.p,{children:"Serializable results."}),"\n",(0,t.jsx)(r.hr,{}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.code,{children:"provider"})}),": ",(0,t.jsx)(r.code,{children:"Optional[Literal['sec']]"})]}),"\n",(0,t.jsx)(r.p,{children:"Provider name."}),"\n",(0,t.jsx)(r.hr,{}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.code,{children:"warnings"})}),": ",(0,t.jsx)(r.code,{children:"Optional[list[Warning_]]"})]}),"\n",(0,t.jsx)(r.p,{children:"list of warnings."}),"\n",(0,t.jsx)(r.hr,{}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.code,{children:"chart"})}),": ",(0,t.jsx)(r.code,{children:"Optional[Chart]"})]}),"\n",(0,t.jsx)(r.p,{children:"Chart object."}),"\n",(0,t.jsx)(r.hr,{}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.code,{children:"extra"})}),": ",(0,t.jsx)(r.code,{children:"dict[str, Any]"})]}),"\n",(0,t.jsx)(r.p,{children:"Extra info."}),"\n",(0,t.jsx)(r.hr,{}),"\n",(0,t.jsx)(r.h2,{id:"data",children:"Data"}),"\n",(0,t.jsxs)(l.A,{children:[(0,t.jsxs)(c.A,{value:"standard",label:"standard",children:[(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.code,{children:"filing_date"})}),": ",(0,t.jsx)(r.code,{children:"date"})]}),(0,t.jsx)(r.p,{children:"The date of the filing."}),(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.code,{children:"period_ending"})}),": ",(0,t.jsx)(r.code,{children:"date"})]}),(0,t.jsx)(r.p,{children:"Report for the period ending."}),(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.code,{children:"symbol"})}),": ",(0,t.jsx)(r.code,{children:"str"})]}),(0,t.jsx)(r.p,{children:"Symbol representing the entity requested in the data."}),(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.code,{children:"name"})}),": ",(0,t.jsx)(r.code,{children:"str"})]}),(0,t.jsx)(r.p,{children:"Name of the company."}),(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.code,{children:"cik"})}),": ",(0,t.jsx)(r.code,{children:"str"})]}),(0,t.jsx)(r.p,{children:"Central Index Key (CIK) for the requested entity."}),(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.code,{children:"sic"})}),": ",(0,t.jsx)(r.code,{children:"str"})]}),(0,t.jsx)(r.p,{children:"Standard Industrial Classification code."}),(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.code,{children:"report_type"})}),": ",(0,t.jsx)(r.code,{children:"str"})]}),(0,t.jsx)(r.p,{children:"Type of filing."}),(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.code,{children:"description"})}),": ",(0,t.jsx)(r.code,{children:"str"})]}),(0,t.jsx)(r.p,{children:"Description of the report."}),(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.code,{children:"url"})}),": ",(0,t.jsx)(r.code,{children:"str"})]}),(0,t.jsx)(r.p,{children:"URL to the filing page."})]}),(0,t.jsxs)(c.A,{value:"sec",label:"sec",children:[(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.code,{children:"filing_date"})}),": ",(0,t.jsx)(r.code,{children:"date"})]}),(0,t.jsx)(r.p,{children:"The date of the filing."}),(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.code,{children:"period_ending"})}),": ",(0,t.jsx)(r.code,{children:"date"})]}),(0,t.jsx)(r.p,{children:"Report for the period ending."}),(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.code,{children:"symbol"})}),": ",(0,t.jsx)(r.code,{children:"str"})]}),(0,t.jsx)(r.p,{children:"Symbol representing the entity requested in the data."}),(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.code,{children:"name"})}),": ",(0,t.jsx)(r.code,{children:"str"})]}),(0,t.jsx)(r.p,{children:"Name of the company."}),(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.code,{children:"cik"})}),": ",(0,t.jsx)(r.code,{children:"str"})]}),(0,t.jsx)(r.p,{children:"Central Index Key (CIK) for the requested entity."}),(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.code,{children:"sic"})}),": ",(0,t.jsx)(r.code,{children:"str"})]}),(0,t.jsx)(r.p,{children:"Standard Industrial Classification code."}),(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.code,{children:"report_type"})}),": ",(0,t.jsx)(r.code,{children:"str"})]}),(0,t.jsx)(r.p,{children:"Type of filing."}),(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.code,{children:"description"})}),": ",(0,t.jsx)(r.code,{children:"str"})]}),(0,t.jsx)(r.p,{children:"Description of the report."}),(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.code,{children:"url"})}),": ",(0,t.jsx)(r.code,{children:"str"})]}),(0,t.jsx)(r.p,{children:"URL to the filing page."}),(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.code,{children:"items"})}),": ",(0,t.jsx)(r.code,{children:"str"})]}),(0,t.jsx)(r.p,{children:"Item codes associated with the filing."}),(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.code,{children:"index_headers"})}),": ",(0,t.jsx)(r.code,{children:"str"})]}),(0,t.jsx)(r.p,{children:"URL to the index headers file."}),(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.code,{children:"complete_submission"})}),": ",(0,t.jsx)(r.code,{children:"str"})]}),(0,t.jsx)(r.p,{children:"URL to the complete submission text file."}),(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.code,{children:"metadata"})}),": ",(0,t.jsx)(r.code,{children:"str"})]}),(0,t.jsx)(r.p,{children:"URL to the MetaLinks.json file, if available."}),(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.code,{children:"financial_report"})}),": ",(0,t.jsx)(r.code,{children:"str"})]}),(0,t.jsx)(r.p,{children:"URL to the Financial_Report.xlsx file, if available."})]})]})]})}function p(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(x,{...e})}):x(e)}},19365:(e,r,n)=>{n.d(r,{A:()=>l});n(96540);var t=n(34164);const s={tabItem:"tabItem_Ymn6"};var i=n(74848);function l(e){let{children:r,hidden:n,className:l}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,t.A)(s.tabItem,l),hidden:n,children:r})}},94331:(e,r,n)=>{n.d(r,{A:()=>i});n(96540);var t=n(5260),s=n(74848);function i(e){let{title:r}=e;return(0,s.jsx)(t.A,{children:(0,s.jsx)("title",{children:r})})}},18228:(e,r,n)=>{n.d(r,{A:()=>w});var t=n(56347),s=n(23104),i=n(96540),l=n(205),c=n(57485),d=n(31682),o=n(89466);function a(e){return function(e){return i.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:r,label:n,attributes:t,default:s}}=e;return{value:r,label:n,attributes:t,default:s}}))}function h(e){const{values:r,children:n}=e;return(0,i.useMemo)((()=>{const e=r??a(n);return function(e){const r=(0,d.X)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,n])}function u(e){let{value:r,tabValues:n}=e;return n.some((e=>e.value===r))}function x(e){let{queryString:r=!1,groupId:n}=e;const s=(0,t.W6)(),l=function(e){let{queryString:r=!1,groupId:n}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:r,groupId:n});return[(0,c.aZ)(l),(0,i.useCallback)((e=>{if(!l)return;const r=new URLSearchParams(s.location.search);r.set(l,e),s.replace({...s.location,search:r.toString()})}),[l,s])]}function p(e){const{defaultValue:r,queryString:n=!1,groupId:t}=e,s=h(e),[c,d]=(0,i.useState)((()=>function(e){let{defaultValue:r,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!u({value:r,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const t=n.find((e=>e.default))??n[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:r,tabValues:s}))),[a,p]=x({queryString:n,groupId:t}),[j,f]=function(e){let{groupId:r}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(r),[t,s]=(0,o.Dv)(n);return[t,(0,i.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:t}),m=(()=>{const e=a??j;return u({value:e,tabValues:s})?e:null})();(0,l.A)((()=>{m&&d(m)}),[m]);return{selectedValue:c,selectValue:(0,i.useCallback)((e=>{if(!u({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);d(e),p(e),f(e)}),[p,f,s]),tabValues:s}}var j=n(92303),f=n(34164);const m={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};var b=n(74848);function g(e){let{className:r,block:n,selectedValue:i,selectValue:l,tabValues:c}=e;const d=[],{blockElementScrollPositionUntilNextRender:o}=(0,s.a_)(),{pathname:a}=(0,t.zy)(),h=e=>{const r=e.currentTarget,n=d.indexOf(r),t=c[n].value;t!==i&&(o(r),l(t))},u=e=>{let r=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{const n=d.indexOf(e.currentTarget)+1;r=d[n]??d[0];break}case"ArrowLeft":{const n=d.indexOf(e.currentTarget)-1;r=d[n]??d[d.length-1];break}}r?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,f.A)("_group-tab list-none -ml-7 my-6 overflow-auto"),children:c.map((e=>{let{value:r,label:n,attributes:t}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:i===r?0:-1,"aria-selected":i===r,ref:e=>d.push(e),onKeyDown:u,onClick:h,...t,className:(0,f.A)("font-bold tracking-widest w-fit px-3 inline-flex py-1 uppercase border-b text-lg cursor-pointer",m.tabItem,t?.className,{"border-b-2 pointer-events-none":i===r,"border-b-2 text-[#669dcb] border-[#669dcb]":i===r&&a.startsWith("/workspace"),"border-b-2 text-[#FB923C] border-[#FB923C]":i===r&&a.startsWith("/sdk"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":i!==r&&a.startsWith("/sdk"),"border-b-2 text-[#FB923C] border-[#FB923C]":i===r&&a.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":i!==r&&a.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#abd2f1] hover:border-[#abd2f1]":i!==r&&a.startsWith("/workspace")}),children:n??r},r)}))})}function y(e){let{lazy:r,children:n,selectedValue:t}=e;if(n=Array.isArray(n)?n:[n],r){const e=n.find((e=>e.props.value===t));return e?(0,i.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:n.map(((e,r)=>(0,i.cloneElement)(e,{key:r,hidden:e.props.value!==t})))})}function v(e){const r=p(e);return(0,b.jsxs)("div",{className:(0,f.A)("tabs-container",m.tabList),children:[(0,b.jsx)(g,{...e,...r}),(0,b.jsx)(y,{...e,...r})]})}function w(e){const r=(0,j.A)();return(0,b.jsx)(v,{...e},String(r))}},28453:(e,r,n)=>{n.d(r,{R:()=>l,x:()=>c});var t=n(96540);const s={},i=t.createContext(s);function l(e){const r=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),t.createElement(i.Provider,{value:r},e.children)}}}]);