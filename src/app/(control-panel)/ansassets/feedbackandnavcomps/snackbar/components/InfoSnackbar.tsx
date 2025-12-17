"use client";

import BaseSnackbar from "./BaseSnackbar";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import React from "react";

export default function InfoSnackbar({ onClose }: { onClose?: () => void }) {
  return (
    <BaseSnackbar
      message={<span>Info: New update available</span>}
      icon={<InfoOutlinedIcon />}
      className="bg-gradient-to-r from-sky-500 to-sky-600 text-white"
      duration={2800}
      onClose={onClose}
      position="bottom-center"
    />
  );
}