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
						to: "/terminal/bring-your-own-copilot",
					},
					{
						from: "/pro/",
						to: "/terminal/",
					},
					{
						from: "/pro/enterprise",
						to: "/terminal/enterprise",
					},
					{
						from: "/pro/enterprise",
						to: "/terminal/enterprise",
					},
					{
						from: "/pro/native-installation",
						to: "/terminal/native-installation",
					},
					{
						from: "/pro/tutorials",
						to: "/terminal/tutorials",
					},
					{
						from: "/pro/tutorials/bring-data",
						to: "/terminal/tutorials/bring-data",
					},
					{
						from: "/pro/tutorials/customizability",
						to: "/terminal/tutorials/customizability",
					},
					{
						from: "/pro/tutorials/ai-insights",
						to: "/terminal/tutorials/ai-insights",
					},
					{
						from: "/pro/tutorials/earnings-update",
						to: "/terminal/tutorials/earnings-update",
					},
					{
						from: "/pro/tutorials/layouts-watchlist",
						to: "/terminal/tutorials/layouts-watchlist",
					},
					{
						from: "/pro/tutorials/report",
						to: "/terminal/tutorials/report",
					},
					{
						from: "/pro/tutorials/ai",
						to: "/terminal/tutorials/ai",
					},
					{
						from: "/pro/tutorials/data-to-charts",
						to: "/terminal/tutorials/data-to-charts",
					},
					{
						from: "/pro/tutorials/overlay",
						to: "/terminal/tutorials/overlay",
					},
					{
						from: "/pro/openbb-copilot",
						to: "/terminal/openbb-copilot",
					},
					{
						from: "/pro/data-connector",
						to: "/terminal/data-connector",
					},
					{
						from: "/pro/upload-files",
						to: "/terminal/upload-files",
					},
					{
						from: "/pro/api-endpoints",
						to: "/terminal/api-endpoints",
					},
					{
						from: "/pro/database-integrations",
						to: "/terminal/database-integrations",
					},
					{
						from: "/pro/database-integrations/snowflake",
						to: "/terminal/database-integrations/snowflake",
					},
					{
						from: "/pro/custom-backend",
						to: "/terminal/custom-backend",
					},
					{
						from: "/pro/custom-backend/widgets.json",
						to: "/terminal/custom-backend/widgets.json",
					},
					{
						from: "/pro/platform-installer",
						to: "/terminal/platform-installer",
					},
					{
						from: "/pro/widgets",
						to: "/terminal/widgets",
					},
					{
						from: "/pro/dashboards",
						to: "/terminal/dashboards",
					},
					{
						from: "/pro/templates",
						to: "/terminal/templates",
					},
					{
						from: "/pro/bring-your-own-copilot",
						to: "/terminal/bring-your-own-copilot",
					},
				],
				createRedirects: (existingPath) => {
					if (existingPath.startsWith("/pro/")) {
						return existingPath.replace("/pro/", "/terminal/");
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
					"object-src 'self'; img-src * blob: data:; connect-src *; script-src 'self' 'unsafe-eval' 'unsafe-inline';",
			},
		},
	],
	themeConfig: {
		image: "img/banner.png",
		prism: {
			theme: themes.vsLight,
			darkTheme: themes.vsDark,
		},
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
