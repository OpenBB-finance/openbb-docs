"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8316],{67195:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>r,metadata:()=>d,toc:()=>h});var s=t(74848),o=t(28453),i=t(94331),a=t(69396);const r={title:"Commands and arguments",sidebar_position:2,description:"This documentation page includes a tutorial video that provides a short introduction on commands and arguments for the OpenBB Terminal. It further explains the help dialogue for functions, the auto-completion feature, and global commands such as help, about, support, cls, quit, exit, and reset. Also, tips for submitting support requests are provided.",keywords:["tutorial video","help arguments","auto-complete","global commands","support command","reset command","command line interface","metadata"]},l=void 0,d={id:"terminal/usage/overview/commands-and-arguments",title:"Commands and arguments",description:"This documentation page includes a tutorial video that provides a short introduction on commands and arguments for the OpenBB Terminal. It further explains the help dialogue for functions, the auto-completion feature, and global commands such as help, about, support, cls, quit, exit, and reset. Also, tips for submitting support requests are provided.",source:"@site/content/terminal/usage/overview/commands-and-arguments.md",sourceDirName:"terminal/usage/overview",slug:"/terminal/usage/overview/commands-and-arguments",permalink:"/terminal/usage/overview/commands-and-arguments",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/terminal/usage/overview/commands-and-arguments.md",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1719247347e3,sidebarPosition:2,frontMatter:{title:"Commands and arguments",sidebar_position:2,description:"This documentation page includes a tutorial video that provides a short introduction on commands and arguments for the OpenBB Terminal. It further explains the help dialogue for functions, the auto-completion feature, and global commands such as help, about, support, cls, quit, exit, and reset. Also, tips for submitting support requests are provided.",keywords:["tutorial video","help arguments","auto-complete","global commands","support command","reset command","command line interface","metadata"]},sidebar:"tutorialSidebar",previous:{title:"Structure and Navigation",permalink:"/terminal/usage/overview/structure-and-navigation"},next:{title:"Customization",permalink:"/terminal/usage/overview/customizing-the-terminal"}},c={},h=[{value:"Help arguments",id:"help-arguments",level:2},{value:"Auto-complete",id:"auto-complete",level:2},{value:"Global commands",id:"global-commands",level:2},{value:"Help",id:"help",level:3},{value:"About",id:"about",level:3},{value:"Support",id:"support",level:3},{value:"CLS",id:"cls",level:3},{value:"Quit",id:"quit",level:3},{value:"Exit",id:"exit",level:3},{value:"Reset",id:"reset",level:3}];function u(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.A,{title:"Commands and arguments - Overview - Usage | OpenBB Terminal Docs"}),"\n","\n",(0,s.jsx)(a.A,{youtubeLink:"https://www.youtube.com/embed/y8J7fGW9ZpY?si=ioMxKMCgD2X-MQ2j",videoLegend:"Short introduction on commands and arguments"}),"\n",(0,s.jsx)(n.h2,{id:"help-arguments",children:"Help arguments"}),"\n",(0,s.jsxs)(n.p,{children:["A help dialogue for any function at the current location is printed to the screen by typing ",(0,s.jsx)(n.code,{children:"-h"})," or ",(0,s.jsx)(n.code,{children:"--help"})," after the command. The information returned contains a short description of the function and all accepted arguments. For example the ",(0,s.jsx)(n.code,{children:"news"})," command will return:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-console",children:"(\ud83e\udd8b) / $ news -h\n\nusage: news [-t TERM [TERM ...]] [-s SOURCES] [-h] [--export EXPORT] [--sheet-name SHEET_NAME [SHEET_NAME ...]] [-l LIMIT]\n\ndisplay news articles based on term and data sources\n\noptions:\n  -t TERM [TERM ...], --term TERM [TERM ...]\n                        search for a term on the news\n  -s SOURCES, --sources SOURCES\n                        sources from where to get news from (separated by comma)\n  -h, --help            show this help message\n  --export EXPORT       Export raw data into csv, json, xlsx\n  --sheet-name SHEET_NAME [SHEET_NAME ...]\n                        Name of excel sheet to save data to. Only valid for .xlsx files.\n  -l LIMIT, --limit LIMIT\n                        Number of entries to show in data.\n\nFor more information and examples, use 'about news' to access the related guide.\n"})}),"\n",(0,s.jsx)(n.p,{children:'To search for news containing the term, "Federal Reserve", you can use this command:'}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-console",children:"(\ud83e\udd8b) / $ news --term Federal Reserve\n"})}),"\n",(0,s.jsx)(n.h2,{id:"auto-complete",children:"Auto-complete"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://user-images.githubusercontent.com/85772166/233247702-f707531c-2c65-4380-a662-cd4bc2ae0199.png",alt:"Auto Complete"})}),"\n",(0,s.jsxs)(n.p,{children:["The OpenBB Terminal is equipped with an auto completion engine that presents choices based on the current menu and command. Whenever you start typing, suggestion prompts will appear for existing commands and menus. When the command contains arguments, pressing the ",(0,s.jsx)(n.code,{children:"space bar"})," after typing the command will present the list of available arguments. Note that a menu doesn't has arguments attached."]}),"\n",(0,s.jsx)(n.p,{children:"This functionality dramatically reduces the number of key strokes required to perform tasks and, in many cases, eliminates the need to consult the help dialogue for reminders. Choices - where they are bound by a defined list - are searchable with the up and down arrow keys."}),"\n",(0,s.jsx)(n.h2,{id:"global-commands",children:"Global commands"}),"\n",(0,s.jsx)(n.p,{children:"These are commands that can be used throughout the terminal and will work regardless of the menu where they belong."}),"\n",(0,s.jsx)(n.h3,{id:"help",children:"Help"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"help"})," command shows the current menu you are in and all the commands and menus that exist, including a short description for each of these."]}),"\n",(0,s.jsxs)(n.p,{children:["This is arguably one of the most helpful commands that the terminal. If you are familiar to navigating in a command line interface, it's the equivalent to ",(0,s.jsx)(n.code,{children:"ls -ll"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"about",children:"About"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"about"})," command opens the browser to the OpenBB documentation pages for the specific command or menu. Note that this will depend on where the user is located within the terminal."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-console",children:"(\ud83e\udd8b) / $ about stocks\n"})}),"\n",(0,s.jsxs)(n.p,{children:["The command above will open a browser to ",(0,s.jsx)(n.a,{href:"/terminal/menus/stocks",children:"Introduction to the Stocks menu"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"support",children:"Support"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"support"})," command allows to submit a new request for support, a general question, or a bug report. The command will pre-populate a form with key information, like the command or menu name specific to the issue. Use the up and down arrow keys to browse and select the appropriate item for the ticket."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://user-images.githubusercontent.com/85772166/233577183-fbeb7be2-1d00-4ca0-86b3-42f1b71081e8.png",alt:"Support"})}),"\n",(0,s.jsx)(n.p,{children:"Naturally, this command has a help dialogue."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-console",children:"(\ud83e\udd8b) / $ support -h\n\nSubmit your support request\n\noptions:\n  -c {search,load,quote,tob,candle,news,resources,codes,ta,ba,qa,disc,dps,scr,sia,ins,gov,res,dd,fa,bt,ca,options,th,forecast}, --command {generic,search,load,quote,tob,candle,news,resources,codes,ta,ba,qa,disc,dps,scr,sia,ins,gov,res,dd,fa,bt,ca,options,th,forecast}\n                        Command that needs support (default: None)\n  --msg MSG [MSG ...], -m MSG [MSG ...]\n                        Message to send. Enclose it with double quotes (default: )\n  --type {bug,suggestion,question,generic}, -t {bug,suggestion,question,generic}\n                        Support ticket type (default: generic)\n  -h, --help            show this help message (default: False)\n"})}),"\n",(0,s.jsx)(n.p,{children:"An example of a valid support ticket could be:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-console",children:'/stocks/ $ support search --type question --msg "How do I find stocks from India with OpenBB?"\n'})}),"\n",(0,s.jsxs)(n.p,{children:["The command opens a browser window to a pre-populated form on the OpenBB website.  If you are signed-in to the Hub, all that is left to do is click ",(0,s.jsx)(n.code,{children:"Submit"}),"."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://user-images.githubusercontent.com/85772166/233577448-3e426a88-d0cf-4338-8f4c-21b9fd01d8b2.png",alt:"Submit Form"})}),"\n",(0,s.jsx)(n.p,{children:"PS: The answer to this question is:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-console",children:"(\ud83e\udd8b) /stocks/ $ search --country india --exchange-country india\n"})}),"\n",(0,s.jsxs)(n.admonition,{type:"note",children:[(0,s.jsx)(n.p,{children:"Tips for submitting a support request:"}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Tell us what version number is installed."}),"\n",(0,s.jsx)(n.li,{children:"Tell us what operating system and version the machine has."}),"\n",(0,s.jsx)(n.li,{children:"What is the installation type?  Installer, Source, PyPi, Docker, other?"}),"\n",(0,s.jsx)(n.li,{children:"Tell us the command and parameter combination causing the error."}),"\n",(0,s.jsx)(n.li,{children:"Tell us what symbol (ticker) is, or was trying to be, loaded."}),"\n",(0,s.jsx)(n.li,{children:"Show us the complete error message."}),"\n",(0,s.jsx)(n.li,{children:"Let us know any contextual information that will help us replicate and accurately identify the problem."}),"\n"]})]}),"\n",(0,s.jsx)(n.h3,{id:"cls",children:"CLS"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"cls"})," command clears the entire terminal screen."]}),"\n",(0,s.jsx)(n.h3,{id:"quit",children:"Quit"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"quit"})," command (can also use ",(0,s.jsx)(n.code,{children:"q"})," or ",(0,s.jsx)(n.code,{children:".."}),") allows to leave the current menu to go one menu above. If the user is on the root, that will mean leaving the terminal."]}),"\n",(0,s.jsx)(n.h3,{id:"exit",children:"Exit"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"exit"})," command allows the user to exit the terminal."]}),"\n",(0,s.jsx)(n.h3,{id:"reset",children:"Reset"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"reset"})," command (or ",(0,s.jsx)(n.code,{children:"r"}),") allows a developer that is using the terminal through source code to quickly test it's code changes by re-starting the terminal with the code changes. This allows to improve speed of development."]}),"\n",(0,s.jsxs)(n.p,{children:["For more information on contributing to the OpenBB Terminal read our ",(0,s.jsx)(n.a,{href:"https://github.com/OpenBB-finance/OpenBBTerminal/blob/main/CONTRIBUTING.md",children:"contribution guidelines"}),"."]})]})}function m(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},94331:(e,n,t)=>{t.d(n,{A:()=>i});t(96540);var s=t(5260),o=t(74848);function i(e){let{title:n}=e;return(0,o.jsx)(s.A,{children:(0,o.jsx)("title",{children:n})})}},69396:(e,n,t)=>{t.d(n,{A:()=>a});var s=t(96540),o=t(23174),i=t(74848);function a(e){let{youtubeLink:n,videoLegend:t="Tutorial video"}=e;const[a,r]=(0,s.useState)(!0);return(0,i.jsxs)("div",{style:{textAlign:"center"},children:[(0,i.jsxs)("div",{className:"flex flex-col sm:flex-row items-center justify-center",children:[(0,i.jsx)("p",{children:t}),(0,i.jsx)("div",{style:{transform:"scale(0.7)"},children:(0,i.jsx)(o.Toggle,{isOn:a,handleChange:()=>r(!a)})})]}),a&&(0,i.jsx)("div",{style:{position:"relative",paddingBottom:"56.25%",height:"0",overflow:"hidden",maxWidth:"100%"},children:(0,i.jsx)("iframe",{id:n,style:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%",display:"block",margin:"0 auto"},src:n,title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0})})]})}},23174:(e,n,t)=>{e.exports=t(49793)},49793:(e,n,t)=>{var s,o=(s=t(96540))&&"object"==typeof s&&"default"in s?s.default:s;!function(e,n){void 0===n&&(n={});var t=n.insertAt;if("undefined"!=typeof document){var s=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css","top"===t&&s.firstChild?s.insertBefore(o,s.firstChild):s.appendChild(o),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(document.createTextNode(e))}}("/* The switch - the box around the slider */\n.switch {\n  position: relative;\n  display: inline-block;\n  width: 60px;\n  height: 34px;\n}\n\n/* Hide default HTML checkbox */\n.switch input {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n\n/* The slider */\n.slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #ccc;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n}\n\n.slider:before {\n  position: absolute;\n  content: '';\n  height: 26px;\n  width: 26px;\n  left: 4px;\n  bottom: 4px;\n  background-color: white;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n}\n\ninput:checked + .slider {\n  background-color: #2196f3;\n}\n\ninput:focus + .slider {\n  box-shadow: 0 0 1px #2196f3;\n}\n\ninput:checked + .slider:before {\n  -webkit-transform: translateX(26px);\n  -ms-transform: translateX(26px);\n  transform: translateX(26px);\n}\n\n/* Rounded sliders */\n.slider.round {\n  border-radius: 34px;\n}\n\n.slider.round:before {\n  border-radius: 50%;\n}\n"),n.Toggle=function(e){return o.createElement("label",{"data-testid":"Toggle-label",className:"switch"},o.createElement("input",{checked:e.isOn,"data-testid":"Toggle",onChange:e.handleChange,type:"checkbox"}),o.createElement("span",{className:"slider round"}))}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>r});var s=t(96540);const o={},i=s.createContext(o);function a(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);