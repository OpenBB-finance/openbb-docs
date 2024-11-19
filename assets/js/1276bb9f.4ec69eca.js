"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[19608],{23062:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>b,frontMatter:()=>c,metadata:()=>d,toc:()=>h});var s=r(74848),n=r(28453),a=r(94331),l=r(18228),i=r(19365);const c={title:"schema_files",description:"Get lists of SEC XML schema files by year with the OBBect function. Returns  serializable results, provider name, warnings list, chart object, metadata info,  and data including a list of URLs to SEC Schema Files.",keywords:["SEC XML schema files","SEC XML schema files by year","get SEC XML schema files","OBBect","Serializable results","provider name","warnings list","chart object","metadata info","fetch URL path","data","list of URLs to SEC Schema Files"]},o=void 0,d={id:"platform/reference/regulators/sec/schema_files",title:"schema_files",description:"Get lists of SEC XML schema files by year with the OBBect function. Returns  serializable results, provider name, warnings list, chart object, metadata info,  and data including a list of URLs to SEC Schema Files.",source:"@site/content/platform/reference/regulators/sec/schema_files.md",sourceDirName:"platform/reference/regulators/sec",slug:"/platform/reference/regulators/sec/schema_files",permalink:"/platform/reference/regulators/sec/schema_files",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/platform/reference/regulators/sec/schema_files.md",tags:[],version:"current",frontMatter:{title:"schema_files",description:"Get lists of SEC XML schema files by year with the OBBect function. Returns  serializable results, provider name, warnings list, chart object, metadata info,  and data including a list of URLs to SEC Schema Files.",keywords:["SEC XML schema files","SEC XML schema files by year","get SEC XML schema files","OBBect","Serializable results","provider name","warnings list","chart object","metadata info","fetch URL path","data","list of URLs to SEC Schema Files"]},sidebar:"tutorialSidebar",previous:{title:"rss_litigation",permalink:"/platform/reference/regulators/sec/rss_litigation"},next:{title:"sic_search",permalink:"/platform/reference/regulators/sec/sic_search"}},u={},h=[{value:"Examples",id:"examples",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Data",id:"data",level:2}];function f(e){const t={code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a.A,{title:"regulators/sec/schema_files - Reference | OpenBB Platform Docs"}),"\n","\n",(0,s.jsx)(t.p,{children:"Use tool for navigating the directory of SEC XML schema files by year."}),"\n",(0,s.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:"from openbb import obb\nobb.regulators.sec.schema_files(provider='sec')\n# Get a list of schema files.\ndata = obb.regulators.sec.schema_files().results\ndata.files[0]\n'https://xbrl.fasb.org/us-gaap/'\n# The directory structure can be navigated by constructing a URL from the 'results' list.\nurl = data.files[0]+data.files[-1]\n# The URL base will always be the 0 position in the list, feed  the URL back in as a parameter.\nobb.regulators.sec.schema_files(url=url).results.files\n['https://xbrl.fasb.org/us-gaap/2024/'\n'USGAAP2024FileList.xml'\n'dis/'\n'dqcrules/'\n'ebp/'\n'elts/'\n'entire/'\n'meta/'\n'stm/'\n'us-gaap-2024.zip']\n"})}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(l.A,{children:[(0,s.jsx)(i.A,{value:"standard",label:"standard",children:(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"}),(0,s.jsx)(t.th,{children:"Default"}),(0,s.jsx)(t.th,{children:"Optional"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"query"}),(0,s.jsx)(t.td,{children:"str"}),(0,s.jsx)(t.td,{children:"Search query."}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"True"})]})})]})}),(0,s.jsx)(i.A,{value:"sec",label:"sec",children:(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"}),(0,s.jsx)(t.th,{children:"Default"}),(0,s.jsx)(t.th,{children:"Optional"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"query"}),(0,s.jsx)(t.td,{children:"str"}),(0,s.jsx)(t.td,{children:"Search query."}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"True"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"url"}),(0,s.jsx)(t.td,{children:"str"}),(0,s.jsx)(t.td,{children:"Enter an optional URL path to fetch the next level."}),(0,s.jsx)(t.td,{children:"None"}),(0,s.jsx)(t.td,{children:"True"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"use_cache"}),(0,s.jsx)(t.td,{children:"bool"}),(0,s.jsx)(t.td,{children:"Whether or not to use cache."}),(0,s.jsx)(t.td,{children:"True"}),(0,s.jsx)(t.td,{children:"True"})]})]})]})})]}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",metastring:"wordwrap",children:"OBBject\n    results : List[SchemaFiles]\n        Serializable results.\n\n    provider : Optional[Literal['sec']]\n        Provider name.\n\n    warnings : Optional[List[Warning_]]\n        List of warnings.\n\n    chart : Optional[Chart]\n        Chart object.\n\n    extra : Dict[str, Any]\n        Extra info.\n"})}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h2,{id:"data",children:"Data"}),"\n",(0,s.jsxs)(l.A,{children:[(0,s.jsx)(i.A,{value:"standard",label:"standard",children:(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:";"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{})]})})]})}),(0,s.jsx)(i.A,{value:"sec",label:"sec",children:(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"files"}),(0,s.jsx)(t.td,{children:"List[str]"}),(0,s.jsx)(t.td,{children:"Dictionary of URLs to SEC Schema Files"})]})})]})})]})]})}function b(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(f,{...e})}):f(e)}},19365:(e,t,r)=>{r.d(t,{A:()=>l});r(96540);var s=r(34164);const n={tabItem:"tabItem_Ymn6"};var a=r(74848);function l(e){let{children:t,hidden:r,className:l}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,s.A)(n.tabItem,l),hidden:r,children:t})}},94331:(e,t,r)=>{r.d(t,{A:()=>a});r(96540);var s=r(5260),n=r(74848);function a(e){let{title:t}=e;return(0,n.jsx)(s.A,{children:(0,n.jsx)("title",{children:t})})}},18228:(e,t,r)=>{r.d(t,{A:()=>w});var s=r(96540),n=r(34164),a=r(23104),l=r(56347),i=r(205),c=r(57485),o=r(31682),d=r(89466);function u(e){return function(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:s,default:n}}=e;return{value:t,label:r,attributes:s,default:n}}))}function h(e){const{values:t,children:r}=e;return(0,s.useMemo)((()=>{const e=t??u(r);return function(e){const t=(0,o.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function f(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:r}=e;const n=(0,l.W6)(),a=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,c.aZ)(a),(0,s.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(n.location.search);t.set(a,e),n.replace({...n.location,search:t.toString()})}),[a,n])]}function m(e){const{defaultValue:t,queryString:r=!1,groupId:n}=e,a=h(e),[l,c]=(0,s.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!f({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const s=r.find((e=>e.default))??r[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:t,tabValues:a}))),[o,u]=b({queryString:r,groupId:n}),[m,p]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,a]=(0,d.Dv)(r);return[n,(0,s.useCallback)((e=>{r&&a.set(e)}),[r,a])]}({groupId:n}),x=(()=>{const e=o??m;return f({value:e,tabValues:a})?e:null})();(0,i.A)((()=>{x&&c(x)}),[x]);return{selectedValue:l,selectValue:(0,s.useCallback)((e=>{if(!f({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);c(e),u(e),p(e)}),[u,p,a]),tabValues:a}}var p=r(92303);const x={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};var j=r(74848);function g(e){let{className:t,block:r,selectedValue:s,selectValue:i,tabValues:c}=e;const o=[],{blockElementScrollPositionUntilNextRender:d}=(0,a.a_)(),{pathname:u}=(0,l.zy)(),h=e=>{const t=e.currentTarget,r=o.indexOf(t),n=c[r].value;n!==s&&(d(t),i(n))},f=e=>{let t=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{const r=o.indexOf(e.currentTarget)+1;t=o[r]??o[0];break}case"ArrowLeft":{const r=o.indexOf(e.currentTarget)-1;t=o[r]??o[o.length-1];break}}t?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.A)("_group-tab list-none -ml-7 my-6 overflow-auto"),children:c.map((e=>{let{value:t,label:r,attributes:a}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,ref:e=>o.push(e),onKeyDown:f,onClick:h,...a,className:(0,n.A)("font-bold tracking-widest w-fit px-3 inline-flex py-1 uppercase border-b text-lg cursor-pointer",x.tabItem,a?.className,{"border-b-2 pointer-events-none":s===t,"border-b-2 text-[#669dcb] border-[#669dcb]":s===t&&u.startsWith("/terminal"),"border-b-2 text-[#FB923C] border-[#FB923C]":s===t&&u.startsWith("/sdk"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":s!==t&&u.startsWith("/sdk"),"border-b-2 text-[#FB923C] border-[#FB923C]":s===t&&u.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":s!==t&&u.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#abd2f1] hover:border-[#abd2f1]":s!==t&&u.startsWith("/terminal")}),children:r??t},t)}))})}function v(e){let{lazy:t,children:r,selectedValue:n}=e;if(r=Array.isArray(r)?r:[r],t){const e=r.find((e=>e.props.value===n));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:r.map(((e,t)=>(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==n})))})}function y(e){const t=m(e);return(0,j.jsxs)("div",{className:(0,n.A)("tabs-container",x.tabList),children:[(0,j.jsx)(g,{...e,...t}),(0,j.jsx)(v,{...e,...t})]})}function w(e){const t=(0,p.A)();return(0,j.jsx)(y,{...e},String(t))}},28453:(e,t,r)=>{r.d(t,{R:()=>l,x:()=>i});var s=r(96540);const n={},a=s.createContext(n);function l(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:l(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);