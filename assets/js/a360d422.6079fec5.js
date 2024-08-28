"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[93129],{23532:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>h,contentTitle:()=>o,default:()=>x,frontMatter:()=>d,metadata:()=>c,toc:()=>u});var n=r(74848),s=r(28453),a=r(94331),i=r(18228),l=r(19365);const d={title:"forward_pe",description:"Get forward PE estimates",keywords:["equity","estimates","forward_pe"]},o=void 0,c={id:"platform/reference/equity/estimates/forward_pe",title:"forward_pe",description:"Get forward PE estimates",source:"@site/content/platform/reference/equity/estimates/forward_pe.md",sourceDirName:"platform/reference/equity/estimates",slug:"/platform/reference/equity/estimates/forward_pe",permalink:"/platform/reference/equity/estimates/forward_pe",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/platform/reference/equity/estimates/forward_pe.md",tags:[],version:"current",frontMatter:{title:"forward_pe",description:"Get forward PE estimates",keywords:["equity","estimates","forward_pe"]},sidebar:"tutorialSidebar",previous:{title:"forward_eps",permalink:"/platform/reference/equity/estimates/forward_eps"},next:{title:"forward_sales",permalink:"/platform/reference/equity/estimates/forward_sales"}},h={},u=[{value:"Examples",id:"examples",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Data",id:"data",level:2}];function f(e){const t={code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.A,{title:"equity/estimates/forward_pe - Reference | OpenBB Platform Docs"}),"\n","\n",(0,n.jsx)(t.p,{children:"Get forward PE estimates."}),"\n",(0,n.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"from openbb import obb\nobb.equity.estimates.forward_pe(provider='intrinio')\nobb.equity.estimates.forward_pe(symbol='AAPL,MSFT,GOOG', provider='intrinio')\n"})}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(i.A,{children:[(0,n.jsx)(l.A,{value:"standard",label:"standard",children:(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Default"}),(0,n.jsx)(t.th,{children:"Optional"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"symbol"}),(0,n.jsx)(t.td,{children:"Union[str, List[str]]"}),(0,n.jsx)(t.td,{children:"Symbol to get data for. Multiple items allowed for provider(s): intrinio."}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]})})]})}),(0,n.jsx)(l.A,{value:"intrinio",label:"intrinio",children:(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Default"}),(0,n.jsx)(t.th,{children:"Optional"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"symbol"}),(0,n.jsx)(t.td,{children:"Union[str, List[str]]"}),(0,n.jsx)(t.td,{children:"Symbol to get data for. Multiple items allowed for provider(s): intrinio."}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]})})]})})]}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",metastring:"wordwrap",children:"OBBject\n    results : List[ForwardPeEstimates]\n        Serializable results.\n\n    provider : Optional[Literal['intrinio']]\n        Provider name.\n\n    warnings : Optional[List[Warning_]]\n        List of warnings.\n\n    chart : Optional[Chart]\n        Chart object.\n\n    extra : Dict[str, Any]\n        Extra info.\n"})}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"data",children:"Data"}),"\n",(0,n.jsxs)(i.A,{children:[(0,n.jsx)(l.A,{value:"standard",label:"standard",children:(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"symbol"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Symbol representing the entity requested in the data."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"name"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Name of the entity."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"year1"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Estimated PE ratio for the next fiscal year."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"year2"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Estimated PE ratio two fiscal years from now."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"year3"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Estimated PE ratio three fiscal years from now."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"year4"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Estimated PE ratio four fiscal years from now."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"year5"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Estimated PE ratio five fiscal years from now."})]})]})]})}),(0,n.jsx)(l.A,{value:"intrinio",label:"intrinio",children:(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"symbol"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Symbol representing the entity requested in the data."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"name"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Name of the entity."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"year1"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Estimated PE ratio for the next fiscal year."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"year2"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Estimated PE ratio two fiscal years from now."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"year3"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Estimated PE ratio three fiscal years from now."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"year4"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Estimated PE ratio four fiscal years from now."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"year5"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Estimated PE ratio five fiscal years from now."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"peg_ratio_year1"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Estimated Forward PEG ratio for the next fiscal year."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"eps_ttm"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"The latest trailing twelve months earnings per share."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"last_updated"}),(0,n.jsx)(t.td,{children:"date"}),(0,n.jsx)(t.td,{children:"The date the data was last updated."})]})]})]})})]})]})}function x(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(f,{...e})}):f(e)}},19365:(e,t,r)=>{r.d(t,{A:()=>i});r(96540);var n=r(34164);const s={tabItem:"tabItem_Ymn6"};var a=r(74848);function i(e){let{children:t,hidden:r,className:i}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,n.A)(s.tabItem,i),hidden:r,children:t})}},94331:(e,t,r)=>{r.d(t,{A:()=>a});r(96540);var n=r(5260),s=r(74848);function a(e){let{title:t}=e;return(0,s.jsx)(n.A,{children:(0,s.jsx)("title",{children:t})})}},18228:(e,t,r)=>{r.d(t,{A:()=>g});var n=r(96540),s=r(34164),a=r(23104),i=r(56347),l=r(205),d=r(57485),o=r(31682),c=r(70679);function h(e){return function(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:s}}=e;return{value:t,label:r,attributes:n,default:s}}))}function u(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??h(r);return function(e){const t=(0,o.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function f(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function x(e){let{queryString:t=!1,groupId:r}=e;const s=(0,i.W6)(),a=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,d.aZ)(a),(0,n.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(s.location.search);t.set(a,e),s.replace({...s.location,search:t.toString()})}),[a,s])]}function m(e){const{defaultValue:t,queryString:r=!1,groupId:s}=e,a=u(e),[i,d]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!f({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:a}))),[o,h]=x({queryString:r,groupId:s}),[m,p]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,a]=(0,c.Dv)(r);return[s,(0,n.useCallback)((e=>{r&&a.set(e)}),[r,a])]}({groupId:s}),j=(()=>{const e=o??m;return f({value:e,tabValues:a})?e:null})();(0,l.A)((()=>{j&&d(j)}),[j]);return{selectedValue:i,selectValue:(0,n.useCallback)((e=>{if(!f({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);d(e),h(e),p(e)}),[h,p,a]),tabValues:a}}var p=r(92303);const j={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};var b=r(74848);function y(e){let{className:t,block:r,selectedValue:n,selectValue:l,tabValues:d}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.a_)(),{pathname:h}=(0,i.zy)(),u=e=>{const t=e.currentTarget,r=o.indexOf(t),s=d[r].value;s!==n&&(c(t),l(s))},f=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const r=o.indexOf(e.currentTarget)+1;t=o[r]??o[0];break}case"ArrowLeft":{const r=o.indexOf(e.currentTarget)-1;t=o[r]??o[o.length-1];break}}t?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("_group-tab list-none -ml-7 my-6 overflow-auto"),children:d.map((e=>{let{value:t,label:r,attributes:a}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>o.push(e),onKeyDown:f,onClick:u,...a,className:(0,s.A)("font-bold tracking-widest w-fit px-3 inline-flex py-1 uppercase border-b text-lg cursor-pointer",j.tabItem,a?.className,{"border-b-2 pointer-events-none":n===t,"border-b-2 text-[#669dcb] border-[#669dcb]":n===t&&h.startsWith("/terminal"),"border-b-2 text-[#FB923C] border-[#FB923C]":n===t&&h.startsWith("/sdk"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":n!==t&&h.startsWith("/sdk"),"border-b-2 text-[#FB923C] border-[#FB923C]":n===t&&h.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":n!==t&&h.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#abd2f1] hover:border-[#abd2f1]":n!==t&&h.startsWith("/terminal")}),children:r??t},t)}))})}function v(e){let{lazy:t,children:r,selectedValue:s}=e;if(r=Array.isArray(r)?r:[r],t){const e=r.find((e=>e.props.value===s));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:r.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function w(e){const t=m(e);return(0,b.jsxs)("div",{className:(0,s.A)("tabs-container",j.tabList),children:[(0,b.jsx)(y,{...e,...t}),(0,b.jsx)(v,{...e,...t})]})}function g(e){const t=(0,p.A)();return(0,b.jsx)(w,{...e},String(t))}},28453:(e,t,r)=>{r.d(t,{R:()=>i,x:()=>l});var n=r(96540);const s={},a=n.createContext(s);function i(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);