import { Redirect, useLocation } from "@docusaurus/router";
import { useEffect } from "react";

export default function TerminalRedirect() {
	const { pathname } = useLocation();

	// Handle other redirects with replace
	return (
		<Redirect
			to={pathname
				.replace("/terminal", "/workspace")
				.replace("/pro", "/workspace")
			}
		/>
	);
}
