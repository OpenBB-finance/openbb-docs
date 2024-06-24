"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[49297],{31378:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>r,metadata:()=>d,toc:()=>u});var i=n(74848),s=n(28453),o=n(94331),a=n(69396);const r={title:"Introduction to Routines",sidebar_position:2,description:"The page provides a detailed introduction to OpenBB Routines, which allow users to automate processes and repetitive tasks in financial analysis and data collection. It explains basic scripts, routine execution, and guides users on getting started with an example.",keywords:["OpenBB Routines","automated processes","repetitive tasks","data collection","basic script","routine execution","tutorial video"]},l=void 0,d={id:"terminal/usage/routines/introduction-to-routines",title:"Introduction to Routines",description:"The page provides a detailed introduction to OpenBB Routines, which allow users to automate processes and repetitive tasks in financial analysis and data collection. It explains basic scripts, routine execution, and guides users on getting started with an example.",source:"@site/content/terminal/usage/routines/introduction-to-routines.md",sourceDirName:"terminal/usage/routines",slug:"/terminal/usage/routines/introduction-to-routines",permalink:"/terminal/usage/routines/introduction-to-routines",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/terminal/usage/routines/introduction-to-routines.md",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1719240743e3,sidebarPosition:2,frontMatter:{title:"Introduction to Routines",sidebar_position:2,description:"The page provides a detailed introduction to OpenBB Routines, which allow users to automate processes and repetitive tasks in financial analysis and data collection. It explains basic scripts, routine execution, and guides users on getting started with an example.",keywords:["OpenBB Routines","automated processes","repetitive tasks","data collection","basic script","routine execution","tutorial video"]},sidebar:"tutorialSidebar",previous:{title:"The Pipeline of Commands",permalink:"/terminal/usage/routines/pipeline-of-commands"},next:{title:"Overlay Financial Data",permalink:"/terminal/usage/routines/overlay-financial-data"}},c={},u=[{value:"Introduction",id:"introduction",level:2},{value:"Routine execution",id:"routine-execution",level:2},{value:"Basic Script",id:"basic-script",level:2},{value:"Getting started",id:"getting-started",level:2}];function h(e){const t={a:"a",code:"code",em:"em",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(o.A,{title:"Introduction to Routines - Routines - Usage | OpenBB Terminal Docs"}),"\n","\n",(0,i.jsx)(a.A,{youtubeLink:"https://www.youtube.com/embed/p1pY6Zujvnc?si=HWStqbVnkU_Lw_P-",videoLegend:"Show short introduction to OpenBB routines"}),"\n",(0,i.jsx)(t.h2,{id:"introduction",children:"Introduction"}),"\n",(0,i.jsxs)(t.p,{children:["OpenBB Routines allows users to capture and write simple scripts for automating processes and repetitive tasks. In essence, these are text plain-text files that can be created or modified in any basic text editor with the only difference being the ",(0,i.jsx)(t.code,{children:".openbb"})," extension."]}),"\n",(0,i.jsx)(t.p,{children:"Other software like STATA, SPSS, and R-Studio share similar functionality in the area of Econometrics and the OpenBB routine scripts venture into the area of financial analysis and data collection to speed up the process."}),"\n",(0,i.jsxs)(t.p,{children:["Routines make it easy to automate a series of processes, and this includes mining and dumping large amounts of data to organized spreadsheets.  Making use of ",(0,i.jsx)(t.code,{children:"--export"})," and ",(0,i.jsx)(t.code,{children:"--sheet-name"}),", data collection is more efficient and reliable, with results that are easily replicable."]}),"\n",(0,i.jsxs)(t.p,{children:["A pipeline of commands is difficult to share, so to encourage users to share ideas and processes, we created ",(0,i.jsx)(t.a,{href:"/terminal/usage/routines/community-routines",children:"Community Routines"})," for the ",(0,i.jsx)(t.a,{href:"https://my.openbb.co/",children:"OpenBB Hub"}),".  Routines can be created, stored, and shared - executable in any Terminal installation, by URL."]}),"\n",(0,i.jsx)(t.h2,{id:"routine-execution",children:"Routine execution"}),"\n",(0,i.jsxs)(t.p,{children:["Run a routine file from the main menu, with the ",(0,i.jsx)(t.code,{children:"exe"})," command. A great start would be to use ",(0,i.jsx)(t.code,{children:"exe --example"})," to get a sense of what this functionality does. Below, the ",(0,i.jsx)(t.code,{children:"--help"})," dialogue is displayed."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-console",children:"/exe -h\n"})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-console",children:"usage: exe [--file FILE [FILE ...]] [-i ROUTINE_ARGS] [-e] [--url URL] [-h]\n\nExecute automated routine script. For an example, please use `exe --example` and for documentation and to learn how create your own script type `about exe`.\n\noptional arguments:\n  --file FILE [FILE ...], -f FILE [FILE ...]\n                        The path or .openbb file to run. (default: None)\n  -i ROUTINE_ARGS, --input ROUTINE_ARGS\n                        Select multiple inputs to be replaced in the routine and separated by commas. E.g. GME,AMC,BTC-USD (default: None)\n  -e, --example         Run an example script to understand how routines can be used. (default: False)\n  --url URL             URL to run openbb script from. (default: None)\n  -h, --help            show this help message (default: False)\n\nFor more information and examples, use 'about exe' to access the related guide.\n"})}),"\n",(0,i.jsx)(t.h2,{id:"basic-script",children:"Basic Script"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:"https://github.com/OpenBB-finance/OpenBBTerminal/assets/25267873/eaeb3511-d544-4579-8d76-f7a4fd7bb1d3",alt:"image"})}),"\n",(0,i.jsx)(t.p,{children:"The most basic script style contains 2 main elements:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Comments"}),": any text after a hashtag (",(0,i.jsx)(t.code,{children:"#"}),") is referred to as a comment. This is used to explain what is happening within the line below and is ignored when the file is executed."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Commands"}),": any text ",(0,i.jsx)(t.em,{children:"without"})," a hashtag is being run inside the OpenBB Terminal as if the user had prompted that line in the terminal. Note that this means that you are able to create a pipeline of commands in a single line, i.e. ",(0,i.jsx)(t.code,{children:"stocks/load AAPL/candle --ma 20"})," is a valid line for the script."]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"For instance, the text below corresponds to the example file that OpenBB provides."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-console",children:"# Go into the stocks context\nstocks\n\n# Load a company ticker, e.g. Apple\nload AAPL\n\n# Show a candle chart with a 20 day Moving Average\ncandle --ma 20\n\n# Switch over to the Fundamental Analysis menu\nfa\n\n# Show Earnings per Share (EPS) estimates\nepsfc\n\n# Show price targets charts\npt\n\n# Show future estimations\nest\n\n# Return to home\nhome\n"})}),"\n",(0,i.jsx)(t.h2,{id:"getting-started",children:"Getting started"}),"\n",(0,i.jsx)(t.p,{children:"As a starting point, let's use the example above."}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Create a new text file with the name ",(0,i.jsx)(t.code,{children:"routines_template.openbb"})," and copy and paste the routine above."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Move the file inside the ",(0,i.jsx)(t.code,{children:"routines"})," folder within the ",(0,i.jsx)(t.a,{href:"/terminal/usage/data/custom-data",children:"OpenBBUserData"})," folder and, optionally, adjust the name to your liking."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Open up the OpenBB Terminal, and type ",(0,i.jsx)(t.code,{children:"exe --file routines_template"}),".  If you changed the name of the file, then replace, ",(0,i.jsx)(t.code,{children:"routines_template"}),", with that.  As long as the file remains in the ",(0,i.jsx)(t.code,{children:"~/OpenBBUserData/routines"})," folder, OpenBB Terminal's auto-completer will provide it as a choice."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"When this routine is run, a candle chart with a moving average of 20 days, expectations and price targets from analysts and estimated future performance should pop up before returning to the home window."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:"https://user-images.githubusercontent.com/46355364/223207167-dfab3a74-d34d-47d4-bf6e-44944e8fbfa2.png",alt:"OpenBB Routine Script Execution"})})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},94331:(e,t,n)=>{n.d(t,{A:()=>o});n(96540);var i=n(5260),s=n(74848);function o(e){let{title:t}=e;return(0,s.jsx)(i.A,{children:(0,s.jsx)("title",{children:t})})}},69396:(e,t,n)=>{n.d(t,{A:()=>a});var i=n(96540),s=n(23174),o=n(74848);function a(e){let{youtubeLink:t,videoLegend:n="Tutorial video"}=e;const[a,r]=(0,i.useState)(!0);return(0,o.jsxs)("div",{style:{textAlign:"center"},children:[(0,o.jsxs)("div",{className:"flex flex-col sm:flex-row items-center justify-center",children:[(0,o.jsx)("p",{children:n}),(0,o.jsx)("div",{style:{transform:"scale(0.7)"},children:(0,o.jsx)(s.Toggle,{isOn:a,handleChange:()=>r(!a)})})]}),a&&(0,o.jsx)("div",{style:{position:"relative",paddingBottom:"56.25%",height:"0",overflow:"hidden",maxWidth:"100%"},children:(0,o.jsx)("iframe",{id:t,style:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%",display:"block",margin:"0 auto"},src:t,title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0})})]})}},23174:(e,t,n)=>{e.exports=n(49793)},49793:(e,t,n)=>{var i,s=(i=n(96540))&&"object"==typeof i&&"default"in i?i.default:i;!function(e,t){void 0===t&&(t={});var n=t.insertAt;if("undefined"!=typeof document){var i=document.head||document.getElementsByTagName("head")[0],s=document.createElement("style");s.type="text/css","top"===n&&i.firstChild?i.insertBefore(s,i.firstChild):i.appendChild(s),s.styleSheet?s.styleSheet.cssText=e:s.appendChild(document.createTextNode(e))}}("/* The switch - the box around the slider */\n.switch {\n  position: relative;\n  display: inline-block;\n  width: 60px;\n  height: 34px;\n}\n\n/* Hide default HTML checkbox */\n.switch input {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n\n/* The slider */\n.slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #ccc;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n}\n\n.slider:before {\n  position: absolute;\n  content: '';\n  height: 26px;\n  width: 26px;\n  left: 4px;\n  bottom: 4px;\n  background-color: white;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n}\n\ninput:checked + .slider {\n  background-color: #2196f3;\n}\n\ninput:focus + .slider {\n  box-shadow: 0 0 1px #2196f3;\n}\n\ninput:checked + .slider:before {\n  -webkit-transform: translateX(26px);\n  -ms-transform: translateX(26px);\n  transform: translateX(26px);\n}\n\n/* Rounded sliders */\n.slider.round {\n  border-radius: 34px;\n}\n\n.slider.round:before {\n  border-radius: 50%;\n}\n"),t.Toggle=function(e){return s.createElement("label",{"data-testid":"Toggle-label",className:"switch"},s.createElement("input",{checked:e.isOn,"data-testid":"Toggle",onChange:e.handleChange,type:"checkbox"}),s.createElement("span",{className:"slider round"}))}},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>r});var i=n(96540);const s={},o=i.createContext(s);function a(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);