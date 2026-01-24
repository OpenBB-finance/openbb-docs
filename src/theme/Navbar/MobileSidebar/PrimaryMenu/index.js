import Link from "@docusaurus/Link";
import { useLocation } from "@docusaurus/router";
import { useNavbarMobileSidebar } from "@docusaurus/theme-common/internal";
import useGlobalData from "@docusaurus/useGlobalData";
import NavbarColorModeToggle from "@theme/Navbar/ColorModeToggle";
import { useState, useEffect, useMemo } from "react";

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

function SidebarLink({ item, mobileSidebar, location, className = "mobile-menu-item" }) {
	const isActive = location.pathname === item.href;
	return (
		<Link
			to={item.href}
			className={`${className} ${isActive ? "mobile-menu-item--active" : ""}`}
			onClick={() => mobileSidebar.toggle()}
		>
			{item.label}
		</Link>
	);
}

// Convert doc id to href path
function docIdToHref(id) {
	if (!id) return null;
	// Handle index files - they map to the directory path
	if (id.endsWith("/index")) {
		return "/" + id.replace("/index", "/");
	}
	return "/" + id;
}

function SidebarCategory({ item, mobileSidebar, location, expandedItems, toggleExpanded, level = 0 }) {
	const isExpanded = expandedItems[item.label] || false;
	// Handle href, link.path, or link.id for category links
	const categoryHref = item.href || item.link?.path || (item.link?.id ? docIdToHref(item.link.id) : null);
	const isActive = categoryHref && location.pathname === categoryHref;
	const hasItems = item.items && item.items.length > 0;

	// If no items, render as a simple link
	if (!hasItems && categoryHref) {
		return (
			<SidebarLink
				item={{ ...item, href: categoryHref }}
				mobileSidebar={mobileSidebar}
				location={location}
				className={level > 0 ? "mobile-menu-sub-item" : "mobile-menu-item"}
			/>
		);
	}

	return (
		<div className="mobile-menu-expandable-item">
			<div className="mobile-menu-item mobile-menu-item--expandable">
				{categoryHref ? (
					<Link
						to={categoryHref}
						className={`mobile-menu-item-label ${isActive ? "mobile-menu-item--active" : ""}`}
						onClick={() => mobileSidebar.toggle()}
					>
						{item.label}
					</Link>
				) : (
					<span className="mobile-menu-item-label">{item.label}</span>
				)}
				{hasItems && (
					<div onClick={() => toggleExpanded(item.label)} className="mobile-menu-chevron-wrapper">
						<ChevronIcon isExpanded={isExpanded} />
					</div>
				)}
			</div>
			{isExpanded && hasItems && (
				<div className="mobile-menu-sub-items">
					{item.items.map((subItem, idx) => (
						<SidebarItem
							key={idx}
							item={subItem}
							mobileSidebar={mobileSidebar}
							location={location}
							expandedItems={expandedItems}
							toggleExpanded={toggleExpanded}
							level={level + 1}
						/>
					))}
				</div>
			)}
		</div>
	);
}

function SidebarItem({ item, mobileSidebar, location, expandedItems, toggleExpanded, level = 0 }) {
	// Handle type: "doc" - convert to link format
	if (item.type === "doc") {
		const href = docIdToHref(item.id);
		return (
			<SidebarLink
				item={{ ...item, href, label: item.label || item.id.split("/").pop() }}
				mobileSidebar={mobileSidebar}
				location={location}
				className={level > 0 ? "mobile-menu-sub-item" : "mobile-menu-item"}
			/>
		);
	}

	if (item.type === "link") {
		return (
			<SidebarLink
				item={item}
				mobileSidebar={mobileSidebar}
				location={location}
				className={level > 0 ? "mobile-menu-sub-item" : "mobile-menu-item"}
			/>
		);
	}

	if (item.type === "category") {
		return (
			<SidebarCategory
				item={item}
				mobileSidebar={mobileSidebar}
				location={location}
				expandedItems={expandedItems}
				toggleExpanded={toggleExpanded}
				level={level}
			/>
		);
	}

	return null;
}

