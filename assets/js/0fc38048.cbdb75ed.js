"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[78271],{11398:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var n=o(74848),i=o(28453),s=o(94331);const a={title:"OpenBB Copilot",sidebar_position:8,description:"Learn how to use OpenBB Copilot to interact with the OpenBB Terminal Pro",keywords:["OpenBB Copilot","copilot","voice command","agent","assistant","Natural language processing","Large language model","OpenAI"]},r=void 0,l={id:"pro/openbb-copilot",title:"OpenBB Copilot",description:"Learn how to use OpenBB Copilot to interact with the OpenBB Terminal Pro",source:"@site/content/pro/openbb-copilot.md",sourceDirName:"pro",slug:"/pro/openbb-copilot",permalink:"/pro/openbb-copilot",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/pro/openbb-copilot.md",tags:[],version:"current",lastUpdatedBy:"Andrew",lastUpdatedAt:1725648525e3,sidebarPosition:8,frontMatter:{title:"OpenBB Copilot",sidebar_position:8,description:"Learn how to use OpenBB Copilot to interact with the OpenBB Terminal Pro",keywords:["OpenBB Copilot","copilot","voice command","agent","assistant","Natural language processing","Large language model","OpenAI"]},sidebar:"tutorialSidebar",previous:{title:"Bring your own data",permalink:"/pro/tutorials/bring-data"},next:{title:"Upload Files",permalink:"/pro/upload-files"}},c={},p=[{value:"Getting started",id:"getting-started",level:2},{value:"Understanding chats",id:"understanding-chats",level:2},{value:"General question answering",id:"general-question-answering",level:2},{value:"Using data from the dashboard",id:"using-data-from-the-dashboard",level:2},{value:"Creating widgets from OpenBB Copilot responses",id:"creating-widgets-from-openbb-copilot-responses",level:2},{value:"Querying specific widgets only",id:"querying-specific-widgets-only",level:2},{value:"Querying your own data",id:"querying-your-own-data",level:2},{value:"Querying external data",id:"querying-external-data",level:2},{value:"Generating dashboard titles",id:"generating-dashboard-titles",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",img:"img",li:"li",p:"p",strong:"strong",table:"table",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.A,{title:"Copilot | OpenBB Terminal Pro Docs"}),"\n",(0,n.jsx)(t.p,{children:"OpenBB copilot is your companion to interact with the OpenBB Terminal Pro."}),"\n",(0,n.jsx)(t.h2,{id:"getting-started",children:"Getting started"}),"\n",(0,n.jsx)("img",{src:"https://openbb-assets.s3.amazonaws.com/docs/copilot/open_copilot.jpg",alt:"open openbb copilot",width:"70%",height:"70%"}),"\n",(0,n.jsx)(t.p,{children:"To open OpenBB Copilot, click on the purple icon located at the center right of the\nTerminal Pro screen."}),"\n",(0,n.jsx)(t.p,{children:"Under most circumstances, you can treat OpenBB Copilot like your very own\npersonal research assistant. OpenBB Copilot has access to the widgets on your\ndashboard, the OpenBB API and any custom endpoints you have added, as well as\nyour uploaded files. Using all of these sources, OpenBB Copilot can assist you in\nperforming a wide variety of tasks."}),"\n",(0,n.jsx)("img",{src:"https://openbb-assets.s3.amazonaws.com/docs/copilot/copilot_opened.jpg",alt:"opened openbb copilot",width:"70%",height:"70%"}),"\n",(0,n.jsx)(t.p,{children:"We'll be exploring each of these features in the following sections below."}),"\n",(0,n.jsx)(t.h2,{id:"understanding-chats",children:"Understanding chats"}),"\n",(0,n.jsx)(t.p,{children:"OpenBB Copilot is a chat-based assistant that uses the conversation history to\nhelp answer your queries.  This allows you to ask follow-up questions or guide\nOpenBB Copilot while perform tasks."}),"\n",(0,n.jsx)(t.p,{children:"For example, if you ask about the price-to-earnings (P/E) ratio, and then follow\nup by asking about other important financial ratios, OpenBB Copilot will\nremember the context and suggest relevant ratios:"}),"\n",(0,n.jsx)("img",{src:"https://openbb-assets.s3.amazonaws.com/docs/copilot/pe_ratio_chat_example.jpg",alt:"chat history openbb copilot",width:"40%",height:"40%"}),"\n",(0,n.jsx)(t.p,{children:"If you'd like to clear the history of the current conversation, you can do so by\nclicking on the trashcan icon in the OpenBB Copilot chatbox in the upper right\ncorner. It is usually a good idea to clear the chat history when you have a new\nquestion that is unrelated to your current conversation."}),"\n",(0,n.jsx)(t.h2,{id:"general-question-answering",children:"General question answering"}),"\n",(0,n.jsx)(t.p,{children:"OpenBB Copilot is capable of answering general financial questions and answers.\nFor example, you can ask Copilot things like:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:'"What\'s the difference between stocks and bonds?"'}),"\n",(0,n.jsx)(t.li,{children:'"Explain inflation."'}),"\n",(0,n.jsx)(t.li,{children:'"Can you explain the concept of dollar-cost averaging?"'}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"For general financial questions, OpenBB Copilot will rely on its underlying\nmodel's extensive training data to formulate answers. We encourage users to\nexplore this functionality with in-depth and varied questions."}),"\n",(0,n.jsx)(t.h2,{id:"using-data-from-the-dashboard",children:"Using data from the dashboard"}),"\n",(0,n.jsx)(t.p,{children:"By default, OpenBB Copilot can access the data shown on your currently-active\ndashboard.  This allows OpenBB Copilot to answer questions based on the\ninformation currently visible."}),"\n",(0,n.jsx)(t.p,{children:"For example, if you ask for a summary of the latest news about Apple, OpenBB\nCopilot will retrieve the Company News widget data on your dashboard (provided\nthe widget has been added to the dashboard) to provide an answer."}),"\n",(0,n.jsx)("img",{src:"https://openbb-assets.s3.amazonaws.com/docs/copilot/aapl_+news_chat_example.jpg",alt:"aapl news openbb copilot",width:"80%",height:"80%"}),"\n",(0,n.jsx)(t.p,{children:"When querying OpenBB Copilot, it is important to understand which data OpenBB\nCopilot used to answer your query. As a result, OpenBB Copilot will always cite the data\nsource it referenced when responding to your query."}),"\n",(0,n.jsx)("img",{src:"https://openbb-assets.s3.amazonaws.com/docs/copilot/citation_chat_example.jpg",alt:"citations openbb copilot",width:"80%",height:"80%"}),"\n",(0,n.jsx)(t.p,{children:"Since OpenBB Copilot can access data from any widget in the active dashboard, we\nencourage users to experiment with adding different kinds of widgets and\nexperimenting with various queries."}),"\n",(0,n.jsx)(t.p,{children:'For example, OpenBB Copilot is particularly effective at summarizing earnings call transcripts\nfrom the "Earnings Transcripts" widget.'}),"\n",(0,n.jsx)(t.h2,{id:"creating-widgets-from-openbb-copilot-responses",children:"Creating widgets from OpenBB Copilot responses"}),"\n",(0,n.jsx)(t.p,{children:'Each time OpenBB Copilot generates a response, it will have an "Create widget from text" or "Create widget from table" button. Clicking this button will create a new widget on your dashboard based on the response.'}),"\n",(0,n.jsx)(t.table,{children:(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{style:{textAlign:"center"},children:(0,n.jsx)(t.img,{src:"https://openbb-assets.s3.amazonaws.com/docs/copilot/text_widget_creation_button.jpg",alt:"widget generate button openbb copilot"})}),(0,n.jsx)(t.th,{style:{textAlign:"center"},children:(0,n.jsx)(t.img,{src:"https://openbb-assets.s3.amazonaws.com/docs/copilot/text_widget_creation.jpg",alt:"widget generate button openbb copilot"})}),(0,n.jsx)(t.th,{style:{textAlign:"center"},children:(0,n.jsx)(t.img,{src:"https://openbb-assets.s3.amazonaws.com/docs/copilot/text_widget_created.jpg",alt:"widget generate button openbb copilot"})})]})})}),"\n",(0,n.jsx)(t.table,{children:(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{style:{textAlign:"center"},children:(0,n.jsx)(t.img,{src:"https://openbb-assets.s3.amazonaws.com/docs/copilot/table_widget_creation_button.jpg",alt:"widget generate button openbb copilot"})}),(0,n.jsx)(t.th,{style:{textAlign:"center"},children:(0,n.jsx)(t.img,{src:"https://openbb-assets.s3.amazonaws.com/docs/copilot/table_widget_creation.jpg",alt:"widget generate button openbb copilot"})}),(0,n.jsx)(t.th,{style:{textAlign:"center"},children:(0,n.jsx)(t.img,{src:"https://openbb-assets.s3.amazonaws.com/docs/copilot/table_widget_created.jpg",alt:"widget generate button openbb copilot"})})]})})}),"\n",(0,n.jsx)(t.h2,{id:"querying-specific-widgets-only",children:"Querying specific widgets only"}),"\n",(0,n.jsx)(t.p,{children:"Sometimes, you might want OpenBB Copilot to analyze only specific widgets on your dashboard. For example, if you want to dive deep into an earnings transcript without considering other data, you can do that."}),"\n",(0,n.jsx)(t.p,{children:'To focus on certain widgets, click the "Add widgets as context" button on the widgets you want OpenBB Copilot to use. Once selected, OpenBB Copilot will only access data from those widgets, ignoring all others. This allows you to carry out a more targeted analysis while using OpenBB Copilot as usual.'}),"\n",(0,n.jsx)("img",{src:"https://openbb-assets.s3.amazonaws.com/docs/copilot/add_specific_widget_context.jpg",alt:"add widget context openbb copilot",width:"80%",height:"80%"}),"\n",(0,n.jsx)("img",{src:"https://openbb-assets.s3.amazonaws.com/docs/copilot/aapl_earnings_transcript_chat_example.jpg",alt:"query widget context openbb copilot",width:"80%",height:"80%"}),"\n",(0,n.jsx)(t.h2,{id:"querying-your-own-data",children:"Querying your own data"}),"\n",(0,n.jsx)(t.p,{children:"OpenBB Copilot can also analyze and answer questions using files you provide, such as TXT, PDF, CSV, and XLSX files. To upload a file, simply drag and drop it into the OpenBB Copilot chatbox or click the paper clip icon."}),"\n",(0,n.jsx)(t.p,{children:"Once uploaded, OpenBB Copilot can use the data from these files to answer your questions. If it does, it will cite the specific files (and, for PDFs, the exact page) it referenced."}),"\n",(0,n.jsx)("img",{src:"https://openbb-assets.s3.amazonaws.com/docs/copilot/add_custom_data_chat_example.jpg",alt:"add custom data openbb copilot",width:"80%",height:"80%"}),"\n",(0,n.jsx)("img",{src:"https://openbb-assets.s3.amazonaws.com/docs/copilot/custom_data_chat_example.jpg",alt:"query custom data openbb copilot",width:"80%",height:"80%"}),"\n",(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsxs)(t.p,{children:["OpenBB Copilot uses filenames to determine if a file is relevant to your query. For best results, use descriptive filenames.\nFor example, if you have a technical report from Tesla released in 2024, a good filename would be ",(0,n.jsx)(t.code,{children:"tsla_technical_report_2024.pdf"}),"."]})}),"\n",(0,n.jsx)(t.h2,{id:"querying-external-data",children:"Querying external data"}),"\n",(0,n.jsx)(t.p,{children:"OpenBB Copilot can also access external data sources to provide additional insights. This allows you to ask questions that go beyond the data displayed on your dashboard."}),"\n",(0,n.jsx)(t.p,{children:"External data can either be the OpenBB API or your own custom endpoints."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Querying the OpenBB API"})}),"\n",(0,n.jsx)(t.p,{children:"For example, you can ask OpenBB Copilot to fetch the latest stock price for a specific company, or to provide a summary of the latest news for a particular stock without having to add a widget to your dashboard."}),"\n",(0,n.jsx)("img",{src:"https://openbb-assets.s3.amazonaws.com/docs/copilot/news_openbb_api_chat_example.jpg",alt:"openbb copilot api",width:"50%",height:"50%"}),"\n",(0,n.jsxs)(t.p,{children:["To query a custom endpoint, please explore the ",(0,n.jsx)(t.a,{href:"/pro/custom-backend/custom-backend",children:"Custom Backend"})," documentation."]}),"\n",(0,n.jsx)(t.h2,{id:"generating-dashboard-titles",children:"Generating dashboard titles"}),"\n",(0,n.jsx)(t.p,{children:"OpenBB Copilot can also generate titles for your dashboard based on the present widgets on the dashboard. To do this, on the left side of the screen click the three dots on the dashboard you wish to rename. Then click the purple OpenBB Copilot icon."}),"\n",(0,n.jsx)("img",{src:"https://openbb-assets.s3.amazonaws.com/docs/copilot/dashboard_title.jpg",alt:"openbb copilot dashboard title generation",width:"50%",height:"50%"}),"\n",(0,n.jsx)("img",{src:"https://openbb-assets.s3.amazonaws.com/docs/copilot/dashboard_title_renamed.jpg",alt:"openbb copilot dashboard title generation",width:"50%",height:"50%"})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},94331:(e,t,o)=>{o.d(t,{A:()=>s});o(96540);var n=o(5260),i=o(74848);function s(e){let{title:t}=e;return(0,i.jsx)(n.A,{children:(0,i.jsx)("title",{children:t})})}},28453:(e,t,o)=>{o.d(t,{R:()=>a,x:()=>r});var n=o(96540);const i={},s=n.createContext(i);function a(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);