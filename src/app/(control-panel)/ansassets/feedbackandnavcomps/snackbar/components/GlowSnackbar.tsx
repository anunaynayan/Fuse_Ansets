"use client";

import BaseSnackbar from "./BaseSnackbar";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import React from "react";

export function GlowSnackbar({ onClose }: { onClose?: () => void }) {
  return (
    <BaseSnackbar
      message={<span>Glow — operation successful</span>}
      icon={<CheckCircleOutlineIcon />}
      className="bg-emerald-600 text-white shadow-[0_6px_30px_rgba(16,185,129,0.45)] border border-emerald-400/30"
      duration={3000}
      onClose={onClose}
      position="top-right"
    />
  );
}