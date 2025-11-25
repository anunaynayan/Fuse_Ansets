"use client";


import React, { useEffect, useRef, useState } from "react";

type Tool =
  | "bold"
  | "italic"
  | "underline"
  | "h1"
  | "h2"
  | "h3"
  | "ul"
  | "ol"
  | "quote"
  | "link";

interface Props {
  tools?: Tool[];
  offset?: number;
}

type Position = { top: number; left: number; visible: boolean };

export const FloatingToolbar: React.FC<Props> = ({
  tools = ["bold", "italic", "underline", "h1", "h2", "h3", "ul", "ol", "quote", "link"],
  offset = 10,
}) => {
  const barRef = useRef<HTMLDivElement | null>(null);
  const [position, setPosition] = useState<Position>({
    top: 0,
    left: 0,
    visible: false,
  });

  const [showLinkInput, setShowLinkInput] = useState(false);

  useEffect(() => {
    const handler = () => {
      const sel = window.getSelection();
      if (!sel || sel.isCollapsed) return hide();

      if (sel.rangeCount > 0) {
        const range = sel.getRangeAt(0);
        const rect = range.getBoundingClientRect();

        if (rect.width > 0 || rect.height > 0) {
          showAt(rect);
        }
      }
    };

    document.addEventListener("mouseup", handler);
    document.addEventListener("keyup", handler);

    return () => {
      document.removeEventListener("mouseup", handler);
      document.removeEventListener("keyup", handler);
    };
  }, []);

  function showAt(rect: DOMRect) {
    const toolbarWidth = barRef.current?.offsetWidth || 260;

    const left = rect.left + rect.width / 2 - toolbarWidth / 2;

    let top = rect.top + window.scrollY - 50;
    if (top < 5) top = rect.bottom + window.scrollY + offset;

    setPosition({
      top,
      left: Math.max(10, left),
      visible: true,
    });
  }

  function hide() {
    setPosition((p) => ({ ...p, visible: false }));
    setShowLinkInput(false);
  }

  function exec(cmd: string, val?: string) {
    document.execCommand(cmd, false, val);
  }

  function applyHeading(level: 1 | 2 | 3) {
    exec("formatBlock", `H${level}`);
  }

  function addLink(url: string) {
    exec("createLink", url);
    setShowLinkInput(false);
    hide();
  }

  return (
    <div
      ref={barRef}
      className={`fixed z-50 transition-all duration-150 
      ${position.visible ? "opacity-100 scale-100" : "opacity-0 scale-90"}
      pointer-events-auto`}
      style={{
        top: position.top,
        left: position.left,
      }}
    >
      <div className="bg-white shadow-lg rounded-xl p-2 flex gap-2 border border-gray-200 max-w-[90vw]">
        {/* Bold */}
        {tools.includes("bold") && (
          <button
            onMouseDown={(e) => e.preventDefault()}
            onClick={() => exec("bold")}
            className="p-2 rounded-md hover:bg-gray-100"
          >
            <b>B</b>
          </button>
        )}

        {/* Italic */}
        {tools.includes("italic") && (
          <button
            onMouseDown={(e) => e.preventDefault()}
            onClick={() => exec("italic")}
            className="p-2 rounded-md hover:bg-gray-100"
          >
            <i>I</i>
          </button>
        )}

        {/* Underline */}
        {tools.includes("underline") && (
          <button
            onMouseDown={(e) => e.preventDefault()}
            onClick={() => exec("underline")}
            className="p-2 rounded-md hover:bg-gray-100"
          >
            <u>U</u>
          </button>
        )}

        {/* H1 */}
        {tools.includes("h1") && (
          <button onMouseDown={(e) => e.preventDefault()} onClick={() => applyHeading(1)} className="p-2 text-sm">
            H1
          </button>
        )}

        {/* H2 */}
        {tools.includes("h2") && (
          <button onMouseDown={(e) => e.preventDefault()} onClick={() => applyHeading(2)} className="p-2 text-sm">
            H2
          </button>
        )}

        {/* H3 */}
        {tools.includes("h3") && (
          <button onMouseDown={(e) => e.preventDefault()} onClick={() => applyHeading(3)} className="p-2 text-sm">
            H3
          </button>
        )}

        {/* Bullet List */}
        {tools.includes("ul") && (
          <button
            onMouseDown={(e) => e.preventDefault()}
            onClick={() => exec("insertUnorderedList")}
            className="p-2 text-sm"
          >
            • List
          </button>
        )}

        {/* Number List */}
        {tools.includes("ol") && (
          <button
            onMouseDown={(e) => e.preventDefault()}
            onClick={() => exec("insertOrderedList")}
            className="p-2 text-sm"
          >
            1.
          </button>
        )}

        {/* Quote */}
        {tools.includes("quote") && (
          <button
            onMouseDown={(e) => e.preventDefault()}
            onClick={() => exec("formatBlock", "BLOCKQUOTE")}
            className="p-2 text-sm"
          >
            ❝
          </button>
        )}

        {/* Link */}
        {tools.includes("link") && (
          <button
            onMouseDown={(e) => e.preventDefault()}
            onClick={() => setShowLinkInput((prev) => !prev)}
            className="p-2 text-sm"
          >
            🔗
          </button>
        )}

        {/* Link Input */}
        {showLinkInput && (
          <div className="absolute -top-14 left-0 bg-white shadow-md p-2 rounded-lg flex gap-2 border">
            <input
              type="text"
              placeholder="https://example.com"
              className="border p-1 rounded w-40 text-sm"
              id="link-input"
            />
            <button
              className="bg-gray-100 px-2 rounded text-sm"
              onClick={() => {
                const el = document.getElementById("link-input") as HTMLInputElement;
                if (el?.value) addLink(el.value.startsWith("http") ? el.value : `https://${el.value}`);
              }}
            >
              Add
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
