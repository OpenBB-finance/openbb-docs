"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[21384],{225:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var s=n(74848),i=n(28453),o=n(94331);const a={title:"Open Source Platform Integration",sidebar_position:15,description:"Learn how to integrate the OpenBB Platform data to the OpenBB Terminal",keywords:["widgets.json","OpenBB API","Endpoint integration","widget configuration","Terminal Pro widgets","OpenBB Platform Installer","Widget filtering"]},r=void 0,l={id:"terminal/platform-installer",title:"Open Source Platform Integration",description:"Learn how to integrate the OpenBB Platform data to the OpenBB Terminal",source:"@site/content/terminal/platform-installer.md",sourceDirName:"terminal",slug:"/terminal/platform-installer",permalink:"/terminal/platform-installer",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/terminal/platform-installer.md",tags:[],version:"current",lastUpdatedBy:"DidierRLopes",lastUpdatedAt:1730232801e3,sidebarPosition:15,frontMatter:{title:"Open Source Platform Integration",sidebar_position:15,description:"Learn how to integrate the OpenBB Platform data to the OpenBB Terminal",keywords:["widgets.json","OpenBB API","Endpoint integration","widget configuration","Terminal Pro widgets","OpenBB Platform Installer","Widget filtering"]},sidebar:"tutorialSidebar",previous:{title:"widgets.json",permalink:"/terminal/custom-backend/widgets.json"},next:{title:"Widgets",permalink:"/terminal/widgets"}},c={},d=[{value:"Step by step",id:"step-by-step",level:2},{value:"Advanced - Access this data on mobile",id:"advanced---access-this-data-on-mobile",level:2},{value:"Advanced - Filter widgets",id:"advanced---filter-widgets",level:2}];function h(e){const t={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(o.A,{title:"Open source platform integration | OpenBB Terminal Pro Docs"}),"\n",(0,s.jsxs)(t.p,{children:["This section will highlight how you can run the ",(0,s.jsx)(t.a,{href:"https://github.com/OpenBB-finance/OpenBB",children:"OpenBB Platform"})," locally and integrate 350+ different datasets into the OpenBB Terminal in under 5 minutes."]}),"\n",(0,s.jsxs)(t.p,{children:["If you want to learn more about the open source platform, check ",(0,s.jsx)(t.a,{href:"https://docs.openbb.co/platform",children:"our documentation"}),"."]}),"\n",(0,s.jsx)(t.p,{children:"Here's a video that you can use to follow step-by-step instructions."}),"\n",(0,s.jsx)("div",{style:{position:"relative",paddingBottom:"56.25%",height:"0",overflow:"hidden",maxWidth:"100%"},children:(0,s.jsx)("iframe",{style:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%",display:"block",margin:"0 auto"},src:"https://www.youtube.com/embed/DFz1WQJbT6c?si=_K3amHb8p4fkTKaj",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",referrerpolicy:"strict-origin-when-cross-origin",allowfullscreen:!0})}),"\n",(0,s.jsx)(t.h2,{id:"step-by-step",children:"Step by step"}),"\n",(0,s.jsx)(t.p,{children:"The steps are also described below:"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["Download the OpenBB Platform Installer which can be found ",(0,s.jsx)(t.a,{href:"https://my.openbb.co/app/platform/downloads",children:"here"}),"."]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:"https://github.com/user-attachments/assets/f161c50a-93a4-45db-a504-9c9c45f59082",alt:"image-d07ef45c946c1daf95e8619d6a49fb18"})}),"\n",(0,s.jsx)(t.p,{children:"Select the right installer based on your OS and architecture. Then install it."}),"\n",(0,s.jsxs)(t.ol,{start:"2",children:["\n",(0,s.jsxs)(t.li,{children:["Once installation is complete, find the ",(0,s.jsx)(t.code,{children:"OpenBB"})," folder that has been created in the installation directory selected. Double click on ",(0,s.jsx)(t.code,{children:"OpenBB/openbb-api"}),"."]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:"https://github.com/user-attachments/assets/baba4613-8253-431c-bce2-f9764533de41",alt:"image-2-e88086c0317861808057d4dcbd47f93d"})}),"\n",(0,s.jsxs)(t.ol,{start:"3",children:["\n",(0,s.jsxs)(t.li,{children:["A terminal popup should be initiated, and you will be prompted to insert your personal access token (PAT), which can be retrieved from ",(0,s.jsx)(t.a,{href:"https://my.openbb.co/app/platform/pat",children:"here"}),"."]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:"https://github.com/user-attachments/assets/43ac8f94-a0ce-4c38-9589-94d03322cfd7",alt:"image"})}),"\n",(0,s.jsxs)(t.p,{children:["Note: This assumes that the user has spent time setting up their API keys ",(0,s.jsx)(t.a,{href:"https://my.openbb.co/app/platform/credentials",children:"here"}),"."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:"https://github.com/user-attachments/assets/f3e565c7-d343-421a-bfee-6be7acb79042",alt:"image"})}),"\n",(0,s.jsxs)(t.ol,{start:"4",children:["\n",(0,s.jsx)(t.li,{children:"The OpenBB Platform API should now be up and running."}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:"https://github.com/user-attachments/assets/5015a675-7953-4807-98d2-94cdc041fd64",alt:"image-3-89f316d9153aa91e108cebf5cf718609"})}),"\n",(0,s.jsxs)(t.ol,{start:"5",children:["\n",(0,s.jsx)(t.li,{children:"Finally, you simply need to set up the custom backend on Terminal Pro."}),"\n"]}),"\n",(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsxs)(t.p,{children:["If you are using Brave/Safari you will need an HTTPS connection - see how ",(0,s.jsx)(t.a,{href:"https://docs.openbb.co/pro/custom-backend#frequently-asked-questions",children:"here"})]})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:"https://github.com/user-attachments/assets/c3ee50ff-114c-4718-8471-ef8070356692",alt:"image-4-bed5df262173615690d113584755b08a"})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:"https://github.com/user-attachments/assets/770e6d6c-6cd7-4073-a874-af0850f404cc",alt:"img"})}),"\n",(0,s.jsxs)(t.ol,{start:"6",children:["\n",(0,s.jsx)(t.li,{children:"Voila. You are now ready to access 350+ data widgets from your OpenBB Terminal. For free."}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:"https://github.com/user-attachments/assets/a48eb08c-6536-43c6-a055-0e46082c14c8",alt:"image"})}),"\n",(0,s.jsx)(t.h2,{id:"advanced---access-this-data-on-mobile",children:"Advanced - Access this data on mobile"}),"\n",(0,s.jsxs)(t.p,{children:["This section will use ",(0,s.jsx)(t.code,{children:"ngrok"})," as the proxy between our platform API endpoints running locally and the internet. You can do this in ngrok free plan."]}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["Install ngrok by following ",(0,s.jsx)(t.a,{href:"https://ngrok.com/docs/getting-started/",children:"these"})," instructions."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["Open a terminal and run ",(0,s.jsx)(t.code,{children:"ngrok http 6900"}),". This assume that the open source platform API is running on ",(0,s.jsx)(t.a,{href:"http://localhost:6900",children:"http://localhost:6900"}),"."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"If that runs correctly, you'll get an output similar to the following."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:"https://github.com/user-attachments/assets/e938b28b-359b-41e7-b822-6fc400e36819",alt:"image"})}),"\n",(0,s.jsxs)(t.p,{children:["Note the ",(0,s.jsx)(t.strong,{children:"Forwarding"})," row. That will contain a public URL that has access to your endpoint."]}),"\n",(0,s.jsxs)(t.ol,{start:"3",children:["\n",(0,s.jsx)(t.li,{children:"Update your localhost endpoint with the public URL provided by ngrok."}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:"https://github.com/user-attachments/assets/1ceed65b-3601-4a7c-8fd5-ee79cdde3917",alt:"image"})}),"\n",(0,s.jsxs)(t.ol,{start:"4",children:["\n",(0,s.jsx)(t.li,{children:"Add a request header as authentication."}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:'Click on "Add Authentication" button, and add the following:'}),"\n",(0,s.jsx)(t.p,{children:"Key: ngrok-skip-browser-warning\nValue: x\nLocation: Header"}),"\n",(0,s.jsxs)(t.p,{children:["You have to include the request header ",(0,s.jsx)(t.code,{children:"ngrok-skip-browser-warning"})," with any value in the request header, to bypass the Ngrok Browser Warning."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:"https://github.com/user-attachments/assets/03968960-e09a-46d8-98b9-718b6ae1b0db",alt:"image"})}),"\n",(0,s.jsx)(t.p,{children:"You are now ready to access this data on your phone, just ensure that you keep running the API endpoint and ngrok locally."}),"\n",(0,s.jsx)(t.h2,{id:"advanced---filter-widgets",children:"Advanced - Filter widgets"}),"\n",(0,s.jsx)(t.p,{children:"If you run the steps above, you will have access to a dozen different data vendors and hundreds of different widgets. However, some of these may not work because you haven't set up the API key for the data vendor or you may not be interested to bring some of those widgets into your OpenBB Terminal."}),"\n",(0,s.jsx)(t.p,{children:"This section will explore how you can filter the platform integration datasets that are made available on the Terminal."}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["Go to the ",(0,s.jsx)(t.a,{href:"https://my.openbb.co/app/platform/widgets",children:"widgets filter page"})," where you can set the data vendors you are interested and also select the widgets within. Once you are happy you can download the ",(0,s.jsx)(t.code,{children:"widget_settings.json"})," configuration file by clicking on ",(0,s.jsx)(t.strong,{children:"Download"}),"."]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:"https://github.com/user-attachments/assets/c978c28d-e53a-4f83-9488-dcb524572b86",alt:"image-1-0e1a24b94a7c6ea08d41e30b53f8dc57"})}),"\n",(0,s.jsxs)(t.ol,{start:"2",children:["\n",(0,s.jsxs)(t.li,{children:["In the ",(0,s.jsx)(t.code,{children:"OpenBB"})," folder that has been created when you installed the Platform. There must be a ",(0,s.jsx)(t.code,{children:"Settings"})," folder within. This folder should be the destination of your widget setttings file (",(0,s.jsx)(t.code,{children:"widget_settings.json"}),"), which will serve as the configuration file for your custom backend."]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"Now, similarly to the previous section, you should:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Run ",(0,s.jsx)(t.code,{children:"OpenBB/openbb-api"})]}),"\n",(0,s.jsx)(t.li,{children:"Set your PAT"}),"\n",(0,s.jsxs)(t.li,{children:["Refresh the connection inside the ",(0,s.jsx)(t.a,{href:"https://pro.openbb.co/app/data-connectors",children:'"My Data"'})," tab or follow instructions above to add again."]}),"\n"]}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:["Take into consideration that, if you change the default configurations on the OpenBB Platform settings, the URL (",(0,s.jsx)(t.a,{href:"http://127.0.0.1:6900",children:"http://127.0.0.1:6900"}),") might differ."]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:"https://github.com/user-attachments/assets/692e8da3-57fb-4cff-b566-adf8d5539530",alt:"image"})})]})}function p(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},94331:(e,t,n)=>{n.d(t,{A:()=>o});n(96540);var s=n(5260),i=n(74848);function o(e){let{title:t}=e;return(0,i.jsx)(s.A,{children:(0,i.jsx)("title",{children:t})})}},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>r});var s=n(96540);const i={},o=s.createContext(i);function a(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);