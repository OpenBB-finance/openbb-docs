"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[50918],{21876:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>u,contentTitle:()=>c,default:()=>x,frontMatter:()=>i,metadata:()=>d,toc:()=>h});var n=t(74848),a=t(28453),l=t(94331),o=t(18228),s=t(19365);const i={title:"zlma",description:"Learn about the zero lag exponential moving average (ZLEMA) and how it  can be used to perform EMA calculations on de-lagged data. Explore the parameters  and get examples of implementing ZLEMA in Python.",keywords:["zero lag exponential moving average","ZLEMA","EMA calculation","de-lagged data","moving average","lagged data","cumulative effect","parameters","target column","index column","length","offset","calculation","calculated data","example"]},c=void 0,d={id:"platform/reference/technical/zlma",title:"zlma",description:"Learn about the zero lag exponential moving average (ZLEMA) and how it  can be used to perform EMA calculations on de-lagged data. Explore the parameters  and get examples of implementing ZLEMA in Python.",source:"@site/content/platform/reference/technical/zlma.md",sourceDirName:"platform/reference/technical",slug:"/platform/reference/technical/zlma",permalink:"/platform/reference/technical/zlma",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/platform/reference/technical/zlma.md",tags:[],version:"current",frontMatter:{title:"zlma",description:"Learn about the zero lag exponential moving average (ZLEMA) and how it  can be used to perform EMA calculations on de-lagged data. Explore the parameters  and get examples of implementing ZLEMA in Python.",keywords:["zero lag exponential moving average","ZLEMA","EMA calculation","de-lagged data","moving average","lagged data","cumulative effect","parameters","target column","index column","length","offset","calculation","calculated data","example"]},sidebar:"tutorialSidebar",previous:{title:"wma",permalink:"/platform/reference/technical/wma"},next:{title:"Data Models",permalink:"/platform/data_models/"}},u={},h=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2}];function p(e){const r={code:"code",em:"em",h2:"h2",hr:"hr",p:"p",strong:"strong",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(l.A,{title:"technical/zlma - Reference | OpenBB Platform Docs"}),"\n","\n",(0,n.jsx)(r.p,{children:"Calculate the zero lag exponential moving average (ZLEMA)."}),"\n",(0,n.jsx)(r.p,{children:'Created by John Ehlers and Ric Way. The idea is do a\nregular exponential moving average (EMA) calculation but\non a de-lagged data instead of doing it on the regular data.\nData is de-lagged by removing the data from "lag" days ago\nthus removing (or attempting to) the cumulative effect of\nthe moving average.'}),"\n",(0,n.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsx)(o.A,{children:(0,n.jsxs)(s.A,{value:"standard",label:"standard",children:[(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:(0,n.jsx)(r.code,{children:"data"})}),": ",(0,n.jsx)(r.code,{children:"list[openbb_core.provider.abstract.data.Data]"})]}),(0,n.jsx)(r.p,{children:"list of data to be used for the calculation."}),(0,n.jsxs)(r.p,{children:["\u2022 ",(0,n.jsx)(r.em,{children:"Optional:"})," ",(0,n.jsx)(r.code,{children:"False"})]}),(0,n.jsx)(r.hr,{}),(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:(0,n.jsx)(r.code,{children:"target"})}),": ",(0,n.jsx)(r.code,{children:"str"})]}),(0,n.jsx)(r.p,{children:"Target column name."}),(0,n.jsxs)(r.p,{children:["\u2022 ",(0,n.jsx)(r.em,{children:"Default:"})," ",(0,n.jsx)(r.code,{children:"close"})]}),(0,n.jsxs)(r.p,{children:["\u2022 ",(0,n.jsx)(r.em,{children:"Optional:"})," ",(0,n.jsx)(r.code,{children:"True"})]}),(0,n.jsx)(r.hr,{}),(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:(0,n.jsx)(r.code,{children:"index"})}),": ",(0,n.jsx)(r.code,{children:"str"})]}),(0,n.jsxs)(r.p,{children:["Index column name to use with ",(0,n.jsx)(r.code,{children:"data"}),", by default 'date'."]}),(0,n.jsxs)(r.p,{children:["\u2022 ",(0,n.jsx)(r.em,{children:"Default:"})," ",(0,n.jsx)(r.code,{children:"date"})]}),(0,n.jsxs)(r.p,{children:["\u2022 ",(0,n.jsx)(r.em,{children:"Optional:"})," ",(0,n.jsx)(r.code,{children:"True"})]}),(0,n.jsx)(r.hr,{}),(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:(0,n.jsx)(r.code,{children:"length"})}),": ",(0,n.jsx)(r.code,{children:"int"})]}),(0,n.jsx)(r.p,{children:"Number of periods to be used for the calculation, by default 50."}),(0,n.jsxs)(r.p,{children:["\u2022 ",(0,n.jsx)(r.em,{children:"Default:"})," ",(0,n.jsx)(r.code,{children:"50"})]}),(0,n.jsxs)(r.p,{children:["\u2022 ",(0,n.jsx)(r.em,{children:"Optional:"})," ",(0,n.jsx)(r.code,{children:"True"})]}),(0,n.jsx)(r.hr,{}),(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:(0,n.jsx)(r.code,{children:"offset"})}),": ",(0,n.jsx)(r.code,{children:"int"})]}),(0,n.jsx)(r.p,{children:"Offset to be used for the calculation, by default 0."}),(0,n.jsxs)(r.p,{children:["\u2022 ",(0,n.jsx)(r.em,{children:"Optional:"})," ",(0,n.jsx)(r.code,{children:"True"})]})]})}),"\n",(0,n.jsx)(r.hr,{}),"\n",(0,n.jsx)(r.h2,{id:"returns",children:"Returns"}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:(0,n.jsx)(r.code,{children:"results"})}),": ",(0,n.jsx)(r.code,{children:"list[Data]"})]}),"\n",(0,n.jsx)(r.p,{children:"Serializable results."}),"\n",(0,n.jsx)(r.hr,{}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:(0,n.jsx)(r.code,{children:"provider"})}),": ",(0,n.jsx)(r.code,{children:"None"})]}),"\n",(0,n.jsx)(r.p,{children:"Provider name."}),"\n",(0,n.jsx)(r.hr,{}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:(0,n.jsx)(r.code,{children:"warnings"})}),": ",(0,n.jsx)(r.code,{children:"Optional[list[Warning_]]"})]}),"\n",(0,n.jsx)(r.p,{children:"list of warnings."}),"\n",(0,n.jsx)(r.hr,{}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:(0,n.jsx)(r.code,{children:"chart"})}),": ",(0,n.jsx)(r.code,{children:"Optional[Chart]"})]}),"\n",(0,n.jsx)(r.p,{children:"Chart object."}),"\n",(0,n.jsx)(r.hr,{}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:(0,n.jsx)(r.code,{children:"extra"})}),": ",(0,n.jsx)(r.code,{children:"dict[str, Any]"})]}),"\n",(0,n.jsx)(r.p,{children:"Extra info."}),"\n",(0,n.jsx)(r.hr,{})]})}function x(e={}){const{wrapper:r}={...(0,a.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},19365:(e,r,t)=>{t.d(r,{A:()=>o});t(96540);var n=t(34164);const a={tabItem:"tabItem_Ymn6"};var l=t(74848);function o(e){let{children:r,hidden:t,className:o}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,n.A)(a.tabItem,o),hidden:t,children:r})}},94331:(e,r,t)=>{t.d(r,{A:()=>l});t(96540);var n=t(5260),a=t(74848);function l(e){let{title:r}=e;return(0,a.jsx)(n.A,{children:(0,a.jsx)("title",{children:r})})}},18228:(e,r,t)=>{t.d(r,{A:()=>w});var n=t(56347),a=t(23104),l=t(96540),o=t(205),s=t(57485),i=t(31682),c=t(89466);function d(e){return function(e){return l.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,l.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:r,label:t,attributes:n,default:a}}=e;return{value:r,label:t,attributes:n,default:a}}))}function u(e){const{values:r,children:t}=e;return(0,l.useMemo)((()=>{const e=r??d(t);return function(e){const r=(0,i.X)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,t])}function h(e){let{value:r,tabValues:t}=e;return t.some((e=>e.value===r))}function p(e){let{queryString:r=!1,groupId:t}=e;const a=(0,n.W6)(),o=function(e){let{queryString:r=!1,groupId:t}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:r,groupId:t});return[(0,s.aZ)(o),(0,l.useCallback)((e=>{if(!o)return;const r=new URLSearchParams(a.location.search);r.set(o,e),a.replace({...a.location,search:r.toString()})}),[o,a])]}function x(e){const{defaultValue:r,queryString:t=!1,groupId:n}=e,a=u(e),[s,i]=(0,l.useState)((()=>function(e){let{defaultValue:r,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!h({value:r,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const n=t.find((e=>e.default))??t[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:r,tabValues:a}))),[d,x]=p({queryString:t,groupId:n}),[m,f]=function(e){let{groupId:r}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(r),[n,a]=(0,c.Dv)(t);return[n,(0,l.useCallback)((e=>{t&&a.set(e)}),[t,a])]}({groupId:n}),g=(()=>{const e=d??m;return h({value:e,tabValues:a})?e:null})();(0,o.A)((()=>{g&&i(g)}),[g]);return{selectedValue:s,selectValue:(0,l.useCallback)((e=>{if(!h({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);i(e),x(e),f(e)}),[x,f,a]),tabValues:a}}var m=t(92303),f=t(34164);const g={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};var b=t(74848);function j(e){let{className:r,block:t,selectedValue:l,selectValue:o,tabValues:s}=e;const i=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.a_)(),{pathname:d}=(0,n.zy)(),u=e=>{const r=e.currentTarget,t=i.indexOf(r),n=s[t].value;n!==l&&(c(r),o(n))},h=e=>{let r=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=i.indexOf(e.currentTarget)+1;r=i[t]??i[0];break}case"ArrowLeft":{const t=i.indexOf(e.currentTarget)-1;r=i[t]??i[i.length-1];break}}r?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,f.A)("_group-tab list-none -ml-7 my-6 overflow-auto"),children:s.map((e=>{let{value:r,label:t,attributes:n}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:l===r?0:-1,"aria-selected":l===r,ref:e=>i.push(e),onKeyDown:h,onClick:u,...n,className:(0,f.A)("font-bold tracking-widest w-fit px-3 inline-flex py-1 uppercase border-b text-lg cursor-pointer",g.tabItem,n?.className,{"border-b-2 pointer-events-none":l===r,"border-b-2 text-[#669dcb] border-[#669dcb]":l===r&&d.startsWith("/workspace"),"border-b-2 text-[#FB923C] border-[#FB923C]":l===r&&d.startsWith("/sdk"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":l!==r&&d.startsWith("/sdk"),"border-b-2 text-[#FB923C] border-[#FB923C]":l===r&&d.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":l!==r&&d.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#abd2f1] hover:border-[#abd2f1]":l!==r&&d.startsWith("/workspace")}),children:t??r},r)}))})}function v(e){let{lazy:r,children:t,selectedValue:n}=e;if(t=Array.isArray(t)?t:[t],r){const e=t.find((e=>e.props.value===n));return e?(0,l.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:t.map(((e,r)=>(0,l.cloneElement)(e,{key:r,hidden:e.props.value!==n})))})}function y(e){const r=x(e);return(0,b.jsxs)("div",{className:(0,f.A)("tabs-container",g.tabList),children:[(0,b.jsx)(j,{...e,...r}),(0,b.jsx)(v,{...e,...r})]})}function w(e){const r=(0,m.A)();return(0,b.jsx)(y,{...e},String(r))}},28453:(e,r,t)=>{t.d(r,{R:()=>o,x:()=>s});var n=t(96540);const a={},l=n.createContext(a);function o(e){const r=n.useContext(l);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function s(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),n.createElement(l.Provider,{value:r},e.children)}}}]);