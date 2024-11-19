"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[903],{68419:(e,r,o)=>{o.r(r),o.d(r,{assets:()=>d,contentTitle:()=>c,default:()=>m,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var n=o(74848),t=o(28453),i=o(94331);const s={title:"Routine Macro Recorder",sidebar_position:4,description:"Learn how to use the macro recorder in OpenBB to start saving commands and automate common tasks with scripts. This page guides you through the process of recording, saving, and accessing your recorded routines.",keywords:["macro recorder","script routines","global commands","command recording","routine script","terminal main menu","exe --file","OpenBBUserData","routines folder","cli","record","stop"]},c=void 0,a={id:"cli/routines/routine-macro-recorder",title:"Routine Macro Recorder",description:"Learn how to use the macro recorder in OpenBB to start saving commands and automate common tasks with scripts. This page guides you through the process of recording, saving, and accessing your recorded routines.",source:"@site/content/cli/routines/routine-macro-recorder.md",sourceDirName:"cli/routines",slug:"/cli/routines/routine-macro-recorder",permalink:"/cli/routines/routine-macro-recorder",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/cli/routines/routine-macro-recorder.md",tags:[],version:"current",lastUpdatedBy:"Danglewood",lastUpdatedAt:1732037628e3,sidebarPosition:4,frontMatter:{title:"Routine Macro Recorder",sidebar_position:4,description:"Learn how to use the macro recorder in OpenBB to start saving commands and automate common tasks with scripts. This page guides you through the process of recording, saving, and accessing your recorded routines.",keywords:["macro recorder","script routines","global commands","command recording","routine script","terminal main menu","exe --file","OpenBBUserData","routines folder","cli","record","stop"]},sidebar:"tutorialSidebar",previous:{title:"Community Routines",permalink:"/cli/routines/community-routines"},next:{title:"Advanced Routines",permalink:"/cli/routines/advanced-routines"}},d={},l=[];function u(e){const r={admonition:"admonition",code:"code",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.A,{title:"Routine Macro Recorder - Routines - Usage | OpenBB Platform CLI Docs"}),"\n",(0,n.jsxs)(r.p,{children:["OpenBB script routines can be captured with the macro recorder, controlled with global commands. Enter, ",(0,n.jsx)(r.code,{children:"record"}),", to start saving commands, and then, ",(0,n.jsx)(r.code,{children:"stop"}),", terminates the recording. This means that any command you run will be captured in the script; and on ",(0,n.jsx)(r.code,{children:"stop"}),", it will be saved to the ",(0,n.jsx)(r.code,{children:"~/OpenBBUserData/routines/"})," folder."]}),"\n",(0,n.jsx)(r.p,{children:"For example:"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-console",children:"record -n sample\n\n/equity/price/historical --symbol SPY --provider cboe --interval 1m/home/derivatives/options/chains --symbol SPY --provider cboe/home/stop/r\n"})}),"\n",(0,n.jsxs)(r.p,{children:["The final command after ",(0,n.jsx)(r.code,{children:"stop"}),", ",(0,n.jsx)(r.code,{children:"r"}),", resets the CLI so that the routine is presented as a choice in the ",(0,n.jsx)(r.code,{children:"exe"})," command."]}),"\n",(0,n.jsx)(r.p,{children:"It can now be played back by entering:"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-console",children:"/exe --file sample.openbb\n"})}),"\n",(0,n.jsx)(r.admonition,{type:"tip",children:(0,n.jsxs)(r.p,{children:["The routine can be edited to replace parameter values with input variables - e.g, ",(0,n.jsx)(r.code,{children:"$ARGV[0]"}),", ",(0,n.jsx)(r.code,{children:"$ARGV[1]"}),", etc."]})})]})}function m(e={}){const{wrapper:r}={...(0,t.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},94331:(e,r,o)=>{o.d(r,{A:()=>i});o(96540);var n=o(5260),t=o(74848);function i(e){let{title:r}=e;return(0,t.jsx)(n.A,{children:(0,t.jsx)("title",{children:r})})}},28453:(e,r,o)=>{o.d(r,{R:()=>s,x:()=>c});var n=o(96540);const t={},i=n.createContext(t);function s(e){const r=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),n.createElement(i.Provider,{value:r},e.children)}}}]);