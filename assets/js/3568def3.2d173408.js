"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[95881],{316:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>x,frontMatter:()=>d,metadata:()=>c,toc:()=>h});var n=r(74848),a=r(28453),s=r(94331),i=r(18228),l=r(19365);const d={title:"transcript",description:"Learn how to retrieve earnings call transcripts for a given company using  Python obb.equity.fundamental.transcript. Understand the data parameters, returns,  symbol, year, quarter, and metadata associated with the transcripts.",keywords:["earnings call transcript","python obb.equity.fundamental.transcript","data parameters","returns","symbols","year","quar","content","metadata","provider"]},o=void 0,c={id:"platform/reference/equity/fundamental/transcript",title:"transcript",description:"Learn how to retrieve earnings call transcripts for a given company using  Python obb.equity.fundamental.transcript. Understand the data parameters, returns,  symbol, year, quarter, and metadata associated with the transcripts.",source:"@site/content/platform/reference/equity/fundamental/transcript.md",sourceDirName:"platform/reference/equity/fundamental",slug:"/platform/reference/equity/fundamental/transcript",permalink:"/platform/reference/equity/fundamental/transcript",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/platform/reference/equity/fundamental/transcript.md",tags:[],version:"current",frontMatter:{title:"transcript",description:"Learn how to retrieve earnings call transcripts for a given company using  Python obb.equity.fundamental.transcript. Understand the data parameters, returns,  symbol, year, quarter, and metadata associated with the transcripts.",keywords:["earnings call transcript","python obb.equity.fundamental.transcript","data parameters","returns","symbols","year","quar","content","metadata","provider"]},sidebar:"tutorialSidebar",previous:{title:"trailing_dividend_yield",permalink:"/platform/reference/equity/fundamental/trailing_dividend_yield"},next:{title:"Ownership",permalink:"/platform/reference/equity/ownership/"}},u={},h=[{value:"Examples",id:"examples",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Data",id:"data",level:2}];function p(e){const t={code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.A,{title:"equity/fundamental/transcript - Reference | OpenBB Platform Docs"}),"\n","\n",(0,n.jsx)(t.p,{children:"Get earnings call transcripts for a given company."}),"\n",(0,n.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"from openbb import obb\nobb.equity.fundamental.transcript(symbol='AAPL', year='2020', provider='fmp')\n"})}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(i.A,{children:[(0,n.jsx)(l.A,{value:"standard",label:"standard",children:(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Default"}),(0,n.jsx)(t.th,{children:"Optional"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"symbol"}),(0,n.jsx)(t.td,{children:"Union[str, List[str]]"}),(0,n.jsx)(t.td,{children:"Symbol to get data for. Multiple items allowed for provider(s): fmp."}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"False"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"year"}),(0,n.jsx)(t.td,{children:"Union[Union[int, str], List[Union[int, str]]]"}),(0,n.jsx)(t.td,{children:"Year of the earnings call transcript. Multiple items allowed for provider(s): fmp."}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"False"})]})]})]})}),(0,n.jsx)(l.A,{value:"fmp",label:"fmp",children:(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Default"}),(0,n.jsx)(t.th,{children:"Optional"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"symbol"}),(0,n.jsx)(t.td,{children:"Union[str, List[str]]"}),(0,n.jsx)(t.td,{children:"Symbol to get data for. Multiple items allowed for provider(s): fmp."}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"False"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"year"}),(0,n.jsx)(t.td,{children:"Union[Union[int, str], List[Union[int, str]]]"}),(0,n.jsx)(t.td,{children:"Year of the earnings call transcript. Multiple items allowed for provider(s): fmp."}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"False"})]})]})]})})]}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",metastring:"wordwrap",children:"OBBject\n    results : List[EarningsCallTranscript]\n        Serializable results.\n\n    provider : Optional[Literal['fmp']]\n        Provider name.\n\n    warnings : Optional[List[Warning_]]\n        List of warnings.\n\n    chart : Optional[Chart]\n        Chart object.\n\n    extra : Dict[str, Any]\n        Extra info.\n"})}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"data",children:"Data"}),"\n",(0,n.jsxs)(i.A,{children:[(0,n.jsx)(l.A,{value:"standard",label:"standard",children:(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"symbol"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Symbol representing the entity requested in the data."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"quarter"}),(0,n.jsx)(t.td,{children:"int"}),(0,n.jsx)(t.td,{children:"Quarter of the earnings call transcript."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"year"}),(0,n.jsx)(t.td,{children:"int"}),(0,n.jsx)(t.td,{children:"Year of the earnings call transcript."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"date"}),(0,n.jsx)(t.td,{children:"Union[datetime, str]"}),(0,n.jsx)(t.td,{children:"The date of the data."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"content"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Content of the earnings call transcript."})]})]})]})}),(0,n.jsx)(l.A,{value:"fmp",label:"fmp",children:(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"symbol"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Symbol representing the entity requested in the data."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"quarter"}),(0,n.jsx)(t.td,{children:"int"}),(0,n.jsx)(t.td,{children:"Quarter of the earnings call transcript."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"year"}),(0,n.jsx)(t.td,{children:"int"}),(0,n.jsx)(t.td,{children:"Year of the earnings call transcript."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"date"}),(0,n.jsx)(t.td,{children:"Union[datetime, str]"}),(0,n.jsx)(t.td,{children:"The date of the data."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"content"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Content of the earnings call transcript."})]})]})]})})]})]})}function x(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},19365:(e,t,r)=>{r.d(t,{A:()=>i});r(96540);var n=r(34164);const a={tabItem:"tabItem_Ymn6"};var s=r(74848);function i(e){let{children:t,hidden:r,className:i}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,n.A)(a.tabItem,i),hidden:r,children:t})}},94331:(e,t,r)=>{r.d(t,{A:()=>s});r(96540);var n=r(5260),a=r(74848);function s(e){let{title:t}=e;return(0,a.jsx)(n.A,{children:(0,a.jsx)("title",{children:t})})}},18228:(e,t,r)=>{r.d(t,{A:()=>w});var n=r(56347),a=r(23104),s=r(96540),i=r(205),l=r(57485),d=r(31682),o=r(89466);function c(e){return function(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:a}}=e;return{value:t,label:r,attributes:n,default:a}}))}function u(e){const{values:t,children:r}=e;return(0,s.useMemo)((()=>{const e=t??c(r);return function(e){const t=(0,d.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function h(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:r}=e;const a=(0,n.W6)(),i=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,l.aZ)(i),(0,s.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(a.location.search);t.set(i,e),a.replace({...a.location,search:t.toString()})}),[i,a])]}function x(e){const{defaultValue:t,queryString:r=!1,groupId:n}=e,a=u(e),[l,d]=(0,s.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:a}))),[c,x]=p({queryString:r,groupId:n}),[f,m]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,a]=(0,o.Dv)(r);return[n,(0,s.useCallback)((e=>{r&&a.set(e)}),[r,a])]}({groupId:n}),b=(()=>{const e=c??f;return h({value:e,tabValues:a})?e:null})();(0,i.A)((()=>{b&&d(b)}),[b]);return{selectedValue:l,selectValue:(0,s.useCallback)((e=>{if(!h({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);d(e),x(e),m(e)}),[x,m,a]),tabValues:a}}var f=r(92303),m=r(34164);const b={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};var j=r(74848);function y(e){let{className:t,block:r,selectedValue:s,selectValue:i,tabValues:l}=e;const d=[],{blockElementScrollPositionUntilNextRender:o}=(0,a.a_)(),{pathname:c}=(0,n.zy)(),u=e=>{const t=e.currentTarget,r=d.indexOf(t),n=l[r].value;n!==s&&(o(t),i(n))},h=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const r=d.indexOf(e.currentTarget)+1;t=d[r]??d[0];break}case"ArrowLeft":{const r=d.indexOf(e.currentTarget)-1;t=d[r]??d[d.length-1];break}}t?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,m.A)("_group-tab list-none -ml-7 my-6 overflow-auto"),children:l.map((e=>{let{value:t,label:r,attributes:n}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,ref:e=>d.push(e),onKeyDown:h,onClick:u,...n,className:(0,m.A)("font-bold tracking-widest w-fit px-3 inline-flex py-1 uppercase border-b text-lg cursor-pointer",b.tabItem,n?.className,{"border-b-2 pointer-events-none":s===t,"border-b-2 text-[#669dcb] border-[#669dcb]":s===t&&c.startsWith("/workspace"),"border-b-2 text-[#FB923C] border-[#FB923C]":s===t&&c.startsWith("/sdk"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":s!==t&&c.startsWith("/sdk"),"border-b-2 text-[#FB923C] border-[#FB923C]":s===t&&c.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":s!==t&&c.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#abd2f1] hover:border-[#abd2f1]":s!==t&&c.startsWith("/workspace")}),children:r??t},t)}))})}function v(e){let{lazy:t,children:r,selectedValue:n}=e;if(r=Array.isArray(r)?r:[r],t){const e=r.find((e=>e.props.value===n));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:r.map(((e,t)=>(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==n})))})}function g(e){const t=x(e);return(0,j.jsxs)("div",{className:(0,m.A)("tabs-container",b.tabList),children:[(0,j.jsx)(y,{...e,...t}),(0,j.jsx)(v,{...e,...t})]})}function w(e){const t=(0,f.A)();return(0,j.jsx)(g,{...e},String(t))}},28453:(e,t,r)=>{r.d(t,{R:()=>i,x:()=>l});var n=r(96540);const a={},s=n.createContext(a);function i(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);