"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[32958],{24286:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>x,frontMatter:()=>a,metadata:()=>o,toc:()=>h});var s=n(74848),t=n(28453),d=n(18228),l=n(19365);const a={title:"Fred Series",description:"Get data by series ID from FRED"},i=void 0,o={id:"platform/data_models/FredSeries",title:"Fred Series",description:"Get data by series ID from FRED",source:"@site/content/platform/data_models/FredSeries.md",sourceDirName:"platform/data_models",slug:"/platform/data_models/FredSeries",permalink:"/platform/data_models/FredSeries",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/platform/data_models/FredSeries.md",tags:[],version:"current",frontMatter:{title:"Fred Series",description:"Get data by series ID from FRED"},sidebar:"tutorialSidebar",previous:{title:"Fred Search",permalink:"/platform/data_models/FredSearch"},next:{title:"Futures Curve",permalink:"/platform/data_models/FuturesCurve"}},c={},h=[{value:"Implementation details",id:"implementation-details",level:2},{value:"Class names",id:"class-names",level:3},{value:"Import Statement",id:"import-statement",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Data",id:"data",level:2}];function u(e){const r={code:"code",em:"em",h2:"h2",h3:"h3",hr:"hr",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.R)(),...e.components},{Details:n}=r;return n||function(e,r){throw new Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.hr,{}),"\n",(0,s.jsx)(r.h2,{id:"implementation-details",children:"Implementation details"}),"\n",(0,s.jsx)(r.h3,{id:"class-names",children:"Class names"}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Model name"}),(0,s.jsx)(r.th,{children:"Parameters class"}),(0,s.jsx)(r.th,{children:"Data class"})]})}),(0,s.jsx)(r.tbody,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"FredSeries"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"FredSeriesQueryParams"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"FredSeriesData"})})]})})]}),"\n",(0,s.jsx)(r.h3,{id:"import-statement",children:"Import Statement"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-python",children:"from openbb_core.provider.standard_models. import (\nFredSeriesData,\nFredSeriesQueryParams,\n)\n"})}),"\n",(0,s.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(d.A,{children:[(0,s.jsxs)(l.A,{value:"standard",label:"standard",children:[(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"symbol"})}),": ",(0,s.jsx)(r.code,{children:"Union[str, list[str]]"})]}),(0,s.jsx)(r.p,{children:"Symbol to get data for. Multiple items allowed for provider(s): fred."}),(0,s.jsxs)(r.p,{children:["\u2022 ",(0,s.jsx)(r.em,{children:"Optional:"})," ",(0,s.jsx)(r.code,{children:"False"})]}),(0,s.jsx)(r.hr,{}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"start_date"})}),": ",(0,s.jsx)(r.code,{children:"Union[date, str]"})]}),(0,s.jsx)(r.p,{children:"Start date of the data, in YYYY-MM-DD format."}),(0,s.jsxs)(r.p,{children:["\u2022 ",(0,s.jsx)(r.em,{children:"Optional:"})," ",(0,s.jsx)(r.code,{children:"True"})]}),(0,s.jsx)(r.hr,{}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"end_date"})}),": ",(0,s.jsx)(r.code,{children:"Union[date, str]"})]}),(0,s.jsx)(r.p,{children:"End date of the data, in YYYY-MM-DD format."}),(0,s.jsxs)(r.p,{children:["\u2022 ",(0,s.jsx)(r.em,{children:"Optional:"})," ",(0,s.jsx)(r.code,{children:"True"})]}),(0,s.jsx)(r.hr,{}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"limit"})}),": ",(0,s.jsx)(r.code,{children:"int"})]}),(0,s.jsx)(r.p,{children:"The number of data entries to return."}),(0,s.jsxs)(r.p,{children:["\u2022 ",(0,s.jsx)(r.em,{children:"Default:"})," ",(0,s.jsx)(r.code,{children:"100000"})]}),(0,s.jsxs)(r.p,{children:["\u2022 ",(0,s.jsx)(r.em,{children:"Optional:"})," ",(0,s.jsx)(r.code,{children:"True"})]})]}),(0,s.jsxs)(l.A,{value:"fred",label:"fred",children:[(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"symbol"})}),": ",(0,s.jsx)(r.code,{children:"Union[str, list[str]]"})]}),(0,s.jsx)(r.p,{children:"Symbol to get data for. Multiple items allowed for provider(s): fred."}),(0,s.jsxs)(r.p,{children:["\u2022 ",(0,s.jsx)(r.em,{children:"Optional:"})," ",(0,s.jsx)(r.code,{children:"False"})]}),(0,s.jsx)(r.hr,{}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"start_date"})}),": ",(0,s.jsx)(r.code,{children:"Union[date, str]"})]}),(0,s.jsx)(r.p,{children:"Start date of the data, in YYYY-MM-DD format."}),(0,s.jsxs)(r.p,{children:["\u2022 ",(0,s.jsx)(r.em,{children:"Optional:"})," ",(0,s.jsx)(r.code,{children:"True"})]}),(0,s.jsx)(r.hr,{}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"end_date"})}),": ",(0,s.jsx)(r.code,{children:"Union[date, str]"})]}),(0,s.jsx)(r.p,{children:"End date of the data, in YYYY-MM-DD format."}),(0,s.jsxs)(r.p,{children:["\u2022 ",(0,s.jsx)(r.em,{children:"Optional:"})," ",(0,s.jsx)(r.code,{children:"True"})]}),(0,s.jsx)(r.hr,{}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"limit"})}),": ",(0,s.jsx)(r.code,{children:"int"})]}),(0,s.jsx)(r.p,{children:"The number of data entries to return."}),(0,s.jsxs)(r.p,{children:["\u2022 ",(0,s.jsx)(r.em,{children:"Default:"})," ",(0,s.jsx)(r.code,{children:"100000"})]}),(0,s.jsxs)(r.p,{children:["\u2022 ",(0,s.jsx)(r.em,{children:"Optional:"})," ",(0,s.jsx)(r.code,{children:"True"})]}),(0,s.jsx)(r.hr,{}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"frequency"})}),": ",(0,s.jsx)(r.code,{children:"Literal['a', 'q', 'm', 'w', 'd', 'wef', 'weth', 'wew', 'wetu', 'wem', 'wesu', 'wesa', 'bwew', 'bwem']"})]}),(0,s.jsxs)(n,{children:[(0,s.jsx)("summary",{mdxType:"summary",children:"Description"}),(0,s.jsxs)(r.p,{children:["Frequency aggregation to convert high frequency data to lower frequency.",(0,s.jsx)("br",{}),"\nNone = No change",(0,s.jsx)("br",{}),"\na = Annual",(0,s.jsx)("br",{}),"\nq = Quarterly",(0,s.jsx)("br",{}),"\nm = Monthly",(0,s.jsx)("br",{}),"\nw = Weekly",(0,s.jsx)("br",{}),"\nd = Daily",(0,s.jsx)("br",{}),"\nwef = Weekly, Ending Friday",(0,s.jsx)("br",{}),"\nweth = Weekly, Ending Thursday",(0,s.jsx)("br",{}),"\nwew = Weekly, Ending Wednesday",(0,s.jsx)("br",{}),"\nwetu = Weekly, Ending Tuesday",(0,s.jsx)("br",{}),"\nwem = Weekly, Ending Monday",(0,s.jsx)("br",{}),"\nwesu = Weekly, Ending Sunday",(0,s.jsx)("br",{}),"\nwesa = Weekly, Ending Saturday",(0,s.jsx)("br",{}),"\nbwew = Biweekly, Ending Wednesday",(0,s.jsx)("br",{}),"\nbwem = Biweekly, Ending Monday"]})]}),(0,s.jsxs)(r.p,{children:["\u2022 ",(0,s.jsx)(r.em,{children:"Optional:"})," ",(0,s.jsx)(r.code,{children:"True"})]}),(0,s.jsx)(r.hr,{}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"aggregation_method"})}),": ",(0,s.jsx)(r.code,{children:"Literal['avg', 'sum', 'eop']"})]}),(0,s.jsxs)(n,{children:[(0,s.jsx)("summary",{mdxType:"summary",children:"Description"}),(0,s.jsxs)(r.p,{children:["A key that indicates the aggregation method used for frequency aggregation.",(0,s.jsx)("br",{}),"\nThis parameter has no affect if the frequency parameter is not set.",(0,s.jsx)("br",{}),"\navg = Average",(0,s.jsx)("br",{}),"\nsum = Sum",(0,s.jsx)("br",{}),"\neop = End of Period"]})]}),(0,s.jsxs)(r.p,{children:["\u2022 ",(0,s.jsx)(r.em,{children:"Default:"})," ",(0,s.jsx)(r.code,{children:"eop"})]}),(0,s.jsxs)(r.p,{children:["\u2022 ",(0,s.jsx)(r.em,{children:"Optional:"})," ",(0,s.jsx)(r.code,{children:"True"})]}),(0,s.jsx)(r.hr,{}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"transform"})}),": ",(0,s.jsx)(r.code,{children:"Literal['chg', 'ch1', 'pch', 'pc1', 'pca', 'cch', 'cca', 'log']"})]}),(0,s.jsxs)(n,{children:[(0,s.jsx)("summary",{mdxType:"summary",children:"Description"}),(0,s.jsxs)(r.p,{children:["Transformation type",(0,s.jsx)("br",{}),"\nNone = No transformation",(0,s.jsx)("br",{}),"\nchg = Change",(0,s.jsx)("br",{}),"\nch1 = Change from Year Ago",(0,s.jsx)("br",{}),"\npch = Percent Change",(0,s.jsx)("br",{}),"\npc1 = Percent Change from Year Ago",(0,s.jsx)("br",{}),"\npca = Compounded Annual Rate of Change",(0,s.jsx)("br",{}),"\ncch = Continuously Compounded Rate of Change",(0,s.jsx)("br",{}),"\ncca = Continuously Compounded Annual Rate of Change",(0,s.jsx)("br",{}),"\nlog = Natural Log"]})]}),(0,s.jsxs)(r.p,{children:["\u2022 ",(0,s.jsx)(r.em,{children:"Optional:"})," ",(0,s.jsx)(r.code,{children:"True"})]})]}),(0,s.jsxs)(l.A,{value:"intrinio",label:"intrinio",children:[(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"symbol"})}),": ",(0,s.jsx)(r.code,{children:"Union[str, list[str]]"})]}),(0,s.jsx)(r.p,{children:"Symbol to get data for. Multiple items allowed for provider(s): fred."}),(0,s.jsxs)(r.p,{children:["\u2022 ",(0,s.jsx)(r.em,{children:"Optional:"})," ",(0,s.jsx)(r.code,{children:"False"})]}),(0,s.jsx)(r.hr,{}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"start_date"})}),": ",(0,s.jsx)(r.code,{children:"Union[date, str]"})]}),(0,s.jsx)(r.p,{children:"Start date of the data, in YYYY-MM-DD format."}),(0,s.jsxs)(r.p,{children:["\u2022 ",(0,s.jsx)(r.em,{children:"Optional:"})," ",(0,s.jsx)(r.code,{children:"True"})]}),(0,s.jsx)(r.hr,{}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"end_date"})}),": ",(0,s.jsx)(r.code,{children:"Union[date, str]"})]}),(0,s.jsx)(r.p,{children:"End date of the data, in YYYY-MM-DD format."}),(0,s.jsxs)(r.p,{children:["\u2022 ",(0,s.jsx)(r.em,{children:"Optional:"})," ",(0,s.jsx)(r.code,{children:"True"})]}),(0,s.jsx)(r.hr,{}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"limit"})}),": ",(0,s.jsx)(r.code,{children:"int"})]}),(0,s.jsx)(r.p,{children:"The number of data entries to return."}),(0,s.jsxs)(r.p,{children:["\u2022 ",(0,s.jsx)(r.em,{children:"Default:"})," ",(0,s.jsx)(r.code,{children:"100000"})]}),(0,s.jsxs)(r.p,{children:["\u2022 ",(0,s.jsx)(r.em,{children:"Optional:"})," ",(0,s.jsx)(r.code,{children:"True"})]}),(0,s.jsx)(r.hr,{}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"all_pages"})}),": ",(0,s.jsx)(r.code,{children:"bool"})]}),(0,s.jsx)(r.p,{children:"Returns all pages of data from the API call at once."}),(0,s.jsxs)(r.p,{children:["\u2022 ",(0,s.jsx)(r.em,{children:"Default:"})," ",(0,s.jsx)(r.code,{children:"False"})]}),(0,s.jsxs)(r.p,{children:["\u2022 ",(0,s.jsx)(r.em,{children:"Optional:"})," ",(0,s.jsx)(r.code,{children:"True"})]}),(0,s.jsx)(r.hr,{}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"sleep"})}),": ",(0,s.jsx)(r.code,{children:"float"})]}),(0,s.jsx)(r.p,{children:"Time to sleep between requests to avoid rate limiting."}),(0,s.jsxs)(r.p,{children:["\u2022 ",(0,s.jsx)(r.em,{children:"Default:"})," ",(0,s.jsx)(r.code,{children:"1.0"})]}),(0,s.jsxs)(r.p,{children:["\u2022 ",(0,s.jsx)(r.em,{children:"Optional:"})," ",(0,s.jsx)(r.code,{children:"True"})]})]})]}),"\n",(0,s.jsx)(r.h2,{id:"data",children:"Data"}),"\n",(0,s.jsxs)(d.A,{children:[(0,s.jsxs)(l.A,{value:"standard",label:"standard",children:[(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"date"})}),": ",(0,s.jsx)(r.code,{children:"Union[date, str]"})]}),(0,s.jsx)(r.p,{children:"The date of the data."})]}),(0,s.jsxs)(l.A,{value:"fred",label:"fred",children:[(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"date"})}),": ",(0,s.jsx)(r.code,{children:"Union[date, str]"})]}),(0,s.jsx)(r.p,{children:"The date of the data."})]}),(0,s.jsxs)(l.A,{value:"intrinio",label:"intrinio",children:[(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"date"})}),": ",(0,s.jsx)(r.code,{children:"Union[date, str]"})]}),(0,s.jsx)(r.p,{children:"The date of the data."}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"value"})}),": ",(0,s.jsx)(r.code,{children:"float"})]}),(0,s.jsx)(r.p,{children:"Value of the index."})]})]})]})}function x(e={}){const{wrapper:r}={...(0,t.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},19365:(e,r,n)=>{n.d(r,{A:()=>l});n(96540);var s=n(34164);const t={tabItem:"tabItem_Ymn6"};var d=n(74848);function l(e){let{children:r,hidden:n,className:l}=e;return(0,d.jsx)("div",{role:"tabpanel",className:(0,s.A)(t.tabItem,l),hidden:n,children:r})}},18228:(e,r,n)=>{n.d(r,{A:()=>w});var s=n(56347),t=n(23104),d=n(96540),l=n(205),a=n(57485),i=n(31682),o=n(89466);function c(e){return function(e){return d.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,d.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:r,label:n,attributes:s,default:t}}=e;return{value:r,label:n,attributes:s,default:t}}))}function h(e){const{values:r,children:n}=e;return(0,d.useMemo)((()=>{const e=r??c(n);return function(e){const r=(0,i.X)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,n])}function u(e){let{value:r,tabValues:n}=e;return n.some((e=>e.value===r))}function x(e){let{queryString:r=!1,groupId:n}=e;const t=(0,s.W6)(),l=function(e){let{queryString:r=!1,groupId:n}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:r,groupId:n});return[(0,a.aZ)(l),(0,d.useCallback)((e=>{if(!l)return;const r=new URLSearchParams(t.location.search);r.set(l,e),t.replace({...t.location,search:r.toString()})}),[l,t])]}function j(e){const{defaultValue:r,queryString:n=!1,groupId:s}=e,t=h(e),[a,i]=(0,d.useState)((()=>function(e){let{defaultValue:r,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!u({value:r,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const s=n.find((e=>e.default))??n[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:r,tabValues:t}))),[c,j]=x({queryString:n,groupId:s}),[p,m]=function(e){let{groupId:r}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(r),[s,t]=(0,o.Dv)(n);return[s,(0,d.useCallback)((e=>{n&&t.set(e)}),[n,t])]}({groupId:s}),f=(()=>{const e=c??p;return u({value:e,tabValues:t})?e:null})();(0,l.A)((()=>{f&&i(f)}),[f]);return{selectedValue:a,selectValue:(0,d.useCallback)((e=>{if(!u({value:e,tabValues:t}))throw new Error(`Can't select invalid tab value=${e}`);i(e),j(e),m(e)}),[j,m,t]),tabValues:t}}var p=n(92303),m=n(34164);const f={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};var b=n(74848);function g(e){let{className:r,block:n,selectedValue:d,selectValue:l,tabValues:a}=e;const i=[],{blockElementScrollPositionUntilNextRender:o}=(0,t.a_)(),{pathname:c}=(0,s.zy)(),h=e=>{const r=e.currentTarget,n=i.indexOf(r),s=a[n].value;s!==d&&(o(r),l(s))},u=e=>{let r=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{const n=i.indexOf(e.currentTarget)+1;r=i[n]??i[0];break}case"ArrowLeft":{const n=i.indexOf(e.currentTarget)-1;r=i[n]??i[i.length-1];break}}r?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,m.A)("_group-tab list-none -ml-7 my-6 overflow-auto"),children:a.map((e=>{let{value:r,label:n,attributes:s}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:d===r?0:-1,"aria-selected":d===r,ref:e=>i.push(e),onKeyDown:u,onClick:h,...s,className:(0,m.A)("font-bold tracking-widest w-fit px-3 inline-flex py-1 uppercase border-b text-lg cursor-pointer",f.tabItem,s?.className,{"border-b-2 pointer-events-none":d===r,"border-b-2 text-[#669dcb] border-[#669dcb]":d===r&&c.startsWith("/workspace"),"border-b-2 text-[#FB923C] border-[#FB923C]":d===r&&c.startsWith("/sdk"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":d!==r&&c.startsWith("/sdk"),"border-b-2 text-[#FB923C] border-[#FB923C]":d===r&&c.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":d!==r&&c.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#abd2f1] hover:border-[#abd2f1]":d!==r&&c.startsWith("/workspace")}),children:n??r},r)}))})}function y(e){let{lazy:r,children:n,selectedValue:s}=e;if(n=Array.isArray(n)?n:[n],r){const e=n.find((e=>e.props.value===s));return e?(0,d.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:n.map(((e,r)=>(0,d.cloneElement)(e,{key:r,hidden:e.props.value!==s})))})}function v(e){const r=j(e);return(0,b.jsxs)("div",{className:(0,m.A)("tabs-container",f.tabList),children:[(0,b.jsx)(g,{...e,...r}),(0,b.jsx)(y,{...e,...r})]})}function w(e){const r=(0,p.A)();return(0,b.jsx)(v,{...e},String(r))}},28453:(e,r,n)=>{n.d(r,{R:()=>l,x:()=>a});var s=n(96540);const t={},d=s.createContext(t);function l(e){const r=s.useContext(d);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),s.createElement(d.Provider,{value:r},e.children)}}}]);