function MainSection({ title, isExpanded, onToggle, children, isActive }) {
	return (
		<div className={`mobile-menu-main-section ${isActive ? "mobile-menu-main-section--active" : ""}`}>
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

function SidebarSection({ sectionItem, mobileSidebar, location, expandedItems, toggleExpanded }) {
	return (
		<div className="mobile-menu-section">
			<div className="mobile-menu-section-title">{sectionItem.label}</div>
			{sectionItem.items?.map((item, idx) => (
				<SidebarItem
					key={idx}
					item={item}
					mobileSidebar={mobileSidebar}
					location={location}
					expandedItems={expandedItems}
					toggleExpanded={toggleExpanded}
				/>
			))}
		</div>
	);
}

function getInitialExpandedItems(items, pathname) {
	const expanded = {};
	if (!Array.isArray(items)) return expanded;

	const checkItem = (item) => {
		// Check doc items (now have href from resolved sidebar)
		if (item.type === "doc" || item.type === "link") {
			return item.href === pathname;
		}
		if (item.type === "category") {
			const categoryHref = item.href;
			// Recursively check all children
			const hasActiveChild = Array.isArray(item.items) && item.items.some(checkItem);
			if (hasActiveChild || categoryHref === pathname) {
				expanded[item.label] = true;
				return true;
			}
		}
		return false;
	};

	// Check all top-level items recursively
	items.forEach((section) => {
		checkItem(section);
	});

	return expanded;
}

export default function PrimaryMenu() {
	const mobileSidebar = useNavbarMobileSidebar();
	const location = useLocation();

	// Get sidebar data from our custom sidebar-export-plugin
	const globalData = useGlobalData();
	const sidebarItems = useMemo(() => {
		const items = globalData?.["sidebar-export-plugin"]?.default?.sidebar || [];
		return items;
	}, [globalData]);

	const isHome = location.pathname === "/";
	const isWorkspace = location.pathname.startsWith("/workspace");
	const isODP =
		location.pathname.startsWith("/odp") ||
		location.pathname.startsWith("/python") ||
		location.pathname.startsWith("/cli");

	const { workspaceSections, odpSections } = useMemo(() => {
		if (!sidebarItems?.length) return { workspaceSections: [], odpSections: [] };

		const workspace = [];
		const odp = [];

		sidebarItems.forEach((item) => {
			if (item.type !== "category") return;

			const label = item.label?.toLowerCase() || "";
			if (label.includes("odp") || label.includes("desktop") || label.includes("python") || label.includes("cli")) {
				odp.push(item);
			} else {
				workspace.push(item);
			}
		});

		return { workspaceSections: workspace, odpSections: odp };
	}, [sidebarItems]);

	const [mainSections, setMainSections] = useState(() => ({
		workspace: isWorkspace,
		odp: isODP,
	}));

	const [expandedItems, setExpandedItems] = useState(() =>
		getInitialExpandedItems(sidebarItems, location.pathname)
	);

	useEffect(() => {
		setMainSections({
			workspace: isWorkspace,
			odp: isODP,
		});
		setExpandedItems(getInitialExpandedItems(sidebarItems, location.pathname));
	}, [location.pathname, sidebarItems, isWorkspace, isODP]);

	const toggleMainSection = (section) => {
		setMainSections((prev) => ({
			...prev,
			[section]: !prev[section],
		}));
	};

	const toggleExpanded = (itemLabel) => {
		setExpandedItems((prev) => ({
			...prev,
			[itemLabel]: !prev[itemLabel],
		}));
	};

	return (
		<div className="mobile-menu-primary-wrapper">
			<div className="mobile-menu-content">
				<div className="mobile-menu-theme-toggle">
					<NavbarColorModeToggle />
				</div>

				<div className="mobile-menu-home-wrapper">
					<Link
						to="/"
						className={`mobile-menu-home-link ${isHome ? "mobile-menu-home-link--active" : ""}`}
						onClick={() => mobileSidebar.toggle()}
					>
						<span className="mobile-menu-main-section-title">Home</span>
					</Link>
				</div>

				<MainSection
					title="Workspace"
					isExpanded={mainSections.workspace}
					onToggle={() => toggleMainSection("workspace")}
					isActive={isWorkspace}
				>
					{workspaceSections.map((section, idx) => (
						<SidebarSection
							key={idx}
							sectionItem={section}
							mobileSidebar={mobileSidebar}
							location={location}
							expandedItems={expandedItems}
							toggleExpanded={toggleExpanded}
						/>
					))}
				</MainSection>

				<MainSection
					title="ODP"
					isExpanded={mainSections.odp}
					onToggle={() => toggleMainSection("odp")}
					isActive={isODP}
				>
					{odpSections.map((section, idx) => (
						<SidebarSection
							key={idx}
							sectionItem={section}
							mobileSidebar={mobileSidebar}
							location={location}
							expandedItems={expandedItems}
							toggleExpanded={toggleExpanded}
						/>
					))}
				</MainSection>

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
