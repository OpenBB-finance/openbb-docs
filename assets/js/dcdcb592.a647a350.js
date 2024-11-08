"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[87129],{77226:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>r,metadata:()=>d,toc:()=>c});var i=t(74848),s=t(28453),o=t(94331);const r={title:"Custom Backend",sidebar_position:14,description:"Learn how to integrate your own backend with OpenBB Terminal Pro using the cookie-cutter or language-agnostic API approaches, with illustrative guides and principles for handling widget.json files, APIs, interfaces, Python, FastAPI and more.",keywords:["OpenBB cookie-cutter","widgets.json","OpenBB API","Endpoint integration","widget configuration","Language-Agnostic API","API implementation","Python","FastAPI","Terminal Pro widgets","Widget definitions"]},a=void 0,d={id:"terminal/custom-backend/custom-backend",title:"Custom Backend",description:"Learn how to integrate your own backend with OpenBB Terminal Pro using the cookie-cutter or language-agnostic API approaches, with illustrative guides and principles for handling widget.json files, APIs, interfaces, Python, FastAPI and more.",source:"@site/content/terminal/custom-backend/custom-backend.md",sourceDirName:"terminal/custom-backend",slug:"/terminal/custom-backend/",permalink:"/terminal/custom-backend/",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/terminal/custom-backend/custom-backend.md",tags:[],version:"current",lastUpdatedBy:"DidierRLopes",lastUpdatedAt:1731078154e3,sidebarPosition:14,frontMatter:{title:"Custom Backend",sidebar_position:14,description:"Learn how to integrate your own backend with OpenBB Terminal Pro using the cookie-cutter or language-agnostic API approaches, with illustrative guides and principles for handling widget.json files, APIs, interfaces, Python, FastAPI and more.",keywords:["OpenBB cookie-cutter","widgets.json","OpenBB API","Endpoint integration","widget configuration","Language-Agnostic API","API implementation","Python","FastAPI","Terminal Pro widgets","Widget definitions"]},sidebar:"tutorialSidebar",previous:{title:"Snowflake",permalink:"/terminal/database-integrations/snowflake"},next:{title:"widgets.json",permalink:"/terminal/custom-backend/widgets.json"}},l={},c=[{value:"Examples",id:"examples",level:3},{value:"Frequently Asked Questions",id:"frequently-asked-questions",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components},{Details:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(o.A,{title:"Custom backend | OpenBB Terminal Pro Docs"}),"\n","\n",(0,i.jsx)(n.p,{children:"This is a versatile way to connect any data to the OpenBB Terminal. Whether your API is hosted internally or externally, this method provides a standardized structure that OpenBB Terminal Pro widgets can render."}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Design and implement your API"}),": Choose your preferred programming language and framework. Ensure that the API can return data in JSON format, which is required for widget integration."]}),"\n"]}),"\n",(0,i.jsxs)(n.admonition,{type:"note",children:[(0,i.jsx)(n.p,{children:"Guidelines for JSON Format:"}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"The JSON data should be in a flat structure, meaning that there should be no nested dictionaries or arrays within the individual objects."}),"\n",(0,i.jsx)(n.li,{children:"Each object should contain key-value pairs where the values are simple data types (e.g., strings, numbers, booleans)."}),"\n",(0,i.jsx)(n.li,{children:"Avoid nesting other objects or arrays inside any of the values.\nThe JSON should resemble the following structure:"}),"\n"]}),(0,i.jsxs)(t,{children:[(0,i.jsx)("summary",{mdxType:"summary",children:"Example JSON"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'[\n  {\n    "title": "To Kill a Mockingbird",\n    "author": "Harper Lee",\n    "year": 1960,\n    "genre": "Fiction"\n  },\n  {\n    "title": "1984",\n    "author": "George Orwell",\n    "year": 1949,\n    "genre": "Dystopian"\n  },\n  {\n    "title": "The Great Gatsby",\n    "author": "F. Scott Fitzgerald",\n    "year": 1925,\n    "genre": "Classic"\n  }\n]\n'})})]})]}),"\n",(0,i.jsxs)(n.ol,{start:"2",children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Create widgets.json file"}),": This file is your main configuration and defines widget properties such as name, description, category, endpoint, and other information. Each widget will be defined in this file. To view a sample ",(0,i.jsx)(n.code,{children:"widgets.json"})," file and learn more about what you can do check out the ",(0,i.jsx)(n.a,{href:"/terminal/custom-backend/widgets.json",children:"widgets.json docs"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"An example structure in your backend might look like below."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"  backend/\n  \u251c\u2500\u2500 main.py\n  \u2514\u2500\u2500 widgets.json\n"})}),"\n",(0,i.jsxs)(n.ol,{start:"3",children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Create endpoints for each widgets.json entry"}),": Your ",(0,i.jsx)(n.code,{children:"widgets.json"})," file lets OpenBB Terminal know how to display the data but you need to build out the endpoint to supply the data for each widget. Following the structure above, these endpoints would live in the ",(0,i.jsx)(n.code,{children:"main.py"})," file."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Connect to your API"}),": Once your API is up and running, you can add the custom backend using the OpenBB Terminal Pro interface. You will need to input your main endpoint and the system will read the ",(0,i.jsx)(n.code,{children:"/widgets.json"})," endpoint to fetch all the necessary settings and configurations. Once connected, all the widgets will appear in your search and ready to be added to any dashboard."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:(0,i.jsx)("img",{className:"pro-border-gradient",width:"600",alt:"folder",src:"https://openbb-web-assets.s3.amazonaws.com/docs/launch_oct_24/backend.png"})}),"\n",(0,i.jsx)(n.h3,{id:"examples",children:"Examples"}),"\n",(0,i.jsxs)(n.p,{children:["Our team has created several examples that you can use to quickly get started with Python and FastAPI. For more information, check ",(0,i.jsx)(n.a,{href:"https://github.com/OpenBB-finance/backend-for-terminal-pro/tree/main",children:"this open source repository"})," for examples."]}),"\n",(0,i.jsx)(n.h2,{id:"frequently-asked-questions",children:"Frequently Asked Questions"}),"\n",(0,i.jsxs)(t,{children:[(0,i.jsx)("summary",{mdxType:"summary",children:"Q: I'm using Safari/Brave and I can't connect to my backend"}),(0,i.jsx)(n.p,{children:"A: OpenBB Platform API Over HTTPS"}),(0,i.jsx)(n.p,{children:"To run the API over the HTTPS protocol, you must first create a self-signed certificate and the associated key. After steps 1 & 2 above, you can generate the files by entering this to the command line:"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"openssl req -x509 -days 3650 -out localhost.crt -keyout localhost.key   -newkey rsa:4096 -nodes -sha256   -subj '/CN=localhost' -extensions EXT -config <( \\\n   printf \"[dn]\\nCN=localhost\\n[req]\\ndistinguished_name = dn\\n[EXT]\\nsubjectAltName=DNS:localhost\\nkeyUsage=digitalSignature\\nextendedKeyUsage=serverAuth\")\n"})}),(0,i.jsxs)(n.p,{children:["Two files will be created, in the current working directory, that are passed as keyword arguments to the ",(0,i.jsx)(n.code,{children:"openbb-api"})," entry point."]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"openbb-api --ssl_keyfile localhost.key --ssl_certfile localhost.crt\n"})}),(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Note"}),": Adjust the command to include the full path to the file if the current working directory is not where they are located."]}),(0,i.jsxs)(n.p,{children:["The certificate - ",(0,i.jsx)(n.code,{children:"localhost.crt"})," - will need to be added to system's trust store. The process for this will depend on the operating system and the user account privilege."]}),(0,i.jsx)(n.p,{children:"A quick solution is to visit the server's URL, show the details of the warning, and choose to continue anyways."}),(0,i.jsx)(n.p,{children:"Contact the system administrator if you are using a work device and require additional permissions to complete the configuration."}),(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://in.norton.com/content/dam/blogs/images/norton/am/this_connection_not_is_private.png",alt:"This Connection Is Not Private"})})]})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},94331:(e,n,t)=>{t.d(n,{A:()=>o});t(96540);var i=t(5260),s=t(74848);function o(e){let{title:n}=e;return(0,s.jsx)(i.A,{children:(0,s.jsx)("title",{children:n})})}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>a});var i=t(96540);const s={},o=i.createContext(s);function r(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);