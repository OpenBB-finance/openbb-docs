"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[40924],{96100:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>x,frontMatter:()=>i,metadata:()=>d,toc:()=>h});var n=r(74848),s=r(28453),a=r(94331),o=r(18228),l=r(19365);const i={title:"lastcontracts",description:"This documentation page provides information on using OpenBBTerminal's Python code to obtain government contract data from QuiverQuant. It guides how to use the lastcontracts model and view functions for data analysis and export.",keywords:["Government contracts","QuiverQuant","Data analysis","Finance","Source code","Data export","GitHub","matplotlib"]},c=void 0,d={id:"sdk/reference/stocks/gov/lastcontracts",title:"lastcontracts",description:"This documentation page provides information on using OpenBBTerminal's Python code to obtain government contract data from QuiverQuant. It guides how to use the lastcontracts model and view functions for data analysis and export.",source:"@site/content/sdk/reference/stocks/gov/lastcontracts.md",sourceDirName:"sdk/reference/stocks/gov",slug:"/sdk/reference/stocks/gov/lastcontracts",permalink:"/sdk/reference/stocks/gov/lastcontracts",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/sdk/reference/stocks/gov/lastcontracts.md",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1719247347e3,frontMatter:{title:"lastcontracts",description:"This documentation page provides information on using OpenBBTerminal's Python code to obtain government contract data from QuiverQuant. It guides how to use the lastcontracts model and view functions for data analysis and export.",keywords:["Government contracts","QuiverQuant","Data analysis","Finance","Source code","Data export","GitHub","matplotlib"]},sidebar:"tutorialSidebar",previous:{title:"histcont",permalink:"/sdk/reference/stocks/gov/histcont"},next:{title:"lasttrades",permalink:"/sdk/reference/stocks/gov/lasttrades"}},u={},h=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Parameters",id:"parameters-1",level:2},{value:"Returns",id:"returns-1",level:2}];function p(e){const t={a:"a",code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.A,{title:"stocks.gov.lastcontracts - Reference | OpenBB SDK Docs"}),"\n","\n",(0,n.jsxs)(o.A,{children:[(0,n.jsxs)(l.A,{value:"model",label:"Model",default:!0,children:[(0,n.jsx)(t.p,{children:"Get last government contracts [Source: quiverquant.com]"}),(0,n.jsxs)(t.p,{children:["Source Code: [",(0,n.jsx)(t.a,{href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/government/quiverquant_model.py#L377",children:"link"}),"]"]}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"openbb.stocks.gov.lastcontracts(past_transaction_days: int = 2)\n"})}),(0,n.jsx)(t.hr,{}),(0,n.jsx)(t.h2,{id:"parameters",children:"Parameters"}),(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Default"}),(0,n.jsx)(t.th,{children:"Optional"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"past_transaction_days"}),(0,n.jsx)(t.td,{children:"int"}),(0,n.jsx)(t.td,{children:"Number of days to look back"}),(0,n.jsx)(t.td,{children:"2"}),(0,n.jsx)(t.td,{children:"True"})]})})]}),(0,n.jsx)(t.hr,{}),(0,n.jsx)(t.h2,{id:"returns",children:"Returns"}),(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"pd.DataFrame"}),(0,n.jsx)(t.td,{children:"DataFrame of government contracts"})]})})]}),(0,n.jsx)(t.hr,{})]}),(0,n.jsxs)(l.A,{value:"view",label:"Chart",children:[(0,n.jsx)(t.p,{children:"Last government contracts [Source: quiverquant.com]"}),(0,n.jsxs)(t.p,{children:["Source Code: [",(0,n.jsx)(t.a,{href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/government/quiverquant_view.py#L225",children:"link"}),"]"]}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:'openbb.stocks.gov.lastcontracts_chart(past_transaction_days: int = 2, limit: int = 20, sum_contracts: bool = False, export: str = "", external_axes: Optional[List[matplotlib.axes._axes.Axes]] = None)\n'})}),(0,n.jsx)(t.hr,{}),(0,n.jsx)(t.h2,{id:"parameters-1",children:"Parameters"}),(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Default"}),(0,n.jsx)(t.th,{children:"Optional"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"past_transaction_days"}),(0,n.jsx)(t.td,{children:"int"}),(0,n.jsx)(t.td,{children:"Number of days to look back"}),(0,n.jsx)(t.td,{children:"2"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"limit"}),(0,n.jsx)(t.td,{children:"int"}),(0,n.jsx)(t.td,{children:"Number of contracts to show"}),(0,n.jsx)(t.td,{children:"20"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"sum_contracts"}),(0,n.jsx)(t.td,{children:"bool"}),(0,n.jsx)(t.td,{children:"Flag to show total amount of contracts given out."}),(0,n.jsx)(t.td,{children:"False"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"export"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Format to export data"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"external_axes"}),(0,n.jsx)(t.td,{children:"Optional[List[plt.Axes]]"}),(0,n.jsx)(t.td,{children:"External axes (1 axis is expected in the list), by default None"}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]})]})]}),(0,n.jsx)(t.hr,{}),(0,n.jsx)(t.h2,{id:"returns-1",children:"Returns"}),(0,n.jsx)(t.p,{children:"This function does not return anything"}),(0,n.jsx)(t.hr,{})]})]})]})}function x(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},19365:(e,t,r)=>{r.d(t,{A:()=>o});r(96540);var n=r(34164);const s={tabItem:"tabItem_Ymn6"};var a=r(74848);function o(e){let{children:t,hidden:r,className:o}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,n.A)(s.tabItem,o),hidden:r,children:t})}},94331:(e,t,r)=>{r.d(t,{A:()=>a});r(96540);var n=r(5260),s=r(74848);function a(e){let{title:t}=e;return(0,s.jsx)(n.A,{children:(0,s.jsx)("title",{children:t})})}},18228:(e,t,r)=>{r.d(t,{A:()=>k});var n=r(96540),s=r(34164),a=r(23104),o=r(56347),l=r(205),i=r(57485),c=r(31682),d=r(70679);function u(e){return function(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:s}}=e;return{value:t,label:r,attributes:n,default:s}}))}function h(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??u(r);return function(e){const t=(0,c.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function p(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function x(e){let{queryString:t=!1,groupId:r}=e;const s=(0,o.W6)(),a=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,i.aZ)(a),(0,n.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(s.location.search);t.set(a,e),s.replace({...s.location,search:t.toString()})}),[a,s])]}function m(e){const{defaultValue:t,queryString:r=!1,groupId:s}=e,a=h(e),[o,i]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:a}))),[c,u]=x({queryString:r,groupId:s}),[m,b]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,a]=(0,d.Dv)(r);return[s,(0,n.useCallback)((e=>{r&&a.set(e)}),[r,a])]}({groupId:s}),f=(()=>{const e=c??m;return p({value:e,tabValues:a})?e:null})();(0,l.A)((()=>{f&&i(f)}),[f]);return{selectedValue:o,selectValue:(0,n.useCallback)((e=>{if(!p({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),b(e)}),[u,b,a]),tabValues:a}}var b=r(92303);const f={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};var v=r(74848);function j(e){let{className:t,block:r,selectedValue:n,selectValue:l,tabValues:i}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,a.a_)(),{pathname:u}=(0,o.zy)(),h=e=>{const t=e.currentTarget,r=c.indexOf(t),s=i[r].value;s!==n&&(d(t),l(s))},p=e=>{let t=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{const r=c.indexOf(e.currentTarget)+1;t=c[r]??c[0];break}case"ArrowLeft":{const r=c.indexOf(e.currentTarget)-1;t=c[r]??c[c.length-1];break}}t?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("_group-tab list-none -ml-7 my-6 overflow-auto"),children:i.map((e=>{let{value:t,label:r,attributes:a}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>c.push(e),onKeyDown:p,onClick:h,...a,className:(0,s.A)("font-bold tracking-widest w-fit px-3 inline-flex py-1 uppercase border-b text-lg cursor-pointer",f.tabItem,a?.className,{"border-b-2 pointer-events-none":n===t,"border-b-2 text-[#669dcb] border-[#669dcb]":n===t&&u.startsWith("/terminal"),"border-b-2 text-[#FB923C] border-[#FB923C]":n===t&&u.startsWith("/sdk"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":n!==t&&u.startsWith("/sdk"),"border-b-2 text-[#FB923C] border-[#FB923C]":n===t&&u.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":n!==t&&u.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#abd2f1] hover:border-[#abd2f1]":n!==t&&u.startsWith("/terminal")}),children:r??t},t)}))})}function g(e){let{lazy:t,children:r,selectedValue:s}=e;if(r=Array.isArray(r)?r:[r],t){const e=r.find((e=>e.props.value===s));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:r.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function y(e){const t=m(e);return(0,v.jsxs)("div",{className:(0,s.A)("tabs-container",f.tabList),children:[(0,v.jsx)(j,{...e,...t}),(0,v.jsx)(g,{...e,...t})]})}function k(e){const t=(0,b.A)();return(0,v.jsx)(y,{...e},String(t))}},28453:(e,t,r)=>{r.d(t,{R:()=>o,x:()=>l});var n=r(96540);const s={},a=n.createContext(s);function o(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);