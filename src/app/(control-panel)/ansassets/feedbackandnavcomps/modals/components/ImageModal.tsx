"use client";

import { Dialog, DialogContent, Button } from "@mui/material";

interface ImageModalProps {
  open: boolean;
  onClose: () => void;
}

export function ImageModal({ open, onClose }: ImageModalProps) {
  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <DialogContent className="p-0 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
          alt="Demo"
          className="w-full h-64 object-cover"
        />

        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2">
            Image Modal
          </h3>
          <p className="text-gray-600 mb-4">
            Perfect for announcements, promotions, or onboarding.
          </p>

          <Button variant="contained" onClick={onClose}>
            Continue
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
