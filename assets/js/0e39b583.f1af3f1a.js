"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[68462],{61616:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var i=t(74848),s=t(28453),o=t(94331);const a={title:"Introduction to Routines",sidebar_position:1,description:"The page provides a detailed introduction to OpenBB Routines, which allow users to automate processes and repetitive tasks in financial analysis and data collection. It explains conventions, basic scripts, routine execution, and guides users on getting started with an example.",keywords:["OpenBB Routines","automated processes","repetitive tasks","data collection","basic script","routine execution","automation","routines","cli"]},r=void 0,l={id:"cli/routines/introduction-to-routines",title:"Introduction to Routines",description:"The page provides a detailed introduction to OpenBB Routines, which allow users to automate processes and repetitive tasks in financial analysis and data collection. It explains conventions, basic scripts, routine execution, and guides users on getting started with an example.",source:"@site/content/cli/routines/introduction-to-routines.md",sourceDirName:"cli/routines",slug:"/cli/routines/introduction-to-routines",permalink:"/cli/routines/introduction-to-routines",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/cli/routines/introduction-to-routines.md",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1719240743e3,sidebarPosition:1,frontMatter:{title:"Introduction to Routines",sidebar_position:1,description:"The page provides a detailed introduction to OpenBB Routines, which allow users to automate processes and repetitive tasks in financial analysis and data collection. It explains conventions, basic scripts, routine execution, and guides users on getting started with an example.",keywords:["OpenBB Routines","automated processes","repetitive tasks","data collection","basic script","routine execution","automation","routines","cli"]},sidebar:"tutorialSidebar",previous:{title:"Routines",permalink:"/cli/routines/"},next:{title:"Community Routines",permalink:"/cli/routines/community-routines"}},c={},d=[{value:"Overview",id:"overview",level:2},{value:"Pipeline of Commands",id:"pipeline-of-commands",level:2},{value:"Step-by-Step Explanation",id:"step-by-step-explanation",level:3},{value:"Routine execution",id:"routine-execution",level:2},{value:"Basic Script",id:"basic-script",level:2},{value:"Getting started",id:"getting-started",level:2}];function h(e){const n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(o.A,{title:"Introduction to Routines - Routines | OpenBB Platform CLI Docs"}),"\n",(0,i.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,i.jsxs)(n.p,{children:["OpenBB Routines allows users to capture and write simple scripts for automating processes and repetitive tasks. In essence, these are text plain-text files that can be created or modified in any basic text editor with the only difference being the ",(0,i.jsx)(n.code,{children:".openbb"})," extension."]}),"\n",(0,i.jsx)(n.p,{children:"Other software like STATA, SPSS, and R-Studio share similar functionality in the area of Econometrics and the OpenBB routine scripts venture into the area of financial analysis and data collection to speed up the process."}),"\n",(0,i.jsxs)(n.p,{children:["Routines make it easy to automate a series of processes, and this includes mining and dumping large amounts of data to organized spreadsheets.  Making use of ",(0,i.jsx)(n.code,{children:"--export"})," and ",(0,i.jsx)(n.code,{children:"--sheet-name"}),", data collection is more efficient and reliable, with results that are easily replicable."]}),"\n",(0,i.jsxs)(n.p,{children:["A pipeline of commands is difficult to share, so to encourage users to share ideas and processes, we created ",(0,i.jsx)(n.a,{href:"/cli/routines/community-routines",children:"Community Routines"})," for the ",(0,i.jsx)(n.a,{href:"https://my.openbb.co/",children:"OpenBB Hub"}),". Routines can be created, stored, and shared - executable in any OpenBB Platform CLI installation, by URL."]}),"\n",(0,i.jsx)(n.h2,{id:"pipeline-of-commands",children:"Pipeline of Commands"}),"\n",(0,i.jsx)(n.p,{children:"One of the main objectives of the OpenBB Platform CLI is to automate a user's investment research workflow - not just a single command, but the complete process.  This is where the pipeline of commands comes in,  running a sequence of commands."}),"\n",(0,i.jsx)(n.p,{children:"An example of a pipeline of commands is:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-console",children:"/equity/price/historical --symbol AAPL/../../technical/ema --data OBB0 --length 50\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Which will perform a exponential moving average (",(0,i.jsx)(n.code,{children:"ema"}),") on the historical price of Apple (",(0,i.jsx)(n.code,{children:"AAPL"}),")."]}),"\n",(0,i.jsx)(n.h3,{id:"step-by-step-explanation",children:"Step-by-Step Explanation"}),"\n",(0,i.jsx)(n.p,{children:"This will do the following:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"equity"})," - Go into ",(0,i.jsx)(n.code,{children:"equity"})," menu."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"price"})," - Go into ",(0,i.jsx)(n.code,{children:"price"})," sub-menu."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"historical --symbol AAPL"})," - Load historical price data for Apple."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:".."})," (X2) will walk back to the root menu."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"technical"})," -  Go into Technical Analysis (",(0,i.jsx)(n.code,{children:"technical"}),") menu."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"ema --data OBB0 --length 50"})," - Run the exponential moving average indicator with windows of length 50 (",(0,i.jsx)(n.code,{children:"--length 50"}),") on the last cached result (",(0,i.jsx)(n.code,{children:"--data OBB0"}),")"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"routine-execution",children:"Routine execution"}),"\n",(0,i.jsxs)(n.p,{children:["Run a routine file from the main menu, with the ",(0,i.jsx)(n.code,{children:"exe"})," command. Try, ",(0,i.jsx)(n.code,{children:"exe --example"}),", to get a sense of what this functionality does. Below, the ",(0,i.jsx)(n.code,{children:"--help"})," dialogue is displayed."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-console",children:"/exe -h\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-console",children:"usage: exe [--file FILE [FILE ...]] [-i ROUTINE_ARGS] [-e] [--url URL] [-h]\n\nExecute automated routine script. For an example, please use `exe --example` and for documentation and to learn how create your own script type `about exe`.\n\noptional arguments:\n  --file FILE [FILE ...], -f FILE [FILE ...]\n                        The path or .openbb file to run. (default: None)\n  -i ROUTINE_ARGS, --input ROUTINE_ARGS\n                        Select multiple inputs to be replaced in the routine and separated by commas. E.g. GME,AMC,BTC-USD (default: None)\n  -e, --example         Run an example script to understand how routines can be used. (default: False)\n  --url URL             URL to run openbb script from. (default: None)\n  -h, --help            show this help message (default: False)\n\nFor more information and examples, use 'about exe' to access the related guide.\n"})}),"\n",(0,i.jsx)(n.h2,{id:"basic-script",children:"Basic Script"}),"\n",(0,i.jsx)(n.p,{children:"The most basic script style contains 2 main elements:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Comments"}),": any text after a hashtag (",(0,i.jsx)(n.code,{children:"#"}),") is referred to as a comment. This is used to explain what is happening within the line below and is ignored when the file is executed."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Commands"}),": any text ",(0,i.jsx)(n.em,{children:"without"})," a hashtag is being run inside the CLI as if the user had prompted that line in the terminal. Note that this means that you are able to create a pipeline of commands in a single line, i.e. ",(0,i.jsx)(n.code,{children:"equity/price/historical --symbol AAPL --provider fmp"})," is a valid line for the script."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"For instance, the text below corresponds to the example file that OpenBB provides."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-console",children:"# Navigate into the price sub-menu of the equity module.\nequity/price\n\n# Load a company ticker, e.g. Apple\nhistorical --symbol AAPL --provider yfinance\n\n# Show a candle chart with a 20 day Moving Average\n/technical/ema --data OBB0 --length 20\n\n# Switch over to the Fundamental Analysis menu\n/equity/fundamental\n\n# Show balance sheet\nbalance --symbol aapl --provider yfinance\n\n# Show cash flow statement\ncash --symbol aapl --provider yfinance\n\n# Show income statement\nincome --symbol aapl --provider yfinance\n\n# Return to home\nhome\n"})}),"\n",(0,i.jsx)(n.h2,{id:"getting-started",children:"Getting started"}),"\n",(0,i.jsx)(n.p,{children:"As a starting point, let's use the example above."}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Create a new text file with the name ",(0,i.jsx)(n.code,{children:"routines_template.openbb"})," and copy and paste the routine above."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Move the file inside the ",(0,i.jsx)(n.code,{children:"routines"})," folder within the ",(0,i.jsx)(n.a,{href:"openbbuserdata",children:"OpenBBUserData"})," folder and, optionally, adjust the name to your liking."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Open up the CLI, and type ",(0,i.jsx)(n.code,{children:"exe --file routines_template"}),".  If you changed the name of the file, then replace, ",(0,i.jsx)(n.code,{children:"routines_template"}),", with that.  As long as the file remains in the ",(0,i.jsx)(n.code,{children:"~/OpenBBUserData/routines"})," folder, the CLI's auto-completer will provide it as a choice."]}),"\n"]}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},94331:(e,n,t)=>{t.d(n,{A:()=>o});t(96540);var i=t(5260),s=t(74848);function o(e){let{title:n}=e;return(0,s.jsx)(i.A,{children:(0,s.jsx)("title",{children:n})})}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>r});var i=t(96540);const s={},o=i.createContext(s);function a(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);