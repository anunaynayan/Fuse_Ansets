"use client";

import React from "react";
import { Box, LinearProgress, Typography, useTheme } from "@mui/material";

interface LinearIndeterminateProps {
  label?: string;
}

const LinearIndeterminate: React.FC<LinearIndeterminateProps> = ({ label }) => {
  const theme = useTheme();

  return (
    <Box sx={{ width: "100%", mb: 4 }}>
      {label && (
        <Typography variant="body1" sx={{ fontWeight: 600, mb: 1 }}>
          {label}
        </Typography>
      )}

      <LinearProgress
        variant="indeterminate"
        sx={{
          height: 12,
          borderRadius: 20,
          backgroundColor: theme.palette.grey[300],
          "& .MuiLinearProgress-bar": {
            background: `linear-gradient(90deg, ${theme.palette.secondary.main}, ${theme.palette.primary.main})`,
          },
        }}
      />
    </Box>
  );
};

export default LinearIndeterminate;
