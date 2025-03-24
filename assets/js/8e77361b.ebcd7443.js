"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[48002],{67314:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var s=n(74848),o=n(28453);const i={title:"FAQs",sidebar_position:16,description:"Frequently asked questions about the OpenBB Workspace Custom Backend.",keywords:["FAQs","Custom Backend"]},r=void 0,a={id:"workspace/custom-backend/faqs",title:"FAQs",description:"Frequently asked questions about the OpenBB Workspace Custom Backend.",source:"@site/content/workspace/custom-backend/faqs.md",sourceDirName:"workspace/custom-backend",slug:"/workspace/custom-backend/faqs",permalink:"/workspace/custom-backend/faqs",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/workspace/custom-backend/faqs.md",tags:[],version:"current",lastUpdatedBy:"Meghan Lopes",lastUpdatedAt:1742856507e3,sidebarPosition:16,frontMatter:{title:"FAQs",sidebar_position:16,description:"Frequently asked questions about the OpenBB Workspace Custom Backend.",keywords:["FAQs","Custom Backend"]},sidebar:"tutorialSidebar",previous:{title:"widgets.json Reference",permalink:"/workspace/custom-backend/widgets-json-reference"},next:{title:"Open Source Platform Integration",permalink:"/workspace/platform-installer"}},d={},c=[{value:"Frequently Asked Questions",id:"frequently-asked-questions",level:2},{value:"General",id:"general",level:3},{value:"Setup and Configuration",id:"setup-and-configuration",level:3},{value:"Widgets and Templates",id:"widgets-and-templates",level:3},{value:"Troubleshooting",id:"troubleshooting",level:3}];function l(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h2,{id:"frequently-asked-questions",children:"Frequently Asked Questions"}),"\n",(0,s.jsx)(t.h3,{id:"general",children:"General"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Q: What is the purpose of a custom backend in OpenBB Workspace?"})}),"\n",(0,s.jsxs)(t.p,{children:["A: A custom backend allows you to integrate your own data sources into OpenBB Workspace, enabling the creation of personalized widgets, dashboards, and templates that display your data in various ways. For more details, see the ",(0,s.jsx)(t.a,{href:"/workspace/custom-backend/",children:"Custom Backend Overview"})," section."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Q: What technologies are required to set up a custom backend?"})}),"\n",(0,s.jsxs)(t.p,{children:["A: You will need to use an API framework and a ",(0,s.jsx)(t.code,{children:"widgets.json"})," file to define widget configurations. Optionally, you can use a ",(0,s.jsx)(t.code,{children:"templates.json"})," file for layout configurations. Refer to the ",(0,s.jsx)(t.a,{href:"/workspace/custom-backend/#setup-requirements",children:"Setup Requirements"})," section for more information."]}),"\n",(0,s.jsx)(t.h3,{id:"setup-and-configuration",children:"Setup and Configuration"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Q: How do I start setting up a custom backend?"})}),"\n",(0,s.jsxs)(t.p,{children:["A: Follow the structure outlined in the ",(0,s.jsx)(t.a,{href:"/workspace/custom-backend/#getting-started-with-custom-backend",children:"Getting Started with Custom Backend"})," section."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsxs)(t.strong,{children:["Q: What is the ",(0,s.jsx)(t.code,{children:"widgets.json"})," file, and why is it important?"]})}),"\n",(0,s.jsxs)(t.p,{children:["A: The ",(0,s.jsx)(t.code,{children:"widgets.json"})," file is a configuration file that connects your custom backend data to the widgets displayed in OpenBB Workspace. It defines widget properties such as name, description, category, endpoint, and more. See the ",(0,s.jsx)(t.a,{href:"/workspace/custom-backend/widgets-json-reference#widgets-configuration",children:"Widgets Configuration"})," section for details."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Q: How do I add Authorization to my custom backend?"})}),"\n",(0,s.jsx)(t.p,{children:"A: We provide an the ability when adding a custom backend to pass a custom Header or Query Parameter to your backend on every request. You can then verify this in your backend and either allow or deny access to the request."}),"\n",(0,s.jsxs)(n,{children:[(0,s.jsx)("summary",{mdxType:"summary",children:"Authorization"}),(0,s.jsx)("div",{style:{display:"flex",justifyContent:"left"},children:(0,s.jsx)("img",{className:"pro-border-gradient",width:"600",alt:"folder",src:"https://openbb-assets.s3.us-east-1.amazonaws.com/docs/pro/authorization.png"})})]}),"\n",(0,s.jsx)(t.h3,{id:"widgets-and-templates",children:"Widgets and Templates"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Q: How can I create a new widget?"})}),"\n",(0,s.jsxs)(t.p,{children:["A: Define the widget in the ",(0,s.jsx)(t.code,{children:"widgets.json"})," file with necessary properties like name, description, category, and endpoint. Then, create an endpoint in your FastAPI application to serve the data for this widget. Check the ",(0,s.jsx)(t.a,{href:"/workspace/custom-backend/widgets-json-reference#creating-widgets",children:"Creating Widgets"})," section for guidance."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Q: Can I customize the appearance of widgets?"})}),"\n",(0,s.jsxs)(t.p,{children:["A: Yes, you can customize widget appearance using properties in the ",(0,s.jsx)(t.code,{children:"widgets.json"})," file, such as ",(0,s.jsx)(t.code,{children:"gridData"})," for size and ",(0,s.jsx)(t.code,{children:"columnsDefs"})," for table widgets. More information is available in the ",(0,s.jsx)(t.a,{href:"/workspace/custom-backend/widgets-json-reference",children:"Customizing Widgets"})," section."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Q: What are templates, and how do I use them?"})}),"\n",(0,s.jsxs)(t.p,{children:["A: Templates allow you to define and manage the layout and behavior of widgets on your dashboard. You can create a ",(0,s.jsx)(t.code,{children:"templates.json"})," file to structure these templates and serve them via a FastAPI endpoint. See the ",(0,s.jsx)(t.a,{href:"/workspace/custom-backend/advanced-controls/templates",children:"Custom Templates"})," section for more details."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Q: How do I implement dynamic dropdown options in widgets?"})}),"\n",(0,s.jsxs)(t.p,{children:["A: Use the ",(0,s.jsx)(t.code,{children:'type: "endpoint"'})," in your parameter configuration and specify an ",(0,s.jsx)(t.code,{children:"optionsEndpoint"})," that returns the available options. See the ",(0,s.jsx)(t.a,{href:"/workspace/custom-backend/advanced-controls/grouping-and-parameters#Passing-custom-dropdown-options",children:"Grouping and Parameters"})," section for implementation details."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Q: Can I group widgets to share parameters?"})}),"\n",(0,s.jsxs)(t.p,{children:["A: Yes, widgets can be grouped by using the same parameter configuration. This allows a single parameter selection to update all related widgets. More information is available in the ",(0,s.jsx)(t.a,{href:"/workspace/custom-backend/advanced-controls/grouping-and-parameters#Grouping",children:"Grouping Widgets"})," section."]}),"\n",(0,s.jsx)(t.h3,{id:"troubleshooting",children:"Troubleshooting"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Q: I can't connect to my backend using Safari/Brave. What should I do?"})}),"\n",(0,s.jsx)(t.p,{children:"A: Ensure your API is running over HTTPS. You may need to create a self-signed certificate and configure your browser to trust it."}),"\n",(0,s.jsxs)(n,{children:[(0,s.jsx)("summary",{mdxType:"summary",children:"Safari/Brave HTTPS Setup"}),(0,s.jsx)(t.p,{children:"OpenBB Platform API Over HTTPS"}),(0,s.jsx)(t.p,{children:"To run the API over the HTTPS protocol, you must first create a self-signed certificate and the associated key. After steps 1 & 2 above, you can generate the files by entering this to the command line:"}),(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sh",children:"openssl req -x509 -days 3650 -out localhost.crt -keyout localhost.key   -newkey rsa:4096 -nodes -sha256   -subj '/CN=localhost' -extensions EXT -config <( \\\n   printf \"[dn]\\nCN=localhost\\n[req]\\ndistinguished_name = dn\\n[EXT]\\nsubjectAltName=DNS:localhost\\nkeyUsage=digitalSignature\\nextendedKeyUsage=serverAuth\")\n"})}),(0,s.jsxs)(t.p,{children:["Two files will be created, in the current working directory, that are passed as keyword arguments to the ",(0,s.jsx)(t.code,{children:"openbb-api"})," entry point."]}),(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sh",children:"openbb-api --ssl_keyfile localhost.key --ssl_certfile localhost.crt\n"})}),(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Note"}),": Adjust the command to include the full path to the file if the current working directory is not where they are located."]}),(0,s.jsxs)(t.p,{children:["The certificate - ",(0,s.jsx)(t.code,{children:"localhost.crt"})," - will need to be added to system's trust store. The process for this will depend on the operating system and the user account privilege."]}),(0,s.jsx)(t.p,{children:"A quick solution is to visit the server's URL, show the details of the warning, and choose to continue anyways."}),(0,s.jsx)(t.p,{children:"Contact the system administrator if you are using a work device and require additional permissions to complete the configuration."}),(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:"https://in.norton.com/content/dam/blogs/images/norton/am/this_connection_not_is_private.png",alt:"This Connection Is Not Private"})})]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Q: My widget data is not refreshing as expected. What could be wrong?"})}),"\n",(0,s.jsxs)(t.p,{children:["A: Check the ",(0,s.jsx)(t.code,{children:"refetchInterval"})," and ",(0,s.jsx)(t.code,{children:"staleTime"})," settings in your ",(0,s.jsx)(t.code,{children:"widgets.json"})," file. Ensure they are set appropriately for your data's update frequency. Refer to the ",(0,s.jsx)(t.a,{href:"/workspace/custom-backend/advanced-controls/widget-settings#Data-Refresh-Settings",children:"Widget Settings"})," section for more information. Or you have set the ",(0,s.jsx)(t.code,{children:"runButton"})," to ",(0,s.jsx)(t.code,{children:"true"})," in the ",(0,s.jsx)(t.code,{children:"widgets.json"})," file which doesn't refresh the data until you click on it. ",(0,s.jsx)(t.a,{href:"/workspace/custom-backend/advanced-controls/widget-settings#Run-Button",children:"Run Button"})]})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>a});var s=n(96540);const o={},i=s.createContext(o);function r(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);