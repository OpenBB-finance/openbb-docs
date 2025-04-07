"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[15728],{18279:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>u,frontMatter:()=>c,metadata:()=>o,toc:()=>h});var r=t(74848),s=t(28453),l=t(18228),d=t(19365);const c={title:"Index Constituents",description:"Get Index Constituents"},i=void 0,o={id:"platform/data_models/IndexConstituents",title:"Index Constituents",description:"Get Index Constituents",source:"@site/content/platform/data_models/IndexConstituents.md",sourceDirName:"platform/data_models",slug:"/platform/data_models/IndexConstituents",permalink:"/platform/data_models/IndexConstituents",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/platform/data_models/IndexConstituents.md",tags:[],version:"current",frontMatter:{title:"Index Constituents",description:"Get Index Constituents"},sidebar:"tutorialSidebar",previous:{title:"Income Statement Growth",permalink:"/platform/data_models/IncomeStatementGrowth"},next:{title:"Index Historical",permalink:"/platform/data_models/IndexHistorical"}},a={},h=[{value:"Implementation details",id:"implementation-details",level:2},{value:"Class names",id:"class-names",level:3},{value:"Import Statement",id:"import-statement",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Data",id:"data",level:2}];function x(e){const n={code:"code",em:"em",h2:"h2",h3:"h3",hr:"hr",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"implementation-details",children:"Implementation details"}),"\n",(0,r.jsx)(n.h3,{id:"class-names",children:"Class names"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Model name"}),(0,r.jsx)(n.th,{children:"Parameters class"}),(0,r.jsx)(n.th,{children:"Data class"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"IndexConstituents"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"IndexConstituentsQueryParams"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"IndexConstituentsData"})})]})})]}),"\n",(0,r.jsx)(n.h3,{id:"import-statement",children:"Import Statement"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"from openbb_core.provider.standard_models.index_constituents import (\nIndexConstituentsData,\nIndexConstituentsQueryParams,\n)\n"})}),"\n",(0,r.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(l.A,{children:[(0,r.jsxs)(d.A,{value:"standard",label:"standard",children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"symbol"})}),": ",(0,r.jsx)(n.code,{children:"str"})]}),(0,r.jsx)(n.p,{children:"Symbol to get data for."}),(0,r.jsxs)(n.p,{children:["\u2022 ",(0,r.jsx)(n.em,{children:"Optional:"})," ",(0,r.jsx)(n.code,{children:"False"})]})]}),(0,r.jsxs)(d.A,{value:"cboe",label:"cboe",children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"symbol"})}),": ",(0,r.jsx)(n.code,{children:"Literal['BAT20P', 'BBE20P', 'BCH20P', 'BCHM30P', 'BDE40P', 'BDEM50P', 'BDES50P', 'BDK25P', 'BEP50P', 'BEPACP', 'BEPBUS', 'BEPCNC', 'BEPCONC', 'BEPCONS', 'BEPENGY', 'BEPFIN', 'BEPHLTH', 'BEPIND', 'BEPNEM', 'BEPTEC', 'BEPTEL', 'BEPUTL', 'BEPXUKP', 'BES35P', 'BEZ50P', 'BEZACP', 'BFI25P', 'BFR40P', 'BFRM20P', 'BIE20P', 'BIT40P', 'BNL25P', 'BNLM25P', 'BNO25G', 'BNORD40P', 'BPT20P', 'BSE30P', 'BUK100P', 'BUK250P', 'BUK350P', 'BUKAC', 'BUKBISP', 'BUKBUS', 'BUKCNC', 'BUKCONC', 'BUKCONS', 'BUKENGY', 'BUKFIN', 'BUKHI50P', 'BUKHLTH', 'BUKIND', 'BUKLO50P', 'BUKMINP', 'BUKNEM', 'BUKSC', 'BUKTEC', 'BUKTEL', 'BUKUTL']"})]}),(0,r.jsx)(n.p,{children:"None"}),(0,r.jsxs)(n.p,{children:["\u2022 ",(0,r.jsx)(n.em,{children:"Default:"})," ",(0,r.jsx)(n.code,{children:"BUK100P"})]}),(0,r.jsxs)(n.p,{children:["\u2022 ",(0,r.jsx)(n.em,{children:"Optional:"})," ",(0,r.jsx)(n.code,{children:"True"})]})]}),(0,r.jsxs)(d.A,{value:"fmp",label:"fmp",children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"symbol"})}),": ",(0,r.jsx)(n.code,{children:"Literal['dowjones', 'sp500', 'nasdaq']"})]}),(0,r.jsx)(n.p,{children:"None"}),(0,r.jsxs)(n.p,{children:["\u2022 ",(0,r.jsx)(n.em,{children:"Default:"})," ",(0,r.jsx)(n.code,{children:"dowjones"})]}),(0,r.jsxs)(n.p,{children:["\u2022 ",(0,r.jsx)(n.em,{children:"Optional:"})," ",(0,r.jsx)(n.code,{children:"True"})]})]}),(0,r.jsxs)(d.A,{value:"tmx",label:"tmx",children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"symbol"})}),": ",(0,r.jsx)(n.code,{children:"str"})]}),(0,r.jsx)(n.p,{children:"Symbol to get data for."}),(0,r.jsxs)(n.p,{children:["\u2022 ",(0,r.jsx)(n.em,{children:"Optional:"})," ",(0,r.jsx)(n.code,{children:"False"})]}),(0,r.jsx)(n.hr,{}),(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"use_cache"})}),": ",(0,r.jsx)(n.code,{children:"bool"})]}),(0,r.jsx)(n.p,{children:"Whether to use a cached request. Index data is from a single JSON file, updated each day after close. It is cached for one day. To bypass, set to False."}),(0,r.jsxs)(n.p,{children:["\u2022 ",(0,r.jsx)(n.em,{children:"Default:"})," ",(0,r.jsx)(n.code,{children:"True"})]}),(0,r.jsxs)(n.p,{children:["\u2022 ",(0,r.jsx)(n.em,{children:"Optional:"})," ",(0,r.jsx)(n.code,{children:"True"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"data",children:"Data"}),"\n",(0,r.jsxs)(l.A,{children:[(0,r.jsxs)(d.A,{value:"standard",label:"standard",children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"symbol"})}),": ",(0,r.jsx)(n.code,{children:"str"})]}),(0,r.jsx)(n.p,{children:"Symbol representing the entity requested in the data."}),(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"name"})}),": ",(0,r.jsx)(n.code,{children:"str"})]}),(0,r.jsx)(n.p,{children:"Name of the constituent company in the index."})]}),(0,r.jsxs)(d.A,{value:"cboe",label:"cboe",children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"symbol"})}),": ",(0,r.jsx)(n.code,{children:"str"})]}),(0,r.jsx)(n.p,{children:"Symbol representing the entity requested in the data."}),(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"name"})}),": ",(0,r.jsx)(n.code,{children:"str"})]}),(0,r.jsx)(n.p,{children:"Name of the constituent company in the index."}),(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"security_type"})}),": ",(0,r.jsx)(n.code,{children:"str"})]}),(0,r.jsx)(n.p,{children:"The type of security represented."}),(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"last_price"})}),": ",(0,r.jsx)(n.code,{children:"float"})]}),(0,r.jsx)(n.p,{children:"Last price for the symbol."}),(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"open"})}),": ",(0,r.jsx)(n.code,{children:"float"})]}),(0,r.jsx)(n.p,{children:"The open price."}),(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"high"})}),": ",(0,r.jsx)(n.code,{children:"float"})]}),(0,r.jsx)(n.p,{children:"The high price."}),(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"low"})}),": ",(0,r.jsx)(n.code,{children:"float"})]}),(0,r.jsx)(n.p,{children:"The low price."}),(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"close"})}),": ",(0,r.jsx)(n.code,{children:"float"})]}),(0,r.jsx)(n.p,{children:"The close price."}),(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"volume"})}),": ",(0,r.jsx)(n.code,{children:"int"})]}),(0,r.jsx)(n.p,{children:"The trading volume."}),(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"prev_close"})}),": ",(0,r.jsx)(n.code,{children:"float"})]}),(0,r.jsx)(n.p,{children:"The previous close price."}),(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"change"})}),": ",(0,r.jsx)(n.code,{children:"float"})]}),(0,r.jsx)(n.p,{children:"Change in price."}),(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"change_percent"})}),": ",(0,r.jsx)(n.code,{children:"float"})]}),(0,r.jsx)(n.p,{children:"Change in price as a normalized percentage."}),(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"tick"})}),": ",(0,r.jsx)(n.code,{children:"str"})]}),(0,r.jsx)(n.p,{children:"Whether the last sale was an up or down tick."}),(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"last_trade_time"})}),": ",(0,r.jsx)(n.code,{children:"datetime"})]}),(0,r.jsx)(n.p,{children:"Last trade timestamp for the symbol."}),(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"asset_type"})}),": ",(0,r.jsx)(n.code,{children:"str"})]}),(0,r.jsx)(n.p,{children:"Type of asset."})]}),(0,r.jsxs)(d.A,{value:"fmp",label:"fmp",children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"symbol"})}),": ",(0,r.jsx)(n.code,{children:"str"})]}),(0,r.jsx)(n.p,{children:"Symbol representing the entity requested in the data."}),(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"name"})}),": ",(0,r.jsx)(n.code,{children:"str"})]}),(0,r.jsx)(n.p,{children:"Name of the constituent company in the index."}),(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"sector"})}),": ",(0,r.jsx)(n.code,{children:"str"})]}),(0,r.jsx)(n.p,{children:"Sector the constituent company in the index belongs to."}),(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"sub_sector"})}),": ",(0,r.jsx)(n.code,{children:"str"})]}),(0,r.jsx)(n.p,{children:"Sub-sector the constituent company in the index belongs to."}),(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"headquarter"})}),": ",(0,r.jsx)(n.code,{children:"str"})]}),(0,r.jsx)(n.p,{children:"Location of the headquarter of the constituent company in the index."}),(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"date_first_added"})}),": ",(0,r.jsx)(n.code,{children:"Union[date, str]"})]}),(0,r.jsx)(n.p,{children:"Date the constituent company was added to the index."}),(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"cik"})}),": ",(0,r.jsx)(n.code,{children:"int"})]}),(0,r.jsx)(n.p,{children:"Central Index Key (CIK) for the requested entity."}),(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"founded"})}),": ",(0,r.jsx)(n.code,{children:"Union[date, str]"})]}),(0,r.jsx)(n.p,{children:"Founding year of the constituent company in the index."})]}),(0,r.jsxs)(d.A,{value:"tmx",label:"tmx",children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"symbol"})}),": ",(0,r.jsx)(n.code,{children:"str"})]}),(0,r.jsx)(n.p,{children:"Symbol representing the entity requested in the data."}),(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"name"})}),": ",(0,r.jsx)(n.code,{children:"str"})]}),(0,r.jsx)(n.p,{children:"Name of the constituent company in the index."}),(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"market_value"})}),": ",(0,r.jsx)(n.code,{children:"float"})]}),(0,r.jsx)(n.p,{children:"The quoted market value of the asset."})]})]})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(x,{...e})}):x(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>d});t(96540);var r=t(34164);const s={tabItem:"tabItem_Ymn6"};var l=t(74848);function d(e){let{children:n,hidden:t,className:d}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,r.A)(s.tabItem,d),hidden:t,children:n})}},18228:(e,n,t)=>{t.d(n,{A:()=>B});var r=t(56347),s=t(23104),l=t(96540),d=t(205),c=t(57485),i=t(31682),o=t(89466);function a(e){return function(e){return l.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,l.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:s}}=e;return{value:n,label:t,attributes:r,default:s}}))}function h(e){const{values:n,children:t}=e;return(0,l.useMemo)((()=>{const e=n??a(t);return function(e){const n=(0,i.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function x(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function u(e){let{queryString:n=!1,groupId:t}=e;const s=(0,r.W6)(),d=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,c.aZ)(d),(0,l.useCallback)((e=>{if(!d)return;const n=new URLSearchParams(s.location.search);n.set(d,e),s.replace({...s.location,search:n.toString()})}),[d,s])]}function j(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,s=h(e),[c,i]=(0,l.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!x({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:s}))),[a,j]=u({queryString:t,groupId:r}),[p,m]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,s]=(0,o.Dv)(t);return[r,(0,l.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:r}),b=(()=>{const e=a??p;return x({value:e,tabValues:s})?e:null})();(0,d.A)((()=>{b&&i(b)}),[b]);return{selectedValue:c,selectValue:(0,l.useCallback)((e=>{if(!x({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);i(e),j(e),m(e)}),[j,m,s]),tabValues:s}}var p=t(92303),m=t(34164);const b={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};var f=t(74848);function g(e){let{className:n,block:t,selectedValue:l,selectValue:d,tabValues:c}=e;const i=[],{blockElementScrollPositionUntilNextRender:o}=(0,s.a_)(),{pathname:a}=(0,r.zy)(),h=e=>{const n=e.currentTarget,t=i.indexOf(n),r=c[t].value;r!==l&&(o(n),d(r))},x=e=>{let n=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{const t=i.indexOf(e.currentTarget)+1;n=i[t]??i[0];break}case"ArrowLeft":{const t=i.indexOf(e.currentTarget)-1;n=i[t]??i[i.length-1];break}}n?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,m.A)("_group-tab list-none -ml-7 my-6 overflow-auto"),children:c.map((e=>{let{value:n,label:t,attributes:r}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:l===n?0:-1,"aria-selected":l===n,ref:e=>i.push(e),onKeyDown:x,onClick:h,...r,className:(0,m.A)("font-bold tracking-widest w-fit px-3 inline-flex py-1 uppercase border-b text-lg cursor-pointer",b.tabItem,r?.className,{"border-b-2 pointer-events-none":l===n,"border-b-2 text-[#669dcb] border-[#669dcb]":l===n&&a.startsWith("/workspace"),"border-b-2 text-[#FB923C] border-[#FB923C]":l===n&&a.startsWith("/sdk"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":l!==n&&a.startsWith("/sdk"),"border-b-2 text-[#FB923C] border-[#FB923C]":l===n&&a.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":l!==n&&a.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#abd2f1] hover:border-[#abd2f1]":l!==n&&a.startsWith("/workspace")}),children:t??n},n)}))})}function y(e){let{lazy:n,children:t,selectedValue:r}=e;if(t=Array.isArray(t)?t:[t],n){const e=t.find((e=>e.props.value===r));return e?(0,l.cloneElement)(e,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:t.map(((e,n)=>(0,l.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function v(e){const n=j(e);return(0,f.jsxs)("div",{className:(0,m.A)("tabs-container",b.tabList),children:[(0,f.jsx)(g,{...e,...n}),(0,f.jsx)(y,{...e,...n})]})}function B(e){const n=(0,p.A)();return(0,f.jsx)(v,{...e},String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>d,x:()=>c});var r=t(96540);const s={},l=r.createContext(s);function d(e){const n=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),r.createElement(l.Provider,{value:n},e.children)}}}]);