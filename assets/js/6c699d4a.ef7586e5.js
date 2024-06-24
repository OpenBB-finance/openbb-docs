"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[22455],{65430:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>x,contentTitle:()=>d,default:()=>g,frontMatter:()=>r,metadata:()=>c,toc:()=>h});var s=l(74848),n=l(28453),i=l(94331);const r={title:"Behavioural Analysis",description:"The page introduces the Behavioural Analysis sub-menu, within the Stocks menu, of the OpenBB Terminal.",keywords:["Behavioural Analysis","public sentiment","momentum trading strategies","stocks","companies","reddit","twitter","stocktwits","x","google","API key","/r/wallstreetbets","social sentiment","deep learning algorithms"]},d=void 0,c={id:"terminal/menus/stocks/ba",title:"Behavioural Analysis",description:"The page introduces the Behavioural Analysis sub-menu, within the Stocks menu, of the OpenBB Terminal.",source:"@site/content/terminal/menus/stocks/ba.md",sourceDirName:"terminal/menus/stocks",slug:"/terminal/menus/stocks/ba",permalink:"/terminal/menus/stocks/ba",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/terminal/menus/stocks/ba.md",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1719247347e3,frontMatter:{title:"Behavioural Analysis",description:"The page introduces the Behavioural Analysis sub-menu, within the Stocks menu, of the OpenBB Terminal.",keywords:["Behavioural Analysis","public sentiment","momentum trading strategies","stocks","companies","reddit","twitter","stocktwits","x","google","API key","/r/wallstreetbets","social sentiment","deep learning algorithms"]},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/terminal/menus/stocks/"},next:{title:"Comparison Analysis",permalink:"/terminal/menus/stocks/comparison"}},x={},h=[{value:"Usage",id:"usage",level:2},{value:"Trending",id:"trending",level:3},{value:"Bullbear",id:"bullbear",level:3},{value:"Redditsent",id:"redditsent",level:3},{value:"Queries",id:"queries",level:3}];function a(e){const t={code:"code",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.A,{title:"Behavioural Analysis - Stocks - Menus | OpenBB Terminal Docs"}),"\n",(0,s.jsx)(t.p,{children:"The Behavioural Analysis menu offers the user tools for gauging the overall public sentiment of a company online. The complexity of the tools range from message board scrapers to deep learning algorithms for financial analysis and prediction. Sentiment is particularly useful for momentum trading strategies, discovery, and general fundamental research."}),"\n",(0,s.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,s.jsxs)(t.p,{children:["Navigate into the menu from the Stocks menu by entering, ",(0,s.jsx)(t.code,{children:"ba"}),". Or, by using the absolute path from anywhere in the Terminal:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-console",children:"/stocks/ba\n"})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:"https://github.com/OpenBB-finance/OpenBBTerminal/assets/85772166/5946bc28-95a8-4402-a546-68be140aa025",alt:"Screenshot 2023-10-31 at 1 50 04\u202fPM"})}),"\n",(0,s.jsx)(t.h3,{id:"trending",children:"Trending"}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"trending"})," command gets the list of trending tickers, according to Stocktwits."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-console",children:"/stocks/ba/trending\n"})}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Ticker"}),(0,s.jsx)(t.th,{style:{textAlign:"right"},children:"Watchlist Count"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Name"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"AMD"}),(0,s.jsx)(t.td,{style:{textAlign:"right"},children:"468973"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Advanced Micro Devices Inc."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"NVDA"}),(0,s.jsx)(t.td,{style:{textAlign:"right"},children:"447556"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"NVIDIA Corp"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"XRP.X"}),(0,s.jsx)(t.td,{style:{textAlign:"right"},children:"158654"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Ripple"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"CHK"}),(0,s.jsx)(t.td,{style:{textAlign:"right"},children:"61074"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Chesapeake Energy Corp. - Ordinary Shares - New"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"PINS"}),(0,s.jsx)(t.td,{style:{textAlign:"right"},children:"44549"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"PINTEREST INC"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"CRSP"}),(0,s.jsx)(t.td,{style:{textAlign:"right"},children:"34881"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"CRISPR Therapeutics AG"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"CAT"}),(0,s.jsx)(t.td,{style:{textAlign:"right"},children:"29787"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Caterpillar Inc."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"FSLR"}),(0,s.jsx)(t.td,{style:{textAlign:"right"},children:"28779"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"First Solar Inc"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"CVS"}),(0,s.jsx)(t.td,{style:{textAlign:"right"},children:"26361"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"CVS Health Corp"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"SAVE"}),(0,s.jsx)(t.td,{style:{textAlign:"right"},children:"24589"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Spirit Airlines Inc"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"SRPT"}),(0,s.jsx)(t.td,{style:{textAlign:"right"},children:"18634"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Sarepta Therapeutics Inc"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Z"}),(0,s.jsx)(t.td,{style:{textAlign:"right"},children:"18152"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Zillow Group Inc"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"BUD"}),(0,s.jsx)(t.td,{style:{textAlign:"right"},children:"13161"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Anheuser-Busch InBev"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"MTCH"}),(0,s.jsx)(t.td,{style:{textAlign:"right"},children:"12638"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Match Group Inc."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"UEC"}),(0,s.jsx)(t.td,{style:{textAlign:"right"},children:"12473"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Uranium Energy Corp"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"CZR"}),(0,s.jsx)(t.td,{style:{textAlign:"right"},children:"10943"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Caesars Entertainment Inc"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"CCJ"}),(0,s.jsx)(t.td,{style:{textAlign:"right"},children:"10108"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Cameco Corp."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"ANET"}),(0,s.jsx)(t.td,{style:{textAlign:"right"},children:"9235"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Arista Networks Inc"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"CELH"}),(0,s.jsx)(t.td,{style:{textAlign:"right"},children:"9012"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Celsius Holdings Inc"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"LTHM"}),(0,s.jsx)(t.td,{style:{textAlign:"right"},children:"8206"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Livent Corp"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"MPC"}),(0,s.jsx)(t.td,{style:{textAlign:"right"},children:"7307"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Marathon Petroleum Corp"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"PAYC"}),(0,s.jsx)(t.td,{style:{textAlign:"right"},children:"5425"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Paycom Software Inc"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"ZI"}),(0,s.jsx)(t.td,{style:{textAlign:"right"},children:"5061"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"ZoomInfo Technologies Inc."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"SPRC"}),(0,s.jsx)(t.td,{style:{textAlign:"right"},children:"3789"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"SCISPARC LTD"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"ELF"}),(0,s.jsx)(t.td,{style:{textAlign:"right"},children:"3658"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"e.l.f. Beauty Inc"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"XDC.X"}),(0,s.jsx)(t.td,{style:{textAlign:"right"},children:"3073"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"XinFin Network"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"KRL.X"}),(0,s.jsx)(t.td,{style:{textAlign:"right"},children:"2385"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Kryll"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"FRSH"}),(0,s.jsx)(t.td,{style:{textAlign:"right"},children:"1935"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Freshworks Inc"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"MTZ"}),(0,s.jsx)(t.td,{style:{textAlign:"right"},children:"1544"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Mastec Inc."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"VERV"}),(0,s.jsx)(t.td,{style:{textAlign:"right"},children:"1054"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Verve Therapeutics Inc"})]})]})]}),"\n",(0,s.jsx)(t.h3,{id:"bullbear",children:"Bullbear"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"bullbear"})," gives a fast sentiment synopsis from the most recent Stocktwits posts."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-console",children:"/stocks/ba/load crsp/bullbear\n"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-console",children:"Watchlist count: 34881\n\nLast 15 sentiment messages:\nBullish: 80.0%\nBearish: 20.0%\n"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-console",children:"/stocks/ba/load amd/bullbear\n"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-console",children:"Watchlist count: 468973\n\nLast 12 sentiment messages:\nBullish: 50.0%\nBearish: 50.0%\n"})}),"\n",(0,s.jsx)(t.h3,{id:"redditsent",children:"Redditsent"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"redditsent"})," will crawl through posts related to the ticker and give it a score based on how polarizing the message is."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:"https://github.com/OpenBB-finance/OpenBBTerminal/assets/85772166/71e6a3c9-ece8-45a4-afca-150211ae7c43",alt:"Screenshot 2023-10-31 at 2 28 52\u202fPM"})}),"\n",(0,s.jsx)(t.h3,{id:"queries",children:"Queries"}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"queries"})," command shows the terms people are including when searching for the company on Google."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-console",children:"/stocks/ba/load amd/queries\n"})}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"query"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"value"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"amd ryzen"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"100%"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"amd radeon"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"67%"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"radeon"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"62%"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"amd stock"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"52%"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"amd ryzen 5"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"47%"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"intel"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"46%"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"amd ryzen 7"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"25%"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"nvidia"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"23%"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"amd driver"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"22%"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"amd cpu"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"21%"})]})]})]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-console",children:"/stocks/ba/load intc/queries\n"})}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"query"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"value"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"stock intc"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"100%"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"intc price"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"36%"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"stock price intc"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"32%"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"amd"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"15%"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"amd stock"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"12%"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"aapl"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"9%"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"msft"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"8%"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"intc share"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"7%"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"nvda"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"7%"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"tsla"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"7%"})]})]})]})]})}function g(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},94331:(e,t,l)=>{l.d(t,{A:()=>i});l(96540);var s=l(5260),n=l(74848);function i(e){let{title:t}=e;return(0,n.jsx)(s.A,{children:(0,n.jsx)("title",{children:t})})}},28453:(e,t,l)=>{l.d(t,{R:()=>r,x:()=>d});var s=l(96540);const n={},i=s.createContext(n);function r(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);