"use client";

import { useEffect } from "react";
import { Backdrop, Box, LinearProgress, Typography } from "@mui/material";

interface ProgressBackdropProps {
  open: boolean;
  onClose: () => void;       // Close handler
  progress?: number;         // 0–100 (optional)
  message?: string;
}

export function ProgressBackdrop({
  open,
  onClose,
  progress,
  message = "Processing…",
}: ProgressBackdropProps) {
  const isIndeterminate = typeof progress !== "number";

  // Auto-close after 2 seconds when open
  useEffect(() => {
    if (open) {
      const timer = setTimeout(() => onClose(), 2000);
      return () => clearTimeout(timer);
    }
  }, [open, onClose]);

  return (
    <Backdrop
      open={open}
      onClick={onClose} // click-to-close
      sx={{
        zIndex: (theme) => theme.zIndex.modal + 1,
        backgroundColor: "rgba(0,0,0,0.6)",
      }}
    >
      <Box className="bg-white dark:bg-neutral-900 p-6 rounded-2xl w-[320px] shadow-xl">
        <Typography variant="subtitle1" className="mb-4 font-semibold">
          {message}
        </Typography>

        <LinearProgress
          variant={isIndeterminate ? "indeterminate" : "determinate"}
          value={progress}
        />

        {!isIndeterminate && (
          <Typography className="mt-2 text-sm text-gray-500 text-right">
            {progress}%
          </Typography>
        )}
      </Box>
    </Backdrop>
  );
}
