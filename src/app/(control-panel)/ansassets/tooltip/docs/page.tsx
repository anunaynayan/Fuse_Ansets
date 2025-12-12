"use client";

import { Box, Typography } from "@mui/material";
import CodeBlock from "./codeblock";
import DocsLayout from "./docslayout";
import CustomTooltip from "../tooltip/tooltip";

export default function TooltipDocs() {
  return (
    <DocsLayout>
      {/* ------------------------ DESCRIPTION ------------------------ */}
      <Typography className="text-gray-700 dark:text-gray-100 mb-10 leading-relaxed">
        Tooltip is a small pop-up box that appears when a user hovers, focuses, or taps on an element. 
        It provides helpful information, labels, or hints without cluttering the UI. Tooltips help users 
        understand the purpose of buttons, icons, or UI elements more clearly.
      </Typography>

      {/* ------------------------ DEPENDENCIES ------------------------ */}
      <section id="dependencies" className="mb-16">
        <Typography variant="h4" className="font-semibold mb-4 text-gray-800 dark:text-gray-100">
          Dependencies & Technologies
        </Typography>

        <Typography className="text-gray-600 dark:text-gray-100 mb-4">
          These are the necessary dependencies and technologies for the Tooltip component:
        </Typography>

        <Typography variant="h6" className="font-semibold mb-2 text-gray-800 dark:text-gray-100">
          Required Dependencies:
        </Typography>

        <ul className="list-disc pl-6 text-gray-600 dark:text-gray-100 space-y-2">
          <li>@mui/material</li>
          <li>react</li>
          <li>framer-motion</li>
          <li>clsx</li>
        </ul>

        <Typography variant="body1" className="mt-4 mb-4 text-gray-600 dark:text-gray-100">
          Install:
        </Typography>

        <CodeBlock
          filename="Install Command"
          language="bash"
          code={`npm install @mui/material framer-motion clsx`}
        />
      </section>

      {/* ------------------------ TOOLTIP SECTION ------------------------ */}
      <section id="tooltip" className="mb-16">
        <Typography variant="h4" className="font-semibold mb-4 text-gray-900 dark:text-gray-100">
          Tooltip Example
        </Typography>

        <Typography className="text-gray-600 dark:text-gray-100 mb-4">
          This tooltip appears when you hover over the text below.
        </Typography>

        <Box className="mb-4 max-w-sm mx-auto">
          <CustomTooltip title="This is a tooltip message">
            <span className="px-3 py-2 bg-gray-200 dark:bg-gray-700 rounded cursor-pointer">
              Hover over me
            </span>
          </CustomTooltip>
        </Box>

        <CodeBlock
          filename="tooltip.tsx"
          language="tsx"
          code={String.raw`
"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";
import { useTheme } from "@mui/material/styles";

interface TooltipProps {
  title: React.ReactNode;
  children: React.ReactNode;
  disableTooltip?: boolean;
  enterDelay?: number;
  leaveDelay?: number;
  placement?: "top" | "bottom" | "left" | "right";
}

const Tooltip: React.FC<TooltipProps> = ({
  title,
  children,
  disableTooltip = false,
  enterDelay = 500,
  leaveDelay = 300,
  placement = "top",
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [portalElement, setPortalElement] = useState<HTMLDivElement | null>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const theme = useTheme();

  useEffect(() => {
    const portalDiv = document.createElement("div");
    portalDiv.className = "custom-tooltip-portal";
    document.body.appendChild(portalDiv);
    setPortalElement(portalDiv);

    return () => {
      document.body.removeChild(portalDiv);
    };
  }, []);

  const handleMouseEnter = () => {
    if (!disableTooltip) {
      setTimeout(() => setIsVisible(true), enterDelay);
    }
  };

  const handleMouseLeave = () => {
    setTimeout(() => setIsVisible(false), leaveDelay);
  };

  return (
    <div
      ref={wrapperRef}
      className="relative inline-block"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}

      {portalElement &&
        wrapperRef.current &&
        React.createPortal(
          <AnimatePresence>
            {isVisible && (
              <motion.div
                initial={{ opacity: 0, y: placement === "top" ? -6 : 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: placement === "top" ? -4 : 4 }}
                transition={{ duration: 0.18 }}
                className={clsx(
                  "px-3 py-1 rounded text-white text-sm shadow-lg fixed z-[9999]",
                  {
                    "bg-gray-800": true,
                  }
                )}
                style={{
                  top:
                    placement === "top"
                      ? wrapperRef.current.getBoundingClientRect().top - 40
                      : wrapperRef.current.getBoundingClientRect().bottom + 10,
                  left:
                    wrapperRef.current.getBoundingClientRect().left +
                    wrapperRef.current.getBoundingClientRect().width / 2 -
                    50,
                  width: "100px",
                }}
              >
                {title}
              </motion.div>
            )}
          </AnimatePresence>,
          portalElement
        )}
    </div>
  );
};

export default Tooltip;
`}
        />
      </section>
    </DocsLayout>
  );
}
