"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[10523],{30638:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>x,frontMatter:()=>l,metadata:()=>o,toc:()=>h});var n=t(74848),s=t(28453),a=t(18228),d=t(19365);const l={title:"Tips Yields",description:"Get current Treasury inflation-protected securities yields"},i=void 0,o={id:"platform/data_models/TipsYields",title:"Tips Yields",description:"Get current Treasury inflation-protected securities yields",source:"@site/content/platform/data_models/TipsYields.md",sourceDirName:"platform/data_models",slug:"/platform/data_models/TipsYields",permalink:"/platform/data_models/TipsYields",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/platform/data_models/TipsYields.md",tags:[],version:"current",frontMatter:{title:"Tips Yields",description:"Get current Treasury inflation-protected securities yields"},sidebar:"tutorialSidebar",previous:{title:"Symbol Map",permalink:"/platform/data_models/SymbolMap"},next:{title:"Top Retail",permalink:"/platform/data_models/TopRetail"}},c={},h=[{value:"Implementation details",id:"implementation-details",level:2},{value:"Class names",id:"class-names",level:3},{value:"Import Statement",id:"import-statement",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Data",id:"data",level:2}];function u(e){const r={code:"code",em:"em",h2:"h2",h3:"h3",hr:"hr",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components},{Details:t}=r;return t||function(e,r){throw new Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.hr,{}),"\n",(0,n.jsx)(r.h2,{id:"implementation-details",children:"Implementation details"}),"\n",(0,n.jsx)(r.h3,{id:"class-names",children:"Class names"}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Model name"}),(0,n.jsx)(r.th,{children:"Parameters class"}),(0,n.jsx)(r.th,{children:"Data class"})]})}),(0,n.jsx)(r.tbody,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"TipsYields"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"TipsYieldsQueryParams"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"TipsYieldsData"})})]})})]}),"\n",(0,n.jsx)(r.h3,{id:"import-statement",children:"Import Statement"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:"from openbb_core.provider.standard_models.tips_yields import (\nTipsYieldsData,\nTipsYieldsQueryParams,\n)\n"})}),"\n",(0,n.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(a.A,{children:[(0,n.jsxs)(d.A,{value:"standard",label:"standard",children:[(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:(0,n.jsx)(r.code,{children:"start_date"})}),": ",(0,n.jsx)(r.code,{children:"Union[date, str]"})]}),(0,n.jsx)(r.p,{children:"Start date of the data, in YYYY-MM-DD format."}),(0,n.jsxs)(r.p,{children:["\u2022 ",(0,n.jsx)(r.em,{children:"Optional:"})," ",(0,n.jsx)(r.code,{children:"True"})]}),(0,n.jsx)(r.hr,{}),(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:(0,n.jsx)(r.code,{children:"end_date"})}),": ",(0,n.jsx)(r.code,{children:"Union[date, str]"})]}),(0,n.jsx)(r.p,{children:"End date of the data, in YYYY-MM-DD format."}),(0,n.jsxs)(r.p,{children:["\u2022 ",(0,n.jsx)(r.em,{children:"Optional:"})," ",(0,n.jsx)(r.code,{children:"True"})]})]}),(0,n.jsxs)(d.A,{value:"fred",label:"fred",children:[(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:(0,n.jsx)(r.code,{children:"start_date"})}),": ",(0,n.jsx)(r.code,{children:"Union[date, str]"})]}),(0,n.jsx)(r.p,{children:"Start date of the data, in YYYY-MM-DD format."}),(0,n.jsxs)(r.p,{children:["\u2022 ",(0,n.jsx)(r.em,{children:"Optional:"})," ",(0,n.jsx)(r.code,{children:"True"})]}),(0,n.jsx)(r.hr,{}),(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:(0,n.jsx)(r.code,{children:"end_date"})}),": ",(0,n.jsx)(r.code,{children:"Union[date, str]"})]}),(0,n.jsx)(r.p,{children:"End date of the data, in YYYY-MM-DD format."}),(0,n.jsxs)(r.p,{children:["\u2022 ",(0,n.jsx)(r.em,{children:"Optional:"})," ",(0,n.jsx)(r.code,{children:"True"})]}),(0,n.jsx)(r.hr,{}),(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:(0,n.jsx)(r.code,{children:"maturity"})}),": ",(0,n.jsx)(r.code,{children:"Literal['5', '10', '20', '30']"})]}),(0,n.jsx)(r.p,{children:"The maturity of the security in years - 5, 10, 20, 30 - defaults to all. Note that the maturity is the tenor of the security, not the time to maturity."}),(0,n.jsxs)(r.p,{children:["\u2022 ",(0,n.jsx)(r.em,{children:"Optional:"})," ",(0,n.jsx)(r.code,{children:"True"})]}),(0,n.jsx)(r.hr,{}),(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:(0,n.jsx)(r.code,{children:"frequency"})}),": ",(0,n.jsx)(r.code,{children:"Literal['a', 'q', 'm', 'w', 'd', 'wef', 'weth', 'wew', 'wetu', 'wem', 'wesu', 'wesa', 'bwew', 'bwem']"})]}),(0,n.jsxs)(t,{children:[(0,n.jsx)("summary",{mdxType:"summary",children:"Description"}),(0,n.jsxs)(r.p,{children:["Frequency aggregation to convert high frequency data to lower frequency.",(0,n.jsx)("br",{}),"\nNone = No change",(0,n.jsx)("br",{}),"\na = Annual",(0,n.jsx)("br",{}),"\nq = Quarterly",(0,n.jsx)("br",{}),"\nm = Monthly",(0,n.jsx)("br",{}),"\nw = Weekly",(0,n.jsx)("br",{}),"\nd = Daily",(0,n.jsx)("br",{}),"\nwef = Weekly, Ending Friday",(0,n.jsx)("br",{}),"\nweth = Weekly, Ending Thursday",(0,n.jsx)("br",{}),"\nwew = Weekly, Ending Wednesday",(0,n.jsx)("br",{}),"\nwetu = Weekly, Ending Tuesday",(0,n.jsx)("br",{}),"\nwem = Weekly, Ending Monday",(0,n.jsx)("br",{}),"\nwesu = Weekly, Ending Sunday",(0,n.jsx)("br",{}),"\nwesa = Weekly, Ending Saturday",(0,n.jsx)("br",{}),"\nbwew = Biweekly, Ending Wednesday",(0,n.jsx)("br",{}),"\nbwem = Biweekly, Ending Monday"]})]}),(0,n.jsxs)(r.p,{children:["\u2022 ",(0,n.jsx)(r.em,{children:"Optional:"})," ",(0,n.jsx)(r.code,{children:"True"})]}),(0,n.jsx)(r.hr,{}),(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:(0,n.jsx)(r.code,{children:"aggregation_method"})}),": ",(0,n.jsx)(r.code,{children:"Literal['avg', 'sum', 'eop']"})]}),(0,n.jsxs)(t,{children:[(0,n.jsx)("summary",{mdxType:"summary",children:"Description"}),(0,n.jsxs)(r.p,{children:["A key that indicates the aggregation method used for frequency aggregation.",(0,n.jsx)("br",{}),"\navg = Average",(0,n.jsx)("br",{}),"\nsum = Sum",(0,n.jsx)("br",{}),"\neop = End of Period"]})]}),(0,n.jsxs)(r.p,{children:["\u2022 ",(0,n.jsx)(r.em,{children:"Optional:"})," ",(0,n.jsx)(r.code,{children:"True"})]}),(0,n.jsx)(r.hr,{}),(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:(0,n.jsx)(r.code,{children:"transform"})}),": ",(0,n.jsx)(r.code,{children:"Literal['chg', 'ch1', 'pch', 'pc1', 'pca', 'cch', 'cca']"})]}),(0,n.jsxs)(t,{children:[(0,n.jsx)("summary",{mdxType:"summary",children:"Description"}),(0,n.jsxs)(r.p,{children:["Transformation type",(0,n.jsx)("br",{}),"\nNone = No transformation",(0,n.jsx)("br",{}),"\nchg = Change",(0,n.jsx)("br",{}),"\nch1 = Change from Year Ago",(0,n.jsx)("br",{}),"\npch = Percent Change",(0,n.jsx)("br",{}),"\npc1 = Percent Change from Year Ago",(0,n.jsx)("br",{}),"\npca = Compounded Annual Rate of Change",(0,n.jsx)("br",{}),"\ncch = Continuously Compounded Rate of Change",(0,n.jsx)("br",{}),"\ncca = Continuously Compounded Annual Rate of Change"]})]}),(0,n.jsxs)(r.p,{children:["\u2022 ",(0,n.jsx)(r.em,{children:"Optional:"})," ",(0,n.jsx)(r.code,{children:"True"})]})]})]}),"\n",(0,n.jsx)(r.h2,{id:"data",children:"Data"}),"\n",(0,n.jsxs)(a.A,{children:[(0,n.jsxs)(d.A,{value:"standard",label:"standard",children:[(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:(0,n.jsx)(r.code,{children:"date"})}),": ",(0,n.jsx)(r.code,{children:"Union[date, str]"})]}),(0,n.jsx)(r.p,{children:"The date of the data."}),(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:(0,n.jsx)(r.code,{children:"symbol"})}),": ",(0,n.jsx)(r.code,{children:"str"})]}),(0,n.jsx)(r.p,{children:"Symbol representing the entity requested in the data."}),(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:(0,n.jsx)(r.code,{children:"due"})}),": ",(0,n.jsx)(r.code,{children:"date"})]}),(0,n.jsx)(r.p,{children:"The due date (maturation date) of the security."}),(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:(0,n.jsx)(r.code,{children:"name"})}),": ",(0,n.jsx)(r.code,{children:"str"})]}),(0,n.jsx)(r.p,{children:"The name of the security."}),(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:(0,n.jsx)(r.code,{children:"value"})}),": ",(0,n.jsx)(r.code,{children:"float"})]}),(0,n.jsx)(r.p,{children:"The yield value."})]}),(0,n.jsxs)(d.A,{value:"fred",label:"fred",children:[(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:(0,n.jsx)(r.code,{children:"date"})}),": ",(0,n.jsx)(r.code,{children:"Union[date, str]"})]}),(0,n.jsx)(r.p,{children:"The date of the data."}),(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:(0,n.jsx)(r.code,{children:"symbol"})}),": ",(0,n.jsx)(r.code,{children:"str"})]}),(0,n.jsx)(r.p,{children:"Symbol representing the entity requested in the data."}),(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:(0,n.jsx)(r.code,{children:"due"})}),": ",(0,n.jsx)(r.code,{children:"date"})]}),(0,n.jsx)(r.p,{children:"The due date (maturation date) of the security."}),(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:(0,n.jsx)(r.code,{children:"name"})}),": ",(0,n.jsx)(r.code,{children:"str"})]}),(0,n.jsx)(r.p,{children:"The name of the security."}),(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:(0,n.jsx)(r.code,{children:"value"})}),": ",(0,n.jsx)(r.code,{children:"float"})]}),(0,n.jsx)(r.p,{children:"The yield value."})]})]})]})}function x(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},19365:(e,r,t)=>{t.d(r,{A:()=>d});t(96540);var n=t(34164);const s={tabItem:"tabItem_Ymn6"};var a=t(74848);function d(e){let{children:r,hidden:t,className:d}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,n.A)(s.tabItem,d),hidden:t,children:r})}},18228:(e,r,t)=>{t.d(r,{A:()=>w});var n=t(56347),s=t(23104),a=t(96540),d=t(205),l=t(57485),i=t(31682),o=t(89466);function c(e){return function(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:r,label:t,attributes:n,default:s}}=e;return{value:r,label:t,attributes:n,default:s}}))}function h(e){const{values:r,children:t}=e;return(0,a.useMemo)((()=>{const e=r??c(t);return function(e){const r=(0,i.X)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,t])}function u(e){let{value:r,tabValues:t}=e;return t.some((e=>e.value===r))}function x(e){let{queryString:r=!1,groupId:t}=e;const s=(0,n.W6)(),d=function(e){let{queryString:r=!1,groupId:t}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:r,groupId:t});return[(0,l.aZ)(d),(0,a.useCallback)((e=>{if(!d)return;const r=new URLSearchParams(s.location.search);r.set(d,e),s.replace({...s.location,search:r.toString()})}),[d,s])]}function p(e){const{defaultValue:r,queryString:t=!1,groupId:n}=e,s=h(e),[l,i]=(0,a.useState)((()=>function(e){let{defaultValue:r,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!u({value:r,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const n=t.find((e=>e.default))??t[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:r,tabValues:s}))),[c,p]=x({queryString:t,groupId:n}),[j,m]=function(e){let{groupId:r}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(r),[n,s]=(0,o.Dv)(t);return[n,(0,a.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:n}),b=(()=>{const e=c??j;return u({value:e,tabValues:s})?e:null})();(0,d.A)((()=>{b&&i(b)}),[b]);return{selectedValue:l,selectValue:(0,a.useCallback)((e=>{if(!u({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);i(e),p(e),m(e)}),[p,m,s]),tabValues:s}}var j=t(92303),m=t(34164);const b={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};var f=t(74848);function y(e){let{className:r,block:t,selectedValue:a,selectValue:d,tabValues:l}=e;const i=[],{blockElementScrollPositionUntilNextRender:o}=(0,s.a_)(),{pathname:c}=(0,n.zy)(),h=e=>{const r=e.currentTarget,t=i.indexOf(r),n=l[t].value;n!==a&&(o(r),d(n))},u=e=>{let r=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{const t=i.indexOf(e.currentTarget)+1;r=i[t]??i[0];break}case"ArrowLeft":{const t=i.indexOf(e.currentTarget)-1;r=i[t]??i[i.length-1];break}}r?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,m.A)("_group-tab list-none -ml-7 my-6 overflow-auto"),children:l.map((e=>{let{value:r,label:t,attributes:n}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:a===r?0:-1,"aria-selected":a===r,ref:e=>i.push(e),onKeyDown:u,onClick:h,...n,className:(0,m.A)("font-bold tracking-widest w-fit px-3 inline-flex py-1 uppercase border-b text-lg cursor-pointer",b.tabItem,n?.className,{"border-b-2 pointer-events-none":a===r,"border-b-2 text-[#669dcb] border-[#669dcb]":a===r&&c.startsWith("/workspace"),"border-b-2 text-[#FB923C] border-[#FB923C]":a===r&&c.startsWith("/sdk"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":a!==r&&c.startsWith("/sdk"),"border-b-2 text-[#FB923C] border-[#FB923C]":a===r&&c.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":a!==r&&c.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#abd2f1] hover:border-[#abd2f1]":a!==r&&c.startsWith("/workspace")}),children:t??r},r)}))})}function g(e){let{lazy:r,children:t,selectedValue:n}=e;if(t=Array.isArray(t)?t:[t],r){const e=t.find((e=>e.props.value===n));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:t.map(((e,r)=>(0,a.cloneElement)(e,{key:r,hidden:e.props.value!==n})))})}function v(e){const r=p(e);return(0,f.jsxs)("div",{className:(0,m.A)("tabs-container",b.tabList),children:[(0,f.jsx)(y,{...e,...r}),(0,f.jsx)(g,{...e,...r})]})}function w(e){const r=(0,j.A)();return(0,f.jsx)(v,{...e},String(r))}},28453:(e,r,t)=>{t.d(r,{R:()=>d,x:()=>l});var n=t(96540);const s={},a=n.createContext(s);function d(e){const r=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),n.createElement(a.Provider,{value:r},e.children)}}}]);