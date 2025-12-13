"use client";

import BaseSnackbar from "./BaseSnackbar";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import React from "react";

export default function ErrorSnackbar({ onClose }: { onClose?: () => void }) {
  return (
    <BaseSnackbar
      message={<span>Failed to save changes</span>}
      icon={<ErrorOutlineIcon />}
      className="bg-gradient-to-r from-rose-600 to-rose-500 text-white"
      duration={3500}
      onClose={onClose}
      position="bottom-right"
    />
  );
}