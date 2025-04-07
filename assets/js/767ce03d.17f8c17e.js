"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2016],{75955:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>d,default:()=>m,frontMatter:()=>s,metadata:()=>a,toc:()=>p});var o=t(74848),r=t(28453),i=t(94331);const s={title:"Adding Example Syntax",sidebar_position:12,description:"This guide provides detailed instructions for including command examples in the router endpoints of the OpenBB Platform.",keywords:["OpenBB community","OpenBB Platform","Custom commands","API","Python Interface","Examples","Usage","Parameters"]},d=void 0,a={id:"platform/developer_guide/command_examples",title:"Adding Example Syntax",description:"This guide provides detailed instructions for including command examples in the router endpoints of the OpenBB Platform.",source:"@site/content/platform/developer_guide/command_examples.mdx",sourceDirName:"platform/developer_guide",slug:"/platform/developer_guide/command_examples",permalink:"/platform/developer_guide/command_examples",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/platform/developer_guide/command_examples.mdx",tags:[],version:"current",lastUpdatedBy:"Danglewood",lastUpdatedAt:1744039756e3,sidebarPosition:12,frontMatter:{title:"Adding Example Syntax",sidebar_position:12,description:"This guide provides detailed instructions for including command examples in the router endpoints of the OpenBB Platform.",keywords:["OpenBB community","OpenBB Platform","Custom commands","API","Python Interface","Examples","Usage","Parameters"]},sidebar:"tutorialSidebar",previous:{title:"Tests",permalink:"/platform/developer_guide/tests"},next:{title:"Documentation - Development",permalink:"/platform/developer_guide/documentation_development"}},l={},p=[{value:"Requirements",id:"requirements",level:2},{value:"Example Models",id:"example-models",level:2},{value:"Imports",id:"imports",level:3},{value:"<code>APIEx</code>",id:"apiex",level:3},{value:"<code>PythonEx</code>",id:"pythonex",level:3}];function c(e){const n={admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(i.A,{title:"Adding Example Syntax To Commands | OpenBB Platform Docs"}),"\n",(0,o.jsx)(n.p,{children:"Usage examples are defined in the router and are expected to provide working syntax, with descriptions for complex functions requiring many parameters."}),"\n",(0,o.jsx)(n.admonition,{title:"FYI",type:"info",children:(0,o.jsxs)(n.p,{children:["When a provider is not installed, its example will be excluded from ",(0,o.jsx)(n.code,{children:"openapi.json"})," and Python docstrings"]})}),"\n",(0,o.jsx)(n.h2,{id:"requirements",children:"Requirements"}),"\n",(0,o.jsx)(n.p,{children:"It is encouraged to include examples for every endpoint."}),"\n",(0,o.jsx)(n.p,{children:"Submissions to our repository require:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"If any endpoint is excluded from the schema it only needs to contain a Python example."}),"\n",(0,o.jsx)(n.li,{children:"POST method examples should have both API and Python examples, unless they are excluded from the schema."}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"For API Examples:"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"At least one example using all required parameters. It cannot use any provider-specific parameters here. It should not specify the provider field."}),"\n",(0,o.jsx)(n.li,{children:"If there are more than three parameters, a description must be supplied in the example."}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"For Python Examples:"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Descriptions are mandatory."}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"example-models",children:"Example Models"}),"\n",(0,o.jsxs)(n.p,{children:["There are two models for defining examples, ",(0,o.jsx)(n.code,{children:"APIEx"})," and ",(0,o.jsx)(n.code,{children:"PythonEx"}),". `"]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"APIEx"})," is more structured aiming to be language agnostic - provides less freedom - while ",(0,o.jsx)(n.code,{children:"PythonEx"})," gives more freedom to create complex examples."]}),"\n",(0,o.jsx)(n.h3,{id:"imports",children:"Imports"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:"from openbb_core.app.model.example import APIEx, PythonEx\n"})}),"\n",(0,o.jsx)(n.h3,{id:"apiex",children:(0,o.jsx)(n.code,{children:"APIEx"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:'@router.command(\n    model="WorldNews",\n    examples=[\n        APIEx(parameters={}),\n        APIEx(parameters={"limit": 100}),\n        APIEx(\n            description="Get news on the specified dates.",\n            parameters={"start_date": "2024-02-01", "end_date": "2024-02-07"},\n        ),\n        APIEx(\n            description="Display the headlines of the news.",\n            parameters={"display": "headline", "provider": "benzinga"},\n        ),\n        APIEx(\n            description="Get news by topics.",\n            parameters={"topics": "finance", "provider": "benzinga"},\n        ),\n        APIEx(\n            description="Get news by source using \'tingo\' as provider.",\n            parameters={"provider": "tiingo", "source": "bloomberg"},\n        ),\n        APIEx(\n            description="Filter aticles by term using \'biztoc\' as provider.",\n            parameters={"provider": "biztoc", "term": "apple"},\n        ),\n    ],\n)\n'})}),"\n",(0,o.jsx)(n.h3,{id:"pythonex",children:(0,o.jsx)(n.code,{children:"PythonEx"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:'@router.command(\n    methods=["POST"],\n    include_in_schema=False,\n    examples=[\n        PythonEx(\n            description="Perform Ordinary Least Squares (OLS) regression.",\n            code=[\n                "stock_data = obb.equity.price.historical(symbol=\'TSLA\', start_date=\'2023-01-01\', provider=\'fmp\').to_df()",\n                \'obb.econometrics.ols_regression(data=stock_data, y_column="close", x_columns=["open", "high", "low"])\',\n            ],\n        )\n    ],\n)\n'})})]})}function m(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},94331:(e,n,t)=>{t.d(n,{A:()=>i});t(96540);var o=t(5260),r=t(74848);function i(e){let{title:n}=e;return(0,r.jsx)(o.A,{children:(0,r.jsx)("title",{children:n})})}},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>d});var o=t(96540);const r={},i=o.createContext(r);function s(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);