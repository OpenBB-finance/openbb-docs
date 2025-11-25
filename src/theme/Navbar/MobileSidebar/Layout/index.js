import React from 'react';

export default function NavbarMobileSidebarLayout({header, primaryMenu}) {
  // Completely bypass Docusaurus's secondary menu logic
  // Don't use useNavbarSecondaryMenu hook at all
  // Never apply the navbar-sidebar__items--show-secondary class

  return (
    <div className="navbar-sidebar">
      {header}
      <div className="navbar-sidebar__items">
        <div className="navbar-sidebar__item menu">{primaryMenu}</div>
      </div>
    </div>
  );
}
