import { useLocation } from "@docusaurus/router";
import EditThisPage from "@theme-original/EditThisPage";
import React from "react";

export default function EditThisPageWrapper(props) {
	const { pathname } = useLocation();
	if (
		pathname.startsWith("/workspace/reference") ||
		pathname.startsWith("/sdk/reference") ||
		pathname.startsWith("/python/reference") ||
		pathname.startsWith("/bot/reference")
	)
		return null;
	return (
		<>
			<EditThisPage {...props} />
		</>
	);
}
