"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[84613],{38779:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>h,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>x});var s=r(74848),n=r(28453),i=r(94331),d=r(18228),l=r(19365);const a={title:"snapshots",description:"Get a snapshot of the options market universe",keywords:["derivatives","options","snapshots"]},o=void 0,c={id:"platform/reference/derivatives/options/snapshots",title:"snapshots",description:"Get a snapshot of the options market universe",source:"@site/content/platform/reference/derivatives/options/snapshots.md",sourceDirName:"platform/reference/derivatives/options",slug:"/platform/reference/derivatives/options/snapshots",permalink:"/platform/reference/derivatives/options/snapshots",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/platform/reference/derivatives/options/snapshots.md",tags:[],version:"current",frontMatter:{title:"snapshots",description:"Get a snapshot of the options market universe",keywords:["derivatives","options","snapshots"]},sidebar:"tutorialSidebar",previous:{title:"chains",permalink:"/platform/reference/derivatives/options/chains"},next:{title:"unusual",permalink:"/platform/reference/derivatives/options/unusual"}},h={},x=[{value:"Examples",id:"examples",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Data",id:"data",level:2}];function j(e){const t={code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.A,{title:"derivatives/options/snapshots - Reference | OpenBB Platform Docs"}),"\n","\n",(0,s.jsx)(t.p,{children:"Get a snapshot of the options market universe."}),"\n",(0,s.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:"from openbb import obb\nobb.derivatives.options.snapshots(provider='intrinio')\n"})}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(d.A,{children:[(0,s.jsx)(l.A,{value:"standard",label:"standard",children:(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"}),(0,s.jsx)(t.th,{children:"Default"}),(0,s.jsx)(t.th,{children:"Optional"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:";"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{})]})})]})}),(0,s.jsx)(l.A,{value:"intrinio",label:"intrinio",children:(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"}),(0,s.jsx)(t.th,{children:"Default"}),(0,s.jsx)(t.th,{children:"Optional"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"date"}),(0,s.jsx)(t.td,{children:"Union[Union[date, datetime, str], str]"}),(0,s.jsx)(t.td,{children:"The date of the data. Can be a datetime or an ISO datetime string. Data appears to go back to around 2022-06-01 Example: '2024-03-08T12:15:00+0400'"}),(0,s.jsx)(t.td,{children:"None"}),(0,s.jsx)(t.td,{children:"True"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"only_traded"}),(0,s.jsx)(t.td,{children:"bool"}),(0,s.jsx)(t.td,{children:"Only include options that have been traded during the session, default is True. Setting to false will dramatically increase the size of the response - use with caution."}),(0,s.jsx)(t.td,{children:"True"}),(0,s.jsx)(t.td,{children:"True"})]})]})]})})]}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",metastring:"wordwrap",children:"OBBject\n    results : List[OptionsSnapshots]\n        Serializable results.\n\n    provider : Optional[Literal['intrinio']]\n        Provider name.\n\n    warnings : Optional[List[Warning_]]\n        List of warnings.\n\n    chart : Optional[Chart]\n        Chart object.\n\n    extra : Dict[str, Any]\n        Extra info.\n"})}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h2,{id:"data",children:"Data"}),"\n",(0,s.jsxs)(d.A,{children:[(0,s.jsx)(l.A,{value:"standard",label:"standard",children:(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"underlying_symbol"}),(0,s.jsx)(t.td,{children:"List[str]"}),(0,s.jsx)(t.td,{children:"Ticker symbol of the underlying asset."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"contract_symbol"}),(0,s.jsx)(t.td,{children:"List[str]"}),(0,s.jsx)(t.td,{children:"Symbol of the options contract."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"expiration"}),(0,s.jsx)(t.td,{children:"List[date]"}),(0,s.jsx)(t.td,{children:"Expiration date of the options contract."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"dte"}),(0,s.jsx)(t.td,{children:"List[int]"}),(0,s.jsx)(t.td,{children:"Number of days to expiration of the options contract."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"strike"}),(0,s.jsx)(t.td,{children:"List[float]"}),(0,s.jsx)(t.td,{children:"Strike price of the options contract."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"option_type"}),(0,s.jsx)(t.td,{children:"List[str]"}),(0,s.jsx)(t.td,{children:"The type of option."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"volume"}),(0,s.jsx)(t.td,{children:"List[int]"}),(0,s.jsx)(t.td,{children:"The trading volume."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"open_interest"}),(0,s.jsx)(t.td,{children:"List[int]"}),(0,s.jsx)(t.td,{children:"Open interest at the time."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"last_price"}),(0,s.jsx)(t.td,{children:"List[float]"}),(0,s.jsx)(t.td,{children:"Last trade price at the time."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"last_size"}),(0,s.jsx)(t.td,{children:"List[int]"}),(0,s.jsx)(t.td,{children:"Lot size of the last trade."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"last_timestamp"}),(0,s.jsx)(t.td,{children:"List[datetime]"}),(0,s.jsx)(t.td,{children:"Timestamp of the last price."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"open"}),(0,s.jsx)(t.td,{children:"List[float]"}),(0,s.jsx)(t.td,{children:"The open price."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"high"}),(0,s.jsx)(t.td,{children:"List[float]"}),(0,s.jsx)(t.td,{children:"The high price."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"low"}),(0,s.jsx)(t.td,{children:"List[float]"}),(0,s.jsx)(t.td,{children:"The low price."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"close"}),(0,s.jsx)(t.td,{children:"List[float]"}),(0,s.jsx)(t.td,{children:"The close price."})]})]})]})}),(0,s.jsx)(l.A,{value:"intrinio",label:"intrinio",children:(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"underlying_symbol"}),(0,s.jsx)(t.td,{children:"List[str]"}),(0,s.jsx)(t.td,{children:"Ticker symbol of the underlying asset."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"contract_symbol"}),(0,s.jsx)(t.td,{children:"List[str]"}),(0,s.jsx)(t.td,{children:"Symbol of the options contract."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"expiration"}),(0,s.jsx)(t.td,{children:"List[date]"}),(0,s.jsx)(t.td,{children:"Expiration date of the options contract."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"dte"}),(0,s.jsx)(t.td,{children:"List[int]"}),(0,s.jsx)(t.td,{children:"Number of days to expiration of the options contract."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"strike"}),(0,s.jsx)(t.td,{children:"List[float]"}),(0,s.jsx)(t.td,{children:"Strike price of the options contract."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"option_type"}),(0,s.jsx)(t.td,{children:"List[str]"}),(0,s.jsx)(t.td,{children:"The type of option."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"volume"}),(0,s.jsx)(t.td,{children:"List[int]"}),(0,s.jsx)(t.td,{children:"The trading volume."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"open_interest"}),(0,s.jsx)(t.td,{children:"List[int]"}),(0,s.jsx)(t.td,{children:"Open interest at the time."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"last_price"}),(0,s.jsx)(t.td,{children:"List[float]"}),(0,s.jsx)(t.td,{children:"Last trade price at the time."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"last_size"}),(0,s.jsx)(t.td,{children:"List[int]"}),(0,s.jsx)(t.td,{children:"Lot size of the last trade."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"last_timestamp"}),(0,s.jsx)(t.td,{children:"List[datetime]"}),(0,s.jsx)(t.td,{children:"Timestamp of the last price."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"open"}),(0,s.jsx)(t.td,{children:"List[float]"}),(0,s.jsx)(t.td,{children:"The open price."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"high"}),(0,s.jsx)(t.td,{children:"List[float]"}),(0,s.jsx)(t.td,{children:"The high price."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"low"}),(0,s.jsx)(t.td,{children:"List[float]"}),(0,s.jsx)(t.td,{children:"The low price."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"close"}),(0,s.jsx)(t.td,{children:"List[float]"}),(0,s.jsx)(t.td,{children:"The close price."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"bid"}),(0,s.jsx)(t.td,{children:"List[float]"}),(0,s.jsx)(t.td,{children:"The last bid price at the time."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"bid_size"}),(0,s.jsx)(t.td,{children:"List[int]"}),(0,s.jsx)(t.td,{children:"The size of the last bid price."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"bid_timestamp"}),(0,s.jsx)(t.td,{children:"List[datetime]"}),(0,s.jsx)(t.td,{children:"The timestamp of the last bid price."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"ask"}),(0,s.jsx)(t.td,{children:"List[float]"}),(0,s.jsx)(t.td,{children:"The last ask price at the time."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"ask_size"}),(0,s.jsx)(t.td,{children:"List[int]"}),(0,s.jsx)(t.td,{children:"The size of the last ask price."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"ask_timestamp"}),(0,s.jsx)(t.td,{children:"List[datetime]"}),(0,s.jsx)(t.td,{children:"The timestamp of the last ask price."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"total_bid_volume"}),(0,s.jsx)(t.td,{children:"List[int]"}),(0,s.jsx)(t.td,{children:"Total volume of bids."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"bid_high"}),(0,s.jsx)(t.td,{children:"List[float]"}),(0,s.jsx)(t.td,{children:"The highest bid price."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"bid_low"}),(0,s.jsx)(t.td,{children:"List[float]"}),(0,s.jsx)(t.td,{children:"The lowest bid price."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"total_ask_volume"}),(0,s.jsx)(t.td,{children:"List[int]"}),(0,s.jsx)(t.td,{children:"Total volume of asks."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"ask_high"}),(0,s.jsx)(t.td,{children:"List[float]"}),(0,s.jsx)(t.td,{children:"The highest ask price."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"ask_low"}),(0,s.jsx)(t.td,{children:"List[float]"}),(0,s.jsx)(t.td,{children:"The lowest ask price."})]})]})]})})]})]})}function u(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(j,{...e})}):j(e)}},19365:(e,t,r)=>{r.d(t,{A:()=>d});r(96540);var s=r(34164);const n={tabItem:"tabItem_Ymn6"};var i=r(74848);function d(e){let{children:t,hidden:r,className:d}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,s.A)(n.tabItem,d),hidden:r,children:t})}},94331:(e,t,r)=>{r.d(t,{A:()=>i});r(96540);var s=r(5260),n=r(74848);function i(e){let{title:t}=e;return(0,n.jsx)(s.A,{children:(0,n.jsx)("title",{children:t})})}},18228:(e,t,r)=>{r.d(t,{A:()=>L});var s=r(56347),n=r(23104),i=r(96540),d=r(205),l=r(57485),a=r(31682),o=r(89466);function c(e){return function(e){return i.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:s,default:n}}=e;return{value:t,label:r,attributes:s,default:n}}))}function h(e){const{values:t,children:r}=e;return(0,i.useMemo)((()=>{const e=t??c(r);return function(e){const t=(0,a.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function x(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function j(e){let{queryString:t=!1,groupId:r}=e;const n=(0,s.W6)(),d=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,l.aZ)(d),(0,i.useCallback)((e=>{if(!d)return;const t=new URLSearchParams(n.location.search);t.set(d,e),n.replace({...n.location,search:t.toString()})}),[d,n])]}function u(e){const{defaultValue:t,queryString:r=!1,groupId:s}=e,n=h(e),[l,a]=(0,i.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!x({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const s=r.find((e=>e.default))??r[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:t,tabValues:n}))),[c,u]=j({queryString:r,groupId:s}),[p,f]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,n]=(0,o.Dv)(r);return[s,(0,i.useCallback)((e=>{r&&n.set(e)}),[r,n])]}({groupId:s}),m=(()=>{const e=c??p;return x({value:e,tabValues:n})?e:null})();(0,d.A)((()=>{m&&a(m)}),[m]);return{selectedValue:l,selectValue:(0,i.useCallback)((e=>{if(!x({value:e,tabValues:n}))throw new Error(`Can't select invalid tab value=${e}`);a(e),u(e),f(e)}),[u,f,n]),tabValues:n}}var p=r(92303),f=r(34164);const m={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};var b=r(74848);function v(e){let{className:t,block:r,selectedValue:i,selectValue:d,tabValues:l}=e;const a=[],{blockElementScrollPositionUntilNextRender:o}=(0,n.a_)(),{pathname:c}=(0,s.zy)(),h=e=>{const t=e.currentTarget,r=a.indexOf(t),s=l[r].value;s!==i&&(o(t),d(s))},x=e=>{let t=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{const r=a.indexOf(e.currentTarget)+1;t=a[r]??a[0];break}case"ArrowLeft":{const r=a.indexOf(e.currentTarget)-1;t=a[r]??a[a.length-1];break}}t?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,f.A)("_group-tab list-none -ml-7 my-6 overflow-auto"),children:l.map((e=>{let{value:t,label:r,attributes:s}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,ref:e=>a.push(e),onKeyDown:x,onClick:h,...s,className:(0,f.A)("font-bold tracking-widest w-fit px-3 inline-flex py-1 uppercase border-b text-lg cursor-pointer",m.tabItem,s?.className,{"border-b-2 pointer-events-none":i===t,"border-b-2 text-[#669dcb] border-[#669dcb]":i===t&&c.startsWith("/workspace"),"border-b-2 text-[#FB923C] border-[#FB923C]":i===t&&c.startsWith("/sdk"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":i!==t&&c.startsWith("/sdk"),"border-b-2 text-[#FB923C] border-[#FB923C]":i===t&&c.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":i!==t&&c.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#abd2f1] hover:border-[#abd2f1]":i!==t&&c.startsWith("/workspace")}),children:r??t},t)}))})}function y(e){let{lazy:t,children:r,selectedValue:s}=e;if(r=Array.isArray(r)?r:[r],t){const e=r.find((e=>e.props.value===s));return e?(0,i.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:r.map(((e,t)=>(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function g(e){const t=u(e);return(0,b.jsxs)("div",{className:(0,f.A)("tabs-container",m.tabList),children:[(0,b.jsx)(v,{...e,...t}),(0,b.jsx)(y,{...e,...t})]})}function L(e){const t=(0,p.A)();return(0,b.jsx)(g,{...e},String(t))}},28453:(e,t,r)=>{r.d(t,{R:()=>d,x:()=>l});var s=r(96540);const n={},i=s.createContext(n);function d(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:d(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);