import Link from "@docusaurus/Link";
import Layout from "@theme/Layout";
import React from "react";

export default function NotFound() {
	return (
		<Layout title="Page Not Found">
			<main
				className="container d-flex align-items-center justify-content-center"
				style={{ height: "100vh" }}
			>
				<div
					className="text-center"
					style={{
						position: "absolute",
						top: "50%",
						left: "50%",
						transform: "translate(-50%, -50%)",
					}}
				>
					<h1 className="hero__title mb-4">Page Not Found</h1>
					<p className="mb-2">We couldn't find what you were looking for.</p>
					<p>
						Please contact support@openbb.finance to report this broken link.
					</p>
					<Link className="button button--primary mt-8" to="/">
						Go back to homepage
					</Link>
				</div>
			</main>
		</Layout>
	);
}
