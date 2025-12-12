"use client";

import { Box, CircularProgress, Typography } from "@mui/material";

export default function SpinnerLoader() {
  return (
    <Box
      sx={{
        height: "100%",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: 2,
        py: 4,
      }}
    >
      <CircularProgress size={45} thickness={4} />
      <Typography color="text.secondary">Loading...</Typography>
    </Box>
  );
}
