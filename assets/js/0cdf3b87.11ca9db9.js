"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[78454],{45825:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>u,contentTitle:()=>l,default:()=>b,frontMatter:()=>c,metadata:()=>d,toc:()=>h});var n=t(74848),a=t(28453),i=t(94331),s=t(18228),o=t(19365);const c={title:"basic",description:"This documentation page provides insights into how to use basic functions of the OpenBB terminal for cryptocurrency tracking and analysis. It also provides source code links and parameters information for two of its functions - 'coinpaprika_model' and 'coinpaprika_view', dealing with basic information retrieval and chart generation for cryptocurrencies respectively.",keywords:["OpenBB terminal","cryptocurrency analysis","coinpaprika_model","basic coin information","coinpaprika_view","cryptocurrency chart generation","cryptocurrency tracking","cryptocurrency parameters","BTC"]},l=void 0,d={id:"sdk/reference/crypto/dd/basic",title:"basic",description:"This documentation page provides insights into how to use basic functions of the OpenBB terminal for cryptocurrency tracking and analysis. It also provides source code links and parameters information for two of its functions - 'coinpaprika_model' and 'coinpaprika_view', dealing with basic information retrieval and chart generation for cryptocurrencies respectively.",source:"@site/content/sdk/reference/crypto/dd/basic.md",sourceDirName:"sdk/reference/crypto/dd",slug:"/sdk/reference/crypto/dd/basic",permalink:"/sdk/reference/crypto/dd/basic",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/sdk/reference/crypto/dd/basic.md",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1719247347e3,frontMatter:{title:"basic",description:"This documentation page provides insights into how to use basic functions of the OpenBB terminal for cryptocurrency tracking and analysis. It also provides source code links and parameters information for two of its functions - 'coinpaprika_model' and 'coinpaprika_view', dealing with basic information retrieval and chart generation for cryptocurrencies respectively.",keywords:["OpenBB terminal","cryptocurrency analysis","coinpaprika_model","basic coin information","coinpaprika_view","cryptocurrency chart generation","cryptocurrency tracking","cryptocurrency parameters","BTC"]},sidebar:"tutorialSidebar",previous:{title:"balance",permalink:"/sdk/reference/crypto/dd/balance"},next:{title:"binance_available_quotes_for_each_coin",permalink:"/sdk/reference/crypto/dd/binance_available_quotes_for_each_coin"}},u={},h=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Parameters",id:"parameters-1",level:2},{value:"Returns",id:"returns-1",level:2}];function p(e){const r={a:"a",code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.A,{title:"crypto.dd.basic - Reference | OpenBB SDK Docs"}),"\n","\n",(0,n.jsxs)(s.A,{children:[(0,n.jsxs)(o.A,{value:"model",label:"Model",default:!0,children:[(0,n.jsx)(r.p,{children:"Basic coin information [Source: CoinPaprika]"}),(0,n.jsxs)(r.p,{children:["Source Code: [",(0,n.jsx)(r.a,{href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/due_diligence/coinpaprika_model.py#L379",children:"link"}),"]"]}),(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:'openbb.crypto.dd.basic(symbol: str = "BTC")\n'})}),(0,n.jsx)(r.hr,{}),(0,n.jsx)(r.h2,{id:"parameters",children:"Parameters"}),(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Name"}),(0,n.jsx)(r.th,{children:"Type"}),(0,n.jsx)(r.th,{children:"Description"}),(0,n.jsx)(r.th,{children:"Default"}),(0,n.jsx)(r.th,{children:"Optional"})]})}),(0,n.jsx)(r.tbody,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"symbol"}),(0,n.jsx)(r.td,{children:"str"}),(0,n.jsx)(r.td,{children:"Cryptocurrency symbol (e.g. BTC)"}),(0,n.jsx)(r.td,{children:"BTC"}),(0,n.jsx)(r.td,{children:"True"})]})})]}),(0,n.jsx)(r.hr,{}),(0,n.jsx)(r.h2,{id:"returns",children:"Returns"}),(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Type"}),(0,n.jsx)(r.th,{children:"Description"})]})}),(0,n.jsx)(r.tbody,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"pd.DataFrame"}),(0,n.jsx)(r.td,{children:"Metric, Value"})]})})]}),(0,n.jsx)(r.hr,{})]}),(0,n.jsxs)(o.A,{value:"view",label:"Chart",children:[(0,n.jsx)(r.p,{children:"Prints table showing basic information for coin. Like:"}),(0,n.jsxs)(r.p,{children:["Source Code: [",(0,n.jsx)(r.a,{href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/due_diligence/coinpaprika_view.py#L325",children:"link"}),"]"]}),(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:'openbb.crypto.dd.basic_chart(symbol: str = "BTC", export: str = "")\n'})}),(0,n.jsx)(r.hr,{}),(0,n.jsx)(r.h2,{id:"parameters-1",children:"Parameters"}),(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Name"}),(0,n.jsx)(r.th,{children:"Type"}),(0,n.jsx)(r.th,{children:"Description"}),(0,n.jsx)(r.th,{children:"Default"}),(0,n.jsx)(r.th,{children:"Optional"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"symbol"}),(0,n.jsx)(r.td,{children:"str"}),(0,n.jsx)(r.td,{children:"Cryptocurrency symbol (e.g. BTC)"}),(0,n.jsx)(r.td,{children:"BTC"}),(0,n.jsx)(r.td,{children:"True"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"export"}),(0,n.jsx)(r.td,{children:"str"}),(0,n.jsx)(r.td,{children:"Export dataframe data to csv,json,xlsx"}),(0,n.jsx)(r.td,{}),(0,n.jsx)(r.td,{children:"True"})]})]})]}),(0,n.jsx)(r.hr,{}),(0,n.jsx)(r.h2,{id:"returns-1",children:"Returns"}),(0,n.jsx)(r.p,{children:"This function does not return anything"}),(0,n.jsx)(r.hr,{})]})]})]})}function b(e={}){const{wrapper:r}={...(0,a.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},19365:(e,r,t)=>{t.d(r,{A:()=>s});t(96540);var n=t(34164);const a={tabItem:"tabItem_Ymn6"};var i=t(74848);function s(e){let{children:r,hidden:t,className:s}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,n.A)(a.tabItem,s),hidden:t,children:r})}},94331:(e,r,t)=>{t.d(r,{A:()=>i});t(96540);var n=t(5260),a=t(74848);function i(e){let{title:r}=e;return(0,a.jsx)(n.A,{children:(0,a.jsx)("title",{children:r})})}},18228:(e,r,t)=>{t.d(r,{A:()=>k});var n=t(96540),a=t(34164),i=t(23104),s=t(56347),o=t(205),c=t(57485),l=t(31682),d=t(70679);function u(e){return function(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:r,label:t,attributes:n,default:a}}=e;return{value:r,label:t,attributes:n,default:a}}))}function h(e){const{values:r,children:t}=e;return(0,n.useMemo)((()=>{const e=r??u(t);return function(e){const r=(0,l.X)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,t])}function p(e){let{value:r,tabValues:t}=e;return t.some((e=>e.value===r))}function b(e){let{queryString:r=!1,groupId:t}=e;const a=(0,s.W6)(),i=function(e){let{queryString:r=!1,groupId:t}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:r,groupId:t});return[(0,c.aZ)(i),(0,n.useCallback)((e=>{if(!i)return;const r=new URLSearchParams(a.location.search);r.set(i,e),a.replace({...a.location,search:r.toString()})}),[i,a])]}function f(e){const{defaultValue:r,queryString:t=!1,groupId:a}=e,i=h(e),[s,c]=(0,n.useState)((()=>function(e){let{defaultValue:r,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!p({value:r,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const n=t.find((e=>e.default))??t[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:r,tabValues:i}))),[l,u]=b({queryString:t,groupId:a}),[f,m]=function(e){let{groupId:r}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(r),[a,i]=(0,d.Dv)(t);return[a,(0,n.useCallback)((e=>{t&&i.set(e)}),[t,i])]}({groupId:a}),x=(()=>{const e=l??f;return p({value:e,tabValues:i})?e:null})();(0,o.A)((()=>{x&&c(x)}),[x]);return{selectedValue:s,selectValue:(0,n.useCallback)((e=>{if(!p({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);c(e),u(e),m(e)}),[u,m,i]),tabValues:i}}var m=t(92303);const x={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};var y=t(74848);function v(e){let{className:r,block:t,selectedValue:n,selectValue:o,tabValues:c}=e;const l=[],{blockElementScrollPositionUntilNextRender:d}=(0,i.a_)(),{pathname:u}=(0,s.zy)(),h=e=>{const r=e.currentTarget,t=l.indexOf(r),a=c[t].value;a!==n&&(d(r),o(a))},p=e=>{let r=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;r=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;r=l[t]??l[l.length-1];break}}r?.focus()};return(0,y.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("_group-tab list-none -ml-7 my-6 overflow-auto"),children:c.map((e=>{let{value:r,label:t,attributes:i}=e;return(0,y.jsx)("li",{role:"tab",tabIndex:n===r?0:-1,"aria-selected":n===r,ref:e=>l.push(e),onKeyDown:p,onClick:h,...i,className:(0,a.A)("font-bold tracking-widest w-fit px-3 inline-flex py-1 uppercase border-b text-lg cursor-pointer",x.tabItem,i?.className,{"border-b-2 pointer-events-none":n===r,"border-b-2 text-[#669dcb] border-[#669dcb]":n===r&&u.startsWith("/terminal"),"border-b-2 text-[#FB923C] border-[#FB923C]":n===r&&u.startsWith("/sdk"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":n!==r&&u.startsWith("/sdk"),"border-b-2 text-[#FB923C] border-[#FB923C]":n===r&&u.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":n!==r&&u.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#abd2f1] hover:border-[#abd2f1]":n!==r&&u.startsWith("/terminal")}),children:t??r},r)}))})}function j(e){let{lazy:r,children:t,selectedValue:a}=e;if(t=Array.isArray(t)?t:[t],r){const e=t.find((e=>e.props.value===a));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,y.jsx)("div",{className:"margin-top--md",children:t.map(((e,r)=>(0,n.cloneElement)(e,{key:r,hidden:e.props.value!==a})))})}function g(e){const r=f(e);return(0,y.jsxs)("div",{className:(0,a.A)("tabs-container",x.tabList),children:[(0,y.jsx)(v,{...e,...r}),(0,y.jsx)(j,{...e,...r})]})}function k(e){const r=(0,m.A)();return(0,y.jsx)(g,{...e},String(r))}},28453:(e,r,t)=>{t.d(r,{R:()=>s,x:()=>o});var n=t(96540);const a={},i=n.createContext(a);function s(e){const r=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),n.createElement(i.Provider,{value:r},e.children)}}}]);