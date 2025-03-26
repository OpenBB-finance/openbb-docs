// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

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
	projectName: "OpenBBTerminal",
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
						from: "/platform/development/contributing",
						to: "/platform/developer_guide/contributing",
					},
					{
						from: "/pro/copilot/bring-your-own-copilot",
						to: "/workspace/bring-your-own-copilot",
					},
					{
						from: "/pro/",
						to: "/workspace/",
					},
					{
						from: "/pro/enterprise",
						to: "/workspace/enterprise",
					},
					{
						from: "/pro/enterprise",
						to: "/workspace/enterprise",
					},
					{
						from: "/pro/tutorials",
						to: "/workspace/tutorials",
					},
					{
						from: "/pro/tutorials/bring-data",
						to: "/workspace/tutorials/bring-data",
					},
					{
						from: "/pro/tutorials/customizability",
						to: "/workspace/tutorials/customizability",
					},
					{
						from: "/pro/tutorials/ai-insights",
						to: "/workspace/tutorials/ai-insights",
					},
					{
						from: "/pro/tutorials/earnings-update",
						to: "/workspace/tutorials/earnings-update",
					},
					{
						from: "/pro/tutorials/layouts-watchlist",
						to: "/workspace/tutorials/layouts-watchlist",
					},
					{
						from: "/pro/tutorials/report",
						to: "/workspace/tutorials/report",
					},
					{
						from: "/pro/tutorials/ai",
						to: "/workspace/tutorials/ai",
					},
					{
						from: "/pro/tutorials/data-to-charts",
						to: "/workspace/tutorials/data-to-charts",
					},
					{
						from: "/pro/tutorials/overlay",
						to: "/workspace/tutorials/overlay",
					},
					{
						from: "/pro/openbb-copilot",
						to: "/workspace/openbb-copilot",
					},
					{
						from: "/pro/data-connector",
						to: "/workspace/data-connector",
					},
					{
						from: "/pro/upload-files",
						to: "/workspace/upload-files",
					},
					{
						from: "/pro/api-endpoints",
						to: "/workspace/api-endpoints",
					},
					{
						from: "/pro/custom-backend",
						to: "/workspace/custom-backend",
					},
					{
						from: "/pro/custom-backend/widgets-json-reference",
						to: "/workspace/custom-backend/widgets-json-reference",
					},
					{
						from: "/pro/platform-installer",
						to: "/workspace/platform-installer",
					},
					{
						from: "/pro/widgets",
						to: "/workspace/widgets",
					},
					{
						from: "/pro/dashboards",
						to: "/workspace/dashboards",
					},
					{
						from: "/pro/templates",
						to: "/workspace/templates",
					},
					{
						from: "/pro/bring-your-own-copilot",
						to: "/workspace/bring-your-own-copilot",
					},
				],
				createRedirects: (existingPath) => {
					if (existingPath.startsWith("/pro/")) {
						return existingPath.replace("/pro/", "/workspace/");
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
