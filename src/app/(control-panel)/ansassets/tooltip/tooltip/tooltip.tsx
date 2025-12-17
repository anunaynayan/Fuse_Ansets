
"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";
import { useTheme } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export type TooltipPosition = "top" | "bottom" | "left" | "right";
export type TooltipTrigger = "hover" | "click" | "manual";

interface CustomTooltipProps {
  title: React.ReactNode; // content inside tooltip (string | JSX)
  children: React.ReactNode; // the element which triggers tooltip
  position?: TooltipPosition;
  delay?: number; // ms before showing on hover
  hideDelay?: number; // ms before hiding on leave
  width?: number | string;
  trigger?: TooltipTrigger;
  // Controlled props
  visible?: boolean;
  onOpen?: () => void;
  onClose?: () => void;
  // extra
  className?: string;
  id?: string;
  maxWidth?: number | string;
}


const CustomTooltip: React.FC<CustomTooltipProps> = ({
  title,
  children,
  position = "top",
  delay = 200,
  hideDelay = 100,
  width = 260,
  trigger = "hover",
  visible: controlledVisible,
  onOpen,
  onClose,
  className,
  id,
  maxWidth = "90vw",
}) => {
  const theme = useTheme();
  const containerRef = useRef<HTMLDivElement | null>(null);
  const showTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const hideTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const longPressTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const isControlled = typeof controlledVisible === "boolean";
  const [openInternal, setOpenInternal] = useState(false);
  const open = isControlled ? controlledVisible! : openInternal;

  // Sync controlled callbacks
  const setOpen = (val: boolean) => {
    if (!isControlled) setOpenInternal(val);
    if (val) onOpen?.(); else onClose?.();
  };

  // Clear timers helper
  const clearTimers = () => {
    if (showTimer.current) {
      clearTimeout(showTimer.current);
      showTimer.current = null;
    }
    if (hideTimer.current) {
      clearTimeout(hideTimer.current);
      hideTimer.current = null;
    }
    if (longPressTimer.current) {
      clearTimeout(longPressTimer.current);
      longPressTimer.current = null;
    }
  };

  // Show/hide handlers (for hover)
  const handleShow = () => {
    clearTimers();
    showTimer.current = setTimeout(() => setOpen(true), delay);
  };
  const handleHide = () => {
    clearTimers();
    hideTimer.current = setTimeout(() => setOpen(false), hideDelay);
  };

  // Click toggles (for click trigger)
  const handleToggle = (ev?: React.MouseEvent) => {
    ev?.stopPropagation();
    clearTimers();
    setOpen(!open);
  };

  // Outside click & ESC close
  useEffect(() => {
    if (!open) return;

    const onDocClick = (e: MouseEvent) => {
      const el = containerRef.current;
      if (!el) return;
      if (!el.contains(e.target as Node)) setOpen(false);
    };

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };

    document.addEventListener("mousedown", onDocClick);
    document.addEventListener("touchstart", onDocClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDocClick);
      document.removeEventListener("touchstart", onDocClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [open, containerRef.current]);

  // Mobile long-press to show tooltip (when trigger is hover)
  // long press time = 500ms
  const handleTouchStart = () => {
    if (trigger !== "hover") return;
    longPressTimer.current = setTimeout(() => setOpen(true), 500);
  };
  const handleTouchEnd = () => {
    if (trigger !== "hover") return;
    if (longPressTimer.current) {
      clearTimeout(longPressTimer.current);
      longPressTimer.current = null;
    }
  };

  // Arrow fill & stroke based on theme
  const bgColor =
    theme.palette.mode === "dark"
      ? "rgba(40,40,40,0.95)"
      : (theme.palette.background.paper as string);
  const borderColor = theme.palette.divider;

  // Motion variants
  const variants = {
    hidden: { opacity: 0, scale: 0.95, y: position === "top" ? 6 : -6 },
    visible: { opacity: 1, scale: 1, y: 0 },
    exit: { opacity: 0, scale: 0.95, y: position === "top" ? 6 : -6 },
  };

  // position classes for tooltip & arrow container
  const posClasses = {
    top: "bottom-full left-1/2 -translate-x-1/2 mb-3",
    bottom: "top-full left-1/2 -translate-x-1/2 mt-3",
    left: "right-full top-1/2 -translate-y-1/2 mr-3",
    right: "left-full top-1/2 -translate-y-1/2 ml-3",
  }[position];

  // arrow rotation / placement (SVG transform)
  const arrowTransform = {
    top: "rotate(0)",
    bottom: "rotate(180)",
    left: "rotate(90)",
    right: "rotate(-90)",
  }[position];

  // Accessibility id
  const tooltipId = id ?? `custom-tooltip-${Math.random().toString(36).slice(2, 9)}`;

  return (
    <Box
      component="span"
      ref={containerRef}
      className={clsx("relative inline-block", className)}
      // events: hover only attach when trigger is hover
      onMouseEnter={trigger === "hover" ? handleShow : undefined}
      onMouseLeave={trigger === "hover" ? handleHide : undefined}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      // click: if trigger click, clicking the child toggles the tooltip.
      onClick={trigger === "click" ? handleToggle : undefined}
      aria-describedby={tooltipId}
      // don't let pointer events inside tooltip bubble cause parent hide immediately
    >
      {children}

      <AnimatePresence>
        {open && (
          <motion.div
            key="tooltip"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={variants}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className={clsx("absolute z-[9999] max-w-[95vw]", posClasses)}
            style={{ width: "auto", pointerEvents: "auto" }}
            // prevent mouse events inside tooltip from immediately hiding when trigger=hover
            onMouseEnter={trigger === "hover" ? clearTimers : undefined}
            onMouseLeave={trigger === "hover" ? handleHide : undefined}
          >
            {/* arrow + box wrapper */}
            <Box
              sx={{
                display: "flex",
                flexDirection:
                  position === "top" || position === "bottom" ? "column" : "row",
                alignItems: "center",
                justifyContent: "center",
                gap: 0,
                // pointerEvents: "none", // keep pointer events for clickable tooltips
              }}
            >
              {/* When position is top, arrow should be below element so arrow goes above tooltip box — we place arrow first/second accordingly */}
              
              {position === "bottom" || position === "right" ? null : (
                <svg
                  width="16"
                  height="8"
                  viewBox="0 0 16 8"
                  style={{
                    transform: arrowTransform,
                    transformOrigin: "center",
                    alignSelf: "center",
                    marginBottom: position === "top" ? 0 : 0,
                    pointerEvents: "none",
                  }}
                >
                  {/* Outlined arrow: stroke + fill same as Paper */}
                  <path
                    d="M8 0 L16 8 L0 8 Z"
                    fill={bgColor}
                    stroke={borderColor}
                    strokeWidth={1}
                  />
                </svg>
              )}

              <Paper
                elevation={6}
                sx={{
                  width,
                  maxWidth,
                  borderRadius: 1.25,
                  p: 1.5,
                  bgcolor: bgColor,
                  border: `1px solid ${borderColor}`,
                  boxShadow: theme.shadows[6],
                  // to make sure the arrow stroke aligns with the border-radius visually,
                  // the arrow sits flush with the box; small gap can be adjusted if needed.
                }}
                role="tooltip"
                id={tooltipId}
              >
                {typeof title === "string" ? (
                  <Typography variant="body2" sx={{ fontSize: 13, lineHeight: 1.4 }}>
                    {title}
                  </Typography>
                ) : (
                  title
                )}
              </Paper>

              {/* arrow for bottom/right placement */}
              {position === "bottom" || position === "right" ? (
                <svg
                  width="16"
                  height="8"
                  viewBox="0 0 16 8"
                  style={{
                    transform: arrowTransform,
                    transformOrigin: "center",
                    alignSelf: "center",
                    marginTop: position === "bottom" ? 0 : 0,
                    pointerEvents: "none",
                  }}
                >
                  <path
                    d="M8 0 L16 8 L0 8 Z"
                    fill={bgColor}
                    stroke={borderColor}
                    strokeWidth={1}
                  />
                </svg>
              ) : null}
            </Box>
          </motion.div>
        )}
      </AnimatePresence>
    </Box>
  );
};

export default CustomTooltip;
