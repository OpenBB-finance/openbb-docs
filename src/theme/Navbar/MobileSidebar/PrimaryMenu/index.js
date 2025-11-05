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

// Expandable menu item for nested items within sections
function ExpandableMenuItem({
	item,
	mobileSidebar,
	location,
	isExpanded,
	onToggle,
}) {
	return (
		<div className="mobile-menu-expandable-item">
			<div
				className="mobile-menu-item mobile-menu-item--expandable"
				onClick={onToggle}
			>
				{item.label}
				<ChevronIcon isExpanded={isExpanded} />
			</div>
			{isExpanded && (
				<div className="mobile-menu-sub-items">
					{item.subItems.map((subItem, idx) => (
						<Link
							key={idx}
							to={subItem.href}
							className={`mobile-menu-sub-item ${location.pathname === subItem.href ? "mobile-menu-item--active" : ""}`}
							onClick={() => mobileSidebar.toggle()}
						>
							{subItem.label}
						</Link>
					))}
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
					expandable: true,
					subItems: [
						{
							label: "Overview",
							href: "/workspace/getting-started/enterprise",
						},
						{
							label: "Installation",
							href: "/workspace/getting-started/enterprise/installation",
						},
					],
				},
				{
					label: "OpenBB Python Package",
					href: "/workspace/getting-started/openbb-python-package",
				},
				{ label: "FAQs", href: "/workspace/getting-started/faqs" },
			],
		},
		{
			section: "Analysts",
			items: [
				{
					label: "Widgets",
					expandable: true,
					subItems: [
						{ label: "Overview", href: "/workspace/analysts/widgets/overview" },
					],
				},
				{ label: "Dashboards", href: "/workspace/analysts/dashboards" },
				{ label: "Apps", href: "/workspace/analysts/apps" },
				{
					label: "AI Features",
					expandable: true,
					subItems: [
						{
							label: "Copilot",
							href: "/workspace/analysts/ai-features/copilot",
						},
					],
				},
				{
					label: "Excel Add-in",
					expandable: true,
					subItems: [
						{
							label: "Getting Started",
							href: "/workspace/analysts/excel-add-in/getting-started",
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
							label: "Overview",
							href: "/workspace/developers/widget-types/overview",
						},
					],
				},
				{
					label: "Widget Parameters",
					href: "/workspace/developers/widget-parameters",
				},
				{
					label: "Widget Configuration",
					expandable: true,
					subItems: [
						{
							label: "Overview",
							href: "/workspace/developers/widget-configuration",
						},
					],
				},
				{ label: "Apps", href: "/workspace/developers/apps" },
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
							label: "Overview",
							href: "/workspace/developers/ai-features/overview",
						},
					],
				},
				{
					label: "JSON Specs",
					expandable: true,
					subItems: [
						{
							label: "Overview",
							href: "/workspace/developers/json-specs/overview",
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

	const [expandedItems, setExpandedItems] = useState(getInitialExpandedItems());

	useEffect(() => {
		setExpandedItems(getInitialExpandedItems());
	}, [undefined, getInitialExpandedItems]);

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
				{ label: "Overview", href: "/desktop" },
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
				{ label: "Overview", href: "/python" },
				{ label: "Installation", href: "/python/installation" },
				{
					label: "Quickstart",
					expandable: true,
					subItems: [{ label: "Overview", href: "/python/quickstart" }],
				},
				{
					label: "Basic Usage",
					expandable: true,
					subItems: [
						{ label: "Overview", href: "/python/basic_usage" },
						{
							label: "Query Parameters",
							href: "/python/basic_usage/query_parameters",
						},
						{
							label: "Response Model",
							href: "/python/basic_usage/response_model",
						},
					],
				},
				{
					label: "Extensions",
					expandable: true,
					subItems: [{ label: "Overview", href: "/python/extensions" }],
				},
				{
					label: "Developer",
					expandable: true,
					subItems: [{ label: "Overview", href: "/python/developer" }],
				},
				{
					label: "Settings",
					expandable: true,
					subItems: [{ label: "Overview", href: "/python/settings" }],
				},
				{
					label: "FAQs",
					expandable: true,
					subItems: [{ label: "Overview", href: "/python/faqs" }],
				},
				{ label: "Reference", href: "/python/reference" },
			],
		},
		{
			section: "CLI",
			items: [
				{ label: "Overview", href: "/cli" },
				{ label: "Installation", href: "/cli/installation" },
				{ label: "Quickstart", href: "/cli/quickstart" },
				{ label: "Commands & Arguments", href: "/cli/commands-and-arguments" },
				{
					label: "Structure & Navigation",
					href: "/cli/structure-and-navigation",
				},
				{ label: "Data Sources", href: "/cli/data-sources" },
				{ label: "Interactive Charts", href: "/cli/interactive-charts" },
				{ label: "Interactive Tables", href: "/cli/interactive-tables" },
				{
					label: "Routines",
					expandable: true,
					subItems: [{ label: "Overview", href: "/cli/routines" }],
				},
				{ label: "OpenBBUserData", href: "/cli/openbbuserdata" },
				{ label: "Configuration", href: "/cli/configuration" },
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

	const [expandedItems, setExpandedItems] = useState(getInitialExpandedItems());

	useEffect(() => {
		setExpandedItems(getInitialExpandedItems());
	}, [undefined, getInitialExpandedItems]);

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
