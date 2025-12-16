"use client";

import React from "react";
import { motion } from "framer-motion";

export default function AnimatedBanner() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="w-full rounded-xl bg-emerald-50 border border-emerald-200 p-4"
    >
      <p className="text-sm text-emerald-900">
        ✅ Your changes were saved successfully.
      </p>
    </motion.div>
  );
}
