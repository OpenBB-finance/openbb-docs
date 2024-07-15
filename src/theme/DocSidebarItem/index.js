import { useLocation } from "@docusaurus/router";
import DocSidebarItemCategory from "@theme/DocSidebarItem/Category";
import DocSidebarItemHtml from "@theme/DocSidebarItem/Html";
import DocSidebarItemLink from "@theme/DocSidebarItem/Link";
import { useIFrameContext } from "../Root.tsx";

function shouldHideItem(item, productPath) {
  if (item.items) {
    return item.items.every((childItem) =>
      shouldHideItem(childItem, productPath)
    );
  }

  if (item.type === "link") {
    const itemPath = item.href.replace(/\/$/, "");
    return !itemPath.startsWith(productPath);
  }

  if (item.type === "category") {
    return item.items.every((childItem) =>
      shouldHideItem(childItem, productPath)
    );
  }

  return false;
}

export default function DocSidebarItem({ item, ...props }) {
  const { isIFrame } = useIFrameContext();
  const { pathname } = useLocation();
  const isPro = pathname.startsWith("/pro");
  const isExcel = pathname.startsWith("/excel");

  // Check if the item is the OpenBB Terminal Pro section
  if (item.customProps?.hiddenByDefault && !(isPro || isExcel)) {
    return null;
  }

  if (isIFrame) {
    const firstTwoPathSegments = pathname.split("/").slice(0, 3).join("/");

    if (shouldHideItem(item, firstTwoPathSegments)) {
      return null;
    }
  }

  if ((isPro || isExcel) && !checkIfAnyChildIsProExcel(item)) {
    return null;
  } else if (
    !(isPro || isExcel) &&
    item.href?.startsWith("/pro") &&
    item.href?.startsWith("/excel")
  ) {
    return null;
  }

  let addedHtml = null;
  if (item.href?.startsWith("/pro")) {
    if (item.label === "Overview") {
      addedHtml = (
        <DocSidebarItemHtml
          item={{
            type: "html",
            className: "sidebar-title !mt-6",
            value: "Getting Started",
            defaultStyle: true,
          }}
        />
      );
    }
    else if (item.label === "Structured Data") {
      addedHtml = (
        <DocSidebarItemHtml
          item={{
            type: "html",
            className: "sidebar-title !mt-6",
            value: "Input Data",
            defaultStyle: true,
          }}
        />
      );
    }
    else if (item.label === "Widgets") {
      addedHtml = (
        <DocSidebarItemHtml
          item={{
            type: "html",
            className: "sidebar-title !mt-6",
            value: "Visualization",
            defaultStyle: true,
          }}
        />
      );
    }
    else if (item.label === "OpenBB Copilot") {
      addedHtml = (
        <DocSidebarItemHtml
          item={{
            type: "html",
            className: "sidebar-title !mt-6",
            value: "AI Insights",
            defaultStyle: true,
          }}
        />
      );
    }
    else if (item.label === "Custom Onboarding") {
      addedHtml = (
        <DocSidebarItemHtml
          item={{
            type: "html",
            className: "sidebar-title !mt-6",
            value: "Enterprise Features",
            defaultStyle: true,
          }}
        />
      );
    }
  }

  switch (item.type) {
    case "category":
      return (
        <>
          {addedHtml}
          <DocSidebarItemCategory item={item} {...props} />
        </>
      );
    case "html":
      return (
        <>
          {addedHtml}
          <DocSidebarItemHtml item={item} {...props} />
        </>
      );
    case "link":
    default:
      return (
        <>
          {addedHtml}
          <DocSidebarItemLink item={item} {...props} />
        </>
      );
  }
}

function checkIfAnyChildIsProExcel(item) {
  if (item.items) {
    return item.items.some((childItem) => checkIfAnyChildIsProExcel(childItem));
  }

  if (item.type === "link") {
    return item.href?.startsWith("/pro") || item.href?.startsWith("/excel");
  }

  if (item.type === "category") {
    return item.items.some((childItem) => checkIfAnyChildIsProExcel(childItem));
  }

  return false;
}
