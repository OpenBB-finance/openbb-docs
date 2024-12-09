"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[20257],{79900:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var i=t(74848),r=t(28453),s=t(94331);const a={title:"Platform vs SDK",sidebar_position:1,description:"The OpenBB SDK has evolved to become the OpenBB Platform. This page describes some of the key differences between the legacy version and the new architecture.",keywords:["what's new","v3","legacy","sdk","platform","api","FastAPI"]},o=void 0,l={id:"platform/faqs/platform_vs_sdk",title:"Platform vs SDK",description:"The OpenBB SDK has evolved to become the OpenBB Platform. This page describes some of the key differences between the legacy version and the new architecture.",source:"@site/content/platform/faqs/platform_vs_sdk.mdx",sourceDirName:"platform/faqs",slug:"/platform/faqs/platform_vs_sdk",permalink:"/platform/faqs/platform_vs_sdk",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/platform/faqs/platform_vs_sdk.mdx",tags:[],version:"current",lastUpdatedBy:"Danglewood",lastUpdatedAt:1733763346e3,sidebarPosition:1,frontMatter:{title:"Platform vs SDK",sidebar_position:1,description:"The OpenBB SDK has evolved to become the OpenBB Platform. This page describes some of the key differences between the legacy version and the new architecture.",keywords:["what's new","v3","legacy","sdk","platform","api","FastAPI"]},sidebar:"tutorialSidebar",previous:{title:"FAQs",permalink:"/platform/faqs/"},next:{title:"Data and Data Providers",permalink:"/platform/faqs/data_providers"}},d={},c=[{value:"Terminal Application",id:"terminal-application",level:3},{value:"Extension Framework",id:"extension-framework",level:3},{value:"Import Statement",id:"import-statement",level:3},{value:"REST API Compliant",id:"rest-api-compliant",level:3},{value:"Verbose Namespaces",id:"verbose-namespaces",level:3},{value:"Asset Class Names",id:"asset-class-names",level:3},{value:"Source -&gt; Provider",id:"source---provider",level:3},{value:"API Key Management",id:"api-key-management",level:3},{value:"OpenBB Hub Login",id:"openbb-hub-login",level:3},{value:"Function Outputs",id:"function-outputs",level:3},{value:"Jupyter",id:"jupyter",level:3},{value:"Views",id:"views",level:3},{value:"Getting Started",id:"getting-started",level:3}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.A,{title:"What's the Difference Between OpenBB Platform and SDK? - FAQs | OpenBB Platform Docs"}),"\n",(0,i.jsxs)(n.p,{children:["If you're already an OpenBB user, you may be familiar with some of the legacy pain points. As ",(0,i.jsx)(n.a,{href:"https://openbb.co/blog/celebrating-the-openbb-platform-v4-beta",children:"this"})," blog post highlights, there were many challenges with maintaining the existing codebase."]}),"\n",(0,i.jsx)(n.p,{children:"We needed to refresh the architecture to make it modular, resilient, and scalable. The core components have been trimmed substantially to be lean and efficient - the number of dependencies has reduced from nearly four-hundred down to about twenty."}),"\n",(0,i.jsx)(n.p,{children:"The result is a much smoother installation procedure, with the tradeoff being some breaking changes for those transitioning from V3 SDK to the V4 Platform. The major differences are described below."}),"\n",(0,i.jsx)(n.h3,{id:"terminal-application",children:"Terminal Application"}),"\n",(0,i.jsx)(n.p,{children:"The OpenBB Terminal is not installed with the Platform. The Terminal will be reimagined with the new extension framework, it won't get left behind for long!"}),"\n",(0,i.jsx)(n.h3,{id:"extension-framework",children:"Extension Framework"}),"\n",(0,i.jsx)(n.p,{children:"The extension framework lets users install or uninstall individual data and toolkit extensions. No more bloated environments."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"pip install openbb-yfinance\n\npip uninstall openbb-yfinance\n"})}),"\n",(0,i.jsx)(n.h3,{id:"import-statement",children:"Import Statement"}),"\n",(0,i.jsx)(n.p,{children:"Initialize the OpenBB Platform with a shorter statement and reduced import time."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"from openbb import obb\n"})}),"\n",(0,i.jsx)(n.h3,{id:"rest-api-compliant",children:"REST API Compliant"}),"\n",(0,i.jsx)(n.p,{children:"The OpenBB Platform is built for REST API deployments, out-of-the-box. Outputs are JSON serializable, and this is a major difference between the SDK and Platform."}),"\n",(0,i.jsxs)(n.p,{children:["Start the API on ",(0,i.jsx)(n.code,{children:"localhost"})," with:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"uvicorn openbb_core.api.rest_api:app\n"})}),"\n",(0,i.jsx)(n.h3,{id:"verbose-namespaces",children:"Verbose Namespaces"}),"\n",(0,i.jsx)(n.p,{children:"After careful consideration, the decision was made to name functions with more verbosity. This adds clarity to the functions and lets the user better understand its purpose."}),"\n",(0,i.jsx)(n.p,{children:"It also improves the performance of AI tooling built on top of the Platform."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:'obb.equity.fundamental.employee_count("AAPL")\n'})}),"\n",(0,i.jsx)(n.h3,{id:"asset-class-names",children:"Asset Class Names"}),"\n",(0,i.jsx)(n.p,{children:"Some asset classes have been renamed:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"stocks -> equity"}),"\n",(0,i.jsx)(n.li,{children:"forex -> currency"}),"\n",(0,i.jsx)(n.li,{children:"stocks.options -> derivatives.options"}),"\n",(0,i.jsx)(n.li,{children:"futures -> derivatives.futures"}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"source---provider",children:"Source -> Provider"}),"\n",(0,i.jsxs)(n.p,{children:["V3 SDK users should note that the ",(0,i.jsx)(n.code,{children:"source"})," parameter is now, ",(0,i.jsx)(n.code,{children:"provider"}),"."]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"OpenBB Hub Preferences for default sources do not currently sync with V4 Platform, and some API keys not used in the Terminal application are not able to be saved to the Hub."})}),"\n",(0,i.jsx)(n.h3,{id:"api-key-management",children:"API Key Management"}),"\n",(0,i.jsxs)(n.p,{children:["API keys and user preferences are stored in a JSON file - ",(0,i.jsx)(n.code,{children:"$HOME/.openbb_platform/user_settings.json"})," - instead of the ",(0,i.jsx)(n.code,{children:"ENV"})," file in ",(0,i.jsx)(n.code,{children:"$HOME/.openbb_sdk/.env"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"Credentials can be entered directly from the Python interface:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:'from openbb import obb\nobb.user.credentials.fmp_api_key="REPLACE_WITH_YOUR_KEY"\n'})}),"\n",(0,i.jsx)(n.h3,{id:"openbb-hub-login",children:"OpenBB Hub Login"}),"\n",(0,i.jsx)(n.p,{children:"Login to your OpenBB Hub account with an email/password combo or a revokable Personal Access Token (recommended):"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"from openbb import obb\nobb.account.login()\n"})}),"\n",(0,i.jsx)(n.h3,{id:"function-outputs",children:"Function Outputs"}),"\n",(0,i.jsx)(n.p,{children:"The default output format can be selected by the user, and all outputs are Pydantic models."}),"\n",(0,i.jsx)(n.p,{children:'If you are transitioning from V3 SDK and like working with Pandas DataFrames, set the preference to "dataframe" to get a V3-like response.'}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:'from openbb import obb\nobb.user.preferences.output_type="dataframe"\ndf = obb.equity.price.historical("AAPL", provider="yfinance")\n'})}),"\n",(0,i.jsxs)(n.p,{children:["When the ",(0,i.jsx)(n.code,{children:"output_type"})," is set to, ",(0,i.jsx)(n.code,{children:"OBBject"}),", DataFrames are created from the response object after it is returned."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:'from openbb import obb\ndata = obb.equity.price.historical("AAPL", provider="yfinance")\ndf = data.to_df()\n'})}),"\n",(0,i.jsx)(n.admonition,{type:"warning",children:(0,i.jsx)(n.p,{children:"DataFrames are not JSON serializable. Changing this preference will remove REST API compatibility."})}),"\n",(0,i.jsx)(n.h3,{id:"jupyter",children:"Jupyter"}),"\n",(0,i.jsxs)(n.p,{children:["Jupyter does not get installed with the OpenBB Platform. Install from ",(0,i.jsx)(n.code,{children:"pip"})," in the environment containing the Platform."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"pip install jupyter-lab\n"})}),"\n",(0,i.jsx)(n.h3,{id:"views",children:"Views"}),"\n",(0,i.jsx)(n.p,{children:"Most of the development has been on the core architecture and data providers."}),"\n",(0,i.jsxs)(n.p,{children:["Most views from the V3 SDK and Terminal have yet to be ported over to the V4 Platform, although some charts are already available with the ",(0,i.jsx)(n.code,{children:"openbb-charting"})," toolkit extension - which includes PyWry for window creation."]}),"\n",(0,i.jsx)(n.p,{children:"Install the charting extension with:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"pip install openbb-charting\n"})}),"\n",(0,i.jsxs)(n.p,{children:["The equivalent to ",(0,i.jsx)(n.code,{children:'openbb.stocks.candle("AAPL")'})," is, ",(0,i.jsx)(n.code,{children:'obb.equity.price.historical("AAPL", chart=True).show()'}),"."]}),"\n",(0,i.jsx)(n.p,{children:"More views to come soon!"}),"\n",(0,i.jsx)(n.h3,{id:"getting-started",children:"Getting Started"}),"\n",(0,i.jsxs)(n.p,{children:["See the ",(0,i.jsx)(n.a,{href:"/platform/getting_started",children:"getting started"})," page for examples on getting started using the OpenBB Platform."]})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},94331:(e,n,t)=>{t.d(n,{A:()=>s});t(96540);var i=t(5260),r=t(74848);function s(e){let{title:n}=e;return(0,r.jsx)(i.A,{children:(0,r.jsx)("title",{children:n})})}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>o});var i=t(96540);const r={},s=i.createContext(r);function a(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);