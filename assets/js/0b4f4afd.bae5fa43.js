"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5260],{35513:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>d,contentTitle:()=>u,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>m});var n=t(74848),s=t(28453),o=t(94331),a=t(18228),l=t(19365);const i={title:"ols_regression_summary",description:"Learn how to perform OLS regression using statsmodels in Python. Explore  the parameters and returns of the function, including the data, target column, exogenous  variables, and summary object.",keywords:["OLS regression","statsmodels","summary object","parameters","data","y_column","x_columns","exogenous variables","returns","OBBject","model"]},u=void 0,c={id:"platform/reference/econometrics/ols_regression_summary",title:"ols_regression_summary",description:"Learn how to perform OLS regression using statsmodels in Python. Explore  the parameters and returns of the function, including the data, target column, exogenous  variables, and summary object.",source:"@site/content/platform/reference/econometrics/ols_regression_summary.md",sourceDirName:"platform/reference/econometrics",slug:"/platform/reference/econometrics/ols_regression_summary",permalink:"/platform/reference/econometrics/ols_regression_summary",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/platform/reference/econometrics/ols_regression_summary.md",tags:[],version:"current",frontMatter:{title:"ols_regression_summary",description:"Learn how to perform OLS regression using statsmodels in Python. Explore  the parameters and returns of the function, including the data, target column, exogenous  variables, and summary object.",keywords:["OLS regression","statsmodels","summary object","parameters","data","y_column","x_columns","exogenous variables","returns","OBBject","model"]},sidebar:"tutorialSidebar",previous:{title:"ols_regression",permalink:"/platform/reference/econometrics/ols_regression"},next:{title:"panel_between",permalink:"/platform/reference/econometrics/panel_between"}},d={},m=[{value:"Examples",id:"examples",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2}];function h(e){const r={code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.A,{title:"econometrics/ols_regression_summary - Reference | OpenBB Platform Docs"}),"\n","\n",(0,n.jsx)(r.p,{children:"Perform Ordinary Least Squares (OLS) regression."}),"\n",(0,n.jsx)(r.p,{children:"This returns the summary object from statsmodels."}),"\n",(0,n.jsx)(r.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:"from openbb import obb\n# Perform Ordinary Least Squares (OLS) regression and return the summary.\nstock_data = obb.equity.price.historical(symbol='TSLA', start_date='2023-01-01', provider='fmp').to_df()\nobb.econometrics.ols_regression_summary(data=stock_data, y_column=\"close\", x_columns=[\"open\", \"high\", \"low\"])\nobb.econometrics.ols_regression_summary(y_column='close', x_columns=['open', 'high', 'low'], data=[{'date': '2023-01-02', 'open': 110.0, 'high': 120.0, 'low': 100.0, 'close': 115.0, 'volume': 10000.0}, {'date': '2023-01-03', 'open': 165.0, 'high': 180.0, 'low': 150.0, 'close': 172.5, 'volume': 15000.0}, {'date': '2023-01-04', 'open': 146.67, 'high': 160.0, 'low': 133.33, 'close': 153.33, 'volume': 13333.33}, {'date': '2023-01-05', 'open': 137.5, 'high': 150.0, 'low': 125.0, 'close': 143.75, 'volume': 12500.0}, {'date': '2023-01-06', 'open': 132.0, 'high': 144.0, 'low': 120.0, 'close': 138.0, 'volume': 12000.0}])\n"})}),"\n",(0,n.jsx)(r.hr,{}),"\n",(0,n.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsx)(a.A,{children:(0,n.jsx)(l.A,{value:"standard",label:"standard",children:(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Name"}),(0,n.jsx)(r.th,{children:"Type"}),(0,n.jsx)(r.th,{children:"Description"}),(0,n.jsx)(r.th,{children:"Default"}),(0,n.jsx)(r.th,{children:"Optional"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"data"}),(0,n.jsx)(r.td,{children:"List[Data]"}),(0,n.jsx)(r.td,{children:"Input dataset."}),(0,n.jsx)(r.td,{}),(0,n.jsx)(r.td,{children:"False"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"y_column"}),(0,n.jsx)(r.td,{children:"str"}),(0,n.jsx)(r.td,{children:"Target column."}),(0,n.jsx)(r.td,{}),(0,n.jsx)(r.td,{children:"False"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"x_columns"}),(0,n.jsx)(r.td,{children:"List[str]"}),(0,n.jsx)(r.td,{children:"List of columns to use as exogenous variables."}),(0,n.jsx)(r.td,{}),(0,n.jsx)(r.td,{children:"False"})]})]})]})})}),"\n",(0,n.jsx)(r.hr,{}),"\n",(0,n.jsx)(r.h2,{id:"returns",children:"Returns"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",metastring:"wordwrap",children:"OBBject\n    Data\n"})})]})}function p(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},19365:(e,r,t)=>{t.d(r,{A:()=>a});t(96540);var n=t(34164);const s={tabItem:"tabItem_Ymn6"};var o=t(74848);function a(e){let{children:r,hidden:t,className:a}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,n.A)(s.tabItem,a),hidden:t,children:r})}},94331:(e,r,t)=>{t.d(r,{A:()=>o});t(96540);var n=t(5260),s=t(74848);function o(e){let{title:r}=e;return(0,s.jsx)(n.A,{children:(0,s.jsx)("title",{children:r})})}},18228:(e,r,t)=>{t.d(r,{A:()=>_});var n=t(96540),s=t(34164),o=t(23104),a=t(56347),l=t(205),i=t(57485),u=t(31682),c=t(89466);function d(e){return function(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:r,label:t,attributes:n,default:s}}=e;return{value:r,label:t,attributes:n,default:s}}))}function m(e){const{values:r,children:t}=e;return(0,n.useMemo)((()=>{const e=r??d(t);return function(e){const r=(0,u.X)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,t])}function h(e){let{value:r,tabValues:t}=e;return t.some((e=>e.value===r))}function p(e){let{queryString:r=!1,groupId:t}=e;const s=(0,a.W6)(),o=function(e){let{queryString:r=!1,groupId:t}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:r,groupId:t});return[(0,i.aZ)(o),(0,n.useCallback)((e=>{if(!o)return;const r=new URLSearchParams(s.location.search);r.set(o,e),s.replace({...s.location,search:r.toString()})}),[o,s])]}function b(e){const{defaultValue:r,queryString:t=!1,groupId:s}=e,o=m(e),[a,i]=(0,n.useState)((()=>function(e){let{defaultValue:r,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!h({value:r,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const n=t.find((e=>e.default))??t[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:r,tabValues:o}))),[u,d]=p({queryString:t,groupId:s}),[b,f]=function(e){let{groupId:r}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(r),[s,o]=(0,c.Dv)(t);return[s,(0,n.useCallback)((e=>{t&&o.set(e)}),[t,o])]}({groupId:s}),x=(()=>{const e=u??b;return h({value:e,tabValues:o})?e:null})();(0,l.A)((()=>{x&&i(x)}),[x]);return{selectedValue:a,selectValue:(0,n.useCallback)((e=>{if(!h({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),f(e)}),[d,f,o]),tabValues:o}}var f=t(92303);const x={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};var g=t(74848);function v(e){let{className:r,block:t,selectedValue:n,selectValue:l,tabValues:i}=e;const u=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.a_)(),{pathname:d}=(0,a.zy)(),m=e=>{const r=e.currentTarget,t=u.indexOf(r),s=i[t].value;s!==n&&(c(r),l(s))},h=e=>{let r=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const t=u.indexOf(e.currentTarget)+1;r=u[t]??u[0];break}case"ArrowLeft":{const t=u.indexOf(e.currentTarget)-1;r=u[t]??u[u.length-1];break}}r?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("_group-tab list-none -ml-7 my-6 overflow-auto"),children:i.map((e=>{let{value:r,label:t,attributes:o}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:n===r?0:-1,"aria-selected":n===r,ref:e=>u.push(e),onKeyDown:h,onClick:m,...o,className:(0,s.A)("font-bold tracking-widest w-fit px-3 inline-flex py-1 uppercase border-b text-lg cursor-pointer",x.tabItem,o?.className,{"border-b-2 pointer-events-none":n===r,"border-b-2 text-[#669dcb] border-[#669dcb]":n===r&&d.startsWith("/terminal"),"border-b-2 text-[#FB923C] border-[#FB923C]":n===r&&d.startsWith("/sdk"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":n!==r&&d.startsWith("/sdk"),"border-b-2 text-[#FB923C] border-[#FB923C]":n===r&&d.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":n!==r&&d.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#abd2f1] hover:border-[#abd2f1]":n!==r&&d.startsWith("/terminal")}),children:t??r},r)}))})}function y(e){let{lazy:r,children:t,selectedValue:s}=e;if(t=Array.isArray(t)?t:[t],r){const e=t.find((e=>e.props.value===s));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:t.map(((e,r)=>(0,n.cloneElement)(e,{key:r,hidden:e.props.value!==s})))})}function j(e){const r=b(e);return(0,g.jsxs)("div",{className:(0,s.A)("tabs-container",x.tabList),children:[(0,g.jsx)(v,{...e,...r}),(0,g.jsx)(y,{...e,...r})]})}function _(e){const r=(0,f.A)();return(0,g.jsx)(j,{...e},String(r))}},28453:(e,r,t)=>{t.d(r,{R:()=>a,x:()=>l});var n=t(96540);const s={},o=n.createContext(s);function a(e){const r=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),n.createElement(o.Provider,{value:r},e.children)}}}]);