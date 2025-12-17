
"use client";

import React, { useEffect, useState } from "react";
import { Box, Typography, Zoom, useMediaQuery, useTheme, Avatar } from "@mui/material";

export interface ResponsiveBadgeProps {
  label?: number | string | null;
  max?: number;
  variant?: "default"
  | "secondary"
  | "success"
  | "warning"
  | "destructive"
  | "outline"
  | "dot";
  position?: "top-right" | "top-left" | "bottom-right" | "bottom-left";
  color?: string;
  backgroundColor?: string;
  hideZero?: boolean;
  size?: "small" | "medium";
  children?: React.ReactNode;
}

export default function Badge({
  label = null,
  max = 99,
  variant = "default",
  position = "top-right",
  color,
  backgroundColor,
  hideZero = true,
  size = "medium",
  children,
}: ResponsiveBadgeProps) {
  const theme = useTheme();
  const isSmall = useMediaQuery("(max-width:600px)");
  const [animate, setAnimate] = useState(false);

  const badgeColor = color || "#fff";
  const bgColor = backgroundColor || theme.palette.primary.main;

  const displayLabel =
    typeof label === "number" && label > max ? `${max}+` : label;

  const shouldHide =
    (hideZero && (label === 0 || label === "0")) || label === null;

  useEffect(() => {
    if (!shouldHide) {
      setAnimate(true);
      const timer = setTimeout(() => setAnimate(false), 350);
      return () => clearTimeout(timer);
    }
  }, [label]);

  const getPosition = () => {
    const offset = size === "small" ? "30%" : "35%";

    switch (position) {
      case "top-left":
        return { top: 0, left: 0, transform: `translate(-${offset}, -${offset})` };
      case "top-right":
        return { top: 0, right: 0, transform: `translate(${offset}, -${offset})` };
      case "bottom-left":
        return { bottom: 0, left: 0, transform: `translate(-${offset}, ${offset})` };
      case "bottom-right":
        return { bottom: 0, right: 0, transform: `translate(${offset}, ${offset})` };
      default:
        return { top: 0, right: 0 };
    }
  };

  const badgeSize = {
    width: size === "small" ? (isSmall ? 12 : 14) : isSmall ? 16 : 20,
    height: size === "small" ? (isSmall ? 12 : 14) : isSmall ? 16 : 20,
    fontSize: size === "small" ? (isSmall ? "8px" : "9px") : isSmall ? "10px" : "11px",
  };

  return (
    <Box sx={{ position: "relative", display: "inline-flex", alignItems: "center" }}>
      {children}

      <Zoom in={!shouldHide}>
        <Box
          aria-label={`badge-count-${displayLabel}`}
          sx={{
            position: "absolute",
            pointerEvents: "none",
            ...getPosition(),
            backgroundColor: bgColor,
            color: badgeColor,
            borderRadius: "999px",
            minWidth: variant === "dot" ? badgeSize.width / 1.4 : badgeSize.width,
            height: badgeSize.height,
            px: variant === "dot" ? 0 : 0.8,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: badgeSize.fontSize,
            fontWeight: 700,
            border: "2px solid white",
            transition: "transform 0.25s ease-in-out",
            transform: animate ? "scale(1.3)" : "scale(1)",
            boxShadow: "0 2px 6px rgba(0,0,0,0.25)",
          }}
        >
          {variant === "default" && displayLabel}
        </Box>
      </Zoom>
    </Box>
  );
}
