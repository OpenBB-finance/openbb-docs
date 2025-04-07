"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[65064],{22952:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>o,contentTitle:()=>c,default:()=>x,frontMatter:()=>i,metadata:()=>a,toc:()=>h});var l=n(74848),s=n(28453),t=n(18228),d=n(19365);const i={title:"Gdp Forecast",description:"Get Forecasted GDP Data"},c=void 0,a={id:"platform/data_models/GdpForecast",title:"Gdp Forecast",description:"Get Forecasted GDP Data",source:"@site/content/platform/data_models/GdpForecast.md",sourceDirName:"platform/data_models",slug:"/platform/data_models/GdpForecast",permalink:"/platform/data_models/GdpForecast",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/platform/data_models/GdpForecast.md",tags:[],version:"current",frontMatter:{title:"Gdp Forecast",description:"Get Forecasted GDP Data"},sidebar:"tutorialSidebar",previous:{title:"Futures Instruments",permalink:"/platform/data_models/FuturesInstruments"},next:{title:"Gdp Nominal",permalink:"/platform/data_models/GdpNominal"}},o={},h=[{value:"Implementation details",id:"implementation-details",level:2},{value:"Class names",id:"class-names",level:3},{value:"Import Statement",id:"import-statement",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Data",id:"data",level:2}];function u(e){const r={code:"code",em:"em",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components},{Details:n}=r;return n||function(e,r){throw new Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(r.hr,{}),"\n",(0,l.jsx)(r.h2,{id:"implementation-details",children:"Implementation details"}),"\n",(0,l.jsx)(r.h3,{id:"class-names",children:"Class names"}),"\n",(0,l.jsxs)(r.table,{children:[(0,l.jsx)(r.thead,{children:(0,l.jsxs)(r.tr,{children:[(0,l.jsx)(r.th,{children:"Model name"}),(0,l.jsx)(r.th,{children:"Parameters class"}),(0,l.jsx)(r.th,{children:"Data class"})]})}),(0,l.jsx)(r.tbody,{children:(0,l.jsxs)(r.tr,{children:[(0,l.jsx)(r.td,{children:(0,l.jsx)(r.code,{children:"GdpForecast"})}),(0,l.jsx)(r.td,{children:(0,l.jsx)(r.code,{children:"GdpForecastQueryParams"})}),(0,l.jsx)(r.td,{children:(0,l.jsx)(r.code,{children:"GdpForecastData"})})]})})]}),"\n",(0,l.jsx)(r.h3,{id:"import-statement",children:"Import Statement"}),"\n",(0,l.jsx)(r.pre,{children:(0,l.jsx)(r.code,{className:"language-python",children:"from openbb_core.provider.standard_models.gdp_forecast import (\nGdpForecastData,\nGdpForecastQueryParams,\n)\n"})}),"\n",(0,l.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,l.jsxs)(t.A,{children:[(0,l.jsxs)(d.A,{value:"standard",label:"standard",children:[(0,l.jsxs)(r.p,{children:[(0,l.jsx)(r.strong,{children:(0,l.jsx)(r.code,{children:"start_date"})}),": ",(0,l.jsx)(r.code,{children:"Union[date, str]"})]}),(0,l.jsx)(r.p,{children:"Start date of the data, in YYYY-MM-DD format."}),(0,l.jsxs)(r.p,{children:["\u2022 ",(0,l.jsx)(r.em,{children:"Optional:"})," ",(0,l.jsx)(r.code,{children:"True"})]}),(0,l.jsx)(r.hr,{}),(0,l.jsxs)(r.p,{children:[(0,l.jsx)(r.strong,{children:(0,l.jsx)(r.code,{children:"end_date"})}),": ",(0,l.jsx)(r.code,{children:"Union[date, str]"})]}),(0,l.jsx)(r.p,{children:"End date of the data, in YYYY-MM-DD format."}),(0,l.jsxs)(r.p,{children:["\u2022 ",(0,l.jsx)(r.em,{children:"Optional:"})," ",(0,l.jsx)(r.code,{children:"True"})]})]}),(0,l.jsxs)(d.A,{value:"oecd",label:"oecd",children:[(0,l.jsxs)(r.p,{children:[(0,l.jsx)(r.strong,{children:(0,l.jsx)(r.code,{children:"start_date"})}),": ",(0,l.jsx)(r.code,{children:"Union[date, str]"})]}),(0,l.jsx)(r.p,{children:"Start date of the data, in YYYY-MM-DD format."}),(0,l.jsxs)(r.p,{children:["\u2022 ",(0,l.jsx)(r.em,{children:"Optional:"})," ",(0,l.jsx)(r.code,{children:"True"})]}),(0,l.jsx)(r.hr,{}),(0,l.jsxs)(r.p,{children:[(0,l.jsx)(r.strong,{children:(0,l.jsx)(r.code,{children:"end_date"})}),": ",(0,l.jsx)(r.code,{children:"Union[date, str]"})]}),(0,l.jsx)(r.p,{children:"End date of the data, in YYYY-MM-DD format."}),(0,l.jsxs)(r.p,{children:["\u2022 ",(0,l.jsx)(r.em,{children:"Optional:"})," ",(0,l.jsx)(r.code,{children:"True"})]}),(0,l.jsx)(r.hr,{}),(0,l.jsxs)(r.p,{children:[(0,l.jsx)(r.strong,{children:(0,l.jsx)(r.code,{children:"country"})}),": ",(0,l.jsx)(r.code,{children:"Union[str, list[str]]"})]}),(0,l.jsx)(r.p,{children:"Country, or countries, to get forward GDP projections for. Default is all. Multiple items allowed for provider(s): oecd."}),(0,l.jsxs)(n,{children:[(0,l.jsx)("summary",{mdxType:"summary",children:"Choices"}),(0,l.jsxs)(r.ul,{children:["\n",(0,l.jsx)(r.li,{children:(0,l.jsx)(r.code,{children:"argentina"})}),"\n",(0,l.jsx)(r.li,{children:(0,l.jsx)(r.code,{children:"asia"})}),"\n",(0,l.jsx)(r.li,{children:(0,l.jsx)(r.code,{children:"australia"})}),"\n",(0,l.jsx)(r.li,{children:(0,l.jsx)(r.code,{children:"austria"})}),"\n",(0,l.jsx)(r.li,{children:(0,l.jsx)(r.code,{children:"belgium"})}),"\n",(0,l.jsx)(r.li,{children:(0,l.jsx)(r.code,{children:"brazil"})}),"\n",(0,l.jsx)(r.li,{children:(0,l.jsx)(r.code,{children:"bulgaria"})}),"\n",(0,l.jsx)(r.li,{children:(0,l.jsx)(r.code,{children:"canada"})}),"\n",(0,l.jsx)(r.li,{children:(0,l.jsx)(r.code,{children:"chile"})}),"\n",(0,l.jsx)(r.li,{children:(0,l.jsx)(r.code,{children:"china"})}),"\n",(0,l.jsx)(r.li,{children:(0,l.jsx)(r.code,{children:"colombia"})}),"\n",(0,l.jsx)(r.li,{children:(0,l.jsx)(r.code,{children:"costa_rica"})}),"\n",(0,l.jsx)(r.li,{children:(0,l.jsx)(r.code,{children:"croatia"})}),"\n",(0,l.jsx)(r.li,{children:(0,l.jsx)(r.code,{children:"czech_republic"})}),"\n",(0,l.jsx)(r.li,{children:(0,l.jsx)(r.code,{children:"denmark"})}),"\n",(0,l.jsx)(r.li,{children:(0,l.jsx)(r.code,{children:"estonia"})}),"\n",(0,l.jsx)(r.li,{children:(0,l.jsx)(r.code,{children:"finland"})}),"\n",(0,l.jsx)(r.li,{children:(0,l.jsx)(r.code,{children:"france"})}),"\n",(0,l.jsx)(r.li,{children:(0,l.jsx)(r.code,{children:"germany"})}),"\n",(0,l.jsx)(r.li,{children:(0,l.jsx)(r.code,{children:"greece"})}),"\n",(0,l.jsx)(r.li,{children:(0,l.jsx)(r.code,{children:"hungary"})}),"\n",(0,l.jsx)(r.li,{children:(0,l.jsx)(r.code,{children:"iceland"})}),"\n",(0,l.jsx)(r.li,{children:(0,l.jsx)(r.code,{children:"india"})}),"\n",(0,l.jsx)(r.li,{children:(0,l.jsx)(r.code,{children:"indonesia"})}),"\n",(0,l.jsx)(r.li,{children:(0,l.jsx)(r.code,{children:"ireland"})}),"\n",(0,l.jsx)(r.li,{children:(0,l.jsx)(r.code,{children:"israel"})}),"\n",(0,l.jsx)(r.li,{children:(0,l.jsx)(r.code,{children:"italy"})}),"\n",(0,l.jsx)(r.li,{children:(0,l.jsx)(r.code,{children:"japan"})}),"\n",(0,l.jsx)(r.li,{children:(0,l.jsx)(r.code,{children:"korea"})}),"\n",(0,l.jsx)(r.li,{children:(0,l.jsx)(r.code,{children:"latvia"})}),"\n",(0,l.jsx)(r.li,{children:(0,l.jsx)(r.code,{children:"lithuania"})}),"\n",(0,l.jsx)(r.li,{children:(0,l.jsx)(r.code,{children:"luxembourg"})}),"\n",(0,l.jsx)(r.li,{children:(0,l.jsx)(r.code,{children:"mexico"})}),"\n",(0,l.jsx)(r.li,{children:(0,l.jsx)(r.code,{children:"netherlands"})}),"\n",(0,l.jsx)(r.li,{children:(0,l.jsx)(r.code,{children:"new_zealand"})}),"\n",(0,l.jsx)(r.li,{children:(0,l.jsx)(r.code,{children:"norway"})}),"\n",(0,l.jsx)(r.li,{children:(0,l.jsx)(r.code,{children:"peru"})}),"\n",(0,l.jsx)(r.li,{children:(0,l.jsx)(r.code,{children:"poland"})}),"\n",(0,l.jsx)(r.li,{children:(0,l.jsx)(r.code,{children:"portugal"})}),"\n",(0,l.jsx)(r.li,{children:(0,l.jsx)(r.code,{children:"romania"})}),"\n",(0,l.jsx)(r.li,{children:(0,l.jsx)(r.code,{children:"russia"})}),"\n",(0,l.jsx)(r.li,{children:(0,l.jsx)(r.code,{children:"slovak_republic"})}),"\n",(0,l.jsx)(r.li,{children:(0,l.jsx)(r.code,{children:"slovenia"})}),"\n",(0,l.jsx)(r.li,{children:(0,l.jsx)(r.code,{children:"south_africa"})}),"\n",(0,l.jsx)(r.li,{children:(0,l.jsx)(r.code,{children:"spain"})}),"\n",(0,l.jsx)(r.li,{children:(0,l.jsx)(r.code,{children:"sweden"})}),"\n",(0,l.jsx)(r.li,{children:(0,l.jsx)(r.code,{children:"switzerland"})}),"\n",(0,l.jsx)(r.li,{children:(0,l.jsx)(r.code,{children:"turkey"})}),"\n",(0,l.jsx)(r.li,{children:(0,l.jsx)(r.code,{children:"united_kingdom"})}),"\n",(0,l.jsx)(r.li,{children:(0,l.jsx)(r.code,{children:"united_states"})}),"\n",(0,l.jsx)(r.li,{children:(0,l.jsx)(r.code,{children:"other_major_oil_producers"})}),"\n",(0,l.jsx)(r.li,{children:(0,l.jsx)(r.code,{children:"rest_of_the_world"})}),"\n",(0,l.jsx)(r.li,{children:(0,l.jsx)(r.code,{children:"world"})}),"\n",(0,l.jsx)(r.li,{children:(0,l.jsx)(r.code,{children:"all"})}),"\n"]})]}),(0,l.jsxs)(r.p,{children:["\u2022 ",(0,l.jsx)(r.em,{children:"Default:"})," ",(0,l.jsx)(r.code,{children:"all"})]}),(0,l.jsxs)(r.p,{children:["\u2022 ",(0,l.jsx)(r.em,{children:"Optional:"})," ",(0,l.jsx)(r.code,{children:"True"})]}),(0,l.jsx)(r.hr,{}),(0,l.jsxs)(r.p,{children:[(0,l.jsx)(r.strong,{children:(0,l.jsx)(r.code,{children:"frequency"})}),": ",(0,l.jsx)(r.code,{children:"Literal['annual', 'quarter']"})]}),(0,l.jsx)(r.p,{children:"Frequency of the data, default is annual."}),(0,l.jsxs)(r.p,{children:["\u2022 ",(0,l.jsx)(r.em,{children:"Default:"})," ",(0,l.jsx)(r.code,{children:"annual"})]}),(0,l.jsxs)(r.p,{children:["\u2022 ",(0,l.jsx)(r.em,{children:"Optional:"})," ",(0,l.jsx)(r.code,{children:"True"})]}),(0,l.jsx)(r.hr,{}),(0,l.jsxs)(r.p,{children:[(0,l.jsx)(r.strong,{children:(0,l.jsx)(r.code,{children:"units"})}),": ",(0,l.jsx)(r.code,{children:"Literal['current_prices', 'volume', 'capita', 'growth', 'deflator']"})]}),(0,l.jsxs)(n,{children:[(0,l.jsx)("summary",{mdxType:"summary",children:"Description"}),(0,l.jsxs)(r.p,{children:["Units of the data, default is volume (chain linked volume, 2015).",(0,l.jsx)("br",{}),"\n'current_prices', 'volume', and 'capita' are expressed in USD; 'growth' as a percent; 'deflator' as an index."]})]}),(0,l.jsxs)(r.p,{children:["\u2022 ",(0,l.jsx)(r.em,{children:"Default:"})," ",(0,l.jsx)(r.code,{children:"volume"})]}),(0,l.jsxs)(r.p,{children:["\u2022 ",(0,l.jsx)(r.em,{children:"Optional:"})," ",(0,l.jsx)(r.code,{children:"True"})]})]})]}),"\n",(0,l.jsx)(r.h2,{id:"data",children:"Data"}),"\n",(0,l.jsxs)(t.A,{children:[(0,l.jsxs)(d.A,{value:"standard",label:"standard",children:[(0,l.jsxs)(r.p,{children:[(0,l.jsx)(r.strong,{children:(0,l.jsx)(r.code,{children:"date"})}),": ",(0,l.jsx)(r.code,{children:"Union[date, str]"})]}),(0,l.jsx)(r.p,{children:"The date of the data."}),(0,l.jsxs)(r.p,{children:[(0,l.jsx)(r.strong,{children:(0,l.jsx)(r.code,{children:"country"})}),": ",(0,l.jsx)(r.code,{children:"str"})]}),(0,l.jsx)(r.p,{children:"None"}),(0,l.jsxs)(r.p,{children:[(0,l.jsx)(r.strong,{children:(0,l.jsx)(r.code,{children:"value"})}),": ",(0,l.jsx)(r.code,{children:"Union[int, float]"})]}),(0,l.jsx)(r.p,{children:"Forecasted GDP value for the country and date."})]}),(0,l.jsxs)(d.A,{value:"oecd",label:"oecd",children:[(0,l.jsxs)(r.p,{children:[(0,l.jsx)(r.strong,{children:(0,l.jsx)(r.code,{children:"date"})}),": ",(0,l.jsx)(r.code,{children:"Union[date, str]"})]}),(0,l.jsx)(r.p,{children:"The date of the data."}),(0,l.jsxs)(r.p,{children:[(0,l.jsx)(r.strong,{children:(0,l.jsx)(r.code,{children:"country"})}),": ",(0,l.jsx)(r.code,{children:"str"})]}),(0,l.jsx)(r.p,{children:"None"}),(0,l.jsxs)(r.p,{children:[(0,l.jsx)(r.strong,{children:(0,l.jsx)(r.code,{children:"value"})}),": ",(0,l.jsx)(r.code,{children:"Union[int, float]"})]}),(0,l.jsx)(r.p,{children:"Forecasted GDP value for the country and date."})]})]})]})}function x(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,l.jsx)(r,{...e,children:(0,l.jsx)(u,{...e})}):u(e)}},19365:(e,r,n)=>{n.d(r,{A:()=>d});n(96540);var l=n(34164);const s={tabItem:"tabItem_Ymn6"};var t=n(74848);function d(e){let{children:r,hidden:n,className:d}=e;return(0,t.jsx)("div",{role:"tabpanel",className:(0,l.A)(s.tabItem,d),hidden:n,children:r})}},18228:(e,r,n)=>{n.d(r,{A:()=>w});var l=n(56347),s=n(23104),t=n(96540),d=n(205),i=n(57485),c=n(31682),a=n(89466);function o(e){return function(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:r,label:n,attributes:l,default:s}}=e;return{value:r,label:n,attributes:l,default:s}}))}function h(e){const{values:r,children:n}=e;return(0,t.useMemo)((()=>{const e=r??o(n);return function(e){const r=(0,c.X)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,n])}function u(e){let{value:r,tabValues:n}=e;return n.some((e=>e.value===r))}function x(e){let{queryString:r=!1,groupId:n}=e;const s=(0,l.W6)(),d=function(e){let{queryString:r=!1,groupId:n}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:r,groupId:n});return[(0,i.aZ)(d),(0,t.useCallback)((e=>{if(!d)return;const r=new URLSearchParams(s.location.search);r.set(d,e),s.replace({...s.location,search:r.toString()})}),[d,s])]}function j(e){const{defaultValue:r,queryString:n=!1,groupId:l}=e,s=h(e),[i,c]=(0,t.useState)((()=>function(e){let{defaultValue:r,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!u({value:r,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const l=n.find((e=>e.default))??n[0];if(!l)throw new Error("Unexpected error: 0 tabValues");return l.value}({defaultValue:r,tabValues:s}))),[o,j]=x({queryString:n,groupId:l}),[p,m]=function(e){let{groupId:r}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(r),[l,s]=(0,a.Dv)(n);return[l,(0,t.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:l}),f=(()=>{const e=o??p;return u({value:e,tabValues:s})?e:null})();(0,d.A)((()=>{f&&c(f)}),[f]);return{selectedValue:i,selectValue:(0,t.useCallback)((e=>{if(!u({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);c(e),j(e),m(e)}),[j,m,s]),tabValues:s}}var p=n(92303),m=n(34164);const f={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};var b=n(74848);function v(e){let{className:r,block:n,selectedValue:t,selectValue:d,tabValues:i}=e;const c=[],{blockElementScrollPositionUntilNextRender:a}=(0,s.a_)(),{pathname:o}=(0,l.zy)(),h=e=>{const r=e.currentTarget,n=c.indexOf(r),l=i[n].value;l!==t&&(a(r),d(l))},u=e=>{let r=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;r=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;r=c[n]??c[c.length-1];break}}r?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,m.A)("_group-tab list-none -ml-7 my-6 overflow-auto"),children:i.map((e=>{let{value:r,label:n,attributes:l}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:t===r?0:-1,"aria-selected":t===r,ref:e=>c.push(e),onKeyDown:u,onClick:h,...l,className:(0,m.A)("font-bold tracking-widest w-fit px-3 inline-flex py-1 uppercase border-b text-lg cursor-pointer",f.tabItem,l?.className,{"border-b-2 pointer-events-none":t===r,"border-b-2 text-[#669dcb] border-[#669dcb]":t===r&&o.startsWith("/workspace"),"border-b-2 text-[#FB923C] border-[#FB923C]":t===r&&o.startsWith("/sdk"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":t!==r&&o.startsWith("/sdk"),"border-b-2 text-[#FB923C] border-[#FB923C]":t===r&&o.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":t!==r&&o.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#abd2f1] hover:border-[#abd2f1]":t!==r&&o.startsWith("/workspace")}),children:n??r},r)}))})}function g(e){let{lazy:r,children:n,selectedValue:l}=e;if(n=Array.isArray(n)?n:[n],r){const e=n.find((e=>e.props.value===l));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:n.map(((e,r)=>(0,t.cloneElement)(e,{key:r,hidden:e.props.value!==l})))})}function y(e){const r=j(e);return(0,b.jsxs)("div",{className:(0,m.A)("tabs-container",f.tabList),children:[(0,b.jsx)(v,{...e,...r}),(0,b.jsx)(g,{...e,...r})]})}function w(e){const r=(0,p.A)();return(0,b.jsx)(y,{...e},String(r))}},28453:(e,r,n)=>{n.d(r,{R:()=>d,x:()=>i});var l=n(96540);const s={},t=l.createContext(s);function d(e){const r=l.useContext(t);return l.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),l.createElement(t.Provider,{value:r},e.children)}}}]);