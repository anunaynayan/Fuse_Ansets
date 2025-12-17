"use client";

import { Backdrop, Box, Typography } from "@mui/material";
import { useEffect } from "react";

export function GradientBackdrop({
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
        background:
          "linear-gradient(135deg, rgba(59,130,246,0.7), rgba(139,92,246,0.7))",
        zIndex: (theme) => theme.zIndex.modal + 1,
      }}
    >
      <Box className="text-white text-center">
        <Typography variant="h6">Processing</Typography>
        <Typography className="text-sm opacity-80">
          Securing your request
        </Typography>
      </Box>
    </Backdrop>
  );
}
