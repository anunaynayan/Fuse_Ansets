"use client";

import { Backdrop, Box, Typography } from "@mui/material";
import { useEffect } from "react";

export function ImageBackdrop({
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
        backgroundImage:
          "url(https://images.unsplash.com/photo-1522199710521-72d69614c702)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        zIndex: (theme) => theme.zIndex.modal + 1,
      }}
    >
      <Box className="bg-black/50 p-6 rounded-xl text-white">
        <Typography variant="h6">Uploading Files</Typography>
        <Typography className="text-sm opacity-80">
          Large files may take time
        </Typography>
      </Box>
    </Backdrop>
  );
}
