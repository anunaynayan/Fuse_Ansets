"use client";

import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from "@mui/material";

interface SimpleModalProps {
  open: boolean;
  onClose: () => void;
}

export function SimpleModal({ open, onClose }: SimpleModalProps) {
  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle className="font-semibold">
        Simple Modal
      </DialogTitle>

      <DialogContent className="text-gray-600">
        This is a clean, minimal modal suitable for confirmations
        or basic information.
      </DialogContent>

      <DialogActions className="p-4">
        <Button onClick={onClose}>Cancel</Button>
        <Button variant="contained" onClick={onClose}>
          Confirm
        </Button>
      </DialogActions>
    </Dialog>
  );
}
