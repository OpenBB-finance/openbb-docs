"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[18219],{17314:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>u,contentTitle:()=>c,default:()=>p,frontMatter:()=>i,metadata:()=>d,toc:()=>h});var t=r(74848),a=r(28453),s=r(94331),l=r(18228),o=r(19365);const i={title:"kc",description:"Learn how to use Keltner Channels, volatility-based bands used to determine  the direction of a trend. This documentation covers the Keltner Channels calculation,  breakout signals, and parameters like the moving average mode, length, scalar value,  and offset.",keywords:["Keltner Channels","volatility-based bands","direction of a trend","average true range","ATR","breakout signals","Keltner Channels calculation","moving average mode","length of Keltner Channels","scalar value for Keltner Channels","offset for Keltner Channels","Keltner Channels data"]},c=void 0,d={id:"platform/reference/technical/kc",title:"kc",description:"Learn how to use Keltner Channels, volatility-based bands used to determine  the direction of a trend. This documentation covers the Keltner Channels calculation,  breakout signals, and parameters like the moving average mode, length, scalar value,  and offset.",source:"@site/content/platform/reference/technical/kc.md",sourceDirName:"platform/reference/technical",slug:"/platform/reference/technical/kc",permalink:"/platform/reference/technical/kc",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/platform/reference/technical/kc.md",tags:[],version:"current",frontMatter:{title:"kc",description:"Learn how to use Keltner Channels, volatility-based bands used to determine  the direction of a trend. This documentation covers the Keltner Channels calculation,  breakout signals, and parameters like the moving average mode, length, scalar value,  and offset.",keywords:["Keltner Channels","volatility-based bands","direction of a trend","average true range","ATR","breakout signals","Keltner Channels calculation","moving average mode","length of Keltner Channels","scalar value for Keltner Channels","offset for Keltner Channels","Keltner Channels data"]},sidebar:"tutorialSidebar",previous:{title:"ichimoku",permalink:"/platform/reference/technical/ichimoku"},next:{title:"macd",permalink:"/platform/reference/technical/macd"}},u={},h=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2}];function f(e){const n={code:"code",em:"em",h2:"h2",hr:"hr",p:"p",strong:"strong",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.A,{title:"technical/kc - Reference | OpenBB Platform Docs"}),"\n","\n",(0,t.jsx)(n.p,{children:"Calculate the Keltner Channels."}),"\n",(0,t.jsx)(n.p,{children:"Keltner Channels are volatility-based bands that are placed\non either side of an asset's price and can aid in determining\nthe direction of a trend.The Keltner channel uses the average\ntrue range (ATR) or volatility, with breaks above or below the top\nand bottom barriers signaling a continuation."}),"\n",(0,t.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsx)(l.A,{children:(0,t.jsxs)(o.A,{value:"standard",label:"standard",children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"data"})}),": ",(0,t.jsx)(n.code,{children:"list[openbb_core.provider.abstract.data.Data]"})]}),(0,t.jsx)(n.p,{children:"The data to use for the Keltner Channels calculation."}),(0,t.jsxs)(n.p,{children:["\u2022 ",(0,t.jsx)(n.em,{children:"Optional:"})," ",(0,t.jsx)(n.code,{children:"False"})]}),(0,t.jsx)(n.hr,{}),(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"index"})}),": ",(0,t.jsx)(n.code,{children:"str"})]}),(0,t.jsxs)(n.p,{children:["Index column name to use with ",(0,t.jsx)(n.code,{children:"data"}),", by default 'date'"]}),(0,t.jsxs)(n.p,{children:["\u2022 ",(0,t.jsx)(n.em,{children:"Default:"})," ",(0,t.jsx)(n.code,{children:"date"})]}),(0,t.jsxs)(n.p,{children:["\u2022 ",(0,t.jsx)(n.em,{children:"Optional:"})," ",(0,t.jsx)(n.code,{children:"True"})]}),(0,t.jsx)(n.hr,{}),(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"length"})}),": ",(0,t.jsx)(n.code,{children:"int"})]}),(0,t.jsx)(n.p,{children:"The length of the Keltner Channels, by default 20"}),(0,t.jsxs)(n.p,{children:["\u2022 ",(0,t.jsx)(n.em,{children:"Default:"})," ",(0,t.jsx)(n.code,{children:"20"})]}),(0,t.jsxs)(n.p,{children:["\u2022 ",(0,t.jsx)(n.em,{children:"Optional:"})," ",(0,t.jsx)(n.code,{children:"True"})]}),(0,t.jsx)(n.hr,{}),(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"scalar"})}),": ",(0,t.jsx)(n.code,{children:"float"})]}),(0,t.jsx)(n.p,{children:"The scalar to use for the Keltner Channels, by default 20"}),(0,t.jsxs)(n.p,{children:["\u2022 ",(0,t.jsx)(n.em,{children:"Default:"})," ",(0,t.jsx)(n.code,{children:"20"})]}),(0,t.jsxs)(n.p,{children:["\u2022 ",(0,t.jsx)(n.em,{children:"Optional:"})," ",(0,t.jsx)(n.code,{children:"True"})]}),(0,t.jsx)(n.hr,{}),(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"mamode"})}),": ",(0,t.jsx)(n.code,{children:"Literal['ema', 'sma', 'wma', 'hma', 'zlma']"})]}),(0,t.jsx)(n.p,{children:"The moving average mode to use for the Keltner Channels, by default 'ema'"}),(0,t.jsxs)(n.p,{children:["\u2022 ",(0,t.jsx)(n.em,{children:"Default:"})," ",(0,t.jsx)(n.code,{children:"ema"})]}),(0,t.jsxs)(n.p,{children:["\u2022 ",(0,t.jsx)(n.em,{children:"Optional:"})," ",(0,t.jsx)(n.code,{children:"True"})]}),(0,t.jsx)(n.hr,{}),(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"offset"})}),": ",(0,t.jsx)(n.code,{children:"int"})]}),(0,t.jsx)(n.p,{children:"The offset to use for the Keltner Channels, by default 0"}),(0,t.jsxs)(n.p,{children:["\u2022 ",(0,t.jsx)(n.em,{children:"Optional:"})," ",(0,t.jsx)(n.code,{children:"True"})]})]})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"results"})}),": ",(0,t.jsx)(n.code,{children:"list[Data]"})]}),"\n",(0,t.jsx)(n.p,{children:"Serializable results."}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"provider"})}),": ",(0,t.jsx)(n.code,{children:"None"})]}),"\n",(0,t.jsx)(n.p,{children:"Provider name."}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"warnings"})}),": ",(0,t.jsx)(n.code,{children:"Optional[list[Warning_]]"})]}),"\n",(0,t.jsx)(n.p,{children:"list of warnings."}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"chart"})}),": ",(0,t.jsx)(n.code,{children:"Optional[Chart]"})]}),"\n",(0,t.jsx)(n.p,{children:"Chart object."}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"extra"})}),": ",(0,t.jsx)(n.code,{children:"dict[str, Any]"})]}),"\n",(0,t.jsx)(n.p,{children:"Extra info."}),"\n",(0,t.jsx)(n.hr,{})]})}function p(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(f,{...e})}):f(e)}},19365:(e,n,r)=>{r.d(n,{A:()=>l});r(96540);var t=r(34164);const a={tabItem:"tabItem_Ymn6"};var s=r(74848);function l(e){let{children:n,hidden:r,className:l}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,t.A)(a.tabItem,l),hidden:r,children:n})}},94331:(e,n,r)=>{r.d(n,{A:()=>s});r(96540);var t=r(5260),a=r(74848);function s(e){let{title:n}=e;return(0,a.jsx)(t.A,{children:(0,a.jsx)("title",{children:n})})}},18228:(e,n,r)=>{r.d(n,{A:()=>k});var t=r(56347),a=r(23104),s=r(96540),l=r(205),o=r(57485),i=r(31682),c=r(89466);function d(e){return function(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:n,label:r,attributes:t,default:a}}=e;return{value:n,label:r,attributes:t,default:a}}))}function u(e){const{values:n,children:r}=e;return(0,s.useMemo)((()=>{const e=n??d(r);return function(e){const n=(0,i.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function h(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function f(e){let{queryString:n=!1,groupId:r}=e;const a=(0,t.W6)(),l=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,o.aZ)(l),(0,s.useCallback)((e=>{if(!l)return;const n=new URLSearchParams(a.location.search);n.set(l,e),a.replace({...a.location,search:n.toString()})}),[l,a])]}function p(e){const{defaultValue:n,queryString:r=!1,groupId:t}=e,a=u(e),[o,i]=(0,s.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=r.find((e=>e.default))??r[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:a}))),[d,p]=f({queryString:r,groupId:t}),[x,m]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[t,a]=(0,c.Dv)(r);return[t,(0,s.useCallback)((e=>{r&&a.set(e)}),[r,a])]}({groupId:t}),b=(()=>{const e=d??x;return h({value:e,tabValues:a})?e:null})();(0,l.A)((()=>{b&&i(b)}),[b]);return{selectedValue:o,selectValue:(0,s.useCallback)((e=>{if(!h({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);i(e),p(e),m(e)}),[p,m,a]),tabValues:a}}var x=r(92303),m=r(34164);const b={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};var j=r(74848);function v(e){let{className:n,block:r,selectedValue:s,selectValue:l,tabValues:o}=e;const i=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.a_)(),{pathname:d}=(0,t.zy)(),u=e=>{const n=e.currentTarget,r=i.indexOf(n),t=o[r].value;t!==s&&(c(n),l(t))},h=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const r=i.indexOf(e.currentTarget)+1;n=i[r]??i[0];break}case"ArrowLeft":{const r=i.indexOf(e.currentTarget)-1;n=i[r]??i[i.length-1];break}}n?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,m.A)("_group-tab list-none -ml-7 my-6 overflow-auto"),children:o.map((e=>{let{value:n,label:r,attributes:t}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,ref:e=>i.push(e),onKeyDown:h,onClick:u,...t,className:(0,m.A)("font-bold tracking-widest w-fit px-3 inline-flex py-1 uppercase border-b text-lg cursor-pointer",b.tabItem,t?.className,{"border-b-2 pointer-events-none":s===n,"border-b-2 text-[#669dcb] border-[#669dcb]":s===n&&d.startsWith("/workspace"),"border-b-2 text-[#FB923C] border-[#FB923C]":s===n&&d.startsWith("/sdk"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":s!==n&&d.startsWith("/sdk"),"border-b-2 text-[#FB923C] border-[#FB923C]":s===n&&d.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":s!==n&&d.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#abd2f1] hover:border-[#abd2f1]":s!==n&&d.startsWith("/workspace")}),children:r??n},n)}))})}function g(e){let{lazy:n,children:r,selectedValue:t}=e;if(r=Array.isArray(r)?r:[r],n){const e=r.find((e=>e.props.value===t));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:r.map(((e,n)=>(0,s.cloneElement)(e,{key:n,hidden:e.props.value!==t})))})}function y(e){const n=p(e);return(0,j.jsxs)("div",{className:(0,m.A)("tabs-container",b.tabList),children:[(0,j.jsx)(v,{...e,...n}),(0,j.jsx)(g,{...e,...n})]})}function k(e){const n=(0,x.A)();return(0,j.jsx)(y,{...e},String(n))}},28453:(e,n,r)=>{r.d(n,{R:()=>l,x:()=>o});var t=r(96540);const a={},s=t.createContext(a);function l(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);