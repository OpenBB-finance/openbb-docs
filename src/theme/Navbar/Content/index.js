import { useThemeConfig } from "@docusaurus/theme-common";
import {
  splitNavbarItems,
  useNavbarMobileSidebar,
} from "@docusaurus/theme-common/internal";
import NavbarColorModeToggle from "@theme/Navbar/ColorModeToggle";
import NavbarLogo from "@theme/Navbar/Logo";
import NavbarMobileSidebarToggle from "@theme/Navbar/MobileSidebar/Toggle";
import NavbarSearch from "@theme/Navbar/Search";
import NavbarItem from "@theme/NavbarItem";
import SearchBar from "@theme/SearchBar";
import { useLocation } from "@docusaurus/router";
import Link from "@docusaurus/Link";

function useNavbarItems() {
  // TODO temporary casting until ThemeConfig type is improved
  return useThemeConfig().navbar.items;
}

function NavbarItems({ items }) {
  return (
    <>
      {items.map((item, i) => (
        <NavbarItem {...item} key={i} />
      ))}
    </>
  );
}

function NavbarTabs() {
  const location = useLocation();
  const isWelcome = location.pathname === "/";
  const isWorkspace = location.pathname.startsWith("/workspace");
  const isODP = location.pathname.startsWith("/desktop") || location.pathname.startsWith("/python") || location.pathname.startsWith("/cli");

  return (
    <div className="navbar-tabs">
      <Link
        to="/"
        className={`navbar-tab ${isWelcome ? "navbar-tab--active" : ""}`}
      >
        Welcome
      </Link>
      <Link
        to="/workspace"
        className={`navbar-tab ${isWorkspace ? "navbar-tab--active" : ""}`}
      >
        Workspace
      </Link>
      <Link
        to="/desktop"
        className={`navbar-tab ${isODP ? "navbar-tab--active" : ""}`}
      >
        ODP
      </Link>
    </div>
  );
}

function NavbarContentLayout({ left, right }) {
  return (
    <div className="navbar__inner items-center">
      <div className="navbar__items">{left}</div>
      <div className="navbar__items navbar__items--right max-sm:hidden">
        {right}
      </div>
    </div>
  );
}

export default function NavbarContent() {
  const mobileSidebar = useNavbarMobileSidebar();
  const items = useNavbarItems();
  const [leftItems, rightItems] = splitNavbarItems(items);
  const searchBarItem = items.find((item) => item.type === "search");
  return (
    <NavbarContentLayout
      left={
        // TODO stop hardcoding items?
        <>
          {!mobileSidebar.disabled && <NavbarMobileSidebarToggle />}
          <NavbarLogo />
          <NavbarTabs />
          <NavbarItems items={leftItems} />
        </>
      }
      right={
        // TODO stop hardcoding items?
        // Ask the user to add the respective navbar items => more flexible
        <>
          <NavbarItems items={rightItems} />
          <div className="flex items-center">
            <NavbarColorModeToggle />
            {!searchBarItem && (
              <NavbarSearch>
                <SearchBar />
              </NavbarSearch>
            )}
          </div>
        </>
      }
    />
  );
}
