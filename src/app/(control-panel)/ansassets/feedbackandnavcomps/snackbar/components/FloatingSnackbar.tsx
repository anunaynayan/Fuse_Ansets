"use client";

import React from "react";
import BaseSnackbar from "./BaseSnackbar";

export function FloatingSnackbar({ onClose }: { onClose?: () => void }) {
  return (
    <BaseSnackbar
      message={<span>Floating — subtle shadow</span>}
      className="bg-gradient-to-r from-slate-700 to-slate-800 text-white transform-gpu hover:-translate-y-0.5 transition"
      duration={3000}
      onClose={onClose}
      position="bottom-center"
    />
  );
}