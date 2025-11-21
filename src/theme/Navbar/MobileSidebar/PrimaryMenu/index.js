import Link from "@docusaurus/Link";
import { useLocation } from "@docusaurus/router";
import { useNavbarMobileSidebar } from "@docusaurus/theme-common/internal";
import NavbarColorModeToggle from "@theme/Navbar/ColorModeToggle";
import { useEffect, useState } from "react";
import { useMobileMenu } from "../MobileMenuContext";

// Chevron icon component
function ChevronIcon({ isExpanded }) {
	return (
		<svg
			width="16"
			height="16"
			viewBox="0 0 16 16"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={`mobile-menu-chevron ${isExpanded ? "mobile-menu-chevron--expanded" : ""}`}
		>
			<path
				d="M6 12L10 8L6 4"
				stroke="currentColor"
				strokeWidth="1"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}

// Expandable menu item for nested items within sections (supports recursive nesting)
function ExpandableMenuItem({
	item,
	mobileSidebar,
	location,
	isExpanded,
	onToggle,
	expandedItems,
	toggleExpanded,
}) {
	const isActive = item.href && location.pathname === item.href;

	return (
		<div className="mobile-menu-expandable-item">
			<div className="mobile-menu-item mobile-menu-item--expandable">
				{item.href ? (
					<Link
						to={item.href}
						className={`mobile-menu-item-label ${isActive ? "mobile-menu-item--active" : ""}`}
						onClick={() => mobileSidebar.toggle()}
					>
						{item.label}
					</Link>
				) : (
					<span className="mobile-menu-item-label">{item.label}</span>
				)}
				<div onClick={onToggle} className="mobile-menu-chevron-wrapper">
					<ChevronIcon isExpanded={isExpanded} />
				</div>
			</div>
			{isExpanded && (
				<div className="mobile-menu-sub-items">
					{item.subItems.map((subItem, idx) =>
						subItem.expandable ? (
							<ExpandableMenuItem
								key={idx}
								item={subItem}
								mobileSidebar={mobileSidebar}
								location={location}
								isExpanded={expandedItems[subItem.label] || false}
								onToggle={() => toggleExpanded(subItem.label)}
								expandedItems={expandedItems}
								toggleExpanded={toggleExpanded}
							/>
						) : (
							<Link
								key={idx}
								to={subItem.href}
								className={`mobile-menu-sub-item ${location.pathname === subItem.href ? "mobile-menu-item--active" : ""}`}
								onClick={() => mobileSidebar.toggle()}
							>
								{subItem.label}
							</Link>
						)
					)}
				</div>
			)}
		</div>
	);
}

// Main section component (for Workspace and ODP)
function MainSection({ title, isExpanded, onToggle, children, isActive }) {
	return (
		<div
			className={`mobile-menu-main-section ${isActive ? "mobile-menu-main-section--active" : ""}`}
		>
			<div className="mobile-menu-main-section-header" onClick={onToggle}>
				<span className="mobile-menu-main-section-title">{title}</span>
				<ChevronIcon isExpanded={isExpanded} />
			</div>
			{isExpanded && (
				<div className="mobile-menu-main-section-content">{children}</div>
			)}
		</div>
	);
}

// Workspace section content
function WorkspaceContent({ mobileSidebar, location }) {
	const workspaceLinks = [
		{
			section: "Getting Started",
			items: [
				{ label: "Workspace Overview", href: "/workspace" },
				{
					label: "Progressive Web App (PWA)",
					href: "/workspace/getting-started/pwa",
				},
				{
					label: "Enterprise",
					href: "/workspace/getting-started/enterprise",
					expandable: true,
					subItems: [
						{
							label: "Data Control & Security",
							href: "/workspace/getting-started/enterprise/data-control",
						},
						{
							label: "Team Collaboration",
							href: "/workspace/getting-started/enterprise/team-collaboration",
						},
						{
							label: "Administration",
							href: "/workspace/getting-started/enterprise/administration",
						},
						{
							label: "Support & Services",
							href: "/workspace/getting-started/enterprise/support-services",
						},
					],
				},
				{
					label: "OpenBB Python Package",
					href: "/workspace/getting-started/platform-installer",
				},
				{ label: "FAQs", href: "/workspace/getting-started/faqs" },
			],
		},
		{
			section: "Analysts",
			items: [
				{
					label: "Widgets",
					href: "/workspace/analysts/widgets/overview",
					expandable: true,
					subItems: [
						{ label: "Core Widgets", href: "/workspace/analysts/widgets/core-widgets" },
						{ label: "Interacting With Data", href: "/workspace/analysts/widgets/interacting-with-data" },
						{ label: "Static Files", href: "/workspace/analysts/widgets/static-files" },
						{ label: "AI-generated Widgets", href: "/workspace/analysts/widgets/ai-generated-widgets" },
						{ label: "Sandbox Widgets", href: "/workspace/analysts/widgets/sandbox-widgets" },
					],
				},
				{ label: "Dashboards", href: "/workspace/analysts/dashboards" },
				{ label: "Apps", href: "/workspace/analysts/apps" },
				{
					label: "AI Features",
					href: "/workspace/analysts/ai-features/copilot-basics",
					expandable: true,
					subItems: [
						{
							label: "Context Management",
							href: "/workspace/analysts/ai-features/copilot-context",
						},
						{
							label: "Data Handling",
							href: "/workspace/analysts/ai-features/copilot-data-handling",
						},
						{
							label: "Step-by-Step Reasoning",
							href: "/workspace/analysts/ai-features/copilot-reasoning",
						},
						{
							label: "MCP Tools",
							href: "/workspace/analysts/ai-features/mcp-tools",
						},
						{
							label: "Output Formats",
							href: "/workspace/analysts/ai-features/copilot-output",
						},
						{
							label: "Generative UI (Beta)",
							href: "/workspace/analysts/ai-features/generative-ui",
						},
						{
							label: "Orchestrator Mode (Beta)",
							href: "/workspace/analysts/ai-features/orchestrator-mode",
						},
					],
				},
				{
					label: "Excel Add-in",
					href: "/workspace/analysts/excel-addin/excel-overview",
					expandable: true,
					subItems: [
						{
							label: "Installation",
							href: "/workspace/analysts/excel-addin/excel-installation",
						},
						{
							label: "OBB.GET",
							href: "/workspace/analysts/excel-addin/obb-get",
						},
						{
							label: "OBB.WIDGET",
							href: "/workspace/analysts/excel-addin/obb-widget",
						},
						{
							label: "Troubleshooting",
							href: "/workspace/analysts/excel-addin/troubleshooting",
						},
					],
				},
			],
		},
		{
			section: "Developers",
			items: [
				{
					label: "Data Integration",
					href: "/workspace/developers/data-integration",
				},
				{
					label: "Widget Types",
					expandable: true,
					subItems: [
						{
							label: "AgGrid Table & Charts",
							href: "/workspace/developers/widget-types/aggrid-table-charts",
						},
						{
							label: "File Viewer",
							href: "/workspace/developers/widget-types/file-viewer",
						},
						{
							label: "Highcharts",
							href: "/workspace/developers/widget-types/highcharts",
						},
						{
							label: "HTML",
							href: "/workspace/developers/widget-types/html",
						},
						{
							label: "Live Grid",
							href: "/workspace/developers/widget-types/live-grid",
						},
						{
							label: "Markdown",
							href: "/workspace/developers/widget-types/markdown",
						},
						{
							label: "Metric",
							href: "/workspace/developers/widget-types/metric",
						},
						{
							label: "Newsfeed",
							href: "/workspace/developers/widget-types/newsfeed",
						},
						{
							label: "Omni",
							href: "/workspace/developers/widget-types/omni",
						},
						{
							label: "Plotly Charts",
							href: "/workspace/developers/widget-types/plotly-charts",
						},
						{
							label: "SSRM Mode",
							href: "/workspace/developers/widget-types/ssrm_mode",
						},
						{
							label: "TradingView Charts",
							href: "/workspace/developers/widget-types/tradingview-charts",
						},
					],
				},
				{
					label: "Widget Parameters",
					expandable: true,
					subItems: [
						{
							label: "Advanced Dropdown",
							href: "/workspace/developers/widget-parameters/advanced-dropdown",
						},
						{
							label: "Boolean Toggle",
							href: "/workspace/developers/widget-parameters/boolean-toggle",
						},
						{
							label: "Cell Click Grouping",
							href: "/workspace/developers/widget-parameters/cell-click-grouping",
						},
						{
							label: "Date Picker",
							href: "/workspace/developers/widget-parameters/date-picker",
						},
						{
							label: "Dependent Dropdown",
							href: "/workspace/developers/widget-parameters/dependent-dropdown",
						},
						{
							label: "Dropdown",
							href: "/workspace/developers/widget-parameters/dropdown",
						},
						{
							label: "Input Form",
							href: "/workspace/developers/widget-parameters/input-form",
						},
						{
							label: "Number Input",
							href: "/workspace/developers/widget-parameters/number-input",
						},
						{
							label: "Parameter Grouping",
							href: "/workspace/developers/widget-parameters/parameter-grouping",
						},
						{
							label: "Parameter Positioning",
							href: "/workspace/developers/widget-parameters/parameter-positioning",
						},
						{
							label: "Text Input",
							href: "/workspace/developers/widget-parameters/text-input",
						},
					],
				},
				{
					label: "Widget Configuration",
					expandable: true,
					subItems: [
						{
							label: "Category & Subcategory",
							href: "/workspace/developers/widget-configuration/category-subcategory",
						},
						{
							label: "Error Handling",
							href: "/workspace/developers/widget-configuration/error-handling",
						},
						{
							label: "Grid Size",
							href: "/workspace/developers/widget-configuration/grid-size",
						},
						{
							label: "Matching Widget to MCP Tool",
							href: "/workspace/developers/widget-configuration/matching-widget-to-mcp-tool",
						},
						{
							label: "Refetch Interval",
							href: "/workspace/developers/widget-configuration/refetch-interval",
						},
						{
							label: "Render Functions",
							href: "/workspace/developers/widget-configuration/render-functions",
						},
						{
							label: "Run Button",
							href: "/workspace/developers/widget-configuration/run-button",
						},
						{
							label: "Stale Time",
							href: "/workspace/developers/widget-configuration/stale-time",
						},
					],
				},
				{ label: "Apps", href: "/workspace/developers/apps/apps" },
				{
					label: "Agents Integration",
					href: "/workspace/developers/agents-integration",
				},
				{ label: "OpenBB AI SDK", href: "/workspace/developers/openbb-ai-sdk" },
				{
					label: "AI Features",
					expandable: true,
					subItems: [
						{
							label: "Citations for Documents",
							href: "/workspace/developers/ai-features/citations-for-documents",
						},
						{
							label: "Create Charts",
							href: "/workspace/developers/ai-features/create-charts",
						},
						{
							label: "Create Tables",
							href: "/workspace/developers/ai-features/create-tables",
						},
						{
							label: "Custom Agent Features",
							href: "/workspace/developers/ai-features/custom-agent-features",
						},
						{
							label: "Highlight Widget Citations",
							href: "/workspace/developers/ai-features/highlight-widget-citations",
						},
						{
							label: "Interact with Dashboard",
							href: "/workspace/developers/ai-features/interact-with-dashboard",
						},
						{
							label: "Parse PDF Context",
							href: "/workspace/developers/ai-features/parse-pdf-context",
						},
						{
							label: "Parse Widget Data",
							href: "/workspace/developers/ai-features/parse-widget-data",
						},
						{
							label: "Share Step-by-Step Reasoning",
							href: "/workspace/developers/ai-features/share-step-by-step-reasoning",
						},
					],
				},
				{
					label: "JSON Specs",
					expandable: true,
					subItems: [
						{
							label: "Agents JSON Reference",
							href: "/workspace/developers/json-specs/agents-json-reference",
						},
						{
							label: "Apps JSON Reference",
							href: "/workspace/developers/json-specs/apps-json-reference",
						},
						{
							label: "Widgets JSON Reference",
							href: "/workspace/developers/json-specs/widgets-json-reference",
						},
					],
				},
			],
		},
	];

	// Function to determine which items should be initially expanded based on current path
	const getInitialExpandedItems = () => {
		const expanded = {};
		workspaceLinks.forEach((section) => {
			section.items.forEach((item) => {
				if (item.expandable && item.subItems) {
					// Check if any subItem matches the current pathname
					const hasActiveSubItem = item.subItems.some(
						(subItem) => subItem.href === location.pathname,
					);
					if (hasActiveSubItem) {
						expanded[item.label] = true;
					}
				}
			});
		});
		return expanded;
	};

	const [expandedItems, setExpandedItems] = useState(() => getInitialExpandedItems());

	useEffect(() => {
		setExpandedItems(getInitialExpandedItems());
	}, [location.pathname]);

	const toggleExpanded = (itemLabel) => {
		setExpandedItems((prev) => ({
			...prev,
			[itemLabel]: !prev[itemLabel],
		}));
	};

	return (
		<>
			{workspaceLinks.map((section, idx) => (
				<div key={idx} className="mobile-menu-section">
					<div className="mobile-menu-section-title">{section.section}</div>
					{section.items.map((item, itemIdx) =>
						item.expandable ? (
							<ExpandableMenuItem
								key={itemIdx}
								item={item}
								mobileSidebar={mobileSidebar}
								location={location}
								isExpanded={expandedItems[item.label] || false}
								onToggle={() => toggleExpanded(item.label)}
								expandedItems={expandedItems}
								toggleExpanded={toggleExpanded}
							/>
						) : (
							<Link
								key={itemIdx}
								to={item.href}
								className={`mobile-menu-item ${location.pathname === item.href ? "mobile-menu-item--active" : ""}`}
								onClick={() => mobileSidebar.toggle()}
							>
								{item.label}
							</Link>
						),
					)}
				</div>
			))}
		</>
	);
}

// ODP section content
function ODPContent({ mobileSidebar, location }) {
	const odpLinks = [
		{
			section: "Desktop",
			items: [
				{ label: "Introduction", href: "/desktop" },
				{ label: "Installation", href: "/desktop/installation" },
				{ label: "Environments", href: "/desktop/environments" },
				{ label: "Backends", href: "/desktop/backends" },
				{ label: "API Keys", href: "/desktop/api-keys" },
				{ label: "Uninstall", href: "/desktop/uninstall" },
			],
		},
		{
			section: "Python",
			items: [
				{ label: "Introduction", href: "/python" },
				{ label: "Installation", href: "/python/installation" },
				{
					label: "Settings",
					href: "/python/settings",
					expandable: true,
					subItems: [
						{
							label: "User Settings",
							href: "/python/settings/user_settings",
							expandable: true,
							subItems: [
								{ label: "API Keys", href: "/python/settings/user_settings/api_keys" },
								{ label: "Preferences", href: "/python/settings/user_settings/preferences" },
								{ label: "Defaults", href: "/python/settings/user_settings/defaults" },
							],
						},
						{ label: "System Settings", href: "/python/settings/system_settings" },
						{ label: "MCP Settings", href: "/python/settings/mcp_settings" },
						{ label: "Environment Variables", href: "/python/settings/environment_variables" },
					],
				},
				{
					label: "Quick Start",
					href: "/python/quickstart",
					expandable: true,
					subItems: [
						{ label: "REST API", href: "/python/quickstart/rest_api" },
						{ label: "MCP Server", href: "/python/quickstart/mcp" },
						{ label: "Workspace Integration", href: "/python/quickstart/workspace" },
					],
				},
				{
					label: "Basic Usage",
					href: "/python/basic_usage",
					expandable: true,
					subItems: [
						{ label: "Input Query Parameters", href: "/python/basic_usage/query_parameters" },
						{ label: "Response Model Output", href: "/python/basic_usage/response_model" },
					],
				},
				{ label: "Reference", href: "/python/reference" },
				{
					label: "Extensions",
					href: "/python/extensions",
					expandable: true,
					subItems: [
						{ label: "openbb-core", href: "/python/extensions/openbb-core" },
						{
							label: "Infrastructure",
							href: "/python/extensions/infrastructure/openbb-charting",
							expandable: true,
							subItems: [
								{ label: "Technical Indicators", href: "/python/extensions/infrastructure/openbb-charting/indicators" },
							],
						},
						{
							label: "Interface",
							href: "/python/extensions/interface/openbb-api",
							expandable: true,
							subItems: [
								{ label: "openbb-mcp", href: "/python/extensions/interface/openbb-mcp" },
							],
						},
						{ label: "Providers", href: "/python/extensions/providers" },
						{
							label: "Data Processing",
							href: "/python/extensions/data-processing/econometrics",
							expandable: true,
							subItems: [
								{ label: "openbb-technical", href: "/python/extensions/data-processing/technical" },
								{ label: "openbb-quantitative", href: "/python/extensions/data-processing/quantitative" },
							],
						},
					],
				},
				{
					label: "Developer",
					href: "/python/developer",
					expandable: true,
					subItems: [
						{ label: "Architecture Overview", href: "/python/developer/architecture_overview" },
						{ label: "Standardization", href: "/python/developer/standardization" },
						{
							label: "Extension Types",
							href: "/python/developer/extension_types",
							expandable: true,
							subItems: [
								{ label: "Provider Extensions", href: "/python/developer/extension_types/provider" },
								{ label: "Router Extensions", href: "/python/developer/extension_types/router" },
								{ label: "OBBject Extensions", href: "/python/developer/extension_types/obbject" },
							],
						},
						{ label: "How-To", href: "/python/developer/how-to" },
					],
				},
				{
					label: "FAQs",
					expandable: true,
					subItems: [
						{ label: "Data and Data Providers", href: "/python/faqs/data_providers" },
						{ label: "Errors", href: "/python/faqs/errors" },
						{ label: "License", href: "/python/faqs/license" },
					],
				},
			],
		},
		{
			section: "CLI",
			items: [
				{ label: "Introduction", href: "/cli" },
				{ label: "Installation", href: "/cli/installation" },
				{ label: "Quick Start", href: "/cli/quickstart" },
				{ label: "Structure and Navigation", href: "/cli/structure-and-navigation" },
				{ label: "Commands And Arguments", href: "/cli/commands-and-arguments" },
				{ label: "Configuration & Settings", href: "/cli/configuration" },
				{ label: "Data Sources", href: "/cli/data-sources" },
				{ label: "OpenBBUserData Folder", href: "/cli/openbbuserdata" },
				{ label: "Interactive Charts", href: "/cli/interactive-charts" },
				{ label: "Interactive Tables", href: "/cli/interactive-tables" },
				{
					label: "Routines",
					href: "/cli/routines/introduction-to-routines",
					expandable: true,
					subItems: [
						{ label: "Routine Macro Recorder", href: "/cli/routines/routine-macro-recorder" },
						{ label: "Advanced Routines", href: "/cli/routines/advanced-routines" },
					],
				},
			],
		},
	];

	// Function to determine which items should be initially expanded based on current path
	const getInitialExpandedItems = () => {
		const expanded = {};
		odpLinks.forEach((section) => {
			section.items.forEach((item) => {
				if (item.expandable && item.subItems) {
					// Check if any subItem matches the current pathname
					const hasActiveSubItem = item.subItems.some(
						(subItem) => subItem.href === location.pathname,
					);
					if (hasActiveSubItem) {
						expanded[item.label] = true;
					}
				}
			});
		});
		return expanded;
	};

	const [expandedItems, setExpandedItems] = useState(() => getInitialExpandedItems());

	useEffect(() => {
		setExpandedItems(getInitialExpandedItems());
	}, [location.pathname]);

	const toggleExpanded = (itemLabel) => {
		setExpandedItems((prev) => ({
			...prev,
			[itemLabel]: !prev[itemLabel],
		}));
	};

	return (
		<>
			{odpLinks.map((section, idx) => (
				<div key={idx} className="mobile-menu-section">
					<div className="mobile-menu-section-title">{section.section}</div>
					{section.items.map((item, itemIdx) =>
						item.expandable ? (
							<ExpandableMenuItem
								key={itemIdx}
								item={item}
								mobileSidebar={mobileSidebar}
								location={location}
								isExpanded={expandedItems[item.label] || false}
								onToggle={() => toggleExpanded(item.label)}
								expandedItems={expandedItems}
								toggleExpanded={toggleExpanded}
							/>
						) : (
							<Link
								key={itemIdx}
								to={item.href}
								className={`mobile-menu-item ${location.pathname === item.href ? "mobile-menu-item--active" : ""}`}
								onClick={() => mobileSidebar.toggle()}
							>
								{item.label}
							</Link>
						),
					)}
				</div>
			))}
		</>
	);
}

export default function PrimaryMenu() {
	const { expandedSections, toggleSection } = useMobileMenu();
	const mobileSidebar = useNavbarMobileSidebar();
	const location = useLocation();

	// Determine which section is active based on current path
	const isHome = location.pathname === "/";
	const isWorkspace = location.pathname.startsWith("/workspace");
	const isODP =
		location.pathname.startsWith("/desktop") ||
		location.pathname.startsWith("/python") ||
		location.pathname.startsWith("/cli");

	return (
		<div className="mobile-menu-primary-wrapper">
			<div className="mobile-menu-content">
				{/* Theme toggle at the top */}
				<div className="mobile-menu-theme-toggle">
					<NavbarColorModeToggle />
				</div>

				{/* Home - Link */}
				<div className="mobile-menu-home-wrapper">
					<Link
						to="/"
						className={`mobile-menu-home-link ${isHome ? "mobile-menu-home-link--active" : ""}`}
						onClick={() => mobileSidebar.toggle()}
					>
						<span className="mobile-menu-main-section-title">Home</span>
					</Link>
				</div>

				{/* Workspace - Expandable section */}
				<MainSection
					title="Workspace"
					isExpanded={expandedSections.workspace}
					onToggle={() => toggleSection("workspace")}
					isActive={isWorkspace}
				>
					<WorkspaceContent mobileSidebar={mobileSidebar} location={location} />
				</MainSection>

				{/* ODP - Expandable section */}
				<MainSection
					title="ODP"
					isExpanded={expandedSections.odp}
					onToggle={() => toggleSection("odp")}
					isActive={isODP}
				>
					<ODPContent mobileSidebar={mobileSidebar} location={location} />
				</MainSection>

				{/* Login button at the bottom */}
				<div className="mobile-menu-login">
					<a
						href="https://pro.openbb.co/"
						target="_blank"
						rel="noreferrer noopener"
						className="mobile-login-button"
					>
						Login
					</a>
				</div>
			</div>
		</div>
	);
}
