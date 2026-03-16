import React, { useState, useMemo } from "react";
import clsx from "clsx";
import { ThemeClassNames } from "@docusaurus/theme-common";
import {
  useAnnouncementBar,
  useScrollPosition,
} from "@docusaurus/theme-common/internal";
import { useLocation } from "@docusaurus/router";
import DocSidebarItems from "@theme/DocSidebarItems";
import styles from "./styles.module.css";
import { useIFrameContext } from "@site/src/theme/Root";
import SearchBar from "@site/src/theme/SearchBar";
function useShowAnnouncementBar() {
  const { isActive } = useAnnouncementBar();
  const [showAnnouncementBar, setShowAnnouncementBar] = useState(isActive);
  useScrollPosition(
    ({ scrollY }) => {
      if (isActive) {
        setShowAnnouncementBar(scrollY === 0);
      }
    },
    [isActive]
  );
  return isActive && showAnnouncementBar;
}
export default function DocSidebarDesktopContent({ path, sidebar, className }) {
  const showAnnouncementBar = useShowAnnouncementBar();
  const { isIFrame } = useIFrameContext();
  const location = useLocation();

  const isSnowflake = location.pathname.startsWith("/snowflake");

  const filteredSidebar = useMemo(() => {
    if (!isSnowflake) {
      // When not on snowflake, hide snowflake sections
      return sidebar.filter((item) => {
        const label = item.label?.toLowerCase() || "";
        return !label.includes("snowflake");
      });
    }
    // When on snowflake, hide ODP sections (Desktop, Python, CLI)
    return sidebar.filter((item) => {
      const label = item.label?.toLowerCase() || "";
      return !label.includes("desktop") && !label.includes("python") && !label.includes("cli");
    });
  }, [sidebar, isSnowflake]);

  return (
    <nav
      className={clsx(
        "menu thin-scrollbar !px-10 text-sm",
        styles.menu,
        showAnnouncementBar && styles.menuWithAnnouncementBar,
        className
      )}
    >
      <ul className={clsx(ThemeClassNames.docs.docSidebarMenu, "menu__list")}>
        <DocSidebarItems items={filteredSidebar} activePath={path} level={1} />
      </ul>
    </nav>
  );
}
