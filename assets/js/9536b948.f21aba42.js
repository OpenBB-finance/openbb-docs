"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[59741],{41240:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>u,contentTitle:()=>o,default:()=>p,frontMatter:()=>c,metadata:()=>d,toc:()=>h});var n=t(74848),s=t(28453),a=t(94331),i=t(18228),l=t(19365);const c={title:"sic_search",description:"Learn how to perform a search for industry titles, reporting office,  and SIC codes using Python. Explore the parameters, returns, and data associated  with the `obb.regulators.sec.sic_search` function.",keywords:["search","industry titles","reporting office","SIC codes","Python","search query","provider","cache","results","warnings","chart","metadata","data","sector industrial code","industry title","reporting office","Corporate Finance Office"]},o=void 0,d={id:"platform/reference/regulators/sec/sic_search",title:"sic_search",description:"Learn how to perform a search for industry titles, reporting office,  and SIC codes using Python. Explore the parameters, returns, and data associated  with the `obb.regulators.sec.sic_search` function.",source:"@site/content/platform/reference/regulators/sec/sic_search.md",sourceDirName:"platform/reference/regulators/sec",slug:"/platform/reference/regulators/sec/sic_search",permalink:"/platform/reference/regulators/sec/sic_search",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/platform/reference/regulators/sec/sic_search.md",tags:[],version:"current",frontMatter:{title:"sic_search",description:"Learn how to perform a search for industry titles, reporting office,  and SIC codes using Python. Explore the parameters, returns, and data associated  with the `obb.regulators.sec.sic_search` function.",keywords:["search","industry titles","reporting office","SIC codes","Python","search query","provider","cache","results","warnings","chart","metadata","data","sector industrial code","industry title","reporting office","Corporate Finance Office"]},sidebar:"tutorialSidebar",previous:{title:"schema_files",permalink:"/platform/reference/regulators/sec/schema_files"},next:{title:"symbol_map",permalink:"/platform/reference/regulators/sec/symbol_map"}},u={},h=[{value:"Examples",id:"examples",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Data",id:"data",level:2}];function f(e){const r={code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.A,{title:"regulators/sec/sic_search - Reference | OpenBB Platform Docs"}),"\n","\n",(0,n.jsx)(r.p,{children:"Search for Industry Titles, Reporting Office, and SIC Codes. An empty query string returns all results."}),"\n",(0,n.jsx)(r.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:"from openbb import obb\nobb.regulators.sec.sic_search(provider='sec')\nobb.regulators.sec.sic_search(query='real estate investment trusts', provider='sec')\n"})}),"\n",(0,n.jsx)(r.hr,{}),"\n",(0,n.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(i.A,{children:[(0,n.jsx)(l.A,{value:"standard",label:"standard",children:(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Name"}),(0,n.jsx)(r.th,{children:"Type"}),(0,n.jsx)(r.th,{children:"Description"}),(0,n.jsx)(r.th,{children:"Default"}),(0,n.jsx)(r.th,{children:"Optional"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"query"}),(0,n.jsx)(r.td,{children:"str"}),(0,n.jsx)(r.td,{children:"Search query."}),(0,n.jsx)(r.td,{}),(0,n.jsx)(r.td,{children:"True"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"use_cache"}),(0,n.jsx)(r.td,{children:"bool"}),(0,n.jsx)(r.td,{children:"Whether or not to use cache."}),(0,n.jsx)(r.td,{children:"True"}),(0,n.jsx)(r.td,{children:"True"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"provider"}),(0,n.jsx)(r.td,{children:"Literal['sec']"}),(0,n.jsx)(r.td,{children:"The provider to use, by default None. If None, the priority list configured in the settings is used. Default priority: sec."}),(0,n.jsx)(r.td,{children:"None"}),(0,n.jsx)(r.td,{children:"True"})]})]})]})}),(0,n.jsx)(l.A,{value:"sec",label:"sec",children:(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Name"}),(0,n.jsx)(r.th,{children:"Type"}),(0,n.jsx)(r.th,{children:"Description"}),(0,n.jsx)(r.th,{children:"Default"}),(0,n.jsx)(r.th,{children:"Optional"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"query"}),(0,n.jsx)(r.td,{children:"str"}),(0,n.jsx)(r.td,{children:"Search query."}),(0,n.jsx)(r.td,{}),(0,n.jsx)(r.td,{children:"True"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"use_cache"}),(0,n.jsx)(r.td,{children:"bool"}),(0,n.jsx)(r.td,{children:"Whether or not to use cache."}),(0,n.jsx)(r.td,{children:"True"}),(0,n.jsx)(r.td,{children:"True"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"provider"}),(0,n.jsx)(r.td,{children:"Literal['sec']"}),(0,n.jsx)(r.td,{children:"The provider to use, by default None. If None, the priority list configured in the settings is used. Default priority: sec."}),(0,n.jsx)(r.td,{children:"None"}),(0,n.jsx)(r.td,{children:"True"})]})]})]})})]}),"\n",(0,n.jsx)(r.hr,{}),"\n",(0,n.jsx)(r.h2,{id:"returns",children:"Returns"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",metastring:"wordwrap",children:"OBBject\n    results : List[SicSearch]\n        Serializable results.\n\n    provider : Optional[Literal['sec']]\n        Provider name.\n\n    warnings : Optional[List[Warning_]]\n        List of warnings.\n\n    chart : Optional[Chart]\n        Chart object.\n\n    extra : Dict[str, Any]\n        Extra info.\n"})}),"\n",(0,n.jsx)(r.hr,{}),"\n",(0,n.jsx)(r.h2,{id:"data",children:"Data"}),"\n",(0,n.jsxs)(i.A,{children:[(0,n.jsx)(l.A,{value:"standard",label:"standard",children:(0,n.jsx)(r.table,{children:(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Name"}),(0,n.jsx)(r.th,{children:"Type"}),(0,n.jsx)(r.th,{children:"Description"})]})})})}),(0,n.jsx)(l.A,{value:"sec",label:"sec",children:(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Name"}),(0,n.jsx)(r.th,{children:"Type"}),(0,n.jsx)(r.th,{children:"Description"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"sic"}),(0,n.jsx)(r.td,{children:"int"}),(0,n.jsx)(r.td,{children:"Sector Industrial Code (SIC)"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"industry"}),(0,n.jsx)(r.td,{children:"str"}),(0,n.jsx)(r.td,{children:"Industry title."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"office"}),(0,n.jsx)(r.td,{children:"str"}),(0,n.jsx)(r.td,{children:"Reporting office within the Corporate Finance Office"})]})]})]})})]})]})}function p(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(f,{...e})}):f(e)}},19365:(e,r,t)=>{t.d(r,{A:()=>i});t(96540);var n=t(34164);const s={tabItem:"tabItem_Ymn6"};var a=t(74848);function i(e){let{children:r,hidden:t,className:i}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,n.A)(s.tabItem,i),hidden:t,children:r})}},94331:(e,r,t)=>{t.d(r,{A:()=>a});t(96540);var n=t(5260),s=t(74848);function a(e){let{title:r}=e;return(0,s.jsx)(n.A,{children:(0,s.jsx)("title",{children:r})})}},18228:(e,r,t)=>{t.d(r,{A:()=>w});var n=t(96540),s=t(34164),a=t(23104),i=t(56347),l=t(205),c=t(57485),o=t(31682),d=t(70679);function u(e){return function(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:r,label:t,attributes:n,default:s}}=e;return{value:r,label:t,attributes:n,default:s}}))}function h(e){const{values:r,children:t}=e;return(0,n.useMemo)((()=>{const e=r??u(t);return function(e){const r=(0,o.X)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,t])}function f(e){let{value:r,tabValues:t}=e;return t.some((e=>e.value===r))}function p(e){let{queryString:r=!1,groupId:t}=e;const s=(0,i.W6)(),a=function(e){let{queryString:r=!1,groupId:t}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:r,groupId:t});return[(0,c.aZ)(a),(0,n.useCallback)((e=>{if(!a)return;const r=new URLSearchParams(s.location.search);r.set(a,e),s.replace({...s.location,search:r.toString()})}),[a,s])]}function x(e){const{defaultValue:r,queryString:t=!1,groupId:s}=e,a=h(e),[i,c]=(0,n.useState)((()=>function(e){let{defaultValue:r,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!f({value:r,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const n=t.find((e=>e.default))??t[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:r,tabValues:a}))),[o,u]=p({queryString:t,groupId:s}),[x,b]=function(e){let{groupId:r}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(r),[s,a]=(0,d.Dv)(t);return[s,(0,n.useCallback)((e=>{t&&a.set(e)}),[t,a])]}({groupId:s}),j=(()=>{const e=o??x;return f({value:e,tabValues:a})?e:null})();(0,l.A)((()=>{j&&c(j)}),[j]);return{selectedValue:i,selectValue:(0,n.useCallback)((e=>{if(!f({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);c(e),u(e),b(e)}),[u,b,a]),tabValues:a}}var b=t(92303);const j={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};var m=t(74848);function g(e){let{className:r,block:t,selectedValue:n,selectValue:l,tabValues:c}=e;const o=[],{blockElementScrollPositionUntilNextRender:d}=(0,a.a_)(),{pathname:u}=(0,i.zy)(),h=e=>{const r=e.currentTarget,t=o.indexOf(r),s=c[t].value;s!==n&&(d(r),l(s))},f=e=>{let r=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{const t=o.indexOf(e.currentTarget)+1;r=o[t]??o[0];break}case"ArrowLeft":{const t=o.indexOf(e.currentTarget)-1;r=o[t]??o[o.length-1];break}}r?.focus()};return(0,m.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("_group-tab list-none -ml-7 my-6 overflow-auto"),children:c.map((e=>{let{value:r,label:t,attributes:a}=e;return(0,m.jsx)("li",{role:"tab",tabIndex:n===r?0:-1,"aria-selected":n===r,ref:e=>o.push(e),onKeyDown:f,onClick:h,...a,className:(0,s.A)("font-bold tracking-widest w-fit px-3 inline-flex py-1 uppercase border-b text-lg cursor-pointer",j.tabItem,a?.className,{"border-b-2 pointer-events-none":n===r,"border-b-2 text-[#669dcb] border-[#669dcb]":n===r&&u.startsWith("/terminal"),"border-b-2 text-[#FB923C] border-[#FB923C]":n===r&&u.startsWith("/sdk"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":n!==r&&u.startsWith("/sdk"),"border-b-2 text-[#FB923C] border-[#FB923C]":n===r&&u.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":n!==r&&u.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#abd2f1] hover:border-[#abd2f1]":n!==r&&u.startsWith("/terminal")}),children:t??r},r)}))})}function y(e){let{lazy:r,children:t,selectedValue:s}=e;if(t=Array.isArray(t)?t:[t],r){const e=t.find((e=>e.props.value===s));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,m.jsx)("div",{className:"margin-top--md",children:t.map(((e,r)=>(0,n.cloneElement)(e,{key:r,hidden:e.props.value!==s})))})}function v(e){const r=x(e);return(0,m.jsxs)("div",{className:(0,s.A)("tabs-container",j.tabList),children:[(0,m.jsx)(g,{...e,...r}),(0,m.jsx)(y,{...e,...r})]})}function w(e){const r=(0,b.A)();return(0,m.jsx)(v,{...e},String(r))}},28453:(e,r,t)=>{t.d(r,{R:()=>i,x:()=>l});var n=t(96540);const s={},a=n.createContext(s);function i(e){const r=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),n.createElement(a.Provider,{value:r},e.children)}}}]);