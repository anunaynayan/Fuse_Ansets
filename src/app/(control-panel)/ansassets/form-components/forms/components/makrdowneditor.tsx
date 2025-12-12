"use client";

import React, { useState, useCallback } from "react";
import MDEditor from "@uiw/react-md-editor";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomOneLight, atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { useTheme } from "@mui/material/styles";

export default function MarkdownEditor() {
  const [value, setValue] = useState<string>(""); // markdown content
  const { theme } = useTheme(); // 'light' or 'dark'

  // Custom keyboard shortcuts
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
      if (e.ctrlKey) {
        if (e.key === "b") {
          e.preventDefault();
          setValue((prev) => prev + "**bold**");
        } else if (e.key === "i") {
          e.preventDefault();
          setValue((prev) => prev + "_italic_");
        } else if (e.key === "k") {
          e.preventDefault();
          setValue((prev) => prev + "[link](url)");
        }
      }
    },
    []
  );

  return (
    <div className="p-4 w-full">
      <MDEditor
        value={value}
        onChange={setValue}
        height={500}
        textareaProps={{
          onKeyDown: handleKeyDown,
          placeholder: "Start writing your markdown...",
        }}
        previewOptions={{
          components: {
            code({ inline, className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || "");
              return !inline && match ? (
                <SyntaxHighlighter
                  style={theme === "dark" ? atomOneDark : atomOneLight}
                  language={match[1]}
                  PreTag="div"
                  {...props}
                >
                  {String(children).replace(/\n$/, "")}
                </SyntaxHighlighter>
              ) : (
                <code className={className} {...props}>
                  {children}
                </code>
              );
            },
          },
        }}
      />
    </div>
  );
}
