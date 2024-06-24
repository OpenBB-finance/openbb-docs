"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[72824],{86723:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>u,contentTitle:()=>d,default:()=>x,frontMatter:()=>o,metadata:()=>l,toc:()=>h});var s=t(74848),n=t(28453),a=t(94331),c=t(18228),i=t(19365);const o={title:"cpsearch",description:"Documentation for 'cpsearch', a cryptocurrency discovery function in OpenBBTerminal using the CoinPaprika API. This page provides details about parameters, source code links and data return types.",keywords:["docusaurus","cpsearch","coinPaprika","cryptocurrency","search","crypto discovery","search parameters","coinPaprika API","data analytics"]},d=void 0,l={id:"sdk/reference/crypto/disc/cpsearch",title:"cpsearch",description:"Documentation for 'cpsearch', a cryptocurrency discovery function in OpenBBTerminal using the CoinPaprika API. This page provides details about parameters, source code links and data return types.",source:"@site/content/sdk/reference/crypto/disc/cpsearch.md",sourceDirName:"sdk/reference/crypto/disc",slug:"/sdk/reference/crypto/disc/cpsearch",permalink:"/sdk/reference/crypto/disc/cpsearch",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/sdk/reference/crypto/disc/cpsearch.md",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1719247347e3,frontMatter:{title:"cpsearch",description:"Documentation for 'cpsearch', a cryptocurrency discovery function in OpenBBTerminal using the CoinPaprika API. This page provides details about parameters, source code links and data return types.",keywords:["docusaurus","cpsearch","coinPaprika","cryptocurrency","search","crypto discovery","search parameters","coinPaprika API","data analytics"]},sidebar:"tutorialSidebar",previous:{title:"coins_for_given_exchange",permalink:"/sdk/reference/crypto/disc/coins_for_given_exchange"},next:{title:"gainers",permalink:"/sdk/reference/crypto/disc/gainers"}},u={},h=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Parameters",id:"parameters-1",level:2},{value:"Returns",id:"returns-1",level:2}];function p(e){const r={a:"a",code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a.A,{title:"crypto.disc.cpsearch - Reference | OpenBB SDK Docs"}),"\n","\n",(0,s.jsxs)(c.A,{children:[(0,s.jsxs)(i.A,{value:"model",label:"Model",default:!0,children:[(0,s.jsx)(r.p,{children:"Search CoinPaprika. [Source: CoinPaprika]"}),(0,s.jsxs)(r.p,{children:["Source Code: [",(0,s.jsx)(r.a,{href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/discovery/coinpaprika_model.py#L27",children:"link"}),"]"]}),(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-python",children:'openbb.crypto.disc.cpsearch(query: str, category: Optional[Any] = None, modifier: Optional[Any] = None, sortby: str = "id", ascend: bool = True)\n'})}),(0,s.jsx)(r.hr,{}),(0,s.jsx)(r.h2,{id:"parameters",children:"Parameters"}),(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Name"}),(0,s.jsx)(r.th,{children:"Type"}),(0,s.jsx)(r.th,{children:"Description"}),(0,s.jsx)(r.th,{children:"Default"}),(0,s.jsx)(r.th,{children:"Optional"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"query"}),(0,s.jsx)(r.td,{children:"str"}),(0,s.jsx)(r.td,{children:"phrase for search"}),(0,s.jsx)(r.td,{children:"None"}),(0,s.jsx)(r.td,{children:"False"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"category"}),(0,s.jsx)(r.td,{children:"Optional[Any]"}),(0,s.jsxs)(r.td,{children:["one or more categories (comma separated) to search.",(0,s.jsx)("br",{}),"Available options: currencies"]}),(0,s.jsx)(r.td,{children:"exchanges"}),(0,s.jsx)(r.td,{children:"icos"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"modifier"}),(0,s.jsx)(r.td,{children:"Optional[Any]"}),(0,s.jsxs)(r.td,{children:["set modifier for search results. Available options: symbol_search -",(0,s.jsx)("br",{}),"search only by symbol (works for currencies only)"]}),(0,s.jsx)(r.td,{children:"None"}),(0,s.jsx)(r.td,{children:"True"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"sortby"}),(0,s.jsx)(r.td,{children:"str"}),(0,s.jsxs)(r.td,{children:["Key to sort data. The table can be sorted by every of its columns. Refer to",(0,s.jsx)("br",{}),"API documentation (see ",(0,s.jsx)(r.a,{href:"https://api.coinpaprika.com/docs#tag/Tools/paths/~1search/get",children:"https://api.coinpaprika.com/docs#tag/Tools/paths/~1search/get"}),")"]}),(0,s.jsx)(r.td,{children:"id"}),(0,s.jsx)(r.td,{children:"True"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"ascend"}),(0,s.jsx)(r.td,{children:"bool"}),(0,s.jsx)(r.td,{children:"Flag to sort data descending"}),(0,s.jsx)(r.td,{children:"True"}),(0,s.jsx)(r.td,{children:"True"})]})]})]}),(0,s.jsx)(r.hr,{}),(0,s.jsx)(r.h2,{id:"returns",children:"Returns"}),(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Type"}),(0,s.jsx)(r.th,{children:"Description"})]})}),(0,s.jsx)(r.tbody,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"pd.DataFrame"}),(0,s.jsxs)(r.td,{children:["Search Results",(0,s.jsx)("br",{}),"Columns: Metric, Value"]})]})})]}),(0,s.jsx)(r.hr,{})]}),(0,s.jsxs)(i.A,{value:"view",label:"Chart",children:[(0,s.jsx)(r.p,{children:"Prints table showing Search over CoinPaprika. [Source: CoinPaprika]"}),(0,s.jsxs)(r.p,{children:["Source Code: [",(0,s.jsx)(r.a,{href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/discovery/coinpaprika_view.py#L16",children:"link"}),"]"]}),(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-python",children:'openbb.crypto.disc.cpsearch_chart(query: str, category: str = "all", limit: int = 10, sortby: str = "id", ascend: bool = True, export: str = "")\n'})}),(0,s.jsx)(r.hr,{}),(0,s.jsx)(r.h2,{id:"parameters-1",children:"Parameters"}),(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Name"}),(0,s.jsx)(r.th,{children:"Type"}),(0,s.jsx)(r.th,{children:"Description"}),(0,s.jsx)(r.th,{children:"Default"}),(0,s.jsx)(r.th,{children:"Optional"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"query"}),(0,s.jsx)(r.td,{children:"str"}),(0,s.jsx)(r.td,{children:"Search query"}),(0,s.jsx)(r.td,{children:"None"}),(0,s.jsx)(r.td,{children:"False"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"category"}),(0,s.jsx)(r.td,{children:"str"}),(0,s.jsx)(r.td,{children:"Categories to search: currencies"}),(0,s.jsx)(r.td,{children:"exchanges"}),(0,s.jsx)(r.td,{children:"icos"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"limit"}),(0,s.jsx)(r.td,{children:"int"}),(0,s.jsx)(r.td,{children:"Number of records to display"}),(0,s.jsx)(r.td,{children:"10"}),(0,s.jsx)(r.td,{children:"True"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"sortby"}),(0,s.jsx)(r.td,{children:"str"}),(0,s.jsxs)(r.td,{children:["Key to sort data. The table can be sorted by every of its columns. Refer to",(0,s.jsx)("br",{}),"API documentation (see ",(0,s.jsx)(r.a,{href:"https://api.coinpaprika.com/docs#tag/Tools/paths/~1search/get",children:"https://api.coinpaprika.com/docs#tag/Tools/paths/~1search/get"}),")"]}),(0,s.jsx)(r.td,{children:"id"}),(0,s.jsx)(r.td,{children:"True"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"ascend"}),(0,s.jsx)(r.td,{children:"bool"}),(0,s.jsx)(r.td,{children:"Flag to sort data descending"}),(0,s.jsx)(r.td,{children:"True"}),(0,s.jsx)(r.td,{children:"True"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"export"}),(0,s.jsx)(r.td,{children:"str"}),(0,s.jsx)(r.td,{children:"Export dataframe data to csv,json,xlsx file"}),(0,s.jsx)(r.td,{}),(0,s.jsx)(r.td,{children:"True"})]})]})]}),(0,s.jsx)(r.hr,{}),(0,s.jsx)(r.h2,{id:"returns-1",children:"Returns"}),(0,s.jsx)(r.p,{children:"This function does not return anything"}),(0,s.jsx)(r.hr,{})]})]})]})}function x(e={}){const{wrapper:r}={...(0,n.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},19365:(e,r,t)=>{t.d(r,{A:()=>c});t(96540);var s=t(34164);const n={tabItem:"tabItem_Ymn6"};var a=t(74848);function c(e){let{children:r,hidden:t,className:c}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,s.A)(n.tabItem,c),hidden:t,children:r})}},94331:(e,r,t)=>{t.d(r,{A:()=>a});t(96540);var s=t(5260),n=t(74848);function a(e){let{title:r}=e;return(0,n.jsx)(s.A,{children:(0,n.jsx)("title",{children:r})})}},18228:(e,r,t)=>{t.d(r,{A:()=>k});var s=t(96540),n=t(34164),a=t(23104),c=t(56347),i=t(205),o=t(57485),d=t(31682),l=t(70679);function u(e){return function(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:r,label:t,attributes:s,default:n}}=e;return{value:r,label:t,attributes:s,default:n}}))}function h(e){const{values:r,children:t}=e;return(0,s.useMemo)((()=>{const e=r??u(t);return function(e){const r=(0,d.X)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,t])}function p(e){let{value:r,tabValues:t}=e;return t.some((e=>e.value===r))}function x(e){let{queryString:r=!1,groupId:t}=e;const n=(0,c.W6)(),a=function(e){let{queryString:r=!1,groupId:t}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:r,groupId:t});return[(0,o.aZ)(a),(0,s.useCallback)((e=>{if(!a)return;const r=new URLSearchParams(n.location.search);r.set(a,e),n.replace({...n.location,search:r.toString()})}),[a,n])]}function b(e){const{defaultValue:r,queryString:t=!1,groupId:n}=e,a=h(e),[c,o]=(0,s.useState)((()=>function(e){let{defaultValue:r,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!p({value:r,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const s=t.find((e=>e.default))??t[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:r,tabValues:a}))),[d,u]=x({queryString:t,groupId:n}),[b,j]=function(e){let{groupId:r}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(r),[n,a]=(0,l.Dv)(t);return[n,(0,s.useCallback)((e=>{t&&a.set(e)}),[t,a])]}({groupId:n}),f=(()=>{const e=d??b;return p({value:e,tabValues:a})?e:null})();(0,i.A)((()=>{f&&o(f)}),[f]);return{selectedValue:c,selectValue:(0,s.useCallback)((e=>{if(!p({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),j(e)}),[u,j,a]),tabValues:a}}var j=t(92303);const f={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};var m=t(74848);function y(e){let{className:r,block:t,selectedValue:s,selectValue:i,tabValues:o}=e;const d=[],{blockElementScrollPositionUntilNextRender:l}=(0,a.a_)(),{pathname:u}=(0,c.zy)(),h=e=>{const r=e.currentTarget,t=d.indexOf(r),n=o[t].value;n!==s&&(l(r),i(n))},p=e=>{let r=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{const t=d.indexOf(e.currentTarget)+1;r=d[t]??d[0];break}case"ArrowLeft":{const t=d.indexOf(e.currentTarget)-1;r=d[t]??d[d.length-1];break}}r?.focus()};return(0,m.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.A)("_group-tab list-none -ml-7 my-6 overflow-auto"),children:o.map((e=>{let{value:r,label:t,attributes:a}=e;return(0,m.jsx)("li",{role:"tab",tabIndex:s===r?0:-1,"aria-selected":s===r,ref:e=>d.push(e),onKeyDown:p,onClick:h,...a,className:(0,n.A)("font-bold tracking-widest w-fit px-3 inline-flex py-1 uppercase border-b text-lg cursor-pointer",f.tabItem,a?.className,{"border-b-2 pointer-events-none":s===r,"border-b-2 text-[#669dcb] border-[#669dcb]":s===r&&u.startsWith("/terminal"),"border-b-2 text-[#FB923C] border-[#FB923C]":s===r&&u.startsWith("/sdk"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":s!==r&&u.startsWith("/sdk"),"border-b-2 text-[#FB923C] border-[#FB923C]":s===r&&u.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":s!==r&&u.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#abd2f1] hover:border-[#abd2f1]":s!==r&&u.startsWith("/terminal")}),children:t??r},r)}))})}function v(e){let{lazy:r,children:t,selectedValue:n}=e;if(t=Array.isArray(t)?t:[t],r){const e=t.find((e=>e.props.value===n));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,m.jsx)("div",{className:"margin-top--md",children:t.map(((e,r)=>(0,s.cloneElement)(e,{key:r,hidden:e.props.value!==n})))})}function g(e){const r=b(e);return(0,m.jsxs)("div",{className:(0,n.A)("tabs-container",f.tabList),children:[(0,m.jsx)(y,{...e,...r}),(0,m.jsx)(v,{...e,...r})]})}function k(e){const r=(0,j.A)();return(0,m.jsx)(g,{...e},String(r))}},28453:(e,r,t)=>{t.d(r,{R:()=>c,x:()=>i});var s=t(96540);const n={},a=s.createContext(n);function c(e){const r=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:c(e.components),s.createElement(a.Provider,{value:r},e.children)}}}]);