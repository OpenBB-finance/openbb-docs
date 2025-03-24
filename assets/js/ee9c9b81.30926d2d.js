"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[46877],{56024:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>c,toc:()=>h});var s=r(74848),n=r(28453),d=r(18228),a=r(19365);const l={title:"Share Statistics",description:"Get data about share float for a given company"},i=void 0,c={id:"platform/data_models/ShareStatistics",title:"Share Statistics",description:"Get data about share float for a given company",source:"@site/content/platform/data_models/ShareStatistics.md",sourceDirName:"platform/data_models",slug:"/platform/data_models/ShareStatistics",permalink:"/platform/data_models/ShareStatistics",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/platform/data_models/ShareStatistics.md",tags:[],version:"current",frontMatter:{title:"Share Statistics",description:"Get data about share float for a given company"},sidebar:"tutorialSidebar",previous:{title:"Share Price Index",permalink:"/platform/data_models/SharePriceIndex"},next:{title:"Short Term Energy Outlook",permalink:"/platform/data_models/ShortTermEnergyOutlook"}},o={},h=[{value:"Implementation details",id:"implementation-details",level:2},{value:"Class names",id:"class-names",level:3},{value:"Import Statement",id:"import-statement",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Data",id:"data",level:2}];function x(e){const t={code:"code",h2:"h2",h3:"h3",hr:"hr",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h2,{id:"implementation-details",children:"Implementation details"}),"\n",(0,s.jsx)(t.h3,{id:"class-names",children:"Class names"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Model name"}),(0,s.jsx)(t.th,{children:"Parameters class"}),(0,s.jsx)(t.th,{children:"Data class"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"ShareStatistics"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"ShareStatisticsQueryParams"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"ShareStatisticsData"})})]})})]}),"\n",(0,s.jsx)(t.h3,{id:"import-statement",children:"Import Statement"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:"from openbb_core.provider.standard_models.share_statistics import (\nShareStatisticsData,\nShareStatisticsQueryParams,\n)\n"})}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(d.A,{children:[(0,s.jsx)(a.A,{value:"standard",label:"standard",children:(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"}),(0,s.jsx)(t.th,{children:"Default"}),(0,s.jsx)(t.th,{children:"Optional"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"symbol"}),(0,s.jsx)(t.td,{children:"Union[str, List[str]]"}),(0,s.jsx)(t.td,{children:"Symbol to get data for. Multiple items allowed for provider(s): yfinance."}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"False"})]})})]})}),(0,s.jsx)(a.A,{value:"fmp",label:"fmp",children:(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"}),(0,s.jsx)(t.th,{children:"Default"}),(0,s.jsx)(t.th,{children:"Optional"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"symbol"}),(0,s.jsx)(t.td,{children:"Union[str, List[str]]"}),(0,s.jsx)(t.td,{children:"Symbol to get data for. Multiple items allowed for provider(s): yfinance."}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"False"})]})})]})}),(0,s.jsx)(a.A,{value:"intrinio",label:"intrinio",children:(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"}),(0,s.jsx)(t.th,{children:"Default"}),(0,s.jsx)(t.th,{children:"Optional"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"symbol"}),(0,s.jsx)(t.td,{children:"Union[str, List[str]]"}),(0,s.jsx)(t.td,{children:"Symbol to get data for. Multiple items allowed for provider(s): yfinance."}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"False"})]})})]})}),(0,s.jsx)(a.A,{value:"yfinance",label:"yfinance",children:(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"}),(0,s.jsx)(t.th,{children:"Default"}),(0,s.jsx)(t.th,{children:"Optional"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"symbol"}),(0,s.jsx)(t.td,{children:"Union[str, List[str]]"}),(0,s.jsx)(t.td,{children:"Symbol to get data for. Multiple items allowed for provider(s): yfinance."}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"False"})]})})]})})]}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h2,{id:"data",children:"Data"}),"\n",(0,s.jsxs)(d.A,{children:[(0,s.jsx)(a.A,{value:"standard",label:"standard",children:(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"symbol"}),(0,s.jsx)(t.td,{children:"str"}),(0,s.jsx)(t.td,{children:"Symbol representing the entity requested in the data."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"date"}),(0,s.jsx)(t.td,{children:"Union[date, str]"}),(0,s.jsx)(t.td,{children:"The date of the data."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"free_float"}),(0,s.jsx)(t.td,{children:"float"}),(0,s.jsx)(t.td,{children:"Percentage of unrestricted shares of a publicly-traded company."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"float_shares"}),(0,s.jsx)(t.td,{children:"float"}),(0,s.jsx)(t.td,{children:"Number of shares available for trading by the general public."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"outstanding_shares"}),(0,s.jsx)(t.td,{children:"float"}),(0,s.jsx)(t.td,{children:"Total number of shares of a publicly-traded company."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"source"}),(0,s.jsx)(t.td,{children:"str"}),(0,s.jsx)(t.td,{children:"Source of the received data."})]})]})]})}),(0,s.jsx)(a.A,{value:"fmp",label:"fmp",children:(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"symbol"}),(0,s.jsx)(t.td,{children:"str"}),(0,s.jsx)(t.td,{children:"Symbol representing the entity requested in the data."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"date"}),(0,s.jsx)(t.td,{children:"Union[date, str]"}),(0,s.jsx)(t.td,{children:"The date of the data."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"free_float"}),(0,s.jsx)(t.td,{children:"float"}),(0,s.jsx)(t.td,{children:"Percentage of unrestricted shares of a publicly-traded company."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"float_shares"}),(0,s.jsx)(t.td,{children:"float"}),(0,s.jsx)(t.td,{children:"Number of shares available for trading by the general public."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"outstanding_shares"}),(0,s.jsx)(t.td,{children:"float"}),(0,s.jsx)(t.td,{children:"Total number of shares of a publicly-traded company."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"source"}),(0,s.jsx)(t.td,{children:"str"}),(0,s.jsx)(t.td,{children:"Source of the received data."})]})]})]})}),(0,s.jsx)(a.A,{value:"intrinio",label:"intrinio",children:(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"symbol"}),(0,s.jsx)(t.td,{children:"str"}),(0,s.jsx)(t.td,{children:"Symbol representing the entity requested in the data."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"date"}),(0,s.jsx)(t.td,{children:"Union[date, str]"}),(0,s.jsx)(t.td,{children:"The date of the data."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"free_float"}),(0,s.jsx)(t.td,{children:"float"}),(0,s.jsx)(t.td,{children:"Percentage of unrestricted shares of a publicly-traded company."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"float_shares"}),(0,s.jsx)(t.td,{children:"float"}),(0,s.jsx)(t.td,{children:"Number of shares available for trading by the general public."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"outstanding_shares"}),(0,s.jsx)(t.td,{children:"float"}),(0,s.jsx)(t.td,{children:"Total number of shares of a publicly-traded company."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"source"}),(0,s.jsx)(t.td,{children:"str"}),(0,s.jsx)(t.td,{children:"Source of the received data."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"adjusted_outstanding_shares"}),(0,s.jsx)(t.td,{children:"float"}),(0,s.jsx)(t.td,{children:"Total number of shares of a publicly-traded company, adjusted for splits."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"public_float"}),(0,s.jsx)(t.td,{children:"float"}),(0,s.jsx)(t.td,{children:"Aggregate market value of the shares of a publicly-traded company."})]})]})]})}),(0,s.jsx)(a.A,{value:"yfinance",label:"yfinance",children:(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"symbol"}),(0,s.jsx)(t.td,{children:"str"}),(0,s.jsx)(t.td,{children:"Symbol representing the entity requested in the data."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"date"}),(0,s.jsx)(t.td,{children:"Union[date, str]"}),(0,s.jsx)(t.td,{children:"The date of the data."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"free_float"}),(0,s.jsx)(t.td,{children:"float"}),(0,s.jsx)(t.td,{children:"Percentage of unrestricted shares of a publicly-traded company."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"float_shares"}),(0,s.jsx)(t.td,{children:"float"}),(0,s.jsx)(t.td,{children:"Number of shares available for trading by the general public."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"outstanding_shares"}),(0,s.jsx)(t.td,{children:"float"}),(0,s.jsx)(t.td,{children:"Total number of shares of a publicly-traded company."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"source"}),(0,s.jsx)(t.td,{children:"str"}),(0,s.jsx)(t.td,{children:"Source of the received data."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"implied_shares_outstanding"}),(0,s.jsx)(t.td,{children:"int"}),(0,s.jsx)(t.td,{children:"Implied Shares Outstanding of common equity, assuming the conversion of all convertible subsidiary equity into common."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"short_interest"}),(0,s.jsx)(t.td,{children:"int"}),(0,s.jsx)(t.td,{children:"Number of shares that are reported short."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"short_percent_of_float"}),(0,s.jsx)(t.td,{children:"float"}),(0,s.jsx)(t.td,{children:"Percentage of shares that are reported short, as a normalized percent."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"days_to_cover"}),(0,s.jsx)(t.td,{children:"float"}),(0,s.jsx)(t.td,{children:"Number of days to repurchase the shares as a ratio of average daily volume"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"short_interest_prev_month"}),(0,s.jsx)(t.td,{children:"int"}),(0,s.jsx)(t.td,{children:"Number of shares that were reported short in the previous month."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"short_interest_prev_date"}),(0,s.jsx)(t.td,{children:"date"}),(0,s.jsx)(t.td,{children:"Date of the previous month's report."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"insider_ownership"}),(0,s.jsx)(t.td,{children:"float"}),(0,s.jsx)(t.td,{children:"Percentage of shares held by insiders, as a normalized percent."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"institution_ownership"}),(0,s.jsx)(t.td,{children:"float"}),(0,s.jsx)(t.td,{children:"Percentage of shares held by institutions, as a normalized percent."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"institution_float_ownership"}),(0,s.jsx)(t.td,{children:"float"}),(0,s.jsx)(t.td,{children:"Percentage of float held by institutions, as a normalized percent."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"institutions_count"}),(0,s.jsx)(t.td,{children:"int"}),(0,s.jsx)(t.td,{children:"Number of institutions holding shares."})]})]})]})})]})]})}function u(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(x,{...e})}):x(e)}},19365:(e,t,r)=>{r.d(t,{A:()=>a});r(96540);var s=r(34164);const n={tabItem:"tabItem_Ymn6"};var d=r(74848);function a(e){let{children:t,hidden:r,className:a}=e;return(0,d.jsx)("div",{role:"tabpanel",className:(0,s.A)(n.tabItem,a),hidden:r,children:t})}},18228:(e,t,r)=>{r.d(t,{A:()=>S});var s=r(56347),n=r(23104),d=r(96540),a=r(205),l=r(57485),i=r(31682),c=r(89466);function o(e){return function(e){return d.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,d.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:s,default:n}}=e;return{value:t,label:r,attributes:s,default:n}}))}function h(e){const{values:t,children:r}=e;return(0,d.useMemo)((()=>{const e=t??o(r);return function(e){const t=(0,i.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function x(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function u(e){let{queryString:t=!1,groupId:r}=e;const n=(0,s.W6)(),a=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,l.aZ)(a),(0,d.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(n.location.search);t.set(a,e),n.replace({...n.location,search:t.toString()})}),[a,n])]}function j(e){const{defaultValue:t,queryString:r=!1,groupId:s}=e,n=h(e),[l,i]=(0,d.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!x({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const s=r.find((e=>e.default))??r[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:t,tabValues:n}))),[o,j]=u({queryString:r,groupId:s}),[f,m]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,n]=(0,c.Dv)(r);return[s,(0,d.useCallback)((e=>{r&&n.set(e)}),[r,n])]}({groupId:s}),p=(()=>{const e=o??f;return x({value:e,tabValues:n})?e:null})();(0,a.A)((()=>{p&&i(p)}),[p]);return{selectedValue:l,selectValue:(0,d.useCallback)((e=>{if(!x({value:e,tabValues:n}))throw new Error(`Can't select invalid tab value=${e}`);i(e),j(e),m(e)}),[j,m,n]),tabValues:n}}var f=r(92303),m=r(34164);const p={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};var b=r(74848);function y(e){let{className:t,block:r,selectedValue:d,selectValue:a,tabValues:l}=e;const i=[],{blockElementScrollPositionUntilNextRender:c}=(0,n.a_)(),{pathname:o}=(0,s.zy)(),h=e=>{const t=e.currentTarget,r=i.indexOf(t),s=l[r].value;s!==d&&(c(t),a(s))},x=e=>{let t=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{const r=i.indexOf(e.currentTarget)+1;t=i[r]??i[0];break}case"ArrowLeft":{const r=i.indexOf(e.currentTarget)-1;t=i[r]??i[i.length-1];break}}t?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,m.A)("_group-tab list-none -ml-7 my-6 overflow-auto"),children:l.map((e=>{let{value:t,label:r,attributes:s}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:d===t?0:-1,"aria-selected":d===t,ref:e=>i.push(e),onKeyDown:x,onClick:h,...s,className:(0,m.A)("font-bold tracking-widest w-fit px-3 inline-flex py-1 uppercase border-b text-lg cursor-pointer",p.tabItem,s?.className,{"border-b-2 pointer-events-none":d===t,"border-b-2 text-[#669dcb] border-[#669dcb]":d===t&&o.startsWith("/workspace"),"border-b-2 text-[#FB923C] border-[#FB923C]":d===t&&o.startsWith("/sdk"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":d!==t&&o.startsWith("/sdk"),"border-b-2 text-[#FB923C] border-[#FB923C]":d===t&&o.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":d!==t&&o.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#abd2f1] hover:border-[#abd2f1]":d!==t&&o.startsWith("/workspace")}),children:r??t},t)}))})}function v(e){let{lazy:t,children:r,selectedValue:s}=e;if(r=Array.isArray(r)?r:[r],t){const e=r.find((e=>e.props.value===s));return e?(0,d.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:r.map(((e,t)=>(0,d.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function g(e){const t=j(e);return(0,b.jsxs)("div",{className:(0,m.A)("tabs-container",p.tabList),children:[(0,b.jsx)(y,{...e,...t}),(0,b.jsx)(v,{...e,...t})]})}function S(e){const t=(0,f.A)();return(0,b.jsx)(g,{...e},String(t))}},28453:(e,t,r)=>{r.d(t,{R:()=>a,x:()=>l});var s=r(96540);const n={},d=s.createContext(n);function a(e){const t=s.useContext(d);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),s.createElement(d.Provider,{value:t},e.children)}}}]);