"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[33807],{26544:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>h,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var n=r(74848),s=r(28453),a=r(94331),d=r(18228),i=r(19365);const o={title:"spot",description:"Commodity Spot Prices",keywords:["commodity","price","spot"]},l=void 0,c={id:"platform/reference/commodity/price/spot",title:"spot",description:"Commodity Spot Prices",source:"@site/content/platform/reference/commodity/price/spot.md",sourceDirName:"platform/reference/commodity/price",slug:"/platform/reference/commodity/price/spot",permalink:"/platform/reference/commodity/price/spot",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/platform/reference/commodity/price/spot.md",tags:[],version:"current",frontMatter:{title:"spot",description:"Commodity Spot Prices",keywords:["commodity","price","spot"]},sidebar:"tutorialSidebar",previous:{title:"Price",permalink:"/platform/reference/commodity/price/"},next:{title:"petroleum_status_report",permalink:"/platform/reference/commodity/petroleum_status_report"}},h={},u=[{value:"Examples",id:"examples",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Data",id:"data",level:2}];function m(e){const t={code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.A,{title:"commodity/price/spot - Reference | OpenBB Platform Docs"}),"\n","\n",(0,n.jsx)(t.p,{children:"Commodity Spot Prices."}),"\n",(0,n.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"from openbb import obb\nobb.commodity.price.spot(provider='fred')\nobb.commodity.price.spot(provider='fred', commodity=wti)\n"})}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(d.A,{children:[(0,n.jsx)(i.A,{value:"standard",label:"standard",children:(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Default"}),(0,n.jsx)(t.th,{children:"Optional"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"start_date"}),(0,n.jsx)(t.td,{children:"Union[date, str]"}),(0,n.jsx)(t.td,{children:"Start date of the data, in YYYY-MM-DD format."}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"end_date"}),(0,n.jsx)(t.td,{children:"Union[date, str]"}),(0,n.jsx)(t.td,{children:"End date of the data, in YYYY-MM-DD format."}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]})]})]})}),(0,n.jsx)(i.A,{value:"fred",label:"fred",children:(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Default"}),(0,n.jsx)(t.th,{children:"Optional"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"start_date"}),(0,n.jsx)(t.td,{children:"Union[date, str]"}),(0,n.jsx)(t.td,{children:"Start date of the data, in YYYY-MM-DD format."}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"end_date"}),(0,n.jsx)(t.td,{children:"Union[date, str]"}),(0,n.jsx)(t.td,{children:"End date of the data, in YYYY-MM-DD format."}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"commodity"}),(0,n.jsx)(t.td,{children:"Literal['wti', 'brent', 'natural_gas', 'jet_fuel', 'propane', 'heating_oil', 'diesel_gulf_coast', 'diesel_ny_harbor', 'diesel_la', 'gasoline_ny_harbor', 'gasoline_gulf_coast', 'rbob', 'all']"}),(0,n.jsx)(t.td,{children:"Commodity name associated with the EIA spot price commodity data, default is 'all'."}),(0,n.jsx)(t.td,{children:"all"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"frequency"}),(0,n.jsx)(t.td,{children:"Literal['a', 'q', 'm', 'w', 'd', 'wef', 'weth', 'wew', 'wetu', 'wem', 'wesu', 'wesa', 'bwew', 'bwem']"}),(0,n.jsx)(t.td,{children:"Frequency aggregation to convert high frequency data to lower frequency. None = No change; a = Annual; q = Quarterly; m = Monthly; w = Weekly; d = Daily; wef = Weekly, Ending Friday; weth = Weekly, Ending Thursday; wew = Weekly, Ending Wednesday; wetu = Weekly, Ending Tuesday; wem = Weekly, Ending Monday; wesu = Weekly, Ending Sunday; wesa = Weekly, Ending Saturday; bwew = Biweekly, Ending Wednesday; bwem = Biweekly, Ending Monday"}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"aggregation_method"}),(0,n.jsx)(t.td,{children:"Literal['avg', 'sum', 'eop']"}),(0,n.jsx)(t.td,{children:"A key that indicates the aggregation method used for frequency aggregation. This parameter has no affect if the frequency parameter is not set. avg = Average; sum = Sum; eop = End of Period"}),(0,n.jsx)(t.td,{children:"eop"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"transform"}),(0,n.jsx)(t.td,{children:"Literal['chg', 'ch1', 'pch', 'pc1', 'pca', 'cch', 'cca', 'log']"}),(0,n.jsx)(t.td,{children:"Transformation type; None = No transformation; chg = Change; ch1 = Change from Year Ago; pch = Percent Change; pc1 = Percent Change from Year Ago; pca = Compounded Annual Rate of Change; cch = Continuously Compounded Rate of Change; cca = Continuously Compounded Annual Rate of Change; log = Natural Log"}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]})]})]})})]}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",metastring:"wordwrap",children:"OBBject\n    results : List[CommoditySpotPrices]\n        Serializable results.\n\n    provider : Optional[Literal['fred']]\n        Provider name.\n\n    warnings : Optional[List[Warning_]]\n        List of warnings.\n\n    chart : Optional[Chart]\n        Chart object.\n\n    extra : Dict[str, Any]\n        Extra info.\n"})}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"data",children:"Data"}),"\n",(0,n.jsxs)(d.A,{children:[(0,n.jsx)(i.A,{value:"standard",label:"standard",children:(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"date"}),(0,n.jsx)(t.td,{children:"Union[date, str]"}),(0,n.jsx)(t.td,{children:"The date of the data."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"symbol"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Symbol representing the entity requested in the data."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"commodity"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Commodity name."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"price"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Price of the commodity."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"unit"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Unit of the commodity price."})]})]})]})}),(0,n.jsx)(i.A,{value:"fred",label:"fred",children:(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"date"}),(0,n.jsx)(t.td,{children:"Union[date, str]"}),(0,n.jsx)(t.td,{children:"The date of the data."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"symbol"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Symbol representing the entity requested in the data."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"commodity"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Commodity name."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"price"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Price of the commodity."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"unit"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Unit of the commodity price."})]})]})]})})]})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(m,{...e})}):m(e)}},19365:(e,t,r)=>{r.d(t,{A:()=>d});r(96540);var n=r(34164);const s={tabItem:"tabItem_Ymn6"};var a=r(74848);function d(e){let{children:t,hidden:r,className:d}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,n.A)(s.tabItem,d),hidden:r,children:t})}},94331:(e,t,r)=>{r.d(t,{A:()=>a});r(96540);var n=r(5260),s=r(74848);function a(e){let{title:t}=e;return(0,s.jsx)(n.A,{children:(0,s.jsx)("title",{children:t})})}},18228:(e,t,r)=>{r.d(t,{A:()=>w});var n=r(56347),s=r(23104),a=r(96540),d=r(205),i=r(57485),o=r(31682),l=r(89466);function c(e){return function(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:s}}=e;return{value:t,label:r,attributes:n,default:s}}))}function h(e){const{values:t,children:r}=e;return(0,a.useMemo)((()=>{const e=t??c(r);return function(e){const t=(0,o.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function u(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:r}=e;const s=(0,n.W6)(),d=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,i.aZ)(d),(0,a.useCallback)((e=>{if(!d)return;const t=new URLSearchParams(s.location.search);t.set(d,e),s.replace({...s.location,search:t.toString()})}),[d,s])]}function p(e){const{defaultValue:t,queryString:r=!1,groupId:n}=e,s=h(e),[i,o]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!u({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:s}))),[c,p]=m({queryString:r,groupId:n}),[x,f]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,s]=(0,l.Dv)(r);return[n,(0,a.useCallback)((e=>{r&&s.set(e)}),[r,s])]}({groupId:n}),j=(()=>{const e=c??x;return u({value:e,tabValues:s})?e:null})();(0,d.A)((()=>{j&&o(j)}),[j]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!u({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);o(e),p(e),f(e)}),[p,f,s]),tabValues:s}}var x=r(92303),f=r(34164);const j={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};var b=r(74848);function y(e){let{className:t,block:r,selectedValue:a,selectValue:d,tabValues:i}=e;const o=[],{blockElementScrollPositionUntilNextRender:l}=(0,s.a_)(),{pathname:c}=(0,n.zy)(),h=e=>{const t=e.currentTarget,r=o.indexOf(t),n=i[r].value;n!==a&&(l(t),d(n))},u=e=>{let t=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{const r=o.indexOf(e.currentTarget)+1;t=o[r]??o[0];break}case"ArrowLeft":{const r=o.indexOf(e.currentTarget)-1;t=o[r]??o[o.length-1];break}}t?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,f.A)("_group-tab list-none -ml-7 my-6 overflow-auto"),children:i.map((e=>{let{value:t,label:r,attributes:n}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:e=>o.push(e),onKeyDown:u,onClick:h,...n,className:(0,f.A)("font-bold tracking-widest w-fit px-3 inline-flex py-1 uppercase border-b text-lg cursor-pointer",j.tabItem,n?.className,{"border-b-2 pointer-events-none":a===t,"border-b-2 text-[#669dcb] border-[#669dcb]":a===t&&c.startsWith("/workspace"),"border-b-2 text-[#FB923C] border-[#FB923C]":a===t&&c.startsWith("/sdk"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":a!==t&&c.startsWith("/sdk"),"border-b-2 text-[#FB923C] border-[#FB923C]":a===t&&c.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":a!==t&&c.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#abd2f1] hover:border-[#abd2f1]":a!==t&&c.startsWith("/workspace")}),children:r??t},t)}))})}function g(e){let{lazy:t,children:r,selectedValue:n}=e;if(r=Array.isArray(r)?r:[r],t){const e=r.find((e=>e.props.value===n));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:r.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==n})))})}function v(e){const t=p(e);return(0,b.jsxs)("div",{className:(0,f.A)("tabs-container",j.tabList),children:[(0,b.jsx)(y,{...e,...t}),(0,b.jsx)(g,{...e,...t})]})}function w(e){const t=(0,x.A)();return(0,b.jsx)(v,{...e},String(t))}},28453:(e,t,r)=>{r.d(t,{R:()=>d,x:()=>i});var n=r(96540);const s={},a=n.createContext(s);function d(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);