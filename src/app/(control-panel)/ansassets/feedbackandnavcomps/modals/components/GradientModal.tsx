"use client";

import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from "@mui/material";

interface SoftGradientModalProps {
  open: boolean;
  onClose: () => void;
}

export function SoftGradientModal({ open, onClose }: SoftGradientModalProps) {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="sm"
      fullWidth
      PaperProps={{
        className:
          "rounded-2xl bg-gradient-to-br from-blue-600 to-purple-700 text-white",
      }}
    >
      <DialogTitle className="font-semibold">
        Soft Gradient Modal
      </DialogTitle>

      <DialogContent className="text-white/90">
        High-impact modal for important actions or promotions.
      </DialogContent>

      <DialogActions className="p-4">
        <Button variant="contained" onClick={onClose}>
          Got it
        </Button>
      </DialogActions>
    </Dialog>
  );
}
