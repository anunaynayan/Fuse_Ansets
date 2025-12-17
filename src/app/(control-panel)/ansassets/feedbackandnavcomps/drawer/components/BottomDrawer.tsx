"use client";

import { Drawer, Box, Typography, Button } from "@mui/material";

export function BottomDrawer({ open, onClose }) {
  return (
    <Drawer
      anchor="bottom"
      open={open}
      onClose={onClose}
      PaperProps={{
        className: "rounded-t-2xl",
      }}
    >
      <Box className="p-6">
        <Typography variant="h6">Quick Actions</Typography>

        <div className="mt-4 space-y-2">
          <Button fullWidth variant="outlined">
            Share
          </Button>
          <Button fullWidth variant="outlined">
            Duplicate
          </Button>
          <Button fullWidth color="error" variant="contained">
            Delete
          </Button>
        </div>
      </Box>
    </Drawer>
  );
}
