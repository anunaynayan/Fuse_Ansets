"use client";

import BaseSnackbar from "./BaseSnackbar";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import React from "react";

export type SuccessSnackbarProps = {
  visible?: boolean; // control from parent
  onClose?: () => void;
};

export default function SuccessSnackbar({ visible = false, onClose }: SuccessSnackbarProps) {
  return (
    <BaseSnackbar
      visible={visible}
      message={<span>Saved successfully</span>}
      icon={<CheckCircleOutlineIcon />}
      className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white"
      duration={3000}
      onClose={onClose}
      position="top-right"
    />
  );
}
