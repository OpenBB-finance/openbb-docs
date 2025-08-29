import Link from "@docusaurus/Link";
import { translate } from "@docusaurus/Translate";
import { useLocation } from "@docusaurus/router";
import {
	Collapsible,
	ThemeClassNames,
	useCollapsible,
	usePrevious,
	useThemeConfig,
} from "@docusaurus/theme-common";
import { isSamePath } from '@docusaurus/theme-common/internal';
import { useActiveDocContext } from '@docusaurus/plugin-content-docs/client';
import useIsBrowser from "@docusaurus/useIsBrowser";
import DocSidebarItems from "@theme/DocSidebarItems";
import clsx from "clsx";
import React, { useEffect, useMemo } from "react";
import { useIFrameContext } from "../../Root.tsx";
// If we navigate to a category and it becomes active, it should automatically
// expand itself
function useAutoExpandActiveCategory({ isActive, collapsed, updateCollapsed, items, activePath }) {
	const wasActive = usePrevious(isActive);
	useEffect(() => {
		const justBecameActive = isActive && !wasActive;
		if (justBecameActive && collapsed) {
			// Only auto-expand if this category contains the active item
			const containsActiveItem = items.some(item => {
				if (item.type === 'link') {
					return item.href === activePath;
				}
				if (item.type === 'category') {
					return item.items.some(subItem => subItem.href === activePath);
				}
				return false;
			});
			
			if (containsActiveItem) {
				updateCollapsed(false);
			}
		}
	}, [isActive, wasActive, collapsed, updateCollapsed, items, activePath]);
}
/**
 * When a collapsible category has no link, we still link it to its first child
 * during SSR as a temporary fallback. This allows to be able to navigate inside
 * the category even when JS fails to load, is delayed or simply disabled
 * React hydration becomes an optional progressive enhancement
 * see https://github.com/facebookincubator/infima/issues/36#issuecomment-772543188
 * see https://github.com/facebook/docusaurus/issues/3030
 */
function useCategoryHrefWithSSRFallback(item, href) {
	const isBrowser = useIsBrowser();
	return useMemo(() => {
		if (href) {
			return href;
		}
		// In these cases, it's not necessary to render a fallback
		// We skip the "findFirstCategoryLink" computation
		if (isBrowser || !item.collapsible) {
			return undefined;
		}
		// return findFirstCategoryLink(item);
	}, [item, isBrowser, href]);
}
function CollapseButton({ categoryLabel, onClick }) {
	return (
		<button
			aria-label={translate(
				{
					id: "theme.DocSidebarItem.toggleCollapsedCategoryAriaLabel",
					message: "Toggle the collapsible sidebar category '{label}'",
					description:
						"The ARIA label to toggle the collapsible sidebar category",
				},
				{ label: categoryLabel },
			)}
			type="button"
			className="clean-btn menu__caret"
			onClick={onClick}
		/>
	);
}

export default function DocSidebarItemCategory({
	item,
	onItemClick,
	activePath,
	level,
	index,
	...props
}) {
	const { items, label, collapsible, className, href } = item;
	const { activeDoc } = useActiveDocContext();
	const isActive = activeDoc?.path === activePath;
	const labelToHrefMap = {
		"OpenBB Terminal": "/workspace",
		"OpenBB Platform": "/platform",
		"OpenBB Bot": "/bot",
		"OpenBB Terminal Pro": "/pro",
		"OpenBB Add-in for Excel": "/excel",
		"OpenBB Platform CLI": "/cli",
		"ODP Desktop App": "/odp",
	};
	const newHref = labelToHrefMap[label] || href;
	const {
		docs: {
			sidebar: { autoCollapseCategories },
		},
	} = useThemeConfig();
	const hrefWithSSRFallback = useCategoryHrefWithSSRFallback(item, newHref);
	const isCurrentPage = isSamePath(newHref, activePath);
	const { collapsed, setCollapsed } = useCollapsible({
		// Active categories are always initialized as expanded. The default
		// (`item.collapsed`) is only used for non-active categories.
		initialState: () => {
			if (!collapsible) {
				return false;
			}
			return isActive ? false : item.collapsed;
		},
	});

	// Use this instead of `setCollapsed`, because it is also reactive
	const updateCollapsed = (toCollapsed = !collapsed) => {
		setCollapsed(toCollapsed);
	};

	useAutoExpandActiveCategory({ isActive, collapsed, updateCollapsed, items, activePath });

	const { isIFrame } = useIFrameContext();
	const dontShowLink =
		isIFrame && ["OpenBB Terminal", "OpenBB SDK", "OpenBB Bot"].includes(label);

	const location = useLocation();
	const isProPage = location.pathname.startsWith("/workspace");
	const isExcelPage = location.pathname.startsWith("/excel");

	// Hide the OpenBB Terminal Pro section if we're not on a /pro or /excel page
	if (item.customProps?.hiddenByDefault && !(isProPage || isExcelPage)) {
		return null;
	}

	// Temporary, remove to show Excel tab
	if (item.customProps?.onlyDirectAccess && !isExcelPage) {
		return null;
	}

	return (
		<li
			className={clsx(
				ThemeClassNames.docs.docSidebarItemCategory,
				ThemeClassNames.docs.docSidebarItemCategoryLevel(level),
				"menu__list-item",
				{
					"menu__list-item--collapsed": collapsed,
				},
				className,
			)}
		>
			<div
				className={clsx("menu__list-item-collapsible", {
					"menu__list-item-collapsible--active": isCurrentPage,
				})}
			>
				<Link
					className={clsx("menu__link", {
						"menu__link--sublist": collapsible,
						"menu__link--sublist-caret": !newHref && collapsible,
						"menu__link--active": isActive,
					})}
					onClick={
						collapsible
							? (e) => {
									if (dontShowLink) {
										e.preventDefault();
									}
									onItemClick?.(item);
									if (newHref) {
										updateCollapsed(false);
									} else {
										e.preventDefault();
										updateCollapsed();
									}
								}
							: () => {
									if (dontShowLink) {
										e.preventDefault();
									}
									onItemClick?.(item);
								}
					}
					aria-current={isCurrentPage ? "page" : undefined}
					aria-expanded={collapsible ? !collapsed : undefined}
					href={collapsible ? hrefWithSSRFallback ?? "#" : hrefWithSSRFallback}
					{...props}
				>
					{label}
				</Link>
				{newHref && collapsible && (
					<CollapseButton
						categoryLabel={label}
						onClick={(e) => {
							e.preventDefault();
							updateCollapsed();
						}}
					/>
				)}
			</div>

			<Collapsible lazy as="ul" className="menu__list" collapsed={collapsed}>
				<DocSidebarItems
					items={items}
					tabIndex={collapsed ? -1 : 0}
					onItemClick={onItemClick}
					activePath={activePath}
					level={level + 1}
				/>
			</Collapsible>
		</li>
	);
}
