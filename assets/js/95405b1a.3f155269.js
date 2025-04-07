"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[77230],{20129:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var n=r(74848),a=r(28453),s=r(18228),l=r(19365);const o={title:"Institutions Search",description:"Search SEC-regulated institutions by name and return a list of results with CIK numbers"},i=void 0,c={id:"platform/data_models/InstitutionsSearch",title:"Institutions Search",description:"Search SEC-regulated institutions by name and return a list of results with CIK numbers",source:"@site/content/platform/data_models/InstitutionsSearch.md",sourceDirName:"platform/data_models",slug:"/platform/data_models/InstitutionsSearch",permalink:"/platform/data_models/InstitutionsSearch",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/platform/data_models/InstitutionsSearch.md",tags:[],version:"current",frontMatter:{title:"Institutions Search",description:"Search SEC-regulated institutions by name and return a list of results with CIK numbers"},sidebar:"tutorialSidebar",previous:{title:"Institutional Ownership",permalink:"/platform/data_models/InstitutionalOwnership"},next:{title:"Key Executives",permalink:"/platform/data_models/KeyExecutives"}},d={},u=[{value:"Implementation details",id:"implementation-details",level:2},{value:"Class names",id:"class-names",level:3},{value:"Import Statement",id:"import-statement",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Data",id:"data",level:2}];function h(e){const t={code:"code",em:"em",h2:"h2",h3:"h3",hr:"hr",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"implementation-details",children:"Implementation details"}),"\n",(0,n.jsx)(t.h3,{id:"class-names",children:"Class names"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Model name"}),(0,n.jsx)(t.th,{children:"Parameters class"}),(0,n.jsx)(t.th,{children:"Data class"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"InstitutionsSearch"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"InstitutionsSearchQueryParams"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"InstitutionsSearchData"})})]})})]}),"\n",(0,n.jsx)(t.h3,{id:"import-statement",children:"Import Statement"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"from openbb_core.provider.standard_models. import (\nInstitutionsSearchData,\nInstitutionsSearchQueryParams,\n)\n"})}),"\n",(0,n.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(s.A,{children:[(0,n.jsxs)(l.A,{value:"standard",label:"standard",children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.code,{children:"query"})}),": ",(0,n.jsx)(t.code,{children:"str"})]}),(0,n.jsx)(t.p,{children:"Search query."}),(0,n.jsxs)(t.p,{children:["\u2022 ",(0,n.jsx)(t.em,{children:"Optional:"})," ",(0,n.jsx)(t.code,{children:"True"})]})]}),(0,n.jsxs)(l.A,{value:"sec",label:"sec",children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.code,{children:"query"})}),": ",(0,n.jsx)(t.code,{children:"str"})]}),(0,n.jsx)(t.p,{children:"Search query."}),(0,n.jsxs)(t.p,{children:["\u2022 ",(0,n.jsx)(t.em,{children:"Optional:"})," ",(0,n.jsx)(t.code,{children:"True"})]}),(0,n.jsx)(t.hr,{}),(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.code,{children:"use_cache"})}),": ",(0,n.jsx)(t.code,{children:"bool"})]}),(0,n.jsx)(t.p,{children:"Whether or not to use cache."}),(0,n.jsxs)(t.p,{children:["\u2022 ",(0,n.jsx)(t.em,{children:"Default:"})," ",(0,n.jsx)(t.code,{children:"True"})]}),(0,n.jsxs)(t.p,{children:["\u2022 ",(0,n.jsx)(t.em,{children:"Optional:"})," ",(0,n.jsx)(t.code,{children:"True"})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"data",children:"Data"}),"\n",(0,n.jsxs)(s.A,{children:[(0,n.jsx)(l.A,{value:"standard",label:"standard"}),(0,n.jsxs)(l.A,{value:"sec",label:"sec",children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.code,{children:"name"})}),": ",(0,n.jsx)(t.code,{children:"str"})]}),(0,n.jsx)(t.p,{children:"The name of the institution."}),(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.code,{children:"cik"})}),": ",(0,n.jsx)(t.code,{children:"Union[str, int]"})]}),(0,n.jsx)(t.p,{children:"Central Index Key (CIK)"})]})]})]})}function m(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},19365:(e,t,r)=>{r.d(t,{A:()=>l});r(96540);var n=r(34164);const a={tabItem:"tabItem_Ymn6"};var s=r(74848);function l(e){let{children:t,hidden:r,className:l}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,n.A)(a.tabItem,l),hidden:r,children:t})}},18228:(e,t,r)=>{r.d(t,{A:()=>I});var n=r(56347),a=r(23104),s=r(96540),l=r(205),o=r(57485),i=r(31682),c=r(89466);function d(e){return function(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:a}}=e;return{value:t,label:r,attributes:n,default:a}}))}function u(e){const{values:t,children:r}=e;return(0,s.useMemo)((()=>{const e=t??d(r);return function(e){const t=(0,i.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function h(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:r}=e;const a=(0,n.W6)(),l=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,o.aZ)(l),(0,s.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(a.location.search);t.set(l,e),a.replace({...a.location,search:t.toString()})}),[l,a])]}function p(e){const{defaultValue:t,queryString:r=!1,groupId:n}=e,a=u(e),[o,i]=(0,s.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:a}))),[d,p]=m({queryString:r,groupId:n}),[b,x]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,a]=(0,c.Dv)(r);return[n,(0,s.useCallback)((e=>{r&&a.set(e)}),[r,a])]}({groupId:n}),f=(()=>{const e=d??b;return h({value:e,tabValues:a})?e:null})();(0,l.A)((()=>{f&&i(f)}),[f]);return{selectedValue:o,selectValue:(0,s.useCallback)((e=>{if(!h({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);i(e),p(e),x(e)}),[p,x,a]),tabValues:a}}var b=r(92303),x=r(34164);const f={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};var j=r(74848);function v(e){let{className:t,block:r,selectedValue:s,selectValue:l,tabValues:o}=e;const i=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.a_)(),{pathname:d}=(0,n.zy)(),u=e=>{const t=e.currentTarget,r=i.indexOf(t),n=o[r].value;n!==s&&(c(t),l(n))},h=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const r=i.indexOf(e.currentTarget)+1;t=i[r]??i[0];break}case"ArrowLeft":{const r=i.indexOf(e.currentTarget)-1;t=i[r]??i[i.length-1];break}}t?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,x.A)("_group-tab list-none -ml-7 my-6 overflow-auto"),children:o.map((e=>{let{value:t,label:r,attributes:n}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,ref:e=>i.push(e),onKeyDown:h,onClick:u,...n,className:(0,x.A)("font-bold tracking-widest w-fit px-3 inline-flex py-1 uppercase border-b text-lg cursor-pointer",f.tabItem,n?.className,{"border-b-2 pointer-events-none":s===t,"border-b-2 text-[#669dcb] border-[#669dcb]":s===t&&d.startsWith("/workspace"),"border-b-2 text-[#FB923C] border-[#FB923C]":s===t&&d.startsWith("/sdk"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":s!==t&&d.startsWith("/sdk"),"border-b-2 text-[#FB923C] border-[#FB923C]":s===t&&d.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":s!==t&&d.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#abd2f1] hover:border-[#abd2f1]":s!==t&&d.startsWith("/workspace")}),children:r??t},t)}))})}function g(e){let{lazy:t,children:r,selectedValue:n}=e;if(r=Array.isArray(r)?r:[r],t){const e=r.find((e=>e.props.value===n));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:r.map(((e,t)=>(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==n})))})}function y(e){const t=p(e);return(0,j.jsxs)("div",{className:(0,x.A)("tabs-container",f.tabList),children:[(0,j.jsx)(v,{...e,...t}),(0,j.jsx)(g,{...e,...t})]})}function I(e){const t=(0,b.A)();return(0,j.jsx)(y,{...e},String(t))}},28453:(e,t,r)=>{r.d(t,{R:()=>l,x:()=>o});var n=r(96540);const a={},s=n.createContext(a);function l(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);