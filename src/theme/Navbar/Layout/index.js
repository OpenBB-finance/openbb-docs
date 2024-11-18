import { useLocation } from "@docusaurus/router";
import { useThemeConfig } from "@docusaurus/theme-common";
import {
  useHideableNavbar,
  useNavbarMobileSidebar,
} from "@docusaurus/theme-common/internal";
import NavbarMobileSidebar from "@theme/Navbar/MobileSidebar";
import clsx from "clsx";
import React, { useEffect } from "react";
import { useIFrameContext } from "../../Root.tsx";
import styles from "./styles.module.css";

function NavbarBackdrop(props) {
  return (
    <div
      role="presentation"
      {...props}
      className={clsx("navbar-sidebar__backdrop", props.className)}
    />
  );
}

export default function NavbarLayout({ children }) {
  const { isIFrame } = useIFrameContext();
  const {
    navbar: { hideOnScroll, style },
  } = useThemeConfig();
  const { pathname } = useLocation();
  const mobileSidebar = useNavbarMobileSidebar();
  const { navbarRef, isNavbarVisible } = useHideableNavbar(hideOnScroll);

  useEffect(() => {
    const cleanedPath = pathname.replace(/\/v\d+/, "");

    if (cleanedPath.startsWith("/terminal") || cleanedPath.startsWith("/pro")) {
      if (document.documentElement.getAttribute("data-theme") === "dark") {
        document.documentElement.style.setProperty(
          "--ifm-color-primary",
          "#669DCB"
        );
      } else {
        document.documentElement.style.setProperty(
          "--ifm-color-primary",
          "#004A87"
        );
      }
    } else if (
      cleanedPath.startsWith("/sdk") ||
      cleanedPath.startsWith("/cli") ||
      cleanedPath.startsWith("/platform")
    ) {
      if (document.documentElement.getAttribute("data-theme") === "dark") {
        document.documentElement.style.setProperty(
          "--ifm-color-primary",
          "#F5B166"
        );
      } else {
        document.documentElement.style.setProperty(
          "--ifm-color-primary",
          "#511d11"
        );
      }
    } else if (cleanedPath.startsWith("/excel")) {
      if (document.documentElement.getAttribute("data-theme") === "dark") {
        document.documentElement.style.setProperty(
          "--ifm-color-primary",
          "#16A34A"
        );
      } else {
        document.documentElement.style.setProperty(
          "--ifm-color-primary",
          "#14532D"
        );
      }
    } else if (cleanedPath.startsWith("/bot")) {
      if (document.documentElement.getAttribute("data-theme") === "dark") {
        document.documentElement.style.setProperty(
          "--ifm-color-primary",
          "#b186bb"
        );
      } else {
        document.documentElement.style.setProperty(
          "--ifm-color-primary",
          "#3a204f"
        );
      }
    } else {
    }
  }, [pathname]);

  const cleanedPathForClassName = pathname.replace(/\/v\d+/, "");

  return (
    <nav
      ref={navbarRef}
      className={clsx(
        "border-b border-grey-700 lg:px-12",
        {
          header_docs_terminal: cleanedPathForClassName.startsWith("/terminal"),
          header_docs_pro: cleanedPathForClassName.startsWith("/pro"),
          header_docs_excel: cleanedPathForClassName.startsWith("/excel"),
          header_docs_sdk:
            cleanedPathForClassName.startsWith("/sdk") ||
            cleanedPathForClassName.startsWith("/cli") ||
            cleanedPathForClassName.startsWith("/platform"),
          header_docs_bot: cleanedPathForClassName.startsWith("/bot"),
          header_docs:
            !cleanedPathForClassName.startsWith("/terminal") &&
            !cleanedPathForClassName.startsWith("/sdk") &&
            !cleanedPathForClassName.startsWith("/platform") &&
            !cleanedPathForClassName.startsWith("/bot") &&
            !cleanedPathForClassName.startsWith("/pro") &&
            !cleanedPathForClassName.startsWith("/excel") &&
            !cleanedPathForClassName.startsWith("/cli"),
        },
        "navbar",
        "navbar--fixed-top",
        hideOnScroll && [
          styles.navbarHideable,
          !isNavbarVisible && styles.navbarHidden,
        ],
        {
          "navbar--dark": style === "dark",
          "navbar--primary": style === "primary",
          "navbar-sidebar--show": mobileSidebar.shown,
        },
        {
          hidden: isIFrame,
        }
      )}
    >
      {children}
      <NavbarBackdrop onClick={mobileSidebar.toggle} />
      <NavbarMobileSidebar />
    </nav>
  );
}
