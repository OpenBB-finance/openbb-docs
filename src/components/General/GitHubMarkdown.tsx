import React, { useState, useEffect } from "react";
import CodeBlock from "@theme/CodeBlock";

interface GitHubMarkdownProps {
  url: string;
  branch?: string;
}

export default function GitHubMarkdown({ url, branch = "main" }: GitHubMarkdownProps) {
  const [content, setContent] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        setLoading(true);
        // Convert GitHub URL to raw content URL if needed
        let rawUrl = url;
        if (url.includes("github.com") && !url.includes("raw.githubusercontent.com")) {
          rawUrl = url
            .replace("github.com", "raw.githubusercontent.com")
            .replace("/blob/", "/");
        }

        const response = await fetch(rawUrl);
        if (!response.ok) {
          throw new Error(`Failed to fetch: ${response.status}`);
        }
        const text = await response.text();
        setContent(text);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to load content");
      } finally {
        setLoading(false);
      }
    };

    fetchContent();
  }, [url, branch]);

  if (loading) {
    return (
      <div style={{ padding: "20px", textAlign: "center" }}>
        <p>Loading content from GitHub...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div style={{ padding: "20px", color: "var(--ifm-color-danger)" }}>
        <p>Error loading content: {error}</p>
        <p>
          <a href={url} target="_blank" rel="noopener noreferrer">
            View on GitHub
          </a>
        </p>
      </div>
    );
  }

  // Get base URL for resolving relative links
  const getBaseUrl = (): string => {
    // Convert GitHub blob URL to the directory containing the file
    // e.g., https://github.com/org/repo/blob/main/path/to/file.md -> https://github.com/org/repo/blob/main/path/to/
    const lastSlash = url.lastIndexOf("/");
    return url.substring(0, lastSlash + 1);
  };

  // Resolve relative URLs to absolute GitHub URLs
  const resolveUrl = (href: string): string => {
    // Already absolute URL
    if (href.startsWith("http://") || href.startsWith("https://") || href.startsWith("#")) {
      return href;
    }

    const baseUrl = getBaseUrl();

    // Handle ./ prefix
    if (href.startsWith("./")) {
      return baseUrl + href.substring(2);
    }

    // Handle ../ prefix (go up directories)
    if (href.startsWith("../")) {
      let resolvedBase = baseUrl;
      let resolvedHref = href;
      while (resolvedHref.startsWith("../")) {
        // Remove trailing slash, then remove last path segment
        resolvedBase = resolvedBase.replace(/\/[^/]*\/$/, "/");
        resolvedHref = resolvedHref.substring(3);
      }
      return resolvedBase + resolvedHref;
    }

    // Plain relative path
    return baseUrl + href;
  };

  // Parse inline markdown (bold, italic, code, links)
  const parseInlineMarkdown = (text: string): string => {
    return text
      // Code (backticks) - must come before bold/italic
      .replace(/`([^`]+)`/g, '<code>$1</code>')
      // Bold
      .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
      .replace(/__([^_]+)__/g, '<strong>$1</strong>')
      // Italic
      .replace(/\*([^*]+)\*/g, '<em>$1</em>')
      .replace(/_([^_]+)_/g, '<em>$1</em>')
      // Links - resolve relative URLs to GitHub
      .replace(/\[([^\]]+)\]\(([^)]+)\)/g, (_, linkText, href) => {
        const resolvedHref = resolveUrl(href);
        return `<a href="${resolvedHref}" target="_blank" rel="noopener noreferrer">${linkText}</a>`;
      });
  };

  // Parse and render markdown content
  const renderMarkdown = (markdown: string) => {
    let lines = markdown.split("\n");
    const elements: React.ReactNode[] = [];
    let i = 0;
    let keyIndex = 0;

    // Skip YAML frontmatter if present
    if (lines[0]?.trim() === "---") {
      i = 1;
      while (i < lines.length && lines[i]?.trim() !== "---") {
        i++;
      }
      i++; // Skip the closing ---
    }

    while (i < lines.length) {
      const line = lines[i];

      // Safety check for undefined lines
      if (line === undefined) {
        i++;
        continue;
      }

      // Skip the first H1 title (already in page frontmatter)
      if (line.startsWith("# ") && elements.length === 0) {
        i++;
        continue;
      }

      // Code blocks
      if (line.startsWith("```")) {
        const language = line.slice(3).trim() || "text";
        const codeLines: string[] = [];
        i++;
        while (i < lines.length && !lines[i].startsWith("```")) {
          codeLines.push(lines[i]);
          i++;
        }
        elements.push(
          <CodeBlock key={keyIndex++} language={language}>
            {codeLines.join("\n")}
          </CodeBlock>
        );
        i++;
        continue;
      }

      // Tables
      if (line.trim().startsWith("|") && line.trim().endsWith("|")) {
        const tableLines: string[] = [];
        while (i < lines.length && lines[i].trim().startsWith("|") && lines[i].trim().endsWith("|")) {
          tableLines.push(lines[i]);
          i++;
        }

        if (tableLines.length >= 2) {
          const parseTableRow = (row: string): string[] => {
            return row
              .split("|")
              .slice(1, -1)
              .map((cell) => cell.trim());
          };

          const headers = parseTableRow(tableLines[0]);
          // Skip the separator row (index 1)
          const bodyRows = tableLines.slice(2).map(parseTableRow);

          elements.push(
            <div key={keyIndex++} style={{ overflowX: "auto", marginBottom: "1rem" }}>
              <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead>
                  <tr>
                    {headers.map((header, idx) => (
                      <th
                        key={idx}
                        style={{
                          padding: "0.75rem",
                          borderBottom: "2px solid var(--ifm-color-emphasis-300)",
                          textAlign: "left",
                          fontWeight: 600,
                        }}
                        dangerouslySetInnerHTML={{ __html: parseInlineMarkdown(header) }}
                      />
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {bodyRows.map((row, rowIdx) => (
                    <tr key={rowIdx}>
                      {row.map((cell, cellIdx) => (
                        <td
                          key={cellIdx}
                          style={{
                            padding: "0.75rem",
                            borderBottom: "1px solid var(--ifm-color-emphasis-200)",
                          }}
                          dangerouslySetInnerHTML={{ __html: parseInlineMarkdown(cell) }}
                        />
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          );
        }
        continue;
      }

      // Headers
      if (line.startsWith("######")) {
        elements.push(<h6 key={keyIndex++}>{line.slice(6).trim()}</h6>);
        i++;
        continue;
      }
      if (line.startsWith("#####")) {
        elements.push(<h5 key={keyIndex++}>{line.slice(5).trim()}</h5>);
        i++;
        continue;
      }
      if (line.startsWith("####")) {
        elements.push(<h4 key={keyIndex++}>{line.slice(4).trim()}</h4>);
        i++;
        continue;
      }
      if (line.startsWith("###")) {
        elements.push(<h3 key={keyIndex++}>{line.slice(3).trim()}</h3>);
        i++;
        continue;
      }
      if (line.startsWith("##")) {
        elements.push(<h2 key={keyIndex++}>{line.slice(2).trim()}</h2>);
        i++;
        continue;
      }
      if (line.startsWith("#")) {
        elements.push(<h2 key={keyIndex++}>{line.slice(1).trim()}</h2>);
        i++;
        continue;
      }

      // Unordered lists
      if (line.match(/^[\s]*[-*]\s/)) {
        const listItems: string[] = [];
        while (i < lines.length && lines[i].match(/^[\s]*[-*]\s/)) {
          listItems.push(lines[i].replace(/^[\s]*[-*]\s/, "").trim());
          i++;
        }
        elements.push(
          <ul key={keyIndex++}>
            {listItems.map((item, idx) => (
              <li key={idx} dangerouslySetInnerHTML={{ __html: parseInlineMarkdown(item) }} />
            ))}
          </ul>
        );
        continue;
      }

      // Ordered lists
      if (line.match(/^[\s]*\d+\.\s/)) {
        const listItems: string[] = [];
        while (i < lines.length && lines[i].match(/^[\s]*\d+\.\s/)) {
          listItems.push(lines[i].replace(/^[\s]*\d+\.\s/, "").trim());
          i++;
        }
        elements.push(
          <ol key={keyIndex++}>
            {listItems.map((item, idx) => (
              <li key={idx} dangerouslySetInnerHTML={{ __html: parseInlineMarkdown(item) }} />
            ))}
          </ol>
        );
        continue;
      }

      // Blockquotes
      if (line.startsWith(">")) {
        const quoteLines: string[] = [];
        while (i < lines.length && lines[i].startsWith(">")) {
          quoteLines.push(lines[i].slice(1).trim());
          i++;
        }
        elements.push(
          <blockquote key={keyIndex++}>
            <p dangerouslySetInnerHTML={{ __html: parseInlineMarkdown(quoteLines.join(" ")) }} />
          </blockquote>
        );
        continue;
      }

      // Empty lines
      if (line.trim() === "") {
        i++;
        continue;
      }

      // Regular paragraphs
      const paragraphLines: string[] = [];
      while (
        i < lines.length &&
        lines[i].trim() !== "" &&
        !lines[i].startsWith("#") &&
        !lines[i].startsWith("```") &&
        !lines[i].match(/^[\s]*[-*]\s/) &&
        !lines[i].match(/^[\s]*\d+\.\s/) &&
        !lines[i].startsWith(">") &&
        !(lines[i].trim().startsWith("|") && lines[i].trim().endsWith("|"))
      ) {
        paragraphLines.push(lines[i]);
        i++;
      }
      if (paragraphLines.length > 0) {
        elements.push(
          <p
            key={keyIndex++}
            dangerouslySetInnerHTML={{ __html: parseInlineMarkdown(paragraphLines.join(" ")) }}
          />
        );
      }
    }

    return elements;
  };

  return (
    <div className="github-markdown-content">
      {renderMarkdown(content)}
      <div style={{ marginTop: "2rem", paddingTop: "1rem", borderTop: "1px solid var(--ifm-color-emphasis-300)" }}>
        <p style={{ fontSize: "0.9em", color: "var(--ifm-color-emphasis-600)" }}>
          <a href={url} target="_blank" rel="noopener noreferrer">
            View source on GitHub
          </a>
        </p>
      </div>
    </div>
  );
}
