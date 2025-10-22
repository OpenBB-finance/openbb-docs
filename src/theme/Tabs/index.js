import { useLocation } from "@docusaurus/router";
import {
	useScrollPositionBlocker,
	useTabs,
} from "@docusaurus/theme-common/internal";
import useIsBrowser from "@docusaurus/useIsBrowser";
import clsx from "clsx";
import React, { cloneElement } from "react";
import styles from "./styles.module.css";

function TabList({ className, block, selectedValue, selectValue, tabValues }) {
	const tabRefs = [];
	const { blockElementScrollPositionUntilNextRender } =
		useScrollPositionBlocker();
	const { pathname } = useLocation();

	const handleTabChange = (event) => {
		const newTab = event.currentTarget;
		const newTabIndex = tabRefs.indexOf(newTab);
		const newTabValue = tabValues[newTabIndex].value;
		if (newTabValue !== selectedValue) {
			blockElementScrollPositionUntilNextRender(newTab);
			selectValue(newTabValue);
		}
	};

	const handleKeydown = (event) => {
		let focusElement = null;
		switch (event.key) {
			case "Enter": {
				handleTabChange(event);
				break;
			}
			case "ArrowRight": {
				const nextTab = tabRefs.indexOf(event.currentTarget) + 1;
				focusElement = tabRefs[nextTab] ?? tabRefs[0];
				break;
			}
			case "ArrowLeft": {
				const prevTab = tabRefs.indexOf(event.currentTarget) - 1;
				focusElement = tabRefs[prevTab] ?? tabRefs[tabRefs.length - 1];
				break;
			}
			default:
				break;
		}
		focusElement?.focus();
	};
  return (
    <div className="border-b border-grey-400 inline-block">
      <ul
        role="tablist"
        aria-orientation="horizontal"
        className={clsx("_group-tab list-none m-0 p-0 flex")}
      >
        {tabValues.map(({ value, label, attributes }) => (
          <li
            role="tab"
            tabIndex={selectedValue === value ? 0 : -1}
            aria-selected={selectedValue === value}
            key={value}
            ref={(tabControl) => tabRefs.push(tabControl)}
            onKeyDown={handleKeydown}
            onClick={handleTabChange}
            {...attributes}
            className={clsx(
              "font-bold tracking-widest uppercase text-lg cursor-pointer mr-4 pb-2 border-b-2 -mb-px first:pl-0 pl-2",
              styles.tabItem,
              attributes?.className,
              {
                "pointer-events-none": selectedValue === value,
                "text-[#669dcb] border-[#669dcb]":
                  selectedValue === value && pathname.startsWith("/workspace"),
                "text-[#FB923C] border-[#FB923C]":
                  selectedValue === value && pathname.startsWith("/python"),
                "border-transparent text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":
                  selectedValue !== value && pathname.startsWith("/python"),
                "border-transparent text-grey-400 hover:text-[#abd2f1] hover:border-[#abd2f1]":
                  selectedValue !== value && pathname.startsWith("/workspace"),
              },
            )}
          >
            {label ?? value}
          </li>
        ))}
      </ul>
    </div>
  );
}
function TabContent({ lazy, children, selectedValue }) {
	// eslint-disable-next-line no-param-reassign
	children = Array.isArray(children) ? children : [children];
	if (lazy) {
		const selectedTabItem = children.find(
			(tabItem) => tabItem.props.value === selectedValue,
		);
		if (!selectedTabItem) {
			// fail-safe or fail-fast? not sure what's best here
			return null;
		}
		return cloneElement(selectedTabItem, { className: "margin-top--md" });
	}
	return (
		<div className="margin-top--md">
			{children.map((tabItem, i) =>
				cloneElement(tabItem, {
					key: i,
					hidden: tabItem.props.value !== selectedValue,
				}),
			)}
		</div>
	);
}
function TabsComponent(props) {
	const tabs = useTabs(props);
	return (
		<div className={clsx("tabs-container", styles.tabList)}>
			<TabList {...props} {...tabs} />
			<TabContent {...props} {...tabs} />
		</div>
	);
}
export default function Tabs(props) {
	const isBrowser = useIsBrowser();
	return (
		<TabsComponent
			// Remount tabs after hydration
			// Temporary fix for https://github.com/facebook/docusaurus/issues/5653
			key={String(isBrowser)}
			{...props}
		/>
	);
}
