"use client";

import { Drawer, Box, Typography } from "@mui/material";

export function GlassDrawer({ open, onClose }) {
  return (
    <Drawer
      anchor="left"
      open={open}
      onClose={onClose}
      PaperProps={{
        className:
          "backdrop-blur-xl bg-white/70 dark:bg-black/60",
      }}
    >
      <Box className="w-72 p-6">
        <Typography variant="h6">Glass Drawer</Typography>
        <Typography className="text-gray-600 mt-2">
          Frosted glass effect UI.
        </Typography>
      </Box>
    </Drawer>
  );
}
