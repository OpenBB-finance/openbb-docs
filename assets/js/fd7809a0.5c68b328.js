"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[50918],{21876:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>d,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>h});var r=a(74848),n=a(28453),l=a(94331),o=a(18228),s=a(19365);const i={title:"zlma",description:"Learn about the zero lag exponential moving average (ZLEMA) and how it  can be used to perform EMA calculations on de-lagged data. Explore the parameters  and get examples of implementing ZLEMA in Python.",keywords:["zero lag exponential moving average","ZLEMA","EMA calculation","de-lagged data","moving average","lagged data","cumulative effect","parameters","target column","index column","length","offset","calculation","calculated data","example"]},d=void 0,c={id:"platform/reference/technical/zlma",title:"zlma",description:"Learn about the zero lag exponential moving average (ZLEMA) and how it  can be used to perform EMA calculations on de-lagged data. Explore the parameters  and get examples of implementing ZLEMA in Python.",source:"@site/content/platform/reference/technical/zlma.md",sourceDirName:"platform/reference/technical",slug:"/platform/reference/technical/zlma",permalink:"/platform/reference/technical/zlma",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/platform/reference/technical/zlma.md",tags:[],version:"current",frontMatter:{title:"zlma",description:"Learn about the zero lag exponential moving average (ZLEMA) and how it  can be used to perform EMA calculations on de-lagged data. Explore the parameters  and get examples of implementing ZLEMA in Python.",keywords:["zero lag exponential moving average","ZLEMA","EMA calculation","de-lagged data","moving average","lagged data","cumulative effect","parameters","target column","index column","length","offset","calculation","calculated data","example"]},sidebar:"tutorialSidebar",previous:{title:"wma",permalink:"/platform/reference/technical/wma"},next:{title:"Data Models",permalink:"/platform/data_models/"}},u={},h=[{value:"Examples",id:"examples",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2}];function m(e){const t={code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(l.A,{title:"technical/zlma - Reference | OpenBB Platform Docs"}),"\n","\n",(0,r.jsx)(t.p,{children:"Calculate the zero lag exponential moving average (ZLEMA)."}),"\n",(0,r.jsx)(t.p,{children:'Created by John Ehlers and Ric Way. The idea is do a\nregular exponential moving average (EMA) calculation but\non a de-lagged data instead of doing it on the regular data.\nData is de-lagged by removing the data from "lag" days ago\nthus removing (or attempting to) the cumulative effect of\nthe moving average.'}),"\n",(0,r.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:"from openbb import obb\n# Get the Chande Momentum Oscillator.\nstock_data = obb.equity.price.historical(symbol='TSLA', start_date='2023-01-01', provider='fmp')\nzlma_data = obb.technical.zlma(data=stock_data.results, target='close', length=50, offset=0)\nobb.technical.zlma(length=2, data=[{'date': '2023-01-02', 'open': 110.0, 'high': 120.0, 'low': 100.0, 'close': 115.0, 'volume': 10000.0}, {'date': '2023-01-03', 'open': 165.0, 'high': 180.0, 'low': 150.0, 'close': 172.5, 'volume': 15000.0}, {'date': '2023-01-04', 'open': 146.67, 'high': 160.0, 'low': 133.33, 'close': 153.33, 'volume': 13333.33}, {'date': '2023-01-05', 'open': 137.5, 'high': 150.0, 'low': 125.0, 'close': 143.75, 'volume': 12500.0}, {'date': '2023-01-06', 'open': 132.0, 'high': 144.0, 'low': 120.0, 'close': 138.0, 'volume': 12000.0}])\n"})}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsx)(o.A,{children:(0,r.jsx)(s.A,{value:"standard",label:"standard",children:(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"}),(0,r.jsx)(t.th,{children:"Default"}),(0,r.jsx)(t.th,{children:"Optional"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"data"}),(0,r.jsx)(t.td,{children:"List[Data]"}),(0,r.jsx)(t.td,{children:"List of data to be used for the calculation."}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"False"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"target"}),(0,r.jsx)(t.td,{children:"str"}),(0,r.jsx)(t.td,{children:"Target column name."}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"False"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"index"}),(0,r.jsx)(t.td,{children:"str, optional"}),(0,r.jsxs)(t.td,{children:["Index column name to use with ",(0,r.jsx)(t.code,{children:"data"}),', by default "date".']}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"False"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"length"}),(0,r.jsx)(t.td,{children:"int, optional"}),(0,r.jsx)(t.td,{children:"Number of periods to be used for the calculation, by default 50."}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"False"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"offset"}),(0,r.jsx)(t.td,{children:"int, optional"}),(0,r.jsx)(t.td,{children:"Offset to be used for the calculation, by default 0."}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"False"})]})]})]})})}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",metastring:"wordwrap",children:"OBBject\n    List\n"})})]})}function p(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}},19365:(e,t,a)=>{a.d(t,{A:()=>o});a(96540);var r=a(34164);const n={tabItem:"tabItem_Ymn6"};var l=a(74848);function o(e){let{children:t,hidden:a,className:o}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,r.A)(n.tabItem,o),hidden:a,children:t})}},94331:(e,t,a)=>{a.d(t,{A:()=>l});a(96540);var r=a(5260),n=a(74848);function l(e){let{title:t}=e;return(0,n.jsx)(r.A,{children:(0,n.jsx)("title",{children:t})})}},18228:(e,t,a)=>{a.d(t,{A:()=>w});var r=a(56347),n=a(23104),l=a(96540),o=a(205),s=a(57485),i=a(31682),d=a(89466);function c(e){return function(e){return l.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,l.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:r,default:n}}=e;return{value:t,label:a,attributes:r,default:n}}))}function u(e){const{values:t,children:a}=e;return(0,l.useMemo)((()=>{const e=t??c(a);return function(e){const t=(0,i.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function h(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:a}=e;const n=(0,r.W6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s.aZ)(o),(0,l.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function p(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,n=u(e),[s,i]=(0,l.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=a.find((e=>e.default))??a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:n}))),[c,p]=m({queryString:a,groupId:r}),[f,b]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,n]=(0,d.Dv)(a);return[r,(0,l.useCallback)((e=>{a&&n.set(e)}),[a,n])]}({groupId:r}),g=(()=>{const e=c??f;return h({value:e,tabValues:n})?e:null})();(0,o.A)((()=>{g&&i(g)}),[g]);return{selectedValue:s,selectValue:(0,l.useCallback)((e=>{if(!h({value:e,tabValues:n}))throw new Error(`Can't select invalid tab value=${e}`);i(e),p(e),b(e)}),[p,b,n]),tabValues:n}}var f=a(92303),b=a(34164);const g={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};var x=a(74848);function v(e){let{className:t,block:a,selectedValue:l,selectValue:o,tabValues:s}=e;const i=[],{blockElementScrollPositionUntilNextRender:d}=(0,n.a_)(),{pathname:c}=(0,r.zy)(),u=e=>{const t=e.currentTarget,a=i.indexOf(t),r=s[a].value;r!==l&&(d(t),o(r))},h=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const a=i.indexOf(e.currentTarget)+1;t=i[a]??i[0];break}case"ArrowLeft":{const a=i.indexOf(e.currentTarget)-1;t=i[a]??i[i.length-1];break}}t?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,b.A)("_group-tab list-none -ml-7 my-6 overflow-auto"),children:s.map((e=>{let{value:t,label:a,attributes:r}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,ref:e=>i.push(e),onKeyDown:h,onClick:u,...r,className:(0,b.A)("font-bold tracking-widest w-fit px-3 inline-flex py-1 uppercase border-b text-lg cursor-pointer",g.tabItem,r?.className,{"border-b-2 pointer-events-none":l===t,"border-b-2 text-[#669dcb] border-[#669dcb]":l===t&&c.startsWith("/workspace"),"border-b-2 text-[#FB923C] border-[#FB923C]":l===t&&c.startsWith("/sdk"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":l!==t&&c.startsWith("/sdk"),"border-b-2 text-[#FB923C] border-[#FB923C]":l===t&&c.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":l!==t&&c.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#abd2f1] hover:border-[#abd2f1]":l!==t&&c.startsWith("/workspace")}),children:a??t},t)}))})}function j(e){let{lazy:t,children:a,selectedValue:r}=e;if(a=Array.isArray(a)?a:[a],t){const e=a.find((e=>e.props.value===r));return e?(0,l.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:a.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function y(e){const t=p(e);return(0,x.jsxs)("div",{className:(0,b.A)("tabs-container",g.tabList),children:[(0,x.jsx)(v,{...e,...t}),(0,x.jsx)(j,{...e,...t})]})}function w(e){const t=(0,f.A)();return(0,x.jsx)(y,{...e},String(t))}},28453:(e,t,a)=>{a.d(t,{R:()=>o,x:()=>s});var r=a(96540);const n={},l=r.createContext(n);function o(e){const t=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),r.createElement(l.Provider,{value:t},e.children)}}}]);