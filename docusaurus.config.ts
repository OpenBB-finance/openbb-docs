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
	onBrokenMarkdownLinks: "warn",
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
					{
						from: ["/platform", "/platform/:path*"],
						to: "/python",
					},
				],
				createRedirects: (existingPath) => {
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
		async function pluginLlmsTxt(context) {
			return {
				name: "llms-txt-plugin",
				loadContent: async () => {
					const { siteDir } = context;
					const contentDir = path.join(siteDir, "content");
					const sectionContent: Record<string, string[]> = {
						workspace: [],
						cli: [],
						desktop: [],
						python: [],
					};

					// recursive function to get all mdx files
					const getMdxFiles = async (dir: string) => {
						const entries = await fs.promises.readdir(dir, {
							withFileTypes: true,
						});

						for (const entry of entries) {
							const fullPath = path.join(dir, entry.name);
							if (entry.isDirectory()) {
								await getMdxFiles(fullPath);
							} else if (
								entry.name.endsWith(".mdx") ||
								entry.name.endsWith(".md")
							) {
								try {
									const content = await fs.promises.readFile(fullPath, "utf8");
									// Determine which section this file belongs to
									const relativePath = path.relative(contentDir, fullPath);
									const section = relativePath.split(path.sep)[0];
									if (section in sectionContent) {
										sectionContent[section].push(content);
									}
								} catch (err) {
									console.error(`Error processing file ${fullPath}:`, err);
								}
							}
						}
					};

					await getMdxFiles(contentDir);

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

					// Find docs plugin route config
					const docsPluginRouteConfig = routes.filter(
						(route) => route.plugin.name === "docusaurus-plugin-content-docs",
					)[0];

					const allDocsRouteConfig = docsPluginRouteConfig.routes?.filter(
						(route) => route.path === "/",
					)[0];

					if (!allDocsRouteConfig?.props?.version) {
						return;
					}

					const currentVersionDocsRoutes = (
						allDocsRouteConfig.props.version as Record<string, unknown>
					).docs as Record<string, Record<string, unknown>>;

					// Group routes by section
					const sectionRoutes: Record<string, string[]> = {
						workspace: [],
						cli: [],
						desktop: [],
						python: [],
					};

					for (const [path, record] of Object.entries(
						currentVersionDocsRoutes,
					)) {
						const section = path.split("/")[0];
						if (section in sectionRoutes) {
							const fullUrl = `${context.siteConfig.url}/${path}`;
							sectionRoutes[section].push(
								`- [${record.title}](${fullUrl}): ${record.description}`,
							);
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
