// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

import fs from "fs";
import path from "path";
import type { Options, ThemeConfig } from "@docusaurus/preset-classic";
import type { Config } from "@docusaurus/types";
import autoprefixer from "autoprefixer";
import { themes } from "prism-react-renderer";
import katex from "rehype-katex";
import math from "remark-math";
import tailwind from "tailwindcss";

export default {
	title: "OpenBB Docs",
	tagline: "OpenBB Docs",
	url: "https://docs.openbb.co", // Your website URL
	baseUrl: "/",
	projectName: "OpenBB",
	organizationName: "OpenBB-finance",
	trailingSlash: false,
	onBrokenLinks: "warn",
	onBrokenAnchors: "warn",
	"markdown": {
		"hooks": {
			onBrokenMarkdownLinks: "warn",
		}
	},
	favicon: "img/favicon.ico",

	// GitHub pages deployment config.
	// If you aren't using GitHub pages, you don't need these.

	// Even if you don't use internalization, you can use this field to set useful
	// metadata like html lang. For example, if your site is Chinese, you may want
	// to replace "en" with "zh-Hans".
	i18n: {
		defaultLocale: "en",
		locales: ["en"],
	},
	plugins: [
		[
			"@docusaurus/plugin-content-docs",
			{
				id: "odp",
				path: "content-odp",
				routeBasePath: "/odp",
				sidebarPath: "./sidebars-odp.js",
				editUrl: "https://github.com/OpenBB-finance/openbb-docs/edit/main/",
				showLastUpdateTime: true,
				showLastUpdateAuthor: true,
				remarkPlugins: [math],
				rehypePlugins: [katex],
				lastVersion: "current",
				versions: {
					current: { label: "v5", path: "" },
				},
			},
		],
		[
			"@docusaurus/plugin-client-redirects",
			{
				redirects: [
					{
						from: "/pro/",
						to: "/workspace/developers/data-integration",
					},
					{
						from: "/pro/enterprise",
						to: "/workspace/getting-started/enterprise",
					},
					{
						from: "/pro/openbb-copilot",
						to: "/workspace/analysts/ai-features/copilot-basics",
					},
					{
						from: "/pro/platform-installer",
						to: "/workspace/getting-started/platform-installer",
					},
					{
						from: "/workspace/data-connector",
						to: "/workspace/developers/data-integration",
					},
					{
						from: "/workspace/developers/agent-skills",
						to: "/agents/app-builder-resources",
					},
					{
						from: "/agents/building-an-app",
						to: "/agents/app-builder-resources",
					},
					{
						from: "/agents/app-building-skill",
						to: "/agents/app-builder-resources",
					},
					{
						from: "/excel/enterprise",
						to: "https://openbb.co/pricing",
					},
					{
						from: "/bot",
						to: "https://openbb.co/blog/we-are-handing-over-the-openbb-bot-to-focus-on-our-mission",
					},
					// Add redirects for old excel paths
					{
						from: "/excel",
						to: "/workspace/analysts/excel-addin/excel-overview",
					},
					// Add redirects for old getting-started paths  
					{
						from: "/getting-started/enterprise",
						to: "/workspace/getting-started/enterprise",
					},
					{
						from: "/getting-started/excel-installation",
						to: "/workspace/analysts/excel-addin/excel-installation",
					},
					{
						from: "/getting-started/faqs",
						to: "/workspace/getting-started/faqs",
					},
					// Redirects for old ODP paths
					{
						from: "/platform",
						to: "/odp/python",
					},
					{
						from: "/desktop",
						to: "/odp/desktop",
					},
					{
						from: "/python",
						to: "/odp/python",
					},
					{
						from: "/cli",
						to: "/odp/cli",
					},
				],
				createRedirects: (existingPath) => {
					// Redirect old paths to new /odp/* structure
					if (existingPath.startsWith("/odp/desktop/")) {
						return existingPath.replace("/odp/desktop/", "/desktop/");
					}
					if (existingPath.startsWith("/odp/python/")) {
						return [
							existingPath.replace("/odp/python/", "/python/"),
							existingPath.replace("/odp/python/", "/platform/"),
						];
					}
					if (existingPath.startsWith("/odp/cli/")) {
						return existingPath.replace("/odp/cli/", "/cli/");
					}
					if (existingPath.startsWith("/pro/")) {
						const newPath = existingPath.replace("/pro/", "/workspace/developers/");
						if (newPath.includes("data-connector")) {
							return newPath.replace("/data-connector/", "/data-integration/");
						}
						return newPath;
					}
					if (existingPath.includes("data-connector")) {
						return existingPath.replace(
							"/data-connector/",
							"/data-integration/",
						);
					}
					return undefined;
				},
			},
		],
		async function twPlugin(context, options) {
			return {
				name: "docusaurus-tailwindcss",
				configurePostCss(postcssOptions) {
					// Appends TailwindCSS and AutoPrefixer.
					postcssOptions.plugins.push(tailwind);
					postcssOptions.plugins.push(autoprefixer);
					return postcssOptions;
				},
			};
		},
		async function sidebarExportPlugin(context) {
			return {
				name: "sidebar-export-plugin",
				async contentLoaded({ content, actions }) {
					// This runs after docs plugin processes content
				},
				async allContentLoaded({ allContent, actions }) {
					const { setGlobalData } = actions;
					const docsByInstance = allContent["docusaurus-plugin-content-docs"] || {};

					// Merge sidebars from every docs plugin instance (default + odp).
					// For the `odp` instance we pull from the current (v5) version so
					// the mobile sidebar reflects the latest docs.
					const combinedSidebar: any[] = [];

					const resolveLabels = (items: any[], docsMetadata: any[]): any[] => {
						return items.map(item => {
							if (item.type === "doc") {
								const doc = docsMetadata.find((d: any) => d.id === item.id);
								return {
									...item,
									label: item.label || doc?.title || doc?.id?.split("/").pop(),
									href: doc?.permalink,
								};
							}
							if (item.type === "category") {
								let categoryHref = null;
								if (item.link?.type === "doc" && item.link?.id) {
									const linkDoc = docsMetadata.find((d: any) => d.id === item.link.id);
									categoryHref = linkDoc?.permalink;
								}
								return {
									...item,
									href: categoryHref,
									items: item.items ? resolveLabels(item.items, docsMetadata) : [],
								};
							}
							return item;
						});
					};

					for (const instanceContent of Object.values(docsByInstance)) {
						const loadedVersions = (instanceContent as any)?.loadedVersions ?? [];
						const loadedVersion =
							loadedVersions.find((v: any) => v.versionName === "current") ||
							loadedVersions[0];
						const tutorialSidebar = loadedVersion?.sidebars?.tutorialSidebar;
						if (!tutorialSidebar) continue;
						combinedSidebar.push(
							...resolveLabels(tutorialSidebar, loadedVersion.docs),
						);
					}

					setGlobalData({ sidebar: combinedSidebar });
				},
			};
		},
		async function pluginLlmsTxt(context) {
			return {
				name: "llms-txt-plugin",
				loadContent: async () => {
					const { siteDir } = context;
					const contentDir = path.join(siteDir, "content");
					// Versioned ODP content (Desktop/Python/CLI) lives in content-odp/.
					// The v5 working tree is the directory itself; v4 lives under
					// versioned_docs-odp/version-v4/ and is scanned separately below.
					const odpContentDir = path.join(siteDir, "content-odp");
					// Each section gets its own llms.txt
					const sectionContent: Record<string, string[]> = {
						agents: [],
						workspace: [],
						"odp/desktop": [],
						"odp/python": [],
						"odp/cli": [],
						snowflake: [],
					};

					// recursive function to get all mdx files
					const getMdxFiles = async (dir: string, sectionResolver: (rel: string) => string | null) => {
						let entries: import("fs").Dirent[];
						try {
							entries = await fs.promises.readdir(dir, {
								withFileTypes: true,
							});
						} catch {
							return; // dir may not exist (e.g., before first versioning)
						}

						for (const entry of entries) {
							const fullPath = path.join(dir, entry.name);
							if (entry.isDirectory()) {
								await getMdxFiles(fullPath, sectionResolver);
							} else if (
								entry.name.endsWith(".mdx") ||
								entry.name.endsWith(".md")
							) {
								try {
									const content = await fs.promises.readFile(fullPath, "utf8");
									const relativePath = path.relative(dir === odpContentDir ? odpContentDir : contentDir, fullPath);
									const section = sectionResolver(relativePath);
									if (section && section in sectionContent) {
										sectionContent[section].push(content);
									}
								} catch (err) {
									console.error(`Error processing file ${fullPath}:`, err);
								}
							}
						}
					};

					// Default classic-preset docs (agents/, workspace/, snowflake/, ...).
					await getMdxFiles(contentDir, (rel) => {
						const parts = rel.split(path.sep);
						return parts[0] in sectionContent ? parts[0] : null;
					});

					// odp docs plugin (desktop/, python/, cli/). Map each top-level dir
					// onto `odp/<dir>` so the existing static URLs stay the same.
					await getMdxFiles(odpContentDir, (rel) => {
						const parts = rel.split(path.sep);
						const section = `odp/${parts[0]}`;
						return section;
					});

					// Log content sizes for each section
					for (const [section, content] of Object.entries(sectionContent)) {
						const totalSize = content.reduce(
							(acc, curr) => acc + curr.length,
							0,
						);
						console.log(
							`Section ${section} has ${content.length} files with total size of ${(totalSize / 1024 / 1024).toFixed(2)}MB`,
						);
					}

					return { sectionContent };
				},
				postBuild: async ({ content, routes, outDir }) => {
					const { sectionContent } = content as {
						sectionContent: Record<string, string[]>;
					};
					const { siteDir } = context;
					const staticDir = path.join(siteDir, "static");

					// Group routes by section
					const sectionRoutes: Record<string, string[]> = {
						agents: [],
						workspace: [],
						"odp/desktop": [],
						"odp/python": [],
						"odp/cli": [],
						snowflake: [],
					};

					// Walk every docs plugin instance (default + odp). For each, pick
					// the route that carries the current version's docs.
					const docsPluginRouteConfigs = routes.filter(
						(route) => route.plugin.name === "docusaurus-plugin-content-docs",
					);

					for (const docsPluginRouteConfig of docsPluginRouteConfigs) {
						const versionedRouteConfig = docsPluginRouteConfig.routes?.find(
							(route) => (route.props as Record<string, unknown> | undefined)?.version,
						);
						if (!versionedRouteConfig?.props?.version) continue;

						const docs = (
							versionedRouteConfig.props.version as Record<string, unknown>
						).docs as Record<string, Record<string, unknown>>;

						for (const [docPath, record] of Object.entries(docs)) {
							const pathParts = docPath.split("/");

							// Default instance docs carry the section name as the first
							// path part (e.g., "workspace/foo"). The odp instance routes
							// are mounted under `/odp/...` so they already carry the
							// `odp/<section>/...` prefix.
							if (pathParts[0] === "odp" && pathParts.length > 1) {
								const subSection = `odp/${pathParts[1]}`;
								if (subSection in sectionRoutes) {
									const fullUrl = `${context.siteConfig.url}/${docPath}`;
									sectionRoutes[subSection].push(
										`- [${record.title}](${fullUrl}): ${record.description}`,
									);
								}
							} else if (pathParts[0] in sectionRoutes) {
								const fullUrl = `${context.siteConfig.url}/${docPath}`;
								sectionRoutes[pathParts[0]].push(
									`- [${record.title}](${fullUrl}): ${record.description}`,
								);
							}
						}
					}

					// Process each section
					for (const [section, routes] of Object.entries(sectionRoutes)) {
						try {
							// Create directory in static folder
							const sectionDir = path.join(staticDir, section);
							await fs.promises.mkdir(sectionDir, { recursive: true });

							// Write section-specific llms.txt
							const llmsTxt = `# ${context.siteConfig.title} - ${section}\n\n## Docs\n\n${routes.join("\n")}`;
							await fs.promises.writeFile(
								path.join(sectionDir, "llms.txt"),
								llmsTxt,
							);

							// Also write to build output directory for direct access
							const buildSectionDir = path.join(outDir, section);
							await fs.promises.mkdir(buildSectionDir, { recursive: true });
							await fs.promises.writeFile(
								path.join(buildSectionDir, "llms.txt"),
								llmsTxt,
							);

							// Write section-specific llms-full.txt
							const sectionFullContent =
								sectionContent[section].join("\n\n---\n\n");

							await fs.promises.writeFile(
								path.join(sectionDir, "llms-full.txt"),
								sectionFullContent,
							);

							// Also write to build output directory for direct access
							await fs.promises.writeFile(
								path.join(buildSectionDir, "llms-full.txt"),
								sectionFullContent,
							);
						} catch (err) {
							console.error(`Error processing section ${section}:`, err);
						}
					}
				},
			};
		},
	],
	presets: [
		[
			"classic",
			{
				docs: {
					sidebarPath: "./sidebars.js",
					editUrl: "https://github.com/OpenBB-finance/openbb-docs/edit/main/",
					showLastUpdateTime: true,
					showLastUpdateAuthor: true,
					routeBasePath: "/",
					path: "content",
					remarkPlugins: [math],
					rehypePlugins: [katex],
				},
				theme: {
					customCss: "./src/css/custom.css",
				},
			} satisfies Options,
		],
	],
	headTags: [
		{
			tagName: "meta",
			attributes: {
				"http-equiv": "Content-Security-Policy",
				content:
					"object-src 'self'; img-src * blob: data:; connect-src *; script-src 'self' 'unsafe-eval' 'unsafe-inline'; frame-ancestors 'self' 'https://pro.openbb.co' 'https://openbb.co' 'https://my.openbb.co'",
			},
		},
		{
			tagName: "meta",
			attributes: {
				"http-equiv": "Cache-Control",
				content: "max-age=3600, must-revalidate",
			},
		},
		{
			tagName: "meta",
			attributes: {
				"http-equiv": "X-Content-Type-Options",
				content: "nosniff",
			},
		},
	],
	themeConfig: {
		image: "img/banner.png",
		docs: {
			sidebar: {
				autoCollapseCategories: true,
			},
		},
		prism: {
			theme: themes.vsLight,
			darkTheme: themes.vsDark,
			additionalLanguages: ["json"],
		},
		// csp: {
		// 	"default-src": ["'self'"],
		// 	"script-src": ["self"],
		// 	"style-src": ["'self'"],
		// 	"img-src": ["*", "data:", "blob:"],
		// 	"connect-src": ["*"],
		// 	"frame-ancestors": [
		// 		"'self'",
		// 		"https://pro.openbb.co",
		// 		"https://openbb.co",
		// 		"https://my.openbb.co",
		// 	],
		// },
		// TODO - Jose can you make this so we get lighter color on main view - like bot docs
		colorMode: {
			defaultMode: "dark",
			disableSwitch: false,
			respectPrefersColorScheme: false,
		},
		algolia: {
			appId: "7D1HQ0IXAS",
			apiKey: "a2e289977b4b663ed9cf3d4635a438fd", // pragma: allowlist secret
			indexName: "openbbterminal",
			contextualSearch: false,
		},
	} satisfies ThemeConfig,
	stylesheets: [
		{
			href: "/katex/katex.min.css",
			type: "text/css",
		},
	],
} satisfies Config;
