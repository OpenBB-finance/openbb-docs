"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[924],{33717:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>h});var r=n(74848),a=n(28453),i=n(94331),l=n(18228),s=n(19365);const o={title:"quantile",description:"Calculate the rolling quantile of a target column within a given window size at a specified quantile percentage",keywords:["quantitative","rolling","quantile"]},u=void 0,c={id:"platform/reference/quantitative/rolling/quantile",title:"quantile",description:"Calculate the rolling quantile of a target column within a given window size at a specified quantile percentage",source:"@site/content/platform/reference/quantitative/rolling/quantile.md",sourceDirName:"platform/reference/quantitative/rolling",slug:"/platform/reference/quantitative/rolling/quantile",permalink:"/platform/reference/quantitative/rolling/quantile",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/platform/reference/quantitative/rolling/quantile.md",tags:[],version:"current",frontMatter:{title:"quantile",description:"Calculate the rolling quantile of a target column within a given window size at a specified quantile percentage",keywords:["quantitative","rolling","quantile"]},sidebar:"tutorialSidebar",previous:{title:"mean",permalink:"/platform/reference/quantitative/rolling/mean"},next:{title:"skew",permalink:"/platform/reference/quantitative/rolling/skew"}},d={},h=[{value:"Examples",id:"examples",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2}];function f(e){const t={code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.A,{title:"quantitative/rolling/quantile - Reference | OpenBB Platform Docs"}),"\n","\n",(0,r.jsx)(t.p,{children:"Calculate the rolling quantile of a target column within a given window size at a specified quantile percentage."}),"\n",(0,r.jsx)(t.p,{children:"Quantiles are points dividing the range of a probability distribution into intervals with equal probabilities,\nor dividing the sample in the same way. This function is useful for understanding the distribution of data\nwithin a specified window, allowing for analysis of trends, identification of outliers, and assessment of risk."}),"\n",(0,r.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:"from openbb import obb\n# Get Rolling Quantile.\nstock_data = obb.equity.price.historical(symbol=\"TSLA\", start_date=\"2023-01-01\", provider=\"fmp\").to_df()\nreturns = stock_data[\"close\"].pct_change().dropna()\nobb.quantitative.rolling.quantile(data=returns, target=\"close\", window=252, quantile_pct=0.25)\nobb.quantitative.rolling.quantile(data=returns, target=\"close\", window=252, quantile_pct=0.75)\nobb.quantitative.rolling.quantile(target='close', window=2, data=[{'date': '2023-01-02', 'close': 0.05}, {'date': '2023-01-03', 'close': 0.08}, {'date': '2023-01-04', 'close': 0.07}, {'date': '2023-01-05', 'close': 0.06}, {'date': '2023-01-06', 'close': 0.06}])\n"})}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsx)(l.A,{children:(0,r.jsx)(s.A,{value:"standard",label:"standard",children:(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"}),(0,r.jsx)(t.th,{children:"Default"}),(0,r.jsx)(t.th,{children:"Optional"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"data"}),(0,r.jsx)(t.td,{children:"List[Data]"}),(0,r.jsx)(t.td,{children:"The time series data as a list of data points."}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"False"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"target"}),(0,r.jsx)(t.td,{children:"str"}),(0,r.jsx)(t.td,{children:"The name of the column for which to calculate the quantile."}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"False"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"window"}),(0,r.jsx)(t.td,{children:"PositiveInt"}),(0,r.jsx)(t.td,{children:"The number of observations used for calculating the rolling measure."}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"False"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"quantile_pct"}),(0,r.jsx)(t.td,{children:"NonNegativeFloat, optional"}),(0,r.jsx)(t.td,{children:"The quantile percentage to calculate (e.g., 0.5 for median), default is 0.5."}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"False"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"index"}),(0,r.jsx)(t.td,{children:"str, optional"}),(0,r.jsx)(t.td,{children:'The name of the index column, default is "date".'}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"False"})]})]})]})})}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",metastring:"wordwrap",children:"OBBject\n    List\n"})})]})}function p(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(f,{...e})}):f(e)}},19365:(e,t,n)=>{n.d(t,{A:()=>l});n(96540);var r=n(34164);const a={tabItem:"tabItem_Ymn6"};var i=n(74848);function l(e){let{children:t,hidden:n,className:l}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,l),hidden:n,children:t})}},94331:(e,t,n)=>{n.d(t,{A:()=>i});n(96540);var r=n(5260),a=n(74848);function i(e){let{title:t}=e;return(0,a.jsx)(r.A,{children:(0,a.jsx)("title",{children:t})})}},18228:(e,t,n)=>{n.d(t,{A:()=>q});var r=n(56347),a=n(23104),i=n(96540),l=n(205),s=n(57485),o=n(31682),u=n(89466);function c(e){return function(e){return i.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}function d(e){const{values:t,children:n}=e;return(0,i.useMemo)((()=>{const e=t??c(n);return function(e){const t=(0,o.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function h(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const a=(0,r.W6)(),l=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s.aZ)(l),(0,i.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(a.location.search);t.set(l,e),a.replace({...a.location,search:t.toString()})}),[l,a])]}function p(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,a=d(e),[s,o]=(0,i.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:a}))),[c,p]=f({queryString:n,groupId:r}),[b,m]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,a]=(0,u.Dv)(n);return[r,(0,i.useCallback)((e=>{n&&a.set(e)}),[n,a])]}({groupId:r}),x=(()=>{const e=c??b;return h({value:e,tabValues:a})?e:null})();(0,l.A)((()=>{x&&o(x)}),[x]);return{selectedValue:s,selectValue:(0,i.useCallback)((e=>{if(!h({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);o(e),p(e),m(e)}),[p,m,a]),tabValues:a}}var b=n(92303),m=n(34164);const x={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};var g=n(74848);function v(e){let{className:t,block:n,selectedValue:i,selectValue:l,tabValues:s}=e;const o=[],{blockElementScrollPositionUntilNextRender:u}=(0,a.a_)(),{pathname:c}=(0,r.zy)(),d=e=>{const t=e.currentTarget,n=o.indexOf(t),r=s[n].value;r!==i&&(u(t),l(r))},h=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=o.indexOf(e.currentTarget)+1;t=o[n]??o[0];break}case"ArrowLeft":{const n=o.indexOf(e.currentTarget)-1;t=o[n]??o[o.length-1];break}}t?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,m.A)("_group-tab list-none -ml-7 my-6 overflow-auto"),children:s.map((e=>{let{value:t,label:n,attributes:r}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,ref:e=>o.push(e),onKeyDown:h,onClick:d,...r,className:(0,m.A)("font-bold tracking-widest w-fit px-3 inline-flex py-1 uppercase border-b text-lg cursor-pointer",x.tabItem,r?.className,{"border-b-2 pointer-events-none":i===t,"border-b-2 text-[#669dcb] border-[#669dcb]":i===t&&c.startsWith("/workspace"),"border-b-2 text-[#FB923C] border-[#FB923C]":i===t&&c.startsWith("/sdk"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":i!==t&&c.startsWith("/sdk"),"border-b-2 text-[#FB923C] border-[#FB923C]":i===t&&c.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":i!==t&&c.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#abd2f1] hover:border-[#abd2f1]":i!==t&&c.startsWith("/workspace")}),children:n??t},t)}))})}function j(e){let{lazy:t,children:n,selectedValue:r}=e;if(n=Array.isArray(n)?n:[n],t){const e=n.find((e=>e.props.value===r));return e?(0,i.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:n.map(((e,t)=>(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function w(e){const t=p(e);return(0,g.jsxs)("div",{className:(0,m.A)("tabs-container",x.tabList),children:[(0,g.jsx)(v,{...e,...t}),(0,g.jsx)(j,{...e,...t})]})}function q(e){const t=(0,b.A)();return(0,g.jsx)(w,{...e},String(t))}},28453:(e,t,n)=>{n.d(t,{R:()=>l,x:()=>s});var r=n(96540);const a={},i=r.createContext(a);function l(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);