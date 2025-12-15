"use client";

import React from "react";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import WarningAmberOutlinedIcon from "@mui/icons-material/WarningAmberOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { motion } from "framer-motion";

import BaseSnackbar from "./BaseSnackbar";
import { createSnackbar } from "./createSnackbar";

/* -------------------------------------------------
   Standard variants (factory-based)
-------------------------------------------------- */

export const SuccessSnackbar = createSnackbar({
  defaultMessage: "Saved successfully",
  defaultClassName:
    "bg-gradient-to-r from-emerald-500 to-emerald-600 text-white",
  defaultIcon: <CheckCircleOutlineIcon />,
});

export const ErrorSnackbar = createSnackbar({
  defaultMessage: "Failed to save changes",
  defaultClassName:
    "bg-gradient-to-r from-rose-600 to-rose-500 text-white",
  defaultIcon: <ErrorOutlineIcon />,
  defaultDuration: 3500,
});

export const WarningSnackbar = createSnackbar({
  defaultMessage: "Warning: Check your inputs",
  defaultClassName:
    "bg-gradient-to-r from-amber-500 to-amber-600 text-black",
  defaultIcon: <WarningAmberOutlinedIcon />,
});

export const InfoSnackbar = createSnackbar({
  defaultMessage: "Info: New update available",
  defaultClassName:
    "bg-gradient-to-r from-sky-500 to-sky-600 text-white",
  defaultIcon: <InfoOutlinedIcon />,
  defaultDuration: 2800,
});

/* -------------------------------------------------
   Advanced / visual variants
   (kept explicit — NOT factory)
-------------------------------------------------- */

export function GlowSnackbar(props: any) {
  return (
    <BaseSnackbar
      message="Glow — operation successful"
      icon={<CheckCircleOutlineIcon />}
      className="bg-emerald-600 text-white shadow-[0_6px_30px_rgba(16,185,129,0.45)] border border-emerald-400/30"
      {...props}
    />
  );
}

export function FloatingSnackbar(props: any) {
  return (
    <BaseSnackbar
      message="Floating — subtle shadow"
      className="bg-gradient-to-r from-slate-700 to-slate-800 text-white transform-gpu hover:-translate-y-0.5 transition"
      position="bottom-center"
      {...props}
    />
  );
}

export function BorderPulseSnackbar(props: any) {
  return (
    <BaseSnackbar
      message="Border pulse — attention"
      icon={<InfoOutlinedIcon />}
      className="bg-slate-900 text-white border-2 border-white/6 relative overflow-visible"
      position="bottom-left"
      duration={3500}
      {...props}
    />
  );
}

export function SlideSnackbar(props: any) {
  return (
    <motion.div
      initial={{ x: 300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 300, opacity: 0 }}
      transition={{ type: "spring", stiffness: 90 }}
    >
      <BaseSnackbar
        message="Slide-in notification"
        className="bg-indigo-600 text-white"
        {...props}
      />
    </motion.div>
  );
}
