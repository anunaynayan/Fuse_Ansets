"use client";

import { Backdrop, CircularProgress } from "@mui/material";
import { useEffect } from "react";

export function SimpleBackdrop({
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
        color: "#fff",
        zIndex: (theme) => theme.zIndex.modal + 1,
      }}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  );
}
