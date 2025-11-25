"use client";
import { useState, useRef, useEffect } from "react";
import { Box, ButtonBase } from "@mui/material";

interface TabItem {
  label: string;
  content: React.ReactNode;
}

interface CustomTabsProps {
  tabs: TabItem[];
  orientation?: "horizontal" | "vertical";
  lazy?: boolean;
  scrollable?: boolean;
  className?: string;
}

export default function CustomTabs({
  tabs = [],
  orientation = "horizontal",
  lazy = false,
  scrollable = true,
  className = "",
}: CustomTabsProps) {
  const [active, setActive] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const indicatorRef = useRef<HTMLDivElement | null>(null);
  const isVertical = orientation === "vertical";

  // --------------------------
  // Move Indicator (Underline / Side Bar)
  // --------------------------
  const updateIndicator = () => {
    const activeTab = tabRefs.current[active];
    const indicator = indicatorRef.current;
    if (!activeTab || !indicator) return;

    const rect = activeTab.getBoundingClientRect();
    const parentRect = activeTab.parentElement!.getBoundingClientRect();

    if (isVertical) {
      // Side bar indicator (vertical)
      indicator.style.height = rect.height + "px";
      indicator.style.transform = `translateY(${rect.top - parentRect.top}px)`;
    } else {
      // Underline indicator (horizontal)
      indicator.style.width = rect.width + "px";
      indicator.style.transform = `translateX(${rect.left - parentRect.left}px)`;
    }
  };

  useEffect(() => {
    updateIndicator();
    window.addEventListener("resize", updateIndicator);
    return () => window.removeEventListener("resize", updateIndicator);
  }, [active]);

  // --------------------------
  // Keyboard Navigation
  // --------------------------
  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    let nextIndex = index;

    if (!isVertical) {
      if (e.key === "ArrowRight") nextIndex = (index + 1) % tabs.length;
      if (e.key === "ArrowLeft") nextIndex = (index - 1 + tabs.length) % tabs.length;
    } else {
      if (e.key === "ArrowDown") nextIndex = (index + 1) % tabs.length;
      if (e.key === "ArrowUp") nextIndex = (index - 1 + tabs.length) % tabs.length;
    }

    if (e.key === "Home") nextIndex = 0;
    if (e.key === "End") nextIndex = tabs.length - 1;

    if (["Enter", " "].includes(e.key)) {
      setActive(index);
      return;
    }

    if (nextIndex !== index) {
      tabRefs.current[nextIndex]?.focus();
      setActive(nextIndex);
    }
  };

  return (
    <Box
      className={`flex w-full ${isVertical ? "flex-row" : "flex-col"} ${className}`}
    >
      {/* ---------------- TABS LIST ---------------- */}
      <div
        role="tablist"
        aria-orientation={orientation}
        className={`
          relative flex 
          ${isVertical ? "flex-col min-w-[160px] border-r" : "flex-row border-b"}
          border-gray-300
          ${scrollable ? "overflow-x-auto scrollbar-thin scrollbar-thumb-gray-300" : ""}
        `}
      >
        {/* Indicator */}
        <div
          ref={indicatorRef}
          className={`
            absolute bg-green-600 transition-all duration-300 rounded-full
            ${isVertical ? "w-1 left-0" : "h-1 bottom-0"}
          `}
        />

        {tabs.map((tab, index) => (
          <ButtonBase
            key={index}
            role="tab"
            id={`tab-${index}`}
            aria-selected={active === index}
            aria-controls={`panel-${index}`}
            ref={(el) => (tabRefs.current[index] = el)}
            tabIndex={active === index ? 0 : -1}
            onKeyDown={(e) => handleKeyDown(e, index)}
            onClick={() => setActive(index)}
            className={`
              px-4 py-2 text-sm font-medium whitespace-nowrap
              transition-all outline-none
              ${active === index ? "text-green-600" : "text-gray-600 hover:text-black"}
            `}
          >
            {tab.label}
          </ButtonBase>
        ))}
      </div>

      {/* ---------------- TAB PANELS ---------------- */}
      <Box className="flex-1 p-4">
        {tabs.map((tab, index) => (
          <div
            key={index}
            id={`panel-${index}`}
            role="tabpanel"
            aria-labelledby={`tab-${index}`}
            hidden={active !== index}
            className="w-full"
          >
            {!lazy || active === index ? tab.content : null}
          </div>
        ))}
      </Box>
    </Box>
  );
}
