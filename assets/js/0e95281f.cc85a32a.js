"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[14015],{12141:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>h,contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>d,toc:()=>u});var s=t(74848),n=t(28453),a=t(94331),l=t(18228),i=t(19365);const o={title:"top_nfts",description:"Learn how to get and sort top NFT collections data by using OpenBB crypto discovery tools. Source code, and parameters for customization are provided.",keywords:["nfts","Top NFTs","crypto","cryptocurrency","DappRadar","crypto discovery","NFT collections"]},c=void 0,d={id:"sdk/reference/crypto/disc/top_nfts",title:"top_nfts",description:"Learn how to get and sort top NFT collections data by using OpenBB crypto discovery tools. Source code, and parameters for customization are provided.",source:"@site/content/sdk/reference/crypto/disc/top_nfts.md",sourceDirName:"sdk/reference/crypto/disc",slug:"/sdk/reference/crypto/disc/top_nfts",permalink:"/sdk/reference/crypto/disc/top_nfts",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/sdk/reference/crypto/disc/top_nfts.md",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1719247347e3,frontMatter:{title:"top_nfts",description:"Learn how to get and sort top NFT collections data by using OpenBB crypto discovery tools. Source code, and parameters for customization are provided.",keywords:["nfts","Top NFTs","crypto","cryptocurrency","DappRadar","crypto discovery","NFT collections"]},sidebar:"tutorialSidebar",previous:{title:"top_games",permalink:"/sdk/reference/crypto/disc/top_games"},next:{title:"trending",permalink:"/sdk/reference/crypto/disc/trending"}},h={},u=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Parameters",id:"parameters-1",level:2},{value:"Returns",id:"returns-1",level:2}];function m(e){const r={a:"a",annotation:"annotation",code:"code",h2:"h2",hr:"hr",math:"math",mi:"mi",mo:"mo",mrow:"mrow",p:"p",pre:"pre",semantics:"semantics",span:"span",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a.A,{title:"crypto.disc.top_nfts - Reference | OpenBB SDK Docs"}),"\n","\n",(0,s.jsxs)(l.A,{children:[(0,s.jsxs)(i.A,{value:"model",label:"Model",default:!0,children:[(0,s.jsxs)(r.p,{children:["Get top nft collections [Source: ",(0,s.jsx)(r.a,{href:"https://dappradar.com/",children:"https://dappradar.com/"}),"]"]}),(0,s.jsxs)(r.p,{children:["Source Code: [",(0,s.jsx)(r.a,{href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/discovery/dappradar_model.py#L79",children:"link"}),"]"]}),(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-python",children:'openbb.crypto.disc.top_nfts(sortby: str = "", limit: int = 10)\n'})}),(0,s.jsx)(r.hr,{}),(0,s.jsx)(r.h2,{id:"parameters",children:"Parameters"}),(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Name"}),(0,s.jsx)(r.th,{children:"Type"}),(0,s.jsx)(r.th,{children:"Description"}),(0,s.jsx)(r.th,{children:"Default"}),(0,s.jsx)(r.th,{children:"Optional"})]})}),(0,s.jsx)(r.tbody,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"sortby"}),(0,s.jsx)(r.td,{children:"str"}),(0,s.jsx)(r.td,{children:"Key by which to sort data"}),(0,s.jsx)(r.td,{}),(0,s.jsx)(r.td,{children:"True"})]})})]}),(0,s.jsx)(r.hr,{}),(0,s.jsx)(r.h2,{id:"returns",children:"Returns"}),(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Type"}),(0,s.jsx)(r.th,{children:"Description"})]})}),(0,s.jsx)(r.tbody,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"pd.DataFrame"}),(0,s.jsxs)(r.td,{children:["NFTs Columns: Name, Protocols, Floor Price [",(0,s.jsxs)(r.span,{className:"katex",children:[(0,s.jsx)(r.span,{className:"katex-mathml",children:(0,s.jsx)(r.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,s.jsxs)(r.semantics,{children:[(0,s.jsxs)(r.mrow,{children:[(0,s.jsx)(r.mo,{stretchy:"false",children:"]"}),(0,s.jsx)(r.mo,{separator:"true",children:","}),(0,s.jsx)(r.mi,{children:"A"}),(0,s.jsx)(r.mi,{children:"v"}),(0,s.jsx)(r.mi,{children:"g"}),(0,s.jsx)(r.mi,{children:"P"}),(0,s.jsx)(r.mi,{children:"r"}),(0,s.jsx)(r.mi,{children:"i"}),(0,s.jsx)(r.mi,{children:"c"}),(0,s.jsx)(r.mi,{children:"e"}),(0,s.jsx)(r.mo,{stretchy:"false",children:"["})]}),(0,s.jsx)(r.annotation,{encoding:"application/x-tex",children:"], Avg Price ["})]})})}),(0,s.jsx)(r.span,{className:"katex-html","aria-hidden":"true",children:(0,s.jsxs)(r.span,{className:"base",children:[(0,s.jsx)(r.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.jsx)(r.span,{className:"mclose",children:"]"}),(0,s.jsx)(r.span,{className:"mpunct",children:","}),(0,s.jsx)(r.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,s.jsx)(r.span,{className:"mord mathnormal",children:"A"}),(0,s.jsx)(r.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"vg"}),(0,s.jsx)(r.span,{className:"mord mathnormal",style:{marginRight:"0.13889em"},children:"P"}),(0,s.jsx)(r.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"r"}),(0,s.jsx)(r.span,{className:"mord mathnormal",children:"i"}),(0,s.jsx)(r.span,{className:"mord mathnormal",children:"ce"}),(0,s.jsx)(r.span,{className:"mopen",children:"["})]})})]}),"], Market Cap [",(0,s.jsxs)(r.span,{className:"katex",children:[(0,s.jsx)(r.span,{className:"katex-mathml",children:(0,s.jsx)(r.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,s.jsxs)(r.semantics,{children:[(0,s.jsxs)(r.mrow,{children:[(0,s.jsx)(r.mo,{stretchy:"false",children:"]"}),(0,s.jsx)(r.mo,{separator:"true",children:","}),(0,s.jsx)(r.mi,{children:"V"}),(0,s.jsx)(r.mi,{children:"o"}),(0,s.jsx)(r.mi,{children:"l"}),(0,s.jsx)(r.mi,{children:"u"}),(0,s.jsx)(r.mi,{children:"m"}),(0,s.jsx)(r.mi,{children:"e"}),(0,s.jsx)(r.mo,{stretchy:"false",children:"["})]}),(0,s.jsx)(r.annotation,{encoding:"application/x-tex",children:"], Volume ["})]})})}),(0,s.jsx)(r.span,{className:"katex-html","aria-hidden":"true",children:(0,s.jsxs)(r.span,{className:"base",children:[(0,s.jsx)(r.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.jsx)(r.span,{className:"mclose",children:"]"}),(0,s.jsx)(r.span,{className:"mpunct",children:","}),(0,s.jsx)(r.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,s.jsx)(r.span,{className:"mord mathnormal",style:{marginRight:"0.22222em"},children:"V"}),(0,s.jsx)(r.span,{className:"mord mathnormal",children:"o"}),(0,s.jsx)(r.span,{className:"mord mathnormal",style:{marginRight:"0.01968em"},children:"l"}),(0,s.jsx)(r.span,{className:"mord mathnormal",children:"u"}),(0,s.jsx)(r.span,{className:"mord mathnormal",children:"m"}),(0,s.jsx)(r.span,{className:"mord mathnormal",children:"e"}),(0,s.jsx)(r.span,{className:"mopen",children:"["})]})})]}),"]"]})]})})]}),(0,s.jsx)(r.hr,{})]}),(0,s.jsxs)(i.A,{value:"view",label:"Chart",children:[(0,s.jsxs)(r.p,{children:["Prints table showing top nft collections [Source: ",(0,s.jsx)(r.a,{href:"https://dappradar.com/",children:"https://dappradar.com/"}),"]"]}),(0,s.jsxs)(r.p,{children:["Source Code: [",(0,s.jsx)(r.a,{href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/discovery/dappradar_view.py#L20",children:"link"}),"]"]}),(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-python",children:'openbb.crypto.disc.top_nfts_chart(limit: int = 10, sortby: str = "", export: str = "")\n'})}),(0,s.jsx)(r.hr,{}),(0,s.jsx)(r.h2,{id:"parameters-1",children:"Parameters"}),(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Name"}),(0,s.jsx)(r.th,{children:"Type"}),(0,s.jsx)(r.th,{children:"Description"}),(0,s.jsx)(r.th,{children:"Default"}),(0,s.jsx)(r.th,{children:"Optional"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"limit"}),(0,s.jsx)(r.td,{children:"int"}),(0,s.jsx)(r.td,{children:"Number of records to display"}),(0,s.jsx)(r.td,{children:"10"}),(0,s.jsx)(r.td,{children:"True"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"sortby"}),(0,s.jsx)(r.td,{children:"str"}),(0,s.jsx)(r.td,{children:"Key by which to sort data"}),(0,s.jsx)(r.td,{}),(0,s.jsx)(r.td,{children:"True"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"export"}),(0,s.jsx)(r.td,{children:"str"}),(0,s.jsx)(r.td,{children:"Export dataframe data to csv,json,xlsx file"}),(0,s.jsx)(r.td,{}),(0,s.jsx)(r.td,{children:"True"})]})]})]}),(0,s.jsx)(r.hr,{}),(0,s.jsx)(r.h2,{id:"returns-1",children:"Returns"}),(0,s.jsx)(r.p,{children:"This function does not return anything"}),(0,s.jsx)(r.hr,{})]})]})]})}function p(e={}){const{wrapper:r}={...(0,n.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}},19365:(e,r,t)=>{t.d(r,{A:()=>l});t(96540);var s=t(34164);const n={tabItem:"tabItem_Ymn6"};var a=t(74848);function l(e){let{children:r,hidden:t,className:l}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,s.A)(n.tabItem,l),hidden:t,children:r})}},94331:(e,r,t)=>{t.d(r,{A:()=>a});t(96540);var s=t(5260),n=t(74848);function a(e){let{title:r}=e;return(0,n.jsx)(s.A,{children:(0,n.jsx)("title",{children:r})})}},18228:(e,r,t)=>{t.d(r,{A:()=>N});var s=t(96540),n=t(34164),a=t(23104),l=t(56347),i=t(205),o=t(57485),c=t(31682),d=t(70679);function h(e){return function(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:r,label:t,attributes:s,default:n}}=e;return{value:r,label:t,attributes:s,default:n}}))}function u(e){const{values:r,children:t}=e;return(0,s.useMemo)((()=>{const e=r??h(t);return function(e){const r=(0,c.X)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,t])}function m(e){let{value:r,tabValues:t}=e;return t.some((e=>e.value===r))}function p(e){let{queryString:r=!1,groupId:t}=e;const n=(0,l.W6)(),a=function(e){let{queryString:r=!1,groupId:t}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:r,groupId:t});return[(0,o.aZ)(a),(0,s.useCallback)((e=>{if(!a)return;const r=new URLSearchParams(n.location.search);r.set(a,e),n.replace({...n.location,search:r.toString()})}),[a,n])]}function x(e){const{defaultValue:r,queryString:t=!1,groupId:n}=e,a=u(e),[l,o]=(0,s.useState)((()=>function(e){let{defaultValue:r,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!m({value:r,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const s=t.find((e=>e.default))??t[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:r,tabValues:a}))),[c,h]=p({queryString:t,groupId:n}),[x,j]=function(e){let{groupId:r}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(r),[n,a]=(0,d.Dv)(t);return[n,(0,s.useCallback)((e=>{t&&a.set(e)}),[t,a])]}({groupId:n}),f=(()=>{const e=c??x;return m({value:e,tabValues:a})?e:null})();(0,i.A)((()=>{f&&o(f)}),[f]);return{selectedValue:l,selectValue:(0,s.useCallback)((e=>{if(!m({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);o(e),h(e),j(e)}),[h,j,a]),tabValues:a}}var j=t(92303);const f={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};var b=t(74848);function y(e){let{className:r,block:t,selectedValue:s,selectValue:i,tabValues:o}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,a.a_)(),{pathname:h}=(0,l.zy)(),u=e=>{const r=e.currentTarget,t=c.indexOf(r),n=o[t].value;n!==s&&(d(r),i(n))},m=e=>{let r=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;r=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;r=c[t]??c[c.length-1];break}}r?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.A)("_group-tab list-none -ml-7 my-6 overflow-auto"),children:o.map((e=>{let{value:r,label:t,attributes:a}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:s===r?0:-1,"aria-selected":s===r,ref:e=>c.push(e),onKeyDown:m,onClick:u,...a,className:(0,n.A)("font-bold tracking-widest w-fit px-3 inline-flex py-1 uppercase border-b text-lg cursor-pointer",f.tabItem,a?.className,{"border-b-2 pointer-events-none":s===r,"border-b-2 text-[#669dcb] border-[#669dcb]":s===r&&h.startsWith("/terminal"),"border-b-2 text-[#FB923C] border-[#FB923C]":s===r&&h.startsWith("/sdk"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":s!==r&&h.startsWith("/sdk"),"border-b-2 text-[#FB923C] border-[#FB923C]":s===r&&h.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":s!==r&&h.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#abd2f1] hover:border-[#abd2f1]":s!==r&&h.startsWith("/terminal")}),children:t??r},r)}))})}function g(e){let{lazy:r,children:t,selectedValue:n}=e;if(t=Array.isArray(t)?t:[t],r){const e=t.find((e=>e.props.value===n));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:t.map(((e,r)=>(0,s.cloneElement)(e,{key:r,hidden:e.props.value!==n})))})}function v(e){const r=x(e);return(0,b.jsxs)("div",{className:(0,n.A)("tabs-container",f.tabList),children:[(0,b.jsx)(y,{...e,...r}),(0,b.jsx)(g,{...e,...r})]})}function N(e){const r=(0,j.A)();return(0,b.jsx)(v,{...e},String(r))}},28453:(e,r,t)=>{t.d(r,{R:()=>l,x:()=>i});var s=t(96540);const n={},a=s.createContext(n);function l(e){const r=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:l(e.components),s.createElement(a.Provider,{value:r},e.children)}}}]);