"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[29781],{2306:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var i=t(74848),s=t(28453);const o={title:"Table",sidebar_position:1,description:"Learn how to integrate your own backend with OpenBB Workspace using the cookie-cutter or language-agnostic API approaches, with illustrative guides and principles for handling widget.json files, APIs, interfaces, Python, FastAPI, and more.",keywords:["widgets.json","OpenBB API","Endpoint integration","widget configuration","Language-Agnostic API","API implementation","Python","FastAPI","Workspace widgets","Widget definitions"]},a="Table Widget",r={id:"workspace/custom-backend/Widgets/table/table",title:"Table",description:"Learn how to integrate your own backend with OpenBB Workspace using the cookie-cutter or language-agnostic API approaches, with illustrative guides and principles for handling widget.json files, APIs, interfaces, Python, FastAPI, and more.",source:"@site/content/workspace/custom-backend/Widgets/table/table.md",sourceDirName:"workspace/custom-backend/Widgets/table",slug:"/workspace/custom-backend/Widgets/table/",permalink:"/workspace/custom-backend/Widgets/table/",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/workspace/custom-backend/Widgets/table/table.md",tags:[],version:"current",lastUpdatedBy:"Meghan Lopes",lastUpdatedAt:1742856507e3,sidebarPosition:1,frontMatter:{title:"Table",sidebar_position:1,description:"Learn how to integrate your own backend with OpenBB Workspace using the cookie-cutter or language-agnostic API approaches, with illustrative guides and principles for handling widget.json files, APIs, interfaces, Python, FastAPI, and more.",keywords:["widgets.json","OpenBB API","Endpoint integration","widget configuration","Language-Agnostic API","API implementation","Python","FastAPI","Workspace widgets","Widget definitions"]},sidebar:"tutorialSidebar",previous:{title:"Widgets",permalink:"/workspace/custom-backend/Widgets/"},next:{title:"Column and Cell Rendering",permalink:"/workspace/custom-backend/Widgets/table/Column and Cell Rendering"}},d={},c=[{value:"Step 1: Set Up Your Project",id:"step-1-set-up-your-project",level:2},{value:"Step 2: Create your Table Endpoint",id:"step-2-create-your-table-endpoint",level:2},{value:"Edit the widgets.json File",id:"edit-the-widgetsjson-file",level:3},{value:"Step 3: Run the Application",id:"step-3-run-the-application",level:2},{value:"Step 4: Add to OpenBB Pro",id:"step-4-add-to-openbb-pro",level:2},{value:"Additional Resources",id:"additional-resources",level:2}];function l(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"table-widget",children:"Table Widget"}),"\n",(0,i.jsx)(n.p,{children:"This guide will walk you through the process of creating a table widget for OpenBB Workspace. By the end of this guide, you will have a working table widget that you can add to OpenBB."}),"\n",(0,i.jsx)(n.h2,{id:"step-1-set-up-your-project",children:"Step 1: Set Up Your Project"}),"\n",(0,i.jsx)(n.p,{children:"To get started, create the main application file and the widget configuration file. You will only need these two files:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"main.py"}),": This file will contain your FastAPI application code."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"widgets.json"}),": This file will define the configuration for your widget."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["The backend will use the same FastAPI setup and structure as described in the ",(0,i.jsx)(n.a,{href:"/workspace/custom-backend/",children:"Custom Backend"})," page."]}),"\n",(0,i.jsx)(n.h2,{id:"step-2-create-your-table-endpoint",children:"Step 2: Create your Table Endpoint"}),"\n",(0,i.jsxs)(n.p,{children:["Edit the ",(0,i.jsx)(n.code,{children:"main.py"})," file and add the following code. This code sets up an endpoint to serve the widget configuration, in this case we are using the api.llama.fi/v2/chains endpoint to fetch the data for the table :"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:'...\n# Table endpoint\n@app.get("/chains_table")\ndef chains_table():\n    """Endpoint to fetch the current TVL of all chains using Defi Llama."""\n    params = {}\n    response = requests.get("https://api.llama.fi/v2/chains", params=params)\n\n    if response.status_code == 200:\n        return response.json()\n\n    print(f"Request error {response.status_code}: {response.text}")\n    return JSONResponse(\n        content={"error": response.text}, status_code=response.status_code\n    )\n'})}),"\n",(0,i.jsx)(n.h3,{id:"edit-the-widgetsjson-file",children:"Edit the widgets.json File"}),"\n",(0,i.jsxs)(n.p,{children:["Open the ",(0,i.jsx)(n.code,{children:"widgets.json"})," file and add the following JSON data. This configuration defines the widget's properties and how it should be displayed in OpenBB Workspace."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "chains_table": {\n    "name": "Chains table example",\n    "description": "Get current TVL of all chains using Defi LLama",\n    "category": "Crypto",\n    "endpoint": "chains_table",\n    "gridData": {\n      "w": 20,\n      "h": 9\n    }\n  }\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:"In the widgets.json file, we're creating a widget that shows the current Total Value Locked (TVL) for various blockchain chains using data from the Defi Llama API."}),"\n",(0,i.jsxs)(n.p,{children:["For more information on the ",(0,i.jsx)(n.code,{children:"widgets.json"})," file, see the ",(0,i.jsx)(n.a,{href:"../widgets.json",children:"Widgets.json"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"step-3-run-the-application",children:"Step 3: Run the Application"}),"\n",(0,i.jsx)(n.p,{children:"Start the FastAPI Server: Use Uvicorn to run your FastAPI application."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"uvicorn main:app --host localhost --port 5050\n"})}),"\n",(0,i.jsx)(n.h2,{id:"step-4-add-to-openbb-pro",children:"Step 4: Add to OpenBB Pro"}),"\n",(0,i.jsxs)(n.p,{children:["Navigate to ",(0,i.jsx)(n.a,{href:"https://pro.openbb.co/app/data-connectors",children:"https://pro.openbb.co/app/data-connectors"})," and add your backend by clicking on the ",(0,i.jsx)(n.code,{children:"+ Add Data"})," button in the top right corner. Once there select ",(0,i.jsx)(n.code,{children:"Custom Backend"})," and fill in the details. Your URL will be ",(0,i.jsx)(n.code,{children:"http://localhost:5050"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Once you have added your backend you can find the widget in the ",(0,i.jsx)(n.code,{children:"Crypto"})," category with the name ",(0,i.jsx)(n.code,{children:"Chains table example"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["To further configure the columns and headers in your table you can set the ",(0,i.jsx)(n.code,{children:"columnsDefs"})," property in the ",(0,i.jsx)(n.code,{children:"widgets.json"})," file - see ",(0,i.jsx)(n.a,{href:"/workspace/custom-backend/Widgets/table/Column%20and%20Cell%20Rendering",children:"Column and Cell Rendering"}),"."]}),"\n",(0,i.jsx)("img",{className:"pro-border-gradient",width:"600",alt:"table",src:"https://openbb-assets.s3.us-east-1.amazonaws.com/docs/pro/simple-table.png"}),"\n",(0,i.jsx)(n.h2,{id:"additional-resources",children:"Additional Resources"}),"\n",(0,i.jsxs)(n.p,{children:["You can find more examples of how to set up your own backend in the ",(0,i.jsx)(n.a,{href:"https://github.com/OpenBB-finance/backend-examples-for-openbb-workspace",children:"Backend for OpenBB Workspace GitHub"}),"."]})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>r});var i=t(96540);const s={},o=i.createContext(s);function a(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);