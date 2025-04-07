"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[69944],{49704:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>d,contentTitle:()=>c,default:()=>f,frontMatter:()=>o,metadata:()=>u,toc:()=>h});var n=t(74848),s=t(28453),i=t(94331),a=t(18228),l=t(19365);const o={title:"kurtosis",description:"Calculate the rolling kurtosis of a target column within a given window size",keywords:["quantitative","rolling","kurtosis"]},c=void 0,u={id:"platform/reference/quantitative/rolling/kurtosis",title:"kurtosis",description:"Calculate the rolling kurtosis of a target column within a given window size",source:"@site/content/platform/reference/quantitative/rolling/kurtosis.md",sourceDirName:"platform/reference/quantitative/rolling",slug:"/platform/reference/quantitative/rolling/kurtosis",permalink:"/platform/reference/quantitative/rolling/kurtosis",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/platform/reference/quantitative/rolling/kurtosis.md",tags:[],version:"current",frontMatter:{title:"kurtosis",description:"Calculate the rolling kurtosis of a target column within a given window size",keywords:["quantitative","rolling","kurtosis"]},sidebar:"tutorialSidebar",previous:{title:"Rolling",permalink:"/platform/reference/quantitative/rolling/"},next:{title:"mean",permalink:"/platform/reference/quantitative/rolling/mean"}},d={},h=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2}];function p(e){const r={code:"code",em:"em",h2:"h2",hr:"hr",p:"p",strong:"strong",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.A,{title:"quantitative/rolling/kurtosis - Reference | OpenBB Platform Docs"}),"\n","\n",(0,n.jsx)(r.p,{children:"Calculate the rolling kurtosis of a target column within a given window size."}),"\n",(0,n.jsx)(r.p,{children:'Kurtosis measures the "tailedness" of the probability distribution of a real-valued random variable.\nHigh kurtosis indicates a distribution with heavy tails (outliers), suggesting a higher risk of extreme outcomes.\nLow kurtosis indicates a distribution with lighter tails (less outliers), suggesting less risk of extreme outcomes.\nThis function helps in assessing the risk of outliers in financial returns or other time series data over a specified\nrolling window.'}),"\n",(0,n.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsx)(a.A,{children:(0,n.jsxs)(l.A,{value:"standard",label:"standard",children:[(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:(0,n.jsx)(r.code,{children:"data"})}),": ",(0,n.jsx)(r.code,{children:"list[openbb_core.provider.abstract.data.Data]"})]}),(0,n.jsx)(r.p,{children:"The time series data as a list of data points."}),(0,n.jsxs)(r.p,{children:["\u2022 ",(0,n.jsx)(r.em,{children:"Optional:"})," ",(0,n.jsx)(r.code,{children:"False"})]}),(0,n.jsx)(r.hr,{}),(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:(0,n.jsx)(r.code,{children:"target"})}),": ",(0,n.jsx)(r.code,{children:"str"})]}),(0,n.jsx)(r.p,{children:"The name of the column for which to calculate kurtosis."}),(0,n.jsxs)(r.p,{children:["\u2022 ",(0,n.jsx)(r.em,{children:"Optional:"})," ",(0,n.jsx)(r.code,{children:"False"})]}),(0,n.jsx)(r.hr,{}),(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:(0,n.jsx)(r.code,{children:"window"})}),": ",(0,n.jsx)(r.code,{children:"int"})]}),(0,n.jsx)(r.p,{children:"The number of observations used for calculating the rolling measure."}),(0,n.jsxs)(r.p,{children:["\u2022 ",(0,n.jsx)(r.em,{children:"Default:"})," ",(0,n.jsx)(r.code,{children:"21"})]}),(0,n.jsxs)(r.p,{children:["\u2022 ",(0,n.jsx)(r.em,{children:"Optional:"})," ",(0,n.jsx)(r.code,{children:"True"})]}),(0,n.jsx)(r.hr,{}),(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:(0,n.jsx)(r.code,{children:"index"})}),": ",(0,n.jsx)(r.code,{children:"str"})]}),(0,n.jsx)(r.p,{children:"The name of the index column, default is 'date'."}),(0,n.jsxs)(r.p,{children:["\u2022 ",(0,n.jsx)(r.em,{children:"Default:"})," ",(0,n.jsx)(r.code,{children:"date"})]}),(0,n.jsxs)(r.p,{children:["\u2022 ",(0,n.jsx)(r.em,{children:"Optional:"})," ",(0,n.jsx)(r.code,{children:"True"})]})]})}),"\n",(0,n.jsx)(r.hr,{}),"\n",(0,n.jsx)(r.h2,{id:"returns",children:"Returns"}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:(0,n.jsx)(r.code,{children:"results"})}),": ",(0,n.jsx)(r.code,{children:"list[Data]"})]}),"\n",(0,n.jsx)(r.p,{children:"Serializable results."}),"\n",(0,n.jsx)(r.hr,{}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:(0,n.jsx)(r.code,{children:"provider"})}),": ",(0,n.jsx)(r.code,{children:"None"})]}),"\n",(0,n.jsx)(r.p,{children:"Provider name."}),"\n",(0,n.jsx)(r.hr,{}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:(0,n.jsx)(r.code,{children:"warnings"})}),": ",(0,n.jsx)(r.code,{children:"Optional[list[Warning_]]"})]}),"\n",(0,n.jsx)(r.p,{children:"list of warnings."}),"\n",(0,n.jsx)(r.hr,{}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:(0,n.jsx)(r.code,{children:"chart"})}),": ",(0,n.jsx)(r.code,{children:"Optional[Chart]"})]}),"\n",(0,n.jsx)(r.p,{children:"Chart object."}),"\n",(0,n.jsx)(r.hr,{}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:(0,n.jsx)(r.code,{children:"extra"})}),": ",(0,n.jsx)(r.code,{children:"dict[str, Any]"})]}),"\n",(0,n.jsx)(r.p,{children:"Extra info."}),"\n",(0,n.jsx)(r.hr,{})]})}function f(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},19365:(e,r,t)=>{t.d(r,{A:()=>a});t(96540);var n=t(34164);const s={tabItem:"tabItem_Ymn6"};var i=t(74848);function a(e){let{children:r,hidden:t,className:a}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,n.A)(s.tabItem,a),hidden:t,children:r})}},94331:(e,r,t)=>{t.d(r,{A:()=>i});t(96540);var n=t(5260),s=t(74848);function i(e){let{title:r}=e;return(0,s.jsx)(n.A,{children:(0,s.jsx)("title",{children:r})})}},18228:(e,r,t)=>{t.d(r,{A:()=>k});var n=t(56347),s=t(23104),i=t(96540),a=t(205),l=t(57485),o=t(31682),c=t(89466);function u(e){return function(e){return i.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:r,label:t,attributes:n,default:s}}=e;return{value:r,label:t,attributes:n,default:s}}))}function d(e){const{values:r,children:t}=e;return(0,i.useMemo)((()=>{const e=r??u(t);return function(e){const r=(0,o.X)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,t])}function h(e){let{value:r,tabValues:t}=e;return t.some((e=>e.value===r))}function p(e){let{queryString:r=!1,groupId:t}=e;const s=(0,n.W6)(),a=function(e){let{queryString:r=!1,groupId:t}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:r,groupId:t});return[(0,l.aZ)(a),(0,i.useCallback)((e=>{if(!a)return;const r=new URLSearchParams(s.location.search);r.set(a,e),s.replace({...s.location,search:r.toString()})}),[a,s])]}function f(e){const{defaultValue:r,queryString:t=!1,groupId:n}=e,s=d(e),[l,o]=(0,i.useState)((()=>function(e){let{defaultValue:r,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!h({value:r,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const n=t.find((e=>e.default))??t[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:r,tabValues:s}))),[u,f]=p({queryString:t,groupId:n}),[x,m]=function(e){let{groupId:r}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(r),[n,s]=(0,c.Dv)(t);return[n,(0,i.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:n}),b=(()=>{const e=u??x;return h({value:e,tabValues:s})?e:null})();(0,a.A)((()=>{b&&o(b)}),[b]);return{selectedValue:l,selectValue:(0,i.useCallback)((e=>{if(!h({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);o(e),f(e),m(e)}),[f,m,s]),tabValues:s}}var x=t(92303),m=t(34164);const b={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};var j=t(74848);function g(e){let{className:r,block:t,selectedValue:i,selectValue:a,tabValues:l}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.a_)(),{pathname:u}=(0,n.zy)(),d=e=>{const r=e.currentTarget,t=o.indexOf(r),n=l[t].value;n!==i&&(c(r),a(n))},h=e=>{let r=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=o.indexOf(e.currentTarget)+1;r=o[t]??o[0];break}case"ArrowLeft":{const t=o.indexOf(e.currentTarget)-1;r=o[t]??o[o.length-1];break}}r?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,m.A)("_group-tab list-none -ml-7 my-6 overflow-auto"),children:l.map((e=>{let{value:r,label:t,attributes:n}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:i===r?0:-1,"aria-selected":i===r,ref:e=>o.push(e),onKeyDown:h,onClick:d,...n,className:(0,m.A)("font-bold tracking-widest w-fit px-3 inline-flex py-1 uppercase border-b text-lg cursor-pointer",b.tabItem,n?.className,{"border-b-2 pointer-events-none":i===r,"border-b-2 text-[#669dcb] border-[#669dcb]":i===r&&u.startsWith("/workspace"),"border-b-2 text-[#FB923C] border-[#FB923C]":i===r&&u.startsWith("/sdk"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":i!==r&&u.startsWith("/sdk"),"border-b-2 text-[#FB923C] border-[#FB923C]":i===r&&u.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":i!==r&&u.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#abd2f1] hover:border-[#abd2f1]":i!==r&&u.startsWith("/workspace")}),children:t??r},r)}))})}function v(e){let{lazy:r,children:t,selectedValue:n}=e;if(t=Array.isArray(t)?t:[t],r){const e=t.find((e=>e.props.value===n));return e?(0,i.cloneElement)(e,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:t.map(((e,r)=>(0,i.cloneElement)(e,{key:r,hidden:e.props.value!==n})))})}function w(e){const r=f(e);return(0,j.jsxs)("div",{className:(0,m.A)("tabs-container",b.tabList),children:[(0,j.jsx)(g,{...e,...r}),(0,j.jsx)(v,{...e,...r})]})}function k(e){const r=(0,x.A)();return(0,j.jsx)(w,{...e},String(r))}},28453:(e,r,t)=>{t.d(r,{R:()=>a,x:()=>l});var n=t(96540);const s={},i=n.createContext(s);function a(e){const r=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),n.createElement(i.Provider,{value:r},e.children)}}}]);