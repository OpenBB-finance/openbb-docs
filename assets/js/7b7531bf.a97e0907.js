"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[89748],{44290:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>a,metadata:()=>d,toc:()=>c});var o=t(74848),i=t(28453),r=t(94331);const a={title:"Build New Toolkit Extension",sidebar_position:8,description:"This guide outlines the process for adding a new toolkit extension and router path to the OpenBB Platform.",keywords:["OpenBB Platform","Open source","contribution","contributing","community","toolkit","code","provider","endpoint","router","openbb-provider","openbb-core","how to","new","template"]},s=void 0,d={id:"platform/user_guides/add_toolkit_extension",title:"Build New Toolkit Extension",description:"This guide outlines the process for adding a new toolkit extension and router path to the OpenBB Platform.",source:"@site/content/platform/user_guides/add_toolkit_extension.mdx",sourceDirName:"platform/user_guides",slug:"/platform/user_guides/add_toolkit_extension",permalink:"/platform/user_guides/add_toolkit_extension",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/platform/user_guides/add_toolkit_extension.mdx",tags:[],version:"current",lastUpdatedBy:"Danglewood",lastUpdatedAt:1733763346e3,sidebarPosition:8,frontMatter:{title:"Build New Toolkit Extension",sidebar_position:8,description:"This guide outlines the process for adding a new toolkit extension and router path to the OpenBB Platform.",keywords:["OpenBB Platform","Open source","contribution","contributing","community","toolkit","code","provider","endpoint","router","openbb-provider","openbb-core","how to","new","template"]},sidebar:"tutorialSidebar",previous:{title:"Build New Provider Extension",permalink:"/platform/user_guides/add_data_provider_extension"},next:{title:"Build New OBBject Extension",permalink:"/platform/user_guides/add_obbject_extension"}},l={},c=[{value:"How To Create A Router Extension",id:"how-to-create-a-router-extension",level:2},{value:"Create Folder",id:"create-folder",level:3},{value:"Add Dependencies",id:"add-dependencies",level:3},{value:"Build and Install Package",id:"build-and-install-package",level:2},{value:"Add Router Commands",id:"add-router-commands",level:2}];function p(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.A,{title:"Build New Toolkit Extension - How-To | OpenBB Platform Docs"}),"\n",(0,o.jsxs)(n.p,{children:["Before adding a new toolkit extension and router path to the OpenBB Platform using a supplied template, it is important to understand the difference between a toolkit and a provider extension. You can find more information on this ",(0,o.jsx)(n.a,{href:"/platform/user_guides/extensions",children:"here"}),"."]}),"\n",(0,o.jsx)(n.h2,{id:"how-to-create-a-router-extension",children:"How To Create A Router Extension"}),"\n",(0,o.jsxs)(n.p,{children:["Let's create an extension which defines a new router entry point at the base of the ",(0,o.jsx)(n.code,{children:"obb"})," namespace.\nIt's going to be called, ",(0,o.jsx)(n.code,{children:"openbb-dashboards"}),", and will serve as an empty router for various dashboard packages to populate ",(0,o.jsx)(n.strong,{children:"future"})," endpoints with."]}),"\n",(0,o.jsx)(n.p,{children:"By itself, it might not have any functions. Some other extension will name it as a dependency, using it as an entry point."}),"\n",(0,o.jsxs)(n.p,{children:["We'll use the ",(0,o.jsx)(n.a,{href:"https://github.com/OpenBB-finance/OpenBBTerminal/files/14542427/dashboards.zip",children:"ZIP file"})," template as a starting point, renaming everything as the first step."]}),"\n",(0,o.jsx)(n.h3,{id:"create-folder",children:"Create Folder"}),"\n",(0,o.jsx)(n.p,{children:"The folder does not have to be kept with the OpenBB code, and could be its own GitHub repo.\nFor demonstration purposes, we'll unpack the ZIP file template with the rest of the OpenBB extensions:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-console",children:"~/OpenBBTerminal/openbb_platform/extensions/dashboards\n"})}),"\n",(0,o.jsx)(n.h3,{id:"add-dependencies",children:"Add Dependencies"}),"\n",(0,o.jsxs)(n.p,{children:["This extension will be agnostic as to the type of components that might populate this space in the future - Plotly Dash, Streamlit, etc.\nThe only addition to the dependencies will be ",(0,o.jsx)(n.code,{children:"openbb-charting"}),".\nThis will provide a Plotly charting library and custom backend with PyWry for window creation."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-toml",children:'[tool.poetry]\nname = "openbb-dashboards"\nversion = "1.0.0"\ndescription = "Dashboards Extension for OpenBB"\nauthors = ["OpenBB Team <hello@openbb.co>"]\nreadme = "README.md"\npackages = [{ include = "openbb_dashboards" }]\n\n[tool.poetry.dependencies]\npython = ">=3.8,<3.12"\nopenbb = "^4.1.7"\nopenbb-charting = "^2.0.3"\n\n[build-system]\nrequires = ["poetry-core"]\nbuild-backend = "poetry.core.masonry.api"\n\n[tool.poetry.plugins."openbb_core_extension"]\ndashboards = "openbb_dashboards.dashboards_router:router"\n'})}),"\n",(0,o.jsx)(n.h2,{id:"build-and-install-package",children:"Build and Install Package"}),"\n",(0,o.jsx)(n.p,{children:"Open a Terminal and navigate into the folder where the extension is, then enter:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-console",children:"poetry lock\n\npip install -e .\n"})}),"\n",(0,o.jsx)(n.h2,{id:"add-router-commands",children:"Add Router Commands"}),"\n",(0,o.jsxs)(n.p,{children:["To demonstrate this extension, we'll make a simple function for creating and returning a line chart. This adds one endpoint to the new namespace, ",(0,o.jsx)(n.code,{children:"obb.dashboards.line_chart()"}),"."]}),"\n",(0,o.jsxs)(n.admonition,{type:"tip",children:[(0,o.jsx)(n.p,{children:"After creating a new function, remember to rebuild the Python interface and static assets."}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:"import openbb\nopenbb.build()\nexit()\n"})})]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:'"""Dashboards Router."""\n\n# pylint: disable = unused-argument\n\nfrom typing import List, Optional, Union\n\nfrom openbb_charting import charting_router\nfrom openbb_charting.core.openbb_figure import OpenBBFigure\nfrom openbb_core.app.model.charts.chart import Chart\nfrom openbb_core.app.model.obbject import OBBject\nfrom openbb_core.app.router import Router\nfrom openbb_core.app.utils import basemodel_to_df, df_to_basemodel\nfrom openbb_core.provider.abstract.data import Data\n\nrouter = Router(prefix="")\n\n\n@router.command(\n    methods=["POST"],\n)\ndef line_chart(\n    data: Union[Data, List[Data]],\n    x: Optional[str] = None,\n    y: Optional[Union[str, List[str]]] = None,\n    layout_kwargs: Optional[dict] = None,\n    scatter_kwargs: Optional[dict] = None,\n) -> OBBject:\n    """Create a line chart."""\n    index = "date" if x is None else x\n    df = basemodel_to_df(data, index=index)\n\n    y = y.split(",") if isinstance(y, str) else y\n    if y is None:\n        y = df.columns.to_list()\n\n    if scatter_kwargs is None:\n        scatter_kwargs = {}\n\n    fig = OpenBBFigure(create_backend=True)\n    for col in y:\n        fig = fig.add_scatter(\n            x=df.index,\n            y=df[col],\n            name=col,\n            hovertemplate=\n            "<b>%{fullData.name}</b>: " +\n            "%{y:.2f}" +\n            "<extra></extra>",\n            hoverlabel=dict(font_size=10),\n            **scatter_kwargs,\n        )\n\n    if layout_kwargs is None:\n        layout_kwargs = {}\n\n    fig.update_layout(\n        hovermode="x unified",\n        **layout_kwargs,\n    )\n\n    results = OBBject(results=df_to_basemodel(df))\n\n    results.chart = Chart(\n        fig=fig,\n        content=fig.show(external=True).to_plotly_json(),\n        format=charting_router.CHART_FORMAT\n    )\n\n    return results\n'})}),"\n",(0,o.jsx)(n.p,{children:"An example syntax for use is:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:'data = obb.equity.price.historical("AAPL", provider="yfinance")\nchart = obb.dashboards.line_chart(\n    data.results, y=["high", "low"],\n    scatter_kwargs = {"showlegend": False},\n    layout_kwargs={"template":"plotly_white"}\n)\nchart.show()\n'})}),"\n",(0,o.jsx)(n.p,{children:"This is demonstration is not meant to represent a finished product, only a path to explore while getting started.\nWe hope you enjoy the journey and look forward to seeing what you build!"})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}},94331:(e,n,t)=>{t.d(n,{A:()=>r});t(96540);var o=t(5260),i=t(74848);function r(e){let{title:n}=e;return(0,i.jsx)(o.A,{children:(0,i.jsx)("title",{children:n})})}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>s});var o=t(96540);const i={},r=o.createContext(i);function a(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);