"use client";

import { Box, LinearProgress, Typography } from "@mui/material";

export default function LinearLoader() {
  return (
    <Box sx={{ width: "100%", py: 4 }}>
      <Typography
        variant="body2"
        sx={{ mb: 1, textAlign: "center", color: "text.secondary" }}
      >
        Loading…
      </Typography>
      <LinearProgress />
    </Box>
  );
}
