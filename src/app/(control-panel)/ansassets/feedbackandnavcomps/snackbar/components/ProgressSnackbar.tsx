"use client";

import BaseSnackbar from "./BaseSnackbar";
import React, { useEffect, useState } from "react";

export default function ProgressSnackbar({ onClose }: { onClose?: () => void }) {
  // stays open by default; closes after simulating progress
  const [progressDone, setProgressDone] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setProgressDone(true), 3800);
    const t2 = setTimeout(() => onClose?.(), 4200);
    return () => {
      clearTimeout(t);
      clearTimeout(t2);
    };
  }, [onClose]);

  return (
    <BaseSnackbar
      message={<span>Uploading files...</span>}
      icon={<div className="w-4 h-4 border-2 border-white rounded-full animate-spin" />}
      className="bg-slate-800 text-white"
      duration={0}
      onClose={onClose}
      position="top-left"
      progress={!progressDone}
    />
  );
}