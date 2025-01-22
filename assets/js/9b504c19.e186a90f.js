"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[65260],{6572:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>d,toc:()=>c});var t=r(74848),n=r(28453),a=r(94331);const i={title:"Basic Syntax",sidebar_position:1,description:"This page provides comprehensive information about standardized command syntax for an open-source platform. Topics discussed include the structure of command syntax, use of standardized parameters, usage of provider and symbol parameters, handling of date and limit parameters, and more. Also explored, are the methods for selecting data sources, handling different list and ticker symbol formats, and dealing with command responses and warnings.",keywords:["tutorial","command syntax","standardized parameters","date format","provider parameter","data source selection","symbol parameter","list formats","ticker symbols","date parameter","time series","limit parameter","keyword arguments","endpoint parameters","command response","data models"]},o=void 0,d={id:"platform/user_guides/basic_syntax",title:"Basic Syntax",description:"This page provides comprehensive information about standardized command syntax for an open-source platform. Topics discussed include the structure of command syntax, use of standardized parameters, usage of provider and symbol parameters, handling of date and limit parameters, and more. Also explored, are the methods for selecting data sources, handling different list and ticker symbol formats, and dealing with command responses and warnings.",source:"@site/content/platform/user_guides/basic_syntax.mdx",sourceDirName:"platform/user_guides",slug:"/platform/user_guides/basic_syntax",permalink:"/platform/user_guides/basic_syntax",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/platform/user_guides/basic_syntax.mdx",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1737538965e3,sidebarPosition:1,frontMatter:{title:"Basic Syntax",sidebar_position:1,description:"This page provides comprehensive information about standardized command syntax for an open-source platform. Topics discussed include the structure of command syntax, use of standardized parameters, usage of provider and symbol parameters, handling of date and limit parameters, and more. Also explored, are the methods for selecting data sources, handling different list and ticker symbol formats, and dealing with command responses and warnings.",keywords:["tutorial","command syntax","standardized parameters","date format","provider parameter","data source selection","symbol parameter","list formats","ticker symbols","date parameter","time series","limit parameter","keyword arguments","endpoint parameters","command response","data models"]},sidebar:"tutorialSidebar",previous:{title:"User Guides",permalink:"/platform/user_guides/"},next:{title:"Basic Response",permalink:"/platform/user_guides/basic_response"}},l={},c=[{value:"Provider",id:"provider",level:2},{value:"Symbol",id:"symbol",level:2},{value:"One Symbol",id:"one-symbol",level:3},{value:"Multiple Symbols",id:"multiple-symbols",level:3},{value:"Comma-Separated String",id:"comma-separated-string",level:4},{value:"Python List",id:"python-list",level:4},{value:"Dates",id:"dates",level:2},{value:"Limit",id:"limit",level:2},{value:"**kwargs",id:"kwargs",level:2},{value:"References",id:"references",level:2}];function p(e){const s={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,n.R)(),...e.components},{Details:r}=s;return r||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.A,{title:"Basic Syntax - Usage | OpenBB Platform Docs"}),"\n",(0,t.jsxs)(s.p,{children:["The structure of command syntax is standardized across common fields. This ensures that a ",(0,t.jsx)(s.code,{children:"date"})," is always a ",(0,t.jsx)(s.code,{children:"date"})," and the format remains consistent throughout."]}),"\n",(0,t.jsx)(s.p,{children:"Standardized parameters include, but are not limited to:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"#provider",children:"provider"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"#symbol",children:"symbol"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"#dates",children:"start_date"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"#dates",children:"end_date"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"#dates",children:"date"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"#limit",children:"limit"})}),"\n"]}),"\n",(0,t.jsxs)(s.p,{children:["When looking at a function's docstring, the standard parameters (shared across multiple providers) are positioned first. Provider-specific parameters positionally follow the ",(0,t.jsx)(s.code,{children:"provider"})," argument. The example below is from, ",(0,t.jsx)(s.code,{children:"obb.equity.price.quote"}),":"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-console",children:"Parameters\n----------\nsymbol : str\n    Symbol to get data for. In this case, the comma separated list of symbols.\nprovider : Optional[Literal['fmp', 'intrinio']]\n    The provider to use for the query, by default None.\n    If None, the provider specified in defaults is selected or 'fmp' if there is\n    no default.\nsource : Literal['iex', 'bats', 'bats_delayed', 'utp_delayed', 'cta_a_delayed', 'cta_b_delayed', 'intrinio_mx', 'intrinio_mx_plus', 'delayed_sip']\n    Source of the data. (provider: intrinio)\n"})}),"\n",(0,t.jsxs)(s.admonition,{type:"note",children:[(0,t.jsx)(s.p,{children:"Examples below assume that the Python interface has been imported in the current session, and/or the Fast API has been started."}),(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-python",children:"from openbb import obb\n"})}),(0,t.jsx)(s.p,{children:"or"}),(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-python",children:"uvicorn openbb_core.api.rest_api:app\n"})})]}),"\n",(0,t.jsx)(s.h2,{id:"provider",children:"Provider"}),"\n",(0,t.jsxs)(s.p,{children:["The ",(0,t.jsx)(s.code,{children:"provider"})," parameter is the way to select the specific source of the data from the endpoint. If a ",(0,t.jsx)(s.a,{href:"/platform/user_guides/settings_and_environment_variables",children:"preference for the default provider"})," has not been defined, the default will be the first, alphabetically, installed provider. Provider values are entered in lower-case, with an underscore for multiple words - for example:"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-python",children:'historical_prices = obb.equity.price.historical("aapl", provider="alpha_vantage")\n'})}),"\n",(0,t.jsx)(s.p,{children:"Provider coverage can be ascertained with the command below:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-python",children:"obb.coverage.providers\n"})}),"\n",(0,t.jsxs)(s.p,{children:["Refer to, ",(0,t.jsx)(s.a,{href:"/platform/user_guides/extensions",children:"Data Extensions"}),", for instructions on installing data provider extensions."]}),"\n",(0,t.jsx)(s.h2,{id:"symbol",children:"Symbol"}),"\n",(0,t.jsxs)(s.p,{children:["Symbols are not case-sensitive, and where the function allows, can be entered as a ",(0,t.jsx)(s.code,{children:"string"}),", ",(0,t.jsx)(s.code,{children:"List[str]"}),", or a comma-separated ",(0,t.jsx)(s.code,{children:"string"}),". The exact format of the symbol may vary between providers - for example, share classes, exchange suffixes, and global composites. An example of this difference is shown below:"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-python",children:'obb.equity.price.historical("brk.b", provider="polygon")\n'})}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-python",children:'obb.equity.price.historical("brk-b", provider="fmp")\n'})}),"\n",(0,t.jsx)(s.p,{children:"While some providers handle the different formats on their end, others do not. This is something to consider when no results are returned from one source."}),"\n",(0,t.jsxs)(s.p,{children:["With providers supporting market data from multiple jurisdictions, the most common method for requesting data outside of US-listings is to append a suffix to the ticker symbol (e.g., ",(0,t.jsx)(s.code,{children:"RELIANCE.NS"}),"). Formats may be unique to a provider, so it is best to review the source's documentation for an overview of their specific conventions. ",(0,t.jsx)(s.a,{href:"https://help.yahoo.com/kb/SLN2310.html",children:"This page"})," on Yahoo describes how they format symbols, which many others follow to some degree."]}),"\n",(0,t.jsx)(s.h3,{id:"one-symbol",children:"One Symbol"}),"\n",(0,t.jsx)(r,{children:(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-python",children:'quote = obb.equity.price.quote(symbol="td", provider="fmp")\n'})})}),"\n",(0,t.jsx)(s.h3,{id:"multiple-symbols",children:"Multiple Symbols"}),"\n",(0,t.jsxs)(r,{children:[(0,t.jsx)(s.p,{children:"The OpenBB Provider module enforces REST-compliant lists that can be entered in either format through the Python interface."}),(0,t.jsx)(s.h4,{id:"comma-separated-string",children:"Comma-Separated String"}),(0,t.jsx)(s.p,{children:"This is the format required by the Fast API, when creating new data endpoints, it is important that the Python interface is able to accept both formats."}),(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-python",children:'quotes = obb.equity.price.quote("td,schw,jpm,ms", provider="fmp")\n'})}),(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-python",children:'import requests\nr = requests.get("http://127.0.0.1:8000/api/v1/equity/price/quote?provider=fmp&symbol=td,schw,ms,jpm")\nr.json()\n'})}),(0,t.jsx)(s.h4,{id:"python-list",children:"Python List"}),(0,t.jsx)(s.p,{children:"Entering a list will provide the same outcome as above."}),(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-python",children:'quotes = obb.equity.price.quote(["td","schw","jpm","ms"], provider="fmp")\n'})}),(0,t.jsx)(s.p,{children:"Lists of symbols can be generated from the results of other functions, and then passed to the input."}),(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-python",children:'symbol="spgi"\nsymbols = obb.equity.compare.peers(symbol).results.peers_list+[symbol]\nquotes = obb.equity.price.quote(symbols)\n'})}),(0,t.jsx)(s.admonition,{type:"note",children:(0,t.jsx)(s.p,{children:"To accomplish this same task through the Fast API, convert the list to a comma-separated string."})}),(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-python",children:'import requests\nsymbol="spgi"\nr = requests.get(f"http://127.0.0.1:8000/api/v1/equity/compare/peers?provider=fmp&symbol={symbol}")\nsymbols_list = r.json()["results"]["peers_list"]+[symbol]\nsymbols = ",".join(symbols_list)\nresponse = requests.get(f"http://127.0.0.1:8000/api/v1/equity/price/quote?provider=fmp&symbol={symbols}")\nresponse.json()\n'})})]}),"\n",(0,t.jsx)(s.h2,{id:"dates",children:"Dates"}),"\n",(0,t.jsxs)(s.p,{children:['Dates are entered everywhere as a string, formatted as, "YYYY-MM-DD". If the function has only the ',(0,t.jsx)(s.code,{children:"date"})," parameter, the data will be a snapshot instead of a time series."]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-python",children:'historical_prices = obb.equity.price.historical(symbol="qqq", start_date="2023-01-10", end_date="2023-01-31", provider="fmp")\n'})}),"\n",(0,t.jsxs)(s.p,{children:["For flexibility and programmatic purposes, a ",(0,t.jsx)(s.code,{children:"datetime"})," object is also accepted."]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-python",children:'from datetime import datetime\nsymbol="qqq"\nstart = datetime.strptime("100123", "%d%m%y")\nend = datetime.strptime("2023-01-31","%Y-%m-%d")\nhistorical_prices = obb.equity.price.historical(symbol, start_date=start, end_date=end, provider="fmp")\n'})}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-python",children:'import requests\nresponse = requests.get(f"http://127.0.0.1:8000/api/v1/equity/price/historical?provider=fmp&symbol={symbol}&start_date={start}&end_date={end}")\nresponse.json()\n'})}),"\n",(0,t.jsx)(s.h2,{id:"limit",children:"Limit"}),"\n",(0,t.jsxs)(s.p,{children:["Where, optional, ",(0,t.jsx)(s.code,{children:"limit"})," parameters are supplied, they are likely to have sensible default states that return N results starting from the most recent entry or the ",(0,t.jsx)(s.code,{children:"start_date"}),". Enter these values as an integer."]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-python",children:'income = obb.equity.fa.income("AAPL", period="quarter", provider="fmp", limit=4)\n'})}),"\n",(0,t.jsx)(s.h2,{id:"kwargs",children:"**kwargs"}),"\n",(0,t.jsxs)(s.p,{children:["All endpoints accept additional keyword arguments, but non-existent parameters will be ignored. Invalid parameters are communicated via the ",(0,t.jsx)(s.code,{children:"warnings"})," field in the command response. Parameters can be stored as a dictionary and fed to the command as ",(0,t.jsx)(s.code,{children:"**kwargs"}),". If a provider, or function, has an undocumented parameter it can still be accessed by supplying the additional kwargs."]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-python",children:'kwargs = {"symbol":"msft","start_date":"2023-01-01","provider":"polygon"}\nhistorical_prices = obb.equity.price.historical(**kwargs)\n'})}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-python",children:'data = obb.equity.price.quote("brk-b", provider="fmp", source="bats")\ndata.warnings\n'})}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-console",children:"[Warning_(category='OpenBBWarning', message=\"Parameter 'source' is not supported by fmp. Available for: intrinio.\")]\n"})}),"\n",(0,t.jsx)(s.h2,{id:"references",children:"References"}),"\n",(0,t.jsxs)(s.p,{children:["All functions, parameters, and responses are detailed under the ",(0,t.jsx)(s.a,{href:"/platform/reference",children:"Reference pages"}),". The data models for each provider source are described within the ",(0,t.jsx)(s.a,{href:"/platform/data_models",children:"Data Models"})," pages."]}),"\n",(0,t.jsx)(s.p,{children:"These pages are a quick way to cross-reference differences between providers. The same information is provided in a function's signature and docstring."})]})}function m(e={}){const{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},94331:(e,s,r)=>{r.d(s,{A:()=>a});r(96540);var t=r(5260),n=r(74848);function a(e){let{title:s}=e;return(0,n.jsx)(t.A,{children:(0,n.jsx)("title",{children:s})})}},28453:(e,s,r)=>{r.d(s,{R:()=>i,x:()=>o});var t=r(96540);const n={},a=t.createContext(n);function i(e){const s=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),t.createElement(a.Provider,{value:s},e.children)}}}]);