"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[38942],{43227:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>h,contentTitle:()=>a,default:()=>p,frontMatter:()=>l,metadata:()=>d,toc:()=>u});var t=n(74848),s=n(28453),c=n(94331),i=n(18228),o=n(19365);const l={title:"share_price_index",description:"Get the Share Price Index by country from the OECD Short-Term Economics Statistics",keywords:["economy","share_price_index"]},a=void 0,d={id:"platform/reference/economy/share_price_index",title:"share_price_index",description:"Get the Share Price Index by country from the OECD Short-Term Economics Statistics",source:"@site/content/platform/reference/economy/share_price_index.md",sourceDirName:"platform/reference/economy",slug:"/platform/reference/economy/share_price_index",permalink:"/platform/reference/economy/share_price_index",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/platform/reference/economy/share_price_index.md",tags:[],version:"current",frontMatter:{title:"share_price_index",description:"Get the Share Price Index by country from the OECD Short-Term Economics Statistics",keywords:["economy","share_price_index"]},sidebar:"tutorialSidebar",previous:{title:"risk_premium",permalink:"/platform/reference/economy/risk_premium"},next:{title:"short_term_interest_rate",permalink:"/platform/reference/economy/short_term_interest_rate"}},h={},u=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Data",id:"data",level:2}];function x(e){const r={code:"code",em:"em",h2:"h2",hr:"hr",p:"p",strong:"strong",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(c.A,{title:"economy/share_price_index - Reference | OpenBB Platform Docs"}),"\n","\n",(0,t.jsx)(r.p,{children:"Get the Share Price Index by country from the OECD Short-Term Economics Statistics."}),"\n",(0,t.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(i.A,{children:[(0,t.jsxs)(o.A,{value:"standard",label:"standard",children:[(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.code,{children:"country"})}),": ",(0,t.jsx)(r.code,{children:"Union[str, list[str]]"})]}),(0,t.jsx)(r.p,{children:"The country to get data. Multiple items allowed for provider(s): oecd."}),(0,t.jsxs)(r.p,{children:["\u2022 ",(0,t.jsx)(r.em,{children:"Default:"})," ",(0,t.jsx)(r.code,{children:"united_states"})]}),(0,t.jsxs)(r.p,{children:["\u2022 ",(0,t.jsx)(r.em,{children:"Optional:"})," ",(0,t.jsx)(r.code,{children:"True"})]}),(0,t.jsx)(r.hr,{}),(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.code,{children:"frequency"})}),": ",(0,t.jsx)(r.code,{children:"Literal['monthly', 'quarter', 'annual']"})]}),(0,t.jsx)(r.p,{children:"The frequency of the data."}),(0,t.jsxs)(r.p,{children:["\u2022 ",(0,t.jsx)(r.em,{children:"Default:"})," ",(0,t.jsx)(r.code,{children:"monthly"})]}),(0,t.jsxs)(r.p,{children:["\u2022 ",(0,t.jsx)(r.em,{children:"Optional:"})," ",(0,t.jsx)(r.code,{children:"True"})]}),(0,t.jsx)(r.hr,{}),(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.code,{children:"start_date"})}),": ",(0,t.jsx)(r.code,{children:"Union[date, str]"})]}),(0,t.jsx)(r.p,{children:"Start date of the data, in YYYY-MM-DD format."}),(0,t.jsxs)(r.p,{children:["\u2022 ",(0,t.jsx)(r.em,{children:"Optional:"})," ",(0,t.jsx)(r.code,{children:"True"})]}),(0,t.jsx)(r.hr,{}),(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.code,{children:"end_date"})}),": ",(0,t.jsx)(r.code,{children:"Union[date, str]"})]}),(0,t.jsx)(r.p,{children:"End date of the data, in YYYY-MM-DD format."}),(0,t.jsxs)(r.p,{children:["\u2022 ",(0,t.jsx)(r.em,{children:"Optional:"})," ",(0,t.jsx)(r.code,{children:"True"})]})]}),(0,t.jsxs)(o.A,{value:"oecd",label:"oecd",children:[(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.code,{children:"country"})}),": ",(0,t.jsx)(r.code,{children:"str"})]}),(0,t.jsx)(r.p,{children:"The country to get data."}),(0,t.jsxs)(r.p,{children:["\u2022 ",(0,t.jsx)(r.em,{children:"Default:"})," ",(0,t.jsx)(r.code,{children:"united_states"})]}),(0,t.jsxs)(r.p,{children:["\u2022 ",(0,t.jsx)(r.em,{children:"Optional:"})," ",(0,t.jsx)(r.code,{children:"True"})]}),(0,t.jsx)(r.hr,{}),(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.code,{children:"frequency"})}),": ",(0,t.jsx)(r.code,{children:"Literal['monthly', 'quarter', 'annual']"})]}),(0,t.jsx)(r.p,{children:"The frequency of the data."}),(0,t.jsxs)(r.p,{children:["\u2022 ",(0,t.jsx)(r.em,{children:"Default:"})," ",(0,t.jsx)(r.code,{children:"monthly"})]}),(0,t.jsxs)(r.p,{children:["\u2022 ",(0,t.jsx)(r.em,{children:"Optional:"})," ",(0,t.jsx)(r.code,{children:"True"})]}),(0,t.jsx)(r.hr,{}),(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.code,{children:"start_date"})}),": ",(0,t.jsx)(r.code,{children:"Union[date, str]"})]}),(0,t.jsx)(r.p,{children:"Start date of the data, in YYYY-MM-DD format."}),(0,t.jsxs)(r.p,{children:["\u2022 ",(0,t.jsx)(r.em,{children:"Optional:"})," ",(0,t.jsx)(r.code,{children:"True"})]}),(0,t.jsx)(r.hr,{}),(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.code,{children:"end_date"})}),": ",(0,t.jsx)(r.code,{children:"Union[date, str]"})]}),(0,t.jsx)(r.p,{children:"End date of the data, in YYYY-MM-DD format."}),(0,t.jsxs)(r.p,{children:["\u2022 ",(0,t.jsx)(r.em,{children:"Optional:"})," ",(0,t.jsx)(r.code,{children:"True"})]})]})]}),"\n",(0,t.jsx)(r.hr,{}),"\n",(0,t.jsx)(r.h2,{id:"returns",children:"Returns"}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.code,{children:"results"})}),": ",(0,t.jsx)(r.code,{children:"list[SharePriceIndex]"})]}),"\n",(0,t.jsx)(r.p,{children:"Serializable results."}),"\n",(0,t.jsx)(r.hr,{}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.code,{children:"provider"})}),": ",(0,t.jsx)(r.code,{children:"Optional[Literal['oecd']]"})]}),"\n",(0,t.jsx)(r.p,{children:"Provider name."}),"\n",(0,t.jsx)(r.hr,{}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.code,{children:"warnings"})}),": ",(0,t.jsx)(r.code,{children:"Optional[list[Warning_]]"})]}),"\n",(0,t.jsx)(r.p,{children:"list of warnings."}),"\n",(0,t.jsx)(r.hr,{}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.code,{children:"chart"})}),": ",(0,t.jsx)(r.code,{children:"Optional[Chart]"})]}),"\n",(0,t.jsx)(r.p,{children:"Chart object."}),"\n",(0,t.jsx)(r.hr,{}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.code,{children:"extra"})}),": ",(0,t.jsx)(r.code,{children:"dict[str, Any]"})]}),"\n",(0,t.jsx)(r.p,{children:"Extra info."}),"\n",(0,t.jsx)(r.hr,{}),"\n",(0,t.jsx)(r.h2,{id:"data",children:"Data"}),"\n",(0,t.jsxs)(i.A,{children:[(0,t.jsxs)(o.A,{value:"standard",label:"standard",children:[(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.code,{children:"date"})}),": ",(0,t.jsx)(r.code,{children:"Union[date, str]"})]}),(0,t.jsx)(r.p,{children:"The date of the data."}),(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.code,{children:"country"})}),": ",(0,t.jsx)(r.code,{children:"str"})]}),(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.code,{children:"value"})}),": ",(0,t.jsx)(r.code,{children:"float"})]}),(0,t.jsx)(r.p,{children:"Share price index value."})]}),(0,t.jsxs)(o.A,{value:"oecd",label:"oecd",children:[(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.code,{children:"date"})}),": ",(0,t.jsx)(r.code,{children:"Union[date, str]"})]}),(0,t.jsx)(r.p,{children:"The date of the data."}),(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.code,{children:"country"})}),": ",(0,t.jsx)(r.code,{children:"str"})]}),(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.code,{children:"value"})}),": ",(0,t.jsx)(r.code,{children:"float"})]}),(0,t.jsx)(r.p,{children:"Share price index value."})]})]})]})}function p(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(x,{...e})}):x(e)}},19365:(e,r,n)=>{n.d(r,{A:()=>i});n(96540);var t=n(34164);const s={tabItem:"tabItem_Ymn6"};var c=n(74848);function i(e){let{children:r,hidden:n,className:i}=e;return(0,c.jsx)("div",{role:"tabpanel",className:(0,t.A)(s.tabItem,i),hidden:n,children:r})}},94331:(e,r,n)=>{n.d(r,{A:()=>c});n(96540);var t=n(5260),s=n(74848);function c(e){let{title:r}=e;return(0,s.jsx)(t.A,{children:(0,s.jsx)("title",{children:r})})}},18228:(e,r,n)=>{n.d(r,{A:()=>_});var t=n(56347),s=n(23104),c=n(96540),i=n(205),o=n(57485),l=n(31682),a=n(89466);function d(e){return function(e){return c.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,c.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:r,label:n,attributes:t,default:s}}=e;return{value:r,label:n,attributes:t,default:s}}))}function h(e){const{values:r,children:n}=e;return(0,c.useMemo)((()=>{const e=r??d(n);return function(e){const r=(0,l.X)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,n])}function u(e){let{value:r,tabValues:n}=e;return n.some((e=>e.value===r))}function x(e){let{queryString:r=!1,groupId:n}=e;const s=(0,t.W6)(),i=function(e){let{queryString:r=!1,groupId:n}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:r,groupId:n});return[(0,o.aZ)(i),(0,c.useCallback)((e=>{if(!i)return;const r=new URLSearchParams(s.location.search);r.set(i,e),s.replace({...s.location,search:r.toString()})}),[i,s])]}function p(e){const{defaultValue:r,queryString:n=!1,groupId:t}=e,s=h(e),[o,l]=(0,c.useState)((()=>function(e){let{defaultValue:r,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!u({value:r,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const t=n.find((e=>e.default))??n[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:r,tabValues:s}))),[d,p]=x({queryString:n,groupId:t}),[j,f]=function(e){let{groupId:r}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(r),[t,s]=(0,a.Dv)(n);return[t,(0,c.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:t}),m=(()=>{const e=d??j;return u({value:e,tabValues:s})?e:null})();(0,i.A)((()=>{m&&l(m)}),[m]);return{selectedValue:o,selectValue:(0,c.useCallback)((e=>{if(!u({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),p(e),f(e)}),[p,f,s]),tabValues:s}}var j=n(92303),f=n(34164);const m={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};var b=n(74848);function v(e){let{className:r,block:n,selectedValue:c,selectValue:i,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:a}=(0,s.a_)(),{pathname:d}=(0,t.zy)(),h=e=>{const r=e.currentTarget,n=l.indexOf(r),t=o[n].value;t!==c&&(a(r),i(t))},u=e=>{let r=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;r=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;r=l[n]??l[l.length-1];break}}r?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,f.A)("_group-tab list-none -ml-7 my-6 overflow-auto"),children:o.map((e=>{let{value:r,label:n,attributes:t}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:c===r?0:-1,"aria-selected":c===r,ref:e=>l.push(e),onKeyDown:u,onClick:h,...t,className:(0,f.A)("font-bold tracking-widest w-fit px-3 inline-flex py-1 uppercase border-b text-lg cursor-pointer",m.tabItem,t?.className,{"border-b-2 pointer-events-none":c===r,"border-b-2 text-[#669dcb] border-[#669dcb]":c===r&&d.startsWith("/workspace"),"border-b-2 text-[#FB923C] border-[#FB923C]":c===r&&d.startsWith("/sdk"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":c!==r&&d.startsWith("/sdk"),"border-b-2 text-[#FB923C] border-[#FB923C]":c===r&&d.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":c!==r&&d.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#abd2f1] hover:border-[#abd2f1]":c!==r&&d.startsWith("/workspace")}),children:n??r},r)}))})}function y(e){let{lazy:r,children:n,selectedValue:t}=e;if(n=Array.isArray(n)?n:[n],r){const e=n.find((e=>e.props.value===t));return e?(0,c.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:n.map(((e,r)=>(0,c.cloneElement)(e,{key:r,hidden:e.props.value!==t})))})}function g(e){const r=p(e);return(0,b.jsxs)("div",{className:(0,f.A)("tabs-container",m.tabList),children:[(0,b.jsx)(v,{...e,...r}),(0,b.jsx)(y,{...e,...r})]})}function _(e){const r=(0,j.A)();return(0,b.jsx)(g,{...e},String(r))}},28453:(e,r,n)=>{n.d(r,{R:()=>i,x:()=>o});var t=n(96540);const s={},c=t.createContext(s);function i(e){const r=t.useContext(c);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(c.Provider,{value:r},e.children)}}}]);