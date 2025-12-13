"use client";

import BaseSnackbar from "./BaseSnackbar";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import React from "react";

export function BorderPulseSnackbar({ onClose }: { onClose?: () => void }) {
  return (
    <BaseSnackbar
      message={<span>Border pulse — attention</span>}
      icon={<InfoOutlinedIcon />}
      className="bg-slate-900 text-white border-2 border-white/6 relative overflow-visible"
      duration={3500}
      onClose={onClose}
      position="bottom-left"
    />
  );
}