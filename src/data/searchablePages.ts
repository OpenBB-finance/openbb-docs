export interface SearchablePage {
  title: string;
  path: string;
  category: string;
  description?: string;
  keywords?: string[];
}

export const searchablePages: SearchablePage[] = [
  {
    "title": "Agent Rita",
    "path": "/agents/agent-rita",
    "category": "Agents",
    "description": "Run Agent Rita, OpenBB's open source reference agent for Workspace.",
    "keywords": [
      "Agent Rita",
      "OpenBB Workspace",
      "open source agent",
      "custom agents",
      "Workspace agents"
    ]
  },
  {
    "title": "App Builder Resources",
    "path": "/agents/app-builder-resources",
    "category": "Agents",
    "description": "Use Workspace MCP app-builder resources, or install the generated OpenBB app-builder skill, to build custom OpenBB Workspace applications with an AI agent.",
    "keywords": [
      "Workspace MCP Resources",
      "App Builder",
      "OpenBB App Builder",
      "Custom Applications",
      "Widget Configuration",
      "FastAPI Backend",
      "Dashboard Design"
    ]
  },
  {
    "title": "Workspace MCP Overview",
    "path": "/agents/workspace-mcp-overview",
    "category": "Agents",
    "description": "Understand how the OpenBB Workspace MCP exposes a live Workspace browser session to external AI agents.",
    "keywords": [
      "OpenBB Workspace MCP",
      "Model Context Protocol",
      "MCP server",
      "AI agents",
      "Workspace Companion",
      "dashboard automation"
    ]
  },
  {
    "title": "Workspace MCP Quickstart",
    "path": "/agents/workspace-mcp-quickstart",
    "category": "Agents",
    "description": "Create a Workspace MCP token, connect the browser bridge, and attach an external MCP client.",
    "keywords": [
      "OpenBB Workspace MCP",
      "Workspace MCP quickstart",
      "MCP client setup",
      "Workspace Companion",
      "Codex",
      "Claude Code",
      "Cursor"
    ]
  },
  {
    "title": "Workspace MCP Tools",
    "path": "/agents/workspace-mcp-tools",
    "category": "Agents",
    "description": "Reference for the OpenBB Workspace MCP tools, prompts, resources, parameters, and recommended calling patterns.",
    "keywords": [
      "OpenBB Workspace MCP tools",
      "MCP tool reference",
      "Workspace dashboard tools",
      "Workspace widget tools",
      "Workspace backend tools",
      "Workspace apps"
    ]
  },
  {
    "title": "Quick Start",
    "path": "/snowflake/",
    "category": "Documentation",
    "description": "Get started with the OpenBB Snowflake Native App. This guide walks you through installation, configuration, and granting data access.",
    "keywords": [
      "Snowflake Native App",
      "OpenBB",
      "Cortex AI",
      "Snowpark",
      "installation",
      "quick start"
    ]
  },
  {
    "title": "Open Data Platform by OpenBB",
    "path": "/odp/",
    "category": "ODP",
    "description": "Open Data Platform by OpenBB (ODP) is the open-source toolset that helps data engineers to integrate proprietary, licensed, and public data sources into downstream applications like AI copilots and research dashboards.",
    "keywords": [
      "OpenBB",
      "Open Source",
      "Data Platform",
      "Python",
      "CLI",
      "Desktop"
    ]
  },
  {
    "title": "ODP CLI",
    "path": "/odp/cli/",
    "category": "ODP CLI",
    "description": "Command-line client for the OpenBB Platform and any OpenAPI 3.x server, with one-shot dispatch, NDJSON batch mode, an interactive REPL, and extension code generation.\n",
    "keywords": [
      "openbb-cli",
      "openbb",
      "command line",
      "REPL",
      "batch",
      ".spec",
      "OpenAPI"
    ]
  },
  {
    "title": "Authentication",
    "path": "/odp/cli/auth",
    "category": "ODP CLI - Auth",
    "description": "Static headers, query parameters, and importable auth hooks for the HTTP backends, with the AuthContext and AuthDecision contract used for RBAC and per-request credentials.\n",
    "keywords": [
      "openbb-cli auth",
      "AuthContext",
      "AuthDecision",
      "auth-hook",
      "RBAC",
      "headers",
      "query parameters"
    ]
  },
  {
    "title": "Backends",
    "path": "/odp/cli/backends",
    "category": "ODP CLI - Backends",
    "description": "How openbb-cli resolves commands in-process, against an openbb-api or other OpenAPI 3.x server, from a .spec file, and across several specs mounted under namespaces.\n",
    "keywords": [
      "openbb-cli backends",
      "in-process",
      "openbb-api",
      ".spec",
      "OpenAPI",
      "multi-spec"
    ]
  },
  {
    "title": "Codegen",
    "path": "/odp/cli/codegen",
    "category": "ODP CLI - Codegen",
    "description": "Save an OpenAPI document or a Socrata story as a .spec file, and generate an installable OpenBB extension project from a .spec file.\n",
    "keywords": [
      "openbb-cli codegen",
      "--generate-spec",
      "--generate-extension",
      ".spec",
      "--socrata-story",
      "OpenBB extension"
    ]
  },
  {
    "title": "Configuration",
    "path": "/odp/cli/configuration",
    "category": "ODP CLI - Configuration",
    "description": "How openbb-cli combines openbb.toml files, pyproject.toml, .env files, environment variables, and flags, and which keys each source accepts.\n",
    "keywords": [
      "openbb-cli configuration",
      "openbb.toml",
      "OPENBB_CLI_CONFIG",
      ".env",
      "environment variables"
    ]
  },
  {
    "title": "Installation",
    "path": "/odp/cli/installation",
    "category": "ODP CLI - Installation",
    "description": "Install openbb-cli with pip, add the OpenBB extensions that supply commands, and choose the charting and interactive-window extras.\n",
    "keywords": [
      "openbb-cli install",
      "pip",
      "extensions",
      "charting",
      "interactive"
    ]
  },
  {
    "title": "Modes",
    "path": "/odp/cli/modes",
    "category": "ODP CLI - Modes",
    "description": "One-shot dispatch, NDJSON batch, and the interactive REPL, with argument parsing rules, the request and response wire format, and exit codes.\n",
    "keywords": [
      "openbb-cli modes",
      "non-TTY",
      "batch",
      "REPL",
      "NDJSON",
      "exit codes"
    ]
  },
  {
    "title": "Quickstart",
    "path": "/odp/cli/quickstart",
    "category": "ODP CLI - Quickstart",
    "description": "Run one command in-process, through an openbb-api server, and from a .spec file, send a batch over stdin, and open the REPL.\n",
    "keywords": [
      "openbb-cli quickstart",
      "one-shot",
      "batch",
      "interactive",
      ".spec"
    ]
  },
  {
    "title": "CLI flags",
    "path": "/odp/cli/reference/cli-flags",
    "category": "ODP CLI - Reference",
    "description": "Every flag accepted by openbb, with its default, environment variable fallback, and behavior.\n",
    "keywords": [
      "openbb-cli flags",
      "--server",
      "--spec",
      "--batch",
      "--generate-extension"
    ]
  },
  {
    "title": "Advanced Routines",
    "path": "/odp/cli/repl/routines/advanced-routines",
    "category": "ODP CLI - Repl",
    "description": "Parameterize ODP CLI routines with input arguments, variables, relative date keywords, and foreach loops.\n",
    "keywords": [
      "openbb-cli routines",
      "$ARGV",
      "variables",
      "relative dates",
      "foreach",
      "loops"
    ]
  },
  {
    "title": "Commands and Arguments",
    "path": "/odp/cli/repl/commands-and-arguments",
    "category": "ODP CLI - Repl",
    "description": "Reading command help, passing parameters, the flags the REPL adds to every data command, and tab completion and history in the ODP CLI REPL.\n",
    "keywords": [
      "openbb-cli REPL",
      "command help",
      "parameters",
      "flags",
      "auto-complete",
      "history"
    ]
  },
  {
    "title": "Data Sources",
    "path": "/odp/cli/repl/data-sources",
    "category": "ODP CLI - Repl",
    "description": "How providers map to menus in the ODP CLI REPL, when --provider matters, and where provider credentials and default parameters come from.\n",
    "keywords": [
      "openbb-cli REPL",
      "provider",
      "credentials",
      "API keys",
      "user_settings.json",
      "defaults"
    ]
  },
  {
    "title": "Interactive Charts",
    "path": "/odp/cli/repl/interactive-charts",
    "category": "ODP CLI - Repl",
    "description": "Drawing charts in the ODP CLI REPL with --chart and results --chart, what the chart window offers, and what the charting and interactive extras add.\n",
    "keywords": [
      "openbb-cli REPL",
      "interactive charts",
      "--chart",
      "openbb-charting",
      "PyWry",
      "Plotly"
    ]
  },
  {
    "title": "Interactive Tables",
    "path": "/odp/cli/repl/interactive-tables",
    "category": "ODP CLI - Repl",
    "description": "How the ODP CLI REPL displays results in each output mode, when tables open in a PyWry window, and how to filter a table with the Pandas Query toolbar.\n",
    "keywords": [
      "openbb-cli REPL",
      "interactive tables",
      "output mode",
      "PyWry",
      "pandas query"
    ]
  },
  {
    "title": "Introduction to Routines",
    "path": "/odp/cli/repl/routines/introduction-to-routines",
    "category": "ODP CLI - Repl",
    "description": "The .openbb routine format, how the REPL turns a routine into one sequence of steps, and how to run a routine with exe.\n",
    "keywords": [
      "openbb-cli routines",
      ".openbb",
      "exe",
      "automation",
      "REPL scripts"
    ]
  },
  {
    "title": "OpenBBUserData Folder",
    "path": "/odp/cli/repl/openbbuserdata",
    "category": "ODP CLI - Repl",
    "description": "Where the ODP CLI REPL reads and writes files: the OpenBBUserData folders set in the OpenBB user preferences, and the CLI's own files in ~/.openbb_platform.\n",
    "keywords": [
      "OpenBBUserData folder",
      "data directory",
      "export directory",
      "routines",
      "user_settings.json",
      ".cli.env"
    ]
  },
  {
    "title": "Results Registry",
    "path": "/odp/cli/repl/results",
    "category": "ODP CLI - Repl",
    "description": "How the ODP CLI REPL caches command results, how to reuse them as input, load files into the cache, and reshape or save cached tables in the /feature menu.\n",
    "keywords": [
      "openbb-cli REPL",
      "results",
      "OBBject registry",
      "--data OBB0",
      "load",
      "feature"
    ]
  },
  {
    "title": "Routine Macro Recorder",
    "path": "/odp/cli/repl/routines/routine-macro-recorder",
    "category": "ODP CLI - Repl",
    "description": "Record the steps of a live ODP CLI REPL session into a .openbb routine with record and stop, and where the recorded file is saved.\n",
    "keywords": [
      "openbb-cli routines",
      "macro recorder",
      "record",
      "stop",
      ".openbb"
    ]
  },
  {
    "title": "Routines",
    "path": "/odp/cli/repl/routines/",
    "category": "ODP CLI - Repl",
    "description": "Script ODP CLI REPL sessions as .openbb routine files, record them from a live session, and parameterize them with inputs, variables, dates, and loops.\n",
    "keywords": [
      "openbb-cli routines",
      ".openbb",
      "exe",
      "record",
      "automation"
    ]
  },
  {
    "title": "Structure and Navigation",
    "path": "/odp/cli/repl/structure-and-navigation",
    "category": "ODP CLI - Repl",
    "description": "How the ODP CLI REPL is organized into menus and commands, how to move between them with relative and absolute paths, and which commands work everywhere.\n",
    "keywords": [
      "openbb-cli REPL",
      "menus",
      "navigation",
      "absolute paths",
      "global commands",
      "home"
    ]
  },
  {
    "title": "Settings",
    "path": "/odp/cli/settings",
    "category": "ODP CLI - Settings",
    "description": "REPL display and behavior settings, where they are stored, how to change them from the /settings menu, and what each one does.\n",
    "keywords": [
      "openbb-cli settings",
      "/settings",
      ".cli.env",
      "output mode",
      "feature flags",
      "preferences"
    ]
  },
  {
    "title": "Introduction",
    "path": "/odp/desktop/",
    "category": "ODP Desktop",
    "description": "An overview of the Open Data Platform desktop application for creating and managing local environments and backend servers.",
    "keywords": [
      "ODP",
      "Open Data Platform by OpenBB",
      "OpenBB Platform",
      "GUI",
      "Local Development",
      "Backends",
      "Environments",
      "API Keys",
      "Desktop Application"
    ]
  },
  {
    "title": "API Keys",
    "path": "/odp/desktop/api-keys",
    "category": "ODP Desktop - Api Keys",
    "description": "Manage and store API credentials for data providers securely within the ODP Desktop App.",
    "keywords": [
      "API Keys",
      "Credentials",
      "Configuration",
      ".env",
      "Environment",
      "user_settings.json",
      "system_settings.json"
    ]
  },
  {
    "title": "Backends",
    "path": "/odp/desktop/backends",
    "category": "ODP Desktop - Backends",
    "description": "Run and manage background processes like the OpenBB API server, data streaming pipelines, or custom Python scripts directly within the OpenBB GUI.",
    "keywords": [
      "Backends",
      "API Server",
      "Background Processes",
      "Micro-services",
      "Data Pipelines",
      "Local Development",
      "Certificate",
      "SSL",
      "CA",
      "HTTPS",
      "Encryption",
      "X.509"
    ]
  },
  {
    "title": "Environments",
    "path": "/odp/desktop/environments",
    "category": "ODP Desktop - Environments",
    "description": "Create and manage isolated Conda environments for your Python projects. Install packages, manage dependencies, and launch development tools like JupyterLab, all from the OpenBB GUI.",
    "keywords": [
      "Environments",
      "Conda",
      "Python",
      "Package Management",
      "Jupyter",
      "Isolated Development",
      "Virtual Environments"
    ]
  },
  {
    "title": "Installation",
    "path": "/odp/desktop/installation",
    "category": "ODP Desktop - Installation",
    "description": "This page presents the general system requirements and installation instructions for the Open Data Platform (ODP) desktop application.",
    "keywords": [
      "ODP",
      "OpenBB Platform",
      "Python",
      "Requirements",
      "Installation",
      "Virtual Environment",
      "Windows",
      "macOS",
      "Jupyter",
      "Conda",
      "API",
      "PyPI",
      "MCP",
      "Node.js",
      "npm"
    ]
  },
  {
    "title": "Troubleshooting",
    "path": "/odp/desktop/troubleshooting",
    "category": "ODP Desktop - Troubleshooting",
    "description": "This page covers potential problems that might be encountered while using the ODP Desktop application.",
    "keywords": [
      "Troubleshooting",
      "Error",
      "Warning",
      "Bug",
      "Exception",
      "FAQ",
      "not working"
    ]
  },
  {
    "title": "Uninstall",
    "path": "/odp/desktop/uninstall",
    "category": "ODP Desktop - Uninstall",
    "description": "Uninstall the Open Data Platform application.",
    "keywords": [
      "Uninstall",
      "Remove",
      "Delete"
    ]
  },
  {
    "title": "OpenBB Python (V5)",
    "path": "/odp/python/",
    "category": "ODP Python",
    "description": "OpenBB Python V5 documentation: installation, quickstarts, settings, user guides, concepts, extension development, the API reference, and migration from V4.\n",
    "keywords": [
      "ODP",
      "OpenBB Python",
      "openbb-core",
      "V5",
      "obb",
      "openbb",
      "about"
    ]
  },
  {
    "title": "Architecture",
    "path": "/odp/python/concepts/architecture",
    "category": "ODP Python - Concepts",
    "description": "How openbb-core turns installed extensions into the Python Interface and the REST API, and how a command call moves through routers, providers, and the OBBject envelope.\n",
    "keywords": [
      "openbb-core architecture",
      "Python Interface",
      "REST API",
      "Router",
      "Provider",
      "Fetcher",
      "TET pattern",
      "entry points"
    ]
  },
  {
    "title": "Concepts",
    "path": "/odp/python/concepts/",
    "category": "ODP Python - Concepts",
    "description": "How openbb-core is put together: the two interfaces, the OBBject envelope, extension types, streaming, and the generated Python package.\n",
    "keywords": [
      "openbb-core",
      "concepts",
      "architecture",
      "OBBject",
      "extensions"
    ]
  },
  {
    "title": "Extension types",
    "path": "/odp/python/concepts/extensions",
    "category": "ODP Python - Concepts",
    "description": "The four kinds of openbb-core extensions (router, provider, OBBject, and charting), the entry-point group each ships under, and what the entry point must resolve to.\n",
    "keywords": [
      "extensions",
      "openbb_core_extension",
      "openbb_provider_extension",
      "openbb_obbject_extension",
      "openbb_charting_extension",
      "Router",
      "Provider",
      "Fetcher",
      "Extension",
      "views"
    ]
  },
  {
    "title": "Packaging and static assets",
    "path": "/odp/python/concepts/packaging",
    "category": "ODP Python - Concepts",
    "description": "How the openbb Python package is generated from installed extensions, when it rebuilds on its own, and when to run openbb-build.\n",
    "keywords": [
      "openbb-build",
      "openbb.build",
      "static assets",
      "OPENBB_AUTO_BUILD",
      "reference.json"
    ]
  },
  {
    "title": "Streaming responses",
    "path": "/odp/python/concepts/streaming",
    "category": "ODP Python - Concepts",
    "description": "Streaming commands yield typed rows from a provider's async iterator. The Python Interface returns an OBBStream handle and the REST API returns a text/event-stream response.\n",
    "keywords": [
      "OBBStream",
      "streaming",
      "AsyncIterator",
      "stream_data",
      "StreamingResponse",
      "text/event-stream",
      "websockets"
    ]
  },
  {
    "title": "The OBBject envelope",
    "path": "/odp/python/concepts/obbject",
    "category": "ODP Python - Concepts",
    "description": "OBBject is the return type used across openbb-core. Its fields, conversion methods, and how the output_type preference applies them.\n",
    "keywords": [
      "OBBject",
      "to_dataframe",
      "to_polars",
      "to_numpy",
      "to_dict",
      "to_llm",
      "show",
      "output_type"
    ]
  },
  {
    "title": "index",
    "path": "/odp/python/data_models/",
    "category": "ODP Python - Data_models",
    "description": "",
    "keywords": []
  },
  {
    "title": "Annotated Results",
    "path": "/odp/python/developer/how-to/annotated_results",
    "category": "ODP Python - Developer",
    "description": "Return citations, dataset descriptions, or other metadata from a fetcher alongside its results with AnnotatedResult.",
    "keywords": [
      "OpenBB V5",
      "AnnotatedResult",
      "results_metadata",
      "metadata",
      "citation",
      "provider",
      "Fetcher",
      "transform_data"
    ]
  },
  {
    "title": "Charting Extensions",
    "path": "/odp/python/developer/extension_types/charting",
    "category": "ODP Python - Developer",
    "description": "Add chart views to router commands so that calling them with chart=True attaches a chart to the OBBject, in Python and over REST.",
    "keywords": [
      "ODP",
      "OpenBB V5",
      "charting",
      "openbb-charting",
      "openbb_charting_extension",
      "views",
      "OpenBBFigure",
      "Plotly",
      "ChartingHook",
      "how-to"
    ]
  },
  {
    "title": "Country Input",
    "path": "/odp/python/developer/how-to/country_input",
    "category": "ODP Python - Developer",
    "description": "Accept country names, ISO 3166 codes, or snake_case names in a provider's parameters and normalize them with the Country type.",
    "keywords": [
      "OpenBB V5",
      "country",
      "ISO 3166",
      "Country",
      "QueryParams",
      "input validation",
      "develop"
    ]
  },
  {
    "title": "Deprecating Endpoints",
    "path": "/odp/python/developer/how-to/deprecating_endpoints",
    "category": "ODP Python - Developer",
    "description": "Mark a router command as deprecated with OpenBBDeprecationWarning so Python callers get a warning and the OpenAPI schema flags the route.",
    "keywords": [
      "OpenBB V5",
      "deprecation",
      "deprecated",
      "OpenBBDeprecationWarning",
      "router.command",
      "endpoint"
    ]
  },
  {
    "title": "Developer",
    "path": "/odp/python/developer/",
    "category": "ODP Python - Developer",
    "description": "Build extensions for openbb-core in V5, with guides for providers, routers, OBBject extensions, charting views, and common implementation tasks.",
    "keywords": [
      "ODP",
      "OpenBB V5",
      "develop",
      "extension",
      "provider",
      "router",
      "Fetcher",
      "how-to"
    ]
  },
  {
    "title": "Disabling Output Validation",
    "path": "/odp/python/developer/how-to/disabling_output_validation",
    "category": "ODP Python - Developer",
    "description": "Turn off response validation for a router command with no_validate=True, and what changes in the REST API and the Python Interface.",
    "keywords": [
      "OpenBB V5",
      "no_validate",
      "validation",
      "router.command",
      "response model",
      "Pydantic",
      "FastAPI"
    ]
  },
  {
    "title": "Dynamic Command Execution",
    "path": "/odp/python/developer/how-to/dynamic_command_execution",
    "category": "ODP Python - Developer",
    "description": "Run OpenBB commands by route with CommandRunner, without the generated obb package, for services and tools that choose commands at runtime.",
    "keywords": [
      "OpenBB V5",
      "CommandRunner",
      "dynamic execution",
      "route",
      "provider_choices",
      "standard_params",
      "extra_params"
    ]
  },
  {
    "title": "Exchange Input",
    "path": "/odp/python/developer/how-to/exchange_input",
    "category": "ODP Python - Developer",
    "description": "Accept exchange MICs, acronyms, or names in a provider's parameters and normalize them to ISO 10383 codes with the Exchange type.",
    "keywords": [
      "OpenBB V5",
      "exchange",
      "MIC",
      "ISO 10383",
      "Exchange",
      "QueryParams",
      "input validation",
      "develop"
    ]
  },
  {
    "title": "Extension Types",
    "path": "/odp/python/developer/extension_types/",
    "category": "ODP Python - Developer",
    "description": "Guides for each kind of OpenBB extension and how to scaffold a new extension project with openbb-cookiecutter.",
    "keywords": [
      "ODP",
      "OpenBB V5",
      "extension",
      "provider",
      "router",
      "OBBject",
      "charting",
      "openbb-cookiecutter"
    ]
  },
  {
    "title": "From FastAPI",
    "path": "/odp/python/developer/extension_types/from_fastapi",
    "category": "ODP Python - Developer",
    "description": "Register an existing FastAPI app or APIRouter as an OpenBB router extension, and what changes when its routes run in the Python Interface.",
    "keywords": [
      "ODP",
      "OpenBB V5",
      "FastAPI",
      "APIRouter",
      "Flask",
      "openbb_core_extension",
      "router",
      "how-to"
    ]
  },
  {
    "title": "Function Examples",
    "path": "/odp/python/developer/how-to/examples",
    "category": "ODP Python - Developer",
    "description": "Add APIEx and PythonEx usage examples to router commands for generated docstrings, the OpenAPI schema, and the reference docs.",
    "keywords": [
      "OpenBB V5",
      "APIEx",
      "PythonEx",
      "examples",
      "docstring",
      "router.command",
      "OpenAPI"
    ]
  },
  {
    "title": "How-To Guides",
    "path": "/odp/python/developer/how-to/",
    "category": "ODP Python - Developer",
    "description": "Focused guides for common tasks when building OpenBB extensions, from HTTP requests and input types to examples, deprecations, and tests.",
    "keywords": [
      "ODP",
      "OpenBB V5",
      "develop",
      "extension",
      "provider",
      "router",
      "how-to",
      "guide"
    ]
  },
  {
    "title": "HTTP Requests",
    "path": "/odp/python/developer/how-to/http_requests",
    "category": "ODP Python - Developer",
    "description": "Make synchronous and asynchronous HTTP requests in fetchers with the openbb-core helpers, which apply the user's proxy, certificate, and timeout settings.",
    "keywords": [
      "OpenBB V5",
      "HTTP",
      "requests",
      "aiohttp",
      "amake_request",
      "amake_requests",
      "make_request",
      "get_querystring",
      "proxy",
      "provider"
    ]
  },
  {
    "title": "OBBject Extensions",
    "path": "/odp/python/developer/extension_types/obbject",
    "category": "ODP Python - Developer",
    "description": "Add accessor methods and properties to every OBBject returned by the Python Interface with an OBBject extension.",
    "keywords": [
      "ODP",
      "OpenBB V5",
      "OBBject",
      "Extension",
      "obbject_accessor",
      "accessor",
      "openbb_obbject_extension",
      "how-to"
    ]
  },
  {
    "title": "OBBject Plugins",
    "path": "/odp/python/developer/extension_types/plugins",
    "category": "ODP Python - Developer",
    "description": "Run callbacks on command output before it is returned, on both the Python Interface and the REST API, with on_command_output extensions.",
    "keywords": [
      "ODP",
      "OpenBB V5",
      "OBBject",
      "plugin",
      "callback",
      "on_command_output",
      "allow_on_command_output",
      "allow_mutable_extensions",
      "how-to"
    ]
  },
  {
    "title": "Provider Extensions",
    "path": "/odp/python/developer/extension_types/provider",
    "category": "ODP Python - Developer",
    "description": "Build a provider extension with QueryParams, Data, and Fetcher classes, register it, and expose it under its own obb namespace.",
    "keywords": [
      "ODP",
      "OpenBB V5",
      "provider",
      "Fetcher",
      "QueryParams",
      "Data",
      "TET pattern",
      "fetcher_dict",
      "credentials",
      "how-to"
    ]
  },
  {
    "title": "Router Extensions",
    "path": "/odp/python/developer/extension_types/router",
    "category": "ODP Python - Developer",
    "description": "Add commands to obb and routes to the REST API with a router extension, including GET and POST commands, sub-routers, and @router.command options.",
    "keywords": [
      "ODP",
      "OpenBB V5",
      "Router",
      "router.command",
      "API",
      "MCP",
      "OBBject",
      "sub-router",
      "how-to"
    ]
  },
  {
    "title": "Standardization",
    "path": "/odp/python/developer/standardization",
    "category": "ODP Python - Developer",
    "description": "How standard models, provider-specific models, and field conventions give every OpenBB command consistent parameters and output across providers.",
    "keywords": [
      "ODP",
      "OpenBB V5",
      "standardization",
      "standard models",
      "QueryParams",
      "Data",
      "__alias_dict__",
      "__json_schema_extra__",
      "provider"
    ]
  },
  {
    "title": "Tests",
    "path": "/odp/python/developer/how-to/tests",
    "category": "ODP Python - Developer",
    "description": "Test OpenBB fetchers with Fetcher.test, record HTTP cassettes with pytest-recorder, and generate unit and integration tests in the OpenBB repository.",
    "keywords": [
      "OpenBB V5",
      "tests",
      "pytest",
      "pytest-recorder",
      "record_http",
      "vcr",
      "Fetcher.test",
      "integration tests",
      "openbb-devtools"
    ]
  },
  {
    "title": "Validators",
    "path": "/odp/python/developer/how-to/validators",
    "category": "ODP Python - Developer",
    "description": "Use Pydantic field and model validators in QueryParams and Data models to parse dates, normalize percents, set dynamic defaults, and clean source values.",
    "keywords": [
      "OpenBB V5",
      "Pydantic",
      "field_validator",
      "model_validator",
      "QueryParams",
      "Data",
      "Fetcher",
      "validation"
    ]
  },
  {
    "title": "Introduction",
    "path": "/odp/python/extensions/",
    "category": "ODP Python - Extensions",
    "description": "The Python packages that make up an OpenBB V5 environment, grouped by role.",
    "keywords": [
      "ODP",
      "Python Package",
      "Extension",
      "Provider",
      "Router",
      "Charting",
      "Data Processing",
      "News"
    ]
  },
  {
    "title": "openbb-api",
    "path": "/odp/python/extensions/interface/openbb-api",
    "category": "ODP Python - Extensions",
    "description": "Reference for openbb-platform-api V5: the openbb-api launcher, its flags and openbb.toml tables, .spec proxy mode, and how widgets.json is generated from FastAPI routes.\n",
    "keywords": [
      "openbb-api",
      "openbb-platform-api",
      "widgets.json",
      "apps.json",
      "agents.json",
      "OpenBB Workspace",
      "custom backend",
      "FastAPI",
      "openbb.toml",
      ".spec",
      "proxy",
      "middleware"
    ]
  },
  {
    "title": "openbb-charting",
    "path": "/odp/python/extensions/infrastructure/openbb-charting/",
    "category": "ODP Python - Extensions",
    "description": "The openbb-charting extension - the charting accessor on OBBject, the chart parameter on commands with a chart view, Plotly chart builders, and interactive tables.",
    "keywords": [
      "charts",
      "charting",
      "Plotly",
      "OpenBBFigure",
      "PyWry",
      "OBBject",
      "chart views",
      "tables"
    ]
  },
  {
    "title": "openbb-core",
    "path": "/odp/python/extensions/openbb-core",
    "category": "ODP Python - Extensions",
    "description": "The openbb-core package - the runtime that discovers installed extensions and exposes them as the obb Python client and a REST API.",
    "keywords": [
      "openbb-core",
      "openbb-build",
      "entry points",
      "Router",
      "Provider",
      "OBBject",
      "FastAPI",
      "Pydantic"
    ]
  },
  {
    "title": "openbb-econometrics",
    "path": "/odp/python/extensions/data-processing/econometrics",
    "category": "ODP Python - Extensions",
    "description": "The openbb-econometrics extension - OLS regression and diagnostics, stationarity and cointegration tests, Granger causality, GARCH-family volatility models, and panel estimators.",
    "keywords": [
      "econometrics",
      "OLS",
      "regression diagnostics",
      "unit root",
      "KPSS",
      "cointegration",
      "Granger causality",
      "GARCH",
      "panel data",
      "statsmodels",
      "linearmodels",
      "arch"
    ]
  },
  {
    "title": "openbb-mcp",
    "path": "/odp/python/extensions/interface/openbb-mcp",
    "category": "ODP Python - Extensions",
    "description": "Reference for openbb-mcp-server V5: the openbb-mcp launcher, settings, openbb.toml tables, authentication, tool discovery, prompts, skills, per-route mcp_config, and .spec proxy mode.\n",
    "keywords": [
      "openbb-mcp",
      "openbb-mcp-server",
      "MCP",
      "Model Context Protocol",
      "FastMCP",
      "mcp_settings.json",
      "openbb.toml",
      "tool discovery",
      "prompts",
      "skills",
      "mcp_config",
      ".spec"
    ]
  },
  {
    "title": "openbb-news",
    "path": "/odp/python/extensions/openbb-news",
    "category": "ODP Python - Extensions",
    "description": "The openbb-news extension - an RSS and Atom reader with 562 bundled feeds, configurable in openbb.toml, plus company news from installed providers.",
    "keywords": [
      "news",
      "RSS",
      "Atom",
      "feeds",
      "openbb.toml",
      "company news",
      "Workspace newsfeed"
    ]
  },
  {
    "title": "openbb-quantitative",
    "path": "/odp/python/extensions/data-processing/quantitative",
    "category": "ODP Python - Extensions",
    "description": "The openbb-quantitative extension - descriptive and rolling statistics, performance ratios, CAPM, and multi-factor regression, attribution, and risk decomposition with chart views.",
    "keywords": [
      "quantitative",
      "statistics",
      "rolling",
      "Sharpe ratio",
      "Sortino ratio",
      "Omega ratio",
      "CAPM",
      "factor regression",
      "factor exposure",
      "risk decomposition",
      "return attribution",
      "Fama-French"
    ]
  },
  {
    "title": "openbb-technical",
    "path": "/odp/python/extensions/data-processing/technical",
    "category": "ODP Python - Extensions",
    "description": "The openbb-technical extension - 59 commands covering overlays, oscillators, trend, volume, volatility, structure, and statistics indicators, event signals, and multi-symbol analysis.",
    "keywords": [
      "technical analysis",
      "indicators",
      "signals",
      "RSI",
      "MACD",
      "Bollinger Bands",
      "realized volatility",
      "relative rotation",
      "correlation",
      "screen",
      "pandas-ta"
    ]
  },
  {
    "title": "Providers",
    "path": "/odp/python/extensions/providers/",
    "category": "ODP Python - Extensions",
    "description": "The V5 data provider packages, the namespace each one registers, and the credentials each one reads.",
    "keywords": [
      "provider",
      "data source",
      "namespace",
      "credentials",
      "API key",
      "extension",
      "pip install"
    ]
  },
  {
    "title": "Technical Indicators",
    "path": "/odp/python/extensions/infrastructure/openbb-charting/indicators",
    "category": "ODP Python - Extensions",
    "description": "Drawing technical indicator overlays and subplots on openbb-charting price charts, and registering a price chart view for a V5 command.",
    "keywords": [
      "charting",
      "indicators",
      "technical analysis",
      "candlestick",
      "Heikin Ashi",
      "chart view",
      "Plotly",
      "OpenBBFigure"
    ]
  },
  {
    "title": "Data and Data Providers",
    "path": "/odp/python/faqs/data_providers",
    "category": "ODP Python - Faqs",
    "description": "Frequently asked questions about V5 data providers, namespaces, credentials, and missing commands.",
    "keywords": [
      "provider",
      "data",
      "source",
      "namespace",
      "API key",
      "credentials",
      "coverage"
    ]
  },
  {
    "title": "Errors",
    "path": "/odp/python/faqs/errors",
    "category": "ODP Python - Faqs",
    "description": "Common OpenBB Python V5 error messages, their REST API status codes, and how to resolve them.",
    "keywords": [
      "error",
      "OpenBBError",
      "EmptyDataError",
      "UnauthorizedError",
      "missing credential",
      "provider",
      "debug mode",
      "openbb-build"
    ]
  },
  {
    "title": "License",
    "path": "/odp/python/faqs/license",
    "category": "ODP Python - Faqs",
    "description": "How Open Data Platform V5 is licensed under Apache-2.0, what changed from the AGPL-licensed V4, and how the license applies to extensions and provider data.",
    "keywords": [
      "license",
      "Apache-2.0",
      "Apache License 2.0",
      "AGPL",
      "open source",
      "commercial use"
    ]
  },
  {
    "title": "Installation",
    "path": "/odp/python/installation",
    "category": "ODP Python - Installation",
    "description": "Install OpenBB Python V5 from PyPI as openbb-core plus the provider and interface packages you need, or from source with dev_install.py.\n",
    "keywords": [
      "installation",
      "openbb-core",
      "provider packages",
      "PyPI",
      "pip",
      "uv",
      "dev_install.py",
      "source install",
      "openbb-build",
      "virtual environment"
    ]
  },
  {
    "title": "Migration from V4",
    "path": "/odp/python/migration-from-v4",
    "category": "ODP Python - Migration From V4",
    "description": "What to change when moving code, configuration, and deployments from OpenBB V4 to V5: license, removed providers, provider-owned namespaces, openbb.toml, packaging, the CLI, the REST API, and the API and MCP launchers.\n",
    "keywords": [
      "V4 to V5",
      "migration",
      "breaking changes",
      "provider namespaces",
      "openbb.toml",
      "hatchling",
      "uv",
      "dev_install.py",
      "Apache-2.0",
      "openbb-cli",
      "REST API",
      "openbb-api",
      "openbb-mcp"
    ]
  },
  {
    "title": "MCP Server",
    "path": "/odp/python/quickstart/mcp",
    "category": "ODP Python - Quickstart",
    "description": "Serve the installed OpenBB Python V5 commands as Model Context Protocol tools with openbb-mcp, and connect Claude Desktop, Cursor, VS Code, or OpenBB Workspace.\n",
    "keywords": [
      "MCP",
      "Model Context Protocol",
      "openbb-mcp",
      "openbb-mcp-server",
      "tool discovery",
      "streamable-http",
      "stdio",
      "openbb.toml"
    ]
  },
  {
    "title": "Quick start",
    "path": "/odp/python/quickstart/",
    "category": "ODP Python - Quickstart",
    "description": "Pick a starting point for OpenBB Python V5: calling commands from Python, writing an extension, serving the REST API, running the MCP server, or connecting OpenBB Workspace.\n",
    "keywords": [
      "quickstart",
      "getting started",
      "from openbb import obb",
      "REST API",
      "MCP",
      "Workspace",
      "openbb-core"
    ]
  },
  {
    "title": "Quick start — Developer",
    "path": "/odp/python/quickstart/developer",
    "category": "ODP Python - Quickstart",
    "description": "Register a FastAPI APIRouter as an openbb_core_extension and call it as a method on obb and as a REST endpoint.\n",
    "keywords": [
      "quickstart",
      "developer",
      "FastAPI",
      "APIRouter",
      "openbb_core_extension",
      "openbb-build"
    ]
  },
  {
    "title": "Quick start — User",
    "path": "/odp/python/quickstart/user",
    "category": "ODP Python - Quickstart",
    "description": "Install a provider, set its API key, and make a first call with from openbb import obb.\n",
    "keywords": [
      "quickstart",
      "user",
      "from openbb import obb",
      "obb",
      "credentials",
      "FRED",
      "fred_api_key"
    ]
  },
  {
    "title": "REST API",
    "path": "/odp/python/quickstart/rest_api",
    "category": "ODP Python - Quickstart",
    "description": "Serve the installed OpenBB Python V5 commands as a FastAPI REST API with openbb-api or any ASGI server, then add authentication, CORS, and HTTPS.\n",
    "keywords": [
      "REST API",
      "FastAPI",
      "openbb-api",
      "uvicorn",
      "openbb_core.api.rest_api",
      "Basic Auth",
      "CORS",
      "HTTPS",
      "openbb.toml"
    ]
  },
  {
    "title": "Workspace Integration",
    "path": "/odp/python/quickstart/workspace",
    "category": "ODP Python - Quickstart",
    "description": "Connect OpenBB Python V5 to OpenBB Workspace as a custom backend with openbb-api, using the installed providers, your own FastAPI app, or a .spec file that proxies a remote deployment.\n",
    "keywords": [
      "OpenBB Workspace",
      "custom backend",
      "openbb-api",
      "openbb-platform-api",
      "widgets.json",
      "FastAPI",
      "data connectors",
      ".spec"
    ]
  },
  {
    "title": "index",
    "path": "/odp/python/reference/",
    "category": "ODP Python - Reference",
    "description": "",
    "keywords": []
  },
  {
    "title": "Settings & Configuration",
    "path": "/odp/python/settings/",
    "category": "ODP Python - Settings",
    "description": "Reference for OpenBB Python V5 settings: user_settings.json, system_settings.json, openbb.toml, environment variables, and the order in which each is applied.\n",
    "keywords": [
      "settings",
      "user_settings.json",
      "system_settings.json",
      "openbb.toml",
      "credentials",
      "preferences",
      "defaults",
      "environment variables",
      "OPENBB_DEBUG_MODE",
      "api_settings",
      "python_settings"
    ]
  },
  {
    "title": "Configure credentials",
    "path": "/odp/python/user-guide/credentials",
    "category": "ODP Python - User Guide",
    "description": "Set provider API keys for the Python Interface, the REST API, and the MCP server, and understand which value wins when a key is set in more than one place.\n",
    "keywords": [
      "credentials",
      "API keys",
      "user_settings.json",
      "environment variables",
      "fred_api_key",
      "obb.user.credentials"
    ]
  },
  {
    "title": "Configure preferences and defaults",
    "path": "/odp/python/user-guide/preferences-and-defaults",
    "category": "ODP Python - User Guide",
    "description": "Change user preferences for a session or permanently, choose a default provider per command, and pre-fill command parameters.\n",
    "keywords": [
      "preferences",
      "defaults",
      "default provider",
      "output_type",
      "show_warnings",
      "user_settings.json",
      "obb.user.preferences",
      "obb.user.defaults"
    ]
  },
  {
    "title": "Environment variables",
    "path": "/odp/python/user-guide/environment-variables",
    "category": "ODP Python - User Guide",
    "description": "Set OPENBB_* variables and provider keys through the shell or .env files, when they are read, and the variables used for common tasks.\n",
    "keywords": [
      "environment variables",
      ".env",
      "OPENBB_DEBUG_MODE",
      "OPENBB_AUTO_BUILD",
      "OPENBB_API_AUTH",
      "OPENBB_ENV_FILE",
      "OPENBB_CONFIG"
    ]
  },
  {
    "title": "Handle warnings and errors",
    "path": "/odp/python/user-guide/warnings-and-errors",
    "category": "ODP Python - User Guide",
    "description": "Read the warnings captured on each result, show, silence, or escalate them, and catch OpenBBError in Python or map REST status codes.\n",
    "keywords": [
      "OpenBBError",
      "OpenBBWarning",
      "warnings",
      "show_warnings",
      "EmptyDataError",
      "UnauthorizedError",
      "OPENBB_DEBUG_MODE",
      "error handling"
    ]
  },
  {
    "title": "Output types",
    "path": "/odp/python/user-guide/output-types",
    "category": "ODP Python - User Guide",
    "description": "Convert command results to pandas, Polars, NumPy, dictionaries, or JSON for LLM tools, per call or as a session default, and the packages each needs.\n",
    "keywords": [
      "output_type",
      "to_dataframe",
      "to_polars",
      "to_numpy",
      "to_dict",
      "to_llm",
      "results_metadata",
      "LLM"
    ]
  },
  {
    "title": "Pass query parameters",
    "path": "/odp/python/user-guide/query-parameters",
    "category": "ODP Python - User Guide",
    "description": "Find a command's parameters and pass providers, symbols, dates, choices, and provider-specific options from Python or over the REST API.\n",
    "keywords": [
      "query parameters",
      "provider",
      "symbol",
      "start_date",
      "end_date",
      "kwargs",
      "choices",
      "REST API"
    ]
  },
  {
    "title": "Use openbb.toml",
    "path": "/odp/python/user-guide/openbb-toml",
    "category": "ODP Python - User Guide",
    "description": "Where openbb.toml is discovered, which processes read it, what it controls, and when to use it instead of the JSON settings files or environment variables.\n",
    "keywords": [
      "openbb.toml",
      "OPENBB_CONFIG",
      "pyproject.toml",
      "tool.openbb",
      "layered configuration",
      "openbb-api",
      "openbb-mcp"
    ]
  },
  {
    "title": "User Guide",
    "path": "/odp/python/user-guide/",
    "category": "ODP Python - User Guide",
    "description": "Task-oriented guides for calling OpenBB commands from Python, the REST API, or the MCP server: credentials, preferences, openbb.toml, output types, parameters, warnings and errors, and environment variables.\n",
    "keywords": [
      "user guide",
      "how-to",
      "credentials",
      "preferences",
      "openbb.toml",
      "output types",
      "query parameters",
      "environment variables"
    ]
  },
  {
    "title": "Administration",
    "path": "/workspace/getting-started/enterprise/administration",
    "category": "Workspace",
    "description": "Administration and management features for OpenBB Workspace Enterprise",
    "keywords": [
      "Administration",
      "User Management",
      "RBAC",
      "Theme Settings",
      "System Configuration",
      "Monitoring",
      "Branding"
    ]
  },
  {
    "title": "Advanced Dropdown",
    "path": "/workspace/developers/widget-parameters/advanced-dropdown",
    "category": "Workspace",
    "description": "Learn how to implement and use advanced dropdown parameters in OpenBB Workspace widgets, including dynamic options from endpoints and additional information display",
    "keywords": [
      "advanced dropdown",
      "dynamic dropdown",
      "endpoint dropdown",
      "widget parameters",
      "enhanced selection"
    ]
  },
  {
    "title": "Agents Integration",
    "path": "/workspace/developers/agents-integration",
    "category": "Workspace",
    "description": "How to integrate your own AI agent service with OpenBB Workspace",
    "keywords": [
      "AI",
      "Agents",
      "Integration",
      "SSE",
      "agents.json",
      "QueryRequest"
    ]
  },
  {
    "title": "agents.json Reference",
    "path": "/workspace/developers/json-specs/agents-json-reference",
    "category": "Workspace",
    "description": "Complete reference guide for configuring custom AI agents in OpenBB Workspace using the agents.json endpoint",
    "keywords": [
      "agents.json",
      "AI configuration",
      "custom agents",
      "agent metadata",
      "OpenBB AI SDK",
      "agent features",
      "SSE",
      "streaming"
    ]
  },
  {
    "title": "AgGrid Table Charts",
    "path": "/workspace/developers/widget-types/aggrid-table-charts",
    "category": "Workspace",
    "description": "AgGrid Table Charts",
    "keywords": [
      "asd"
    ]
  },
  {
    "title": "AI-generated Widgets",
    "path": "/workspace/analysts/widgets/ai-generated-widgets",
    "category": "Workspace",
    "description": "Learn how to use AI agent outputs as widgets in your OpenBB dashboard",
    "keywords": [
      "AI",
      "Widgets",
      "Dashboard",
      "Agent Outputs",
      "Persistence"
    ]
  },
  {
    "title": "Apps",
    "path": "/workspace/analysts/apps",
    "category": "Workspace",
    "description": "Discover and use OpenBB Apps - pre-configured dashboard templates with integrated AI agents and custom prompts for optimized analytical workflows.",
    "keywords": [
      "OpenBB Apps",
      "Dashboard Templates",
      "AI Agents",
      "Custom Prompts",
      "Workflow Optimization",
      "Financial Analysis",
      "Portfolio Management",
      "Market Research"
    ]
  },
  {
    "title": "Apps",
    "path": "/workspace/developers/apps/",
    "category": "Workspace",
    "description": "Create and customize your own OpenBB Apps for optimized workflows",
    "keywords": [
      "OpenBB Apps",
      "Custom Apps",
      "Workflow Optimization",
      "Dashboard Templates",
      "AI Agents",
      "Data Integration",
      "Custom Solutions"
    ]
  },
  {
    "title": "apps.json Reference",
    "path": "/workspace/developers/json-specs/apps-json-reference",
    "category": "Workspace",
    "description": "Learn about the structure and configuration of apps.json for creating custom applications in OpenBB Workspace",
    "keywords": [
      "apps.json",
      "workspace configuration",
      "custom apps",
      "widget layout",
      "app configuration",
      "FastAPI endpoint"
    ]
  },
  {
    "title": "Boolean Toggle",
    "path": "/workspace/developers/widget-parameters/boolean-toggle",
    "category": "Workspace",
    "description": "Learn how to implement and use boolean toggle parameters in OpenBB Workspace widgets, including configuration options and example usage",
    "keywords": [
      "boolean toggle",
      "switch",
      "toggle",
      "widget parameters",
      "enable/disable"
    ]
  },
  {
    "title": "Categories and Subcategories",
    "path": "/workspace/developers/widget-configuration/category-subcategory",
    "category": "Workspace",
    "description": "Learn how to organize widgets using categories and subcategories in OpenBB Workspace.",
    "keywords": [
      "category",
      "subcategory",
      "organization",
      "widgets",
      "structure"
    ]
  },
  {
    "title": "Cell Click Grouping",
    "path": "/workspace/developers/widget-parameters/cell-click-grouping",
    "category": "Workspace",
    "description": "Learn how to implement cell click grouping in OpenBB Workspace widgets, allowing users to click on cells in a table to update related widgets",
    "keywords": [
      "cell click grouping",
      "table cell click",
      "interactive tables",
      "widget parameters",
      "cell interaction"
    ]
  },
  {
    "title": "Citations for documents",
    "path": "/workspace/developers/ai-features/citations-for-documents",
    "category": "Workspace",
    "description": "Add document-specific citations with PDF text highlighting for source attribution",
    "keywords": [
      "citations",
      "documents",
      "PDF",
      "highlighting",
      "pdfplumber"
    ]
  },
  {
    "title": "Configure Workspace Lite",
    "path": "/workspace/getting-started/lite/configuration",
    "category": "Workspace",
    "description": "Configure OpenBB Workspace Lite with container environment variables.",
    "keywords": [
      "OpenBB Workspace Lite configuration",
      "Workspace Lite environment variables",
      "Workspace Lite Marketplace",
      "Workspace Lite MCP"
    ]
  },
  {
    "title": "Context Management",
    "path": "/workspace/analysts/ai-features/copilot-context",
    "category": "Workspace",
    "description": "Understanding how OpenBB Copilot manages and prioritizes context",
    "keywords": [
      "context management",
      "explicit context",
      "dashboard context",
      "global retrieval",
      "conversation history"
    ]
  },
  {
    "title": "Copilot Basics",
    "path": "/workspace/analysts/ai-features/copilot-basics",
    "category": "Workspace",
    "description": "Learn the basics of OpenBB Copilot interface and functionality",
    "keywords": [
      "OpenBB Copilot",
      "copilot basics",
      "AI assistant",
      "interface",
      "prompt library"
    ]
  },
  {
    "title": "Core Widgets",
    "path": "/workspace/analysts/widgets/core-widgets",
    "category": "Workspace",
    "description": "Essential widgets that form the foundation of every OpenBB dashboard - navigation, notes, data integration, and productivity tools.",
    "keywords": [
      "core widgets",
      "dashboard essentials",
      "navigation widgets",
      "note widgets",
      "API integration",
      "RSS feeds",
      "productivity tools",
      "data connectors"
    ]
  },
  {
    "title": "Create charts",
    "path": "/workspace/developers/ai-features/create-charts",
    "category": "Workspace",
    "description": "Stream inline charts as part of your agent’s response",
    "keywords": [
      "charts",
      "visualization",
      "artifacts",
      "SSE"
    ]
  },
  {
    "title": "Create HTML artifacts",
    "path": "/workspace/developers/ai-features/create-html-artifacts",
    "category": "Workspace",
    "description": "Stream inline HTML artifacts as part of your agent's response",
    "keywords": [
      "html",
      "artifacts",
      "visualization",
      "custom rendering",
      "SSE",
      "widgets"
    ]
  },
  {
    "title": "Create tables",
    "path": "/workspace/developers/ai-features/create-tables",
    "category": "Workspace",
    "description": "Stream tabular data as an artifact in the conversation",
    "keywords": [
      "tables",
      "artifacts",
      "SSE"
    ]
  },
  {
    "title": "Custom agent features",
    "path": "/workspace/developers/ai-features/custom-agent-features",
    "category": "Workspace",
    "description": "Configure and manage custom agent features based on workspace options",
    "keywords": [
      "features",
      "configuration",
      "workspace options",
      "custom agents",
      "SSE"
    ]
  },
  {
    "title": "Dashboards Overview",
    "path": "/workspace/analysts/dashboards/",
    "category": "Workspace",
    "description": "Learn how to create, manage, and share interactive dashboards in OpenBB Workspace",
    "keywords": [
      "dashboards",
      "data visualization",
      "financial analysis",
      "widgets",
      "collaboration",
      "reporting"
    ]
  },
  {
    "title": "Data Control & Security",
    "path": "/workspace/getting-started/enterprise/data-control",
    "category": "Workspace",
    "description": "Data sovereignty, security architecture, and compliance features in OpenBB Workspace Enterprise",
    "keywords": [
      "Data Sovereignty",
      "Enterprise Security",
      "Compliance",
      "Audit Trails",
      "Data Residency",
      "SOC 2",
      "MFA",
      "SSO"
    ]
  },
  {
    "title": "Data Handling",
    "path": "/workspace/analysts/ai-features/copilot-data-handling",
    "category": "Workspace",
    "description": "How OpenBB Copilot processes structured and unstructured data",
    "keywords": [
      "data handling",
      "structured data",
      "unstructured data",
      "AgGrid",
      "Plotly",
      "document processing"
    ]
  },
  {
    "title": "Data Integration",
    "path": "/workspace/developers/data-integration",
    "category": "Workspace",
    "description": "Learn how to integrate your own data sources and APIs into OpenBB Workspace with a custom backend solution.",
    "keywords": [
      "Data Integration",
      "Custom Backend",
      "API Endpoints",
      "Widget Configuration",
      "Data Connectors",
      "User Interface",
      "Real-time Updates",
      "Single Widget",
      "Data Key Parameter",
      "Nested JSON"
    ]
  },
  {
    "title": "Data Update Display",
    "path": "/workspace/developers/widget-configuration/data-update-display",
    "category": "Workspace",
    "description": "Learn about configuring data update display for widgets in OpenBB Workspace.",
    "keywords": [
      "data update",
      "cron schedule",
      "displayed schedule",
      "update display",
      "widget updates"
    ]
  },
  {
    "title": "Date Picker",
    "path": "/workspace/developers/widget-parameters/date-picker",
    "category": "Workspace",
    "description": "Learn how to implement and use date picker parameters in OpenBB Workspace widgets, including configuration options and example usage",
    "keywords": [
      "date picker",
      "date input",
      "calendar",
      "widget parameters",
      "date selection",
      "datetime"
    ]
  },
  {
    "title": "Dependent Dropdown",
    "path": "/workspace/developers/widget-parameters/dependent-dropdown",
    "category": "Workspace",
    "description": "Learn how to implement and use dependent dropdown parameters in OpenBB Workspace widgets, where options in one dropdown depend on the selection in another",
    "keywords": [
      "dependent dropdown",
      "cascading dropdown",
      "linked dropdown",
      "widget parameters",
      "dynamic options"
    ]
  },
  {
    "title": "Dropdown",
    "path": "/workspace/developers/widget-parameters/dropdown",
    "category": "Workspace",
    "description": "Learn how to implement and use dropdown parameters in OpenBB Workspace widgets, including configuration options and example usage",
    "keywords": [
      "dropdown",
      "select",
      "combobox",
      "widget parameters",
      "selection list"
    ]
  },
  {
    "title": "Dynamic skill loading",
    "path": "/workspace/developers/ai-features/dynamic-skill-loading",
    "category": "Workspace",
    "description": "Build agents that dynamically load skills from the workspace at runtime",
    "keywords": [
      "skills",
      "dynamic loading",
      "skill catalog",
      "function calling",
      "agents",
      "SSE"
    ]
  },
  {
    "title": "Enterprise",
    "path": "/workspace/getting-started/enterprise/",
    "category": "Workspace",
    "description": "Deploy OpenBB Workspace on-premises or in your private cloud with enterprise-grade security, compliance, and control.",
    "keywords": [
      "OpenBB Workspace Enterprise",
      "On-Premises Deployment",
      "Private Cloud",
      "Enterprise Features",
      "Financial Analytics Platform"
    ]
  },
  {
    "title": "Error Handling",
    "path": "/workspace/developers/widget-configuration/error-handling",
    "category": "Workspace",
    "description": "Learn how to handle errors in your widgets in OpenBB Workspace.",
    "keywords": [
      "error handling",
      "HTTPException",
      "error management",
      "widgets",
      "status codes"
    ]
  },
  {
    "title": "Excel Add-in Installation",
    "path": "/workspace/analysts/excel-addin/excel-installation",
    "category": "Workspace",
    "description": "This page presents the general requirements and the steps to install the OpenBB Add-in for Excel. The OpenBB Add-in for Excel is available on Windows, Mac, and Excel on the web. It can be installed by an administrator or by individual users.",
    "keywords": [
      "Microsoft Excel",
      "Add-in"
    ]
  },
  {
    "title": "Excel Add-in Overview",
    "path": "/workspace/analysts/excel-addin/excel-overview",
    "category": "Workspace",
    "description": "The OpenBB Add-in for Excel is a powerful integration that enables direct access to financial data within Microsoft Excel. This seamless integration allows you to create sophisticated financial models and perform comprehensive analysis without leaving your spreadsheet environment.",
    "keywords": [
      "excel add-in",
      "financial data integration",
      "dynamic widgets",
      "excel formulas",
      "dashboard export",
      "financial modeling"
    ]
  },
  {
    "title": "FAQs",
    "path": "/workspace/getting-started/faqs",
    "category": "Workspace",
    "description": "Common questions and answers about OpenBB Workspace, data integration, custom backends, and troubleshooting.",
    "keywords": [
      "FAQs",
      "Data Integration",
      "Custom Backend",
      "Widget Configuration",
      "API Integration",
      "OpenBB Workspace",
      "Backend Setup",
      "Widget Templates",
      "Troubleshooting",
      "Data Sources"
    ]
  },
  {
    "title": "File Viewer",
    "path": "/workspace/developers/widget-types/file-viewer",
    "category": "Workspace",
    "description": "Guide to using PDF and multi-PDF viewer widgets in OpenBB Workspace",
    "keywords": [
      "widgets",
      "pdf",
      "file viewer",
      "base64",
      "multi-file viewer"
    ]
  },
  {
    "title": "Generative UI",
    "path": "/workspace/analysts/ai-features/generative-ui",
    "category": "Workspace",
    "description": "Understanding the Generative UI capabilities in OpenBB Copilot",
    "keywords": [
      "generative ui",
      "widgets",
      "dynamic creation",
      "widget parameters",
      "dashboard manipulation"
    ]
  },
  {
    "title": "Grid Size",
    "path": "/workspace/developers/widget-configuration/grid-size",
    "category": "Workspace",
    "description": "Learn about the grid-based layout system for widgets in OpenBB Workspace, including width and height specifications.",
    "keywords": [
      "grid",
      "layout",
      "width",
      "height",
      "widgets",
      "gridData"
    ]
  },
  {
    "title": "Highcharts Chart",
    "path": "/workspace/developers/widget-types/highcharts",
    "category": "Workspace",
    "description": "Highcharts Chart",
    "keywords": [
      "highcharts",
      "charts",
      "visualization"
    ]
  },
  {
    "title": "Highlight widget citations",
    "path": "/workspace/developers/ai-features/highlight-widget-citations",
    "category": "Workspace",
    "description": "Cite widget data sources in your responses and display them in Workspace",
    "keywords": [
      "citations",
      "cite",
      "widgets",
      "provenance"
    ]
  },
  {
    "title": "HTML",
    "path": "/workspace/developers/widget-types/html",
    "category": "Workspace",
    "description": "Learn how to create and customize HTML widgets in OpenBB Workspace, enabling complete control over visualization and interaction design with custom HTML, CSS, and JavaScript.",
    "keywords": [
      "html widget",
      "widget configuration",
      "custom visualization",
      "interactive dashboard",
      "widget development",
      "HTML content",
      "CSS styling",
      "JavaScript interactivity",
      "OpenBB Workspace",
      "custom widgets"
    ]
  },
  {
    "title": "Iframe",
    "path": "/workspace/developers/widget-types/iframe",
    "category": "Workspace",
    "description": "Embed an external web app (such as a Streamlit dashboard) as an iframe widget in OpenBB Workspace, with optional sub-widget export via the Iframe Widget Protocol and auto-connected MCP tools.",
    "keywords": [
      "iframe widget",
      "iframe widget protocol",
      "streamlit",
      "embed external app",
      "postMessage",
      "openbb-auth",
      "auth headers",
      "mcpUrl",
      "destructiveHint",
      "sub-widgets",
      "OpenBB Workspace"
    ]
  },
  {
    "title": "Input Form",
    "path": "/workspace/developers/widget-parameters/input-form",
    "category": "Workspace",
    "description": "Input Form",
    "keywords": [
      "input",
      "form",
      "configuration"
    ]
  },
  {
    "title": "Install Workspace Lite",
    "path": "/workspace/getting-started/lite/installation",
    "category": "Workspace",
    "description": "Pull and run OpenBB Workspace Lite from the private container registry.",
    "keywords": [
      "OpenBB Workspace Lite install",
      "Workspace Lite Docker",
      "lite.openbb.co",
      "AWS ECR login",
      "private registry"
    ]
  },
  {
    "title": "Interact with dashboard",
    "path": "/workspace/developers/ai-features/interact-with-dashboard",
    "category": "Workspace",
    "description": "Receive full dashboard widget metadata and conditionally fetch data",
    "keywords": [
      "dashboard widgets",
      "widget-dashboard-search",
      "WidgetRequest",
      "get_widget_data"
    ]
  },
  {
    "title": "Interacting With Data",
    "path": "/workspace/analysts/widgets/interacting-with-data",
    "category": "Workspace",
    "description": "Learn how to work with tables and charts in OpenBB Workspace, including parameter selection and synchronization across widgets.",
    "keywords": [
      "data interaction",
      "table widgets",
      "chart widgets",
      "parameter linking",
      "AgGrid",
      "Plotly",
      "TradingView",
      "data visualization"
    ]
  },
  {
    "title": "Live Grid",
    "path": "/workspace/developers/widget-types/live-grid",
    "category": "Workspace",
    "description": "Live Grid",
    "keywords": [
      "live grid",
      "real-time data",
      "websocket",
      "streaming data",
      "data table",
      "live updates"
    ]
  },
  {
    "title": "Markdown",
    "path": "/workspace/developers/widget-types/markdown",
    "category": "Workspace",
    "description": "Learn how to create and customize markdown widgets in OpenBB Workspace, including basic markdown display and data-rich markdown with dynamic content integration.",
    "keywords": [
      "markdown widget",
      "widget configuration",
      "dynamic markdown",
      "data integration",
      "widget display",
      "markdown formatting",
      "widget customization",
      "OpenBB Workspace",
      "widget development",
      "markdown content"
    ]
  },
  {
    "title": "Matching widget to MCP tool",
    "path": "/workspace/developers/widget-configuration/matching-widget-to-mcp-tool",
    "category": "Workspace",
    "description": "Learn how you can make it so an MCP server and tool are associated with a specific widget",
    "keywords": [
      "MCP tool",
      "matching widget",
      "MCP server",
      "widgets.json",
      "citations"
    ]
  },
  {
    "title": "MCP Tools",
    "path": "/workspace/analysts/ai-features/mcp-tools",
    "category": "Workspace",
    "description": "Model Context Protocol (MCP) tools integration in OpenBB Copilot",
    "keywords": [
      "MCP",
      "Model Context Protocol",
      "tools",
      "integration",
      "external tools"
    ]
  },
  {
    "title": "MCP tools integration",
    "path": "/workspace/developers/ai-features/mcp-tools",
    "category": "Workspace",
    "description": "Integrate Model Context Protocol (MCP) tools with OpenBB agents for enhanced capabilities",
    "keywords": [
      "MCP",
      "Model Context Protocol",
      "tools",
      "function calling",
      "OpenAI",
      "agents"
    ]
  },
  {
    "title": "Metric",
    "path": "/workspace/developers/widget-types/metric",
    "category": "Workspace",
    "description": "Learn how to integrate your own backend with OpenBB Workspace using the cookie-cutter or language-agnostic API approaches, with illustrative guides and principles for handling widget.json files, APIs, interfaces, Python, FastAPI, and more.",
    "keywords": [
      "widgets.json",
      "OpenBB API",
      "Endpoint integration",
      "widget configuration",
      "Language-Agnostic API",
      "API implementation",
      "Python",
      "FastAPI",
      "Workspace widgets",
      "Widget definitions"
    ]
  },
  {
    "title": "Newsfeed",
    "path": "/workspace/developers/widget-types/newsfeed",
    "category": "Workspace",
    "description": "Learn how to create a newsfeed widget for OpenBB Workspace that displays articles in a clean, organized format.",
    "keywords": [
      "widgets.json",
      "OpenBB API",
      "Newsfeed widget",
      "Article display",
      "News integration",
      "FastAPI",
      "Custom Backend"
    ]
  },
  {
    "title": "Number Input",
    "path": "/workspace/developers/widget-parameters/number-input",
    "category": "Workspace",
    "description": "Learn how to implement and use number input parameters in OpenBB Workspace widgets, including configuration options and example usage",
    "keywords": [
      "number input",
      "numeric input",
      "number field",
      "widget parameters",
      "numerical entry"
    ]
  },
  {
    "title": "OBB.GET",
    "path": "/workspace/analysts/excel-addin/obb-get",
    "category": "Workspace",
    "description": "Extract and slice specific data from Excel ranges using labels or indices",
    "keywords": [
      "Microsoft Excel",
      "Add-in",
      "Advanced",
      "Slice data",
      "Data slicer",
      "Get specific fields",
      "Data extraction",
      "Excel ranges"
    ]
  },
  {
    "title": "OBB.WIDGET",
    "path": "/workspace/analysts/excel-addin/obb-widget",
    "category": "Workspace",
    "description": "This page provides an overview of the basics of the OpenBB add-in for Microsoft Excel. It covers the basic usage of the add-in and the available functions.",
    "keywords": [
      "Microsoft Excel",
      "Add-in",
      "Basics",
      "Examples",
      "Functions"
    ]
  },
  {
    "title": "Omni, SQL, Python",
    "path": "/workspace/developers/widget-types/omni",
    "category": "Workspace",
    "description": "Learn how to create versatile Omni widgets for OpenBB Workspace that can dynamically return different content types based on input parameters, including SQL query and Python chart widgets.",
    "keywords": [
      "omni widget",
      "dynamic content",
      "POST request",
      "multi-format output",
      "widget configuration",
      "citations",
      "flexible widgets",
      "OpenBB Workspace",
      "widget development",
      "SQL widget",
      "Python widget"
    ]
  },
  {
    "title": "Open Source Agent",
    "path": "/workspace/developers/open-source-agent",
    "category": "Workspace",
    "description": "Run and customize Agent Rita, OpenBB's open source reference agent for Workspace.",
    "keywords": [
      "Agent Rita",
      "open source agent",
      "custom agents",
      "OpenBB Workspace",
      "MCP",
      "agents.json"
    ]
  },
  {
    "title": "OpenBB AI SDK",
    "path": "/workspace/developers/openbb-ai-sdk",
    "category": "Workspace",
    "description": "Build custom agents for OpenBB Workspace using the OpenBB AI SDK helpers and models",
    "keywords": [
      "OpenBB AI SDK",
      "custom agents",
      "SSE",
      "QueryRequest",
      "widgets",
      "citations",
      "charts",
      "tables"
    ]
  },
  {
    "title": "OpenBB Python Package",
    "path": "/workspace/getting-started/platform-installer",
    "category": "Workspace",
    "description": "Learn how to integrate the Open Data Platform data to OpenBB Workspace",
    "keywords": [
      "widgets.json",
      "Open Data Platform API",
      "Endpoint integration",
      "widget configuration",
      "Workspace widgets",
      "Open Data Platform Installer",
      "ODP Desktop App",
      "Widget filtering"
    ]
  },
  {
    "title": "Operate Workspace Lite",
    "path": "/workspace/getting-started/lite/operations",
    "category": "Workspace",
    "description": "Back up, update, and administer OpenBB Workspace Lite.",
    "keywords": [
      "OpenBB Workspace Lite operations",
      "Workspace Lite backup",
      "Workspace Lite users"
    ]
  },
  {
    "title": "Output Formats",
    "path": "/workspace/analysts/ai-features/copilot-output",
    "category": "Workspace",
    "description": "Understanding OpenBB Copilot's output formats and capabilities",
    "keywords": [
      "output formats",
      "citations",
      "create widgets",
      "user feedback"
    ]
  },
  {
    "title": "Overview",
    "path": "/workspace/analysts/widgets/overview",
    "category": "Workspace",
    "description": "Understanding widgets - the building blocks of OpenBB Workspace dashboards that transform raw data into actionable insights.",
    "keywords": [
      "widgets",
      "data visualization",
      "dashboard components",
      "financial widgets",
      "widget metadata",
      "widget parameters"
    ]
  },
  {
    "title": "Parameter Grouping",
    "path": "/workspace/developers/widget-parameters/parameter-grouping",
    "category": "Workspace",
    "description": "Learn how to implement parameter grouping in OpenBB Workspace widgets, allowing multiple widgets to share and respond to the same parameter input",
    "keywords": [
      "parameter grouping",
      "shared parameters",
      "synchronized parameters",
      "widget parameters",
      "parameter synchronization"
    ]
  },
  {
    "title": "Parameter Positioning",
    "path": "/workspace/developers/widget-parameters/parameter-positioning",
    "category": "Workspace",
    "description": "Learn how to control the layout and positioning of widget parameters in OpenBB Workspace, including row positioning and parameter ordering",
    "keywords": [
      "parameter positioning",
      "parameter layout",
      "parameter rows",
      "widget parameters",
      "parameter ordering"
    ]
  },
  {
    "title": "Parse PDF context",
    "path": "/workspace/developers/ai-features/parse-pdf-context",
    "category": "Workspace",
    "description": "Parse PDF content from widget data and cite sources",
    "keywords": [
      "PDF",
      "DataContent",
      "PdfDataFormat",
      "citations"
    ]
  },
  {
    "title": "Parse widget data",
    "path": "/workspace/developers/ai-features/parse-widget-data",
    "category": "Workspace",
    "description": "Retrieve data from selected widgets and pass it as raw context to your LLM",
    "keywords": [
      "widgets",
      "get_widget_data",
      "WidgetRequest",
      "SSE",
      "OpenAI"
    ]
  },
  {
    "title": "Plotly Charts",
    "path": "/workspace/developers/widget-types/plotly-charts",
    "category": "Workspace",
    "description": "Plotly Charts",
    "keywords": [
      "plotly",
      "charts",
      "visualization"
    ]
  },
  {
    "title": "Progressive Web App (PWA)",
    "path": "/workspace/getting-started/pwa",
    "category": "Workspace",
    "description": "Install OpenBB Workspace as a Progressive Web App for a native experience on desktop and mobile devices.",
    "keywords": [
      "OpenBB Workspace",
      "Progressive Web App",
      "PWA installation",
      "Desktop application",
      "iOS application",
      "Android application",
      "Native app experience"
    ]
  },
  {
    "title": "Refetch Interval",
    "path": "/workspace/developers/widget-configuration/refetch-interval",
    "category": "Workspace",
    "description": "Learn about configuring refetch intervals for widgets in OpenBB Workspace.",
    "keywords": [
      "refetch interval",
      "auto refresh",
      "data updates",
      "refresh rate",
      "widget updates",
      "cron",
      "cron expression",
      "scheduled refresh"
    ]
  },
  {
    "title": "Render Functions",
    "path": "/workspace/developers/widget-configuration/render-functions",
    "category": "Workspace",
    "description": "Learn how to configure and use custom render functions in OpenBB Workspace to customize data display and interactions.",
    "keywords": [
      "custom render functions",
      "OpenBB API",
      "widget configuration",
      "data visualization",
      "interactive widgets"
    ]
  },
  {
    "title": "Run Button",
    "path": "/workspace/developers/widget-configuration/run-button",
    "category": "Workspace",
    "description": "Learn about the run button functionality in OpenBB Workspace widgets.",
    "keywords": [
      "run button",
      "manual refresh",
      "widget control",
      "refresh",
      "manual execution"
    ]
  },
  {
    "title": "Sandbox Widgets",
    "path": "/workspace/analysts/widgets/sandbox-widgets",
    "category": "Workspace",
    "description": "Explore the pre-built sandbox widgets available when you first log into OpenBB Workspace.",
    "keywords": [
      "sandbox widgets",
      "demo widgets",
      "demonstration",
      "application showcase",
      "getting started"
    ]
  },
  {
    "title": "Share step-by-step reasoning",
    "path": "/workspace/developers/ai-features/share-step-by-step-reasoning",
    "category": "Workspace",
    "description": "Stream status updates alongside model output during long operations",
    "keywords": [
      "reasoning_step",
      "SSE",
      "status updates",
      "progress"
    ]
  },
  {
    "title": "Skills",
    "path": "/workspace/analysts/ai-features/skills",
    "category": "Workspace",
    "description": "Create and invoke custom AI skills from the OpenBB Copilot chat interface",
    "keywords": [
      "skills",
      "custom skills",
      "AI skills",
      "skill commands",
      "reusable prompts",
      "copilot skills"
    ]
  },
  {
    "title": "SSRM Mode",
    "path": "/workspace/developers/widget-types/ssrm_mode",
    "category": "Workspace",
    "description": "Server-Side Rendered Mode for handling large datasets efficiently in OpenBB Workspace widgets",
    "keywords": [
      "SSRM",
      "server-side rendering",
      "large datasets",
      "performance",
      "data optimization",
      "advanced widgets"
    ]
  },
  {
    "title": "Stale Time",
    "path": "/workspace/developers/widget-configuration/stale-time",
    "category": "Workspace",
    "description": "Learn about configuring stale time for widgets in OpenBB Workspace.",
    "keywords": [
      "stale time",
      "data freshness",
      "refresh indicators",
      "data staleness",
      "widget updates"
    ]
  },
  {
    "title": "Static Files",
    "path": "/workspace/analysts/widgets/static-files",
    "category": "Workspace",
    "description": "Upload and integrate your own files into OpenBB Workspace - transform spreadsheets, PDFs, and images into interactive dashboard widgets.",
    "keywords": [
      "file upload",
      "static files",
      "custom data",
      "spreadsheet widgets",
      "PDF widgets",
      "image widgets",
      "proprietary data",
      "file integration"
    ]
  },
  {
    "title": "Step-by-Step Reasoning",
    "path": "/workspace/analysts/ai-features/copilot-reasoning",
    "category": "Workspace",
    "description": "Understanding the transparent reasoning process of OpenBB Copilot",
    "keywords": [
      "step-by-step reasoning",
      "planning",
      "querying widgets",
      "intermediate artifacts",
      "transparency"
    ]
  },
  {
    "title": "Support & Services",
    "path": "/workspace/getting-started/enterprise/support-services",
    "category": "Workspace",
    "description": "Enterprise support, professional services, and success programs for OpenBB Workspace",
    "keywords": [
      "Enterprise Support",
      "Professional Services",
      "JumpStart Package",
      "Training",
      "Customer Success"
    ]
  },
  {
    "title": "Tabs",
    "path": "/workspace/developers/widget-parameters/tabs",
    "category": "Workspace",
    "description": "Learn how to implement tabs parameters in OpenBB Workspace widgets to create tabbed interfaces for switching between different data views",
    "keywords": [
      "tabs",
      "tab parameter",
      "tabbed interface",
      "widget parameters",
      "data views",
      "dynamic columns",
      "OpenBB Workspace"
    ]
  },
  {
    "title": "Team Collaboration",
    "path": "/workspace/getting-started/enterprise/team-collaboration",
    "category": "Workspace",
    "description": "Collaborative features for teams in OpenBB Workspace Enterprise",
    "keywords": [
      "Team Collaboration",
      "Dashboard Sharing",
      "Workspaces",
      "Audit Trails",
      "Export Controls"
    ]
  },
  {
    "title": "Text Input",
    "path": "/workspace/developers/widget-parameters/text-input",
    "category": "Workspace",
    "description": "Learn how to implement and use text input parameters in OpenBB Workspace widgets, including configuration options and example usage",
    "keywords": [
      "text input",
      "text box",
      "input field",
      "widget parameters",
      "text entry"
    ]
  },
  {
    "title": "TradingView Charts",
    "path": "/workspace/developers/widget-types/tradingview-charts",
    "category": "Workspace",
    "description": "How to implement TradingView charts in OpenBB using UDF (Universal Data Feed)",
    "keywords": [
      "tradingview",
      "charts",
      "visualization",
      "UDF",
      "data feed"
    ]
  },
  {
    "title": "Troubleshooting",
    "path": "/workspace/analysts/excel-addin/troubleshooting",
    "category": "Workspace",
    "description": "Common issues and solutions for the OpenBB Add-in for Excel, including error handling, installation problems, and connection troubleshooting.",
    "keywords": [
      "Microsoft Excel",
      "Excel Add-in",
      "Troubleshooting",
      "Error Handling",
      "Permission Error",
      "Connection Issues",
      "Duplicate Ribbon",
      "Excel Help",
      "OpenBB Support"
    ]
  },
  {
    "title": "User feedback",
    "path": "/workspace/developers/ai-features/user-feedback",
    "category": "Workspace",
    "description": "Receive and persist user feedback (thumbs up/down) from the workspace UI",
    "keywords": [
      "feedback",
      "thumbs up",
      "thumbs down",
      "user feedback",
      "vote",
      "SSE"
    ]
  },
  {
    "title": "Vega-Lite Chart",
    "path": "/workspace/developers/widget-types/vega-lite",
    "category": "Workspace",
    "description": "Vega-Lite Chart",
    "keywords": [
      "vega",
      "vega-lite",
      "charts",
      "visualization"
    ]
  },
  {
    "title": "widgets.json Reference",
    "path": "/workspace/developers/json-specs/widgets-json-reference",
    "category": "Workspace",
    "description": "Learn how to integrate your own backend with OpenBB Workspace using the cookie-cutter or language-agnostic API approaches, with illustrative guides and principles for handling widget.json files, APIs, interfaces, Python, FastAPI and more.",
    "keywords": [
      "widgets.json",
      "OpenBB API",
      "Endpoint integration",
      "widget configuration",
      "Language-Agnostic API",
      "API implementation",
      "Python",
      "FastAPI",
      "Workspace widgets",
      "Widget definitions"
    ]
  },
  {
    "title": "Workspace AI service",
    "path": "/workspace/developers/ai-features/workspace-ai-service",
    "category": "Workspace",
    "description": "Implement the AI service endpoints used by Workspace Lite and Enterprise UI features.",
    "keywords": [
      "Workspace AI service",
      "AI_API_URL",
      "Agent Rita",
      "dashboard titles",
      "prompt enhancement",
      "widget metadata"
    ]
  },
  {
    "title": "Workspace Lite",
    "path": "/workspace/getting-started/lite/",
    "category": "Workspace",
    "description": "Run OpenBB Workspace Lite as a self-hosted workspace for small investment teams.",
    "keywords": [
      "OpenBB Workspace Lite",
      "Workspace Lite",
      "self-hosted workspace",
      "Docker",
      "small investment teams"
    ]
  },
  {
    "title": "Workspace Overview",
    "path": "/workspace/",
    "category": "Workspace",
    "description": "OpenBB Workspace is a secure enterprise UI application for AI workflows, featuring data integration, AI model deployment, flexible UI customization, and on-premises deployment capabilities.",
    "keywords": [
      "enterprise AI application",
      "data integration",
      "AI model deployment",
      "flexible UI",
      "on-premises deployment",
      "secure application",
      "team collaboration",
      "OpenBB Apps",
      "proprietary data",
      "licensed data",
      "AI workflows",
      "enterprise security",
      "private cloud",
      "data privacy"
    ]
  },
  {
    "title": "YouTube",
    "path": "/workspace/developers/widget-types/youtube",
    "category": "Workspace",
    "description": "Learn how to create YouTube video widgets in OpenBB Workspace, including basic video embedding and transcript support for AI assistants.",
    "keywords": [
      "youtube widget",
      "video widget",
      "youtube embed",
      "video player",
      "transcript",
      "AI context",
      "OpenBB Workspace",
      "widget development"
    ]
  }
];
