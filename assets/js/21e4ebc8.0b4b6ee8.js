"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[41111],{49489:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>m,frontMatter:()=>i,metadata:()=>d,toc:()=>h});var n=r(74848),a=r(28453),s=r(94331),o=r(18228),l=r(19365);const i={title:"peers",description:"Learn how to compare and analyze equity peers with the `obb.equity.compare.peers`  function. This function allows you to retrieve a list of company peers based on  symbol, sector, exchange, and market cap. Understand the parameters, returns, and  data structure provided by this function.",keywords:["equity peers","company peers","compare peers","symbol","provider","parameter","returns","data","list of peers","sector","exchange","market cap","serializable results","chart object","metadata","command execution","warnings"]},c=void 0,d={id:"platform/reference/equity/compare/peers",title:"peers",description:"Learn how to compare and analyze equity peers with the `obb.equity.compare.peers`  function. This function allows you to retrieve a list of company peers based on  symbol, sector, exchange, and market cap. Understand the parameters, returns, and  data structure provided by this function.",source:"@site/content/platform/reference/equity/compare/peers.md",sourceDirName:"platform/reference/equity/compare",slug:"/platform/reference/equity/compare/peers",permalink:"/platform/reference/equity/compare/peers",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/platform/reference/equity/compare/peers.md",tags:[],version:"current",frontMatter:{title:"peers",description:"Learn how to compare and analyze equity peers with the `obb.equity.compare.peers`  function. This function allows you to retrieve a list of company peers based on  symbol, sector, exchange, and market cap. Understand the parameters, returns, and  data structure provided by this function.",keywords:["equity peers","company peers","compare peers","symbol","provider","parameter","returns","data","list of peers","sector","exchange","market cap","serializable results","chart object","metadata","command execution","warnings"]},sidebar:"tutorialSidebar",previous:{title:"groups",permalink:"/platform/reference/equity/compare/groups"},next:{title:"Darkpool",permalink:"/platform/reference/equity/darkpool/"}},u={},h=[{value:"Examples",id:"examples",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Data",id:"data",level:2}];function p(e){const t={code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.A,{title:"equity/compare/peers - Reference | OpenBB Platform Docs"}),"\n","\n",(0,n.jsx)(t.p,{children:"Get the closest peers for a given company."}),"\n",(0,n.jsx)(t.p,{children:"Peers consist of companies trading on the same exchange, operating within the same sector\nand with comparable market capitalizations."}),"\n",(0,n.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"from openbb import obb\nobb.equity.compare.peers(symbol='AAPL', provider='fmp')\n"})}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(o.A,{children:[(0,n.jsx)(l.A,{value:"standard",label:"standard",children:(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Default"}),(0,n.jsx)(t.th,{children:"Optional"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"symbol"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Symbol to get data for."}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"False"})]})})]})}),(0,n.jsx)(l.A,{value:"fmp",label:"fmp",children:(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Default"}),(0,n.jsx)(t.th,{children:"Optional"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"symbol"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Symbol to get data for."}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"False"})]})})]})})]}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",metastring:"wordwrap",children:"OBBject\n    results : List[EquityPeers]\n        Serializable results.\n\n    provider : Optional[Literal['fmp']]\n        Provider name.\n\n    warnings : Optional[List[Warning_]]\n        List of warnings.\n\n    chart : Optional[Chart]\n        Chart object.\n\n    extra : Dict[str, Any]\n        Extra info.\n"})}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"data",children:"Data"}),"\n",(0,n.jsxs)(o.A,{children:[(0,n.jsx)(l.A,{value:"standard",label:"standard",children:(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"peers_list"}),(0,n.jsx)(t.td,{children:"List[str]"}),(0,n.jsx)(t.td,{children:"A list of equity peers based on sector, exchange and market cap."})]})})]})}),(0,n.jsx)(l.A,{value:"fmp",label:"fmp",children:(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"peers_list"}),(0,n.jsx)(t.td,{children:"List[str]"}),(0,n.jsx)(t.td,{children:"A list of equity peers based on sector, exchange and market cap."})]})})]})})]})]})}function m(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},19365:(e,t,r)=>{r.d(t,{A:()=>o});r(96540);var n=r(34164);const a={tabItem:"tabItem_Ymn6"};var s=r(74848);function o(e){let{children:t,hidden:r,className:o}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,n.A)(a.tabItem,o),hidden:r,children:t})}},94331:(e,t,r)=>{r.d(t,{A:()=>s});r(96540);var n=r(5260),a=r(74848);function s(e){let{title:t}=e;return(0,a.jsx)(n.A,{children:(0,a.jsx)("title",{children:t})})}},18228:(e,t,r)=>{r.d(t,{A:()=>w});var n=r(56347),a=r(23104),s=r(96540),o=r(205),l=r(57485),i=r(31682),c=r(89466);function d(e){return function(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:a}}=e;return{value:t,label:r,attributes:n,default:a}}))}function u(e){const{values:t,children:r}=e;return(0,s.useMemo)((()=>{const e=t??d(r);return function(e){const t=(0,i.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function h(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:r}=e;const a=(0,n.W6)(),o=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,l.aZ)(o),(0,s.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function m(e){const{defaultValue:t,queryString:r=!1,groupId:n}=e,a=u(e),[l,i]=(0,s.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:a}))),[d,m]=p({queryString:r,groupId:n}),[b,f]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,a]=(0,c.Dv)(r);return[n,(0,s.useCallback)((e=>{r&&a.set(e)}),[r,a])]}({groupId:n}),x=(()=>{const e=d??b;return h({value:e,tabValues:a})?e:null})();(0,o.A)((()=>{x&&i(x)}),[x]);return{selectedValue:l,selectValue:(0,s.useCallback)((e=>{if(!h({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);i(e),m(e),f(e)}),[m,f,a]),tabValues:a}}var b=r(92303),f=r(34164);const x={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};var y=r(74848);function j(e){let{className:t,block:r,selectedValue:s,selectValue:o,tabValues:l}=e;const i=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.a_)(),{pathname:d}=(0,n.zy)(),u=e=>{const t=e.currentTarget,r=i.indexOf(t),n=l[r].value;n!==s&&(c(t),o(n))},h=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const r=i.indexOf(e.currentTarget)+1;t=i[r]??i[0];break}case"ArrowLeft":{const r=i.indexOf(e.currentTarget)-1;t=i[r]??i[i.length-1];break}}t?.focus()};return(0,y.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,f.A)("_group-tab list-none -ml-7 my-6 overflow-auto"),children:l.map((e=>{let{value:t,label:r,attributes:n}=e;return(0,y.jsx)("li",{role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,ref:e=>i.push(e),onKeyDown:h,onClick:u,...n,className:(0,f.A)("font-bold tracking-widest w-fit px-3 inline-flex py-1 uppercase border-b text-lg cursor-pointer",x.tabItem,n?.className,{"border-b-2 pointer-events-none":s===t,"border-b-2 text-[#669dcb] border-[#669dcb]":s===t&&d.startsWith("/workspace"),"border-b-2 text-[#FB923C] border-[#FB923C]":s===t&&d.startsWith("/sdk"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":s!==t&&d.startsWith("/sdk"),"border-b-2 text-[#FB923C] border-[#FB923C]":s===t&&d.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":s!==t&&d.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#abd2f1] hover:border-[#abd2f1]":s!==t&&d.startsWith("/workspace")}),children:r??t},t)}))})}function v(e){let{lazy:t,children:r,selectedValue:n}=e;if(r=Array.isArray(r)?r:[r],t){const e=r.find((e=>e.props.value===n));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,y.jsx)("div",{className:"margin-top--md",children:r.map(((e,t)=>(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==n})))})}function g(e){const t=m(e);return(0,y.jsxs)("div",{className:(0,f.A)("tabs-container",x.tabList),children:[(0,y.jsx)(j,{...e,...t}),(0,y.jsx)(v,{...e,...t})]})}function w(e){const t=(0,b.A)();return(0,y.jsx)(g,{...e},String(t))}},28453:(e,t,r)=>{r.d(t,{R:()=>o,x:()=>l});var n=r(96540);const a={},s=n.createContext(a);function o(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);