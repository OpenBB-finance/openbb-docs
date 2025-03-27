import { Redirect, useLocation } from "@docusaurus/router";

export default function TerminalRedirect() {
	const { pathname } = useLocation();

	return (
		<Redirect
			to={pathname
				.replace("/terminal", "/workspace")
				.replace("/pro", "/workspace")}
		/>
	);
}
