"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4501],{89082:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>a,metadata:()=>r,toc:()=>p});var i=t(74848),o=t(28453);const a={title:"Multi File Viewer",sidebar_position:6,description:"Learn how to integrate your own backend with OpenBB Workspace using the cookie-cutter or language-agnostic API approaches, with illustrative guides and principles for handling widget.json files, APIs, interfaces, Python, FastAPI, and more.",keywords:["widgets.json","OpenBB API","Endpoint integration","widget configuration","Language-Agnostic API","API implementation","Python","FastAPI","Workspace widgets","Widget definitions"]},s="Multi File Viewer Widget",r={id:"workspace/custom-backend/Widgets/multi-file-viewer",title:"Multi File Viewer",description:"Learn how to integrate your own backend with OpenBB Workspace using the cookie-cutter or language-agnostic API approaches, with illustrative guides and principles for handling widget.json files, APIs, interfaces, Python, FastAPI, and more.",source:"@site/content/workspace/custom-backend/Widgets/multi-file-viewer.md",sourceDirName:"workspace/custom-backend/Widgets",slug:"/workspace/custom-backend/Widgets/multi-file-viewer",permalink:"/workspace/custom-backend/Widgets/multi-file-viewer",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/workspace/custom-backend/Widgets/multi-file-viewer.md",tags:[],version:"current",lastUpdatedBy:"Danglewood",lastUpdatedAt:1744039756e3,sidebarPosition:6,frontMatter:{title:"Multi File Viewer",sidebar_position:6,description:"Learn how to integrate your own backend with OpenBB Workspace using the cookie-cutter or language-agnostic API approaches, with illustrative guides and principles for handling widget.json files, APIs, interfaces, Python, FastAPI, and more.",keywords:["widgets.json","OpenBB API","Endpoint integration","widget configuration","Language-Agnostic API","API implementation","Python","FastAPI","Workspace widgets","Widget definitions"]},sidebar:"tutorialSidebar",previous:{title:"Metric",permalink:"/workspace/custom-backend/Widgets/metric"},next:{title:"PDF Viewer",permalink:"/workspace/custom-backend/Widgets/pdf"}},l={},p=[{value:"Step 1: Set Up Your Project",id:"step-1-set-up-your-project",level:2},{value:"Step 2: Create the Multi-File Viewer Endpoints",id:"step-2-create-the-multi-file-viewer-endpoints",level:2},{value:"Response Format",id:"response-format",level:3},{value:"Step 3: Edit the widgets.json File",id:"step-3-edit-the-widgetsjson-file",level:2},{value:"Step 4: Run the Application",id:"step-4-run-the-application",level:2},{value:"Step 5: Add to OpenBB Pro",id:"step-5-add-to-openbb-pro",level:2},{value:"Additional Resources",id:"additional-resources",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"multi-file-viewer-widget",children:"Multi File Viewer Widget"}),"\n",(0,i.jsx)(n.p,{children:"This guide will walk you through the process of creating a multi-file viewer widget for OpenBB Workspace. By the end of this guide, you will have a working multi-file viewer widget that allows users to view and compare multiple files."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Note : For now, this widget only supports PDF files."})}),"\n",(0,i.jsx)(n.h2,{id:"step-1-set-up-your-project",children:"Step 1: Set Up Your Project"}),"\n",(0,i.jsx)(n.p,{children:"To get started, create the main application file and the widget configuration file. You will only need these two files:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"main.py"}),": This file will contain your FastAPI application code."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"widgets.json"}),": This file will define the configuration for your widget."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["The backend will use the same FastAPI setup and structure as described in the ",(0,i.jsx)(n.a,{href:"/workspace/custom-backend/",children:"Custom Backend"})," page."]}),"\n",(0,i.jsx)(n.h2,{id:"step-2-create-the-multi-file-viewer-endpoints",children:"Step 2: Create the Multi-File Viewer Endpoints"}),"\n",(0,i.jsx)(n.p,{children:"The multi-file viewer widget requires two endpoints:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"An endpoint to get the list of available files."}),"\n",(0,i.jsx)(n.li,{children:"An endpoint to view the file content."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Below we will create a simple example of a multi-file viewer widget that allows users to view and compare multiple PDFs."}),"\n",(0,i.jsx)(n.p,{children:"Edit the main.py file and add the following code. This code sets up a FastAPI application with endpoints to serve the widget configuration and data for a multi-file viewer widget:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:'import json\nfrom pathlib import Path\nfrom fastapi import FastAPI, HTTPException, Query\nfrom fastapi.middleware.cors import CORSMiddleware\nfrom fastapi.responses import JSONResponse, FileResponse\nimport base64\n\napp = FastAPI()\n\n# ... existing code ...\n\n\n# You can find these files in the OpenBB GitHub repository in the backend-examples-for-openbb-workspace folder.\n# https://github.com/OpenBB-finance/backend-examples-for-openbb-workspace\n# Sample whitepaper data for the multi-file viewer widget\n# This is a list of dictionaries, each representing a whitepaper\n# Each whitepaper has the following properties:\n# - name: The name of the whitepaper\n# - location: The location of the whitepaper on the server\n# - url: The URL to the whitepaper\n# - category: The type of whitepaper\nwhitepapers = [\n    {\n        "name": "Bitcoin",\n        "location": "bitcoin.pdf",\n        "url": "https://openbb-assets.s3.us-east-1.amazonaws.com/testing/bitcoin.pdf",\n        "category": "l1",\n    },\n    {\n        "name": "Ethereum",\n        "location": "ethereum.pdf",\n        "url": "https://openbb-assets.s3.us-east-1.amazonaws.com/testing/ethereum.pdf",\n        "category": "l1",\n    },\n    {\n        "name": "ChainLink",\n        "location": "chainlink.pdf",\n        "url": "https://openbb-assets.s3.us-east-1.amazonaws.com/testing/chainlink.pdf",\n        "category": "oracles",\n    },\n    {\n        "name": "Solana",\n        "location": "solana.pdf",\n        "url": "https://openbb-assets.s3.us-east-1.amazonaws.com/testing/solana.pdf",\n        "category": "l1",\n    },\n]\n\n# Endpoint to get available whitepapers\n# This endpoint returns a list of whitepapers with their names and category\n# We use the same label and value we do on our dropdown to show the list of files.\n@app.get("/whitepapers")\nasync def get_whitepapers(category: str = Query("all")):\n    if category == "all":\n        return [{"label": wp["name"], "value": wp["name"]} for wp in whitepapers]\n    return [\n        {"label": wp["name"], "value": wp["name"]}\n        for wp in whitepapers\n        if wp["category"] == category\n    ]\n\n# Endpoint to view whitepaper using base64 encoding\n@app.get("/whitepapers/view-base64")\nasync def view_whitepaper_base64(whitepaper: str):\n    wp = next((wp for wp in whitepapers if wp["name"] == whitepaper), None)\n    if not wp:\n        raise HTTPException(status_code=404, detail="Whitepaper not found")\n\n    file_path = Path.cwd() / wp["location"]\n    if not file_path.exists():\n        raise HTTPException(status_code=404, detail="Whitepaper file not found")\n\n    with open(file_path, "rb") as file:\n        base64_content = base64.b64encode(file.read()).decode("utf-8")\n\n    return JSONResponse(\n        content={\n            "headers": {"Content-Type": "application/json"},\n            "data_format": {"data_type": "pdf", "filename": f"{wp[\'name\']}.pdf"},\n            "content": base64_content,\n        }\n    )\n\n# Alternative endpoint to view whitepaper using URL reference \n# This is useful if you are using a cloud storage service like AWS S3 with presigned URLs\n@app.get("/whitepapers/view-url")\nasync def view_whitepaper_url(whitepaper: str):\n    wp = next((wp for wp in whitepapers if wp["name"] == whitepaper), None)\n    if not wp:\n        raise HTTPException(status_code=404, detail="Whitepaper not found")\n\n    # Fetch the presigned url and return it for the `file_reference`.\n    # In the code below, we are simulating the presigned url by returning the url directly.\n    presigned_url = wp["url"]\n\n    file_path = Path.cwd() / wp["location"]\n    if not file_path.exists():\n        raise HTTPException(status_code=404, detail="Whitepaper file not found")\n\n    return JSONResponse(\n        content={\n            "headers": {"Content-Type": "application/json"},\n            "data_format": {"data_type": "pdf", "filename": f"{wp[\'name\']}.pdf"},\n            "file_reference": presigned_url,\n        }\n    )\n'})}),"\n",(0,i.jsx)(n.p,{children:"The multi-file viewer widget supports two methods for serving files:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Base64 Encoding: The file content is encoded in base64 and sent directly in the response."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"URL Reference: A URL to the file is provided, which can be a presigned URL for secure access to files stored in cloud storage."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"response-format",children:"Response Format"}),"\n",(0,i.jsx)(n.p,{children:"The endpoint should return a JSON response with the following structure:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "headers": {"Content-Type": "application/json"},\n  "data_format": {"data_type": "pdf", "filename": "example.pdf"},\n  "content": "base64_encoded_content"  // For base64 method\n  // OR\n  "file_reference": "https://example.com/path/to/file.pdf"  // For URL method\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:'data_format.data_type: The type of file (e.g., "pdf", "csv", "txt")\ndata_format.filename: The name of the file to display\ncontent: Base64-encoded file content (for base64 method)\nfile_reference: URL to the file (for URL method)'}),"\n",(0,i.jsx)(n.h2,{id:"step-3-edit-the-widgetsjson-file",children:"Step 3: Edit the widgets.json File"}),"\n",(0,i.jsxs)(n.p,{children:["The multi-file-viewer widget introduces a new parameter called ",(0,i.jsx)(n.code,{children:"optionsParams"})," which allows you to pass the options to an endpoint from a different parameter."]}),"\n",(0,i.jsxs)(n.p,{children:["In our case we want to pass the options in the ",(0,i.jsx)(n.code,{children:"type"})," parameter to the ",(0,i.jsx)(n.code,{children:"/random/whitepapers"})," endpoint to filter the list of whitepapers."]}),"\n",(0,i.jsx)(n.p,{children:"Edit the widgets.json file and add the following JSON data. This configuration defines the widget's properties and how it should be displayed:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "whitepapers": {\n    "type": "multi_file_viewer",\n    "name": "Whitepapers",\n    "description": "A collection of crypto whitepapers.",\n    "endpoint": "/whitepapers/view-base64",\n    "gridData": {\n      "w": 40,\n      "h": 10\n    },\n    "params": [\n      {\n        "type": "endpoint",\n        "paramName": "whitepaper",\n        "value": "http://localhost:5011/whitepapers",\n        "label": "Whitepaper",\n        "description": "Whitepaper to display.",\n        "optionsEndpoint": "/whitepapers",\n        "show": false,\n        "optionsParams": {\n          "category": "$category"\n        }\n      },\n      {\n        "type": "text",\n        "paramName": "category",\n        "value": "all",\n        "label": "Category",\n        "description": "Category of whitepaper to fetch.",\n        "options": [\n          {\n            "label": "All",\n            "value": "all"\n          },\n          {\n            "label": "L1",\n            "value": "l1"\n          },\n          {\n            "label": "L2",\n            "value": "l2"\n          },\n          {\n            "label": "Oracles",\n            "value": "oracles"\n          },\n          {\n            "label": "Defi",\n            "value": "defi"\n          }\n        ]\n      }\n    ]\n  }\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:"Key configuration elements:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"type"}),': Set to "multi_file_viewer" to use this widget type']}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"endpoint"}),": The endpoint that will return the file content"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"params"}),": Parameters for filtering and selecting files to display"]}),"\n",(0,i.jsxs)(n.li,{children:["The ",(0,i.jsx)(n.code,{children:"whitepaper"})," parameter uses an endpoint to dynamically load options"]}),"\n",(0,i.jsxs)(n.li,{children:["The ",(0,i.jsx)(n.code,{children:"category"})," parameter allows filtering by category"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"For more information on the widgets.json file, see the Widgets.json page."}),"\n",(0,i.jsx)(n.h2,{id:"step-4-run-the-application",children:"Step 4: Run the Application"}),"\n",(0,i.jsx)(n.p,{children:"Start the FastAPI Server using Uvicorn. This will host your backend locally:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"uvicorn main:app --host localhost --port 5050\n"})}),"\n",(0,i.jsx)(n.h2,{id:"step-5-add-to-openbb-pro",children:"Step 5: Add to OpenBB Pro"}),"\n",(0,i.jsxs)(n.p,{children:["Navigate to ",(0,i.jsx)(n.a,{href:"https://pro.openbb.co/app/data-connectors",children:"OpenBB Pro Data Connectors"})," and add your backend by clicking on the ",(0,i.jsx)(n.code,{children:"+ Add Data"})," button in the top right corner. Select ",(0,i.jsx)(n.code,{children:"Custom Backend"})," and fill in the details. Your URL will be ",(0,i.jsx)(n.code,{children:"http://localhost:5050"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Once you have added your backend, you can find the widget in the ",(0,i.jsx)(n.code,{children:"Other"})," category with the name ",(0,i.jsx)(n.code,{children:"Whitepapers"}),"."]}),"\n",(0,i.jsx)("img",{className:"pro-border-gradient",width:"600",alt:"multi-file-viewer",src:"https://openbb-assets.s3.us-east-1.amazonaws.com/docs/pro/multi-file-viewer.png"}),"\n",(0,i.jsx)(n.h2,{id:"additional-resources",children:"Additional Resources"}),"\n",(0,i.jsxs)(n.p,{children:["You can find more examples of how to set up your own backend in the ",(0,i.jsx)(n.a,{href:"https://github.com/OpenBB-finance/backend-examples-for-openbb-workspace",children:"Backend for OpenBB Workspace GitHub"}),"."]})]})}function c(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>r});var i=t(96540);const o={},a=i.createContext(o);function s(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);