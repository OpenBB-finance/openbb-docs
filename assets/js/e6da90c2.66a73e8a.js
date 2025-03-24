"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[14803],{74832:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>p,frontMatter:()=>l,metadata:()=>c,toc:()=>h});var a=r(74848),n=r(28453),s=r(94331),i=r(18228),o=r(19365);const l={title:"skew",description:"Get the skew of the data set",keywords:["quantitative","stats","skew"]},u=void 0,c={id:"platform/reference/quantitative/stats/skew",title:"skew",description:"Get the skew of the data set",source:"@site/content/platform/reference/quantitative/stats/skew.md",sourceDirName:"platform/reference/quantitative/stats",slug:"/platform/reference/quantitative/stats/skew",permalink:"/platform/reference/quantitative/stats/skew",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/platform/reference/quantitative/stats/skew.md",tags:[],version:"current",frontMatter:{title:"skew",description:"Get the skew of the data set",keywords:["quantitative","stats","skew"]},sidebar:"tutorialSidebar",previous:{title:"quantile",permalink:"/platform/reference/quantitative/stats/quantile"},next:{title:"stdev",permalink:"/platform/reference/quantitative/stats/stdev"}},d={},h=[{value:"Examples",id:"examples",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2}];function f(e){const t={code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.A,{title:"quantitative/stats/skew - Reference | OpenBB Platform Docs"}),"\n","\n",(0,a.jsx)(t.p,{children:"Get the skew of the data set."}),"\n",(0,a.jsx)(t.p,{children:"Skew is a statistical measure that reveals the degree of asymmetry of a distribution around its mean.\nPositive skewness indicates a distribution with an extended tail to the right, while negative skewness shows a tail\nthat stretches left. Understanding skewness can provide insights into potential biases in data and help anticipate\nthe nature of future data points. It's particularly useful for identifying the likelihood of extreme outcomes in\nfinancial returns, enabling more informed decision-making based on the distribution's shape over a specified period."}),"\n",(0,a.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-python",children:"from openbb import obb\n# Get Skewness.\nstock_data = obb.equity.price.historical(symbol=\"TSLA\", start_date=\"2023-01-01\", provider=\"fmp\").to_df()\nreturns = stock_data[\"close\"].pct_change().dropna()\nobb.quantitative.stats.skew(data=returns, target=\"close\")\nobb.quantitative.stats.skew(target='close', data=[{'date': '2023-01-02', 'close': 0.05}, {'date': '2023-01-03', 'close': 0.08}, {'date': '2023-01-04', 'close': 0.07}, {'date': '2023-01-05', 'close': 0.06}, {'date': '2023-01-06', 'close': 0.06}])\n"})}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,a.jsx)(i.A,{children:(0,a.jsx)(o.A,{value:"standard",label:"standard",children:(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:"Name"}),(0,a.jsx)(t.th,{children:"Type"}),(0,a.jsx)(t.th,{children:"Description"}),(0,a.jsx)(t.th,{children:"Default"}),(0,a.jsx)(t.th,{children:"Optional"})]})}),(0,a.jsxs)(t.tbody,{children:[(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"data"}),(0,a.jsx)(t.td,{children:"List[Data]"}),(0,a.jsx)(t.td,{children:"Time series data."}),(0,a.jsx)(t.td,{}),(0,a.jsx)(t.td,{children:"False"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"target"}),(0,a.jsx)(t.td,{children:"str"}),(0,a.jsx)(t.td,{children:"Target column name."}),(0,a.jsx)(t.td,{}),(0,a.jsx)(t.td,{children:"False"})]})]})]})})}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-python",metastring:"wordwrap",children:"OBBject\n    List\n"})})]})}function p(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(f,{...e})}):f(e)}},19365:(e,t,r)=>{r.d(t,{A:()=>i});r(96540);var a=r(34164);const n={tabItem:"tabItem_Ymn6"};var s=r(74848);function i(e){let{children:t,hidden:r,className:i}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,a.A)(n.tabItem,i),hidden:r,children:t})}},94331:(e,t,r)=>{r.d(t,{A:()=>s});r(96540);var a=r(5260),n=r(74848);function s(e){let{title:t}=e;return(0,n.jsx)(a.A,{children:(0,n.jsx)("title",{children:t})})}},18228:(e,t,r)=>{r.d(t,{A:()=>k});var a=r(56347),n=r(23104),s=r(96540),i=r(205),o=r(57485),l=r(31682),u=r(89466);function c(e){return function(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:a,default:n}}=e;return{value:t,label:r,attributes:a,default:n}}))}function d(e){const{values:t,children:r}=e;return(0,s.useMemo)((()=>{const e=t??c(r);return function(e){const t=(0,l.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function h(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:r}=e;const n=(0,a.W6)(),i=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,o.aZ)(i),(0,s.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(n.location.search);t.set(i,e),n.replace({...n.location,search:t.toString()})}),[i,n])]}function p(e){const{defaultValue:t,queryString:r=!1,groupId:a}=e,n=d(e),[o,l]=(0,s.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=r.find((e=>e.default))??r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:n}))),[c,p]=f({queryString:r,groupId:a}),[b,m]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,n]=(0,u.Dv)(r);return[a,(0,s.useCallback)((e=>{r&&n.set(e)}),[r,n])]}({groupId:a}),v=(()=>{const e=c??b;return h({value:e,tabValues:n})?e:null})();(0,i.A)((()=>{v&&l(v)}),[v]);return{selectedValue:o,selectValue:(0,s.useCallback)((e=>{if(!h({value:e,tabValues:n}))throw new Error(`Can't select invalid tab value=${e}`);l(e),p(e),m(e)}),[p,m,n]),tabValues:n}}var b=r(92303),m=r(34164);const v={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};var x=r(74848);function g(e){let{className:t,block:r,selectedValue:s,selectValue:i,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:u}=(0,n.a_)(),{pathname:c}=(0,a.zy)(),d=e=>{const t=e.currentTarget,r=l.indexOf(t),a=o[r].value;a!==s&&(u(t),i(a))},h=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const r=l.indexOf(e.currentTarget)+1;t=l[r]??l[0];break}case"ArrowLeft":{const r=l.indexOf(e.currentTarget)-1;t=l[r]??l[l.length-1];break}}t?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,m.A)("_group-tab list-none -ml-7 my-6 overflow-auto"),children:o.map((e=>{let{value:t,label:r,attributes:a}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,ref:e=>l.push(e),onKeyDown:h,onClick:d,...a,className:(0,m.A)("font-bold tracking-widest w-fit px-3 inline-flex py-1 uppercase border-b text-lg cursor-pointer",v.tabItem,a?.className,{"border-b-2 pointer-events-none":s===t,"border-b-2 text-[#669dcb] border-[#669dcb]":s===t&&c.startsWith("/workspace"),"border-b-2 text-[#FB923C] border-[#FB923C]":s===t&&c.startsWith("/sdk"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":s!==t&&c.startsWith("/sdk"),"border-b-2 text-[#FB923C] border-[#FB923C]":s===t&&c.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":s!==t&&c.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#abd2f1] hover:border-[#abd2f1]":s!==t&&c.startsWith("/workspace")}),children:r??t},t)}))})}function w(e){let{lazy:t,children:r,selectedValue:a}=e;if(r=Array.isArray(r)?r:[r],t){const e=r.find((e=>e.props.value===a));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:r.map(((e,t)=>(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function j(e){const t=p(e);return(0,x.jsxs)("div",{className:(0,m.A)("tabs-container",v.tabList),children:[(0,x.jsx)(g,{...e,...t}),(0,x.jsx)(w,{...e,...t})]})}function k(e){const t=(0,b.A)();return(0,x.jsx)(j,{...e},String(t))}},28453:(e,t,r)=>{r.d(t,{R:()=>i,x:()=>o});var a=r(96540);const n={},s=a.createContext(n);function i(e){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),a.createElement(s.Provider,{value:t},e.children)}}}]);