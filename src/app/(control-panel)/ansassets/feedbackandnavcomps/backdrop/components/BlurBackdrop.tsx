"use client";

import { Backdrop, Box, Typography } from "@mui/material";
import { useEffect } from "react";

export function BlurBackdrop({
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
        backdropFilter: "blur(8px)",
        backgroundColor: "rgba(0,0,0,0.3)",
        zIndex: (theme) => theme.zIndex.modal + 1,
      }}
    >
      <Box className="text-center text-white">
        <Typography variant="h6">Loading</Typography>
        <Typography className="opacity-70 text-sm">
          Please wait a moment
        </Typography>
      </Box>
    </Backdrop>
  );
}
