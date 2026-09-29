import React, { useState, useRef, useEffect } from "react";
import { useLocation } from "@docusaurus/router";
import {
  useVersions,
  useActiveDocContext,
  useDocsPreferredVersion,
} from "@docusaurus/plugin-content-docs/client";
import Link from "@docusaurus/Link";
import styles from "./styles.module.css";

const PLUGIN_ID = "odp";

function getMainDoc(version) {
  return version.docs.find((doc) => doc.id === version.mainDocId);
}

function getTargetDoc(version, activeDocContext) {
  return (
    activeDocContext.alternateDocVersions[version.name] ?? getMainDoc(version)
  );
}

export default function OdpVersionPicker() {
  const location = useLocation();
  const versions = useVersions(PLUGIN_ID);
  const activeDocContext = useActiveDocContext(PLUGIN_ID);
  const { savePreferredVersionName } = useDocsPreferredVersion(PLUGIN_ID);
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef(null);

  useEffect(() => {
    function onClick(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  // Only render on /odp/* routes — the rest of the site is unversioned.
  if (!location.pathname.startsWith("/odp")) return null;
  if (!versions || versions.length === 0) return null;

  const activeVersion = activeDocContext.activeVersion ?? versions[0];

  return (
    <div ref={wrapperRef} className={styles.wrapper}>
      <button
        type="button"
        className={styles.button}
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <span className={styles.versionLabel}>{activeVersion.label}</span>
        <span className={styles.chevron} aria-hidden>
          ▾
        </span>
      </button>
      {open && (
        <ul className={styles.menu} role="listbox">
          {versions.map((version) => {
            const targetDoc = getTargetDoc(version, activeDocContext);
            const isActive = version.name === activeVersion.name;
            return (
              <li key={version.name} role="option" aria-selected={isActive}>
                <Link
                  className={`${styles.menuItem} ${isActive ? styles.menuItemActive : ""}`}
                  to={targetDoc.path}
                  onClick={() => {
                    savePreferredVersionName(version.name);
                    setOpen(false);
                  }}
                >
                  {version.label}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
