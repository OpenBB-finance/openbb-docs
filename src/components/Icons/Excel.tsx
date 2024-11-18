import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const Excel = ({
  title = "Excel",
  titleId = "excel-title",
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
      stroke="#16A34A"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2.1"
      d="M2.5 8.362h15m-15 5h15m-7.5-10v15m-3.5-15h7c1.4 0 2.1 0 2.635.273a2.5 2.5 0 0 1 1.092 1.092c.273.535.273 1.235.273 2.635v7c0 1.4 0 2.1-.273 2.635a2.5 2.5 0 0 1-1.092 1.093c-.535.272-1.235.272-2.635.272h-7c-1.4 0-2.1 0-2.635-.272a2.5 2.5 0 0 1-1.093-1.093c-.272-.535-.272-1.235-.272-2.635v-7c0-1.4 0-2.1.272-2.635a2.5 2.5 0 0 1 1.093-1.092C4.4 3.362 5.1 3.362 6.5 3.362Z"
    />
  </svg>
);

export default Excel;
