import Link from "@docusaurus/Link";
import clsx from "clsx";
import { useLocation } from "@docusaurus/router";
import ChevronRightIcon from "../Icons/ChevronRight";

export default function NewReferenceCard({
  title,
  url,
  description,
  command,
}: {
  title: string;
  url: string;
  description: string;
  command: string;
}) {
  const { pathname } = useLocation();
  const cleanedPath = pathname.replace(/\/v\d+/, "");
  const chevron =
    !cleanedPath.includes("/reference") &&
    !cleanedPath.includes("/widgets-library/") &&
    !cleanedPath.includes("/data_models");

  return (
    <Link
      className={clsx(
        "self-stretch min-h-[90px] h-full p-5 rounded !no-underline cursor-pointer flex-col justify-start items-start gap-4 flex transition-all duration-300 ease-in-out",
        "dark:bg-[#151518] dark:hover:bg-[#212126] dark:!text-white",
        "bg-[#F5F5F6] hover:bg-[#DCDDE0] !text-black"
      )}
      to={url}
    >
      <div className="self-stretch flex-col justify-center items-start gap-1.5 flex">
        <div className="self-stretch justify-between items-center inline-flex">
          <div className="!text-red text-sm font-bold font-['Inter'] leading-snug">
            {title}
          </div>
          {chevron && (
            <div className="justify-start items-start gap-2.5 flex">
              <ChevronRightIcon className="w-4 h-4" />
            </div>
          )}
        </div>
        {description && (
          <div className="dark:text-[#ebebed] text-[#2A2A2A] text-sm font-normal font-['Inter'] leading-snug">
            {description}
          </div>
        )}
      </div>
    </Link>
  );
}
