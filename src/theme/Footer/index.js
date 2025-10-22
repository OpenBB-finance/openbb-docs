import Link from "@docusaurus/Link";
import ChevronRightIcon from "@site/src/components/Icons/ChevronRight";
import DiscordIcon from "@site/src/components/Icons/Discord";
import GithubIcon from "@site/src/components/Icons/Github";
import LetteringLogo from "@site/src/components/Icons/LetteringLogo";
import LinkedinIcon from "@site/src/components/Icons/Linkedin";
import RedditIcon from "@site/src/components/Icons/Reddit";
import StarIcon from "@site/src/components/Icons/Star";
import TiktokIcon from "@site/src/components/Icons/Tiktok";
import TwitterIcon from "@site/src/components/Icons/Twitter";
import YoutubeIcon from "@site/src/components/Icons/Youtube";
import clsx from "clsx";
import React, { useEffect, useState } from "react";
import { useIFrameContext } from "../Root.tsx";
const nFormatter = (num, digits) => {
	const si = [
		{ value: 1, symbol: "" },
		{ value: 1e3, symbol: "k" },
		{ value: 1e6, symbol: "M" },
		{ value: 1e9, symbol: "G" },
		{ value: 1e12, symbol: "T" },
		{ value: 1e15, symbol: "P" },
		{ value: 1e18, symbol: "E" },
	];
	const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
	let i;
	for (i = si.length - 1; i > 0; i--) {
		if (num >= si[i].value) {
			break;
		}
	}
	return (num / si[i].value).toFixed(digits).replace(rx, "$1") + si[i].symbol;
};

function Footer() {
	const [stars, setStars] = useState(0);
	useEffect(() => {
		fetch("https://api.github.com/repos/openbb-finance/openbb")
			.then((res) => res.json())
			.then((data) => setStars(data.stargazers_count));
	}, []);
	const { isIFrame } = useIFrameContext();

	if (isIFrame) {
		return null;
	}

	return (
		<footer className="px-4 border-t dark:border-grey-600/50 lg:px-12 py-4 bg-white dark:bg-grey-850 z-10 overflow-hidden flex flex-col gap-10 items-center justify-center">
			<div className="flex w-full justify-between md:flex-row mt-5">
				<div className="md:items-start mt-2">
					<Link
						aria-label="Home"
						to="/"
						className="hover:text-grey-700 dark:text-white dark:hover:text-gray-50"
					>
						<LetteringLogo className="h-[14px] w-[140px]" />
					</Link>
				</div>
				<div className="justify-end">
					<a
						className="flex h-[32px] w-[172px] rounded-md border border-grey-300 hover:bg-grey-100 dark:border-white bg-grey-100 dark:bg-white text-xs hover:no-underline"
						href="https://github.com/OpenBB-finance/OpenBB"
						target="_blank"
						rel="noreferrer"
					>
						<span className="inline-flex w-[60%] items-center gap-x-[6px] px-3 py-2 text-grey-800">
							<StarIcon
								style={{ marginBottom: 3 }}
								className="h-[14.67px] w-[14.67px]"
							/>
							Star us
						</span>
						<span className="inline-flex w-[40%] items-center justify-center rounded-r-md bg-grey-850 text-grey-200">
							{nFormatter(stars, 1) ?? "12.5k"}
						</span>
					</a>
				</div>
			</div>
			<div className="flex w-full flex-col items-center justify-between gap-4 md:flex-row md:gap-0">
				<div className="flex flex-col items-start justify-end gap-4 self-start font-light text-grey-500 md:flex-row md:items-center">
					<p className="text-sm">{`© ${new Date().getFullYear()} OpenBB`}</p>
					<div className="_divider-x hidden h-[20px] border-[0.5px] md:block" />
					<Link
						to="https://openbb.co/legal/privacy-policy"
						className="text-sm dark:hover:text-white"
					>
						Privacy Policy
					</Link>
					<div className="_divider-x hidden h-[20px] border-[0.5px] md:block" />
					<Link
						to="https://openbb.co/legal/terms-of-service"
						className="text-sm dark:hover:text-white"
					>
						Terms
					</Link>
				</div>
				<div className="mt-4 mb-10 grid grid-cols-4 gap-4 self-start md:my-0 md:grid-cols-7 md:self-end">
					<a
						aria-label="GitHub Link"
						className="h-8 w-8 dark:hover:!text-white hover:text-grey-700"
						target="_blank"
						rel="noreferrer"
						href="https://github.com/OpenBB-finance/OpenBB"
					>
						<GithubIcon className="h-4 w-4" />
					</a>
					<a
						aria-label="LinkedIn Link"
						className="h-8 w-8 dark:hover:!text-white hover:text-grey-700"
						target="_blank"
						rel="noreferrer"
						href="https://www.linkedin.com/company/openbb-finance/"
					>
						<LinkedinIcon className="h-4 w-4" />
					</a>
					<a
						aria-label="Twitter Link"
						className="h-8 w-8 dark:hover:!text-white hover:text-grey-700"
						target="_blank"
						rel="noreferrer"
						href="https://twitter.com/openbb_finance"
					>
						<TwitterIcon className="h-4 w-4" />
					</a>
					<a
						aria-label="Tiktok Link"
						className="h-8 w-8 dark:hover:!text-white hover:text-grey-700"
						target="_blank"
						rel="noreferrer"
						href="https://www.tiktok.com/@openbb"
					>
						<TiktokIcon className="h-5 w-5 pl-[2.5px]" />
					</a>
					<a
						aria-label="Reddit Link"
						className="h-8 w-8 dark:hover:!text-white hover:text-grey-700"
						target="_blank"
						rel="noreferrer"
						href="https://www.reddit.com/r/openbb/"
					>
						<RedditIcon className="h-4 w-4" />
					</a>
					<a
						aria-label="Discord Link"
						className="h-8 w-8 dark:hover:!text-white hover:text-grey-700"
						target="_blank"
						rel="noreferrer"
						href="https://discord.gg/xPHTuHCmuV"
					>
						<DiscordIcon className="h-4 w-4" />
					</a>
					<a
						aria-label="Youtube Link"
						className="h-8 w-8 dark:hover:!text-white hover:text-grey-700"
						target="_blank"
						rel="noreferrer noopener"
						href="https://www.youtube.com/channel/UCaeFEx-W16IuxRsHlM1ywBQ"
					>
						<YoutubeIcon className="h-4 w-4" />
					</a>
				</div>
			</div>
		</footer>
	);
}
export default React.memo(Footer);

