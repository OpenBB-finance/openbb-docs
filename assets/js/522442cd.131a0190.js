"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8863],{17475:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>d,toc:()=>c});var s=n(74848),t=n(28453),o=n(94331);const i={title:"Errors",sidebar_position:3,description:"This page contains some frequently asked questions about OpenBB Platform errors.",keywords:["provider","data","source","error","OpenBBError","unknown error","EmptyDataError"]},a=void 0,d={id:"platform/faqs/errors",title:"Errors",description:"This page contains some frequently asked questions about OpenBB Platform errors.",source:"@site/content/platform/faqs/errors.mdx",sourceDirName:"platform/faqs",slug:"/platform/faqs/errors",permalink:"/platform/faqs/errors",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/platform/faqs/errors.mdx",tags:[],version:"current",lastUpdatedBy:"Danglewood",lastUpdatedAt:1732037628e3,sidebarPosition:3,frontMatter:{title:"Errors",sidebar_position:3,description:"This page contains some frequently asked questions about OpenBB Platform errors.",keywords:["provider","data","source","error","OpenBBError","unknown error","EmptyDataError"]},sidebar:"tutorialSidebar",previous:{title:"Data and Data Providers",permalink:"/platform/faqs/data_providers"},next:{title:"Licensing",permalink:"/platform/licensing/"}},l={},c=[];function p(e){const r={a:"a",code:"code",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components},{Details:n}=r;return n||function(e,r){throw new Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(o.A,{title:"Errors FAQ - FAQs | OpenBB Platform Docs"}),"\n",(0,s.jsxs)(n,{children:[(0,s.jsx)("summary",{mdxType:"summary",children:"[Arg] provider -> input: nasdaq -> Input should be 'fmp' or 'yfinance'"}),(0,s.jsx)(r.p,{children:"There could be a few reasons for this message."}),(0,s.jsxs)(r.ol,{children:["\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsx)(r.p,{children:"The provider supplied is not installed, in which case install it and follow the next step."}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsx)(r.p,{children:"The provider extension is installed, but the static assets have not been refreshed. Rebuild the static assets from the command line with:"}),"\n"]}),"\n"]}),(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-sh",children:'python -c "import openbb;openbb.build()"\n'})}),(0,s.jsx)(r.p,{children:"An environment variable to auto-build the static assets on import - if there are changes to the installed configuration - can be defined as:"}),(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-env",children:'OPENBB_AUTO_BUILD="true"\n'})}),(0,s.jsx)(r.p,{children:'The expected behaviour is for this to be "true" by default, however can be situations where the flag does not trigger a build.\nManually invoke the process from the command line if necessary.'}),(0,s.jsxs)(r.ol,{start:"3",children:["\n",(0,s.jsxs)(r.li,{children:["Not every endpoint is supported by every provider. To see the coverage of commands and data providers within the current installation, use ",(0,s.jsx)(r.code,{children:"reference"})," property in the app. The docstring for each function contains the same information as the code block below."]}),"\n"]}),(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-python",children:'from openbb import obb\n\npath = "/index/available"\n\n[d for d in obb.reference["paths"][path]["parameters"] if d != "standard"]\n'})}),(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-sh",children:"['cboe', 'fmp', 'tmx', 'yfinance']\n"})}),(0,s.jsxs)(r.p,{children:["Complete breakdowns of query and return fields by provider and endpoint are available under the ",(0,s.jsx)(r.a,{href:"/platform/reference",children:"Reference"})]})]}),"\n",(0,s.jsxs)(n,{children:[(0,s.jsx)("summary",{mdxType:"summary",children:"Attribute Error: 'App' object has no attribute 'some attribute'"}),(0,s.jsx)(r.p,{children:"There could be a few reasons for this message that are similar to the issue above."}),(0,s.jsxs)(r.ol,{children:["\n",(0,s.jsx)(r.li,{children:"The extension is not installed."}),"\n"]}),(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"Install it and rebuild the static files (described in the item above.)"}),"\n"]}),(0,s.jsxs)(r.ol,{start:"2",children:["\n",(0,s.jsx)(r.li,{children:"No installed provider extension services an endpoint within the router."}),"\n"]}),(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"Under these conditions, the router is excluded from the app factory."}),"\n"]}),(0,s.jsxs)(r.ol,{start:"3",children:["\n",(0,s.jsx)(r.li,{children:"The extension is installed, a provider does service the router, but the static assets have not been rebuilt."}),"\n"]}),(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"Rebuild the static files (described in the item above.)"}),"\n"]})]}),"\n",(0,s.jsxs)(n,{children:[(0,s.jsx)("summary",{mdxType:"summary",children:"Unauthorized Error - HTTP Status Code 502"}),(0,s.jsx)(r.p,{children:"This error is raised when provider credentials are supplied but is invalid for the particular endpoint."}),(0,s.jsx)(r.p,{children:"Verify your credentials, access level, and subscription status directly with the provider."})]}),"\n",(0,s.jsxs)(n,{children:[(0,s.jsx)("summary",{mdxType:"summary",children:"Unprocessable Entity (OpenBBError) - HTTP Status Code 422"}),(0,s.jsx)(r.p,{children:"This error is raised for handled exceptions. An abbreviated traceback message will display, and the full message is enabled via debug mode."}),(0,s.jsx)(r.p,{children:"A common reason for this error is because a required parameter was not supplied, or was an incorrect choice. It may also be raised during parsing and transformation, post-request."})]}),"\n",(0,s.jsxs)(n,{children:[(0,s.jsx)("summary",{mdxType:"summary",children:"Empty Data Error - HTTP Status Code 204"}),(0,s.jsx)(r.p,{children:"Also a 204 status code from the API. It means that the data was returned empty but the operation was a success."}),(0,s.jsx)(r.p,{children:"There might not be anything wrong, or it could be the result of parameter choices. In which case, widen the scope of the query to capture output."}),(0,s.jsx)(r.p,{children:"Some sources will return bad requests with a 200 status code and no message."}),(0,s.jsxs)(r.p,{children:["If all parameter permutations are only capable of returning an empty response, please open a bug issue on ",(0,s.jsx)(r.a,{href:"https://github.com/OpenBB-finance/OpenBB/issues/new?assignees=&labels=type%3Abug&projects=&template=bug_report.md&title=%5BBug%5D",children:"GitHub"})," with the operating system and version, Python version, and the syntax responsible for the error."]})]}),"\n",(0,s.jsxs)(n,{children:[(0,s.jsx)("summary",{mdxType:"summary",children:"Unexpected Error - HTTP Status Code 500"}),(0,s.jsx)(r.p,{children:"An unhandled exception. Traceback messages are truncated unless the debug environment variable is set."}),(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-python",children:'import os\n\nos.environ["OPENBB_DEBUG_MODE"] = "true"\n\nfrom openbb import obb\n\n# run the syntax that created the error and the full traceback will print to the console.\n'})}),(0,s.jsxs)(r.p,{children:["If the issue originates from OpenBB code, please open a bug issue on ",(0,s.jsx)(r.a,{href:"https://github.com/OpenBB-finance/OpenBB/issues/new?assignees=&labels=type%3Abug&projects=&template=bug_report.md&title=%5BBug%5D",children:"GitHub"})]}),(0,s.jsx)(r.p,{children:"Be sure to include the contents of the traceback, the operating system and version, Python version, and the syntax responsible for the error."})]}),"\n",(0,s.jsxs)(n,{children:[(0,s.jsx)("summary",{mdxType:"summary",children:"How do I start in debug mode?"}),(0,s.jsxs)(r.p,{children:["Debug mode can be set as an environment variable, in ",(0,s.jsx)(r.code,{children:"~/openbb_platform/.env"}),", as:"]}),(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-env",children:"OPENBB_DEBUG_MODE=true\n"})}),(0,s.jsx)(r.p,{children:"It can be invoked for the current session only by adding this code before importing the OpenBB package."}),(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-python",children:'import os\n\nos.environ["OPENBB_DEBUG_MODE"] = "true"\n\nfrom openbb import obb\n'})})]})]})}function h(e={}){const{wrapper:r}={...(0,t.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},94331:(e,r,n)=>{n.d(r,{A:()=>o});n(96540);var s=n(5260),t=n(74848);function o(e){let{title:r}=e;return(0,t.jsx)(s.A,{children:(0,t.jsx)("title",{children:r})})}},28453:(e,r,n)=>{n.d(r,{R:()=>i,x:()=>a});var s=n(96540);const t={},o=s.createContext(t);function i(e){const r=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),s.createElement(o.Provider,{value:r},e.children)}}}]);