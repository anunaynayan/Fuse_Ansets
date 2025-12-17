"use client";

import { Drawer, Box, Typography, Button } from "@mui/material";

export function LeftDrawer({ open, onClose }) {
  return (
    <Drawer anchor="left" open={open} onClose={onClose}>
      <Box className="w-72 p-6">
        <Typography variant="h6">Navigation</Typography>
        <Typography className="text-gray-600 mt-2">
          Dashboard · Projects · Settings
        </Typography>

        <Button
          variant="contained"
          fullWidth
          className="mt-6"
          onClick={onClose}
        >
          Close
        </Button>
      </Box>
    </Drawer>
  );
}
