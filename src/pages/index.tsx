import Link from "@docusaurus/Link";
import { searchablePages } from "@site/src/data/searchablePages";
import Layout from "@theme/Layout";
import { useEffect, useRef, useState } from "react";

export default function Home() {
	const [searchQuery, setSearchQuery] = useState("");
	const [showResults, setShowResults] = useState(false);
	const searchRef = useRef(null);

	// Filter pages based on search query
	const allFilteredPages = searchQuery.trim()
		? searchablePages
				.filter((page) => {
					const query = searchQuery.toLowerCase();
					return (
						page.title.toLowerCase().includes(query) ||
						page.category.toLowerCase().includes(query) ||
						page.description?.toLowerCase().includes(query) ||
						page.keywords?.some((keyword) =>
							keyword.toLowerCase().includes(query),
						)
					);
				})
				.sort((a, b) => {
					// Prioritize Workspace results over ODP (Desktop, Python, CLI)
					const aIsWorkspace = a.category.toLowerCase().includes("workspace");
					const bIsWorkspace = b.category.toLowerCase().includes("workspace");

					if (aIsWorkspace && !bIsWorkspace) return -1;
					if (!aIsWorkspace && bIsWorkspace) return 1;

					// Otherwise maintain original order
					return 0;
				})
		: [];

	// Limit results to top 10 for display
	const filteredPages = allFilteredPages.slice(0, 10);
	const hasMoreResults = allFilteredPages.length > 10;

	// Close dropdown when clicking outside
	useEffect(() => {
		const handleClickOutside = (event) => {
			if (searchRef.current && !searchRef.current.contains(event.target)) {
				setShowResults(false);
			}
		};

		document.addEventListener("mousedown", handleClickOutside);
		return () => document.removeEventListener("mousedown", handleClickOutside);
	}, []);

	return (
		<Layout description="Documentation for free and open-source OpenBB products.">
			<main className="min-h-screen bg-white dark:bg-[#151518]">
				{/* Hero Section */}
				<section className="pt-16 pb-4 px-6">
					<div className="max-w-4xl mx-auto text-center">
						<h1
							className="font-bold mb-6 text-black dark:text-white"
							style={{
								fontFamily: "Manrope, sans-serif",
								fontSize: "48px",
								lineHeight: "120%",
								letterSpacing: "2%",
							}}
						>
							Build with OpenBB
						</h1>
						<p className="body-lg text-gray-600 dark:text-gray-300 mb-12">
							Create powerful financial analysis applications with Workspace and
							the Open Data Platform.
						</p>
					</div>
				</section>

				{/* Product Screenshot Section */}
				<section className="px-6 pb-2">
					<div className="max-w-4xl mx-auto">
						<div className="relative pb-10">
							<img
								src="https://openbb-cms.directus.app/assets/0b402575-4034-4834-8a9d-b4f42fea9e0b.png"
								alt="OpenBB Products"
								className="w-full rounded-lg shadow-md"
							/>
						</div>
					</div>
				</section>

				{/* Search Bar */}
				<section className="px-6 pb-10">
					<div className="max-w-2xl mx-auto">
						<div className="relative" ref={searchRef}>
							<input
								type="text"
								placeholder="Search documentation..."
								value={searchQuery}
								onChange={(e) => {
									setSearchQuery(e.target.value);
									setShowResults(true);
								}}
								onFocus={() => setShowResults(true)}
								className="w-full px-4 py-3 pl-10 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-[#2a2a2a] text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-[#0088CC]"
							/>
							<svg
								className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
								/>
							</svg>

							{/* Search Results Dropdown */}
							{showResults && filteredPages.length > 0 && (
								<div className="absolute z-50 w-full mt-2 bg-white dark:bg-[#2a2a2a] border border-gray-300 dark:border-gray-600 rounded-lg shadow-lg max-h-96 overflow-y-auto">
									{filteredPages.map((page, index) => (
										<Link
											key={index}
											to={page.path}
											className="block px-4 py-3 hover:bg-gray-100 dark:hover:bg-[#3a3a3a] !no-underline border-b border-gray-200 dark:border-gray-700"
											onClick={() => {
												setShowResults(false);
												setSearchQuery("");
											}}
										>
											<div className="flex items-center justify-between">
												<div>
													<div className="text-sm font-medium text-[#303038] dark:text-white">
														{page.title}
													</div>
													<div className="text-xs text-[#46464F] dark:text-[#EBEBED] mt-1">
														{page.category}
													</div>
												</div>
												<svg
													className="w-4 h-4 text-gray-400"
													fill="none"
													stroke="currentColor"
													viewBox="0 0 24 24"
												>
													<path
														strokeLinecap="round"
														strokeLinejoin="round"
														strokeWidth={2}
														d="M9 5l7 7-7 7"
													/>
												</svg>
											</div>
										</Link>
									))}
									{hasMoreResults && (
										<div className="px-4 py-3 text-center text-xs text-[#46464F] dark:text-[#EBEBED] bg-gray-50 dark:bg-[#1f1f1f] border-t border-gray-200 dark:border-gray-700">
											Showing {filteredPages.length} of{" "}
											{allFilteredPages.length} results. Keep typing to narrow
											down...
										</div>
									)}
								</div>
							)}

							{/* No Results Message */}
							{showResults &&
								searchQuery.trim() &&
								filteredPages.length === 0 && (
									<div className="absolute z-50 w-full mt-2 bg-white dark:bg-[#2a2a2a] border border-gray-300 dark:border-gray-600 rounded-lg shadow-lg p-4">
										<p className="text-sm text-[#46464F] dark:text-[#EBEBED] text-center">
											No results found for "{searchQuery}"
										</p>
									</div>
								)}
						</div>
					</div>
				</section>

				{/* OpenBB Workspace Section */}
				<section className="px-6 py-16">
					<div className="max-w-6xl mx-auto">
						<h2
							className="font-medium text-center mb-12 text-black dark:text-white"
							style={{
								fontFamily: "Inter, sans-serif",
								fontSize: "32px",
								lineHeight: "150%",
								letterSpacing: "0%",
							}}
						>
							OpenBB Workspace
						</h2>
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
							{/* Get Started Card */}
							<Link
								to="https://docs.openbb.co/workspace"
								className="bg-white dark:bg-[#151518] border border-[#8A8A90] dark:border-[#505059] rounded-lg p-6 hover:shadow-lg dark:hover:shadow-[0_20px_60px_rgba(0,0,0,0.8)] transition-shadow cursor-pointer !no-underline block"
							>
								<div className="flex items-start justify-start w-12 h-12">
									<svg
										className="w-6 h-6 text-[#0088CC] dark:text-[#33BBFF]"
										viewBox="0 0 24 24"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M3 9H21M9 9L9 21M7.8 3H16.2C17.8802 3 18.7202 3 19.362 3.32698C19.9265 3.6146 20.3854 4.07354 20.673 4.63803C21 5.27976 21 6.11984 21 7.8V16.2C21 17.8802 21 18.7202 20.673 19.362C20.3854 19.9265 19.9265 20.3854 19.362 20.673C18.7202 21 17.8802 21 16.2 21H7.8C6.11984 21 5.27976 21 4.63803 20.673C4.07354 20.3854 3.6146 19.9265 3.32698 19.362C3 18.7202 3 17.8802 3 16.2V7.8C3 6.11984 3 5.27976 3.32698 4.63803C3.6146 4.07354 4.07354 3.6146 4.63803 3.32698C5.27976 3 6.11984 3 7.8 3Z"
											stroke="currentColor"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
									</svg>
								</div>
								<h3
									className="font-medium pb-6 text-[#303038] dark:text-white"
									style={{
										fontFamily: "Inter, sans-serif",
										fontSize: "20px",
										lineHeight: "30%",
										letterSpacing: "0%",
									}}
								>
									Get Started
								</h3>
								<p
									className="text-[#46464F] dark:text-[#EBEBED]"
									style={{
										fontFamily: "Inter, sans-serif",
										fontSize: "16px",
										lineHeight: "24px",
										letterSpacing: "0%",
									}}
								>
									Build secure AI workflows with integrated data and
									customizable components.
								</p>
							</Link>

							{/* Enterprise Card */}
							<Link
								to="https://docs.openbb.co/workspace/getting-started/enterprise"
								className="bg-white dark:bg-[#151518] border border-[#8A8A90] dark:border-[#505059] rounded-lg p-6 hover:shadow-lg dark:hover:shadow-[0_20px_60px_rgba(0,0,0,0.8)] transition-shadow cursor-pointer !no-underline block"
							>
								<div className="flex items-start justify-start w-12 h-12">
									<svg
										className="w-6 h-6 text-[#0088CC] dark:text-[#33BBFF]"
										viewBox="0 0 24 24"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M16 7C16 6.07003 16 5.60504 15.8978 5.22354C15.6204 4.18827 14.8117 3.37962 13.7765 3.10222C13.395 3 12.93 3 12 3C11.07 3 10.605 3 10.2235 3.10222C9.18827 3.37962 8.37962 4.18827 8.10222 5.22354C8 5.60504 8 6.07003 8 7M5.2 21H18.8C19.9201 21 20.4802 21 20.908 20.782C21.2843 20.5903 21.5903 20.2843 21.782 19.908C22 19.4802 22 18.9201 22 17.8V10.2C22 9.07989 22 8.51984 21.782 8.09202C21.5903 7.71569 21.2843 7.40973 20.908 7.21799C20.4802 7 19.9201 7 18.8 7H5.2C4.07989 7 3.51984 7 3.09202 7.21799C2.71569 7.40973 2.40973 7.71569 2.21799 8.09202C2 8.51984 2 9.07989 2 10.2V17.8C2 18.9201 2 19.4802 2.21799 19.908C2.40973 20.2843 2.71569 20.5903 3.09202 20.782C3.51984 21 4.0799 21 5.2 21Z"
											stroke="currentColor"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
									</svg>
								</div>
								<h3
									className="font-medium pb-6 text-[#303038] dark:text-white"
									style={{
										fontFamily: "Inter, sans-serif",
										fontSize: "20px",
										lineHeight: "30%",
										letterSpacing: "0%",
									}}
								>
									Enterprise
								</h3>
								<p
									className="text-[#46464F] dark:text-[#EBEBED]"
									style={{
										fontFamily: "Inter, sans-serif",
										fontSize: "16px",
										lineHeight: "24px",
										letterSpacing: "0%",
									}}
								>
									Deploy within your infrastructure with complete data
									sovereignty
								</p>
							</Link>

							{/* Analysts Card */}
							<Link
								to="https://docs.openbb.co/workspace/analysts/widgets/overview"
								className="bg-white dark:bg-[#151518] border border-[#8A8A90] dark:border-[#505059] rounded-lg p-6 hover:shadow-lg dark:hover:shadow-[0_20px_60px_rgba(0,0,0,0.8)] transition-shadow cursor-pointer !no-underline block"
							>
								<div className="flex items-start justify-start w-12 h-12">
									<svg
										className="w-6 h-6 text-[#0088CC] dark:text-[#33BBFF]"
										viewBox="0 0 24 24"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M9 7H4.6C4.03995 7 3.75992 7 3.54601 7.10899C3.35785 7.20487 3.20487 7.35785 3.10899 7.54601C3 7.75992 3 8.03995 3 8.6V19.4C3 19.9601 3 20.2401 3.10899 20.454C3.20487 20.6422 3.35785 20.7951 3.54601 20.891C3.75992 21 4.03995 21 4.6 21H9M9 21H15M9 21L9 4.6C9 4.03995 9 3.75992 9.10899 3.54601C9.20487 3.35785 9.35785 3.20487 9.54601 3.10899C9.75992 3 10.0399 3 10.6 3L13.4 3C13.9601 3 14.2401 3 14.454 3.10899C14.6422 3.20487 14.7951 3.35785 14.891 3.54601C15 3.75992 15 4.03995 15 4.6V21M15 11H19.4C19.9601 11 20.2401 11 20.454 11.109C20.6422 11.2049 20.7951 11.3578 20.891 11.546C21 11.7599 21 12.0399 21 12.6V19.4C21 19.9601 21 20.2401 20.891 20.454C20.7951 20.6422 20.6422 20.7951 20.454 20.891C20.2401 21 19.9601 21 19.4 21H15"
											stroke="currentColor"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
									</svg>
								</div>
								<h3
									className="font-medium pb-6 text-[#303038] dark:text-white"
									style={{
										fontFamily: "Inter, sans-serif",
										fontSize: "20px",
										lineHeight: "30%",
										letterSpacing: "0%",
									}}
								>
									Analysts
								</h3>
								<p
									className="text-[#46464F] dark:text-[#EBEBED]"
									style={{
										fontFamily: "Inter, sans-serif",
										fontSize: "16px",
										lineHeight: "24px",
										letterSpacing: "0%",
									}}
								>
									Build interactive analysis tools with customizable widgets and
									components.
								</p>
							</Link>

							{/* Developers Card */}
							<Link
								to="https://docs.openbb.co/workspace/developers/data-integration"
								className="bg-white dark:bg-[#151518] border border-[#8A8A90] dark:border-[#505059] rounded-lg p-6 hover:shadow-lg dark:hover:shadow-[0_20px_60px_rgba(0,0,0,0.8)] transition-shadow cursor-pointer !no-underline block"
							>
								<div className="flex items-start justify-start w-12 h-12">
									<svg
										className="w-6 h-6 text-[#0088CC] dark:text-[#33BBFF]"
										viewBox="0 0 24 24"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M3 16V7.2C3 6.07989 3 5.51984 3.21799 5.09202C3.40973 4.71569 3.71569 4.40973 4.09202 4.21799C4.51984 4 5.0799 4 6.2 4H17.8C18.9201 4 19.4802 4 19.908 4.21799C20.2843 4.40973 20.5903 4.71569 20.782 5.09202C21 5.51984 21 6.0799 21 7.2V16H15.6627C15.4182 16 15.2959 16 15.1808 16.0276C15.0787 16.0521 14.9812 16.0925 14.8917 16.1474C14.7908 16.2092 14.7043 16.2957 14.5314 16.4686L14.4686 16.5314C14.2957 16.7043 14.2092 16.7908 14.1083 16.8526C14.0188 16.9075 13.9213 16.9479 13.8192 16.9724C13.7041 17 13.5818 17 13.3373 17H10.6627C10.4182 17 10.2959 17 10.1808 16.9724C10.0787 16.9479 9.98119 16.9075 9.89172 16.8526C9.7908 16.7908 9.70432 16.7043 9.53137 16.5314L9.46863 16.4686C9.29568 16.2957 9.2092 16.2092 9.10828 16.1474C9.01881 16.0925 8.92127 16.0521 8.81923 16.0276C8.70414 16 8.58185 16 8.33726 16H3ZM3 16C2.44772 16 2 16.4477 2 17V17.3333C2 17.9533 2 18.2633 2.06815 18.5176C2.25308 19.2078 2.79218 19.7469 3.48236 19.9319C3.7367 20 4.04669 20 4.66667 20H19.3333C19.9533 20 20.2633 20 20.5176 19.9319C21.2078 19.7469 21.7469 19.2078 21.9319 18.5176C22 18.2633 22 17.9533 22 17.3333C22 17.0233 22 16.8683 21.9659 16.7412C21.8735 16.3961 21.6039 16.1265 21.2588 16.0341C21.1317 16 20.9767 16 20.6667 16H20"
											stroke="currentColor"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
									</svg>
								</div>
								<h3
									className="font-medium pb-6 text-[#303038] dark:text-white"
									style={{
										fontFamily: "Inter, sans-serif",
										fontSize: "20px",
										lineHeight: "30%",
										letterSpacing: "0%",
									}}
								>
									Developers
								</h3>
								<p
									className="text-[#46464F] dark:text-[#EBEBED]"
									style={{
										fontFamily: "Inter, sans-serif",
										fontSize: "16px",
										lineHeight: "24px",
										letterSpacing: "0%",
									}}
								>
									Integrate custom data sources and APIs directly into your
									workspace.
								</p>
							</Link>
						</div>
					</div>
				</section>

				{/* Open Data Platform Section */}
				<section className="px-6 pt-16 pb-20">
					<div className="max-w-6xl mx-auto">
						<h2
							className="font-medium text-center mb-12 text-black dark:text-white"
							style={{
								fontFamily: "Inter, sans-serif",
								fontSize: "32px",
								lineHeight: "150%",
								letterSpacing: "0%",
							}}
						>
							Open Data Platform
						</h2>
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
							{/* ODP Desktop Card */}
							<Link
								to="https://docs.openbb.co/desktop"
								className="bg-white dark:bg-[#151518] border border-[#8A8A90] dark:border-[#505059] rounded-lg p-6 hover:shadow-lg dark:hover:shadow-[0_20px_60px_rgba(0,0,0,0.8)] transition-shadow cursor-pointer !no-underline block"
							>
								<div className="flex items-start justify-start w-12 h-12">
									<svg
										className="w-6 h-6 text-[#0088CC] dark:text-[#33BBFF]"
										viewBox="0 0 24 24"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M2 14L22 14M8 21H16M6.8 18H17.2C18.8802 18 19.7202 18 20.362 17.673C20.9265 17.3854 21.3854 16.9265 21.673 16.362C22 15.7202 22 14.8802 22 13.2V7.8C22 6.11984 22 5.27976 21.673 4.63803C21.3854 4.07354 20.9265 3.6146 20.362 3.32698C19.7202 3 18.8802 3 17.2 3H6.8C5.11984 3 4.27976 3 3.63803 3.32698C3.07354 3.6146 2.6146 4.07354 2.32698 4.63803C2 5.27976 2 6.11984 2 7.8V13.2C2 14.8802 2 15.7202 2.32698 16.362C2.6146 16.9265 3.07354 17.3854 3.63803 17.673C4.27976 18 5.11984 18 6.8 18Z"
											stroke="currentColor"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
									</svg>
								</div>
								<h3
									className="font-medium pb-6 text-[#303038] dark:text-white"
									style={{
										fontFamily: "Inter, sans-serif",
										fontSize: "20px",
										lineHeight: "30%",
										letterSpacing: "0%",
									}}
								>
									ODP Desktop
								</h3>
								<p
									className="text-[#46464F] dark:text-[#EBEBED]"
									style={{
										fontFamily: "Inter, sans-serif",
										fontSize: "16px",
										lineHeight: "24px",
										letterSpacing: "0%",
									}}
								>
									Integrate any data source into AI applications and research
									dashboards.
								</p>
							</Link>

							{/* ODP Python Card */}
							<Link
								to="https://docs.openbb.co/python"
								className="bg-white dark:bg-[#151518] border border-[#8A8A90] dark:border-[#505059] rounded-lg p-6 hover:shadow-lg dark:hover:shadow-[0_20px_60px_rgba(0,0,0,0.8)] transition-shadow cursor-pointer !no-underline block"
							>
								<div className="flex items-start justify-start w-12 h-12">
									<svg
										className="w-6 h-6 text-[#0088CC] dark:text-[#33BBFF]"
										viewBox="0 0 24 24"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M16 18L22 12L16 6"
											stroke="currentColor"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
										<path
											d="M8 6L2 12L8 18"
											stroke="currentColor"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
									</svg>
								</div>
								<h3
									className="font-medium pb-6 text-[#303038] dark:text-white"
									style={{
										fontFamily: "Inter, sans-serif",
										fontSize: "20px",
										lineHeight: "30%",
										letterSpacing: "0%",
									}}
								>
									ODP Python
								</h3>
								<p
									className="text-[#46464F] dark:text-[#EBEBED]"
									style={{
										fontFamily: "Inter, sans-serif",
										fontSize: "16px",
										lineHeight: "24px",
										letterSpacing: "0%",
									}}
								>
									Build a unified API deployable across REST, Python, Jupyter,
									Excel, and more.
								</p>
							</Link>

							{/* ODP CLI Card */}
							<Link
								to="https://docs.openbb.co/cli"
								className="bg-white dark:bg-[#151518] border border-[#8A8A90] dark:border-[#505059] rounded-lg p-6 hover:shadow-lg dark:hover:shadow-[0_20px_60px_rgba(0,0,0,0.8)] transition-shadow cursor-pointer !no-underline block"
							>
								<div className="flex items-start justify-start w-12 h-12">
									<svg
										className="w-6 h-6 text-[#0088CC] dark:text-[#33BBFF]"
										viewBox="0 0 24 24"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M22 9H2M6 17.5L8.5 15L6 12.5M11 17.5L15 17.5M2 7.8L2 16.2C2 17.8802 2 18.7202 2.32698 19.362C2.6146 19.9265 3.07354 20.3854 3.63803 20.673C4.27976 21 5.11984 21 6.8 21H17.2C18.8802 21 19.7202 21 20.362 20.673C20.9265 20.3854 21.3854 19.9265 21.673 19.362C22 18.7202 22 17.8802 22 16.2V7.8C22 6.11984 22 5.27977 21.673 4.63803C21.3854 4.07354 20.9265 3.6146 20.362 3.32698C19.7202 3 18.8802 3 17.2 3L6.8 3C5.11984 3 4.27976 3 3.63803 3.32698C3.07354 3.6146 2.6146 4.07354 2.32698 4.63803C2 5.27976 2 6.11984 2 7.8Z"
											stroke="currentColor"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
									</svg>
								</div>
								<h3
									className="font-medium pb-6 text-[#303038] dark:text-white"
									style={{
										fontFamily: "Inter, sans-serif",
										fontSize: "20px",
										lineHeight: "30%",
										letterSpacing: "0%",
									}}
								>
									ODP CLI
								</h3>
								<p
									className="text-[#46464F] dark:text-[#EBEBED]"
									style={{
										fontFamily: "Inter, sans-serif",
										fontSize: "16px",
										lineHeight: "24px",
										letterSpacing: "0%",
									}}
								>
									Automate data collection and interact with the platform from
									your terminal.
								</p>
							</Link>
						</div>
					</div>
				</section>
			</main>
		</Layout>
	);
}
