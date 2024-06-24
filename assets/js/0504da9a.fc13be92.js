"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[49329],{38730:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>g,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var s=n(74848),i=n(28453),l=n(94331);const a={title:"Technical Analysis",description:"Learn how to use our comprehensive technical analysis tools to understand the trend patterns and market sentiment of various assets. Get insights on moving averages, oscillating signals, directional strength, price band volatility, volume analysis and even use custom indicators. Make better trading decisions with our analysis dashboard!",keywords:["technical analysis","moving averages","oscillating signals","directional strength","volatility","volume analysis","custom indicators","trading","asset analysis","market trends","financial trading tools","crypto analysis","stock analysis","forex analysis","ETF analysis","financial dashboard"]},r=void 0,o={id:"terminal/menus/common/ta",title:"Technical Analysis",description:"Learn how to use our comprehensive technical analysis tools to understand the trend patterns and market sentiment of various assets. Get insights on moving averages, oscillating signals, directional strength, price band volatility, volume analysis and even use custom indicators. Make better trading decisions with our analysis dashboard!",source:"@site/content/terminal/menus/common/ta.md",sourceDirName:"terminal/menus/common",slug:"/terminal/menus/common/ta",permalink:"/terminal/menus/common/ta",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/terminal/menus/common/ta.md",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1719247347e3,frontMatter:{title:"Technical Analysis",description:"Learn how to use our comprehensive technical analysis tools to understand the trend patterns and market sentiment of various assets. Get insights on moving averages, oscillating signals, directional strength, price band volatility, volume analysis and even use custom indicators. Make better trading decisions with our analysis dashboard!",keywords:["technical analysis","moving averages","oscillating signals","directional strength","volatility","volume analysis","custom indicators","trading","asset analysis","market trends","financial trading tools","crypto analysis","stock analysis","forex analysis","ETF analysis","financial dashboard"]},sidebar:"tutorialSidebar",previous:{title:"Quantitative Analysis",permalink:"/terminal/menus/common/qa"},next:{title:"Alternative",permalink:"/terminal/menus/alternative"}},d={},c=[{value:"How to Use",id:"how-to-use",level:3},{value:"Examples",id:"examples",level:2},{value:"Moving Averages",id:"moving-averages",level:3},{value:"Single MA Type",id:"single-ma-type",level:4},{value:"Multiple MA Types",id:"multiple-ma-types",level:4},{value:"multi",id:"multi",level:3},{value:"macd",id:"macd",level:3},{value:"obv",id:"obv",level:3},{value:"Indicators Dashboard",id:"indicators-dashboard",level:2}];function h(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(l.A,{title:"Technical Analysis - Common - Data Available | OpenBB Terminal Docs"}),"\n",(0,s.jsx)(t.p,{children:"The Technical Analysis menu offers the user a suite of tools for analyzing the technical components of an asset's trading history. The menu can be found in most wings of the Terminal:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"/terminal/menus/crypto/introduction",children:"Crypto"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"/terminal/menus/stocks/introduction",children:"Stocks"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"/terminal/menus/etf",children:"ETF"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"/terminal/menus/forex",children:"Forex"})}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"The commands are divided by categories that define their purpose for general-use:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Overlap - Moving averages"}),"\n",(0,s.jsx)(t.li,{children:"Momentum - Oscillating signals"}),"\n",(0,s.jsx)(t.li,{children:"Trend - Directional strength"}),"\n",(0,s.jsx)(t.li,{children:"Volatility - Width of the price bands"}),"\n",(0,s.jsx)(t.li,{children:"Volume - Singling out volume"}),"\n",(0,s.jsx)(t.li,{children:"Custom - Multiple indicators and Fibonacci retracements"}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["All commands in this menu will rely on the interval and window chosen when loading an asset for analysis.  Refer to the directory tree on the left side of the page, ",(0,s.jsx)(t.a,{href:"/terminal/reference",children:"here"}),", for information on individual commands. To get a better understanding of what these features are, and the formulas behind them, a number of sources should be consulted; but, a good starting point is ",(0,s.jsx)(t.a,{href:"https://www.investopedia.com/terms/t/technicalanalysis.asp",children:"Investopedia"}),".  The menu employs the ",(0,s.jsx)(t.a,{href:"https://github.com/twopirllc/pandas-ta",children:"Pandas-TA Library"}),".  Submit a ",(0,s.jsx)(t.a,{href:"https://openbb.co/request-a-feature",children:"feature request"})," to let us know which indicators we should add next!"]}),"\n",(0,s.jsx)(t.h3,{id:"how-to-use",children:"How to Use"}),"\n",(0,s.jsxs)(t.p,{children:["To begin, enter the menu from one of the menus listed above by entering ",(0,s.jsx)(t.code,{children:"ta"}),".  For demonstration purposes, we will use ",(0,s.jsx)(t.code,{children:"QQQ"})," as the ticker.  Let's grab some data!"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-console",children:"/stocks/load QQQ/ta\n"})}),"\n",(0,s.jsx)(t.p,{children:"The block above loads daily QQQ historical prices and volume, then enters the Technical Analysis menu.  The table below lists all the available analysis functions."}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Function Key"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Type"}),(0,s.jsx)(t.th,{style:{textAlign:"right"},children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"load"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"-"}),(0,s.jsx)(t.td,{style:{textAlign:"right"},children:"Load a new ticker for analysis."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"ema"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Overlap"}),(0,s.jsx)(t.td,{style:{textAlign:"right"},children:"Exponential Moving Average."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"hma"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Overlap"}),(0,s.jsx)(t.td,{style:{textAlign:"right"},children:"Hull Moving Average."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"sma"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Overlap"}),(0,s.jsx)(t.td,{style:{textAlign:"right"},children:"Simple Moving Average."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"wma"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Overlap"}),(0,s.jsx)(t.td,{style:{textAlign:"right"},children:"Weighted Moving Average."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"vwap"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Overlap"}),(0,s.jsx)(t.td,{style:{textAlign:"right"},children:"Volume Weighted Average Price."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"zlma"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Overlap"}),(0,s.jsx)(t.td,{style:{textAlign:"right"},children:"Zero-Lag Moving Average."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"cci"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Momentum"}),(0,s.jsx)(t.td,{style:{textAlign:"right"},children:"Commodity Channel Index."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"cg"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Momentum"}),(0,s.jsx)(t.td,{style:{textAlign:"right"},children:"Center of Gravity."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"clenow"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Momentum"}),(0,s.jsx)(t.td,{style:{textAlign:"right"},children:"Clenow Volatility Adjusted Momentum."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"demark"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Momentum"}),(0,s.jsx)(t.td,{style:{textAlign:"right"},children:"Tom Demark's Sequential Indicator."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"macd"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Momentum"}),(0,s.jsx)(t.td,{style:{textAlign:"right"},children:"Moving Average Convergence/Divergence."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"fisher"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Momentum"}),(0,s.jsx)(t.td,{style:{textAlign:"right"},children:"Fisher Transform."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"rsi"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Momentum"}),(0,s.jsx)(t.td,{style:{textAlign:"right"},children:"Relative Strength Index."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"stoch"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Momentum"}),(0,s.jsx)(t.td,{style:{textAlign:"right"},children:"Stochastic Oscillator."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"adx"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Trend"}),(0,s.jsx)(t.td,{style:{textAlign:"right"},children:"Average Directional Movement Index."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"aroon"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Trend"}),(0,s.jsx)(t.td,{style:{textAlign:"right"},children:"Aroon Indicator."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"atr"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Volatility"}),(0,s.jsx)(t.td,{style:{textAlign:"right"},children:"Average True Range."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"bbands"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Volatility"}),(0,s.jsx)(t.td,{style:{textAlign:"right"},children:"Bollinger Bands."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"cones"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Volatility"}),(0,s.jsx)(t.td,{style:{textAlign:"right"},children:"Realized Volatility Cones."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"donchian"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Volatility"}),(0,s.jsx)(t.td,{style:{textAlign:"right"},children:"Donchian Channels."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"kc"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Volatility"}),(0,s.jsx)(t.td,{style:{textAlign:"right"},children:"Keltner Channels."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"ad"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Volume"}),(0,s.jsx)(t.td,{style:{textAlign:"right"},children:"Accumulation/Distribution Line."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"adosc"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Volume"}),(0,s.jsx)(t.td,{style:{textAlign:"right"},children:"Chaikin Oscillator."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"obv"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Volume"}),(0,s.jsx)(t.td,{style:{textAlign:"right"},children:"On-Balance Volume."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"fib"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Custom"}),(0,s.jsx)(t.td,{style:{textAlign:"right"},children:"Fibonacci Retracement."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"multi"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Custom"}),(0,s.jsx)(t.td,{style:{textAlign:"right"},children:"Plot multiple indicators on the same chart."})]})]})]}),"\n",(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsxs)(t.p,{children:['Some functions will not be compatible with intraday data and some may be designed specifically for a daily window.  Interval labels on charts may still be described as "days" when the time series interval is intraday. Consult the help dialogue, by attaching ',(0,s.jsx)(t.code,{children:"-h"})," to a command, for a reminder of the adjustable parameters."]})}),"\n",(0,s.jsx)(t.p,{children:"With some daily data now loaded, let's look at some charts!"}),"\n",(0,s.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(t.h3,{id:"moving-averages",children:"Moving Averages"}),"\n",(0,s.jsxs)(t.p,{children:["There are five types of moving averages available, they are grouped into the ",(0,s.jsx)(t.code,{children:"Overlay"})," category.  It is possible to overlay multiple windows of time for each one, and it is also possible to overlay multiple versions of moving average."]}),"\n",(0,s.jsx)(t.h4,{id:"single-ma-type",children:"Single MA Type"}),"\n",(0,s.jsx)(t.p,{children:"The help dialogue will explain the differences. For example, Zero-Lag Moving Average."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-console",children:"zlma -h\n"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-console",children:"usage: zlma [-l N_LENGTH] [-o N_OFFSET] [-h] [--export EXPORT] [--sheet-name SHEET_NAME [SHEET_NAME ...]]\n\nThe zero lag exponential moving average (ZLEMA) indicator was created by John Ehlers and Ric Way. The idea is do a regular exponential moving average (EMA) calculation but\non a de-lagged data instead of doing it on the regular data. Data is de-lagged by removing the data from \"lag\" days ago thus removing (or attempting to) the cumulative\neffect of the moving average.\n\noptions:\n  -l N_LENGTH, --length N_LENGTH\n                        Window lengths. Multiple values indicated as comma separated values. (default: [20])\n  -o N_OFFSET, --offset N_OFFSET\n                        offset (default: 0)\n  -h, --help            show this help message (default: False)\n  --export EXPORT       Export raw data into csv, json, xlsx and figure into png, jpg, pdf, svg (default: )\n  --sheet-name SHEET_NAME [SHEET_NAME ...]\n                        Name of excel sheet to save data to. Only valid for .xlsx files. (default: None)\n\nFor more information and examples, use 'about zlma' to access the related guide.\n"})}),"\n",(0,s.jsx)(t.p,{children:"For moving averages, there are two parameters: the window length and offset.  Let's examine the ZLMA at 50 and 200 days."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-console",children:"zlma -l 50,200\n"})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:"https://user-images.githubusercontent.com/85772166/233763992-157eb965-e5ca-48d6-b621-1e6596d4f784.png",alt:"ZLMA 50,200"})}),"\n",(0,s.jsx)(t.p,{children:"Drawing a chart with the Simple Moving Average shows the overlaps occur at different points in time."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-console",children:"sma -l 50,200\n"})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:"https://user-images.githubusercontent.com/85772166/233764006-45f6e6db-aa8c-4404-8997-68f96fbbe29e.png",alt:"SMA 50,200"})}),"\n",(0,s.jsx)(t.h4,{id:"multiple-ma-types",children:"Multiple MA Types"}),"\n",(0,s.jsxs)(t.p,{children:["Let's overlay the 200-day ZLMA with the 200-day SMA to see where they intersect.  This is accomplished using the ",(0,s.jsx)(t.code,{children:"multi"})," function."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-console",children:"multi -i sma[200],zlma[200]\n"})}),"\n",(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsxs)(t.p,{children:["Make note of the difference in parameters syntax.  With the ",(0,s.jsx)(t.code,{children:"multi"})," function, parameters for each indicator must be surrounded with square brackets [ ]."]})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:"https://user-images.githubusercontent.com/85772166/233764023-26991e03-6a82-47b6-9a6b-b2013dbdfffc.png",alt:"SMA/ZLMA Overlay"})}),"\n",(0,s.jsx)(t.p,{children:"Now let's see both 200 and 50-day moving averages."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-console",children:"multi -i sma[50,200],zlma[50,200]\n"})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:"https://user-images.githubusercontent.com/85772166/233764031-fd0375e9-f13f-43dd-b304-795168a0424b.png",alt:"SMA/ZLMA Overlay"})}),"\n",(0,s.jsx)(t.p,{children:"The last crossover point provides some confirmation of the current trend.  Intraday data might reveal more.  Let's see the one-hour MAs!"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-console",children:"load qqq -i 60/multi -i sma[50,200],zlma[50,200]\n"})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:"https://user-images.githubusercontent.com/85772166/233764046-879252f8-3449-4f61-9098-6c538e130e47.png",alt:"SMA/ZLMA Hourly Overlay"})}),"\n",(0,s.jsx)(t.p,{children:"The ZLMA 50 has crossed over the SMA50, potentially signalling that the trend is near its exhaustion point.  Let's consult some other indicators using the hourly data now loaded."}),"\n",(0,s.jsx)(t.h3,{id:"multi",children:"multi"}),"\n",(0,s.jsxs)(t.p,{children:["Load multiple indicators on the same chart with the ",(0,s.jsx)(t.code,{children:"multi"})," command."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-console",children:"load qqq -i 60 -s 2023-01-01/multi rsi,vwap,atr\n"})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:"https://user-images.githubusercontent.com/85772166/233764057-46b82e00-0e93-4f69-a253-c74f102a5827.png",alt:"multi rsi,vwap,atr"})}),"\n",(0,s.jsx)(t.p,{children:"The help dialogue for this function provides some guidance for setting the optional arguments for each indicator."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-console",children:"multi -h\n"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-console",children:"usage: multi [-i INDICATORS] [-h] [--export EXPORT] [--sheet-name SHEET_NAME [SHEET_NAME ...]]\n\nPlot multiple indicators on the same chart separated by a comma.\n\noptions:\n  -i INDICATORS, --indicators INDICATORS\n                        Indicators with optional arguments in the form of \"macd[12,26,9],rsi,sma[20]\" (default: None)\n  -h, --help            show this help message (default: False)\n  --export EXPORT       Export raw data into csv, json, xlsx and figure into png, jpg, pdf, svg (default: )\n  --sheet-name SHEET_NAME [SHEET_NAME ...]\n                        Name of excel sheet to save data to. Only valid for .xlsx files. (default: None)\n\nFor more information and examples, use 'about multi' to access the related guide.\n"})}),"\n",(0,s.jsx)(t.p,{children:"Making adjustments with this function requires knowing the parameters for each individual indicator.  They will have sensible default values but, where there are multiple parameters, it may not be obvious which order the numbers need to be entered.  Sometimes they are not even numbers, like MACD."}),"\n",(0,s.jsx)(t.h3,{id:"macd",children:"macd"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-console",children:"macd --help\n\n(\ud83e\udd8b) /stocks/ta/ $ macd --help\n\nusage: macd [--fast N_FAST] [--slow N_SLOW] [--signal N_SIGNAL] [-h] [--export EXPORT] [--sheet-name SHEET_NAME [SHEET_NAME ...]]\n\nThe Moving Average Convergence Divergence (MACD) is the difference between two Exponential Moving Averages. The Signal line is an Exponential Moving\nAverage of the MACD. The MACD signals trend changes and indicates the start of new trend direction. High values indicate overbought conditions, low\nvalues indicate oversold conditions. Divergence with the price indicates an end to the current trend, especially if the MACD is at extreme high or low\nvalues. When the MACD line crosses above the signal line a buy signal is generated. When the MACD crosses below the signal line a sell signal is\ngenerated. To confirm the signal, the MACD should be above zero for a buy, and below zero for a sell.\n\noptions:\n  --fast N_FAST         The short period. (default: 12)\n  --slow N_SLOW         The long period. (default: 26)\n  --signal N_SIGNAL     The signal period. (default: 9)\n  -h, --help            show this help message (default: False)\n  --export EXPORT       Export raw data into csv, json, xlsx and figure into png, jpg, pdf, svg (default: )\n  --sheet-name SHEET_NAME [SHEET_NAME ...]\n                        Name of excel sheet to save data to. Only valid for .xlsx files. (default: None)\n\nFor more information and examples, use 'about macd' to access the related guide.\n"})}),"\n",(0,s.jsx)(t.p,{children:"The one-hour MACD generated a downward signal trend two days ago."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-console",children:"load qqq -i 60 -s 2023-01-01/macd\n"})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:"https://user-images.githubusercontent.com/85772166/233764068-521b6218-2e4f-49d2-94b3-b4806b739a56.png",alt:"MACD Hourly"})}),"\n",(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsx)(t.p,{children:"Clicking and dragging the mouse near the corners at each axis allows the zooming to be locked to the X or Y axis only."})}),"\n",(0,s.jsx)(t.h3,{id:"obv",children:"obv"}),"\n",(0,s.jsx)(t.p,{children:"Looking at the one-minute on-balance volume of QQQ today (April 21, 2023) reveals that massive volume spike occurred at 11:04.  The ceiling is now the floor."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-console",children:"load qqq -i 1 -s 2023-04-21/macd\n"})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:"https://user-images.githubusercontent.com/85772166/233764081-ade1d33f-7524-41d0-9885-911a6270a11c.png",alt:"On-Balance Volume"})}),"\n",(0,s.jsx)(t.p,{children:"The Accumulation/Distribution Line at the same one-minute interval signals in advance of the upward drift reversal, beginning to sell into the Friday close just before 14:00."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:"https://user-images.githubusercontent.com/85772166/233764089-531dad18-d3c1-4bbb-aa6c-3c2c182f8fd3.png",alt:"Accumulation Distribution"})}),"\n",(0,s.jsx)(t.h2,{id:"indicators-dashboard",children:"Indicators Dashboard"}),"\n",(0,s.jsx)(t.p,{children:"This menu is also available as an experimental Dashboard Streamlit App."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-console",children:"/dashboards/indicators\n"})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:"https://user-images.githubusercontent.com/85772166/233764105-85b944eb-6ff7-42c8-b2c7-f9cbdff51388.png",alt:"Dashboards Menu"})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:"https://user-images.githubusercontent.com/85772166/233764115-7bfbbf8c-793e-4dbc-a8de-9f16007d68a9.png",alt:"Indicators Dashboard"})})]})}function g(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},94331:(e,t,n)=>{n.d(t,{A:()=>l});n(96540);var s=n(5260),i=n(74848);function l(e){let{title:t}=e;return(0,i.jsx)(s.A,{children:(0,i.jsx)("title",{children:t})})}},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>r});var s=n(96540);const i={},l=s.createContext(i);function a(e){const t=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(l.Provider,{value:t},e.children)}}}]);