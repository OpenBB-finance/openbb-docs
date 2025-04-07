"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[18187],{49487:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>a,contentTitle:()=>o,default:()=>j,frontMatter:()=>c,metadata:()=>i,toc:()=>h});var s=n(74848),t=n(28453),l=n(18228),d=n(19365);const c={title:"Price Performance",description:"Get price performance data for a given stock"},o=void 0,i={id:"platform/data_models/PricePerformance",title:"Price Performance",description:"Get price performance data for a given stock",source:"@site/content/platform/data_models/PricePerformance.md",sourceDirName:"platform/data_models",slug:"/platform/data_models/PricePerformance",permalink:"/platform/data_models/PricePerformance",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/platform/data_models/PricePerformance.md",tags:[],version:"current",frontMatter:{title:"Price Performance",description:"Get price performance data for a given stock"},sidebar:"tutorialSidebar",previous:{title:"Port Volume",permalink:"/platform/data_models/PortVolume"},next:{title:"Price Target",permalink:"/platform/data_models/PriceTarget"}},a={},h=[{value:"Implementation details",id:"implementation-details",level:2},{value:"Class names",id:"class-names",level:3},{value:"Import Statement",id:"import-statement",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Data",id:"data",level:2}];function x(e){const r={code:"code",em:"em",h2:"h2",h3:"h3",hr:"hr",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.hr,{}),"\n",(0,s.jsx)(r.h2,{id:"implementation-details",children:"Implementation details"}),"\n",(0,s.jsx)(r.h3,{id:"class-names",children:"Class names"}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Model name"}),(0,s.jsx)(r.th,{children:"Parameters class"}),(0,s.jsx)(r.th,{children:"Data class"})]})}),(0,s.jsx)(r.tbody,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"PricePerformance"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"PricePerformanceQueryParams"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"PricePerformanceData"})})]})})]}),"\n",(0,s.jsx)(r.h3,{id:"import-statement",children:"Import Statement"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-python",children:"from openbb_core.provider.standard_models. import (\nPricePerformanceData,\nPricePerformanceQueryParams,\n)\n"})}),"\n",(0,s.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(l.A,{children:[(0,s.jsxs)(d.A,{value:"standard",label:"standard",children:[(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"symbol"})}),": ",(0,s.jsx)(r.code,{children:"Union[str, list[str]]"})]}),(0,s.jsx)(r.p,{children:"Symbol to get data for. Multiple items allowed for provider(s): finviz, fmp."}),(0,s.jsxs)(r.p,{children:["\u2022 ",(0,s.jsx)(r.em,{children:"Optional:"})," ",(0,s.jsx)(r.code,{children:"False"})]})]}),(0,s.jsxs)(d.A,{value:"finviz",label:"finviz",children:[(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"symbol"})}),": ",(0,s.jsx)(r.code,{children:"Union[str, list[str]]"})]}),(0,s.jsx)(r.p,{children:"Symbol to get data for. Multiple items allowed for provider(s): finviz, fmp."}),(0,s.jsxs)(r.p,{children:["\u2022 ",(0,s.jsx)(r.em,{children:"Optional:"})," ",(0,s.jsx)(r.code,{children:"False"})]})]}),(0,s.jsxs)(d.A,{value:"fmp",label:"fmp",children:[(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"symbol"})}),": ",(0,s.jsx)(r.code,{children:"Union[str, list[str]]"})]}),(0,s.jsx)(r.p,{children:"Symbol to get data for. Multiple items allowed for provider(s): finviz, fmp."}),(0,s.jsxs)(r.p,{children:["\u2022 ",(0,s.jsx)(r.em,{children:"Optional:"})," ",(0,s.jsx)(r.code,{children:"False"})]})]})]}),"\n",(0,s.jsx)(r.h2,{id:"data",children:"Data"}),"\n",(0,s.jsxs)(l.A,{children:[(0,s.jsxs)(d.A,{value:"standard",label:"standard",children:[(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"symbol"})}),": ",(0,s.jsx)(r.code,{children:"str"})]}),(0,s.jsx)(r.p,{children:"Symbol representing the entity requested in the data."}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"one_day"})}),": ",(0,s.jsx)(r.code,{children:"float"})]}),(0,s.jsx)(r.p,{children:"One-day return."}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"wtd"})}),": ",(0,s.jsx)(r.code,{children:"float"})]}),(0,s.jsx)(r.p,{children:"Week to date return."}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"one_week"})}),": ",(0,s.jsx)(r.code,{children:"float"})]}),(0,s.jsx)(r.p,{children:"One-week return."}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"mtd"})}),": ",(0,s.jsx)(r.code,{children:"float"})]}),(0,s.jsx)(r.p,{children:"Month to date return."}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"one_month"})}),": ",(0,s.jsx)(r.code,{children:"float"})]}),(0,s.jsx)(r.p,{children:"One-month return."}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"qtd"})}),": ",(0,s.jsx)(r.code,{children:"float"})]}),(0,s.jsx)(r.p,{children:"Quarter to date return."}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"three_month"})}),": ",(0,s.jsx)(r.code,{children:"float"})]}),(0,s.jsx)(r.p,{children:"Three-month return."}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"six_month"})}),": ",(0,s.jsx)(r.code,{children:"float"})]}),(0,s.jsx)(r.p,{children:"Six-month return."}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"ytd"})}),": ",(0,s.jsx)(r.code,{children:"float"})]}),(0,s.jsx)(r.p,{children:"Year to date return."}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"one_year"})}),": ",(0,s.jsx)(r.code,{children:"float"})]}),(0,s.jsx)(r.p,{children:"One-year return."}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"two_year"})}),": ",(0,s.jsx)(r.code,{children:"float"})]}),(0,s.jsx)(r.p,{children:"Two-year return."}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"three_year"})}),": ",(0,s.jsx)(r.code,{children:"float"})]}),(0,s.jsx)(r.p,{children:"Three-year return."}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"four_year"})}),": ",(0,s.jsx)(r.code,{children:"float"})]}),(0,s.jsx)(r.p,{children:"Four-year"}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"five_year"})}),": ",(0,s.jsx)(r.code,{children:"float"})]}),(0,s.jsx)(r.p,{children:"Five-year return."}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"ten_year"})}),": ",(0,s.jsx)(r.code,{children:"float"})]}),(0,s.jsx)(r.p,{children:"Ten-year return."}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"max"})}),": ",(0,s.jsx)(r.code,{children:"float"})]}),(0,s.jsx)(r.p,{children:"Return from the beginning of the time series."})]}),(0,s.jsxs)(d.A,{value:"finviz",label:"finviz",children:[(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"symbol"})}),": ",(0,s.jsx)(r.code,{children:"str"})]}),(0,s.jsx)(r.p,{children:"The ticker symbol."}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"one_day"})}),": ",(0,s.jsx)(r.code,{children:"float"})]}),(0,s.jsx)(r.p,{children:"One-day return."}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"wtd"})}),": ",(0,s.jsx)(r.code,{children:"float"})]}),(0,s.jsx)(r.p,{children:"Week to date return."}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"one_week"})}),": ",(0,s.jsx)(r.code,{children:"float"})]}),(0,s.jsx)(r.p,{children:"One-week return."}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"mtd"})}),": ",(0,s.jsx)(r.code,{children:"float"})]}),(0,s.jsx)(r.p,{children:"Month to date return."}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"one_month"})}),": ",(0,s.jsx)(r.code,{children:"float"})]}),(0,s.jsx)(r.p,{children:"One-month return."}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"qtd"})}),": ",(0,s.jsx)(r.code,{children:"float"})]}),(0,s.jsx)(r.p,{children:"Quarter to date return."}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"three_month"})}),": ",(0,s.jsx)(r.code,{children:"float"})]}),(0,s.jsx)(r.p,{children:"Three-month return."}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"six_month"})}),": ",(0,s.jsx)(r.code,{children:"float"})]}),(0,s.jsx)(r.p,{children:"Six-month return."}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"ytd"})}),": ",(0,s.jsx)(r.code,{children:"float"})]}),(0,s.jsx)(r.p,{children:"Year to date return."}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"one_year"})}),": ",(0,s.jsx)(r.code,{children:"float"})]}),(0,s.jsx)(r.p,{children:"One-year return."}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"two_year"})}),": ",(0,s.jsx)(r.code,{children:"float"})]}),(0,s.jsx)(r.p,{children:"Two-year return."}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"three_year"})}),": ",(0,s.jsx)(r.code,{children:"float"})]}),(0,s.jsx)(r.p,{children:"Three-year return."}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"four_year"})}),": ",(0,s.jsx)(r.code,{children:"float"})]}),(0,s.jsx)(r.p,{children:"Four-year"}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"five_year"})}),": ",(0,s.jsx)(r.code,{children:"float"})]}),(0,s.jsx)(r.p,{children:"Five-year return."}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"ten_year"})}),": ",(0,s.jsx)(r.code,{children:"float"})]}),(0,s.jsx)(r.p,{children:"Ten-year return."}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"max"})}),": ",(0,s.jsx)(r.code,{children:"float"})]}),(0,s.jsx)(r.p,{children:"Return from the beginning of the time series."}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"volatility_week"})}),": ",(0,s.jsx)(r.code,{children:"float"})]}),(0,s.jsx)(r.p,{children:"One-week realized volatility, as a normalized percent."}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"volatility_month"})}),": ",(0,s.jsx)(r.code,{children:"float"})]}),(0,s.jsx)(r.p,{children:"One-month realized volatility, as a normalized percent."}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"price"})}),": ",(0,s.jsx)(r.code,{children:"float"})]}),(0,s.jsx)(r.p,{children:"Last Price."}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"volume"})}),": ",(0,s.jsx)(r.code,{children:"float"})]}),(0,s.jsx)(r.p,{children:"Current volume."}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"average_volume"})}),": ",(0,s.jsx)(r.code,{children:"float"})]}),(0,s.jsx)(r.p,{children:"Average daily volume."}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"relative_volume"})}),": ",(0,s.jsx)(r.code,{children:"float"})]}),(0,s.jsx)(r.p,{children:"Relative volume as a ratio of current volume to average volume."}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"analyst_recommendation"})}),": ",(0,s.jsx)(r.code,{children:"float"})]}),(0,s.jsx)(r.p,{children:"The analyst consensus, on a scale of 1-5 where 1 is a buy and 5 is a sell."})]}),(0,s.jsxs)(d.A,{value:"fmp",label:"fmp",children:[(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"symbol"})}),": ",(0,s.jsx)(r.code,{children:"str"})]}),(0,s.jsx)(r.p,{children:"The ticker symbol."}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"one_day"})}),": ",(0,s.jsx)(r.code,{children:"float"})]}),(0,s.jsx)(r.p,{children:"One-day return."}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"wtd"})}),": ",(0,s.jsx)(r.code,{children:"float"})]}),(0,s.jsx)(r.p,{children:"Week to date return."}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"one_week"})}),": ",(0,s.jsx)(r.code,{children:"float"})]}),(0,s.jsx)(r.p,{children:"One-week return."}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"mtd"})}),": ",(0,s.jsx)(r.code,{children:"float"})]}),(0,s.jsx)(r.p,{children:"Month to date return."}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"one_month"})}),": ",(0,s.jsx)(r.code,{children:"float"})]}),(0,s.jsx)(r.p,{children:"One-month return."}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"qtd"})}),": ",(0,s.jsx)(r.code,{children:"float"})]}),(0,s.jsx)(r.p,{children:"Quarter to date return."}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"three_month"})}),": ",(0,s.jsx)(r.code,{children:"float"})]}),(0,s.jsx)(r.p,{children:"Three-month return."}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"six_month"})}),": ",(0,s.jsx)(r.code,{children:"float"})]}),(0,s.jsx)(r.p,{children:"Six-month return."}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"ytd"})}),": ",(0,s.jsx)(r.code,{children:"float"})]}),(0,s.jsx)(r.p,{children:"Year to date return."}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"one_year"})}),": ",(0,s.jsx)(r.code,{children:"float"})]}),(0,s.jsx)(r.p,{children:"One-year return."}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"two_year"})}),": ",(0,s.jsx)(r.code,{children:"float"})]}),(0,s.jsx)(r.p,{children:"Two-year return."}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"three_year"})}),": ",(0,s.jsx)(r.code,{children:"float"})]}),(0,s.jsx)(r.p,{children:"Three-year return."}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"four_year"})}),": ",(0,s.jsx)(r.code,{children:"float"})]}),(0,s.jsx)(r.p,{children:"Four-year"}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"five_year"})}),": ",(0,s.jsx)(r.code,{children:"float"})]}),(0,s.jsx)(r.p,{children:"Five-year return."}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"ten_year"})}),": ",(0,s.jsx)(r.code,{children:"float"})]}),(0,s.jsx)(r.p,{children:"Ten-year return."}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"max"})}),": ",(0,s.jsx)(r.code,{children:"float"})]}),(0,s.jsx)(r.p,{children:"Return from the beginning of the time series."})]})]})]})}function j(e={}){const{wrapper:r}={...(0,t.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(x,{...e})}):x(e)}},19365:(e,r,n)=>{n.d(r,{A:()=>d});n(96540);var s=n(34164);const t={tabItem:"tabItem_Ymn6"};var l=n(74848);function d(e){let{children:r,hidden:n,className:d}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,s.A)(t.tabItem,d),hidden:n,children:r})}},18228:(e,r,n)=>{n.d(r,{A:()=>_});var s=n(56347),t=n(23104),l=n(96540),d=n(205),c=n(57485),o=n(31682),i=n(89466);function a(e){return function(e){return l.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,l.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:r,label:n,attributes:s,default:t}}=e;return{value:r,label:n,attributes:s,default:t}}))}function h(e){const{values:r,children:n}=e;return(0,l.useMemo)((()=>{const e=r??a(n);return function(e){const r=(0,o.X)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,n])}function x(e){let{value:r,tabValues:n}=e;return n.some((e=>e.value===r))}function j(e){let{queryString:r=!1,groupId:n}=e;const t=(0,s.W6)(),d=function(e){let{queryString:r=!1,groupId:n}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:r,groupId:n});return[(0,c.aZ)(d),(0,l.useCallback)((e=>{if(!d)return;const r=new URLSearchParams(t.location.search);r.set(d,e),t.replace({...t.location,search:r.toString()})}),[d,t])]}function u(e){const{defaultValue:r,queryString:n=!1,groupId:s}=e,t=h(e),[c,o]=(0,l.useState)((()=>function(e){let{defaultValue:r,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!x({value:r,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const s=n.find((e=>e.default))??n[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:r,tabValues:t}))),[a,u]=j({queryString:n,groupId:s}),[p,f]=function(e){let{groupId:r}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(r),[s,t]=(0,i.Dv)(n);return[s,(0,l.useCallback)((e=>{n&&t.set(e)}),[n,t])]}({groupId:s}),m=(()=>{const e=a??p;return x({value:e,tabValues:t})?e:null})();(0,d.A)((()=>{m&&o(m)}),[m]);return{selectedValue:c,selectValue:(0,l.useCallback)((e=>{if(!x({value:e,tabValues:t}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),f(e)}),[u,f,t]),tabValues:t}}var p=n(92303),f=n(34164);const m={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};var g=n(74848);function b(e){let{className:r,block:n,selectedValue:l,selectValue:d,tabValues:c}=e;const o=[],{blockElementScrollPositionUntilNextRender:i}=(0,t.a_)(),{pathname:a}=(0,s.zy)(),h=e=>{const r=e.currentTarget,n=o.indexOf(r),s=c[n].value;s!==l&&(i(r),d(s))},x=e=>{let r=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{const n=o.indexOf(e.currentTarget)+1;r=o[n]??o[0];break}case"ArrowLeft":{const n=o.indexOf(e.currentTarget)-1;r=o[n]??o[o.length-1];break}}r?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,f.A)("_group-tab list-none -ml-7 my-6 overflow-auto"),children:c.map((e=>{let{value:r,label:n,attributes:s}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:l===r?0:-1,"aria-selected":l===r,ref:e=>o.push(e),onKeyDown:x,onClick:h,...s,className:(0,f.A)("font-bold tracking-widest w-fit px-3 inline-flex py-1 uppercase border-b text-lg cursor-pointer",m.tabItem,s?.className,{"border-b-2 pointer-events-none":l===r,"border-b-2 text-[#669dcb] border-[#669dcb]":l===r&&a.startsWith("/workspace"),"border-b-2 text-[#FB923C] border-[#FB923C]":l===r&&a.startsWith("/sdk"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":l!==r&&a.startsWith("/sdk"),"border-b-2 text-[#FB923C] border-[#FB923C]":l===r&&a.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":l!==r&&a.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#abd2f1] hover:border-[#abd2f1]":l!==r&&a.startsWith("/workspace")}),children:n??r},r)}))})}function v(e){let{lazy:r,children:n,selectedValue:s}=e;if(n=Array.isArray(n)?n:[n],r){const e=n.find((e=>e.props.value===s));return e?(0,l.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:n.map(((e,r)=>(0,l.cloneElement)(e,{key:r,hidden:e.props.value!==s})))})}function y(e){const r=u(e);return(0,g.jsxs)("div",{className:(0,f.A)("tabs-container",m.tabList),children:[(0,g.jsx)(b,{...e,...r}),(0,g.jsx)(v,{...e,...r})]})}function _(e){const r=(0,p.A)();return(0,g.jsx)(y,{...e},String(r))}},28453:(e,r,n)=>{n.d(r,{R:()=>d,x:()=>c});var s=n(96540);const t={},l=s.createContext(t);function d(e){const r=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),s.createElement(l.Provider,{value:r},e.children)}}}]);