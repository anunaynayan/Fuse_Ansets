"use client";

import BaseSnackbar from "./BaseSnackbar";
import WarningAmberOutlinedIcon from "@mui/icons-material/WarningAmberOutlined";
import React from "react";

export default function WarningSnackbar({ onClose }: { onClose?: () => void }) {
  return (
    <BaseSnackbar
      message={<span>Warning: Check your inputs</span>}
      icon={<WarningAmberOutlinedIcon />}
      className="bg-gradient-to-r from-amber-500 to-amber-600 text-black"
      duration={3000}
      onClose={onClose}
      position="top-center"
    />
  );
}