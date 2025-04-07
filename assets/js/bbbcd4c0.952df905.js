"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[82027],{61978:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>u,contentTitle:()=>c,default:()=>x,frontMatter:()=>o,metadata:()=>d,toc:()=>h});var n=t(74848),a=t(28453),s=t(94331),i=t(18228),l=t(19365);const o={title:"vwap",description:"Learn about the Volume Weighted Average Price (VWAP) and how it measures  the average typical price by volume. Discover how it can be used with intraday charts  to identify general direction. Explore Python examples using the OpenBB OBB package.",keywords:["Volume Weighted Average Price","average typical price by volume","intraday charts","general direction identification","timeseries offset aliases","python examples","openbb obb package"]},c=void 0,d={id:"platform/reference/technical/vwap",title:"vwap",description:"Learn about the Volume Weighted Average Price (VWAP) and how it measures  the average typical price by volume. Discover how it can be used with intraday charts  to identify general direction. Explore Python examples using the OpenBB OBB package.",source:"@site/content/platform/reference/technical/vwap.md",sourceDirName:"platform/reference/technical",slug:"/platform/reference/technical/vwap",permalink:"/platform/reference/technical/vwap",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/platform/reference/technical/vwap.md",tags:[],version:"current",frontMatter:{title:"vwap",description:"Learn about the Volume Weighted Average Price (VWAP) and how it measures  the average typical price by volume. Discover how it can be used with intraday charts  to identify general direction. Explore Python examples using the OpenBB OBB package.",keywords:["Volume Weighted Average Price","average typical price by volume","intraday charts","general direction identification","timeseries offset aliases","python examples","openbb obb package"]},sidebar:"tutorialSidebar",previous:{title:"stoch",permalink:"/platform/reference/technical/stoch"},next:{title:"wma",permalink:"/platform/reference/technical/wma"}},u={},h=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2}];function p(e){const r={code:"code",em:"em",h2:"h2",hr:"hr",p:"p",strong:"strong",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.A,{title:"technical/vwap - Reference | OpenBB Platform Docs"}),"\n","\n",(0,n.jsx)(r.p,{children:"Calculate the Volume Weighted Average Price (VWAP)."}),"\n",(0,n.jsx)(r.p,{children:"Measures the average typical price by volume.\nIt is typically used with intraday charts to identify general direction.\nIt helps to understand the true average price factoring in the volume of transactions,\nand serves as a benchmark for assessing the market's direction over short periods, such as a single trading day."}),"\n",(0,n.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsx)(i.A,{children:(0,n.jsxs)(l.A,{value:"standard",label:"standard",children:[(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:(0,n.jsx)(r.code,{children:"data"})}),": ",(0,n.jsx)(r.code,{children:"list[openbb_core.provider.abstract.data.Data]"})]}),(0,n.jsx)(r.p,{children:"list of data to be used for the calculation."}),(0,n.jsxs)(r.p,{children:["\u2022 ",(0,n.jsx)(r.em,{children:"Optional:"})," ",(0,n.jsx)(r.code,{children:"False"})]}),(0,n.jsx)(r.hr,{}),(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:(0,n.jsx)(r.code,{children:"index"})}),": ",(0,n.jsx)(r.code,{children:"str"})]}),(0,n.jsxs)(r.p,{children:["Index column name to use with ",(0,n.jsx)(r.code,{children:"data"}),", by default 'date'."]}),(0,n.jsxs)(r.p,{children:["\u2022 ",(0,n.jsx)(r.em,{children:"Default:"})," ",(0,n.jsx)(r.code,{children:"date"})]}),(0,n.jsxs)(r.p,{children:["\u2022 ",(0,n.jsx)(r.em,{children:"Optional:"})," ",(0,n.jsx)(r.code,{children:"True"})]}),(0,n.jsx)(r.hr,{}),(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:(0,n.jsx)(r.code,{children:"anchor"})}),": ",(0,n.jsx)(r.code,{children:"str"})]}),(0,n.jsx)(r.p,{children:"Anchor period to use for the calculation, by default 'D'."}),(0,n.jsxs)(r.p,{children:["\u2022 ",(0,n.jsx)(r.em,{children:"Default:"})," ",(0,n.jsx)(r.code,{children:"D"})]}),(0,n.jsxs)(r.p,{children:["\u2022 ",(0,n.jsx)(r.em,{children:"Optional:"})," ",(0,n.jsx)(r.code,{children:"True"})]}),(0,n.jsx)(r.hr,{}),(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:(0,n.jsx)(r.code,{children:"https"})}),": ",(0,n.jsx)(r.code,{children:"//pandas.pydata.org/pandas-docs/stable/user_guide/timeseries.html#timeseries-offset-aliases"})]}),(0,n.jsx)(r.p,{children:"offset : int, optional"}),(0,n.jsxs)(r.p,{children:["\u2022 ",(0,n.jsx)(r.em,{children:"Optional:"})," ",(0,n.jsx)(r.code,{children:"False"})]}),(0,n.jsx)(r.hr,{}),(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:(0,n.jsx)(r.code,{children:"offset"})}),": ",(0,n.jsx)(r.code,{children:"int"})]}),(0,n.jsxs)(r.p,{children:["\u2022 ",(0,n.jsx)(r.em,{children:"Default:"})," ",(0,n.jsx)(r.code,{children:"0"})]}),(0,n.jsxs)(r.p,{children:["\u2022 ",(0,n.jsx)(r.em,{children:"Optional:"})," ",(0,n.jsx)(r.code,{children:"True"})]})]})}),"\n",(0,n.jsx)(r.hr,{}),"\n",(0,n.jsx)(r.h2,{id:"returns",children:"Returns"}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:(0,n.jsx)(r.code,{children:"results"})}),": ",(0,n.jsx)(r.code,{children:"list[Data]"})]}),"\n",(0,n.jsx)(r.p,{children:"Serializable results."}),"\n",(0,n.jsx)(r.hr,{}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:(0,n.jsx)(r.code,{children:"provider"})}),": ",(0,n.jsx)(r.code,{children:"None"})]}),"\n",(0,n.jsx)(r.p,{children:"Provider name."}),"\n",(0,n.jsx)(r.hr,{}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:(0,n.jsx)(r.code,{children:"warnings"})}),": ",(0,n.jsx)(r.code,{children:"Optional[list[Warning_]]"})]}),"\n",(0,n.jsx)(r.p,{children:"list of warnings."}),"\n",(0,n.jsx)(r.hr,{}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:(0,n.jsx)(r.code,{children:"chart"})}),": ",(0,n.jsx)(r.code,{children:"Optional[Chart]"})]}),"\n",(0,n.jsx)(r.p,{children:"Chart object."}),"\n",(0,n.jsx)(r.hr,{}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:(0,n.jsx)(r.code,{children:"extra"})}),": ",(0,n.jsx)(r.code,{children:"dict[str, Any]"})]}),"\n",(0,n.jsx)(r.p,{children:"Extra info."}),"\n",(0,n.jsx)(r.hr,{})]})}function x(e={}){const{wrapper:r}={...(0,a.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},19365:(e,r,t)=>{t.d(r,{A:()=>i});t(96540);var n=t(34164);const a={tabItem:"tabItem_Ymn6"};var s=t(74848);function i(e){let{children:r,hidden:t,className:i}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,n.A)(a.tabItem,i),hidden:t,children:r})}},94331:(e,r,t)=>{t.d(r,{A:()=>s});t(96540);var n=t(5260),a=t(74848);function s(e){let{title:r}=e;return(0,a.jsx)(n.A,{children:(0,a.jsx)("title",{children:r})})}},18228:(e,r,t)=>{t.d(r,{A:()=>w});var n=t(56347),a=t(23104),s=t(96540),i=t(205),l=t(57485),o=t(31682),c=t(89466);function d(e){return function(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:r,label:t,attributes:n,default:a}}=e;return{value:r,label:t,attributes:n,default:a}}))}function u(e){const{values:r,children:t}=e;return(0,s.useMemo)((()=>{const e=r??d(t);return function(e){const r=(0,o.X)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,t])}function h(e){let{value:r,tabValues:t}=e;return t.some((e=>e.value===r))}function p(e){let{queryString:r=!1,groupId:t}=e;const a=(0,n.W6)(),i=function(e){let{queryString:r=!1,groupId:t}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:r,groupId:t});return[(0,l.aZ)(i),(0,s.useCallback)((e=>{if(!i)return;const r=new URLSearchParams(a.location.search);r.set(i,e),a.replace({...a.location,search:r.toString()})}),[i,a])]}function x(e){const{defaultValue:r,queryString:t=!1,groupId:n}=e,a=u(e),[l,o]=(0,s.useState)((()=>function(e){let{defaultValue:r,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!h({value:r,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const n=t.find((e=>e.default))??t[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:r,tabValues:a}))),[d,x]=p({queryString:t,groupId:n}),[f,b]=function(e){let{groupId:r}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(r),[n,a]=(0,c.Dv)(t);return[n,(0,s.useCallback)((e=>{t&&a.set(e)}),[t,a])]}({groupId:n}),m=(()=>{const e=d??f;return h({value:e,tabValues:a})?e:null})();(0,i.A)((()=>{m&&o(m)}),[m]);return{selectedValue:l,selectValue:(0,s.useCallback)((e=>{if(!h({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);o(e),x(e),b(e)}),[x,b,a]),tabValues:a}}var f=t(92303),b=t(34164);const m={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};var j=t(74848);function v(e){let{className:r,block:t,selectedValue:s,selectValue:i,tabValues:l}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.a_)(),{pathname:d}=(0,n.zy)(),u=e=>{const r=e.currentTarget,t=o.indexOf(r),n=l[t].value;n!==s&&(c(r),i(n))},h=e=>{let r=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=o.indexOf(e.currentTarget)+1;r=o[t]??o[0];break}case"ArrowLeft":{const t=o.indexOf(e.currentTarget)-1;r=o[t]??o[o.length-1];break}}r?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,b.A)("_group-tab list-none -ml-7 my-6 overflow-auto"),children:l.map((e=>{let{value:r,label:t,attributes:n}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:s===r?0:-1,"aria-selected":s===r,ref:e=>o.push(e),onKeyDown:h,onClick:u,...n,className:(0,b.A)("font-bold tracking-widest w-fit px-3 inline-flex py-1 uppercase border-b text-lg cursor-pointer",m.tabItem,n?.className,{"border-b-2 pointer-events-none":s===r,"border-b-2 text-[#669dcb] border-[#669dcb]":s===r&&d.startsWith("/workspace"),"border-b-2 text-[#FB923C] border-[#FB923C]":s===r&&d.startsWith("/sdk"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":s!==r&&d.startsWith("/sdk"),"border-b-2 text-[#FB923C] border-[#FB923C]":s===r&&d.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":s!==r&&d.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#abd2f1] hover:border-[#abd2f1]":s!==r&&d.startsWith("/workspace")}),children:t??r},r)}))})}function g(e){let{lazy:r,children:t,selectedValue:n}=e;if(t=Array.isArray(t)?t:[t],r){const e=t.find((e=>e.props.value===n));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:t.map(((e,r)=>(0,s.cloneElement)(e,{key:r,hidden:e.props.value!==n})))})}function y(e){const r=x(e);return(0,j.jsxs)("div",{className:(0,b.A)("tabs-container",m.tabList),children:[(0,j.jsx)(v,{...e,...r}),(0,j.jsx)(g,{...e,...r})]})}function w(e){const r=(0,f.A)();return(0,j.jsx)(y,{...e},String(r))}},28453:(e,r,t)=>{t.d(r,{R:()=>i,x:()=>l});var n=t(96540);const a={},s=n.createContext(a);function i(e){const r=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),n.createElement(s.Provider,{value:r},e.children)}}}]);