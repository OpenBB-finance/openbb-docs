"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[29796],{93955:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>o,contentTitle:()=>d,default:()=>x,frontMatter:()=>l,metadata:()=>c,toc:()=>a});var n=s(74848),i=s(28453),r=s(94331);const l={title:"Economy",description:"This documentation page provides detailed information about OpenBB Terminal's Economy Menu. This includes overviews of broad market and country-specific data, querying from databases such as FRED and OECD, and insightful comparisons using stored datasets. A must-read for those to get the most out of macroeconomic data querying.",keywords:["Macroeconomic data","Federal Reserve of St. Louis","FRED","OECD","EconDB","API key","Economy menu","Broad market","Country performance","Databases","Stored datasets","Market data","Economic calendar","Time series data","US Treasury rates","Gross Domestic Product (GDP)","Government debt-to-GDP ratios","Harmonized CPI","Confidence in government surveys","USD Liquidity Index","US Dollar Liquidity Index","Global indices"]},d=void 0,c={id:"terminal/menus/economy",title:"Economy",description:"This documentation page provides detailed information about OpenBB Terminal's Economy Menu. This includes overviews of broad market and country-specific data, querying from databases such as FRED and OECD, and insightful comparisons using stored datasets. A must-read for those to get the most out of macroeconomic data querying.",source:"@site/content/terminal/menus/economy.md",sourceDirName:"terminal/menus",slug:"/terminal/menus/economy",permalink:"/terminal/menus/economy",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/terminal/menus/economy.md",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1719309708e3,frontMatter:{title:"Economy",description:"This documentation page provides detailed information about OpenBB Terminal's Economy Menu. This includes overviews of broad market and country-specific data, querying from databases such as FRED and OECD, and insightful comparisons using stored datasets. A must-read for those to get the most out of macroeconomic data querying.",keywords:["Macroeconomic data","Federal Reserve of St. Louis","FRED","OECD","EconDB","API key","Economy menu","Broad market","Country performance","Databases","Stored datasets","Market data","Economic calendar","Time series data","US Treasury rates","Gross Domestic Product (GDP)","Government debt-to-GDP ratios","Harmonized CPI","Confidence in government surveys","USD Liquidity Index","US Dollar Liquidity Index","Global indices"]},sidebar:"tutorialSidebar",previous:{title:"Econometrics",permalink:"/terminal/menus/econometrics"},next:{title:"ETF",permalink:"/terminal/menus/etf"}},o={},a=[{value:"The Economy Menu",id:"the-economy-menu",level:2},{value:"Broad Market",id:"broad-market",level:3},{value:"Country Performance",id:"country-performance",level:3},{value:"Databases",id:"databases",level:3},{value:"Stored Datasets",id:"stored-datasets",level:3},{value:"Examples",id:"examples",level:2},{value:"events",id:"events",level:3},{value:"overview",id:"overview",level:3},{value:"debt",id:"debt",level:3},{value:"usdli",id:"usdli",level:3},{value:"valuation",id:"valuation",level:3},{value:"index",id:"index",level:3},{value:"fred",id:"fred",level:3},{value:"plot",id:"plot",level:3}];function h(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.A,{title:"Economy - Menus | OpenBB Terminal Docs"}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"/economy"})," menu provides methods for querying macroeconomic data sets from sources like FRED, OECD, and EconDB.  To get the most out of this menu, sign up for a free API key from the ",(0,n.jsx)(t.a,{href:"https://fred.stlouisfed.org/",children:"Federal Reserve of St. Louis"}),", and enter it into the OpenBB Terminal from the ",(0,n.jsxs)(t.a,{href:"/terminal/usage/data/api-keys",children:[(0,n.jsx)(t.code,{children:"/keys"})," menu"]}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"the-economy-menu",children:"The Economy Menu"}),"\n",(0,n.jsx)(t.p,{children:"The menu is divided into four general sections:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Broad market"}),": General headline statistics from the markets today."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Country performance"}),": Country-specific data published by the OECD."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Databases"}),": Query time series."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Stored datasets"}),": Compare and chart multiple time series together."]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"Each command is listed below, with a short description."}),"\n",(0,n.jsx)(t.h3,{id:"broad-market",children:"Broad Market"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Function Key"}),(0,n.jsx)(t.th,{style:{textAlign:"right"},children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"overview"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"Market overview of either indices, bonds or currencies."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"futures"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"Futures and commodities overview."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"map"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"S&P 500 heat map."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"bigmac"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"The Economist's Big Mac Index."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"events"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"The economic calendar."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"edebt"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"External debt statitistics for various countries."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"valuation"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"Valuation of sectors, industries, and countries for US-listed stocks."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"performance"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"Performance of sectors, industry, and countries for US-listed stocks."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"usdli"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"USD Liquidity Index"})]})]})]}),"\n",(0,n.jsx)(t.h3,{id:"country-performance",children:"Country Performance"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Function Key"}),(0,n.jsx)(t.th,{style:{textAlign:"right"},children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"gdp"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"Nominal Gross Domestic Product (GDP)."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"rgdp"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"Real Gross Domestic Product (GDP)."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"fgdp"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"Forecasts of nominal and real Gross Domestic Product (GDP)."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"debt"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"Government debt-to-GDP ratios."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"cpi"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"Harmonized CPI."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"ccpi"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"CPI Components."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"balance"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"Government tax revenues."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"spending"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"Government spending."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"trust"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"Confidence in government surveys."})]})]})]}),"\n",(0,n.jsx)(t.h3,{id:"databases",children:"Databases"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Function Key"}),(0,n.jsx)(t.th,{style:{textAlign:"right"},children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"macro"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"Time series data by country and indicator."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"treasury"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"Historical US Treasury rates."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"fred"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"Query the FRED."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"index"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"Historical daily time series for most major global indices."})]})]})]}),"\n",(0,n.jsx)(t.h3,{id:"stored-datasets",children:"Stored Datasets"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Function Key"}),(0,n.jsx)(t.th,{style:{textAlign:"right"},children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"eval"}),(0,n.jsxs)(t.td,{style:{textAlign:"right"},children:["A method for performing basic ",(0,n.jsx)(t.code,{children:"eval"})," operations on a time series."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"plot"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"Plot multiple time series together."})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(t.p,{children:"This section will demonstrate some basic operations within the menu."}),"\n",(0,n.jsx)(t.h3,{id:"events",children:"events"}),"\n",(0,n.jsxs)(t.p,{children:["A morning ritual might begin with checking the economic calendar for the day's - or week's - events.  The ",(0,n.jsx)(t.code,{children:"events"})," command can browse the calendar by country and date.  By default, the current day for all countries will display in a table."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-console",children:"/economy/events\n"})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:"https://user-images.githubusercontent.com/85772166/236106887-07732390-bee3-44e0-a69f-a71c8ee90a8e.png",alt:"Economic Calendar"})}),"\n",(0,n.jsxs)(t.p,{children:["To select a specific country, attach ",(0,n.jsx)(t.code,{children:"--countries"})," to the command, then press the space bar.  Use the up or down arrow keys to browse the choices."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:"https://user-images.githubusercontent.com/85772166/236106932-473c0f02-af80-49a6-bdb3-548ac1e689fa.png",alt:"Economic Calendar Countries"})}),"\n",(0,n.jsx)(t.h3,{id:"overview",children:"overview"}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"overview"})," fetches the headline levels and rates from the Wall Street Journal.  Choose from of the categories by attaching the ",(0,n.jsx)(t.code,{children:"-t"})," argument to the command."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-console",children:"/economy/overview -t usbonds\n"})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:"https://user-images.githubusercontent.com/85772166/236106975-961d7163-2ac8-4e05-b8df-34f2cf4908e7.png",alt:"Overview"})}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{style:{textAlign:"left"}}),(0,n.jsx)(t.th,{style:{textAlign:"right"},children:"Rate (%)"}),(0,n.jsx)(t.th,{style:{textAlign:"right"},children:"Yld (%)"}),(0,n.jsx)(t.th,{style:{textAlign:"right"},children:"Yld Chg (%)"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"30-Year Bond"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"3.625"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"3.686"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"-0.028"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"10-Year Note"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"3.5"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"3.343"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"-0.085"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"7-Year Note"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"3.5"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"3.323"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"-0.122"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"5-Year Note"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"3.5"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"3.305"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"-0.162"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"3-Year Note"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"3.75"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"3.513"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"-0.18"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"2-Year Note"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"3.875"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"3.838"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"-0.144"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"1-Year Bill"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"0"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"4.665"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"-0.09"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"6-Month Bill"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"0"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"4.98"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"0.005"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"3-Month Bill"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"0"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"5.212"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"0.064"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"1-Month Bill"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"0"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"4.452"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"0.114"})]})]})]}),"\n",(0,n.jsx)(t.h3,{id:"debt",children:"debt"}),"\n",(0,n.jsx)(t.p,{children:"Compare debt-to-GDP ratios between groups of countries by entering them as a comma-separated list."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-console",children:"/economy/debt -c australia,norway,united_states,italy,japan\n"})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:"https://user-images.githubusercontent.com/85772166/236107021-231e7472-10a0-4208-a92e-fe56c81076c0.png",alt:"Debt-to-GDP"})}),"\n",(0,n.jsx)(t.h3,{id:"usdli",children:"usdli"}),"\n",(0,n.jsx)(t.p,{children:"Compare the US Dollar Liquidity Index against a selection of indices published to FRED."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-console",children:"/economy/usdli -o WILLSMLCAP\n"})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:"https://github.com/OpenBB-finance/OpenBBTerminal/assets/85772166/1a2abf90-aa81-4d02-a77a-c913bfef14d7",alt:"USD Liquidity Index"})}),"\n",(0,n.jsxs)(t.p,{children:["The indices available to overlay are displayed in a table by adding, ",(0,n.jsx)(t.code,{children:"--show"}),", to the command."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-console",children:"/economy/usdli --show\n"})}),"\n",(0,n.jsx)(t.h3,{id:"valuation",children:"valuation"}),"\n",(0,n.jsxs)(t.p,{children:["Get valuations of industries and sectors for the US equity universe.  Select the focus by using the, ",(0,n.jsx)(t.code,{children:"-g"})," (",(0,n.jsx)(t.code,{children:"--group"}),"), parameter."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:"https://github.com/OpenBB-finance/OpenBBTerminal/assets/85772166/0793bd01-95b9-46f3-90b5-5c4af851283f",alt:"Valuation By Industry"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-console",children:"valuation --group consumer_cyclical\n"})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:"https://github.com/OpenBB-finance/OpenBBTerminal/assets/85772166/53e670fc-34cd-444f-9aa9-79fe5714e786",alt:"Consumer Cyclical Valuations"})}),"\n",(0,n.jsx)(t.h3,{id:"index",children:"index"}),"\n",(0,n.jsxs)(t.p,{children:["Major global indices are curated under the ",(0,n.jsx)(t.code,{children:"index"})," command.  Adding ",(0,n.jsx)(t.code,{children:"--show"})," to the command will display a table with the list."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-console",children:"index --show\n"})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:"https://user-images.githubusercontent.com/85772166/236107143-a3e260e0-9530-4448-a552-12b46ae0aa72.png",alt:"Curated Index List"})}),"\n",(0,n.jsxs)(t.p,{children:["The cumulative returns of an index is displayed instead of the levels by attaching ",(0,n.jsx)(t.code,{children:"-r"})," to the command. Multiple indices can be queried simultaneously."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-console",children:"index sp500,sp400,sp600 --start 2023-01-01 -r\n"})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:"https://user-images.githubusercontent.com/85772166/236107229-410673db-e1ce-4e93-9e96-7821328e04dd.png",alt:"Indices"})}),"\n",(0,n.jsx)(t.h3,{id:"fred",children:"fred"}),"\n",(0,n.jsxs)(t.p,{children:["To lookup FRED series by keywords attach, ",(0,n.jsx)(t.code,{children:"-q"}),", to the ",(0,n.jsx)(t.code,{children:"fred"})," command."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-console",children:"fred -q PCE\n"})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:"https://user-images.githubusercontent.com/85772166/236107269-8f126f17-3da7-4bb3-8acb-35f3ad783f84.png",alt:"Fred Series"})}),"\n",(0,n.jsx)(t.h3,{id:"plot",children:"plot"}),"\n",(0,n.jsxs)(t.p,{children:["After requesting a time series, it gets populated under ",(0,n.jsx)(t.code,{children:"Stored datasets"}),".  Plot them together, on a shared or separate y-axis, by using the ",(0,n.jsx)(t.code,{children:"plot"})," command."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:"https://user-images.githubusercontent.com/85772166/236107312-95ed4b92-e418-444c-b436-f45a1fc0a75d.png",alt:"Multi-Axis Plots"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-console",children:"plot --y1 PCE --y2 sp500\n"})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:"https://user-images.githubusercontent.com/85772166/236107339-46037f4b-bc4f-458c-9f17-55a4cc6a61bc.png",alt:"Plot Multiple Time Series"})})]})}function x(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},94331:(e,t,s)=>{s.d(t,{A:()=>r});s(96540);var n=s(5260),i=s(74848);function r(e){let{title:t}=e;return(0,i.jsx)(n.A,{children:(0,i.jsx)("title",{children:t})})}},28453:(e,t,s)=>{s.d(t,{R:()=>l,x:()=>d});var n=s(96540);const i={},r=n.createContext(i);function l(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);