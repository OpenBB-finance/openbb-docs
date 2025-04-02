import type { SVGProps } from "react";
interface SVGRProps {
	title?: string;
	titleId?: string;
}

const OpenBB = ({
	title = "OpenBB Workspace",
	titleId = "openbb-terminal-title",
	...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="20"
		height="21"
		fill="none"
		viewBox="0 0 20 21"
		aria-labelledby={titleId}
		{...props}
	>
		<title id={titleId}>{title}</title>
		<path
			stroke="#0088cc"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="2.1"
			d="M2.5 8.362h15m-10 0v10m-1-15h7c1.4 0 2.1 0 2.635.273a2.5 2.5 0 0 1 1.092 1.092c.273.535.273 1.235.273 2.635v7c0 1.4 0 2.1-.273 2.635a2.5 2.5 0 0 1-1.092 1.093c-.535.272-1.235.272-2.635.272h-7c-1.4 0-2.1 0-2.635-.272a2.5 2.5 0 0 1-1.093-1.093c-.272-.535-.272-1.235-.272-2.635v-7c0-1.4 0-2.1.272-2.635a2.5 2.5 0 0 1 1.093-1.092C4.4 3.362 5.1 3.362 6.5 3.362Z"
		/>
	</svg>
);

export default OpenBB;
