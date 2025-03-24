"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2173],{67900:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>h,contentTitle:()=>c,default:()=>j,frontMatter:()=>d,metadata:()=>o,toc:()=>u});var n=r(74848),s=r(28453),i=r(94331),a=r(18228),l=r(19365);const d={title:"search_attributes",description:"Search Intrinio data tags to search in latest or historical attributes",keywords:["equity","fundamental","search_attributes"]},c=void 0,o={id:"platform/reference/equity/fundamental/search_attributes",title:"search_attributes",description:"Search Intrinio data tags to search in latest or historical attributes",source:"@site/content/platform/reference/equity/fundamental/search_attributes.md",sourceDirName:"platform/reference/equity/fundamental",slug:"/platform/reference/equity/fundamental/search_attributes",permalink:"/platform/reference/equity/fundamental/search_attributes",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/platform/reference/equity/fundamental/search_attributes.md",tags:[],version:"current",frontMatter:{title:"search_attributes",description:"Search Intrinio data tags to search in latest or historical attributes",keywords:["equity","fundamental","search_attributes"]},sidebar:"tutorialSidebar",previous:{title:"revenue_per_segment",permalink:"/platform/reference/equity/fundamental/revenue_per_segment"},next:{title:"trailing_dividend_yield",permalink:"/platform/reference/equity/fundamental/trailing_dividend_yield"}},h={},u=[{value:"Examples",id:"examples",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Data",id:"data",level:2}];function x(e){const t={code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.A,{title:"equity/fundamental/search_attributes - Reference | OpenBB Platform Docs"}),"\n","\n",(0,n.jsx)(t.p,{children:"Search Intrinio data tags to search in latest or historical attributes."}),"\n",(0,n.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"from openbb import obb\nobb.equity.fundamental.search_attributes(query='ebitda', provider='intrinio')\n"})}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(a.A,{children:[(0,n.jsx)(l.A,{value:"standard",label:"standard",children:(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Default"}),(0,n.jsx)(t.th,{children:"Optional"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"query"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Query to search for."}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"False"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"limit"}),(0,n.jsx)(t.td,{children:"int"}),(0,n.jsx)(t.td,{children:"The number of data entries to return."}),(0,n.jsx)(t.td,{children:"1000"}),(0,n.jsx)(t.td,{children:"True"})]})]})]})}),(0,n.jsx)(l.A,{value:"intrinio",label:"intrinio",children:(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Default"}),(0,n.jsx)(t.th,{children:"Optional"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"query"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Query to search for."}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"False"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"limit"}),(0,n.jsx)(t.td,{children:"int"}),(0,n.jsx)(t.td,{children:"The number of data entries to return."}),(0,n.jsx)(t.td,{children:"1000"}),(0,n.jsx)(t.td,{children:"True"})]})]})]})})]}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",metastring:"wordwrap",children:"OBBject\n    results : List[SearchAttributes]\n        Serializable results.\n\n    provider : Optional[Literal['intrinio']]\n        Provider name.\n\n    warnings : Optional[List[Warning_]]\n        List of warnings.\n\n    chart : Optional[Chart]\n        Chart object.\n\n    extra : Dict[str, Any]\n        Extra info.\n"})}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"data",children:"Data"}),"\n",(0,n.jsxs)(a.A,{children:[(0,n.jsx)(l.A,{value:"standard",label:"standard",children:(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"id"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"ID of the financial attribute."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"name"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Name of the financial attribute."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"tag"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Tag of the financial attribute."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"statement_code"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Code of the financial statement."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"statement_type"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Type of the financial statement."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"parent_name"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Parent's name of the financial attribute."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"sequence"}),(0,n.jsx)(t.td,{children:"int"}),(0,n.jsx)(t.td,{children:"Sequence of the financial statement."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"factor"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Unit of the financial attribute."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"transaction"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Transaction type (credit/debit) of the financial attribute."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"type"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Type of the financial attribute."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"unit"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Unit of the financial attribute."})]})]})]})}),(0,n.jsx)(l.A,{value:"intrinio",label:"intrinio",children:(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"id"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"ID of the financial attribute."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"name"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Name of the financial attribute."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"tag"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Tag of the financial attribute."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"statement_code"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Code of the financial statement."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"statement_type"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Type of the financial statement."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"parent_name"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Parent's name of the financial attribute."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"sequence"}),(0,n.jsx)(t.td,{children:"int"}),(0,n.jsx)(t.td,{children:"Sequence of the financial statement."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"factor"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Unit of the financial attribute."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"transaction"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Transaction type (credit/debit) of the financial attribute."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"type"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Type of the financial attribute."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"unit"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Unit of the financial attribute."})]})]})]})})]})]})}function j(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(x,{...e})}):x(e)}},19365:(e,t,r)=>{r.d(t,{A:()=>a});r(96540);var n=r(34164);const s={tabItem:"tabItem_Ymn6"};var i=r(74848);function a(e){let{children:t,hidden:r,className:a}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,n.A)(s.tabItem,a),hidden:r,children:t})}},94331:(e,t,r)=>{r.d(t,{A:()=>i});r(96540);var n=r(5260),s=r(74848);function i(e){let{title:t}=e;return(0,s.jsx)(n.A,{children:(0,s.jsx)("title",{children:t})})}},18228:(e,t,r)=>{r.d(t,{A:()=>w});var n=r(56347),s=r(23104),i=r(96540),a=r(205),l=r(57485),d=r(31682),c=r(89466);function o(e){return function(e){return i.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:s}}=e;return{value:t,label:r,attributes:n,default:s}}))}function h(e){const{values:t,children:r}=e;return(0,i.useMemo)((()=>{const e=t??o(r);return function(e){const t=(0,d.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function u(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function x(e){let{queryString:t=!1,groupId:r}=e;const s=(0,n.W6)(),a=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,l.aZ)(a),(0,i.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(s.location.search);t.set(a,e),s.replace({...s.location,search:t.toString()})}),[a,s])]}function j(e){const{defaultValue:t,queryString:r=!1,groupId:n}=e,s=h(e),[l,d]=(0,i.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!u({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:s}))),[o,j]=x({queryString:r,groupId:n}),[f,b]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,s]=(0,c.Dv)(r);return[n,(0,i.useCallback)((e=>{r&&s.set(e)}),[r,s])]}({groupId:n}),p=(()=>{const e=o??f;return u({value:e,tabValues:s})?e:null})();(0,a.A)((()=>{p&&d(p)}),[p]);return{selectedValue:l,selectValue:(0,i.useCallback)((e=>{if(!u({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);d(e),j(e),b(e)}),[j,b,s]),tabValues:s}}var f=r(92303),b=r(34164);const p={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};var m=r(74848);function y(e){let{className:t,block:r,selectedValue:i,selectValue:a,tabValues:l}=e;const d=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.a_)(),{pathname:o}=(0,n.zy)(),h=e=>{const t=e.currentTarget,r=d.indexOf(t),n=l[r].value;n!==i&&(c(t),a(n))},u=e=>{let t=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{const r=d.indexOf(e.currentTarget)+1;t=d[r]??d[0];break}case"ArrowLeft":{const r=d.indexOf(e.currentTarget)-1;t=d[r]??d[d.length-1];break}}t?.focus()};return(0,m.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,b.A)("_group-tab list-none -ml-7 my-6 overflow-auto"),children:l.map((e=>{let{value:t,label:r,attributes:n}=e;return(0,m.jsx)("li",{role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,ref:e=>d.push(e),onKeyDown:u,onClick:h,...n,className:(0,b.A)("font-bold tracking-widest w-fit px-3 inline-flex py-1 uppercase border-b text-lg cursor-pointer",p.tabItem,n?.className,{"border-b-2 pointer-events-none":i===t,"border-b-2 text-[#669dcb] border-[#669dcb]":i===t&&o.startsWith("/workspace"),"border-b-2 text-[#FB923C] border-[#FB923C]":i===t&&o.startsWith("/sdk"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":i!==t&&o.startsWith("/sdk"),"border-b-2 text-[#FB923C] border-[#FB923C]":i===t&&o.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":i!==t&&o.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#abd2f1] hover:border-[#abd2f1]":i!==t&&o.startsWith("/workspace")}),children:r??t},t)}))})}function v(e){let{lazy:t,children:r,selectedValue:n}=e;if(r=Array.isArray(r)?r:[r],t){const e=r.find((e=>e.props.value===n));return e?(0,i.cloneElement)(e,{className:"margin-top--md"}):null}return(0,m.jsx)("div",{className:"margin-top--md",children:r.map(((e,t)=>(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==n})))})}function g(e){const t=j(e);return(0,m.jsxs)("div",{className:(0,b.A)("tabs-container",p.tabList),children:[(0,m.jsx)(y,{...e,...t}),(0,m.jsx)(v,{...e,...t})]})}function w(e){const t=(0,f.A)();return(0,m.jsx)(g,{...e},String(t))}},28453:(e,t,r)=>{r.d(t,{R:()=>a,x:()=>l});var n=r(96540);const s={},i=n.createContext(s);function a(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);