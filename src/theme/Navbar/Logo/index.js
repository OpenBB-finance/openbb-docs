import Link from "@docusaurus/Link";
import { useLocation } from "@docusaurus/router";
import LetteringDocsLogo from "@site/src/components/Icons/LetteringDocsLogo";
import clsx from "clsx";
import React from "react";

function getLogo(type) {
  return <LetteringDocsLogo />;
}

export default function NavbarLogo() {
  const { pathname } = useLocation();
  const type = pathname.length > 1 ? pathname.split("/")[1] : "home";

  return (
    <div className="flex items-center ml-2">
      <Link to={`/`}>
        {getLogo(type)}
      </Link>
    </div>
  );
}
