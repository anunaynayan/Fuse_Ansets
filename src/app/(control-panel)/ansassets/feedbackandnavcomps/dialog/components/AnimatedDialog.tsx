"use client";

import React from "react";
import { Dialog } from "@mui/material";
import { motion } from "framer-motion";
import { BaseDialog, BaseDialogProps } from "./BaseDialog";

export const AnimatedDialog = ({ open, onClose, ...props }: BaseDialogProps) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth="sm"
      PaperProps={{
        component: motion.div,
        initial: { opacity: 0, scale: 0.9, y: 20 },
        animate: { opacity: 1, scale: 1, y: 0 },
        exit: { opacity: 0, scale: 0.95, y: 10 },
        transition: { duration: 0.25 },
        className: "bg-white rounded-2xl p-2 shadow-xl",
      }}
    >
      <BaseDialog open={open} onClose={onClose} {...props} />
    </Dialog>
  );
};
