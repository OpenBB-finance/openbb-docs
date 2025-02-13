"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[58669],{17233:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>s,default:()=>c,frontMatter:()=>a,metadata:()=>d,toc:()=>l});var o=t(74848),i=t(28453),r=t(94331);const a={title:"Disabling Output Validation",sidebar_position:4,description:"This page provides instructions for disabling output validation, when defining a new router function.",keywords:["Validation","Pydantic","Python","Development","OpenBB Platform","Provider Interface","Router","Custom","Commands","FastAPI","extensions"]},s=void 0,d={id:"platform/developer_guide/disabling_output_validation",title:"Disabling Output Validation",description:"This page provides instructions for disabling output validation, when defining a new router function.",source:"@site/content/platform/developer_guide/disabling_output_validation.mdx",sourceDirName:"platform/developer_guide",slug:"/platform/developer_guide/disabling_output_validation",permalink:"/platform/developer_guide/disabling_output_validation",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/platform/developer_guide/disabling_output_validation.mdx",tags:[],version:"current",lastUpdatedBy:"Andrew",lastUpdatedAt:1739462555e3,sidebarPosition:4,frontMatter:{title:"Disabling Output Validation",sidebar_position:4,description:"This page provides instructions for disabling output validation, when defining a new router function.",keywords:["Validation","Pydantic","Python","Development","OpenBB Platform","Provider Interface","Router","Custom","Commands","FastAPI","extensions"]},sidebar:"tutorialSidebar",previous:{title:"OBBject",permalink:"/platform/developer_guide/obbject"},next:{title:"Using OpenBB With FastAPI and Depends",permalink:"/platform/developer_guide/using_python_package_in_fastapi"}},p={},l=[{value:"Example",id:"example",level:2}];function u(e){const n={admonition:"admonition",code:"code",h2:"h2",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.A,{title:"Disabling Output Validation - Developer Guides | OpenBB Platform Docs"}),"\n",(0,o.jsx)(n.p,{children:"In some cases, it may be desirable to disable output validation for a custom router endpoint.\nThe example below demonstrates how to do it within your own custom router path."}),"\n",(0,o.jsx)(n.admonition,{type:"important",children:(0,o.jsx)(n.p,{children:"This section refers to settings available beginning OpenBB v4.4.0"})}),"\n",(0,o.jsxs)(n.p,{children:['In boths functions, the output will be typed as "Any", regardless of what the ',(0,o.jsx)(n.code,{children:"return"})," definition states."]}),"\n",(0,o.jsxs)(n.p,{children:["Within the ",(0,o.jsx)(n.code,{children:"@router.command"})," decorator, add the keyword argument:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:"no_validate = True\n"})}),"\n",(0,o.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,o.jsx)(n.p,{children:"This example assumes that ficticious extensions have been defined and installed."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:'from datetime import datetime\n\nfrom openbb_core.app.model.command_context import CommandContext\nfrom openbb_core.app.model.example import APIEx, PythonEx\nfrom openbb_core.app.model.obbject import OBBject\nfrom openbb_core.app.provider_interface import (\n    ExtraParams,\n    ProviderChoices,\n    StandardParams,\n)\nfrom openbb_core.app.query import Query\nfrom openbb_core.app.router import Router\nfrom openbb_core.provider.abstract.data import Data\n\nrouter = Router(prefix="", description="Some OpenBB Router Extension.")\n\n# This uses the Provider Interface.\n@router.command(\n    model="SomeModel",\n    no_validate=True,\n    examples=[\n        APIEx(parameters={"provider": "some_provider"}),\n        PythonEx(\n            description="Say Hello.",\n            code=[\n                "result = obb.some_extension.some_provider_function()",\n            ],\n        ),\n    ],\n)\nasync def some_provider_function(\n    cc: CommandContext,\n    provider_choices: ProviderChoices,\n    standard_params: StandardParams,\n    extra_params: ExtraParams,\n) -> OBBject[Data]:\n    """Some function using the Provider Interface."""\n    obbject = await OBBject.from_query(Query(**locals()))\n\n    new_output = []\n    results = obbject.results\n\n    # Do something with results and append to `new_output` list.\n\n    return new_output\n\n\n# This is a standard router "get" command.\n@router.command(\n    methods=["GET"],\n    no_validate=True\n    examples=[\n        PythonEx(\n            description="Say Hello.",\n            code=[\n                "result = obb.some_extension.hello()",\n            ],\n        ),\n    ],\n)\nasync def hello() -> (\n    Any\n):\n    """Hello World."""\n    return {\n        datetime.now().strftime(\n            "%Y-%m-%d"\n        ): "Hello from the Empty Router extension!"\n    }\n'})})]})}function c(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},94331:(e,n,t)=>{t.d(n,{A:()=>r});t(96540);var o=t(5260),i=t(74848);function r(e){let{title:n}=e;return(0,i.jsx)(o.A,{children:(0,i.jsx)("title",{children:n})})}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>s});var o=t(96540);const i={},r=o.createContext(i);function a(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);