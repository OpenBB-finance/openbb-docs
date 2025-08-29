import { useLocation } from "@docusaurus/router";
import DocSidebarItemCategory from "@theme/DocSidebarItem/Category";
import DocSidebarItemHtml from "@theme/DocSidebarItem/Html";
import DocSidebarItemLink from "@theme/DocSidebarItem/Link";
import { useIFrameContext } from "../Root.tsx";

function shouldHideItem(item, productPath) {
	if (item.items) {
		return item.items.every((childItem) =>
			shouldHideItem(childItem, productPath),
		);
	}

	if (item.type === "link") {
		const itemPath = item.href.replace(/\/$/, "");
		return !itemPath.startsWith(productPath);
	}

	if (item.type === "category") {
		return item.items.every((childItem) =>
			shouldHideItem(childItem, productPath),
		);
	}

	return false;
}

export default function DocSidebarItem({ item, ...props }) {
	const { isIFrame } = useIFrameContext();
	const { pathname } = useLocation();
	const isPro = pathname.startsWith("/workspace");
	const isExcel = pathname.startsWith("/excel");

	// Check if the item is the OpenBB Terminal Pro section
	if (item.customProps?.hiddenByDefault && !(isPro || isExcel)) {
		return null;
	}

	if (isIFrame) {
		const firstTwoPathSegments = pathname.split("/").slice(0, 3).join("/");

		if (shouldHideItem(item, firstTwoPathSegments)) {
			return null;
		}
	}

	if ((isPro || isExcel) && !checkIfAnyChildIsProExcel(item)) {
		return null;
	}

	if (
		!(isPro || isExcel) &&
		item.href?.startsWith("/workspace") &&
		item.href?.startsWith("/excel")
	) {
		return null;
	}

	let addedHtml = null;
	let afterHtml = null;
	if (item.href?.startsWith("/workspace")) {
		if (item.docId === "workspace/index") {
			addedHtml = (
				<DocSidebarItemHtml
					item={{
						type: "html",
						className: "sidebar-title !mt-2",
						value: "Getting Started",
						defaultStyle: true,
					}}
				/>
			);
		} else if (item.docId === "workspace/data-widgets/index") {
			addedHtml = (
				<DocSidebarItemHtml
					item={{
						type: "html",
						className: "sidebar-title !mt-6",
						value: "Widgets",
						defaultStyle: true,
					}}
				/>
			);
		} else if (item.docId === "workspace/apps") {
			addedHtml = (
				<DocSidebarItemHtml
					item={{
						type: "html",
						className: "sidebar-title !mt-6",
						value: "Apps",
						defaultStyle: true,
					}}
				/>
			);
		} else if (item.docId === "workspace/ai-agents") {
			addedHtml = (
				<DocSidebarItemHtml
					item={{
						type: "html",
						className: "sidebar-title !mt-6",
						value: "AI Agents",
						defaultStyle: true,
					}}
				/>
			);
		} else if (item.docId === "workspace/upload-files") {
			addedHtml = (
				<DocSidebarItemHtml
					item={{
						type: "html",
						className: "sidebar-title !mt-6",
						value: "TO BE REMOVED",
						defaultStyle: true,
					}}
				/>
			);
		} else if (item.docId === "workspace/templates") {
			afterHtml = (
				<DocSidebarItemHtml
					item={{
						type: "html",
						className: "sidebar-title !mt-4",
						value: "",
						defaultStyle: true,
					}}
				/>
			);
		}
	}

	if (item.href?.startsWith("/excel")) {
		if (item.docId === "excel/index") {
			addedHtml = (
				<DocSidebarItemHtml
					item={{
						type: "html",
						className: "sidebar-title !mt-2",
						value: "User Interface",
						defaultStyle: true,
					}}
				/>
			);
		} else if (item.docId === "excel/core-widgets") {
			addedHtml = (
				<DocSidebarItemHtml
					item={{
						type: "html",
						className: "sidebar-title !mt-6",
						value: "Widgets",
						defaultStyle: true,
					}}
				/>
			);
		} else if (item.docId === "excel/gallery") {
			addedHtml = (
				<DocSidebarItemHtml
					item={{
						type: "html",
						className: "sidebar-title !mt-6",
						value: "Apps",
						defaultStyle: true,
					}}
				/>
			);
		} else if (item.docId === "excel/copilot-basics") {
			addedHtml = (
				<DocSidebarItemHtml
					item={{
						type: "html",
						className: "sidebar-title !mt-6",
						value: "AI Features",
						defaultStyle: true,
					}}
				/>
			);
		} else if (item.docId === "excel/enterprise") {
			addedHtml = (
				<DocSidebarItemHtml
					item={{
						type: "html",
						className: "sidebar-title !mt-6",
						value: "Enterprise Features",
						defaultStyle: true,
					}}
				/>
			);
		} else if (item.docId === "excel/excel-installation") {
			addedHtml = (
				<DocSidebarItemHtml
					item={{
						type: "html",
						className: "sidebar-title !mt-6",
						value: "Excel Add-in",
						defaultStyle: true,
					}}
				/>
			);
		} else if (item.docId === "excel/faqs") {
			addedHtml = (
				<DocSidebarItemHtml
					item={{
						type: "html",
						className: "sidebar-title !mt-6",
						value: "Others",
						defaultStyle: true,
					}}
				/>
			);
		}
	}

	switch (item.type) {
		case "category":
			return (
				<>
					{addedHtml}
					<DocSidebarItemCategory 
						item={{
							...item,
							collapsed: (isPro || isExcel) && (item.label === "Developers" || item.label === "Analyst") && (pathname === "/workspace" || pathname === "/excel") ? false : item.collapsed
						}} 
						{...props} 
					/>
					{afterHtml}
				</>
			);
		case "html":
			return (
				<>
					{addedHtml}
					<DocSidebarItemHtml item={item} {...props} />
					{afterHtml}
				</>
			);
		case "link":
		default:
			return (
				<>
					{addedHtml}
					<DocSidebarItemLink item={item} {...props} />
					{afterHtml}
				</>
			);
	}
}

function checkIfAnyChildIsProExcel(item) {
	if (item.items) {
		return item.items.some((childItem) => checkIfAnyChildIsProExcel(childItem));
	}

	if (item.type === "link") {
		return (
			item.href?.startsWith("/workspace") || item.href?.startsWith("/excel")
		);
	}

	if (item.type === "category") {
		return item.items.some((childItem) => checkIfAnyChildIsProExcel(childItem));
	}

	return false;
}
