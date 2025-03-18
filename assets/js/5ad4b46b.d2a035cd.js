"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[74419],{84018:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>m,frontMatter:()=>l,metadata:()=>d,toc:()=>h});var n=r(74848),a=r(28453),o=r(94331),i=r(18228),s=r(19365);const l={title:"correlation_matrix",description:"Learn how to get the correlation matrix of an input dataset using Python.  Find information on the parameters and return value of the function.",keywords:["correlation matrix","input dataset","Python"]},c=void 0,d={id:"platform/reference/econometrics/correlation_matrix",title:"correlation_matrix",description:"Learn how to get the correlation matrix of an input dataset using Python.  Find information on the parameters and return value of the function.",source:"@site/content/platform/reference/econometrics/correlation_matrix.md",sourceDirName:"platform/reference/econometrics",slug:"/platform/reference/econometrics/correlation_matrix",permalink:"/platform/reference/econometrics/correlation_matrix",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/platform/reference/econometrics/correlation_matrix.md",tags:[],version:"current",frontMatter:{title:"correlation_matrix",description:"Learn how to get the correlation matrix of an input dataset using Python.  Find information on the parameters and return value of the function.",keywords:["correlation matrix","input dataset","Python"]},sidebar:"tutorialSidebar",previous:{title:"cointegration",permalink:"/platform/reference/econometrics/cointegration"},next:{title:"ols_regression",permalink:"/platform/reference/econometrics/ols_regression"}},u={},h=[{value:"Examples",id:"examples",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2}];function p(e){const t={code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.A,{title:"econometrics/correlation_matrix - Reference | OpenBB Platform Docs"}),"\n","\n",(0,n.jsx)(t.p,{children:"Get the correlation matrix of an input dataset."}),"\n",(0,n.jsx)(t.p,{children:"The correlation matrix provides a view of how different variables in your dataset relate to one another.\nBy quantifying the degree to which variables move in relation to each other, this matrix can help identify patterns,\ntrends, and potential areas for deeper analysis. The correlation score ranges from -1 to 1, with -1 indicating a\nperfect negative correlation, 0 indicating no correlation, and 1 indicating a perfect positive correlation."}),"\n",(0,n.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"from openbb import obb\n# Get the correlation matrix of a dataset.\nstock_data = obb.equity.price.historical(symbol='TSLA', start_date='2023-01-01', provider='fmp').to_df()\nobb.econometrics.correlation_matrix(data=stock_data)\nobb.econometrics.correlation_matrix(data=[{'date': '2023-01-02', 'open': 110.0, 'high': 120.0, 'low': 100.0, 'close': 115.0, 'volume': 10000.0}, {'date': '2023-01-03', 'open': 165.0, 'high': 180.0, 'low': 150.0, 'close': 172.5, 'volume': 15000.0}, {'date': '2023-01-04', 'open': 146.67, 'high': 160.0, 'low': 133.33, 'close': 153.33, 'volume': 13333.33}, {'date': '2023-01-05', 'open': 137.5, 'high': 150.0, 'low': 125.0, 'close': 143.75, 'volume': 12500.0}, {'date': '2023-01-06', 'open': 132.0, 'high': 144.0, 'low': 120.0, 'close': 138.0, 'volume': 12000.0}])\n"})}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsx)(i.A,{children:(0,n.jsx)(s.A,{value:"standard",label:"standard",children:(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Default"}),(0,n.jsx)(t.th,{children:"Optional"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"data"}),(0,n.jsx)(t.td,{children:"List[Data]"}),(0,n.jsx)(t.td,{children:"Input dataset."}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"False"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"method"}),(0,n.jsx)(t.td,{children:'Literal["pearson", "kendall", "spearman"]'}),(0,n.jsx)(t.td,{children:'Method to use for correlation calculation. Default is "pearson".'}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"False"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"pearson"}),(0,n.jsx)(t.td,{children:"standard correlation coefficient"}),(0,n.jsx)(t.td,{children:"kendall : Kendall Tau correlation coefficient"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"False"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"spearman"}),(0,n.jsx)(t.td,{children:"Spearman rank correlation"}),(0,n.jsx)(t.td,{children:"Returns"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"False"})]})]})]})})}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",metastring:"wordwrap",children:"OBBject\n    List\n"})})]})}function m(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},19365:(e,t,r)=>{r.d(t,{A:()=>i});r(96540);var n=r(34164);const a={tabItem:"tabItem_Ymn6"};var o=r(74848);function i(e){let{children:t,hidden:r,className:i}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,n.A)(a.tabItem,i),hidden:r,children:t})}},94331:(e,t,r)=>{r.d(t,{A:()=>o});r(96540);var n=r(5260),a=r(74848);function o(e){let{title:t}=e;return(0,a.jsx)(n.A,{children:(0,a.jsx)("title",{children:t})})}},18228:(e,t,r)=>{r.d(t,{A:()=>w});var n=r(96540),a=r(34164),o=r(23104),i=r(56347),s=r(205),l=r(57485),c=r(31682),d=r(89466);function u(e){return function(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:a}}=e;return{value:t,label:r,attributes:n,default:a}}))}function h(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??u(r);return function(e){const t=(0,c.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function p(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:r}=e;const a=(0,i.W6)(),o=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,l.aZ)(o),(0,n.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function f(e){const{defaultValue:t,queryString:r=!1,groupId:a}=e,o=h(e),[i,l]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[c,u]=m({queryString:r,groupId:a}),[f,b]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,d.Dv)(r);return[a,(0,n.useCallback)((e=>{r&&o.set(e)}),[r,o])]}({groupId:a}),x=(()=>{const e=c??f;return p({value:e,tabValues:o})?e:null})();(0,s.A)((()=>{x&&l(x)}),[x]);return{selectedValue:i,selectValue:(0,n.useCallback)((e=>{if(!p({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),b(e)}),[u,b,o]),tabValues:o}}var b=r(92303);const x={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};var v=r(74848);function g(e){let{className:t,block:r,selectedValue:n,selectValue:s,tabValues:l}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,o.a_)(),{pathname:u}=(0,i.zy)(),h=e=>{const t=e.currentTarget,r=c.indexOf(t),a=l[r].value;a!==n&&(d(t),s(a))},p=e=>{let t=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{const r=c.indexOf(e.currentTarget)+1;t=c[r]??c[0];break}case"ArrowLeft":{const r=c.indexOf(e.currentTarget)-1;t=c[r]??c[c.length-1];break}}t?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("_group-tab list-none -ml-7 my-6 overflow-auto"),children:l.map((e=>{let{value:t,label:r,attributes:o}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>c.push(e),onKeyDown:p,onClick:h,...o,className:(0,a.A)("font-bold tracking-widest w-fit px-3 inline-flex py-1 uppercase border-b text-lg cursor-pointer",x.tabItem,o?.className,{"border-b-2 pointer-events-none":n===t,"border-b-2 text-[#669dcb] border-[#669dcb]":n===t&&u.startsWith("/terminal"),"border-b-2 text-[#FB923C] border-[#FB923C]":n===t&&u.startsWith("/sdk"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":n!==t&&u.startsWith("/sdk"),"border-b-2 text-[#FB923C] border-[#FB923C]":n===t&&u.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":n!==t&&u.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#abd2f1] hover:border-[#abd2f1]":n!==t&&u.startsWith("/terminal")}),children:r??t},t)}))})}function j(e){let{lazy:t,children:r,selectedValue:a}=e;if(r=Array.isArray(r)?r:[r],t){const e=r.find((e=>e.props.value===a));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:r.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function y(e){const t=f(e);return(0,v.jsxs)("div",{className:(0,a.A)("tabs-container",x.tabList),children:[(0,v.jsx)(g,{...e,...t}),(0,v.jsx)(j,{...e,...t})]})}function w(e){const t=(0,b.A)();return(0,v.jsx)(y,{...e},String(t))}},28453:(e,t,r)=>{r.d(t,{R:()=>i,x:()=>s});var n=r(96540);const a={},o=n.createContext(a);function i(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);