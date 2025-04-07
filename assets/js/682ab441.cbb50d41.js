"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[36605],{76946:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>b,frontMatter:()=>l,metadata:()=>c,toc:()=>h});var n=r(74848),s=r(28453),a=r(94331),i=r(18228),o=r(19365);const l={title:"institutions_search",description:"Learn how to use the OBB.regulators.sec.institutions_search() method  to look up institutions regulated by the SEC. This method allows you to search for  institutions based on various parameters such as the query and provider. It returns  a list of search results and provides additional attributes like warnings, chart,  and metadata. Explore the attributes like name and cik for more details on the institution.",keywords:["institutions regulated by the SEC","SEC regulated institutions lookup","SEC regulated institutions search","SEC institutions search query","OBB regulator","InstitutionsSearch class","provider parameter","query parameter","use_cache parameter","results attribute","warnings attribute","chart attribute","metadata attribute","name attribute","cik attribute"]},u=void 0,c={id:"platform/reference/regulators/sec/institutions_search",title:"institutions_search",description:"Learn how to use the OBB.regulators.sec.institutions_search() method  to look up institutions regulated by the SEC. This method allows you to search for  institutions based on various parameters such as the query and provider. It returns  a list of search results and provides additional attributes like warnings, chart,  and metadata. Explore the attributes like name and cik for more details on the institution.",source:"@site/content/platform/reference/regulators/sec/institutions_search.md",sourceDirName:"platform/reference/regulators/sec",slug:"/platform/reference/regulators/sec/institutions_search",permalink:"/platform/reference/regulators/sec/institutions_search",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/platform/reference/regulators/sec/institutions_search.md",tags:[],version:"current",frontMatter:{title:"institutions_search",description:"Learn how to use the OBB.regulators.sec.institutions_search() method  to look up institutions regulated by the SEC. This method allows you to search for  institutions based on various parameters such as the query and provider. It returns  a list of search results and provides additional attributes like warnings, chart,  and metadata. Explore the attributes like name and cik for more details on the institution.",keywords:["institutions regulated by the SEC","SEC regulated institutions lookup","SEC regulated institutions search","SEC institutions search query","OBB regulator","InstitutionsSearch class","provider parameter","query parameter","use_cache parameter","results attribute","warnings attribute","chart attribute","metadata attribute","name attribute","cik attribute"]},sidebar:"tutorialSidebar",previous:{title:"htm_file",permalink:"/platform/reference/regulators/sec/htm_file"},next:{title:"rss_litigation",permalink:"/platform/reference/regulators/sec/rss_litigation"}},d={},h=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Data",id:"data",level:2}];function p(e){const t={code:"code",em:"em",h2:"h2",hr:"hr",p:"p",strong:"strong",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.A,{title:"regulators/sec/institutions_search - Reference | OpenBB Platform Docs"}),"\n","\n",(0,n.jsx)(t.p,{children:"Search SEC-regulated institutions by name and return a list of results with CIK numbers."}),"\n",(0,n.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(i.A,{children:[(0,n.jsxs)(o.A,{value:"standard",label:"standard",children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.code,{children:"query"})}),": ",(0,n.jsx)(t.code,{children:"str"})]}),(0,n.jsx)(t.p,{children:"Search query."}),(0,n.jsxs)(t.p,{children:["\u2022 ",(0,n.jsx)(t.em,{children:"Optional:"})," ",(0,n.jsx)(t.code,{children:"True"})]})]}),(0,n.jsxs)(o.A,{value:"sec",label:"sec",children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.code,{children:"query"})}),": ",(0,n.jsx)(t.code,{children:"str"})]}),(0,n.jsx)(t.p,{children:"Search query."}),(0,n.jsxs)(t.p,{children:["\u2022 ",(0,n.jsx)(t.em,{children:"Optional:"})," ",(0,n.jsx)(t.code,{children:"True"})]}),(0,n.jsx)(t.hr,{}),(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.code,{children:"use_cache"})}),": ",(0,n.jsx)(t.code,{children:"bool"})]}),(0,n.jsx)(t.p,{children:"Whether or not to use cache."}),(0,n.jsxs)(t.p,{children:["\u2022 ",(0,n.jsx)(t.em,{children:"Default:"})," ",(0,n.jsx)(t.code,{children:"True"})]}),(0,n.jsxs)(t.p,{children:["\u2022 ",(0,n.jsx)(t.em,{children:"Optional:"})," ",(0,n.jsx)(t.code,{children:"True"})]})]})]}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.code,{children:"results"})}),": ",(0,n.jsx)(t.code,{children:"list[InstitutionsSearch]"})]}),"\n",(0,n.jsx)(t.p,{children:"Serializable results."}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.code,{children:"provider"})}),": ",(0,n.jsx)(t.code,{children:"Optional[Literal['sec']]"})]}),"\n",(0,n.jsx)(t.p,{children:"Provider name."}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.code,{children:"warnings"})}),": ",(0,n.jsx)(t.code,{children:"Optional[list[Warning_]]"})]}),"\n",(0,n.jsx)(t.p,{children:"list of warnings."}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.code,{children:"chart"})}),": ",(0,n.jsx)(t.code,{children:"Optional[Chart]"})]}),"\n",(0,n.jsx)(t.p,{children:"Chart object."}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.code,{children:"extra"})}),": ",(0,n.jsx)(t.code,{children:"dict[str, Any]"})]}),"\n",(0,n.jsx)(t.p,{children:"Extra info."}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"data",children:"Data"}),"\n",(0,n.jsxs)(i.A,{children:[(0,n.jsx)(o.A,{value:"standard",label:"standard"}),(0,n.jsxs)(o.A,{value:"sec",label:"sec",children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.code,{children:"name"})}),": ",(0,n.jsx)(t.code,{children:"str"})]}),(0,n.jsx)(t.p,{children:"The name of the institution."}),(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.code,{children:"cik"})}),": ",(0,n.jsx)(t.code,{children:"Union[str, int]"})]}),(0,n.jsx)(t.p,{children:"Central Index Key (CIK)"})]})]})]})}function b(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},19365:(e,t,r)=>{r.d(t,{A:()=>i});r(96540);var n=r(34164);const s={tabItem:"tabItem_Ymn6"};var a=r(74848);function i(e){let{children:t,hidden:r,className:i}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,n.A)(s.tabItem,i),hidden:r,children:t})}},94331:(e,t,r)=>{r.d(t,{A:()=>a});r(96540);var n=r(5260),s=r(74848);function a(e){let{title:t}=e;return(0,s.jsx)(n.A,{children:(0,s.jsx)("title",{children:t})})}},18228:(e,t,r)=>{r.d(t,{A:()=>w});var n=r(56347),s=r(23104),a=r(96540),i=r(205),o=r(57485),l=r(31682),u=r(89466);function c(e){return function(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:s}}=e;return{value:t,label:r,attributes:n,default:s}}))}function d(e){const{values:t,children:r}=e;return(0,a.useMemo)((()=>{const e=t??c(r);return function(e){const t=(0,l.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function h(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:r}=e;const s=(0,n.W6)(),i=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,o.aZ)(i),(0,a.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(s.location.search);t.set(i,e),s.replace({...s.location,search:t.toString()})}),[i,s])]}function b(e){const{defaultValue:t,queryString:r=!1,groupId:n}=e,s=d(e),[o,l]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:s}))),[c,b]=p({queryString:r,groupId:n}),[f,x]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,s]=(0,u.Dv)(r);return[n,(0,a.useCallback)((e=>{r&&s.set(e)}),[r,s])]}({groupId:n}),m=(()=>{const e=c??f;return h({value:e,tabValues:s})?e:null})();(0,i.A)((()=>{m&&l(m)}),[m]);return{selectedValue:o,selectValue:(0,a.useCallback)((e=>{if(!h({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),b(e),x(e)}),[b,x,s]),tabValues:s}}var f=r(92303),x=r(34164);const m={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};var j=r(74848);function g(e){let{className:t,block:r,selectedValue:a,selectValue:i,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:u}=(0,s.a_)(),{pathname:c}=(0,n.zy)(),d=e=>{const t=e.currentTarget,r=l.indexOf(t),n=o[r].value;n!==a&&(u(t),i(n))},h=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const r=l.indexOf(e.currentTarget)+1;t=l[r]??l[0];break}case"ArrowLeft":{const r=l.indexOf(e.currentTarget)-1;t=l[r]??l[l.length-1];break}}t?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,x.A)("_group-tab list-none -ml-7 my-6 overflow-auto"),children:o.map((e=>{let{value:t,label:r,attributes:n}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:e=>l.push(e),onKeyDown:h,onClick:d,...n,className:(0,x.A)("font-bold tracking-widest w-fit px-3 inline-flex py-1 uppercase border-b text-lg cursor-pointer",m.tabItem,n?.className,{"border-b-2 pointer-events-none":a===t,"border-b-2 text-[#669dcb] border-[#669dcb]":a===t&&c.startsWith("/workspace"),"border-b-2 text-[#FB923C] border-[#FB923C]":a===t&&c.startsWith("/sdk"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":a!==t&&c.startsWith("/sdk"),"border-b-2 text-[#FB923C] border-[#FB923C]":a===t&&c.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":a!==t&&c.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#abd2f1] hover:border-[#abd2f1]":a!==t&&c.startsWith("/workspace")}),children:r??t},t)}))})}function v(e){let{lazy:t,children:r,selectedValue:n}=e;if(r=Array.isArray(r)?r:[r],t){const e=r.find((e=>e.props.value===n));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:r.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==n})))})}function y(e){const t=b(e);return(0,j.jsxs)("div",{className:(0,x.A)("tabs-container",m.tabList),children:[(0,j.jsx)(g,{...e,...t}),(0,j.jsx)(v,{...e,...t})]})}function w(e){const t=(0,f.A)();return(0,j.jsx)(y,{...e},String(t))}},28453:(e,t,r)=>{r.d(t,{R:()=>i,x:()=>o});var n=r(96540);const s={},a=n.createContext(s);function i(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);