"use client";

import { Drawer, Box, Typography } from "@mui/material";

export function RightDrawer({ open, onClose }) {
  return (
    <Drawer anchor="right" open={open} onClose={onClose}>
      <Box className="w-80 p-6">
        <Typography variant="h6">Details Panel</Typography>
        <Typography className="text-gray-600 mt-2">
          Selected item details appear here.
        </Typography>
      </Box>
    </Drawer>
  );
}
