import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const PlatformIcon = ({
  title = "Platform Icon", // Add default title
  titleId = "platform-icon-title", // Add default titleId
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
    <g clipPath="url(#a)">
      <path
        stroke="#EA580C"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M17.5 5.029c0 1.38-3.358 2.5-7.5 2.5-4.142 0-7.5-1.12-7.5-2.5m15 0c0-1.38-3.358-2.5-7.5-2.5-4.142 0-7.5 1.12-7.5 2.5m15 0v11.666c0 1.384-3.333 2.5-7.5 2.5s-7.5-1.116-7.5-2.5V5.03m15 5.833c0 1.383-3.333 2.5-7.5 2.5s-7.5-1.117-7.5-2.5"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="currentColor" d="M0 .862h20v20H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default PlatformIcon;
