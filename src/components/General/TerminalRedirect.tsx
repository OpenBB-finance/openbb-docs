import { Redirect, useLocation } from "@docusaurus/router";
import { useEffect } from "react";

export default function TerminalRedirect() {
	const { pathname } = useLocation();

	// Handle external pricing URL with forward
	if (pathname === "/workspace/enterprise") {
		useEffect(() => {
			window.location.href = "https://openbb.co/pricing";
		}, []);
		return null;
	}

	// Handle other redirects with replace
	return (
		<Redirect
			to={pathname
				.replace("/terminal", "/workspace")
				.replace("/pro", "/workspace")
				.replace(/^\/workspace\/tutorials\/.*$/, "/workspace/")
				.replace("/workspace/tutorials", "/workspace/")
			}
		/>
	);
}
