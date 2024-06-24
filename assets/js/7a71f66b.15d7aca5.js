"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[86827],{92812:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>d,default:()=>f,frontMatter:()=>i,metadata:()=>c,toc:()=>h});var r=n(74848),o=n(28453),l=n(94331),s=n(18228),a=n(19365);const i={title:"holdv",description:"Detailed documentation of the holdv function in portfolio module of OpenBB finance dealing with getting and displaying holdings of assets. Learn how to use and understand the parameters, source code and examples included.",keywords:["OpenBB finance documentation","holdv function OpenBB","portfolio module OpenBB","portfolio engine","get holdings value","holdv chart display","assets holdings","Python finance tools","portfolio management OpenBB","OpenBB assets management"]},d=void 0,c={id:"sdk/reference/portfolio/holdv",title:"holdv",description:"Detailed documentation of the holdv function in portfolio module of OpenBB finance dealing with getting and displaying holdings of assets. Learn how to use and understand the parameters, source code and examples included.",source:"@site/content/sdk/reference/portfolio/holdv.md",sourceDirName:"sdk/reference/portfolio",slug:"/sdk/reference/portfolio/holdv",permalink:"/sdk/reference/portfolio/holdv",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/sdk/reference/portfolio/holdv.md",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1719247347e3,frontMatter:{title:"holdv",description:"Detailed documentation of the holdv function in portfolio module of OpenBB finance dealing with getting and displaying holdings of assets. Learn how to use and understand the parameters, source code and examples included.",keywords:["OpenBB finance documentation","holdv function OpenBB","portfolio module OpenBB","portfolio engine","get holdings value","holdv chart display","assets holdings","Python finance tools","portfolio management OpenBB","OpenBB assets management"]},sidebar:"tutorialSidebar",previous:{title:"holdp",permalink:"/sdk/reference/portfolio/holdp"},next:{title:"load",permalink:"/sdk/reference/portfolio/load"}},u={},h=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Parameters",id:"parameters-1",level:2},{value:"Returns",id:"returns-1",level:2}];function p(e){const t={a:"a",code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(l.A,{title:"portfolio.holdv - Reference | OpenBB SDK Docs"}),"\n","\n",(0,r.jsxs)(s.A,{children:[(0,r.jsxs)(a.A,{value:"model",label:"Model",default:!0,children:[(0,r.jsx)(t.p,{children:"Get holdings of assets (absolute value)"}),(0,r.jsxs)(t.p,{children:["Source Code: [",(0,r.jsx)(t.a,{href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/portfolio/portfolio_model.py#L135",children:"link"}),"]"]}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:"openbb.portfolio.holdv(portfolio_engine: portfolio_engine.PortfolioEngine)\n"})}),(0,r.jsx)(t.hr,{}),(0,r.jsx)(t.h2,{id:"parameters",children:"Parameters"}),(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"}),(0,r.jsx)(t.th,{children:"Default"}),(0,r.jsx)(t.th,{children:"Optional"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"portfolio_engine"}),(0,r.jsx)(t.td,{children:"PortfolioEngine"}),(0,r.jsxs)(t.td,{children:["PortfolioEngine class instance, this will hold transactions and perform calculations.",(0,r.jsx)("br",{}),"Use ",(0,r.jsx)(t.code,{children:"portfolio.load"})," to create a PortfolioEngine."]}),(0,r.jsx)(t.td,{children:"None"}),(0,r.jsx)(t.td,{children:"False"})]})})]}),(0,r.jsx)(t.hr,{}),(0,r.jsx)(t.h2,{id:"returns",children:"Returns"}),(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"pd.DataFrame"}),(0,r.jsx)(t.td,{children:"DataFrame of holdings value"})]})})]}),(0,r.jsx)(t.hr,{}),(0,r.jsx)(t.h2,{id:"examples",children:"Examples"}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:'from openbb_terminal.sdk import openbb\np = openbb.portfolio.load("openbb_terminal/miscellaneous/portfolio_examples/holdings/example.csv")\noutput = openbb.portfolio.holdv(p)\n'})}),(0,r.jsx)(t.hr,{})]}),(0,r.jsxs)(a.A,{value:"view",label:"Chart",children:[(0,r.jsx)(t.p,{children:"Display holdings of assets (absolute value)"}),(0,r.jsxs)(t.p,{children:["Source Code: [",(0,r.jsx)(t.a,{href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/portfolio/portfolio_view.py#L713",children:"link"}),"]"]}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:'openbb.portfolio.holdv_chart(portfolio_engine: portfolio_engine.PortfolioEngine, unstack: bool = False, raw: bool = False, limit: int = 10, export: str = "", external_axes: Optional[matplotlib.axes._axes.Axes] = None)\n'})}),(0,r.jsx)(t.hr,{}),(0,r.jsx)(t.h2,{id:"parameters-1",children:"Parameters"}),(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"}),(0,r.jsx)(t.th,{children:"Default"}),(0,r.jsx)(t.th,{children:"Optional"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"portfolio_engine"}),(0,r.jsx)(t.td,{children:"PortfolioEngine"}),(0,r.jsxs)(t.td,{children:["PortfolioEngine class instance, this will hold transactions and perform calculations.",(0,r.jsx)("br",{}),"Use ",(0,r.jsx)(t.code,{children:"portfolio.load"})," to create a PortfolioEngine."]}),(0,r.jsx)(t.td,{children:"None"}),(0,r.jsx)(t.td,{children:"False"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"unstack"}),(0,r.jsx)(t.td,{children:"bool"}),(0,r.jsx)(t.td,{children:"Individual assets over time"}),(0,r.jsx)(t.td,{children:"False"}),(0,r.jsx)(t.td,{children:"True"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"raw"}),(0,r.jsx)(t.td,{children:"bool"}),(0,r.jsx)(t.td,{children:"To display raw data"}),(0,r.jsx)(t.td,{children:"False"}),(0,r.jsx)(t.td,{children:"True"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"limit"}),(0,r.jsx)(t.td,{children:"int"}),(0,r.jsx)(t.td,{children:"Number of past market days to display holdings"}),(0,r.jsx)(t.td,{children:"10"}),(0,r.jsx)(t.td,{children:"True"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"export"}),(0,r.jsx)(t.td,{children:"str"}),(0,r.jsx)(t.td,{children:"Format to export plot"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"True"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"external_axes"}),(0,r.jsx)(t.td,{children:"plt.Axes"}),(0,r.jsx)(t.td,{children:"Optional axes to display plot on"}),(0,r.jsx)(t.td,{children:"None"}),(0,r.jsx)(t.td,{children:"True"})]})]})]}),(0,r.jsx)(t.hr,{}),(0,r.jsx)(t.h2,{id:"returns-1",children:"Returns"}),(0,r.jsx)(t.p,{children:"This function does not return anything"}),(0,r.jsx)(t.hr,{})]})]})]})}function f(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},19365:(e,t,n)=>{n.d(t,{A:()=>s});n(96540);var r=n(34164);const o={tabItem:"tabItem_Ymn6"};var l=n(74848);function s(e){let{children:t,hidden:n,className:s}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,r.A)(o.tabItem,s),hidden:n,children:t})}},94331:(e,t,n)=>{n.d(t,{A:()=>l});n(96540);var r=n(5260),o=n(74848);function l(e){let{title:t}=e;return(0,o.jsx)(r.A,{children:(0,o.jsx)("title",{children:t})})}},18228:(e,t,n)=>{n.d(t,{A:()=>B});var r=n(96540),o=n(34164),l=n(23104),s=n(56347),a=n(205),i=n(57485),d=n(31682),c=n(70679);function u(e){return function(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:o}}=e;return{value:t,label:n,attributes:r,default:o}}))}function h(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??u(n);return function(e){const t=(0,d.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const o=(0,s.W6)(),l=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,i.aZ)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(o.location.search);t.set(l,e),o.replace({...o.location,search:t.toString()})}),[l,o])]}function x(e){const{defaultValue:t,queryString:n=!1,groupId:o}=e,l=h(e),[s,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:l}))),[d,u]=f({queryString:n,groupId:o}),[x,m]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[o,l]=(0,c.Dv)(n);return[o,(0,r.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:o}),b=(()=>{const e=d??x;return p({value:e,tabValues:l})?e:null})();(0,a.A)((()=>{b&&i(b)}),[b]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),m(e)}),[u,m,l]),tabValues:l}}var m=n(92303);const b={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};var j=n(74848);function v(e){let{className:t,block:n,selectedValue:r,selectValue:a,tabValues:i}=e;const d=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.a_)(),{pathname:u}=(0,s.zy)(),h=e=>{const t=e.currentTarget,n=d.indexOf(t),o=i[n].value;o!==r&&(c(t),a(o))},p=e=>{let t=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{const n=d.indexOf(e.currentTarget)+1;t=d[n]??d[0];break}case"ArrowLeft":{const n=d.indexOf(e.currentTarget)-1;t=d[n]??d[d.length-1];break}}t?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("_group-tab list-none -ml-7 my-6 overflow-auto"),children:i.map((e=>{let{value:t,label:n,attributes:l}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>d.push(e),onKeyDown:p,onClick:h,...l,className:(0,o.A)("font-bold tracking-widest w-fit px-3 inline-flex py-1 uppercase border-b text-lg cursor-pointer",b.tabItem,l?.className,{"border-b-2 pointer-events-none":r===t,"border-b-2 text-[#669dcb] border-[#669dcb]":r===t&&u.startsWith("/terminal"),"border-b-2 text-[#FB923C] border-[#FB923C]":r===t&&u.startsWith("/sdk"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":r!==t&&u.startsWith("/sdk"),"border-b-2 text-[#FB923C] border-[#FB923C]":r===t&&u.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":r!==t&&u.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#abd2f1] hover:border-[#abd2f1]":r!==t&&u.startsWith("/terminal")}),children:n??t},t)}))})}function g(e){let{lazy:t,children:n,selectedValue:o}=e;if(n=Array.isArray(n)?n:[n],t){const e=n.find((e=>e.props.value===o));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:n.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==o})))})}function y(e){const t=x(e);return(0,j.jsxs)("div",{className:(0,o.A)("tabs-container",b.tabList),children:[(0,j.jsx)(v,{...e,...t}),(0,j.jsx)(g,{...e,...t})]})}function B(e){const t=(0,m.A)();return(0,j.jsx)(y,{...e},String(t))}},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>a});var r=n(96540);const o={},l=r.createContext(o);function s(e){const t=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(l.Provider,{value:t},e.children)}}}]);