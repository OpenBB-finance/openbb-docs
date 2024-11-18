import Link from "@docusaurus/Link";
import Layout from "@theme/Layout";
import clsx from "clsx";
import DarkBlueRadialGradient from "../components/Icons/RadialGradients/DarkBlue";
import PlatformIcon from "../components/Icons/Platform";
import OpenBBTerm from "../components/Icons/OpenBBTerm";
import Excel from "../components/Icons/Excel";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import ThemedImage from "@theme/ThemedImage";
import useBaseUrl from "@docusaurus/useBaseUrl";

export default function Home(): JSX.Element {
  const {
    siteConfig: {
      themeConfig: { colorMode: { defaultMode } = { defaultMode: "light" } },
    },
  } = useDocusaurusContext() as {
    siteConfig: { themeConfig: { colorMode?: { defaultMode: string } } };
  };

  return (
    <Layout description="Documentation for free and open source OpenBB products.">
      <article className="min-h-[75vh] w-full relative py-20 md:py-10 flex flex-col items-center justify-center overflow-hidden">
        <DarkBlueRadialGradient className="absolute opacity-40 -left-[1000px] w-[1600px] h-[1600px] lg:-left-[1000px] lg:opacity-30 top-1/2 -translate-y-1/2 xl:-left-[800px] 2xl:opacity-40" />
        <div className="flex mx-auto flex-col items-center justify-center w-full max-w-[1100px]">
          <div className="z-10 flex flex-col items-center justify-center w-full mb-10 md:mb-0">
            <ThemedImage
              sources={{
                light: useBaseUrl("/img/logo-dark.png"),
                dark: useBaseUrl("/img/logo-light.png"),
              }}
              alt="OpenBB Logo"
              className="mb-6 w-[200px] md:w-[250px] !shadow-none !border-none"
            />
            <p className="mx-6 text-base text-center text-[#2A2A2A] dark:text-white max-w-[315px] md:max-w-[880px]">
              All the documentation for the tools you need for your investment
              research.
            </p>
          </div>
          <div className="flex flex-col md:flex-row w-full container items-center justify-center gap-6 px-6 sm:mx-0 my-8 lg:!my-10">
            <Link
              style={{ backgroundSize: "100% 130%" }}
              to="/platform"
              target="_blank"
              rel="noopener noreferrer"
              className="!bg-white dark:!bg-[#151518] bg-no-repeat shadow-sm group !no-underline text-white relative w-full h-[240px] max-w-full p-8 rounded flex flex-col items-start justify-start overflow-hidden"
            >
              <div
                className="absolute inset-0 bg-gradient-radial from-orange-600 dark:from-orange-700 opacity-40 z-[1]"
                style={{
                  background:
                    "radial-gradient(circle at top right, var(--tw-gradient-from), var(--tw-gradient-to))",
                }}
              />
              <div className="relative z-[2]">
                <h3 className="uppercase text-lg tracking-wider font-bold mb-0 mt-0 text-[#2A2A2A] dark:text-white flex items-center gap-2">
                  <div className="dark:bg-[#36363F] bg-[#EBEBED] shadow-sm p-1.5 rounded">
                    <PlatformIcon className="w-4 h-4" />
                  </div>
                  OpenBB Platform
                </h3>
                <p className="text-base mt-2 text-[#434344] dark:text-grey-100">
                  The OpenBB Platform provides a convenient way to access raw
                  financial data from multiple data providers.
                </p>
                <p
                  className={clsx(
                    "mt-auto inline-flex items-center gap-1 font-normal text-[#070707] dark:text-gray-200 dark:hover:text-white text-sm dark:bg-[#36363F] bg-[#EBEBED] hover:bg-[#DADBDE] dark:hover:bg-[#2A2A31] px-4 py-2 rounded-md transition-colors"
                  )}
                >
                  See more
                </p>
              </div>
            </Link>
            <Link
              style={{ backgroundSize: "100% 130%" }}
              to="/terminal"
              target="_blank"
              rel="noopener noreferrer"
              className="!bg-white dark:!bg-[#151518] bg-no-repeat shadow-sm group !no-underline text-white relative w-full h-[240px] max-w-full p-8 rounded flex flex-col items-start justify-start overflow-hidden"
            >
              <div
                className="absolute inset-0 bg-gradient-radial from-[#0097DE] opacity-40 z-[1]"
                style={{
                  background:
                    "radial-gradient(circle at top right, var(--tw-gradient-from), var(--tw-gradient-to))",
                }}
              />
              <div className="relative z-[2]">
                <h3 className="uppercase text-lg tracking-wider font-bold mb-0 mt-0 text-[#2A2A2A] dark:text-white flex items-center gap-2">
                  <div className="dark:bg-[#36363F] bg-[#EBEBED] shadow-sm p-1.5 rounded">
                    <OpenBBTerm className="w-5 h-5" />
                  </div>
                  OpenBB
                </h3>
                <p className="text-base mt-2 text-[#434344] dark:text-grey-100">
                  OpenBB provides investors with a reinvented interface to
                  perform investment research optimised for efficiency.
                </p>
                <p
                  className={clsx(
                    "mt-auto inline-flex items-center gap-1 font-normal text-[#070707] dark:text-gray-200 dark:hover:text-white text-sm dark:bg-[#36363F] bg-[#EBEBED] hover:bg-[#DADBDE] dark:hover:bg-[#2A2A31] px-4 py-2 rounded-md transition-colors"
                  )}
                >
                  See more
                </p>
              </div>
            </Link>
            <Link
              style={{ backgroundSize: "100% 130%" }}
              to="/excel"
              target="_blank"
              rel="noopener noreferrer"
              className="!bg-white dark:!bg-[#151518] bg-no-repeat shadow-sm group !no-underline text-white relative w-full h-[240px] max-w-full p-8 rounded flex flex-col items-start justify-start overflow-hidden"
            >
              <div
                className="absolute inset-0 bg-gradient-radial from-[#15803D] opacity-40 z-[1]"
                style={{
                  background:
                    "radial-gradient(circle at top right, var(--tw-gradient-from), var(--tw-gradient-to))",
                }}
              />
              <div className="relative z-[2]">
                <h3 className="uppercase text-lg tracking-wider font-bold mb-0 mt-0 text-[#2A2A2A] dark:text-white flex items-center gap-2">
                  <div className="dark:bg-[#36363F] bg-[#EBEBED] shadow-sm p-1.5 rounded">
                    <Excel className="w-5 h-5" />
                  </div>
                  OpenBB excel add-in
                </h3>
                <p className="text-base mt-2 text-[#434344] dark:text-grey-100">
                  Our Excel Add-In seamlessly fetches financial data, so you can
                  focus on making investment decisions.
                </p>
                <p
                  className={clsx(
                    "mt-auto inline-flex items-center gap-1 font-normal text-[#070707] dark:text-gray-200 dark:hover:text-white text-sm dark:bg-[#36363F] bg-[#EBEBED] hover:bg-[#DADBDE] dark:hover:bg-[#2A2A31] px-4 py-2 rounded-md transition-colors"
                  )}
                >
                  See more
                </p>
              </div>
            </Link>
          </div>
          <div className="my-4 md:my-0" />

          <div className="my-2 md:my-0" />
          <p className="z-20 text-base text-[#2A2A2A] dark:text-grey-100 text-center md:text-left px-6">
            Our website can be found{" "}
            <a
              href="https://openbb.co"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#33BBFF] !underline hover:text-[#99DDFF] active:text-[#0088CC]"
            >
              here
            </a>{" "}
            and OpenBB Bot documentation can be found{" "}
            <a
              href="https://docs.openbb.co/bot"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#33BBFF] !underline hover:text-[#99DDFF] active:text-[#0088CC]"
            >
              here
            </a>
            .
          </p>
        </div>
      </article>
    </Layout>
  );
}
