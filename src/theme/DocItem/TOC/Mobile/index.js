import { useDoc } from "@docusaurus/plugin-content-docs/client";
import { useLocation } from "@docusaurus/router";
import { ThemeClassNames } from "@docusaurus/theme-common";
import TOCCollapsible from "@theme/TOCCollapsible";
import clsx from "clsx";
import React from "react";
import styles from "./styles.module.css";
export default function DocItemTOCMobile() {
	const { toc, frontMatter } = useDoc();
	const { pathname } = useLocation();
	if (pathname.startsWith("/sdk/reference/")) return null;
	return (
		<TOCCollapsible
			toc={toc}
			minHeadingLevel={frontMatter?.toc_min_heading_level}
			maxHeadingLevel={frontMatter?.toc_max_heading_level}
			className={clsx(ThemeClassNames.docs.docTocMobile, styles.tocMobile)}
		/>
	);
}
