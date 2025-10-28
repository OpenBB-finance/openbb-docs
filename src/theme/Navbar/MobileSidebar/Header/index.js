import React from "react";
import { useNavbarMobileSidebar } from "@docusaurus/theme-common/internal";
import { translate } from "@docusaurus/Translate";
import NavbarColorModeToggle from "@theme/Navbar/ColorModeToggle";
import IconClose from "@theme/Icon/Close";
import SearchBar from "@site/src/theme/SearchBar";
import Link from "@docusaurus/Link";
import { useLocation } from "@docusaurus/router";
import NavbarLogo from "@theme/Navbar/Logo";

function CloseButton() {
  const mobileSidebar = useNavbarMobileSidebar();
  return (
    <button
      type="button"
      aria-label={translate({
        id: "theme.docs.sidebar.closeSidebarButtonAriaLabel",
        message: "Close navigation bar",
        description: "The ARIA label for close button of mobile sidebar",
      })}
      className="clean-btn navbar-sidebar__close"
      onClick={() => mobileSidebar.toggle()}
    >
      <IconClose color="var(--ifm-color-emphasis-600)" />
    </button>
  );
}

function MobileNavTabs() {
  const location = useLocation();
  const mobileSidebar = useNavbarMobileSidebar();
  const isWelcome = location.pathname === "/";
  const isWorkspace = location.pathname.startsWith("/workspace");
  const isODP = location.pathname.startsWith("/desktop") || location.pathname.startsWith("/python") || location.pathname.startsWith("/cli");

  return (
    <div className="mobile-menu-content">
      <Link
        to="/"
        className={`mobile-menu-link ${isWelcome ? "mobile-menu-link--active" : ""}`}
        onClick={() => mobileSidebar.toggle()}
      >
        Welcome
      </Link>
      <Link
        to="/workspace"
        className={`mobile-menu-link ${isWorkspace ? "mobile-menu-link--active" : ""}`}
        onClick={() => mobileSidebar.toggle()}
      >
        Workspace
      </Link>
      <Link
        to="/desktop"
        className={`mobile-menu-link ${isODP ? "mobile-menu-link--active" : ""}`}
        onClick={() => mobileSidebar.toggle()}
      >
        ODP
      </Link>
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
  );
}

export default function NavbarMobileSidebarHeader() {
  return (
    <>
      <div className="mobile-menu-header-top">
        <NavbarLogo />
        <CloseButton />
      </div>
      <div className="mobile-menu-search-row">
        <NavbarColorModeToggle />
        <div className="mobile-menu-search-wrapper">
          <SearchBar />
        </div>
      </div>
      <MobileNavTabs />
    </>
  );
}
