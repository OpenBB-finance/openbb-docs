import { Redirect, useLocation } from "@docusaurus/router";
import { useEffect } from "react";

export default function TerminalRedirect() {
	const { pathname } = useLocation();

	const newPath = pathname
		.replace(/^\/terminal(\/|$)/, "/workspace$1")
		.replace(/^\/pro(\/|$)/, "/workspace$1");
	// Handle other redirects with replace
	return <Redirect to={newPath} />;
}
