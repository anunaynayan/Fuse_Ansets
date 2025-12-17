"use client";

import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from "@mui/material";
import { motion } from "framer-motion";

interface AnimatedModalProps {
  open: boolean;
  onClose: () => void;
}

export function AnimatedModal({ open, onClose }: AnimatedModalProps) {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="sm"
      fullWidth
      PaperProps={{
        component: motion.div,
        initial: { opacity: 0, scale: 0.9, y: 20 },
        animate: { opacity: 1, scale: 1, y: 0 },
        exit: { opacity: 0, scale: 0.95 },
        transition: { duration: 0.25 },
        className: "rounded-2xl",
      }}
    >
      <DialogTitle className="font-semibold">
        Animated Modal
      </DialogTitle>

      <DialogContent className="text-gray-600">
        Smooth entrance animation using Framer Motion.
      </DialogContent>

      <DialogActions className="p-4">
        <Button onClick={onClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
}
