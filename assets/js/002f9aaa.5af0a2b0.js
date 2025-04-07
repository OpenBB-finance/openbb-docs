"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[38135],{61413:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>u,contentTitle:()=>c,default:()=>p,frontMatter:()=>l,metadata:()=>d,toc:()=>h});var n=t(74848),s=t(28453),a=t(94331),i=t(18228),o=t(19365);const l={title:"normality",description:"Learn about normality statistics and their significance in data analysis.  Discover different techniques such as kurtosis, skewness, Jarque-Bera, Shapiro-Wilk,  and Kolmogorov-Smirnov for evaluating normality in time series data. Explore how  these tests can help determine if a data sample follows a normal distribution.",keywords:["normality statistics","kurtosis","skewness","Jarque-Bera","Shapiro-Wilk","Kolmogorov-Smirnov","time series data","target column","normality tests"]},c=void 0,d={id:"platform/reference/quantitative/normality",title:"normality",description:"Learn about normality statistics and their significance in data analysis.  Discover different techniques such as kurtosis, skewness, Jarque-Bera, Shapiro-Wilk,  and Kolmogorov-Smirnov for evaluating normality in time series data. Explore how  these tests can help determine if a data sample follows a normal distribution.",source:"@site/content/platform/reference/quantitative/normality.md",sourceDirName:"platform/reference/quantitative",slug:"/platform/reference/quantitative/normality",permalink:"/platform/reference/quantitative/normality",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/platform/reference/quantitative/normality.md",tags:[],version:"current",frontMatter:{title:"normality",description:"Learn about normality statistics and their significance in data analysis.  Discover different techniques such as kurtosis, skewness, Jarque-Bera, Shapiro-Wilk,  and Kolmogorov-Smirnov for evaluating normality in time series data. Explore how  these tests can help determine if a data sample follows a normal distribution.",keywords:["normality statistics","kurtosis","skewness","Jarque-Bera","Shapiro-Wilk","Kolmogorov-Smirnov","time series data","target column","normality tests"]},sidebar:"tutorialSidebar",previous:{title:"capm",permalink:"/platform/reference/quantitative/capm"},next:{title:"summary",permalink:"/platform/reference/quantitative/summary"}},u={},h=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Data",id:"data",level:2}];function m(e){const r={code:"code",em:"em",h2:"h2",hr:"hr",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.A,{title:"quantitative/normality - Reference | OpenBB Platform Docs"}),"\n","\n",(0,n.jsx)(r.p,{children:"Get Normality Statistics."}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Kurtosis"}),": whether the kurtosis of a sample differs from the normal distribution."]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Skewness"}),": whether the skewness of a sample differs from the normal distribution."]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Jarque-Bera"}),": whether the sample data has the skewness and kurtosis matching a normal distribution."]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Shapiro-Wilk"}),": whether a random sample comes from a normal distribution."]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Kolmogorov-Smirnov"}),": whether two underlying one-dimensional probability distributions differ."]}),"\n"]}),"\n",(0,n.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsx)(i.A,{children:(0,n.jsxs)(o.A,{value:"standard",label:"standard",children:[(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:(0,n.jsx)(r.code,{children:"data"})}),": ",(0,n.jsx)(r.code,{children:"list[openbb_core.provider.abstract.data.Data]"})]}),(0,n.jsx)(r.p,{children:"Time series data."}),(0,n.jsxs)(r.p,{children:["\u2022 ",(0,n.jsx)(r.em,{children:"Optional:"})," ",(0,n.jsx)(r.code,{children:"False"})]}),(0,n.jsx)(r.hr,{}),(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:(0,n.jsx)(r.code,{children:"target"})}),": ",(0,n.jsx)(r.code,{children:"str"})]}),(0,n.jsx)(r.p,{children:"Target column name."}),(0,n.jsxs)(r.p,{children:["\u2022 ",(0,n.jsx)(r.em,{children:"Optional:"})," ",(0,n.jsx)(r.code,{children:"False"})]})]})}),"\n",(0,n.jsx)(r.hr,{}),"\n",(0,n.jsx)(r.h2,{id:"returns",children:"Returns"}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:(0,n.jsx)(r.code,{children:"results"})}),": ",(0,n.jsx)(r.code,{children:"list[NormalityModel]"})]}),"\n",(0,n.jsx)(r.p,{children:"Serializable results."}),"\n",(0,n.jsx)(r.hr,{}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:(0,n.jsx)(r.code,{children:"provider"})}),": ",(0,n.jsx)(r.code,{children:"None"})]}),"\n",(0,n.jsx)(r.p,{children:"Provider name."}),"\n",(0,n.jsx)(r.hr,{}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:(0,n.jsx)(r.code,{children:"warnings"})}),": ",(0,n.jsx)(r.code,{children:"Optional[list[Warning_]]"})]}),"\n",(0,n.jsx)(r.p,{children:"list of warnings."}),"\n",(0,n.jsx)(r.hr,{}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:(0,n.jsx)(r.code,{children:"chart"})}),": ",(0,n.jsx)(r.code,{children:"Optional[Chart]"})]}),"\n",(0,n.jsx)(r.p,{children:"Chart object."}),"\n",(0,n.jsx)(r.hr,{}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:(0,n.jsx)(r.code,{children:"extra"})}),": ",(0,n.jsx)(r.code,{children:"dict[str, Any]"})]}),"\n",(0,n.jsx)(r.p,{children:"Extra info."}),"\n",(0,n.jsx)(r.hr,{}),"\n",(0,n.jsx)(r.h2,{id:"data",children:"Data"}),"\n",(0,n.jsx)(i.A,{children:(0,n.jsxs)(o.A,{value:"NormalityModel",label:"NormalityModel",children:[(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:(0,n.jsx)(r.code,{children:"kurtosis"})}),": ",(0,n.jsx)(r.code,{children:"TestModel"})]}),(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:(0,n.jsx)(r.code,{children:"skewness"})}),": ",(0,n.jsx)(r.code,{children:"TestModel"})]}),(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:(0,n.jsx)(r.code,{children:"jarque_bera"})}),": ",(0,n.jsx)(r.code,{children:"TestModel"})]}),(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:(0,n.jsx)(r.code,{children:"shapiro_wilk"})}),": ",(0,n.jsx)(r.code,{children:"TestModel"})]}),(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:(0,n.jsx)(r.code,{children:"kolmogorov_smirnov"})}),": ",(0,n.jsx)(r.code,{children:"TestModel"})]})]})})]})}function p(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(m,{...e})}):m(e)}},19365:(e,r,t)=>{t.d(r,{A:()=>i});t(96540);var n=t(34164);const s={tabItem:"tabItem_Ymn6"};var a=t(74848);function i(e){let{children:r,hidden:t,className:i}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,n.A)(s.tabItem,i),hidden:t,children:r})}},94331:(e,r,t)=>{t.d(r,{A:()=>a});t(96540);var n=t(5260),s=t(74848);function a(e){let{title:r}=e;return(0,s.jsx)(n.A,{children:(0,s.jsx)("title",{children:r})})}},18228:(e,r,t)=>{t.d(r,{A:()=>w});var n=t(56347),s=t(23104),a=t(96540),i=t(205),o=t(57485),l=t(31682),c=t(89466);function d(e){return function(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:r,label:t,attributes:n,default:s}}=e;return{value:r,label:t,attributes:n,default:s}}))}function u(e){const{values:r,children:t}=e;return(0,a.useMemo)((()=>{const e=r??d(t);return function(e){const r=(0,l.X)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,t])}function h(e){let{value:r,tabValues:t}=e;return t.some((e=>e.value===r))}function m(e){let{queryString:r=!1,groupId:t}=e;const s=(0,n.W6)(),i=function(e){let{queryString:r=!1,groupId:t}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:r,groupId:t});return[(0,o.aZ)(i),(0,a.useCallback)((e=>{if(!i)return;const r=new URLSearchParams(s.location.search);r.set(i,e),s.replace({...s.location,search:r.toString()})}),[i,s])]}function p(e){const{defaultValue:r,queryString:t=!1,groupId:n}=e,s=u(e),[o,l]=(0,a.useState)((()=>function(e){let{defaultValue:r,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!h({value:r,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const n=t.find((e=>e.default))??t[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:r,tabValues:s}))),[d,p]=m({queryString:t,groupId:n}),[f,x]=function(e){let{groupId:r}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(r),[n,s]=(0,c.Dv)(t);return[n,(0,a.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:n}),b=(()=>{const e=d??f;return h({value:e,tabValues:s})?e:null})();(0,i.A)((()=>{b&&l(b)}),[b]);return{selectedValue:o,selectValue:(0,a.useCallback)((e=>{if(!h({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),p(e),x(e)}),[p,x,s]),tabValues:s}}var f=t(92303),x=t(34164);const b={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};var j=t(74848);function v(e){let{className:r,block:t,selectedValue:a,selectValue:i,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.a_)(),{pathname:d}=(0,n.zy)(),u=e=>{const r=e.currentTarget,t=l.indexOf(r),n=o[t].value;n!==a&&(c(r),i(n))},h=e=>{let r=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;r=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;r=l[t]??l[l.length-1];break}}r?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,x.A)("_group-tab list-none -ml-7 my-6 overflow-auto"),children:o.map((e=>{let{value:r,label:t,attributes:n}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:a===r?0:-1,"aria-selected":a===r,ref:e=>l.push(e),onKeyDown:h,onClick:u,...n,className:(0,x.A)("font-bold tracking-widest w-fit px-3 inline-flex py-1 uppercase border-b text-lg cursor-pointer",b.tabItem,n?.className,{"border-b-2 pointer-events-none":a===r,"border-b-2 text-[#669dcb] border-[#669dcb]":a===r&&d.startsWith("/workspace"),"border-b-2 text-[#FB923C] border-[#FB923C]":a===r&&d.startsWith("/sdk"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":a!==r&&d.startsWith("/sdk"),"border-b-2 text-[#FB923C] border-[#FB923C]":a===r&&d.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":a!==r&&d.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#abd2f1] hover:border-[#abd2f1]":a!==r&&d.startsWith("/workspace")}),children:t??r},r)}))})}function g(e){let{lazy:r,children:t,selectedValue:n}=e;if(t=Array.isArray(t)?t:[t],r){const e=t.find((e=>e.props.value===n));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:t.map(((e,r)=>(0,a.cloneElement)(e,{key:r,hidden:e.props.value!==n})))})}function y(e){const r=p(e);return(0,j.jsxs)("div",{className:(0,x.A)("tabs-container",b.tabList),children:[(0,j.jsx)(v,{...e,...r}),(0,j.jsx)(g,{...e,...r})]})}function w(e){const r=(0,f.A)();return(0,j.jsx)(y,{...e},String(r))}},28453:(e,r,t)=>{t.d(r,{R:()=>i,x:()=>o});var n=t(96540);const s={},a=n.createContext(s);function i(e){const r=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),n.createElement(a.Provider,{value:r},e.children)}}}]);