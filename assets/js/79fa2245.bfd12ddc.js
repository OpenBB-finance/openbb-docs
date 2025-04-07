"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[44021],{78819:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>x,frontMatter:()=>c,metadata:()=>o,toc:()=>u});var n=r(74848),s=r(28453),i=r(94331),a=r(18228),l=r(19365);const c={title:"PROFILE",description:"Get general price and performance metrics of a stock with the Equity Information API. Retrieve data such as the symbol, name, price, open price, high price, low price, close price, change in price, change percent, previous close, type, exchange ID, bid, ask, volume, implied volatility, realized volatility, last trade timestamp, annual high, and annual low.",keywords:["equity info","price and performance metrics","stock data","equity profile","symbol","provider","data","parameters","returns","cboe","EquityInfo","warnings","chart","metadata","Data","name","price","open price","high price","low price","close price","change percent","previous close","type","exchange ID","bid","ask","volume","implied volatility","realized volatility","last trade timestamp","annual high","annual low","iv30","hv30","iv60","hv60","iv90","hv90"]},d=void 0,o={id:"excel/reference/equity/profile",title:"PROFILE",description:"Get general price and performance metrics of a stock with the Equity Information API. Retrieve data such as the symbol, name, price, open price, high price, low price, close price, change in price, change percent, previous close, type, exchange ID, bid, ask, volume, implied volatility, realized volatility, last trade timestamp, annual high, and annual low.",source:"@site/content/excel/reference/equity/profile.md",sourceDirName:"excel/reference/equity",slug:"/excel/reference/equity/profile",permalink:"/excel/reference/equity/profile",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/excel/reference/equity/profile.md",tags:[],version:"current",frontMatter:{title:"PROFILE",description:"Get general price and performance metrics of a stock with the Equity Information API. Retrieve data such as the symbol, name, price, open price, high price, low price, close price, change in price, change percent, previous close, type, exchange ID, bid, ask, volume, implied volatility, realized volatility, last trade timestamp, annual high, and annual low.",keywords:["equity info","price and performance metrics","stock data","equity profile","symbol","provider","data","parameters","returns","cboe","EquityInfo","warnings","chart","metadata","Data","name","price","open price","high price","low price","close price","change percent","previous close","type","exchange ID","bid","ask","volume","implied volatility","realized volatility","last trade timestamp","annual high","annual low","iv30","hv30","iv60","hv60","iv90","hv90"]},sidebar:"tutorialSidebar",previous:{title:"QUOTE",permalink:"/excel/reference/equity/price/quote"},next:{title:"FIXEDINCOME",permalink:"/excel/reference/fixedincome/"}},h={},u=[{value:"Syntax",id:"syntax",level:2},{value:"Examples",id:"examples",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Data",id:"data",level:2}];function p(e){const t={code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.A,{title:"EQUITY.PROFILE | OpenBB Add-in for Excel Docs"}),"\n",(0,n.jsx)(t.p,{children:"Get general information about a company. This includes company name, industry, sector and price data."}),"\n",(0,n.jsx)(t.h2,{id:"syntax",children:"Syntax"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-excel",children:"=OBB.EQUITY.PROFILE(symbol)\n"})}),"\n",(0,n.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-excel",children:'=OBB.EQUITY.PROFILE("AAPL")\n'})}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Required"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:"symbol"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:"Text"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:"Symbol to get data for. Multiple comma separated items allowed."})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:"True"})})]})})]}),"\n",(0,n.jsx)(t.hr,{}),"\n","\n",(0,n.jsx)(t.h2,{id:"data",children:"Data"}),"\n",(0,n.jsx)(a.A,{children:(0,n.jsx)(l.A,{value:"fmp",children:(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"symbol"}),(0,n.jsx)(t.td,{children:"Symbol representing the entity requested in the data."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"name"}),(0,n.jsx)(t.td,{children:"Common name of the company."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"cik"}),(0,n.jsx)(t.td,{children:"Central Index Key (CIK) for the requested entity."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"cusip"}),(0,n.jsx)(t.td,{children:"CUSIP identifier for the company."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"isin"}),(0,n.jsx)(t.td,{children:"International Securities Identification Number."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"lei"}),(0,n.jsx)(t.td,{children:"Legal Entity Identifier assigned to the company."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"legal_name"}),(0,n.jsx)(t.td,{children:"Official legal name of the company."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"stock_exchange"}),(0,n.jsx)(t.td,{children:"Stock exchange where the company is traded."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"sic"}),(0,n.jsx)(t.td,{children:"Standard Industrial Classification code for the company."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"short_description"}),(0,n.jsx)(t.td,{children:"Short description of the company."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"long_description"}),(0,n.jsx)(t.td,{children:"Long description of the company."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"ceo"}),(0,n.jsx)(t.td,{children:"Chief Executive Officer of the company."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"company_url"}),(0,n.jsx)(t.td,{children:"URL of the company's website."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"business_address"}),(0,n.jsx)(t.td,{children:"Address of the company's headquarters."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"mailing_address"}),(0,n.jsx)(t.td,{children:"Mailing address of the company."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"business_phone_no"}),(0,n.jsx)(t.td,{children:"Phone number of the company's headquarters."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"hq_address_1"}),(0,n.jsx)(t.td,{children:"Address of the company's headquarters."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"hq_address_2"}),(0,n.jsx)(t.td,{children:"Address of the company's headquarters."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"hq_address_city"}),(0,n.jsx)(t.td,{children:"City of the company's headquarters."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"hq_address_postal_code"}),(0,n.jsx)(t.td,{children:"Zip code of the company's headquarters."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"hq_state"}),(0,n.jsx)(t.td,{children:"State of the company's headquarters."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"hq_country"}),(0,n.jsx)(t.td,{children:"Country of the company's headquarters."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"inc_state"}),(0,n.jsx)(t.td,{children:"State in which the company is incorporated."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"inc_country"}),(0,n.jsx)(t.td,{children:"Country in which the company is incorporated."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"employees"}),(0,n.jsx)(t.td,{children:"Number of employees working for the company."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"entity_legal_form"}),(0,n.jsx)(t.td,{children:"Legal form of the company."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"entity_status"}),(0,n.jsx)(t.td,{children:"Status of the company."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"latest_filing_date"}),(0,n.jsx)(t.td,{children:"Date of the company's latest filing."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"irs_number"}),(0,n.jsx)(t.td,{children:"IRS number assigned to the company."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"sector"}),(0,n.jsx)(t.td,{children:"Sector in which the company operates."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"industry_category"}),(0,n.jsx)(t.td,{children:"Category of industry in which the company operates."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"industry_group"}),(0,n.jsx)(t.td,{children:"Group of industry in which the company operates."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"template"}),(0,n.jsx)(t.td,{children:"Template used to standardize the company's financial statements."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"standardized_active"}),(0,n.jsx)(t.td,{children:"Whether the company is active or not."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"first_fundamental_date"}),(0,n.jsx)(t.td,{children:"Date of the company's first fundamental."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"last_fundamental_date"}),(0,n.jsx)(t.td,{children:"Date of the company's last fundamental."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"first_stock_price_date"}),(0,n.jsx)(t.td,{children:"Date of the company's first stock price."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"last_stock_price_date"}),(0,n.jsx)(t.td,{children:"Date of the company's last stock price."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"id"}),(0,n.jsx)(t.td,{children:"Intrinio ID for the company."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"thea_enabled"}),(0,n.jsx)(t.td,{children:"Whether the company has been enabled for Thea."})]})]})]})})})]})}function x(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},19365:(e,t,r)=>{r.d(t,{A:()=>a});r(96540);var n=r(34164);const s={tabItem:"tabItem_Ymn6"};var i=r(74848);function a(e){let{children:t,hidden:r,className:a}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,n.A)(s.tabItem,a),hidden:r,children:t})}},94331:(e,t,r)=>{r.d(t,{A:()=>i});r(96540);var n=r(5260),s=r(74848);function i(e){let{title:t}=e;return(0,s.jsx)(n.A,{children:(0,s.jsx)("title",{children:t})})}},18228:(e,t,r)=>{r.d(t,{A:()=>w});var n=r(56347),s=r(23104),i=r(96540),a=r(205),l=r(57485),c=r(31682),d=r(89466);function o(e){return function(e){return i.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:s}}=e;return{value:t,label:r,attributes:n,default:s}}))}function h(e){const{values:t,children:r}=e;return(0,i.useMemo)((()=>{const e=t??o(r);return function(e){const t=(0,c.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function u(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:r}=e;const s=(0,n.W6)(),a=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,l.aZ)(a),(0,i.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(s.location.search);t.set(a,e),s.replace({...s.location,search:t.toString()})}),[a,s])]}function x(e){const{defaultValue:t,queryString:r=!1,groupId:n}=e,s=h(e),[l,c]=(0,i.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!u({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:s}))),[o,x]=p({queryString:r,groupId:n}),[m,f]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,s]=(0,d.Dv)(r);return[n,(0,i.useCallback)((e=>{r&&s.set(e)}),[r,s])]}({groupId:n}),j=(()=>{const e=o??m;return u({value:e,tabValues:s})?e:null})();(0,a.A)((()=>{j&&c(j)}),[j]);return{selectedValue:l,selectValue:(0,i.useCallback)((e=>{if(!u({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);c(e),x(e),f(e)}),[x,f,s]),tabValues:s}}var m=r(92303),f=r(34164);const j={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};var y=r(74848);function b(e){let{className:t,block:r,selectedValue:i,selectValue:a,tabValues:l}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,s.a_)(),{pathname:o}=(0,n.zy)(),h=e=>{const t=e.currentTarget,r=c.indexOf(t),n=l[r].value;n!==i&&(d(t),a(n))},u=e=>{let t=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{const r=c.indexOf(e.currentTarget)+1;t=c[r]??c[0];break}case"ArrowLeft":{const r=c.indexOf(e.currentTarget)-1;t=c[r]??c[c.length-1];break}}t?.focus()};return(0,y.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,f.A)("_group-tab list-none -ml-7 my-6 overflow-auto"),children:l.map((e=>{let{value:t,label:r,attributes:n}=e;return(0,y.jsx)("li",{role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,ref:e=>c.push(e),onKeyDown:u,onClick:h,...n,className:(0,f.A)("font-bold tracking-widest w-fit px-3 inline-flex py-1 uppercase border-b text-lg cursor-pointer",j.tabItem,n?.className,{"border-b-2 pointer-events-none":i===t,"border-b-2 text-[#669dcb] border-[#669dcb]":i===t&&o.startsWith("/workspace"),"border-b-2 text-[#FB923C] border-[#FB923C]":i===t&&o.startsWith("/sdk"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":i!==t&&o.startsWith("/sdk"),"border-b-2 text-[#FB923C] border-[#FB923C]":i===t&&o.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":i!==t&&o.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#abd2f1] hover:border-[#abd2f1]":i!==t&&o.startsWith("/workspace")}),children:r??t},t)}))})}function v(e){let{lazy:t,children:r,selectedValue:n}=e;if(r=Array.isArray(r)?r:[r],t){const e=r.find((e=>e.props.value===n));return e?(0,i.cloneElement)(e,{className:"margin-top--md"}):null}return(0,y.jsx)("div",{className:"margin-top--md",children:r.map(((e,t)=>(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==n})))})}function g(e){const t=x(e);return(0,y.jsxs)("div",{className:(0,f.A)("tabs-container",j.tabList),children:[(0,y.jsx)(b,{...e,...t}),(0,y.jsx)(v,{...e,...t})]})}function w(e){const t=(0,m.A)();return(0,y.jsx)(g,{...e},String(t))}},28453:(e,t,r)=>{r.d(t,{R:()=>a,x:()=>l});var n=r(96540);const s={},i=n.createContext(s);function a(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);