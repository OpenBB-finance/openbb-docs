"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[28732],{93394:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>d,toc:()=>h});var n=i(74848),a=i(28453),s=i(94331),r=i(69396);const o={title:"Widgets",sidebar_position:21,description:"The page contains detailed information about the interactive elements and functionalities of OpenBB Terminal widgets. From grouping mechanisms to settings, these widgets offer an interactive dashboard experience for users to track and analyze their investments and data. The widgets support both raw data and chart interpretations for data visualization.",keywords:["Widgets","Upper Tab","Interactive elements","Additional information","Symbol","Group","Staleness Indicator","Chat with Widget","Grouping Mechanism","Settings","Close","Content","Raw Data","Charts","Interactive dashboard","Investment positions"]},l=void 0,d={id:"terminal/widgets",title:"Widgets",description:"The page contains detailed information about the interactive elements and functionalities of OpenBB Terminal widgets. From grouping mechanisms to settings, these widgets offer an interactive dashboard experience for users to track and analyze their investments and data. The widgets support both raw data and chart interpretations for data visualization.",source:"@site/content/terminal/widgets.md",sourceDirName:"terminal",slug:"/terminal/widgets",permalink:"/terminal/widgets",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/terminal/widgets.md",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1737538965e3,sidebarPosition:21,frontMatter:{title:"Widgets",sidebar_position:21,description:"The page contains detailed information about the interactive elements and functionalities of OpenBB Terminal widgets. From grouping mechanisms to settings, these widgets offer an interactive dashboard experience for users to track and analyze their investments and data. The widgets support both raw data and chart interpretations for data visualization.",keywords:["Widgets","Upper Tab","Interactive elements","Additional information","Symbol","Group","Staleness Indicator","Chat with Widget","Grouping Mechanism","Settings","Close","Content","Raw Data","Charts","Interactive dashboard","Investment positions"]},sidebar:"tutorialSidebar",previous:{title:"Open Source Platform Integration",permalink:"/terminal/platform-installer"},next:{title:"Widgets Library",permalink:"/terminal/widgets-library/"}},c={},h=[{value:"Types of Widgets",id:"types-of-widgets",level:2},{value:"Widget Structure",id:"widget-structure",level:2},{value:"Manipulating data",id:"manipulating-data",level:3},{value:"Live Chart",id:"live-chart",level:3},{value:"Static Chart",id:"static-chart",level:3},{value:"OpenBB Core Widgets",id:"openbb-core-widgets",level:2},{value:"Table",id:"table",level:3},{value:"Chart",id:"chart",level:3},{value:"Note",id:"note",level:3},{value:"Website and Iframe",id:"website-and-iframe",level:3},{value:"Clock",id:"clock",level:3},{value:"RSS Feeds",id:"rss-feeds",level:3},{value:"Navigation bar",id:"navigation-bar",level:3},{value:"Data widgets",id:"data-widgets",level:2},{value:"Charting",id:"charting",level:3},{value:"Watchlist and grouping",id:"watchlist-and-grouping",level:3},{value:"News and ticker",id:"news-and-ticker",level:3},{value:"TradingView widgets",id:"tradingview-widgets",level:3}];function u(e){const t={a:"a",em:"em",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.A,{title:"Widgets | OpenBB Terminal Pro Docs"}),"\n","\n","\n",(0,n.jsx)(t.p,{children:"Widgets are the unit that you will be using with OpenBB Terminal."}),"\n",(0,n.jsx)(t.p,{children:"We consider something a widget when:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"It has data, either static (e.g. document) or dynamic (e.g. API)"}),"\n",(0,n.jsx)(t.li,{children:"Metadata has been set (title, description, category, sub category and source)"}),"\n",(0,n.jsx)(t.li,{children:"It has an associated visual layer"}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"Having said that, there are two main type of widgets."}),"\n",(0,n.jsx)(t.h2,{id:"types-of-widgets",children:"Types of Widgets"}),"\n",(0,n.jsxs)(t.p,{children:["We have ",(0,n.jsx)(t.strong,{children:"OpenBB Core widgets"}),". These widgets don't contain data by themselves, until you select the data you want to utilize."]}),"\n",(0,n.jsx)(t.p,{children:"Once you do that, they may appear on the dashboard and be used by the OpenBB Copilot - e.g. Note widget with text."}),"\n",(0,n.jsx)(t.p,{children:"However, they don't become a real widget - that can be searched later on - until the metadata is filled in (the title at least)."}),"\n",(0,n.jsx)(t.p,{children:"Examples of OpenBB Core widgets include: Table widget, Image widget, PDF widget, Note, RSS Feed, Website/Iframe, Navigation bar, and clock."}),"\n",(0,n.jsxs)(t.p,{children:["As for the other type of widgets, these are called ",(0,n.jsx)(t.strong,{children:"Packaged data"})," and come from a specific data vendor."]}),"\n",(0,n.jsx)(t.h2,{id:"widget-structure",children:"Widget Structure"}),"\n",(0,n.jsx)(t.p,{children:"This is the typical structure of a widget."}),"\n",(0,n.jsx)("img",{width:"800",alt:"Widget-rev",src:"https://github.com/user-attachments/assets/d44a279f-fb47-44f0-87de-add2b20cec7c"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Title"}),": The title identifies the widget. Hovering on top shows the description and the source of where the data comes from."]}),"\n"]}),"\n",(0,n.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:(0,n.jsx)("img",{width:"300",alt:"hover on title",src:"https://github.com/user-attachments/assets/7d1ea855-e77a-4eab-9330-b8a4d9e58bf5"})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Staleness Indicator"}),": When the user hovers on the indicator it shows how recent the data is: Green if updated within the last 30 seconds; Yellow if updated between 30 seconds and 5 minutes ago; Red oif updated over 5 minutes ago. If the user wants to get latest data for a particular widget all that is needed is clicking in the indicator icon to fetch/refresh the data."]}),"\n"]}),"\n",(0,n.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:(0,n.jsx)("img",{width:"300",alt:"staleness indicator",src:"https://github.com/user-attachments/assets/ca21f129-5c3d-4c33-9997-338f1180677b"})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Symbol"}),": Some widgets are associated with a symbol. Changing this symbol updates the table content to reflect the new symbol."]}),"\n"]}),"\n",(0,n.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:(0,n.jsx)("img",{width:"300",alt:"click on symbol",src:"https://github.com/user-attachments/assets/322668a5-1d6e-44df-9a8e-39cc51e49c41"})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Group"}),": If multiple widgets belong to the same group, updating the symbol in one will automatically update the symbol in the others. When you click on the group icon, you can set a new group for the current widget."]}),"\n"]}),"\n",(0,n.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:(0,n.jsx)("img",{width:"300",alt:"click on group",src:"https://github.com/user-attachments/assets/4c8f5fcd-4e44-4e1a-9723-d98c64f8294c"})}),"\n",(0,n.jsx)(t.p,{children:"When widgets are grouped, they share the same color and number in the group icon. You can see which dashboards have which groupings by looking at the text below the dashboard title in the sidebar."}),"\n",(0,n.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:(0,n.jsx)("img",{width:"300",alt:"check dashboard sidebar grouping",src:"https://github.com/user-attachments/assets/22285fcf-46d5-42a1-a359-81670d43d356"})}),"\n",(0,n.jsx)(t.p,{children:"Here's a short introduction to the grouping concept."}),"\n",(0,n.jsx)(r.A,{youtubeLink:"https://www.youtube.com/embed/cOH8qjOBWTI?si=I_NLm7UP4vgNBjo4",videoLegend:"Short introduction to grouping"}),"\n",(0,n.jsx)(t.h3,{id:"manipulating-data",children:"Manipulating data"}),"\n",(0,n.jsx)(r.A,{youtubeLink:"https://www.youtube.com/embed/g_cdzenT6ck?si=wbCHt-Y5lQACeM9o",videoLegend:"Short introduction to tabular data"}),"\n",(0,n.jsx)(t.p,{children:"In the realm of investment research, financial data often comes in tabular form. This is because it's predominantly quantitative, and analysts and quants frequently need to delve into the raw data to make informed decisions. To enhance your navigation experience through this data, we've incorporated basic data manipulation capabilities."}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Column Resizing"}),': You have the flexibility to manually adjust the width of the table columns. Alternatively, you can use the "Autosize all columns" feature for automatic resizing.']}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Column Reorganization"}),": Reorganize your columns effortlessly with our drag-and-drop feature. Simply click and hold the mouse on the column header and drag it to your desired position."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Column Filtering"}),": To reduce visual clutter, you can temporarily hide any columns that aren't currently relevant to your analysis. This can be done easily in the column settings."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Sorting"}),": By clicking on a column header, you can sort the data in ascending or descending order based on that column's values."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Transposing"}),": Our platform allows you to transpose tables, turning columns into rows and vice versa. This feature can be particularly useful for rendering time series from tabular data."]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"live-chart",children:"Live Chart"}),"\n",(0,n.jsx)(t.p,{children:"By utilizing the button on the top right corner, users are able to have access to the data in a chart form. And that chart is updated based on the data being updated."}),"\n",(0,n.jsx)(t.h3,{id:"static-chart",children:"Static Chart"}),"\n",(0,n.jsx)(t.p,{children:"In the world of investment research, data is king. But raw, tabular data can be overwhelming and difficult to interpret. That's where charts come in. They transform complex data sets into visual narratives, making it easier to spot trends, compare variables, and make informed decisions."}),"\n",(0,n.jsx)(t.p,{children:"With OpenBB Terminal, you can create charts directly from your tabular data in two ways."}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Simply select the data you want to visualize, choose your preferred charting style, and let the software do the rest. It's a powerful tool for quants and analysts alike."}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:'If available pm the widget, you can click on the "ChartView" icon and we will generate a chart for you. The biggest advantage here is that the data will update automatically and be reflected in your chart.'}),"\n"]}),"\n"]}),"\n",(0,n.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:(0,n.jsx)("img",{className:"pro-border-gradient",width:"800",alt:"selection-charting",src:"https://openbb-assets.s3.amazonaws.com/docs/pro/selection-charting-1.png"})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:'In this example we\'ve highlighted some data and with a simple "right-click" you can pick a line chart.'}),"\n"]}),"\n",(0,n.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:(0,n.jsx)("img",{className:"pro-border-gradient",width:"800",alt:"chartview",src:"https://openbb-assets.s3.amazonaws.com/docs/pro/chartview-setting.png"})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:'In this example we\'re utilizing the "ChartView" highlighted in blue. This allows us to change the widget into a chart instead of a table.'}),"\n"]}),"\n",(0,n.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:(0,n.jsx)("img",{className:"pro-border-gradient",width:"800",alt:"example",src:"https://openbb-assets.s3.amazonaws.com/docs/pro/combo-chart.png"})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Finally we're customizing the chart to show a different way then a simple line."}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"openbb-core-widgets",children:"OpenBB Core Widgets"}),"\n",(0,n.jsx)(t.h3,{id:"table",children:"Table"}),"\n",(0,n.jsx)(t.p,{children:"The Table widget was highlighted previously, in the Widget Structure section."}),"\n",(0,n.jsx)(t.h3,{id:"chart",children:"Chart"}),"\n",(0,n.jsx)(t.p,{children:"@TODO get a similar cheatsheet for charts like shared above for tables"}),"\n",(0,n.jsx)(t.p,{children:"When a chart is created you can customize almost anything within it by clicking on the three dots and then Chart Settings."}),"\n",(0,n.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:(0,n.jsx)("img",{className:"pro-border-gradient",width:"200",alt:"example",src:"https://openbb-assets.s3.amazonaws.com/docs/pro/chart-settings-small.png"})}),"\n",(0,n.jsx)(t.p,{children:'Once you bring up the "Customize" tab on your chart, you\'ll have a tab like below to change anything from title to colors. In the other tabs you\'ll also be able\nto change what series are shown on the chart in the "Set Up" tab and the chart type under the "Chart" tab. All of these customizations let you create beautiful visualizations.'}),"\n",(0,n.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:(0,n.jsx)("img",{className:"pro-border-gradient",width:"800",alt:"example",src:"https://openbb-assets.s3.amazonaws.com/docs/pro/customization.png"})}),"\n",(0,n.jsx)(t.h3,{id:"note",children:"Note"}),"\n",(0,n.jsx)(t.p,{children:"The Note Widget lets you quickly jot down notes, insights, and observations directly in your dashboard. It\u2019s ideal for capturing key information during research, tracking important points, or storing prompts for the OpenBB Copilot."}),"\n",(0,n.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:(0,n.jsx)("img",{className:"pro-border-gradient",width:"600",alt:"folder",src:"https://openbb-web-assets.s3.amazonaws.com/docs/launch_oct_24/note_widget.png"})}),"\n",(0,n.jsx)(t.p,{children:"Did you know that you can enhance your experience by adding Notes as context to OpenBB Copilot and using them as prompts? It\u2019s a powerful way to track prompts and seamlessly integrate your insights into your workflow."}),"\n",(0,n.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:(0,n.jsx)("img",{className:"pro-border-gradient",width:"600",alt:"folder",src:"https://openbb-web-assets.s3.amazonaws.com/docs/launch_oct_24/note_context.png"})}),"\n",(0,n.jsx)(t.h3,{id:"website-and-iframe",children:"Website and Iframe"}),"\n",(0,n.jsx)(t.p,{children:"Often, during your research workflow, you need to browse multiple websites to extract data. The Website widget is a versatile tool that lets you embed and interact with websites directly within your dashboard, making it easy to access data from various sources all within the Terminal."}),"\n",(0,n.jsx)(t.p,{children:"Please note that some websites may disable this functionality. We will automatically check and display the website only if permitted by the site owner."}),"\n",(0,n.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:(0,n.jsx)("img",{className:"pro-border-gradient",width:"600",alt:"folder",src:"https://openbb-web-assets.s3.amazonaws.com/docs/launch_oct_24/website.png"})}),"\n",(0,n.jsx)(t.h3,{id:"clock",children:"Clock"}),"\n",(0,n.jsx)(t.p,{children:"Use our Clock Widget to track multiple time zones simultaneously. It lets you monitor the current time in key financial hubs worldwide, helping you stay on top of market hours and coordinate effectively with international teams."}),"\n",(0,n.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:(0,n.jsx)("img",{className:"pro-border-gradient",width:"600",alt:"folder",src:"https://openbb-web-assets.s3.amazonaws.com/docs/launch_oct_24/clock.png"})}),"\n",(0,n.jsx)(t.h3,{id:"rss-feeds",children:"RSS Feeds"}),"\n",(0,n.jsx)(t.p,{children:"The RSS Feeds Widget is an excellent way to stay up-to-date with the latest news directly within your dashboard. We provide a curated list of top news sources right out of the box, but the true power lies in the ability to customize your RSS feeds. You can add any feeds that are relevant to your research workflow, ensuring you always have the most relevant information at your fingertips."}),"\n",(0,n.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:(0,n.jsx)("img",{className:"pro-border-gradient",width:"600",alt:"folder",src:"https://openbb-web-assets.s3.amazonaws.com/docs/launch_oct_24/rss.png"})}),"\n",(0,n.jsx)(t.h3,{id:"navigation-bar",children:"Navigation bar"}),"\n",(0,n.jsx)(t.p,{children:"The Navigation Bar lets you add and manage multiple tabs within your dashboard, making it easier to organize and navigate through your information."}),"\n",(0,n.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:(0,n.jsx)("img",{className:"pro-border-gradient",width:"600",alt:"folder",src:"https://openbb-web-assets.s3.amazonaws.com/docs/launch_oct_24/navigation_bar.png"})}),"\n",(0,n.jsx)(t.h2,{id:"data-widgets",children:"Data widgets"}),"\n",(0,n.jsx)(t.p,{children:"Beyond the OpenBB Core widgets, the OpenBB team has created custom widgets tailored to the specific data they want to offer users. These widgets do not follow the standard table or chart formats mentioned above."}),"\n",(0,n.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:(0,n.jsx)("img",{className:"pro-border-gradient",width:"800",alt:"newswidget",src:"https://github.com/OpenBB-finance/OpenBBTerminal/assets/25267873/5ada7e7f-c619-46fb-850f-006c6e0d0cd2"})}),"\n",(0,n.jsx)(t.h3,{id:"charting",children:"Charting"}),"\n",(0,n.jsxs)(t.p,{children:["Our charting widget is powered by the renowned TradingView charting library, offering you a comprehensive and intuitive platform for financial analysis. With this feature, you can access all the functionalities typically available on TradingView. To get the most out of this feature, we recommend familiarizing yourself with TradingView's capabilities here: ",(0,n.jsx)(t.a,{href:"https://www.tradingview.com/charting-library-docs/latest/getting_started",children:"TradingView"})]}),"\n",(0,n.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:(0,n.jsx)("img",{className:"pro-border-gradient",width:"800",alt:"charting",src:"https://github.com/OpenBB-finance/OpenBBTerminal/assets/25267873/0012510b-fb13-4dd5-9aef-cd5600a5684f"})}),"\n",(0,n.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:(0,n.jsx)(t.p,{children:(0,n.jsxs)(t.em,{children:["The charting technology is provided by TradingView. Follow the most important cryptos like ",(0,n.jsx)(t.a,{href:"https://www.tradingview.com/symbols/BTCUSD/",children:"bitcoin usd"}),", ",(0,n.jsx)(t.a,{href:"https://www.tradingview.com/symbols/ETHUSD/",children:"eth usd"})," and much more."]})})}),"\n",(0,n.jsx)(t.p,{children:"Here's a quick rundown of what you can do with our charting feature:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Adjust the time interval and timeline based on your preferred data vendor"}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Utilize TradingView's robust suite of technical analysis indicators for in-depth market insights"}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Access a variety of editing tools for annotations, line drawings, measurements, Fibonacci retracements, and more"}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Overlay charts of other tickers of interest, whether they're in forex, crypto, equity, or macroeconomics"}),"\n"]}),"\n"]}),"\n",(0,n.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:(0,n.jsx)("img",{className:"pro-border-gradient",width:"800",alt:"charting add",src:"https://github.com/OpenBB-finance/OpenBBTerminal/assets/25267873/b94fe659-9b53-48df-aa58-fb33e2a24f51"})}),"\n",(0,n.jsxs)(t.p,{children:["It also allows users to ",(0,n.jsx)(t.strong,{children:"Overlay Financials"}),":"]}),"\n",(0,n.jsx)(t.p,{children:"When analyzing equity data, you'll notice the \"Financial\" text above the chart. This powerful tool allows you to overlay financial data (e.g., revenue, cost of goods, etc.) over time, providing a visual representation of how financials impact the equity price trajectory. It's a powerful way to understand the correlation between a company's financial performance and its stock price."}),"\n",(0,n.jsx)(t.h3,{id:"watchlist-and-grouping",children:"Watchlist and grouping"}),"\n",(0,n.jsx)(t.p,{children:"The watchlist widget has a special property in relation to grouping. Since this widget doesn't have a single symbol but many, users can select the row of their ticker of interest, and widgets that are grouped with the watchlist will get updated accordingly."}),"\n",(0,n.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:(0,n.jsx)("img",{className:"pro-border-gradient",width:"800",alt:"watchlist",src:"https://github.com/OpenBB-finance/OpenBBTerminal/assets/25267873/d36380df-743a-4676-bec4-6bd34567e661"})}),"\n",(0,n.jsx)(t.p,{children:"If a user selects a new ticker in another widget that is grouped with the watchlist, that ticker will be added to the watchlist and will become the one selected by default."}),"\n",(0,n.jsx)(t.h3,{id:"news-and-ticker",children:"News and ticker"}),"\n",(0,n.jsx)(t.p,{children:'When scrolling our news widgets, we allow you to quickly pull information for a company and create a dashboard to do more in depth research. Simply hover on the ticker and you will get a popup like below. Clicking on "Create dashboard for ..." will pull up our Equity or ETF Dashboard, allowing you to perform in depth research with just a few clicks.'}),"\n",(0,n.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:(0,n.jsx)("img",{className:"pro-border-gradient",width:"800",alt:"news-hover",src:"https://openbb-assets.s3.amazonaws.com/docs/pro/news-hover.png"})}),"\n",(0,n.jsx)(t.h3,{id:"tradingview-widgets",children:"TradingView widgets"}),"\n",(0,n.jsx)(t.p,{children:"TradingView widgets are not native, and therefore that means that the data within them won't be accessible to your AI copilot, unlike others."})]})}function p(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},94331:(e,t,i)=>{i.d(t,{A:()=>s});i(96540);var n=i(5260),a=i(74848);function s(e){let{title:t}=e;return(0,a.jsx)(n.A,{children:(0,a.jsx)("title",{children:t})})}},69396:(e,t,i)=>{i.d(t,{A:()=>a});i(96540);var n=i(74848);function a(e){let{youtubeLink:t,videoLegend:i="Tutorial video"}=e;return(0,n.jsx)("div",{style:{textAlign:"center"},children:(0,n.jsx)("div",{style:{position:"relative",paddingBottom:"56.25%",height:"0",overflow:"hidden",maxWidth:"100%"},children:(0,n.jsx)("iframe",{id:t,style:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%",display:"block",margin:"0 auto"},src:t,title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0})})})}},28453:(e,t,i)=>{i.d(t,{R:()=>r,x:()=>o});var n=i(96540);const a={},s=n.createContext(a);function r(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);