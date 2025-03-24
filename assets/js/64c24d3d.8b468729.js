"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[99879],{16110:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>m,frontMatter:()=>a,metadata:()=>o,toc:()=>h});var n=r(74848),s=r(28453),i=r(94331),l=r(18228),d=r(19365);const a={title:"instruments",description:"Get reference data for available futures instruments by provider",keywords:["derivatives","futures","instruments"]},c=void 0,o={id:"platform/reference/derivatives/futures/instruments",title:"instruments",description:"Get reference data for available futures instruments by provider",source:"@site/content/platform/reference/derivatives/futures/instruments.md",sourceDirName:"platform/reference/derivatives/futures",slug:"/platform/reference/derivatives/futures/instruments",permalink:"/platform/reference/derivatives/futures/instruments",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/platform/reference/derivatives/futures/instruments.md",tags:[],version:"current",frontMatter:{title:"instruments",description:"Get reference data for available futures instruments by provider",keywords:["derivatives","futures","instruments"]},sidebar:"tutorialSidebar",previous:{title:"info",permalink:"/platform/reference/derivatives/futures/info"},next:{title:"Options",permalink:"/platform/reference/derivatives/options/"}},u={},h=[{value:"Examples",id:"examples",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Data",id:"data",level:2}];function x(e){const t={code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.A,{title:"derivatives/futures/instruments - Reference | OpenBB Platform Docs"}),"\n","\n",(0,n.jsx)(t.p,{children:"Get reference data for available futures instruments by provider."}),"\n",(0,n.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"from openbb import obb\nobb.derivatives.futures.instruments(provider='deribit')\n"})}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(l.A,{children:[(0,n.jsx)(d.A,{value:"standard",label:"standard",children:(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Default"}),(0,n.jsx)(t.th,{children:"Optional"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:";"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{})]})})]})}),(0,n.jsx)(d.A,{value:"deribit",label:"deribit",children:(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Default"}),(0,n.jsx)(t.th,{children:"Optional"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:";"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{})]})})]})})]}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",metastring:"wordwrap",children:"OBBject\n    results : List[FuturesInstruments]\n        Serializable results.\n\n    provider : Optional[Literal['deribit']]\n        Provider name.\n\n    warnings : Optional[List[Warning_]]\n        List of warnings.\n\n    chart : Optional[Chart]\n        Chart object.\n\n    extra : Dict[str, Any]\n        Extra info.\n"})}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"data",children:"Data"}),"\n",(0,n.jsxs)(l.A,{children:[(0,n.jsx)(d.A,{value:"standard",label:"standard",children:(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:";"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{})]})})]})}),(0,n.jsx)(d.A,{value:"deribit",label:"deribit",children:(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"instrument_id"}),(0,n.jsx)(t.td,{children:"int"}),(0,n.jsx)(t.td,{children:"Deribit Instrument ID"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"symbol"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Symbol representing the entity requested in the data."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"base_currency"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"The underlying currency being traded."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"counter_currency"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Counter currency for the instrument."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"quote_currency"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"The currency in which the instrument prices are quoted."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"settlement_currency"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Settlement currency for the instrument."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"future_type"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Type of the instrument. linear or reversed"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"settlement_period"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"The settlement period."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"price_index"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Name of price index that is used for this instrument"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"contract_size"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Contract size for instrument."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"is_active"}),(0,n.jsx)(t.td,{children:"bool"}),(0,n.jsx)(t.td,{children:"Indicates if the instrument can currently be traded."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"creation_timestamp"}),(0,n.jsx)(t.td,{children:"datetime"}),(0,n.jsx)(t.td,{children:"The time when the instrument was first created (milliseconds since the UNIX epoch)."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"expiration_timestamp"}),(0,n.jsx)(t.td,{children:"datetime"}),(0,n.jsx)(t.td,{children:"The time when the instrument will expire (milliseconds since the UNIX epoch)."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"tick_size"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Specifies minimal price change and, as follows, the number of decimal places for instrument prices."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"min_trade_amount"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Minimum amount for trading, in USD units."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"max_leverage"}),(0,n.jsx)(t.td,{children:"int"}),(0,n.jsx)(t.td,{children:"Maximal leverage for instrument."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"max_liquidation_commission"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Maximal liquidation trade commission for instrument."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"block_trade_commission"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Block Trade commission for instrument."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"block_trade_min_trade_amount"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Minimum amount for block trading."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"block_trade_tick_size"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Specifies minimal price change for block trading."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"maker_commission"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Maker commission for instrument."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"taker_commission"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Taker commission for instrument."})]})]})]})})]})]})}function m(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(x,{...e})}):x(e)}},19365:(e,t,r)=>{r.d(t,{A:()=>l});r(96540);var n=r(34164);const s={tabItem:"tabItem_Ymn6"};var i=r(74848);function l(e){let{children:t,hidden:r,className:l}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,n.A)(s.tabItem,l),hidden:r,children:t})}},94331:(e,t,r)=>{r.d(t,{A:()=>i});r(96540);var n=r(5260),s=r(74848);function i(e){let{title:t}=e;return(0,s.jsx)(n.A,{children:(0,s.jsx)("title",{children:t})})}},18228:(e,t,r)=>{r.d(t,{A:()=>w});var n=r(56347),s=r(23104),i=r(96540),l=r(205),d=r(57485),a=r(31682),c=r(89466);function o(e){return function(e){return i.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:s}}=e;return{value:t,label:r,attributes:n,default:s}}))}function u(e){const{values:t,children:r}=e;return(0,i.useMemo)((()=>{const e=t??o(r);return function(e){const t=(0,a.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function h(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function x(e){let{queryString:t=!1,groupId:r}=e;const s=(0,n.W6)(),l=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,d.aZ)(l),(0,i.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(s.location.search);t.set(l,e),s.replace({...s.location,search:t.toString()})}),[l,s])]}function m(e){const{defaultValue:t,queryString:r=!1,groupId:n}=e,s=u(e),[d,a]=(0,i.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:s}))),[o,m]=x({queryString:r,groupId:n}),[j,f]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,s]=(0,c.Dv)(r);return[n,(0,i.useCallback)((e=>{r&&s.set(e)}),[r,s])]}({groupId:n}),p=(()=>{const e=o??j;return h({value:e,tabValues:s})?e:null})();(0,l.A)((()=>{p&&a(p)}),[p]);return{selectedValue:d,selectValue:(0,i.useCallback)((e=>{if(!h({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);a(e),m(e),f(e)}),[m,f,s]),tabValues:s}}var j=r(92303),f=r(34164);const p={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};var b=r(74848);function v(e){let{className:t,block:r,selectedValue:i,selectValue:l,tabValues:d}=e;const a=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.a_)(),{pathname:o}=(0,n.zy)(),u=e=>{const t=e.currentTarget,r=a.indexOf(t),n=d[r].value;n!==i&&(c(t),l(n))},h=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const r=a.indexOf(e.currentTarget)+1;t=a[r]??a[0];break}case"ArrowLeft":{const r=a.indexOf(e.currentTarget)-1;t=a[r]??a[a.length-1];break}}t?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,f.A)("_group-tab list-none -ml-7 my-6 overflow-auto"),children:d.map((e=>{let{value:t,label:r,attributes:n}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,ref:e=>a.push(e),onKeyDown:h,onClick:u,...n,className:(0,f.A)("font-bold tracking-widest w-fit px-3 inline-flex py-1 uppercase border-b text-lg cursor-pointer",p.tabItem,n?.className,{"border-b-2 pointer-events-none":i===t,"border-b-2 text-[#669dcb] border-[#669dcb]":i===t&&o.startsWith("/workspace"),"border-b-2 text-[#FB923C] border-[#FB923C]":i===t&&o.startsWith("/sdk"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":i!==t&&o.startsWith("/sdk"),"border-b-2 text-[#FB923C] border-[#FB923C]":i===t&&o.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":i!==t&&o.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#abd2f1] hover:border-[#abd2f1]":i!==t&&o.startsWith("/workspace")}),children:r??t},t)}))})}function y(e){let{lazy:t,children:r,selectedValue:n}=e;if(r=Array.isArray(r)?r:[r],t){const e=r.find((e=>e.props.value===n));return e?(0,i.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:r.map(((e,t)=>(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==n})))})}function g(e){const t=m(e);return(0,b.jsxs)("div",{className:(0,f.A)("tabs-container",p.tabList),children:[(0,b.jsx)(v,{...e,...t}),(0,b.jsx)(y,{...e,...t})]})}function w(e){const t=(0,j.A)();return(0,b.jsx)(g,{...e},String(t))}},28453:(e,t,r)=>{r.d(t,{R:()=>l,x:()=>d});var n=r(96540);const s={},i=n.createContext(s);function l(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);