"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5153],{25639:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>x,frontMatter:()=>l,metadata:()=>o,toc:()=>h});var t=r(74848),s=r(28453),i=r(18228),d=r(19365);const l={title:"Overnight Bank Funding Rate",description:"Overnight Bank Funding"},a=void 0,o={id:"platform/data_models/OvernightBankFundingRate",title:"Overnight Bank Funding Rate",description:"Overnight Bank Funding",source:"@site/content/platform/data_models/OvernightBankFundingRate.md",sourceDirName:"platform/data_models",slug:"/platform/data_models/OvernightBankFundingRate",permalink:"/platform/data_models/OvernightBankFundingRate",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/platform/data_models/OvernightBankFundingRate.md",tags:[],version:"current",frontMatter:{title:"Overnight Bank Funding Rate",description:"Overnight Bank Funding"},sidebar:"tutorialSidebar",previous:{title:"Options Unusual",permalink:"/platform/data_models/OptionsUnusual"},next:{title:"Projections",permalink:"/platform/data_models/PROJECTIONS"}},c={},h=[{value:"Implementation details",id:"implementation-details",level:2},{value:"Class names",id:"class-names",level:3},{value:"Import Statement",id:"import-statement",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Data",id:"data",level:2}];function u(e){const n={code:"code",em:"em",h2:"h2",h3:"h3",hr:"hr",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components},{Details:r}=n;return r||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"implementation-details",children:"Implementation details"}),"\n",(0,t.jsx)(n.h3,{id:"class-names",children:"Class names"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Model name"}),(0,t.jsx)(n.th,{children:"Parameters class"}),(0,t.jsx)(n.th,{children:"Data class"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"OvernightBankFundingRate"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"OvernightBankFundingRateQueryParams"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"OvernightBankFundingRateData"})})]})})]}),"\n",(0,t.jsx)(n.h3,{id:"import-statement",children:"Import Statement"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"from openbb_core.provider.standard_models.overnight_bank_funding_rate import (\nOvernightBankFundingRateData,\nOvernightBankFundingRateQueryParams,\n)\n"})}),"\n",(0,t.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(i.A,{children:[(0,t.jsxs)(d.A,{value:"standard",label:"standard",children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"start_date"})}),": ",(0,t.jsx)(n.code,{children:"Union[date, str]"})]}),(0,t.jsx)(n.p,{children:"Start date of the data, in YYYY-MM-DD format."}),(0,t.jsxs)(n.p,{children:["\u2022 ",(0,t.jsx)(n.em,{children:"Optional:"})," ",(0,t.jsx)(n.code,{children:"True"})]}),(0,t.jsx)(n.hr,{}),(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"end_date"})}),": ",(0,t.jsx)(n.code,{children:"Union[date, str]"})]}),(0,t.jsx)(n.p,{children:"End date of the data, in YYYY-MM-DD format."}),(0,t.jsxs)(n.p,{children:["\u2022 ",(0,t.jsx)(n.em,{children:"Optional:"})," ",(0,t.jsx)(n.code,{children:"True"})]})]}),(0,t.jsxs)(d.A,{value:"federal_reserve",label:"federal_reserve",children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"start_date"})}),": ",(0,t.jsx)(n.code,{children:"Union[date, str]"})]}),(0,t.jsx)(n.p,{children:"Start date of the data, in YYYY-MM-DD format."}),(0,t.jsxs)(n.p,{children:["\u2022 ",(0,t.jsx)(n.em,{children:"Optional:"})," ",(0,t.jsx)(n.code,{children:"True"})]}),(0,t.jsx)(n.hr,{}),(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"end_date"})}),": ",(0,t.jsx)(n.code,{children:"Union[date, str]"})]}),(0,t.jsx)(n.p,{children:"End date of the data, in YYYY-MM-DD format."}),(0,t.jsxs)(n.p,{children:["\u2022 ",(0,t.jsx)(n.em,{children:"Optional:"})," ",(0,t.jsx)(n.code,{children:"True"})]})]}),(0,t.jsxs)(d.A,{value:"fred",label:"fred",children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"start_date"})}),": ",(0,t.jsx)(n.code,{children:"Union[date, str]"})]}),(0,t.jsx)(n.p,{children:"Start date of the data, in YYYY-MM-DD format."}),(0,t.jsxs)(n.p,{children:["\u2022 ",(0,t.jsx)(n.em,{children:"Optional:"})," ",(0,t.jsx)(n.code,{children:"True"})]}),(0,t.jsx)(n.hr,{}),(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"end_date"})}),": ",(0,t.jsx)(n.code,{children:"Union[date, str]"})]}),(0,t.jsx)(n.p,{children:"End date of the data, in YYYY-MM-DD format."}),(0,t.jsxs)(n.p,{children:["\u2022 ",(0,t.jsx)(n.em,{children:"Optional:"})," ",(0,t.jsx)(n.code,{children:"True"})]}),(0,t.jsx)(n.hr,{}),(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"frequency"})}),": ",(0,t.jsx)(n.code,{children:"Literal['a', 'q', 'm', 'w', 'wef', 'weth', 'wew', 'wetu', 'wem', 'wesu', 'wesa', 'bwew', 'bwem']"})]}),(0,t.jsxs)(r,{children:[(0,t.jsx)("summary",{mdxType:"summary",children:"Description"}),(0,t.jsxs)(n.p,{children:["Frequency aggregation to convert daily data to lower frequency.",(0,t.jsx)("br",{}),"\na = Annual",(0,t.jsx)("br",{}),"\nq = Quarterly",(0,t.jsx)("br",{}),"\nm = Monthly",(0,t.jsx)("br",{}),"\nw = Weekly",(0,t.jsx)("br",{}),"\nwef = Weekly, Ending Friday",(0,t.jsx)("br",{}),"\nweth = Weekly, Ending Thursday",(0,t.jsx)("br",{}),"\nwew = Weekly, Ending Wednesday",(0,t.jsx)("br",{}),"\nwetu = Weekly, Ending Tuesday",(0,t.jsx)("br",{}),"\nwem = Weekly, Ending Monday",(0,t.jsx)("br",{}),"\nwesu = Weekly, Ending Sunday",(0,t.jsx)("br",{}),"\nwesa = Weekly, Ending Saturday",(0,t.jsx)("br",{}),"\nbwew = Biweekly, Ending Wednesday",(0,t.jsx)("br",{}),"\nbwem = Biweekly, Ending Monday"]})]}),(0,t.jsxs)(n.p,{children:["\u2022 ",(0,t.jsx)(n.em,{children:"Optional:"})," ",(0,t.jsx)(n.code,{children:"True"})]}),(0,t.jsx)(n.hr,{}),(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"aggregation_method"})}),": ",(0,t.jsx)(n.code,{children:"Literal['avg', 'sum', 'eop']"})]}),(0,t.jsxs)(r,{children:[(0,t.jsx)("summary",{mdxType:"summary",children:"Description"}),(0,t.jsxs)(n.p,{children:["A key that indicates the aggregation method used for frequency aggregation.",(0,t.jsx)("br",{}),"\navg = Average",(0,t.jsx)("br",{}),"\nsum = Sum",(0,t.jsx)("br",{}),"\neop = End of Period"]})]}),(0,t.jsxs)(n.p,{children:["\u2022 ",(0,t.jsx)(n.em,{children:"Optional:"})," ",(0,t.jsx)(n.code,{children:"True"})]}),(0,t.jsx)(n.hr,{}),(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"transform"})}),": ",(0,t.jsx)(n.code,{children:"Literal['chg', 'ch1', 'pch', 'pc1', 'pca', 'cch', 'cca', 'log']"})]}),(0,t.jsxs)(r,{children:[(0,t.jsx)("summary",{mdxType:"summary",children:"Description"}),(0,t.jsxs)(n.p,{children:["Transformation type",(0,t.jsx)("br",{}),"\nNone = No transformation",(0,t.jsx)("br",{}),"\nchg = Change",(0,t.jsx)("br",{}),"\nch1 = Change from Year Ago",(0,t.jsx)("br",{}),"\npch = Percent Change",(0,t.jsx)("br",{}),"\npc1 = Percent Change from Year Ago",(0,t.jsx)("br",{}),"\npca = Compounded Annual Rate of Change",(0,t.jsx)("br",{}),"\ncch = Continuously Compounded Rate of Change",(0,t.jsx)("br",{}),"\ncca = Continuously Compounded Annual Rate of Change",(0,t.jsx)("br",{}),"\nlog = Natural Log"]})]}),(0,t.jsxs)(n.p,{children:["\u2022 ",(0,t.jsx)(n.em,{children:"Optional:"})," ",(0,t.jsx)(n.code,{children:"True"})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"data",children:"Data"}),"\n",(0,t.jsxs)(i.A,{children:[(0,t.jsxs)(d.A,{value:"standard",label:"standard",children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"date"})}),": ",(0,t.jsx)(n.code,{children:"Union[date, str]"})]}),(0,t.jsx)(n.p,{children:"The date of the data."}),(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"rate"})}),": ",(0,t.jsx)(n.code,{children:"float"})]}),(0,t.jsx)(n.p,{children:"Overnight Bank Funding Rate."}),(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"percentile_1"})}),": ",(0,t.jsx)(n.code,{children:"float"})]}),(0,t.jsx)(n.p,{children:"1st percentile of the distribution."}),(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"percentile_25"})}),": ",(0,t.jsx)(n.code,{children:"float"})]}),(0,t.jsx)(n.p,{children:"25th percentile of the distribution."}),(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"percentile_75"})}),": ",(0,t.jsx)(n.code,{children:"float"})]}),(0,t.jsx)(n.p,{children:"75th percentile of the distribution."}),(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"percentile_99"})}),": ",(0,t.jsx)(n.code,{children:"float"})]}),(0,t.jsx)(n.p,{children:"99th percentile of the distribution."}),(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"volume"})}),": ",(0,t.jsx)(n.code,{children:"float"})]}),(0,t.jsx)(n.p,{children:"The trading volume.The notional volume of transactions (Billions of $)."})]}),(0,t.jsxs)(d.A,{value:"federal_reserve",label:"federal_reserve",children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"date"})}),": ",(0,t.jsx)(n.code,{children:"Union[date, str]"})]}),(0,t.jsx)(n.p,{children:"The date of the data."}),(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"rate"})}),": ",(0,t.jsx)(n.code,{children:"float"})]}),(0,t.jsx)(n.p,{children:"Overnight Bank Funding Rate."}),(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"percentile_1"})}),": ",(0,t.jsx)(n.code,{children:"float"})]}),(0,t.jsx)(n.p,{children:"1st percentile of the distribution."}),(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"percentile_25"})}),": ",(0,t.jsx)(n.code,{children:"float"})]}),(0,t.jsx)(n.p,{children:"25th percentile of the distribution."}),(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"percentile_75"})}),": ",(0,t.jsx)(n.code,{children:"float"})]}),(0,t.jsx)(n.p,{children:"75th percentile of the distribution."}),(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"percentile_99"})}),": ",(0,t.jsx)(n.code,{children:"float"})]}),(0,t.jsx)(n.p,{children:"99th percentile of the distribution."}),(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"volume"})}),": ",(0,t.jsx)(n.code,{children:"float"})]}),(0,t.jsx)(n.p,{children:"The trading volume.The notional volume of transactions (Billions of $)."}),(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"revision_indicator"})}),": ",(0,t.jsx)(n.code,{children:"str"})]}),(0,t.jsx)(n.p,{children:"Indicates a revision of the data for that date."})]}),(0,t.jsxs)(d.A,{value:"fred",label:"fred",children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"date"})}),": ",(0,t.jsx)(n.code,{children:"Union[date, str]"})]}),(0,t.jsx)(n.p,{children:"The date of the data."}),(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"rate"})}),": ",(0,t.jsx)(n.code,{children:"float"})]}),(0,t.jsx)(n.p,{children:"Overnight Bank Funding Rate."}),(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"percentile_1"})}),": ",(0,t.jsx)(n.code,{children:"float"})]}),(0,t.jsx)(n.p,{children:"1st percentile of the distribution."}),(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"percentile_25"})}),": ",(0,t.jsx)(n.code,{children:"float"})]}),(0,t.jsx)(n.p,{children:"25th percentile of the distribution."}),(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"percentile_75"})}),": ",(0,t.jsx)(n.code,{children:"float"})]}),(0,t.jsx)(n.p,{children:"75th percentile of the distribution."}),(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"percentile_99"})}),": ",(0,t.jsx)(n.code,{children:"float"})]}),(0,t.jsx)(n.p,{children:"99th percentile of the distribution."}),(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"volume"})}),": ",(0,t.jsx)(n.code,{children:"float"})]}),(0,t.jsx)(n.p,{children:"The trading volume.The notional volume of transactions (Billions of $)."})]})]})]})}function x(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},19365:(e,n,r)=>{r.d(n,{A:()=>d});r(96540);var t=r(34164);const s={tabItem:"tabItem_Ymn6"};var i=r(74848);function d(e){let{children:n,hidden:r,className:d}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,t.A)(s.tabItem,d),hidden:r,children:n})}},18228:(e,n,r)=>{r.d(n,{A:()=>w});var t=r(56347),s=r(23104),i=r(96540),d=r(205),l=r(57485),a=r(31682),o=r(89466);function c(e){return function(e){return i.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:n,label:r,attributes:t,default:s}}=e;return{value:n,label:r,attributes:t,default:s}}))}function h(e){const{values:n,children:r}=e;return(0,i.useMemo)((()=>{const e=n??c(r);return function(e){const n=(0,a.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function u(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function x(e){let{queryString:n=!1,groupId:r}=e;const s=(0,t.W6)(),d=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,l.aZ)(d),(0,i.useCallback)((e=>{if(!d)return;const n=new URLSearchParams(s.location.search);n.set(d,e),s.replace({...s.location,search:n.toString()})}),[d,s])]}function j(e){const{defaultValue:n,queryString:r=!1,groupId:t}=e,s=h(e),[l,a]=(0,i.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!u({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=r.find((e=>e.default))??r[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:s}))),[c,j]=x({queryString:r,groupId:t}),[p,f]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[t,s]=(0,o.Dv)(r);return[t,(0,i.useCallback)((e=>{r&&s.set(e)}),[r,s])]}({groupId:t}),m=(()=>{const e=c??p;return u({value:e,tabValues:s})?e:null})();(0,d.A)((()=>{m&&a(m)}),[m]);return{selectedValue:l,selectValue:(0,i.useCallback)((e=>{if(!u({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);a(e),j(e),f(e)}),[j,f,s]),tabValues:s}}var p=r(92303),f=r(34164);const m={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};var g=r(74848);function b(e){let{className:n,block:r,selectedValue:i,selectValue:d,tabValues:l}=e;const a=[],{blockElementScrollPositionUntilNextRender:o}=(0,s.a_)(),{pathname:c}=(0,t.zy)(),h=e=>{const n=e.currentTarget,r=a.indexOf(n),t=l[r].value;t!==i&&(o(n),d(t))},u=e=>{let n=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{const r=a.indexOf(e.currentTarget)+1;n=a[r]??a[0];break}case"ArrowLeft":{const r=a.indexOf(e.currentTarget)-1;n=a[r]??a[a.length-1];break}}n?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,f.A)("_group-tab list-none -ml-7 my-6 overflow-auto"),children:l.map((e=>{let{value:n,label:r,attributes:t}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:i===n?0:-1,"aria-selected":i===n,ref:e=>a.push(e),onKeyDown:u,onClick:h,...t,className:(0,f.A)("font-bold tracking-widest w-fit px-3 inline-flex py-1 uppercase border-b text-lg cursor-pointer",m.tabItem,t?.className,{"border-b-2 pointer-events-none":i===n,"border-b-2 text-[#669dcb] border-[#669dcb]":i===n&&c.startsWith("/workspace"),"border-b-2 text-[#FB923C] border-[#FB923C]":i===n&&c.startsWith("/sdk"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":i!==n&&c.startsWith("/sdk"),"border-b-2 text-[#FB923C] border-[#FB923C]":i===n&&c.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":i!==n&&c.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#abd2f1] hover:border-[#abd2f1]":i!==n&&c.startsWith("/workspace")}),children:r??n},n)}))})}function v(e){let{lazy:n,children:r,selectedValue:t}=e;if(r=Array.isArray(r)?r:[r],n){const e=r.find((e=>e.props.value===t));return e?(0,i.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:r.map(((e,n)=>(0,i.cloneElement)(e,{key:n,hidden:e.props.value!==t})))})}function y(e){const n=j(e);return(0,g.jsxs)("div",{className:(0,f.A)("tabs-container",m.tabList),children:[(0,g.jsx)(b,{...e,...n}),(0,g.jsx)(v,{...e,...n})]})}function w(e){const n=(0,p.A)();return(0,g.jsx)(y,{...e},String(n))}},28453:(e,n,r)=>{r.d(n,{R:()=>d,x:()=>l});var t=r(96540);const s={},i=t.createContext(s);function d(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);