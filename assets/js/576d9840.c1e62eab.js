"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[21494],{92585:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>p,frontMatter:()=>l,metadata:()=>u,toc:()=>h});var n=r(74848),a=r(28453),s=r(94331),o=r(18228),i=r(19365);const l={title:"show",description:"Detailed documentation of OpenBB finance's 'show' and 'show_chart' functions. Learn how to effectively use these functions in your data analysis with clear instructions and direct source code links.",keywords:["OpenBB finance","Documentation","Programming","show function","show_chart function","Source Code"]},c=void 0,u={id:"sdk/reference/forecast/show",title:"show",description:"Detailed documentation of OpenBB finance's 'show' and 'show_chart' functions. Learn how to effectively use these functions in your data analysis with clear instructions and direct source code links.",source:"@site/content/sdk/reference/forecast/show.md",sourceDirName:"sdk/reference/forecast",slug:"/sdk/reference/forecast/show",permalink:"/sdk/reference/forecast/show",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/sdk/reference/forecast/show.md",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1719309708e3,frontMatter:{title:"show",description:"Detailed documentation of OpenBB finance's 'show' and 'show_chart' functions. Learn how to effectively use these functions in your data analysis with clear instructions and direct source code links.",keywords:["OpenBB finance","Documentation","Programming","show function","show_chart function","Source Code"]},sidebar:"tutorialSidebar",previous:{title:"seasonalnaive",permalink:"/sdk/reference/forecast/seasonalnaive"},next:{title:"signal",permalink:"/sdk/reference/forecast/signal"}},d={},h=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Parameters",id:"parameters-1",level:2},{value:"Returns",id:"returns-1",level:2}];function f(e){const t={a:"a",code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.A,{title:"forecast.show - Reference | OpenBB SDK Docs"}),"\n","\n",(0,n.jsxs)(o.A,{children:[(0,n.jsxs)(i.A,{value:"model",label:"Model",default:!0,children:[(0,n.jsx)(t.p,{children:"None"}),(0,n.jsxs)(t.p,{children:["Source Code: [",(0,n.jsx)(t.a,{href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/forecast/forecast_view.py#L227",children:"link"}),"]"]}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:'openbb.forecast.show(data: pd.DataFrame, limit: int = 15, limit_col: int = 10, name: str = "", export: str = "")\n'})}),(0,n.jsx)(t.hr,{}),(0,n.jsx)(t.h2,{id:"parameters",children:"Parameters"}),(0,n.jsx)(t.p,{children:"This function does not take any parameters."}),(0,n.jsx)(t.hr,{}),(0,n.jsx)(t.h2,{id:"returns",children:"Returns"}),(0,n.jsx)(t.p,{children:"This function does not return anything"}),(0,n.jsx)(t.hr,{})]}),(0,n.jsxs)(i.A,{value:"view",label:"Chart",children:[(0,n.jsx)(t.p,{children:"None"}),(0,n.jsxs)(t.p,{children:["Source Code: [",(0,n.jsx)(t.a,{href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/forecast/forecast_view.py#L227",children:"link"}),"]"]}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:'openbb.forecast.show_chart(data: pd.DataFrame, limit: int = 15, limit_col: int = 10, name: str = "", export: str = "")\n'})}),(0,n.jsx)(t.hr,{}),(0,n.jsx)(t.h2,{id:"parameters-1",children:"Parameters"}),(0,n.jsx)(t.p,{children:"This function does not take any parameters."}),(0,n.jsx)(t.hr,{}),(0,n.jsx)(t.h2,{id:"returns-1",children:"Returns"}),(0,n.jsx)(t.p,{children:"This function does not return anything"}),(0,n.jsx)(t.hr,{})]})]})]})}function p(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(f,{...e})}):f(e)}},19365:(e,t,r)=>{r.d(t,{A:()=>o});r(96540);var n=r(34164);const a={tabItem:"tabItem_Ymn6"};var s=r(74848);function o(e){let{children:t,hidden:r,className:o}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,n.A)(a.tabItem,o),hidden:r,children:t})}},94331:(e,t,r)=>{r.d(t,{A:()=>s});r(96540);var n=r(5260),a=r(74848);function s(e){let{title:t}=e;return(0,a.jsx)(n.A,{children:(0,a.jsx)("title",{children:t})})}},18228:(e,t,r)=>{r.d(t,{A:()=>j});var n=r(96540),a=r(34164),s=r(23104),o=r(56347),i=r(205),l=r(57485),c=r(31682),u=r(70679);function d(e){return function(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:a}}=e;return{value:t,label:r,attributes:n,default:a}}))}function h(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??d(r);return function(e){const t=(0,c.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function f(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:r}=e;const a=(0,o.W6)(),s=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,l.aZ)(s),(0,n.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(a.location.search);t.set(s,e),a.replace({...a.location,search:t.toString()})}),[s,a])]}function m(e){const{defaultValue:t,queryString:r=!1,groupId:a}=e,s=h(e),[o,l]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!f({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:s}))),[c,d]=p({queryString:r,groupId:a}),[m,b]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,s]=(0,u.Dv)(r);return[a,(0,n.useCallback)((e=>{r&&s.set(e)}),[r,s])]}({groupId:a}),v=(()=>{const e=c??m;return f({value:e,tabValues:s})?e:null})();(0,i.A)((()=>{v&&l(v)}),[v]);return{selectedValue:o,selectValue:(0,n.useCallback)((e=>{if(!f({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),b(e)}),[d,b,s]),tabValues:s}}var b=r(92303);const v={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};var x=r(74848);function w(e){let{className:t,block:r,selectedValue:n,selectValue:i,tabValues:l}=e;const c=[],{blockElementScrollPositionUntilNextRender:u}=(0,s.a_)(),{pathname:d}=(0,o.zy)(),h=e=>{const t=e.currentTarget,r=c.indexOf(t),a=l[r].value;a!==n&&(u(t),i(a))},f=e=>{let t=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{const r=c.indexOf(e.currentTarget)+1;t=c[r]??c[0];break}case"ArrowLeft":{const r=c.indexOf(e.currentTarget)-1;t=c[r]??c[c.length-1];break}}t?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("_group-tab list-none -ml-7 my-6 overflow-auto"),children:l.map((e=>{let{value:t,label:r,attributes:s}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>c.push(e),onKeyDown:f,onClick:h,...s,className:(0,a.A)("font-bold tracking-widest w-fit px-3 inline-flex py-1 uppercase border-b text-lg cursor-pointer",v.tabItem,s?.className,{"border-b-2 pointer-events-none":n===t,"border-b-2 text-[#669dcb] border-[#669dcb]":n===t&&d.startsWith("/terminal"),"border-b-2 text-[#FB923C] border-[#FB923C]":n===t&&d.startsWith("/sdk"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":n!==t&&d.startsWith("/sdk"),"border-b-2 text-[#FB923C] border-[#FB923C]":n===t&&d.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":n!==t&&d.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#abd2f1] hover:border-[#abd2f1]":n!==t&&d.startsWith("/terminal")}),children:r??t},t)}))})}function g(e){let{lazy:t,children:r,selectedValue:a}=e;if(r=Array.isArray(r)?r:[r],t){const e=r.find((e=>e.props.value===a));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:r.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function y(e){const t=m(e);return(0,x.jsxs)("div",{className:(0,a.A)("tabs-container",v.tabList),children:[(0,x.jsx)(w,{...e,...t}),(0,x.jsx)(g,{...e,...t})]})}function j(e){const t=(0,b.A)();return(0,x.jsx)(y,{...e},String(t))}},28453:(e,t,r)=>{r.d(t,{R:()=>o,x:()=>i});var n=r(96540);const a={},s=n.createContext(a);function o(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);