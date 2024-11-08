"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[59501],{35173:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>d,default:()=>m,frontMatter:()=>n,metadata:()=>o,toc:()=>c});var r=a(74848),s=a(28453),i=a(94331);const n={title:"Validators",sidebar_position:9,description:"This guide provides detailed instructions on how and where validators should be used.",keywords:["OpenBB Platform","Data point addition","Provider creation","Query parameters","Data output models","Fetcher class","validator","field","param","Fast API"]},d=void 0,o={id:"platform/developer_guide/validators",title:"Validators",description:"This guide provides detailed instructions on how and where validators should be used.",source:"@site/content/platform/developer_guide/validators.mdx",sourceDirName:"platform/developer_guide",slug:"/platform/developer_guide/validators",permalink:"/platform/developer_guide/validators",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/platform/developer_guide/validators.mdx",tags:[],version:"current",lastUpdatedBy:"DidierRLopes",lastUpdatedAt:1731078154e3,sidebarPosition:9,frontMatter:{title:"Validators",sidebar_position:9,description:"This guide provides detailed instructions on how and where validators should be used.",keywords:["OpenBB Platform","Data point addition","Provider creation","Query parameters","Data output models","Fetcher class","validator","field","param","Fast API"]},sidebar:"tutorialSidebar",previous:{title:"Metadata",permalink:"/platform/developer_guide/metadata"},next:{title:"GitHub",permalink:"/platform/developer_guide/github"}},l={},c=[{value:"Why Use Validators?",id:"why-use-validators",level:2},{value:"Examples",id:"examples",level:2}];function u(e){const t={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components},{Details:a}=t;return a||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.A,{title:"Validators - Developer Guidelines - Development | OpenBB Platform Docs"}),"\n",(0,r.jsx)(t.p,{children:"Both QueryParams and Data models can benefit from the tactical use of Pydantic validators.\nThis page will outline some of the key scenarios where they are deployed."}),"\n",(0,r.jsx)(t.p,{children:"Overall, they assist with enforcing Fast API compliance for both inputs and outputs,\nand they work in the final stage of transformation immediately before output."}),"\n",(0,r.jsx)(t.h2,{id:"why-use-validators",children:"Why Use Validators?"}),"\n",(0,r.jsx)(t.p,{children:"Some situations where they are used include:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Transform, conform, or otherwise alter the entered query parameter or returned data value."}),"\n",(0,r.jsx)(t.li,{children:"A query parameter or data field is a date."}),"\n",(0,r.jsx)(t.li,{children:"A query parameter requires a dynamic default state."}),"\n",(0,r.jsx)(t.li,{children:"Normalizing percent values."}),"\n",(0,r.jsx)(t.li,{children:"Cleaning NaN values."}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(t.p,{children:"The items to import from the Pydantic library are:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:"from pydantic import field_validator, model_validator\n"})}),"\n",(0,r.jsxs)(a,{children:[(0,r.jsx)("summary",{mdxType:"summary",children:"Parsing Dates"}),(0,r.jsx)(t.p,{children:"Providers will format dates in a number of ways. OpenBB uses YYYY-MM-DD as the standard convention, for both inputs and outputs."}),(0,r.jsxs)(t.p,{children:["Outputs are a ",(0,r.jsx)(t.code,{children:"datetime"})," object or JSON serlialized string. Validators are used to parse the date from the specific format.\nThis example is used within a provider's ",(0,r.jsx)(t.code,{children:"Data"})," model."]}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:'@field_validator("last_trade_timestamp", mode="before", check_fields=False)\n@classmethod\ndef parse_timestamp(cls, v):\n    """Parse a Unix timestamp."""\n    return datetime.fromtimestamp(v)\n'})})]}),"\n",(0,r.jsxs)(a,{children:[(0,r.jsx)("summary",{mdxType:"summary",children:"Normalize Percent Values"}),(0,r.jsx)(t.p,{children:"At the provider level, we want to standardize the way values representing a percent are returned."}),(0,r.jsxs)(t.p,{children:["It is our intention to ensure those values are ready-to-consume by formulas without conversion.\nThis example would be used within a provider's ",(0,r.jsx)(t.code,{children:"Data"})," model."]}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:'@field_validator("change_percent", mode="before", check_fields=False)\n@classmethod\ndef normalize_percent(cls, v):\n    """Normalize the percent."""\n    return v / 100 if v else None\n'})})]}),"\n",(0,r.jsxs)(a,{children:[(0,r.jsx)("summary",{mdxType:"summary",children:"Dynamic Default Date"}),(0,r.jsxs)(t.p,{children:["It might be desirable to have a default date parameter that is not static. To allow this, we must set the default parameter value as ",(0,r.jsx)(t.code,{children:"None"}),", and use the ",(0,r.jsx)(t.code,{children:"model_validator"}),". This example is for the ",(0,r.jsx)(t.code,{children:"QueryParams"}),"."]}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:'@model_validator(mode="before")\n@classmethod\ndef validate_dates(cls, values) -> dict:\n    """Validate the query parameters."""\n    if values.get("start_date") is None:\n        values["start_date"] = (datetime.now() - timedelta(days=90)).date()\n    if values.get("end_date") is None:\n        values["end_date"] = datetime.now().date()\n    return values\n'})})]}),"\n",(0,r.jsxs)(a,{children:[(0,r.jsx)("summary",{mdxType:"summary",children:"Replace 0s With None"}),(0,r.jsxs)(t.p,{children:["Sometimes values are returned as a ",(0,r.jsx)(t.code,{children:"0"})," when they should really be a ",(0,r.jsx)(t.code,{children:"null"}),".\nThis example looks at the entire ",(0,r.jsx)(t.code,{children:"Data"})," model, but could easily be adapted to use on individual fields."]}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:'@model_validator(mode="before")\n@classmethod\ndef replace_zero(cls, values):\n    """Check for zero values and replace with None."""\n    return (\n        {k: None if v == 0 else v for k, v in values.items()}\n        if isinstance(values, dict)\n        else values\n    )\n'})})]})]})}function m(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},94331:(e,t,a)=>{a.d(t,{A:()=>i});a(96540);var r=a(5260),s=a(74848);function i(e){let{title:t}=e;return(0,s.jsx)(r.A,{children:(0,s.jsx)("title",{children:t})})}},28453:(e,t,a)=>{a.d(t,{R:()=>n,x:()=>d});var r=a(96540);const s={},i=r.createContext(s);function n(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:n(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);