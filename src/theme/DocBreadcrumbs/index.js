import React from 'react';
import clsx from 'clsx';
import {ThemeClassNames} from '@docusaurus/theme-common';
import {useSidebarBreadcrumbs, useDocsSidebar, isActiveSidebarItem} from '@docusaurus/plugin-content-docs/client';
import {useLocation} from '@docusaurus/router';
import {isSamePath} from '@docusaurus/theme-common/internal';
import styles from './styles.module.css';
import {translate} from '@docusaurus/Translate';

// We suppose that every doc path is like /section/category/id
// We want to show only the category name, not the page title
function BreadcrumbsItemLink({children, href}) {
  return (
    <li className="breadcrumbs__item">
      <a href={href} className={clsx('breadcrumbs__link', styles.breadcrumbsItemLink)}>
        {children}
      </a>
    </li>
  );
}

function BreadcrumbsItem({children}) {
  return (
    <li className="breadcrumbs__item">
      <span className={clsx('breadcrumbs__link', styles.breadcrumbsItemLink)}>
        {children}
      </span>
    </li>
  );
}

export default function DocBreadcrumbs() {
  const breadcrumbs = useSidebarBreadcrumbs();
  const { pathname } = useLocation();
  const sidebar = useDocsSidebar();

  if (!breadcrumbs || breadcrumbs.length === 0) {
    return null;
  }

  // Determine the top-level sidebar category for current page
  const findTopCategoryLabel = () => {
    if (!sidebar) return null;
    const path = [];
    function dfs(items) {
      for (const item of items) {
        if (item.type === 'category') {
          // If this category is active anywhere within, keep it in the path
          if (
            isActiveSidebarItem(item, pathname) ||
            dfs(item.items)
          ) {
            path.unshift(item);
            return true;
          }
        } else if (item.type === 'link' || item.type === 'doc' || item.type === 'ref') {
          if (isSamePath(item.href, pathname)) {
            return true;
          }
        }
      }
      return false;
    }
    dfs(sidebar.items);
    return path.length > 0 ? path[0].label : null;
  };

  // Prefer extracting the category directly from breadcrumbs.
  // For Workspace, skip the product root ("OpenBB Workspace") and take the next category
  const breadcrumbCategories = breadcrumbs?.filter((b) => b.type === 'category') ?? [];
  const topCategoryFromBreadcrumbs = (() => {
    if (breadcrumbCategories.length === 0) return null;
    if (pathname.startsWith('/workspace') && breadcrumbCategories.length > 1) {
      return breadcrumbCategories[1].label; // e.g., "Getting Started", "Analysts"
    }
    return breadcrumbCategories[0].label;
  })();
  const topCategoryLabel = topCategoryFromBreadcrumbs ?? findTopCategoryLabel();

  // Keep previous behavior as secondary option
  const categoryBreadcrumb = breadcrumbs.length > 1 ? breadcrumbs[breadcrumbs.length - 2] : null;

  // Route-based fallback labels for sections with shallow breadcrumb trees
  const productLabelByPath = [
    { startsWith: '/workspace', label: 'OpenBB Workspace' },
    { startsWith: '/platform', label: 'OpenBB Platform' },
    { startsWith: '/excel', label: 'OpenBB Add-in for Excel' },
    { startsWith: '/cli', label: 'OpenBB Platform CLI' },
    { startsWith: '/desktop', label: 'ODP Desktop' },
    { startsWith: '/python', label: 'ODP Python' },
    { startsWith: '/bot', label: 'OpenBB Bot' },
  ];
  const fallbackLabel = productLabelByPath.find((e) => pathname.startsWith(e.startsWith))?.label;

  return (
    <nav
      className={clsx(
        ThemeClassNames.docs.docBreadcrumbs,
        styles.breadcrumbsContainer,
      )}
      aria-label={translate({
        id: 'theme.docs.breadcrumbs.navAriaLabel',
        message: 'Breadcrumbs',
        description: 'The ARIA label for the breadcrumbs',
      })}>
      <ul className="breadcrumbs" itemScope itemType="https://schema.org/BreadcrumbList">
        {(topCategoryLabel || categoryBreadcrumb || fallbackLabel) && (
          <BreadcrumbsItem>
            {topCategoryLabel || (categoryBreadcrumb ? categoryBreadcrumb.label : fallbackLabel)}
          </BreadcrumbsItem>
        )}
      </ul>
    </nav>
  );
}
