import React from "react";
import { useNavbarMobileSidebar } from "@docusaurus/theme-common/internal";
import { translate } from "@docusaurus/Translate";
import NavbarColorModeToggle from "@theme/Navbar/ColorModeToggle";
import IconClose from "@theme/Icon/Close";
import NavbarLogo from "@theme/Navbar/Logo";
import { useMobileMenu } from "../MobileMenuContext";

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
  const { activeTab, setActiveTab } = useMobileMenu();

  return (
    <div className="mobile-menu-tabs-row">
      <div className="mobile-menu-tabs">
        <button
          className={`mobile-menu-tab ${activeTab === "home" ? "mobile-menu-tab--active" : ""}`}
          onClick={() => setActiveTab("home")}
        >
          Home
        </button>
        <button
          className={`mobile-menu-tab ${activeTab === "workspace" ? "mobile-menu-tab--active" : ""}`}
          onClick={() => setActiveTab("workspace")}
        >
          Workspace
        </button>
        <button
          className={`mobile-menu-tab ${activeTab === "odp" ? "mobile-menu-tab--active" : ""}`}
          onClick={() => setActiveTab("odp")}
        >
          ODP
        </button>
      </div>
      <NavbarColorModeToggle />
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
      <MobileNavTabs />
    </>
  );
}
