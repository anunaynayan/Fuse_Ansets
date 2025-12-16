"use client";

import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from "@mui/material";

interface BorderedModalProps {
  open: boolean;
  onClose: () => void;
}

export function BorderedModal({ open, onClose }: BorderedModalProps) {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="sm"
      fullWidth
      PaperProps={{
        className:
          "rounded-2xl border-2 border-gray-300 shadow-xl",
      }}
    >
      <DialogTitle className="font-semibold">
        Bordered Modal
      </DialogTitle>

      <DialogContent className="text-gray-600">
        Subtle bordered modal for form flows and dashboards.
      </DialogContent>

      <DialogActions className="p-4">
        <Button onClick={onClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
}
