"use client";

import { Drawer, Box, Typography, Alert } from "@mui/material";

export function TopDrawer({ open, onClose }) {
  return (
    <Drawer anchor="top" open={open} onClose={onClose}>
      <Box className="p-6">
        <Alert severity="info">
          Scheduled maintenance tonight at 11 PM.
        </Alert>
      </Box>
    </Drawer>
  );
}
