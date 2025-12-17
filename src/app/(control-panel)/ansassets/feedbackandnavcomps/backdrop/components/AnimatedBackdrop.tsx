"use client";

import { Backdrop } from "@mui/material";
import { motion } from "framer-motion";
import { useEffect } from "react";

export function AnimatedBackdrop({
  open,
  onClose,
}: {
  open: boolean;
  onClose?: () => void;
}) {
    useEffect(() => {
      if (open) {
        const timer = setTimeout(() => onClose(), 2000);
        return () => clearTimeout(timer);
      }
    }, [open, onClose]);
  return (
    <Backdrop
      open={open}
      onClick={onClose}
      sx={{
        backgroundColor: "rgba(0,0,0,0.6)",
        zIndex: (theme) => theme.zIndex.modal + 1,
      }}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.25 }}
        className="text-white text-center"
      >
        <div className="text-lg font-semibold">Hold on…</div>
        <div className="text-sm opacity-70">
          This won’t take long
        </div>
      </motion.div>
    </Backdrop>
  );
}
