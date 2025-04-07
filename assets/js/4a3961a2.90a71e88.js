"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[99168],{95851:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>p,frontMatter:()=>i,metadata:()=>d,toc:()=>h});var n=r(74848),a=r(28453),s=r(94331),o=r(18228),l=r(19365);const i={title:"panel_random_effects",description:"Learn how to perform One-way Random Effects model for panel data using  a Python function. This function takes an input dataset, target column, and exogenous  variables as parameters and returns the fit model.",keywords:["One-way Random Effects model","panel data","perform","Python function"]},c=void 0,d={id:"platform/reference/econometrics/panel_random_effects",title:"panel_random_effects",description:"Learn how to perform One-way Random Effects model for panel data using  a Python function. This function takes an input dataset, target column, and exogenous  variables as parameters and returns the fit model.",source:"@site/content/platform/reference/econometrics/panel_random_effects.md",sourceDirName:"platform/reference/econometrics",slug:"/platform/reference/econometrics/panel_random_effects",permalink:"/platform/reference/econometrics/panel_random_effects",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/platform/reference/econometrics/panel_random_effects.md",tags:[],version:"current",frontMatter:{title:"panel_random_effects",description:"Learn how to perform One-way Random Effects model for panel data using  a Python function. This function takes an input dataset, target column, and exogenous  variables as parameters and returns the fit model.",keywords:["One-way Random Effects model","panel data","perform","Python function"]},sidebar:"tutorialSidebar",previous:{title:"panel_pooled",permalink:"/platform/reference/econometrics/panel_pooled"},next:{title:"residual_autocorrelation",permalink:"/platform/reference/econometrics/residual_autocorrelation"}},u={},h=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2}];function f(e){const t={code:"code",em:"em",h2:"h2",hr:"hr",p:"p",strong:"strong",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.A,{title:"econometrics/panel_random_effects - Reference | OpenBB Platform Docs"}),"\n","\n",(0,n.jsx)(t.p,{children:"Perform One-way Random Effects model for panel data."}),"\n",(0,n.jsx)(t.p,{children:"One-way Random Effects model to panel data is offering a nuanced approach to analyzing data that spans across both\ntime and entities (such as individuals, companies, countries, etc.). By acknowledging and modeling the random\nvariation that exists within these entities, this method provides insights into the general patterns that\nemerge across the dataset."}),"\n",(0,n.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsx)(o.A,{children:(0,n.jsxs)(l.A,{value:"standard",label:"standard",children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.code,{children:"data"})}),": ",(0,n.jsx)(t.code,{children:"list[openbb_core.provider.abstract.data.Data]"})]}),(0,n.jsx)(t.p,{children:"Input dataset."}),(0,n.jsxs)(t.p,{children:["\u2022 ",(0,n.jsx)(t.em,{children:"Optional:"})," ",(0,n.jsx)(t.code,{children:"False"})]}),(0,n.jsx)(t.hr,{}),(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.code,{children:"y_column"})}),": ",(0,n.jsx)(t.code,{children:"str"})]}),(0,n.jsx)(t.p,{children:"Target column."}),(0,n.jsxs)(t.p,{children:["\u2022 ",(0,n.jsx)(t.em,{children:"Optional:"})," ",(0,n.jsx)(t.code,{children:"False"})]}),(0,n.jsx)(t.hr,{}),(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.code,{children:"x_columns"})}),": ",(0,n.jsx)(t.code,{children:"list[str]"})]}),(0,n.jsx)(t.p,{children:"list of columns to use as exogenous variables."}),(0,n.jsxs)(t.p,{children:["\u2022 ",(0,n.jsx)(t.em,{children:"Optional:"})," ",(0,n.jsx)(t.code,{children:"False"})]})]})}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.code,{children:"results"})}),": ",(0,n.jsx)(t.code,{children:"list[dict]"})]}),"\n",(0,n.jsx)(t.p,{children:"Serializable results."}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.code,{children:"provider"})}),": ",(0,n.jsx)(t.code,{children:"None"})]}),"\n",(0,n.jsx)(t.p,{children:"Provider name."}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.code,{children:"warnings"})}),": ",(0,n.jsx)(t.code,{children:"Optional[list[Warning_]]"})]}),"\n",(0,n.jsx)(t.p,{children:"list of warnings."}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.code,{children:"chart"})}),": ",(0,n.jsx)(t.code,{children:"Optional[Chart]"})]}),"\n",(0,n.jsx)(t.p,{children:"Chart object."}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.code,{children:"extra"})}),": ",(0,n.jsx)(t.code,{children:"dict[str, Any]"})]}),"\n",(0,n.jsx)(t.p,{children:"Extra info."}),"\n",(0,n.jsx)(t.hr,{})]})}function p(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(f,{...e})}):f(e)}},19365:(e,t,r)=>{r.d(t,{A:()=>o});r(96540);var n=r(34164);const a={tabItem:"tabItem_Ymn6"};var s=r(74848);function o(e){let{children:t,hidden:r,className:o}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,n.A)(a.tabItem,o),hidden:r,children:t})}},94331:(e,t,r)=>{r.d(t,{A:()=>s});r(96540);var n=r(5260),a=r(74848);function s(e){let{title:t}=e;return(0,a.jsx)(n.A,{children:(0,a.jsx)("title",{children:t})})}},18228:(e,t,r)=>{r.d(t,{A:()=>w});var n=r(56347),a=r(23104),s=r(96540),o=r(205),l=r(57485),i=r(31682),c=r(89466);function d(e){return function(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:a}}=e;return{value:t,label:r,attributes:n,default:a}}))}function u(e){const{values:t,children:r}=e;return(0,s.useMemo)((()=>{const e=t??d(r);return function(e){const t=(0,i.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function h(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:r}=e;const a=(0,n.W6)(),o=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,l.aZ)(o),(0,s.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function p(e){const{defaultValue:t,queryString:r=!1,groupId:n}=e,a=u(e),[l,i]=(0,s.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:a}))),[d,p]=f({queryString:r,groupId:n}),[m,x]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,a]=(0,c.Dv)(r);return[n,(0,s.useCallback)((e=>{r&&a.set(e)}),[r,a])]}({groupId:n}),b=(()=>{const e=d??m;return h({value:e,tabValues:a})?e:null})();(0,o.A)((()=>{b&&i(b)}),[b]);return{selectedValue:l,selectValue:(0,s.useCallback)((e=>{if(!h({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);i(e),p(e),x(e)}),[p,x,a]),tabValues:a}}var m=r(92303),x=r(34164);const b={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};var j=r(74848);function g(e){let{className:t,block:r,selectedValue:s,selectValue:o,tabValues:l}=e;const i=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.a_)(),{pathname:d}=(0,n.zy)(),u=e=>{const t=e.currentTarget,r=i.indexOf(t),n=l[r].value;n!==s&&(c(t),o(n))},h=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const r=i.indexOf(e.currentTarget)+1;t=i[r]??i[0];break}case"ArrowLeft":{const r=i.indexOf(e.currentTarget)-1;t=i[r]??i[i.length-1];break}}t?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,x.A)("_group-tab list-none -ml-7 my-6 overflow-auto"),children:l.map((e=>{let{value:t,label:r,attributes:n}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,ref:e=>i.push(e),onKeyDown:h,onClick:u,...n,className:(0,x.A)("font-bold tracking-widest w-fit px-3 inline-flex py-1 uppercase border-b text-lg cursor-pointer",b.tabItem,n?.className,{"border-b-2 pointer-events-none":s===t,"border-b-2 text-[#669dcb] border-[#669dcb]":s===t&&d.startsWith("/workspace"),"border-b-2 text-[#FB923C] border-[#FB923C]":s===t&&d.startsWith("/sdk"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":s!==t&&d.startsWith("/sdk"),"border-b-2 text-[#FB923C] border-[#FB923C]":s===t&&d.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":s!==t&&d.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#abd2f1] hover:border-[#abd2f1]":s!==t&&d.startsWith("/workspace")}),children:r??t},t)}))})}function v(e){let{lazy:t,children:r,selectedValue:n}=e;if(r=Array.isArray(r)?r:[r],t){const e=r.find((e=>e.props.value===n));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:r.map(((e,t)=>(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==n})))})}function y(e){const t=p(e);return(0,j.jsxs)("div",{className:(0,x.A)("tabs-container",b.tabList),children:[(0,j.jsx)(g,{...e,...t}),(0,j.jsx)(v,{...e,...t})]})}function w(e){const t=(0,m.A)();return(0,j.jsx)(y,{...e},String(t))}},28453:(e,t,r)=>{r.d(t,{R:()=>o,x:()=>l});var n=r(96540);const a={},s=n.createContext(a);function o(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);