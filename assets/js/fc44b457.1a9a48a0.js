"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[70776],{70601:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>d,default:()=>f,frontMatter:()=>i,metadata:()=>c,toc:()=>h});var a=r(74848),n=r(28453),l=r(94331),o=r(18228),s=r(19365);const i={title:"adx",description:"Learn about ADX, a Welles Wilder style moving average of the Directional  Movement Index. Understand its calculation, interpretation, and usage with stock  data. Explore examples for implementation.",keywords:["ADX","Welles Wilder","moving average","Directional Movement Index","trend","calculation","data","index column","length","scalar value","drift","interpretation","stock data","historical data","examples"]},d=void 0,c={id:"platform/reference/technical/adx",title:"adx",description:"Learn about ADX, a Welles Wilder style moving average of the Directional  Movement Index. Understand its calculation, interpretation, and usage with stock  data. Explore examples for implementation.",source:"@site/content/platform/reference/technical/adx.md",sourceDirName:"platform/reference/technical",slug:"/platform/reference/technical/adx",permalink:"/platform/reference/technical/adx",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/platform/reference/technical/adx.md",tags:[],version:"current",frontMatter:{title:"adx",description:"Learn about ADX, a Welles Wilder style moving average of the Directional  Movement Index. Understand its calculation, interpretation, and usage with stock  data. Explore examples for implementation.",keywords:["ADX","Welles Wilder","moving average","Directional Movement Index","trend","calculation","data","index column","length","scalar value","drift","interpretation","stock data","historical data","examples"]},sidebar:"tutorialSidebar",previous:{title:"adosc",permalink:"/platform/reference/technical/adosc"},next:{title:"aroon",permalink:"/platform/reference/technical/aroon"}},u={},h=[{value:"Examples",id:"examples",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2}];function p(e){const t={code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(l.A,{title:"technical/adx - Reference | OpenBB Platform Docs"}),"\n","\n",(0,a.jsx)(t.p,{children:"Calculate the Average Directional Index (ADX)."}),"\n",(0,a.jsx)(t.p,{children:"The ADX is a Welles Wilder style moving average of the Directional Movement Index (DX).\nThe values range from 0 to 100, but rarely get above 60. To interpret the ADX, consider\na high number to be a strong trend, and a low number, a weak trend."}),"\n",(0,a.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-python",children:"from openbb import obb\n# Get the Average Directional Index (ADX).\nstock_data = obb.equity.price.historical(symbol='TSLA', start_date='2023-01-01', provider='fmp')\nadx_data = obb.technical.adx(data=stock_data.results, length=50, scalar=100.0, drift=1)\nobb.technical.adx(length=2, data=[{'date': '2023-01-02', 'open': 110.0, 'high': 120.0, 'low': 100.0, 'close': 115.0, 'volume': 10000.0}, {'date': '2023-01-03', 'open': 165.0, 'high': 180.0, 'low': 150.0, 'close': 172.5, 'volume': 15000.0}, {'date': '2023-01-04', 'open': 146.67, 'high': 160.0, 'low': 133.33, 'close': 153.33, 'volume': 13333.33}, {'date': '2023-01-05', 'open': 137.5, 'high': 150.0, 'low': 125.0, 'close': 143.75, 'volume': 12500.0}, {'date': '2023-01-06', 'open': 132.0, 'high': 144.0, 'low': 120.0, 'close': 138.0, 'volume': 12000.0}])\n"})}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,a.jsx)(o.A,{children:(0,a.jsx)(s.A,{value:"standard",label:"standard",children:(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:"Name"}),(0,a.jsx)(t.th,{children:"Type"}),(0,a.jsx)(t.th,{children:"Description"}),(0,a.jsx)(t.th,{children:"Default"}),(0,a.jsx)(t.th,{children:"Optional"})]})}),(0,a.jsxs)(t.tbody,{children:[(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"data"}),(0,a.jsx)(t.td,{children:"List[Data]"}),(0,a.jsx)(t.td,{children:"List of data to be used for the calculation."}),(0,a.jsx)(t.td,{}),(0,a.jsx)(t.td,{children:"False"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"index"}),(0,a.jsx)(t.td,{children:"str, optional"}),(0,a.jsxs)(t.td,{children:["Index column name to use with ",(0,a.jsx)(t.code,{children:"data"}),', by default "date".']}),(0,a.jsx)(t.td,{}),(0,a.jsx)(t.td,{children:"False"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"length"}),(0,a.jsx)(t.td,{children:"int, optional"}),(0,a.jsx)(t.td,{children:"Number of periods for the ADX, by default 50."}),(0,a.jsx)(t.td,{}),(0,a.jsx)(t.td,{children:"False"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"scalar"}),(0,a.jsx)(t.td,{children:"float, optional"}),(0,a.jsx)(t.td,{children:"Scalar value for the ADX, by default 100.0."}),(0,a.jsx)(t.td,{}),(0,a.jsx)(t.td,{children:"False"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"drift"}),(0,a.jsx)(t.td,{children:"int, optional"}),(0,a.jsx)(t.td,{children:"Drift value for the ADX, by default 1."}),(0,a.jsx)(t.td,{}),(0,a.jsx)(t.td,{children:"False"})]})]})]})})}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-python",metastring:"wordwrap",children:"OBBject\n    List\n"})})]})}function f(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},19365:(e,t,r)=>{r.d(t,{A:()=>o});r(96540);var a=r(34164);const n={tabItem:"tabItem_Ymn6"};var l=r(74848);function o(e){let{children:t,hidden:r,className:o}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,a.A)(n.tabItem,o),hidden:r,children:t})}},94331:(e,t,r)=>{r.d(t,{A:()=>l});r(96540);var a=r(5260),n=r(74848);function l(e){let{title:t}=e;return(0,n.jsx)(a.A,{children:(0,n.jsx)("title",{children:t})})}},18228:(e,t,r)=>{r.d(t,{A:()=>w});var a=r(56347),n=r(23104),l=r(96540),o=r(205),s=r(57485),i=r(31682),d=r(89466);function c(e){return function(e){return l.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,l.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:a,default:n}}=e;return{value:t,label:r,attributes:a,default:n}}))}function u(e){const{values:t,children:r}=e;return(0,l.useMemo)((()=>{const e=t??c(r);return function(e){const t=(0,i.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function h(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:r}=e;const n=(0,a.W6)(),o=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,s.aZ)(o),(0,l.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function f(e){const{defaultValue:t,queryString:r=!1,groupId:a}=e,n=u(e),[s,i]=(0,l.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=r.find((e=>e.default))??r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:n}))),[c,f]=p({queryString:r,groupId:a}),[m,x]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,n]=(0,d.Dv)(r);return[a,(0,l.useCallback)((e=>{r&&n.set(e)}),[r,n])]}({groupId:a}),b=(()=>{const e=c??m;return h({value:e,tabValues:n})?e:null})();(0,o.A)((()=>{b&&i(b)}),[b]);return{selectedValue:s,selectValue:(0,l.useCallback)((e=>{if(!h({value:e,tabValues:n}))throw new Error(`Can't select invalid tab value=${e}`);i(e),f(e),x(e)}),[f,x,n]),tabValues:n}}var m=r(92303),x=r(34164);const b={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};var v=r(74848);function g(e){let{className:t,block:r,selectedValue:l,selectValue:o,tabValues:s}=e;const i=[],{blockElementScrollPositionUntilNextRender:d}=(0,n.a_)(),{pathname:c}=(0,a.zy)(),u=e=>{const t=e.currentTarget,r=i.indexOf(t),a=s[r].value;a!==l&&(d(t),o(a))},h=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const r=i.indexOf(e.currentTarget)+1;t=i[r]??i[0];break}case"ArrowLeft":{const r=i.indexOf(e.currentTarget)-1;t=i[r]??i[i.length-1];break}}t?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,x.A)("_group-tab list-none -ml-7 my-6 overflow-auto"),children:s.map((e=>{let{value:t,label:r,attributes:a}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,ref:e=>i.push(e),onKeyDown:h,onClick:u,...a,className:(0,x.A)("font-bold tracking-widest w-fit px-3 inline-flex py-1 uppercase border-b text-lg cursor-pointer",b.tabItem,a?.className,{"border-b-2 pointer-events-none":l===t,"border-b-2 text-[#669dcb] border-[#669dcb]":l===t&&c.startsWith("/workspace"),"border-b-2 text-[#FB923C] border-[#FB923C]":l===t&&c.startsWith("/sdk"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":l!==t&&c.startsWith("/sdk"),"border-b-2 text-[#FB923C] border-[#FB923C]":l===t&&c.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":l!==t&&c.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#abd2f1] hover:border-[#abd2f1]":l!==t&&c.startsWith("/workspace")}),children:r??t},t)}))})}function j(e){let{lazy:t,children:r,selectedValue:a}=e;if(r=Array.isArray(r)?r:[r],t){const e=r.find((e=>e.props.value===a));return e?(0,l.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:r.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function y(e){const t=f(e);return(0,v.jsxs)("div",{className:(0,x.A)("tabs-container",b.tabList),children:[(0,v.jsx)(g,{...e,...t}),(0,v.jsx)(j,{...e,...t})]})}function w(e){const t=(0,m.A)();return(0,v.jsx)(y,{...e},String(t))}},28453:(e,t,r)=>{r.d(t,{R:()=>o,x:()=>s});var a=r(96540);const n={},l=a.createContext(n);function o(e){const t=a.useContext(l);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),a.createElement(l.Provider,{value:t},e.children)}}}]);