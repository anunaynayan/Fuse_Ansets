"use client";

import React from "react";
import { Box, CircularProgress, Typography, useTheme } from "@mui/material";

interface CircularProgressBarProps {
  value: number;
  size?: number;
  label?: string;
}

const CircularProgressBar: React.FC<CircularProgressBarProps> = ({ value, size = 80, label }) => {
  const theme = useTheme();

  return (
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", mb: 4 }}>
      {label && (
        <Typography variant="body1" sx={{ fontWeight: 600, mb: 1 }}>
          {label}
        </Typography>
      )}
      <Box sx={{ position: "relative", display: "inline-flex" }}>
        <CircularProgress
          variant="determinate"
          value={value}
          size={size}
          thickness={6}
          sx={{
            color: theme.palette.success.main,
          }}
        />
        <Box
          sx={{
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            position: "absolute",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography variant="caption" component="div" color="textSecondary">
            {Math.round(value)}%
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default CircularProgressBar;
