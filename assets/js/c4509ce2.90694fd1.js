"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[10912],{39784:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>l,frontMatter:()=>a,metadata:()=>d,toc:()=>m});var o=t(74848),i=t(28453),r=t(94331);const a={title:"Dynamic Command Execution",sidebar_position:5,description:"This guide provides detailed instructions on how to execute commands dynamically in the OpenBB Platform.",keywords:["OpenBB community","OpenBB Platform","Custom commands","API","Python Interface","Dynamic Execution"]},s=void 0,d={id:"platform/user_guides/dynamic_command_execution",title:"Dynamic Command Execution",description:"This guide provides detailed instructions on how to execute commands dynamically in the OpenBB Platform.",source:"@site/content/platform/user_guides/dynamic_command_execution.mdx",sourceDirName:"platform/user_guides",slug:"/platform/user_guides/dynamic_command_execution",permalink:"/platform/user_guides/dynamic_command_execution",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/platform/user_guides/dynamic_command_execution.mdx",tags:[],version:"current",lastUpdatedBy:"Danglewood",lastUpdatedAt:1733155838e3,sidebarPosition:5,frontMatter:{title:"Dynamic Command Execution",sidebar_position:5,description:"This guide provides detailed instructions on how to execute commands dynamically in the OpenBB Platform.",keywords:["OpenBB community","OpenBB Platform","Custom commands","API","Python Interface","Dynamic Execution"]},sidebar:"tutorialSidebar",previous:{title:"LLM Friendly Mode",permalink:"/platform/user_guides/llm_mode"},next:{title:"Metadata",permalink:"/platform/user_guides/metadata"}},c={},m=[];function u(e){const n={code:"code",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.A,{title:"Dynamic Command Execution | OpenBB Platform Docs"}),"\n",(0,o.jsx)(n.p,{children:"Dynamic execution provides an alternate entry point to functions. This method requires formatting the query as demonstrated below."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:'from openbb_core.app.command_runner import CommandRunner\nrunner = CommandRunner()\noutput = await runner.run(\n    "/equity/fundamental/ratios",\n    provider_choices={\n        "provider": "fmp",\n    },\n    standard_params={\n        "symbol" : "TSLA",\n        "period" : "quarter",\n    },\n    extra_params={}\n)\n'})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-console",children:">>> output\nOBBject\n\nid: 065241b7-bd9d-7313-8000-9406d8afab75\nresults: [{'symbol': 'TSLA', 'date': '2023-06-30', 'period': 'Q2', 'current_ratio':...\nprovider: fmp\nwarnings: None\nchart: None\nextra: {'metadata': {'arguments': {'provider_choices': {'provider': 'fmp'}, 'standa...\n"})})]})}function l(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},94331:(e,n,t)=>{t.d(n,{A:()=>r});t(96540);var o=t(5260),i=t(74848);function r(e){let{title:n}=e;return(0,i.jsx)(o.A,{children:(0,i.jsx)("title",{children:n})})}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>s});var o=t(96540);const i={},r=o.createContext(i);function a(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);