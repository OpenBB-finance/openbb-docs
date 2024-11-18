import "@docsearch/css";
import { DocSearchButton, useDocSearchKeyboardEvents } from "@docsearch/react";
import BrowserOnly from "@docusaurus/BrowserOnly";
import Head from "@docusaurus/Head";
import Link from "@docusaurus/Link";
import Translate from "@docusaurus/Translate";
import { useHistory, useLocation } from "@docusaurus/router";
import { isRegexpStringMatch } from "@docusaurus/theme-common";
import {
  useAlgoliaContextualFacetFilters,
  useSearchResultUrlProcessor,
} from "@docusaurus/theme-search-algolia/client";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import translations from "@theme/SearchTranslations";
import { useCallback, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { useIFrameContext } from "../Root.tsx";

let DocSearchModal = null;

function Hit({ hit, children }) {
  return <Link to={hit.url}>{children}</Link>;
}

function ResultsFooter({ state, onClose }) {
  return (
    <Link to={`/search?q=${state.query}`} onClick={onClose}>
      <Translate
        id="theme.SearchBar.seeAll"
        values={{ count: state.context.nbHits }}
      >
        {"See all {count} results"}
      </Translate>
    </Link>
  );
}

function mergeFacetFilters(f1, f2) {
  const normalize = (f) => (typeof f === "string" ? [f] : f);
  return [...normalize(f1), ...normalize(f2)];
}

function DocSearch({ contextualSearch, externalUrlRegex, ...props }) {
  const location = useLocation();
  const { siteMetadata } = useDocusaurusContext();
  const processSearchResultUrl = useSearchResultUrlProcessor();
  const contextualSearchFacetFilters = useAlgoliaContextualFacetFilters();
  const configFacetFilters = props.searchParameters?.facetFilters ?? [];
  const facetFilters = contextualSearch
    ? // Merge contextual search filters with config filters
      mergeFacetFilters(contextualSearchFacetFilters, configFacetFilters)
    : // ... or use config facetFilters
      configFacetFilters;
  // We let user override default searchParameters if she wants to
  const searchParameters = {
    ...props.searchParameters,
    facetFilters,
  };
  const history = useHistory();
  const searchContainer = useRef(null);
  const searchButtonRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [initialQuery, setInitialQuery] = useState(undefined);
  const importDocSearchModalIfNeeded = useCallback(() => {
    if (DocSearchModal) {
      return Promise.resolve();
    }
    return Promise.all([
      import("@docsearch/react/modal"),
      import("./styles.css"),
    ]).then(([{ DocSearchModal: Modal }]) => {
      DocSearchModal = Modal;
    });
  }, []);
  const onOpen = useCallback(() => {
    importDocSearchModalIfNeeded().then(() => {
      searchContainer.current = document.createElement("div");
      document.body.insertBefore(
        searchContainer.current,
        document.body.firstChild
      );
      setIsOpen(true);
    });
  }, [importDocSearchModalIfNeeded]);
  const onClose = useCallback(() => {
    setIsOpen(false);
    searchContainer.current?.remove();
  }, []);
  const onInput = useCallback(
    (event) => {
      importDocSearchModalIfNeeded().then(() => {
        setIsOpen(true);
        setInitialQuery(event.key);
      });
    },
    [importDocSearchModalIfNeeded] // Removed unnecessary dependencies
  );
  const navigator = useRef({
    navigate({ itemUrl }) {
      // Algolia results could contain URL's from other domains which cannot
      // be served through history and should navigate with window.location
      if (isRegexpStringMatch(externalUrlRegex, itemUrl)) {
        window.location.href = itemUrl;
      } else {
        history.push(itemUrl);
      }
    },
  }).current;
  const transformItems = useRef((items) =>
    (props.transformItems
      ? // Custom transformItems
        props.transformItems(items)
      : // Default transformItems
        items.map((item) => ({
          ...item,
          url: processSearchResultUrl(item.url),
        }))
    ).filter((item) => {
      const firstPathSegment = location.pathname.split("/")[1];
      return !firstPathSegment
        ? true
        : item.url.startsWith(`/${firstPathSegment}/`);
    })
  ).current;
  const resultsFooterComponent = useMemo(
    () =>
      // eslint-disable-next-line react/no-unstable-nested-components
      (footerProps) =>
        <ResultsFooter {...footerProps} onClose={onClose} />,
    [onClose]
  );
  const transformSearchClient = useCallback(
    (searchClient) => {
      searchClient.addAlgoliaAgent(
        "docusaurus",
        siteMetadata.docusaurusVersion
      );
      return searchClient;
    },
    [siteMetadata.docusaurusVersion]
  );
  useDocSearchKeyboardEvents({
    isOpen,
    onOpen,
    onClose,
    onInput,
    searchButtonRef,
  });
  return (
    <>
      <Head>
        {/* This hints the browser that the website will load data from Algolia,
        and allows it to preconnect to the DocSearch cluster. It makes the first
        query faster, especially on mobile. */}
        <link
          rel="preconnect"
          href={`https://${props.appId}-dsn.algolia.net`}
          crossOrigin="anonymous"
        />
      </Head>

      <DocSearchButton
        onTouchStart={importDocSearchModalIfNeeded}
        onFocus={importDocSearchModalIfNeeded}
        onMouseOver={importDocSearchModalIfNeeded}
        onClick={onOpen}
        ref={searchButtonRef}
        translations={translations.button}
      />

      <BrowserOnly>
        {() =>
          isOpen &&
          DocSearchModal &&
          searchContainer.current &&
          createPortal(
            <DocSearchModal
              onClose={onClose}
              initialScrollY={window.scrollY}
              initialQuery={initialQuery}
              navigator={navigator}
              transformItems={transformItems}
              hitComponent={Hit}
              transformSearchClient={transformSearchClient}
              {...(props.searchPagePath && {
                resultsFooterComponent,
              })}
              {...props}
              searchParameters={searchParameters}
              placeholder={translations.placeholder}
              translations={translations.modal}
            />,
            searchContainer.current
          )
        }
      </BrowserOnly>
    </>
  );
}

export default function SearchBar() {
  const { siteConfig } = useDocusaurusContext();
  const { isIFrame } = useIFrameContext();
  return (
    <div className="flex gap-2">
      <DocSearch {...siteConfig.themeConfig.algolia} />
      {!isIFrame && (
        <a
          target="_blank"
          rel="noreferrer noopener"
          href="https://pro.openbb.co/"
          className="_login-button text-sm" // Changed from _btn-dark to _login-button
        >
          <span className="md:hidden">Login</span>
          <span className="hidden md:inline">Login</span>
        </a>
      )}
    </div>
  );
}
