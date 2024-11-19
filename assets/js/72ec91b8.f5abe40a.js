"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[55364],{92369:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>x,frontMatter:()=>l,metadata:()=>o,toc:()=>h});var n=r(74848),a=r(28453),d=r(18228),s=r(19365);const l={title:"Euro Short Term Rate",description:"Euro Short-Term Rate"},i=void 0,o={id:"platform/data_models/EuroShortTermRate",title:"Euro Short Term Rate",description:"Euro Short-Term Rate",source:"@site/content/platform/data_models/EuroShortTermRate.md",sourceDirName:"platform/data_models",slug:"/platform/data_models/EuroShortTermRate",permalink:"/platform/data_models/EuroShortTermRate",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/platform/data_models/EuroShortTermRate.md",tags:[],version:"current",frontMatter:{title:"Euro Short Term Rate",description:"Euro Short-Term Rate"},sidebar:"tutorialSidebar",previous:{title:"Etf Sectors",permalink:"/platform/data_models/EtfSectors"},next:{title:"European Central Bank Interest Rates",permalink:"/platform/data_models/EuropeanCentralBankInterestRates"}},c={},h=[{value:"Implementation details",id:"implementation-details",level:2},{value:"Class names",id:"class-names",level:3},{value:"Import Statement",id:"import-statement",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Data",id:"data",level:2}];function u(e){const t={code:"code",h2:"h2",h3:"h3",hr:"hr",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"implementation-details",children:"Implementation details"}),"\n",(0,n.jsx)(t.h3,{id:"class-names",children:"Class names"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Model name"}),(0,n.jsx)(t.th,{children:"Parameters class"}),(0,n.jsx)(t.th,{children:"Data class"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"EuroShortTermRate"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"EuroShortTermRateQueryParams"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"EuroShortTermRateData"})})]})})]}),"\n",(0,n.jsx)(t.h3,{id:"import-statement",children:"Import Statement"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"from openbb_core.provider.standard_models.euro_short_term_rate import (\nEuroShortTermRateData,\nEuroShortTermRateQueryParams,\n)\n"})}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(d.A,{children:[(0,n.jsx)(s.A,{value:"standard",label:"standard",children:(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Default"}),(0,n.jsx)(t.th,{children:"Optional"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"start_date"}),(0,n.jsx)(t.td,{children:"Union[date, str]"}),(0,n.jsx)(t.td,{children:"Start date of the data, in YYYY-MM-DD format."}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"end_date"}),(0,n.jsx)(t.td,{children:"Union[date, str]"}),(0,n.jsx)(t.td,{children:"End date of the data, in YYYY-MM-DD format."}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]})]})]})}),(0,n.jsx)(s.A,{value:"fred",label:"fred",children:(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Default"}),(0,n.jsx)(t.th,{children:"Optional"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"start_date"}),(0,n.jsx)(t.td,{children:"Union[date, str]"}),(0,n.jsx)(t.td,{children:"Start date of the data, in YYYY-MM-DD format."}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"end_date"}),(0,n.jsx)(t.td,{children:"Union[date, str]"}),(0,n.jsx)(t.td,{children:"End date of the data, in YYYY-MM-DD format."}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"frequency"}),(0,n.jsx)(t.td,{children:"Literal['a', 'q', 'm', 'w', 'wef', 'weth', 'wew', 'wetu', 'wem', 'wesu', 'wesa', 'bwew', 'bwem']"}),(0,n.jsx)(t.td,{children:"Frequency aggregation to convert daily data to lower frequency. ; a = Annual; ; q = Quarterly; ; m = Monthly; ; w = Weekly; ; d = Daily; ; wef = Weekly, Ending Friday; ; weth = Weekly, Ending Thursday; ; wew = Weekly, Ending Wednesday; ; wetu = Weekly, Ending Tuesday; ; wem = Weekly, Ending Monday; ; wesu = Weekly, Ending Sunday; ; wesa = Weekly, Ending Saturday; ; bwew = Biweekly, Ending Wednesday; ; bwem = Biweekly, Ending Monday"}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"aggregation_method"}),(0,n.jsx)(t.td,{children:"Literal['avg', 'sum', 'eop']"}),(0,n.jsx)(t.td,{children:"A key that indicates the aggregation method used for frequency aggregation. ; avg = Average; ; sum = Sum; ; eop = End of Period"}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"transform"}),(0,n.jsx)(t.td,{children:"Literal['chg', 'ch1', 'pch', 'pc1', 'pca', 'cch', 'cca', 'log']"}),(0,n.jsx)(t.td,{children:"Transformation type; ; None = No transformation; ; chg = Change; ; ch1 = Change from Year Ago; ; pch = Percent Change; ; pc1 = Percent Change from Year Ago; ; pca = Compounded Annual Rate of Change; ; cch = Continuously Compounded Rate of Change; ; cca = Continuously Compounded Annual Rate of Change; ; log = Natural Log"}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]})]})]})})]}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"data",children:"Data"}),"\n",(0,n.jsxs)(d.A,{children:[(0,n.jsx)(s.A,{value:"standard",label:"standard",children:(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"date"}),(0,n.jsx)(t.td,{children:"Union[date, str]"}),(0,n.jsx)(t.td,{children:"The date of the data."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"rate"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Volume-weighted trimmed mean rate."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"percentile_25"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Rate at 25th percentile of volume."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"percentile_75"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Rate at 75th percentile of volume."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"volume"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"The trading volume. (Millions of \u20acEUR)."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"transactions"}),(0,n.jsx)(t.td,{children:"int"}),(0,n.jsx)(t.td,{children:"Number of transactions."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"number_of_banks"}),(0,n.jsx)(t.td,{children:"int"}),(0,n.jsx)(t.td,{children:"Number of active banks."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"large_bank_share_of_volume"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"The percent of volume attributable to the 5 largest active banks."})]})]})]})}),(0,n.jsx)(s.A,{value:"fred",label:"fred",children:(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"date"}),(0,n.jsx)(t.td,{children:"Union[date, str]"}),(0,n.jsx)(t.td,{children:"The date of the data."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"rate"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Volume-weighted trimmed mean rate."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"percentile_25"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Rate at 25th percentile of volume."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"percentile_75"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Rate at 75th percentile of volume."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"volume"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"The trading volume. (Millions of \u20acEUR)."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"transactions"}),(0,n.jsx)(t.td,{children:"int"}),(0,n.jsx)(t.td,{children:"Number of transactions."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"number_of_banks"}),(0,n.jsx)(t.td,{children:"int"}),(0,n.jsx)(t.td,{children:"Number of active banks."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"large_bank_share_of_volume"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"The percent of volume attributable to the 5 largest active banks."})]})]})]})})]})]})}function x(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},19365:(e,t,r)=>{r.d(t,{A:()=>s});r(96540);var n=r(34164);const a={tabItem:"tabItem_Ymn6"};var d=r(74848);function s(e){let{children:t,hidden:r,className:s}=e;return(0,d.jsx)("div",{role:"tabpanel",className:(0,n.A)(a.tabItem,s),hidden:r,children:t})}},18228:(e,t,r)=>{r.d(t,{A:()=>w});var n=r(96540),a=r(34164),d=r(23104),s=r(56347),l=r(205),i=r(57485),o=r(31682),c=r(89466);function h(e){return function(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:a}}=e;return{value:t,label:r,attributes:n,default:a}}))}function u(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??h(r);return function(e){const t=(0,o.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function x(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:r}=e;const a=(0,s.W6)(),d=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,i.aZ)(d),(0,n.useCallback)((e=>{if(!d)return;const t=new URLSearchParams(a.location.search);t.set(d,e),a.replace({...a.location,search:t.toString()})}),[d,a])]}function j(e){const{defaultValue:t,queryString:r=!1,groupId:a}=e,d=u(e),[s,i]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!x({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:d}))),[o,h]=m({queryString:r,groupId:a}),[j,f]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,d]=(0,c.Dv)(r);return[a,(0,n.useCallback)((e=>{r&&d.set(e)}),[r,d])]}({groupId:a}),p=(()=>{const e=o??j;return x({value:e,tabValues:d})?e:null})();(0,l.A)((()=>{p&&i(p)}),[p]);return{selectedValue:s,selectValue:(0,n.useCallback)((e=>{if(!x({value:e,tabValues:d}))throw new Error(`Can't select invalid tab value=${e}`);i(e),h(e),f(e)}),[h,f,d]),tabValues:d}}var f=r(92303);const p={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};var b=r(74848);function v(e){let{className:t,block:r,selectedValue:n,selectValue:l,tabValues:i}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,d.a_)(),{pathname:h}=(0,s.zy)(),u=e=>{const t=e.currentTarget,r=o.indexOf(t),a=i[r].value;a!==n&&(c(t),l(a))},x=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const r=o.indexOf(e.currentTarget)+1;t=o[r]??o[0];break}case"ArrowLeft":{const r=o.indexOf(e.currentTarget)-1;t=o[r]??o[o.length-1];break}}t?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("_group-tab list-none -ml-7 my-6 overflow-auto"),children:i.map((e=>{let{value:t,label:r,attributes:d}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>o.push(e),onKeyDown:x,onClick:u,...d,className:(0,a.A)("font-bold tracking-widest w-fit px-3 inline-flex py-1 uppercase border-b text-lg cursor-pointer",p.tabItem,d?.className,{"border-b-2 pointer-events-none":n===t,"border-b-2 text-[#669dcb] border-[#669dcb]":n===t&&h.startsWith("/terminal"),"border-b-2 text-[#FB923C] border-[#FB923C]":n===t&&h.startsWith("/sdk"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":n!==t&&h.startsWith("/sdk"),"border-b-2 text-[#FB923C] border-[#FB923C]":n===t&&h.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":n!==t&&h.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#abd2f1] hover:border-[#abd2f1]":n!==t&&h.startsWith("/terminal")}),children:r??t},t)}))})}function g(e){let{lazy:t,children:r,selectedValue:a}=e;if(r=Array.isArray(r)?r:[r],t){const e=r.find((e=>e.props.value===a));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:r.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function y(e){const t=j(e);return(0,b.jsxs)("div",{className:(0,a.A)("tabs-container",p.tabList),children:[(0,b.jsx)(v,{...e,...t}),(0,b.jsx)(g,{...e,...t})]})}function w(e){const t=(0,f.A)();return(0,b.jsx)(y,{...e},String(t))}},28453:(e,t,r)=>{r.d(t,{R:()=>s,x:()=>l});var n=r(96540);const a={},d=n.createContext(a);function s(e){const t=n.useContext(d);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),n.createElement(d.Provider,{value:t},e.children)}}}]);