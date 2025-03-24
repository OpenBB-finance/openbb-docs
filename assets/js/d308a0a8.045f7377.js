"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[23736],{23951:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>d,default:()=>b,frontMatter:()=>i,metadata:()=>c,toc:()=>h});var r=n(74848),a=n(28453),o=n(94331),s=n(18228),l=n(19365);const i={title:"aroon",description:"Learn about the Aroon Indicator, a trend indicator in technical analysis.  Understand how the Aroon Up and Down lines can help identify upward and downward  trends, and how to calculate and use the Aroon Indicator. Includes examples and  parameters.",keywords:["Aroon Indicator","Aroon Up and Down","Aroon Indicator explanation","trend indicator","technical analysis","Aroon Indicator usage","Aroon Indicator examples","Aroon Indicator parameters","Aroon Indicator calculation"]},d=void 0,c={id:"platform/reference/technical/aroon",title:"aroon",description:"Learn about the Aroon Indicator, a trend indicator in technical analysis.  Understand how the Aroon Up and Down lines can help identify upward and downward  trends, and how to calculate and use the Aroon Indicator. Includes examples and  parameters.",source:"@site/content/platform/reference/technical/aroon.md",sourceDirName:"platform/reference/technical",slug:"/platform/reference/technical/aroon",permalink:"/platform/reference/technical/aroon",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/platform/reference/technical/aroon.md",tags:[],version:"current",frontMatter:{title:"aroon",description:"Learn about the Aroon Indicator, a trend indicator in technical analysis.  Understand how the Aroon Up and Down lines can help identify upward and downward  trends, and how to calculate and use the Aroon Indicator. Includes examples and  parameters.",keywords:["Aroon Indicator","Aroon Up and Down","Aroon Indicator explanation","trend indicator","technical analysis","Aroon Indicator usage","Aroon Indicator examples","Aroon Indicator parameters","Aroon Indicator calculation"]},sidebar:"tutorialSidebar",previous:{title:"adx",permalink:"/platform/reference/technical/adx"},next:{title:"atr",permalink:"/platform/reference/technical/atr"}},u={},h=[{value:"Examples",id:"examples",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2}];function p(e){const t={code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o.A,{title:"technical/aroon - Reference | OpenBB Platform Docs"}),"\n","\n",(0,r.jsx)(t.p,{children:"Calculate the Aroon Indicator."}),"\n",(0,r.jsx)(t.p,{children:'The word aroon is Sanskrit for "dawn\'s early light." The Aroon\nindicator attempts to show when a new trend is dawning. The indicator consists\nof two lines (Up and Down) that measure how long it has been since the highest\nhigh/lowest low has occurred within an n period range.'}),"\n",(0,r.jsx)(t.p,{children:"When the Aroon Up is staying between 70 and 100 then it indicates an upward trend.\nWhen the Aroon Down is staying between 70 and 100 then it indicates an downward trend.\nA strong upward trend is indicated when the Aroon Up is above 70 while the Aroon Down is below 30.\nLikewise, a strong downward trend is indicated when the Aroon Down is above 70 while\nthe Aroon Up is below 30. Also look for crossovers. When the Aroon Down crosses above\nthe Aroon Up, it indicates a weakening of the upward trend (and vice versa)."}),"\n",(0,r.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:"from openbb import obb\n# Get the Chande Momentum Oscillator.\nstock_data = obb.equity.price.historical(symbol='TSLA', start_date='2023-01-01', provider='fmp')\naaron_data = obb.technical.aroon(data=stock_data.results, length=25, scalar=100)\nobb.technical.aroon(length=2, data=[{'date': '2023-01-02', 'open': 110.0, 'high': 120.0, 'low': 100.0, 'close': 115.0, 'volume': 10000.0}, {'date': '2023-01-03', 'open': 165.0, 'high': 180.0, 'low': 150.0, 'close': 172.5, 'volume': 15000.0}, {'date': '2023-01-04', 'open': 146.67, 'high': 160.0, 'low': 133.33, 'close': 153.33, 'volume': 13333.33}, {'date': '2023-01-05', 'open': 137.5, 'high': 150.0, 'low': 125.0, 'close': 143.75, 'volume': 12500.0}, {'date': '2023-01-06', 'open': 132.0, 'high': 144.0, 'low': 120.0, 'close': 138.0, 'volume': 12000.0}])\n"})}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsx)(s.A,{children:(0,r.jsx)(l.A,{value:"standard",label:"standard",children:(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"}),(0,r.jsx)(t.th,{children:"Default"}),(0,r.jsx)(t.th,{children:"Optional"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"data"}),(0,r.jsx)(t.td,{children:"List[Data]"}),(0,r.jsx)(t.td,{children:"List of data to be used for the calculation."}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"False"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"index"}),(0,r.jsx)(t.td,{children:"str, optional"}),(0,r.jsxs)(t.td,{children:["Index column name to use with ",(0,r.jsx)(t.code,{children:"data"}),', by default "date".']}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"False"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"length"}),(0,r.jsx)(t.td,{children:"int, optional"}),(0,r.jsx)(t.td,{children:"Number of periods to be used for the calculation, by default 25."}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"False"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"scalar"}),(0,r.jsx)(t.td,{children:"float, optional"}),(0,r.jsx)(t.td,{children:"Scalar to be used for the calculation, by default 100."}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"False"})]})]})]})})}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",metastring:"wordwrap",children:"OBBject\n    List\n"})})]})}function b(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},19365:(e,t,n)=>{n.d(t,{A:()=>s});n(96540);var r=n(34164);const a={tabItem:"tabItem_Ymn6"};var o=n(74848);function s(e){let{children:t,hidden:n,className:s}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,s),hidden:n,children:t})}},94331:(e,t,n)=>{n.d(t,{A:()=>o});n(96540);var r=n(5260),a=n(74848);function o(e){let{title:t}=e;return(0,a.jsx)(r.A,{children:(0,a.jsx)("title",{children:t})})}},18228:(e,t,n)=>{n.d(t,{A:()=>y});var r=n(56347),a=n(23104),o=n(96540),s=n(205),l=n(57485),i=n(31682),d=n(89466);function c(e){return function(e){return o.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,o.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}function u(e){const{values:t,children:n}=e;return(0,o.useMemo)((()=>{const e=t??c(n);return function(e){const t=(0,i.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function h(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:n}=e;const a=(0,r.W6)(),s=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l.aZ)(s),(0,o.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(a.location.search);t.set(s,e),a.replace({...a.location,search:t.toString()})}),[s,a])]}function b(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,a=u(e),[l,i]=(0,o.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:a}))),[c,b]=p({queryString:n,groupId:r}),[f,m]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,a]=(0,d.Dv)(n);return[r,(0,o.useCallback)((e=>{n&&a.set(e)}),[n,a])]}({groupId:r}),x=(()=>{const e=c??f;return h({value:e,tabValues:a})?e:null})();(0,s.A)((()=>{x&&i(x)}),[x]);return{selectedValue:l,selectValue:(0,o.useCallback)((e=>{if(!h({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);i(e),b(e),m(e)}),[b,m,a]),tabValues:a}}var f=n(92303),m=n(34164);const x={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};var w=n(74848);function v(e){let{className:t,block:n,selectedValue:o,selectValue:s,tabValues:l}=e;const i=[],{blockElementScrollPositionUntilNextRender:d}=(0,a.a_)(),{pathname:c}=(0,r.zy)(),u=e=>{const t=e.currentTarget,n=i.indexOf(t),r=l[n].value;r!==o&&(d(t),s(r))},h=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=i.indexOf(e.currentTarget)+1;t=i[n]??i[0];break}case"ArrowLeft":{const n=i.indexOf(e.currentTarget)-1;t=i[n]??i[i.length-1];break}}t?.focus()};return(0,w.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,m.A)("_group-tab list-none -ml-7 my-6 overflow-auto"),children:l.map((e=>{let{value:t,label:n,attributes:r}=e;return(0,w.jsx)("li",{role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,ref:e=>i.push(e),onKeyDown:h,onClick:u,...r,className:(0,m.A)("font-bold tracking-widest w-fit px-3 inline-flex py-1 uppercase border-b text-lg cursor-pointer",x.tabItem,r?.className,{"border-b-2 pointer-events-none":o===t,"border-b-2 text-[#669dcb] border-[#669dcb]":o===t&&c.startsWith("/workspace"),"border-b-2 text-[#FB923C] border-[#FB923C]":o===t&&c.startsWith("/sdk"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":o!==t&&c.startsWith("/sdk"),"border-b-2 text-[#FB923C] border-[#FB923C]":o===t&&c.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":o!==t&&c.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#abd2f1] hover:border-[#abd2f1]":o!==t&&c.startsWith("/workspace")}),children:n??t},t)}))})}function g(e){let{lazy:t,children:n,selectedValue:r}=e;if(n=Array.isArray(n)?n:[n],t){const e=n.find((e=>e.props.value===r));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return(0,w.jsx)("div",{className:"margin-top--md",children:n.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function j(e){const t=b(e);return(0,w.jsxs)("div",{className:(0,m.A)("tabs-container",x.tabList),children:[(0,w.jsx)(v,{...e,...t}),(0,w.jsx)(g,{...e,...t})]})}function y(e){const t=(0,f.A)();return(0,w.jsx)(j,{...e},String(t))}},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>l});var r=n(96540);const a={},o=r.createContext(a);function s(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);