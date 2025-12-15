"use client";

import BaseSnackbar from "./BaseSnackbar";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import React from "react";

export default function SuccessSnackbar({ onClose }: { onClose?: () => void }) {
  return (
    <BaseSnackbar
      message={<span>Saved successfully</span>}
      icon={<CheckCircleOutlineIcon />}
      className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white"
      duration={3000}
      onClose={onClose}
      position="top-right"
    />
  );
}