function Submenu({ label, submenu }) {
	const [isOpen, setIsOpen] = useState(false);
	function toggle() {
		setIsOpen(!isOpen);
	}
	return (
		<div className="w-full md:hidden">
			<button
				onClick={toggle}
				className={clsx(
					"flex w-full items-center justify-between rounded-sm p-2 font-semibold",
				)}
			>
				{label}
				<ChevronRightIcon
					className={clsx("tw-transition", {
						"rotate-90": isOpen,
					})}
				/>
			</button>
			<div
				className={clsx("ml-6 mt-2 flex-col items-start gap-4", {
					flex: isOpen,
					hidden: !isOpen,
				})}
			>
				{submenu.map((menu) => {
					return menu.href.startsWith("https://") ? (
						<a
							className="flex w-full cursor-pointer gap-x-2 p-2 font-semibold whitespace-nowrap"
							target="_blank"
							rel="noreferrer"
							href={menu.href}
							key={menu.href}
						>
							{menu.label}
						</a>
					) : (
						<Link
							key={menu.href}
							to={menu.href}
							className="w-full p-2 font-semibold"
						>
							{menu.label}
						</Link>
					);
				})}
			</div>
		</div>
	);
}

const FOOTER_CONTENT = {
	social: {
		twitter: "/",
	},
	items: [
		{
			href: "https://openbb.co/company",
			label: "Company",
			submenus: [
				{
					href: "https://openbb.co/why-openbb",
					label: "Why OpenBB?",
				},
				{
					href: "https://openbb.co/community",
					label: "Community",
				},
				{
					href: "https://openbb.co/company",
					label: "About us",
				},
				{
					href: "https://openbb.co/company/careers",
					label: "Careers",
				},
				{
					href: "https://openbb.co/company/partners",
					label: "Partners",
				},
			],
		},
		{
			href: "https://openbb.co/products/workspace",
			label: "Products",
			submenus: [
				{
					href: "https://openbb.co/products/workspace",
					label: "OpenBB Workspace",
				},
				{
					href: "https://docs.openbb.co/workspace",
					label: "Workspace Docs",
				},
			],
		},
		{
			href: "",
			label: "Community",
			submenus: [
				{
					href: "https://openbb.co/community",
					label: "Contributors",
				},
				{
					href: "https://openbb.co/blog",
					label: "Blog & Stories",
				},
				{
					href: "https://openbb.co/newsletter",
					label: "Newsletter",
				},

				{
					href: "https://www.openbb.design",
					label: "Brand Book",
				},
			],
		},
		{
			href: "",
			label: "Others",
			submenus: [
				{
					href: "https://openbb.co/request-a-feature",
					label: "Request feature",
				},
				{
					href: "https://openbb.co/support",
					label: "Support",
				},
				{
					href: "https://openbb.co/contact",
					label: "Contact",
				},
				{
					href: "https://openbb.co/sitemap",
					label: "Sitemap",
				},
			],
		},
	],
};
