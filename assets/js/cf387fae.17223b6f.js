"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[90548],{32118:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>h,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var n=r(74848),a=r(28453),o=r(94331),d=r(18228),s=r(19365);const i={title:"moody",description:"Moody Corporate Bond Index",keywords:["fixedincome","corporate","moody"]},l=void 0,c={id:"platform/reference/fixedincome/corporate/moody",title:"moody",description:"Moody Corporate Bond Index",source:"@site/content/platform/reference/fixedincome/corporate/moody.md",sourceDirName:"platform/reference/fixedincome/corporate",slug:"/platform/reference/fixedincome/corporate/moody",permalink:"/platform/reference/fixedincome/corporate/moody",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/platform/reference/fixedincome/corporate/moody.md",tags:[],version:"current",frontMatter:{title:"moody",description:"Moody Corporate Bond Index",keywords:["fixedincome","corporate","moody"]},sidebar:"tutorialSidebar",previous:{title:"ice_bofa",permalink:"/platform/reference/fixedincome/corporate/ice_bofa"},next:{title:"spot_rates",permalink:"/platform/reference/fixedincome/corporate/spot_rates"}},h={},u=[{value:"Examples",id:"examples",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Data",id:"data",level:2}];function x(e){const t={admonition:"admonition",code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.A,{title:"fixedincome/corporate/moody - Reference | OpenBB Platform Docs"}),"\n",(0,n.jsx)(t.admonition,{title:"Deprecated",type:"caution",children:(0,n.jsxs)(t.p,{children:["This endpoint is deprecated; use ",(0,n.jsx)(t.code,{children:"/fixedincome/bond_indices"})," instead. Set ",(0,n.jsx)(t.code,{children:"category"})," to ",(0,n.jsx)(t.code,{children:"us"})," and ",(0,n.jsx)(t.code,{children:"index"})," to ",(0,n.jsx)(t.code,{children:"seasoned_corporate"}),". Deprecated in OpenBB Platform V4.2 to be removed in V4.5."]})}),"\n","\n",(0,n.jsx)(t.p,{children:"Moody Corporate Bond Index."}),"\n",(0,n.jsx)(t.p,{children:"Moody's Aaa and Baa are investment bonds that acts as an index of\nthe performance of all bonds given an Aaa or Baa rating by Moody's Investors Service respectively.\nThese corporate bonds often are used in macroeconomics as an alternative to the federal ten-year\nTreasury Bill as an indicator of the interest rate."}),"\n",(0,n.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"from openbb import obb\nobb.fixedincome.corporate.moody(provider='fred')\nobb.fixedincome.corporate.moody(index_type='baa', provider='fred')\n"})}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(d.A,{children:[(0,n.jsx)(s.A,{value:"standard",label:"standard",children:(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Default"}),(0,n.jsx)(t.th,{children:"Optional"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"start_date"}),(0,n.jsx)(t.td,{children:"Union[date, str]"}),(0,n.jsx)(t.td,{children:"Start date of the data, in YYYY-MM-DD format."}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"end_date"}),(0,n.jsx)(t.td,{children:"Union[date, str]"}),(0,n.jsx)(t.td,{children:"End date of the data, in YYYY-MM-DD format."}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"index_type"}),(0,n.jsx)(t.td,{children:"Literal['aaa', 'baa']"}),(0,n.jsx)(t.td,{children:"The type of series."}),(0,n.jsx)(t.td,{children:"aaa"}),(0,n.jsx)(t.td,{children:"True"})]})]})]})}),(0,n.jsx)(s.A,{value:"fred",label:"fred",children:(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Default"}),(0,n.jsx)(t.th,{children:"Optional"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"start_date"}),(0,n.jsx)(t.td,{children:"Union[date, str]"}),(0,n.jsx)(t.td,{children:"Start date of the data, in YYYY-MM-DD format."}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"end_date"}),(0,n.jsx)(t.td,{children:"Union[date, str]"}),(0,n.jsx)(t.td,{children:"End date of the data, in YYYY-MM-DD format."}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"index_type"}),(0,n.jsx)(t.td,{children:"Literal['aaa', 'baa']"}),(0,n.jsx)(t.td,{children:"The type of series."}),(0,n.jsx)(t.td,{children:"aaa"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"spread"}),(0,n.jsx)(t.td,{children:"Literal['treasury', 'fed_funds']"}),(0,n.jsx)(t.td,{children:"The type of spread."}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]})]})]})})]}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",metastring:"wordwrap",children:"OBBject\n    results : List[MoodyCorporateBondIndex]\n        Serializable results.\n\n    provider : Optional[Literal['fred']]\n        Provider name.\n\n    warnings : Optional[List[Warning_]]\n        List of warnings.\n\n    chart : Optional[Chart]\n        Chart object.\n\n    extra : Dict[str, Any]\n        Extra info.\n"})}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"data",children:"Data"}),"\n",(0,n.jsxs)(d.A,{children:[(0,n.jsx)(s.A,{value:"standard",label:"standard",children:(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"date"}),(0,n.jsx)(t.td,{children:"Union[date, str]"}),(0,n.jsx)(t.td,{children:"The date of the data."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"rate"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Moody Corporate Bond Index Rate."})]})]})]})}),(0,n.jsx)(s.A,{value:"fred",label:"fred",children:(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"date"}),(0,n.jsx)(t.td,{children:"Union[date, str]"}),(0,n.jsx)(t.td,{children:"The date of the data."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"rate"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Moody Corporate Bond Index Rate."})]})]})]})})]})]})}function p(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(x,{...e})}):x(e)}},19365:(e,t,r)=>{r.d(t,{A:()=>d});r(96540);var n=r(34164);const a={tabItem:"tabItem_Ymn6"};var o=r(74848);function d(e){let{children:t,hidden:r,className:d}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,n.A)(a.tabItem,d),hidden:r,children:t})}},94331:(e,t,r)=>{r.d(t,{A:()=>o});r(96540);var n=r(5260),a=r(74848);function o(e){let{title:t}=e;return(0,a.jsx)(n.A,{children:(0,a.jsx)("title",{children:t})})}},18228:(e,t,r)=>{r.d(t,{A:()=>T});var n=r(56347),a=r(23104),o=r(96540),d=r(205),s=r(57485),i=r(31682),l=r(89466);function c(e){return function(e){return o.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,o.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:a}}=e;return{value:t,label:r,attributes:n,default:a}}))}function h(e){const{values:t,children:r}=e;return(0,o.useMemo)((()=>{const e=t??c(r);return function(e){const t=(0,i.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function u(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function x(e){let{queryString:t=!1,groupId:r}=e;const a=(0,n.W6)(),d=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,s.aZ)(d),(0,o.useCallback)((e=>{if(!d)return;const t=new URLSearchParams(a.location.search);t.set(d,e),a.replace({...a.location,search:t.toString()})}),[d,a])]}function p(e){const{defaultValue:t,queryString:r=!1,groupId:n}=e,a=h(e),[s,i]=(0,o.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!u({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:a}))),[c,p]=x({queryString:r,groupId:n}),[f,j]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,a]=(0,l.Dv)(r);return[n,(0,o.useCallback)((e=>{r&&a.set(e)}),[r,a])]}({groupId:n}),m=(()=>{const e=c??f;return u({value:e,tabValues:a})?e:null})();(0,d.A)((()=>{m&&i(m)}),[m]);return{selectedValue:s,selectValue:(0,o.useCallback)((e=>{if(!u({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);i(e),p(e),j(e)}),[p,j,a]),tabValues:a}}var f=r(92303),j=r(34164);const m={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};var b=r(74848);function y(e){let{className:t,block:r,selectedValue:o,selectValue:d,tabValues:s}=e;const i=[],{blockElementScrollPositionUntilNextRender:l}=(0,a.a_)(),{pathname:c}=(0,n.zy)(),h=e=>{const t=e.currentTarget,r=i.indexOf(t),n=s[r].value;n!==o&&(l(t),d(n))},u=e=>{let t=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{const r=i.indexOf(e.currentTarget)+1;t=i[r]??i[0];break}case"ArrowLeft":{const r=i.indexOf(e.currentTarget)-1;t=i[r]??i[i.length-1];break}}t?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,j.A)("_group-tab list-none -ml-7 my-6 overflow-auto"),children:s.map((e=>{let{value:t,label:r,attributes:n}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,ref:e=>i.push(e),onKeyDown:u,onClick:h,...n,className:(0,j.A)("font-bold tracking-widest w-fit px-3 inline-flex py-1 uppercase border-b text-lg cursor-pointer",m.tabItem,n?.className,{"border-b-2 pointer-events-none":o===t,"border-b-2 text-[#669dcb] border-[#669dcb]":o===t&&c.startsWith("/workspace"),"border-b-2 text-[#FB923C] border-[#FB923C]":o===t&&c.startsWith("/sdk"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":o!==t&&c.startsWith("/sdk"),"border-b-2 text-[#FB923C] border-[#FB923C]":o===t&&c.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":o!==t&&c.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#abd2f1] hover:border-[#abd2f1]":o!==t&&c.startsWith("/workspace")}),children:r??t},t)}))})}function v(e){let{lazy:t,children:r,selectedValue:n}=e;if(r=Array.isArray(r)?r:[r],t){const e=r.find((e=>e.props.value===n));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:r.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==n})))})}function g(e){const t=p(e);return(0,b.jsxs)("div",{className:(0,j.A)("tabs-container",m.tabList),children:[(0,b.jsx)(y,{...e,...t}),(0,b.jsx)(v,{...e,...t})]})}function T(e){const t=(0,f.A)();return(0,b.jsx)(g,{...e},String(t))}},28453:(e,t,r)=>{r.d(t,{R:()=>d,x:()=>s});var n=r(96540);const a={},o=n.createContext(a);function d(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:d(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);