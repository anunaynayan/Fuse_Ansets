"use client";

import React from "react";
import { motion } from "framer-motion";
import BaseSnackbar from "./BaseSnackbar";

export function SlideSnackbar({ onClose }: { onClose?: () => void }) {
  return (
    <motion.div initial={{ x: 300, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: 300, opacity: 0 }} transition={{ type: "spring", stiffness: 90 }}>
      <BaseSnackbar
        message={<span>Slide-in notification</span>}
        className="bg-indigo-600 text-white"
        duration={3000}
        onClose={onClose}
        position="top-right"
      />
    </motion.div>
  );
}