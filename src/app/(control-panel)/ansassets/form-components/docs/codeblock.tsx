"use client";

import { useState } from "react";
import { IconButton, Tooltip } from "@mui/material";
import { ContentCopy } from "@mui/icons-material";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark, oneLight } from "react-syntax-highlighter/dist/esm/styles/prism";

interface CodeBlockProps {
  code: string;
  language?: string;
  showLineNumbers?: boolean;
  filename?: string;
  dark?: boolean;
  wrapLongLines?: boolean;
}

export default function CodeBlock({
  code,
  language = "tsx",
  showLineNumbers = true,
  filename,
  dark = true,
  wrapLongLines = true,
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="relative rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
      {filename && (
        <div className="flex items-center justify-between px-2 py-3 text-xs bg-gray-100 dark:bg-neutral-800 text-gray-700 dark:text-gray-200 border-b border-gray-200 dark:border-gray-700">
          <span className="truncate">{filename}</span>
        </div>
      )}

      <Tooltip title={copied ? "Copied!" : "Copy"} placement="left">
        <IconButton
          size="small"
          onClick={handleCopy}
          aria-label="Copy code to clipboard"
          className="absolute top-2 right-2 bg-gray-800 text-white hover:bg-gray-700"
        >
          <ContentCopy fontSize="small" />
        </IconButton>
      </Tooltip>

      <SyntaxHighlighter
        language={language}
        style={dark ? oneDark : oneLight}
        wrapLongLines={wrapLongLines}
        showLineNumbers={showLineNumbers}
        customStyle={{
          margin: 0,
          padding: "1rem",
          borderRadius: filename ? "0 0 8px 8px" : "8px",
          backgroundColor: dark ? "#1e1e1e" : undefined,
          fontSize: 13.5,
        }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
}
