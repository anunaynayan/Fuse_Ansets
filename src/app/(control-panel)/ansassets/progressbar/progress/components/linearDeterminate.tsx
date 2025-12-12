"use client";

import React from "react";
import { Box, LinearProgress, Typography, useTheme } from "@mui/material";

interface LinearDeterminateProps {
  value: number;
  label?: string;
}

const LinearDeterminate: React.FC<LinearDeterminateProps> = ({ value, label }) => {
  const theme = useTheme();

  return (
    <Box sx={{ width: "100%", mb: 4 }}>
      {label && (
        <Typography variant="body1" sx={{ fontWeight: 600, mb: 1 }}>
          {label}
        </Typography>
      )}

      <Box sx={{ position: "relative" }}>
        <LinearProgress
          variant="determinate"
          value={value}
          sx={{
            height: 12,
            borderRadius: 20,
            backgroundColor: theme.palette.grey[300],
            "& .MuiLinearProgress-bar": {
              background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.success.main})`,
              borderRadius: 20,
              transition: "width 1s ease-in-out",
            },
          }}
        />
        <Typography
          variant="caption"
          sx={{
            position: "absolute",
            top: "-25px",
            right: 0,
            fontWeight: 500,
            color: theme.palette.text.secondary,
          }}
        >
          {Math.round(value)}%
        </Typography>
      </Box>
    </Box>
  );
};

export default LinearDeterminate;
