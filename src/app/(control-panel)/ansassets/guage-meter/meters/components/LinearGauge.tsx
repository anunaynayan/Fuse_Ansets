// components/LinearGauge.tsx
"use client";

import { Card, CardContent, Typography, LinearProgress, linearProgressClasses } from "@mui/material";
import { styled } from "@mui/material/styles";

interface LinearGaugeProps {
  value: number; // between 0 and 100
  label?: string;
  color?: string;
}

const StyledLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 15,
  borderRadius: 10,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[300],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 10,
    background: "linear-gradient(to right, #00C9A7, #92FE9D)", // nice gauge look
  },
}));

export default function LinearGauge({ value, label }: LinearGaugeProps) {
  return (
    <Card sx={{ p: 2 }}>
      <Typography variant="h6" gutterBottom>
        {label || "Linear Gauge"}
      </Typography>
      <StyledLinearProgress variant="determinate" value={value} />
      <Typography variant="body2" sx={{ mt: 1, textAlign: "right" }}>
        {value}%
      </Typography>
    </Card>
  );
}
