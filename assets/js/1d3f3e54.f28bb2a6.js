"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[72628],{94844:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>h,contentTitle:()=>l,default:()=>j,frontMatter:()=>d,metadata:()=>a,toc:()=>u});var t=n(74848),s=n(28453),o=n(94331),c=n(18228),i=n(19365);const d={title:"house_price_index",description:"Get the House Price Index by country from the OECD Short-Term Economics Statistics",keywords:["economy","house_price_index"]},l=void 0,a={id:"platform/reference/economy/house_price_index",title:"house_price_index",description:"Get the House Price Index by country from the OECD Short-Term Economics Statistics",source:"@site/content/platform/reference/economy/house_price_index.md",sourceDirName:"platform/reference/economy",slug:"/platform/reference/economy/house_price_index",permalink:"/platform/reference/economy/house_price_index",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/platform/reference/economy/house_price_index.md",tags:[],version:"current",frontMatter:{title:"house_price_index",description:"Get the House Price Index by country from the OECD Short-Term Economics Statistics",keywords:["economy","house_price_index"]},sidebar:"tutorialSidebar",previous:{title:"fred_series",permalink:"/platform/reference/economy/fred_series"},next:{title:"immediate_interest_rate",permalink:"/platform/reference/economy/immediate_interest_rate"}},h={},u=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Data",id:"data",level:2}];function x(e){const r={code:"code",em:"em",h2:"h2",hr:"hr",p:"p",strong:"strong",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.A,{title:"economy/house_price_index - Reference | OpenBB Platform Docs"}),"\n","\n",(0,t.jsx)(r.p,{children:"Get the House Price Index by country from the OECD Short-Term Economics Statistics."}),"\n",(0,t.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(c.A,{children:[(0,t.jsxs)(i.A,{value:"standard",label:"standard",children:[(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.code,{children:"country"})}),": ",(0,t.jsx)(r.code,{children:"Union[str, list[str]]"})]}),(0,t.jsx)(r.p,{children:"The country to get data. Multiple items allowed for provider(s): oecd."}),(0,t.jsxs)(r.p,{children:["\u2022 ",(0,t.jsx)(r.em,{children:"Default:"})," ",(0,t.jsx)(r.code,{children:"united_states"})]}),(0,t.jsxs)(r.p,{children:["\u2022 ",(0,t.jsx)(r.em,{children:"Optional:"})," ",(0,t.jsx)(r.code,{children:"True"})]}),(0,t.jsx)(r.hr,{}),(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.code,{children:"frequency"})}),": ",(0,t.jsx)(r.code,{children:"Literal['monthly', 'quarter', 'annual']"})]}),(0,t.jsx)(r.p,{children:"The frequency of the data."}),(0,t.jsxs)(r.p,{children:["\u2022 ",(0,t.jsx)(r.em,{children:"Default:"})," ",(0,t.jsx)(r.code,{children:"quarter"})]}),(0,t.jsxs)(r.p,{children:["\u2022 ",(0,t.jsx)(r.em,{children:"Optional:"})," ",(0,t.jsx)(r.code,{children:"True"})]}),(0,t.jsx)(r.hr,{}),(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.code,{children:"transform"})}),": ",(0,t.jsx)(r.code,{children:"Literal['index', 'yoy', 'period']"})]}),(0,t.jsx)(r.p,{children:"Transformation of the CPI data. Period represents the change since previous. Defaults to change from one year ago (yoy)."}),(0,t.jsxs)(r.p,{children:["\u2022 ",(0,t.jsx)(r.em,{children:"Default:"})," ",(0,t.jsx)(r.code,{children:"index"})]}),(0,t.jsxs)(r.p,{children:["\u2022 ",(0,t.jsx)(r.em,{children:"Optional:"})," ",(0,t.jsx)(r.code,{children:"True"})]}),(0,t.jsx)(r.hr,{}),(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.code,{children:"start_date"})}),": ",(0,t.jsx)(r.code,{children:"Union[date, str]"})]}),(0,t.jsx)(r.p,{children:"Start date of the data, in YYYY-MM-DD format."}),(0,t.jsxs)(r.p,{children:["\u2022 ",(0,t.jsx)(r.em,{children:"Optional:"})," ",(0,t.jsx)(r.code,{children:"True"})]}),(0,t.jsx)(r.hr,{}),(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.code,{children:"end_date"})}),": ",(0,t.jsx)(r.code,{children:"Union[date, str]"})]}),(0,t.jsx)(r.p,{children:"End date of the data, in YYYY-MM-DD format."}),(0,t.jsxs)(r.p,{children:["\u2022 ",(0,t.jsx)(r.em,{children:"Optional:"})," ",(0,t.jsx)(r.code,{children:"True"})]})]}),(0,t.jsxs)(i.A,{value:"oecd",label:"oecd",children:[(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.code,{children:"country"})}),": ",(0,t.jsx)(r.code,{children:"str"})]}),(0,t.jsx)(r.p,{children:"The country to get data."}),(0,t.jsxs)(r.p,{children:["\u2022 ",(0,t.jsx)(r.em,{children:"Default:"})," ",(0,t.jsx)(r.code,{children:"united_states"})]}),(0,t.jsxs)(r.p,{children:["\u2022 ",(0,t.jsx)(r.em,{children:"Optional:"})," ",(0,t.jsx)(r.code,{children:"True"})]}),(0,t.jsx)(r.hr,{}),(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.code,{children:"frequency"})}),": ",(0,t.jsx)(r.code,{children:"Literal['monthly', 'quarter', 'annual']"})]}),(0,t.jsx)(r.p,{children:"The frequency of the data."}),(0,t.jsxs)(r.p,{children:["\u2022 ",(0,t.jsx)(r.em,{children:"Default:"})," ",(0,t.jsx)(r.code,{children:"quarter"})]}),(0,t.jsxs)(r.p,{children:["\u2022 ",(0,t.jsx)(r.em,{children:"Optional:"})," ",(0,t.jsx)(r.code,{children:"True"})]}),(0,t.jsx)(r.hr,{}),(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.code,{children:"transform"})}),": ",(0,t.jsx)(r.code,{children:"Literal['index', 'yoy', 'period']"})]}),(0,t.jsx)(r.p,{children:"Transformation of the CPI data. Period represents the change since previous. Defaults to change from one year ago (yoy)."}),(0,t.jsxs)(r.p,{children:["\u2022 ",(0,t.jsx)(r.em,{children:"Default:"})," ",(0,t.jsx)(r.code,{children:"index"})]}),(0,t.jsxs)(r.p,{children:["\u2022 ",(0,t.jsx)(r.em,{children:"Optional:"})," ",(0,t.jsx)(r.code,{children:"True"})]}),(0,t.jsx)(r.hr,{}),(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.code,{children:"start_date"})}),": ",(0,t.jsx)(r.code,{children:"Union[date, str]"})]}),(0,t.jsx)(r.p,{children:"Start date of the data, in YYYY-MM-DD format."}),(0,t.jsxs)(r.p,{children:["\u2022 ",(0,t.jsx)(r.em,{children:"Optional:"})," ",(0,t.jsx)(r.code,{children:"True"})]}),(0,t.jsx)(r.hr,{}),(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.code,{children:"end_date"})}),": ",(0,t.jsx)(r.code,{children:"Union[date, str]"})]}),(0,t.jsx)(r.p,{children:"End date of the data, in YYYY-MM-DD format."}),(0,t.jsxs)(r.p,{children:["\u2022 ",(0,t.jsx)(r.em,{children:"Optional:"})," ",(0,t.jsx)(r.code,{children:"True"})]})]})]}),"\n",(0,t.jsx)(r.hr,{}),"\n",(0,t.jsx)(r.h2,{id:"returns",children:"Returns"}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.code,{children:"results"})}),": ",(0,t.jsx)(r.code,{children:"list[HousePriceIndex]"})]}),"\n",(0,t.jsx)(r.p,{children:"Serializable results."}),"\n",(0,t.jsx)(r.hr,{}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.code,{children:"provider"})}),": ",(0,t.jsx)(r.code,{children:"Optional[Literal['oecd']]"})]}),"\n",(0,t.jsx)(r.p,{children:"Provider name."}),"\n",(0,t.jsx)(r.hr,{}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.code,{children:"warnings"})}),": ",(0,t.jsx)(r.code,{children:"Optional[list[Warning_]]"})]}),"\n",(0,t.jsx)(r.p,{children:"list of warnings."}),"\n",(0,t.jsx)(r.hr,{}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.code,{children:"chart"})}),": ",(0,t.jsx)(r.code,{children:"Optional[Chart]"})]}),"\n",(0,t.jsx)(r.p,{children:"Chart object."}),"\n",(0,t.jsx)(r.hr,{}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.code,{children:"extra"})}),": ",(0,t.jsx)(r.code,{children:"dict[str, Any]"})]}),"\n",(0,t.jsx)(r.p,{children:"Extra info."}),"\n",(0,t.jsx)(r.hr,{}),"\n",(0,t.jsx)(r.h2,{id:"data",children:"Data"}),"\n",(0,t.jsxs)(c.A,{children:[(0,t.jsxs)(i.A,{value:"standard",label:"standard",children:[(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.code,{children:"date"})}),": ",(0,t.jsx)(r.code,{children:"Union[date, str]"})]}),(0,t.jsx)(r.p,{children:"The date of the data."}),(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.code,{children:"country"})}),": ",(0,t.jsx)(r.code,{children:"str"})]}),(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.code,{children:"value"})}),": ",(0,t.jsx)(r.code,{children:"float"})]}),(0,t.jsx)(r.p,{children:"Share price index value."})]}),(0,t.jsxs)(i.A,{value:"oecd",label:"oecd",children:[(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.code,{children:"date"})}),": ",(0,t.jsx)(r.code,{children:"Union[date, str]"})]}),(0,t.jsx)(r.p,{children:"The date of the data."}),(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.code,{children:"country"})}),": ",(0,t.jsx)(r.code,{children:"str"})]}),(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.code,{children:"value"})}),": ",(0,t.jsx)(r.code,{children:"float"})]}),(0,t.jsx)(r.p,{children:"Share price index value."})]})]})]})}function j(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(x,{...e})}):x(e)}},19365:(e,r,n)=>{n.d(r,{A:()=>c});n(96540);var t=n(34164);const s={tabItem:"tabItem_Ymn6"};var o=n(74848);function c(e){let{children:r,hidden:n,className:c}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,t.A)(s.tabItem,c),hidden:n,children:r})}},94331:(e,r,n)=>{n.d(r,{A:()=>o});n(96540);var t=n(5260),s=n(74848);function o(e){let{title:r}=e;return(0,s.jsx)(t.A,{children:(0,s.jsx)("title",{children:r})})}},18228:(e,r,n)=>{n.d(r,{A:()=>_});var t=n(56347),s=n(23104),o=n(96540),c=n(205),i=n(57485),d=n(31682),l=n(89466);function a(e){return function(e){return o.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,o.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:r,label:n,attributes:t,default:s}}=e;return{value:r,label:n,attributes:t,default:s}}))}function h(e){const{values:r,children:n}=e;return(0,o.useMemo)((()=>{const e=r??a(n);return function(e){const r=(0,d.X)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,n])}function u(e){let{value:r,tabValues:n}=e;return n.some((e=>e.value===r))}function x(e){let{queryString:r=!1,groupId:n}=e;const s=(0,t.W6)(),c=function(e){let{queryString:r=!1,groupId:n}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:r,groupId:n});return[(0,i.aZ)(c),(0,o.useCallback)((e=>{if(!c)return;const r=new URLSearchParams(s.location.search);r.set(c,e),s.replace({...s.location,search:r.toString()})}),[c,s])]}function j(e){const{defaultValue:r,queryString:n=!1,groupId:t}=e,s=h(e),[i,d]=(0,o.useState)((()=>function(e){let{defaultValue:r,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!u({value:r,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const t=n.find((e=>e.default))??n[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:r,tabValues:s}))),[a,j]=x({queryString:n,groupId:t}),[p,f]=function(e){let{groupId:r}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(r),[t,s]=(0,l.Dv)(n);return[t,(0,o.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:t}),m=(()=>{const e=a??p;return u({value:e,tabValues:s})?e:null})();(0,c.A)((()=>{m&&d(m)}),[m]);return{selectedValue:i,selectValue:(0,o.useCallback)((e=>{if(!u({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);d(e),j(e),f(e)}),[j,f,s]),tabValues:s}}var p=n(92303),f=n(34164);const m={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};var b=n(74848);function y(e){let{className:r,block:n,selectedValue:o,selectValue:c,tabValues:i}=e;const d=[],{blockElementScrollPositionUntilNextRender:l}=(0,s.a_)(),{pathname:a}=(0,t.zy)(),h=e=>{const r=e.currentTarget,n=d.indexOf(r),t=i[n].value;t!==o&&(l(r),c(t))},u=e=>{let r=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{const n=d.indexOf(e.currentTarget)+1;r=d[n]??d[0];break}case"ArrowLeft":{const n=d.indexOf(e.currentTarget)-1;r=d[n]??d[d.length-1];break}}r?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,f.A)("_group-tab list-none -ml-7 my-6 overflow-auto"),children:i.map((e=>{let{value:r,label:n,attributes:t}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:o===r?0:-1,"aria-selected":o===r,ref:e=>d.push(e),onKeyDown:u,onClick:h,...t,className:(0,f.A)("font-bold tracking-widest w-fit px-3 inline-flex py-1 uppercase border-b text-lg cursor-pointer",m.tabItem,t?.className,{"border-b-2 pointer-events-none":o===r,"border-b-2 text-[#669dcb] border-[#669dcb]":o===r&&a.startsWith("/workspace"),"border-b-2 text-[#FB923C] border-[#FB923C]":o===r&&a.startsWith("/sdk"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":o!==r&&a.startsWith("/sdk"),"border-b-2 text-[#FB923C] border-[#FB923C]":o===r&&a.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":o!==r&&a.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#abd2f1] hover:border-[#abd2f1]":o!==r&&a.startsWith("/workspace")}),children:n??r},r)}))})}function g(e){let{lazy:r,children:n,selectedValue:t}=e;if(n=Array.isArray(n)?n:[n],r){const e=n.find((e=>e.props.value===t));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:n.map(((e,r)=>(0,o.cloneElement)(e,{key:r,hidden:e.props.value!==t})))})}function v(e){const r=j(e);return(0,b.jsxs)("div",{className:(0,f.A)("tabs-container",m.tabList),children:[(0,b.jsx)(y,{...e,...r}),(0,b.jsx)(g,{...e,...r})]})}function _(e){const r=(0,p.A)();return(0,b.jsx)(v,{...e},String(r))}},28453:(e,r,n)=>{n.d(r,{R:()=>c,x:()=>i});var t=n(96540);const s={},o=t.createContext(s);function c(e){const r=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),t.createElement(o.Provider,{value:r},e.children)}}}]);