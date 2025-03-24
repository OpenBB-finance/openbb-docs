"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[32332],{1253:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>u,contentTitle:()=>o,default:()=>f,frontMatter:()=>l,metadata:()=>c,toc:()=>h});var n=t(74848),a=t(28453),i=t(94331),s=t(18228),d=t(19365);const l={title:"revenue_per_geography",description:"Learn about the revenue per geography data with the geographic revenue  data Python function in this documentation page. Understand the symbol, period,  structure, and provider parameters. Explore the returns, results, metadata, and  the data structure including the date, geographic segment, and revenue by region  (Americas, Europe, Greater China, Japan, Rest of Asia Pacific).",keywords:["geographic revenue data","revenue per geography","Python function","documentation page","symbol parameter","period parameter","structure parameter","provider parameter","returns","results","metadata","data","date","geographic segment","Americas","Europe","Greater China","Japan","Rest of Asia Pacific"]},o=void 0,c={id:"platform/reference/equity/fundamental/revenue_per_geography",title:"revenue_per_geography",description:"Learn about the revenue per geography data with the geographic revenue  data Python function in this documentation page. Understand the symbol, period,  structure, and provider parameters. Explore the returns, results, metadata, and  the data structure including the date, geographic segment, and revenue by region  (Americas, Europe, Greater China, Japan, Rest of Asia Pacific).",source:"@site/content/platform/reference/equity/fundamental/revenue_per_geography.md",sourceDirName:"platform/reference/equity/fundamental",slug:"/platform/reference/equity/fundamental/revenue_per_geography",permalink:"/platform/reference/equity/fundamental/revenue_per_geography",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/platform/reference/equity/fundamental/revenue_per_geography.md",tags:[],version:"current",frontMatter:{title:"revenue_per_geography",description:"Learn about the revenue per geography data with the geographic revenue  data Python function in this documentation page. Understand the symbol, period,  structure, and provider parameters. Explore the returns, results, metadata, and  the data structure including the date, geographic segment, and revenue by region  (Americas, Europe, Greater China, Japan, Rest of Asia Pacific).",keywords:["geographic revenue data","revenue per geography","Python function","documentation page","symbol parameter","period parameter","structure parameter","provider parameter","returns","results","metadata","data","date","geographic segment","Americas","Europe","Greater China","Japan","Rest of Asia Pacific"]},sidebar:"tutorialSidebar",previous:{title:"reported_financials",permalink:"/platform/reference/equity/fundamental/reported_financials"},next:{title:"revenue_per_segment",permalink:"/platform/reference/equity/fundamental/revenue_per_segment"}},u={},h=[{value:"Examples",id:"examples",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Data",id:"data",level:2}];function p(e){const r={code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.A,{title:"equity/fundamental/revenue_per_geography - Reference | OpenBB Platform Docs"}),"\n","\n",(0,n.jsx)(r.p,{children:"Get the geographic breakdown of revenue for a given company over time."}),"\n",(0,n.jsx)(r.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:"from openbb import obb\nobb.equity.fundamental.revenue_per_geography(symbol='AAPL', provider='fmp')\nobb.equity.fundamental.revenue_per_geography(symbol='AAPL', period=quarter, provider='fmp')\n"})}),"\n",(0,n.jsx)(r.hr,{}),"\n",(0,n.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(s.A,{children:[(0,n.jsx)(d.A,{value:"standard",label:"standard",children:(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Name"}),(0,n.jsx)(r.th,{children:"Type"}),(0,n.jsx)(r.th,{children:"Description"}),(0,n.jsx)(r.th,{children:"Default"}),(0,n.jsx)(r.th,{children:"Optional"})]})}),(0,n.jsx)(r.tbody,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"symbol"}),(0,n.jsx)(r.td,{children:"str"}),(0,n.jsx)(r.td,{children:"Symbol to get data for."}),(0,n.jsx)(r.td,{}),(0,n.jsx)(r.td,{children:"False"})]})})]})}),(0,n.jsx)(d.A,{value:"fmp",label:"fmp",children:(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Name"}),(0,n.jsx)(r.th,{children:"Type"}),(0,n.jsx)(r.th,{children:"Description"}),(0,n.jsx)(r.th,{children:"Default"}),(0,n.jsx)(r.th,{children:"Optional"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"symbol"}),(0,n.jsx)(r.td,{children:"str"}),(0,n.jsx)(r.td,{children:"Symbol to get data for."}),(0,n.jsx)(r.td,{}),(0,n.jsx)(r.td,{children:"False"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"period"}),(0,n.jsx)(r.td,{children:"Literal['quarter', 'annual']"}),(0,n.jsx)(r.td,{children:"Time period of the data to return."}),(0,n.jsx)(r.td,{children:"annual"}),(0,n.jsx)(r.td,{children:"True"})]})]})]})})]}),"\n",(0,n.jsx)(r.hr,{}),"\n",(0,n.jsx)(r.h2,{id:"returns",children:"Returns"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",metastring:"wordwrap",children:"OBBject\n    results : List[RevenueGeographic]\n        Serializable results.\n\n    provider : Optional[Literal['fmp']]\n        Provider name.\n\n    warnings : Optional[List[Warning_]]\n        List of warnings.\n\n    chart : Optional[Chart]\n        Chart object.\n\n    extra : Dict[str, Any]\n        Extra info.\n"})}),"\n",(0,n.jsx)(r.hr,{}),"\n",(0,n.jsx)(r.h2,{id:"data",children:"Data"}),"\n",(0,n.jsxs)(s.A,{children:[(0,n.jsx)(d.A,{value:"standard",label:"standard",children:(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Name"}),(0,n.jsx)(r.th,{children:"Type"}),(0,n.jsx)(r.th,{children:"Description"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"period_ending"}),(0,n.jsx)(r.td,{children:"date"}),(0,n.jsx)(r.td,{children:"The end date of the reporting period."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"fiscal_period"}),(0,n.jsx)(r.td,{children:"str"}),(0,n.jsx)(r.td,{children:"The fiscal period of the reporting period."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"fiscal_year"}),(0,n.jsx)(r.td,{children:"int"}),(0,n.jsx)(r.td,{children:"The fiscal year of the reporting period."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"filing_date"}),(0,n.jsx)(r.td,{children:"date"}),(0,n.jsx)(r.td,{children:"The filing date of the report."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"region"}),(0,n.jsx)(r.td,{children:"str"}),(0,n.jsx)(r.td,{children:"The region represented by the revenue data."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"revenue"}),(0,n.jsx)(r.td,{children:"Union[int, float]"}),(0,n.jsx)(r.td,{children:"The total revenue attributed to the region."})]})]})]})}),(0,n.jsx)(d.A,{value:"fmp",label:"fmp",children:(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Name"}),(0,n.jsx)(r.th,{children:"Type"}),(0,n.jsx)(r.th,{children:"Description"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"period_ending"}),(0,n.jsx)(r.td,{children:"date"}),(0,n.jsx)(r.td,{children:"The end date of the reporting period."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"fiscal_period"}),(0,n.jsx)(r.td,{children:"str"}),(0,n.jsx)(r.td,{children:"The fiscal period of the reporting period."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"fiscal_year"}),(0,n.jsx)(r.td,{children:"int"}),(0,n.jsx)(r.td,{children:"The fiscal year of the reporting period."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"filing_date"}),(0,n.jsx)(r.td,{children:"date"}),(0,n.jsx)(r.td,{children:"The filing date of the report."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"region"}),(0,n.jsx)(r.td,{children:"str"}),(0,n.jsx)(r.td,{children:"The region represented by the revenue data."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"revenue"}),(0,n.jsx)(r.td,{children:"Union[int, float]"}),(0,n.jsx)(r.td,{children:"The total revenue attributed to the region."})]})]})]})})]})]})}function f(e={}){const{wrapper:r}={...(0,a.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},19365:(e,r,t)=>{t.d(r,{A:()=>s});t(96540);var n=t(34164);const a={tabItem:"tabItem_Ymn6"};var i=t(74848);function s(e){let{children:r,hidden:t,className:s}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,n.A)(a.tabItem,s),hidden:t,children:r})}},94331:(e,r,t)=>{t.d(r,{A:()=>i});t(96540);var n=t(5260),a=t(74848);function i(e){let{title:r}=e;return(0,a.jsx)(n.A,{children:(0,a.jsx)("title",{children:r})})}},18228:(e,r,t)=>{t.d(r,{A:()=>_});var n=t(56347),a=t(23104),i=t(96540),s=t(205),d=t(57485),l=t(31682),o=t(89466);function c(e){return function(e){return i.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:r,label:t,attributes:n,default:a}}=e;return{value:r,label:t,attributes:n,default:a}}))}function u(e){const{values:r,children:t}=e;return(0,i.useMemo)((()=>{const e=r??c(t);return function(e){const r=(0,l.X)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,t])}function h(e){let{value:r,tabValues:t}=e;return t.some((e=>e.value===r))}function p(e){let{queryString:r=!1,groupId:t}=e;const a=(0,n.W6)(),s=function(e){let{queryString:r=!1,groupId:t}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:r,groupId:t});return[(0,d.aZ)(s),(0,i.useCallback)((e=>{if(!s)return;const r=new URLSearchParams(a.location.search);r.set(s,e),a.replace({...a.location,search:r.toString()})}),[s,a])]}function f(e){const{defaultValue:r,queryString:t=!1,groupId:n}=e,a=u(e),[d,l]=(0,i.useState)((()=>function(e){let{defaultValue:r,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!h({value:r,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const n=t.find((e=>e.default))??t[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:r,tabValues:a}))),[c,f]=p({queryString:t,groupId:n}),[x,m]=function(e){let{groupId:r}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(r),[n,a]=(0,o.Dv)(t);return[n,(0,i.useCallback)((e=>{t&&a.set(e)}),[t,a])]}({groupId:n}),g=(()=>{const e=c??x;return h({value:e,tabValues:a})?e:null})();(0,s.A)((()=>{g&&l(g)}),[g]);return{selectedValue:d,selectValue:(0,i.useCallback)((e=>{if(!h({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);l(e),f(e),m(e)}),[f,m,a]),tabValues:a}}var x=t(92303),m=t(34164);const g={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};var b=t(74848);function j(e){let{className:r,block:t,selectedValue:i,selectValue:s,tabValues:d}=e;const l=[],{blockElementScrollPositionUntilNextRender:o}=(0,a.a_)(),{pathname:c}=(0,n.zy)(),u=e=>{const r=e.currentTarget,t=l.indexOf(r),n=d[t].value;n!==i&&(o(r),s(n))},h=e=>{let r=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;r=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;r=l[t]??l[l.length-1];break}}r?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,m.A)("_group-tab list-none -ml-7 my-6 overflow-auto"),children:d.map((e=>{let{value:r,label:t,attributes:n}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:i===r?0:-1,"aria-selected":i===r,ref:e=>l.push(e),onKeyDown:h,onClick:u,...n,className:(0,m.A)("font-bold tracking-widest w-fit px-3 inline-flex py-1 uppercase border-b text-lg cursor-pointer",g.tabItem,n?.className,{"border-b-2 pointer-events-none":i===r,"border-b-2 text-[#669dcb] border-[#669dcb]":i===r&&c.startsWith("/workspace"),"border-b-2 text-[#FB923C] border-[#FB923C]":i===r&&c.startsWith("/sdk"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":i!==r&&c.startsWith("/sdk"),"border-b-2 text-[#FB923C] border-[#FB923C]":i===r&&c.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":i!==r&&c.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#abd2f1] hover:border-[#abd2f1]":i!==r&&c.startsWith("/workspace")}),children:t??r},r)}))})}function v(e){let{lazy:r,children:t,selectedValue:n}=e;if(t=Array.isArray(t)?t:[t],r){const e=t.find((e=>e.props.value===n));return e?(0,i.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:t.map(((e,r)=>(0,i.cloneElement)(e,{key:r,hidden:e.props.value!==n})))})}function y(e){const r=f(e);return(0,b.jsxs)("div",{className:(0,m.A)("tabs-container",g.tabList),children:[(0,b.jsx)(j,{...e,...r}),(0,b.jsx)(v,{...e,...r})]})}function _(e){const r=(0,x.A)();return(0,b.jsx)(y,{...e},String(r))}},28453:(e,r,t)=>{t.d(r,{R:()=>s,x:()=>d});var n=t(96540);const a={},i=n.createContext(a);function s(e){const r=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function d(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),n.createElement(i.Provider,{value:r},e.children)}}}]);