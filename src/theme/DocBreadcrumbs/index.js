import React from 'react';
import clsx from 'clsx';
import {ThemeClassNames} from '@docusaurus/theme-common';
import {
  useSidebarBreadcrumbs,
  useHomePageRoute,
} from '@docusaurus/theme-common/internal';
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
  const homePageRoute = useHomePageRoute();

  if (!breadcrumbs || breadcrumbs.length === 0) {
    return null;
  }

  // Get the parent category name (second to last breadcrumb)
  // If there are multiple breadcrumbs, show the category name
  const categoryBreadcrumb = breadcrumbs.length > 1 ? breadcrumbs[breadcrumbs.length - 2] : null;

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
        {categoryBreadcrumb && (
          <BreadcrumbsItem>
            {categoryBreadcrumb.label}
          </BreadcrumbsItem>
        )}
      </ul>
    </nav>
  );
}
