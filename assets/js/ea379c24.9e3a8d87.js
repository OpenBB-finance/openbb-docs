"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[88569],{67873:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var i=t(74848),s=t(28453),r=t(94331);const l={title:"User Settings & Environment Variables",sidebar_position:3,description:"This section details configuring the OpenBB Platform settings and environment variables.",keywords:["OpenBB Platform","Python client","getting started","OpenBB Hub","local environment","environment variables"]},a=void 0,o={id:"platform/user_guides/settings_and_environment_variables",title:"User Settings & Environment Variables",description:"This section details configuring the OpenBB Platform settings and environment variables.",source:"@site/content/platform/user_guides/settings_and_environment_variables.mdx",sourceDirName:"platform/user_guides",slug:"/platform/user_guides/settings_and_environment_variables",permalink:"/platform/user_guides/settings_and_environment_variables",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/platform/user_guides/settings_and_environment_variables.mdx",tags:[],version:"current",lastUpdatedBy:"Andrew",lastUpdatedAt:1735827799e3,sidebarPosition:3,frontMatter:{title:"User Settings & Environment Variables",sidebar_position:3,description:"This section details configuring the OpenBB Platform settings and environment variables.",keywords:["OpenBB Platform","Python client","getting started","OpenBB Hub","local environment","environment variables"]},sidebar:"tutorialSidebar",previous:{title:"Extensions",permalink:"/platform/user_guides/extensions"},next:{title:"LLM Friendly Mode",permalink:"/platform/user_guides/llm_mode"}},d={},c=[{value:"User Settings",id:"user-settings",level:2},{value:"Preferences",id:"preferences",level:3},{value:"Defaults",id:"defaults",level:3},{value:"Query Parameters",id:"query-parameters",level:4},{value:"Environment Variables",id:"environment-variables",level:2},{value:"Proxy Networks",id:"proxy-networks",level:3},{value:"System Settings",id:"system-settings",level:2},{value:"Python Settings",id:"python-settings",level:3},{value:"API Settings",id:"api-settings",level:3},{value:"Logging Service",id:"logging-service",level:3}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.A,{title:"User Settings & Environment Variables - Usage | OpenBB Platform Docs"}),"\n",(0,i.jsx)(n.p,{children:"This page outlines configuring the OpenBB Platform with user settings and environment variables."}),"\n",(0,i.jsx)(n.h2,{id:"user-settings",children:"User Settings"}),"\n",(0,i.jsxs)(n.p,{children:["User settings are stored locally, ",(0,i.jsx)(n.code,{children:"~/.openbb_platform/"}),", as a JSON file, ",(0,i.jsx)(n.code,{children:"user_settings.json"}),". It is read upon initializing the Python client, or when the Fast API is authorized. If the file does not exist, it will be created on the first run."]}),"\n",(0,i.jsx)(n.p,{children:"This file stores:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/platform/getting_started/api_keys#local-environment",children:"credentials"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#preferences",children:"preferences"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#defaults",children:"defaults"})}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"This is an example of how it might look after setup:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n    "credentials": {\n        "fmp_api_key": "REPLACE",\n        "polygon_api_key": "REPLACE",\n    },\n    "preferences": {\n        "data_directory": "~/OpenBBUserData",\n        "export_directory": "~/OpenBBUserData/exports",\n        "request_timeout": 15,\n        "metadata": true,\n        "output_type": "OBBject"\n    },\n    "defaults": {\n        "commands": {\n            "/equity/price/historical": {\n                "provider": "fmp"\n            },\n            "/equity/fundamental/balance": {\n                "provider": [\n                    "intrinio",\n                    "fmp",\n                    "polygon"\n                ]\n            },\n        }\n    }\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"preferences",children:"Preferences"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:(0,i.jsx)(n.strong,{children:"Preference"})}),(0,i.jsx)(n.th,{children:(0,i.jsx)(n.strong,{children:"Default"})}),(0,i.jsx)(n.th,{children:(0,i.jsx)(n.strong,{children:"Options"})}),(0,i.jsx)(n.th,{children:(0,i.jsx)(n.strong,{children:"Description"})})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"data_directory"}),(0,i.jsx)(n.td,{children:"/home/OpenBBUserData"}),(0,i.jsx)(n.td,{children:"Any path."}),(0,i.jsx)(n.td,{children:"When launching the application for the first time this directory will be created. It serves as the default location where the application stores usage artifacts such as logs and exports."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"export_directory"}),(0,i.jsx)(n.td,{children:"/home/OpenBBUserData/exports"}),(0,i.jsx)(n.td,{children:"Any path."}),(0,i.jsx)(n.td,{children:"The OpenBB Charting Extension provides the capability to export images in various formats. This is the directory where it attempts to save such exports."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"cache_directory"}),(0,i.jsx)(n.td,{children:"/home/OpenBBUserData/cache"}),(0,i.jsx)(n.td,{children:"Any path."}),(0,i.jsx)(n.td,{children:"The directory where http requests and database caches are stored, for functions with caching."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"user_styles_directory"}),(0,i.jsx)(n.td,{children:"/home/OpenBBUserData/styles/user"}),(0,i.jsx)(n.td,{children:"Any path."}),(0,i.jsx)(n.td,{children:"The OpenBB Charting Extension supports custom stylization. This directory is the location where it looks for user-defined styles. If no user styles are found in this directory the application will proceed with the default styles."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"charting_extension"}),(0,i.jsx)(n.td,{children:"openbb_charting"}),(0,i.jsx)(n.td,{children:'["openbb_charting"]'}),(0,i.jsx)(n.td,{children:"Name of the charting extension to be used with the application."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"chart_style"}),(0,i.jsx)(n.td,{children:"dark"}),(0,i.jsx)(n.td,{children:'["dark", "light"]'}),(0,i.jsx)(n.td,{children:'The default color style to use with the OpenBB Charting Extension plots. Options include "dark", and "light".'})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"table_style"}),(0,i.jsx)(n.td,{children:"dark"}),(0,i.jsx)(n.td,{children:'["dark", "light"]'}),(0,i.jsx)(n.td,{children:'"The default color style to use with the OpenBB Charting Extension tables. Options are "dark", and "light""'})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"request_timeout"}),(0,i.jsx)(n.td,{children:"15"}),(0,i.jsx)(n.td,{children:"Any positive integer."}),(0,i.jsx)(n.td,{children:"Specifies the timeout duration for HTTP requests."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"metadata"}),(0,i.jsx)(n.td,{children:"true"}),(0,i.jsx)(n.td,{children:"[true, false]"}),(0,i.jsx)(n.td,{children:"Enables or disables the collection of metadata which provides information about operations including arguments duration route and timestamp. Disabling this feature may improve performance in cases where contextual information is not needed, or when the additional computation time and storage space are a concern."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"output_type"}),(0,i.jsx)(n.td,{children:"OBBject"}),(0,i.jsx)(n.td,{children:'["OBBject", "dataframe", "numpy", "dict", "chart", "polars", "llm"]'}),(0,i.jsxs)(n.td,{children:["Specifies the type of data the application will output when a command or endpoint is accessed. Note that choosing data formats only available in Python such as ",(0,i.jsx)(n.code,{children:"dataframe"}),", ",(0,i.jsx)(n.code,{children:"numpy"}),", or ",(0,i.jsx)(n.code,{children:"polars"})," will render the application's API non-functional."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"show_warnings"}),(0,i.jsx)(n.td,{children:"true"}),(0,i.jsx)(n.td,{children:"[true, false]"}),(0,i.jsx)(n.td,{children:"Enables or disables the display of warnings."})]})]})]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["If a ",(0,i.jsx)(n.code,{children:"OpenBBUserData"})," folder in not in the home directory, the application will create one on first run. The user preferences with paths all default to this folder - exports, styles, or data - and can be changed at any time to suit."]}),"\n",(0,i.jsxs)(n.li,{children:["The ",(0,i.jsx)(n.code,{children:"OpenBBUserData"})," will still be created even if preferences are not pointing to it, this is because the application needs a place to store logs and other artifacts."]}),"\n",(0,i.jsxs)(n.li,{children:["One way to export files or images from the OpenBB Platform is to leverage that functionality from the OpenBB Charting Extension. The ",(0,i.jsx)(n.code,{children:"export_directory"})," preference is the location where the extension will attempt to save CSV and image files."]}),"\n"]})}),"\n",(0,i.jsx)(n.h3,{id:"defaults",children:"Defaults"}),"\n",(0,i.jsx)(n.p,{children:"Here you can define provider defaults, and other parameters, for Python commands, if no argument is explicitly sent when the command runs. For 'provider', there are two formatting options:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Single provider"}),": this provider will be selected by default for the given command."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Priority list"}),": the first provider in the list with all required credentials setup will be used."]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n    ...\n    "defaults": {\n        "commands": {\n            // single provider //\n            "/equity/price/historical": {\n                "provider": "fmp"\n            },\n            # priority list\n            "/equity/fundamental/balance": {\n                "provider": [\n                    "intrinio",\n                    "fmp",\n                    "polygon"\n                ]\n            },\n        }\n    }\n}\n'})}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"If no configuration is specified the command will use the default priority list. This is the list of available providers for the command sorted alphabetically."}),"\n"]})}),"\n",(0,i.jsx)(n.h4,{id:"query-parameters",children:"Query Parameters"}),"\n",(0,i.jsxs)(n.p,{children:["Individual parameters can also be defined in ",(0,i.jsx)(n.code,{children:"user_settings.json"}),", and the values supplied will applied at runtime.\nThe default will be ignored when the parameter is passed in the function call."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n    ...\n    "defaults": {\n        "commands": {\n            "/equity/price/historical": {\n                "provider": "yfinance",\n                "chart": true,\n                "chart_params": {\n                    "heikin_ashi": true,\n                    "indicators": {\n                        "sma": {\n                            "length": [\n                                21,\n                                50\n                            ]\n                        },\n                        "ema": {\n                            "length": 150\n                        }\n                    }\n                }\n            },\n            "/economy/cpi": {\n                "provider": "oecd"\n            }\n        }\n    }\n}\n'})}),"\n",(0,i.jsx)(n.admonition,{type:"important",children:(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Default parameters are somewhat limited in the FastAPI. Apart from 'provider', they are applicable only where parameters have been defined as Optional, with a default value of None."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Command docstrings and descriptions will not change according to items defined here."}),"\n"]}),"\n"]})}),"\n",(0,i.jsx)(n.h2,{id:"environment-variables",children:"Environment Variables"}),"\n",(0,i.jsxs)(n.p,{children:["Environment variables are defined in a ",(0,i.jsx)(n.code,{children:".env"})," file. If this file does not exist, create it inside the same folder ",(0,i.jsx)(n.code,{children:"user_settings.json"})," is located."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"OPENBB_DEBUG_MODE"}),": enables verbosity while running the program"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"OPENBB_AUTO_BUILD"}),": enables automatic SDK package build on import"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"OPENBB_API_AUTH_EXTENSION"}),": specifies which API authentication extension to use"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"OPENBB_API_AUTH"}),": enables API authentication for command endpoints"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"OPENBB_API_USERNAME"}),": sets API username"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"OPENBB_API_PASSWORD"}),": sets API password"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Variables can be defined for current session only."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:'import os\nos.environ["OPENBB_DEBUG_MODE"] = "True"\nfrom openbb import obb\n'})}),"\n",(0,i.jsx)(n.h3,{id:"proxy-networks",children:"Proxy Networks"}),"\n",(0,i.jsxs)(n.p,{children:["An environment variable can be set, in the ",(0,i.jsx)(n.code,{children:".env"})," file, to direct the Requests library to a specific address and port."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-env",children:'HTTP_PROXY="<ADDRESS>" or HTTPS_PROXY="<ADDRESS>\u201d\n'})}),"\n",(0,i.jsx)(n.p,{children:"For example:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-env",children:'HTTP_PROXY="http://10.10.10.10:8000"\n'})}),"\n",(0,i.jsx)(n.h2,{id:"system-settings",children:"System Settings"}),"\n",(0,i.jsxs)(n.p,{children:["An additional configuration file, ",(0,i.jsx)(n.code,{children:"system_settings.json"}),", is located in the same folder as ",(0,i.jsx)(n.code,{children:"user_settings.json"}),", and can be created manually if it does not exist. The items below can be configured via this file."]}),"\n",(0,i.jsx)(n.h3,{id:"python-settings",children:"Python Settings"}),"\n",(0,i.jsx)(n.p,{children:"This configuration allows the user to include specific elements of the docstrings. Useful for reducing the context length when incorporating LLMs and function calling. The settings below are for the complete docstring, and are the default state."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n    "python_settings": {\n        "docstring_sections": ["description", "parameters", "returns", "examples"],\n        "docstring_max_length": null\n    }\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"api-settings",children:"API Settings"}),"\n",(0,i.jsx)(n.p,{children:"This dictionary is passed to the instance of FastAPI."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n    "api_settings": {\n        "version": "1",\n        "title": "OpenBB Platform API",\n        "description": "This is the OpenBB Platform API.",\n        "terms_of_service": "http://example.com/terms/",\n        "contact_name": "OpenBB Team",\n        "contact_url": "https://openbb.co",\n        "contact_email": "hello@openbb.co",\n        "license_name": "AGPLv3",\n        "license_url": "https://github.com/OpenBB-finance/OpenBB/blob/develop/LICENSE",\n        "servers": [\n            {\n                "url": "",\n                "description": "Local OpenBB development server"\n            }\n        ],\n        "cors": {\n            "allow_origins": [\n                "*"\n            ],\n            "allow_methods": [\n                "*"\n            ],\n            "allow_headers": [\n                "*"\n            ]\n        },\n        "prefix": "/api/v1"\n    }\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"logging-service",children:"Logging Service"}),"\n",(0,i.jsxs)(n.p,{children:["The OpenBB Platform logs anonymized records of function calls, and any error messages produced, to a unique file for the session, written to ",(0,i.jsx)(n.code,{children:"~/OpenBBUserData/logs"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"There are two settings that can be applied:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"log_collect: Set as false to disable telemetry while still logging locally to file."}),"\n",(0,i.jsx)(n.li,{children:"logging_suppress: Disables the file handler in the logging service and no log records are created."}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n    "logging_suppress": true,\n    "log_collect": false\n}\n'})})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},94331:(e,n,t)=>{t.d(n,{A:()=>r});t(96540);var i=t(5260),s=t(74848);function r(e){let{title:n}=e;return(0,s.jsx)(i.A,{children:(0,s.jsx)("title",{children:n})})}},28453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>a});var i=t(96540);const s={},r=i.createContext(s);function l(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);