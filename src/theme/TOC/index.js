import { useLocation } from "@docusaurus/router";
import TOCItems from "@theme/TOCItems";
import clsx from "clsx";
import React from "react";
import styles from "./styles.module.css";
// Using a custom className
// This prevents TOCInline/TOCCollapsible getting highlighted by mistake
const LINK_CLASS_NAME = "table-of-contents__link toc-highlight";
const LINK_ACTIVE_CLASS_NAME = "table-of-contents__link--active";
export default function TOC({ className, ...props }) {
  const { pathname } = useLocation()
  if (pathname.startsWith("/sdk/reference/")) return null
  return (
    <div
      className={clsx(
        styles.tableOfContents,
        "thin-scrollbar text-sm mt-[48px] xl:max-w-[216px]",
        className
      )}
    >
      {props?.toc?.some( item => item.level === 1 || item.level === 2 ||item.level === 3) && (
        <>
          <p className={styles.tocHeading}>
            On this page
          </p>
          <TOCItems
            {...props}
            linkClassName={
              "text-grey-400 capitalize !no-underline"
            }
            linkActiveClassName="toc-link-active"
          />
        </>
      )}
    </div>
  );
}
