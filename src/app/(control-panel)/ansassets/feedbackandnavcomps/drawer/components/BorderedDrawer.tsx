"use client";

import { Drawer, Box, Typography } from "@mui/material";

export function BorderedDrawer({ open, onClose }) {
  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
      PaperProps={{
        className: "border-l border-gray-200",
      }}
    >
      <Box className="w-96 p-6">
        <Typography variant="h6">Inspector</Typography>
        <Typography className="text-gray-600 mt-2">
          Structured and professional layout.
        </Typography>
      </Box>
    </Drawer>
  );
}
